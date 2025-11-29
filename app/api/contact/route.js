import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req) {
  try {
    const body = await req.json();

    const name = body?.name?.trim() || "";
    const email = body?.email?.trim() || "";
    const phone = body?.phone?.trim() || "";
    const role = body?.role?.trim() || "";
    const facilityType = body?.facilityType?.trim() || "";
    const state = body?.state?.trim() || "";
    const urgency = body?.urgency?.trim() || "";
    const details = body?.details?.trim() || "";
    const sendChecklist = Boolean(body?.sendChecklist);

    if (!name || !email || !phone || !role || !facilityType || !state || !urgency) {
      return NextResponse.json(
        { ok: false, message: "Please complete the required fields." },
        { status: 400 }
      );
    }

    if (!resend) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Email service not configured. Please add RESEND_API_KEY and try again.",
        },
        { status: 500 }
      );
    }

    const fromAddress =
      process.env.LEAD_FROM_EMAIL || "mark@mail.callordut.com";
    const toAddress =
      process.env.LEAD_TO_EMAIL || "mark@mail.callordut.com";

    // Always include the owner inbox plus any env override; also send a copy to the submitter.
    const recipientSet = new Set(
      [toAddress, "mark@mail.callordut.com", email].filter(Boolean)
    );
    const primaryRecipients = Array.from(recipientSet);

    const html = `
      <h2>New Cannabis Security Lead</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Facility Type:</strong> ${facilityType}</p>
      <p><strong>State:</strong> ${state}</p>
      <p><strong>Urgency:</strong> ${urgency}</p>
      <p><strong>Project Details:</strong><br/>${(details || "Not provided").replace(/\n/g, "<br/>")}</p>
      <p><strong>Checklist Requested:</strong> ${sendChecklist ? "Yes" : "No"}</p>
      <p><strong>Source:</strong> Cannabis Security Landing (security.callordut.com)</p>
    `;

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: primaryRecipients,
      reply_to: email,
      subject: `New Cannabis Security Lead — ${name}`,
      html,
    });

    if (error || !data?.id) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          ok: false,
          message:
            "We couldn't send your request right now. Please try again in a moment.",
        },
        { status: 502 }
      );
    }

    // If checklist requested, send the checklist link directly to the requester
    if (sendChecklist && email) {
      const checklistUrl =
        process.env.CHECKLIST_URL ||
        "https://security.callordut.com/Cannabis%20Facility%20Security%20Readiness%20Checklist.pdf";
      try {
        await resend.emails.send({
          from: fromAddress,
          to: email,
          subject: "Your Cannabis Security Checklist",
          html: `
            <p>Hi ${name.split(" ")[0] || "there"},</p>
            <p>Here is your Cannabis Security Readiness Checklist:</p>
            <p><a href="${checklistUrl}">${checklistUrl}</a></p>
            <p>If you’d like us to review your facility for compliance, reply here or book a free assessment on our site.</p>
            <p>— CalLord Unified Technologies</p>
          `,
        });
      } catch (err) {
        console.error("Checklist send error:", err);
      }
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json(
      { ok: false, message: "Server error. Please try again shortly." },
      { status: 500 }
    );
  }
}
