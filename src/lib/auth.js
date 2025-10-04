import bcrypt from "bcryptjs";

// TEMPORARY ACCOUNT
const ADMIN = {
    id: "230692",
    passwordHash: bcrypt.hashSync("adzuformation", 10),
    name: "ADMINISTRATOR",
    role: "admin"
}

// ID PASSWORD AUTHENTICATION
export async function verifyAdmin(id, password){
    if(id !== ADMIN.id){
        return false;
    }

    const match = await bcrypt.compare(password, ADMIN.passwordHash);

    if(!match){
        return false;
    }

    return true;
}

// RETURN ADMIN DATA
export async function getAdmin(){
    return ADMIN;
}

  