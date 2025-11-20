import { Metadata } from "next";
import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";
import { siteConfig } from "@/config/site";
import ProjectContent from "./ProjectContent";

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

  return <ProjectContent project={project} />;
}
