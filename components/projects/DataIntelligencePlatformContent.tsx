"use client";

import Link from "next/link";
import { ArrowLeft, Search, FileText, Database, ClipboardCheck } from "lucide-react";

/* ── palette — matches the PM project palette used across CloudMigration & DWProgram ── */
const P800 = "#075985"; // --primary-800 — dark navy: SVG fills, backgrounds
const P600 = "#0284c7"; // --primary-600 — medium blue: structure, borders
const P500 = "#0ea5e9"; // --primary-500 — sky blue: highlights, section labels
const P300 = "#38bdf8"; // --primary-300 — light sky: softer fills, bars
const WARN = "#f59e0b"; // --warning     — amber: quarterly markers, QC gate
const SUCC = "#10b981"; // --success     — green: done / accepted state

/* ── shared style tokens ─────────────────────────────────────────────── */
const mono = { fontFamily: "var(--font-mono)" } as const;
const sectionNum: React.CSSProperties = {
  ...mono, fontSize: 12, color: "var(--primary-400)", fontWeight: 600,
  letterSpacing: "0.08em", marginBottom: 12, display: "block",
};
const sectionH2: React.CSSProperties = {
  fontWeight: 700, fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.15,
  letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 16,
};
const sectionLead: React.CSSProperties = {
  fontSize: 17, color: "var(--text-body)", maxWidth: 720, lineHeight: 1.55,
};
const infograph: React.CSSProperties = {
  background: "var(--bg-card)", border: "1px solid var(--line)",
  borderRadius: "var(--radius-lg)", padding: 40, margin: "32px 0", overflow: "hidden",
};
const infographLabel: React.CSSProperties = {
  ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em",
  color: P500, fontWeight: 600, marginBottom: 10, display: "block",
};
const infographTitle: React.CSSProperties = {
  fontSize: 22, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em",
};
const infographSub: React.CSSProperties = {
  fontSize: 14, color: "var(--text-body)", marginTop: 6,
};

