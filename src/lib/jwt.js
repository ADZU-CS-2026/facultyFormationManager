import { SignJWT } from "jose";
import { NextResponse } from "next/server";

// SECRET ENV
const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

// CREATING TOKEN
export async function signToken(payload, secretEnv, expiresIn) {
  const secret = new TextEncoder().encode(secretEnv);
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secret);

  return jwt;
}

// SET TOKEN TO COOKIE THEN RESPONSE
export async function setAuthCookies(admin) {
  const accessToken = await signToken(
    { sub: admin.id, role: admin.role },
    ACCESS_SECRET,
    "15m"
  );
  const refreshToken = await signToken(
    { sub: admin.id, role: admin.role },
    REFRESH_SECRET,
    "7d"
  );

  const res = NextResponse.json({ message: "Logged In" }, { status: 200 });

  res.cookies.set({
    name: "accessToken",
    value: accessToken,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 15 * 60,
  });

  res.cookies.set({
    name: "refreshToken",
    value: refreshToken,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    // 7 days = 7 * 24 * 60 * 60 = 604800 seconds
    maxAge: 7 * 24 * 60 * 60,
  });

  return res;
}
