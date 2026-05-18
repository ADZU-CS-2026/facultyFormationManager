import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST() {
  const email = "co230691@adzu.edu.ph";

  const [rows] = await pool.execute(
    "SELECT * FROM forgotpassword WHERE email = ?",
    [email]
  );

  if (rows.length <= 0) {
    return NextResponse.json(
      { codeExists: false, isExpired: true, remainingTime: 0 },
      { status: 200 }
    );
  }

  const user = rows[0];

  // Check if code is still valid
  if (!user.login_code || !user.login_expire) {
    return NextResponse.json(
      { codeExists: false, isExpired: true, remainingTime: 0 },
      { status: 200 }
    );
  }

  const now = new Date();
  const expireTime = new Date(user.login_expire);

  if (now > expireTime) {
    // Code expired
    return NextResponse.json(
      { codeExists: true, isExpired: true, remainingTime: 0 },
      { status: 200 }
    );
  }

  // Code is valid - calculate remaining time in seconds
  const remainingMs = expireTime.getTime() - now.getTime();
  const remainingSeconds = Math.ceil(remainingMs / 1000);

  return NextResponse.json(
    { codeExists: true, isExpired: false, remainingTime: remainingSeconds },
    { status: 200 }
  );
}
