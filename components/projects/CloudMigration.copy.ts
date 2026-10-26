/* Copy for the Cloud Migration case study, prose and chart labels included.
   Mono labels are typed in UPPERCASE here, as the Ledger content rules ask. */

import type { Lang } from "@/lib/i18n";

const en = {
  lead: "Project management framework for a global financial services enterprise’s pilot cloud migration — designed to prove AWS feasibility for a much larger enterprise modernization program. Twelve months. $1.2M fixed budget. Zero tolerance for unscheduled downtime.",
  facts: [
    ["ROLE", "Project Manager"],
    ["DURATION", "12 months"],
    ["BUDGET", "USD 1.2M"],
    ["SCOPE", "~200 servers"],
  ] as [string, string][],
  tags: ["Project management", "Cloud migration", "AWS", "Agile · 2-week sprints", "Risk management", "Stakeholder governance", "PMI / PMBOK"],

  context: {
    kicker: "CONTEXT & DIAGNOSIS",
    title: ["An aging footprint, ", "rising risk", ", and a feasibility window that closes quickly."],
    start: {
      title: "The starting position",
      p1: "The client operated a complex legacy infrastructure built through decades of growth and acquisitions — spread across six aging data centers, with roughly 200 servers supporting the internally-facing data analytics platform. Operational overhead was high, technological risk was rising, and the cost base was no longer defensible.",
      p2: "Leadership had committed to a multi-year enterprise modernization. But before signing off on that broader program, they needed proof: a contained migration that demonstrates AWS feasibility, validates the operating model, and produces reusable patterns for the larger effort to follow.",
    },
    mandate: {
      title: "The mandate",
      strong: "Move fast, but don’t break the business.",
      p1: " The data analytics platform had to keep running during core working hours — every minute of unscheduled downtime translated directly to financial loss and disrupted decision-making across the company.",
      p2: "The project also had to do double duty: deliver the migration and produce the SOPs, architecture decision records, and validated patterns the enterprise would later use to scale the same approach across the remaining infrastructure.",
    },
  },

  approach: {
    kicker: "STRATEGIC APPROACH",
    title: ["A lift-and-shift, sequenced as ", "ten iterative cycles", "."],
    lead: "Rather than treating the platform as one monolithic migration, I structured delivery around ten prioritized use cases — each migrated end-to-end inside a 2-week sprint cadence. Risk is localized. Value is demonstrated continuously. The team learns and tightens estimates with every cycle.",
    chart: {
      label: "DELIVERY METHODOLOGY",
      title: "Five-step migration flow, repeated per use case",
      sub: "Each cycle follows the same disciplined sequence, governed by a formal SOP and gated by UAT before any production cutover.",
      alt: "Five steps per use case: discover, move, rebuild, validate with a mandatory UAT quality gate, and cut over.",
      caption: "USE CASE MIGRATION CYCLE · 2-WEEK SPRINT",
      gate: "MANDATORY QUALITY GATE",
      steps: [
        { tag: "DISCOVER", title: "Initial mapping", lines: ["Dependency analysis,", "scope confirmation"] },
        { tag: "MOVE", title: "Database migration", lines: ["Transition data sources", "to the AWS target"] },
        { tag: "REBUILD", title: "Analytics migration", lines: ["Processing & application", "logic to the new environment"] },
        { tag: "VALIDATE", title: "Web server + UAT", lines: ["End-to-end experience,", "mandatory UAT gate"] },
        { tag: "CUT OVER", title: "Decommissioning", lines: ["Formal cutover,", "resource retirement"] },
      ],
    },
  },

  schedule: {
    kicker: "MASTER SCHEDULE",
    title: ["The 12-month ", "Gantt", ": phased setup, parallel use-case streams, hypercare close-out."],
    lead: "Use case 1 functions as the pathfinder — extended timeline to absorb learning. Subsequent use cases run in parallel pairs to double throughput without doubling cost.",
    chart: {
      label: "MASTER SCHEDULE",
      title: "12-month Gantt — phases, milestones, parallel streams",
      alt: "Gantt chart over 12 months: planning and setup in January and February, the use case 1 pathfinder from February to April, use cases 2 to 10 in overlapping pairs from April to November, and hypercare in November and December, with four milestones.",
      months: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      quarters: ["Q1", "Q2", "Q3", "Q4"],
      rows: { setup: "Planning & setup", useCases: "Use case migration", closure: "Closure & hypercare" },
      setupNote: "Inventory · environments · PoC",
      pathfinder: "UC1 · PATHFINDER",
      milestones: [
        { id: "M1", lines: ["Kickoff +", "environments ready"] },
        { id: "M2", lines: ["Pathfinder", "complete"] },
        { id: "M3", lines: ["9 of 10", "use cases live"] },
        { id: "M4", lines: ["Final", "cutover"] },
      ],
      legend: { title: "LEGEND", setup: "Setup & foundational phases", sprint: "Use-case migration sprint", hypercare: "Hypercare & closure", milestone: "Executive milestone" },
    },
  },

  budget: {
    kicker: "BUDGET & RESOURCING",
    title: ["A ", "fixed-rate, fixed-FTE", " envelope that absorbs scope variance without absorbing margin."],
    lead: "The financial model is deliberately simple: 800 hours per month at a blended rate of $125/hour, totaling exactly $100,000 in monthly burn. Predictable for the client, defensible internally, transparent under audit.",
    stats: [
      { value: "$1.2M", label: "Fixed-fee professional services envelope, over 12 months" },
      { value: "$6K", label: "Per server migrated, within the industry benchmark of $3K–$8K" },
      { value: "9,600", label: "Billable hours in total: 800 hours a month × 12 months" },
    ],
    chart: {
      label: "RESOURCE MIX",
      title: "Monthly resource allocation by role (800h envelope)",
      sub: "Engineering capacity dominates; management overhead held to ~12% to maximize delivery throughput.",
      alt: "Bar chart of monthly hours: cloud engineer 336 hours (42%), data engineer 336 (42%), cloud engineering tech lead 64 (8%), project manager 64 (8%); 800 hours in total.",
      caption: "HOURS PER MONTH PER ROLE",
      roles: [
        { name: "Cloud engineer", value: "336h · 42%" },
        { name: "Data engineer", value: "336h · 42%" },
        { name: "Cloud engineering tech lead", value: "64h · 8%" },
        { name: "Project manager", value: "64h · 8%" },
      ],
      total: "Total monthly capacity",
      totalValue: "800h",
      totalNote: "= USD 100,000 a month at a $125/hr blended rate",
      note: { title: "THROUGHPUT NOTE", lines: ["Two parallel engineering streams", "double output without doubling", "cost — 84% of capacity is", "delivery-side, not overhead."] },
    },
  },

  risk: {
    kicker: "RISK MANAGEMENT",
    title: ["Four risk domains, each with ", "concrete mitigations", " and a measurable success state."],
    chart: {
      label: "RISK REGISTER",
      title: "Risk · mitigation · target outcome",
      alt: "Risk register with four domains: business continuity (high), project delivery (medium), technical discovery (medium) and budget and timeline (low), each with its risk, mitigations and target outcome.",
      head: ["DOMAIN", "RISK", "MITIGATION", "TARGET OUTCOME"],
      severity: { high: "HIGH", medium: "MEDIUM", low: "LOW" },
      rows: [
        {
          id: "A", severity: "high" as const,
          domain: ["Business", "continuity"],
          risk: ["Unscheduled downtime", "during working hours"],
          mitigation: ["• Pre-scheduled windows, 2-week notice", "• One use case at a time isolates impact", "• Mandatory UAT + rapid rollback ready", "• Sources stay live until validation"],
          target: ["Zero unscheduled", "downtime in hours"],
        },
        {
          id: "B", severity: "medium" as const,
          domain: ["Project", "delivery"],
          risk: ["Speed vs. quality", "tension"],
          mitigation: ["• Non-negotiable quality gates pre-prod", "• Fixed 2-week sprints, velocity tracked", "• Embedded technical writer for docs", "• UC1 as pathfinder, extended discovery"],
          target: ["100% UAT pass rate;", "zero critical incidents"],
        },
        {
          id: "C", severity: "medium" as const,
          domain: ["Technical", "discovery"],
          risk: ["Legacy system", "complexity"],
          mitigation: ["• PoC exposes hidden dependencies", "• Initial mapping per use case", "• Real-time sharing in daily standups", "• AWS discovery + traffic analysis"],
          target: ["Complete dependency", "map; refined estimates"],
        },
        {
          id: "D", severity: "low" as const,
          domain: ["Budget &", "timeline"],
          risk: ["Cost overruns,", "schedule delays"],
          mitigation: ["• Fixed-rate model ($125/hr) = predictability", "• 800h monthly burn, managed by velocity", "• Parallel streams: 2× throughput, flat cost", "• Continuous monitoring in weekly PM review"],
          target: ["Delivered within", "$1.2M / 12 months"],
        },
      ],
      legend: { title: "RISK SEVERITY", note: "Severity reflects pre-mitigation exposure." },
    },
  },

  governance: {
    kicker: "COMMUNICATION & TEAM",
    title: ["A ", "two-tier governance", " model that protects delivery focus and routes escalation cleanly."],
    lead: "Operational decisions stay with the working team. Strategic decisions — scope, budget, escalated risk — route to a defined steering committee on a defined cadence. The structure is deliberately small and the responsibilities are deliberately clear.",
    chart: {
      label: "GOVERNANCE STRUCTURE",
      title: "Two communication tiers, one shared accountability",
      alt: "Governance chart: a strategic tier (delivery organization, project manager, client sponsors) meeting bi-weekly, and an operational tier (delivery engineering, joint workgroup, client technical team) meeting daily, with an escalation path from the workgroup to the project manager for scope, budget and risk.",
      strategic: "STRATEGIC TIER · STEERING COMMITTEE · BI-WEEKLY",
      operational: "OPERATIONAL TIER · WORKING TEAMS · DAILY STANDUPS + BI-WEEKLY SPRINT CEREMONIES",
      top: [
        { title: "Delivery org", lines: ["Executive lead", "+ management"] },
        { title: "Project Manager", lines: ["Scope · time · cost", "Risk · communication"] },
        { title: "Client sponsors", lines: ["Head of data", "+ tech leadership"] },
      ],
      bottom: [
        { title: "Delivery engineering", lines: ["Cloud engineering tech lead", "Data engineering tech lead", "2× cloud engineers", "2× data engineers"] },
        { title: "Joint workgroup", lines: ["Daily standups (15 min)", "Sprint planning · reviews", "Retrospectives", "Sprint reports → PM → exec."] },
        { title: "Client technical", lines: ["Client tech lead", "UAT validators", "Subject matter experts", "Security & IT liaisons"] },
      ],
      escalation: ["ESCALATION PATH", "scope · budget · risk"],
    },
  },

  deliverables: {
    kicker: "DELIVERABLES",
    title: ["What the client receives — and what the ", "enterprise keeps", "."],
    lead: "The mandate has two layers: deliver the migration and produce the reusable artifacts that enable the broader enterprise rollout. Every output below was designed to outlive this engagement.",
    items: [
      { title: "Project charter & scope statement", desc: "Formal mandate, objectives, fixed-term and fixed-fee constraints, and an explicit out-of-scope list." },
      { title: "Master Gantt schedule", desc: "12-month timeline with phases, parallel streams, milestones and dependencies, tracked weekly." },
      { title: "Budget & resource plan", desc: "Fixed-rate envelope with monthly burn, FTE allocation and per-server unit economics." },
      { title: "Risk register & mitigation plan", desc: "Four prioritized risk domains with mitigations, owners and measurable target outcomes." },
      { title: "Communication plan", desc: "Two-tier governance, defined ceremonies and channels, a sprint report template and escalation paths." },
      { title: "Team structure & RACI", desc: "Roles, responsibilities and decision rights mapped across both organizations." },
      { title: "Standard operating procedures", desc: "Reusable SOPs covering the five-step migration cycle, applicable to the enterprise rollout." },
      { title: "Architecture decision records", desc: "Pattern library and ADRs that form the operational blueprint for enterprise scale-out." },
    ],
  },

  quote: ["The project is the migration. The ", "deliverable", " is the blueprint. A well-run pilot is the most expensive thing an enterprise can skip — and the cheapest one it can run."],
};

export type CloudMigrationCopy = typeof en;
export const copy: Record<Lang, CloudMigrationCopy> = { en, pt: en };
