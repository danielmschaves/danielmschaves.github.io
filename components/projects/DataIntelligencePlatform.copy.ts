/* Copy for the Data Intelligence Platform case study, prose and chart labels included.
   Mono labels are typed in UPPERCASE here, as the Ledger content rules ask. */

const en = {
  lead: "A one-year project to take a growing trading company from scattered operational systems to a unified data platform — data lake, data warehouse, BI and predictive models, all built from scratch. This was the foundation engagement where I formalized the planning cadence and sprint discipline I still use today.",
  facts: [
    ["ROLE", "Project Manager"],
    ["DURATION", "12 months"],
    ["DATA SOURCES", "3 systems"],
    ["STACK LAYERS", "DL · DW · BI · ML"],
  ] as [string, string][],
  tags: ["Project management", "Scrum + Kanban", "Modern data stack", "Data lake", "Data warehouse", "BI & predictive modeling", "Cloud (AWS / GCP / Azure)"],

  context: {
    kicker: "CONTEXT",
    title: ["From scattered operational data to a ", "single source of analytical truth", "."],
    start: {
      title: "The starting position",
      p1: "The client — a mid-market trading company — was running their business on three operational systems that didn’t talk to each other. Reports were assembled manually, leadership decisions ran on stale numbers, and there was no way to look forward: no forecasting, no demand modeling, no predictive view of the business.",
      p2: "The brief was deliberately ambitious. Build the entire analytical stack — ingestion, lake, warehouse, BI, predictive models — inside a single 12-month engagement, while delivering visible value along the way so leadership could feel the program working before it finished.",
    },
    challenge: {
      title: "The challenge",
      strong: "One year. Four phases. Continuous value.",
      p1: " Pure waterfall would have given leadership nothing to look at for nine months. Pure agile without a plan would have lost the architectural coherence the platform needed.",
      p2: "The answer was a hybrid: a high-level annual plan locking the macro phases and milestones, combined with two-week sprint execution inside each phase. Strategy at the top. Iteration at the bottom. The plan you’ll see below is exactly that — and it’s the planning model I still anchor delivery work to today.",
    },
  },

  lifecycle: {
    kicker: "ANNUAL LIFECYCLE",
    title: ["Four quarters. ", "Four phase shifts", ". One continuous build."],
    lead: "Each quarter has its own dominant phase, but the transitions are soft — planning continues into execution, monitoring begins before deployment ends. The boundaries below show emphasis, not isolation.",
    chart: {
      label: "ANNUAL TIMELINE",
      title: "Four phases mapped across the 12-month engagement",
      alt: "Timeline of four quarters and four phases: planning in Q1, MVP execution in Q2, deploy and test in Q3, and monitor and report in Q4, each with its key activities.",
      quarters: ["QUARTER 1", "QUARTER 2", "QUARTER 3", "QUARTER 4"],
      start: "START",
      close: "CLOSE",
      phases: [
        { title: "Planning", items: ["• Business & technical reqs", "• Cloud provider selection", "• Architecture for DL/DW + BI", "• Access & governance policy", "• Data dictionary + modeling"] },
        { title: "MVP execution", items: ["• Data lake ingestion", "• BI MVP build", "• DW implementation + tests", "• Validation + BI feedback", "• Predictive model setup"] },
        { title: "Deploy & test", items: ["• Predictive modeling tests", "• Final predictive deploy", "• End-to-end integration tests"] },
        { title: "Monitor & report", items: ["• Solution monitoring", "• Training & enablement", "• Feature expansion", "• Final report & sign-off"] },
      ],
    },
  },

  goals: {
    kicker: "QUARTERLY GOALS",
    title: ["One concrete milestone per quarter, ", "visible from outside the team", "."],
    lead: "Internal velocity is not a metric the client can feel. Every quarter therefore had to end on something demonstrable — something a stakeholder could see, click or query.",
    items: [
      { q: "Q1 · FOUNDATION", title: "Data flowing into the lake", desc: "Diagnostic + system spec complete; cloud provider selected; first ingestion pipelines live with data landing in the raw layer.", milestone: "MILESTONE · DATA IN THE RAW LAYER" },
      { q: "Q2 · INSIGHT", title: "BI MVP, DW operational", desc: "Warehouse built and validated; BI MVP shipped to business users; predictive modeling foundations laid for Q3.", milestone: "MILESTONE · BI MVP DELIVERED" },
      { q: "Q3 · PREDICT", title: "Predictive solution live", desc: "Modeling validated, integrated tests passed, predictive solution deployed into production with monitoring.", milestone: "MILESTONE · PREDICTIVE SOLUTION SHIPPED" },
      { q: "Q4 · SUSTAIN", title: "Operational + opportunity report", desc: "Solution in steady-state monitoring; team trained; expansion roadmap delivered; two new features contracted.", milestone: "MILESTONE · OPPORTUNITIES REPORT DELIVERED" },
    ],
  },

  backlog: {
    kicker: "BACKLOG MODEL",
    title: ["Three levels of detail. ", "Each one earns its place", "."],
    lead: "Coarse-grained items are for the client and the contract. Fine-grained items are for the team and the sprint. The middle layer is where they meet — and where the conversation about scope actually happens.",
    chart: {
      label: "BACKLOG HIERARCHY",
      title: "Deliverable → activity → task",
      sub: "The top two levels live in the project backlog. The bottom level is what enters a sprint.",
      alt: "Three-level hierarchy: one deliverable the client signs off, two activities (bodies of work) and four tasks that enter a sprint. The upper two levels belong to the project backlog; tasks live in the sprint backlog.",
      projectBacklog: { tag: "PROJECT BACKLOG", lines: ["Deliverables & activities", "refined with the team —", "the contractual outline."] },
      sprintBacklog: { tag: "SPRINT BACKLOG", lines: ["Tasks the team commits", "to inside a two-week", "sprint window."] },
      deliverable: ["Deliverable", "Outcome the client receives"],
      activity: ["Activity", "Body of work"],
      task: "Task",
      definitionsTitle: "DEFINITION AT EACH LEVEL",
      definitions: [
        ["Deliverable.", " What the client signs off — the contractual unit."],
        ["Activity.", " A body of work inside a deliverable; how the team groups effort."],
        ["Task.", " An atomic unit a team member can absorb inside a sprint."],
      ],
    },
  },

  q1: {
    kicker: "Q1 DELIVERABLES",
    title: ["Three deliverables that ", "set every downstream decision", "."],
    lead: "Q1 is the most consequential quarter of the project — not because it ships the most, but because every Q2–Q4 decision references the artifacts produced here. Get these wrong and the rest of the year compounds the error.",
    items: [
      { title: "Initial diagnostic report", desc: "Business + technical requirements, cloud cost estimates across AWS / GCP / Azure, architecture validation criteria, a data dictionary and a first modeling proposal." },
      { title: "System specification", desc: "Final DL/DW requirements, access & governance policies, ingestion + processing architecture, and initial infrastructure provisioning (buckets, clusters, VPNs, access controls)." },
      { title: "Data lake ingestion", desc: "Ingestion services for all three source systems, transformation routines, dimensional + fact models in the warehouse, and a stakeholder workshop to validate the approach." },
      { title: "Acceptance criteria (per deliverable)", desc: "Diagnostic → PM sign-off · system spec → client approval · DL ingestion → service in operation, validated against the spec." },
    ],
  },

  allocation: {
    kicker: "SPRINT 1 · RESOURCE ALLOCATION",
    title: ["Sprint one was built ", "tight on purpose", "."],
    lead: "A first sprint is also a calibration exercise. I planned Sprint 1 with no slack to measure real team capacity — then absorbed the learning into Sprint 2 onwards. The numbers below are the planned envelope; the lesson was always going to be in the variance.",
    chart: {
      label: "SPRINT 1 ALLOCATION",
      title: "Hours per role across activities (2-week sprint)",
      alt: "Hours per role in the first two-week sprint. Business requirements: data scientist 20h, data engineer 5h. Technical requirements: data scientist 20h, data engineer 5h. Cloud cost and provider selection: data engineer 10h. Project kick-off: PM 10h. 70 hours in total, planned with no buffer.",
      head: ["ACTIVITY", "DATA ENG. (H)", "DATA SCI. (H)", "PM (H)"],
      rows: [
        { title: "Business requirements", sub: "Prep + stakeholder interviews" },
        { title: "Technical requirements", sub: "Prep + tech-team interviews" },
        { title: "Cloud cost & provider selection", sub: "Pricing study + proposal compilation" },
        { title: "Project kick-off (PM)", sub: "Template, comms strategy, schedule" },
      ],
      totals: { title: "Sprint 1 totals", sub: "planned with no slack, by design", unit: "h" },
      note: [
        "Sprint 1 = 70h total committed across three roles, no buffer.",
        "The plan was to measure delivered vs. committed — and feed the gap into Sprint 2’s capacity envelope.",
        "This calibration step is now standard in every engagement I lead.",
      ],
    },
  },

  calendar: {
    kicker: "SPRINT 1 · DAILY PLAN",
    title: ["What the team actually ", "does on each day", "."],
    lead: "A weekly view that shows the rhythm: prep early in the week, stakeholder time mid-week, group discussion and documentation late in the week. Two weeks of this gets the foundational interviews and cloud proposal done end-to-end.",
    chart: {
      label: "TWO-WEEK SPRINT CALENDAR",
      title: "Daily activity by role",
      alt: "Two-week schedule for three roles (data scientist, data engineer, PM): preparation, cloud cost research and PM templates Monday to Wednesday; business interviews on Thursday of week 1 and technical interviews on Thursday of week 2, followed by a group discussion; documentation on Friday.",
      weeks: ["WEEK 1", "WEEK 2"],
      roles: ["DATA SCI.", "DATA ENG.", "PM"],
      days: ["MON", "TUE", "WED", "THU", "FRI"],
      w1: [
        ["Prep biz interview", "Cloud cost research", "Template adaptation"],
        ["Prep biz interview", "Cloud cost research", "Comms strategy"],
        ["Prep biz interview", "Cloud proposal draft", "Project schedule"],
      ],
      w2: [
        ["Prep tech interview", "Cloud cost research", "Template adaptation"],
        ["Prep tech interview", "Cloud cost research", "Comms strategy"],
        ["Prep tech interview", "Cloud proposal draft", "Project schedule"],
      ],
      thu: ["Business interview", "Tech interview"],
      sync: "Group discussion · share findings across the team",
      fri: "Documentation of results · all roles",
      legendTitle: "LEGEND",
      legend: ["Prep · research", "Proposal drafting", "PM activities", "Stakeholder time", "Team sync"],
      note: "Scrum ceremonies (daily standup, planning, review, retro) sit outside this view — they’re owned by the Scrum Master, not budgeted into role hours.",
    },
  },

  kanban: {
    kicker: "KANBAN WORKFLOW",
    title: ["From the project backlog to “done” — ", "six columns, one flow", "."],
    lead: "The board mirrors the backlog hierarchy. Deliverables and activities sit on the left as a roadmap; refined tasks flow rightward through the sprint columns. The review column is the quality control mechanism — every task gets a second pair of eyes before it can be marked complete.",
    chart: {
      label: "KANBAN BOARD",
      title: "Six-column flow with a quality gate",
      alt: "Six-column kanban board in two zones. Roadmap: a project backlog column (initial diagnostic, system specification, DL ingestion) and a sprint backlog column of refined tasks. Sprint execution: to do, in progress, review (the quality gate) and done. Every task passes review before it is done.",
      zones: ["ROADMAP", "SPRINT EXECUTION"],
      columns: ["Project backlog", "Sprint backlog", "To do", "In progress", "Review (QC)", "Done"],
      projectBacklog: ["Initial diagnostic", "System specification", "DL ingestion", "+ activities (refined)"],
      sprintBacklog: ["Prep biz interviews", "Biz interviews", "Cloud cost research", "Cloud proposal", "Kick-off comms plan"],
      todo: [["Task: pull cost data", "DE · 2h"], ["Task: define interview Q", "DS · 15h"]],
      doing: [["Task: draft cloud spec", "DE · 4h · in flight"], ["Task: schedule biz mtg", "DS · 5h · in flight"]],
      review: [["Task: cost research v1", "DE · awaiting\ntech-ref review"]],
      done: [["Template adaptation", "✓ PM · accepted"], ["Comms strategy v1", "✓ PM · accepted"]],
      note: [
        "Two acceptance layers — Definition of Done (internal) + Acceptance Criteria (client).",
        "DoD speeds up internal review; AC ensures the client gets exactly what the contract said they would.",
      ],
    },
  },

  foundation: {
    kicker: "FOUNDATION ESTABLISHED",
    title: ["What this project still gives me, ", "years later", "."],
    lead: "Looking back, the value of this engagement wasn’t only the platform I shipped — it was the planning model I built doing it. The patterns below are still the ones I anchor delivery work to today.",
    tag: "CARRIED FORWARD",
    items: [
      { title: "Three-level backlog as the universal translator", body: "The deliverable / activity / task hierarchy works because it speaks to three different audiences at once. The deliverable layer is the contract — what the client signs off. The activity layer is the conversation — where scope and effort actually get negotiated with the team. The task layer is the sprint — what gets done this week. Most delivery friction I’ve seen since comes from teams collapsing two of these into one." },
      { title: "First sprint as a calibration, not a commitment", body: "Sprint 1 was deliberately planned without slack — not because I expected the team to hit it perfectly, but because I needed to measure the gap. Velocity is empirical, and you only get a real number by running a tight first iteration and watching what actually lands. Every engagement I’ve led since starts the same way." },
      { title: "Quarterly milestones that a non-technical stakeholder can verify", body: "“Velocity is up” is not a milestone. “Data is in the raw layer” is. Every quarter ended on something the sponsor could see or touch — a working dashboard, a deployed model, a signed report. The discipline of writing the milestone before designing the work has saved more programs from drift than any process artifact I’ve used since." },
    ],
  },

  quote: ["The platform was the deliverable. The ", "planning model", " was the asset. Every delivery engagement I’ve led since has been a variation on the framework this project forced me to commit to paper."],
};

export type DataIntelligencePlatformCopy = typeof en;
export const copy: Record<"en", DataIntelligencePlatformCopy> = { en };
