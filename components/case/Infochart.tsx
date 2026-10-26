import type { ReactNode } from "react";
import { pad2 } from "@/components/figures/Figure";
import { getDictionary, type Lang } from "@/lib/i18n";

interface InfochartProps {
  num: number;
  label: string;
  title: string;
  sub?: string;
  /* The width the chart is drawn at. The SVG viewBox has the same width, so labels render 1:1;
     on narrow screens the canvas scrolls sideways instead of shrinking the type. */
  minWidth?: number;
  lang?: Lang;
  children: ReactNode;
}

/* The frame around every chart in a case study. */
export default function Infochart({ num, label, title, sub, minWidth = 720, lang = "en", children }: InfochartProps) {
  const t = getDictionary(lang).case;
  return (
    <figure className="lg-chart">
      <figcaption>
        <div className="lg-mono-sm lg-accent">
          {t.infochart} {pad2(num)} · {label}
        </div>
        <div className="lg-chart__title">{title}</div>
        {sub && <div className="lg-chart__sub">{sub}</div>}
      </figcaption>
      <div className="lg-chart__scroll" tabIndex={0} role="region" aria-label={title}>
        <div className="lg-chart__canvas" style={{ minWidth }}>
          {children}
        </div>
      </div>
      <div className="lg-chart__hint lg-mono-sm lg-muted" aria-hidden="true">
        {t.scroll}
      </div>
    </figure>
  );
}
