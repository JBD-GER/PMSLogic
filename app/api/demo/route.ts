import { NextResponse } from "next/server";
import { Resend } from "resend";
import { legalConfig, siteConfig } from "@/lib/content";

export const runtime = "nodejs";

type DemoRequest = {
  firstName?: unknown;
  lastName?: unknown;
  companyName?: unknown;
  email?: unknown;
  phone?: unknown;
  legalConsent?: unknown;
};

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function fieldRow(label: string, value: string) {
  return `<tr><td style="padding:8px 0;color:#667071;width:160px;">${label}</td><td style="padding:8px 0;color:#151718;font-weight:600;">${escapeHtml(value || "-")}</td></tr>`;
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const leadEmail = process.env.FORWARDS_TO_MAIL;

  if (!resendApiKey || !fromEmail || !leadEmail) {
    return NextResponse.json(
      { message: "Die E-Mail-Konfiguration ist unvollständig." },
      { status: 500 }
    );
  }

  let body: DemoRequest;

  try {
    body = (await request.json()) as DemoRequest;
  } catch {
    return NextResponse.json(
      { message: "Die Anfrage konnte nicht gelesen werden." },
      { status: 400 }
    );
  }

  const firstName = asText(body.firstName);
  const lastName = asText(body.lastName);
  const companyName = asText(body.companyName);
  const email = asText(body.email).toLowerCase();
  const phone = asText(body.phone);
  const legalConsent = body.legalConsent === true;

  if (!firstName || !lastName || !isEmail(email) || !phone || !legalConsent) {
    return NextResponse.json(
      { message: "Bitte füllen Sie alle Pflichtfelder korrekt aus." },
      { status: 400 }
    );
  }

  const resend = new Resend(resendApiKey);
  const from = `${siteConfig.name} <${fromEmail}>`;
  const fullName = `${firstName} ${lastName}`;
  const submittedAt = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Berlin"
  }).format(new Date());

  const leadHtml = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#151718;">
      <h1 style="margin:0 0 16px;">Neue PMSLogic Demo-Anfrage</h1>
      <p style="margin:0 0 20px;color:#515d5e;">Eine neue Anfrage wurde über ${escapeHtml(siteConfig.domain)} gesendet.</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">
        ${fieldRow("Vorname", firstName)}
        ${fieldRow("Nachname", lastName)}
        ${fieldRow("Firmenname", companyName)}
        ${fieldRow("E-Mail", email)}
        ${fieldRow("Telefon", phone)}
        ${fieldRow("Zeitpunkt", submittedAt)}
      </table>
      <p style="margin-top:24px;color:#667071;">Antworten Sie direkt auf diese E-Mail, um ${escapeHtml(fullName)} zu kontaktieren.</p>
    </div>
  `;

  const customerHtml = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#151718;">
      <h1 style="margin:0 0 16px;">Vielen Dank für Ihre Anfrage.</h1>
      <p>Hallo ${escapeHtml(firstName)},</p>
      <p>wir haben Ihre Anfrage für eine PMSLogic Demo erhalten und melden uns zeitnah persönlich bei Ihnen.</p>
      <p>Ihre Angaben:</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">
        ${fieldRow("Name", fullName)}
        ${fieldRow("Firmenname", companyName)}
        ${fieldRow("E-Mail", email)}
        ${fieldRow("Telefon", phone)}
      </table>
      <p style="margin-top:24px;">Viele Grüße<br />Ihr PMSLogic Team</p>
      <p style="margin-top:28px;color:#667071;font-size:13px;">
        ${escapeHtml(legalConfig.company)} · ${escapeHtml(legalConfig.address)} · ${escapeHtml(siteConfig.email)}
      </p>
    </div>
  `;

  const leadText = [
    "Neue PMSLogic Demo-Anfrage",
    "",
    `Vorname: ${firstName}`,
    `Nachname: ${lastName}`,
    `Firmenname: ${companyName || "-"}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone}`,
    `Zeitpunkt: ${submittedAt}`
  ].join("\n");

  const customerText = [
    `Hallo ${firstName},`,
    "",
    "wir haben Ihre Anfrage für eine PMSLogic Demo erhalten und melden uns zeitnah persönlich bei Ihnen.",
    "",
    `Name: ${fullName}`,
    `Firmenname: ${companyName || "-"}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone}`,
    "",
    "Viele Grüße",
    "Ihr PMSLogic Team"
  ].join("\n");

  try {
    await Promise.all([
      resend.emails.send({
        from,
        to: leadEmail,
        replyTo: email,
        subject: `Neue PMSLogic Demo-Anfrage von ${fullName}`,
        html: leadHtml,
        text: leadText
      }),
      resend.emails.send({
        from,
        to: email,
        replyTo: fromEmail,
        subject: "Ihre PMSLogic Demo-Anfrage ist eingegangen",
        html: customerHtml,
        text: customerText
      })
    ]);
  } catch (error) {
    console.error("PMSLogic demo email error", error);
    return NextResponse.json(
      { message: "Die Anfrage konnte gerade nicht versendet werden." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
