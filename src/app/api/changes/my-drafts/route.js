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

// GET MY DRAFT CHANGES
// Staff views their own draft batches and changes
export async function GET(req) {
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

        // Get URL params for filtering
        const { searchParams } = new URL(req.url);
        const status = searchParams.get('status') || 'Draft'; // Default to Draft

        // Validate status
        const validStatuses = ['Draft', 'Pending', 'Approved', 'Rejected', 'all'];
        if (!validStatuses.includes(status)) {
            return NextResponse.json(
                { success: false, message: `Invalid status. Must be one of: ${validStatuses.join(', ')}` },
                { status: 400 }
            );
        }

        // Build query based on status filter
        let batchQuery;
        let batchParams;

        if (status === 'all') {
            batchQuery = `
                SELECT 
                    cb.id,
                    cb.batch_uuid,
                    cb.status,
                    cb.description,
                    cb.submitted_at,
                    cb.reviewed_at,
                    cb.rejection_reason,
                    cb.created_at,
                    cb.updated_at,
                    COUNT(pc.id) as change_count
                FROM change_batches cb
                LEFT JOIN pending_changes pc ON cb.id = pc.batch_id
                WHERE cb.submitted_by = ?
                GROUP BY cb.id
                ORDER BY cb.created_at DESC
            `;
            batchParams = [userId];
        } else {
            batchQuery = `
                SELECT 
                    cb.id,
                    cb.batch_uuid,
                    cb.status,
                    cb.description,
                    cb.submitted_at,
                    cb.reviewed_at,
                    cb.rejection_reason,
                    cb.created_at,
                    cb.updated_at,
                    COUNT(pc.id) as change_count
                FROM change_batches cb
                LEFT JOIN pending_changes pc ON cb.id = pc.batch_id
                WHERE cb.submitted_by = ? AND cb.status = ?
                GROUP BY cb.id
                ORDER BY cb.created_at DESC
            `;
            batchParams = [userId, status];
        }

        const [batches] = await pool.execute(batchQuery, batchParams);

        // For each batch, get the changes
        const batchesWithChanges = await Promise.all(
            batches.map(async (batch) => {
                const [changes] = await pool.execute(
                    `SELECT 
                        id,
                        table_name,
                        record_id,
                        action_type,
                        old_values,
                        new_values,
                        created_at
                     FROM pending_changes 
                     WHERE batch_id = ?
                     ORDER BY created_at ASC`,
                    [batch.id]
                );

                // Parse JSON values safely
                const parsedChanges = changes.map(change => {
                    let oldVals = null;
                    let newVals = null;

                    try {
                        if (change.old_values) {
                            oldVals = typeof change.old_values === 'string'
                                ? JSON.parse(change.old_values)
                                : change.old_values;
                        }
                    } catch (e) {
                        console.error('Error parsing old_values:', e);
                    }

                    try {
                        if (change.new_values) {
                            newVals = typeof change.new_values === 'string'
                                ? JSON.parse(change.new_values)
                                : change.new_values;
                        }
                    } catch (e) {
                        console.error('Error parsing new_values:', e);
                    }

                    return {
                        ...change,
                        old_values: oldVals,
                        new_values: newVals
                    };
                });

                return {
                    ...batch,
                    changes: parsedChanges
                };
            })
        );

        return NextResponse.json({
            success: true,
            count: batches.length,
            data: batchesWithChanges
        }, { status: 200 });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, message: `Server error: ${error.message}` },
            { status: 500 }
        );
    }
}
