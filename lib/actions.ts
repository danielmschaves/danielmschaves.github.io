"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

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
    const validatedFields = ContactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Validation failed. Please check your input.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, subject, message } = validatedFields.data;

    try {
        const data = await resend.emails.send({
            from: "Portfolio Contact <contact@danielmschaves.com>",
            to: ["danielmschaves@gmail.com"],
            subject: `New Message from ${name}: ${subject}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h1>New Message from Portfolio</h1>
                    <p><strong>From:</strong> ${name} (${email})</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <hr />
                    <div style="white-space: pre-wrap; margin-top: 20px;">
                        ${message}
                    </div>
                </div>
            `,
        });

        if (data.error) {
            return {
                success: false,
                message: "Failed to send email. Please try again later.",
            };
        }

        return {
            success: true,
            message: "Message sent successfully! I'll get back to you soon.",
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}
