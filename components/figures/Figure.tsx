import { cn } from "@/lib/utils";
import type { Lang } from "@/lib/i18n";

/* Ledger case-study figures, ported from the design system's figureSVG(n) and DRAW[n].
   Each figure is a 1500 × 1000 SVG drawn with CSS variables, so one file follows both themes.
   Titles, descriptions and metrics live in HTML beside the figure, never inside it. */

export type CaseNumber = 1 | 2 | 3 | 4 | 5 | 6;

interface FigureMeta {
  label: string;
  ratio: string;
  caption: string;
  alt: string;
}

/* Every word drawn inside the figures, per language. Tool and layer names stay in English. */
const WORDS = {
  en: {
    estate: "LEGACY ESTATE",
    consolidated: "~200 servers, consolidated",
    streams: ["Discovery", "Snowflake", "dbt models", "Tableau", "Cutover"],
    quarters: [["Q1", "PLANNING"], ["Q2", "MVP"], ["Q3", "DEPLOY"], ["Q4", "MONITOR"]],
    layers: [
      ["Data lake", "RAW INGESTION · 3 SOURCES · BRONZE / SILVER / GOLD"],
      ["Warehouse", "DIMENSIONAL MODELS · FACT & DIMENSION · UAT"],
      ["BI layer", "DASHBOARDS · SELF-SERVICE"],
      ["Predictive", "FORECAST · ML"],
    ],
    source: "SOURCE · ",
    batch: "DAILY BATCH · AIRFLOW",
    stageNotes: ["JSON → S3", "PARQUET · DUCKDB", "BUSINESS RULES", "DBT MARTS · MOTHERDUCK"],
    powerBi: "PLAYLIST TRENDS · ARTIST REACH",
    sapSources: "SAP · 64 SOURCES",
    fact: "fact",
    dbtLayers: [["STAGING", "CLEAN · CAST"], ["INTERMEDIATE", "JOIN-READY"], ["MARTS", "BY SUBJECT AREA"]],
    rejected: "REJECTED",
    inProcess: "IN-PROCESS",
    where: ["LOCAL", "AWS", "CLOUD"],
  },
  pt: {
    estate: "PARQUE LEGADO",
    consolidated: "~200 servidores, consolidados",
    streams: ["Discovery", "Snowflake", "Modelos dbt", "Tableau", "Cutover"],
    quarters: [["Q1", "PLANEJAMENTO"], ["Q2", "MVP"], ["Q3", "DEPLOY"], ["Q4", "MONITORAMENTO"]],
    layers: [
      ["Data lake", "INGESTÃO RAW · 3 FONTES · BRONZE / SILVER / GOLD"],
      ["Warehouse", "MODELOS DIMENSIONAIS · FATO & DIMENSÃO · UAT"],
      ["Camada de BI", "DASHBOARDS · SELF-SERVICE"],
      ["Preditivo", "PREVISÃO · ML"],
    ],
    source: "ORIGEM · ",
    batch: "BATCH DIÁRIO · AIRFLOW",
    stageNotes: ["JSON → S3", "PARQUET · DUCKDB", "REGRAS DE NEGÓCIO", "DBT MARTS · MOTHERDUCK"],
    powerBi: "TENDÊNCIAS DE PLAYLISTS · ALCANCE DE ARTISTAS",
    sapSources: "SAP · 64 FONTES",
    fact: "fato",
    dbtLayers: [["STAGING", "LIMPEZA · CAST"], ["INTERMEDIATE", "PRONTO PARA JOIN"], ["MARTS", "POR ÁREA DE NEGÓCIO"]],
    rejected: "REJEITADOS",
    inProcess: "IN-PROCESS",
    where: ["LOCAL", "AWS", "NUVEM"],
  },
};

type Words = (typeof WORDS)["en"];

