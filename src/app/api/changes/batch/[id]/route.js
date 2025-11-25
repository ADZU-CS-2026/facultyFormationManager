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

// GET BATCH DETAILS
// View a specific batch with all its changes and diff information
export async function GET(req, { params }) {
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
        const { id } = await params;

        if (!id) {
            return NextResponse.json(
                { success: false, message: "Batch ID is required" },
                { status: 400 }
            );
        }

        // Get batch info
        const [batch] = await pool.execute(
            `SELECT 
                cb.id,
                cb.batch_uuid,
                cb.submitted_by,
                aa.role as submitter_role,
                cb.status,
                cb.description,
                cb.submitted_at,
                cb.reviewed_by,
                ra.role as reviewer_role,
                cb.reviewed_at,
                cb.rejection_reason,
                cb.created_at,
                cb.updated_at
             FROM change_batches cb
             LEFT JOIN adminaccount aa ON cb.submitted_by = aa.id
             LEFT JOIN adminaccount ra ON cb.reviewed_by = ra.id
             WHERE cb.id = ?`,
            [id]
        );

        if (batch.length === 0) {
            return NextResponse.json(
                { success: false, message: "Batch not found" },
                { status: 404 }
            );
        }

        // Check access: Admin can see all, Staff can only see their own
        if (userRole !== 'ADMINISTRATOR' && batch[0].submitted_by !== userId) {
            return NextResponse.json(
                { success: false, message: "Access denied" },
                { status: 403 }
            );
        }

        // Get all changes in this batch
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
            [id]
        );

        // Enrich changes with current database values for comparison
        const enrichedChanges = await Promise.all(
            changes.map(async (change) => {
                let currentValues = null;

                // For UPDATE and DELETE, fetch current record from database
                if (change.record_id && (change.action_type === 'UPDATE' || change.action_type === 'DELETE')) {
                    try {
                        const tableName = change.table_name;
                        // Only fetch from allowed tables
                        if (['users', 'retreat_records', 'certificates'].includes(tableName)) {
                            const [current] = await pool.execute(
                                `SELECT * FROM ${tableName} WHERE id = ?`,
                                [change.record_id]
                            );
                            if (current.length > 0) {
                                currentValues = current[0];
                            }
                        }
                    } catch (err) {
                        console.error(`Error fetching current values for ${change.table_name}:${change.record_id}`, err);
                    }
                }

                return {
                    ...change,
                    old_values: change.old_values
                        ? (typeof change.old_values === 'string' ? JSON.parse(change.old_values) : change.old_values)
                        : null,
                    new_values: change.new_values
                        ? (typeof change.new_values === 'string' ? JSON.parse(change.new_values) : change.new_values)
                        : null,
                    current_values: currentValues,
                    has_conflict: currentValues && change.old_values ?
                        JSON.stringify(currentValues) !== (typeof change.old_values === 'string' ? change.old_values : JSON.stringify(change.old_values)) : false
                };
            })
        );

        return NextResponse.json({
            success: true,
            data: {
                ...batch[0],
                change_count: changes.length,
                changes: enrichedChanges
            }
        }, { status: 200 });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, message: `Server error: ${error.message}` },
            { status: 500 }
        );
    }
}
