import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";
import { siteConfig } from "@/config/site";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Daniel Chaves`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Check if project has detailed information
  const hasDetails = project.overview || (project.highlights && project.highlights.length > 0);

  return (
    <div className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-dark-300 transition-colors hover:text-primary-400"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Portfolio
          </Link>

          {/* Project Image */}
          <div className="mb-8 overflow-hidden rounded-lg">
            <div className="relative aspect-video w-full overflow-hidden bg-dark-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Project Header */}
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              {project.title}
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-dark-200">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary-500/20 px-4 py-2 text-sm font-medium text-primary-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* Project Details */}
          {hasDetails ? (
            <div className="space-y-8">
              {/* Overview */}
              {project.overview && (
                <div className="card">
                  <h2 className="mb-4 text-2xl font-bold text-white">Overview</h2>
                  <p className="text-base leading-relaxed text-dark-200">
                    {project.overview}
                  </p>
                </div>
              )}

              {/* Key Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="card">
                  <h2 className="mb-6 text-2xl font-bold text-white">Key Highlights</h2>
                  <ul className="space-y-4">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 text-base leading-relaxed text-dark-200"
                      >
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Approach */}
              {project.technicalApproach && (
                <div className="card">
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    Technical Approach
                  </h2>
                  <p className="text-base leading-relaxed text-dark-200">
                    {project.technicalApproach}
                  </p>
                </div>
              )}

              {/* External Links */}
              {project.links && project.links.length > 0 && (
                <div className="card">
                  <h2 className="mb-6 text-2xl font-bold text-white">
                    Additional Resources
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Link to GitHub for full documentation */}
              <div className="card bg-primary-500/10 border-primary-500/30">
                <p className="mb-4 text-dark-200">
                  For complete setup instructions, technical documentation, and code
                  examples, visit the GitHub repository.
                </p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Full Documentation on GitHub
                </a>
              </div>
            </div>
          ) : (
            <div className="card">
              <h2 className="mb-4 text-2xl font-bold text-white">Project Details</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-dark-200">
                  This project is part of my portfolio showcasing expertise in{" "}
                  <span className="font-medium text-primary-400">
                    {project.category}
                  </span>
                  . For more detailed information, code examples, and documentation,
                  please visit the GitHub repository.
                </p>
                <p className="mt-4 text-dark-200">
                  <strong className="text-white">Category:</strong> {project.category}
                </p>
                {project.featured && (
                  <p className="mt-2 text-dark-200">
                    <span className="inline-block rounded-full bg-primary-500/20 px-3 py-1 text-sm font-medium text-primary-400">
                      Featured Project
                    </span>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

