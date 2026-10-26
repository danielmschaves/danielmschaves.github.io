/* Copy for the Data Warehouse Modernization case study, prose and chart labels included.
   Mono labels are typed in UPPERCASE here, as the Ledger content rules ask. */

const en = {
  lead: "A multi-project program migrating a legacy SQL Server data warehouse to the modern data stack (Snowflake, dbt, Tableau). Designed around three non-negotiables: fixed term, fixed consultancy fees, and zero scope drift — defended by formal gateways, a parking-lot system, and an explicit change-control process.",
  facts: [
    ["ROLE", "Program Manager"],
    ["DURATION", "18 months"],
    ["ENGAGEMENT", "Fixed-fee"],
    ["CONSTITUENT PROJECTS", "Multiple"],
  ] as [string, string][],
  tags: ["Program management", "Modern data stack", "Snowflake · dbt · Tableau", "Governance", "Change control", "RAID management", "C-level stakeholders"],

  objective: {
    kicker: "STRATEGIC OBJECTIVE & KEY RESULTS",
    title: ["One mandate. ", "Three non-negotiables", "."],
    lead: "Migrate the data warehouse to the modern data stack — and do it within the agreed 18 months and consultancy fees. Everything else in the program is in service of those three constraints.",
    stats: [
      { value: "< 5%", label: "Cost variance against the total agreed fees" },
      { value: "100%", label: "Milestone completion across the macro-schedule phases" },
      { value: "> 98%", label: "Data validation rate during the mandatory UAT phase" },
      { value: "0", label: "Unmanaged scope: every addition routed through the formal CCP" },
    ],
  },

  lifecycle: {
    kicker: "PROGRAM LIFECYCLE",
    title: ["Three phases. ", "Each ends at a contractual gateway", "."],
    lead: "The program is structured around the standard lifecycle — initiation, delivery, closure — but with one twist: every phase boundary is also a formal control point. No phase advances until its deliverables are signed off, locking the scope behind it.",
    phases: [
      { num: "I", phase: "INITIATION", duration: "~3 MONTHS", title: "Define the boundary", body: "Formal program kick-off, scope definition, and the crucial 18-month fixed-term acknowledgement. Core activity: data source mapping and dependency analysis.", outputs: "Migration assessment · Migration strategy · Way of working" },
      { num: "II", phase: "DELIVERY", duration: "~13 MONTHS", title: "Execute & validate", body: "Migration begins with a PoC to validate the approach and refine estimates, then iterates through agile cycles. Mandatory UAT with the client’s data analysts gates every release.", outputs: "Migrated DW · Validated quality · Decommissioned legacy" },
      { num: "III", phase: "CLOSURE", duration: "~2 MONTHS", title: "Confirm adherence", body: "Formal sign-off against the fixed mandate. Success is defined narrowly: full migration to Snowflake/dbt/Tableau within 18 months and within the agreed fees.", outputs: "Final report · Resource transition · Contract close-out" },
    ],
    chart: {
      label: "MASTER SCHEDULE",
      title: "18-month program lifecycle with phase gateways",
      sub: "Each gateway represents a formal sign-off — the prior phase’s scope is locked, and the next phase cannot begin without it.",
      alt: "18-month lifecycle: initiation for about 3 months, delivery for about 13 months in four waves, closure for about 2 months, with four contractual gateways: scope freeze, mid-program review, validation lock and closeout.",
      months: ["M1", "M3", "M5", "M7", "M9", "M11", "M13", "M15", "M17", "M18"],
      phases: {
        initiation: ["I · INITIATION", "~3 months"],
        delivery: ["II · DELIVERY", "~13 months · migration · validation · decommissioning"],
        closure: ["III · CLOSURE", "~2 months"],
      },
      initiationNote: ["Kickoff · assessment", "Strategy · governance"],
      closureNote: ["Cutover · sign-off", "Final reporting"],
      waves: ["PoC · wave 1", "Wave 2", "Wave 3", "Wave 4 · UAT"],
      gateways: [
        { id: "G1", title: "Scope freeze", lines: ["Assessment + strategy", "approved by sponsor"] },
        { id: "G2", title: "Mid-program review", lines: ["Cost variance, milestone", "rate, top-3 risks"] },
        { id: "G3", title: "Validation lock", lines: ["UAT pass >98%;", "cutover authorized"] },
        { id: "G4", title: "Closeout", lines: ["Contract sign-off"] },
      ],
      legend: { phase: "Phase", wave: "Delivery wave", gateway: "Contractual gateway" },
    },
  },

  governance: {
    kicker: "GOVERNANCE FRAMEWORK",
    title: ["A way of working built in ", "four deliberate steps", "."],
    lead: "Before execution begins, the rules of execution are defined, presented, signed off, and then operated. Governance is not the byproduct of program management — it is the first deliverable of program management.",
    chart: {
      label: "WAY-OF-WORKING SETUP",
      title: "From shared rules to enforced execution",
      alt: "Four steps in sequence: development, presentation, formal agreement, and execution and review, each with its goal.",
      caption: "SEQUENCE · EACH STEP IS A PRECONDITION FOR THE NEXT",
      steps: [
        { title: "Development", lines: ["Define cadence,", "decision authority,", "reporting format —", "jointly with the client."] },
        { title: "Presentation", lines: ["Formally document", "and present the", "cohesive way of working", "to all key stakeholders."] },
        { title: "Formal agreement", lines: ["Obtain sign-off from", "the client PM — secures", "contractual commitment", "to defined standards."] },
        { title: "Execution & review", lines: ["Adherence monitored", "via CV, milestone rate", "and CR frequency;", "periodic review."] },
      ],
      goalsTitle: "GOAL AT EACH STEP",
      goals: ["Shared operational standards", "Transparency & common understanding", "Contractual commitment to adherence", "Effective control"],
    },
  },

  change: {
    kicker: "CHANGE CONTROL",
    title: ["How scope additions are handled — and how the ", "fixed-fee contract", " is defended."],
    lead: "A fixed-fee, fixed-term program lives or dies by its change-control discipline. The program operates a strict three-step CCP, backed by a parking lot to capture anything ambiguous and formal gateways that lock prior phases against retroactive rework.",
    chart: {
      label: "CHANGE CONTROL PROCESS (CCP)",
      title: "From scope-add request to sponsor decision",
      alt: "Change control process: a scope addition request is routed to the CCP, its impact is quantified, and three options go to the C-level sponsor: accept the change, swap in equivalent scope (preferred), or postpone. Four defensive mechanisms support it.",
      trigger: { tag: "TRIGGER", title: "Scope addition", line: "request from the client" },
      steps: [
        { tag: "STEP 01 · IMMEDIATE", title: "Route to CCP", lines: ["Park if ambiguous;", "never absorb silently."] },
        { tag: "STEP 02 · QUANTIFY", title: "Impact analysis", lines: ["Effort, timeline, fee delta", "— by BA + engineering."] },
        { tag: "STEP 03 · DECIDE", title: "Present 3 options", lines: ["to the C-level sponsor", "for resolution."] },
      ],
      options: [
        { tag: "OPTION A", title: "Accept change", lines: ["Higher cost.", "Longer timeline if", "delay pushes beyond", "the 18-month term."] },
        { tag: "OPTION B · PREFERRED", title: "Swap equivalent", lines: ["Maintain cost and time", "by removing existing", "items of equivalent", "effort from scope."] },
        { tag: "OPTION C", title: "Postpone", lines: ["Defer the request", "to a follow-on engagement", "once the 18-month program", "is formally closed."] },
      ],
      defenseTitle: "DEFENSIVE MECHANISMS SUPPORTING THE CCP",
      defenses: [
        { title: "Parking lot", lines: ["Capture every out-of-scope", "item; route it to CCP evaluation."] },
        { title: "Formal gateways", lines: ["Lock phases at completion;", "prior scope cannot be reopened."] },
        { title: "CR frequency KPI", lines: ["Leading indicator — high volume", "signals stress on the contract."] },
        { title: "Quantification rule", lines: ["No CR is decided without", "explicit effort + fee impact."] },
      ],
    },
  },

  kpis: {
    kicker: "PERFORMANCE MONITORING",
    title: ["Four KPIs the C-level cares about — and ", "nothing else on the dashboard", "."],
    lead: "Operational telemetry stays in the working teams. What rises to the sponsor is exactly what informs sponsor-level decisions: financial adherence, schedule adherence, quality, and the leading indicator of scope stress.",
    chart: {
      label: "EXECUTIVE KPI DASHBOARD",
      title: "What the head of data sees, monthly",
      alt: "Four KPIs: cost variance under 5%, 100% milestone completion, data validation above 98%, and change request frequency as a leading indicator; supported by RAID management of risks, assumptions, issues and dependencies.",
      cards: [
        { tag: "KPI 01 · FINANCIAL CONTROL", title: "Budget/cost variance (CV)", value: "< 5%", unit: "target", lines: ["Tracks actual expenditure vs.", "the agreed consultancy fees."] },
        { tag: "KPI 02 · SCHEDULE", title: "Milestone completion rate", value: "100%", unit: "target", lines: ["Confirms adherence to the", "18-month fixed term."] },
        { tag: "KPI 03 · QUALITY", title: "Data validation rate", value: "> 98%", unit: "target", lines: ["Measured during UAT — gates", "every production release."] },
        { tag: "KPI 04 · SCOPE CONTROL", title: "Change request frequency", value: "↓", unit: "leading indicator", lines: ["High volume = stress on the", "CCP; trend monitored monthly."] },
      ],
      raidTitle: "SUPPORTED BY CENTRALIZED RAID MANAGEMENT",
      raid: [
        { letter: "R", title: "Risks", lines: ["Proactive mitigation;", "focus on fixed constraints."] },
        { letter: "A", title: "Assumptions", lines: ["Baseline premises;", "if invalidated → risk/issue."] },
        { letter: "I", title: "Issues", lines: ["Reactive resolution; escalated", "only on schedule/fee impact."] },
        { letter: "D", title: "Dependencies", lines: ["External constraints —", "source access, infra readiness."] },
      ],
    },
  },

  stakeholders: {
    kicker: "STAKEHOLDER MANAGEMENT",
    title: ["Communicating with the sponsor means ", "filtering, not flooding", "."],
    lead: "The head of data does not need standup blockers. The head of data needs to know whether the program is strategically on track, financially on track, and that the top risks are being handled. The communication model is built around that distinction.",
    chart: {
      label: "STAKEHOLDER TIERS",
      title: "Who hears what, and how often",
      alt: "Three stakeholder tiers: strategic (client head of data and C-level sponsor, monthly), tactical (delivery and client PMs, weekly) and operational (development teams, daily), with escalation flowing upward only when needed.",
      cadence: "CADENCE",
      tiers: [
        { tag: "TIER 01 · STRATEGIC", who: "Client head of data · C-level sponsor", receives: "Receives: milestone status, CV, top-3 mitigated risks, gateway approvals", cadence: "Monthly steering · quarterly review", lines: ["Escalation on demand only when", "fixed constraints are at risk"] },
        { tag: "TIER 02 · TACTICAL", who: "Joint management · delivery PM + client PM", receives: "Receives: governance enforcement, CCP decisions, RAID review, vendor coordination", cadence: "Weekly PM sync · bi-weekly status", lines: ["All scope, schedule and budget decisions", "originate or pass through here"] },
        { tag: "TIER 03 · OPERATIONAL", who: "Delivery + client development teams", receives: "Receives: sprint goals, technical decisions, UAT scheduling, blockers", cadence: "Daily standups · sprint reviews", lines: ["Technical detail managed here;", "escalates only when impacting the macro schedule"] },
      ],
      escalation: "ESCALATION",
      note: [
        "The boundary between tiers is enforced — operational detail does not flow up uninvited,",
        "and strategic directives do not bypass tactical management.",
        "This boundary is what makes the program manageable at sponsor level without losing fidelity at execution level.",
      ],
    },
  },

  deliverables: {
    kicker: "PROGRAM DELIVERABLES",
    title: ["The artifacts that carry the program — and ", "the contract", "."],
    lead: "In a fixed-fee engagement, every artifact serves two audiences: the delivery team that operates against it, and the contract that’s protected by it. Each output below was designed with both in mind.",
    items: [
      { title: "Program charter & kick-off pack", desc: "Formal program objectives, premises, the 18-month fixed-term constraint, and the acknowledged contractual boundary." },
      { title: "Migration assessment & strategy", desc: "Data source map, dependency analysis, and the strategy document that defines the fixed contract boundary." },
      { title: "Governance framework (way of working)", desc: "Four-step model: development → presentation → formal agreement → execution & review." },
      { title: "Change control process (CCP)", desc: "Three-step protocol — route → quantify → decide — with the parking lot and formal gateways as defenses." },
      { title: "Integrated master schedule", desc: "Cross-project dependency map; tracks shared resources, particularly data engineers and data analysts." },
      { title: "RAID log & control register", desc: "Centralized risks, assumptions, issues and dependencies — owners, deadlines and escalation criteria." },
      { title: "Executive KPI dashboard", desc: "Four KPIs only: cost variance, milestone rate, data validation rate, change request frequency." },
      { title: "Stakeholder management plan", desc: "Three-tier model with defined cadence, content and escalation criteria for each tier." },
    ],
  },

  quote: ["A program with a fixed term and fixed fees has exactly one job: protect both. ", "Governance, change control and stakeholder discipline", " are not overhead — they are the program."],
};

export type DWProgramCopy = typeof en;
export const copy: Record<"en", DWProgramCopy> = { en };
