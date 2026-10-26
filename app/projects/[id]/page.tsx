import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getProject, projects, type Project } from "@/lib/projects";
import Figure, { pad2 } from "@/components/figures/Figure";
import SiteFooter from "@/components/SiteFooter";
import ProjectContent from "./ProjectContent";
import CloudMigrationContent from "@/components/projects/CloudMigrationContent";
import DWProgramContent from "@/components/projects/DWProgramContent";
import SpotifyELTContent from "@/components/projects/SpotifyELTContent";
import AdventureWorksContent from "@/components/projects/AdventureWorksContent";
import EcommerceContent from "@/components/projects/EcommerceContent";
import DataIntelligencePlatformContent from "@/components/projects/DataIntelligencePlatformContent";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

const bodies: Record<string, () => JSX.Element> = {
  "data-intelligence-platform": DataIntelligencePlatformContent,
  "cloud-migration-enterprise": CloudMigrationContent,
  "data-warehouse-modernization": DWProgramContent,
  "spotify-etl-aws": SpotifyELTContent,
  "adventure-works-dbt": AdventureWorksContent,
  "ecommerce-dbt": EcommerceContent,
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject(params.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.description,
  };
}

function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="lg-hero" style={{ paddingBottom: 0 }}>
      <Link href="/#work" className="lg-mono lg-muted" style={{ display: "inline-block", padding: "12px 0", marginBottom: 16 }}>
        ← ALL WORK
      </Link>
      <Figure n={project.figure} />
      <p className="lg-mono lg-accent" style={{ margin: "40px 0 16px" }}>
        {pad2(project.figure)} · {project.eyebrow}
      </p>
      <h1 className="heading-2" style={{ margin: 0, fontSize: "clamp(28px, 3.4vw, 36px)", maxWidth: 900 }}>
        {project.title}
      </h1>
      <div className="lg-feature__metrics" style={{ marginTop: 32 }}>
        {project.metrics.map((m) => (
          <div key={m.label} className="lg-feature__metric">
            <b>{m.value}</b>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </header>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  const Body = bodies[project.id];

  return (
    <>
      <article className="lg-container">
        <ProjectHeader project={project} />
        {Body ? <Body /> : <ProjectContent project={project} />}
      </article>
      <SiteFooter />
    </>
  );
}
