import type { ReactNode, SVGProps } from "react";

/* Shared SVG primitives for case-study infocharts. Charts are drawn at their real width
   (the Infochart minWidth equals the viewBox width), so these sizes are the rendered sizes.
   Ledger chart rules: text ≥ 12px (13px for body-like labels), mono at 0.04em, squares only,
   series told apart by lightness and labelled, connectors in fig-wire. */

export const C = {
  fg: "var(--fg)",
  body: "var(--body)",
  muted: "var(--muted)",
  line: "var(--line)",
  lineStrong: "var(--line-strong)",
  wire: "var(--fig-wire)",
  tile: "var(--fig-tile)",
  accent: "var(--accent)",
  accent2: "var(--fig-accent-2)",
  bg: "var(--bg)",
  surface: "var(--surface)",
  onAccent: "var(--on-accent)",
} as const;

type Anchor = "start" | "middle" | "end";

interface TProps {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: Anchor;
  /* Rendered px. Clamped to the 12px minimum. */
  size?: number;
  weight?: 400 | 500 | 600;
  fill?: string;
  /* Mono label: JetBrains Mono at 0.04em. Copy is already UPPERCASE where it should be. */
  mono?: boolean;
}

export function T({ x, y, children, anchor = "start", size, weight, fill = C.fg, mono = false }: TProps) {
  const px = Math.max(12, size ?? (mono ? 12 : 13));
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={px}
      fontWeight={weight}
      fill={fill}
      fontFamily={mono ? "JetBrains Mono, ui-monospace, monospace" : "Inter Tight, system-ui, sans-serif"}
      letterSpacing={mono ? "0.04em" : undefined}
    >
      {children}
    </text>
  );
}

/* Several lines of text, `gap` px apart. */
export function Lines({ x, y, lines, gap = 18, ...rest }: Omit<TProps, "children" | "y"> & { y: number; lines: string[]; gap?: number }) {
  return (
    <>
      {lines.map((l, i) => (
        <T key={i} x={x} y={y + i * gap} {...rest}>
          {l}
        </T>
      ))}
    </>
  );
}

/* A square or rectangle; never rounded. */
export function Box({ fill = "none", stroke, sw = 1.5, ...rest }: Omit<SVGProps<SVGRectElement>, "rx" | "ry"> & { sw?: number }) {
  return <rect fill={fill} stroke={stroke} strokeWidth={stroke ? sw : undefined} {...rest} />;
}

/* Square marker with a centred letter or number (steps, milestones, risk badges, legend keys). */
export function Badge({ cx, cy, size, fill, label, ink = C.onAccent, stroke, labelSize }: {
  cx: number;
  cy: number;
  size: number;
  fill: string;
  label?: string;
  ink?: string;
  stroke?: string;
  labelSize?: number;
}) {
  return (
    <>
      <Box x={cx - size / 2} y={cy - size / 2} width={size} height={size} fill={fill} stroke={stroke} />
      {label && (
        <T x={cx} y={cy + (labelSize ?? 14) * 0.36} anchor="middle" size={labelSize ?? 14} weight={600} fill={ink}>
          {label}
        </T>
      )}
    </>
  );
}

/* A connector, optionally ending in an open arrowhead (no marker defs, so ids never clash). */
export function Wire({ x1, y1, x2, y2, arrow = false, stroke = C.wire, sw = 1.5, dash }: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  arrow?: boolean;
  stroke?: string;
  sw?: number;
  dash?: string;
}) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 8;
  const p1 = [x2 - h * Math.cos(a - 0.5), y2 - h * Math.sin(a - 0.5)];
  const p2 = [x2 - h * Math.cos(a + 0.5), y2 - h * Math.sin(a + 0.5)];
  return (
    <>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={sw} strokeDasharray={dash} />
      {arrow && <path d={`M${p1[0]} ${p1[1]} L${x2} ${y2} L${p2[0]} ${p2[1]}`} fill="none" stroke={stroke} strokeWidth={sw} />}
    </>
  );
}

/* Chart canvas: viewBox width = the Infochart minWidth, so nothing scales below 1:1. */
export function Canvas({ w = 1100, h, label, children }: { w?: number; h: number; label: string; children: ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label={label} style={{ display: "block", height: "auto" }}>
      {children}
    </svg>
  );
}
