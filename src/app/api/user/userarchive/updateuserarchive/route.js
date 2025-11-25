import { NextResponse } from "next/server";
import { pool } from "@/lib/db";


export async function PATCH(req) {
    try {
        const { id } = await req.json();


        if (!id) {
            return NextResponse.json(
                { success: false, message: "User ID is required" },
                { status: 400 }
            )
        }

        const [users] = await pool.execute(`
            SELECT id, work_status FROM users WHERE id = ?
            `, [id]
        )

        if (users.length === 0) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 404 }
            );
        }

        const currentStatus = users[0].work_status;
        const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';

        const [result] = await pool.execute(`
            UPDATE users SET work_status = ? WHERE id = ?
            `, [newStatus, id]);


        if (result.affectedRows === 0) {
            return NextResponse.json(
                { success: false, message: "Failed to update user status" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: `User status updated from ${currentStatus} to ${newStatus}`,
            data: {
                id,
                previous_status: currentStatus,
                new_status: newStatus
            }
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { message: `Server Error: ${err.message}` },
            { status: 500 }
        );
    }
}