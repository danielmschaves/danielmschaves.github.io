import { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Capabilities from "@/components/Capabilities";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/config/site";
import { capabilityColumns } from "@/lib/content";

export const metadata: Metadata = {
  title: `Services — ${siteConfig.name}`,
  description:
    "Program management for enterprise data and AI: delivery leadership, data platform architecture, and AI & GenAI delivery from pilot to production.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="lg-container">
        <PageHeader
          eyebrow="SERVICES · DELIVERY · DATA · AI"
          title="Services"
          lead="Three ways I help enterprise teams move data and AI work from pilot to production."
          actions={
            <>
              <Button variant="primary" href="/contact/">
                Start a conversation
              </Button>
              <Button href="/resume/">See the résumé</Button>
            </>
          }
        />
        <Capabilities columns={capabilityColumns()} />
      </div>

      <SiteFooter />
    </>
  );
}
