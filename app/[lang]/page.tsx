import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import StatStrip from "@/components/StatStrip";
import SectionHeading from "@/components/SectionHeading";
import FeaturedCase from "@/components/FeaturedCase";
import WorkLedger from "@/components/WorkLedger";
import Capabilities from "@/components/Capabilities";
import ExperienceList from "@/components/ExperienceList";
import LedgerList from "@/components/LedgerList";
import AccountsLine from "@/components/AccountsLine";
import CredentialGrid from "@/components/CredentialGrid";
import SiteFooter from "@/components/SiteFooter";
import { getProjects, projectHref, projectRow, projectTags } from "@/lib/projects";
import { capabilityColumns, educationItems, languageItems, stackItems } from "@/lib/content";
import { getDictionary, pageMetadata, resumePdf, type Lang } from "@/lib/i18n";

interface PageProps {
  params: { lang: Lang };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const t = getDictionary(params.lang);
  return pageMetadata(params.lang, "/", { title: t.meta.title, description: t.meta.description });
}

export default function Home({ params }: PageProps) {
  const { lang } = params;
  const t = getDictionary(lang);
  const projects = getProjects(lang);
  const featured = projects.find((p) => p.featured);
  const rows = projects.filter((p) => !p.featured).map((p) => projectRow(p, lang));
  const pdf = resumePdf(lang);

  return (
    <>
      <div className="lg-container">
        <Hero
          eyebrow={t.hero.eyebrow}
          title={t.hero.title}
          accent={t.hero.accent}
          lead={t.hero.lead}
          actions={
            <>
              <Button variant="primary" href="#work">
                {t.hero.ctaWork}
              </Button>
              <Button href={pdf.href} download="Daniel-Chaves-Resume.pdf" data-track="resume_download">
                {pdf.fallback ? t.hero.ctaResumeFallback : t.hero.ctaResume}
              </Button>
            </>
          }
        />

        <StatStrip stats={t.stats} />

        <AccountsLine label={t.accountsLine.label} items={t.accountsLine.items} />

        <section className="lg-section" id="work" aria-labelledby="work-title">
          <SectionHeading id="work-title" title={t.sections.work} aside={t.sections.workAside} />
          <WorkLedger
            featured={
              featured && (
                <FeaturedCase
                  n={featured.figure}
                  lang={lang}
                  featuredLabel={t.row.featured}
                  eyebrow={featured.eyebrow}
                  title={featured.ogTitle}
                  description={featured.description}
                  href={projectHref(featured, lang)}
                  metrics={featured.metrics}
                  tags={projectTags(featured)}
                />
              )
            }
            rows={rows}
            labels={{ all: t.filters.all, filter: t.filters.label, row: t.row }}
          />
        </section>

        <section className="lg-section" id="capabilities" aria-labelledby="capabilities-title">
          <SectionHeading id="capabilities-title" title={t.sections.capabilities} aside={t.sections.capabilitiesAside} />
          <div className="flex flex-col gap-16">
            <Capabilities columns={capabilityColumns(lang)} />
            <LedgerList label={t.sections.stack} items={stackItems(lang)} />
          </div>
        </section>

        <section className="lg-section lg-split" id="experience">
          <SectionHeading title={t.sections.experience} intro={t.sections.experienceIntro} />
          <ExperienceList lang={lang} />
        </section>

        <section className="lg-section lg-split" id="education">
          <SectionHeading title={t.sections.education} />
          <div className="flex flex-col gap-12">
            <LedgerList items={educationItems(lang)} />
            <LedgerList label={t.sections.languages} items={languageItems(lang)} />
          </div>
        </section>

        <section className="lg-section lg-split" id="creds">
          <SectionHeading title={t.sections.credentials} intro={t.sections.credentialsIntro} />
          <CredentialGrid lang={lang} />
        </section>
      </div>

      <SiteFooter lang={lang} />
    </>
  );
}
