"use server";

import { Resend } from "resend";
import { z } from "zod";
import EmailTemplate from "@/components/email-template";

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
            from: "Portfolio Contact <onboarding@resend.dev>", // Update this if you verify your domain
            to: ["danielmschaves@gmail.com"], // Replace with your actual email
            subject: `New Message from ${name}: ${subject}`,
            reply_to: email,
            react: EmailTemplate({ name, email, subject, message }),
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
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}
