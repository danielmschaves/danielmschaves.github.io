/* One mono line under the stat strip naming who the work was for (UPPERCASE copy). */
export default function AccountsLine({ items, label = "SELECTED ACCOUNTS" }: { items: string[]; label?: string }) {
  return <p className="lg-accounts lg-mono">{[label, ...items].join(" · ")}</p>;
}
