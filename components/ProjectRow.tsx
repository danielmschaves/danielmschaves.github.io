"use client";

import Button from "@/components/Button";
import { Chips } from "@/components/Chip";

export interface ProjectRowData {
  id: string;
  num: string;
  eyebrow: string;
  title: string;
  description: string;
  overview?: string;
  highlights?: string[];
  approach?: string;
  tech?: string[];
  repo?: string;
  href: string;
}

interface ProjectRowProps extends ProjectRowData {
  open: boolean;
  onToggle: (open: boolean) => void;
}

/* Expandable ledger row. Opens in place; the +/− sign is decorative, aria-expanded carries state. */
export default function ProjectRow({
  id,
  num,
  eyebrow,
  title,
  description,
  overview,
  highlights,
  approach,
  tech,
  repo,
  href,
  open,
  onToggle,
}: ProjectRowProps) {
  const panelId = `row-${id}`;
  return (
    <div className="lg-row">
      <button
        type="button"
        className="lg-row__head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => onToggle(!open)}
      >
        <span className="lg-row__num">{num}</span>
        <span style={{ minWidth: 0 }}>
          <span className="lg-row__eyebrow">{eyebrow}</span>
          <span className="lg-row__title">{title}</span>
          <span className="lg-row__desc">{description}</span>
        </span>
        <span className="lg-row__sign" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="lg-row__panel" id={panelId}>
          <div className="lg-row__main">
            {overview && <p className="lg-row__overview">{overview}</p>}
            {highlights && highlights.length > 0 && (
              <ul className="lg-bullets">
                {highlights.map((t) => (
                  <li key={t}>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="lg-row__side">
            {approach && (
              <div>
                <div className="lg-label">TECHNICAL APPROACH</div>
                <p>{approach}</p>
              </div>
            )}
            {tech && tech.length > 0 && (
              <div>
                <div className="lg-label">STACK</div>
                <Chips items={tech} />
              </div>
            )}
            <div className="lg-actions" style={{ gap: "8px 20px" }}>
              <Button variant="link" href={href}>
                Read case study →
              </Button>
              {repo && (
                <a href={repo} style={{ fontSize: 14, fontWeight: 600, padding: "12px 0" }}>
                  View on GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
