import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";

interface SiteFooterProps {
  eyebrow?: string;
  children?: ReactNode;
}

export default function SiteFooter({
  eyebrow = "CONTACT — OPEN TO CONVERSATIONS ON DATA & AI DELIVERY",
  children,
}: SiteFooterProps) {
  const { email, linkedin, github } = siteConfig.links;
  return (
    <footer className="lg-section lg-container" id="contact" style={{ paddingBottom: 48 }}>
      <p className="lg-mono lg-muted" style={{ margin: "0 0 20px" }}>
        {eyebrow}
      </p>
      <a className="lg-footer__mail" href={`mailto:${email}`}>
        {email}
      </a>
      {children}
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
