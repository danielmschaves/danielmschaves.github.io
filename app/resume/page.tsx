import { Metadata } from "next";
import Link from "next/link";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsGrid from "@/components/SkillsGrid";
import CertificationCard from "@/components/CertificationCard";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";
import certificationsData from "@/data/certifications.json";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Resume - Daniel Chaves",
  description: "Professional resume and experience of Daniel Chaves, Delivery Manager and Data Engineer.",
};

export default function ResumePage() {
  return (
    <div className="section-padding bg-dark-900">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Daniel Chaves
          </h1>
          <p className="mb-6 text-lg text-dark-200 md:text-xl">
            Results-driven Delivery Manager with 6 years of experience leading
            enterprise data initiatives and cross-functional teams. Proven
            expertise in delivering AI/ML solutions, managing concurrent
            projects, and driving measurable business impact. Technical
            expertise in Python, SQL, dbt, Airflow, Snowflake, and cloud
            platforms, specializing in modern data stack implementations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.resumePdf}
              download="Daniel-Chaves-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download PDF Resume
            </a>
            <Link href="/" className="btn-secondary dark:bg-dark-800 dark:border-dark-600 dark:text-white dark:hover:bg-dark-700">
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-20">
          {/* Experience */}
          <section>
            <h2 className="mb-12 text-3xl font-bold text-white">Experience</h2>
            <ExperienceTimeline experiences={experienceData} />
          </section>

          {/* Education */}
          <section>
            <h2 className="mb-12 text-3xl font-bold text-white">Education</h2>
            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border-l-4 border-primary-500/30 bg-dark-800/50 p-6 transition-all hover:border-primary-500/60 hover:bg-dark-800/70"
                >
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-dark-200">{edu.degree}</p>
                      <p className="text-sm text-dark-400">{edu.location}</p>
                    </div>
                    <div className="text-sm font-semibold text-primary-400 md:text-base">
                      {edu.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="mb-12 text-3xl font-bold text-white">
              Certifications
            </h2>
            <div className="space-y-6">
              {certificationsData.map((cert, idx) => (
                <CertificationCard key={idx} certification={cert} />
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="mb-12 text-3xl font-bold text-white">Skills</h2>
            <SkillsGrid />
          </section>
        </div>
      </div>
    </div>
  );
}

