"use client";

import Link from "next/link";
import { ArrowLeft, Layers, CheckCircle2, BookOpen, GitBranch, BarChart2, FileText } from "lucide-react";

/* ── palette ─────────────────────────────────────────────────────────── */
const I800  = "#3730A3";
const I600  = "#6366F1";
const I300  = "#A5B4FC";
const IDARK = "#1E1B6B";
const GOLD  = "#B45309";
const WARM  = "#EA6E3A";

/* ── shared style tokens ─────────────────────────────────────────────── */
const mono = { fontFamily: "var(--font-mono)" } as const;
const sectionNum: React.CSSProperties = { ...mono, fontSize: 12, color: "var(--primary-400)", fontWeight: 600, letterSpacing: "0.08em", marginBottom: 12, display: "block" };
const sectionH2: React.CSSProperties = { fontWeight: 700, fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 16 };
const sectionLead: React.CSSProperties = { fontSize: 17, color: "var(--text-body)", maxWidth: 720, lineHeight: 1.55 };
const infograph: React.CSSProperties = { background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: 40, margin: "32px 0", overflow: "hidden" };
const infographLabel: React.CSSProperties = { ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: I600, fontWeight: 600, marginBottom: 10, display: "block" };
const infographTitle: React.CSSProperties = { fontSize: 22, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em" };
const infographSub: React.CSSProperties = { fontSize: 14, color: "var(--text-body)", marginTop: 6 };

/* SVG inline style helpers */
const svgText  = (extra?: React.CSSProperties) => ({ fontFamily: "inherit", fontSize: 11, fill: "var(--text)", ...extra } as React.CSSProperties);
const svgMute  = (extra?: React.CSSProperties) => ({ fontFamily: "inherit", fontSize: 11, fill: "var(--text-body)", ...extra } as React.CSSProperties);
const svgLabel = (extra?: React.CSSProperties) => ({ ...mono, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase" as const, fill: "var(--text-muted)", ...extra });
const svgNum   = (extra?: React.CSSProperties) => ({ fontWeight: 600, ...extra } as React.CSSProperties);
const svgBg     = "var(--ink-3)";
const svgBorder = "var(--line)";

const deliverables = [
  { icon: Layers,       title: "dbt Project (staging → intermediate → marts)", desc: "64 staging models covering all SAP source tables, multiple intermediate transformations, and a full star-schema mart layer covering Sales, Products, HR, and Territory domains." },
  { icon: CheckCircle2, title: "Automated Test Suite",                          desc: "not_null, unique, accepted_values, and relationships tests at every layer. Tests block downstream materialisation on failure — a broken mart cannot be produced from untested source data." },
  { icon: BookOpen,     title: "dbt Documentation Site",                        desc: "Generated via dbt docs generate — all models, columns, tests, and source-to-mart lineage graphs browsable without running the project locally." },
  { icon: GitBranch,    title: "Conceptual Data Model",                         desc: "Entity-relationship diagram documenting the mart layer star schema — published externally for stakeholder review and onboarding." },
  { icon: BarChart2,    title: "BI Dashboard",                                  desc: "Dashboard built directly on the mart layer, demonstrating that the dimensional models are BI-tool-ready without further transformation." },
  { icon: FileText,     title: "profiles.yml + packages.json",                  desc: "Fully configured BigQuery connection profile and package manifest — the project is reproducible from a fresh clone with BigQuery credentials." },
];

export default function AdventureWorksContent() {
  return (
    <div className="min-h-screen pt-12 pb-20">
      <div className="container-custom">

        {/* Back */}
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm transition-colors duration-[250ms] hover:text-[var(--primary-400)]"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        {/* ── Hero ── */}
        <section style={{ paddingBottom: 48 }}>
          <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--primary-400)", fontWeight: 500, marginBottom: 28, display: "inline-block" }}>
            Project · Analytics Engineering · dbt + BigQuery
          </span>
          <h1 style={{ fontWeight: 700, fontSize: "clamp(36px, 5vw, 62px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 24 }}>
            Transforming{" "}
            <em style={{ fontStyle: "italic", color: I600 }}>64 SAP source tables</em>{" "}
            into analytics-ready dimensional models through a three-layer dbt pipeline on BigQuery.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--text-body)", maxWidth: 680, fontWeight: 400 }}>
            Analytics engineering certification project built on dbt Core and BigQuery. Adventure Works SAP data flows through three disciplined layers — staging standardises raw inputs, intermediate applies business logic, and marts deliver domain-organised dimensional models ready for BI consumption. Every layer covered by automated dbt tests and generated documentation.
          </p>
        </section>

        {/* ── Meta strip ── */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "28px 0" }}
        >
          {[
            ["Type",      "Analytics Engineering"],
            ["Sources",   "64 SAP tables"],
            ["Warehouse", "BigQuery"],
            ["Layers",    "3 · stg → int → mart"],
          ].map(([label, value]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", fontWeight: 500 }}>{label}</span>
              <span style={{ fontSize: 18, fontWeight: 600, color: "var(--text)" }}>{value}</span>
            </div>
          ))}
        </div>

        {/* ── Tech tags ── */}
        <div className="mb-8 flex flex-wrap gap-2">
          {["dbt", "BigQuery", "SQL", "Python", "Data Modeling"].map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* ── External links ── */}
        <div className="mb-14 flex flex-wrap gap-3">
          {[
            { label: "GitHub Repository", url: "https://github.com/danielmschaves/academy-dbt-test" },
            { label: "View Dashboard",    url: "https://drive.google.com/file/d/1P5sIFxPpFo0O0Vb3xIx0Xd5AipQMJtO5/preview" },
            { label: "Conceptual Model",  url: "https://drive.google.com/file/d/1ltGTRQKS7peliVuWBNowrY_ltx8IU8oJ/preview" },
          ].map(({ label, url }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer"
              style={{ ...mono, fontSize: 12, padding: "8px 16px", border: "1px solid var(--line-strong)", borderRadius: "var(--radius-full)", color: "var(--primary-400)", background: "var(--ink-3)", fontWeight: 500, textDecoration: "none" }}>
              {label} ↗
            </a>
          ))}
        </div>

        {/* ── 01 Context & Approach ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>01 — Context &amp; Approach</span>
            <h2 style={sectionH2}>From <em style={{ fontStyle: "italic", color: I600 }}>raw SAP exports</em> to a dimensional schema — the analytics engineer&apos;s job.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>The source data problem</h3>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: 16 }}>SAP systems generate tables optimised for transactional throughput, not analytical querying. Column names are abbreviated, types are inconsistent across modules, null handling is implicit, and relationships are buried in surrogate key conventions that vary by SAP module. Adventure Works exposes all of this across 64 tables spanning six business domains.</p>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7 }}>The analytics engineer&apos;s job is to impose order without losing fidelity: standardise the grain, enforce types, name things for humans, and model the business logic once — so every downstream consumer sees a consistent, documented, testable surface.</p>
            </div>
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>Why the three-layer architecture</h3>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: 16 }}><strong style={{ color: "var(--text)" }}>Separation of concerns.</strong> Staging is never business logic — it is just standardisation. Intermediate is never a BI model — it is preparation. Marts are the contract: the stable, domain-facing surface that BI tools and analysts depend on.</p>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7 }}>When a source changes schema, only the staging model needs to change. When business logic changes, only the intermediate model changes. The mart stays stable — and with it, the dashboards that depend on it.</p>
            </div>
          </div>

          {/* Infochart 01: Source Table Inventory */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 01 · Source Table Inventory</span>
              <div style={infographTitle}>64 SAP source tables across six business domains</div>
              <div style={infographSub}>Each domain maps to a distinct SAP module. The staging layer creates one-to-one models for every source table shown here.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 380" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                <text x="20" y="22" style={svgLabel()}>SAP Module · Table Count · Sample Tables</text>
                <line x1="20" y1="32" x2="1080" y2="32" style={{ stroke: svgBorder }} strokeWidth="1" />

                <text x="20"  y="54" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Domain</text>
                <text x="200" y="54" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Tables</text>
                <text x="400" y="54" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Distribution</text>
                <text x="800" y="54" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Sample Sources</text>
                <line x1="20" y1="62" x2="1080" y2="62" style={{ stroke: "var(--text)" }} strokeWidth="1" />

                {/* Sales & Distribution */}
                <rect x="20" y="74" width="160" height="36" fill={I800} rx="4" />
                <text x="100" y="95" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 11 })}>Sales &amp; Distribution</text>
                <text x="200" y="96" style={svgNum({ fontSize: 20, fill: I300 })}>14</text>
                <rect x="280" y="82" width="420" height="18" fill={I800} rx="3" />
                <text x="307" y="95" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>SalesOrderHeader · SalesOrderDetail · Customer</text>
                <text x="800" y="96" style={svgMute({ fontSize: 10 })}>SalesPerson · SalesTerritory · SpecialOffer</text>
                <line x1="20" y1="120" x2="1080" y2="120" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Products & Inventory */}
                <rect x="20" y="132" width="160" height="36" fill={I600} rx="4" />
                <text x="100" y="153" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 11 })}>Products &amp; Inventory</text>
                <text x="200" y="154" style={svgNum({ fontSize: 20, fill: I300 })}>13</text>
                <rect x="280" y="140" width="390" height="18" fill={I600} rx="3" />
                <text x="307" y="153" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>Product · ProductCategory · ProductSubcategory</text>
                <text x="800" y="154" style={svgMute({ fontSize: 10 })}>ProductInventory · ProductPhoto · ProductReview</text>
                <line x1="20" y1="178" x2="1080" y2="178" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Production */}
                <rect x="20" y="190" width="160" height="36" fill={I600} fillOpacity="0.85" rx="4" />
                <text x="100" y="211" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 11 })}>Production</text>
                <text x="200" y="212" style={svgNum({ fontSize: 20, fill: I300 })}>12</text>
                <rect x="280" y="198" width="360" height="18" fill={I600} fillOpacity="0.85" rx="3" />
                <text x="307" y="211" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>WorkOrder · WorkOrderRouting · ProductDocument</text>
                <text x="800" y="212" style={svgMute({ fontSize: 10 })}>Location · ProductCostHistory · BillOfMaterials</text>
                <line x1="20" y1="236" x2="1080" y2="236" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Purchasing */}
                <rect x="20" y="248" width="160" height="36" fill={I300} rx="4" />
                <text x="100" y="269" textAnchor="middle" style={svgText({ fill: IDARK, fontWeight: 600, fontSize: 11 })}>Purchasing</text>
                <text x="200" y="270" style={svgNum({ fontSize: 20, fill: I300 })}>11</text>
                <rect x="280" y="256" width="330" height="18" fill={I300} rx="3" />
                <text x="307" y="269" style={{ fontFamily: "inherit", fontSize: 10, fill: IDARK, fontWeight: 600 }}>PurchaseOrderHeader · PurchaseOrderDetail · Vendor</text>
                <text x="800" y="270" style={svgMute({ fontSize: 10 })}>ProductVendor · ShipMethod · VendorAddress</text>
                <line x1="20" y1="294" x2="1080" y2="294" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Human Resources */}
                <rect x="20" y="306" width="160" height="36" fill={I300} fillOpacity="0.8" rx="4" />
                <text x="100" y="327" textAnchor="middle" style={svgText({ fill: IDARK, fontWeight: 600, fontSize: 11 })}>Human Resources</text>
                <text x="200" y="328" style={svgNum({ fontSize: 20, fill: I300 })}>8</text>
                <rect x="280" y="314" width="240" height="18" fill={I300} fillOpacity="0.8" rx="3" />
                <text x="307" y="327" style={{ fontFamily: "inherit", fontSize: 10, fill: IDARK, fontWeight: 600 }}>Employee · Department · Shift</text>
                <text x="800" y="328" style={svgMute({ fontSize: 10 })}>JobCandidate · EmployeeDepartmentHistory</text>

                {/* Shared / master data */}
                <text x="20"  y="360" style={svgLabel({ fill: GOLD, fontWeight: 600 })}>+ 6 shared / master data tables</text>
                <text x="200" y="360" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>64 total</text>
                <text x="307" y="360" style={svgMute({ fontSize: 10 })}>Address · AddressType · ContactType · CountryRegion · Currency · StateProvince</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 02 Three-Layer Architecture ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>02 — Three-Layer Architecture</span>
            <h2 style={sectionH2}>Staging cleans. Intermediate joins. <em style={{ fontStyle: "italic", color: I600 }}>Marts deliver</em>.</h2>
            <p style={sectionLead}>The three-layer pattern imposes strict separation of concerns. No staging model contains business logic. No mart model reads directly from source. Each layer has a single responsibility — and a test suite to prove it.</p>
          </div>

          {/* Infochart 02: Layer Architecture */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 02 · dbt Layer Architecture</span>
              <div style={infographTitle}>Source → Staging → Intermediate → Marts · each layer&apos;s job</div>
              <div style={infographSub}>Reading left to right: data fidelity increases, business meaning increases, and the audience shifts from engineers to analysts.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 440" style={{ width: "100%", minWidth: 800, height: "auto", display: "block" }}>
                <defs>
                  <marker id="aw-layer-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={I800} />
                  </marker>
                </defs>

                {/* Source */}
                <rect x="10" y="40" width="210" height="300" style={{ fill: svgBg }} stroke={I800} strokeWidth="2" rx="6" />
                <rect x="10" y="40" width="210" height="36" fill={I800} rx="6" />
                <rect x="10" y="58"  width="210" height="18" fill={I800} />
                <text x="115" y="62" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>Source (BigQuery Raw)</text>
                <text x="115" y="98" textAnchor="middle" style={svgLabel()}>64 tables · 6 domains</text>
                <line x1="30" y1="108" x2="200" y2="108" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="30" y="130" style={svgMute({ fontSize: 10 })}>sales.SalesOrderHeader</text>
                <text x="30" y="148" style={svgMute({ fontSize: 10 })}>sales.SalesOrderDetail</text>
                <text x="30" y="166" style={svgMute({ fontSize: 10 })}>product.Product</text>
                <text x="30" y="184" style={svgMute({ fontSize: 10 })}>product.ProductCategory</text>
                <text x="30" y="202" style={svgMute({ fontSize: 10 })}>hr.Employee</text>
                <text x="30" y="220" style={svgMute({ fontSize: 10 })}>purchasing.Vendor</text>
                <text x="30" y="238" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>… 58 more tables</text>
                <text x="115" y="320" textAnchor="middle" style={svgLabel({ fill: I300, fontWeight: 600 })}>Audience</text>
                <text x="115" y="336" textAnchor="middle" style={svgMute({ fontSize: 11 })}>Data Engineers</text>

                <line x1="224" y1="190" x2="248" y2="190" stroke={I800} strokeWidth="2" markerEnd="url(#aw-layer-arrow)" />

                {/* Staging */}
                <rect x="252" y="40" width="220" height="300" style={{ fill: svgBg }} stroke={I600} strokeWidth="2" rx="6" />
                <rect x="252" y="40" width="220" height="36" fill={I600} rx="6" />
                <rect x="252" y="58"  width="220" height="18" fill={I600} />
                <text x="362" y="62" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>Staging (stg_*)</text>
                <text x="362" y="98" textAnchor="middle" style={svgLabel()}>1-to-1 source mapping</text>
                <line x1="272" y1="108" x2="452" y2="108" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="272" y="132" style={svgText({ fill: I600, fontWeight: 600, fontSize: 11 })}>What happens here</text>
                <text x="272" y="154" style={svgMute({ fontSize: 10 })}>▸ Column renaming (snake_case)</text>
                <text x="272" y="172" style={svgMute({ fontSize: 10 })}>▸ Type casting (STRING → INT64)</text>
                <text x="272" y="190" style={svgMute({ fontSize: 10 })}>▸ Null default substitution</text>
                <text x="272" y="208" style={svgMute({ fontSize: 10 })}>▸ No business logic whatsoever</text>
                <text x="272" y="232" style={svgText({ fill: I600, fontWeight: 600, fontSize: 11 })}>Example models</text>
                <text x="272" y="250" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>stg_sales__orders</text>
                <text x="272" y="266" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>stg_product__products</text>
                <text x="272" y="282" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>stg_hr__employees</text>
                <text x="362" y="320" textAnchor="middle" style={svgLabel({ fill: I600, fontWeight: 600 })}>Tests</text>
                <text x="362" y="336" textAnchor="middle" style={svgMute({ fontSize: 11 })}>not_null · unique</text>

                <line x1="476" y1="190" x2="500" y2="190" stroke={I800} strokeWidth="2" markerEnd="url(#aw-layer-arrow)" />

                {/* Intermediate */}
                <rect x="504" y="40" width="220" height="300" style={{ fill: svgBg }} stroke={I300} strokeWidth="2" rx="6" />
                <rect x="504" y="40" width="220" height="36" fill={IDARK} rx="6" />
                <rect x="504" y="58"  width="220" height="18" fill={IDARK} />
                <text x="614" y="62" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 13, fill: "#DDDAFF", fontWeight: 600 }}>Intermediate (int_*)</text>
                <text x="614" y="98" textAnchor="middle" style={svgLabel()}>Business logic &amp; joins</text>
                <line x1="524" y1="108" x2="704" y2="108" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="524" y="132" style={{ fontFamily: "inherit", fontSize: 11, fill: I300, fontWeight: 600 }}>What happens here</text>
                <text x="524" y="154" style={svgMute({ fontSize: 10 })}>▸ Joining related staging models</text>
                <text x="524" y="172" style={svgMute({ fontSize: 10 })}>▸ Applying business rules</text>
                <text x="524" y="190" style={svgMute({ fontSize: 10 })}>▸ Enriching with derived fields</text>
                <text x="524" y="208" style={svgMute({ fontSize: 10 })}>▸ Preparing grain for mart joins</text>
                <text x="524" y="232" style={{ fontFamily: "inherit", fontSize: 11, fill: I300, fontWeight: 600 }}>Example models</text>
                <text x="524" y="250" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>int_orders__enriched</text>
                <text x="524" y="266" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>int_products__with_category</text>
                <text x="524" y="282" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>int_employees__history</text>
                <text x="614" y="320" textAnchor="middle" style={svgLabel({ fill: I300, fontWeight: 600 })}>Tests</text>
                <text x="614" y="336" textAnchor="middle" style={svgMute({ fontSize: 11 })}>not_null · relationships</text>

                <line x1="728" y1="190" x2="752" y2="190" stroke={I800} strokeWidth="2" markerEnd="url(#aw-layer-arrow)" />

                {/* Marts */}
                <rect x="756" y="40" width="330" height="300" fill={IDARK} stroke={I600} strokeWidth="2" rx="6" />
                <rect x="756" y="40" width="330" height="36" fill={I800} rx="6" />
                <rect x="756" y="58"  width="330" height="18" fill={I800} />
                <text x="921" y="62" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>Marts (fct_* + dim_*)</text>
                <text x="921" y="98" textAnchor="middle" style={svgLabel()}>Business-domain dimensional models</text>
                <line x1="776" y1="108" x2="1066" y2="108" stroke={I800} strokeWidth="1" />
                <text x="776" y="132" style={{ fontFamily: "inherit", fontSize: 11, fill: "#DDDAFF", fontWeight: 600 }}>Fact tables</text>
                <text x="776" y="150" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "#C7D2FE" }}>fct_sales</text>
                <text x="776" y="166" style={{ fontFamily: "inherit", fontSize: 10, fill: I300, fontStyle: "italic" }}>one row per sales order line</text>
                <text x="776" y="188" style={{ fontFamily: "inherit", fontSize: 11, fill: "#DDDAFF", fontWeight: 600 }}>Dimension tables</text>
                <text x="776" y="206" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "#C7D2FE" }}>dim_customer</text>
                <text x="776" y="222" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "#C7D2FE" }}>dim_product</text>
                <text x="776" y="238" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "#C7D2FE" }}>dim_employee</text>
                <text x="776" y="254" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "#C7D2FE" }}>dim_territory</text>
                <text x="776" y="270" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "#C7D2FE" }}>dim_date</text>
                <text x="921" y="320" textAnchor="middle" style={svgLabel({ fill: "#DDDAFF", fontWeight: 600 })}>Audience</text>
                <text x="921" y="336" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#C7D2FE" }}>Analysts · BI Tools</text>

                {/* Abstraction direction */}
                <g transform="translate(10, 370)">
                  <text x="0" y="16" style={svgLabel({ fill: I300, fontWeight: 600 })}>Direction of abstraction</text>
                  <line x1="180" y1="10" x2="1070" y2="10" stroke={I800} strokeWidth="1.5" markerEnd="url(#aw-layer-arrow)" />
                  <text x="180" y="30" style={svgMute({ fontSize: 10 })}>Raw &amp; verbose</text>
                  <text x="1070" y="30" textAnchor="end" style={svgMute({ fontSize: 10 })}>Business-ready &amp; documented</text>
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 03 BigQuery Dataset Structure ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>03 — BigQuery Dataset Structure</span>
            <h2 style={sectionH2}>One BigQuery project, <em style={{ fontStyle: "italic", color: I600 }}>four datasets</em> — each owned by a dbt layer.</h2>
            <p style={sectionLead}>dbt manages the physical dataset structure in BigQuery. Each layer materialises into its own dataset, giving analysts a clear contract: query mart tables, never staging or intermediate tables directly. The layer boundary is both a modelling convention and an access-control point.</p>
          </div>

          {/* Infochart 03: BigQuery Dataset Layout */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 03 · BigQuery Dataset Layout</span>
              <div style={infographTitle}>Project → Dataset → Table hierarchy by dbt layer</div>
              <div style={infographSub}>dbt&apos;s target schema configuration maps directly to BigQuery dataset names — making layer boundaries visible at the infrastructure level, not just in code.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 420" style={{ width: "100%", minWidth: 800, height: "auto", display: "block" }}>
                {/* Project wrapper */}
                <rect x="20" y="20" width="1060" height="370" style={{ fill: svgBg }} stroke={svgBorder} strokeWidth="1.5" rx="8" />
                <rect x="20" y="20" width="1060" height="34" fill={I800} rx="8" />
                <rect x="20" y="38"  width="1060" height="16" fill={I800} />
                <text x="40"   y="42" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>BigQuery Project · adventure-works-analytics</text>
                <text x="1060" y="42" textAnchor="end" style={svgLabel({ fill: I300 })}>dbt-managed · dev + prod targets</text>

                {/* raw_adventure_works */}
                <rect x="40" y="72" width="234" height="296" fill="var(--bg-card)" stroke={svgBorder} strokeWidth="1.5" rx="6" />
                <rect x="40" y="72" width="234" height="28" fill="#E0E7FF" rx="6" />
                <rect x="40" y="86" width="234" height="14" fill="#E0E7FF" />
                <text x="157" y="90" textAnchor="middle" style={svgLabel({ fill: I300, fontWeight: 600 })}>Dataset: raw_adventure_works</text>
                <text x="157" y="118" textAnchor="middle" style={svgLabel()}>Source · read-only</text>
                <line x1="55" y1="126" x2="259" y2="126" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="55" y="146" style={svgMute({ fontSize: 10 })}>SalesOrderHeader</text>
                <text x="55" y="162" style={svgMute({ fontSize: 10 })}>SalesOrderDetail</text>
                <text x="55" y="178" style={svgMute({ fontSize: 10 })}>Customer</text>
                <text x="55" y="194" style={svgMute({ fontSize: 10 })}>Product</text>
                <text x="55" y="210" style={svgMute({ fontSize: 10 })}>ProductCategory</text>
                <text x="55" y="226" style={svgMute({ fontSize: 10 })}>Employee</text>
                <text x="55" y="242" style={svgMute({ fontSize: 10 })}>Department</text>
                <text x="55" y="258" style={svgMute({ fontSize: 10 })}>Vendor</text>
                <text x="55" y="278" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>… 56 more tables</text>
                <text x="157" y="348" textAnchor="middle" style={svgLabel()}>64 tables</text>

                {/* staging */}
                <rect x="290" y="72" width="212" height="296" fill="var(--bg-card)" stroke={svgBorder} strokeWidth="1.5" rx="6" />
                <rect x="290" y="72" width="212" height="28" fill="#E0E7FF" rx="6" />
                <rect x="290" y="86" width="212" height="14" fill={I600} fillOpacity="0.2" />
                <text x="396" y="90" textAnchor="middle" style={svgLabel({ fill: I600, fontWeight: 600 })}>Dataset: staging</text>
                <text x="396" y="118" textAnchor="middle" style={svgLabel()}>dbt materialisation: view</text>
                <line x1="305" y1="126" x2="487" y2="126" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="305" y="146" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: I600 }}>stg_sales__orders</text>
                <text x="305" y="162" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: I600 }}>stg_sales__orderdetail</text>
                <text x="305" y="178" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: I600 }}>stg_product__products</text>
                <text x="305" y="194" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: I600 }}>stg_product__categories</text>
                <text x="305" y="210" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: I600 }}>stg_hr__employees</text>
                <text x="305" y="226" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: I600 }}>stg_purchasing__vendors</text>
                <text x="305" y="246" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>… 58 more models</text>
                <text x="396" y="348" textAnchor="middle" style={svgLabel({ fill: I600 })}>64 view models</text>

                {/* intermediate */}
                <rect x="518" y="72" width="212" height="296" fill="var(--bg-card)" stroke={svgBorder} strokeWidth="1.5" rx="6" />
                <rect x="518" y="72" width="212" height="28" fill={IDARK} rx="6" />
                <rect x="518" y="86" width="212" height="14" fill={IDARK} fillOpacity="0.85" />
                <text x="624" y="90" textAnchor="middle" style={svgLabel({ fill: "#DDDAFF", fontWeight: 600 })}>Dataset: intermediate</text>
                <text x="624" y="118" textAnchor="middle" style={svgLabel()}>dbt materialisation: view</text>
                <line x1="533" y1="126" x2="715" y2="126" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="533" y="146" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: I300 }}>int_orders__enriched</text>
                <text x="533" y="162" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: I300 }}>int_products__with_cat</text>
                <text x="533" y="178" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: I300 }}>int_employees__history</text>
                <text x="533" y="194" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: I300 }}>int_customers__joined</text>
                <text x="533" y="210" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: I300 }}>int_territories__sales</text>
                <text x="533" y="246" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>… additional models</text>
                <text x="624" y="348" textAnchor="middle" style={svgLabel({ fill: I300 })}>view models</text>

                {/* marts */}
                <rect x="746" y="72" width="314" height="296" fill={IDARK} stroke={I600} strokeWidth="1.5" rx="6" />
                <rect x="746" y="72" width="314" height="28" fill={I800} rx="6" />
                <rect x="746" y="86" width="314" height="14" fill={I800} />
                <text x="903" y="90" textAnchor="middle" style={svgLabel({ fill: "#DDDAFF", fontWeight: 600 })}>Dataset: marts</text>
                <text x="903" y="118" textAnchor="middle" style={svgLabel({ fill: I300 })}>dbt materialisation: table</text>
                <line x1="761" y1="126" x2="1045" y2="126" stroke={I800} strokeWidth="1" />
                <text x="761" y="146" style={{ fontFamily: "var(--font-mono)", fontSize: 12, fill: "#C7D2FE", fontWeight: 600 }}>fct_sales</text>
                <text x="761" y="166" style={{ fontFamily: "var(--font-mono)", fontSize: 12, fill: "#C7D2FE", fontWeight: 600 }}>dim_customer</text>
                <text x="761" y="186" style={{ fontFamily: "var(--font-mono)", fontSize: 12, fill: "#C7D2FE", fontWeight: 600 }}>dim_product</text>
                <text x="761" y="206" style={{ fontFamily: "var(--font-mono)", fontSize: 12, fill: "#C7D2FE", fontWeight: 600 }}>dim_employee</text>
                <text x="761" y="226" style={{ fontFamily: "var(--font-mono)", fontSize: 12, fill: "#C7D2FE", fontWeight: 600 }}>dim_territory</text>
                <text x="761" y="246" style={{ fontFamily: "var(--font-mono)", fontSize: 12, fill: "#C7D2FE", fontWeight: 600 }}>dim_date</text>
                <text x="903" y="310" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: I300, fontStyle: "italic" }}>Stable contract for BI tools.</text>
                <text x="903" y="328" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: I300, fontStyle: "italic" }}>Analysts never query upstream layers.</text>
                <text x="903" y="348" textAnchor="middle" style={svgLabel({ fill: "#DDDAFF" })}>table materialisations</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 04 Dimensional Model ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>04 — Dimensional Model</span>
            <h2 style={sectionH2}>A classic <em style={{ fontStyle: "italic", color: I600 }}>star schema</em> — one fact, five dimensions.</h2>
            <p style={sectionLead}>The mart layer delivers a dimensional model centred on the sales fact — the most analytically valuable grain in the Adventure Works dataset. Every dimension is directly joinable via surrogate key, following Kimball&apos;s dimensional modelling principles.</p>
          </div>

          {/* Infochart 04: Star Schema */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 04 · Mart Layer — Star Schema</span>
              <div style={infographTitle}>fct_sales at the centre · five dimension tables</div>
              <div style={infographSub}>All joins occur via surrogate keys generated in the staging and intermediate layers. The fact table grain is one row per sales order line item.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 500" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                {/* fct_sales centre */}
                <rect x="380" y="178" width="340" height="144" fill={I800} stroke={I600} strokeWidth="2" rx="6" />
                <text x="550" y="204" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: 16, fill: "#FFFFFF", fontWeight: 600 }}>fct_sales</text>
                <text x="550" y="222" textAnchor="middle" style={svgLabel({ fill: I300, fontSize: 8 })}>Grain: one row per order line item</text>
                <line x1="400" y1="230" x2="700" y2="230" stroke={I600} strokeWidth="1" />
                <text x="400" y="250" style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "#DDDAFF" }}>order_key (SK)</text>
                <text x="400" y="268" style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "#DDDAFF" }}>customer_key (FK)</text>
                <text x="400" y="286" style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "#DDDAFF" }}>product_key (FK)</text>
                <text x="630" y="250" style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: I300 }}>employee_key (FK)</text>
                <text x="630" y="268" style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: I300 }}>territory_key (FK)</text>
                <text x="630" y="286" style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: I300 }}>order_date_key (FK)</text>
                <text x="550" y="310" textAnchor="middle" style={svgMute({ fontSize: 10, fontStyle: "italic" })}>unit_price · order_qty · line_total · discount</text>

                {/* dim_customer — top */}
                <rect x="380" y="20" width="340" height="120" style={{ fill: svgBg }} stroke={I600} strokeWidth="1.5" rx="6" />
                <rect x="380" y="20" width="340" height="24" fill={I600} rx="6" />
                <rect x="380" y="32" width="340" height="12" fill={I600} />
                <text x="550" y="37" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: 12, fill: "#FFFFFF", fontWeight: 600 }}>dim_customer</text>
                <text x="400" y="68"  style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>customer_key (SK)</text>
                <text x="400" y="84"  style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>customer_id</text>
                <text x="400" y="100" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>first_name · last_name</text>
                <text x="400" y="116" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>email_address · phone</text>
                <line x1="550" y1="140" x2="550" y2="178" stroke={I600} strokeWidth="1.5" strokeDasharray="4 3" />

                {/* dim_product — right */}
                <rect x="790" y="178" width="300" height="144" style={{ fill: svgBg }} stroke={I600} strokeWidth="1.5" rx="6" />
                <rect x="790" y="178" width="300" height="24" fill={I600} rx="6" />
                <rect x="790" y="192" width="300" height="12" fill={I600} />
                <text x="940" y="197" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: 12, fill: "#FFFFFF", fontWeight: 600 }}>dim_product</text>
                <text x="808" y="228" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>product_key (SK)</text>
                <text x="808" y="244" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>product_id</text>
                <text x="808" y="260" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>product_name</text>
                <text x="808" y="276" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>category · subcategory</text>
                <text x="808" y="292" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>list_price · color</text>
                <line x1="790" y1="250" x2="720" y2="250" stroke={I600} strokeWidth="1.5" strokeDasharray="4 3" />

                {/* dim_date — bottom right */}
                <rect x="790" y="358" width="300" height="120" style={{ fill: svgBg }} stroke={I300} strokeWidth="1.5" rx="6" />
                <rect x="790" y="358" width="300" height="24" fill={I300} rx="6" />
                <rect x="790" y="372" width="300" height="12" fill={I300} />
                <text x="940" y="377" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: 12, fill: IDARK, fontWeight: 600 }}>dim_date</text>
                <text x="808" y="408" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>date_key (SK)</text>
                <text x="808" y="424" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>date · year · quarter</text>
                <text x="808" y="440" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>month · week · day_name</text>
                <text x="808" y="456" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>is_weekend · fiscal_period</text>
                <line x1="790" y1="395" x2="720" y2="322" stroke={I300} strokeWidth="1.5" strokeDasharray="4 3" />

                {/* dim_employee — bottom left */}
                <rect x="10" y="358" width="300" height="120" style={{ fill: svgBg }} stroke={I300} strokeWidth="1.5" rx="6" />
                <rect x="10" y="358" width="300" height="24" fill={I300} rx="6" />
                <rect x="10" y="372" width="300" height="12" fill={I300} />
                <text x="160" y="377" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: 12, fill: IDARK, fontWeight: 600 }}>dim_employee</text>
                <text x="28" y="408" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>employee_key (SK)</text>
                <text x="28" y="424" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>employee_id</text>
                <text x="28" y="440" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>full_name · job_title</text>
                <text x="28" y="456" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>department · hire_date</text>
                <line x1="310" y1="395" x2="380" y2="322" stroke={I300} strokeWidth="1.5" strokeDasharray="4 3" />

                {/* dim_territory — left */}
                <rect x="10" y="178" width="300" height="144" style={{ fill: svgBg }} stroke={I600} strokeWidth="1.5" rx="6" />
                <rect x="10" y="178" width="300" height="24" fill={I600} rx="6" />
                <rect x="10" y="192" width="300" height="12" fill={I600} />
                <text x="160" y="197" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: 12, fill: "#FFFFFF", fontWeight: 600 }}>dim_territory</text>
                <text x="28" y="228" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>territory_key (SK)</text>
                <text x="28" y="244" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>territory_id</text>
                <text x="28" y="260" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>territory_name</text>
                <text x="28" y="276" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>country_region</text>
                <text x="28" y="292" style={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "var(--text-body)" }}>group (North America, etc.)</text>
                <line x1="310" y1="250" x2="380" y2="250" stroke={I600} strokeWidth="1.5" strokeDasharray="4 3" />

                {/* Legend */}
                <g transform="translate(10, 10)">
                  <line x1="0" y1="8" x2="30" y2="8" stroke={I600} strokeWidth="1.5" strokeDasharray="4 3" />
                  <text x="38" y="12" style={svgMute({ fontSize: 11 })}>Join via surrogate key (FK → SK)</text>
                  <text x="350" y="12" style={svgMute({ fontSize: 10 })}>SK = surrogate key · FK = foreign key</text>
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 05 Test Coverage ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>05 — Test Coverage &amp; Documentation</span>
            <h2 style={sectionH2}>Every model tested. Every column documented. <em style={{ fontStyle: "italic", color: I600 }}>No exceptions</em>.</h2>
            <p style={sectionLead}>dbt&apos;s built-in test framework is applied at every layer. Tests are not optional bolt-ons — they are the mechanism by which the pipeline proves to downstream consumers that the data meets its documented contract.</p>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              { num: "64",   unit: "Source tables modeled",  label: "Every SAP source table represented in the staging layer with a 1-to-1 model" },
              { num: "3",    unit: "dbt layers",             label: "Staging → Intermediate → Marts, each with its own materialisation and test suite" },
              { num: "100%", unit: "Model documentation",    label: "All models documented in schema.yml files and published via dbt docs generate" },
            ].map(({ num, unit, label }) => (
              <div key={unit} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderTop: `3px solid ${I600}`, borderRadius: "var(--radius-lg)", padding: "28px 24px" }}>
                <div style={{ fontSize: 44, fontWeight: 700, color: I600, lineHeight: 1, letterSpacing: "-0.03em" }}>{num}</div>
                <div style={{ ...mono, fontSize: 11, color: "var(--text-muted)", marginTop: 4, letterSpacing: "0.05em" }}>{unit}</div>
                <div style={{ fontSize: 13, color: "var(--text-body)", marginTop: 16, lineHeight: 1.45 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Infochart 05: Test Coverage Matrix */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 05 · Automated Test Coverage</span>
              <div style={infographTitle}>Test types applied per layer · dbt built-in + custom tests</div>
              <div style={infographSub}>Tests run on every dbt build. Failures block downstream materialisation — a broken mart cannot be produced from untested source data.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 400" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                <text x="20" y="24" style={svgLabel()}>Test type · Coverage scope · Example assertion</text>
                <line x1="20" y1="34" x2="1080" y2="34" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="20"  y="56" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Layer</text>
                <text x="200" y="56" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Test Types Applied</text>
                <text x="620" y="56" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Coverage</text>
                <text x="820" y="56" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>What it proves</text>
                <line x1="20" y1="64" x2="1080" y2="64" style={{ stroke: "var(--text)" }} strokeWidth="1" />

                {/* Staging row */}
                <rect x="20" y="76" width="160" height="60" fill={I600} rx="4" />
                <text x="100" y="104" textAnchor="middle" style={svgNum({ fill: "#FFFFFF", fontSize: 14 })}>Staging</text>
                <text x="100" y="122" textAnchor="middle" style={svgLabel({ fill: "#E0E7FF" })}>stg_* models</text>
                <rect x="200" y="80" width="80" height="20" fill={I800} rx="3" />
                <text x="240" y="94" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>not_null</text>
                <rect x="290" y="80" width="60" height="20" fill={I800} rx="3" />
                <text x="320" y="94" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>unique</text>
                <text x="200" y="120" style={svgMute({ fontSize: 10 })}>Applied to all primary key columns and all non-nullable business keys</text>
                <rect x="620" y="80" width="340" height="20" fill={I600} rx="3" />
                <text x="640" y="94" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>All 64 staging models · every PK column</text>
                <text x="820" y="96"  style={svgMute({ fontSize: 11 })}>No null surrogate keys</text>
                <text x="820" y="112" style={svgMute({ fontSize: 11 })}>reach the intermediate layer</text>
                <line x1="20" y1="148" x2="1080" y2="148" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Intermediate row */}
                <rect x="20" y="160" width="160" height="60" fill={IDARK} stroke={I300} strokeWidth="1.5" rx="4" />
                <text x="100" y="188" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 14, fontWeight: 600, fill: "#DDDAFF" }}>Intermediate</text>
                <text x="100" y="206" textAnchor="middle" style={svgLabel({ fill: I300 })}>int_* models</text>
                <rect x="200" y="164" width="80"  height="20" fill={I800} rx="3" />
                <text x="240" y="178" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>not_null</text>
                <rect x="290" y="164" width="100" height="20" fill={I800} rx="3" />
                <text x="340" y="178" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>relationships</text>
                <text x="200" y="204" style={svgMute({ fontSize: 10 })}>FK integrity validated — every join key must exist in its referenced staging model</text>
                <rect x="620" y="164" width="220" height="20" fill={I600} rx="3" />
                <text x="640" y="178" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>FK columns · join key cardinality</text>
                <text x="820" y="180" style={svgMute({ fontSize: 11 })}>Referential integrity holds</text>
                <text x="820" y="196" style={svgMute({ fontSize: 11 })}>across all join relationships</text>
                <line x1="20" y1="232" x2="1080" y2="232" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Marts row */}
                <rect x="20" y="244" width="160" height="60" fill={GOLD} rx="4" />
                <text x="100" y="272" textAnchor="middle" style={svgNum({ fill: "#FFFFFF", fontSize: 14 })}>Marts</text>
                <text x="100" y="290" textAnchor="middle" style={svgLabel({ fill: "#FEE7D3" })}>fct_* · dim_*</text>
                <rect x="200" y="248" width="80"  height="20" fill={I800} rx="3" />
                <text x="240" y="262" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>not_null</text>
                <rect x="290" y="248" width="60"  height="20" fill={I800} rx="3" />
                <text x="320" y="262" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>unique</text>
                <rect x="360" y="248" width="110" height="20" fill={I800} rx="3" />
                <text x="415" y="262" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>accepted_values</text>
                <rect x="480" y="248" width="100" height="20" fill={WARM} rx="3" />
                <text x="530" y="262" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>relationships</text>
                <text x="200" y="288" style={svgMute({ fontSize: 10 })}>Full contract validation — the stable BI surface is the most thoroughly tested layer</text>
                <rect x="620" y="248" width="340" height="20" fill={GOLD} rx="3" />
                <text x="640" y="262" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>All mart columns · FK → dim integrity · enum fields</text>
                <text x="820" y="264" style={svgMute({ fontSize: 11 })}>BI consumers get only</text>
                <text x="820" y="280" style={svgMute({ fontSize: 11 })}>validated, documented data</text>
                <line x1="20" y1="316" x2="1080" y2="316" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* dbt docs note */}
                <rect x="20" y="334" width="1060" height="44" style={{ fill: svgBg }} stroke={I600} strokeWidth="1" rx="4" />
                <text x="40" y="354" style={{ fontFamily: "inherit", fontSize: 11, fill: I300, fontWeight: 600 }}>dbt docs generate</text>
                <text x="152" y="354" style={svgMute({ fontSize: 11 })}>— runs on every build. Every model, column, test, and relationship is captured in a browsable documentation site.</text>
                <text x="40"  y="370" style={svgMute({ fontSize: 11 })}>Source freshness checks, model lineage graphs, and test result history are all included in the generated output.</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 06 Deliverables ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>06 — Deliverables</span>
            <h2 style={sectionH2}>Everything a BI consumer and an engineering reviewer would expect to find.</h2>
            <p style={sectionLead}>The project is open-source and documented to certification standard. Every deliverable below is present in the repository and can be verified without running the pipeline locally.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderLeft: `3px solid ${I800}`, padding: "20px 24px", borderRadius: "0 var(--radius-md) var(--radius-md) 0", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <Icon className="shrink-0 mt-0.5" style={{ width: 22, height: 22, color: I600 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, color: "var(--text)" }}>{title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-body)", lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing callout ── */}
        <div style={{ position: "relative", background: IDARK, color: "#DDDAFF", padding: "56px 48px", borderRadius: "var(--radius-lg)", marginBottom: 0, borderLeft: `4px solid ${I600}` }}>
          <span style={{ fontSize: 96, position: "absolute", top: 8, left: 24, color: I600, opacity: 0.4, lineHeight: 1, fontWeight: 700 }}>&ldquo;</span>
          <p style={{ paddingLeft: 48, fontStyle: "italic", fontSize: 24, lineHeight: 1.4, fontWeight: 400, color: "#DDDAFF" }}>
            Analytics engineering is not about writing SQL — it is about building a{" "}
            <strong style={{ fontStyle: "normal", fontWeight: 700, color: "#C7D2FE" }}>reliable contract</strong>{" "}
            between raw data and the people who depend on it.
            Three layers. Automated tests. Generated documentation. No shortcuts.
          </p>
        </div>

      </div>
    </div>
  );
}
