import { Metadata } from "next";
import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";
import { siteConfig } from "@/config/site";
import ProjectContent from "./ProjectContent";
import CloudMigrationContent from "@/components/projects/CloudMigrationContent";
import DWProgramContent from "@/components/projects/DWProgramContent";
import SpotifyELTContent from "@/components/projects/SpotifyELTContent";
import AdventureWorksContent from "@/components/projects/AdventureWorksContent";
import EcommerceContent from "@/components/projects/EcommerceContent";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - ${siteConfig.name}`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  if (project.id === "cloud-migration-enterprise") return <CloudMigrationContent />;
  if (project.id === "data-warehouse-modernization") return <DWProgramContent />;
  if (project.id === "spotify-etl-aws") return <SpotifyELTContent />;
  if (project.id === "adventure-works-dbt") return <AdventureWorksContent />;
  if (project.id === "ecommerce-dbt") return <EcommerceContent />;

  return <ProjectContent project={project} />;
}
