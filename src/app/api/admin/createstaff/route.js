import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req) {
  const { id, role, password } = await req.json();
  const normalizedId = String(id).trim();

  try {
    const [results] = await pool.execute(
      "INSERT INTO adminaccount (id, role, password) VALUES (?, ?, ?)",
      [normalizedId, role, password]
    );

    if (results.affectedRows > 0) {
      return NextResponse.json(
        { message: "Staff Account created!" },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { message: "Create Staff Account invalid!" },
      { status: 404 }
    );
  } catch (err) {
    console.log(err.message);
    return NextResponse.json(
      { message: `Server Error: ${err.message}` },
      { status: 500 }
    );
  }
}
