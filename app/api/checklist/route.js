import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const CHECKLIST_URL =
  process.env.CHECKLIST_URL ||
  "https://security.callordut.com/Cannabis%20Facility%20Security%20Readiness%20Checklist.pdf";

export async function POST(req) {
  try {
    const body = await req.json();

    const name = body?.name?.trim() || "";
    const email = body?.email?.trim() || "";
    const state = body?.state?.trim() || "";
    const facilityType = body?.facilityType?.trim() || "";
    const needs = body?.needs?.trim() || "";

    if (!name || !email) {
      return NextResponse.json({ ok: false, message: "Name and email are required." }, { status: 400 });
    }

    if (!resend) {
      return NextResponse.json(
        {
          ok: false,
          message: "Email service not configured. Please add RESEND_API_KEY and try again.",
        },
        { status: 500 }
      );
    }

    const fromAddress = process.env.LEAD_FROM_EMAIL || "mark@mail.callordut.com";
    const toAddress = process.env.LEAD_TO_EMAIL || "mark@mail.callordut.com";

    const html = `
      <h2>Checklist Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>State:</strong> ${state || "Not provided"}</p>
      <p><strong>Facility Type:</strong> ${facilityType || "Not provided"}</p>
      <p><strong>Needs:</strong><br/>${(needs || "Not provided").replace(/\n/g, "<br/>")}</p>
      <p><strong>Source:</strong> Cannabis Checklist Form (security.callordut.com)</p>
      <p><strong>Checklist URL:</strong> <a href="${CHECKLIST_URL}">${CHECKLIST_URL}</a></p>
    `;

    const recipients = Array.from(new Set([toAddress, email].filter(Boolean)));

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: recipients,
      reply_to: email,
      subject: `Checklist Request — ${name}`,
      html,
    });

    if (error || !data?.id) {
      console.error("Resend error (checklist):", error);
      return NextResponse.json(
        { ok: false, message: "We couldn't send the checklist right now. Please try again shortly." },
        { status: 502 }
      );
    }

    // Send a direct checklist email to the requester only
    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: "Your Cannabis Security Checklist",
      html: `
        <p>Hi ${name.split(" ")[0] || "there"},</p>
        <p>Here is your Cannabis Security Inspection Checklist:</p>
        <p><a href="${CHECKLIST_URL}">${CHECKLIST_URL}</a></p>
        <p>If you’d like us to review your facility for compliance, reply here or book a free assessment on our site.</p>
        <p>— CalLord Unified Technologies</p>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Checklist API error:", err);
    return NextResponse.json(
      { ok: false, message: "Server error. Please try again shortly." },
      { status: 500 }
    );
  }
}
