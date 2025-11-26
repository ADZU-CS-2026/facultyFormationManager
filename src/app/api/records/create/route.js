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
 * CREATE RECORD - Role-based
 * ADMINISTRATOR: Creates record directly
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

        const userId = payload.sub;
        const userRole = payload.role;

        // Get request body
        const {
            first_name,
            last_name,
            middle_initial,
            department,
            position = null,
            office = null,
            status = null,
            school_year,
        } = await req.json();

        // Validate required fields
        if (!first_name || !last_name || !department || !school_year) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Prepare user data
        const userData = {
            first_name,
            last_name,
            middle_initial,
            department,
            position,
            office,
            status
        };

        // ADMINISTRATOR: Direct insert
        if (userRole === 'ADMINISTRATOR') {
            const connection = await pool.getConnection();
            try {
                await connection.beginTransaction();

                // Insert user
                const [resultUser] = await connection.execute(
                    `INSERT INTO users (first_name, last_name, middle_initial, department, position, office, status) 
                     VALUES (?, ?, ?, ?, ?, ?, ?)`,
                    [first_name, last_name, middle_initial, department, position, office, status]
                );

                if (resultUser.affectedRows <= 0) {
                    await connection.rollback();
                    return NextResponse.json(
                        { success: false, message: "Failed to create user" },
                        { status: 500 }
                    );
                }

                const newUserId = resultUser.insertId;

                // Determine which retreat records to create based on department
                const retreatTypes = getRetreatTypesForDepartment(department);

                for (const retreatType of retreatTypes) {
                    await connection.execute(
                        `INSERT INTO retreat_records (user_id, retreat_type, school_year) VALUES (?, ?, ?)`,
                        [newUserId, retreatType, school_year]
                    );
                }

                await connection.commit();

                return NextResponse.json({
                    success: true,
                    isDirectSave: true,
                    message: "Record created successfully!",
                    data: { userId: newUserId }
                }, { status: 201 });

            } catch (error) {
                await connection.rollback();
                throw error;
            } finally {
                connection.release();
            }
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
                    [batchUuid, userId, `New record: ${first_name} ${last_name}`]
                );
                batchId = newBatch.insertId;
            }

            // Prepare the full record data including retreat types
            const retreatTypes = getRetreatTypesForDepartment(department);
            const fullRecordData = {
                user: userData,
                school_year,
                retreat_types: retreatTypes
            };

            // Create pending change record
            const [pendingChange] = await pool.execute(
                `INSERT INTO pending_changes (batch_id, table_name, record_id, action_type, old_values, new_values) 
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    batchId,
                    'users',  // Primary table
                    null,     // No record_id for INSERT
                    'INSERT',
                    null,     // No old values for INSERT
                    JSON.stringify(fullRecordData)
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
                    status: 'Draft'
                }
            }, { status: 201 });
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
 * Get retreat types based on department
 */
function getRetreatTypesForDepartment(department) {
    // Admin gets all three retreat types
    if (department === 'Admin') {
        return ['DGY2', 'DGY3', '3D Retreat'];
    }
    // CS (Central Services) gets only 3D Retreat
    if (department === 'CS') {
        return ['3D Retreat'];
    }
    // All other departments get only 3D Retreat by default
    return ['3D Retreat'];
}
