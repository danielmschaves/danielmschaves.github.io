import { cn } from "@/lib/utils";

export interface Stat {
  value: string;
  unit?: string;
  label: string;
  accent?: boolean;
}

export default function StatStrip({ stats, label = "Track record" }: { stats: Stat[]; label?: string }) {
  return (
    <section className="lg-stats" aria-label={label}>
      {stats.map((s) => (
        <div key={s.label} className="lg-stat">
          <div className={cn("lg-stat__value", s.accent && "lg-accent")}>
            {s.value}
            {s.unit && <span className="lg-stat__unit"> {s.unit}</span>}
          </div>
          <div className="lg-stat__label">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
