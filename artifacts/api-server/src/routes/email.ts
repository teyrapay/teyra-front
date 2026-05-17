import { Router } from "express";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const router = Router();

function createTransport() {
  const host = process.env["SMTP_HOST"];
  const user = process.env["SMTP_USER"];
  const pass = process.env["SMTP_PASS"];
  const port = Number(process.env["SMTP_PORT"] ?? 587);

  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

const NOTIFY = process.env["NOTIFY_EMAIL"] ?? "info@teyrapay.com";
const FROM = process.env["SMTP_FROM"] ?? process.env["SMTP_USER"] ?? "noreply@teyrapay.com";

// POST /api/email/contact
router.post("/contact", async (req, res) => {
  const { name, email, company, subject, message } = req.body ?? {};

  if (!name || !email || !message) {
    res.status(400).json({ error: "name, email and message are required" });
    return;
  }

  const transport = createTransport();

  const adminHtml = `
    <h2>New contact form submission – TeyraPay</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #eee">${company ?? "—"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Subject</td><td style="padding:8px;border:1px solid #eee">${subject ?? "—"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #eee">${message}</td></tr>
    </table>
  `;

  const confirmHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#1a2e5a;padding:24px;border-radius:8px 8px 0 0">
        <h1 style="color:white;margin:0;font-size:22px">⚡ TeyraPay</h1>
      </div>
      <div style="padding:32px;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px">
        <h2 style="color:#1a2e5a;margin-top:0">We received your message, ${name}!</h2>
        <p style="color:#555;line-height:1.6">Thank you for reaching out. Our team will review your message and get back to you within <strong>1 business day</strong>.</p>
        <div style="background:#f5f8ff;border-left:4px solid #2563eb;padding:16px;margin:24px 0;border-radius:0 8px 8px 0">
          <p style="margin:0;color:#374151;font-style:italic">"${message}"</p>
        </div>
        <p style="color:#555">While you wait, explore our <a href="https://teyrapay.com/docs" style="color:#2563eb">documentation</a> or check our <a href="https://teyrapay.com/status" style="color:#2563eb">system status</a>.</p>
        <hr style="border:none;border-top:1px solid #e0e0e0;margin:24px 0" />
        <p style="color:#999;font-size:12px;margin:0">© 2026 TeyraPay Financial Technology Co. · King Fahd Road, Riyadh, Saudi Arabia</p>
      </div>
    </div>
  `;

  if (!transport) {
    logger.warn({ name, email, subject }, "SMTP not configured — contact form submission logged only");
    res.json({ ok: true, note: "smtp_not_configured" });
    return;
  }

  try {
    await Promise.all([
      transport.sendMail({ from: FROM, to: NOTIFY, subject: `[TeyraPay Contact] ${subject ?? "New message"} from ${name}`, html: adminHtml, replyTo: email }),
      transport.sendMail({ from: FROM, to: email, subject: "We received your message – TeyraPay", html: confirmHtml }),
    ]);
    res.json({ ok: true });
  } catch (err) {
    logger.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send email" });
  }
});

// POST /api/email/waitlist
router.post("/waitlist", async (req, res) => {
  const { email, name } = req.body ?? {};

  if (!email) {
    res.status(400).json({ error: "email is required" });
    return;
  }

  const transport = createTransport();

  const adminHtml = `<h2>New waitlist signup – TeyraPay</h2><p>Email: <strong>${email}</strong>${name ? ` | Name: <strong>${name}</strong>` : ""}</p>`;

  const confirmHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#1a2e5a;padding:24px;border-radius:8px 8px 0 0">
        <h1 style="color:white;margin:0;font-size:22px">⚡ TeyraPay</h1>
      </div>
      <div style="padding:32px;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px">
        <h2 style="color:#1a2e5a;margin-top:0">You're on the waitlist! 🎉</h2>
        <p style="color:#555;line-height:1.6">Thank you for your interest in TeyraPay. You're one of the first merchants to sign up for early access.</p>
        <div style="background:#f0fdf4;border:1px solid #86efac;padding:16px;border-radius:8px;margin:24px 0">
          <p style="margin:0 0 8px 0;font-weight:bold;color:#166534">What happens next:</p>
          <ul style="margin:0;padding-left:20px;color:#166534">
            <li>Our team will review your application</li>
            <li>You'll receive your credentials within 1–2 business days</li>
            <li>Sandbox access is available immediately upon approval</li>
          </ul>
        </div>
        <p style="color:#555">Questions? Reply to this email or contact us at <a href="mailto:onboarding@teyrapay.com" style="color:#2563eb">onboarding@teyrapay.com</a></p>
        <hr style="border:none;border-top:1px solid #e0e0e0;margin:24px 0" />
        <p style="color:#999;font-size:12px;margin:0">© 2026 TeyraPay Financial Technology Co. · King Fahd Road, Riyadh, Saudi Arabia</p>
      </div>
    </div>
  `;

  if (!transport) {
    logger.warn({ email }, "SMTP not configured — waitlist signup logged only");
    res.json({ ok: true, note: "smtp_not_configured" });
    return;
  }

  try {
    await Promise.all([
      transport.sendMail({ from: FROM, to: NOTIFY, subject: `[TeyraPay Waitlist] New signup: ${email}`, html: adminHtml }),
      transport.sendMail({ from: FROM, to: email, subject: "You're on the TeyraPay waitlist! 🎉", html: confirmHtml }),
    ]);
    res.json({ ok: true });
  } catch (err) {
    logger.error({ err }, "Failed to send waitlist email");
    res.status(500).json({ error: "Failed to send email" });
  }
});

// POST /api/email/application (get-started form)
router.post("/application", async (req, res) => {
  const { name, email, business, country, monthly_volume } = req.body ?? {};

  if (!name || !email) {
    res.status(400).json({ error: "name and email are required" });
    return;
  }

  const transport = createTransport();

  const adminHtml = `
    <h2>New merchant application – TeyraPay</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Business</td><td style="padding:8px;border:1px solid #eee">${business ?? "—"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Country</td><td style="padding:8px;border:1px solid #eee">${country ?? "—"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Monthly Volume</td><td style="padding:8px;border:1px solid #eee">${monthly_volume ?? "—"}</td></tr>
    </table>
  `;

  const confirmHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#1a2e5a;padding:24px;border-radius:8px 8px 0 0">
        <h1 style="color:white;margin:0;font-size:22px">⚡ TeyraPay</h1>
      </div>
      <div style="padding:32px;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px">
        <h2 style="color:#1a2e5a;margin-top:0">Application received, ${name}!</h2>
        <p style="color:#555;line-height:1.6">Thank you for applying to TeyraPay. Our onboarding team will review your application and reach out within <strong>1–2 business days</strong> with your sandbox credentials.</p>
        <div style="background:#f0fdf4;border:1px solid #86efac;padding:16px;border-radius:8px;margin:24px 0">
          <p style="margin:0 0 8px 0;font-weight:bold;color:#166534">What's happening now:</p>
          <ul style="margin:0;padding-left:20px;color:#166534">
            <li>Account verification email sent ✓</li>
            <li>KYB review started automatically ✓</li>
            <li>Sandbox access available upon approval</li>
          </ul>
        </div>
        <p style="color:#555">Questions? Contact us at <a href="mailto:onboarding@teyrapay.com" style="color:#2563eb">onboarding@teyrapay.com</a></p>
        <hr style="border:none;border-top:1px solid #e0e0e0;margin:24px 0" />
        <p style="color:#999;font-size:12px;margin:0">© 2026 TeyraPay Financial Technology Co. · King Fahd Road, Riyadh, Saudi Arabia</p>
      </div>
    </div>
  `;

  if (!transport) {
    logger.warn({ name, email }, "SMTP not configured — application logged only");
    res.json({ ok: true, note: "smtp_not_configured" });
    return;
  }

  try {
    await Promise.all([
      transport.sendMail({ from: FROM, to: NOTIFY, subject: `[TeyraPay Application] ${name} — ${business ?? "no business name"}`, html: adminHtml, replyTo: email }),
      transport.sendMail({ from: FROM, to: email, subject: "Your TeyraPay application is under review", html: confirmHtml }),
    ]);
    res.json({ ok: true });
  } catch (err) {
    logger.error({ err }, "Failed to send application email");
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
