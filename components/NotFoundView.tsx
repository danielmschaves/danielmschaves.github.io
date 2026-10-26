import Button from "@/components/Button";
import { getDictionary, href, type Lang } from "@/lib/i18n";

/* The 404 body, in the visitor's language. */
export default function NotFoundView({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).notFound;
  return (
    <div className="lg-container">
      <section className="lg-hero">
        <p className="lg-hero__eyebrow lg-mono">{t.eyebrow}</p>
        <h1 className="display-l" style={{ margin: 0, fontSize: "clamp(56px, 8vw, 84px)" }}>
          404
        </h1>
        <div className="lg-hero__foot" style={{ marginTop: 28 }}>
          <p className="lg-hero__lead">{t.text}</p>
          <div className="lg-actions">
            <Button variant="link" href={href(lang, "/")}>
              {t.home}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
