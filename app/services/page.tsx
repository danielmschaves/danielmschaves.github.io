import { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { CapabilityColumns } from "@/components/Capabilities";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Services — ${siteConfig.name}`,
  description:
    "Program management for enterprise data and AI: delivery leadership, data platform architecture, and AI & GenAI delivery from pilot to production.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="lg-container">
        <section className="lg-section">
          <SectionHeading
            as="h1"
            title="Services"
            aside="DELIVERY · DATA · AI"
            intro="Three ways I help enterprise teams move data and AI work from pilot to production."
          />
          <CapabilityColumns />
          <div className="lg-actions" style={{ marginTop: 56 }}>
            <Button variant="primary" href="/contact/">
              Start a conversation
            </Button>
            <Button href="/resume/">See the résumé</Button>
          </div>
        </section>
      </div>

      <SiteFooter />
    </>
  );
}
