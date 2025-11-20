import { Metadata } from "next";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import SectionHeading from "@/components/SectionHeading";
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
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Featured Project */}
      {featuredProject && (
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <SectionHeading
              title="Featured Project"
              subtitle="A highlight of my recent technical work and architectural decisions."
            />
            <div className="mx-auto max-w-5xl">
              <ProjectCard {...featuredProject} featured={true} />
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Technical Expertise"
            subtitle="A comprehensive overview of my technical skills and technology stack."
          />
          <SkillsGrid />
        </div>
      </section>

      {/* All Projects */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            title="Portfolio Projects"
            subtitle="A collection of data engineering and data science projects showcasing modern data stack implementations."
          />
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

