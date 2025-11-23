import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

// ONLY FOR UPDATING CREDENTIALS
export async function PATCH(req) {
  try {
    const { id, newPass } = await req.json();
    const parsedID = parseInt(id);

    const [result] = await pool.execute(
      "UPDATE adminaccount SET password = ? WHERE id = ?",
      [newPass, parsedID]
    );
    if (result.affectedRows > 0) {
      return NextResponse.json(
        { message: "Updated password!" },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { message: "Password not updated!" },
      { status: 404 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: `Server Error: ${err}` },
      { status: 500 }
    );
  }
}