const META: Record<Lang, Record<CaseNumber, FigureMeta>> = {
  en: {
    1: {
      label: "CLOUD MIGRATION",
      ratio: "6 → 1",
      caption: "One square per server — before and after.",
      alt: "Figure: six legacy data centers, about 200 servers in total, consolidated into one AWS environment.",
    },
    2: {
      label: "MODERNIZATION PROGRAM",
      ratio: "M01 → M18",
      caption: "Program shape and contractual gateways (illustrative).",
      alt: "Figure: 18-month program plan. Discovery, Snowflake, dbt models, Tableau and cutover workstreams across four contractual gateways.",
    },
    3: {
      label: "PLATFORM BUILD",
      ratio: "Q1 → Q4",
      caption: "The platform, layer by layer, quarter by quarter.",
      alt: "Figure: a data platform built over four quarters — data lake, then warehouse, BI layer and predictive models stacked on top.",
    },
    4: {
      label: "ELT PIPELINE",
      ratio: "RAW → GOLD",
      caption: "Each stage narrower, cleaner, closer to a decision.",
      alt: "Figure: Spotify API data moving through raw, bronze, silver and gold stages into Power BI.",
    },
    5: {
      label: "DBT + BIGQUERY",
      ratio: "64 → 1",
      caption: "From source sprawl to a dimensional model.",
      alt: "Figure: 64 SAP source tables reduced to one star schema through staging, intermediate and mart layers.",
    },
    6: {
      label: "PYTHON ETL",
      ratio: "1 → 3",
      caption: "Typed at the gate, routed by configuration.",
      alt: "Figure: BigQuery rows validated by Pydantic, loaded into DuckDB, then routed to CSV, S3 or MotherDuck.",
    },
  },
  pt: {
    1: {
      label: "MIGRAÇÃO PARA A NUVEM",
      ratio: "6 → 1",
      caption: "Um quadrado por servidor — antes e depois.",
      alt: "Figura: seis data centers legados, cerca de 200 servidores no total, consolidados em um único ambiente AWS.",
    },
    2: {
      label: "PROGRAMA DE MODERNIZAÇÃO",
      ratio: "M01 → M18",
      caption: "Formato do programa e gates contratuais (ilustrativo).",
      alt: "Figura: plano de um programa de 18 meses. Frentes de discovery, Snowflake, modelos dbt, Tableau e cutover, atravessando quatro gates contratuais.",
    },
    3: {
      label: "CONSTRUÇÃO DA PLATAFORMA",
      ratio: "Q1 → Q4",
      caption: "A plataforma, camada a camada, trimestre a trimestre.",
      alt: "Figura: uma plataforma de dados construída em quatro trimestres — data lake, depois warehouse, camada de BI e modelos preditivos empilhados por cima.",
    },
    4: {
      label: "PIPELINE ELT",
      ratio: "RAW → GOLD",
      caption: "Cada etapa mais enxuta, mais limpa, mais perto de uma decisão.",
      alt: "Figura: dados da API do Spotify passando pelas etapas raw, bronze, silver e gold até o Power BI.",
    },
    5: {
      label: "DBT + BIGQUERY",
      ratio: "64 → 1",
      caption: "Da dispersão de fontes a um modelo dimensional.",
      alt: "Figura: 64 tabelas de origem do SAP reduzidas a um único star schema pelas camadas staging, intermediate e marts.",
    },
    6: {
      label: "ETL EM PYTHON",
      ratio: "1 → 3",
      caption: "Tipado na entrada, roteado por configuração.",
      alt: "Figura: linhas do BigQuery validadas pelo Pydantic, carregadas no DuckDB e roteadas para CSV, S3 ou MotherDuck.",
    },
  },
};

export function figureMeta(n: CaseNumber, lang: Lang = "en") {
  return META[lang][n];
}

const c = {
  bg: "var(--bg)",
  fg: "var(--fg)",
  muted: "var(--muted)",
  line: "var(--line)",
  wire: "var(--fig-wire)",
  tile: "var(--fig-tile)",
  accent: "var(--accent)",
  accent2: "var(--fig-accent-2)",
  onAccent: "var(--on-accent)",
};

/* app/globals.css maps these to the next/font families (.lg-figure text). */
const SANS = "Inter Tight, system-ui, sans-serif";
const MONO = "JetBrains Mono, ui-monospace, Menlo, monospace";

type Paint = string | null;

interface TextOpts {
  fill: string;
  mono?: boolean;
  size?: number;
  weight?: number;
  ls?: number;
  anchor?: "middle" | "end";
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function T(x: number, y: number, str: string, o: TextOpts) {
  return (
    `<text x="${x}" y="${y}"` +
    (o.anchor ? ` text-anchor="${o.anchor}"` : "") +
    ` font-family="${o.mono ? MONO : SANS}" font-size="${o.size || 16}"` +
    (o.weight ? ` font-weight="${o.weight}"` : "") +
    (o.ls ? ` letter-spacing="${o.ls}"` : "") +
    ` fill="${o.fill}">${esc(str)}</text>`
  );
}

function R(x: number, y: number, w: number, h: number, fill: Paint, stroke?: Paint, sw?: number) {
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill || "none"}"` +
    (stroke ? ` stroke="${stroke}" stroke-width="${sw || 1.5}"` : "") +
    "></rect>"
  );
}

