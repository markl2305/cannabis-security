import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { name, email, facilityType, status, timeline, notes } = body;

  try {
    await resend.emails.send({
      from: "security@callordut.com", // Must be verified with Resend
      to: "mark@callordut.com",
      subject: "New Cannabis Security Lead",
      html: `
        <h2>New Cannabis Security Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Facility Type:</strong> ${facilityType}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Notes:</strong> ${notes || "None"}</p>
      `,
    });

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ status: "error", error });
  }
}
