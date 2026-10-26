import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ExperienceList from "@/components/ExperienceList";
import { EducationList, LanguageList } from "@/components/Education";
import CredentialGrid from "@/components/CredentialGrid";
import { StackTable } from "@/components/Capabilities";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/config/site";

export default function ResumeContent() {
  return (
    <>
      <div className="lg-container">
        <section className="lg-hero" style={{ paddingBottom: 0 }}>
          <p className="lg-hero__eyebrow lg-mono">RÉSUMÉ · {siteConfig.role.toUpperCase()}</p>
          <h1 className="heading-1" style={{ margin: 0, fontSize: "clamp(36px, 5vw, 52px)" }}>
            {siteConfig.name}
          </h1>
          <div className="lg-hero__foot" style={{ marginTop: 28 }}>
            <p className="lg-hero__lead">{siteConfig.description}</p>
            <div className="lg-actions">
              <Button variant="primary" href={siteConfig.resumePdf} download="Daniel-Chaves-Resume.pdf">
                Download PDF
              </Button>
            </div>
          </div>
        </section>

        <section className="lg-section lg-split">
          <SectionHeading title="Experience" />
          <ExperienceList allOpen />
        </section>

        <section className="lg-section lg-split">
          <SectionHeading title="Education" />
          <div className="flex flex-col gap-12">
            <EducationList />
            <div>
              <div className="lg-label">LANGUAGES</div>
              <LanguageList />
            </div>
          </div>
        </section>

        <section className="lg-section lg-split">
          <SectionHeading title="Credentials" />
          <CredentialGrid />
        </section>

        <section className="lg-section lg-split">
          <SectionHeading title="Skills" />
          <StackTable />
        </section>
      </div>

      <SiteFooter />
    </>
  );
}
