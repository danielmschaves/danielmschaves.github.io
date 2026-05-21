"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Calendar, DollarSign, AlertTriangle, Radio, Users, BookOpen, Database } from "lucide-react";

/* ── portfolio palette ───────────────────────────────────────────────── */
const P800 = "#075985";  // --primary-800 — dark navy structure
const P500 = "#0ea5e9";  // --primary-500 — sky blue secondary elements
const WARN = "#f59e0b";  // --warning     — amber: quality gates, escalation
const DNGR = "#ef4444";  // --danger      — red: milestones, high risk
const SUCC = "#10b981";  // --success     — green: positive outcomes, low risk

/* ── shared style tokens ─────────────────────────────────────────────── */
const mono = { fontFamily: "var(--font-mono)" } as const;
const sectionNum: React.CSSProperties = { ...mono, fontSize: 12, color: "var(--primary-400)", fontWeight: 600, letterSpacing: "0.08em", marginBottom: 12, display: "block" };
const sectionH2: React.CSSProperties = { fontWeight: 700, fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 16 };
const sectionLead: React.CSSProperties = { fontSize: 17, color: "var(--text-body)", maxWidth: 720, lineHeight: 1.55 };
const infograph: React.CSSProperties = { background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: 40, margin: "32px 0", overflow: "hidden" };
const infographLabel: React.CSSProperties = { ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--primary-400)", fontWeight: 500, marginBottom: 10, display: "block" };
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
  { icon: FileText,      title: "Project Charter & Scope Statement",  desc: "Formal mandate, objectives, fixed-term and fixed-fee constraints, and explicit out-of-scope list." },
  { icon: Calendar,      title: "Master Gantt Schedule",              desc: "12-month timeline with phases, parallel streams, milestones, and dependencies tracked weekly." },
  { icon: DollarSign,    title: "Budget & Resource Plan",             desc: "Fixed-rate envelope with monthly burn, FTE allocation, and per-server unit economics." },
  { icon: AlertTriangle, title: "Risk Register & Mitigation Plan",    desc: "Four prioritized risk domains with mitigations, owners, and measurable target outcomes." },
  { icon: Radio,         title: "Communication Plan",                 desc: "Two-tier governance, defined ceremonies and channels, sprint report template, escalation paths." },
  { icon: Users,         title: "Team Structure & RACI",              desc: "Roles, responsibilities, and decision rights mapped across both organisations." },
  { icon: BookOpen,      title: "Standard Operating Procedures",      desc: "Reusable SOPs covering the five-step migration cycle, applicable to the enterprise rollout." },
  { icon: Database,      title: "Architecture Decision Records",      desc: "Pattern library and ADRs that constitute the operational blueprint for enterprise scale-out." },
];

