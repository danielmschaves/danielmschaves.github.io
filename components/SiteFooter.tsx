import Link from "next/link";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

interface SiteFooterProps {
  /* /contact renders the form (and loads Turnstile); every other page links to it. */
  withForm?: boolean;
}

export default function SiteFooter({ withForm = false }: SiteFooterProps) {
  const { email, linkedin, github } = siteConfig.links;
  const emailLink = (
    <a
      href={`mailto:${email}`}
      className="body-sm"
      style={{ fontWeight: 600, borderBottom: "2px solid var(--accent)", wordBreak: "break-word" }}
    >
      {email}
    </a>
  );

  return (
    <footer className="lg-section lg-container" id="contact" style={{ paddingBottom: 48 }}>
      <div className="lg-split">
        <div>
          <SectionHeading
            as={withForm ? "h1" : "h2"}
            title="Contact"
            intro={
              withForm
                ? "Open to conversations on data & AI delivery. The form goes straight to my inbox."
                : "Open to conversations on data & AI delivery."
            }
          />
          {withForm && (
            <>
              <div className="lg-label">OR WRITE DIRECTLY</div>
              {emailLink}
            </>
          )}
        </div>
        {withForm ? (
          <ContactForm />
        ) : (
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line-strong pt-6">
            <Button variant="primary" href="/contact/">
              Send a message
            </Button>
            <div>
              <div className="lg-label">OR WRITE DIRECTLY</div>
              {emailLink}
            </div>
          </div>
        )}
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
