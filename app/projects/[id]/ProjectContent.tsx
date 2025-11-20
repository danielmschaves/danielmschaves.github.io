"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
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
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="container-custom">
                <div className="mx-auto max-w-4xl">
                    <Link
                        href="/"
                        className="group mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Portfolio
                    </Link>

                    <div className="mb-8 overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm">
                        <div className="relative aspect-video w-full overflow-hidden bg-muted">
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
                    </div>

                    <div className="mb-12">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                            {project.title}
                        </h1>
                        <p className="mb-6 text-xl leading-relaxed text-muted-foreground">
                            {project.description}
                        </p>

                        <div className="mb-8 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                View on GitHub
                            </a>
                        </div>
                    </div>

                    {hasDetails ? (
                        <div className="space-y-8">
                            {project.overview && (
                                <div className="rounded-xl border border-border/50 bg-card p-8 shadow-sm">
                                    <h2 className="mb-4 text-2xl font-bold text-foreground">Overview</h2>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        {project.overview}
                                    </p>
                                </div>
                            )}

                            {project.highlights && project.highlights.length > 0 && (
                                <div className="rounded-xl border border-border/50 bg-card p-8 shadow-sm">
                                    <h2 className="mb-6 text-2xl font-bold text-foreground">Key Highlights</h2>
                                    <ul className="space-y-4">
                                        {project.highlights.map((highlight, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-4 text-base leading-relaxed text-muted-foreground"
                                            >
                                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                                <span className="flex-1">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.technicalApproach && (
                                <div className="rounded-xl border border-border/50 bg-card p-8 shadow-sm">
                                    <h2 className="mb-4 text-2xl font-bold text-foreground">
                                        Technical Approach
                                    </h2>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        {project.technicalApproach}
                                    </p>
                                </div>
                            )}

                            {project.links && project.links.length > 0 && (
                                <div className="rounded-xl border border-border/50 bg-card p-8 shadow-sm">
                                    <h2 className="mb-6 text-2xl font-bold text-foreground">
                                        Additional Resources
                                    </h2>
                                    <div className="flex flex-wrap gap-4">
                                        {project.links.map((link, idx) => (
                                            <a
                                                key={idx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-secondary"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="rounded-xl border border-border/50 bg-card p-8 shadow-sm">
                            <p className="text-muted-foreground">
                                Detailed information is available on GitHub.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
