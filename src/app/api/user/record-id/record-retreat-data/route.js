import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

async function hasVenueColumn() {
  try {
    const [rows] = await pool.execute(
      `SHOW COLUMNS FROM retreat_records LIKE 'venue'`
    );
    return rows.length > 0;
  } catch {
    return false;
  }
}

export async function POST(req) {
  const { id } = await req.json();
  const parseId = parseInt(id);

  try {
    const venueEnabled = await hasVenueColumn();

    let rows;
    if (venueEnabled) {
      [rows] = await pool.execute(
        `SELECT id, retreat_type, school_year, start_date, completion_date, attendance_status, venue FROM retreat_records WHERE user_id = ? `,
        [parseId]
      );
    } else {
      [rows] = await pool.execute(
        `SELECT id, retreat_type, school_year, start_date, completion_date, attendance_status, NULL AS venue FROM retreat_records WHERE user_id = ? `,
        [parseId]
      );
    }

    if (rows.length > 0) {
      return NextResponse.json(rows, { status: 200 });
    }

    return NextResponse.json({ message: "ID not found" }, { status: 404 });
  } catch (err) {
    return NextResponse.json(
      { message: `Server Error: ${err.message}` },
      { status: 500 }
    );
  }
}
