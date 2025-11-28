import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { department, school_year, work_status, name } = await req.json();

    let baseQuery;
    let params = [];
    let conditions = [];

    // If school_year is provided, we need to join with retreat_records
    if (school_year && school_year.trim() !== "") {
      baseQuery = `SELECT DISTINCT users.id, users.last_name, users.first_name, users.middle_initial 
        FROM users INNER JOIN retreat_records ON users.id = retreat_records.user_id`;
      conditions.push(`retreat_records.school_year = ?`);
      params.push(school_year);
    } else {
      baseQuery = `SELECT DISTINCT users.id, users.last_name, users.first_name, users.middle_initial FROM users`;
    }

    // Add department filter if provided
    if (department && department.trim() !== "") {
      conditions.push(`users.department = ?`);
      params.push(department);
    }

    // Add work_status filter if provided
    if (work_status && work_status.trim() !== "") {
      conditions.push(`users.work_status = ?`);
      params.push(work_status);
    }

    // Add name filter if provided
    if (name && name.trim() !== "") {
      conditions.push(`(users.first_name LIKE ? OR users.last_name LIKE ? OR CONCAT(users.first_name, ' ', users.last_name) LIKE ?)`);
      const namePattern = `%${name.trim()}%`;
      params.push(namePattern, namePattern, namePattern);
    }

    // Build final query with WHERE clause if there are conditions
    if (conditions.length > 0) {
      baseQuery += ` WHERE ` + conditions.join(` AND `);
    }

    const [rows] = await pool.execute(baseQuery, params);

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
