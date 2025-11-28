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
 * DELETE USERS - Role-based
 * ADMINISTRATOR: Deletes directly (cascade: retreat_records then users)
 * STAFF: Creates pending DELETE changes for approval
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

        const loggedInUserId = payload.sub;
        const userRole = payload.role;

        // Get request body
        const { user_ids } = await req.json();

        // Validate required fields
        if (!user_ids || !Array.isArray(user_ids) || user_ids.length === 0) {
            return NextResponse.json(
                { success: false, message: "user_ids array is required" },
                { status: 400 }
            );
        }

        // Prevent self-deletion
        if (user_ids.includes(loggedInUserId)) {
            return NextResponse.json(
                { success: false, message: "You cannot delete your own account" },
                { status: 400 }
            );
        }

        let deletedCount = 0;
        let retreatRecordsDeleted = 0;
        let pendingCount = 0;

        // ADMINISTRATOR: Direct delete
        if (userRole === 'ADMINISTRATOR') {
            for (const userId of user_ids) {
                // First, get user data for logging purposes
                const [userData] = await pool.execute(
                    `SELECT * FROM users WHERE id = ?`,
                    [userId]
                );

                if (userData.length === 0) {
                    continue; // User not found, skip
                }

                // Delete all retreat records for this user
                const [retreatResult] = await pool.execute(
                    `DELETE FROM retreat_records WHERE user_id = ?`,
                    [userId]
                );
                retreatRecordsDeleted += retreatResult.affectedRows;

                // Delete the user
                const [userResult] = await pool.execute(
                    `DELETE FROM users WHERE id = ?`,
                    [userId]
                );
                
                if (userResult.affectedRows > 0) {
                    deletedCount++;
                }
            }

            return NextResponse.json({
                success: true,
                isDirectSave: true,
                message: `Deleted ${deletedCount} user(s) and ${retreatRecordsDeleted} retreat record(s)`,
                data: { deletedCount, retreatRecordsDeleted }
            }, { status: 200 });
        }

        // STAFF: Create pending changes for approval
        if (userRole === 'STAFF') {
            // Create a new batch for this delete operation
            const batchUuid = uuidv4();
            const [newBatch] = await pool.execute(
                `INSERT INTO change_batches (batch_uuid, submitted_by, status, description) 
                 VALUES (?, ?, 'Draft', ?)`,
                [batchUuid, loggedInUserId, `Delete ${user_ids.length} user(s) and their retreat records`]
            );
            const batchId = newBatch.insertId;

            for (const userId of user_ids) {
                // Get user data
                const [userData] = await pool.execute(
                    `SELECT * FROM users WHERE id = ?`,
                    [userId]
                );

                if (userData.length === 0) {
                    continue; // User not found, skip
                }

                const user = userData[0];

                // Get all retreat records for this user
                const [retreatRecords] = await pool.execute(
                    `SELECT * FROM retreat_records WHERE user_id = ?`,
                    [userId]
                );

                // Create pending DELETE for each retreat record
                for (const record of retreatRecords) {
                    await pool.execute(
                        `INSERT INTO pending_changes (batch_id, table_name, record_id, action_type, old_values, new_values) 
                         VALUES (?, ?, ?, ?, ?, ?)`,
                        [
                            batchId,
                            'retreat_records',
                            record.id,
                            'DELETE',
                            JSON.stringify(record),
                            JSON.stringify({})
                        ]
                    );
                    pendingCount++;
                }

                // Create pending DELETE for the user
                await pool.execute(
                    `INSERT INTO pending_changes (batch_id, table_name, record_id, action_type, old_values, new_values) 
                     VALUES (?, ?, ?, ?, ?, ?)`,
                    [
                        batchId,
                        'users',
                        user.id,
                        'DELETE',
                        JSON.stringify(user),
                        JSON.stringify({})
                    ]
                );
                pendingCount++;
            }

            return NextResponse.json({
                success: true,
                isDirectSave: false,
                message: `Delete request saved to draft (${pendingCount} changes). Submit for admin approval.`,
                data: { batch_id: batchId, pendingCount }
            }, { status: 201 });
        }

        return NextResponse.json(
            { success: false, message: "Invalid role" },
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
