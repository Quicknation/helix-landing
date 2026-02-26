import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }
    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Log signup — always visible in Vercel logs
    console.log(
      `[HELIX BETA FOUNDERS] New Beta Founder: ${name} <${email}> — ${new Date().toISOString()}`
    );

    // Send notification email via Resend (optional — configure in .env.local)
    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.RESEND_TO_EMAIL;

    if (resendApiKey && notifyEmail) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "HELIX Waitlist <onboarding@resend.dev>",
            to: [notifyEmail],
            subject: `HELIX Beta Founders: New sign-up from ${name}`,
            html: `
              <h2>New HELIX Beta Founder</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Time:</strong> ${new Date().toISOString()}</p>
            `,
          }),
        });
        if (!res.ok) {
          console.error("[HELIX WAITLIST] Resend error:", await res.text());
        }
      } catch (emailErr) {
        // Don't fail the user request — signup is captured in Vercel logs
        console.error("[HELIX WAITLIST] Failed to send notification:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Welcome to the founding team. We'll be in touch — your feedback will shape what HELIX becomes.",
    });
  } catch (err) {
    console.error("[HELIX WAITLIST] Error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
