import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me - Daniel Chaves",
    description: "Get in touch for project inquiries or collaboration opportunities.",
};

export default function ContactPage() {
    return (
        <main className="container-custom section-padding min-h-screen py-20 md:py-32">
            <div className="mx-auto max-w-2xl">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                        Let's Work Together
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Have a project in mind? I'd love to hear about it. Fill out the form below
                        and I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="flex justify-center">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
