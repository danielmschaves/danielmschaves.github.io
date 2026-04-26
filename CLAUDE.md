# CLAUDE.md — danielmschaves.github.io

## Project Overview

Personal portfolio website for Daniel Chaves (Delivery Manager & Data Engineer).
Built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Deployed as a static site to GitHub Pages at `danielmschaves.github.io`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.2.0 (App Router) |
| Language | TypeScript 5.3.0 (strict mode) |
| Styling | Tailwind CSS 3.4.0 + CSS Variables |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Email | Resend API (server action) |
| CAPTCHA | Cloudflare Turnstile |
| Font | Inter (sans), Merriweather (serif), Fira Code (mono) |

---

## Repository Structure

```
app/                  # Next.js App Router pages
  layout.tsx          # Root layout — metadata, header, footer
  page.tsx            # Home page (Hero, Featured Project, Skills, Projects)
  globals.css         # Tailwind directives + CSS variables + utility classes
  resume/             # Resume page
  contact/            # Contact form page
  services/           # Services page
  projects/[id]/      # Dynamic project detail page

components/           # Shared React components
  Header.tsx
  Navigation.tsx
  Hero.tsx
  ProjectCard.tsx
  ExperienceTimeline.tsx
  SkillsGrid.tsx
  CertificationCard.tsx
  SectionHeading.tsx
  Footer.tsx
  ContactForm.tsx
  email-template.tsx

data/                 # JSON content files (acts as lightweight CMS)
  projects.json
  experience.json
  education.json
  certifications.json
  skills.json

lib/
  utils.ts            # cn() utility (clsx + tailwind-merge)
  actions.ts          # Server action for sending email via Resend

config/
  site.ts             # Site-wide config (links, metadata)

public/images/        # Static assets
```

---

## Design System

### CSS Variables (globals.css)
The color system uses HSL CSS variables with light and dark mode tokens:
- `--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--accent`, `--border`
- Dark mode applied via `.dark` class on `<html>`

### Custom Utility Classes (globals.css @layer components)
- `.container-custom` — centered max-w-7xl with responsive padding
- `.section-padding` — py-20 md:py-32
- `.btn-primary` — primary CTA button with shadow lift
- `.btn-secondary` — outline button
- `.card` — rounded card with border and hover shadow
- `.glass` — frosted glass panel

### Tailwind Config Extensions
- Colors: `primary` scale (sky blue), `dark` scale (slate)
- Fonts: `sans` (Inter), `serif` (Merriweather), `mono` (Fira Code)
- Animations: `fade-in`, `slide-up`, `pulse-slow`

---

## Content Management

All content is driven by JSON files in `/data/`. To update portfolio content, edit the relevant JSON file — no code changes needed.

- **projects.json** — portfolio projects (id, title, description, technologies, featured, links)
- **experience.json** — work history
- **education.json** — academic background
- **certifications.json** — certifications
- **skills.json** — skill categories

---

## Key Conventions

- **No default exports for pages** — use `export default function PageName()`
- **Client components** — mark with `"use client"` only when needed (event handlers, hooks, animations)
- **Server actions** — email sending lives in `lib/actions.ts` as a `"use server"` action
- **Path alias** — use `@/` for all imports from root (e.g., `@/components/Hero`)
- **Images** — always use `next/image` with `unoptimized` for static export compatibility
- **cn() utility** — use `cn()` from `@/lib/utils` for conditional classnames

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

- **Target**: GitHub Pages (user/org page — no `basePath` needed)
- **Output mode**: `standalone` when `DOCKER_BUILD=true`, otherwise default
- `trailingSlash: true` in next.config.js for static hosting compatibility
- Docker support via `Dockerfile` + `docker-compose.yml`

---

## Planned Refactor

> This section will be updated once design samples are reviewed.

**Goals:**
- Modernize visual design with a new design direction (samples TBD)
- Improve page structure and component organization
- Strengthen accessibility and performance
- Potentially introduce shadcn/ui component primitives
- Review and update content sections

**Scope** (to be confirmed with design samples):
- [ ] Design system update (colors, typography, spacing)
- [ ] Hero section redesign
- [ ] Project cards redesign
- [ ] Navigation and header updates
- [ ] Resume page improvements
- [ ] Services page buildout
- [ ] Mobile experience polish
