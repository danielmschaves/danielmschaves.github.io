import projectsEn from "@/data/en/projects.json";
import projectsPt from "@/data/pt/projects.json";
import { figureMeta, pad2, type CaseNumber } from "@/components/figures/Figure";
import { href, type Lang } from "@/lib/i18n";
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

const byLang: Record<Lang, Project[]> = { en: projectsEn as Project[], pt: projectsPt as Project[] };

export function getProjects(lang: Lang) {
  return byLang[lang];
}

export function getProject(id: string, lang: Lang) {
  return byLang[lang].find((p) => p.id === id);
}

export function projectHref(p: Project, lang: Lang) {
  return href(lang, `/projects/${p.id}/`);
}

/* Tags drop the discipline itself ("Project management"), which the eyebrow already says. */
export function projectTags(p: Project) {
  return p.technologies.filter((t) => !/(management|gestão de (projetos|programas))$/i.test(t));
}

export function projectRow(p: Project, lang: Lang): ProjectRowData & { category: string } {
  const fig = figureMeta(p.figure as CaseNumber, lang);
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
    href: projectHref(p, lang),
    category: p.category,
  };
}
