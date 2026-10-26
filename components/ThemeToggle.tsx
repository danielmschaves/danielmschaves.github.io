"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/Icons";
import type { Dictionary } from "@/lib/i18n";

export type Theme = "dark" | "light";

/* Dark is the default. The inline script in app/[lang]/layout.tsx applies a stored
   choice before paint; this toggle is the only way to change it. */
export default function ThemeToggle({ labels }: { labels: Dictionary["theme"] }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const dark = theme !== "light";

  function toggle() {
    const next: Theme = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable (private mode) — the switch still applies for this page */
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      className="lg-toggle"
      onClick={toggle}
      aria-label={dark ? labels.toLight : labels.toDark}
      aria-pressed={dark}
    >
      <span className="lg-toggle__knob">{dark ? <SunIcon /> : <MoonIcon />}</span>
      <span className="lg-toggle__text">{dark ? labels.dark : labels.light}</span>
    </button>
  );
}
