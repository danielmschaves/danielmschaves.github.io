# Daniel Chaves Portfolio

A modern, performant portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- 💻 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 📱 **Fully Responsive** design
- ⚡ **Optimized Performance** with static generation
- 🔍 **SEO Optimized** with meta tags and structured data
- 📄 **Resume Page** with timeline-based experience display
- 🎯 **Project Portfolio** with filtering and categorization
- 🌐 **GitHub Pages** deployment ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/danielmschaves/danielmschaves.github.io.git
cd danielmschaves.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home/Portfolio page
│   ├── resume/
│   │   └── page.tsx       # Resume page
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt
│   ├── sitemap.ts         # Sitemap generation
│   └── manifest.ts        # PWA manifest
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── ProjectCard.tsx
│   ├── ExperienceTimeline.tsx
│   ├── SkillsGrid.tsx
│   └── CertificationCard.tsx
├── data/                  # Content data files
│   ├── projects.json
│   ├── experience.json
│   ├── education.json
│   ├── certifications.json
│   └── skills.json
├── config/
│   └── site.ts            # Site configuration
└── public/
    └── images/            # Static images
```

## Content Management

All content is managed through JSON files in the `data/` directory:

- **projects.json**: Portfolio projects with metadata
- **experience.json**: Work experience entries
- **education.json**: Education history
- **certifications.json**: Certifications and achievements
- **skills.json**: Skills organized by category

To update content, simply edit the corresponding JSON file.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `out/` directory, ready for static hosting.

## Deployment

The site is configured for GitHub Pages deployment via GitHub Actions. The workflow automatically:

1. Builds the Next.js application
2. Exports static files
3. Deploys to GitHub Pages

The deployment is triggered on pushes to the `main` branch.

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
# The out/ directory contains the static files
```

## Customization

### Site Configuration

Edit `config/site.ts` to update:
- Site name and description
- Social media links
- Contact information
- Resume PDF path

### Styling

The site uses Tailwind CSS with a custom design system. Colors and typography can be customized in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and utilities

### Adding Projects

Add new projects to `data/projects.json`:

```json
{
  "id": "project-id",
  "title": "Project Title",
  "description": "Project description",
  "githubUrl": "https://github.com/...",
  "image": "/images/project.jpg",
  "technologies": ["Tech1", "Tech2"],
  "featured": false,
  "category": "Data Engineering"
}
```

## Performance

The site is optimized for performance with:
- Static site generation (SSG)
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle
- Optimized fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: danielmschaves@gmail.com
- **LinkedIn**: [linkedin.com/in/dmschaves](https://www.linkedin.com/in/dmschaves/)
- **GitHub**: [github.com/danielmschaves](https://github.com/danielmschaves)

