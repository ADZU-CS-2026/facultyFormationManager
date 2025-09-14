// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { verifyAdmin, getAdmin } from "@/lib/auth";
import { setAuthCookies } from "@/lib/jwt";
import { ratelimit } from "@/lib/redis";

export async function POST(req) {
    const ip = req.headers.get("x-forwarded-from") || "local";
    const { success } = await ratelimit.limit(ip);

    if(!success){
      return NextResponse.json({message: "Too many attempts! Try again later"}, {status: 429});
    }

    const {id, password} = await req.json();
    const valid = await verifyAdmin(id, password);

    if(!valid){
      return NextResponse.json({message: "Credentials incorrect!"}, {status: 401});
    }

    const adminData = getAdmin();
    return await setAuthCookies(adminData);

}
