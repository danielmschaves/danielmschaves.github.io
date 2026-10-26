"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/Icons";

export type Theme = "dark" | "light";

/* Dark is the default. The inline script in app/layout.tsx applies a stored
   choice before paint; this toggle is the only way to change it. */
export default function ThemeToggle() {
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
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
    >
      <span className="lg-toggle__knob">{dark ? <SunIcon /> : <MoonIcon />}</span>
      {dark ? "DARK" : "LIGHT"}
    </button>
  );
}
