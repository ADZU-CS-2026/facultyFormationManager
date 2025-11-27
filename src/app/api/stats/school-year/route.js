import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

// Get school year statistics - aggregated attendance data
export async function GET() {
    try {
        // Get total population (all active users)
        const [populationRows] = await pool.query(`
            SELECT COUNT(*) as total_population 
            FROM users 
            WHERE work_status = 'Active'
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
        console.error("Database Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}