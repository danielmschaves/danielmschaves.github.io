import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Home() {
  const featuredProject = projectsData.find((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
              {/* Profile Image */}
              <div className="shrink-0">
                <div className="relative h-48 w-48 md:h-56 md:w-56">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1">
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-dark-800">
                      <Image
                        src="/images/profile.jpg"
                        alt="Daniel Chaves"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 192px, 224px"
                        priority
                        unoptimized
                      />
                    </div>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-2 rounded-full border-2 border-primary-500/20 animate-pulse" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                    Daniel Chaves
                  </h1>
                  <div className="mb-6 inline-block rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400 backdrop-blur-sm">
                    Delivery Manager & Data Engineer
                  </div>
                </div>
                
                <div className="mb-8 space-y-4">
                  <p className="text-lg leading-relaxed text-dark-200 md:text-xl">
                    Leading enterprise data initiatives with{" "}
                    <span className="font-semibold text-white">6 years</span> of
                    experience delivering AI/ML solutions and managing
                    cross-functional teams of{" "}
                    <span className="font-semibold text-white">30+ professionals</span>.
                  </p>
                  <p className="text-base leading-relaxed text-dark-300 md:text-lg">
                    Specializing in modern data stack implementations with{" "}
                    <span className="font-medium text-primary-400">
                      Python, SQL, dbt, Airflow, Snowflake
                    </span>{" "}
                    and cloud platforms.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  <Link
                    href="/resume"
                    className="btn-primary shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30"
                  >
                    View Resume
                  </Link>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary dark:bg-dark-700 dark:border-dark-600 dark:text-dark-100 dark:hover:bg-dark-600"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Core Expertise */}
            <div className="mt-16">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Core Expertise
                </h2>
              </div>
              <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-5">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/20">
                    <svg
                      className="h-8 w-8 text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Data Engineering
                  </h3>
                  <p className="text-sm text-dark-300">
                    dbt, Airflow, Dagster, Spark, Kafka, ETL/ELT pipelines
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/20">
                    <svg
                      className="h-8 w-8 text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Data Platforms
                  </h3>
                  <p className="text-sm text-dark-300">
                    AWS, GCP, Azure, Snowflake, BigQuery, Databricks
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/20">
                    <svg
                      className="h-8 w-8 text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    AI/ML Solutions
                  </h3>
                  <p className="text-sm text-dark-300">
                    TensorFlow, PyTorch, Generative AI, Intelligent Agents
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/20">
                    <svg
                      className="h-8 w-8 text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Project Management
                  </h3>
                  <p className="text-sm text-dark-300">
                    Agile, Scrum, Waterfall, Stakeholder Management
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/20">
                    <svg
                      className="h-8 w-8 text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Data Products
                  </h3>
                  <p className="text-sm text-dark-300">
                    Product Strategy, Roadmaps, Dashboards, Analytics Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="section-padding bg-dark-800/50">
          <div className="container-custom">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Featured Project
              </h2>
            </div>
            <div className="mx-auto max-w-4xl">
              <ProjectCard {...featuredProject} />
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Portfolio Projects
            </h2>
            <p className="mx-auto max-w-2xl text-dark-300">
              A collection of data engineering and data science projects
              showcasing modern data stack implementations, ETL/ELT pipelines,
              and machine learning solutions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

