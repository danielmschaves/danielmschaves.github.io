/* Copy for the Data Intelligence Platform case study, prose and chart labels included.
   Mono labels are typed in UPPERCASE here, as the Ledger content rules ask. */

import type { Lang } from "@/lib/i18n";

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
const pt: DataIntelligencePlatformCopy = {
  lead: "Um projeto de um ano para levar uma trading em crescimento de sistemas operacionais dispersos a uma plataforma de dados unificada — data lake, data warehouse, BI e modelos preditivos, tudo construído do zero. Foi o projeto de base em que formalizei a cadência de planejamento e a disciplina de sprints que uso até hoje.",
  facts: [
    ["PAPEL", "Project Manager"],
    ["DURAÇÃO", "12 meses"],
    ["FONTES DE DADOS", "3 sistemas"],
    ["CAMADAS DO STACK", "DL · DW · BI · ML"],
  ],
  tags: ["Gestão de projetos", "Scrum + Kanban", "Modern data stack", "Data lake", "Data warehouse", "BI & modelagem preditiva", "Nuvem (AWS / GCP / Azure)"],

  context: {
    kicker: "CONTEXTO",
    title: ["De dados operacionais dispersos a ", "uma única fonte de verdade analítica", "."],
    start: {
      title: "O ponto de partida",
      p1: "O cliente — uma trading de médio porte — tocava o negócio em três sistemas operacionais que não conversavam entre si. Os relatórios eram montados à mão, a liderança decidia com números desatualizados e não havia como olhar para frente: nenhuma previsão, nenhuma modelagem de demanda, nenhuma visão preditiva do negócio.",
      p2: "O escopo era ambicioso de propósito. Construir o stack analítico inteiro — ingestão, lake, warehouse, BI, modelos preditivos — em um único projeto de 12 meses, entregando valor visível no caminho para que a liderança sentisse o programa funcionando antes de ele terminar.",
    },
    challenge: {
      title: "O desafio",
      strong: "Um ano. Quatro fases. Valor contínuo.",
      p1: " Um cascata puro deixaria a liderança sem nada para ver por nove meses. Um ágil puro, sem plano, perderia a coerência de arquitetura de que a plataforma precisava.",
      p2: "A resposta foi um modelo híbrido: um plano anual de alto nível fixando as macrofases e os marcos, combinado com execução em sprints de duas semanas dentro de cada fase. Estratégia em cima. Iteração embaixo. O plano a seguir é exatamente isso — e é o modelo de planejamento em que ainda ancoro meu trabalho de entrega.",
    },
  },

  lifecycle: {
    kicker: "CICLO ANUAL",
    title: ["Quatro trimestres. ", "Quatro mudanças de fase", ". Uma construção contínua."],
    lead: "Cada trimestre tem uma fase dominante, mas as transições são suaves — o planejamento continua na execução e o monitoramento começa antes de a implantação terminar. As fronteiras abaixo mostram ênfase, não isolamento.",
    chart: {
      label: "LINHA DO TEMPO ANUAL",
      title: "Quatro fases distribuídas nos 12 meses do projeto",
      alt: "Linha do tempo com quatro trimestres e quatro fases: planejamento no T1, execução do MVP no T2, implantação e testes no T3 e monitoramento e relatórios no T4, cada uma com suas atividades-chave.",
      quarters: ["TRIMESTRE 1", "TRIMESTRE 2", "TRIMESTRE 3", "TRIMESTRE 4"],
      start: "INÍCIO",
      close: "FIM",
      phases: [
        { title: "Planejamento", items: ["• Requisitos de negócio e técnicos", "• Escolha do provedor de nuvem", "• Arquitetura de DL/DW + BI", "• Política de acesso e governança", "• Dicionário de dados e modelos"] },
        { title: "Execução do MVP", items: ["• Ingestão no data lake", "• Construção do MVP de BI", "• Implementação do DW + testes", "• Validação + feedback do BI", "• Base do modelo preditivo"] },
        { title: "Implantação & testes", items: ["• Testes da modelagem preditiva", "• Implantação final do preditivo", "• Testes de integração completos"] },
        { title: "Monitoramento & relatórios", items: ["• Monitoramento da solução", "• Treinamento e capacitação", "• Expansão de funcionalidades", "• Relatório final e aprovação"] },
      ],
    },
  },

  goals: {
    kicker: "METAS TRIMESTRAIS",
    title: ["Um marco concreto por trimestre, ", "visível de fora do time", "."],
    lead: "Velocidade interna não é uma métrica que o cliente sente. Por isso, todo trimestre precisava terminar em algo demonstrável — algo que um stakeholder pudesse ver, clicar ou consultar.",
    items: [
      { q: "T1 · FUNDAÇÃO", title: "Dados chegando ao lake", desc: "Diagnóstico e especificação do sistema concluídos; provedor de nuvem escolhido; primeiros pipelines de ingestão no ar, com dados chegando à camada raw.", milestone: "MARCO · DADOS NA CAMADA RAW" },
      { q: "T2 · INSIGHT", title: "MVP de BI, DW em operação", desc: "Warehouse construído e validado; MVP de BI entregue aos usuários de negócio; base da modelagem preditiva preparada para o T3.", milestone: "MARCO · MVP DE BI ENTREGUE" },
      { q: "T3 · PREVISÃO", title: "Solução preditiva no ar", desc: "Modelagem validada, testes integrados aprovados e solução preditiva implantada em produção com monitoramento.", milestone: "MARCO · SOLUÇÃO PREDITIVA ENTREGUE" },
      { q: "T4 · SUSTENTAÇÃO", title: "Operação + relatório de oportunidades", desc: "Solução em monitoramento contínuo; time treinado; roadmap de expansão entregue; duas novas funcionalidades contratadas.", milestone: "MARCO · RELATÓRIO DE OPORTUNIDADES ENTREGUE" },
    ],
  },

  backlog: {
    kicker: "MODELO DE BACKLOG",
    title: ["Três níveis de detalhe. ", "Cada um justifica seu lugar", "."],
    lead: "Os itens de grão grosso são para o cliente e para o contrato. Os de grão fino são para o time e para a sprint. A camada do meio é onde os dois se encontram — e onde a conversa sobre escopo de fato acontece.",
    chart: {
      label: "HIERARQUIA DO BACKLOG",
      title: "Entregável → atividade → tarefa",
      sub: "Os dois níveis de cima vivem no backlog do projeto. O nível de baixo é o que entra na sprint.",
      alt: "Hierarquia em três níveis: um entregável que o cliente aprova, duas atividades (blocos de trabalho) e quatro tarefas que entram na sprint. Os dois níveis de cima pertencem ao backlog do projeto; as tarefas ficam no backlog da sprint.",
      projectBacklog: { tag: "BACKLOG DO PROJETO", lines: ["Entregáveis e atividades", "refinados com o time —", "o contorno do contrato."] },
      sprintBacklog: { tag: "BACKLOG DA SPRINT", lines: ["Tarefas que o time assume", "dentro de uma janela", "de sprint de duas semanas."] },
      deliverable: ["Entregável", "Resultado que o cliente recebe"],
      activity: ["Atividade", "Bloco de trabalho"],
      task: "Tarefa",
      definitionsTitle: "DEFINIÇÃO DE CADA NÍVEL",
      definitions: [
        ["Entregável.", " O que o cliente aprova — a unidade do contrato."],
        ["Atividade.", " Um bloco de trabalho dentro de um entregável; como o time agrupa o esforço."],
        ["Tarefa.", " Uma unidade atômica que alguém do time consegue absorver em uma sprint."],
      ],
    },
  },

  q1: {
    kicker: "ENTREGÁVEIS DO T1",
    title: ["Três entregáveis que ", "orientam todas as decisões seguintes", "."],
    lead: "O T1 é o trimestre de maior consequência do projeto — não porque entrega mais, mas porque toda decisão do T2 ao T4 se apoia nos artefatos produzidos aqui. Se eles saem errados, o resto do ano multiplica o erro.",
    items: [
      { title: "Relatório de diagnóstico inicial", desc: "Requisitos de negócio e técnicos, estimativas de custo de nuvem em AWS / GCP / Azure, critérios de validação da arquitetura, um dicionário de dados e uma primeira proposta de modelagem." },
      { title: "Especificação do sistema", desc: "Requisitos finais de DL/DW, políticas de acesso e governança, arquitetura de ingestão e processamento e o provisionamento inicial da infraestrutura (buckets, clusters, VPNs, controles de acesso)." },
      { title: "Ingestão no data lake", desc: "Serviços de ingestão para os três sistemas de origem, rotinas de transformação, modelos dimensionais e de fato no warehouse e um workshop com stakeholders para validar a abordagem." },
      { title: "Critérios de aceite (por entregável)", desc: "Diagnóstico → aprovação do PM · especificação → aprovação do cliente · ingestão no DL → serviço em operação, validado contra a especificação." },
    ],
  },

  allocation: {
    kicker: "SPRINT 1 · ALOCAÇÃO DE RECURSOS",
    title: ["A sprint um foi montada ", "apertada de propósito", "."],
    lead: "Uma primeira sprint é também um exercício de calibração. Planejei a Sprint 1 sem folga para medir a capacidade real do time — e incorporei o aprendizado da Sprint 2 em diante. Os números abaixo são o envelope planejado; a lição sempre estaria na variação.",
    chart: {
      label: "ALOCAÇÃO DA SPRINT 1",
      title: "Horas por papel em cada atividade (sprint de 2 semanas)",
      alt: "Horas por papel na primeira sprint de duas semanas. Requisitos de negócio: data scientist 20h, data engineer 5h. Requisitos técnicos: data scientist 20h, data engineer 5h. Custo de nuvem e escolha do provedor: data engineer 10h. Kick-off do projeto: PM 10h. 70 horas no total, planejadas sem margem.",
      head: ["ATIVIDADE", "DATA ENG. (H)", "DATA SCI. (H)", "PM (H)"],
      rows: [
        { title: "Requisitos de negócio", sub: "Preparação + entrevistas com stakeholders" },
        { title: "Requisitos técnicos", sub: "Preparação + entrevistas com o time técnico" },
        { title: "Custo de nuvem e escolha do provedor", sub: "Estudo de preços + montagem da proposta" },
        { title: "Kick-off do projeto (PM)", sub: "Modelo, estratégia de comunicação, cronograma" },
      ],
      totals: { title: "Totais da Sprint 1", sub: "planejados sem folga, de propósito", unit: "h" },
      note: [
        "Sprint 1 = 70h comprometidas no total entre três papéis, sem margem.",
        "O plano era medir entregue vs. comprometido — e usar a diferença no envelope de capacidade da Sprint 2.",
        "Essa etapa de calibração hoje é padrão em todo projeto que lidero.",
      ],
    },
  },

  calendar: {
    kicker: "SPRINT 1 · PLANO DIÁRIO",
    title: ["O que o time ", "faz em cada dia", "."],
    lead: "Uma visão semanal que mostra o ritmo: preparação no começo da semana, tempo com stakeholders no meio, discussão em grupo e documentação no fim. Duas semanas assim fecham de ponta a ponta as entrevistas de base e a proposta de nuvem.",
    chart: {
      label: "CALENDÁRIO DE SPRINT DE DUAS SEMANAS",
      title: "Atividade diária por papel",
      alt: "Agenda de duas semanas para três papéis (data scientist, data engineer, PM): preparação, pesquisa de custo de nuvem e modelos do PM de segunda a quarta; entrevistas de negócio na quinta da semana 1 e técnicas na quinta da semana 2, seguidas de discussão em grupo; documentação na sexta.",
      weeks: ["SEMANA 1", "SEMANA 2"],
      roles: ["DATA SCI.", "DATA ENG.", "PM"],
      days: ["SEG", "TER", "QUA", "QUI", "SEX"],
      w1: [
        ["Prep. entrevista negócio", "Pesquisa custo nuvem", "Adaptação de modelos"],
        ["Prep. entrevista negócio", "Pesquisa custo nuvem", "Plano de comunicação"],
        ["Prep. entrevista negócio", "Rascunho da proposta", "Cronograma do projeto"],
      ],
      w2: [
        ["Prep. entrevista técnica", "Pesquisa custo nuvem", "Adaptação de modelos"],
        ["Prep. entrevista técnica", "Pesquisa custo nuvem", "Plano de comunicação"],
        ["Prep. entrevista técnica", "Rascunho da proposta", "Cronograma do projeto"],
      ],
      thu: ["Entrevista de negócio", "Entrevista técnica"],
      sync: "Discussão em grupo · resultados compartilhados com o time",
      fri: "Documentação dos resultados · todos os papéis",
      legendTitle: "LEGENDA",
      legend: ["Preparação · pesquisa", "Rascunho da proposta", "Atividades do PM", "Tempo com stakeholders", "Sync do time"],
      note: "As cerimônias do Scrum (daily, planning, review, retro) ficam fora desta visão — pertencem ao Scrum Master e não entram nas horas dos papéis.",
    },
  },

  kanban: {
    kicker: "FLUXO KANBAN",
    title: ["Do backlog do projeto ao “concluído” — ", "seis colunas, um fluxo", "."],
    lead: "O quadro espelha a hierarquia do backlog. Entregáveis e atividades ficam à esquerda, como roadmap; as tarefas refinadas avançam para a direita pelas colunas da sprint. A coluna de revisão é o mecanismo de controle de qualidade — toda tarefa passa por um segundo par de olhos antes de ser concluída.",
    chart: {
      label: "QUADRO KANBAN",
      title: "Fluxo de seis colunas com um gate de qualidade",
      alt: "Quadro kanban de seis colunas em duas zonas. Roadmap: uma coluna de backlog do projeto (diagnóstico inicial, especificação do sistema, ingestão no DL) e uma de backlog da sprint com tarefas refinadas. Execução da sprint: a fazer, em andamento, revisão (o gate de qualidade) e concluído. Toda tarefa passa pela revisão antes de ser concluída.",
      zones: ["ROADMAP", "EXECUÇÃO DA SPRINT"],
      columns: ["Backlog do projeto", "Backlog da sprint", "A fazer", "Em andamento", "Revisão (QC)", "Concluído"],
      projectBacklog: ["Diagnóstico inicial", "Especificação do sistema", "Ingestão no DL", "+ atividades (refinadas)"],
      sprintBacklog: ["Prep. entrevistas", "Entrevistas de negócio", "Pesquisa custo nuvem", "Proposta de nuvem", "Plano de comunicação"],
      todo: [["Tarefa: levantar custos", "DE · 2h"], ["Tarefa: roteiro entrevista", "DS · 15h"]],
      doing: [["Tarefa: spec de nuvem", "DE · 4h · em andamento"], ["Tarefa: agendar reunião", "DS · 5h · em andamento"]],
      review: [["Tarefa: pesquisa custo v1", "DE · aguardando\nrevisão do tech ref"]],
      done: [["Adaptação de modelos", "✓ PM · aceito"], ["Plano de comunicação v1", "✓ PM · aceito"]],
      note: [
        "Duas camadas de aceite — Definition of Done (interna) + Critérios de Aceite (cliente).",
        "A DoD acelera a revisão interna; os critérios de aceite garantem que o cliente recebe exatamente o que o contrato prometeu.",
      ],
    },
  },

  foundation: {
    kicker: "BASE CONSTRUÍDA",
    title: ["O que este projeto ainda me dá, ", "anos depois", "."],
    lead: "Olhando para trás, o valor deste projeto não foi só a plataforma que entreguei — foi o modelo de planejamento que construí no caminho. Os padrões abaixo ainda são os que ancoram meu trabalho de entrega hoje.",
    tag: "LEVADO ADIANTE",
    items: [
      { title: "Backlog em três níveis como tradutor universal", body: "A hierarquia entregável / atividade / tarefa funciona porque fala com três públicos ao mesmo tempo. A camada de entregáveis é o contrato — o que o cliente aprova. A de atividades é a conversa — onde escopo e esforço são de fato negociados com o time. A de tarefas é a sprint — o que sai nesta semana. Boa parte do atrito de entrega que vi depois vem de times que fundem duas dessas camadas em uma." },
      { title: "Primeira sprint como calibração, não como compromisso", body: "A Sprint 1 foi planejada sem folga de propósito — não porque eu esperasse que o time a cumprisse perfeitamente, mas porque eu precisava medir a diferença. Velocidade é empírica, e só se chega a um número real rodando uma primeira iteração apertada e observando o que de fato é entregue. Todo projeto que liderei depois começa do mesmo jeito." },
      { title: "Marcos trimestrais que um stakeholder não técnico consegue verificar", body: "“A velocidade subiu” não é um marco. “Os dados estão na camada raw” é. Todo trimestre terminou em algo que o patrocinador podia ver ou tocar — um dashboard funcionando, um modelo implantado, um relatório assinado. A disciplina de escrever o marco antes de desenhar o trabalho salvou mais programas da deriva do que qualquer artefato de processo que usei depois." },
    ],
  },

  quote: ["A plataforma foi o entregável. O ", "modelo de planejamento", " foi o ativo. Todo projeto de entrega que liderei depois foi uma variação do framework que este projeto me obrigou a colocar no papel."],
};

export const copy: Record<Lang, DataIntelligencePlatformCopy> = { en, pt };
