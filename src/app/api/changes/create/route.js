import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { jwtVerify } from "jose";
import { v4 as uuidv4 } from "uuid";

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

// CREATE PENDING CHANGE
// Staff creates a new pending change (or adds to existing draft batch)
export async function POST(req) {
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
            table_name,
            record_id = null,
            action_type,
            old_values = null,
            new_values,
            batch_id = null  // Optional: add to existing batch
        } = await req.json();

        // Validate required fields
        if (!table_name || !action_type || !new_values) {
            return NextResponse.json(
                { success: false, message: "Missing required fields: table_name, action_type, new_values" },
                { status: 400 }
            );
        }

        // Validate action_type
        if (!['INSERT', 'UPDATE', 'DELETE'].includes(action_type)) {
            return NextResponse.json(
                { success: false, message: "Invalid action_type. Must be INSERT, UPDATE, or DELETE" },
                { status: 400 }
            );
        }

        // Validate table_name (only allow known tables)
        const allowedTables = ['users', 'retreat_records', 'certificates'];
        if (!allowedTables.includes(table_name)) {
            return NextResponse.json(
                { success: false, message: `Invalid table_name. Must be one of: ${allowedTables.join(', ')}` },
                { status: 400 }
            );
        }

        // For UPDATE/DELETE, record_id is required
        if ((action_type === 'UPDATE' || action_type === 'DELETE') && !record_id) {
            return NextResponse.json(
                { success: false, message: "record_id is required for UPDATE and DELETE operations" },
                { status: 400 }
            );
        }

        let targetBatchId = batch_id;

        // If no batch_id provided, find existing draft batch or create new one
        if (!targetBatchId) {
            // Check for existing draft batch from this user
            const [existingBatch] = await pool.execute(
                `SELECT id FROM change_batches 
                 WHERE submitted_by = ? AND status = 'Draft' 
                 ORDER BY created_at DESC LIMIT 1`,
                [userId]
            );

            if (existingBatch.length > 0) {
                targetBatchId = existingBatch[0].id;
            } else {
                // Create new draft batch
                const batchUuid = uuidv4();
                const [batchResult] = await pool.execute(
                    `INSERT INTO change_batches (batch_uuid, submitted_by, status) 
                     VALUES (?, ?, 'Draft')`,
                    [batchUuid, userId]
                );
                targetBatchId = batchResult.insertId;
            }
        } else {
            // Verify the batch exists and belongs to this user and is still a draft
            const [batch] = await pool.execute(
                `SELECT id, status, submitted_by FROM change_batches WHERE id = ?`,
                [targetBatchId]
            );

            if (batch.length === 0) {
                return NextResponse.json(
                    { success: false, message: "Batch not found" },
                    { status: 404 }
                );
            }

            if (batch[0].submitted_by !== userId) {
                return NextResponse.json(
                    { success: false, message: "You can only add changes to your own batches" },
                    { status: 403 }
                );
            }

            if (batch[0].status !== 'Draft') {
                return NextResponse.json(
                    { success: false, message: "Cannot add changes to a batch that is not in Draft status" },
                    { status: 400 }
                );
            }
        }

        // Insert the pending change
        const [result] = await pool.execute(
            `INSERT INTO pending_changes (batch_id, table_name, record_id, action_type, old_values, new_values) 
             VALUES (?, ?, ?, ?, ?, ?)`,
            [
                targetBatchId,
                table_name,
                record_id,
                action_type,
                old_values ? JSON.stringify(old_values) : null,
                JSON.stringify(new_values)
            ]
        );

        // Get the batch info for response
        const [batchInfo] = await pool.execute(
            `SELECT batch_uuid FROM change_batches WHERE id = ?`,
            [targetBatchId]
        );

        return NextResponse.json({
            success: true,
            message: "Change added to pending batch",
            data: {
                change_id: result.insertId,
                batch_id: targetBatchId,
                batch_uuid: batchInfo[0].batch_uuid
            }
        }, { status: 201 });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, message: `Server error: ${error.message}` },
            { status: 500 }
        );
    }
}
