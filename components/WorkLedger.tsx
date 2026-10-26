"use client";

import { useState, type ReactNode } from "react";
import FilterPills from "@/components/FilterPills";
import ProjectRow, { type ProjectRowData } from "@/components/ProjectRow";

interface WorkLedgerProps {
  featured?: ReactNode;
  rows: (ProjectRowData & { category: string })[];
}

/* Selected work: the featured case, then category pills over an accordion of rows (one open at a time). */
export default function WorkLedger({ featured, rows }: WorkLedgerProps) {
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = Array.from(new Set(rows.map((r) => r.category)));
  const options = [
    { id: "all", label: "All", count: rows.length },
    ...categories.map((c) => ({ id: c, label: c, count: rows.filter((r) => r.category === c).length })),
  ];
  const visible = filter === "all" ? rows : rows.filter((r) => r.category === filter);

  return (
    <div className="flex flex-col gap-10">
      {featured}
      <FilterPills options={options} value={filter} onChange={setFilter} />
      <div className="lg-ledger">
        {visible.map(({ category: _category, ...row }) => (
          <ProjectRow
            key={row.id}
            {...row}
            open={openId === row.id}
            onToggle={(open) => setOpenId(open ? row.id : null)}
          />
        ))}
      </div>
    </div>
  );
}
