import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: "Get in touch about data and AI programs, delivery leadership or collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <h1 className="sr-only">Contact {siteConfig.name}</h1>
      <SiteFooter eyebrow="CONTACT — WRITE DIRECTLY, OR USE THE FORM BELOW">
        <ContactForm />
      </SiteFooter>
    </>
  );
}
