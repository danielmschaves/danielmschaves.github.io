/* Copy for the e-commerce ETL pipeline case study, prose and chart labels included.
   Mono labels are typed in UPPERCASE here, as the Ledger content rules ask; code stays as written. */

import type { Lang } from "@/lib/i18n";

const en = {
  lead: "Built on BigQuery’s public thelook_ecommerce dataset, this pipeline enforces type safety via Pydantic models, processes data in-process via DuckDB, and routes results to CSV, Amazon S3, or MotherDuck based on runtime configuration — with every component independently testable.",
  facts: [
    ["TYPE", "ETL pipeline"],
    ["SOURCE", "BigQuery public"],
    ["ENGINE", "DuckDB (in-process)"],
    ["DESTINATIONS", "3 · CSV · S3 · MotherDuck"],
  ] as [string, string][],
  tags: ["Python", "BigQuery", "Pydantic", "DuckDB", "Amazon S3", "MotherDuck", "dbt"],
  links: [{ label: "GitHub repository", href: "https://github.com/danielmschaves/gcp-etl-dbt" }],

  context: {
    kicker: "CONTEXT & ARCHITECTURE",
    title: ["Extract once, ", "validate strictly", ", sink anywhere."],
    problem: {
      title: "The design problem",
      p1: "Most ETL scripts couple the extraction, transformation, and loading steps into a single procedural blob — making each step impossible to test independently and every destination change a surgery. The goal here was to build a pipeline where each stage is a self-contained Python module: the BigQuery extractor doesn’t know about DuckDB, the Pydantic validator doesn’t know about S3, and the sink layer is selected at runtime, not hardcoded.",
      p2: "The e-commerce dataset from BigQuery’s public catalog provides a realistic multi-table workload — orders, order items, users, products, inventory, and events — at a volume that exercises real ingestion patterns without requiring private credentials.",
    },
    why: {
      title: "Why Pydantic validation in the middle",
      strong: "Data contracts at the boundary.",
      p1: " The BigQuery extractor returns unvalidated dicts. Pydantic models intercept each record before it enters DuckDB, enforcing types, rejecting nulls in non-nullable columns, and flagging business-rule violations — all before bad data can corrupt the analytical layer.",
      p2: "Validation failures are logged with row context, not swallowed silently. The pipeline can be configured to fail-fast on the first invalid record (strict mode) or quarantine invalid rows and continue (tolerant mode), depending on the sink destination’s sensitivity.",
    },
    chart: {
      label: "END-TO-END ETL FLOW",
      title: "BigQuery → Extract → Validate → DuckDB → Sink",
      sub: "Each stage is an independent Python module — no stage has a direct import from the next. The sink destination is the only runtime-variable component.",
      alt: "ETL flow: BigQuery public dataset, then the BigQuery extractor, the Pydantic validator and DuckDB, fanning out to one of three sinks chosen at runtime: local CSV, Amazon S3 or MotherDuck.",
      source: { name: "BigQuery", sub: "Public dataset", items: ["orders", "order_items · users", "products · events"] },
      stages: [
        { name: ["BigQuery", "Extractor"], file: "bq_client.py", items: ["Table name as input", "Returns list[dict]", "Pagination handled", "Auth via service account"] },
        { name: ["Pydantic", "Validator"], file: "models.py", items: ["Type enforcement", "Not-null checks", "Business-rule validation", "Strict or tolerant mode"] },
      ],
      engine: { name: "DuckDB", sub: "In-process engine", items: ["Validated records loaded", "In-memory analytical DB", "No idle server cost"] },
      sinks: [
        { name: "Local CSV", lines: ["filesystem sink", "dev / testing"] },
        { name: "Amazon S3", lines: ["object storage", "data lake integration"] },
        { name: "MotherDuck", lines: ["cloud DuckDB", "analytical query endpoint"] },
      ],
      runtime: "DESTINATION SELECTED AT RUNTIME",
      flag: "--sink csv | s3 | motherduck",
    },
  },

  schema: {
    kicker: "SOURCE SCHEMA",
    title: ["Six tables from BigQuery’s ", "thelook_ecommerce", " public dataset."],
    lead: "The pipeline is table-agnostic — any table name is valid input to the BigQuery extractor. The six tables below represent the core e-commerce domain: transactional (orders, order_items), dimensional (users, products), operational (inventory_items), and behavioural (events).",
    chart: {
      label: "SOURCE SCHEMA — THELOOK_ECOMMERCE",
      title: "Six e-commerce tables · key columns · row counts",
      sub: "The BigQuery extractor accepts any table name from this dataset. Pydantic model classes correspond 1-to-1 with each table.",
      alt: "Six source tables with row counts: orders about 125K, order_items about 250K, users about 100K, products about 29K, inventory_items about 500K and events about 2.5M, joined by foreign keys to orders, users and products.",
      tables: {
        orders: { name: "orders", cols: ["order_id (PK)", "user_id (FK)", "status · created_at", "num_of_item", "gender · traffic_source"], rows: "~125K ROWS" },
        orderItems: { name: "order_items", cols: ["id (PK)", "order_id (FK) · user_id (FK)", "product_id (FK)", "sale_price · status", "shipped_at · returned_at"], rows: "~250K ROWS" },
        users: { name: "users", cols: ["id (PK)", "first_name · last_name", "email · gender · age", "country · city · state", "traffic_source · created_at"], rows: "~100K ROWS" },
        products: { name: "products", cols: ["id (PK)", "name · brand · category", "department · sku", "retail_price · cost", "distribution_center_id"], rows: "~29K ROWS" },
        inventory: { name: "inventory_items", cols: ["id (PK)", "product_id (FK)", "product_category", "cost · sold_at", "created_at · sold_at"], rows: "~500K ROWS" },
        events: { name: "events", cols: ["id (PK)", "user_id (FK)", "event_type · session_id", "browser · os · ip_address", "uri · created_at"], rows: "~2.5M ROWS" },
      },
      legend: { title: "LEGEND", primary: "Primary extractor target", secondary: "Secondary / dimension", fk: "FK join relationship" },
    },
  },

  validation: {
    kicker: "PYDANTIC VALIDATION LAYER",
    title: ["Type safety at the ", "ingestion boundary", " — before a single record enters DuckDB."],
    lead: "Pydantic v2 models act as the contract between the BigQuery extractor and the DuckDB loader. Every record is passed through the relevant model class — invalid records are intercepted, logged, and either rejected or quarantined before they can corrupt the analytical layer.",
    chart: {
      label: "PYDANTIC VALIDATION — ORDER MODEL EXAMPLE",
      title: "Input dict → OrderModel → valid record OR validation error",
      sub: "Each source table has a corresponding Pydantic model class. Validation runs per-record at ingestion time, not batch-after-load.",
      alt: "A raw BigQuery dict with string values and a null created_at passes through OrderModel. Valid records are coerced to types and loaded into DuckDB; the null created_at raises a ValidationError that halts the pipeline in strict mode or quarantines the row in tolerant mode.",
      input: {
        title: "Raw dict from BigQuery",
        lines: ["\"order_id\": \"12345\"", "\"user_id\": \"789\"", "\"status\": \"Complete\"", "\"num_of_item\": \"3\""],
        nullLine: "\"created_at\": null",
        nullNote: "← null in non-nullable field",
        note: "strings not yet coerced to types",
      },
      model: {
        title: "OrderModel (Pydantic v2)",
        head: "class OrderModel(BaseModel):",
        fields: ["order_id: int", "user_id: int", "status: OrderStatus", "num_of_item: int", "created_at: datetime", "gender: str | None = None"],
        rulesTitle: "Validation rules",
        rules: ["str → int coercion (order_id, user_id)", "status must be in OrderStatus enum", "created_at: non-nullable — fails here", "gender: optional, default None"],
        config: ["model_config = ConfigDict(", "coerce_numbers_to_str=False)"],
      },
      valid: {
        tag: "VALID",
        title: "Valid record → DuckDB",
        lines: ["order_id: 12345 (int)", "status: OrderStatus.COMPLETE (enum)", "num_of_item: 3 (int) · gender: None"],
      },
      invalid: {
        tag: "INVALID",
        title: "ValidationError → logged + action",
        code: ["ValidationError: created_at", "Input should be a valid datetime [null]"],
        modes: ["strict mode: pipeline halts", "tolerant mode: row quarantined, pipeline continues"],
      },
      runtime: "RUNTIME FLAG",
      flag: "--mode strict | tolerant",
    },
  },

  sinks: {
    kicker: "MULTI-DESTINATION SINK",
    title: ["One pipeline, ", "three output targets", " — selected at runtime."],
    lead: "After DuckDB processes the validated records, the sink adapter writes the output to whichever destination is specified at runtime. Each adapter is a separate Python class implementing a common SinkAdapter interface — swapping destinations requires no changes to the extraction or validation layers.",
    chart: {
      label: "SINK DESTINATION COMPARISON",
      title: "CSV · Amazon S3 · MotherDuck — when to use each",
      sub: "Each sink is independently configurable via environment variables. The pipeline exports DuckDB query results — the output is always post-validation and post-DuckDB processing.",
      alt: "Three sinks compared: CSV writes UTF-8 files immediately for local development; Amazon S3 writes snappy Parquet in about 2–5 seconds per batch for the data lake; MotherDuck writes persistent DuckDB tables in about 1–3 seconds for BI queries.",
      header: "SINK ADAPTER · OUTPUT FORMAT · LATENCY · USE CASE · CONFIGURATION",
      columns: { sink: "SINK", format: "FORMAT", latency: "LATENCY", best: "BEST FOR", config: "CONFIG" },
      rows: [
        { name: "CSV", tag: "FILESYSTEM SINK", format: [".csv (UTF-8)", "via DuckDB COPY"], latency: ["Immediate", "no network I/O"], best: ["Local development · testing", "Schema validation checks", "Offline environments"], config: ["OUTPUT_PATH=./data/", "--sink csv"] },
        { name: "Amazon S3", tag: "OBJECT STORAGE", format: ["Parquet (snappy)", "partitioned by date"], latency: ["~2–5 sec", "per batch upload"], best: ["Data lake integration", "Downstream Glue / Athena", "Long-term archival"], config: ["AWS_BUCKET · AWS_KEY", "--sink s3"] },
        { name: "MotherDuck", tag: "CLOUD DUCKDB", format: ["DuckDB table", "persistent · queryable"], latency: ["~1–3 sec", "per ATTACH + INSERT"], best: ["Analytical query endpoint", "BI tool connection (Power BI)", "Shareable persistent results"], config: ["MOTHERDUCK_TOKEN=...", "--sink motherduck"] },
      ],
      iface: {
        name: "SinkAdapter interface",
        lines: [
          "— all three sinks implement write(df: duckdb.DuckDBPyRelation, table_name: str) → None.",
          "Adding a fourth sink requires no changes to the extractor or validator.",
        ],
      },
    },
  },

  modules: {
    kicker: "COMPONENT ARCHITECTURE",
    title: ["Four independent modules, ", "zero cross-imports", " between stages."],
    lead: "Each component is a Python module with a single public interface. The orchestrator (main.py) is the only file that imports from multiple modules — ensuring that each component can be unit-tested in isolation, and that a change in one module cannot break another.",
    stats: [
      { value: "4", unit: "Python modules", label: "BigQuery extractor, Pydantic validator, DuckDB loader, and multi-sink adapter — independently testable" },
      { value: "3", unit: "output destinations", label: "CSV, Amazon S3, MotherDuck — selected at runtime via --sink flag, no code change required" },
      { value: "6", unit: "source tables", label: "orders, order_items, users, products, inventory_items, events — each with a corresponding Pydantic model class" },
    ],
    chart: {
      label: "MODULE DEPENDENCY MAP",
      title: "main.py orchestrates — modules never import each other",
      sub: "The dependency inversion keeps each module independently testable. Unit tests for the BigQuery extractor mock the BQ client; tests for the Pydantic validator use hardcoded dicts; tests for sinks use in-memory DuckDB relations.",
      alt: "main.py, the CLI entry point, imports four modules that never import each other: bq_client.py, models.py, duckdb_loader.py and sinks.py, each tested in isolation.",
      main: { name: "main.py", role: "Orchestrator · CLI entry point", args: "argparse: --table · --sink · --mode" },
      mods: [
        { name: "bq_client.py", role: "BigQuery extractor", lines: ["fetch_table(table_name) → list[dict]", "BigQueryClient(credentials)", "mocked in unit tests"] },
        { name: "models.py", role: "Pydantic validator", lines: ["OrderModel, UserModel, …", "validate(records, model_class)", "tested with hardcoded dicts"] },
        { name: "duckdb_loader.py", role: "DuckDB loader", lines: ["load(records) → DuckDBRelation", "In-memory table creation", "tested with in-memory DB"] },
        { name: "sinks.py", role: "Sink adapters", lines: ["CSVSink · S3Sink · MotherDuckSink", "write(relation, table_name)", "tested with temp DuckDB relation"] },
      ],
      rule: {
        name: "Dependency rule",
        lines: [
          "— bq_client, models, duckdb_loader, and sinks never import from each other.",
          "Only main.py holds cross-module dependencies — enforced via import linting in CI.",
        ],
      },
    },
  },

  deliverables: {
    kicker: "DELIVERABLES",
    title: ["A reproducible, ", "independently-testable", " ETL codebase."],
    lead: "Every component ships with unit tests, environment variable configuration, and a README covering local setup and sink-specific credential requirements.",
    items: [
      { title: "BigQuery extractor (bq_client.py)", desc: "Table-agnostic extractor using the BigQuery Python client. Returns validated list[dict] output. Auth via service account JSON or ADC." },
      { title: "Pydantic models (models.py)", desc: "One BaseModel subclass per source table. Type coercion, enum validation, nullability enforcement, and strict/tolerant mode configuration." },
      { title: "DuckDB loader (duckdb_loader.py)", desc: "In-process analytical engine. Receives validated records, creates in-memory DuckDB tables, exposes DuckDBRelation for sink consumption." },
      { title: "Multi-sink adapters (sinks.py)", desc: "CSVSink, S3Sink, and MotherDuckSink — all implementing a common SinkAdapter protocol. Runtime-selectable via --sink CLI flag." },
      { title: "Unit test suite (pytest)", desc: "Independent tests per module. BigQuery mocked with unittest.mock. Validator tests use hardcoded valid/invalid dicts. Sink tests use in-memory DuckDB." },
      { title: "README + .env template", desc: "Local setup guide, GCP service account configuration, AWS credential setup, MotherDuck token setup, and example CLI invocations for each sink." },
    ],
  },

  quote: ["A pipeline is only as trustworthy as the data that enters it. ", "Validate at the boundary", ", process in-memory, and make the output destination a runtime decision — not a hardcoded assumption."],
};

