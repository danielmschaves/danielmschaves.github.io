import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* Ledger semantic tokens (app/globals.css) */
      colors: {
        bg:            "var(--bg)",
        surface:       "var(--surface)",
        fg:            "var(--fg)",
        body:          "var(--body)",
        muted:         "var(--muted)",
        line:          "var(--line)",
        "line-strong": "var(--line-strong)",
        control:       "var(--control)",
        chip:          "var(--chip)",
        accent:        "var(--accent)",
        "on-accent":   "var(--on-accent)",
        success:       "var(--success)",
        danger:        "var(--danger)",
        "fig-tile":     "var(--fig-tile)",
        "fig-wire":     "var(--fig-wire)",
        "fig-accent-2": "var(--fig-accent-2)",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },

      transitionDuration: {
        fast: "var(--dur-fast)",
        base: "var(--dur-base)",
      },

      transitionTimingFunction: {
        out: "var(--ease-out)",
      },
    },

    borderRadius: {
      none: "0",
      pill: "999px",
      full: "50%",
    },
  },
  plugins: [],
};

export default config;
