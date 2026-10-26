/* Copy for the Data Warehouse Modernization case study, prose and chart labels included.
   Mono labels are typed in UPPERCASE here, as the Ledger content rules ask. */

import type { Lang } from "@/lib/i18n";

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
const pt: DWProgramCopy = {
  lead: "Um programa com vários projetos para migrar um data warehouse legado em SQL Server para o modern data stack (Snowflake, dbt, Tableau). Desenhado em torno de três condições inegociáveis: prazo fixo, honorários de consultoria fixos e zero desvio de escopo — defendidas por gates formais, um parking lot e um processo explícito de controle de mudanças.",
  facts: [
    ["PAPEL", "Program Manager"],
    ["DURAÇÃO", "18 meses"],
    ["CONTRATO", "Preço fixo"],
    ["PROJETOS NO PROGRAMA", "Vários"],
  ],
  tags: ["Gestão de programas", "Modern data stack", "Snowflake · dbt · Tableau", "Governança", "Controle de mudanças", "Gestão de RAID", "Stakeholders C-level"],

  objective: {
    kicker: "OBJETIVO ESTRATÉGICO & RESULTADOS-CHAVE",
    title: ["Um mandato. ", "Três condições inegociáveis", "."],
    lead: "Migrar o data warehouse para o modern data stack — dentro dos 18 meses e dos honorários acordados. Todo o resto do programa existe para servir a essas três restrições.",
    stats: [
      { value: "< 5%", label: "Variação de custo sobre o total de honorários acordado" },
      { value: "100%", label: "Marcos cumpridos em todas as fases do cronograma macro" },
      { value: "> 98%", label: "Taxa de validação de dados na fase obrigatória de UAT" },
      { value: "0", label: "Escopo não gerenciado: toda adição passou pelo CCP formal" },
    ],
  },

  lifecycle: {
    kicker: "CICLO DE VIDA DO PROGRAMA",
    title: ["Três fases. ", "Cada uma termina em um gate contratual", "."],
    lead: "O programa segue o ciclo de vida padrão — iniciação, entrega, encerramento —, mas com uma diferença: cada fronteira entre fases é também um ponto formal de controle. Nenhuma fase avança antes de seus entregáveis serem aprovados, o que trava o escopo que ficou para trás.",
    phases: [
      { num: "I", phase: "INICIAÇÃO", duration: "~3 MESES", title: "Definir a fronteira", body: "Kick-off formal do programa, definição de escopo e o reconhecimento crucial do prazo fixo de 18 meses. Atividade central: mapeamento das fontes de dados e análise de dependências.", outputs: "Avaliação da migração · Estratégia de migração · Forma de trabalho" },
      { num: "II", phase: "ENTREGA", duration: "~13 MESES", title: "Executar & validar", body: "A migração começa com uma PoC para validar a abordagem e refinar estimativas e depois avança em ciclos ágeis. O UAT obrigatório com os analistas de dados do cliente é o gate de cada release.", outputs: "DW migrado · Qualidade validada · Legado desativado" },
      { num: "III", phase: "ENCERRAMENTO", duration: "~2 MESES", title: "Confirmar a aderência", body: "Aprovação formal contra o mandato fixo. O sucesso é definido de forma estrita: migração completa para Snowflake/dbt/Tableau em 18 meses e dentro dos honorários acordados.", outputs: "Relatório final · Transição de recursos · Fechamento do contrato" },
    ],
    chart: {
      label: "CRONOGRAMA MESTRE",
      title: "Ciclo de vida de 18 meses com gates entre as fases",
      sub: "Cada gate é uma aprovação formal — o escopo da fase anterior fica travado e a próxima fase não começa sem ela.",
      alt: "Ciclo de vida de 18 meses: iniciação por cerca de 3 meses, entrega por cerca de 13 meses em quatro ondas e encerramento por cerca de 2 meses, com quatro gates contratuais: congelamento de escopo, revisão de meio de programa, trava de validação e encerramento.",
      months: ["M1", "M3", "M5", "M7", "M9", "M11", "M13", "M15", "M17", "M18"],
      phases: {
        initiation: ["I · INICIAÇÃO", "~3 meses"],
        delivery: ["II · ENTREGA", "~13 meses · migração · validação · desativação"],
        closure: ["III · ENCERRAMENTO", "~2 meses"],
      },
      initiationNote: ["Kickoff · avaliação", "Estratégia · governança"],
      closureNote: ["Cutover · aprovação", "Relatório final"],
      waves: ["PoC · onda 1", "Onda 2", "Onda 3", "Onda 4 · UAT"],
      gateways: [
        { id: "G1", title: "Escopo congelado", lines: ["Avaliação + estratégia", "aprovadas pelo sponsor"] },
        { id: "G2", title: "Revisão intermediária", lines: ["Variação de custo, marcos,", "3 principais riscos"] },
        { id: "G3", title: "Trava de validação", lines: ["UAT acima de 98%;", "cutover autorizado"] },
        { id: "G4", title: "Encerramento", lines: ["Aprovação do contrato"] },
      ],
      legend: { phase: "Fase", wave: "Onda de entrega", gateway: "Gate contratual" },
    },
  },

  governance: {
    kicker: "FRAMEWORK DE GOVERNANÇA",
    title: ["Uma forma de trabalho construída em ", "quatro passos deliberados", "."],
    lead: "Antes de a execução começar, as regras da execução são definidas, apresentadas, aprovadas e só então operadas. Governança não é subproduto da gestão de programas — é o primeiro entregável dela.",
    chart: {
      label: "MONTAGEM DA FORMA DE TRABALHO",
      title: "De regras compartilhadas a uma execução cumprida",
      alt: "Quatro passos em sequência: desenvolvimento, apresentação, acordo formal e execução e revisão, cada um com seu objetivo.",
      caption: "SEQUÊNCIA · CADA PASSO É PRÉ-CONDIÇÃO DO SEGUINTE",
      steps: [
        { title: "Desenvolvimento", lines: ["Definir cadência,", "alçadas de decisão e", "formato de reporte —", "junto com o cliente."] },
        { title: "Apresentação", lines: ["Documentar e apresentar", "formalmente a forma", "de trabalho a todos os", "stakeholders-chave."] },
        { title: "Acordo formal", lines: ["Obter a aprovação do", "PM do cliente — garante", "o compromisso contratual", "com os padrões."] },
        { title: "Execução & revisão", lines: ["Aderência medida por", "CV, taxa de marcos e", "frequência de CRs;", "revisão periódica."] },
      ],
      goalsTitle: "OBJETIVO DE CADA PASSO",
      goals: ["Padrões operacionais comuns", "Transparência & entendimento comum", "Compromisso contratual de aderência", "Controle efetivo"],
    },
  },

  change: {
    kicker: "CONTROLE DE MUDANÇAS",
    title: ["Como adições de escopo são tratadas — e como o ", "contrato de preço fixo", " é defendido."],
    lead: "Um programa de preço e prazo fixos vive ou morre pela disciplina de controle de mudanças. O programa opera um CCP rígido de três passos, apoiado por um parking lot para registrar tudo o que for ambíguo e por gates formais que travam as fases anteriores contra retrabalho retroativo.",
    chart: {
      label: "PROCESSO DE CONTROLE DE MUDANÇAS (CCP)",
      title: "Do pedido de escopo à decisão do sponsor",
      alt: "Processo de controle de mudanças: um pedido de adição de escopo vai para o CCP, seu impacto é quantificado e três opções chegam ao sponsor C-level: aceitar a mudança, trocar por escopo equivalente (preferida) ou adiar. Quatro mecanismos de defesa o sustentam.",
      trigger: { tag: "GATILHO", title: "Adição de escopo", line: "pedida pelo cliente" },
      steps: [
        { tag: "PASSO 01 · IMEDIATO", title: "Encaminhar ao CCP", lines: ["Estacionar se ambíguo;", "nunca absorver calado."] },
        { tag: "PASSO 02 · QUANTIFICAR", title: "Análise de impacto", lines: ["Esforço, prazo, delta de preço", "— por BA + engenharia."] },
        { tag: "PASSO 03 · DECIDIR", title: "Apresentar 3 opções", lines: ["ao sponsor C-level", "para decisão."] },
      ],
      options: [
        { tag: "OPÇÃO A", title: "Aceitar a mudança", lines: ["Custo maior.", "Prazo maior se o", "atraso passar do", "prazo de 18 meses."] },
        { tag: "OPÇÃO B · PREFERIDA", title: "Trocar por equivalente", lines: ["Manter custo e prazo", "retirando do escopo", "itens de esforço", "equivalente."] },
        { tag: "OPÇÃO C", title: "Adiar", lines: ["Levar o pedido para", "um projeto seguinte,", "depois do encerramento", "formal dos 18 meses."] },
      ],
      defenseTitle: "MECANISMOS DE DEFESA QUE SUSTENTAM O CCP",
      defenses: [
        { title: "Parking lot", lines: ["Registra todo item fora do escopo", "e o leva à avaliação do CCP."] },
        { title: "Gates formais", lines: ["Travam as fases ao final;", "escopo anterior não reabre."] },
        { title: "KPI de frequência de CRs", lines: ["Indicador antecedente — volume alto", "sinaliza pressão sobre o contrato."] },
        { title: "Regra de quantificação", lines: ["Nenhum CR é decidido sem", "impacto explícito em esforço e preço."] },
      ],
    },
  },

  kpis: {
    kicker: "MONITORAMENTO DE DESEMPENHO",
    title: ["Quatro KPIs que importam ao C-level — e ", "nada além disso no dashboard", "."],
    lead: "A telemetria operacional fica com os times. O que sobe ao sponsor é exatamente o que embasa decisões de sponsor: aderência financeira, aderência ao cronograma, qualidade e o indicador antecedente de pressão sobre o escopo.",
    chart: {
      label: "DASHBOARD EXECUTIVO DE KPIS",
      title: "O que o head de dados vê, todo mês",
      alt: "Quatro KPIs: variação de custo abaixo de 5%, 100% dos marcos cumpridos, validação de dados acima de 98% e frequência de pedidos de mudança como indicador antecedente; sustentados pela gestão de RAID de riscos, premissas, problemas e dependências.",
      cards: [
        { tag: "KPI 01 · CONTROLE FINANCEIRO", title: "Variação de custo (CV)", value: "< 5%", unit: "meta", lines: ["Compara o gasto real com", "os honorários acordados."] },
        { tag: "KPI 02 · CRONOGRAMA", title: "Taxa de marcos cumpridos", value: "100%", unit: "meta", lines: ["Confirma a aderência ao", "prazo fixo de 18 meses."] },
        { tag: "KPI 03 · QUALIDADE", title: "Taxa de validação de dados", value: "> 98%", unit: "meta", lines: ["Medida no UAT — gate de", "cada release em produção."] },
        { tag: "KPI 04 · CONTROLE DE ESCOPO", title: "Frequência de CRs", value: "↓", unit: "indicador antecedente", lines: ["Volume alto = pressão sobre o", "CCP; tendência vista mês a mês."] },
      ],
      raidTitle: "SUSTENTADO POR UMA GESTÃO DE RAID CENTRALIZADA",
      raid: [
        { letter: "R", title: "Riscos", lines: ["Mitigação proativa;", "foco nas restrições fixas."] },
        { letter: "A", title: "Premissas", lines: ["Base do planejamento;", "se invalidada → risco/problema."] },
        { letter: "I", title: "Problemas", lines: ["Resolução reativa; escalonados", "só com impacto em prazo/preço."] },
        { letter: "D", title: "Dependências", lines: ["Restrições externas — acesso", "às fontes, infra pronta."] },
      ],
    },
  },

  stakeholders: {
    kicker: "GESTÃO DE STAKEHOLDERS",
    title: ["Comunicar com o sponsor é ", "filtrar, não inundar", "."],
    lead: "O head de dados não precisa dos bloqueios da daily. Precisa saber se o programa está no rumo estratégico, no rumo financeiro e se os principais riscos estão sendo tratados. O modelo de comunicação foi construído em torno dessa distinção.",
    chart: {
      label: "NÍVEIS DE STAKEHOLDERS",
      title: "Quem ouve o quê, e com que frequência",
      alt: "Três níveis de stakeholders: estratégico (head de dados do cliente e sponsor C-level, mensal), tático (PMs de delivery e do cliente, semanal) e operacional (times de desenvolvimento, diário), com escalonamento subindo só quando necessário.",
      cadence: "CADÊNCIA",
      tiers: [
        { tag: "NÍVEL 01 · ESTRATÉGICO", who: "Head de dados do cliente · sponsor C-level", receives: "Recebe: status dos marcos, CV, 3 principais riscos mitigados, aprovações de gates", cadence: "Comitê mensal · revisão trimestral", lines: ["Escalonamento sob demanda, só quando", "as restrições fixas estão em risco"] },
        { tag: "NÍVEL 02 · TÁTICO", who: "Gestão conjunta · PM de delivery + PM do cliente", receives: "Recebe: aplicação da governança, decisões do CCP, revisão de RAID, coordenação de fornecedores", cadence: "Sync semanal de PMs · status quinzenal", lines: ["Toda decisão de escopo, prazo e orçamento", "nasce ou passa por aqui"] },
        { tag: "NÍVEL 03 · OPERACIONAL", who: "Times de desenvolvimento de delivery e do cliente", receives: "Recebe: metas da sprint, decisões técnicas, agenda de UAT, bloqueios", cadence: "Dailies · reviews da sprint", lines: ["O detalhe técnico é tratado aqui;", "só escala quando afeta o cronograma macro"] },
      ],
      escalation: "ESCALONAMENTO",
      note: [
        "A fronteira entre os níveis é respeitada — o detalhe operacional não sobe sem ser chamado,",
        "e as diretrizes estratégicas não passam por cima da gestão tática.",
        "É essa fronteira que torna o programa gerenciável no nível do sponsor sem perder fidelidade na execução.",
      ],
    },
  },

  deliverables: {
    kicker: "ENTREGÁVEIS DO PROGRAMA",
    title: ["Os artefatos que sustentam o programa — e ", "o contrato", "."],
    lead: "Num contrato de preço fixo, cada artefato serve a dois públicos: o time de delivery, que opera a partir dele, e o contrato, que é protegido por ele. Cada entrega abaixo foi desenhada pensando nos dois.",
    items: [
      { title: "Termo de abertura & pacote de kick-off", desc: "Objetivos formais do programa, premissas, a restrição de prazo fixo de 18 meses e a fronteira contratual reconhecida." },
      { title: "Avaliação & estratégia de migração", desc: "Mapa das fontes de dados, análise de dependências e o documento de estratégia que define a fronteira fixa do contrato." },
      { title: "Framework de governança (forma de trabalho)", desc: "Modelo em quatro passos: desenvolvimento → apresentação → acordo formal → execução e revisão." },
      { title: "Processo de controle de mudanças (CCP)", desc: "Protocolo em três passos — encaminhar → quantificar → decidir —, com o parking lot e os gates formais como defesas." },
      { title: "Cronograma mestre integrado", desc: "Mapa de dependências entre projetos; acompanha recursos compartilhados, em especial data engineers e data analysts." },
      { title: "Log de RAID & registro de controle", desc: "Riscos, premissas, problemas e dependências centralizados — responsáveis, prazos e critérios de escalonamento." },
      { title: "Dashboard executivo de KPIs", desc: "Só quatro KPIs: variação de custo, taxa de marcos, taxa de validação de dados e frequência de pedidos de mudança." },
      { title: "Plano de gestão de stakeholders", desc: "Modelo em três níveis, com cadência, conteúdo e critérios de escalonamento definidos para cada nível." },
    ],
  },

  quote: ["Um programa com prazo e honorários fixos tem exatamente uma função: proteger os dois. ", "Governança, controle de mudanças e disciplina com stakeholders", " não são overhead — são o próprio programa."],
};

export const copy: Record<Lang, DWProgramCopy> = { en, pt };
