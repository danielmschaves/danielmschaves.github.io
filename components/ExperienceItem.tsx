"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  position: string;
  company: string;
  dates: string;
  current?: boolean;
  summary: string;
  achievements?: string[];
  defaultOpen?: boolean;
}

export default function ExperienceItem({
  position,
  company,
  dates,
  current,
  summary,
  achievements = [],
  defaultOpen = false,
}: ExperienceItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const hasDetail = achievements.length > 0;

  return (
    <li className="lg-row">
      <button
        type="button"
        className="lg-role__head"
        aria-expanded={hasDetail ? open : undefined}
        disabled={!hasDetail}
        style={hasDetail ? undefined : { cursor: "default" }}
        onClick={() => setOpen(!open)}
      >
        <span style={{ minWidth: 0, flex: "1 1 360px" }}>
          <span className="lg-role__title">
            {position} — {company}
          </span>
          <span className="lg-role__summary">{summary}</span>
        </span>
        <span className="lg-role__meta">
          <span className={cn("lg-role__date", current && "lg-role__date--current")}>{dates}</span>
          {hasDetail && (
            <span className="lg-row__sign" aria-hidden="true">
              {open ? "−" : "+"}
            </span>
          )}
        </span>
      </button>
      {open && hasDetail && (
        <div className="lg-role__panel">
          <ul className="lg-bullets lg-bullets--plain">
            {achievements.map((t) => (
              <li key={t}>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
