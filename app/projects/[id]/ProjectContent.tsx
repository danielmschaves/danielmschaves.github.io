import { Chips } from "@/components/Chip";
import type { Project } from "@/lib/projects";

/* Fallback body for a project without a dedicated case-study component. */
export default function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="lg-split" style={{ paddingTop: 56 }}>
      <div className="flex flex-col gap-5">
        <div>
          <div className="lg-label">STACK</div>
          <Chips items={project.technologies} />
        </div>
        {project.githubUrl && (
          <a href={project.githubUrl} style={{ fontSize: 14, fontWeight: 600, padding: "12px 0" }}>
            View on GitHub ↗
          </a>
        )}
        {project.links?.map((link) => (
          <a key={link.url} href={link.url} style={{ fontSize: 14, fontWeight: 600, padding: "4px 0" }}>
            {link.label} ↗
          </a>
        ))}
      </div>

      <div style={{ maxWidth: 760 }}>
        <p className="lead" style={{ color: "var(--body)", marginTop: 0 }}>
          {project.overview ?? project.description}
        </p>
        {project.highlights && project.highlights.length > 0 && (
          <ul className="lg-bullets">
            {project.highlights.map((h) => (
              <li key={h}>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
        {project.technicalApproach && (
          <div style={{ marginTop: 32 }}>
            <div className="lg-label">TECHNICAL APPROACH</div>
            <p className="body" style={{ color: "var(--body)", margin: 0 }}>
              {project.technicalApproach}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
