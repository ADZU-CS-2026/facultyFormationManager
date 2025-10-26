// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { verifyAdmin, getAdmin } from "@/lib/auth";
import { setAuthCookies } from "@/lib/jwt";
import { ratelimit } from "@/lib/redis";

// LOGIN API

export async function POST(req) {
  try{
    // const ip = req.headers.get("x-forwarded-from") || "local";
    // const { success } = await ratelimit.limit(ip);

    // if(!success){
    //   // IF LOGIN ATTEMPT REACH LIMIT
    //   return NextResponse.json({message: "Too many attempts! Try again later"}, {status: 429});
    // }

    const {id, password} = await req.json();
    const parsedId = parseInt(id);

    const valid = await verifyAdmin(parsedId, password);

    if(!valid){
      // IF INVALID CREDENTIALS
      return NextResponse.json({message: "Credentials incorrect!"}, {status: 401});
    }

    const adminData = getAdmin(parsedId);
    // LOGGED IN
    return await setAuthCookies(adminData);
  }
  catch(err) {
    return NextResponse.json({message: `Server Error: ${err.message}`}, {status: 500});
  }
}
