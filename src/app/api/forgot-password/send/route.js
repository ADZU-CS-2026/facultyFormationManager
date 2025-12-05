import { pool } from "@/lib/db";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST() {
  const email = process.env.EMAIL;
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expires = new Date(Date.now() + 5 * 60 * 1000);

  const [result] = await pool.execute(
    `UPDATE forgotpassword SET login_code = ?, login_expire = ? WHERE email = ?`,
    [code, expires, email]
  );

  if (result.affectedRows < 0) {
    return NextResponse.json(
      { message: "Send Code Unsuccessful!" },
      { status: 404 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Your Login Code",
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 40px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
      
      <h2 style="color: #333333;">Your Login Code</h2>
      
      <p style="font-size: 24px; font-weight: bold; color: #1a73e8; margin: 20px 0;">
        ${code}
      </p>
      
      <p style="font-size: 14px; color: #555555; margin-top: 30px;">
        Enter this code in the login page to access your account. <br/>
        If you did not request this code, please ignore this email.
      </p>

      <p style="font-size: 12px; color: #aaaaaa; margin-top: 40px;">
        © ${new Date().getFullYear()} ADZU Formation System. All rights reserved.
      </p>

    </div>
  </div>
  `,
  });

  return NextResponse.json(
    { message: "Code sent successfully!" },
    { status: 200 }
  );
}
