import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return <span className="lg-chip">{children}</span>;
}

export function Chips({ items }: { items: string[] }) {
  return (
    <div className="lg-chips">
      {items.map((t) => (
        <Chip key={t}>{t}</Chip>
      ))}
    </div>
  );
}