function L(x1: number, y1: number, x2: number, y2: number, stroke: string, sw?: number, dash?: string) {
  return (
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw || 1.5}"` +
    (dash ? ` stroke-dasharray="${dash}"` : "") +
    "></line>"
  );
}

function P(d: string, stroke: string, sw?: number) {
  return `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${sw || 1.5}"></path>`;
}

export function pad2(n: number) {
  return (n < 10 ? "0" : "") + n;
}

function frame(n: CaseNumber, lang: Lang) {
  const k = META[lang][n];
  return (
    R(0, 0, 1500, 1000, c.bg) +
    T(80, 70, "FIG. " + pad2(n), { mono: true, size: 17, ls: 2, fill: c.accent }) +
    T(190, 70, k.label, { mono: true, size: 17, ls: 2, fill: c.muted }) +
    T(1420, 70, k.ratio, { mono: true, size: 17, ls: 2, fill: c.fg, anchor: "end" }) +
    L(80, 100, 1420, 100, c.line) +
    L(80, 880, 1420, 880, c.line) +
    T(80, 925, k.caption, { mono: true, size: 16, fill: c.muted }) +
    T(1420, 925, pad2(n) + " / 06", { mono: true, size: 16, ls: 1.5, fill: c.muted, anchor: "end" })
  );
}

