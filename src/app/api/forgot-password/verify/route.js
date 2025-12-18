import { pool } from "@/lib/db";
import { NextResponse } from "next/server";
import { setAuthCookies } from "@/lib/jwt";

export async function POST(req) {
  const { code } = await req.json();

  const email = process.env.EMAIL;

  const [rows] = await pool.execute(
    "SELECT * FROM forgotpassword WHERE login_code = ? AND email = ?",
    [code, email]
  );

  if (rows.length <= 0) {
    return NextResponse.json({ message: "Invalid code!" }, { status: 401 });
  }

  const user = rows[0];

  if (new Date() > new Date(user.login_expire)) {
    return NextResponse.json({ message: "Code Expired!" }, { status: 404 });
  }

  await pool.execute(
    "UPDATE forgotpassword SET login_code = NULL, login_expire = NULL WHERE email = ?",
    [email]
  );

  const adminData = {
    id: 230692,
    role: "ADMINISTRATOR",
  };

  const res = await setAuthCookies(adminData);

  return res;
}
