import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(req) {
    try {
        // Get parameters from URL
        const { searchParams } = new URL(req.url);
        const searchTerm = searchParams.get('search') || '';
        const statusFilter = searchParams.get('status') || '';
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;

        // Validate pagination parameters
        if (page < 1 || limit < 1 || limit > 100) {
            return NextResponse.json({
                success: false,
                message: 'Invalid pagination parameters'
            }, { status: 400 });
        }

        // Validate status filter if provided
        if (statusFilter && !['Active', 'Inactive'].includes(statusFilter)) {
            return NextResponse.json({
                success: false,
                message: 'Invalid status filter. Must be Active or Inactive'
            }, { status: 400 });
        }

        // Calculate offset
        const offset = (page - 1) * limit;

        // Build dynamic WHERE clauses
        const conditions = [];
        const queryParams = [];
        const countParams = [];

        // Add status filter if provided
        if (statusFilter) {
            conditions.push('work_status = ?');
            queryParams.push(statusFilter);
            countParams.push(statusFilter);
        }

        // Add search filter if provided
        if (searchTerm.trim()) {
            const searchPattern = `%${searchTerm.trim()}%`;
            conditions.push(`(
                CONCAT(first_name, ' ', COALESCE(middle_initial, ''), ' ', last_name) LIKE ?
                OR first_name LIKE ?
                OR last_name LIKE ?
                OR department LIKE ?
                OR position LIKE ?
                OR office LIKE ?
            )`);
            queryParams.push(searchPattern, searchPattern, searchPattern, searchPattern, searchPattern, searchPattern);
            countParams.push(searchPattern, searchPattern, searchPattern, searchPattern, searchPattern, searchPattern);
        }

        // Build WHERE clause
        const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

        // Build queries
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
            ${whereClause}
            ORDER BY last_name, first_name
            LIMIT ? OFFSET ?
        `;

        const countQuery = `SELECT COUNT(*) as total FROM users ${whereClause}`;

        // Add pagination params to query params
        queryParams.push(String(limit), String(offset));

        // Execute count query first
        const [countRows] = countParams.length > 0
            ? await pool.execute(countQuery, countParams)
            : await pool.execute(countQuery);
        const total = countRows[0].total;
        const totalPages = Math.ceil(total / limit);

        // Execute data query
        const [rows] = await pool.execute(query, queryParams);

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