const DRAW: Record<CaseNumber, (w: Words) => string> = {
  /* Six legacy data centers, one square per server, consolidated into AWS. */
  1: (w) => {
    let s = T(80, 180, w.estate, { mono: true, size: 15, ls: 2, fill: c.muted });
    const counts = [38, 30, 27, 33, 36, 36];
    for (let r = 0; r < 6; r++) {
      const y = 220 + r * 95;
      s += T(80, y + 12, "DC " + pad2(r + 1), { mono: true, size: 15, ls: 1.5, fill: c.muted });
      for (let i = 0; i < counts[r]; i++) s += R(170 + (i % 20) * 16, y + Math.floor(i / 20) * 16, 10, 10, c.tile);
      s += P(`M510 ${y + 13} C 760 ${y + 13}, 780 470, 1000 470`, c.wire);
    }
    s += T(1000, 272, "AWS", { mono: true, size: 15, ls: 2, fill: c.accent }) + R(1000, 290, 420, 360, null, c.accent);
    for (let j = 0; j < 200; j++) s += R(1022 + (j % 16) * 24, 308 + Math.floor(j / 16) * 24, 14, 14, c.accent);
    s += T(1000, 700, w.consolidated, { size: 26, weight: 500, fill: c.fg });
    return s;
  },

  /* 18-month Gantt with four contractual gateways. */
  2: (w) => {
    const x0 = 330;
    const mw = (1420 - 330) / 18;
    const mx = (m: number) => x0 + (m - 1) * mw;
    let s =
      T(80, 170, "SQL SERVER", { mono: true, size: 15, ls: 2, fill: c.muted }) +
      L(78, 165, 192, 165, c.muted, 1.5) +
      T(210, 170, "→  SNOWFLAKE · DBT · TABLEAU", { mono: true, size: 15, ls: 2, fill: c.accent });
    s += L(80, 320, 1420, 320, c.line);
    [1, 6, 12, 18].forEach((m) => {
      s += T(mx(m) + mw / 2, 300, pad2(m), { mono: true, size: 14, fill: c.muted, anchor: "middle" });
    });
    ([[4, "G1"], [9, "G2"], [15, "G3"], [18, "G4"]] as const).forEach(([m, g]) => {
      const gx = Math.round(x0 + m * mw);
      s +=
        L(gx, 256, gx, 680, c.wire, 1.5, "4 6") +
        R(gx - 7, 243, 14, 14, c.accent) +
        T(gx, 230, g, { mono: true, size: 14, fill: c.accent, anchor: "middle" });
    });
    const rows: [string, number, number, string][] = [
      [w.streams[0], 1, 4, c.tile],
      [w.streams[1], 3, 9, c.accent],
      [w.streams[2], 5, 14, c.accent],
      [w.streams[3], 9, 15, c.accent2],
      [w.streams[4], 15, 18, c.fg],
    ];
    rows.forEach(([name, from, to, fill], i) => {
      const y = 380 + i * 70;
      s +=
        T(80, y + 7, name, { size: 22, fill: c.fg }) +
        R(Math.round(mx(from)), y - 8, Math.round((to - from + 1) * mw), 16, fill) +
        L(80, y + 35, 1420, y + 35, c.line, 1);
    });
    return s;
  },

  /* Platform layers stacked quarter by quarter. */
  3: (w) => {
    const q = w.quarters;
    let s = "";
    q.forEach(([quarter, phase], i) => {
      const x = 80 + i * 335;
      s += T(x, 172, quarter, { size: 28, weight: 500, fill: c.fg }) + T(x, 200, phase, { mono: true, size: 14, ls: 2, fill: c.muted });
      if (i > 0) s += L(x, 225, x, 820, c.wire, 1.5, "4 6");
    });
    const blocks: [number, number, string, string, boolean][] = [
      [80, 700, w.layers[0][0], w.layers[0][1], false],
      [415, 570, w.layers[1][0], w.layers[1][1], false],
      [750, 440, w.layers[2][0], w.layers[2][1], false],
      [1085, 310, w.layers[3][0], w.layers[3][1], true],
    ];
    blocks.forEach(([x, y, name, note, hot]) => {
      const w = 1420 - x;
      s +=
        R(x, y, w, 110, hot ? c.accent : c.bg, hot ? null : c.fg) +
        T(x + 28, y + 50, name, { size: 30, weight: 500, fill: hot ? c.onAccent : c.fg }) +
        T(x + 28, y + 84, note, { mono: true, size: 13, ls: 1.5, fill: hot ? c.onAccent : c.muted });
    });
    return s;
  },

  /* Medallion stages, each narrower than the last, into Power BI. */
  4: (w) => {
    let s =
      T(80, 170, w.source, { mono: true, size: 15, ls: 2, fill: c.muted }) +
      T(196, 170, "SPOTIFY API", { mono: true, size: 15, ls: 2, fill: c.fg }) +
      T(1420, 170, w.batch, { mono: true, size: 15, ls: 2, fill: c.muted, anchor: "end" });
    const st: [string, string, string, number][] = [
      ["i", "Raw", w.stageNotes[0], 1340],
      ["ii", "Bronze", w.stageNotes[1], 1180],
      ["iii", "Silver", w.stageNotes[2], 1020],
      ["iv", "Gold", w.stageNotes[3], 860],
    ];
    st.forEach(([num, name, note, w], i) => {
      const y = 210 + i * 120;
      const gold = i === 3;
      const stroke = i === 0 ? c.tile : c.fg;
      const ink = gold ? c.onAccent : c.fg;
      s +=
        R(80, y, w, 96, gold ? c.accent : c.bg, gold ? null : stroke) +
        T(112, y + 58, num, { mono: true, size: 22, fill: gold ? c.onAccent : c.accent }) +
        T(190, y + 58, name, { size: 30, weight: 500, fill: ink }) +
        T(80 + w - 32, y + 56, note, { mono: true, size: 14, ls: 2, fill: gold ? c.onAccent : c.muted, anchor: "end" });
    });
    s +=
      L(112, 666, 112, 742, c.wire) +
      R(105, 752, 14, 14, c.accent) +
      T(140, 768, "Power BI", { size: 28, weight: 500, fill: c.fg }) +
      T(290, 766, w.powerBi, { mono: true, size: 14, ls: 2, fill: c.muted });
    return s;
  },

  /* 64 SAP tables reduced to a star schema through three dbt layers. */
  5: (w) => {
    let s = T(80, 180, w.sapSources, { mono: true, size: 15, ls: 2, fill: c.muted });
    const hot = new Set([2, 9, 13, 20, 27, 30, 36, 41, 44, 50, 58, 61]);
    for (let i = 0; i < 64; i++) {
      const x = 80 + (i % 8) * 46;
      const y = 210 + Math.floor(i / 8) * 46;
      s += hot.has(i) ? R(x, y, 34, 34, c.accent) : R(x + 0.75, y + 0.75, 32.5, 32.5, null, c.tile);
    }
    s += L(480, 388, 770, 388, c.accent) + P("M758 378 L772 388 L758 398", c.accent);
    const cx = 1100;
    const cy = 388;
    s += L(940, cy, 1025, cy, c.wire) + L(1175, cy, 1260, cy, c.wire) + L(cx, 286, cx, 313, c.wire) + L(cx, 463, cx, 490, c.wire);
    [[820, 360], [1260, 360], [1040, 230], [1040, 490]].forEach(([x, y]) => {
      s += R(x, y, 120, 56, c.bg, c.fg) + T(x + 60, y + 34, "DIM", { mono: true, size: 15, ls: 2, fill: c.fg, anchor: "middle" });
    });
    s += R(1025, 313, 150, 150, c.accent) + T(cx, cy + 10, w.fact, { size: 32, weight: 500, fill: c.onAccent, anchor: "middle" });
    const cols = w.dbtLayers;
    cols.forEach(([name, note], i) => {
      const x = 80 + i * 447;
      const last = i === 2;
      s +=
        L(x, 640, x + 447, 640, last ? c.accent : c.fg, last ? 3 : 1.5) +
        (i > 0 ? L(x, 640, x, 760, c.line) : "") +
        T(x + (i ? 24 : 0), 684, name, { mono: true, size: 15, ls: 2, fill: last ? c.accent : c.fg }) +
        T(x + (i ? 24 : 0), 712, note, { mono: true, size: 13, ls: 1.5, fill: c.muted });
    });
    return s;
  },

  /* Validate with Pydantic, load into DuckDB, route to one of three sinks. */
  6: (w) => {
    let s =
      L(190, 385, 540, 385, c.wire) +
      R(80, 330, 110, 110, c.bg, c.fg) +
      T(135, 396, "BQ", { size: 30, weight: 500, fill: c.fg, anchor: "middle" }) +
      T(80, 484, "BIGQUERY", { mono: true, size: 14, ls: 2, fill: c.fg }) +
      T(80, 508, "THELOOK_ECOMMERCE", { mono: true, size: 13, ls: 1.5, fill: c.muted });
    [222, 254, 286, 318].forEach((x) => {
      s += R(x, 380, 10, 10, c.tile);
    });
    s +=
      L(352, 390, 352, 520, c.wire, 1.5, "3 5") +
      R(347.75, 524.75, 9.5, 9.5, null, c.tile) +
      T(370, 534, w.rejected, { mono: true, size: 13, ls: 1.5, fill: c.muted });
    s += R(380, 290, 12, 190, c.accent) + T(386, 272, "PYDANTIC", { mono: true, size: 14, ls: 2, fill: c.accent, anchor: "middle" });
    [420, 452, 484].forEach((x) => {
      s += R(x, 380, 10, 10, c.accent);
    });
    s +=
      R(540, 320, 180, 130, c.bg, c.fg) +
      T(630, 396, "DuckDB", { size: 30, weight: 500, fill: c.fg, anchor: "middle" }) +
      T(630, 482, w.inProcess, { mono: true, size: 13, ls: 2, fill: c.muted, anchor: "middle" });
    ([[w.where[0], "CSV", 200], [w.where[1], "S3", 345], [w.where[2], "MotherDuck", 490]] as const).forEach(([where, name, y]) => {
      s +=
        P(`M720 385 C 940 385, 940 ${y + 40}, 1160 ${y + 40}`, c.wire) +
        R(1160, y, 260, 80, c.bg, c.fg) +
        T(1184, y + 28, where, { mono: true, size: 12, ls: 2, fill: c.muted }) +
        T(1184, y + 60, name, { size: 24, weight: 500, fill: c.fg });
    });
    return s;
  },
};

