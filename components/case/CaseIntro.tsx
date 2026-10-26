import type { ReactNode } from "react";
import Button from "@/components/Button";
import FactStrip from "@/components/case/FactStrip";
import { Chips } from "@/components/Chip";

/* The opening of a case study body: lead → FactStrip → chips (README › Pages), then any repository links. */
export default function CaseIntro({ lead, facts, tags, links }: {
  lead: ReactNode;
  facts: [string, ReactNode][];
  tags: string[];
  links?: { label: string; href: string }[];
}) {
  return (
    <div className="lg-case-intro">
      <p className="lg-case-intro__lead">{lead}</p>
      <FactStrip facts={facts} />
      <Chips items={tags} />
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <Button key={l.href} variant="link" href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} ↗
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
