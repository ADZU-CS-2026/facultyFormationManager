import { pool } from "./db";

// ID PASSWORD AUTHENTICATION
export async function verifyAdmin(id, password) {
    const [row] = await pool.execute("SELECT * FROM adminaccount WHERE id = ?", [id]);
    const ADMIN = row.find(r => String(r.id) === String(id));

    if (!ADMIN) {
        return false;
    }
    if (String(id) !== String(ADMIN.id)) {
        return false;
    }
    if (password !== ADMIN.password) {
        return false;
    }
    return true;
}

// RETURN ADMIN DATA
export async function getAdmin(id) {
    const [row] = await pool.execute("SELECT * FROM adminaccount WHERE id = ?", [id]);
    const ADMIN = row.find(r => String(r.id) === String(id));
    return ADMIN;
}

