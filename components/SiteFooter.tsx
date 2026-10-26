import Link from "next/link";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import { getDictionary, href, type Lang } from "@/lib/i18n";

interface SiteFooterProps {
  lang: Lang;
  /* /contact renders the form (and loads Turnstile) and makes the title its h1;
     every other page links to /contact instead. Ledger v2 puts the form on every
     page — this is the one deliberate deviation, pending the design-system update. */
  withForm?: boolean;
}

export default function SiteFooter({ lang, withForm = false }: SiteFooterProps) {
  const { email, linkedin, github } = siteConfig.links;
  const t = getDictionary(lang);

  return (
    <footer className="lg-section lg-container lg-footer" id="contact">
      <div className="lg-split">
        <div>
          <SectionHeading as={withForm ? "h1" : "h2"} title={t.contact.title} intro={t.contact.intro} />
          <div className="lg-footer__direct">
            <div className="lg-label">{t.contact.direct}</div>
            <a className="lg-footer__mail" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </div>
        <div>
          {withForm ? (
            <ContactForm lang={lang} t={t.form} />
          ) : (
            <div className="lg-footer__cta">
              <Button variant="primary" href={href(lang, "/contact/")}>
                {t.contact.send}
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="lg-footer__bar">
        <span>
          © {new Date().getFullYear()} {siteConfig.name} · {t.footer.place}
        </span>
        <div className="lg-footer__links">
          <a href={linkedin}>{t.footer.linkedin}</a>
          <a href={github}>{t.footer.github}</a>
          <Link href={href(lang, "/resume/")}>{t.footer.resume}</Link>
        </div>
      </div>
    </footer>
  );
}
