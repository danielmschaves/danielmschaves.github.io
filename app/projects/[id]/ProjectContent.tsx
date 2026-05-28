import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  overview?: string;
  highlights?: string[];
  technicalApproach?: string;
  links?: { label: string; url: string }[];
}

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const hasDetails = project.overview || (project.highlights && project.highlights.length > 0);

  return (
    <div className="min-h-screen pt-12 pb-16">
      <div className="container-custom">

        {/* Back */}
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-sm transition-colors duration-[250ms] hover:text-[var(--primary-400)]"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        {/* Hero block */}
        <div className="max-w-[780px] mb-8">
          <h1
            className="font-bold mb-4"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}
          >
            {project.title}
          </h1>
          <p
            className="mb-6 leading-relaxed"
            style={{ fontSize: 17, color: 'var(--text-body)' }}
          >
            {project.description}
          </p>

          {/* Tech chips */}
          <div className="mb-6 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>

          {/* Links */}
          {project.githubUrl && (
            <div className="flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          )}
        </div>

        {/* Hero image */}
        <div
          className="relative mb-12 overflow-hidden"
          style={{
            aspectRatio: '21/9',
            borderRadius: 18,
            border: '1px solid var(--line)',
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
            unoptimized
          />
        </div>

        {/* Body */}
        {hasDetails ? (
          <div className="grid gap-12 grid-cols-1 lg:grid-cols-[1fr_300px]">

            {/* Main content */}
            <div className="flex flex-col gap-8">
              {project.overview && (
                <div
                  style={{
                    background: 'var(--ink-2)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 32,
                  }}
                >
                  <h2
                    className="mb-4 font-bold text-2xl"
                    style={{ color: 'var(--text)', letterSpacing: '-0.015em' }}
                  >
                    Overview
                  </h2>
                  <p className="leading-relaxed" style={{ fontSize: 17, color: 'var(--text-body)' }}>
                    {project.overview}
                  </p>
                </div>
              )}

              {project.highlights && project.highlights.length > 0 && (
                <div
                  style={{
                    background: 'var(--ink-2)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 32,
                  }}
                >
                  <h2
                    className="mb-6 font-bold text-2xl"
                    style={{ color: 'var(--text)', letterSpacing: '-0.015em' }}
                  >
                    Key Highlights
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: 'var(--text-body)' }}
                      >
                        <span
                          className="mt-2 shrink-0 rounded-full"
                          style={{ width: 6, height: 6, background: 'var(--primary-500)' }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technicalApproach && (
                <div
                  style={{
                    background: 'var(--ink-2)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 32,
                  }}
                >
                  <h2
                    className="mb-4 font-bold text-2xl"
                    style={{ color: 'var(--text)', letterSpacing: '-0.015em' }}
                  >
                    Technical Approach
                  </h2>
                  <p className="leading-relaxed" style={{ fontSize: 17, color: 'var(--text-body)' }}>
                    {project.technicalApproach}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-4">
              {/* Tech stack card */}
              <div
                style={{
                  background: 'var(--ink-2)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 20,
                }}
              >
                <h3 className="mb-3 font-semibold text-sm" style={{ color: 'var(--text)' }}>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Links card */}
              {project.links && project.links.length > 0 && (
                <div
                  style={{
                    background: 'var(--ink-2)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 20,
                  }}
                >
                  <h3 className="mb-3 font-semibold text-sm" style={{ color: 'var(--text)' }}>
                    Additional Resources
                  </h3>
                  <div className="flex flex-col gap-2">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm transition-colors duration-[250ms] hover:text-[var(--primary-300)]"
                        style={{ color: 'var(--primary-400)' }}
                      >
                        <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* GitHub */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              )}
            </div>

          </div>
        ) : (
          <div
            style={{
              background: 'var(--ink-2)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-lg)',
              padding: 32,
            }}
          >
            <p style={{ color: 'var(--text-muted)' }}>
              Detailed information is available on GitHub.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