export default function CloudMigrationContent() {
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
          <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--accent)", fontWeight: 500, marginBottom: 28, display: "inline-block" }}>
            Project · Cloud Migration · 12 months
          </span>
          <h1 style={{ fontWeight: 700, fontSize: "clamp(36px, 5vw, 62px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 24 }}>
            Migrating a 200-server data analytics platform to AWS under a{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>fixed-budget, fixed-term</em>{" "}
            mandate.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--text-body)", maxWidth: 680, fontWeight: 400 }}>
            Project Management framework for a global financial services enterprise&apos;s pilot cloud migration — designed to prove AWS feasibility for a much larger enterprise modernization program. Twelve months. $1.2M fixed budget. Zero tolerance for unscheduled downtime.
          </p>
        </section>

        {/* ── Meta strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "28px 0" }}>
          {[["Role", "Project Manager"], ["Duration", "12 months"], ["Budget", "USD 1.2M"], ["Scope", "~200 servers"]].map(([label, value]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", fontWeight: 500 }}>{label}</span>
              <span style={{ fontSize: 18, fontWeight: 600, color: "var(--text)" }}>{value}</span>
            </div>
          ))}
        </div>

        {/* ── Tech tags ── */}
        <div className="mb-14 flex flex-wrap gap-2">
          {["Project Management", "Cloud Migration", "AWS", "Agile · 2-week sprints", "Risk Management", "Stakeholder Governance", "PMI / PMBOK"].map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* ── 01 Context & Diagnosis ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>01 — Context &amp; Diagnosis</span>
            <h2 style={sectionH2}>An aging footprint, <em style={{ fontStyle: "italic", color: "var(--accent)" }}>rising risk</em>, and a feasibility window that closes quickly.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>The starting position</h3>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: 16 }}>The client operated a complex legacy infrastructure built through decades of growth and acquisitions — spread across six aging data centers, with roughly 200 servers supporting the internally-facing data analytics platform. Operational overhead was high, technological risk was rising, and the cost base was no longer defensible.</p>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7 }}>Leadership had committed to a multi-year enterprise modernization. But before signing off on that broader program, they needed proof: a contained migration that demonstrates AWS feasibility, validates the operating model, and produces reusable patterns for the larger effort to follow.</p>
            </div>
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 20, color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>The mandate</h3>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: 16 }}><strong style={{ color: "var(--text)" }}>Move fast, but don&apos;t break the business.</strong> The data analytics platform had to keep running during core working hours — every minute of unscheduled downtime translated directly to financial loss and disrupted decision-making across the company.</p>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7 }}>The project also had to do double duty: deliver the migration <em>and</em> produce the SOPs, architecture decision records, and validated patterns the enterprise would later use to scale the same approach across the remaining infrastructure.</p>
            </div>
          </div>
        </section>

        {/* ── 02 Strategic Approach ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>02 — Strategic Approach</span>
            <h2 style={sectionH2}>A lift-and-shift, sequenced as <em style={{ fontStyle: "italic", color: "var(--accent)" }}>ten iterative cycles</em>.</h2>
            <p style={sectionLead}>Rather than treating the platform as one monolithic migration, I structured delivery around ten prioritized use cases — each migrated end-to-end inside a 2-week sprint cadence. Risk is localized. Value is demonstrated continuously. The team learns and tightens estimates with every cycle.</p>
          </div>

          {/* Infochart 01 */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 01 · Delivery Methodology</span>
              <div style={infographTitle}>Five-step migration flow, repeated per use case</div>
              <div style={infographSub}>Each cycle follows the same disciplined sequence, governed by a formal SOP and gated by UAT before any production cutover.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 280" style={{ width: "100%", minWidth: 600, height: "auto", display: "block" }}>
                <defs>
                  <marker id="cm-arrow1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={P800} />
                  </marker>
                </defs>
                <text x="20" y="32" style={svgLabel()}>Use Case Migration Cycle · 2-Week Sprint</text>
                <line x1="20" y1="42" x2="1080" y2="42" style={{ stroke: svgBorder }} strokeWidth="1" />
                {/* Step 1 */}
                <g>
                  <circle cx="100" cy="130" r="48" style={{ fill: svgBg }} stroke={P800} strokeWidth="2" />
                  <text x="100" y="125" textAnchor="middle" style={svgNum({ fontSize: 24, fill: P800 })}>01</text>
                  <text x="100" y="148" textAnchor="middle" style={svgLabel({ fill: P800 })}>Discover</text>
                  <text x="100" y="208" textAnchor="middle" style={svgText({ fontWeight: 600 })}>Initial Mapping</text>
                  <text x="100" y="226" textAnchor="middle" style={svgMute({ fontSize: 10 })}>Dependency analysis,</text>
                  <text x="100" y="240" textAnchor="middle" style={svgMute({ fontSize: 10 })}>scope confirmation</text>
                </g>
                <line x1="155" y1="130" x2="240" y2="130" stroke={P800} strokeWidth="1.5" markerEnd="url(#cm-arrow1)" />
                {/* Step 2 */}
                <g>
                  <circle cx="295" cy="130" r="48" style={{ fill: svgBg }} stroke={P800} strokeWidth="2" />
                  <text x="295" y="125" textAnchor="middle" style={svgNum({ fontSize: 24, fill: P800 })}>02</text>
                  <text x="295" y="148" textAnchor="middle" style={svgLabel({ fill: P800 })}>Move</text>
                  <text x="295" y="208" textAnchor="middle" style={svgText({ fontWeight: 600 })}>Database Migration</text>
                  <text x="295" y="226" textAnchor="middle" style={svgMute({ fontSize: 10 })}>Transition data sources</text>
                  <text x="295" y="240" textAnchor="middle" style={svgMute({ fontSize: 10 })}>to AWS target</text>
                </g>
                <line x1="350" y1="130" x2="435" y2="130" stroke={P800} strokeWidth="1.5" markerEnd="url(#cm-arrow1)" />
                {/* Step 3 */}
                <g>
                  <circle cx="490" cy="130" r="48" style={{ fill: svgBg }} stroke={P800} strokeWidth="2" />
                  <text x="490" y="125" textAnchor="middle" style={svgNum({ fontSize: 24, fill: P800 })}>03</text>
                  <text x="490" y="148" textAnchor="middle" style={svgLabel({ fill: P800 })}>Rebuild</text>
                  <text x="490" y="208" textAnchor="middle" style={svgText({ fontWeight: 600 })}>Analytics Migration</text>
                  <text x="490" y="226" textAnchor="middle" style={svgMute({ fontSize: 10 })}>Processing &amp; application</text>
                  <text x="490" y="240" textAnchor="middle" style={svgMute({ fontSize: 10 })}>logic to new environment</text>
                </g>
                <line x1="545" y1="130" x2="630" y2="130" stroke={P800} strokeWidth="1.5" markerEnd="url(#cm-arrow1)" />
                {/* Step 4 — Quality Gate */}
                <g>
                  <circle cx="685" cy="130" r="48" fill={WARN} stroke={WARN} strokeWidth="2" />
                  <text x="685" y="125" textAnchor="middle" style={svgNum({ fontSize: 24, fill: "#FFFFFF" })}>04</text>
                  <text x="685" y="148" textAnchor="middle" style={svgLabel({ fill: "#FFFFFF" })}>Validate</text>
                  <text x="685" y="208" textAnchor="middle" style={svgText({ fontWeight: 600 })}>Web Server + UAT</text>
                  <text x="685" y="226" textAnchor="middle" style={svgMute({ fontSize: 10 })}>End-to-end experience,</text>
                  <text x="685" y="240" textAnchor="middle" style={svgMute({ fontSize: 10 })}>mandatory UAT gate</text>
                </g>
                <line x1="740" y1="130" x2="825" y2="130" stroke={P800} strokeWidth="1.5" markerEnd="url(#cm-arrow1)" />
                {/* Step 5 */}
                <g>
                  <circle cx="880" cy="130" r="48" style={{ fill: svgBg }} stroke={P800} strokeWidth="2" />
                  <text x="880" y="125" textAnchor="middle" style={svgNum({ fontSize: 24, fill: P800 })}>05</text>
                  <text x="880" y="148" textAnchor="middle" style={svgLabel({ fill: P800 })}>Cutover</text>
                  <text x="880" y="208" textAnchor="middle" style={svgText({ fontWeight: 600 })}>Decommissioning</text>
                  <text x="880" y="226" textAnchor="middle" style={svgMute({ fontSize: 10 })}>Formal cutover, resource</text>
                  <text x="880" y="240" textAnchor="middle" style={svgMute({ fontSize: 10 })}>retirement</text>
                </g>
                {/* Quality gate callout */}
                <rect x="595" y="50" width="180" height="22" fill={WARN} fillOpacity="0.15" rx="4" />
                <text x="685" y="64" textAnchor="middle" style={{ ...mono, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", fill: WARN, fontWeight: 600 }}>Mandatory Quality Gate</text>
                <line x1="685" y1="72" x2="685" y2="82" stroke={WARN} strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── 03 Master Schedule ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>03 — Master Schedule</span>
            <h2 style={sectionH2}>The 12-month <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Gantt</em>: phased setup, parallel use-case streams, hypercare close-out.</h2>
            <p style={sectionLead}>Use Case 1 functions as the pathfinder — extended timeline to absorb learning. Subsequent use cases run in parallel pairs to double throughput without doubling cost.</p>
          </div>

          {/* Infochart 02 */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 02 · Master Schedule</span>
              <div style={infographTitle}>12-month Gantt — phases, milestones, parallel streams</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 480" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                {/* Month labels */}
                <g style={svgLabel()}>
                  {([["Jan",320],["Feb",378],["Mar",436],["Apr",494],["May",552],["Jun",610],["Jul",668],["Aug",726],["Sep",784],["Oct",842],["Nov",900],["Dec",958]] as [string, number][]).map(([m,x]) => (
                    <text key={m} x={x} y="20" textAnchor="middle">{m}</text>
                  ))}
                </g>
                {/* Grid lines */}
                {[291,465,639,813,987].map(x => (
                  <line key={x} x1={x} y1="30" x2={x} y2="440" style={{ stroke: svgBorder }} strokeWidth="1" />
                ))}
                {([["Q1",378],["Q2",552],["Q3",726],["Q4",900]] as [string, number][]).map(([q,x]) => (
                  <text key={q} x={x} y="44" textAnchor="middle" style={{ ...mono, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", fill: P800, fontWeight: 600 }}>{q}</text>
                ))}
                <line x1="291" y1="55" x2="987" y2="55" style={{ stroke: "var(--text)" }} strokeWidth="1" />

                {/* Planning & Setup row */}
                <text x="280" y="78" textAnchor="end" style={svgText({ fontWeight: 600 })}>Planning &amp; Setup</text>
                <rect x="291" y="68" width="116" height="18" fill={P800} rx="2" />
                <text x="349" y="97" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 9, fill: "var(--text-muted)" }}>Inventory · Env. · PoC</text>

                {/* Use Case row label */}
                <text x="280" y="113" textAnchor="end" style={svgText({ fontWeight: 600 })}>Use Case Migration</text>

                {/* UC1 pathfinder */}
                <rect x="349" y="103" width="174" height="14" fill={P500} rx="2" />
                <text x="436" y="114" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 9, fill: "#FFFFFF", fontWeight: 600 }}>UC1 · Pathfinder</text>

                {/* UC pairs */}
                {([
                  [465,123,"UC2"],[465,138,"UC3"],
                  [552,153,"UC4"],[552,168,"UC5"],
                  [639,183,"UC6"],[639,198,"UC7"],
                  [726,213,"UC8"],[726,228,"UC9"],
                ] as [number, number, string][]).map(([x,y,label]) => (
                  <g key={`${y}`}>
                    <rect x={x} y={y} width="100" height="11" fill={P500} rx="2" opacity="0.85" />
                    <text x={x+50} y={y+9} textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 9, fill: "#FFFFFF" }}>{label}</text>
                  </g>
                ))}
                {/* UC10 */}
                <rect x="813" y="243" width="100" height="11" fill={P500} rx="2" opacity="0.85" />
                <text x="863" y="252" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 9, fill: "#FFFFFF" }}>UC10</text>

                {/* Closure */}
                <text x="280" y="285" textAnchor="end" style={svgText({ fontWeight: 600 })}>Closure &amp; Hypercare</text>
                <rect x="895" y="275" width="92" height="18" fill={WARN} rx="2" />
                <text x="941" y="288" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 9, fill: "#FFFFFF", fontWeight: 600 }}>Hypercare</text>

                {/* Milestones */}
                {([
                  [349,"M1","Kickoff +","Env. Ready"],
                  [523,"M2","Pathfinder","Complete"],
                  [813,"M3","9 of 10","UCs Live"],
                  [987,"M4","Final","Cutover"],
                ] as [number, string, string, string][]).map(([x,m,l1,l2]) => (
                  <g key={m}>
                    <polygon points={`${x},310 ${x+8},320 ${x},330 ${x-8},320`} fill={DNGR} />
                    <text x={x} y="350" textAnchor="middle" style={{ ...mono, fontSize: 9, letterSpacing: "0.06em", fill: DNGR, fontWeight: 600 }}>{m}</text>
                    <text x={x} y="365" textAnchor="middle" style={svgMute({ fontSize: 10 })}>{l1}</text>
                    <text x={x} y="378" textAnchor="middle" style={svgMute({ fontSize: 10 })}>{l2}</text>
                  </g>
                ))}

                {/* Legend */}
                <g transform="translate(20, 415)">
                  <text x="0" y="0" style={{ ...mono, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", fill: "var(--text)", fontWeight: 600 }}>Legend</text>
                  <rect x="0" y="14" width="18" height="10" fill={P800} rx="2" />
                  <text x="26" y="24" style={svgMute({ fontSize: 11 })}>Setup &amp; foundational phases</text>
                  <rect x="220" y="14" width="18" height="10" fill={P500} rx="2" />
                  <text x="246" y="24" style={svgMute({ fontSize: 11 })}>Use-case migration sprint</text>
                  <rect x="440" y="14" width="18" height="10" fill={WARN} rx="2" />
                  <text x="466" y="24" style={svgMute({ fontSize: 11 })}>Hypercare &amp; closure</text>
                  <polygon points="660,14 668,24 660,34 652,24" fill={DNGR} />
                  <text x="680" y="28" style={svgMute({ fontSize: 11 })}>Executive milestone</text>
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 04 Budget & Resourcing ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>04 — Budget &amp; Resourcing</span>
            <h2 style={sectionH2}>A <em style={{ fontStyle: "italic", color: "var(--accent)" }}>fixed-rate, fixed-FTE</em> envelope that absorbs scope variance without absorbing margin.</h2>
            <p style={sectionLead}>The financial model is deliberately simple: 800 hours per month at a blended rate of $125/hour, totaling exactly $100,000 in monthly burn. Predictable for the client, defensible internally, transparent under audit.</p>
          </div>

          {/* KPI stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              { num: "$1.2M", unit: "Total / 12 months", label: "Fixed-fee professional services envelope" },
              { num: "$6K",   unit: "Per server migrated", label: "Within the industry benchmark of $3K–$8K" },
              { num: "9,600", unit: "Total billable hours", label: "800 hours / month × 12 months" },
            ].map(({ num, unit, label }) => (
              <div key={unit} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: "28px 24px" }}>
                <div style={{ fontSize: 44, fontWeight: 700, color: "var(--primary-400)", lineHeight: 1, letterSpacing: "-0.03em" }}>{num}</div>
                <div style={{ ...mono, fontSize: 11, color: "var(--text-muted)", marginTop: 4, letterSpacing: "0.05em" }}>{unit}</div>
                <div style={{ fontSize: 13, color: "var(--text-body)", marginTop: 16, lineHeight: 1.45 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Infochart 03 */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 03 · Resource Mix</span>
              <div style={infographTitle}>Monthly resource allocation by role (800h envelope)</div>
              <div style={infographSub}>Engineering capacity dominates; management overhead held to ~12% to maximise delivery throughput.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 320" style={{ width: "100%", minWidth: 600, height: "auto", display: "block" }}>
                <text x="20" y="20" style={svgLabel()}>Hours per month per role</text>
                {/* Cloud Engineer */}
                <text x="180" y="65" textAnchor="end" style={svgText({ fontWeight: 600 })}>Cloud Engineer</text>
                <rect x="200" y="50" width="540" height="22" fill={P800} rx="3" />
                <text x="750" y="65" style={svgText({ fontSize: 12, fontWeight: 600 })}>336h · 42%</text>
                {/* Data Engineer */}
                <text x="180" y="105" textAnchor="end" style={svgText({ fontWeight: 600 })}>Data Engineer</text>
                <rect x="200" y="90" width="540" height="22" fill={P800} rx="3" />
                <text x="750" y="105" style={svgText({ fontSize: 12, fontWeight: 600 })}>336h · 42%</text>
                {/* Tech Lead */}
                <text x="180" y="145" textAnchor="end" style={svgText({ fontWeight: 600 })}>Cloud Engineering Tech Lead</text>
                <rect x="200" y="130" width="103" height="22" fill={P500} rx="3" />
                <text x="313" y="145" style={svgText({ fontSize: 12, fontWeight: 600 })}>64h · 8%</text>
                {/* PM */}
                <text x="180" y="185" textAnchor="end" style={svgText({ fontWeight: 600 })}>Project Manager</text>
                <rect x="200" y="170" width="103" height="22" fill={WARN} rx="3" />
                <text x="313" y="185" style={svgText({ fontSize: 12, fontWeight: 600 })}>64h · 8%</text>
                {/* Total */}
                <line x1="200" y1="220" x2="900" y2="220" style={{ stroke: svgBorder }} strokeWidth="1" />
                <text x="180" y="248" textAnchor="end" style={svgText({ fontWeight: 600 })}>Total monthly capacity</text>
                <text x="200" y="248" style={svgNum({ fontSize: 24, fill: "var(--text)" })}>800h</text>
                <text x="305" y="248" style={svgMute({ fontSize: 13 })}> = USD 100,000 / month @ $125/hr blended rate</text>
                {/* Annotation */}
                <rect x="820" y="60" width="252" height="100" style={{ fill: svgBg }} stroke={svgBorder} rx="4" />
                <text x="835" y="80" style={svgLabel({ fill: "var(--accent)" })}>Throughput note</text>
                <text x="835" y="100" style={svgMute({ fontSize: 11 })}>2 parallel engineering streams</text>
                <text x="835" y="115" style={svgMute({ fontSize: 11 })}>double output without doubling</text>
                <text x="835" y="130" style={svgMute({ fontSize: 11 })}>cost — 84% of capacity is</text>
                <text x="835" y="145" style={svgMute({ fontSize: 11 })}>delivery-side, not overhead.</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 05 Risk Management ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>05 — Risk Management</span>
            <h2 style={sectionH2}>Four risk domains, each with <em style={{ fontStyle: "italic", color: "var(--accent)" }}>concrete mitigations</em> and a measurable success state.</h2>
          </div>

          {/* Infochart 04 */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 04 · Risk Register</span>
              <div style={infographTitle}>Risk · Mitigation · Target outcome</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 520" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                {/* Header */}
                <text x="20" y="24" style={svgLabel({ fontWeight: 600, fill: "var(--text)" })}>Domain</text>
                <text x="220" y="24" style={svgLabel({ fontWeight: 600, fill: "var(--text)" })}>Risk</text>
                <text x="500" y="24" style={svgLabel({ fontWeight: 600, fill: "var(--text)" })}>Mitigation</text>
                <text x="900" y="24" style={svgLabel({ fontWeight: 600, fill: "var(--text)" })}>Target Outcome</text>
                <line x1="20" y1="34" x2="1080" y2="34" style={{ stroke: "var(--text)" }} strokeWidth="1" />

                {/* Row A: Business Continuity — High */}
                <circle cx="40" cy="80" r="18" fill={DNGR} />
                <text x="40" y="86" textAnchor="middle" style={svgNum({ fontSize: 16, fill: "#FFFFFF" })}>A</text>
                <text x="70" y="74" style={svgText({ fontWeight: 600 })}>Business</text>
                <text x="70" y="90" style={svgText({ fontWeight: 600 })}>Continuity</text>
                <text x="220" y="74" style={svgText({ fontWeight: 600 })}>Unscheduled downtime</text>
                <text x="220" y="90" style={svgMute({ fontSize: 11 })}>during working hours</text>
                <text x="500" y="60" style={svgMute({ fontSize: 11 })}>• Pre-scheduled windows, 2-week notice</text>
                <text x="500" y="76" style={svgMute({ fontSize: 11 })}>• One use case at a time isolates impact</text>
                <text x="500" y="92" style={svgMute({ fontSize: 11 })}>• Mandatory UAT + rapid rollback ready</text>
                <text x="500" y="108" style={svgMute({ fontSize: 11 })}>• Sources stay live until validation</text>
                <text x="900" y="74" style={{ fontFamily: "inherit", fontSize: 11, fill: SUCC, fontWeight: 600 }}>Zero unscheduled</text>
                <text x="900" y="90" style={{ fontFamily: "inherit", fontSize: 11, fill: SUCC, fontWeight: 600 }}>downtime in hours</text>
                <line x1="20" y1="130" x2="1080" y2="130" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Row B: Project Delivery — Medium */}
                <circle cx="40" cy="180" r="18" fill={WARN} />
                <text x="40" y="186" textAnchor="middle" style={svgNum({ fontSize: 16, fill: "#FFFFFF" })}>B</text>
                <text x="70" y="174" style={svgText({ fontWeight: 600 })}>Project</text>
                <text x="70" y="190" style={svgText({ fontWeight: 600 })}>Delivery</text>
                <text x="220" y="174" style={svgText({ fontWeight: 600 })}>Speed vs. quality</text>
                <text x="220" y="190" style={svgMute({ fontSize: 11 })}>tension</text>
                <text x="500" y="160" style={svgMute({ fontSize: 11 })}>• Non-negotiable quality gates pre-prod</text>
                <text x="500" y="176" style={svgMute({ fontSize: 11 })}>• Fixed 2-week sprints, velocity tracked</text>
                <text x="500" y="192" style={svgMute({ fontSize: 11 })}>• Embedded technical writer for docs</text>
                <text x="500" y="208" style={svgMute({ fontSize: 11 })}>• UC1 as pathfinder, extended discovery</text>
                <text x="900" y="174" style={{ fontFamily: "inherit", fontSize: 11, fill: SUCC, fontWeight: 600 }}>100% UAT pass rate;</text>
                <text x="900" y="190" style={{ fontFamily: "inherit", fontSize: 11, fill: SUCC, fontWeight: 600 }}>zero critical incidents</text>
                <line x1="20" y1="230" x2="1080" y2="230" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Row C: Technical Discovery — Medium */}
                <circle cx="40" cy="280" r="18" fill={P800} />
                <text x="40" y="286" textAnchor="middle" style={svgNum({ fontSize: 16, fill: "#FFFFFF" })}>C</text>
                <text x="70" y="274" style={svgText({ fontWeight: 600 })}>Technical</text>
                <text x="70" y="290" style={svgText({ fontWeight: 600 })}>Discovery</text>
                <text x="220" y="274" style={svgText({ fontWeight: 600 })}>Legacy system</text>
                <text x="220" y="290" style={svgMute({ fontSize: 11 })}>complexity</text>
                <text x="500" y="260" style={svgMute({ fontSize: 11 })}>• PoC exposes hidden dependencies</text>
                <text x="500" y="276" style={svgMute({ fontSize: 11 })}>• Initial Mapping per use case</text>
                <text x="500" y="292" style={svgMute({ fontSize: 11 })}>• Real-time sharing in daily standups</text>
                <text x="500" y="308" style={svgMute({ fontSize: 11 })}>• AWS Discovery + traffic analysis</text>
                <text x="900" y="274" style={{ fontFamily: "inherit", fontSize: 11, fill: SUCC, fontWeight: 600 }}>Complete dependency</text>
                <text x="900" y="290" style={{ fontFamily: "inherit", fontSize: 11, fill: SUCC, fontWeight: 600 }}>map; refined estimates</text>
                <line x1="20" y1="330" x2="1080" y2="330" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Row D: Budget — Low */}
                <circle cx="40" cy="380" r="18" fill={SUCC} />
                <text x="40" y="386" textAnchor="middle" style={svgNum({ fontSize: 16, fill: "#FFFFFF" })}>D</text>
                <text x="70" y="374" style={svgText({ fontWeight: 600 })}>Budget &amp;</text>
                <text x="70" y="390" style={svgText({ fontWeight: 600 })}>Timeline</text>
                <text x="220" y="374" style={svgText({ fontWeight: 600 })}>Cost overruns,</text>
                <text x="220" y="390" style={svgMute({ fontSize: 11 })}>schedule delays</text>
                <text x="500" y="360" style={svgMute({ fontSize: 11 })}>• Fixed-rate model ($125/hr) = predictability</text>
                <text x="500" y="376" style={svgMute({ fontSize: 11 })}>• 800h monthly burn, managed by velocity</text>
                <text x="500" y="392" style={svgMute({ fontSize: 11 })}>• Parallel streams 2× throughput, flat cost</text>
                <text x="500" y="408" style={svgMute({ fontSize: 11 })}>• Continuous monitoring in weekly PM review</text>
                <text x="900" y="374" style={{ fontFamily: "inherit", fontSize: 11, fill: SUCC, fontWeight: 600 }}>Delivered within</text>
                <text x="900" y="390" style={{ fontFamily: "inherit", fontSize: 11, fill: SUCC, fontWeight: 600 }}>$1.2M / 12 months</text>
                <line x1="20" y1="430" x2="1080" y2="430" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Legend */}
                <g transform="translate(20, 460)">
                  <text x="0" y="0" style={svgLabel({ fill: "var(--text)" })}>Risk severity</text>
                  <circle cx="100" cy="-4" r="6" fill={DNGR} />
                  <text x="113" y="0" style={svgMute({ fontSize: 11 })}>High</text>
                  <circle cx="170" cy="-4" r="6" fill={WARN} />
                  <text x="183" y="0" style={svgMute({ fontSize: 11 })}>Medium</text>
                  <circle cx="260" cy="-4" r="6" fill={SUCC} />
                  <text x="273" y="0" style={svgMute({ fontSize: 11 })}>Low</text>
                  <text x="320" y="0" style={svgMute({ fontSize: 11, fontStyle: "italic" })}>— severity reflects pre-mitigation exposure.</text>
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 06 Communication & Team ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>06 — Communication &amp; Team</span>
            <h2 style={sectionH2}>A <em style={{ fontStyle: "italic", color: "var(--accent)" }}>two-tier governance</em> model that protects delivery focus and routes escalation cleanly.</h2>
            <p style={sectionLead}>Operational decisions stay with the working team. Strategic decisions — scope, budget, escalated risk — route to a defined steering committee on a defined cadence. The structure is deliberately small and the responsibilities are deliberately clear.</p>
          </div>

          {/* Infochart 05 */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 05 · Governance Structure</span>
              <div style={infographTitle}>Two communication tiers, one shared accountability</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 460" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                {/* Strategic header */}
                <rect x="20" y="20" width="1060" height="34" fill="#050914" rx="3" />
                <text x="40" y="42" style={svgText({ fill: "#FFFFFF", fontWeight: 600 })}>STRATEGIC TIER · Steering committee · Bi-weekly</text>
                {/* Strategic boxes */}
                <rect x="100" y="80" width="180" height="80" style={{ fill: svgBg }} stroke={P800} strokeWidth="1.5" rx="4" />
                <text x="190" y="105" textAnchor="middle" style={svgText({ fontWeight: 600, fontSize: 13 })}>Delivery Org</text>
                <text x="190" y="125" textAnchor="middle" style={svgMute({ fontSize: 11 })}>Executive Lead</text>
                <text x="190" y="143" textAnchor="middle" style={svgMute({ fontSize: 11 })}>+ Management</text>

                <rect x="460" y="80" width="180" height="80" fill={P800} rx="4" />
                <text x="550" y="105" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>Project Manager</text>
                <text x="550" y="125" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>Scope · Time · Cost</text>
                <text x="550" y="143" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>Risk · Communication</text>

                <rect x="820" y="80" width="180" height="80" style={{ fill: svgBg }} stroke={P800} strokeWidth="1.5" rx="4" />
                <text x="910" y="105" textAnchor="middle" style={svgText({ fontWeight: 600, fontSize: 13 })}>Client Sponsors</text>
                <text x="910" y="125" textAnchor="middle" style={svgMute({ fontSize: 11 })}>Head of Data</text>
                <text x="910" y="143" textAnchor="middle" style={svgMute({ fontSize: 11 })}>+ Tech Leadership</text>

                <line x1="280" y1="120" x2="460" y2="120" stroke={P800} strokeWidth="1.5" />
                <line x1="640" y1="120" x2="820" y2="120" stroke={P800} strokeWidth="1.5" />

                {/* Divider */}
                <line x1="20" y1="200" x2="1080" y2="200" style={{ stroke: svgBorder }} strokeWidth="1" strokeDasharray="4 4" />

                {/* Operational header */}
                <rect x="20" y="220" width="1060" height="34" fill={P500} rx="3" />
                <text x="40" y="242" style={svgText({ fill: "#FFFFFF", fontWeight: 600 })}>OPERATIONAL TIER · Working teams · Daily standups + bi-weekly sprint ceremonies</text>

                {/* Operational boxes */}
                <rect x="40" y="280" width="220" height="120" style={{ fill: svgBg }} stroke={P500} strokeWidth="1.5" rx="4" />
                <text x="150" y="305" textAnchor="middle" style={svgText({ fontWeight: 600, fontSize: 13 })}>Delivery Engineering</text>
                <text x="150" y="328" textAnchor="middle" style={svgMute({ fontSize: 11 })}>Cloud Engineering Tech Lead</text>
                <text x="150" y="346" textAnchor="middle" style={svgMute({ fontSize: 11 })}>Data Engineering Tech Lead</text>
                <text x="150" y="364" textAnchor="middle" style={svgMute({ fontSize: 11 })}>2× Cloud Engineers</text>
                <text x="150" y="382" textAnchor="middle" style={svgMute({ fontSize: 11 })}>2× Data Engineers</text>

                <rect x="440" y="280" width="220" height="120" fill={P500} rx="4" />
                <text x="550" y="305" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>Joint Workgroup</text>
                <text x="550" y="328" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>Daily standups (15 min)</text>
                <text x="550" y="346" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>Sprint planning · Reviews</text>
                <text x="550" y="364" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>Retrospectives</text>
                <text x="550" y="382" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF", fontStyle: "italic" }}>Sprint reports → PM → exec.</text>

                <rect x="840" y="280" width="220" height="120" style={{ fill: svgBg }} stroke={P500} strokeWidth="1.5" rx="4" />
                <text x="950" y="305" textAnchor="middle" style={svgText({ fontWeight: 600, fontSize: 13 })}>Client Technical</text>
                <text x="950" y="328" textAnchor="middle" style={svgMute({ fontSize: 11 })}>Client Tech Lead</text>
                <text x="950" y="346" textAnchor="middle" style={svgMute({ fontSize: 11 })}>UAT validators</text>
                <text x="950" y="364" textAnchor="middle" style={svgMute({ fontSize: 11 })}>Subject matter experts</text>
                <text x="950" y="382" textAnchor="middle" style={svgMute({ fontSize: 11 })}>Security &amp; IT liaisons</text>

                <line x1="260" y1="340" x2="440" y2="340" stroke={P500} strokeWidth="1.5" />
                <line x1="660" y1="340" x2="840" y2="340" stroke={P500} strokeWidth="1.5" />

                {/* Escalation arrow */}
                <path d="M 550 280 L 550 160" stroke={WARN} strokeWidth="2" strokeDasharray="6 4" fill="none" />
                <polygon points="550,155 545,168 555,168" fill={WARN} />
                <rect x="585" y="163" width="160" height="36" fill={WARN} fillOpacity="0.15" rx="4" />
                <text x="665" y="180" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fill: WARN, fontWeight: 600 }}>Escalation path</text>
                <text x="665" y="194" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: WARN }}>scope · budget · risk</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 07 Deliverables ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>07 — Deliverables</span>
            <h2 style={sectionH2}>What the client receives — and what the enterprise keeps.</h2>
            <p style={sectionLead}>The mandate has two layers: deliver the migration <em>and</em> produce the reusable artifacts that enable the broader enterprise rollout. Every output below was designed to outlive this engagement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderLeft: `3px solid ${P800}`, padding: "20px 24px", borderRadius: "0 var(--radius-md) var(--radius-md) 0", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <Icon className="shrink-0 mt-0.5" style={{ width: 22, height: 22, color: "var(--primary-400)" }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, color: "var(--text)" }}>{title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-body)", lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing callout ── */}
        <div style={{ position: "relative", background: "var(--ink-2)", color: "var(--text)", padding: "56px 48px", borderRadius: "var(--radius-lg)", marginBottom: 0, border: "1px solid var(--line)" }}>
          <span style={{ fontSize: 96, position: "absolute", top: 8, left: 24, color: "var(--primary-400)", opacity: 0.4, lineHeight: 1, fontWeight: 700 }}>&ldquo;</span>
          <p style={{ paddingLeft: 48, fontStyle: "italic", fontSize: 24, lineHeight: 1.4, fontWeight: 400, color: "var(--text-body)" }}>
            The project is the migration. The <strong style={{ fontStyle: "normal", fontWeight: 700, color: "var(--text)" }}>deliverable</strong> is the blueprint.
            A well-run pilot is the most expensive thing an enterprise can skip — and the cheapest one it can run.
          </p>
        </div>

      </div>
    </div>
  );
}
