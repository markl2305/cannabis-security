"use server";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, facilityType, status, timeline, notes } = body;

    const messageHtml = `
      <h2>New Cannabis Security Lead</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Facility Type:</strong> ${facilityType}</p>
      <p><strong>Status:</strong> ${status}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <p><strong>Notes:</strong> ${notes || "None provided"}</p>
    `;

    const data = await resend.emails.send({
      from: process.env.LEAD_FROM_EMAIL,
      to: [process.env.LEAD_TO_EMAIL],
      subject: "New Cannabis Security Lead",
      html: messageHtml,
    });

    console.log("Email send result:", data);

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
