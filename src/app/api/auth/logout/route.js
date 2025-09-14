import { NextResponse } from "next/server";

export function POST(){
  const res = NextResponse.json({message: "Logged out!"}, {status: 200});
  res.cookies.set({
    name: "accessToken",
    value: "",
    path: "/",
    maxAge: 0
  })

  res.cookies.set({
    name: "refreshToken",
    value: "",
    path: "/",
    maxAge: 0
  })

  return res;
}
 
