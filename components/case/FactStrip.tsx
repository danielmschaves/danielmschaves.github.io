import type { ReactNode } from "react";

/* The role / duration / budget / scope row on a case page. */
export default function FactStrip({ facts }: { facts: [label: string, value: ReactNode][] }) {
  return (
    <dl className="lg-facts">
      {facts.map(([label, value]) => (
        <div key={label} className="lg-fact">
          <dt className="lg-mono-sm lg-muted">{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
