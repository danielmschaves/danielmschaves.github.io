"use server";

import { Resend } from "resend";
import { z } from "zod";
import { notificationHTML } from "@/lib/email";
import { getDictionary, isLang, type Dictionary } from "@/lib/i18n";


/* Validation messages come from the visitor's language (the form posts a hidden `lang`). */
function contactSchema(t: Dictionary["form"]) {
    return z.object({
        name: z.string().min(2, { message: t.errName }),
        email: z.string().email({ message: t.errEmail }),
        subject: z.string().min(5, { message: t.errSubject }),
        message: z.string().min(10, { message: t.errMessage }),
    });
}

export type ContactState = {
    success: boolean;
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        subject?: string[];
        message?: string[];
    };
};

export async function sendEmail(prevState: ContactState, formData: FormData): Promise<ContactState> {
    const rawLang = String(formData.get("lang") ?? "en");
    const lang = isLang(rawLang) ? rawLang : "en";
    const t = getDictionary(lang).form;

    /* Fields first: it is the cheaper check, and the visitor sees what to fix even before the CAPTCHA resolves. */
    const validatedFields = contactSchema(t).safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: t.checkFields,
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const token = formData.get("cf-turnstile-response");
    if (!token) {
        return {
            success: false,
            message: t.captcha,
        };
    }

    try {
        const verifyFormData = new FormData();
        verifyFormData.append("secret", process.env.TURNSTILE_SECRET_KEY || "");
        verifyFormData.append("response", token as string);

        const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            body: verifyFormData,
        });

        const outcome = await result.json();
        if (!outcome.success) {
            return {
                success: false,
                message: t.captchaFailed,
            };
        }
    } catch (error) {
        console.error("Turnstile verification error:", error);
        return {
            success: false,
            message: t.captchaError,
        };
    }

    const { name, email, subject, message } = validatedFields.data;

    try {
        /* Created per send: the constructor throws without RESEND_API_KEY, which would break
           field validation in environments that have no key (local runs, previews, tests). */
        const resend = new Resend(process.env.RESEND_API_KEY);
        const data = await resend.emails.send({
            from: "Portfolio Contact <contact@danielmschaves.com>",
            to: ["danielmschaves@gmail.com"],
            subject: `New Message from ${name}: ${subject}`,
            replyTo: email,
            html: notificationHTML({ name, email, subject, message, lang }),
        });

        if (data.error) {
            return {
                success: false,
                message: t.sendFailed,
            };
        }

        return {
            success: true,
            message: t.sent,
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            message: t.failed,
        };
    }
}
