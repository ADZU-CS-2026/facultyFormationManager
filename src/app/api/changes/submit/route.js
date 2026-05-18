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

// SUBMIT BATCH FOR APPROVAL
// Staff submits their draft batch for admin approval
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

        // Get request body
        const { batch_id, description = null } = await req.json();

        if (!batch_id) {
            return NextResponse.json(
                { success: false, message: "batch_id is required" },
                { status: 400 }
            );
        }

        // Verify the batch exists, belongs to this user, and is in Draft status
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

        if (batch[0].submitted_by !== userId) {
            return NextResponse.json(
                { success: false, message: "You can only submit your own batches" },
                { status: 403 }
            );
        }

        if (batch[0].status !== 'Draft') {
            return NextResponse.json(
                { success: false, message: `Cannot submit batch. Current status is: ${batch[0].status}` },
                { status: 400 }
            );
        }

        // Check if batch has any changes
        const [changes] = await pool.execute(
            `SELECT COUNT(*) as count FROM pending_changes WHERE batch_id = ?`,
            [batch_id]
        );

        if (changes[0].count === 0) {
            return NextResponse.json(
                { success: false, message: "Cannot submit an empty batch. Add some changes first." },
                { status: 400 }
            );
        }

        // Update batch status to Pending
        await pool.execute(
            `UPDATE change_batches 
             SET status = 'Pending', description = ?, submitted_at = NOW() 
             WHERE id = ?`,
            [description, batch_id]
        );

        return NextResponse.json({
            success: true,
            message: "Batch submitted for approval",
            data: {
                batch_id: batch_id,
                status: 'Pending',
                change_count: changes[0].count
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
