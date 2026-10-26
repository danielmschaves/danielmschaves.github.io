import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

interface SiteFooterProps {
  /* /contact uses the footer as the page itself, so its heading becomes the h1. */
  headingAs?: "h1" | "h2";
}

export default function SiteFooter({ headingAs = "h2" }: SiteFooterProps) {
  const { email, linkedin, github } = siteConfig.links;
  return (
    <footer className="lg-section lg-container" id="contact" style={{ paddingBottom: 48 }}>
      <div className="lg-split">
        <div>
          <SectionHeading
            as={headingAs}
            title="Contact"
            intro="Open to conversations on data & AI delivery. The form goes straight to my inbox."
          />
          <div className="lg-label">
            OR WRITE DIRECTLY
          </div>
          <a href={`mailto:${email}`} className="body-sm" style={{ fontWeight: 600, borderBottom: "2px solid var(--accent)", wordBreak: "break-word" }}>
            {email}
          </a>
        </div>
        <ContactForm />
      </div>
      <div className="lg-footer__bar">
        <span>
          © {new Date().getFullYear()} {siteConfig.name} · Florianópolis, Brazil · UTC−3
        </span>
        <div className="lg-footer__links">
          <a href={linkedin}>LinkedIn</a>
          <a href={github}>GitHub</a>
          <Link href="/resume/">Resume</Link>
        </div>
      </div>
    </footer>
  );
}
