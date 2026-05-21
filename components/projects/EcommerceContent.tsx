"use client";

import Link from "next/link";
import { ArrowLeft, Database, Shield, Layers, BarChart2, CheckCircle2, FileText } from "lucide-react";

/* ── palette ─────────────────────────────────────────────────────────── */
const T800 = "#0F766E";
const T600 = "#0D9488";
const T300 = "#5EEAD4";
const GOLD = "#F59E0B";
const DNGR = "#DC2626";
const GOOD = "#16A34A";

/* ── shared style tokens ─────────────────────────────────────────────── */
const mono = { fontFamily: "var(--font-mono)" } as const;
const sectionNum: React.CSSProperties = { ...mono, fontSize: 12, color: "var(--primary-400)", fontWeight: 600, letterSpacing: "0.08em", marginBottom: 12, display: "block" };
const sectionH2: React.CSSProperties = { fontWeight: 700, fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 16 };
const sectionLead: React.CSSProperties = { fontSize: 17, color: "var(--text-body)", maxWidth: 720, lineHeight: 1.55 };
const infograph: React.CSSProperties = { background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: 40, margin: "32px 0", overflow: "hidden" };
const infographLabel: React.CSSProperties = { ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: T600, fontWeight: 600, marginBottom: 10, display: "block" };
const infographTitle: React.CSSProperties = { fontSize: 22, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em" };
const infographSub: React.CSSProperties = { fontSize: 14, color: "var(--text-body)", marginTop: 6 };

/* SVG inline style helpers */
const svgText  = (extra?: React.CSSProperties) => ({ fontFamily: "inherit", fontSize: 11, fill: "var(--text)", ...extra } as React.CSSProperties);
const svgMute  = (extra?: React.CSSProperties) => ({ fontFamily: "inherit", fontSize: 11, fill: "var(--text-body)", ...extra } as React.CSSProperties);
const svgLabel = (extra?: React.CSSProperties) => ({ ...mono, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase" as const, fill: "var(--text-muted)", ...extra });
const svgBg     = "var(--ink-3)";
const svgBorder = "var(--line)";

const deliverables = [
  { icon: Database,     title: "BigQuery Extractor (bq_client.py)",  desc: "Table-agnostic extractor using the BigQuery Python client. Returns validated list[dict] output. Auth via service account JSON or ADC." },
  { icon: Shield,       title: "Pydantic Models (models.py)",         desc: "One BaseModel subclass per source table. Type coercion, enum validation, nullability enforcement, and strict/tolerant mode configuration." },
  { icon: Layers,       title: "DuckDB Loader (duckdb_loader.py)",    desc: "In-process analytical engine. Receives validated records, creates in-memory DuckDB tables, exposes DuckDBRelation for sink consumption." },
  { icon: BarChart2,    title: "Multi-Sink Adapters (sinks.py)",      desc: "CSVSink, S3Sink, and MotherDuckSink — all implementing a common SinkAdapter protocol. Runtime-selectable via --sink CLI flag." },
  { icon: CheckCircle2, title: "Unit Test Suite (pytest)",             desc: "Independent tests per module. BigQuery mocked with unittest.mock. Validator tests use hardcoded valid/invalid dicts. Sink tests use in-memory DuckDB." },
  { icon: FileText,     title: "README + .env template",              desc: "Local setup guide, GCP service account configuration, AWS credential setup, MotherDuck token setup, and example CLI invocations for each sink." },
];

export default function EcommerceContent() {
  return (
    <div className="min-h-screen pt-12 pb-20">
      <div className="container-custom">

        {/* Back */}
        <Link href="/" className="group mb-10 inline-flex items-center gap-2 text-sm transition-colors duration-[250ms] hover:text-[var(--primary-400)]" style={{ color: "var(--text-muted)" }}>
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        {/* ── Hero ── */}
        <section style={{ paddingBottom: 48 }}>
          <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--primary-400)", fontWeight: 500, marginBottom: 28, display: "inline-block" }}>
            Project · Data Engineering · ETL Pipeline
          </span>
          <h1 style={{ fontWeight: 700, fontSize: "clamp(36px, 5vw, 62px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 24 }}>
            A modular Python ETL that{" "}
            <em style={{ fontStyle: "italic", color: T600 }}>extracts, validates, and sinks</em>{" "}
            e-commerce data to three configurable destinations.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--text-body)", maxWidth: 680, fontWeight: 400 }}>
            Built on BigQuery&apos;s public thelook_ecommerce dataset, this pipeline enforces type safety via Pydantic models, processes data in-process via DuckDB, and routes results to CSV, Amazon S3, or MotherDuck based on runtime configuration — with every component independently testable.
          </p>
        </section>

        {/* ── Meta strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "28px 0" }}>
          {[
            ["Type",         "ETL Pipeline"],
            ["Source",       "BigQuery Public"],
            ["Engine",       "DuckDB (in-process)"],
            ["Destinations", "3 · CSV · S3 · MotherDuck"],
          ].map(([label, value]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", fontWeight: 500 }}>{label}</span>
              <span style={{ fontSize: 18, fontWeight: 600, color: "var(--text)" }}>{value}</span>
            </div>
          ))}
        </div>

        {/* ── Tech tags ── */}
        <div className="mb-8 flex flex-wrap gap-2">
          {["Python", "BigQuery", "Pydantic", "DuckDB", "Amazon S3", "MotherDuck", "dbt"].map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* ── External link ── */}
        <div className="mb-14 flex flex-wrap gap-3">
          <a href="https://github.com/danielmschaves/gcp-etl-dbt" target="_blank" rel="noopener noreferrer"
            style={{ ...mono, fontSize: 12, padding: "8px 16px", border: "1px solid var(--line-strong)", borderRadius: "var(--radius-full)", color: "var(--primary-400)", background: "var(--ink-3)", fontWeight: 500, textDecoration: "none" }}>
            GitHub Repository ↗
          </a>
        </div>

        {/* ── 01 Context & Architecture ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>01 — Context &amp; Architecture</span>
            <h2 style={sectionH2}>Extract once, <em style={{ fontStyle: "italic", color: T600 }}>validate strictly</em>, sink anywhere.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>The design problem</h3>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: 16 }}>Most ETL scripts couple the extraction, transformation, and loading steps into a single procedural blob — making each step impossible to test independently and every destination change a surgery. The goal here was to build a pipeline where each stage is a self-contained Python module: the BigQuery extractor doesn&apos;t know about DuckDB, the Pydantic validator doesn&apos;t know about S3, and the sink layer is selected at runtime, not hardcoded.</p>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7 }}>The e-commerce dataset from BigQuery&apos;s public catalog provides a realistic multi-table workload — orders, order items, users, products, inventory, and events — at a volume that exercises real ingestion patterns without requiring private credentials.</p>
            </div>
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>Why Pydantic validation in the middle</h3>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: 16 }}><strong style={{ color: "var(--text)" }}>Data contracts at the boundary.</strong> The BigQuery extractor returns unvalidated dicts. Pydantic models intercept each record before it enters DuckDB, enforcing types, rejecting nulls in non-nullable columns, and flagging business-rule violations — all before bad data can corrupt the analytical layer.</p>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7 }}>Validation failures are logged with row context, not swallowed silently. The pipeline can be configured to fail-fast on the first invalid record (strict mode) or quarantine invalid rows and continue (tolerant mode), depending on the sink destination&apos;s sensitivity.</p>
            </div>
          </div>

          {/* Infochart 01 · ETL Flow */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 01 · End-to-End ETL Flow</span>
              <div style={infographTitle}>BigQuery → Extract → Validate → DuckDB → Sink</div>
              <div style={infographSub}>Each stage is an independent Python module — no stage has a direct import from the next. The sink destination is the only runtime-variable component.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 320" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                <defs>
                  <marker id="ec-flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={T800} />
                  </marker>
                </defs>

                {/* BigQuery */}
                <rect x="10" y="80" width="160" height="160" fill={T800} rx="6" />
                <text x="90" y="130" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 14 })}>BigQuery</text>
                <text x="90" y="150" textAnchor="middle" style={svgText({ fill: "#CCFBF1", fontSize: 11 })}>Public Dataset</text>
                <line x1="30" y1="162" x2="150" y2="162" stroke={T600} strokeWidth="1" />
                <text x="90" y="180" textAnchor="middle" style={svgText({ fill: "#A7F3D0", fontSize: 10 })}>orders</text>
                <text x="90" y="196" textAnchor="middle" style={svgText({ fill: "#A7F3D0", fontSize: 10 })}>order_items · users</text>
                <text x="90" y="212" textAnchor="middle" style={svgText({ fill: "#A7F3D0", fontSize: 10 })}>products · events</text>
                <line x1="174" y1="160" x2="198" y2="160" stroke={T800} strokeWidth="2" markerEnd="url(#ec-flow-arrow)" />

                {/* BQ Extractor */}
                <rect x="202" y="80" width="180" height="160" style={{ fill: svgBg }} stroke={T800} strokeWidth="2" rx="6" />
                <text x="292" y="108" textAnchor="middle" style={svgText({ fill: T600, fontWeight: 600, fontSize: 13 })}>BigQuery</text>
                <text x="292" y="126" textAnchor="middle" style={svgText({ fill: T600, fontWeight: 600, fontSize: 13 })}>Extractor</text>
                <text x="292" y="144" textAnchor="middle" style={svgLabel()}>bq_client.py</text>
                <line x1="222" y1="152" x2="362" y2="152" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="292" y="170" textAnchor="middle" style={svgText({ fontSize: 10 })}>Table name as input</text>
                <text x="292" y="188" textAnchor="middle" style={svgText({ fontSize: 10 })}>Returns list[dict]</text>
                <text x="292" y="208" textAnchor="middle" style={svgText({ fontSize: 10 })}>Pagination handled</text>
                <text x="292" y="228" textAnchor="middle" style={svgText({ fontSize: 10 })}>Auth via service account</text>
                <line x1="386" y1="160" x2="410" y2="160" stroke={T800} strokeWidth="2" markerEnd="url(#ec-flow-arrow)" />

                {/* Pydantic Validator */}
                <rect x="414" y="80" width="180" height="160" style={{ fill: svgBg }} stroke={GOLD} strokeWidth="2" rx="6" />
                <text x="504" y="108" textAnchor="middle" style={svgText({ fill: GOLD, fontWeight: 600, fontSize: 13 })}>Pydantic</text>
                <text x="504" y="126" textAnchor="middle" style={svgText({ fill: GOLD, fontWeight: 600, fontSize: 13 })}>Validator</text>
                <text x="504" y="144" textAnchor="middle" style={svgLabel()}>models.py</text>
                <line x1="434" y1="152" x2="574" y2="152" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="504" y="170" textAnchor="middle" style={svgText({ fontSize: 10 })}>Type enforcement</text>
                <text x="504" y="188" textAnchor="middle" style={svgText({ fontSize: 10 })}>Not-null checks</text>
                <text x="504" y="208" textAnchor="middle" style={svgText({ fontSize: 10 })}>Business-rule validation</text>
                <text x="504" y="228" textAnchor="middle" style={svgText({ fontSize: 10 })}>Strict or tolerant mode</text>
                <line x1="598" y1="160" x2="622" y2="160" stroke={T800} strokeWidth="2" markerEnd="url(#ec-flow-arrow)" />

                {/* DuckDB */}
                <rect x="626" y="80" width="180" height="160" fill={T800} rx="6" />
                <text x="716" y="130" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 14 })}>DuckDB</text>
                <text x="716" y="150" textAnchor="middle" style={svgText({ fill: "#CCFBF1", fontSize: 11 })}>In-process engine</text>
                <line x1="646" y1="162" x2="786" y2="162" stroke={T600} strokeWidth="1" />
                <text x="716" y="180" textAnchor="middle" style={svgText({ fill: "#A7F3D0", fontSize: 10 })}>Validated records loaded</text>
                <text x="716" y="198" textAnchor="middle" style={svgText({ fill: "#A7F3D0", fontSize: 10 })}>In-memory analytical DB</text>
                <text x="716" y="216" textAnchor="middle" style={svgText({ fill: "#A7F3D0", fontSize: 10 })}>No idle server cost</text>
                <line x1="810" y1="160" x2="834" y2="160" stroke={T800} strokeWidth="2" markerEnd="url(#ec-flow-arrow)" />

                {/* Sink destinations */}
                <rect x="838" y="40"  width="250" height="52" style={{ fill: svgBg }} stroke={T800} strokeWidth="1.5" rx="4" />
                <text x="963" y="62" textAnchor="middle" style={svgText({ fill: T600, fontWeight: 600, fontSize: 12 })}>Local CSV</text>
                <text x="963" y="80" textAnchor="middle" style={svgMute({ fontSize: 10 })}>filesystem sink · dev / testing</text>

                <rect x="838" y="134" width="250" height="52" style={{ fill: svgBg }} stroke={GOLD} strokeWidth="1.5" rx="4" />
                <text x="963" y="156" textAnchor="middle" style={svgText({ fill: GOLD, fontWeight: 600, fontSize: 12 })}>Amazon S3</text>
                <text x="963" y="174" textAnchor="middle" style={svgMute({ fontSize: 10 })}>object storage · data lake integration</text>

                <rect x="838" y="228" width="250" height="52" fill={T800} rx="4" />
                <text x="963" y="250" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 12 })}>MotherDuck</text>
                <text x="963" y="268" textAnchor="middle" style={svgText({ fill: "#CCFBF1", fontSize: 10 })}>cloud DuckDB · analytical query endpoint</text>

                {/* Sink arrows */}
                <line x1="834" y1="140" x2="834" y2="66"  stroke={T800} strokeWidth="1.5" />
                <line x1="834" y1="66"  x2="835" y2="66"  stroke={T800} strokeWidth="1.5" markerEnd="url(#ec-flow-arrow)" />
                <line x1="834" y1="160" x2="835" y2="160" stroke={GOLD} strokeWidth="1.5" markerEnd="url(#ec-flow-arrow)" />
                <line x1="834" y1="180" x2="834" y2="254" stroke={T800} strokeWidth="1.5" />
                <line x1="834" y1="254" x2="835" y2="254" stroke={T800} strokeWidth="1.5" markerEnd="url(#ec-flow-arrow)" />

                <text x="963" y="308" textAnchor="middle" style={svgLabel({ fill: GOLD, fontWeight: 600 })}>Destination selected at runtime · --sink csv | s3 | motherduck</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 02 Source Schema ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>02 — Source Schema</span>
            <h2 style={sectionH2}>Six tables from BigQuery&apos;s <em style={{ fontStyle: "italic", color: T600 }}>thelook_ecommerce</em> public dataset.</h2>
            <p style={sectionLead}>The pipeline is table-agnostic — any table name is valid input to the BigQuery extractor. The six tables below represent the core e-commerce domain: transactional (orders, order_items), dimensional (users, products), operational (inventory_items), and behavioural (events).</p>
          </div>

          {/* Infochart 02 · Source Schema */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 02 · Source Schema — thelook_ecommerce</span>
              <div style={infographTitle}>Six e-commerce tables · key columns · row counts</div>
              <div style={infographSub}>The BigQuery extractor accepts any table name from this dataset. Pydantic model classes correspond 1-to-1 with each table.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 460" style={{ width: "100%", minWidth: 800, height: "auto", display: "block" }}>
                <defs>
                  <marker id="ec-rel-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={T600} />
                  </marker>
                </defs>

                {/* orders */}
                <rect x="10" y="20" width="230" height="160" style={{ fill: svgBg }} stroke={T800} strokeWidth="2" rx="6" />
                <rect x="10" y="20" width="230" height="28" fill={T800} rx="6" />
                <rect x="10" y="36" width="230" height="12" fill={T800} />
                <text x="125" y="38" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 12 })}>orders</text>
                <text x="30"  y="68"  style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>order_id (PK)</text>
                <text x="30"  y="84"  style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>user_id (FK)</text>
                <text x="30"  y="100" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>status · created_at</text>
                <text x="30"  y="116" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>num_of_item</text>
                <text x="30"  y="132" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>gender · traffic_source</text>
                <text x="125" y="164" textAnchor="middle" style={svgLabel({ fill: T600, fontWeight: 600 })}>~125K rows</text>

                {/* order_items */}
                <rect x="10" y="220" width="230" height="170" style={{ fill: svgBg }} stroke={T800} strokeWidth="2" rx="6" />
                <rect x="10" y="220" width="230" height="28" fill={T800} rx="6" />
                <rect x="10" y="236" width="230" height="12" fill={T800} />
                <text x="125" y="238" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 12 })}>order_items</text>
                <text x="30" y="268" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>id (PK)</text>
                <text x="30" y="284" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>order_id (FK) · user_id (FK)</text>
                <text x="30" y="300" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>product_id (FK)</text>
                <text x="30" y="316" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>sale_price · status</text>
                <text x="30" y="332" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>shipped_at · returned_at</text>
                <text x="125" y="372" textAnchor="middle" style={svgLabel({ fill: T600, fontWeight: 600 })}>~250K rows</text>

                {/* FK: order_items → orders */}
                <line x1="240" y1="284" x2="240" y2="100" stroke={T600} strokeWidth="1.5" strokeDasharray="4 3" />
                <line x1="240" y1="100" x2="244" y2="100" stroke={T600} strokeWidth="1.5" markerEnd="url(#ec-rel-arrow)" />

                {/* users */}
                <rect x="300" y="20" width="230" height="160" style={{ fill: svgBg }} stroke={T600} strokeWidth="1.5" rx="6" />
                <rect x="300" y="20" width="230" height="28" fill={T600} rx="6" />
                <rect x="300" y="36" width="230" height="12" fill={T600} />
                <text x="415" y="38" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 12 })}>users</text>
                <text x="320" y="68"  style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>id (PK)</text>
                <text x="320" y="84"  style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>first_name · last_name</text>
                <text x="320" y="100" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>email · gender · age</text>
                <text x="320" y="116" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>country · city · state</text>
                <text x="320" y="132" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>traffic_source · created_at</text>
                <text x="415" y="164" textAnchor="middle" style={svgLabel({ fill: T600, fontWeight: 600 })}>~100K rows</text>

                {/* orders → users FK line */}
                <line x1="300" y1="84" x2="244" y2="84" stroke={T600} strokeWidth="1.5" strokeDasharray="4 3" />

                {/* products */}
                <rect x="300" y="220" width="230" height="170" style={{ fill: svgBg }} stroke={T600} strokeWidth="1.5" rx="6" />
                <rect x="300" y="220" width="230" height="28" fill={T600} rx="6" />
                <rect x="300" y="236" width="230" height="12" fill={T600} />
                <text x="415" y="238" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 12 })}>products</text>
                <text x="320" y="268" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>id (PK)</text>
                <text x="320" y="284" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>name · brand · category</text>
                <text x="320" y="300" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>department · sku</text>
                <text x="320" y="316" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>retail_price · cost</text>
                <text x="320" y="332" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>distribution_center_id</text>
                <text x="415" y="372" textAnchor="middle" style={svgLabel({ fill: T600, fontWeight: 600 })}>~29K rows</text>

                {/* order_items → products */}
                <line x1="240" y1="300" x2="298" y2="300" stroke={T600} strokeWidth="1.5" strokeDasharray="4 3" />

                {/* inventory_items */}
                <rect x="590" y="20" width="230" height="160" style={{ fill: svgBg }} stroke={T300} strokeWidth="1.5" rx="6" />
                <rect x="590" y="20" width="230" height="28" fill={T800} opacity={0.7} rx="6" />
                <rect x="590" y="36" width="230" height="12" fill={T800} opacity={0.7} />
                <text x="705" y="38" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 12 })}>inventory_items</text>
                <text x="610" y="68"  style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>id (PK)</text>
                <text x="610" y="84"  style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>product_id (FK)</text>
                <text x="610" y="100" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>product_category</text>
                <text x="610" y="116" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>cost · sold_at</text>
                <text x="610" y="132" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>created_at · sold_at</text>
                <text x="705" y="164" textAnchor="middle" style={svgLabel({ fill: T600, fontWeight: 600 })}>~500K rows</text>

                {/* inventory_items → products */}
                <line x1="590" y1="84" x2="533" y2="84" stroke={T300} strokeWidth="1.5" strokeDasharray="4 3" />

                {/* events */}
                <rect x="590" y="220" width="230" height="170" style={{ fill: svgBg }} stroke={T300} strokeWidth="1.5" rx="6" />
                <rect x="590" y="220" width="230" height="28" fill={T800} opacity={0.7} rx="6" />
                <rect x="590" y="236" width="230" height="12" fill={T800} opacity={0.7} />
                <text x="705" y="238" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 12 })}>events</text>
                <text x="610" y="268" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>id (PK)</text>
                <text x="610" y="284" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>user_id (FK)</text>
                <text x="610" y="300" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>event_type · session_id</text>
                <text x="610" y="316" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>browser · os · ip_address</text>
                <text x="610" y="332" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>uri · created_at</text>
                <text x="705" y="372" textAnchor="middle" style={svgLabel({ fill: T600, fontWeight: 600 })}>~2.5M rows</text>

                {/* events → users */}
                <line x1="590" y1="284" x2="533" y2="284" stroke={T300} strokeWidth="1.5" strokeDasharray="4 3" />
                <line x1="533" y1="284" x2="533" y2="132" stroke={T300} strokeWidth="1.5" strokeDasharray="4 3" />
                <line x1="533" y1="132" x2="534" y2="132" stroke={T300} strokeWidth="1.5" markerEnd="url(#ec-rel-arrow)" />

                {/* Legend */}
                <g transform="translate(860, 60)">
                  <rect x="0" y="0" width="225" height="110" style={{ fill: svgBg }} stroke={svgBorder} strokeWidth="1" rx="4" />
                  <text x="12" y="20" style={svgLabel({ fill: T300, fontWeight: 600 })}>Legend</text>
                  <line x1="12" y1="40" x2="50" y2="40" stroke={T800} strokeWidth="2" />
                  <text x="58" y="44" style={svgText({ fontSize: 11 })}>Primary extractor target</text>
                  <line x1="12" y1="64" x2="50" y2="64" stroke={T600} strokeWidth="1.5" />
                  <text x="58" y="68" style={svgText({ fontSize: 11 })}>Secondary / dimension</text>
                  <line x1="12" y1="88" x2="50" y2="88" stroke={T300} strokeWidth="1.5" strokeDasharray="4 3" />
                  <text x="58" y="92" style={svgText({ fontSize: 11 })}>FK join relationship</text>
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 03 Pydantic Validation ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>03 — Pydantic Validation Layer</span>
            <h2 style={sectionH2}>Type safety at the <em style={{ fontStyle: "italic", color: T600 }}>ingestion boundary</em> — before a single record enters DuckDB.</h2>
            <p style={sectionLead}>Pydantic v2 models act as the contract between the BigQuery extractor and the DuckDB loader. Every record is passed through the relevant model class — invalid records are intercepted, logged, and either rejected or quarantined before they can corrupt the analytical layer.</p>
          </div>

          {/* Infochart 03 · Pydantic Validation */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 03 · Pydantic Validation — Order Model Example</span>
              <div style={infographTitle}>Input dict → OrderModel → valid record OR validation error</div>
              <div style={infographSub}>Each source table has a corresponding Pydantic model class. Validation runs per-record at ingestion time, not batch-after-load.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 440" style={{ width: "100%", minWidth: 800, height: "auto", display: "block" }}>
                <defs>
                  <marker id="ec-pyd-t" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={T800} />
                  </marker>
                  <marker id="ec-pyd-g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={GOOD} />
                  </marker>
                  <marker id="ec-pyd-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={DNGR} />
                  </marker>
                </defs>

                {/* Input dict */}
                <rect x="10" y="20" width="280" height="200" style={{ fill: svgBg }} stroke={svgBorder} strokeWidth="1.5" rx="6" />
                <rect x="10" y="20" width="280" height="28" fill="var(--bg-card)" rx="6" />
                <rect x="10" y="36" width="280" height="12" fill="var(--bg-card)" />
                <text x="150" y="38" textAnchor="middle" style={svgText({ fontWeight: 600, fontSize: 12 })}>Raw dict from BigQuery</text>
                <text x="28" y="70"  style={svgText({ fontSize: 10, fill: T600, fontFamily: "monospace" })}>&#34;order_id&#34;: &#34;12345&#34;</text>
                <text x="28" y="88"  style={svgText({ fontSize: 10, fill: T600, fontFamily: "monospace" })}>&#34;user_id&#34;: &#34;789&#34;</text>
                <text x="28" y="106" style={svgText({ fontSize: 10, fill: T600, fontFamily: "monospace" })}>&#34;status&#34;: &#34;Complete&#34;</text>
                <text x="28" y="124" style={svgText({ fontSize: 10, fill: T600, fontFamily: "monospace" })}>&#34;num_of_item&#34;: &#34;3&#34;</text>
                <text x="28" y="142" style={svgText({ fontSize: 10, fill: GOLD, fontFamily: "monospace" })}>&#34;created_at&#34;: null</text>
                <text x="28" y="160" style={svgMute({ fontSize: 10, fill: GOLD })}>⚠ null in non-nullable field</text>
                <text x="28" y="196" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>strings not yet coerced to types</text>

                <line x1="294" y1="120" x2="328" y2="120" stroke={T800} strokeWidth="2" markerEnd="url(#ec-pyd-t)" />

                {/* Pydantic model */}
                <rect x="332" y="20" width="300" height="340" style={{ fill: svgBg }} stroke={GOLD} strokeWidth="2" rx="6" />
                <rect x="332" y="20" width="300" height="28" fill={GOLD} rx="6" />
                <rect x="332" y="36" width="300" height="12" fill={GOLD} />
                <text x="482" y="38" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 12 })}>OrderModel (Pydantic v2)</text>
                <text x="352" y="68"  style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>class OrderModel(BaseModel):</text>
                <text x="352" y="88"  style={svgText({ fontSize: 10, fill: T600, fontFamily: "monospace" })}>  order_id: int</text>
                <text x="352" y="106" style={svgText({ fontSize: 10, fill: T600, fontFamily: "monospace" })}>  user_id: int</text>
                <text x="352" y="124" style={svgText({ fontSize: 10, fill: T600, fontFamily: "monospace" })}>  status: OrderStatus</text>
                <text x="352" y="142" style={svgText({ fontSize: 10, fill: T600, fontFamily: "monospace" })}>  num_of_item: int</text>
                <text x="352" y="160" style={svgText({ fontSize: 10, fill: DNGR, fontFamily: "monospace" })}>  created_at: datetime</text>
                <text x="352" y="180" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>  gender: str | None = None</text>
                <line x1="352" y1="194" x2="612" y2="194" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="352" y="214" style={svgText({ fontSize: 11, fill: GOLD, fontWeight: 600 })}>Validation rules</text>
                <text x="352" y="234" style={svgText({ fontSize: 10 })}>▸ str → int coercion (order_id, user_id)</text>
                <text x="352" y="252" style={svgText({ fontSize: 10 })}>▸ status must be in OrderStatus enum</text>
                <text x="352" y="270" style={svgText({ fontSize: 10, fill: DNGR })}>▸ created_at: non-nullable — FAILS here</text>
                <text x="352" y="290" style={svgText({ fontSize: 10 })}>▸ gender: optional, default None</text>
                <line x1="352" y1="306" x2="612" y2="306" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="352" y="328" style={svgMute({ fontSize: 10, fontFamily: "monospace" })}>model_config = ConfigDict(coerce_numbers_to_str=False)</text>

                {/* Valid arrow + box */}
                <line x1="636" y1="80"  x2="660" y2="80"  stroke={GOOD} strokeWidth="2" markerEnd="url(#ec-pyd-g)" />
                <rect x="664" y="40" width="420" height="100" style={{ fill: svgBg }} stroke={GOOD} strokeWidth="1.5" rx="4" />
                <text x="874" y="68" textAnchor="middle" style={svgText({ fill: GOOD, fontWeight: 600, fontSize: 13 })}>Valid record → DuckDB</text>
                <text x="684" y="92"  style={svgText({ fontSize: 10, fontFamily: "monospace" })}>order_id: 12345 (int)</text>
                <text x="684" y="110" style={svgText({ fontSize: 10, fontFamily: "monospace" })}>status: OrderStatus.COMPLETE (enum)</text>
                <text x="684" y="128" style={svgText({ fontSize: 10, fontFamily: "monospace" })}>num_of_item: 3 (int) · gender: None</text>

                {/* Invalid arrow + box */}
                <line x1="636" y1="270" x2="660" y2="270" stroke={DNGR} strokeWidth="2" markerEnd="url(#ec-pyd-r)" />
                <rect x="664" y="230" width="420" height="120" style={{ fill: svgBg }} stroke={DNGR} strokeWidth="1.5" rx="4" />
                <text x="874" y="258" textAnchor="middle" style={svgText({ fill: DNGR, fontWeight: 600, fontSize: 13 })}>ValidationError → logged + action</text>
                <text x="684" y="280" style={svgText({ fontSize: 10, fontFamily: "monospace" })}>ValidationError: created_at</text>
                <text x="684" y="298" style={svgText({ fontSize: 10, fontFamily: "monospace" })}>  Input should be a valid datetime [null]</text>
                <text x="684" y="320" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>strict mode: pipeline halts</text>
                <text x="684" y="338" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>tolerant mode: row quarantined, pipeline continues</text>

                <text x="550" y="420" textAnchor="middle" style={svgLabel({ fill: GOLD, fontWeight: 600 })}>Runtime flag: --mode strict | tolerant</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 04 Multi-Destination Sink ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>04 — Multi-Destination Sink</span>
            <h2 style={sectionH2}>One pipeline, <em style={{ fontStyle: "italic", color: T600 }}>three output targets</em> — selected at runtime.</h2>
            <p style={sectionLead}>After DuckDB processes the validated records, the sink adapter writes the output to whichever destination is specified at runtime. Each adapter is a separate Python class implementing a common SinkAdapter interface — swapping destinations requires no changes to the extraction or validation layers.</p>
          </div>

          {/* Infochart 04 · Sink Comparison */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 04 · Sink Destination Comparison</span>
              <div style={infographTitle}>CSV · Amazon S3 · MotherDuck — when to use each</div>
              <div style={infographSub}>Each sink is independently configurable via environment variables. The pipeline exports DuckDB query results — the output is always post-validation and post-DuckDB processing.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 380" style={{ width: "100%", minWidth: 800, height: "auto", display: "block" }}>
                <text x="20" y="22" style={svgLabel()}>Sink adapter · output format · latency · use case · configuration</text>
                <line x1="20" y1="32" x2="1080" y2="32" style={{ stroke: svgBorder }} strokeWidth="1" />

                <text x="20"  y="54" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Sink</text>
                <text x="200" y="54" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Format</text>
                <text x="350" y="54" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Latency</text>
                <text x="480" y="54" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Best for</text>
                <text x="780" y="54" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Config</text>
                <line x1="20" y1="62" x2="1080" y2="62" style={{ stroke: "var(--text)" }} strokeWidth="1" />

                {/* CSV row */}
                <rect x="20" y="74" width="160" height="60" style={{ fill: svgBg }} stroke={svgBorder} strokeWidth="1" rx="4" />
                <text x="100" y="102" textAnchor="middle" style={svgText({ fontSize: 16, fontWeight: 600 })}>CSV</text>
                <text x="100" y="122" textAnchor="middle" style={svgLabel({ fill: T300 })}>filesystem sink</text>
                <text x="200" y="100" style={svgText({ fontFamily: "monospace", fontSize: 11 })}>.csv (UTF-8)</text>
                <text x="200" y="116" style={svgMute({ fontSize: 10 })}>via DuckDB COPY</text>
                <text x="350" y="100" style={svgText({ fontSize: 11 })}>Immediate</text>
                <text x="350" y="116" style={svgMute({ fontSize: 10 })}>no network I/O</text>
                <text x="480" y="96"  style={svgMute({ fontSize: 10 })}>Local development · testing</text>
                <text x="480" y="112" style={svgMute({ fontSize: 10 })}>Schema validation checks</text>
                <text x="480" y="128" style={svgMute({ fontSize: 10 })}>Offline environments</text>
                <text x="780" y="100" style={svgText({ fontFamily: "monospace", fontSize: 10, fill: T600 })}>OUTPUT_PATH=./data/</text>
                <text x="780" y="116" style={svgText({ fontFamily: "monospace", fontSize: 10, fill: T600 })}>--sink csv</text>
                <line x1="20" y1="144" x2="1080" y2="144" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* S3 row */}
                <rect x="20" y="156" width="160" height="60" fill={GOLD} rx="4" />
                <text x="100" y="184" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontSize: 16, fontWeight: 600 })}>Amazon S3</text>
                <text x="100" y="204" textAnchor="middle" style={svgLabel({ fill: "#FDE68A" })}>object storage</text>
                <text x="200" y="180" style={svgText({ fontFamily: "monospace", fontSize: 11 })}>Parquet (snappy)</text>
                <text x="200" y="196" style={svgMute({ fontSize: 10 })}>partitioned by date</text>
                <text x="350" y="180" style={svgText({ fontSize: 11 })}>~2–5 sec</text>
                <text x="350" y="196" style={svgMute({ fontSize: 10 })}>per batch upload</text>
                <text x="480" y="176" style={svgMute({ fontSize: 10 })}>Data lake integration</text>
                <text x="480" y="192" style={svgMute({ fontSize: 10 })}>Downstream Glue / Athena</text>
                <text x="480" y="208" style={svgMute({ fontSize: 10 })}>Long-term archival</text>
                <text x="780" y="180" style={svgText({ fontFamily: "monospace", fontSize: 10, fill: GOLD })}>AWS_BUCKET · AWS_KEY</text>
                <text x="780" y="196" style={svgText({ fontFamily: "monospace", fontSize: 10, fill: GOLD })}>--sink s3</text>
                <line x1="20" y1="226" x2="1080" y2="226" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* MotherDuck row */}
                <rect x="20" y="238" width="160" height="60" fill={T800} rx="4" />
                <text x="100" y="262" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontSize: 14, fontWeight: 600 })}>MotherDuck</text>
                <text x="100" y="282" textAnchor="middle" style={svgLabel({ fill: "#CCFBF1" })}>cloud DuckDB</text>
                <text x="200" y="260" style={svgText({ fontFamily: "monospace", fontSize: 11 })}>DuckDB table</text>
                <text x="200" y="276" style={svgMute({ fontSize: 10 })}>persistent · queryable</text>
                <text x="350" y="260" style={svgText({ fontSize: 11 })}>~1–3 sec</text>
                <text x="350" y="276" style={svgMute({ fontSize: 10 })}>per ATTACH + INSERT</text>
                <text x="480" y="256" style={svgMute({ fontSize: 10 })}>Analytical query endpoint</text>
                <text x="480" y="272" style={svgMute({ fontSize: 10 })}>BI tool connection (Power BI)</text>
                <text x="480" y="288" style={svgMute({ fontSize: 10 })}>Shareable persistent results</text>
                <text x="780" y="260" style={svgText({ fontFamily: "monospace", fontSize: 10, fill: T600 })}>MOTHERDUCK_TOKEN=...</text>
                <text x="780" y="276" style={svgText({ fontFamily: "monospace", fontSize: 10, fill: T600 })}>--sink motherduck</text>
                <line x1="20" y1="308" x2="1080" y2="308" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* SinkAdapter interface note */}
                <rect x="20" y="326" width="1060" height="36" style={{ fill: svgBg }} stroke={T600} strokeWidth="1" rx="3" />
                <text x="40" y="346" style={svgText({ fontSize: 11, fill: T600, fontWeight: 600 })}>SinkAdapter interface</text>
                <text x="160" y="346" style={svgMute({ fontSize: 11 })}>— all three sinks implement write(df: duckdb.DuckDBPyRelation, table_name: str) → None. Adding a fourth sink requires no changes to the extractor or validator.</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 05 Component Architecture ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>05 — Component Architecture</span>
            <h2 style={sectionH2}>Four independent modules, <em style={{ fontStyle: "italic", color: T600 }}>zero cross-imports</em> between stages.</h2>
            <p style={sectionLead}>Each component is a Python module with a single public interface. The orchestrator (main.py) is the only file that imports from multiple modules — ensuring that each component can be unit-tested in isolation, and that a change in one module cannot break another.</p>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              { num: "4", unit: "Python modules",      label: "BigQuery extractor, Pydantic validator, DuckDB loader, and multi-sink adapter — independently testable" },
              { num: "3", unit: "Output destinations", label: "CSV, Amazon S3, MotherDuck — selected at runtime via --sink flag, no code change required" },
              { num: "6", unit: "Source tables",       label: "orders, order_items, users, products, inventory_items, events — each with a corresponding Pydantic model class" },
            ].map(({ num, unit, label }) => (
              <div key={unit} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderTop: `3px solid ${T600}`, borderRadius: "var(--radius-lg)", padding: "28px 24px" }}>
                <div style={{ fontSize: 44, fontWeight: 700, color: T600, lineHeight: 1, letterSpacing: "-0.03em" }}>{num}</div>
                <div style={{ ...mono, fontSize: 11, color: "var(--text-muted)", marginTop: 4, letterSpacing: "0.05em" }}>{unit}</div>
                <div style={{ fontSize: 13, color: "var(--text-body)", marginTop: 16, lineHeight: 1.45 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Infochart 05 · Module Dependency Map */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 05 · Module Dependency Map</span>
              <div style={infographTitle}>main.py orchestrates — modules never import each other</div>
              <div style={infographSub}>The dependency inversion keeps each module independently testable. Unit tests for the BigQuery extractor mock the BQ client; tests for the Pydantic validator use hardcoded dicts; tests for sinks use in-memory DuckDB relations.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 420" style={{ width: "100%", minWidth: 800, height: "auto", display: "block" }}>
                <defs>
                  <marker id="ec-dep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={T800} />
                  </marker>
                </defs>

                {/* main.py */}
                <rect x="400" y="20" width="300" height="80" fill={T800} rx="6" />
                <text x="550" y="54" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 16, fontFamily: "monospace" })}>main.py</text>
                <text x="550" y="74" textAnchor="middle" style={svgLabel({ fill: "#CCFBF1" })}>Orchestrator · CLI entry point</text>
                <text x="550" y="90" textAnchor="middle" style={svgText({ fill: "#CCFBF1", fontSize: 10 })}>argparse: --table · --sink · --mode</text>

                {/* bq_client.py */}
                <rect x="20" y="200" width="240" height="120" style={{ fill: svgBg }} stroke={T800} strokeWidth="1.5" rx="6" />
                <text x="140" y="228" textAnchor="middle" style={svgText({ fill: T300, fontWeight: 600, fontSize: 13, fontFamily: "monospace" })}>bq_client.py</text>
                <text x="140" y="246" textAnchor="middle" style={svgLabel()}>BigQuery Extractor</text>
                <line x1="40" y1="254" x2="240" y2="254" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="40" y="270" style={svgText({ fontSize: 10 })}>fetch_table(table_name) → list[dict]</text>
                <text x="40" y="286" style={svgText({ fontSize: 10 })}>BigQueryClient(credentials)</text>
                <text x="40" y="302" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>mocked in unit tests</text>

                {/* models.py */}
                <rect x="290" y="200" width="240" height="120" style={{ fill: svgBg }} stroke={GOLD} strokeWidth="1.5" rx="6" />
                <text x="410" y="228" textAnchor="middle" style={svgText({ fill: GOLD, fontWeight: 600, fontSize: 13, fontFamily: "monospace" })}>models.py</text>
                <text x="410" y="246" textAnchor="middle" style={svgLabel()}>Pydantic Validator</text>
                <line x1="310" y1="254" x2="510" y2="254" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="310" y="270" style={svgText({ fontSize: 10 })}>OrderModel, UserModel, …</text>
                <text x="310" y="286" style={svgText({ fontSize: 10 })}>validate(records, model_class)</text>
                <text x="310" y="302" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>tested with hardcoded dicts</text>

                {/* duckdb_loader.py */}
                <rect x="560" y="200" width="240" height="120" style={{ fill: svgBg }} stroke={T800} strokeWidth="1.5" rx="6" />
                <text x="680" y="228" textAnchor="middle" style={svgText({ fill: T300, fontWeight: 600, fontSize: 13, fontFamily: "monospace" })}>duckdb_loader.py</text>
                <text x="680" y="246" textAnchor="middle" style={svgLabel()}>DuckDB Loader</text>
                <line x1="580" y1="254" x2="780" y2="254" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="580" y="270" style={svgText({ fontSize: 10 })}>load(records) → DuckDBRelation</text>
                <text x="580" y="286" style={svgText({ fontSize: 10 })}>In-memory table creation</text>
                <text x="580" y="302" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>tested with in-memory DB</text>

                {/* sinks.py */}
                <rect x="830" y="200" width="250" height="120" style={{ fill: svgBg }} stroke={T600} strokeWidth="1.5" rx="6" />
                <text x="955" y="228" textAnchor="middle" style={svgText({ fill: T600, fontWeight: 600, fontSize: 13, fontFamily: "monospace" })}>sinks.py</text>
                <text x="955" y="246" textAnchor="middle" style={svgLabel()}>Sink Adapters</text>
                <line x1="850" y1="254" x2="1060" y2="254" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="850" y="270" style={svgText({ fontSize: 10 })}>CSVSink · S3Sink · MotherDuckSink</text>
                <text x="850" y="286" style={svgText({ fontSize: 10 })}>write(relation, table_name)</text>
                <text x="850" y="302" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>tested with temp DuckDB relation</text>

                {/* Arrows from main.py */}
                <line x1="450" y1="100" x2="140" y2="198" stroke={T800} strokeWidth="1.5" markerEnd="url(#ec-dep-arrow)" />
                <line x1="490" y1="100" x2="410" y2="198" stroke={T800} strokeWidth="1.5" markerEnd="url(#ec-dep-arrow)" />
                <line x1="560" y1="100" x2="680" y2="198" stroke={T800} strokeWidth="1.5" markerEnd="url(#ec-dep-arrow)" />
                <line x1="620" y1="100" x2="955" y2="198" stroke={T800} strokeWidth="1.5" markerEnd="url(#ec-dep-arrow)" />

                {/* Dependency rule note */}
                <rect x="20" y="360" width="1060" height="36" style={{ fill: svgBg }} stroke={T600} strokeWidth="1" rx="3" />
                <text x="40" y="380" style={svgText({ fontSize: 11, fill: T600, fontWeight: 600 })}>Dependency rule</text>
                <text x="152" y="380" style={svgMute({ fontSize: 11 })}>— bq_client, models, duckdb_loader, and sinks never import from each other. Only main.py holds cross-module dependencies — enforced via import linting in CI.</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 06 Deliverables ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>06 — Deliverables</span>
            <h2 style={sectionH2}>A reproducible, independently-testable ETL codebase.</h2>
            <p style={sectionLead}>Every component ships with unit tests, environment variable configuration, and a README covering local setup and sink-specific credential requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderLeft: `3px solid ${T800}`, padding: "20px 24px", borderRadius: "0 var(--radius-md) var(--radius-md) 0", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <Icon className="shrink-0 mt-0.5" style={{ width: 22, height: 22, color: T600 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, color: "var(--text)" }}>{title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-body)", lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing callout ── */}
        <div style={{ position: "relative", background: T800, color: "#CCFBF1", padding: "56px 48px", borderRadius: "var(--radius-lg)", marginBottom: 0, borderLeft: `4px solid ${T300}` }}>
          <span style={{ fontSize: 96, position: "absolute", top: 8, left: 24, color: T300, opacity: 0.4, lineHeight: 1, fontWeight: 700 }}>&ldquo;</span>
          <p style={{ paddingLeft: 48, fontStyle: "italic", fontSize: 24, lineHeight: 1.4, fontWeight: 400, color: "#A7F3D0" }}>
            A pipeline is only as trustworthy as the data that enters it.{" "}
            <strong style={{ fontStyle: "normal", fontWeight: 700, color: "#FFFFFF" }}>Validate at the boundary</strong>,
            process in-memory, and make the output destination a runtime decision — not a hardcoded assumption.
          </p>
        </div>

      </div>
    </div>
  );
}
