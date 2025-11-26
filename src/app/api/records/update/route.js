import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { jwtVerify } from "jose";
import { v4 as uuidv4 } from 'uuid';

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

/**
 * UPDATE RECORD - Role-based
 * ADMINISTRATOR: Updates record directly
 * STAFF: Creates pending change for approval
 */
export async function PATCH(req) {
    try {
        // Get token from cookies
        const accessToken = req.cookies.get("accessToken")?.value;
        if (!accessToken) {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        // Verify token and get user info
        const payload = await verifyJwt(accessToken);
        if (!payload) {
            return NextResponse.json(
                { success: false, message: "Invalid token" },
                { status: 401 }
            );
        }

        const userId = payload.sub;
        const userRole = payload.role;

        // Get request body
        const {
            id,  // User ID to update
            first_name,
            last_name,
            middle_initial,
            department,
            position,
            office,
            status,
        } = await req.json();

        // Validate required fields
        if (!id) {
            return NextResponse.json(
                { success: false, message: "User ID is required" },
                { status: 400 }
            );
        }

        // Get current user data for comparison
        const [currentUser] = await pool.execute(
            `SELECT * FROM users WHERE id = ?`,
            [id]
        );

        if (currentUser.length === 0) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 404 }
            );
        }

        const oldValues = currentUser[0];

        // Build new values object with only changed fields
        const newValues = {};
        if (first_name !== undefined && first_name !== oldValues.first_name) newValues.first_name = first_name;
        if (last_name !== undefined && last_name !== oldValues.last_name) newValues.last_name = last_name;
        if (middle_initial !== undefined && middle_initial !== oldValues.middle_initial) newValues.middle_initial = middle_initial;
        if (department !== undefined && department !== oldValues.department) newValues.department = department;
        if (position !== undefined && position !== oldValues.position) newValues.position = position;
        if (office !== undefined && office !== oldValues.office) newValues.office = office;
        if (status !== undefined && status !== oldValues.status) newValues.status = status;

        // Check if there are any changes
        if (Object.keys(newValues).length === 0) {
            return NextResponse.json(
                { success: false, message: "No changes detected" },
                { status: 400 }
            );
        }

        // ADMINISTRATOR: Direct update
        if (userRole === 'ADMINISTRATOR') {
            const setClause = Object.keys(newValues).map(key => `${key} = ?`).join(', ');
            const values = [...Object.values(newValues), id];

            await pool.execute(
                `UPDATE users SET ${setClause} WHERE id = ?`,
                values
            );

            return NextResponse.json({
                success: true,
                isDirectSave: true,
                message: "Record updated successfully!",
                data: { userId: id, updatedFields: Object.keys(newValues) }
            }, { status: 200 });
        }

        // STAFF: Create pending change for approval
        if (userRole === 'STAFF') {
            // Check if staff has an existing draft batch
            const [existingDraft] = await pool.execute(
                `SELECT id, batch_uuid FROM change_batches 
                 WHERE submitted_by = ? AND status = 'Draft' 
                 ORDER BY created_at DESC LIMIT 1`,
                [userId]
            );

            let batchId, batchUuid;

            if (existingDraft.length > 0) {
                batchId = existingDraft[0].id;
                batchUuid = existingDraft[0].batch_uuid;
            } else {
                // Create new draft batch
                batchUuid = uuidv4();
                const [newBatch] = await pool.execute(
                    `INSERT INTO change_batches (batch_uuid, submitted_by, status, description) 
                     VALUES (?, ?, 'Draft', ?)`,
                    [batchUuid, userId, `Update: ${oldValues.first_name} ${oldValues.last_name}`]
                );
                batchId = newBatch.insertId;
            }

            // Store relevant old values for comparison
            const relevantOldValues = {};
            for (const key of Object.keys(newValues)) {
                relevantOldValues[key] = oldValues[key];
            }

            // Create pending change record
            const [pendingChange] = await pool.execute(
                `INSERT INTO pending_changes (batch_id, table_name, record_id, action_type, old_values, new_values) 
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    batchId,
                    'users',
                    id,
                    'UPDATE',
                    JSON.stringify(relevantOldValues),
                    JSON.stringify(newValues)
                ]
            );

            return NextResponse.json({
                success: true,
                isDirectSave: false,
                message: "Change saved to draft. Submit for admin approval.",
                data: {
                    change_id: pendingChange.insertId,
                    batch_id: batchId,
                    batch_uuid: batchUuid,
                    status: 'Draft',
                    updatedFields: Object.keys(newValues)
                }
            }, { status: 200 });
        }

        return NextResponse.json(
            { success: false, message: "Unknown user role" },
            { status: 403 }
        );

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, message: `Server error: ${error.message}` },
            { status: 500 }
        );
    }
}

/**
 * DELETE RECORD - Role-based
 * ADMINISTRATOR: Deletes record directly
 * STAFF: Creates pending change for approval
 */
export async function DELETE(req) {
    try {
        // Get token from cookies
        const accessToken = req.cookies.get("accessToken")?.value;
        if (!accessToken) {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        // Verify token and get user info
        const payload = await verifyJwt(accessToken);
        if (!payload) {
            return NextResponse.json(
                { success: false, message: "Invalid token" },
                { status: 401 }
            );
        }

        const userId = payload.sub;
        const userRole = payload.role;

        // Get request body
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json(
                { success: false, message: "User ID is required" },
                { status: 400 }
            );
        }

        // Get current user data
        const [currentUser] = await pool.execute(
            `SELECT * FROM users WHERE id = ?`,
            [id]
        );

        if (currentUser.length === 0) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 404 }
            );
        }

        const oldValues = currentUser[0];

        // ADMINISTRATOR: Direct delete
        if (userRole === 'ADMINISTRATOR') {
            // Delete related retreat_records first
            await pool.execute(`DELETE FROM retreat_records WHERE user_id = ?`, [id]);
            // Delete related certificates
            await pool.execute(`DELETE FROM certificates WHERE user_id = ?`, [id]);
            // Delete user
            await pool.execute(`DELETE FROM users WHERE id = ?`, [id]);

            return NextResponse.json({
                success: true,
                isDirectSave: true,
                message: "Record deleted successfully!",
                data: { deletedId: id }
            }, { status: 200 });
        }

        // STAFF: Create pending change for approval
        if (userRole === 'STAFF') {
            // Check if staff has an existing draft batch
            const [existingDraft] = await pool.execute(
                `SELECT id, batch_uuid FROM change_batches 
                 WHERE submitted_by = ? AND status = 'Draft' 
                 ORDER BY created_at DESC LIMIT 1`,
                [userId]
            );

            let batchId, batchUuid;

            if (existingDraft.length > 0) {
                batchId = existingDraft[0].id;
                batchUuid = existingDraft[0].batch_uuid;
            } else {
                // Create new draft batch
                batchUuid = uuidv4();
                const [newBatch] = await pool.execute(
                    `INSERT INTO change_batches (batch_uuid, submitted_by, status, description) 
                     VALUES (?, ?, 'Draft', ?)`,
                    [batchUuid, userId, `Delete: ${oldValues.first_name} ${oldValues.last_name}`]
                );
                batchId = newBatch.insertId;
            }

            // Create pending change record
            const [pendingChange] = await pool.execute(
                `INSERT INTO pending_changes (batch_id, table_name, record_id, action_type, old_values, new_values) 
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    batchId,
                    'users',
                    id,
                    'DELETE',
                    JSON.stringify(oldValues),
                    null
                ]
            );

            return NextResponse.json({
                success: true,
                isDirectSave: false,
                message: "Delete request saved to draft. Submit for admin approval.",
                data: {
                    change_id: pendingChange.insertId,
                    batch_id: batchId,
                    batch_uuid: batchUuid,
                    status: 'Draft'
                }
            }, { status: 200 });
        }

        return NextResponse.json(
            { success: false, message: "Unknown user role" },
            { status: 403 }
        );

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, message: `Server error: ${error.message}` },
            { status: 500 }
        );
    }
}
