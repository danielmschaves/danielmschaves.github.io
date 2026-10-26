import { Metadata } from "next";
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
import { projects, projectHref, projectRow, projectTags } from "@/lib/projects";
import { siteConfig } from "@/config/site";
import { capabilityColumns, educationItems, languageItems, stackItems } from "@/lib/content";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

const stats = [
  { value: "10 → 30+", label: "FTEs — delivery portfolio scaled 3×" },
  { value: "~4,000", label: "Monthly service hours at peak" },
  { value: "4.7", unit: "CSAT", label: "Across 12 concurrent engagements" },
  { value: "4×", label: "Faster delivery with an AI-augmented workflow" },
];

export default function Home() {
  const featured = projects.find((p) => p.featured);
  const rows = projects.filter((p) => !p.featured).map(projectRow);

  return (
    <>
      <div className="lg-container">
        <Hero
          eyebrow="PROGRAM MANAGER · DATA & AI · FLORIANÓPOLIS, BR · REMOTE"
          title="I take enterprise data & AI programs from pilot to production — and to"
          accent="business outcomes."
          lead="Program Manager at phData, leading multi-workstream delivery on modern data platforms for large US enterprises. Before that, I owned pharma data & AI accounts across LATAM and EMEA — and started out running R&D programs in the energy sector."
          actions={
            <>
              <Button variant="primary" href="#work">
                See selected work
              </Button>
              <Button href={siteConfig.resumePdf} download="Daniel-Chaves-Resume.pdf">
                Download résumé
              </Button>
            </>
          }
        />

        <StatStrip stats={stats} />

        <AccountsLine items={["NOVO NORDISK", "BAYER", "ACROSS THE US, LATAM & EMEA"]} />

        <section className="lg-section" id="work" aria-labelledby="work-title">
          <SectionHeading id="work-title" title="Selected work" aside={`${projects.length} CASE STUDIES`} />
          <WorkLedger
            featured={
              featured && (
                <FeaturedCase
                  n={featured.figure}
                  eyebrow={featured.eyebrow}
                  title={featured.ogTitle}
                  description={featured.description}
                  href={projectHref(featured)}
                  metrics={featured.metrics}
                  tags={projectTags(featured)}
                />
              )
            }
            rows={rows}
          />
        </section>

        <section className="lg-section" id="capabilities" aria-labelledby="capabilities-title">
          <SectionHeading
            id="capabilities-title"
            title="Capabilities"
            aside="DELIVERY · DATA · AI"
          />
          <div className="flex flex-col gap-16">
            <Capabilities columns={capabilityColumns()} />
            <LedgerList label="STACK" items={stackItems()} />
          </div>
        </section>

        <section className="lg-section lg-split" id="experience">
          <SectionHeading
            title="Experience"
            intro="Program delivery, data platforms and AI — newest first."
          />
          <ExperienceList />
        </section>

        <section className="lg-section lg-split" id="education">
          <SectionHeading title="Education" />
          <div className="flex flex-col gap-12">
            <LedgerList items={educationItems()} />
            <LedgerList label="LANGUAGES" items={languageItems()} />
          </div>
        </section>

        <section className="lg-section lg-split" id="creds">
          <SectionHeading title="Credentials" intro="Anthropic, PMI and the data engineering programs behind the work." />
          <CredentialGrid />
        </section>
      </div>

      <SiteFooter />
    </>
  );
}
