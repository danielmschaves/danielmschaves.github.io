"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import type { Lang } from "@/lib/i18n";

/* One delegated listener for the funnel events, so server components only need a literal
   data-track="…" attribute. The target is data-track-id, else the link's path. */
export default function TrackClicks({ lang }: { lang: Lang }) {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el?.dataset.track) return;
      const target = el.dataset.trackId ?? (el instanceof HTMLAnchorElement ? el.pathname : undefined);
      track(el.dataset.track, target ? { lang, target } : { lang });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lang]);

  return null;
}
