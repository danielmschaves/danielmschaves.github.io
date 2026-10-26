import type { Metadata } from "next";
import en from "@/dictionaries/en.json";
import ptJson from "@/dictionaries/pt.json";
import { siteConfig } from "@/config/site";

/* English lives at the current URLs; Portuguese under /pt/ with the same slugs.
   middleware.ts rewrites every non-/pt page path to /en, so both render from app/[lang]. */

export const langs = ["en", "pt"] as const;
export type Lang = (typeof langs)[number];
export type Dictionary = typeof en;

/* Typed against en.json, so a key missing from pt.json fails the build. */
const pt: Dictionary = ptJson;
const dictionaries: Record<Lang, Dictionary> = { en, pt };

export function isLang(s: string): s is Lang {
  return (langs as readonly string[]).includes(s);
}

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export const htmlLang: Record<Lang, string> = { en: "en", pt: "pt-BR" };

/* Strip a locale prefix: "/pt/resume/" → "/resume/", "/en" → "/". */
export function stripLocale(path: string) {
  return path.replace(/^\/(en|pt)(?=\/|$)/, "") || "/";
}

/* An internal path in a language: href("pt", "/resume/") → "/pt/resume/", href("pt", "/#work") → "/pt/#work". */
export function href(lang: Lang, path: string) {
  return lang === "en" ? path : `/pt${path}`;
}

/* The same page in another language (LanguageToggle). */
export function localeHref(pathname: string, target: Lang) {
  const p = stripLocale(pathname);
  return target === "pt" ? (p === "/" ? "/pt/" : `/pt${p}`) : p;
}

/* Title, description, canonical and hreflang alternates for one page in one language. */
export function pageMetadata(lang: Lang, path: string, m: { title: string; description: string }): Metadata {
  const t = getDictionary(lang);
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: href(lang, path),
      languages: { en: path, "pt-BR": href("pt", path), "x-default": path },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: href(lang, path),
      siteName: siteConfig.name,
      locale: t.meta.ogLocale,
      alternateLocale: getDictionary(lang === "en" ? "pt" : "en").meta.ogLocale,
    },
  };
}

/* The résumé PDF for a language, and whether it is the English fallback. */
export function resumePdf(lang: Lang) {
  const own = siteConfig.resumePdf[lang];
  return { href: own ?? siteConfig.resumePdf.en, fallback: !own };
}
