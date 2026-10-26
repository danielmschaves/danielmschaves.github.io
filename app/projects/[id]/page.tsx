import { Metadata } from "next";
import PageHeader, { BackLink } from "@/components/PageHeader";
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

const bodies: Record<string, (props: { lang?: "en" }) => JSX.Element> = {
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

  const title = `${project.title} — ${siteConfig.name}`;
  const image = { url: `/images/og/og-0${project.figure}.png`, width: 1200, height: 630, alt: project.ogTitle };

  return {
    title,
    description: project.description,
    openGraph: {
      type: "article",
      url: `/projects/${project.id}/`,
      title: project.ogTitle,
      description: project.ogLine,
      siteName: siteConfig.name,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: project.ogTitle,
      description: project.ogLine,
      images: [image.url],
    },
  };
}

/* README › Pages: back link → Figure → title → metrics → body. The back link sits above the
   figure, so PageHeader is used without its own `back`. */
function ProjectHeader({ project }: { project: Project }) {
  return (
    <header style={{ paddingTop: "clamp(24px, 4vw, 48px)" }}>
      <BackLink label="ALL WORK" href="/#work" />
      <Figure n={project.figure} />
      <PageHeader eyebrow={`${pad2(project.figure)} · ${project.eyebrow}`} title={project.title} />
      <div className="lg-feature__metrics">
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
