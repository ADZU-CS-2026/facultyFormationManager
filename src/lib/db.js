import mysql from "mysql2/promise";

// MYSQL DATABASE CONNECTION VIA .env
export const pool = mysql.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

// CHECK /db FOLDER FOR THE SQL QUERY OF THE ADMIN ACCOUNT DATABASE