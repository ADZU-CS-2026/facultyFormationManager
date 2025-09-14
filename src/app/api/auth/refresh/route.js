import { NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";

async function verify(token, secretEnv){
  const secret = new TextEncoder().encode(secretEnv);
  try{
    const { payload } = await jwtVerify(token, secret);
    return payload
  }
  catch{
    return null;
  }
}


export async function POST(req) {
  const refreshToken = req.cookies.get("refreshToken")?.value;

  if(!refreshToken){
    return NextResponse.json({ok: false}, {status: 401});
  }

  const payload = await verify(refreshToken, process.env.JWT_REFRESH_SECRET);

  if(!payload){
    return NextResponse.json({ok: false}, {status: 401});
  }
  
  const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);
  const accessToken = await new SignJWT({sub: payload.sub, role: payload.role})
    .setProtectedHeader({alg: "HS256", typ: "JWT"})
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(secret);

  const res = NextResponse.json({ok: true}, {status: 200});

  res.cookies.set({
    name: "accessToken",
    value: accessToken,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: "15m"
  })

  return res;

}