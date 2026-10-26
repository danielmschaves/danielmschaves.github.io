import skillsEn from "@/data/en/skills.json";
import skillsPt from "@/data/pt/skills.json";
import educationEn from "@/data/en/education.json";
import educationPt from "@/data/pt/education.json";
import type { Lang } from "@/lib/i18n";
import type { CapabilityColumn } from "@/components/Capabilities";
import type { LedgerListItem } from "@/components/LedgerList";

/* Maps data/<lang>/*.json onto component props, so pages stay free of data shaping. */

interface Skills {
  deliveryLeadership: { title: string; skills: string[] };
  dataPlatform: { title: string; skills: string[] };
  aiDelivery: { title: string; skills: string[] };
  technical: { title: string; categories: Record<string, string[]> };
  languages: { title: string; list: string[] };
}

const skillsBy: Record<Lang, Skills> = { en: skillsEn, pt: skillsPt };
const educationBy: Record<Lang, typeof educationEn> = { en: educationEn, pt: educationPt };

export function capabilityColumns(lang: Lang): CapabilityColumn[] {
  const skills = skillsBy[lang];
  return [skills.deliveryLeadership, skills.dataPlatform, skills.aiDelivery].map((c) => ({
    title: c.title,
    items: c.skills,
  }));
}

/* One row per category in skills.json. */
export function stackItems(lang: Lang): LedgerListItem[] {
  const skills = skillsBy[lang];
  return Object.entries(skills.technical.categories).map(([category, tools]) => ({
    label: category.toUpperCase(),
    value: tools.join(" · "),
  }));
}

export function educationItems(lang: Lang): LedgerListItem[] {
  return educationBy[lang].map((e) => ({
    title: e.degree,
    subtitle: `${e.institution} · ${e.location}`,
    meta: e.year,
  }));
}

/* "Portuguese (Native)" → title + UPPERCASE meta. */
export function languageItems(lang: Lang): LedgerListItem[] {
  return skillsBy[lang].languages.list.map((entry) => {
    const [, name, level] = entry.match(/^(.*?)\s*\((.*)\)$/) ?? [entry, entry, ""];
    return { title: name, meta: level.toUpperCase() };
  });
}
