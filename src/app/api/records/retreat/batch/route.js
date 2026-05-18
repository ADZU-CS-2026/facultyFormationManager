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

async function hasVenueColumn() {
    try {
        const [rows] = await pool.execute(
            `SHOW COLUMNS FROM retreat_records LIKE 'venue'`
        );
        return rows.length > 0;
    } catch {
        return false;
    }
}

/**
 * BATCH CREATE/UPDATE RETREAT RECORDS - Role-based
 * ADMINISTRATOR: Creates/Updates directly
 * STAFF: Creates pending changes for approval
 * 
 * If a retreat record exists for a user, it will be updated.
 * If it doesn't exist, it will be created.
 */
export async function POST(req) {
    try {
        const venueEnabled = await hasVenueColumn();

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
        const { user_ids, retreats } = await req.json();

        if (!venueEnabled && retreats.some((r) => r.venue !== undefined && `${r.venue}`.trim() !== "")) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Venue field is not available in the current database schema. Please run src/db/add_venue_column.sql first.",
                },
                { status: 400 }
            );
        }

        // Validate required fields
        if (!user_ids || !Array.isArray(user_ids) || user_ids.length === 0) {
            return NextResponse.json(
                { success: false, message: "user_ids array is required" },
                { status: 400 }
            );
        }

        if (!retreats || !Array.isArray(retreats) || retreats.length === 0) {
            return NextResponse.json(
                { success: false, message: "retreats array is required" },
                { status: 400 }
            );
        }

        let createdCount = 0;
        let updatedCount = 0;
        let pendingCount = 0;

        // ADMINISTRATOR: Direct insert/update
        if (userRole === 'ADMINISTRATOR') {
            for (const userId of user_ids) {
                for (const retreat of retreats) {
                    const { retreat_type, school_year, start_date, completion_date, attendance_status, venue } = retreat;
                    const effectiveSchoolYear = school_year || "N/A";

                    // Check if record exists
                    const [existing] = await pool.execute(
                        `SELECT id FROM retreat_records WHERE user_id = ? AND retreat_type = ? AND school_year = ?`,
                        [userId, retreat_type, effectiveSchoolYear]
                    );

                    if (existing.length > 0) {
                        // Update existing record
                        if (venueEnabled) {
                            await pool.execute(
                                `UPDATE retreat_records 
                                 SET start_date = ?, completion_date = ?, attendance_status = ?, venue = ?
                                 WHERE id = ?`,
                                [start_date, completion_date, attendance_status, venue || null, existing[0].id]
                            );
                        } else {
                            await pool.execute(
                                `UPDATE retreat_records 
                                 SET start_date = ?, completion_date = ?, attendance_status = ?
                                 WHERE id = ?`,
                                [start_date, completion_date, attendance_status, existing[0].id]
                            );
                        }
                        updatedCount++;
                    } else {
                        // Create new record
                        if (venueEnabled) {
                            await pool.execute(
                                `INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status, venue) 
                                 VALUES (?, ?, ?, ?, ?, ?, ?)`,
                                [userId, retreat_type, effectiveSchoolYear, start_date, completion_date, attendance_status, venue || null]
                            );
                        } else {
                            await pool.execute(
                                `INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status) 
                                 VALUES (?, ?, ?, ?, ?, ?)`,
                                [userId, retreat_type, effectiveSchoolYear, start_date, completion_date, attendance_status]
                            );
                        }
                        createdCount++;
                    }
                }
            }

            return NextResponse.json({
                success: true,
                isDirectSave: true,
                message: `Batch update complete! Created: ${createdCount}, Updated: ${updatedCount}`,
                data: { createdCount, updatedCount }
            }, { status: 200 });
        }

        // STAFF: Create pending changes for approval
        if (userRole === 'STAFF') {
            // Create a new batch for this batch update
            const batchUuid = uuidv4();
            const [newBatch] = await pool.execute(
                `INSERT INTO change_batches (batch_uuid, submitted_by, status, description) 
                 VALUES (?, ?, 'Draft', ?)`,
                [batchUuid, loggedInUserId, `Batch update: ${retreats.map(r => r.retreat_type).join(', ')} for ${user_ids.length} users`]
            );
            const batchId = newBatch.insertId;

            for (const userId of user_ids) {
                for (const retreat of retreats) {
                    const { retreat_type, school_year, start_date, completion_date, attendance_status, venue } = retreat;
                    const effectiveSchoolYear = school_year || "N/A";

                    // Check if record exists
                    let existing;
                    if (venueEnabled) {
                        [existing] = await pool.execute(
                            `SELECT id, start_date, completion_date, attendance_status, venue 
                             FROM retreat_records 
                             WHERE user_id = ? AND retreat_type = ? AND school_year = ?`,
                            [userId, retreat_type, effectiveSchoolYear]
                        );
                    } else {
                        [existing] = await pool.execute(
                            `SELECT id, start_date, completion_date, attendance_status 
                             FROM retreat_records 
                             WHERE user_id = ? AND retreat_type = ? AND school_year = ?`,
                            [userId, retreat_type, effectiveSchoolYear]
                        );
                    }

                    if (existing.length > 0) {
                        // Create pending change for UPDATE
                        const oldRecord = existing[0];
                        await pool.execute(
                            `INSERT INTO pending_changes (batch_id, table_name, record_id, action_type, old_values, new_values) 
                             VALUES (?, ?, ?, ?, ?, ?)`,
                            [
                                batchId,
                                'retreat_records',
                                oldRecord.id,
                                'UPDATE',
                                JSON.stringify({
                                    start_date: oldRecord.start_date,
                                    completion_date: oldRecord.completion_date,
                                    attendance_status: oldRecord.attendance_status,
                                    ...(venueEnabled ? { venue: oldRecord.venue } : {})
                                }),
                                JSON.stringify({ start_date, completion_date, attendance_status, venue: venue || null })
                            ]
                        );
                    } else {
                        // Create pending change for INSERT
                        const newRecord = {
                            user_id: userId,
                            retreat_type,
                            school_year: effectiveSchoolYear,
                            start_date,
                            completion_date,
                            attendance_status,
                            venue: venue || null,
                        };

                        await pool.execute(
                            `INSERT INTO pending_changes (batch_id, table_name, record_id, action_type, old_values, new_values) 
                             VALUES (?, ?, ?, ?, ?, ?)`,
                            [
                                batchId,
                                'retreat_records',
                                null,
                                'INSERT',
                                JSON.stringify({}),
                                JSON.stringify(newRecord)
                            ]
                        );
                    }
                    pendingCount++;
                }
            }

            return NextResponse.json({
                success: true,
                isDirectSave: false,
                message: `Batch update saved to draft (${pendingCount} changes). Submit for admin approval.`,
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
