import { pad2 } from "@/components/figures/Figure";

export interface CapabilityColumn {
  title: string;
  items: string[];
}

/* Three ruled columns: a number, a sentence-case title and arrow bullets. Home and /services. */
export default function Capabilities({ columns }: { columns: CapabilityColumn[] }) {
  return (
    <div className="lg-caps">
      {columns.map((c, i) => (
        <div key={c.title} className="lg-cap">
          <div className="lg-mono-sm lg-muted">{pad2(i + 1)}</div>
          <h3 className="lg-cap__title">{c.title}</h3>
          <ul className="lg-bullets lg-bullets--plain">
            {c.items.map((t) => (
              <li key={t}>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
