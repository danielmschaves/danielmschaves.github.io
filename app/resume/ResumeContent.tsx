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

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: 'clamp(24px, 3vw, 32px)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  color: 'var(--text)',
  marginBottom: 28,
};

export default function ResumeContent() {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="section-label mb-4">Resume</p>
          <h1
            className="font-bold mb-4"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            className="mx-auto mb-8 text-lg leading-relaxed"
            style={{ color: 'var(--text-muted)', maxWidth: 600 }}
          >
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
              <Download className="h-4 w-4" />
              Download PDF Resume
            </a>
            <Link href="/" className="btn-secondary">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-5xl space-y-20">

          {/* Experience */}
          <section>
            <h2 style={sectionHeadingStyle}>Experience</h2>
            <ExperienceTimeline experiences={experienceData} />
          </section>

          {/* Education */}
          <section>
            <h2 style={sectionHeadingStyle}>Education</h2>
            <div className="flex flex-col gap-4">
              {educationData.map((edu) => (
                <div
                  key={edu.institution}
                  className="card-hover transition-all duration-[250ms]"
                  style={{
                    background: 'var(--ink-2)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 24,
                  }}
                >
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                    <div>
                      <h3
                        className="font-semibold text-xl"
                        style={{ color: 'var(--text)', letterSpacing: '-0.015em' }}
                      >
                        {edu.institution}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{edu.degree}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-meta)' }}>{edu.location}</p>
                    </div>
                    <div
                      className="font-mono text-sm font-semibold"
                      style={{ color: 'var(--primary-400)', whiteSpace: 'nowrap' }}
                    >
                      {edu.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 style={sectionHeadingStyle}>Certifications</h2>
            <div className="flex flex-col gap-5">
              {certificationsData.map((cert, idx) => (
                <CertificationCard key={cert.title} certification={cert} />
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 style={sectionHeadingStyle}>Skills</h2>
            <SkillsGrid />
          </section>

          {/* Languages */}
          {/* (Languages are already rendered inside SkillsGrid) */}

        </div>
      </div>
    </div>
  );
}
