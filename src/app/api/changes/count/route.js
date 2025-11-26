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

// GET PENDING BATCH COUNT
// Returns count of pending batches for notification badge
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

        // Count pending batches
        const [result] = await pool.execute(
            `SELECT COUNT(*) as count FROM change_batches WHERE status = 'Pending'`
        );

        return NextResponse.json({
            success: true,
            data: {
                pending_count: result[0].count
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
