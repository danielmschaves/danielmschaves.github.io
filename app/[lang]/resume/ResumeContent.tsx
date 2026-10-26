import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ExperienceList from "@/components/ExperienceList";
import LedgerList from "@/components/LedgerList";
import CredentialGrid from "@/components/CredentialGrid";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/config/site";
import { educationItems, languageItems, stackItems } from "@/lib/content";
import { getDictionary, resumePdf, type Lang } from "@/lib/i18n";

export default function ResumeContent({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const pdf = resumePdf(lang);

  return (
    <>
      <div className="lg-container">
        <PageHeader
          eyebrow={t.resume.eyebrow}
          title={siteConfig.name}
          lead={t.meta.description}
          actions={
            <Button variant="primary" href={pdf.href} download="Daniel-Chaves-Resume.pdf">
              {pdf.fallback ? t.resume.downloadFallback : t.resume.download}
            </Button>
          }
        />

        <section className="lg-section lg-split" style={{ paddingTop: 0 }}>
          <SectionHeading title={t.sections.experience} />
          <ExperienceList lang={lang} allOpen />
        </section>

        <section className="lg-section lg-split">
          <SectionHeading title={t.sections.education} />
          <div className="flex flex-col gap-12">
            <LedgerList items={educationItems(lang)} />
            <LedgerList label={t.sections.languages} items={languageItems(lang)} />
          </div>
        </section>

        <section className="lg-section lg-split">
          <SectionHeading title={t.sections.credentials} />
          <CredentialGrid lang={lang} />
        </section>

        <section className="lg-section lg-split">
          <SectionHeading title={t.sections.skills} />
          <LedgerList items={stackItems(lang)} />
        </section>
      </div>

      <SiteFooter lang={lang} />
    </>
  );
}
