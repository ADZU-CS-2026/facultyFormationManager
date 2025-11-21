import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export function POST() {
  // DELETE ACCESS AND REFRESH TOKEN IF LOOGED OUT
  const res = NextResponse.json({ message: "Logged out!" }, { status: 200 });
  res.cookies.set({
    name: "accessToken",
    value: "",
    path: "/",
    maxAge: 0,
  });

  res.cookies.set({
    name: "refreshToken",
    value: "",
    path: "/",
    maxAge: 0,
  });

  revalidateTag("admin");

  return res;
}
