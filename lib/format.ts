import type { Lang } from "@/lib/i18n";

/* "2024-08" → "2024"; "Present" → "PRESENT" / "ATUAL". Dates are mono labels, so they're uppercase in copy. */
const PRESENT: Record<Lang, string> = { en: "PRESENT", pt: "ATUAL" };

function year(d: string, lang: Lang) {
  return d === "Present" ? PRESENT[lang] : d.slice(0, 4);
}

export function dateRange(start: string, end: string, lang: Lang = "en") {
  const a = year(start, lang);
  const b = year(end, lang);
  return a === b ? a : `${a} — ${b}`;
}