export type EcommerceCopy = typeof en;
const pt: EcommerceCopy = {
  lead: "Construído sobre o dataset público thelook_ecommerce do BigQuery, este pipeline garante tipos com modelos Pydantic, processa os dados dentro do processo com DuckDB e envia os resultados para CSV, Amazon S3 ou MotherDuck conforme a configuração em tempo de execução — com cada componente testável de forma independente.",
  facts: [
    ["TIPO", "Pipeline ETL"],
    ["ORIGEM", "BigQuery público"],
    ["MOTOR", "DuckDB (em processo)"],
    ["DESTINOS", "3 · CSV · S3 · MotherDuck"],
  ],
  tags: ["Python", "BigQuery", "Pydantic", "DuckDB", "Amazon S3", "MotherDuck", "dbt"],
  links: [{ label: "Repositório no GitHub", href: "https://github.com/danielmschaves/gcp-etl-dbt" }],

  context: {
    kicker: "CONTEXTO & ARQUITETURA",
    title: ["Extrair uma vez, ", "validar com rigor", ", gravar em qualquer lugar."],
    problem: {
      title: "O problema de desenho",
      p1: "A maioria dos scripts de ETL junta extração, transformação e carga em um único bloco procedural — o que impede testar cada etapa de forma independente e transforma cada mudança de destino em uma cirurgia. O objetivo aqui era construir um pipeline em que cada etapa fosse um módulo Python autocontido: o extrator do BigQuery não conhece o DuckDB, o validador Pydantic não conhece o S3 e a camada de destino é escolhida em tempo de execução, não fixada no código.",
      p2: "O dataset de e-commerce do catálogo público do BigQuery oferece uma carga realista com várias tabelas — pedidos, itens de pedido, usuários, produtos, estoque e eventos — em um volume que exercita padrões reais de ingestão sem exigir credenciais privadas.",
    },
    why: {
      title: "Por que a validação com Pydantic no meio",
      strong: "Contratos de dados na fronteira.",
      p1: " O extrator do BigQuery devolve dicts sem validação. Os modelos Pydantic interceptam cada registro antes de ele entrar no DuckDB, garantindo os tipos, rejeitando nulos em colunas não anuláveis e sinalizando violações de regras de negócio — tudo antes que dados ruins corrompam a camada analítica.",
      p2: "Falhas de validação são registradas com o contexto da linha, nunca engolidas em silêncio. O pipeline pode ser configurado para parar no primeiro registro inválido (modo strict) ou colocar as linhas inválidas em quarentena e seguir (modo tolerant), conforme a sensibilidade do destino.",
    },
    chart: {
      label: "FLUXO ETL DE PONTA A PONTA",
      title: "BigQuery → Extrair → Validar → DuckDB → Destino",
      sub: "Cada etapa é um módulo Python independente — nenhuma importa diretamente a seguinte. O destino é o único componente que muda em tempo de execução.",
      alt: "Fluxo ETL: dataset público do BigQuery, depois o extrator do BigQuery, o validador Pydantic e o DuckDB, que se abrem para um de três destinos escolhidos em tempo de execução: CSV local, Amazon S3 ou MotherDuck.",
      source: { name: "BigQuery", sub: "Dataset público", items: ["orders", "order_items · users", "products · events"] },
      stages: [
        { name: ["Extrator do", "BigQuery"], file: "bq_client.py", items: ["Nome da tabela como entrada", "Retorna list[dict]", "Paginação tratada", "Auth por service account"] },
        { name: ["Validador", "Pydantic"], file: "models.py", items: ["Garantia de tipos", "Checagens de not-null", "Regras de negócio", "Modo strict ou tolerant"] },
      ],
      engine: { name: "DuckDB", sub: "Motor em processo", items: ["Carrega registros validados", "DB analítico em memória", "Sem servidor ocioso"] },
      sinks: [
        { name: "CSV local", lines: ["sink de arquivos", "dev / testes"] },
        { name: "Amazon S3", lines: ["armazenamento de objetos", "integração com data lake"] },
        { name: "MotherDuck", lines: ["DuckDB na nuvem", "endpoint de consulta analítica"] },
      ],
      runtime: "DESTINO DEFINIDO NA EXECUÇÃO",
      flag: "--sink csv | s3 | motherduck",
    },
  },

  schema: {
    kicker: "SCHEMA DE ORIGEM",
    title: ["Seis tabelas do dataset público ", "thelook_ecommerce", " do BigQuery."],
    lead: "O pipeline não depende de tabela — qualquer nome de tabela é uma entrada válida para o extrator do BigQuery. As seis tabelas abaixo representam o núcleo do domínio de e-commerce: transacional (orders, order_items), dimensional (users, products), operacional (inventory_items) e comportamental (events).",
    chart: {
      label: "SCHEMA DE ORIGEM — THELOOK_ECOMMERCE",
      title: "Seis tabelas de e-commerce · colunas-chave · volume de linhas",
      sub: "O extrator do BigQuery aceita qualquer nome de tabela deste dataset. As classes de modelo Pydantic correspondem 1-para-1 a cada tabela.",
      alt: "Seis tabelas de origem com volume de linhas: orders cerca de 125 mil, order_items cerca de 250 mil, users cerca de 100 mil, products cerca de 29 mil, inventory_items cerca de 500 mil e events cerca de 2,5 milhões, ligadas por chaves estrangeiras a orders, users e products.",
      tables: {
        orders: { name: "orders", cols: ["order_id (PK)", "user_id (FK)", "status · created_at", "num_of_item", "gender · traffic_source"], rows: "~125 MIL LINHAS" },
        orderItems: { name: "order_items", cols: ["id (PK)", "order_id (FK) · user_id (FK)", "product_id (FK)", "sale_price · status", "shipped_at · returned_at"], rows: "~250 MIL LINHAS" },
        users: { name: "users", cols: ["id (PK)", "first_name · last_name", "email · gender · age", "country · city · state", "traffic_source · created_at"], rows: "~100 MIL LINHAS" },
        products: { name: "products", cols: ["id (PK)", "name · brand · category", "department · sku", "retail_price · cost", "distribution_center_id"], rows: "~29 MIL LINHAS" },
        inventory: { name: "inventory_items", cols: ["id (PK)", "product_id (FK)", "product_category", "cost · sold_at", "created_at · sold_at"], rows: "~500 MIL LINHAS" },
        events: { name: "events", cols: ["id (PK)", "user_id (FK)", "event_type · session_id", "browser · os · ip_address", "uri · created_at"], rows: "~2,5 MI DE LINHAS" },
      },
      legend: { title: "LEGENDA", primary: "Alvo principal do extrator", secondary: "Secundária / dimensão", fk: "Join por chave estrangeira" },
    },
  },

  validation: {
    kicker: "CAMADA DE VALIDAÇÃO COM PYDANTIC",
    title: ["Tipos garantidos na ", "fronteira de ingestão", " — antes que um único registro entre no DuckDB."],
    lead: "Os modelos do Pydantic v2 funcionam como contrato entre o extrator do BigQuery e o loader do DuckDB. Todo registro passa pela classe de modelo correspondente — registros inválidos são interceptados, registrados e rejeitados ou colocados em quarentena antes de corromperem a camada analítica.",
    chart: {
      label: "VALIDAÇÃO COM PYDANTIC — EXEMPLO DO ORDERMODEL",
      title: "Dict de entrada → OrderModel → registro válido OU erro de validação",
      sub: "Cada tabela de origem tem sua classe de modelo Pydantic. A validação roda registro a registro na ingestão, não em lote depois da carga.",
      alt: "Um dict bruto do BigQuery, com valores em string e created_at nulo, passa pelo OrderModel. Registros válidos têm os tipos convertidos e são carregados no DuckDB; o created_at nulo gera um ValidationError que para o pipeline no modo strict ou coloca a linha em quarentena no modo tolerant.",
      input: {
        title: "Dict bruto do BigQuery",
        lines: ["\"order_id\": \"12345\"", "\"user_id\": \"789\"", "\"status\": \"Complete\"", "\"num_of_item\": \"3\""],
        nullLine: "\"created_at\": null",
        nullNote: "← nulo em campo não anulável",
        note: "strings ainda sem conversão de tipo",
      },
      model: {
        title: "OrderModel (Pydantic v2)",
        head: "class OrderModel(BaseModel):",
        fields: ["order_id: int", "user_id: int", "status: OrderStatus", "num_of_item: int", "created_at: datetime", "gender: str | None = None"],
        rulesTitle: "Regras de validação",
        rules: ["coerção str → int (order_id, user_id)", "status precisa estar no enum OrderStatus", "created_at: não anulável — falha aqui", "gender: opcional, padrão None"],
        config: ["model_config = ConfigDict(", "coerce_numbers_to_str=False)"],
      },
      valid: {
        tag: "VÁLIDO",
        title: "Registro válido → DuckDB",
        lines: ["order_id: 12345 (int)", "status: OrderStatus.COMPLETE (enum)", "num_of_item: 3 (int) · gender: None"],
      },
      invalid: {
        tag: "INVÁLIDO",
        title: "ValidationError → log + ação",
        code: ["ValidationError: created_at", "Input should be a valid datetime [null]"],
        modes: ["modo strict: o pipeline para", "modo tolerant: linha em quarentena, o pipeline segue"],
      },
      runtime: "FLAG DE EXECUÇÃO",
      flag: "--mode strict | tolerant",
    },
  },

  sinks: {
    kicker: "DESTINOS MÚLTIPLOS",
    title: ["Um pipeline, ", "três destinos de saída", " — escolhidos em tempo de execução."],
    lead: "Depois que o DuckDB processa os registros validados, o adaptador de destino grava a saída onde a execução indicar. Cada adaptador é uma classe Python separada que implementa uma interface SinkAdapter comum — trocar de destino não exige nenhuma mudança nas camadas de extração e validação.",
    chart: {
      label: "COMPARAÇÃO DOS DESTINOS",
      title: "CSV · Amazon S3 · MotherDuck — quando usar cada um",
      sub: "Cada destino é configurável de forma independente por variáveis de ambiente. O pipeline exporta resultados de consultas no DuckDB — a saída sempre vem depois da validação e do processamento no DuckDB.",
      alt: "Três destinos comparados: o CSV grava arquivos UTF-8 na hora, para desenvolvimento local; o Amazon S3 grava Parquet com snappy em cerca de 2–5 segundos por lote, para o data lake; o MotherDuck grava tabelas DuckDB persistentes em cerca de 1–3 segundos, para consultas de BI.",
      header: "ADAPTADOR · FORMATO DE SAÍDA · LATÊNCIA · CASO DE USO · CONFIGURAÇÃO",
      columns: { sink: "DESTINO", format: "FORMATO", latency: "LATÊNCIA", best: "IDEAL PARA", config: "CONFIG" },
      rows: [
        { name: "CSV", tag: "SINK DE ARQUIVOS", format: [".csv (UTF-8)", "via DuckDB COPY"], latency: ["Imediata", "sem I/O de rede"], best: ["Desenvolvimento local · testes", "Checagens de validação de schema", "Ambientes offline"], config: ["OUTPUT_PATH=./data/", "--sink csv"] },
        { name: "Amazon S3", tag: "ARMAZENAMENTO", format: ["Parquet (snappy)", "particionado por data"], latency: ["~2–5 s", "por upload em lote"], best: ["Integração com data lake", "Glue / Athena a jusante", "Arquivamento de longo prazo"], config: ["AWS_BUCKET · AWS_KEY", "--sink s3"] },
        { name: "MotherDuck", tag: "DUCKDB NA NUVEM", format: ["Tabela DuckDB", "persistente · consultável"], latency: ["~1–3 s", "por ATTACH + INSERT"], best: ["Endpoint de consulta analítica", "Conexão com BI (Power BI)", "Resultados persistentes e compartilháveis"], config: ["MOTHERDUCK_TOKEN=...", "--sink motherduck"] },
      ],
      iface: {
        name: "Interface SinkAdapter",
        lines: [
          "— os três destinos implementam write(df: duckdb.DuckDBPyRelation, table_name: str) → None.",
          "Um quarto destino não exige nenhuma mudança no extrator nem no validador.",
        ],
      },
    },
  },

  modules: {
    kicker: "ARQUITETURA DE COMPONENTES",
    title: ["Quatro módulos independentes, ", "zero imports cruzados", " entre as etapas."],
    lead: "Cada componente é um módulo Python com uma única interface pública. O orquestrador (main.py) é o único arquivo que importa de vários módulos — o que garante que cada componente possa ser testado isoladamente e que uma mudança em um módulo não quebre outro.",
    stats: [
      { value: "4", unit: "módulos Python", label: "Extrator do BigQuery, validador Pydantic, loader do DuckDB e adaptador de destinos — testáveis de forma independente" },
      { value: "3", unit: "destinos de saída", label: "CSV, Amazon S3, MotherDuck — escolhidos em tempo de execução pela flag --sink, sem mudar código" },
      { value: "6", unit: "tabelas de origem", label: "orders, order_items, users, products, inventory_items, events — cada uma com sua classe de modelo Pydantic" },
    ],
    chart: {
      label: "MAPA DE DEPENDÊNCIAS ENTRE MÓDULOS",
      title: "O main.py orquestra — os módulos nunca importam uns aos outros",
      sub: "A inversão de dependências mantém cada módulo testável de forma independente. Os testes do extrator do BigQuery usam mock do cliente BQ; os do validador Pydantic usam dicts fixos; os dos destinos usam relações DuckDB em memória.",
      alt: "O main.py, ponto de entrada da CLI, importa quatro módulos que nunca importam uns aos outros: bq_client.py, models.py, duckdb_loader.py e sinks.py, cada um testado isoladamente.",
      main: { name: "main.py", role: "Orquestrador · ponto de entrada da CLI", args: "argparse: --table · --sink · --mode" },
      mods: [
        { name: "bq_client.py", role: "Extrator do BigQuery", lines: ["fetch_table(table_name) → list[dict]", "BigQueryClient(credentials)", "mock nos testes unitários"] },
        { name: "models.py", role: "Validador Pydantic", lines: ["OrderModel, UserModel, …", "validate(records, model_class)", "testado com dicts fixos"] },
        { name: "duckdb_loader.py", role: "Loader do DuckDB", lines: ["load(records) → DuckDBRelation", "Cria tabelas em memória", "testado com DB em memória"] },
        { name: "sinks.py", role: "Adaptadores de destino", lines: ["CSVSink · S3Sink · MotherDuckSink", "write(relation, table_name)", "testado com DuckDB temporário"] },
      ],
      rule: {
        name: "Regra de dependências",
        lines: [
          "— bq_client, models, duckdb_loader e sinks nunca importam uns dos outros.",
          "Só o main.py tem dependências entre módulos — garantido por lint de imports no CI.",
        ],
      },
    },
  },

  deliverables: {
    kicker: "ENTREGÁVEIS",
    title: ["Uma base de código ETL reproduzível e ", "testável de forma independente", "."],
    lead: "Todo componente vem com testes unitários, configuração por variáveis de ambiente e um README com o setup local e as credenciais exigidas por cada destino.",
    items: [
      { title: "Extrator do BigQuery (bq_client.py)", desc: "Extrator agnóstico de tabela usando o cliente Python do BigQuery. Retorna uma saída list[dict] validada. Autenticação por JSON de service account ou ADC." },
      { title: "Modelos Pydantic (models.py)", desc: "Uma subclasse de BaseModel por tabela de origem. Coerção de tipos, validação de enums, garantia de nulidade e configuração dos modos strict/tolerant." },
      { title: "Loader do DuckDB (duckdb_loader.py)", desc: "Motor analítico em processo. Recebe os registros validados, cria tabelas DuckDB em memória e expõe uma DuckDBRelation para os destinos consumirem." },
      { title: "Adaptadores de destino (sinks.py)", desc: "CSVSink, S3Sink e MotherDuckSink — todos implementando um protocolo SinkAdapter comum. Escolhidos em tempo de execução pela flag --sink da CLI." },
      { title: "Suíte de testes unitários (pytest)", desc: "Testes independentes por módulo. BigQuery com mock via unittest.mock. Testes do validador com dicts válidos/inválidos fixos. Testes dos destinos com DuckDB em memória." },
      { title: "README + template de .env", desc: "Guia de setup local, configuração da service account do GCP, credenciais da AWS, token do MotherDuck e exemplos de chamadas da CLI para cada destino." },
    ],
  },

  quote: ["Um pipeline é tão confiável quanto os dados que entram nele. ", "Valide na fronteira", ", processe em memória e faça do destino uma decisão de execução — não uma suposição fixada no código."],
};

export const copy: Record<Lang, EcommerceCopy> = { en, pt };
