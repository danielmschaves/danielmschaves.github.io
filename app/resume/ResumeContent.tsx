import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ExperienceList from "@/components/ExperienceList";
import LedgerList from "@/components/LedgerList";
import CredentialGrid from "@/components/CredentialGrid";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/config/site";
import { educationItems, languageItems, stackItems } from "@/lib/content";

export default function ResumeContent() {
  return (
    <>
      <div className="lg-container">
        <PageHeader
          eyebrow={`RÉSUMÉ · ${siteConfig.role.toUpperCase()}`}
          title={siteConfig.name}
          lead={siteConfig.description}
          actions={
            <Button variant="primary" href={siteConfig.resumePdf} download="Daniel-Chaves-Resume.pdf">
              Download PDF
            </Button>
          }
        />

        <section className="lg-section lg-split" style={{ paddingTop: 0 }}>
          <SectionHeading title="Experience" />
          <ExperienceList allOpen />
        </section>

        <section className="lg-section lg-split">
          <SectionHeading title="Education" />
          <div className="flex flex-col gap-12">
            <LedgerList items={educationItems()} />
            <LedgerList label="LANGUAGES" items={languageItems()} />
          </div>
        </section>

        <section className="lg-section lg-split">
          <SectionHeading title="Credentials" />
          <CredentialGrid />
        </section>

        <section className="lg-section lg-split">
          <SectionHeading title="Skills" />
          <LedgerList items={stackItems()} />
        </section>
      </div>

      <SiteFooter />
    </>
  );
}
