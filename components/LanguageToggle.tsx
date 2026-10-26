"use client";

import type { MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { localeHref, type Lang } from "@/lib/i18n";

const LANGS: { id: Lang; code: string; name: string; hreflang: string }[] = [
  { id: "en", code: "EN", name: "English", hreflang: "en" },
  { id: "pt", code: "PT", name: "Português", hreflang: "pt-BR" },
];

/* The EN | PT twin of ThemeToggle. Each option is a real link to the same page in the other
   language (locales are URLs, not state), so it works without JavaScript and crawlers see both.
   On click the current #hash rides along, so /#work lands on /pt/#work. */
export default function LanguageToggle({ lang, label }: { lang: Lang; label: string }) {
  const pathname = usePathname() ?? "/";

  function keepHash(e: MouseEvent<HTMLAnchorElement>) {
    const hash = window.location.hash;
    if (!hash) return;
    e.preventDefault();
    window.location.assign(e.currentTarget.getAttribute("href") + hash);
  }

  return (
    <nav className="lg-lang" aria-label={label}>
      {LANGS.map((l) => {
        const on = l.id === lang;
        return (
          <a
            key={l.id}
            className="lg-lang__opt"
            href={localeHref(pathname, l.id)}
            hrefLang={l.hreflang}
            lang={l.hreflang}
            aria-current={on ? "true" : undefined}
            aria-label={l.name}
            onClick={on ? undefined : keepHash}
          >
            <span className="lg-lang__knob">{l.code}</span>
          </a>
        );
      })}
    </nav>
  );
}
