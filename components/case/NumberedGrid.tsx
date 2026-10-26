import { pad2 } from "@/components/figures/Figure";

/* Two-column numbered ledger for lists of equals: deliverables, principles. */
export default function NumberedGrid({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <ol className="lg-ngrid">
      {items.map((it, i) => (
        <li key={it.title} className="lg-ngrid__item">
          <span className="lg-mono-sm lg-muted">{pad2(i + 1)}</span>
          <div>
            <div className="lg-ngrid__title">{it.title}</div>
            <div className="lg-ngrid__desc">{it.desc}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}
