import Link from "next/link";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

interface SiteFooterProps {
  /* /contact renders the form (and loads Turnstile) and makes the title its h1;
     every other page links to /contact instead. Ledger v2 puts the form on every
     page — this is the one deliberate deviation, pending the design-system update. */
  withForm?: boolean;
}

export default function SiteFooter({ withForm = false }: SiteFooterProps) {
  const { email, linkedin, github } = siteConfig.links;

  return (
    <footer className="lg-section lg-container lg-footer" id="contact">
      <div className="lg-split">
        <div>
          <SectionHeading
            as={withForm ? "h1" : "h2"}
            title="Contact"
            intro="Open to conversations on data & AI delivery: programs, teams and platforms."
          />
          <div className="lg-footer__direct">
            <div className="lg-label">OR WRITE DIRECTLY</div>
            <a className="lg-footer__mail" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </div>
        <div>
          {withForm ? (
            <ContactForm />
          ) : (
            <div className="border-t border-line-strong pt-6">
              <Button variant="primary" href="/contact/">
                Send a message
              </Button>
            </div>
          )}
        </div>
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
