import skills from "@/data/skills.json";
import education from "@/data/education.json";
import type { CapabilityColumn } from "@/components/Capabilities";
import type { LedgerListItem } from "@/components/LedgerList";

/* Maps data/*.json onto component props, so pages stay free of data shaping. */

export function capabilityColumns(): CapabilityColumn[] {
  return [skills.deliveryLeadership, skills.dataPlatform, skills.aiDelivery].map((c) => ({
    title: c.title,
    items: c.skills,
  }));
}

/* One row per category in skills.json. */
export function stackItems(): LedgerListItem[] {
  return Object.entries(skills.technical.categories).map(([category, tools]) => ({
    label: category.toUpperCase(),
    value: tools.join(" · "),
  }));
}

export function educationItems(): LedgerListItem[] {
  return education.map((e) => ({
    title: e.degree,
    subtitle: `${e.institution} · ${e.location}`,
    meta: e.year,
  }));
}

/* "Portuguese (Native)" → title + UPPERCASE meta. */
export function languageItems(): LedgerListItem[] {
  return skills.languages.list.map((entry) => {
    const [, name, level] = entry.match(/^(.*?)\s*\((.*)\)$/) ?? [entry, entry, ""];
    return { title: name, meta: level.toUpperCase() };
  });
}
