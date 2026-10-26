import Link from "next/link";
import Figure, { pad2 } from "@/components/figures/Figure";
import { Chips } from "@/components/Chip";
import type { Lang } from "@/lib/i18n";

interface FeaturedCaseProps {
  n: number;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  lang: Lang;
  featuredLabel: string;
}

/* The one framed box in Ledger: figure left, case summary right. */
export default function FeaturedCase({ n, eyebrow, title, description, href, metrics, tags, lang, featuredLabel }: FeaturedCaseProps) {
  return (
    <Link className="lg-feature" href={href}>
      <div className="lg-feature__media">
        <Figure n={n} lang={lang} />
      </div>
      <div className="lg-feature__body">
        <span className="lg-mono lg-accent">
          {pad2(n)} · {featuredLabel} · {eyebrow}
        </span>
        <h3 className="lg-feature__title">{title}</h3>
        <p className="lg-feature__text">{description}</p>
        <div className="lg-feature__metrics">
          {metrics.map((m) => (
            <div key={m.label} className="lg-feature__metric">
              <b>{m.value}</b>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
        <Chips items={tags} />
      </div>
    </Link>
  );
}
