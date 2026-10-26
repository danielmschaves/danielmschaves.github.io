import { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: "Get in touch about data and AI programs, delivery leadership or collaboration.",
};

export default function ContactPage() {
  return <SiteFooter withForm />;
}
