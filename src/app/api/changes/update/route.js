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

// UPDATE PENDING CHANGE
// Staff edits a pending change (only if batch is still in Draft status)
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

        // Get request body
        const { change_id, new_values, old_values } = await req.json();

        if (!change_id) {
            return NextResponse.json(
                { success: false, message: "change_id is required" },
                { status: 400 }
            );
        }

        // Verify the change exists and belongs to a draft batch owned by this user
        const [change] = await pool.execute(
            `SELECT pc.id, pc.batch_id, cb.status, cb.submitted_by 
             FROM pending_changes pc
             JOIN change_batches cb ON pc.batch_id = cb.id
             WHERE pc.id = ?`,
            [change_id]
        );

        if (change.length === 0) {
            return NextResponse.json(
                { success: false, message: "Change not found" },
                { status: 404 }
            );
        }

        if (change[0].submitted_by !== userId) {
            return NextResponse.json(
                { success: false, message: "You can only edit your own changes" },
                { status: 403 }
            );
        }

        if (change[0].status !== 'Draft') {
            return NextResponse.json(
                { success: false, message: "Cannot edit changes in a batch that is not in Draft status" },
                { status: 400 }
            );
        }

        // Build update query
        const updates = [];
        const params = [];

        if (new_values !== undefined) {
            updates.push('new_values = ?');
            params.push(JSON.stringify(new_values));
        }

        if (old_values !== undefined) {
            updates.push('old_values = ?');
            params.push(old_values ? JSON.stringify(old_values) : null);
        }

        if (updates.length === 0) {
            return NextResponse.json(
                { success: false, message: "No fields to update" },
                { status: 400 }
            );
        }

        params.push(change_id);

        await pool.execute(
            `UPDATE pending_changes SET ${updates.join(', ')} WHERE id = ?`,
            params
        );

        return NextResponse.json({
            success: true,
            message: "Change updated successfully"
        }, { status: 200 });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, message: `Server error: ${error.message}` },
            { status: 500 }
        );
    }
}

// DELETE PENDING CHANGE
// Staff removes a pending change from their draft batch
export async function DELETE(req) {
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

        // Get change_id from URL params
        const { searchParams } = new URL(req.url);
        const change_id = searchParams.get('change_id');

        if (!change_id) {
            return NextResponse.json(
                { success: false, message: "change_id is required" },
                { status: 400 }
            );
        }

        // Verify the change exists and belongs to a draft batch owned by this user
        const [change] = await pool.execute(
            `SELECT pc.id, pc.batch_id, cb.status, cb.submitted_by 
             FROM pending_changes pc
             JOIN change_batches cb ON pc.batch_id = cb.id
             WHERE pc.id = ?`,
            [change_id]
        );

        if (change.length === 0) {
            return NextResponse.json(
                { success: false, message: "Change not found" },
                { status: 404 }
            );
        }

        if (change[0].submitted_by !== userId) {
            return NextResponse.json(
                { success: false, message: "You can only delete your own changes" },
                { status: 403 }
            );
        }

        if (change[0].status !== 'Draft') {
            return NextResponse.json(
                { success: false, message: "Cannot delete changes in a batch that is not in Draft status" },
                { status: 400 }
            );
        }

        const batchId = change[0].batch_id;

        // Delete the change
        await pool.execute(
            `DELETE FROM pending_changes WHERE id = ?`,
            [change_id]
        );

        // Check if batch is now empty - if so, delete the batch too
        const [remaining] = await pool.execute(
            `SELECT COUNT(*) as count FROM pending_changes WHERE batch_id = ?`,
            [batchId]
        );

        if (remaining[0].count === 0) {
            await pool.execute(
                `DELETE FROM change_batches WHERE id = ?`,
                [batchId]
            );
            return NextResponse.json({
                success: true,
                message: "Change deleted. Empty batch was also removed."
            }, { status: 200 });
        }

        return NextResponse.json({
            success: true,
            message: "Change deleted successfully"
        }, { status: 200 });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, message: `Server error: ${error.message}` },
            { status: 500 }
        );
    }
}
