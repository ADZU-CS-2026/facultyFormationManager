import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req) {
  const {
    first_name,
    last_name,
    middle_initial,
    department,
    position = null,
    office = null,
    status = null,
    school_year,
  } = await req.json();
  try {
    const [resultUser] = await pool.execute(
      `INSERT INTO 
        users 
        (first_name, last_name, middle_initial, department, position, office, status) 
         VALUES (?, ?, ?, ?, ?, ?, ?);
        `,
      [
        first_name,
        last_name,
        middle_initial,
        department,
        position,
        office,
        status,
      ]
    );

    if (resultUser.affectedRows <= 0) {
      return NextResponse.json(
        { message: "Insert unsuccessful!" },
        { status: 404 }
      );
    }

    const resultId = resultUser.insertId;

    console.log(resultId);

    const [result3DRetreat] = await pool.execute(
      `
        INSERT INTO retreat_records (user_id, retreat_type, school_year) 
        VALUES (?, ?, ?)
        `,
      [resultId, "3D Retreat", school_year]
    );

    if (result3DRetreat.affectedRows <= 0) {
      return NextResponse.json(
        { message: "Insert unsuccessful!" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Insert Successfully!" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: `Server Error: ${err.message}` });
  }
}
