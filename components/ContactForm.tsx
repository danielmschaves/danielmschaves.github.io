"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendEmail } from "@/lib/actions";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useEffect, useRef } from "react";

import { ContactState } from "@/lib/actions";

const initialState: ContactState = {
    success: false,
    message: "",
    errors: {},
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70"
        >
            {pending ? (
                <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                </>
            ) : (
                <>
                    <Send className="h-4 w-4" />
                    Send Message
                </>
            )}
        </button>
    );
}

export default function ContactForm() {
    const [state, formAction] = useFormState(sendEmail, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset();
        }
    }, [state.success]);

    return (
        <div className="w-full max-w-md rounded-2xl border border-border/50 bg-card p-6 shadow-sm md:p-8">
            <h3 className="mb-6 text-2xl font-bold text-foreground">Get in Touch</h3>

            {state.success && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-2 rounded-lg bg-green-500/10 p-4 text-green-500"
                >
                    <CheckCircle className="h-5 w-5" />
                    <p>{state.message}</p>
                </motion.div>
            )}

            {state.success === false && state.message && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-2 rounded-lg bg-destructive/10 p-4 text-destructive"
                >
                    <AlertCircle className="h-5 w-5" />
                    <p>{state.message}</p>
                </motion.div>
            )}

            <form ref={formRef} action={formAction} className="space-y-4">
                <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {state.errors?.name && (
                        <p className="mt-1 text-sm text-destructive">{state.errors.name[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {state.errors?.email && (
                        <p className="mt-1 text-sm text-destructive">{state.errors.email[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Project Inquiry"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {state.errors?.subject && (
                        <p className="mt-1 text-sm text-destructive">{state.errors.subject[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell me about your project..."
                        required
                        className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {state.errors?.message && (
                        <p className="mt-1 text-sm text-destructive">{state.errors.message[0]}</p>
                    )}
                </div>

                <SubmitButton />
            </form>
        </div>
    );
}
