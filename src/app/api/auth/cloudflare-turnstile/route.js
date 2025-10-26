import { NextResponse } from "next/server";

export async function POST(req){

    try{
        
        const { token } = await req.json();
        const secret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
        const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `secret=${secret}&response=${token}`
        });
        const data = await res.json();

        if(process.env.NODE_ENV !== "production"){
            return NextResponse.json({success: true}, {status: 200});
        }
        return NextResponse.json(data, {status: 200});
        
    }   
    catch(err){
        return NextResponse.json({message: `Server Error: ${err.message}`}, {status: 500});
    } 
    
}