/* SVG inline style helpers */
const svgText  = (extra?: React.CSSProperties) => ({ fontFamily: "inherit", fontSize: 11, fill: "var(--text)",      ...extra } as React.CSSProperties);
const svgMute  = (extra?: React.CSSProperties) => ({ fontFamily: "inherit", fontSize: 11, fill: "var(--text-body)", ...extra } as React.CSSProperties);
const svgLabel = (extra?: React.CSSProperties) => ({ ...mono, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase" as const, fill: "var(--text-muted)", ...extra });
const svgNum   = (extra?: React.CSSProperties) => ({ fontWeight: 600, ...extra } as React.CSSProperties);
const svgBg     = "var(--ink-3)";
const svgBorder = "var(--line)";

const deliverables = [
  {
    icon: Search,
    title: "Initial Diagnostic Report",
    desc: "Business + technical requirements, cloud cost estimates across AWS / GCP / Azure, architecture validation criteria, data dictionary, and a first modeling proposal.",
  },
  {
    icon: FileText,
    title: "System Specification",
    desc: "Final DL/DW requirements, access & governance policies, ingestion + processing architecture, initial infrastructure provisioning (buckets, clusters, VPNs, access controls).",
  },
  {
    icon: Database,
    title: "Data Lake Ingestion",
    desc: "Ingestion services for all three source systems, transformation routines, dimensional + fact models in the warehouse, and a stakeholder workshop to validate the approach.",
  },
  {
    icon: ClipboardCheck,
    title: "Acceptance Criteria (per deliverable)",
    desc: "Diagnostic → PM sign-off · System Spec → client approval · DL Ingestion → service in operation, validated against the spec.",
  },
];

export default function DataIntelligencePlatformContent() {
  return (
    <div className="min-h-screen pt-12 pb-20">
      <div className="container-custom">

        {/* ── Back ── */}
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
          <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: P600, fontWeight: 500, marginBottom: 28, display: "inline-block" }}>
            Project · Data Platform Build · 12 months
          </span>
          <h1 style={{ fontWeight: 700, fontSize: "clamp(36px, 5vw, 62px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 24 }}>
            Designing an end-to-end{" "}
            <em style={{ fontStyle: "italic", color: P500 }}>data intelligence platform</em>{" "}
            for a mid-market trading company.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--text-body)", maxWidth: 680, fontWeight: 400 }}>
            A one-year project to take a growing trading company from scattered operational systems to a unified data platform — Data Lake, Data Warehouse, BI, and predictive models, all built from scratch. This was the foundation engagement where I formalized the planning cadence and sprint discipline I still use today.
          </p>
        </section>

        {/* ── Meta strip ── */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "28px 0" }}
        >
          {[
            ["Role",         "Project Manager"],
            ["Duration",     "12 months"],
            ["Data Sources", "3 systems"],
            ["Stack Layers", "DL · DW · BI · ML"],
          ].map(([label, value]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", fontWeight: 500 }}>{label}</span>
              <span style={{ fontSize: 18, fontWeight: 600, color: "var(--text)" }}>{value}</span>
            </div>
          ))}
        </div>

        {/* ── Tech tags ── */}
        <div className="mb-14 flex flex-wrap gap-2">
          {["Project Management", "Scrum + Kanban", "Modern Data Stack", "Data Lake", "Data Warehouse", "BI & Predictive Modeling", "Cloud (AWS / GCP / Azure)"].map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* ══════════════════════════════════════════
            01 — Context
        ══════════════════════════════════════════ */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>01 — Context</span>
            <h2 style={sectionH2}>
              From scattered operational data to a{" "}
              <em style={{ fontStyle: "italic", color: P500 }}>single source of analytical truth</em>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>The starting position</h3>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: 16 }}>
                The client — a mid-market trading company — was running their business on three operational systems that didn&apos;t talk to each other. Reports were assembled manually, leadership decisions ran on stale numbers, and there was no way to look forward: no forecasting, no demand modeling, no predictive view of the business.
              </p>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7 }}>
                The brief was deliberately ambitious. Build the entire analytical stack — ingestion, lake, warehouse, BI, predictive models — inside a single 12-month engagement, while delivering visible value along the way so leadership could feel the program working before it finished.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>The challenge</h3>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: 16 }}>
                <strong style={{ color: "var(--text)" }}>One year. Four phases. Continuous value.</strong> Pure waterfall would have given leadership nothing to look at for nine months. Pure agile without a plan would have lost the architectural coherence the platform needed.
              </p>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7 }}>
                The answer was a hybrid: a high-level annual plan locking the macro phases and milestones, combined with two-week sprint execution inside each phase. Strategy at the top. Iteration at the bottom. The plan you&apos;ll see below is exactly that — and it&apos;s the planning model I still anchor delivery work to today.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            02 — Annual Lifecycle
        ══════════════════════════════════════════ */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>02 — Annual Lifecycle</span>
            <h2 style={sectionH2}>
              Four quarters. <em style={{ fontStyle: "italic", color: P500 }}>Four phase shifts</em>. One continuous build.
            </h2>
            <p style={sectionLead}>
              Each quarter has its own dominant phase, but the transitions are soft — planning continues into execution, monitoring begins before deployment ends. The boundaries below show emphasis, not isolation.
            </p>
          </div>

          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 01 · Annual Timeline</span>
              <div style={infographTitle}>Four phases mapped across the 12-month engagement</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 400" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                {/* Quarter labels */}
                <text x="170" y="22" textAnchor="middle" style={svgLabel()}>Quarter 1</text>
                <text x="400" y="22" textAnchor="middle" style={svgLabel()}>Quarter 2</text>
                <text x="630" y="22" textAnchor="middle" style={svgLabel()}>Quarter 3</text>
                <text x="860" y="22" textAnchor="middle" style={svgLabel()}>Quarter 4</text>
                <line x1="60" y1="34" x2="1060" y2="34" stroke={svgBorder} strokeWidth="1"/>

                {/* Endpoints */}
                <circle cx="60"   cy="100" r="10" fill={P800}/>
                <text x="60"   y="78" textAnchor="middle" style={svgLabel({ fill: P500, fontWeight: 600 })}>Start</text>
                <circle cx="1060" cy="100" r="10" fill={P800}/>
                <text x="1060" y="78" textAnchor="middle" style={svgLabel({ fill: P500, fontWeight: 600 })}>Close</text>

                {/* Spine */}
                <line x1="70" y1="100" x2="1050" y2="100" stroke={P600} strokeWidth="2"/>

                {/* Phase nodes */}
                {[170, 400, 630, 860].map((cx, i) => (
                  <g key={cx}>
                    <circle cx={cx} cy="100" r="14" fill={svgBg} stroke={P600} strokeWidth="2.5"/>
                    <text x={cx} y="105" textAnchor="middle" style={svgNum({ fontSize: 11, fill: P500 })}>0{i + 1}</text>
                  </g>
                ))}

                {/* Connector lines down */}
                {[170, 400, 630, 860].map(cx => (
                  <line key={cx} x1={cx} y1="118" x2={cx} y2="148" stroke={P300} strokeWidth="1.5"/>
                ))}

                {/* Phase boxes */}
                {[
                  { x: 70,  cx: 170, title: "Planning",         items: ["• Business & technical reqs", "• Cloud provider selection", "• Architecture for DL/DW + BI", "• Access & governance policy", "• Data dictionary + modeling"] },
                  { x: 300, cx: 400, title: "MVP Execution",    items: ["• Data Lake ingestion", "• BI MVP build", "• DW implementation + tests", "• Validation + BI feedback", "• Predictive model setup"] },
                  { x: 530, cx: 630, title: "Deploy & Test",    items: ["• Predictive modeling tests", "• Final predictive deploy", "• End-to-end integration tests"] },
                  { x: 760, cx: 860, title: "Monitor & Report", items: ["• Solution monitoring", "• Training & enablement", "• Feature expansion", "• Final report & sign-off"] },
                ].map(({ x, cx, title, items }) => (
                  <g key={cx}>
                    <rect x={x} y="155" width="200" height="200" fill={svgBg} stroke={P600} strokeWidth="1.5" rx="4"/>
                    <text x={cx} y="180" textAnchor="middle" style={svgText({ fontWeight: 600, fontSize: 13 })}>{title}</text>
                    {items.map((item, idx) => (
                      <text key={idx} x={x + 15} y={210 + idx * 17} style={svgMute({ fontSize: 11 })}>{item}</text>
                    ))}
                  </g>
                ))}

                {/* Phase color bars — blues across the spectrum */}
                <rect x="70"  y="383" width="200" height="3" fill={P800}/>
                <rect x="300" y="383" width="200" height="3" fill={P600}/>
                <rect x="530" y="383" width="200" height="3" fill={P500}/>
                <rect x="760" y="383" width="200" height="3" fill={P300}/>
              </svg>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            03 — Quarterly Goals
        ══════════════════════════════════════════ */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>03 — Quarterly Goals</span>
            <h2 style={sectionH2}>
              One concrete milestone per quarter,{" "}
              <em style={{ fontStyle: "italic", color: P500 }}>visible from outside the team</em>.
            </h2>
            <p style={sectionLead}>
              Internal velocity is not a metric the client can feel. Every quarter therefore had to end on something demonstrable — something a stakeholder could see, click, or query.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { q: "Q1 · Foundation", title: "Data flowing into the lake",     desc: "Diagnostic + system spec complete; cloud provider selected; first ingestion pipelines live with data landing in the raw layer.", milestone: "Data in raw layer" },
              { q: "Q2 · Insight",    title: "BI MVP, DW operational",          desc: "Warehouse built and validated; BI MVP shipped to business users; predictive modeling foundations laid for Q3.",             milestone: "BI MVP delivered" },
              { q: "Q3 · Predict",   title: "Predictive solution live",         desc: "Modeling validated, integrated tests passed, predictive solution deployed into production with monitoring.",                  milestone: "Predictive solution shipped" },
              { q: "Q4 · Sustain",   title: "Operational + opportunity report", desc: "Solution in steady-state monitoring; team trained; expansion roadmap delivered; two new features contracted.",              milestone: "Opportunities report delivered" },
            ].map(({ q, title, desc, milestone }) => (
              <div
                key={q}
                style={{
                  background: "var(--bg-card)", border: "1px solid var(--line)",
                  borderLeft: `3px solid ${P600}`, borderRadius: "var(--radius-md)", padding: "28px 24px",
                }}
              >
                <div style={{ ...mono, fontSize: 11, color: WARN, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: 8 }}>{q}</div>
                <h3 style={{ fontWeight: 600, fontSize: 18, color: "var(--text)", lineHeight: 1.25, marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-body)", lineHeight: 1.55, marginBottom: 14 }}>{desc}</p>
                <div style={{ ...mono, fontSize: 13, fontStyle: "italic", color: P500, paddingTop: 12, borderTop: "1px dashed var(--line)" }}>
                  ★ {milestone}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            04 — Backlog Model
        ══════════════════════════════════════════ */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>04 — Backlog Model</span>
            <h2 style={sectionH2}>
              Three levels of detail.{" "}
              <em style={{ fontStyle: "italic", color: P500 }}>Each one earns its place</em>.
            </h2>
            <p style={sectionLead}>
              Coarse-grained items are for the client and the contract. Fine-grained items are for the team and the sprint. The middle layer is where they meet — and where the conversation about scope actually happens.
            </p>
          </div>

          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 02 · Backlog Hierarchy</span>
              <div style={infographTitle}>Deliverable → Activity → Task</div>
              <div style={infographSub}>The top two levels live in the project backlog. The bottom level is what enters a sprint.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 400" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>

                {/* Left panels */}
                <rect x="0" y="40"  width="180" height="100" fill={svgBg} stroke={svgBorder} rx="4"/>
                <text x="20" y="68"  style={svgLabel({ fill: P500, fontWeight: 600 })}>Project Backlog</text>
                <text x="20" y="92"  style={svgMute({ fontSize: 11 })}>Deliverables &amp; activities</text>
                <text x="20" y="108" style={svgMute({ fontSize: 11 })}>refined with the team —</text>
                <text x="20" y="124" style={svgMute({ fontSize: 11 })}>the contractual outline.</text>

                <rect x="0" y="260" width="180" height="100" fill={svgBg} stroke={WARN} rx="4"/>
                <text x="20" y="288" style={svgLabel({ fill: WARN, fontWeight: 600 })}>Sprint Backlog</text>
                <text x="20" y="312" style={svgMute({ fontSize: 11 })}>Tasks the team commits</text>
                <text x="20" y="328" style={svgMute({ fontSize: 11 })}>to inside a two-week</text>
                <text x="20" y="344" style={svgMute({ fontSize: 11 })}>sprint window.</text>

                {/* Divider */}
                <line x1="220" y1="220" x2="1080" y2="220" stroke={P300} strokeWidth="1" strokeDasharray="4 4"/>

                {/* Deliverable */}
                <ellipse cx="620" cy="70" rx="120" ry="34" fill={P800}/>
                <text x="620" y="68" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 14 })}>Deliverable</text>
                <text x="620" y="86" textAnchor="middle" style={svgMute({ fontSize: 10, fontStyle: "italic", fill: P300 })}>Outcome the client receives</text>

                {/* Lines to activities */}
                <line x1="560" y1="104" x2="380" y2="148" stroke={P600} strokeWidth="1.5"/>
                <line x1="680" y1="104" x2="860" y2="148" stroke={P600} strokeWidth="1.5"/>

                {/* Activities */}
                {[{ cx: 380, label: "Activity 1" }, { cx: 860, label: "Activity 2" }].map(({ cx, label }) => (
                  <g key={cx}>
                    <ellipse cx={cx} cy="170" rx="105" ry="28" fill={P600}/>
                    <text x={cx} y="168" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>{label}</text>
                    <text x={cx} y="184" textAnchor="middle" style={svgMute({ fontSize: 10, fontStyle: "italic", fill: P300 })}>Body of work</text>
                  </g>
                ))}

                {/* Lines to tasks */}
                {[[320, 280], [440, 470], [800, 770], [920, 950]].map(([x1, x2], i) => (
                  <line key={i} x1={x1} y1="198" x2={x2} y2="240" stroke={WARN} strokeWidth="1.5"/>
                ))}

                {/* Tasks */}
                {[{ x: 220, label: "Task 1" }, { x: 410, label: "Task 2" }, { x: 710, label: "Task 3" }, { x: 890, label: "Task 4" }].map(({ x, label }) => (
                  <g key={x}>
                    <rect x={x} y="245" width="120" height="44" fill={WARN} rx="22"/>
                    <text x={x + 60} y="272" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 12 })}>{label}</text>
                  </g>
                ))}

                {/* Definition strip */}
                <text x="220" y="320" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Definition at each level</text>
                <text x="220" y="342" style={svgMute({ fontSize: 11 })}>
                  <tspan style={{ fontWeight: 600, fill: P500 }}>Deliverable. </tspan>What the client signs off — the contractual unit.
                </text>
                <text x="220" y="360" style={svgMute({ fontSize: 11 })}>
                  <tspan style={{ fontWeight: 600, fill: P500 }}>Activity. </tspan>A body of work inside a deliverable; how the team groups effort.
                </text>
                <text x="220" y="378" style={svgMute({ fontSize: 11 })}>
                  <tspan style={{ fontWeight: 600, fill: WARN }}>Task. </tspan>An atomic unit a team member can absorb inside a sprint.
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            05 — Q1 Deliverables
        ══════════════════════════════════════════ */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>05 — Q1 Deliverables</span>
            <h2 style={sectionH2}>
              Three deliverables that{" "}
              <em style={{ fontStyle: "italic", color: P500 }}>set every downstream decision</em>.
            </h2>
            <p style={sectionLead}>
              Q1 is the most consequential quarter of the project — not because it ships the most, but because every Q2–Q4 decision references the artifacts produced here. Get these wrong and the rest of the year compounds the error.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: "var(--bg-card)", border: "1px solid var(--line)",
                  borderLeft: `3px solid ${P500}`,
                  borderRadius: `0 var(--radius-md) var(--radius-md) 0`,
                  padding: "20px 24px", display: "flex", gap: 14, alignItems: "flex-start",
                }}
              >
                <Icon size={22} style={{ color: P500, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text)", marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-body)", lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            06 — Sprint 1 Resource Allocation
        ══════════════════════════════════════════ */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>06 — Sprint 1 · Resource Allocation</span>
            <h2 style={sectionH2}>
              Sprint one was built{" "}
              <em style={{ fontStyle: "italic", color: P500 }}>tight on purpose</em>.
            </h2>
            <p style={sectionLead}>
              A first sprint is also a calibration exercise. I planned Sprint 1 with no slack to measure real team capacity — then absorbed the learning into Sprint 2 onwards. The numbers below are the planned envelope; the lesson was always going to be in the variance.
            </p>
          </div>

          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 03 · Sprint 1 Allocation</span>
              <div style={infographTitle}>Hours per role across activities (2-week sprint)</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 420" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>

                {/* Column headers */}
                <text x="380"  y="22" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Activity</text>
                <text x="730"  y="22" textAnchor="middle" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Data Eng. (h)</text>
                <text x="870"  y="22" textAnchor="middle" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Data Sci. (h)</text>
                <text x="1010" y="22" textAnchor="middle" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>PM (h)</text>
                <line x1="20" y1="34" x2="1080" y2="34" stroke="var(--text)" strokeWidth="1"/>

                {/* Row 01 */}
                <circle cx="40" cy="74" r="14" fill={P800}/>
                <text x="40" y="79" textAnchor="middle" style={svgNum({ fontSize: 11, fill: "#FFFFFF" })}>01</text>
                <text x="70" y="68" style={svgText({ fontWeight: 600 })}>Business requirements</text>
                <text x="70" y="84" style={svgMute({ fontSize: 11 })}>Prep + stakeholder interviews</text>
                <rect x="660" y="60" width="35" height="28" fill={P300} rx="2"/>
                <text x="712" y="79" style={svgText({ fontSize: 13, fontWeight: 600 })}>5</text>
                <rect x="800" y="60" width="140" height="28" fill={P800} rx="2"/>
                <text x="950" y="79" style={svgText({ fontSize: 13, fontWeight: 600 })}>20</text>
                <text x="1010" y="79" textAnchor="middle" style={svgMute({ fontSize: 13 })}>—</text>
                <line x1="20" y1="105" x2="1080" y2="105" stroke={svgBorder} strokeWidth="1"/>

                {/* Row 02 */}
                <circle cx="40" cy="135" r="14" fill={P800}/>
                <text x="40" y="140" textAnchor="middle" style={svgNum({ fontSize: 11, fill: "#FFFFFF" })}>02</text>
                <text x="70" y="129" style={svgText({ fontWeight: 600 })}>Technical requirements</text>
                <text x="70" y="145" style={svgMute({ fontSize: 11 })}>Prep + tech-team interviews</text>
                <rect x="660" y="121" width="35" height="28" fill={P300} rx="2"/>
                <text x="712" y="140" style={svgText({ fontSize: 13, fontWeight: 600 })}>5</text>
                <rect x="800" y="121" width="140" height="28" fill={P800} rx="2"/>
                <text x="950" y="140" style={svgText({ fontSize: 13, fontWeight: 600 })}>20</text>
                <text x="1010" y="140" textAnchor="middle" style={svgMute({ fontSize: 13 })}>—</text>
                <line x1="20" y1="166" x2="1080" y2="166" stroke={svgBorder} strokeWidth="1"/>

                {/* Row 03 */}
                <circle cx="40" cy="196" r="14" fill={P800}/>
                <text x="40" y="201" textAnchor="middle" style={svgNum({ fontSize: 11, fill: "#FFFFFF" })}>03</text>
                <text x="70" y="190" style={svgText({ fontWeight: 600 })}>Cloud cost &amp; provider selection</text>
                <text x="70" y="206" style={svgMute({ fontSize: 11 })}>Pricing study + proposal compilation</text>
                <rect x="660" y="182" width="70" height="28" fill={P300} rx="2"/>
                <text x="745" y="201" style={svgText({ fontSize: 13, fontWeight: 600 })}>10</text>
                <text x="870"  y="201" textAnchor="middle" style={svgMute({ fontSize: 13 })}>—</text>
                <text x="1010" y="201" textAnchor="middle" style={svgMute({ fontSize: 13 })}>—</text>
                <line x1="20" y1="227" x2="1080" y2="227" stroke={svgBorder} strokeWidth="1"/>

                {/* Row 04 — PM */}
                <circle cx="40" cy="257" r="14" fill={WARN}/>
                <text x="40" y="262" textAnchor="middle" style={svgNum({ fontSize: 11, fill: "#FFFFFF" })}>04</text>
                <text x="70" y="251" style={svgText({ fontWeight: 600 })}>Project kick-off (PM)</text>
                <text x="70" y="267" style={svgMute({ fontSize: 11 })}>Template, comms strategy, schedule</text>
                <text x="712"  y="262" textAnchor="middle" style={svgMute({ fontSize: 13 })}>—</text>
                <text x="870"  y="262" textAnchor="middle" style={svgMute({ fontSize: 13 })}>—</text>
                <rect x="960" y="243" width="70" height="28" fill={WARN} rx="2"/>
                <text x="1010" y="262" textAnchor="middle" style={svgText({ fontSize: 13, fontWeight: 600, fill: "#FFFFFF" })}>10</text>
                <line x1="20" y1="288" x2="1080" y2="288" stroke="var(--text)" strokeWidth="1"/>

                {/* Totals */}
                <text x="70" y="318" style={svgText({ fontWeight: 600, fontSize: 13 })}>Sprint 1 totals</text>
                <text x="70" y="334" style={svgMute({ fontSize: 11, fontStyle: "italic" })}>planned with no slack, by design</text>
                <text x="712"  y="325" textAnchor="middle" style={svgNum({ fontSize: 24, fill: P500 })}>20<tspan style={{ fontSize: 14, fill: "var(--text-body)" }}>h</tspan></text>
                <text x="870"  y="325" textAnchor="middle" style={svgNum({ fontSize: 24, fill: P500 })}>40<tspan style={{ fontSize: 14, fill: "var(--text-body)" }}>h</tspan></text>
                <text x="1010" y="325" textAnchor="middle" style={svgNum({ fontSize: 24, fill: WARN })}>10<tspan style={{ fontSize: 14, fill: "var(--text-body)" }}>h</tspan></text>

                {/* Footer annotation */}
                <rect x="20" y="360" width="1060" height="50" fill={svgBg} stroke={svgBorder} rx="4"/>
                <text x="40" y="382" style={svgText({ fontSize: 12, fontWeight: 600, fill: P500 })}>Sprint 1 = 70h total committed across three roles, no buffer.</text>
                <text x="40" y="400" style={svgMute({ fontSize: 11, fontStyle: "italic" })}>The plan was to measure delivered vs. committed — and feed the gap into Sprint 2&apos;s capacity envelope. This calibration step is now standard in every engagement I lead.</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            07 — Sprint 1 Daily Plan
        ══════════════════════════════════════════ */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>07 — Sprint 1 · Daily Plan</span>
            <h2 style={sectionH2}>
              What the team actually{" "}
              <em style={{ fontStyle: "italic", color: P500 }}>does on each day</em>.
            </h2>
            <p style={sectionLead}>
              A weekly view that shows the rhythm: prep early in the week, stakeholder time mid-week, group discussion and documentation late in the week. Two weeks of this gets the foundational interviews and cloud proposal done end-to-end.
            </p>
          </div>

          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 04 · Two-Week Sprint Calendar</span>
              <div style={infographTitle}>Daily activity by role</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 460" style={{ width: "100%", minWidth: 720, height: "auto", display: "block" }}>

                {/* Week headers */}
                <rect x="80" y="0" width="480" height="32" fill={P800} rx="3"/>
                <text x="320" y="22" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>WEEK 1</text>
                <rect x="565" y="0" width="480" height="32" fill={P800} rx="3"/>
                <text x="805" y="22" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>WEEK 2</text>

                {/* Role sub-headers */}
                {[
                  { x: 160,  label: "Data Sci." },
                  { x: 320,  label: "Data Eng." },
                  { x: 480,  label: "PM"        },
                  { x: 645,  label: "Data Sci." },
                  { x: 805,  label: "Data Eng." },
                  { x: 965,  label: "PM"        },
                ].map(({ x, label }) => (
                  <text key={x} x={x} y="54" textAnchor="middle" style={svgLabel({ fill: P500, fontWeight: 600 })}>{label}</text>
                ))}

                {/* Mon – Wed rows */}
                {[
                  {
                    y: 70, dayY: 92, label: "Mon",
                    cells: [
                      { x: 80,  text: "Prep biz interview",  border: P600 },
                      { x: 240, text: "Cloud cost research",  border: WARN },
                      { x: 400, text: "Template adaptation",  border: P800 },
                      { x: 565, text: "Prep tech interview",  border: P600 },
                      { x: 725, text: "Cloud cost research",  border: WARN },
                      { x: 885, text: "Template adaptation",  border: P800 },
                    ],
                  },
                  {
                    y: 115, dayY: 137, label: "Tue",
                    cells: [
                      { x: 80,  text: "Prep biz interview",  border: P600 },
                      { x: 240, text: "Cloud cost research",  border: WARN },
                      { x: 400, text: "Comms strategy",       border: P800 },
                      { x: 565, text: "Prep tech interview",  border: P600 },
                      { x: 725, text: "Cloud cost research",  border: WARN },
                      { x: 885, text: "Comms strategy",       border: P800 },
                    ],
                  },
                  {
                    y: 160, dayY: 182, label: "Wed",
                    cells: [
                      { x: 80,  text: "Prep biz interview",   border: P600 },
                      { x: 240, text: "Cloud proposal draft",  border: WARN },
                      { x: 400, text: "Project schedule",      border: P800 },
                      { x: 565, text: "Prep tech interview",   border: P600 },
                      { x: 725, text: "Cloud proposal draft",  border: WARN },
                      { x: 885, text: "Project schedule",      border: P800 },
                    ],
                  },
                ].map(({ y, dayY, label, cells }) => (
                  <g key={label}>
                    <text x="20" y={dayY} style={svgText({ fontWeight: 600 })}>{label}</text>
                    {cells.map(({ x, text, border }) => (
                      <g key={x}>
                        <rect x={x} y={y} width="160" height="36" fill={svgBg} stroke={border} rx="3"/>
                        <text x={x + 80} y={y + 22} textAnchor="middle" style={svgMute({ fontSize: 10 })}>{text}</text>
                      </g>
                    ))}
                  </g>
                ))}

                {/* Thu — stakeholder day */}
                <text x="20" y="227" style={svgText({ fontWeight: 600, fill: P500 })}>Thu</text>
                {[
                  { x: 80,  text: "Business interview" },
                  { x: 240, text: "Business interview" },
                  { x: 400, text: "Business interview" },
                  { x: 565, text: "Tech interview"     },
                  { x: 725, text: "Tech interview"     },
                  { x: 885, text: "Tech interview"     },
                ].map(({ x, text }) => (
                  <g key={x}>
                    <rect x={x} y="205" width="160" height="36" fill={svgBg} stroke={P500} strokeWidth="1.5" rx="3"/>
                    <text x={x + 80} y="227" textAnchor="middle" style={svgText({ fontSize: 10, fontWeight: 600, fill: P500 })}>{text}</text>
                  </g>
                ))}
                {/* Group discussion bands */}
                <rect x="80"  y="250" width="480" height="28" fill={svgBg} stroke={P300} strokeDasharray="3 2" rx="3"/>
                <text x="320" y="268" textAnchor="middle" style={svgMute({ fontSize: 10, fontStyle: "italic", fill: P300 })}>Group discussion · share findings across team</text>
                <rect x="565" y="250" width="480" height="28" fill={svgBg} stroke={P300} strokeDasharray="3 2" rx="3"/>
                <text x="805" y="268" textAnchor="middle" style={svgMute({ fontSize: 10, fontStyle: "italic", fill: P300 })}>Group discussion · share findings across team</text>

                {/* Fri — documentation */}
                <text x="20" y="307" style={svgText({ fontWeight: 600 })}>Fri</text>
                <rect x="80"  y="290" width="480" height="36" fill={svgBg} stroke={WARN} rx="3"/>
                <text x="320" y="312" textAnchor="middle" style={svgText({ fontSize: 11, fontWeight: 600 })}>Documentation of results · all roles</text>
                <rect x="565" y="290" width="480" height="36" fill={svgBg} stroke={WARN} rx="3"/>
                <text x="805" y="312" textAnchor="middle" style={svgText({ fontSize: 11, fontWeight: 600 })}>Documentation of results · all roles</text>

                {/* Legend */}
                <text x="20" y="365" style={svgLabel({ fill: "var(--text)", fontWeight: 600 })}>Legend</text>
                {[
                  { x: 20,  stroke: P600,              label: "Prep · research"    },
                  { x: 180, stroke: WARN,               label: "Proposal drafting"  },
                  { x: 340, stroke: P800,               label: "PM activities"      },
                  { x: 480, stroke: P500, sw: "1.5",   label: "Stakeholder time"   },
                  { x: 630, stroke: P300, dash: "3 2", label: "Team sync"          },
                ].map(({ x, stroke, label, sw, dash }) => (
                  <g key={x}>
                    <rect x={x} y="379" width="18" height="14" fill={svgBg} stroke={stroke} strokeWidth={sw ?? "1"} strokeDasharray={dash}/>
                    <text x={x + 26} y="391" style={svgMute({ fontSize: 11 })}>{label}</text>
                  </g>
                ))}

                <text x="20" y="430" style={svgMute({ fontSize: 11, fontStyle: "italic" })}>
                  Scrum ceremonies (daily standup, planning, review, retro) sit outside this view — they&apos;re owned by the Scrum Master, not budgeted into role hours.
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            08 — Kanban Workflow
        ══════════════════════════════════════════ */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>08 — Kanban Workflow</span>
            <h2 style={sectionH2}>
              From the project backlog to &ldquo;done&rdquo; —{" "}
              <em style={{ fontStyle: "italic", color: P500 }}>six columns, one flow</em>.
            </h2>
            <p style={sectionLead}>
              The board mirrors the backlog hierarchy. Deliverables and activities sit on the left as a roadmap; refined tasks flow rightward through the sprint columns. The Review column is the quality control mechanism — every task gets a second pair of eyes before it can be marked complete.
            </p>
          </div>

          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 05 · Kanban Board</span>
              <div style={infographTitle}>Six-column flow with quality gate</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 360" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                <defs>
                  <marker id="dip-kanban-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={P500}/>
                  </marker>
                </defs>

                {/* Roadmap zone */}
                <rect x="20" y="20" width="320" height="260" fill={svgBg} stroke={P600} strokeWidth="1.5" rx="4"/>
                <text x="35" y="44" style={svgLabel({ fill: P500, fontWeight: 600 })}>Roadmap</text>

                {/* Project Backlog column */}
                <rect x="35" y="60" width="140" height="28" fill={P800} rx="2"/>
                <text x="105" y="78" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontSize: 11, fontWeight: 600 })}>Project Backlog</text>
                {[
                  { label: "Initial Diagnostic",    hi: true  },
                  { label: "System Specification",  hi: true  },
                  { label: "DL Ingestion",           hi: true  },
                  { label: "+ activities (refined)", hi: false },
                ].map(({ label, hi }, i) => (
                  <g key={i}>
                    <rect x="35" y={100 + i * 30} width="140" height="24" fill={svgBg} stroke={P800} rx="2" opacity={hi ? 1 : 0.5}/>
                    <text x="43" y={116 + i * 30} style={svgText({ fontSize: 10, fontWeight: hi ? 600 : 400, fill: hi ? P300 : "var(--text-muted)" })}>{label}</text>
                  </g>
                ))}

                {/* Sprint Backlog column */}
                <rect x="185" y="60" width="140" height="28" fill={WARN} rx="2"/>
                <text x="255" y="78" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontSize: 11, fontWeight: 600 })}>Sprint Backlog</text>
                {["Prep biz interviews", "Biz interviews", "Cloud cost research", "Cloud proposal", "Kick-off comms plan"].map((label, i) => (
                  <g key={i}>
                    <rect x="185" y={100 + i * 30} width="140" height="24" fill={svgBg} stroke={WARN} rx="2"/>
                    <text x="193" y={116 + i * 30} style={svgMute({ fontSize: 10 })}>{label}</text>
                  </g>
                ))}

                {/* Zone separator arrow */}
                <line x1="345" y1="200" x2="363" y2="200" stroke={P500} strokeWidth="2" markerEnd="url(#dip-kanban-arrow)"/>

                {/* Sprint Execution zone */}
                <rect x="375" y="20" width="705" height="260" fill={svgBg} stroke={svgBorder} strokeWidth="1" rx="4"/>
                <text x="390" y="44" style={svgLabel({ fill: P500, fontWeight: 600 })}>Sprint Execution</text>

                {/* To Do */}
                <rect x="390" y="60" width="155" height="28" fill={P300} rx="2"/>
                <text x="467" y="78" textAnchor="middle" style={svgText({ fill: P800, fontSize: 11, fontWeight: 600 })}>To Do</text>
                {[
                  { label: "Task: pull cost data",    sub: "DE · 2h"  },
                  { label: "Task: define interview Q", sub: "DS · 15h" },
                ].map(({ label, sub }, i) => (
                  <g key={i}>
                    <rect x="390" y={100 + i * 48} width="155" height="40" fill={svgBg} stroke={P300} rx="2"/>
                    <text x="400" y={118 + i * 48} style={svgMute({ fontSize: 10 })}>{label}</text>
                    <text x="400" y={132 + i * 48} style={svgMute({ fontSize: 9 })}>{sub}</text>
                  </g>
                ))}

                {/* In Progress */}
                <rect x="555" y="60" width="155" height="28" fill={P600} rx="2"/>
                <text x="632" y="78" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontSize: 11, fontWeight: 600 })}>In Progress</text>
                {[
                  { label: "Task: draft cloud spec",  sub: "DE · 4h · in-flight"  },
                  { label: "Task: schedule biz mtg",  sub: "DS · 5h · in-flight"  },
                ].map(({ label, sub }, i) => (
                  <g key={i}>
                    <rect x="555" y={100 + i * 48} width="155" height="40" fill={svgBg} stroke={P600} strokeWidth="1.5" rx="2"/>
                    <text x="565" y={118 + i * 48} style={svgMute({ fontSize: 10 })}>{label}</text>
                    <text x="565" y={132 + i * 48} style={svgMute({ fontSize: 9 })}>{sub}</text>
                  </g>
                ))}

                {/* Review (QC) — amber quality gate, consistent with CloudMigration WARN usage */}
                <rect x="720" y="60" width="155" height="28" fill={WARN} rx="2"/>
                <text x="797" y="78" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontSize: 11, fontWeight: 600 })}>Review (QC)</text>
                <rect x="720" y="100" width="155" height="40" fill={svgBg} stroke={WARN} strokeWidth="1.5" rx="2"/>
                <text x="730" y="118" style={svgMute({ fontSize: 10 })}>Task: cost research v1</text>
                <text x="730" y="132" style={{ ...mono, fontSize: 9, fill: WARN, fontWeight: 600 } as React.CSSProperties}>DE · awaiting tech-ref review</text>

                {/* Done */}
                <rect x="885" y="60" width="180" height="28" fill={SUCC} rx="2"/>
                <text x="975" y="78" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontSize: 11, fontWeight: 600 })}>Done</text>
                {[
                  { label: "Template adaptation", sub: "✓ PM · accepted" },
                  { label: "Comms strategy v1",   sub: "✓ PM · accepted" },
                ].map(({ label, sub }, i) => (
                  <g key={i}>
                    <rect x="885" y={100 + i * 48} width="180" height="40" fill={svgBg} stroke={SUCC} rx="2"/>
                    <text x="895" y={118 + i * 48} style={{ ...svgMute({ fontSize: 10 }), textDecoration: "line-through" }}>{label}</text>
                    <text x="895" y={132 + i * 48} style={svgMute({ fontSize: 9, fill: SUCC, fontWeight: 600 })}>{sub}</text>
                  </g>
                ))}

                {/* Bottom annotation */}
                <rect x="20" y="295" width="1060" height="50" fill={svgBg} stroke={svgBorder} rx="4"/>
                <text x="35" y="317" style={svgText({ fontSize: 12, fontWeight: 600, fill: P500 })}>Two acceptance layers — Definition of Done (internal) + Acceptance Criteria (client).</text>
                <text x="35" y="335" style={svgMute({ fontSize: 11, fontStyle: "italic" })}>DoD speeds up internal review; AC ensures the client gets exactly what the contract said they would.</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            09 — Foundation Established
        ══════════════════════════════════════════ */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>09 — Foundation Established</span>
            <h2 style={sectionH2}>
              What this project still gives me,{" "}
              <em style={{ fontStyle: "italic", color: P500 }}>years later</em>.
            </h2>
            <p style={sectionLead}>
              Looking back, the value of this engagement wasn&apos;t only the platform I shipped — it was the planning model I built doing it. The patterns below are still the ones I anchor delivery work to today.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "var(--ink-3)", borderLeft: `3px solid ${P600}`, borderRadius: `0 var(--radius-md) var(--radius-md) 0`, padding: "28px 32px" }}>
              <div style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: P500, fontWeight: 600, marginBottom: 14 }}>Carried forward</div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 14, fontStyle: "italic", lineHeight: 1.3 }}>1. Three-level backlog as the universal translator</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text-body)" }}>
                The Deliverable / Activity / Task hierarchy works because it speaks to three different audiences at once. The Deliverable layer is the contract — what the client signs off. The Activity layer is the conversation — where scope and effort actually get negotiated with the team. The Task layer is the sprint — what gets done this week. Most delivery friction I&apos;ve seen since comes from teams collapsing two of these into one.
              </p>
            </div>

            <div style={{ background: "var(--ink-3)", borderLeft: `3px solid ${P600}`, borderRadius: `0 var(--radius-md) var(--radius-md) 0`, padding: "28px 32px" }}>
              <div style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: P500, fontWeight: 600, marginBottom: 14 }}>Carried forward</div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 14, fontStyle: "italic", lineHeight: 1.3 }}>2. First sprint as a calibration, not a commitment</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text-body)" }}>
                Sprint 1 was deliberately planned without slack — not because I expected the team to hit it perfectly, but because I needed to measure the gap. Velocity is empirical, and you only get a real number by running a tight first iteration and watching what actually lands. Every engagement I&apos;ve led since starts the same way.
              </p>
            </div>

            <div style={{ background: "var(--ink-3)", borderLeft: `3px solid ${P600}`, borderRadius: `0 var(--radius-md) var(--radius-md) 0`, padding: "28px 32px" }}>
              <div style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: P500, fontWeight: 600, marginBottom: 14 }}>Carried forward</div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 14, fontStyle: "italic", lineHeight: 1.3 }}>3. Quarterly milestones that a non-technical stakeholder can verify</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text-body)" }}>
                &ldquo;Velocity is up&rdquo; is not a milestone. &ldquo;Data is in the raw layer&rdquo; is. Every quarter ended on something the sponsor could see or touch — a working dashboard, a deployed model, a signed report. The discipline of writing the milestone before designing the work has saved more programs from drift than any process artifact I&apos;ve used since.
              </p>
            </div>
          </div>
        </section>

        {/* ── Closing Callout ── */}
        <section style={{ paddingBottom: 40 }}>
          <div
            style={{
              background: P800,
              borderLeft: `4px solid ${WARN}`,
              borderRadius: "var(--radius-md)",
              padding: "48px 40px 48px 72px",
              position: "relative",
            }}
          >
            <span
              style={{
                fontSize: 96, position: "absolute", top: 8, left: 18,
                color: WARN, opacity: 0.4, lineHeight: 1, fontFamily: "Georgia, serif",
              }}
            >
              &ldquo;
            </span>
            <p style={{ fontSize: 22, lineHeight: 1.5, fontStyle: "italic", color: P300 }}>
              The platform was the deliverable.{" "}
              The{" "}
              <strong style={{ color: "#fbbf24", fontStyle: "normal", fontWeight: 600 }}>planning model</strong>{" "}
              was the asset. Every delivery engagement I&apos;ve led since has been a variation on the framework this project forced me to commit to paper.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
