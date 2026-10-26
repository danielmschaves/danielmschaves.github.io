"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";

/* Real routes everywhere (Work is the homepage anchor). Not sticky; the row wraps on phones. */
const items: { label: string; href: string; match: (path: string) => boolean }[] = [
  { label: "Work", href: "/#work", match: (p) => p.startsWith("/projects") },
  { label: "Resume", href: "/resume/", match: (p) => p.startsWith("/resume") },
  { label: "Services", href: "/services/", match: (p) => p.startsWith("/services") },
  { label: "Contact", href: "/contact/", match: (p) => p.startsWith("/contact") },
];

export default function SiteHeader() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="lg-header">
      <div className="lg-container lg-header__inner">
        <Link className="lg-header__brand" href="/">
          {siteConfig.name}
        </Link>
        <div className="lg-header__right">
          <nav className="lg-nav" aria-label="Primary">
            {items.map((it) => (
              <Link key={it.label} href={it.href} aria-current={it.match(pathname) ? "page" : undefined}>
                {it.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
