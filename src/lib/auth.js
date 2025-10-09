import bcrypt from "bcryptjs";
import { pool } from "./db";

// ID PASSWORD AUTHENTICATION
export async function verifyAdmin(id, password){

    const parsedID = parseInt(id);

    const [row] = await pool.execute("SELECT * FROM adminaccount WHERE id = ?", [parsedID]);
    const ADMIN = row.find(r => r.id === parsedID);

    if(!ADMIN) {
        return false;
    }
    if(parsedID !== ADMIN.id){
        return false;
    }
    const match = await bcrypt.compare(password, ADMIN.password);
    if(!match){
        return false;
    }
    return true;
}

// RETURN ADMIN DATA
export async function getAdmin(id){
    const parsedID = parseInt(id);
    const [row] = await pool.execute("SELECT * FROM adminaccount WHERE id = ?", [parsedID]);
    const ADMIN = row.find(r => r.id === parsedID);
    return ADMIN;
}

  