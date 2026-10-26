import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type LedgerListItem =
  | { label: string; value: ReactNode }
  | { title: ReactNode; subtitle?: ReactNode; meta?: string };

interface LedgerListProps {
  items: LedgerListItem[];
  label?: string;
  /* false: open with a `line` rule instead of `line-strong`, for a list nested under another. */
  strong?: boolean;
}

/* Ruled reference rows: label → value (stack table) or title / subtitle / mono meta (education, languages). */
export default function LedgerList({ items, label, strong = true }: LedgerListProps) {
  return (
    <div>
      {label && <div className="lg-label">{label}</div>}
      <ul className={cn("lg-ledger lg-list", !strong && "lg-list--soft")}>
        {items.map((it, i) =>
          "label" in it ? (
            <li key={i} className="lg-list__row lg-list__row--kv">
              <span className="lg-mono-sm lg-muted">{it.label}</span>
              <span>{it.value}</span>
            </li>
          ) : (
            <li key={i} className="lg-list__row">
              <div style={{ minWidth: 0 }}>
                <div className="lg-list__title">{it.title}</div>
                {it.subtitle && <div className="lg-list__sub">{it.subtitle}</div>}
              </div>
              {it.meta && <span className="lg-mono-sm lg-muted">{it.meta}</span>}
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
