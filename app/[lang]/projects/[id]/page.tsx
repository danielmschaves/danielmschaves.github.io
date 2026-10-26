import type { Metadata } from "next";
import PageHeader, { BackLink } from "@/components/PageHeader";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getProject, getProjects, type Project } from "@/lib/projects";
import { getDictionary, href, langs, pageMetadata, type Lang } from "@/lib/i18n";
import Figure, { pad2 } from "@/components/figures/Figure";
import SiteFooter from "@/components/SiteFooter";
import CloudMigrationContent from "@/components/projects/CloudMigrationContent";
import DWProgramContent from "@/components/projects/DWProgramContent";
import SpotifyELTContent from "@/components/projects/SpotifyELTContent";
import AdventureWorksContent from "@/components/projects/AdventureWorksContent";
import EcommerceContent from "@/components/projects/EcommerceContent";
import DataIntelligencePlatformContent from "@/components/projects/DataIntelligencePlatformContent";

interface ProjectPageProps {
  params: { lang: Lang; id: string };
}

const bodies: Record<string, (props: { lang: Lang }) => JSX.Element> = {
  "data-intelligence-platform": DataIntelligencePlatformContent,
  "cloud-migration-enterprise": CloudMigrationContent,
  "data-warehouse-modernization": DWProgramContent,
  "spotify-etl-aws": SpotifyELTContent,
  "adventure-works-dbt": AdventureWorksContent,
  "ecommerce-dbt": EcommerceContent,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.flatMap((lang) => getProjects(lang).map((p) => ({ lang, id: p.id })));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const { lang } = params;
  const project = getProject(params.id, lang);
  if (!project) return { title: getDictionary(lang).meta.notFoundTitle };

  const path = `/projects/${project.id}/`;
  const base = pageMetadata(lang, path, { title: `${project.title} — ${siteConfig.name}`, description: project.description });
  /* Portuguese pages reuse the English social cards for now. */
  const image = { url: `/images/og/og-0${project.figure}.png`, width: 1200, height: 630, alt: project.ogTitle };

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      title: project.ogTitle,
      description: project.ogLine,
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
function ProjectHeader({ project, lang }: { project: Project; lang: Lang }) {
  return (
    <header style={{ paddingTop: "clamp(24px, 4vw, 48px)" }}>
      <BackLink label={getDictionary(lang).case.back} href={href(lang, "/#work")} />
      <Figure n={project.figure} lang={lang} />
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
  const { lang } = params;
  const project = getProject(params.id, lang);
  const Body = project && bodies[project.id];
  if (!project || !Body) notFound();

  return (
    <>
      <article className="lg-container">
        <ProjectHeader project={project} lang={lang} />
        <Body lang={lang} />
      </article>
      <SiteFooter lang={lang} />
    </>
  );
}
