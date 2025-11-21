import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

// VERIFYING JWT

async function verifyJwt(token) {
  const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

// MIDDLEWARE
export async function middleware(req) {
  const path = req.nextUrl.pathname;

  // CHECK ACCESS TOKEN
  const accessToken = req.cookies.get("accessToken")?.value;
  if (accessToken) {
    const payload = await verifyJwt(accessToken);
    if (payload) {
      // IF OPEN ADMIN SETTINGS FOR VERIFICATION
      if (path.startsWith("/admin-settings")) {
        if (payload.role === "ADMINISTRATOR") {
          return NextResponse.next();
        }
        const url = new URL("/", req.url);
        return NextResponse.redirect(url);
      }
      return NextResponse.next();
    }
  }

  // CHECK REFRESH TOKEN
  const resUrl = new URL("/api/auth/refresh", req.url);
  const resFetch = await fetch(resUrl, {
    method: "POST",
    headers: {
      cookie: req.headers.get("cookie") ?? "",
    },
  });

  if (resFetch.ok) {
    const res = NextResponse.next();
    const setCookie = resFetch.headers.get("set-cookie");
    if (setCookie) {
      res.headers.set("set-cookie", setCookie);
      return res;
    }
  }

  // STRAIGHT TO LOGIN
  const loginUrl = new URL("/login", req.url);
  return NextResponse.redirect(loginUrl);
}

// PROTECTED ROUTES
export const config = {
  matcher: [
    "/",
    "/records/:path*",
    "/account-information",
    "/about",
    "/events",
    "/admin-settings",
    "/mission&vision",
  ],
};
