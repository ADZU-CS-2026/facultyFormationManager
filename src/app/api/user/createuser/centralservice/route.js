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

    const [resultDGY1] = await pool.execute(
      `
        INSERT INTO retreat_records (user_id, retreat_type, school_year) 
        VALUES (?, ?, ?)
        `,
      [resultId, "DGY1", school_year]
    );

    if (resultDGY1.affectedRows <= 0) {
      return NextResponse.json(
        { message: "Insert unsuccessful!" },
        { status: 404 }
      );
    }

    const [resultDGY2] = await pool.execute(
      `
        INSERT INTO retreat_records (user_id, retreat_type, school_year) 
        VALUES (?, ?, ?)
        `,
      [resultId, "DGY2", school_year]
    );

    if (resultDGY2.affectedRows <= 0) {
      return NextResponse.json(
        { message: "Insert unsuccessful!" },
        { status: 404 }
      );
    }

    const [resultDGY3] = await pool.execute(
      `
        INSERT INTO retreat_records (user_id, retreat_type, school_year) 
        VALUES (?, ?, ?)
        `,
      [resultId, "DGY3", school_year]
    );

    if (resultDGY3.affectedRows <= 0) {
      return NextResponse.json(
        { message: "Insert unsuccessful!" },
        { status: 404 }
      );
    }

    const [resultDGY41] = await pool.execute(
      `
        INSERT INTO retreat_records (user_id, retreat_type, school_year) 
        VALUES (?, ?, ?)
        `,
      [resultId, "DGY4.1", school_year]
    );

    if (resultDGY41.affectedRows <= 0) {
      return NextResponse.json(
        { message: "Insert unsuccessful!" },
        { status: 404 }
      );
    }

    const [resultDGY42] = await pool.execute(
      `
        INSERT INTO retreat_records (user_id, retreat_type, school_year) 
        VALUES (?, ?, ?)
        `,
      [resultId, "DGY4.2 3D Retreat", school_year]
    );

    if (resultDGY42.affectedRows <= 0) {
      return NextResponse.json(
        { message: "Insert unsuccessful!" },
        { status: 404 }
      );
    }

    const [resultDGY51] = await pool.execute(
      `
        INSERT INTO retreat_records (user_id, retreat_type, school_year) 
        VALUES (?, ?, ?)
        `,
      [resultId, "DGY5.1 IPC", school_year]
    );

    if (resultDGY51.affectedRows <= 0) {
      return NextResponse.json(
        { message: "Insert unsuccessful!" },
        { status: 404 }
      );
    }

    const [resultDGY52] = await pool.execute(
      `
        INSERT INTO retreat_records (user_id, retreat_type, school_year) 
        VALUES (?, ?, ?)
        `,
      [resultId, "DGY5.2 3D Retreat", school_year]
    );

    if (resultDGY52.affectedRows <= 0) {
      return NextResponse.json(
        { message: "Insert unsuccessful!" },
        { status: 404 }
      );
    }

    const [resultSD] = await pool.execute(
      `
        INSERT INTO retreat_records (user_id, retreat_type, school_year) 
        VALUES (?, ?, ?)
        `,
      [resultId, "SD", school_year]
    );

    if (resultSD.affectedRows <= 0) {
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
    return NextResponse.json(
      { message: `Server Error: ${err.message}` },
      { status: 500 }
    );
  }
}
