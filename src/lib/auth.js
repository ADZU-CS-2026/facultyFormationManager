import { pool } from "./db";

// ID PASSWORD AUTHENTICATION
export async function verifyAdmin(id, password){
    const [row] = await pool.execute("SELECT * FROM adminaccount WHERE id = ?", [id]);
    const ADMIN = row.find(r => r.id === id);

    if(!ADMIN) {
        return false;
    }
    if(id !== ADMIN.id){
        return false;
    }
    if(password !== ADMIN.password){
        return false;
    }
    return true;
}

// RETURN ADMIN DATA
export async function getAdmin(id){
    const [row] = await pool.execute("SELECT * FROM adminaccount WHERE id = ?", [id]);
    const ADMIN = row.find(r => r.id === id);
    return ADMIN;
}

  