"use client";

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterPillsProps {
  options: FilterOption[];
  value: string;
  onChange: (id: string) => void;
  label?: string;
}

export default function FilterPills({ options, value, onChange, label = "Filter projects" }: FilterPillsProps) {
  return (
    <div className="lg-pills" role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o.id} type="button" className="lg-pill" aria-pressed={value === o.id} onClick={() => onChange(o.id)}>
          {o.label}
          {o.count != null && <span className="lg-pill__count">{o.count}</span>}
        </button>
      ))}
    </div>
  );
}
