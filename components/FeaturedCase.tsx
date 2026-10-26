import Link from "next/link";
import Figure, { pad2 } from "@/components/figures/Figure";
import { Chips } from "@/components/Chip";

interface FeaturedCaseProps {
  n: number;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  metrics: { value: string; label: string }[];
  tags: string[];
}

/* The one framed box in Ledger: figure left, case summary right. */
export default function FeaturedCase({ n, eyebrow, title, description, href, metrics, tags }: FeaturedCaseProps) {
  return (
    <Link className="lg-feature" href={href}>
      <div className="lg-feature__media">
        <Figure n={n} />
      </div>
      <div className="lg-feature__body">
        <span className="lg-mono lg-accent">
          {pad2(n)} · FEATURED · {eyebrow}
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
