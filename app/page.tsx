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
        <section
          className="section-padding"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(15,23,42,0.4), transparent)',
          }}
        >
          <div className="container-custom">
            <SectionHeading
              label="Featured"
              title="Featured Project"
              subtitle="A highlight of my recent technical work and architectural decisions."
            />
            <div className="mx-auto max-w-5xl">
              <ProjectCard {...featuredProject} featured={true} index={0} />
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Expertise"
            title="Technical Expertise"
            subtitle="A comprehensive overview of my technical skills and technology stack."
          />
          <SkillsGrid />
        </div>
      </section>

      {/* All Projects */}
      <section
        className="section-padding"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(15,23,42,0.4), transparent)',
        }}
      >
        <div className="container-custom">
          <SectionHeading
            label="Portfolio"
            title="All Projects"
            subtitle="Data engineering and analytics projects showcasing modern data stack implementations."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
