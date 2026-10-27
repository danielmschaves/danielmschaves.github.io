# CLAUDE.md — danielmschaves.github.io

## Project Overview

Personal portfolio website for Daniel Chaves (Program Manager, Data & AI).
Built with **Next.js 14 App Router**, **TypeScript** and **Tailwind CSS** on the **Ledger** design system
(https://claude.ai/artifact/U1Q5bDvQkBEHKJszP9GFVK — README.md and implementation.md).

Deployed on Vercel (Node runtime: the contact form is a server action). The GitHub Pages workflow is kept as `.github/workflows/deploy.yml.disabled`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.2.0 (App Router) |
| Language | TypeScript 5.3.0 (strict mode) |
| Styling | Tailwind CSS 3.4.0 + CSS Variables |
| Icons | A handful of inline stroke icons (`components/Icons.tsx`) — no icon library |
| Forms | React Hook Form + Zod |
| Email | Resend API (server action) |
| CAPTCHA | Cloudflare Turnstile |
| Font | Inter Tight (sans), JetBrains Mono (mono) — `public/fonts`, loaded with next/font |

---

## Repository Structure

```
app/                  # Next.js App Router pages
  globals.css         # Tailwind directives + CSS variables + utility classes
  sitemap.ts, robots.ts, manifest.ts, icon.svg, apple-icon.png
  [lang]/             # Every page, once per language (en at /, pt at /pt/)
    layout.tsx        # Root layout — <html lang>, theme script, header, metadata
    page.tsx          # Home page (Hero, Featured Project, Skills, Projects)
    resume/ contact/ services/ projects/[id]/
    not-found.tsx     # Localized 404 (both languages render; CSS keyed on <html lang> shows one)
    [...rest]/        # Catch-all → notFound(), so unknown URLs get the localized 404
middleware.ts         # Rewrites unprefixed paths to /en, passes /pt through, redirects /en/* to the unprefixed URL
dictionaries/         # en.json / pt.json UI strings (from the design system's ui-strings.json)

components/           # Ledger components (TSX ports of the design system bundle, lg- classes)
  SiteHeader.tsx, ThemeToggle.tsx, Hero.tsx, StatStrip.tsx, SectionHeading.tsx
  FeaturedCase.tsx, WorkLedger.tsx, FilterPills.tsx, ProjectRow.tsx
  ExperienceList.tsx, ExperienceItem.tsx, CredentialGrid.tsx
  PageHeader.tsx, AccountsLine.tsx, LedgerList.tsx
  Capabilities.tsx, ContactForm.tsx, SiteFooter.tsx, Button.tsx, Chip.tsx, Icons.tsx
  figures/Figure.tsx  # The six case-study figures, drawn as theme-following SVG
  case/               # Case-study kit: CaseIntro, CaseSection, Infochart, FactStrip, NumberedGrid, PullQuote, svg.tsx chart primitives
  projects/*Content.tsx  # Long-form case-study bodies; their prose and chart labels live in the sibling *.copy.ts

data/                 # JSON content files (acts as lightweight CMS), one folder per language
  en/ pt/             # projects, experience, education, certifications, skills

lib/
  utils.ts            # cn() utility (clsx + tailwind-merge)
  actions.ts          # Server action for sending email via Resend
  email.ts            # Escaped, email-safe notification template
  i18n.ts             # Lang, getDictionary, href(), localeHref(), pageMetadata(), resumePdf()
  projects.ts         # Typed access to projects.json
  content.ts          # Capability columns, stack, education and language rows from data/
  format.ts           # Date range formatting

config/
  site.ts             # Site-wide config (links, metadata)

public/images/        # Static assets
```

---

## Design System — Ledger

Dark by default, light behind a toggle. Hairline rules instead of boxes, numbered rows, real numbers, one accent per view.

- **Tokens** live in `app/globals.css` (from the design system's `tokens.css`): `--bg`, `--surface`, `--fg`, `--body`, `--muted`, `--line`, `--line-strong`, `--control`, `--chip`, `--accent`, `--on-accent`, `--success`, `--danger`, `--fig-*`, plus spacing, `--container`, `--measure`, `--dur-*`, `--ease-out`. Use semantic tokens only.
- **Theme**: `data-theme="dark" | "light"` on `<html>`. An inline script in `app/[lang]/layout.tsx` applies `localStorage.theme` before paint; `ThemeToggle` is the only switch (no `prefers-color-scheme`).
- **Component styles** are the design system's `bundle.css`, pasted under `@layer components` with `lg-` class names. Tailwind purges component classes it can't find in source, so always write `lg-` class names literally (no template-built names).
- **Tailwind** maps the same tokens (`bg-bg`, `text-muted`, `border-line`, …); radii are `none`/`pill`/`full` only; no shadows or gradients.
- **Figures**: each project has `figure: 1–6` in `projects.json`; render `<Figure n={…} />`. Static exports are in `public/images/covers/`, social cards in `public/images/og/`.
- **Deliberate deviation**: Ledger v2's SiteFooter puts the contact form on every page. Here the form lives only on `/contact` (other pages show a "Send a message" button), so Turnstile loads once. Pending the design-system update.
- **Voice**: sentence case, mono labels in UPPERCASE in the copy, `·` separators, no emoji or exclamation marks, numbers exactly as on the résumé.

---

## Content Management

All content is driven by JSON files in `/data/en/` and `/data/pt/`. To update portfolio content, edit the relevant JSON file in **both** languages — no code changes needed. UI strings live in `dictionaries/{en,pt}.json` (`pt` is typed against `en`, so a missing key fails the build). Case-study prose and chart labels live in `components/projects/*.copy.ts` as `{ en, pt }`.

- **projects.json** — portfolio projects (id, figure, title, description, technologies, featured, category, metrics, OG fields, links)
- **experience.json** — work history
- **education.json** — academic background
- **certifications.json** — certifications (`group`, `name`, `issuer`)
- **skills.json** — capability columns (`deliveryLeadership`, `dataPlatform`, `aiDelivery`), stack categories, languages

---

## Key Conventions

- **No default exports for pages** — use `export default function PageName()`
- **Client components** — mark with `"use client"` only when needed (event handlers, hooks, animations)
- **Server actions** — email sending lives in `lib/actions.ts` as a `"use server"` action
- **Path alias** — use `@/` for all imports from root (e.g., `@/components/Hero`)
- **Images** — always use `next/image` with `unoptimized` for static export compatibility (project covers are `<Figure>`, not images)
- **cn() utility** — use `cn()` from `@/lib/utils` for conditional classnames
- **Languages** — pages get `params.lang`; pass `lang` down and build internal links with `href(lang, path)`. Client components receive their strings as props
- **Portuguese copy** — pt-BR per the design system README: first person, no "você" in headings, Brazilian numbers (`4,7`, `~4.000`, `US$ 1,2 mi`), tool/method/certification/client names in English, mono labels in UPPERCASE Portuguese

---

## Environment Variables

```env
RESEND_API_KEY=                      # Resend email service
NEXT_PUBLIC_TURNSTILE_SITE_KEY=      # Cloudflare Turnstile (public)
TURNSTILE_SECRET_KEY=                # Cloudflare Turnstile (secret)
```

---

## Development

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run lint      # ESLint check
```

> ESLint is intentionally ignored during builds (`eslint.ignoreDuringBuilds: true` in next.config.js).

---

## Deployment

- **Target**: Vercel. Server actions and `middleware.ts` need a Node host, so a GitHub Pages static export is no longer an option
- **Output mode**: `standalone` when `DOCKER_BUILD=true`, otherwise default
- `trailingSlash: true` in next.config.js (kept from the static-hosting days; URLs end in `/`)
- Docker support via `Dockerfile` + `docker-compose.yml`

---

## Redesign status

The site was rebuilt on Ledger following the design system's implementation.md (steps 1–14: English/Portuguese included; the header theme toggle is icon-only with a title tooltip). The e2e suite in `tests/e2e` covers the Ledger markup, the chart rules (squares only, SVG text ≥ 12px as rendered) in both languages, and the language switch, hreflang and localized form errors.

Résumé PDF: `siteConfig.resumePdf.pt` is `null` until a Portuguese PDF is added to `public/`; until then `/pt/` links the English one, labelled "Baixar PDF (inglês)".

Charts are drawn at 1100px and rendered 1:1 (`<Infochart minWidth={1100}>`); use the `svg.tsx` primitives (`T` clamps text to 12px, `Box`, `Badge`, `Wire`) and token colours only.
