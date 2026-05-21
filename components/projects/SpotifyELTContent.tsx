"use client";

import Link from "next/link";
import { ArrowLeft, LayoutGrid, Layers, AlertTriangle, BarChart2, FileText, Info } from "lucide-react";

/* ── palette ─────────────────────────────────────────────────────────── */
const G800 = "#1A5C4A";  // deep forest green — primary structure
const G600 = "#2D9E7A";  // mid-green — secondary elements
const G300 = "#7EC8A4";  // light green — fills, bars
const GOLD = "#C5922B";  // amber — section numbers, dbt gold layer
const WARM = "#E07B3A";  // orange — Power BI callout, highlights
const DNGR = "#ef4444";  // red — traditional DW cost

/* ── shared style tokens ─────────────────────────────────────────────── */
const mono = { fontFamily: "var(--font-mono)" } as const;
const sectionNum: React.CSSProperties = { ...mono, fontSize: 12, color: "var(--primary-400)", fontWeight: 600, letterSpacing: "0.08em", marginBottom: 12, display: "block" };
const sectionH2: React.CSSProperties = { fontWeight: 700, fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 16 };
const sectionLead: React.CSSProperties = { fontSize: 17, color: "var(--text-body)", maxWidth: 720, lineHeight: 1.55 };
const infograph: React.CSSProperties = { background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: 40, margin: "32px 0", overflow: "hidden" };
const infographLabel: React.CSSProperties = { ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: G600, fontWeight: 600, marginBottom: 10, display: "block" };
const infographTitle: React.CSSProperties = { fontSize: 22, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em" };
const infographSub: React.CSSProperties = { fontSize: 14, color: "var(--text-body)", marginTop: 6 };

/* SVG inline style helpers */
const svgText = (extra?: React.CSSProperties) => ({ fontFamily: "inherit", fontSize: 11, fill: "var(--text)", ...extra } as React.CSSProperties);
const svgMute = (extra?: React.CSSProperties) => ({ fontFamily: "inherit", fontSize: 11, fill: "var(--text-body)", ...extra } as React.CSSProperties);
const svgLabel = (extra?: React.CSSProperties) => ({ ...mono, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase" as const, fill: "var(--text-muted)", ...extra });
const svgNum = (extra?: React.CSSProperties) => ({ fontWeight: 600, ...extra } as React.CSSProperties);
const svgBg = "var(--ink-3)";
const svgBorder = "var(--line)";

const deliverables = [
  { icon: LayoutGrid,    title: "Airflow DAG (Python)",                     desc: "Four modular task groups (extract → bronze → silver → dbt_run) with XCom-based dependency passing, retry logic, and independent unit tests per group." },
  { icon: Layers,        title: "dbt Project (staging → intermediate → marts)", desc: "68 automated tests across four model layers. Docs generated on every run. Dev and prod Motherduck targets configured in profiles.yml." },
  { icon: AlertTriangle, title: "Terraform Module (IaC)",                   desc: "S3 bucket definitions with versioning and lifecycle rules. Motherduck external table DDL auto-generated for all four medallion zones." },
  { icon: BarChart2,     title: "Power BI Dashboard (3 report pages)",      desc: "Playlist trend analysis, artist reach by market, and track-level streaming metrics — all querying Motherduck directly via DirectQuery." },
  { icon: FileText,      title: "README & Architecture Decision Log",        desc: "Step-by-step local setup, environment variable reference, Spotify API credential configuration, and the rationale behind every major design choice." },
  { icon: Info,          title: "DuckDB Extraction Layer (Python)",          desc: "Reusable Python modules for each Spotify resource type — handles pagination, rate-limit back-off, and schema variance across API versions." },
];

export default function SpotifyELTContent() {
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
            Project · Data Engineering · ELT Pipeline
          </span>
          <h1 style={{ fontWeight: 700, fontSize: "clamp(36px, 5vw, 62px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 24 }}>
            A four-stage medallion data lake pulling{" "}
            <em style={{ fontStyle: "italic", color: G600 }}>Spotify&apos;s global playlist data</em>{" "}
            to Power BI — on a near-zero infrastructure budget.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--text-body)", maxWidth: 680, fontWeight: 400 }}>
            End-to-end ELT pipeline built on DuckDB, Motherduck, dbt, and Astronomer Airflow. Spotify API data flows through a Raw → Bronze → Silver → Gold medallion architecture on AWS S3, transformed by dbt into analytics-ready dimensional models, and surfaced in Power BI — with Terraform provisioning the entire infrastructure.
          </p>
        </section>

        {/* ── Meta strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "28px 0" }}>
          {[["Type", "ELT Pipeline"], ["Architecture", "Medallion · 4-layer"], ["Orchestration", "Airflow · Daily"], ["Source", "Spotify API"]].map(([label, value]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", fontWeight: 500 }}>{label}</span>
              <span style={{ fontSize: 18, fontWeight: 600, color: "var(--text)" }}>{value}</span>
            </div>
          ))}
        </div>

        {/* ── Tech tags ── */}
        <div className="mb-8 flex flex-wrap gap-2">
          {["AWS", "Python", "Airflow", "DuckDB", "dbt", "Terraform", "Motherduck", "S3", "Power BI"].map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* ── External link ── */}
        <div className="mb-14 flex flex-wrap gap-3">
          <a href="https://github.com/danielmschaves/spotify-etl-aws" target="_blank" rel="noopener noreferrer"
            style={{ ...mono, fontSize: 12, padding: "8px 16px", border: "1px solid var(--line-strong)", borderRadius: "var(--radius-full)", color: "var(--primary-400)", background: "var(--ink-3)", fontWeight: 500, textDecoration: "none" }}>
            GitHub Repository ↗
          </a>
        </div>

        {/* ── 01 Context & Architecture ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>01 — Context &amp; Architecture</span>
            <h2 style={sectionH2}>A <em style={{ fontStyle: "italic", color: G600 }}>cost-zero data lake</em> built on embedded analytics, not standing servers.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>The &ldquo;poor man&apos;s data lake&rdquo; premise</h3>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: 16 }}>Most data lake architectures require standing up a cluster — Spark, EMR, Redshift — that burns compute cost whether it&apos;s processing data or not. DuckDB breaks this constraint: it runs in-process, reads Parquet directly from S3, and costs nothing when idle.</p>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7 }}>The goal was to prove that a serious, production-grade ELT pipeline with proper transformation layers, automated testing, and BI integration could be built without paying for idle infrastructure. Motherduck extends DuckDB into the cloud, giving Power BI a persistent query endpoint without the overhead of a traditional warehouse.</p>
            </div>
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>What the pipeline had to do</h3>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: 16 }}><strong style={{ color: "var(--text)" }}>Extract at scale.</strong> The Spotify API exposes global playlist data — tracks, albums, artists — in nested JSON. The pipeline needed to handle pagination, rate limits, and schema variance across resource types.</p>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7 }}>Each raw payload then moves through a structured four-stage medallion — Raw preserves the original API response, Bronze converts to Parquet, Silver applies business-rule cleaning, and Gold delivers analytics-ready dimensional models directly queryable by Power BI.</p>
            </div>
          </div>

          {/* Infochart 01: Medallion Architecture */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 01 · Medallion Architecture</span>
              <div style={infographTitle}>Four-stage data lake: Raw → Bronze → Silver → Gold</div>
              <div style={infographSub}>Each stage transforms fidelity — preserving the original at Raw, standardising format at Bronze, enriching at Silver, and delivering analytics-ready models at Gold.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 360" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                <defs>
                  <marker id="medal-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={G800} />
                  </marker>
                </defs>
                <text x="20" y="24" style={svgLabel()}>ELT Medallion Pipeline · AWS S3 Storage Zones · Daily Batch via Airflow</text>
                <line x1="20" y1="34" x2="1080" y2="34" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* RAW */}
                <rect x="20" y="60" width="230" height="200" style={{ fill: svgBg }} stroke={G800} strokeWidth="2" rx="6" />
                <text x="135" y="88" textAnchor="middle" style={svgNum({ fontSize: 30, fill: G300 })}>Raw</text>
                <line x1="40" y1="100" x2="230" y2="100" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="135" y="122" textAnchor="middle" style={svgLabel({ fill: "var(--text-muted)" })}>Format</text>
                <text x="135" y="138" textAnchor="middle" style={svgText({ fontWeight: 600 })}>JSON (raw API response)</text>
                <text x="135" y="162" textAnchor="middle" style={svgLabel({ fill: "var(--text-muted)" })}>Tool</text>
                <text x="135" y="178" textAnchor="middle" style={svgText({ fontWeight: 600 })}>Spotify API extractor</text>
                <text x="135" y="202" textAnchor="middle" style={svgLabel({ fill: "var(--text-muted)" })}>Storage</text>
                <text x="135" y="218" textAnchor="middle" style={svgText({ fontWeight: 600 })}>S3 · raw/ prefix</text>
                <text x="135" y="236" textAnchor="middle" style={svgMute({ fontSize: 10 })}>Tracks · Albums · Artists</text>
                <text x="135" y="250" textAnchor="middle" style={svgMute({ fontSize: 10 })}>Playlists — immutable landing</text>

                <line x1="255" y1="160" x2="290" y2="160" stroke={G800} strokeWidth="2" markerEnd="url(#medal-arrow)" />

                {/* BRONZE */}
                <rect x="295" y="60" width="230" height="200" style={{ fill: svgBg }} stroke={G600} strokeWidth="2" rx="6" />
                <text x="410" y="88" textAnchor="middle" style={svgNum({ fontSize: 30, fill: G600 })}>Bronze</text>
                <line x1="315" y1="100" x2="505" y2="100" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="410" y="122" textAnchor="middle" style={svgLabel({ fill: "var(--text-muted)" })}>Format</text>
                <text x="410" y="138" textAnchor="middle" style={svgText({ fontWeight: 600 })}>Parquet (columnar)</text>
                <text x="410" y="162" textAnchor="middle" style={svgLabel({ fill: "var(--text-muted)" })}>Tool</text>
                <text x="410" y="178" textAnchor="middle" style={svgText({ fontWeight: 600 })}>DuckDB · JSON → Parquet</text>
                <text x="410" y="202" textAnchor="middle" style={svgLabel({ fill: "var(--text-muted)" })}>Storage</text>
                <text x="410" y="218" textAnchor="middle" style={svgText({ fontWeight: 600 })}>S3 · bronze/ prefix</text>
                <text x="410" y="236" textAnchor="middle" style={svgMute({ fontSize: 10 })}>Schema enforced, typed,</text>
                <text x="410" y="250" textAnchor="middle" style={svgMute({ fontSize: 10 })}>compressed — read-ready</text>

                <line x1="530" y1="160" x2="565" y2="160" stroke={G800} strokeWidth="2" markerEnd="url(#medal-arrow)" />

                {/* SILVER */}
                <rect x="570" y="60" width="230" height="200" style={{ fill: svgBg }} stroke={G300} strokeWidth="2" rx="6" />
                <text x="685" y="88" textAnchor="middle" style={svgNum({ fontSize: 30, fill: G600 })}>Silver</text>
                <line x1="590" y1="100" x2="780" y2="100" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="685" y="122" textAnchor="middle" style={svgLabel({ fill: "var(--text-muted)" })}>Format</text>
                <text x="685" y="138" textAnchor="middle" style={svgText({ fontWeight: 600 })}>Parquet (enriched)</text>
                <text x="685" y="162" textAnchor="middle" style={svgLabel({ fill: "var(--text-muted)" })}>Tool</text>
                <text x="685" y="178" textAnchor="middle" style={svgText({ fontWeight: 600 })}>DuckDB · business rules</text>
                <text x="685" y="202" textAnchor="middle" style={svgLabel({ fill: "var(--text-muted)" })}>Storage</text>
                <text x="685" y="218" textAnchor="middle" style={svgText({ fontWeight: 600 })}>S3 · silver/ prefix</text>
                <text x="685" y="236" textAnchor="middle" style={svgMute({ fontSize: 10 })}>Deduped, normalised,</text>
                <text x="685" y="250" textAnchor="middle" style={svgMute({ fontSize: 10 })}>null-handled, join-ready</text>

                <line x1="805" y1="160" x2="840" y2="160" stroke={G800} strokeWidth="2" markerEnd="url(#medal-arrow)" />

                {/* GOLD */}
                <rect x="845" y="60" width="235" height="200" fill={G800} stroke={G600} strokeWidth="2" rx="6" />
                <text x="962" y="88" textAnchor="middle" style={svgNum({ fontSize: 30, fill: G300 })}>Gold</text>
                <line x1="865" y1="100" x2="1060" y2="100" stroke={G600} strokeWidth="1" />
                <text x="962" y="122" textAnchor="middle" style={svgLabel({ fill: "var(--text-muted)" })}>Format</text>
                <text x="962" y="138" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#C8ECD9", fontWeight: 600 }}>Dimensional tables</text>
                <text x="962" y="162" textAnchor="middle" style={svgLabel({ fill: "var(--text-muted)" })}>Tool</text>
                <text x="962" y="178" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#C8ECD9", fontWeight: 600 }}>dbt + Motherduck</text>
                <text x="962" y="202" textAnchor="middle" style={svgLabel({ fill: "var(--text-muted)" })}>Storage</text>
                <text x="962" y="218" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#C8ECD9", fontWeight: 600 }}>Motherduck + S3 gold/</text>
                <text x="962" y="236" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#B4E0CF" }}>Power BI reads directly</text>
                <text x="962" y="250" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#B4E0CF" }}>from Motherduck endpoint</text>

                {/* Power BI callout */}
                <rect x="880" y="290" width="150" height="26" fill={WARM} rx="4" />
                <text x="955" y="307" textAnchor="middle" style={{ ...mono, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", fill: "#FFFFFF", fontWeight: 600 }}>→ Power BI</text>
                <line x1="962" y1="288" x2="962" y2="264" stroke={WARM} strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── 02 System Topology ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>02 — System Topology</span>
            <h2 style={sectionH2}>Nine tools, <em style={{ fontStyle: "italic", color: G600 }}>one coherent pipeline</em> — from API call to dashboard.</h2>
            <p style={sectionLead}>Each component has a single, well-defined job. Spotify API is the only source of truth. Airflow orchestrates without being the transformation engine. DuckDB processes without running a server. Terraform provisions without manual state. The architecture is modular: any component can be swapped independently.</p>
          </div>

          {/* Infochart 02: System Topology */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 02 · End-to-End Data Flow</span>
              <div style={infographTitle}>Source → Orchestration → Storage → Analytics</div>
              <div style={infographSub}>Left-to-right flow: data originates at the Spotify API, is orchestrated by Airflow, staged across four S3 zones, processed by DuckDB, warehoused in Motherduck, and queried by Power BI.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 480" style={{ width: "100%", minWidth: 800, height: "auto", display: "block" }}>
                <defs>
                  <marker id="topo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={G800} />
                  </marker>
                  <marker id="topo-arrow-warm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={WARM} />
                  </marker>
                  <marker id="topo-arrow-g3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={G300} />
                  </marker>
                </defs>

                {/* Layer labels */}
                <text x="60" y="22" textAnchor="middle" style={svgLabel({ fill: G600, fontWeight: 600 })}>Source</text>
                <text x="220" y="22" textAnchor="middle" style={svgLabel({ fill: G600, fontWeight: 600 })}>Orchestration</text>
                <text x="500" y="22" textAnchor="middle" style={svgLabel({ fill: G600, fontWeight: 600 })}>Storage (AWS S3)</text>
                <text x="780" y="22" textAnchor="middle" style={svgLabel({ fill: G600, fontWeight: 600 })}>Warehouse</text>
                <text x="960" y="22" textAnchor="middle" style={svgLabel({ fill: WARM, fontWeight: 600 })}>Analytics</text>

                {/* Dividers */}
                {[130, 340, 660, 870].map(x => (
                  <line key={x} x1={x} y1="30" x2={x} y2="450" style={{ stroke: svgBorder }} strokeWidth="1" />
                ))}

                {/* Spotify API */}
                <rect x="10" y="55" width="110" height="100" fill={G800} rx="6" />
                <text x="65" y="80" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>Spotify</text>
                <text x="65" y="96" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>API</text>
                <text x="65" y="118" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#B4E0CF" }}>Tracks</text>
                <text x="65" y="132" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#B4E0CF" }}>Albums</text>
                <text x="65" y="146" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#B4E0CF" }}>Artists · Playlists</text>

                <line x1="120" y1="105" x2="148" y2="105" stroke={G800} strokeWidth="1.5" markerEnd="url(#topo-arrow)" />

                {/* Airflow box */}
                <rect x="150" y="42" width="178" height="260" style={{ fill: svgBg }} stroke={G800} strokeWidth="1.5" rx="6" />
                <text x="239" y="66" textAnchor="middle" style={svgText({ fontWeight: 600, fontSize: 13 })}>Astronomer</text>
                <text x="239" y="82" textAnchor="middle" style={svgText({ fontWeight: 600, fontSize: 13 })}>Airflow</text>
                <text x="239" y="100" textAnchor="middle" style={svgLabel()}>Daily · 06:00 UTC</text>
                <line x1="170" y1="108" x2="308" y2="108" style={{ stroke: svgBorder }} strokeWidth="1" />
                <rect x="168" y="120" width="142" height="22" fill={G800} rx="3" />
                <text x="239" y="135" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>extract_spotify</text>
                <rect x="168" y="150" width="142" height="22" fill={G600} rx="3" />
                <text x="239" y="165" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>bronze_transform</text>
                <rect x="168" y="180" width="142" height="22" fill={G300} rx="3" />
                <text x="239" y="195" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#0F1B14", fontWeight: 600 }}>silver_transform</text>
                <rect x="168" y="210" width="142" height="22" fill="#0D3D2E" rx="3" />
                <text x="239" y="225" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#C8ECD9", fontWeight: 600 }}>dbt_run</text>
                <text x="239" y="262" textAnchor="middle" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>DAG retries: 2 · timeout: 2h</text>
                <text x="239" y="276" textAnchor="middle" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>Modular Python task groups</text>
                <text x="239" y="290" textAnchor="middle" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>with independent testing</text>

                {/* Airflow → S3 arrows */}
                <line x1="328" y1="131" x2="358" y2="131" stroke={G800} strokeWidth="1.5" markerEnd="url(#topo-arrow)" />
                <line x1="328" y1="161" x2="358" y2="195" stroke={G600} strokeWidth="1.5" markerEnd="url(#topo-arrow)" />
                <line x1="328" y1="191" x2="358" y2="265" stroke={G300} strokeWidth="1.5" markerEnd="url(#topo-arrow)" />
                <path d="M 328 221 L 331 221 L 331 390 L 660 390 L 660 260 L 670 260" stroke={G600} strokeWidth="1.5" strokeDasharray="5 3" fill="none" markerEnd="url(#topo-arrow-g3)" />

                {/* S3 zones */}
                <rect x="360" y="112" width="120" height="38" style={{ fill: svgBg }} stroke={G800} strokeWidth="1.5" rx="4" />
                <text x="420" y="128" textAnchor="middle" style={svgLabel({ fill: G600, fontWeight: 600 })}>S3 Raw</text>
                <text x="420" y="142" textAnchor="middle" style={svgMute({ fontSize: 10 })}>JSON · by date</text>

                <rect x="360" y="178" width="120" height="38" style={{ fill: svgBg }} stroke={G600} strokeWidth="1.5" rx="4" />
                <text x="420" y="194" textAnchor="middle" style={svgLabel({ fill: G600, fontWeight: 600 })}>S3 Bronze</text>
                <text x="420" y="208" textAnchor="middle" style={svgMute({ fontSize: 10 })}>Parquet · typed</text>

                <rect x="360" y="248" width="120" height="38" style={{ fill: svgBg }} stroke={G300} strokeWidth="1.5" rx="4" />
                <text x="420" y="264" textAnchor="middle" style={svgLabel({ fill: G600, fontWeight: 600 })}>S3 Silver</text>
                <text x="420" y="278" textAnchor="middle" style={svgMute({ fontSize: 10 })}>Parquet · enriched</text>

                {/* DuckDB */}
                <rect x="500" y="140" width="150" height="160" fill="#0D3D2E" stroke={G600} strokeWidth="1.5" rx="6" />
                <text x="575" y="168" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>DuckDB</text>
                <text x="575" y="186" textAnchor="middle" style={svgLabel()}>In-process · zero server</text>
                <line x1="515" y1="196" x2="635" y2="196" stroke={G600} strokeWidth="1" />
                <text x="575" y="216" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#C8ECD9" }}>JSON → Parquet (bronze)</text>
                <text x="575" y="232" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#C8ECD9" }}>Reads from S3</text>
                <text x="575" y="248" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#C8ECD9" }}>Clean + enrich (silver)</text>
                <text x="575" y="272" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#B4E0CF", fontStyle: "italic" }}>No idle cost</text>

                {/* S3 → DuckDB */}
                <line x1="482" y1="131" x2="498" y2="175" stroke={G800} strokeWidth="1.5" markerEnd="url(#topo-arrow)" />
                <line x1="482" y1="197" x2="498" y2="210" stroke={G600} strokeWidth="1.5" markerEnd="url(#topo-arrow)" />
                <line x1="482" y1="267" x2="498" y2="250" stroke={G300} strokeWidth="1.5" markerEnd="url(#topo-arrow)" />

                {/* DuckDB → Motherduck */}
                <line x1="650" y1="220" x2="668" y2="220" stroke={G600} strokeWidth="1.5" markerEnd="url(#topo-arrow)" />

                {/* Motherduck */}
                <rect x="670" y="168" width="180" height="104" fill={G800} stroke={G600} strokeWidth="1.5" rx="6" />
                <text x="760" y="196" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>Motherduck</text>
                <text x="760" y="214" textAnchor="middle" style={svgLabel()}>Cloud DuckDB · External tables</text>
                <line x1="690" y1="222" x2="830" y2="222" stroke={G600} strokeWidth="1" />
                <text x="760" y="240" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#C8ECD9" }}>dim_artist · dim_track</text>
                <text x="760" y="256" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#C8ECD9" }}>fct_stream · fct_playlist</text>

                {/* Terraform */}
                <rect x="670" y="300" width="180" height="64" style={{ fill: svgBg }} stroke={GOLD} strokeWidth="1.5" strokeDasharray="4 3" rx="6" />
                <text x="760" y="324" textAnchor="middle" style={svgLabel({ fill: GOLD, fontWeight: 600 })}>Terraform (IaC)</text>
                <text x="760" y="342" textAnchor="middle" style={svgMute({ fontSize: 10 })}>Provisions S3 buckets</text>
                <text x="760" y="356" textAnchor="middle" style={svgMute({ fontSize: 10 })}>+ Motherduck ext. tables</text>
                <line x1="760" y1="300" x2="760" y2="272" stroke={GOLD} strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#topo-arrow-warm)" />
                <line x1="760" y1="300" x2="420" y2="300" stroke={GOLD} strokeWidth="1" strokeDasharray="4 3" />
                <line x1="420" y1="300" x2="420" y2="290" stroke={GOLD} strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#topo-arrow-warm)" />

                {/* Motherduck → Power BI */}
                <line x1="850" y1="220" x2="878" y2="220" stroke={WARM} strokeWidth="2" markerEnd="url(#topo-arrow-warm)" />

                {/* Power BI */}
                <rect x="880" y="168" width="200" height="104" fill={WARM} rx="6" />
                <text x="980" y="196" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>Power BI</text>
                <text x="980" y="214" textAnchor="middle" style={svgLabel({ fill: "#FFFFFF" })}>Analytics Layer · 3 report pages</text>
                <line x1="900" y1="222" x2="1060" y2="222" stroke="#C5550A" strokeWidth="1" />
                <text x="980" y="242" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FEE7D3" }}>Playlist trends</text>
                <text x="980" y="258" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FEE7D3" }}>Artist reach · Track metrics</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 03 Orchestration ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>03 — Orchestration</span>
            <h2 style={sectionH2}>Four modular task groups, <em style={{ fontStyle: "italic", color: G600 }}>each independently testable</em> and retryable.</h2>
            <p style={sectionLead}>The Airflow DAG is structured so that each medallion stage maps to exactly one task group. If the silver transform fails, the bronze data is already landed and safe — the retry only re-runs what failed. This is the key resilience property the modular design provides.</p>
          </div>

          {/* Infochart 03: DAG Structure */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 03 · Airflow DAG Structure</span>
              <div style={infographTitle}>Task-group dependency chain · Daily @ 06:00 UTC</div>
              <div style={infographSub}>Each group is a self-contained Python module — it can be unit-tested independently and retried in isolation without re-running upstream stages.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 420" style={{ width: "100%", minWidth: 800, height: "auto", display: "block" }}>
                <defs>
                  <marker id="dag-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={G800} />
                  </marker>
                </defs>

                {/* Schedule band */}
                <rect x="20" y="20" width="1060" height="28" fill="#050914" rx="3" />
                <text x="40" y="38" style={svgText({ fill: G300, fontWeight: 600, fontSize: 11 })}>spotify_daily_dag</text>
                <text x="300" y="38" style={svgMute({ fontSize: 11 })}>schedule: @daily · start_date: 2024-01-01 · retries: 2 · retry_delay: 5min</text>
                <text x="1060" y="38" textAnchor="end" style={svgMute({ fontSize: 11 })}>Astronomer · Airflow 2.8</text>

                {/* TG1: extract_spotify */}
                <rect x="20" y="65" width="240" height="180" fill={G800} stroke={G600} strokeWidth="1.5" rx="6" />
                <text x="140" y="90" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>extract_spotify</text>
                <text x="140" y="108" textAnchor="middle" style={svgLabel()}>Task Group 01</text>
                <line x1="40" y1="116" x2="240" y2="116" stroke={G600} strokeWidth="1" />
                <text x="140" y="136" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>get_tracks()</text>
                <text x="140" y="155" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>get_albums()</text>
                <text x="140" y="174" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>get_artists()</text>
                <text x="140" y="193" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>get_playlists()</text>
                <text x="140" y="224" textAnchor="middle" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>→ raw JSON to S3 raw/</text>

                <line x1="264" y1="155" x2="288" y2="155" stroke={G800} strokeWidth="2" markerEnd="url(#dag-arrow)" />

                {/* TG2: bronze_transform */}
                <rect x="292" y="65" width="200" height="180" fill="#0D3D2E" stroke={G600} strokeWidth="1.5" rx="6" />
                <text x="392" y="90" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>bronze_transform</text>
                <text x="392" y="108" textAnchor="middle" style={svgLabel()}>Task Group 02</text>
                <line x1="312" y1="116" x2="472" y2="116" stroke={G600} strokeWidth="1" />
                <text x="392" y="140" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>read_raw_s3()</text>
                <text x="392" y="160" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>json_to_parquet()</text>
                <text x="392" y="180" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>enforce_schema()</text>
                <text x="392" y="200" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>write_bronze_s3()</text>
                <text x="392" y="224" textAnchor="middle" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>DuckDB · in-process</text>

                <line x1="495" y1="155" x2="519" y2="155" stroke={G800} strokeWidth="2" markerEnd="url(#dag-arrow)" />

                {/* TG3: silver_transform */}
                <rect x="523" y="65" width="200" height="180" fill="#0D3D2E" stroke={G300} strokeWidth="1.5" rx="6" />
                <text x="623" y="90" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>silver_transform</text>
                <text x="623" y="108" textAnchor="middle" style={svgLabel()}>Task Group 03</text>
                <line x1="543" y1="116" x2="703" y2="116" stroke={G300} strokeWidth="1" />
                <text x="623" y="140" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>read_bronze_s3()</text>
                <text x="623" y="160" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>deduplicate()</text>
                <text x="623" y="180" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>normalise_nulls()</text>
                <text x="623" y="200" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>write_silver_s3()</text>
                <text x="623" y="224" textAnchor="middle" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>DuckDB · enrichment rules</text>

                <line x1="726" y1="155" x2="750" y2="155" stroke={G800} strokeWidth="2" markerEnd="url(#dag-arrow)" />

                {/* TG4: dbt_run */}
                <rect x="754" y="65" width="326" height="180" fill="#0D3D2E" stroke={GOLD} strokeWidth="1.5" rx="6" />
                <text x="917" y="90" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>dbt_run</text>
                <text x="917" y="108" textAnchor="middle" style={svgLabel({ fill: GOLD })}>Task Group 04 · Gold Stage</text>
                <line x1="774" y1="116" x2="1060" y2="116" stroke={GOLD} strokeWidth="1" />
                <text x="917" y="140" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#F9D9BA" }}>dbt run --select staging</text>
                <text x="917" y="160" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#F9D9BA" }}>dbt run --select intermediate</text>
                <text x="917" y="180" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#F9D9BA" }}>dbt run --select marts</text>
                <text x="917" y="200" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#F9D9BA" }}>dbt test</text>
                <text x="917" y="224" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: GOLD, fontStyle: "italic" }}>Motherduck · dev + prod targets</text>

                {/* Retry annotation */}
                <rect x="20" y="270" width="1060" height="80" style={{ fill: svgBg }} stroke={svgBorder} rx="4" />
                <text x="40" y="294" style={svgLabel({ fill: G600, fontWeight: 600 })}>Retry &amp; failure isolation</text>
                <text x="40" y="316" style={svgMute({ fontSize: 11 })}>• Each task group runs only after its upstream group succeeds — enforced by XCom passing, no implicit data coupling.</text>
                <text x="40" y="334" style={svgMute({ fontSize: 11 })}>• On failure, Airflow retries twice. If exhausted, prior zone data remains safe — only the failed stage replays on the next run.</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 04 Transformation ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>04 — Transformation</span>
            <h2 style={sectionH2}>Three dbt layers, each with <em style={{ fontStyle: "italic", color: G600 }}>automated test coverage</em>.</h2>
            <p style={sectionLead}>dbt is the transformation engine for the Gold stage. Every model is tested — sources have schema tests, staging models have not-null and unique constraints, and marts carry referential integrity checks. Both dev and prod targets hit Motherduck, with full documentation generated on each run.</p>
          </div>

          {/* Infochart 04: dbt Model Layers */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 04 · dbt Model Architecture</span>
              <div style={infographTitle}>Sources → Staging → Intermediate → Marts · with automated test coverage</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 500" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                <text x="20" y="22" style={svgLabel()}>dbt-core · Motherduck target · dev + prod environments</text>
                <line x1="20" y1="32" x2="1080" y2="32" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="80" y="54" textAnchor="middle" style={svgLabel({ fill: G600, fontWeight: 600 })}>Layer</text>
                <text x="400" y="54" textAnchor="middle" style={svgLabel({ fill: G600, fontWeight: 600 })}>Models</text>
                <text x="760" y="54" textAnchor="middle" style={svgLabel({ fill: G600, fontWeight: 600 })}>Test Coverage</text>
                <text x="990" y="54" textAnchor="middle" style={svgLabel({ fill: GOLD, fontWeight: 600 })}>Tests</text>
                <line x1="20" y1="62" x2="1080" y2="62" style={{ stroke: "var(--text)" }} strokeWidth="1" />

                {/* Sources row */}
                <rect x="20" y="74" width="130" height="80" fill={G800} rx="4" />
                <text x="85" y="106" textAnchor="middle" style={svgNum({ fontSize: 16, fill: "#FFFFFF" })}>Sources</text>
                <text x="85" y="126" textAnchor="middle" style={svgLabel()}>Parquet via Motherduck</text>
                <text x="85" y="142" textAnchor="middle" style={svgLabel()}>external tables</text>
                <text x="170" y="95" style={svgText({ fontWeight: 600, fontSize: 12 })}>source_spotify.tracks</text>
                <text x="170" y="113" style={svgText({ fontWeight: 600, fontSize: 12 })}>source_spotify.albums</text>
                <text x="170" y="131" style={svgText({ fontWeight: 600, fontSize: 12 })}>source_spotify.artists</text>
                <text x="170" y="149" style={svgText({ fontWeight: 600, fontSize: 12 })}>source_spotify.playlists</text>
                <rect x="600" y="78" width="320" height="18" style={{ fill: svgBg }} stroke={svgBorder} rx="3" />
                <rect x="600" y="78" width="200" height="18" fill={G600} rx="3" />
                <text x="620" y="91" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>Schema · not-null</text>
                <text x="930" y="91" style={svgMute({ fontSize: 11 })}>6 tests</text>
                <rect x="600" y="104" width="320" height="18" style={{ fill: svgBg }} stroke={svgBorder} rx="3" />
                <rect x="600" y="104" width="260" height="18" fill={G600} rx="3" />
                <text x="620" y="117" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>Freshness checks</text>
                <text x="930" y="117" style={svgMute({ fontSize: 11 })}>4 tests</text>
                <line x1="20" y1="168" x2="1080" y2="168" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Staging row */}
                <rect x="20" y="180" width="130" height="80" fill={G600} rx="4" />
                <text x="85" y="212" textAnchor="middle" style={svgNum({ fontSize: 16, fill: "#FFFFFF" })}>Staging</text>
                <text x="85" y="232" textAnchor="middle" style={svgLabel()}>1-to-1 source</text>
                <text x="85" y="248" textAnchor="middle" style={svgLabel()}>models</text>
                <text x="170" y="196" style={svgText({ fontWeight: 600, fontSize: 12 })}>stg_tracks</text>
                <text x="170" y="214" style={svgMute({ fontSize: 11 })}>type casting · column renaming · null defaults</text>
                <text x="170" y="234" style={svgText({ fontWeight: 600, fontSize: 12 })}>stg_albums · stg_artists · stg_playlists</text>
                <text x="170" y="252" style={svgMute({ fontSize: 11 })}>standardised grain · ready for joining</text>
                <rect x="600" y="184" width="320" height="18" style={{ fill: svgBg }} stroke={svgBorder} rx="3" />
                <rect x="600" y="184" width="290" height="18" fill={G600} rx="3" />
                <text x="620" y="197" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>not_null · unique (all models)</text>
                <text x="930" y="197" style={svgMute({ fontSize: 11 })}>18 tests</text>
                <rect x="600" y="210" width="320" height="18" style={{ fill: svgBg }} stroke={svgBorder} rx="3" />
                <rect x="600" y="210" width="160" height="18" fill={G300} rx="3" />
                <text x="620" y="223" style={{ fontFamily: "inherit", fontSize: 10, fill: "#0F1B14", fontWeight: 600 }}>accepted_values</text>
                <text x="930" y="223" style={svgMute({ fontSize: 11 })}>8 tests</text>
                <line x1="20" y1="274" x2="1080" y2="274" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Intermediate row */}
                <rect x="20" y="286" width="130" height="80" fill="#0D3D2E" stroke={G600} strokeWidth="1.5" rx="4" />
                <text x="85" y="314" textAnchor="middle" style={svgNum({ fontSize: 14, fill: "#C8ECD9" })}>Intermediate</text>
                <text x="85" y="334" textAnchor="middle" style={svgLabel()}>business-rule</text>
                <text x="85" y="350" textAnchor="middle" style={svgLabel()}>enrichment</text>
                <text x="170" y="302" style={svgText({ fontWeight: 600, fontSize: 12 })}>int_tracks_enriched</text>
                <text x="170" y="320" style={svgMute({ fontSize: 11 })}>joins track + album + artist · adds popularity decile</text>
                <text x="170" y="340" style={svgText({ fontWeight: 600, fontSize: 12 })}>int_playlist_tracks</text>
                <text x="170" y="358" style={svgMute({ fontSize: 11 })}>flattens nested playlist ↔ track relationship</text>
                <rect x="600" y="290" width="320" height="18" style={{ fill: svgBg }} stroke={svgBorder} rx="3" />
                <rect x="600" y="290" width="240" height="18" fill={G600} rx="3" />
                <text x="620" y="303" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>not_null · unique · relationships</text>
                <text x="930" y="303" style={svgMute({ fontSize: 11 })}>12 tests</text>
                <line x1="20" y1="380" x2="1080" y2="380" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Marts row */}
                <rect x="20" y="392" width="130" height="80" fill={GOLD} rx="4" />
                <text x="85" y="424" textAnchor="middle" style={svgNum({ fontSize: 16, fill: "#FFFFFF" })}>Marts</text>
                <text x="85" y="444" textAnchor="middle" style={svgLabel({ fill: "#FAF9F5" })}>analytics-ready</text>
                <text x="85" y="460" textAnchor="middle" style={svgLabel({ fill: "#FAF9F5" })}>dimensional models</text>
                <text x="170" y="408" style={svgText({ fontWeight: 600, fontSize: 12 })}>dim_artist · dim_track · dim_album</text>
                <text x="170" y="426" style={svgMute({ fontSize: 11 })}>slowly-changing dimensions · SCD type 1</text>
                <text x="170" y="446" style={svgText({ fontWeight: 600, fontSize: 12 })}>fct_stream · fct_playlist_snapshot</text>
                <text x="170" y="464" style={svgMute({ fontSize: 11 })}>fact grain: one row per stream event / snapshot date</text>
                <rect x="600" y="396" width="320" height="18" fill={GOLD} rx="3" />
                <text x="620" y="409" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>not_null · unique · relationships · accepted_values</text>
                <text x="930" y="409" style={svgMute({ fontSize: 11 })}>24 tests</text>
                <rect x="600" y="420" width="460" height="44" style={{ fill: svgBg }} stroke={GOLD} strokeWidth="1.5" strokeDasharray="4 3" rx="4" />
                <text x="620" y="440" style={{ fontFamily: "inherit", fontSize: 11, fill: GOLD, fontWeight: 600 }}>Dev + Prod targets</text>
                <text x="620" y="458" style={svgMute({ fontSize: 10 })}>profiles.yml configures two Motherduck targets — dev for iteration, prod for Power BI.</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 05 Metrics & Cost ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>05 — Metrics &amp; Cost Model</span>
            <h2 style={sectionH2}>Near-zero infrastructure cost — <em style={{ fontStyle: "italic", color: G600 }}>without sacrificing engineering quality</em>.</h2>
            <p style={sectionLead}>The &ldquo;poor man&apos;s data lake&rdquo; is not a shortcut — it&apos;s a deliberate architectural decision to eliminate idle compute costs. DuckDB runs only during DAG execution. S3 charges only for storage consumed. Motherduck charges only for queries run.</p>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              { num: "4",   unit: "Medallion stages",       label: "Raw → Bronze → Silver → Gold, each independently retryable and testable" },
              { num: "68",  unit: "dbt automated tests",    label: "Schema, not-null, unique, and referential integrity checks across all model layers" },
              { num: "$0",  unit: "Standing server cost",   label: "No cluster, no running instance — DuckDB only burns compute during the daily DAG run" },
            ].map(({ num, unit, label }) => (
              <div key={unit} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderTop: `3px solid ${G600}`, borderRadius: "var(--radius-lg)", padding: "28px 24px" }}>
                <div style={{ fontSize: 44, fontWeight: 700, color: G600, lineHeight: 1, letterSpacing: "-0.03em" }}>{num}</div>
                <div style={{ ...mono, fontSize: 11, color: "var(--text-muted)", marginTop: 4, letterSpacing: "0.05em" }}>{unit}</div>
                <div style={{ fontSize: 13, color: "var(--text-body)", marginTop: 16, lineHeight: 1.45 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Infochart 05: Cost Model */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 05 · Infrastructure Cost Model</span>
              <div style={infographTitle}>This architecture vs. a traditional data warehouse stack</div>
              <div style={infographSub}>The cost advantage is structural, not incidental — it comes from eliminating idle compute, not from cutting features or quality.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 380" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                <text x="20" y="24" style={svgLabel()}>Estimated monthly infrastructure cost (USD)</text>
                <line x1="20" y1="34" x2="1080" y2="34" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Traditional */}
                <text x="290" y="60" textAnchor="middle" style={svgText({ fontWeight: 600, fontSize: 13 })}>Traditional Data Warehouse Stack</text>
                <text x="290" y="78" textAnchor="middle" style={svgLabel()}>Redshift + EMR + RDS + Airflow EC2</text>

                <text x="155" y="112" textAnchor="end" style={svgMute({ fontSize: 11 })}>Redshift (2-node)</text>
                <rect x="165" y="98" width="300" height="18" fill={DNGR} rx="3" />
                <text x="473" y="112" style={svgText({ fontSize: 12, fontWeight: 600 })}>~ $360/mo</text>

                <text x="155" y="138" textAnchor="end" style={svgMute({ fontSize: 11 })}>EMR Spark (small cluster)</text>
                <rect x="165" y="124" width="200" height="18" fill={DNGR} rx="3" />
                <text x="373" y="138" style={svgText({ fontSize: 12, fontWeight: 600 })}>~ $240/mo</text>

                <text x="155" y="164" textAnchor="end" style={svgMute({ fontSize: 11 })}>RDS PostgreSQL (t3.medium)</text>
                <rect x="165" y="150" width="116" height="18" fill={DNGR} rx="3" />
                <text x="289" y="164" style={svgText({ fontSize: 12, fontWeight: 600 })}>~ $140/mo</text>

                <text x="155" y="190" textAnchor="end" style={svgMute({ fontSize: 11 })}>Airflow on EC2 (m5.large)</text>
                <rect x="165" y="176" width="55" height="18" fill={DNGR} rx="3" />
                <text x="228" y="190" style={svgText({ fontSize: 12, fontWeight: 600 })}>~ $70/mo</text>

                <line x1="165" y1="210" x2="540" y2="210" style={{ stroke: "var(--text)" }} strokeWidth="1" />
                <text x="155" y="228" textAnchor="end" style={svgText({ fontWeight: 600 })}>Total</text>
                <text x="165" y="228" style={svgNum({ fontSize: 26, fill: DNGR })}>$810</text>
                <text x="320" y="228" style={svgMute({ fontSize: 12 })}>per month — whether or not data is being processed</text>

                {/* Divider */}
                <line x1="570" y1="44" x2="570" y2="300" style={{ stroke: svgBorder }} strokeWidth="1" strokeDasharray="6 4" />

                {/* This arch */}
                <text x="835" y="60" textAnchor="middle" style={svgText({ fontWeight: 600, fontSize: 13 })}>This Architecture</text>
                <text x="835" y="78" textAnchor="middle" style={svgLabel()}>DuckDB + S3 + Motherduck + Astronomer</text>

                <text x="700" y="112" textAnchor="end" style={svgMute({ fontSize: 11 })}>AWS S3 (10 GB data)</text>
                <rect x="710" y="98" width="18" height="18" fill={G600} rx="3" />
                <text x="736" y="112" style={svgText({ fontSize: 12, fontWeight: 600 })}>~ $2/mo</text>

                <text x="700" y="138" textAnchor="end" style={svgMute({ fontSize: 11 })}>DuckDB (in-process)</text>
                <text x="718" y="138" style={svgText({ fontSize: 12, fontWeight: 600 })}>$0/mo</text>

                <text x="700" y="164" textAnchor="end" style={svgMute({ fontSize: 11 })}>Motherduck</text>
                <rect x="710" y="150" width="24" height="18" fill={G600} rx="3" />
                <text x="742" y="164" style={svgText({ fontSize: 12, fontWeight: 600 })}>~ $2/mo</text>

                <text x="700" y="190" textAnchor="end" style={svgMute({ fontSize: 11 })}>Astronomer (dev tier)</text>
                <rect x="710" y="176" width="8" height="18" fill={G600} rx="3" />
                <text x="726" y="190" style={svgText({ fontSize: 12, fontWeight: 600 })}>~ $0/mo</text>

                <line x1="710" y1="210" x2="1060" y2="210" style={{ stroke: "var(--text)" }} strokeWidth="1" />
                <text x="700" y="228" textAnchor="end" style={svgText({ fontWeight: 600 })}>Total</text>
                <text x="710" y="228" style={svgNum({ fontSize: 26, fill: G300 })}>~ $4</text>
                <text x="780" y="228" style={svgMute({ fontSize: 12 })}>per month — scales with data volume</text>

                {/* Annotation */}
                <rect x="586" y="256" width="488" height="70" style={{ fill: svgBg }} stroke={G600} strokeWidth="1.5" rx="4" />
                <text x="606" y="280" style={{ fontFamily: "inherit", fontSize: 12, fontWeight: 600, fill: G300 }}>Why the cost gap is structural, not incidental</text>
                <text x="606" y="300" style={svgMute({ fontSize: 11 })}>Traditional stacks pay for idle capacity 24/7. DuckDB, S3, and Motherduck</text>
                <text x="606" y="316" style={svgMute({ fontSize: 11 })}>charge only for what runs — same transformation quality, 200× lower cost.</text>

                {/* Savings badge */}
                <rect x="20" y="256" width="270" height="70" fill={G600} rx="4" />
                <text x="155" y="284" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 16, fontWeight: 600, fill: "#FFFFFF" }}>200× cost reduction</text>
                <text x="155" y="306" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#B4E0CF" }}>$810/mo traditional → ~$4/mo</text>
                <text x="155" y="320" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#7A9A89" }}>at equivalent engineering quality</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 06 Deliverables ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>06 — Deliverables</span>
            <h2 style={sectionH2}>Six artifacts — every one production-grade and reproducible.</h2>
            <p style={sectionLead}>The pipeline is open-source. Each component is self-contained, documented, and independently deployable. Terraform ensures the infrastructure is reproducible from a single <code style={{ ...mono, fontSize: 13, background: "var(--ink-3)", padding: "2px 6px", borderRadius: 4 }}>terraform apply</code>.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderLeft: `3px solid ${G800}`, padding: "20px 24px", borderRadius: "0 var(--radius-md) var(--radius-md) 0", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <Icon className="shrink-0 mt-0.5" style={{ width: 22, height: 22, color: G600 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, color: "var(--text)" }}>{title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-body)", lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing callout ── */}
        <div style={{ position: "relative", background: G800, color: "#C8ECD9", padding: "56px 48px", borderRadius: "var(--radius-lg)", marginBottom: 0, borderLeft: `4px solid ${G600}` }}>
          <span style={{ fontSize: 96, position: "absolute", top: 8, left: 24, color: G600, opacity: 0.4, lineHeight: 1, fontWeight: 700 }}>&ldquo;</span>
          <p style={{ paddingLeft: 48, fontStyle: "italic", fontSize: 24, lineHeight: 1.4, fontWeight: 400, color: "#B4E0CF" }}>
            The best data lake is the one you can actually{" "}
            <strong style={{ fontStyle: "normal", fontWeight: 700, color: "#FFFFFF" }}>afford to run</strong>.
            Embed the engine, eliminate the server, charge only for what you process — and spend the savings on engineering quality instead.
          </p>
        </div>

      </div>
    </div>
  );
}
