import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getProjects } from "@/lib/projects";
import { href } from "@/lib/i18n";

/* Both languages of every page, each listing its alternates (hreflang in the sitemap). */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/resume/", priority: 0.9 },
    { path: "/services/", priority: 0.8 },
    { path: "/contact/", priority: 0.6 },
    ...getProjects("en").map((p) => ({ path: `/projects/${p.id}/`, priority: 0.7 })),
  ];

  return pages.flatMap(({ path, priority }) => {
    const languages = { en: siteConfig.url + path, "pt-BR": siteConfig.url + href("pt", path) };
    return (["en", "pt"] as const).map((lang) => ({
      url: siteConfig.url + href(lang, path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages },
    }));
  });
}
