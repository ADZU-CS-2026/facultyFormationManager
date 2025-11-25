import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(req) {
    try {
        // Get pagination parameters from URL
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;

        // Validate pagination parameters
        if (page < 1 || limit < 1 || limit > 100) {
            return NextResponse.json({
                success: false,
                message: 'Invalid pagination parameters'
            }, { status: 400 });
        }

        // Calculate offset
        const offset = (page - 1) * limit;

        // Query for users with pagination
        const query = `
            SELECT 
                id,
                first_name,
                last_name,
                middle_initial,
                department,
                position,
                office,
                status,
                work_status
            FROM users 
            ORDER BY last_name, first_name
            LIMIT ? OFFSET ?
        `;

        // Count total users
        const countQuery = `SELECT COUNT(*) as total FROM users`;

        // Execute count query first
        const [countRows] = await pool.execute(countQuery);
        const total = countRows[0].total;
        const totalPages = Math.ceil(total / limit);

        // Execute data query - convert to strings for mysql2 prepared statements
        const [rows] = await pool.execute(query, [String(limit), String(offset)]);

        return NextResponse.json({
            success: true,
            count: rows.length,
            total: total,
            page: page,
            totalPages: totalPages,
            limit: limit,
            data: rows
        }, { status: 200 });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            {
                success: false,
                message: `Database error: ${error.message}`
            },
            { status: 500 }
        );
    }
}