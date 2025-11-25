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

// GET PENDING BATCHES FOR ADMIN
// Admin views all pending batches awaiting approval
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

        // Check if user is an admin
        if (payload.role !== 'ADMINISTRATOR') {
            return NextResponse.json(
                { success: false, message: "Access denied. Admin only." },
                { status: 403 }
            );
        }

        // Get URL params for filtering
        const { searchParams } = new URL(req.url);
        const status = searchParams.get('status') || 'Pending'; // Default to Pending
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const offset = (page - 1) * limit;

        // Validate status
        const validStatuses = ['Pending', 'Approved', 'Rejected', 'all'];
        if (!validStatuses.includes(status)) {
            return NextResponse.json(
                { success: false, message: `Invalid status. Must be one of: ${validStatuses.join(', ')}` },
                { status: 400 }
            );
        }

        // Build query based on status filter
        let batchQuery;
        let countQuery;
        let batchParams;
        let countParams;

        if (status === 'all') {
            batchQuery = `
                SELECT 
                    cb.id,
                    cb.batch_uuid,
                    cb.submitted_by,
                    aa.role as submitter_role,
                    cb.status,
                    cb.description,
                    cb.submitted_at,
                    cb.reviewed_by,
                    cb.reviewed_at,
                    cb.rejection_reason,
                    cb.created_at,
                    COUNT(pc.id) as change_count
                FROM change_batches cb
                LEFT JOIN pending_changes pc ON cb.id = pc.batch_id
                LEFT JOIN adminaccount aa ON cb.submitted_by = aa.id
                WHERE cb.status != 'Draft'
                GROUP BY cb.id
                ORDER BY cb.submitted_at DESC
                LIMIT ? OFFSET ?
            `;
            countQuery = `SELECT COUNT(*) as total FROM change_batches WHERE status != 'Draft'`;
            batchParams = [String(limit), String(offset)];
            countParams = [];
        } else {
            batchQuery = `
                SELECT 
                    cb.id,
                    cb.batch_uuid,
                    cb.submitted_by,
                    aa.role as submitter_role,
                    cb.status,
                    cb.description,
                    cb.submitted_at,
                    cb.reviewed_by,
                    cb.reviewed_at,
                    cb.rejection_reason,
                    cb.created_at,
                    COUNT(pc.id) as change_count
                FROM change_batches cb
                LEFT JOIN pending_changes pc ON cb.id = pc.batch_id
                LEFT JOIN adminaccount aa ON cb.submitted_by = aa.id
                WHERE cb.status = ?
                GROUP BY cb.id
                ORDER BY cb.submitted_at DESC
                LIMIT ? OFFSET ?
            `;
            countQuery = `SELECT COUNT(*) as total FROM change_batches WHERE status = ?`;
            batchParams = [status, String(limit), String(offset)];
            countParams = [status];
        }

        // Get count first
        const [countResult] = countParams.length > 0
            ? await pool.execute(countQuery, countParams)
            : await pool.execute(countQuery);
        const total = countResult[0].total;
        const totalPages = Math.ceil(total / limit);

        // Get batches
        const [batches] = await pool.execute(batchQuery, batchParams);

        return NextResponse.json({
            success: true,
            count: batches.length,
            total: total,
            page: page,
            totalPages: totalPages,
            data: batches
        }, { status: 200 });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, message: `Server error: ${error.message}` },
            { status: 500 }
        );
    }
}
