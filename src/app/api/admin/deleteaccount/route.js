import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const { id } = await req.json();
  const parseId = parseInt(id);

  console.log(id);

  try {
    const [result] = await pool.execute(
      `DELETE FROM adminaccount WHERE id = ?`,
      [parseId]
    );
    if (result.affectedRows > 0) {
      return NextResponse.json(
        { message: "Account Deleted Successfully!" },
        { status: 200 }
      );
    }
    return NextResponse.json({ message: "ID not found!" }, { status: 404 });
  } catch (err) {
    return NextResponse.json(
      { message: `Server Error: ${err.message}` },
      { status: 500 }
    );
  }
}
