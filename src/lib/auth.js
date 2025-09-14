import bcrypt from "bcryptjs";

const ADMIN = {
    id: "230999",
    passwordHash: bcrypt.hashSync("drake", 10),
    firstname:  "JOSHUA EDUARD",
    lastname: "GUIRITAN",
    role: "admin"
}

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

export async function getAdmin(){
    return ADMIN;
}

  