/* bare: no frame labels, cropped to the drawing — for small sizes. */
export function figureSVG(n: CaseNumber, bare = false, lang: Lang = "en") {
  const viewBox = bare ? "60 130 1380 720" : "0 0 1500 1000";
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="${esc(META[lang][n].alt)}">` +
    (bare ? R(0, 0, 1500, 1000, c.bg) : frame(n, lang)) +
    DRAW[n](WORDS[lang]) +
    "</svg>"
  );
}

interface FigureProps {
  n: number;
  lang?: Lang;
  /* Single frameless variant, for small fixed sizes. */
  bare?: boolean;
  /* Default true: render framed + bare, and a container query shows the bare one under 720px
     (the featured card on desktop, every phone), so frame labels never shrink below legibility. */
  responsive?: boolean;
  className?: string;
}

export default function Figure({ n, lang = "en", bare = false, responsive = true, className }: FigureProps) {
  if (!(n in META.en)) return null;
  const k = n as CaseNumber;
  if (bare || !responsive) {
    return (
      <div
        className={cn("lg-figure", bare && "lg-figure--bare", className)}
        dangerouslySetInnerHTML={{ __html: figureSVG(k, bare, lang) }}
      />
    );
  }
  return (
    <div className={cn("lg-figure-set", className)}>
      <div className="lg-figure lg-figure--full" dangerouslySetInnerHTML={{ __html: figureSVG(k, false, lang) }} />
      <div
        className="lg-figure lg-figure--bare lg-figure--compact"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: figureSVG(k, true, lang) }}
      />
    </div>
  );
}
