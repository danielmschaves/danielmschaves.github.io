import Link from "next/link";
import type { ReactNode } from "react";

interface PageHeaderProps {
  title: ReactNode;
  eyebrow?: string;
  lead?: ReactNode;
  actions?: ReactNode;
  /* The mono "← ALL WORK" link. Case pages render it themselves, above the figure. */
  back?: [label: string, href: string];
}

/* The opening of every inner page; the homepage uses Hero. One h1 per page. */
export default function PageHeader({ title, eyebrow, lead, actions, back }: PageHeaderProps) {
  return (
    <section className="lg-page-head">
      {back && <BackLink label={back[0]} href={back[1]} />}
      {eyebrow && <p className="lg-hero__eyebrow lg-mono">{eyebrow}</p>}
      <h1 className="lg-page-head__title">{title}</h1>
      {(lead || actions) && (
        <div className="lg-hero__foot">
          {lead ? <p className="lg-hero__lead">{lead}</p> : <span />}
          {actions && <div className="lg-actions">{actions}</div>}
        </div>
      )}
    </section>
  );
}

export function BackLink({ label, href }: { label: string; href: string }) {
  return (
    <Link className="lg-page-head__back lg-mono-sm" href={href}>
      ← {label}
    </Link>
  );
}
