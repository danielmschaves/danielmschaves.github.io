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
      ucPrefix: "UC",
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
const pt: CloudMigrationCopy = {
  lead: "Framework de gestão de projeto para a migração piloto para a nuvem de uma empresa global de serviços financeiros — desenhado para provar a viabilidade da AWS antes de um programa de modernização corporativa muito maior. Doze meses. Orçamento fixo de US$ 1,2 mi. Tolerância zero a paradas não programadas.",
  facts: [
    ["PAPEL", "Project Manager"],
    ["DURAÇÃO", "12 meses"],
    ["ORÇAMENTO", "US$ 1,2 mi"],
    ["ESCOPO", "~200 servidores"],
  ],
  tags: ["Gestão de projetos", "Migração para a nuvem", "AWS", "Agile · sprints de 2 semanas", "Gestão de riscos", "Governança de stakeholders", "PMI / PMBOK"],

  context: {
    kicker: "CONTEXTO & DIAGNÓSTICO",
    title: ["Uma infraestrutura envelhecida, ", "risco crescente", " e uma janela de viabilidade que fecha rápido."],
    start: {
      title: "O ponto de partida",
      p1: "O cliente operava uma infraestrutura legada complexa, construída ao longo de décadas de crescimento e aquisições — espalhada por seis data centers envelhecidos, com cerca de 200 servidores sustentando a plataforma interna de analytics. O custo operacional era alto, o risco tecnológico crescia e a base de custos já não se justificava.",
      p2: "A liderança tinha se comprometido com uma modernização corporativa de vários anos. Mas, antes de aprovar esse programa maior, precisava de uma prova: uma migração contida que demonstrasse a viabilidade da AWS, validasse o modelo operacional e produzisse padrões reutilizáveis para o esforço maior que viria depois.",
    },
    mandate: {
      title: "O mandato",
      strong: "Ir rápido, sem quebrar o negócio.",
      p1: " A plataforma de analytics precisava continuar rodando no horário comercial — cada minuto de parada não programada virava perda financeira direta e atrapalhava decisões na empresa inteira.",
      p2: "O projeto também tinha dupla função: entregar a migração e produzir os SOPs, os registros de decisão de arquitetura e os padrões validados que a empresa usaria depois para escalar a mesma abordagem no restante da infraestrutura.",
    },
  },

  approach: {
    kicker: "ABORDAGEM ESTRATÉGICA",
    title: ["Um lift-and-shift, sequenciado em ", "dez ciclos iterativos", "."],
    lead: "Em vez de tratar a plataforma como uma migração monolítica, estruturei a entrega em dez casos de uso priorizados — cada um migrado de ponta a ponta dentro de uma cadência de sprints de 2 semanas. O risco fica localizado. O valor aparece continuamente. O time aprende e ajusta as estimativas a cada ciclo.",
    chart: {
      label: "METODOLOGIA DE ENTREGA",
      title: "Fluxo de migração em cinco etapas, repetido a cada caso de uso",
      sub: "Cada ciclo segue a mesma sequência disciplinada, regida por um SOP formal e com UAT como gate antes de qualquer cutover em produção.",
      alt: "Cinco etapas por caso de uso: descobrir, migrar, reconstruir, validar com um gate obrigatório de qualidade em UAT e fazer o cutover.",
      caption: "CICLO DE MIGRAÇÃO POR CASO DE USO · SPRINT DE 2 SEMANAS",
      gate: "GATE OBRIGATÓRIO DE QUALIDADE",
      steps: [
        { tag: "DESCOBRIR", title: "Mapeamento inicial", lines: ["Análise de dependências,", "confirmação de escopo"] },
        { tag: "MIGRAR", title: "Migração do banco", lines: ["Fontes de dados levadas", "ao destino na AWS"] },
        { tag: "RECONSTRUIR", title: "Migração do analytics", lines: ["Lógica de processamento", "e aplicação no novo ambiente"] },
        { tag: "VALIDAR", title: "Servidor web + UAT", lines: ["Experiência de ponta a ponta,", "gate obrigatório de UAT"] },
        { tag: "CUTOVER", title: "Desativação", lines: ["Virada formal,", "desligamento de recursos"] },
      ],
    },
  },

  schedule: {
    kicker: "CRONOGRAMA MESTRE",
    title: ["O ", "Gantt", " de 12 meses: preparação em fases, frentes de casos de uso em paralelo e encerramento em hypercare."],
    lead: "O caso de uso 1 funciona como pathfinder — com prazo estendido para absorver o aprendizado. Os seguintes rodam em pares paralelos, dobrando a vazão sem dobrar o custo.",
    chart: {
      label: "CRONOGRAMA MESTRE",
      title: "Gantt de 12 meses — fases, marcos e frentes paralelas",
      alt: "Gantt de 12 meses: planejamento e preparação em janeiro e fevereiro, o pathfinder do caso de uso 1 de fevereiro a abril, os casos de uso 2 a 10 em pares sobrepostos de abril a novembro e hypercare em novembro e dezembro, com quatro marcos.",
      months: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"],
      quarters: ["T1", "T2", "T3", "T4"],
      rows: { setup: "Planejamento & preparação", useCases: "Migração dos casos de uso", closure: "Encerramento & hypercare" },
      setupNote: "Inventário · ambientes · PoC",
      pathfinder: "CU1 · PATHFINDER",
      ucPrefix: "CU",
      milestones: [
        { id: "M1", lines: ["Kickoff +", "ambientes prontos"] },
        { id: "M2", lines: ["Pathfinder", "concluído"] },
        { id: "M3", lines: ["9 de 10 casos", "de uso no ar"] },
        { id: "M4", lines: ["Cutover", "final"] },
      ],
      legend: { title: "LEGENDA", setup: "Fases de preparação e fundação", sprint: "Sprint de migração de caso de uso", hypercare: "Hypercare & encerramento", milestone: "Marco executivo" },
    },
  },

  budget: {
    kicker: "ORÇAMENTO & RECURSOS",
    title: ["Um envelope de ", "taxa e FTEs fixos", " que absorve variação de escopo sem absorver margem."],
    lead: "O modelo financeiro é simples de propósito: 800 horas por mês a uma taxa média de US$ 125/hora, somando exatamente US$ 100.000 de consumo mensal. Previsível para o cliente, defensável internamente, transparente em auditoria.",
    stats: [
      { value: "US$ 1,2 mi", label: "Envelope de serviços profissionais com preço fixo, em 12 meses" },
      { value: "US$ 6 mil", label: "Por servidor migrado, dentro da referência de mercado de US$ 3 mil–8 mil" },
      { value: "9.600", label: "Horas faturáveis no total: 800 horas por mês × 12 meses" },
    ],
    chart: {
      label: "COMPOSIÇÃO DO TIME",
      title: "Alocação mensal de recursos por papel (envelope de 800h)",
      sub: "A capacidade de engenharia domina; o overhead de gestão fica em ~12% para maximizar a vazão de entrega.",
      alt: "Gráfico de barras com horas por mês: cloud engineer 336 horas (42%), data engineer 336 (42%), tech lead de cloud engineering 64 (8%), project manager 64 (8%); 800 horas no total.",
      caption: "HORAS POR MÊS POR PAPEL",
      roles: [
        { name: "Cloud engineer", value: "336h · 42%" },
        { name: "Data engineer", value: "336h · 42%" },
        { name: "Tech lead de cloud engineering", value: "64h · 8%" },
        { name: "Project manager", value: "64h · 8%" },
      ],
      total: "Capacidade mensal total",
      totalValue: "800h",
      totalNote: "= US$ 100.000 por mês a uma taxa média de US$ 125/h",
      note: { title: "NOTA SOBRE VAZÃO", lines: ["Duas frentes de engenharia em", "paralelo dobram a entrega sem", "dobrar o custo — 84% da capacidade", "é entrega, não overhead."] },
    },
  },

  risk: {
    kicker: "GESTÃO DE RISCOS",
    title: ["Quatro domínios de risco, cada um com ", "mitigações concretas", " e um estado de sucesso mensurável."],
    chart: {
      label: "REGISTRO DE RISCOS",
      title: "Risco · mitigação · resultado esperado",
      alt: "Registro de riscos com quatro domínios: continuidade do negócio (alto), entrega do projeto (médio), descoberta técnica (médio) e orçamento e prazo (baixo), cada um com seu risco, mitigações e resultado esperado.",
      head: ["DOMÍNIO", "RISCO", "MITIGAÇÃO", "RESULTADO ESPERADO"],
      severity: { high: "ALTO", medium: "MÉDIO", low: "BAIXO" },
      rows: [
        {
          id: "A", severity: "high",
          domain: ["Continuidade", "do negócio"],
          risk: ["Parada não programada", "no horário comercial"],
          mitigation: ["• Janelas agendadas, aviso de 2 semanas", "• Um caso de uso por vez isola o impacto", "• UAT obrigatório + rollback rápido", "• Fontes no ar até a validação"],
          target: ["Zero paradas não", "programadas no expediente"],
        },
        {
          id: "B", severity: "medium",
          domain: ["Entrega do", "projeto"],
          risk: ["Tensão entre", "velocidade e qualidade"],
          mitigation: ["• Gates de qualidade inegociáveis pré-prod", "• Sprints fixas de 2 semanas, velocidade medida", "• Technical writer no time para a documentação", "• CU1 como pathfinder, descoberta estendida"],
          target: ["100% de aprovação em UAT;", "zero incidentes críticos"],
        },
        {
          id: "C", severity: "medium",
          domain: ["Descoberta", "técnica"],
          risk: ["Complexidade dos", "sistemas legados"],
          mitigation: ["• A PoC expõe dependências ocultas", "• Mapeamento inicial por caso de uso", "• Compartilhamento em tempo real nas dailies", "• Discovery da AWS + análise de tráfego"],
          target: ["Mapa completo de dependências;", "estimativas refinadas"],
        },
        {
          id: "D", severity: "low",
          domain: ["Orçamento", "& prazo"],
          risk: ["Estouro de custo,", "atrasos no cronograma"],
          mitigation: ["• Taxa fixa (US$ 125/h) = previsibilidade", "• Consumo de 800h/mês, gerido pela velocidade", "• Frentes paralelas: 2× vazão, custo estável", "• Monitoramento contínuo na revisão semanal"],
          target: ["Entregue dentro de", "US$ 1,2 mi / 12 meses"],
        },
      ],
      legend: { title: "SEVERIDADE DO RISCO", note: "A severidade reflete a exposição antes da mitigação." },
    },
  },

  governance: {
    kicker: "COMUNICAÇÃO & TIME",
    title: ["Um modelo de ", "governança em dois níveis", " que protege o foco da entrega e encaminha escalonamentos sem ruído."],
    lead: "Decisões operacionais ficam com o time de trabalho. Decisões estratégicas — escopo, orçamento, riscos escalonados — vão para um comitê executivo definido, em uma cadência definida. A estrutura é pequena de propósito e as responsabilidades são claras de propósito.",
    chart: {
      label: "ESTRUTURA DE GOVERNANÇA",
      title: "Dois níveis de comunicação, uma responsabilidade compartilhada",
      alt: "Governança: um nível estratégico (organização de entrega, project manager, patrocinadores do cliente) que se reúne quinzenalmente e um nível operacional (engenharia de entrega, grupo de trabalho conjunto, time técnico do cliente) que se reúne diariamente, com um caminho de escalonamento do grupo de trabalho para o project manager em escopo, orçamento e risco.",
      strategic: "NÍVEL ESTRATÉGICO · COMITÊ EXECUTIVO · QUINZENAL",
      operational: "NÍVEL OPERACIONAL · TIMES DE TRABALHO · DAILIES + CERIMÔNIAS DE SPRINT QUINZENAIS",
      top: [
        { title: "Org. de entrega", lines: ["Liderança executiva", "+ gestão"] },
        { title: "Project Manager", lines: ["Escopo · prazo · custo", "Risco · comunicação"] },
        { title: "Patrocinadores", lines: ["Head de dados", "+ liderança de tecnologia"] },
      ],
      bottom: [
        { title: "Engenharia de entrega", lines: ["Tech lead de cloud engineering", "Tech lead de data engineering", "2× cloud engineers", "2× data engineers"] },
        { title: "Grupo de trabalho", lines: ["Dailies (15 min)", "Planning · reviews da sprint", "Retrospectivas", "Relatório da sprint → PM → exec."] },
        { title: "Time técnico do cliente", lines: ["Tech lead do cliente", "Validadores de UAT", "Especialistas de negócio", "Pontos focais de segurança e TI"] },
      ],
      escalation: ["ESCALONAMENTO", "escopo · orçamento · risco"],
    },
  },

  deliverables: {
    kicker: "ENTREGÁVEIS",
    title: ["O que o cliente recebe — e o que a ", "empresa guarda", "."],
    lead: "O mandato tem duas camadas: entregar a migração e produzir os artefatos reutilizáveis que viabilizam o rollout corporativo mais amplo. Cada entrega abaixo foi pensada para durar além deste projeto.",
    items: [
      { title: "Termo de abertura & declaração de escopo", desc: "Mandato formal, objetivos, restrições de prazo e preço fixos e uma lista explícita do que está fora do escopo." },
      { title: "Cronograma mestre em Gantt", desc: "Linha do tempo de 12 meses com fases, frentes paralelas, marcos e dependências, acompanhada semanalmente." },
      { title: "Plano de orçamento & recursos", desc: "Envelope de taxa fixa com consumo mensal, alocação de FTEs e economia unitária por servidor." },
      { title: "Registro de riscos & plano de mitigação", desc: "Quatro domínios de risco priorizados, com mitigações, responsáveis e resultados esperados mensuráveis." },
      { title: "Plano de comunicação", desc: "Governança em dois níveis, cerimônias e canais definidos, modelo de relatório de sprint e caminhos de escalonamento." },
      { title: "Estrutura do time & RACI", desc: "Papéis, responsabilidades e direitos de decisão mapeados entre as duas organizações." },
      { title: "Procedimentos operacionais padrão", desc: "SOPs reutilizáveis para o ciclo de migração em cinco etapas, aplicáveis ao rollout corporativo." },
      { title: "Registros de decisão de arquitetura", desc: "Biblioteca de padrões e ADRs que formam o blueprint operacional para escalar na empresa." },
    ],
  },

  quote: ["O projeto é a migração. O ", "entregável", " é o blueprint. Um piloto bem conduzido é a coisa mais cara que uma empresa pode pular — e a mais barata que ela pode fazer."],
};

export const copy: Record<Lang, CloudMigrationCopy> = { en, pt };
