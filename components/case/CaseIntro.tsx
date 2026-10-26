import type { ReactNode } from "react";
import FactStrip from "@/components/case/FactStrip";
import { Chips } from "@/components/Chip";

/* The opening of a case-study body: lead → FactStrip → chips (README › Pages). */
export default function CaseIntro({ lead, facts, tags }: { lead: ReactNode; facts: [string, ReactNode][]; tags: string[] }) {
  return (
    <div className="lg-case-intro">
      <p className="lg-case-intro__lead">{lead}</p>
      <FactStrip facts={facts} />
      <Chips items={tags} />
    </div>
  );
}
