import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: ReactNode;
  aside?: string;
  intro?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
}

export default function SectionHeading({ title, aside, intro, as: Tag = "h2", id }: SectionHeadingProps) {
  return (
    <div className="lg-section__head">
      <Tag className="lg-section__title" id={id}>
        {title}
      </Tag>
      {aside && <span className="lg-mono lg-muted">{aside}</span>}
      {intro && (
        /* Full-width wrapper so the intro always breaks under the title; the p keeps its measure. */
        <div style={{ flexBasis: "100%" }}>
          <p className="lg-section__intro">{intro}</p>
        </div>
      )}
    </div>
  );
}
