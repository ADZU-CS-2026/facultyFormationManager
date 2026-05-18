import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { jwtVerify } from "jose";

async function verifyJwt(token) {
  const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

// FETCH ADMIN DATA FOR AUTHENTICATION AND DISPLAY

export async function POST(req) {
  const token = req.cookies.get("accessToken")?.value;

  if (!token) {
    return NextResponse.json(
      { error: "No access token found" },
      { status: 401 }
    );
  }

  const payload = await verifyJwt(token);
  if (!payload?.sub) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }

  const id = String(payload.sub).trim();

  try {
    const [rows] = await pool.execute(
      "SELECT * FROM adminaccount WHERE id = ?",
      [id]
    );

    if (rows.length > 0) {
      return NextResponse.json(rows, { status: 200 });
    }

    return NextResponse.json({ message: "Id not found!" }, { status: 404 });
  } catch (err) {
    return NextResponse.json(
      { message: `Server Error: ${err.message}` },
      { status: 500 }
    );
  }
}
