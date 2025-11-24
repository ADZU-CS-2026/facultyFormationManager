import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req) {
    try {
        const body = await req.json();
        const { department, school_year, work_status } = body;

        // Validate input
        if (!department || !work_status || !school_year) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Query the database
        const [rows] = await pool.execute(
            `
            SELECT 
                users.id,
                CONCAT(users.first_name, ' ', COALESCE(users.middle_initial, ''), ' ', users.last_name) AS full_name,
                users.first_name,
                users.last_name,
                users.middle_initial,
                users.department,
                users.work_status,
                retreat_records.school_year
            FROM users
            INNER JOIN retreat_records 
                ON retreat_records.user_id = users.id
            WHERE users.work_status = ?
              AND users.department = ?
              AND retreat_records.school_year = ?
            `,
            [work_status, department, school_year]
        );

        return NextResponse.json({
            success: true,
            count: rows.length,
            data: rows,
        });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}
