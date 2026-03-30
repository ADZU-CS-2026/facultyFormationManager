import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { id } = await req.json();
  const normalizedId = String(id).trim();

  try {
    const [row] = await pool.execute(
      "SELECT * FROM adminaccount WHERE id = ?",
      [normalizedId]
    );
    if (row.length > 0) {
      return NextResponse.json(row, { status: 200 });
    }
    return NextResponse.json({ message: "Id not found!" }, { status: 404 });
  } catch (err) {
    return NextResponse.json(
      { message: `Server Error: ${err.message}` },
      { status: 500 }
    );
  }
}
