import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { role } = await req.json();
    const [rows] = await pool.execute(
      "SELECT * FROM adminaccount WHERE role = ?",
      [role]
    );
    if (rows.length <= 0) {
      return NextResponse.json(
        { message: "No staff accounts" },
        { status: 404 }
      );
    }
    return NextResponse.json(rows, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { Error: `Server Error: ${err.message}` },
      { status: 500 }
    );
  }
}
