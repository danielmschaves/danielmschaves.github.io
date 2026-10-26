"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { siteConfig } from "@/config/site";
import { href, stripLocale, type Dictionary, type Lang } from "@/lib/i18n";

/* Real routes everywhere (Work is the homepage anchor). Not sticky.
   Desktop: name · nav · toggles. At 640px and below: name + toggles on row 1, nav on row 2. */
const items: { key: "work" | "resume" | "services" | "contact"; path: string; match: (path: string) => boolean }[] = [
  { key: "work", path: "/#work", match: (p) => p.startsWith("/projects") },
  { key: "resume", path: "/resume/", match: (p) => p.startsWith("/resume") },
  { key: "services", path: "/services/", match: (p) => p.startsWith("/services") },
  { key: "contact", path: "/contact/", match: (p) => p.startsWith("/contact") },
];

interface SiteHeaderProps {
  lang: Lang;
  nav: Dictionary["nav"];
  theme: Dictionary["theme"];
}

export default function SiteHeader({ lang, nav, theme }: SiteHeaderProps) {
  const pathname = stripLocale(usePathname() ?? "/");

  return (
    <header className="lg-header">
      <div className="lg-container lg-header__inner">
        <Link className="lg-header__brand" href={href(lang, "/")}>
          {siteConfig.name}
        </Link>
        <nav className="lg-nav" aria-label={nav.primary}>
          {items.map((it) => (
            <Link key={it.key} href={href(lang, it.path)} aria-current={it.match(pathname) ? "page" : undefined}>
              {nav[it.key]}
            </Link>
          ))}
        </nav>
        <div className="lg-header__toggles">
          <LanguageToggle lang={lang} label={nav.language} />
          <ThemeToggle labels={theme} />
        </div>
      </div>
    </header>
  );
}
