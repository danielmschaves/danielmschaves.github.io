import skills from "@/data/skills.json";
import { pad2 } from "@/components/figures/Figure";

const columns = [skills.deliveryLeadership, skills.dataPlatform, skills.aiDelivery];

/* Three capability columns, each opened by a line-strong rule. */
export function CapabilityColumns() {
  return (
    <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
      {columns.map((col, i) => (
        <div key={col.title} className="min-w-0 border-t border-line-strong pt-6">
          <div className="lg-mono lg-muted mb-3">{pad2(i + 1)}</div>
          <h3 className="title mb-2">{col.title}</h3>
          <ul className="lg-bullets lg-bullets--plain" style={{ marginTop: 8 }}>
            {col.skills.map((s) => (
              <li key={s}>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* One row per category in skills.json. */
export function StackTable() {
  const rows = Object.entries(skills.technical.categories);
  return (
    <dl className="lg-ledger">
      {rows.map(([category, tools]) => (
        <div key={category} className="lg-row grid gap-2 py-4 sm:grid-cols-[240px_minmax(0,1fr)] sm:gap-6">
          <dt className="lg-mono lg-muted">{category.toUpperCase()}</dt>
          <dd className="body-sm m-0" style={{ color: "var(--body)" }}>
            {tools.join(" · ")}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function Capabilities() {
  return (
    <div className="flex flex-col gap-16">
      <CapabilityColumns />
      <div>
        <div className="lg-label">STACK</div>
        <StackTable />
      </div>
    </div>
  );
}
