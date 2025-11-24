import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { department, school_year, work_status } = await req.json();

    // Query the database
    if (work_status === "All") {
      const [rows] = await pool.execute(
        `SELECT users.id, users.last_name, users.first_name, users.middle_initial FROM users INNER JOIN retreat_records 
      ON users.id = retreat_records.user_id WHERE 
      users.department = ? AND retreat_records.school_year = ?
      `,
        [department, school_year]
      );

      if (rows.length > 0) {
        return NextResponse.json(rows, { status: 200 });
      }

      return NextResponse.json(
        {
          message: "Accounts not found!",
          department,
          school_year,
          work_status,
        },
        { status: 404 }
      );
    }

    const [rows] = await pool.execute(
      `SELECT users.id, users.last_name, users.first_name, users.middle_initial FROM users INNER JOIN retreat_records 
      ON users.id = retreat_records.user_id WHERE users.work_status = ? 
      AND users.department = ? AND retreat_records.school_year = ?
      `,
      [work_status, department, school_year]
    );

    if (rows.length > 0) {
      return NextResponse.json(rows, { status: 200 });
    }

    return NextResponse.json(
      { message: "Accounts not found!", department, school_year, work_status },
      { status: 404 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: `Server Error: ${err.message}` },
      { status: 500 }
    );
  }
}
