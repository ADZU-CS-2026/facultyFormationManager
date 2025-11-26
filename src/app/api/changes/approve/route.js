import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { jwtVerify } from "jose";

// Verify JWT and get payload
async function verifyJwt(token) {
    const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);
    try {
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch {
        return null;
    }
}

// Helper function to apply a single change to the database
async function applyChange(connection, change) {
    const { table_name, record_id, action_type, new_values } = change;
    const parsedNewValues = typeof new_values === 'string' ? JSON.parse(new_values) : new_values;

    // Only allow operations on known tables
    const allowedTables = ['users', 'retreat_records', 'certificates'];
    if (!allowedTables.includes(table_name)) {
        throw new Error(`Invalid table: ${table_name}`);
    }

    switch (action_type) {
        case 'INSERT': {
            // Check if this is a complex user insert (with retreat records)
            if (table_name === 'users' && parsedNewValues.user) {
                return await applyUserInsert(connection, parsedNewValues);
            }

            // Standard simple insert
            const columns = Object.keys(parsedNewValues);
            const values = Object.values(parsedNewValues);
            const placeholders = columns.map(() => '?').join(', ');

            const query = `INSERT INTO ${table_name} (${columns.join(', ')}) VALUES (${placeholders})`;
            const [result] = await connection.execute(query, values);
            return { insertId: result.insertId };
        }

        case 'UPDATE': {
            if (!record_id) throw new Error('record_id required for UPDATE');

            // Filter out non-updatable fields (like retreat_type which is just for context)
            const nonUpdatableFields = ['retreat_type', 'id', 'created_at', 'updated_at'];
            const filteredValues = {};
            for (const [key, value] of Object.entries(parsedNewValues)) {
                if (!nonUpdatableFields.includes(key)) {
                    filteredValues[key] = value;
                }
            }

            const columns = Object.keys(filteredValues);
            if (columns.length === 0) {
                return { affectedRows: 0, message: 'No updatable fields' };
            }

            const values = Object.values(filteredValues);
            const setClause = columns.map(col => `${col} = ?`).join(', ');

            const query = `UPDATE ${table_name} SET ${setClause} WHERE id = ?`;
            values.push(record_id);

            const [result] = await connection.execute(query, values);
            return { affectedRows: result.affectedRows };
        }

        case 'DELETE': {
            if (!record_id) throw new Error('record_id required for DELETE');

            const query = `DELETE FROM ${table_name} WHERE id = ?`;
            const [result] = await connection.execute(query, [record_id]);
            return { affectedRows: result.affectedRows };
        }

        default:
            throw new Error(`Unknown action_type: ${action_type}`);
    }
}

// Helper function to apply a complex user insert (user + retreat_records)
async function applyUserInsert(connection, data) {
    const { user, school_year, retreat_types } = data;

    // Insert user
    const userColumns = Object.keys(user);
    const userValues = Object.values(user);
    const userPlaceholders = userColumns.map(() => '?').join(', ');

    const [userResult] = await connection.execute(
        `INSERT INTO users (${userColumns.join(', ')}) VALUES (${userPlaceholders})`,
        userValues
    );

    const newUserId = userResult.insertId;

    // Insert retreat records
    const retreatResults = [];
    for (const retreatType of retreat_types) {
        const [retreatResult] = await connection.execute(
            `INSERT INTO retreat_records (user_id, retreat_type, school_year) VALUES (?, ?, ?)`,
            [newUserId, retreatType, school_year]
        );
        retreatResults.push({ retreatType, insertId: retreatResult.insertId });
    }

    return {
        insertId: newUserId,
        retreatRecords: retreatResults
    };
}

// APPROVE BATCH
// Admin approves a pending batch and applies all changes
export async function POST(req) {
    const connection = await pool.getConnection();

    try {
        // Get token from cookies
        const accessToken = req.cookies.get("accessToken")?.value;
        if (!accessToken) {
            connection.release();
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        // Verify token and get user info
        const payload = await verifyJwt(accessToken);
        if (!payload) {
            connection.release();
            return NextResponse.json(
                { success: false, message: "Invalid token" },
                { status: 401 }
            );
        }

        // Check if user is an admin
        if (payload.role !== 'ADMINISTRATOR') {
            connection.release();
            return NextResponse.json(
                { success: false, message: "Access denied. Admin only." },
                { status: 403 }
            );
        }

        const adminId = payload.sub;

        // Get request body
        const { batch_id } = await req.json();

        if (!batch_id) {
            connection.release();
            return NextResponse.json(
                { success: false, message: "batch_id is required" },
                { status: 400 }
            );
        }

        // Verify the batch exists and is in Pending status
        const [batch] = await connection.execute(
            `SELECT id, status, submitted_by FROM change_batches WHERE id = ?`,
            [batch_id]
        );

        if (batch.length === 0) {
            connection.release();
            return NextResponse.json(
                { success: false, message: "Batch not found" },
                { status: 404 }
            );
        }

        if (batch[0].status !== 'Pending') {
            connection.release();
            return NextResponse.json(
                { success: false, message: `Cannot approve batch. Current status is: ${batch[0].status}` },
                { status: 400 }
            );
        }

        // Get all changes in this batch
        const [changes] = await connection.execute(
            `SELECT id, table_name, record_id, action_type, old_values, new_values 
             FROM pending_changes 
             WHERE batch_id = ?
             ORDER BY created_at ASC`,
            [batch_id]
        );

        if (changes.length === 0) {
            connection.release();
            return NextResponse.json(
                { success: false, message: "No changes found in this batch" },
                { status: 400 }
            );
        }

        // Start transaction
        await connection.beginTransaction();

        try {
            // Apply each change
            const results = [];
            for (const change of changes) {
                const result = await applyChange(connection, change);
                results.push({
                    change_id: change.id,
                    table_name: change.table_name,
                    action_type: change.action_type,
                    result: result
                });
            }

            // Update batch status to Approved
            await connection.execute(
                `UPDATE change_batches 
                 SET status = 'Approved', reviewed_by = ?, reviewed_at = NOW() 
                 WHERE id = ?`,
                [adminId, batch_id]
            );

            // Reject any other pending batches that have conflicting changes
            // (same record_id and table_name)
            for (const change of changes) {
                if (change.record_id) {
                    await connection.execute(
                        `UPDATE change_batches cb
                         SET cb.status = 'Rejected', 
                             cb.reviewed_by = ?, 
                             cb.reviewed_at = NOW(),
                             cb.rejection_reason = 'Another batch with changes to the same record was approved first'
                         WHERE cb.id != ? 
                         AND cb.status = 'Pending'
                         AND EXISTS (
                             SELECT 1 FROM pending_changes pc 
                             WHERE pc.batch_id = cb.id 
                             AND pc.table_name = ? 
                             AND pc.record_id = ?
                         )`,
                        [adminId, batch_id, change.table_name, change.record_id]
                    );
                }
            }

            // Commit transaction
            await connection.commit();

            return NextResponse.json({
                success: true,
                message: "Batch approved and changes applied successfully",
                data: {
                    batch_id: batch_id,
                    changes_applied: results.length,
                    results: results
                }
            }, { status: 200 });

        } catch (txError) {
            // Rollback on error
            await connection.rollback();
            throw txError;
        }

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, message: `Server error: ${error.message}` },
            { status: 500 }
        );
    } finally {
        connection.release();
    }
}
