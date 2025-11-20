"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsGrid from "@/components/SkillsGrid";
import CertificationCard from "@/components/CertificationCard";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";
import certificationsData from "@/data/certifications.json";
import { siteConfig } from "@/config/site";

export default function ResumeContent() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                        {siteConfig.name}
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                        {siteConfig.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href={siteConfig.resumePdf}
                            download="Daniel-Chaves-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF Resume
                        </a>
                        <Link href="/" className="btn-secondary">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Portfolio
                        </Link>
                    </div>
                </div>

                <div className="mx-auto max-w-5xl space-y-20">
                    {/* Experience */}
                    <section>
                        <h2 className="mb-12 text-3xl font-bold text-foreground">Experience</h2>
                        <ExperienceTimeline experiences={experienceData} />
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="mb-12 text-3xl font-bold text-foreground">Education</h2>
                        <div className="space-y-6">
                            {educationData.map((edu, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                                >
                                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                                        <div>
                                            <h3 className="text-xl font-semibold text-foreground">
                                                {edu.institution}
                                            </h3>
                                            <p className="text-muted-foreground">{edu.degree}</p>
                                            <p className="text-sm text-muted-foreground/80">{edu.location}</p>
                                        </div>
                                        <div className="text-sm font-semibold text-primary md:text-base">
                                            {edu.year}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Certifications */}
                    <section>
                        <h2 className="mb-12 text-3xl font-bold text-foreground">
                            Certifications
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {certificationsData.map((cert, idx) => (
                                <CertificationCard key={idx} certification={cert} />
                            ))}
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <h2 className="mb-12 text-3xl font-bold text-foreground">Skills</h2>
                        <SkillsGrid />
                    </section>
                </div>
            </div>
        </div>
    );
}
