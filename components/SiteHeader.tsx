"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";

/* Real routes everywhere (Work is the homepage anchor). Not sticky.
   Desktop: name · nav · toggles. At 640px and below: name + toggles on row 1, nav on row 2. */
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
        <nav className="lg-nav" aria-label="Primary">
          {items.map((it) => (
            <Link key={it.label} href={it.href} aria-current={it.match(pathname) ? "page" : undefined}>
              {it.label}
            </Link>
          ))}
        </nav>
        <div className="lg-header__toggles">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
