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
 * CREATE RETREAT RECORD - Role-based
 * ADMINISTRATOR: Creates directly
 * STAFF: Creates pending change for approval
 */
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

        const loggedInUserId = payload.sub;
        const userRole = payload.role;

        // Get request body
        const {
            user_id,        // The user this retreat record belongs to
            retreat_type,
            school_year,
            start_date,
            completion_date,
            attendance_status,
        } = await req.json();

        // Validate required fields
        if (!user_id || !retreat_type) {
            return NextResponse.json(
                { success: false, message: "user_id and retreat_type are required" },
                { status: 400 }
            );
        }

        // Use "N/A" for retreats without school year (DGY1, DGY2, DGY3, SD, etc.)
        const effectiveSchoolYear = school_year || "N/A";

        // Check if record already exists for this user/retreat_type/school_year combination
        const [existing] = await pool.execute(
            `SELECT id FROM retreat_records WHERE user_id = ? AND retreat_type = ? AND school_year = ?`,
            [user_id, retreat_type, effectiveSchoolYear]
        );

        if (existing.length > 0) {
            return NextResponse.json(
                { success: false, message: "Retreat record already exists for this combination" },
                { status: 409 }
            );
        }

        const newRecord = {
            user_id,
            retreat_type,
            school_year: effectiveSchoolYear,
            start_date: start_date || null,
            completion_date: completion_date || null,
            attendance_status: attendance_status || null,
        };

        // ADMINISTRATOR: Direct insert
        if (userRole === 'ADMINISTRATOR') {
            const [result] = await pool.execute(
                `INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status) 
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [newRecord.user_id, newRecord.retreat_type, newRecord.school_year, newRecord.start_date, newRecord.completion_date, newRecord.attendance_status]
            );

            return NextResponse.json({
                success: true,
                isDirectSave: true,
                message: "Retreat record created successfully!",
                data: { retreatId: result.insertId }
            }, { status: 201 });
        }

        // STAFF: Create pending change for approval
        if (userRole === 'STAFF') {
            // Check if staff has an existing draft batch
            const [existingDraft] = await pool.execute(
                `SELECT id, batch_uuid FROM change_batches 
                 WHERE submitted_by = ? AND status = 'Draft' 
                 ORDER BY created_at DESC LIMIT 1`,
                [loggedInUserId]
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
                    [batchUuid, loggedInUserId, `New retreat: ${retreat_type}`]
                );
                batchId = newBatch.insertId;
            }

            // Create pending change record for INSERT
            await pool.execute(
                `INSERT INTO pending_changes (batch_id, table_name, record_id, action_type, old_values, new_values) 
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    batchId,
                    'retreat_records',
                    null,  // No record_id yet since it's a new record
                    'INSERT',
                    JSON.stringify({}),  // No old values for insert
                    JSON.stringify(newRecord)
                ]
            );

            return NextResponse.json({
                success: true,
                isDirectSave: false,
                message: "New retreat record saved to draft. Submit for admin approval.",
                data: { batch_id: batchId }
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

/**
 * UPDATE RETREAT RECORD - Role-based
 * ADMINISTRATOR: Updates directly
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
            id,  // Retreat record ID
            start_date,
            completion_date,
            attendance_status,
        } = await req.json();

        // Validate required fields
        if (!id) {
            return NextResponse.json(
                { success: false, message: "Retreat record ID is required" },
                { status: 400 }
            );
        }

        // Get current retreat record for comparison
        const [currentRetreat] = await pool.execute(
            `SELECT * FROM retreat_records WHERE id = ?`,
            [id]
        );

        if (currentRetreat.length === 0) {
            return NextResponse.json(
                { success: false, message: "Retreat record not found" },
                { status: 404 }
            );
        }

        const oldValues = currentRetreat[0];

        // Build new values object with only changed fields
        const newValues = {};

        // Handle date comparison (convert to string for comparison)
        const oldStartDate = oldValues.start_date ? new Date(oldValues.start_date).toISOString().split('T')[0] : null;
        const oldCompletionDate = oldValues.completion_date ? new Date(oldValues.completion_date).toISOString().split('T')[0] : null;

        if (start_date !== undefined && start_date !== oldStartDate) {
            newValues.start_date = start_date || null;
        }
        if (completion_date !== undefined && completion_date !== oldCompletionDate) {
            newValues.completion_date = completion_date || null;
        }
        if (attendance_status !== undefined && attendance_status !== oldValues.attendance_status) {
            newValues.attendance_status = attendance_status;
        }

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
                `UPDATE retreat_records SET ${setClause} WHERE id = ?`,
                values
            );

            return NextResponse.json({
                success: true,
                isDirectSave: true,
                message: "Retreat record updated successfully!",
                data: { retreatId: id, updatedFields: Object.keys(newValues) }
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
                    [batchUuid, userId, `Update retreat: ${oldValues.retreat_type}`]
                );
                batchId = newBatch.insertId;
            }

            // Store relevant old values for comparison
            const relevantOldValues = {};
            for (const key of Object.keys(newValues)) {
                if (key === 'start_date') {
                    relevantOldValues[key] = oldStartDate;
                } else if (key === 'completion_date') {
                    relevantOldValues[key] = oldCompletionDate;
                } else {
                    relevantOldValues[key] = oldValues[key];
                }
            }

            // Add retreat_type for context in the diff viewer
            relevantOldValues.retreat_type = oldValues.retreat_type;
            newValues.retreat_type = oldValues.retreat_type;

            // Create pending change record
            await pool.execute(
                `INSERT INTO pending_changes (batch_id, table_name, record_id, action_type, old_values, new_values) 
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    batchId,
                    'retreat_records',
                    id,
                    'UPDATE',
                    JSON.stringify(relevantOldValues),
                    JSON.stringify(newValues)
                ]
            );

            return NextResponse.json({
                success: true,
                isDirectSave: false,
                message: "Retreat change saved to draft. Submit for admin approval.",
                data: { batch_id: batchId }
            }, { status: 200 });
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
