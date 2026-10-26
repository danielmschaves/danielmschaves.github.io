/* "2024-08" → "2024"; "Present" → "PRESENT". Dates are mono labels, so they're uppercase in copy. */
function year(d: string) {
  return d === "Present" ? "PRESENT" : d.slice(0, 4);
}

export function dateRange(start: string, end: string) {
  const a = year(start);
  const b = year(end);
  return a === b ? a : `${a} — ${b}`;
}
