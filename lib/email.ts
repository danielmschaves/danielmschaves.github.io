/* Email-safe HTML for the Resend contact notification, ported from the Ledger bundle.
   Tables, inline styles, Helvetica/Menlo and light-theme hex values: email clients
   ignore web fonts and CSS variables. Every interpolated value is escaped. */

const EM = {
  ink: "#111111",
  body: "#3a3a3a",
  muted: "#555555",
  line: "#e6e6e6",
  accent: "#2f4bff",
  sans: "Helvetica, Arial, sans-serif",
  mono: "Menlo, Consolas, 'Courier New', monospace",
};

export function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface NotificationData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function notificationHTML(d: NotificationData) {
  const name = esc(d.name);
  const email = esc(d.email);
  const subject = esc(d.subject);
  const message = esc(d.message);
  const mailto = `<a href="mailto:${email}" style="color:${EM.accent};text-decoration:none;font-weight:600;">${email}</a>`;

  return (
    `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="background:#ffffff;border-collapse:collapse;"><tr><td align="center" style="padding:32px 16px;">` +
    `<table width="600" cellpadding="0" cellspacing="0" border="0" role="presentation" style="max-width:600px;width:100%;border-collapse:collapse;font-family:${EM.sans};color:${EM.ink};">` +
    `<tr><td style="font-family:${EM.mono};font-size:12px;letter-spacing:0.04em;color:${EM.muted};padding-bottom:16px;border-bottom:1px solid ${EM.ink};">DANIELMSCHAVES.COM · CONTACT FORM</td></tr>` +
    `<tr><td style="padding:28px 0 8px;font-size:28px;line-height:1.15;font-weight:700;letter-spacing:-0.02em;">${subject}</td></tr>` +
    `<tr><td style="padding:0 0 24px;font-size:15px;line-height:1.5;color:${EM.muted};">From <b style="color:${EM.ink};">${name}</b> · ${mailto}</td></tr>` +
    `<tr><td style="border-top:1px solid ${EM.line};padding:24px 0;font-size:16px;line-height:1.6;color:${EM.body};white-space:pre-wrap;">${message}</td></tr>` +
    `<tr><td style="border-top:1px solid ${EM.line};padding-top:16px;font-family:${EM.mono};font-size:12px;letter-spacing:0.04em;color:${EM.muted};">REPLY TO THIS EMAIL TO ANSWER ${esc(d.name.toUpperCase())} DIRECTLY</td></tr>` +
    `</table></td></tr></table>`
  );
}
