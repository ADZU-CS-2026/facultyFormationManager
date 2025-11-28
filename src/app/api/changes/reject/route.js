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

// REJECT BATCH
// Admin rejects a pending batch with a reason
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

        // Check if user is an admin
        if (payload.role !== 'ADMINISTRATOR') {
            return NextResponse.json(
                { success: false, message: "Access denied. Admin only." },
                { status: 403 }
            );
        }

        const adminId = payload.sub;

        // Get request body
        const { batch_id, rejection_reason } = await req.json();

        if (!batch_id) {
            return NextResponse.json(
                { success: false, message: "batch_id is required" },
                { status: 400 }
            );
        }



        // Verify the batch exists and is in Pending status
        const [batch] = await pool.execute(
            `SELECT id, status, submitted_by FROM change_batches WHERE id = ?`,
            [batch_id]
        );

        if (batch.length === 0) {
            return NextResponse.json(
                { success: false, message: "Batch not found" },
                { status: 404 }
            );
        }

        if (batch[0].status !== 'Pending') {
            return NextResponse.json(
                { success: false, message: `Cannot reject batch. Current status is: ${batch[0].status}` },
                { status: 400 }
            );
        }

        // Update batch status to Rejected
        await pool.execute(
            `UPDATE change_batches 
             SET status = 'Rejected', 
                 reviewed_by = ?, 
                 reviewed_at = NOW()
             WHERE id = ?`,
            [adminId, batch_id]
        );

        return NextResponse.json({
            success: true,
            message: "Batch rejected",
            data: {
                batch_id: batch_id,
                status: 'Rejected'
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
