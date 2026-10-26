import type { ReactNode } from "react";

interface HeroProps {
  eyebrow: string;
  title: ReactNode;
  accent?: string;
  lead: ReactNode;
  actions?: ReactNode;
  id?: string;
}

export default function Hero({ eyebrow, title, accent, lead, actions, id = "top" }: HeroProps) {
  return (
    <section className="lg-hero" id={id}>
      <p className="lg-hero__eyebrow lg-mono">{eyebrow}</p>
      <h1 className="lg-hero__title">
        {title}
        {accent && <span className="lg-accent"> {accent}</span>}
      </h1>
      <div className="lg-hero__foot">
        <p className="lg-hero__lead">{lead}</p>
        <div className="lg-actions">{actions}</div>
      </div>
    </section>
  );
}
