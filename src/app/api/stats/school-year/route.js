import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

async function columnExists(tableName, columnName) {
    const [rows] = await pool.query(
        `SELECT 1
         FROM INFORMATION_SCHEMA.COLUMNS
         WHERE TABLE_SCHEMA = DATABASE()
           AND TABLE_NAME = ?
           AND COLUMN_NAME = ?
         LIMIT 1`,
        [tableName, columnName]
    );

    return rows.length > 0;
}

function toErrorMessage(error) {
    return (
        error?.message ||
        error?.sqlMessage ||
        error?.code ||
        "Unexpected server error"
    );
}

function isDbUnavailable(error) {
    const code = error?.code;
    return code === "ECONNREFUSED" || code === "PROTOCOL_CONNECTION_LOST" || code === "ETIMEDOUT";
}

// Get school year statistics - aggregated attendance data
export async function GET() {
    try {
        const hasWorkStatus = await columnExists("users", "work_status");

        // Use work_status when available, otherwise count all users.
        const [populationRows] = hasWorkStatus
            ? await pool.query(`
                SELECT COUNT(*) as total_population 
                FROM users 
                WHERE work_status = 'Active'
            `)
            : await pool.query(`
                SELECT COUNT(*) as total_population 
                FROM users
            `);

        // Get attendance stats grouped by school year
        const [attendanceRows] = await pool.query(`
            SELECT 
                r.school_year, 
                COUNT(DISTINCT r.user_id) as actual_attendance -- <--- THIS COUNTS THE ATTENDANCE
            FROM retreat_records r
            GROUP BY r.school_year
        `);

        const totalPopulation = populationRows[0]?.total_population || 0;

        // Map attendance data with total population
        const stats = attendanceRows.map(row => ({
            school_year: row.school_year,
            total_population: totalPopulation,
            actual_attendance: Number(row.actual_attendance) || 0
        }));

        // If no data for current year, add it with 0 attendance
        const currentYear = "2024-2025";
        if (!stats.find(s => s.school_year === currentYear)) {
            stats.unshift({
                school_year: currentYear,
                total_population: totalPopulation,
                actual_attendance: 0
            });
        }

        return NextResponse.json(stats);

    } catch (error) {
        const message = toErrorMessage(error);
        console.error("Database Error:", message, error);

        // Keep dashboard functional when DB is temporarily unavailable.
        if (isDbUnavailable(error)) {
            return NextResponse.json([]);
        }

        return NextResponse.json({ error: message }, { status: 500 });
    }
}