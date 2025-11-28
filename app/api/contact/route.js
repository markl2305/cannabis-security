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
    const company = body?.company?.trim() || "";
    const location = body?.location?.trim() || "";
    const details = body?.details?.trim() || "";
    const timeline = body?.timeline?.trim() || "";
    const status = body?.status?.trim() || "";

    if (!name || !email || !phone || !company || !location || !details) {
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
      process.env.LEAD_FROM_EMAIL ||
      "CalLord Unified Technologies <onboarding@resend.dev>";
    const toAddress =
      process.env.LEAD_TO_EMAIL || "mark@mail.callordut.com";

    const html = `
      <h2>New Cannabis Security Lead</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Facility / Company:</strong> ${company}</p>
      <p><strong>City & State:</strong> ${location}</p>
      <p><strong>Timeline:</strong> ${timeline || "Not provided"}</p>
      <p><strong>Project Stage:</strong> ${status || "Not provided"}</p>
      <p><strong>Project Details:</strong><br/>${details.replace(/\n/g, "<br/>")}</p>
      <p><strong>Source:</strong> Cannabis Security Landing (security.callordut.com)</p>
    `;

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
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

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json(
      { ok: false, message: "Server error. Please try again shortly." },
      { status: 500 }
    );
  }
}
