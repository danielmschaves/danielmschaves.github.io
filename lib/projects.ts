import projectsData from "@/data/projects.json";
import { FIGURES, pad2, type CaseNumber } from "@/components/figures/Figure";
import type { ProjectRowData } from "@/components/ProjectRow";

export interface Project {
  id: string;
  figure: number;
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
  category: string;
  eyebrow: string;
  githubUrl?: string;
  overview?: string;
  highlights?: string[];
  technicalApproach?: string;
  links?: { label: string; url: string }[];
  ogTitle: string;
  accentWord: string;
  ogLine: string;
  caption: string;
  alt: string;
  metrics: { value: string; label: string }[];
  og: string;
}

export const projects = projectsData as Project[];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}

export function projectHref(p: Project) {
  return `/projects/${p.id}/`;
}

/* Tags drop the discipline itself ("Project Management"), which the eyebrow already says. */
export function projectTags(p: Project) {
  return p.technologies.filter((t) => !/management$/i.test(t));
}

export function projectRow(p: Project): ProjectRowData & { category: string } {
  const fig = FIGURES[p.figure as CaseNumber];
  return {
    id: p.id,
    num: pad2(p.figure),
    eyebrow: fig ? `${p.eyebrow} · ${fig.label}` : p.eyebrow,
    title: p.title,
    description: p.description,
    overview: p.overview,
    highlights: p.highlights,
    approach: p.technicalApproach,
    tech: projectTags(p),
    repo: p.githubUrl,
    href: projectHref(p),
    category: p.category,
  };
}
