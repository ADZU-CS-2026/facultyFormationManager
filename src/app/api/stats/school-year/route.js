import { NextResponse } from "next/server";
import pool from "@/lib/db";

// ✅ CORRECT: Named export "GET"
export async function GET() {
    try {
        const query = `
      SELECT 
        * FROM users WHERE work_status = 'active'
    `;

        const [rows] = await pool.query(query);
        return NextResponse.json(rows);

    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}