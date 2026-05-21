"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Layers, Settings, Globe, Calendar, AlertTriangle, BarChart2, Users } from "lucide-react";

/* ── portfolio palette (design system tokens) ── */
const ACCENT = "#075985";  // --primary-800 — dark navy structure
const GOLD   = "#0ea5e9";  // --primary-500 — sky blue highlights & numbers
const BURG   = "#0284c7";  // --primary-600 — medium blue gateways & control
const SLATE  = "#0369a1";  // --primary-700 — secondary structure

/* ── shared style tokens ─────────────────────────────────────────────── */
const mono = { fontFamily: "var(--font-mono)" } as const;
const sectionNum: React.CSSProperties = { ...mono, fontSize: 12, color: GOLD, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 12, display: "block" };
const sectionH2: React.CSSProperties = { fontWeight: 700, fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 16 };
const sectionLead: React.CSSProperties = { fontSize: 17, color: "var(--text-body)", maxWidth: 720, lineHeight: 1.55 };
const infograph: React.CSSProperties = { background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: 40, margin: "32px 0", overflow: "hidden" };
const infographLabel: React.CSSProperties = { ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: GOLD, fontWeight: 600, marginBottom: 10, display: "block" };
const infographTitle: React.CSSProperties = { fontSize: 22, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em" };
const infographSub: React.CSSProperties = { fontSize: 14, color: "var(--text-body)", marginTop: 6 };

/* SVG helpers */
const svgText = (extra?: React.CSSProperties) => ({ fontFamily: "inherit", fontSize: 11, fill: "var(--text)", ...extra } as React.CSSProperties);
const svgMute = (extra?: React.CSSProperties) => ({ fontFamily: "inherit", fontSize: 11, fill: "var(--text-body)", ...extra } as React.CSSProperties);
const svgLabel = (extra?: React.CSSProperties) => ({ ...mono, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase" as const, fill: "var(--text-muted)", ...extra });
const svgNum = (extra?: React.CSSProperties) => ({ fontWeight: 600, ...extra } as React.CSSProperties);
const svgBg = "var(--ink-3)";
const svgBorder = "var(--line)";

const deliverables = [
  { icon: FileText,      title: "Program Charter & Kick-off Pack",       desc: "Formal program objectives, premises, the 18-month fixed-term constraint, and acknowledged contractual boundary." },
  { icon: Layers,        title: "Migration Assessment & Strategy",        desc: "Data source map, dependency analysis, and the strategy document that defines the fixed contract boundary." },
  { icon: Settings,      title: "Governance Framework (Way-of-Working)",  desc: "Four-step model: Development → Presentation → Formal Agreement → Execution & Review." },
  { icon: Globe,         title: "Change Control Process (CCP)",           desc: "Three-step protocol — Route → Quantify → Decide — with Parking Lot and Formal Gateways as defenses." },
  { icon: Calendar,      title: "Integrated Master Schedule",             desc: "Cross-project dependency map; tracks shared resources, particularly Data Engineers and Data Analysts." },
  { icon: AlertTriangle, title: "RAID Log & Control Register",            desc: "Centralised Risks, Assumptions, Issues, Dependencies — owners, deadlines, and escalation criteria." },
  { icon: BarChart2,     title: "Executive KPI Dashboard",                desc: "Four KPIs only: Cost Variance, Milestone Rate, Data Validation Rate, Change Request Frequency." },
  { icon: Users,         title: "Stakeholder Management Plan",            desc: "Three-tier model with defined cadence, content, and escalation criteria for each tier." },
];

export default function DWProgramContent() {
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
          <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: BURG, fontWeight: 500, marginBottom: 28, display: "inline-block" }}>
            Program · Data Modernization · 18 months
          </span>
          <h1 style={{ fontWeight: 700, fontSize: "clamp(36px, 5vw, 62px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 24 }}>
            Governing an 18-month, fixed-fee data warehouse modernization program for a{" "}
            <em style={{ fontStyle: "italic", color: GOLD }}>US FinTech enterprise</em>.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--text-body)", maxWidth: 680, fontWeight: 400 }}>
            A multi-project program migrating a legacy SQL Server data warehouse to the Modern Data Stack (Snowflake, dbt, Tableau). Designed around three non-negotiables: fixed term, fixed consultancy fees, and zero scope drift — defended by formal gateways, a parking-lot system, and an explicit change-control process.
          </p>
        </section>

        {/* ── Meta strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "28px 0" }}>
          {[["Role", "Program Manager"], ["Duration", "18 months"], ["Engagement", "Fixed-fee"], ["Constituent Projects", "Multiple"]].map(([label, value]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", fontWeight: 500 }}>{label}</span>
              <span style={{ fontSize: 18, fontWeight: 600, color: "var(--text)" }}>{value}</span>
            </div>
          ))}
        </div>

        {/* ── Tech tags ── */}
        <div className="mb-14 flex flex-wrap gap-2">
          {["Program Management", "Modern Data Stack", "Snowflake · dbt · Tableau", "Governance", "Change Control", "RAID Management", "C-level Stakeholder"].map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* ── 01 Strategic Objective & KRs ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>01 — Strategic Objective &amp; Key Results</span>
            <h2 style={sectionH2}>One mandate. <em style={{ fontStyle: "italic", color: GOLD }}>Three non-negotiables</em>.</h2>
            <p style={sectionLead}>Migrate the data warehouse to the Modern Data Stack — and do it within the agreed 18 months and consultancy fees. Everything else in the program is in service of those three constraints.</p>
          </div>

          {/* KPI stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "< 5%",  unit: "Cost variance",     label: "Budget/Cost Variance against the total agreed fees." },
              { num: "100%",  unit: "Milestone rate",     label: "Completion across the macro-schedule phases." },
              { num: "> 98%", unit: "Data validation",   label: "Validation rate during the mandatory UAT phase." },
              { num: "0",     unit: "Unmanaged scope",   label: "All scope additions routed through the formal CCP." },
            ].map(({ num, unit, label }) => (
              <div key={unit} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderTop: `3px solid ${GOLD}`, borderRadius: "var(--radius-lg)", padding: "28px 24px" }}>
                <div style={{ fontSize: 38, fontWeight: 700, color: "var(--primary-400)", lineHeight: 1, letterSpacing: "-0.03em" }}>{num}</div>
                <div style={{ ...mono, fontSize: 11, color: "var(--text-muted)", marginTop: 4, letterSpacing: "0.05em" }}>{unit}</div>
                <div style={{ fontSize: 13, color: "var(--text-body)", marginTop: 14, lineHeight: 1.45 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 02 Program Lifecycle ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>02 — Program Lifecycle</span>
            <h2 style={sectionH2}>Three phases. <em style={{ fontStyle: "italic", color: GOLD }}>Each ends at a contractual gateway</em>.</h2>
            <p style={sectionLead}>The program is structured around the standard lifecycle — Initiation, Delivery, Closure — but with one twist: every phase boundary is also a formal control point. No phase advances until its deliverables are signed off, locking the scope behind it.</p>
          </div>

          {/* Phase cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              { num: "I.",   phase: "Initiation", title: "Define the boundary",   duration: "~3 months",  body: "Formal program kick-off, scope definition, and the crucial 18-month fixed-term acknowledgement. Core activity: data source mapping and dependency analysis.", outputs: "Migration Assessment · Migration Strategy · Way-of-Working" },
              { num: "II.",  phase: "Delivery",   title: "Execute & validate",    duration: "~13 months", body: "Migration begins with PoC to validate the approach and refine estimates, then iterates through agile cycles. Mandatory UAT with client Data Analysts gates every release.", outputs: "Migrated DW · Validated quality · Decommissioned legacy" },
              { num: "III.", phase: "Closure",    title: "Confirm adherence",     duration: "~2 months",  body: "Formal sign-off against the fixed mandate. Success is defined narrowly: full migration to Snowflake/dbt/Tableau within 18 months and within the agreed fees.", outputs: "Final report · Resource transition · Contract close-out" },
            ].map(({ num, phase, title, duration, body, outputs }) => (
              <div key={num} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", padding: "32px 28px", borderRadius: "var(--radius-lg)" }}>
                <div style={{ fontWeight: 700, fontSize: 56, color: GOLD, lineHeight: 1, opacity: 0.35 }}>{num}</div>
                <div style={{ ...mono, fontSize: 10, color: BURG, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: 8, marginTop: 8 }}>{phase}</div>
                <h3 style={{ fontWeight: 600, fontSize: 18, color: "var(--text)", marginBottom: 12, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-body)", lineHeight: 1.6, marginBottom: 10 }}>{body}</p>
                <p style={{ ...mono, fontSize: 11, color: "var(--text-muted)", fontStyle: "italic" }}>{duration} · {outputs}</p>
              </div>
            ))}
          </div>

          {/* Infochart 01 */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 01 · Master Schedule</span>
              <div style={infographTitle}>18-month program lifecycle with phase gateways</div>
              <div style={infographSub}>Each gateway represents a formal sign-off — the prior phase's scope is locked, and the next phase cannot begin without it.</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 360" style={{ width: "100%", minWidth: 600, height: "auto", display: "block" }}>
                {/* Month labels */}
                {[["M1",100],["M3",180],["M5",260],["M7",340],["M9",420],["M11",500],["M13",580],["M15",660],["M17",740],["M18",820]].map(([m,x]) => (
                  <text key={m} x={x} y="22" textAnchor="middle" style={svgLabel()}>{m}</text>
                ))}
                <line x1="60" y1="100" x2="980" y2="100" style={{ stroke: svgBorder }} strokeWidth="2" />

                {/* Phases */}
                <rect x="60" y="80" width="160" height="40" fill={ACCENT} rx="3" />
                <text x="140" y="98" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>I · INITIATION</text>
                <text x="140" y="114" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: GOLD }}>~3 months</text>
                <text x="140" y="178" textAnchor="middle" style={svgMute({ fontSize: 11 })}>Kickoff · Assessment</text>
                <text x="140" y="193" textAnchor="middle" style={svgMute({ fontSize: 11 })}>Strategy · Governance</text>

                <rect x="225" y="80" width="600" height="40" fill={SLATE} rx="3" />
                <text x="525" y="98" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>II · DELIVERY</text>
                <text x="525" y="114" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF" }}>~13 months · Migration · Validation · Decommissioning</text>

                {/* Delivery sub-phases */}
                {[[240,"PoC · Wave 1"],[370,"Wave 2"],[500,"Wave 3"],[630,"Wave 4 · UAT"]].map(([x,label],i) => (
                  <g key={label as string}>
                    <rect x={x} y="148" width="120" height="18" fill={GOLD} rx="2" opacity={1 - i * 0.15} />
                    <text x={+x+60} y="160" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF", fontWeight: 600 }}>{label}</text>
                  </g>
                ))}

                <rect x="830" y="80" width="150" height="40" fill={BURG} rx="3" />
                <text x="905" y="98" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>III · CLOSURE</text>
                <text x="905" y="114" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 10, fill: "#FFFFFF" }}>~2 months</text>
                <text x="905" y="178" textAnchor="middle" style={svgMute({ fontSize: 11 })}>Cutover · Sign-off</text>
                <text x="905" y="193" textAnchor="middle" style={svgMute({ fontSize: 11 })}>Final reporting</text>

                {/* Gateways */}
                {[[220,"G1","Scope Freeze","Assessment + Strategy","approved by Sponsor"],[490,"G2","Mid-Program Review","Cost variance, milestone","rate, top-3 risks"],[830,"G3","Validation Lock","UAT pass >98%;","cutover authorized"],[980,"G4","Closeout","Contract sign-off",""]].map(([x,g,l1,l2,l3]) => (
                  <g key={g}>
                    <line x1={x} y1="60" x2={x} y2="143" stroke={BURG} strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx={x} cy="240" r="14" fill={BURG} />
                    <text x={x} y="246" textAnchor="middle" style={svgText({ fill: "#FFFFFF", fontSize: 11, fontWeight: 700 })}>{g}</text>
                    <text x={x} y="275" textAnchor="middle" style={{ fontFamily: "inherit", fontSize: 11, fontWeight: 600, fill: BURG }}>{l1}</text>
                    <text x={x} y="290" textAnchor="middle" style={svgMute({ fontSize: 10 })}>{l2}</text>
                    {l3 && <text x={x} y="304" textAnchor="middle" style={svgMute({ fontSize: 10 })}>{l3}</text>}
                  </g>
                ))}

                {/* Legend */}
                <g transform="translate(60, 335)">
                  <rect x="0" y="-10" width="14" height="14" fill={ACCENT} rx="2" />
                  <text x="20" y="0" style={svgMute({ fontSize: 11 })}>Phase</text>
                  <rect x="80" y="-10" width="14" height="14" fill={GOLD} rx="2" />
                  <text x="100" y="0" style={svgMute({ fontSize: 11 })}>Delivery wave</text>
                  <circle cx="207" cy="-3" r="8" fill={BURG} />
                  <text x="222" y="0" style={svgMute({ fontSize: 11 })}>Contractual gateway</text>
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 03 Governance Framework ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>03 — Governance Framework</span>
            <h2 style={sectionH2}>A way-of-working built in <em style={{ fontStyle: "italic", color: GOLD }}>four deliberate steps</em>.</h2>
            <p style={sectionLead}>Before execution begins, the rules of execution are defined, presented, signed off, and then operated. Governance is not the byproduct of program management — it is the first deliverable of program management.</p>
          </div>

          {/* Infochart 02 */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 02 · Way-of-Working Setup</span>
              <div style={infographTitle}>From shared rules to enforced execution</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 320" style={{ width: "100%", minWidth: 600, height: "auto", display: "block" }}>
                <defs>
                  <marker id="dw-arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={ACCENT} />
                  </marker>
                </defs>
                <text x="20" y="22" style={svgLabel()}>Sequence · each step is a precondition for the next</text>
                <line x1="20" y1="32" x2="1080" y2="32" style={{ stroke: svgBorder }} strokeWidth="1" />

                {/* Steps */}
                {[
                  { x: 50, fill: ACCENT, num: "01", title: "Development",       lines: ["Define cadence,","decision authority,","reporting format —","jointly with client."] },
                  { x: 310, fill: SLATE, num: "02", title: "Presentation",       lines: ["Formally document","and present the","cohesive WoW to all","key stakeholders."] },
                  { x: 570, fill: BURG,  num: "03", title: "Formal Agreement",   lines: ["Obtain sign-off from","client PM — secures","contractual commitment","to defined standards."] },
                  { x: 830, fill: GOLD,  num: "04", title: "Execution & Review", lines: ["Adherence monitored","via CV, milestone rate,","and CR frequency;","periodic review."] },
                ].map(({ x, fill, num, title, lines }, i) => (
                  <g key={num}>
                    <rect x={x} y="80" width="200" height="160" fill={fill} rx="6" />
                    <text x={x+20} y="108" style={svgNum({ fontSize: 38, fill: i === 3 ? "#FFFFFF" : GOLD })}>{ num}</text>
                    <text x={x+20} y="138" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 14 })}>{title}</text>
                    {lines.map((l, li) => (
                      <text key={li} x={x+20} y={170 + li*16} style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>{l}</text>
                    ))}
                    {i < 3 && <line x1={x+205} y1="160" x2={x+255} y2="160" stroke={ACCENT} strokeWidth="2" markerEnd="url(#dw-arrow2)" />}
                  </g>
                ))}

                {/* Goal band */}
                <g transform="translate(50, 260)">
                  <text x="0" y="0" style={svgLabel({ fontWeight: 600, fill: "var(--text)" })}>Goal at each step</text>
                  {[
                    [0, "01.", "Shared operational standards"],
                    [260, "02.", "Transparency & common understanding"],
                    [570, "03.", "Contractual commitment to adherence"],
                    [830, "04.", "Effective control"],
                  ].map(([px, bullet, txt]) => (
                    <text key={bullet as string} x={px} y="20" style={svgMute({ fontSize: 11 })}>
                      <tspan style={{ fontWeight: 600 }}>{bullet} </tspan>{txt}
                    </text>
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 04 Change Control ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>04 — Change Control</span>
            <h2 style={sectionH2}>How scope additions are handled — and how the <em style={{ fontStyle: "italic", color: GOLD }}>fixed-fee contract</em> is defended.</h2>
            <p style={sectionLead}>A fixed-fee, fixed-term program lives or dies by its change-control discipline. The program operates a strict three-step CCP, backed by a Parking Lot to capture anything ambiguous and Formal Gateways that lock prior phases against retroactive rework.</p>
          </div>

          {/* Infochart 03 */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 03 · Change Control Process (CCP)</span>
              <div style={infographTitle}>From scope-add request to sponsor decision</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 500" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                <defs>
                  <marker id="dw-arrow3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={BURG} />
                  </marker>
                </defs>

                {/* Trigger */}
                <rect x="20" y="40" width="200" height="90" style={{ fill: svgBg }} stroke={GOLD} strokeWidth="2" strokeDasharray="4 3" rx="4" />
                <text x="120" y="64" textAnchor="middle" style={svgLabel({ fill: GOLD, fontWeight: 600 })}>Trigger</text>
                <text x="120" y="90" textAnchor="middle" style={svgText({ fontWeight: 600, fontSize: 12 })}>Scope addition</text>
                <text x="120" y="107" textAnchor="middle" style={svgMute({ fontSize: 11 })}>request from client</text>
                <line x1="225" y1="85" x2="275" y2="85" stroke={BURG} strokeWidth="2" markerEnd="url(#dw-arrow3)" />

                {/* Steps */}
                {[
                  { x: 280, fill: ACCENT, label: "Step 01 · Immediate", title: "Route to CCP",      sub1: "Park if ambiguous;", sub2: "never absorb silently." },
                  { x: 560, fill: SLATE,  label: "Step 02 · Quantify",  title: "Impact analysis",   sub1: "Effort, timeline, fee delta", sub2: "— by BA + Eng." },
                  { x: 840, fill: BURG,   label: "Step 03 · Decide",    title: "Present 3 options", sub1: "to C-level sponsor", sub2: "for resolution." },
                ].map(({ x, fill, label, title, sub1, sub2 }, i) => (
                  <g key={label}>
                    <rect x={x} y="40" width="220" height="90" fill={fill} rx="4" />
                    <text x={x+20} y="64" style={svgLabel({ fill: GOLD })}>{ label}</text>
                    <text x={x+20} y="90" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>{title}</text>
                    <text x={x+20} y="110" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>{sub1}</text>
                    <text x={x+20} y="124" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>{sub2}</text>
                    {i < 2 && <line x1={x+225} y1="85" x2={x+275} y2="85" stroke={BURG} strokeWidth="2" markerEnd="url(#dw-arrow3)" />}
                  </g>
                ))}

                {/* Branch to 3 options */}
                <line x1="950" y1="135" x2="950" y2="168" stroke={BURG} strokeWidth="2" />
                <line x1="380" y1="168" x2="950" y2="168" stroke={BURG} strokeWidth="2" />
                {[380, 665, 950].map(x => (
                  <line key={x} x1={x} y1="168" x2={x} y2="196" stroke={BURG} strokeWidth="2" markerEnd="url(#dw-arrow3)" />
                ))}

                {/* Options */}
                <rect x="265" y="196" width="230" height="140" style={{ fill: svgBg }} stroke={ACCENT} strokeWidth="1.5" rx="4" />
                <text x="285" y="220" style={svgLabel({ fill: ACCENT, fontWeight: 600 })}>Option A</text>
                <text x="285" y="242" style={svgText({ fontWeight: 600, fontSize: 13 })}>Accept change</text>
                <text x="285" y="266" style={svgMute({ fontSize: 11 })}>Higher cost.</text>
                <text x="285" y="282" style={svgMute({ fontSize: 11 })}>Longer timeline if</text>
                <text x="285" y="298" style={svgMute({ fontSize: 11 })}>delay pushes beyond</text>
                <text x="285" y="314" style={svgMute({ fontSize: 11 })}>the 18-month term.</text>

                <rect x="550" y="196" width="230" height="140" fill={ACCENT} rx="4" />
                <text x="570" y="220" style={svgLabel({ fill: GOLD, fontWeight: 600 })}>Option B · Preferred</text>
                <text x="570" y="242" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>Swap equivalent</text>
                <text x="570" y="266" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>Maintain cost and time</text>
                <text x="570" y="282" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>by removing existing</text>
                <text x="570" y="298" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>items of equivalent</text>
                <text x="570" y="314" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>effort from scope.</text>

                <rect x="835" y="196" width="230" height="140" style={{ fill: svgBg }} stroke={ACCENT} strokeWidth="1.5" rx="4" />
                <text x="855" y="220" style={svgLabel({ fill: ACCENT, fontWeight: 600 })}>Option C</text>
                <text x="855" y="242" style={svgText({ fontWeight: 600, fontSize: 13 })}>Postpone</text>
                <text x="855" y="266" style={svgMute({ fontSize: 11 })}>Defer the request</text>
                <text x="855" y="282" style={svgMute({ fontSize: 11 })}>to a follow-on engagement</text>
                <text x="855" y="298" style={svgMute({ fontSize: 11 })}>once the 18-month program</text>
                <text x="855" y="314" style={svgMute({ fontSize: 11 })}>is formally closed.</text>

                {/* Defensive mechanisms */}
                <text x="20" y="388" style={svgLabel({ fontWeight: 600, fill: "var(--text)" })}>Defensive mechanisms supporting the CCP</text>
                <line x1="20" y1="396" x2="1080" y2="396" style={{ stroke: svgBorder }} strokeWidth="1" />
                {[
                  [20,  "Parking Lot",         "Capture every out-of-scope","item; route to CCP evaluation."],
                  [280, "Formal Gateways",      "Lock phases at completion;","prior scope cannot be reopened."],
                  [560, "CR Frequency KPI",     "Leading indicator — high volume","signals stress on the contract."],
                  [840, "Quantification rule",  "No CR is decided without","explicit effort + fee impact."],
                ].map(([x, title, l1, l2]) => (
                  <g key={title as string}>
                    <text x={x} y="420" style={{ fontFamily: "inherit", fontWeight: 600, fontSize: 12, fill: BURG }}>▍ {title}</text>
                    <text x={x} y="440" style={svgMute({ fontSize: 11 })}>{l1}</text>
                    <text x={x} y="456" style={svgMute({ fontSize: 11 })}>{l2}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </section>

        {/* ── 05 Performance Monitoring ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>05 — Performance Monitoring</span>
            <h2 style={sectionH2}>Four KPIs the C-level cares about — and <em style={{ fontStyle: "italic", color: GOLD }}>nothing else on the dashboard</em>.</h2>
            <p style={sectionLead}>Operational telemetry stays in the working teams. What rises to the sponsor is exactly what informs sponsor-level decisions: financial adherence, schedule adherence, quality, and the leading indicator of scope stress.</p>
          </div>

          {/* Infochart 04 */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 04 · Executive KPI Dashboard</span>
              <div style={infographTitle}>What the Head of Data sees, monthly</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 360" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                {/* KPI cards */}
                {[
                  { x: 20,  label: "KPI 01 · Financial Control", title: "Budget/Cost Variance (CV)",      num: "< 5%",  unit: "target", d1: "Tracks actual expenditure vs.",       d2: "the agreed consultancy fees." },
                  { x: 290, label: "KPI 02 · Schedule",          title: "Milestone Completion Rate",       num: "100%", unit: "target", d1: "Confirms adherence to the",           d2: "18-month fixed term." },
                  { x: 560, label: "KPI 03 · Quality",           title: "Data Validation Rate",            num: "> 98%", unit: "target", d1: "Measured during UAT — gates",         d2: "every production release." },
                  { x: 830, label: "KPI 04 · Scope Control",     title: "Change Request Frequency",        num: "↓",    unit: "leading indicator", d1: "High volume = stress on the", d2: "CCP; trend monitored monthly." },
                ].map(({ x, label, title, num, unit, d1, d2 }) => (
                  <g key={label}>
                    <rect x={x} y="20" width={x === 830 ? 250 : 260} height="160" style={{ fill: svgBg }} stroke={svgBorder} rx="6" />
                    <text x={x+20} y="48" style={svgLabel({ fill: BURG, fontWeight: 600 })}>{label}</text>
                    <text x={x+20} y="78" style={svgText({ fontWeight: 600, fontSize: 14 })}>{title}</text>
                    <text x={x+20} y="112" style={svgNum({ fontSize: 36, fill: "var(--primary-400)" })}>{num}</text>
                    <text x={x+20} y="130" style={svgMute({ fontSize: 11 })}>{unit}</text>
                    <text x={x+20} y="150" style={svgMute({ fontSize: 11 })}>{d1}</text>
                    <text x={x+20} y="164" style={svgMute({ fontSize: 11 })}>{d2}</text>
                  </g>
                ))}

                {/* RAID strip */}
                <text x="20" y="225" style={svgLabel({ fontWeight: 600, fill: "var(--text)" })}>Supported by centralised RAID management</text>
                <line x1="20" y1="234" x2="1080" y2="234" style={{ stroke: svgBorder }} strokeWidth="1" />
                {[
                  { x: 20,  fill: ACCENT, letter: "R", title: "Risks",        d1: "Proactive mitigation;",       d2: "focus on fixed constraints." },
                  { x: 290, fill: SLATE,  letter: "A", title: "Assumptions",   d1: "Baseline premises;",          d2: "if invalidated → risk/issue." },
                  { x: 560, fill: BURG,   letter: "I", title: "Issues",        d1: "Reactive resolution; escalated", d2: "only on schedule/fee impact." },
                  { x: 830, fill: GOLD,   letter: "D", title: "Dependencies",  d1: "External constraints —",      d2: "source access, infra readiness." },
                ].map(({ x, fill, letter, title, d1, d2 }) => (
                  <g key={letter}>
                    <rect x={x} y="255" width={x === 830 ? 250 : 260} height="80" fill={fill} rx="4" />
                    <text x={x+20} y="280" style={svgNum({ fontSize: 24, fill: "#FFFFFF" })}>{letter}</text>
                    <text x={x+50} y="280" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 13 })}>{title}</text>
                    <text x={x+20} y="305" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>{d1}</text>
                    <text x={x+20} y="320" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>{d2}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </section>

        {/* ── 06 Stakeholder Management ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>06 — Stakeholder Management</span>
            <h2 style={sectionH2}>Communicating with the sponsor means <em style={{ fontStyle: "italic", color: GOLD }}>filtering, not flooding</em>.</h2>
            <p style={sectionLead}>The Head of Data does not need standup blockers. The Head of Data needs to know whether the program is strategically on track, financially on track, and that the top risks are being handled. The communication model is built around that distinction.</p>
          </div>

          {/* Infochart 05 */}
          <div style={infograph}>
            <div style={{ marginBottom: 28 }}>
              <span style={infographLabel}>Infochart 05 · Stakeholder Tiers</span>
              <div style={infographTitle}>Who hears what, and how often</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <svg viewBox="0 0 1100 480" style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}>
                {/* Tier 1 */}
                <rect x="20" y="20" width="1060" height="110" fill={BURG} rx="4" />
                <text x="40" y="48" style={svgLabel({ fill: "#FFFFFF", fontWeight: 600 })}>Tier 01 · Strategic</text>
                <text x="40" y="76" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 16 })}>Client Head of Data · C-level Sponsor</text>
                <text x="40" y="98" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>Receives: milestone status, CV, top-3 mitigated risks, gateway approvals</text>
                <text x="640" y="48" style={svgLabel({ fill: "#FFFFFF", fontWeight: 600 })}>Cadence</text>
                <text x="640" y="76" style={svgText({ fill: "#FFFFFF", fontSize: 13, fontWeight: 600 })}>Monthly steering · Quarterly review</text>
                <text x="640" y="96" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>Escalation on demand only when</text>
                <text x="640" y="110" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>fixed constraints are at risk</text>

                {/* Tier 2 */}
                <rect x="20" y="150" width="1060" height="110" fill={ACCENT} rx="4" />
                <text x="40" y="178" style={svgLabel({ fill: GOLD, fontWeight: 600 })}>Tier 02 · Tactical</text>
                <text x="40" y="206" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 16 })}>Joint Management · Delivery PM + Client PM</text>
                <text x="40" y="228" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>Receives: governance enforcement, CCP decisions, RAID review, vendor coordination</text>
                <text x="640" y="178" style={svgLabel({ fill: GOLD, fontWeight: 600 })}>Cadence</text>
                <text x="640" y="206" style={svgText({ fill: "#FFFFFF", fontSize: 13, fontWeight: 600 })}>Weekly PM sync · Bi-weekly status</text>
                <text x="640" y="226" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>All scope, schedule, and budget decisions</text>
                <text x="640" y="240" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>originate or pass through here</text>

                {/* Tier 3 */}
                <rect x="20" y="280" width="1060" height="110" fill={SLATE} rx="4" />
                <text x="40" y="308" style={svgLabel({ fill: "#FFFFFF", fontWeight: 600 })}>Tier 03 · Operational</text>
                <text x="40" y="336" style={svgText({ fill: "#FFFFFF", fontWeight: 600, fontSize: 16 })}>Delivery + Client Development Teams</text>
                <text x="40" y="358" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>Receives: sprint goals, technical decisions, UAT scheduling, blockers</text>
                <text x="640" y="308" style={svgLabel({ fill: "#FFFFFF", fontWeight: 600 })}>Cadence</text>
                <text x="640" y="336" style={svgText({ fill: "#FFFFFF", fontSize: 13, fontWeight: 600 })}>Daily standups · Sprint reviews</text>
                <text x="640" y="356" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>Technical detail managed here;</text>
                <text x="640" y="370" style={{ fontFamily: "inherit", fontSize: 11, fill: "#FFFFFF" }}>escalates only when impacting macro schedule</text>

                {/* Escalation arrow */}
                <path d="M 1050 390 L 1050 140" stroke={GOLD} strokeWidth="2" strokeDasharray="6 4" fill="none" />
                <polygon points="1050,135 1045,148 1055,148" fill={GOLD} />

                {/* Bottom note */}
                <text x="20" y="415" style={{ fontFamily: "inherit", fontSize: 11, fontStyle: "italic", fill: "var(--text-body)" }}>The boundary between tiers is enforced — operational detail does not flow up uninvited,</text>
                <text x="20" y="430" style={{ fontFamily: "inherit", fontSize: 11, fontStyle: "italic", fill: "var(--text-body)" }}>and strategic directives do not bypass tactical management.</text>
                <text x="20" y="452" style={{ fontFamily: "inherit", fontSize: 11, fontStyle: "italic", fill: "var(--text-body)" }}>This boundary is what makes the program manageable at sponsor level without losing fidelity at execution level.</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── 07 Deliverables ── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ marginBottom: 40 }}>
            <span style={sectionNum}>07 — Program Deliverables</span>
            <h2 style={sectionH2}>The artifacts that carry the program — and the contract.</h2>
            <p style={sectionLead}>In a fixed-fee engagement, every artifact serves two audiences: the delivery team that operates against it, and the contract that's protected by it. Each output below was designed with both in mind.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderLeft: `3px solid ${BURG}`, padding: "20px 24px", borderRadius: "0 var(--radius-md) var(--radius-md) 0", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <Icon className="shrink-0 mt-0.5" style={{ width: 22, height: 22, color: GOLD }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, color: "var(--text)" }}>{title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-body)", lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing callout ── */}
        <div style={{ position: "relative", background: "var(--ink-2)", color: "var(--text)", padding: "56px 48px", borderRadius: "var(--radius-lg)", borderLeft: `4px solid ${GOLD}`, marginBottom: 0, border: "1px solid var(--line)", borderLeftColor: GOLD }}>
          <span style={{ fontSize: 96, position: "absolute", top: 8, left: 24, color: GOLD, opacity: 0.5, lineHeight: 1, fontWeight: 700 }}>&ldquo;</span>
          <p style={{ paddingLeft: 48, fontStyle: "italic", fontSize: 24, lineHeight: 1.4, fontWeight: 400, color: "var(--text-body)" }}>
            A program with a fixed term and fixed fees has exactly one job: protect both.{" "}
            <strong style={{ fontStyle: "normal", fontWeight: 700, color: "var(--text)" }}>Governance, change control, and stakeholder discipline</strong>{" "}
            are not overhead — they are the program.
          </p>
        </div>

      </div>
    </div>
  );
}
