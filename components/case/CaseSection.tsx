import type { ReactNode } from "react";
import { pad2 } from "@/components/figures/Figure";

interface CaseSectionProps {
  num: number;
  kicker: string;
  /* Wrap the one accented phrase in <em>. */
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}

/* A numbered chapter of a case study: "01 — CONTEXT & DIAGNOSIS", an h2, an optional lead, then content. */
export default function CaseSection({ num, kicker, title, lead, children }: CaseSectionProps) {
  return (
    <section className="lg-case-sec">
      <p className="lg-mono lg-muted lg-case-sec__num">
        {pad2(num)} — {kicker}
      </p>
      <h2 className="lg-case-sec__title">{title}</h2>
      {lead && <p className="lg-case-sec__lead">{lead}</p>}
      {children}
    </section>
  );
}
