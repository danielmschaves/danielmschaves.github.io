/* Copy for the Spotify ELT pipeline case study, prose and chart labels included.
   Mono labels are typed in UPPERCASE here, as the Ledger content rules ask. */

import type { Lang } from "@/lib/i18n";

const en = {
  lead: "End-to-end ELT pipeline built on DuckDB, Motherduck, dbt, and Astronomer Airflow. Spotify API data flows through a Raw → Bronze → Silver → Gold medallion architecture on AWS S3, transformed by dbt into analytics-ready dimensional models, and surfaced in Power BI — with Terraform provisioning the entire infrastructure.",
  facts: [
    ["TYPE", "ELT pipeline"],
    ["ARCHITECTURE", "Medallion · 4-layer"],
    ["ORCHESTRATION", "Airflow · daily"],
    ["SOURCE", "Spotify API"],
  ] as [string, string][],
  tags: ["AWS", "Python", "Airflow", "DuckDB", "dbt", "Terraform", "Motherduck", "S3", "Power BI"],
  links: [{ label: "GitHub repository", href: "https://github.com/danielmschaves/spotify-etl-aws" }],

  context: {
    kicker: "CONTEXT & ARCHITECTURE",
    title: ["A ", "cost-zero data lake", " built on embedded analytics, not standing servers."],
    premise: {
      title: "The “poor man’s data lake” premise",
      p1: "Most data lake architectures require standing up a cluster — Spark, EMR, Redshift — that burns compute cost whether it’s processing data or not. DuckDB breaks this constraint: it runs in-process, reads Parquet directly from S3, and costs nothing when idle.",
      p2: "The goal was to prove that a serious, production-grade ELT pipeline with proper transformation layers, automated testing, and BI integration could be built without paying for idle infrastructure. Motherduck extends DuckDB into the cloud, giving Power BI a persistent query endpoint without the overhead of a traditional warehouse.",
    },
    job: {
      title: "What the pipeline had to do",
      strong: "Extract at scale.",
      p1: " The Spotify API exposes global playlist data — tracks, albums, artists — in nested JSON. The pipeline needed to handle pagination, rate limits, and schema variance across resource types.",
      p2: "Each raw payload then moves through a structured four-stage medallion — Raw preserves the original API response, Bronze converts to Parquet, Silver applies business-rule cleaning, and Gold delivers analytics-ready dimensional models directly queryable by Power BI.",
    },
    chart: {
      label: "MEDALLION ARCHITECTURE",
      title: "Four-stage data lake: Raw → Bronze → Silver → Gold",
      sub: "Each stage transforms fidelity — preserving the original at Raw, standardising format at Bronze, enriching at Silver, and delivering analytics-ready models at Gold.",
      alt: "Four medallion stages on AWS S3: Raw keeps the JSON API response, Bronze converts it to typed Parquet with DuckDB, Silver applies business rules, and Gold holds dbt dimensional tables in Motherduck, read by Power BI.",
      header: "ELT MEDALLION PIPELINE · AWS S3 STORAGE ZONES · DAILY BATCH VIA AIRFLOW",
      fields: { format: "FORMAT", tool: "TOOL", storage: "STORAGE" },
      stages: [
        { name: "Raw", format: "JSON (raw API response)", tool: "Spotify API extractor", storage: "S3 · raw/ prefix", notes: ["Tracks · Albums · Artists", "Playlists — immutable landing"] },
        { name: "Bronze", format: "Parquet (columnar)", tool: "DuckDB · JSON → Parquet", storage: "S3 · bronze/ prefix", notes: ["Schema enforced, typed,", "compressed — read-ready"] },
        { name: "Silver", format: "Parquet (enriched)", tool: "DuckDB · business rules", storage: "S3 · silver/ prefix", notes: ["Deduped, normalised,", "null-handled, join-ready"] },
        { name: "Gold", format: "Dimensional tables", tool: "dbt + Motherduck", storage: "Motherduck + S3 gold/", notes: ["Power BI reads directly", "from Motherduck endpoint"] },
      ],
      callout: "→ POWER BI",
    },
  },

  topology: {
    kicker: "SYSTEM TOPOLOGY",
    title: ["Nine tools, ", "one coherent pipeline", " — from API call to dashboard."],
    lead: "Each component has a single, well-defined job. Spotify API is the only source of truth. Airflow orchestrates without being the transformation engine. DuckDB processes without running a server. Terraform provisions without manual state. The architecture is modular: any component can be swapped independently.",
    chart: {
      label: "END-TO-END DATA FLOW",
      title: "Source → Orchestration → Storage → Analytics",
      sub: "Left-to-right flow: data originates at the Spotify API, is orchestrated by Airflow, staged across four S3 zones, processed by DuckDB, warehoused in Motherduck, and queried by Power BI.",
      alt: "Data flow: the Spotify API feeds four Airflow task groups; they land data in S3 raw, bronze and silver zones, DuckDB processes it, dbt builds models in Motherduck, Power BI queries Motherduck, and Terraform provisions the S3 buckets and Motherduck tables.",
      layers: { source: "SOURCE", orchestration: "ORCHESTRATION", storage: "STORAGE (AWS S3)", processing: "PROCESSING", warehouse: "WAREHOUSE", analytics: "ANALYTICS" },
      spotify: { name: ["Spotify", "API"], items: ["Tracks", "Albums", "Artists", "Playlists"] },
      airflow: {
        name: ["Astronomer", "Airflow"],
        schedule: "DAILY · 06:00 UTC",
        tasks: ["extract_spotify", "bronze_transform", "silver_transform", "dbt_run"],
        notes: ["DAG retries: 2 · timeout: 2h", "Modular Python task groups", "with independent testing"],
      },
      zones: [
        { name: "S3 RAW", note: "JSON · by date" },
        { name: "S3 BRONZE", note: "Parquet · typed" },
        { name: "S3 SILVER", note: "Parquet · enriched" },
      ],
      duckdb: { name: "DuckDB", tags: ["IN-PROCESS", "ZERO SERVER"], items: ["JSON → Parquet (bronze)", "Reads from S3", "Clean + enrich (silver)"], note: "No idle cost" },
      motherduck: { name: "Motherduck", tags: ["CLOUD DUCKDB", "EXTERNAL TABLES"], items: ["dim_artist · dim_track", "fct_stream · fct_playlist"] },
      terraform: { name: "TERRAFORM (IAC)", items: ["Provisions S3 buckets", "+ Motherduck ext. tables"] },
      powerbi: { name: "Power BI", tags: ["ANALYTICS LAYER", "3 REPORT PAGES"], items: ["Playlist trends", "Artist reach · Track metrics"] },
      dbtPath: "DBT_RUN → MOTHERDUCK",
    },
  },

  orchestration: {
    kicker: "ORCHESTRATION",
    title: ["Four modular task groups, ", "each independently testable", " and retryable."],
    lead: "The Airflow DAG is structured so that each medallion stage maps to exactly one task group. If the silver transform fails, the bronze data is already landed and safe — the retry only re-runs what failed. This is the key resilience property the modular design provides.",
    chart: {
      label: "AIRFLOW DAG STRUCTURE",
      title: "Task-group dependency chain · daily @ 06:00 UTC",
      sub: "Each group is a self-contained Python module — it can be unit-tested independently and retried in isolation without re-running upstream stages.",
      alt: "Airflow DAG spotify_daily_dag with four task groups in sequence: extract_spotify, bronze_transform, silver_transform and dbt_run. Retries twice; on failure only the failed stage replays.",
      dag: "spotify_daily_dag",
      schedule: "schedule: @daily · start_date: 2024-01-01 · retries: 2 · retry_delay: 5min",
      platform: "Astronomer · Airflow 2.8",
      groups: [
        { name: "extract_spotify", tag: "TASK GROUP 01", steps: ["get_tracks()", "get_albums()", "get_artists()", "get_playlists()"], note: "→ raw JSON to S3 raw/" },
        { name: "bronze_transform", tag: "TASK GROUP 02", steps: ["read_raw_s3()", "json_to_parquet()", "enforce_schema()", "write_bronze_s3()"], note: "DuckDB · in-process" },
        { name: "silver_transform", tag: "TASK GROUP 03", steps: ["read_bronze_s3()", "deduplicate()", "normalise_nulls()", "write_silver_s3()"], note: "DuckDB · enrichment rules" },
        { name: "dbt_run", tag: "TASK GROUP 04 · GOLD STAGE", steps: ["dbt run --select staging", "dbt run --select intermediate", "dbt run --select marts", "dbt test"], note: "Motherduck · dev + prod targets" },
      ],
      retry: {
        title: "RETRY & FAILURE ISOLATION",
        lines: [
          "Each task group runs only after its upstream group succeeds — enforced by XCom passing, no implicit data coupling.",
          "On failure, Airflow retries twice. If exhausted, prior zone data remains safe — only the failed stage replays on the next run.",
        ],
      },
    },
  },

  transformation: {
    kicker: "TRANSFORMATION",
    title: ["Three dbt layers, each with ", "automated test coverage", "."],
    lead: "dbt is the transformation engine for the Gold stage. Every model is tested — sources have schema tests, staging models have not-null and unique constraints, and marts carry referential integrity checks. Both dev and prod targets hit Motherduck, with full documentation generated on each run.",
    chart: {
      label: "DBT MODEL ARCHITECTURE",
      title: "Sources → Staging → Intermediate → Marts · with automated test coverage",
      alt: "dbt layers and their tests: sources 6 schema and 4 freshness tests, staging 18 not-null and unique and 8 accepted-values tests, intermediate 12 tests, marts 24 tests, with dev and prod Motherduck targets.",
      header: "DBT-CORE · MOTHERDUCK TARGET · DEV + PROD ENVIRONMENTS",
      columns: { layer: "LAYER", models: "MODELS", coverage: "TEST COVERAGE", tests: "TESTS" },
      layers: [
        {
          name: "Sources",
          sub: ["Parquet via Motherduck", "external tables"],
          models: [
            { code: "source_spotify.tracks" },
            { code: "source_spotify.albums" },
            { code: "source_spotify.artists" },
            { code: "source_spotify.playlists" },
          ],
          tests: [
            { label: "Schema · not-null", share: 0.625, count: "6 tests" },
            { label: "Freshness checks", share: 0.8125, count: "4 tests" },
          ],
        },
        {
          name: "Staging",
          sub: ["1-to-1 source", "models"],
          models: [
            { code: "stg_tracks", note: "type casting · column renaming · null defaults" },
            { code: "stg_albums · stg_artists · stg_playlists", note: "standardised grain · ready for joining" },
          ],
          tests: [
            { label: "not_null · unique (all models)", share: 0.906, count: "18 tests" },
            { label: "accepted_values", share: 0.5, count: "8 tests" },
          ],
        },
        {
          name: "Intermediate",
          sub: ["business-rule", "enrichment"],
          models: [
            { code: "int_tracks_enriched", note: "joins track + album + artist · adds popularity decile" },
            { code: "int_playlist_tracks", note: "flattens nested playlist ↔ track relationship" },
          ],
          tests: [{ label: "not_null · unique · relationships", share: 0.75, count: "12 tests" }],
        },
        {
          name: "Marts",
          sub: ["analytics-ready", "dimensional models"],
          models: [
            { code: "dim_artist · dim_track · dim_album", note: "slowly-changing dimensions · SCD type 1" },
            { code: "fct_stream · fct_playlist_snapshot", note: "fact grain: one row per stream event / snapshot date" },
          ],
          tests: [{ label: "not_null · unique · relationships · accepted_values", share: 1, count: "24 tests" }],
        },
      ],
      targets: {
        title: "Dev + prod targets",
        lines: ["profiles.yml configures two Motherduck targets —", "dev for iteration, prod for Power BI."],
      },
    },
  },

  cost: {
    kicker: "METRICS & COST MODEL",
    title: ["Near-zero infrastructure cost — ", "without sacrificing engineering quality", "."],
    lead: "The “poor man’s data lake” is not a shortcut — it’s a deliberate architectural decision to eliminate idle compute costs. DuckDB runs only during DAG execution. S3 charges only for storage consumed. Motherduck charges only for queries run.",
    stats: [
      { value: "4", unit: "medallion stages", label: "Raw → Bronze → Silver → Gold, each independently retryable and testable" },
      { value: "68", unit: "dbt automated tests", label: "Schema, not-null, unique, and referential integrity checks across all model layers" },
      { value: "$0", unit: "standing server cost", label: "No cluster, no running instance — DuckDB only burns compute during the daily DAG run" },
    ],
    chart: {
      label: "INFRASTRUCTURE COST MODEL",
      title: "This architecture vs. a traditional data warehouse stack",
      sub: "The cost advantage is structural, not incidental — it comes from eliminating idle compute, not from cutting features or quality.",
      alt: "Estimated monthly cost: a traditional stack of Redshift, EMR, RDS and Airflow on EC2 at about $810 a month, against about $4 a month for S3, DuckDB, Motherduck and Astronomer — a 200× reduction.",
      header: "ESTIMATED MONTHLY INFRASTRUCTURE COST (USD)",
      total: "Total",
      traditional: {
        title: "Traditional data warehouse stack",
        tag: "REDSHIFT + EMR + RDS + AIRFLOW EC2",
        rows: [
          { name: "Redshift (2-node)", value: "~ $360/mo", w: 270 },
          { name: "EMR Spark (small cluster)", value: "~ $240/mo", w: 180 },
          { name: "RDS PostgreSQL (t3.medium)", value: "~ $140/mo", w: 105 },
          { name: "Airflow on EC2 (m5.large)", value: "~ $70/mo", w: 52 },
        ],
        sum: "$810",
        sumNote: "per month — whether or not data is being processed",
      },
      lean: {
        title: "This architecture",
        tag: "DUCKDB + S3 + MOTHERDUCK + ASTRONOMER",
        rows: [
          { name: "AWS S3 (10 GB data)", value: "~ $2/mo", w: 18 },
          { name: "DuckDB (in-process)", value: "$0/mo", w: 0 },
          { name: "Motherduck", value: "~ $2/mo", w: 24 },
          { name: "Astronomer (dev tier)", value: "~ $0/mo", w: 8 },
        ],
        sum: "~ $4",
        sumNote: "per month — scales with data volume",
      },
      badge: { title: "200× cost reduction", line: "$810/mo traditional → ~$4/mo", note: "at equivalent engineering quality" },
      why: {
        title: "Why the cost gap is structural, not incidental",
        lines: [
          "Traditional stacks pay for idle capacity 24/7. DuckDB, S3,",
          "and Motherduck charge only for what runs — same",
          "transformation quality, 200× lower cost.",
        ],
      },
    },
  },

  deliverables: {
    kicker: "DELIVERABLES",
    title: ["Six artifacts — every one ", "production-grade and reproducible", "."],
    lead: ["The pipeline is open-source. Each component is self-contained, documented, and independently deployable. Terraform ensures the infrastructure is reproducible from a single ", "terraform apply", "."],
    items: [
      { title: "Airflow DAG (Python)", desc: "Four modular task groups (extract → bronze → silver → dbt_run) with XCom-based dependency passing, retry logic, and independent unit tests per group." },
      { title: "dbt project (staging → intermediate → marts)", desc: "68 automated tests across four model layers. Docs generated on every run. Dev and prod Motherduck targets configured in profiles.yml." },
      { title: "Terraform module (IaC)", desc: "S3 bucket definitions with versioning and lifecycle rules. Motherduck external table DDL auto-generated for all four medallion zones." },
      { title: "Power BI dashboard (3 report pages)", desc: "Playlist trend analysis, artist reach by market, and track-level streaming metrics — all querying Motherduck directly via DirectQuery." },
      { title: "README & architecture decision log", desc: "Step-by-step local setup, environment variable reference, Spotify API credential configuration, and the rationale behind every major design choice." },
      { title: "DuckDB extraction layer (Python)", desc: "Reusable Python modules for each Spotify resource type — handles pagination, rate-limit back-off, and schema variance across API versions." },
    ],
  },

  quote: ["The best data lake is the one you can actually ", "afford to run", ". Embed the engine, eliminate the server, charge only for what you process — and spend the savings on engineering quality instead."],
};

export type SpotifyELTCopy = typeof en;
const pt: SpotifyELTCopy = {
  lead: "Pipeline ELT de ponta a ponta construído com DuckDB, Motherduck, dbt e Astronomer Airflow. Os dados da API do Spotify passam por uma arquitetura medallion Raw → Bronze → Silver → Gold no AWS S3, são transformados pelo dbt em modelos dimensionais prontos para análise e chegam ao Power BI — com o Terraform provisionando toda a infraestrutura.",
  facts: [
    ["TIPO", "Pipeline ELT"],
    ["ARQUITETURA", "Medallion · 4 camadas"],
    ["ORQUESTRAÇÃO", "Airflow · diária"],
    ["ORIGEM", "API do Spotify"],
  ],
  tags: ["AWS", "Python", "Airflow", "DuckDB", "dbt", "Terraform", "Motherduck", "S3", "Power BI"],
  links: [{ label: "Repositório no GitHub", href: "https://github.com/danielmschaves/spotify-etl-aws" }],

  context: {
    kicker: "CONTEXTO & ARQUITETURA",
    title: ["Um ", "data lake de custo zero", " construído sobre analytics embarcado, não sobre servidores ligados."],
    premise: {
      title: "A premissa do “poor man’s data lake”",
      p1: "A maioria das arquiteturas de data lake exige subir um cluster — Spark, EMR, Redshift — que consome computação esteja processando dados ou não. O DuckDB quebra essa restrição: roda in-process, lê Parquet direto do S3 e não custa nada parado.",
      p2: "O objetivo era provar que dá para construir um pipeline ELT sério, de nível de produção — com camadas de transformação, testes automatizados e integração com BI — sem pagar por infraestrutura ociosa. O Motherduck leva o DuckDB para a nuvem e dá ao Power BI um endpoint de consulta persistente, sem o peso de um warehouse tradicional.",
    },
    job: {
      title: "O que o pipeline precisava fazer",
      strong: "Extrair em escala.",
      p1: " A API do Spotify expõe dados de playlists globais — faixas, álbuns, artistas — em JSON aninhado. O pipeline precisava lidar com paginação, limites de requisição e variações de schema entre os tipos de recurso.",
      p2: "Cada payload bruto passa então por um medallion estruturado de quatro etapas — a Raw preserva a resposta original da API, a Bronze converte para Parquet, a Silver aplica a limpeza por regras de negócio e a Gold entrega modelos dimensionais prontos para análise, consultáveis direto pelo Power BI.",
    },
    chart: {
      label: "ARQUITETURA MEDALLION",
      title: "Data lake em quatro etapas: Raw → Bronze → Silver → Gold",
      sub: "Cada etapa transforma a fidelidade — preserva o original na Raw, padroniza o formato na Bronze, enriquece na Silver e entrega modelos prontos para análise na Gold.",
      alt: "Quatro etapas medallion no AWS S3: a Raw guarda a resposta JSON da API, a Bronze converte para Parquet tipado com o DuckDB, a Silver aplica regras de negócio e a Gold mantém tabelas dimensionais do dbt no Motherduck, lidas pelo Power BI.",
      header: "PIPELINE ELT MEDALLION · ZONAS NO AWS S3 · BATCH DIÁRIO VIA AIRFLOW",
      fields: { format: "FORMATO", tool: "FERRAMENTA", storage: "STORAGE" },
      stages: [
        { name: "Raw", format: "JSON (resposta bruta da API)", tool: "Extrator da API do Spotify", storage: "S3 · prefixo raw/", notes: ["Faixas · Álbuns · Artistas", "Playlists — pouso imutável"] },
        { name: "Bronze", format: "Parquet (colunar)", tool: "DuckDB · JSON → Parquet", storage: "S3 · prefixo bronze/", notes: ["Schema aplicado, tipado,", "comprimido — pronto para leitura"] },
        { name: "Silver", format: "Parquet (enriquecido)", tool: "DuckDB · regras de negócio", storage: "S3 · prefixo silver/", notes: ["Sem duplicatas, normalizado,", "nulos tratados, pronto para join"] },
        { name: "Gold", format: "Tabelas dimensionais", tool: "dbt + Motherduck", storage: "Motherduck + S3 gold/", notes: ["O Power BI lê direto", "do endpoint do Motherduck"] },
      ],
      callout: "→ POWER BI",
    },
  },

  topology: {
    kicker: "TOPOLOGIA DO SISTEMA",
    title: ["Nove ferramentas, ", "um pipeline coerente", " — da chamada de API ao dashboard."],
    lead: "Cada componente tem uma única função bem definida. A API do Spotify é a única fonte da verdade. O Airflow orquestra sem ser o motor de transformação. O DuckDB processa sem rodar um servidor. O Terraform provisiona sem estado manual. A arquitetura é modular: qualquer componente pode ser trocado de forma independente.",
    chart: {
      label: "FLUXO DE DADOS DE PONTA A PONTA",
      title: "Origem → Orquestração → Storage → Analytics",
      sub: "Fluxo da esquerda para a direita: os dados nascem na API do Spotify, são orquestrados pelo Airflow, passam por quatro zonas no S3, são processados pelo DuckDB, armazenados no Motherduck e consultados pelo Power BI.",
      alt: "Fluxo de dados: a API do Spotify alimenta quatro task groups do Airflow; eles gravam nas zonas raw, bronze e silver do S3, o DuckDB processa, o dbt constrói modelos no Motherduck, o Power BI consulta o Motherduck e o Terraform provisiona os buckets S3 e as tabelas do Motherduck.",
      layers: { source: "ORIGEM", orchestration: "ORQUESTRAÇÃO", storage: "STORAGE (S3)", processing: "PROCESSAMENTO", warehouse: "WAREHOUSE", analytics: "ANALYTICS" },
      spotify: { name: ["API do", "Spotify"], items: ["Faixas", "Álbuns", "Artistas", "Playlists"] },
      airflow: {
        name: ["Astronomer", "Airflow"],
        schedule: "DIÁRIO · 06:00 UTC",
        tasks: ["extract_spotify", "bronze_transform", "silver_transform", "dbt_run"],
        notes: ["Retries do DAG: 2 · timeout: 2h", "Task groups modulares em Python", "com testes independentes"],
      },
      zones: [
        { name: "S3 RAW", note: "JSON · por data" },
        { name: "S3 BRONZE", note: "Parquet · tipado" },
        { name: "S3 SILVER", note: "Parquet enriquecido" },
      ],
      duckdb: { name: "DuckDB", tags: ["IN-PROCESS", "SEM SERVIDOR"], items: ["JSON → Parquet (bronze)", "Lê do S3", "Limpa/enriquece (silver)"], note: "Sem custo ocioso" },
      motherduck: { name: "Motherduck", tags: ["DUCKDB NA NUVEM", "TABELAS EXTERNAS"], items: ["dim_artist · dim_track", "fct_stream · fct_playlist"] },
      terraform: { name: "TERRAFORM (IAC)", items: ["Provisiona buckets S3", "+ tabelas ext. Motherduck"] },
      powerbi: { name: "Power BI", tags: ["CAMADA ANALÍTICA", "3 PÁGINAS DE RELATÓRIO"], items: ["Tendências de playlists", "Alcance de artistas · faixas"] },
      dbtPath: "DBT_RUN → MOTHERDUCK",
    },
  },

  orchestration: {
    kicker: "ORQUESTRAÇÃO",
    title: ["Quatro task groups modulares, ", "cada um testável de forma independente", " e com retry próprio."],
    lead: "O DAG do Airflow é estruturado para que cada etapa do medallion corresponda a exatamente um task group. Se a transformação silver falha, os dados bronze já estão gravados e seguros — o retry roda de novo só o que falhou. Essa é a principal propriedade de resiliência que o desenho modular garante.",
    chart: {
      label: "ESTRUTURA DO DAG NO AIRFLOW",
      title: "Cadeia de dependências entre task groups · diária às 06:00 UTC",
      sub: "Cada grupo é um módulo Python autocontido — pode ser testado de forma unitária e reexecutado isoladamente, sem rodar de novo as etapas anteriores.",
      alt: "DAG spotify_daily_dag do Airflow com quatro task groups em sequência: extract_spotify, bronze_transform, silver_transform e dbt_run. Faz dois retries; em caso de falha, só a etapa que falhou roda de novo.",
      dag: "spotify_daily_dag",
      schedule: "schedule: @daily · start_date: 2024-01-01 · retries: 2 · retry_delay: 5min",
      platform: "Astronomer · Airflow 2.8",
      groups: [
        { name: "extract_spotify", tag: "TASK GROUP 01", steps: ["get_tracks()", "get_albums()", "get_artists()", "get_playlists()"], note: "→ JSON bruto no S3 raw/" },
        { name: "bronze_transform", tag: "TASK GROUP 02", steps: ["read_raw_s3()", "json_to_parquet()", "enforce_schema()", "write_bronze_s3()"], note: "DuckDB · in-process" },
        { name: "silver_transform", tag: "TASK GROUP 03", steps: ["read_bronze_s3()", "deduplicate()", "normalise_nulls()", "write_silver_s3()"], note: "DuckDB · enriquecimento" },
        { name: "dbt_run", tag: "TASK GROUP 04 · ETAPA GOLD", steps: ["dbt run --select staging", "dbt run --select intermediate", "dbt run --select marts", "dbt test"], note: "Motherduck · targets dev + prod" },
      ],
      retry: {
        title: "RETRY & ISOLAMENTO DE FALHAS",
        lines: [
          "Cada task group só roda depois que o grupo anterior termina com sucesso — garantido por XCom, sem acoplamento implícito de dados.",
          "Em caso de falha, o Airflow tenta mais duas vezes. Se esgotar, os dados das zonas anteriores ficam seguros — só a etapa que falhou roda de novo.",
        ],
      },
    },
  },

  transformation: {
    kicker: "TRANSFORMAÇÃO",
    title: ["Três camadas do dbt, cada uma com ", "cobertura de testes automatizada", "."],
    lead: "O dbt é o motor de transformação da etapa Gold. Todo modelo é testado — as fontes têm testes de schema, os modelos de staging têm restrições de not-null e unique e os marts carregam checagens de integridade referencial. Os targets de dev e prod apontam para o Motherduck, com documentação completa gerada a cada execução.",
    chart: {
      label: "ARQUITETURA DE MODELOS DO DBT",
      title: "Sources → Staging → Intermediate → Marts · com cobertura de testes automatizada",
      alt: "Camadas do dbt e seus testes: sources com 6 testes de schema e 4 de freshness, staging com 18 de not-null e unique e 8 de accepted-values, intermediate com 12 testes, marts com 24 testes, e targets de dev e prod no Motherduck.",
      header: "DBT-CORE · TARGET MOTHERDUCK · AMBIENTES DEV + PROD",
      columns: { layer: "CAMADA", models: "MODELOS", coverage: "COBERTURA DE TESTES", tests: "TESTES" },
      layers: [
        {
          name: "Sources",
          sub: ["Parquet via Motherduck", "tabelas externas"],
          models: [
            { code: "source_spotify.tracks" },
            { code: "source_spotify.albums" },
            { code: "source_spotify.artists" },
            { code: "source_spotify.playlists" },
          ],
          tests: [
            { label: "Schema · not-null", share: 0.625, count: "6 testes" },
            { label: "Checagens de freshness", share: 0.8125, count: "4 testes" },
          ],
        },
        {
          name: "Staging",
          sub: ["modelos 1-para-1", "com a fonte"],
          models: [
            { code: "stg_tracks", note: "cast de tipos · renomeação · defaults de nulos" },
            { code: "stg_albums · stg_artists · stg_playlists", note: "grão padronizado · pronto para joins" },
          ],
          tests: [
            { label: "not_null · unique (todos os modelos)", share: 0.906, count: "18 testes" },
            { label: "accepted_values", share: 0.5, count: "8 testes" },
          ],
        },
        {
          name: "Intermediate",
          sub: ["enriquecimento por", "regras de negócio"],
          models: [
            { code: "int_tracks_enriched", note: "junta faixa, álbum e artista · decil de popularidade" },
            { code: "int_playlist_tracks", note: "achata a relação aninhada playlist ↔ faixa" },
          ],
          tests: [{ label: "not_null · unique · relationships", share: 0.75, count: "12 testes" }],
        },
        {
          name: "Marts",
          sub: ["modelos dimensionais", "prontos para análise"],
          models: [
            { code: "dim_artist · dim_track · dim_album", note: "dimensões de mudança lenta · SCD tipo 1" },
            { code: "fct_stream · fct_playlist_snapshot", note: "grão: uma linha por stream / data de snapshot" },
          ],
          tests: [{ label: "not_null · unique · relationships · accepted_values", share: 1, count: "24 testes" }],
        },
      ],
      targets: {
        title: "Targets dev + prod",
        lines: ["O profiles.yml configura dois targets no Motherduck —", "dev para iterar, prod para o Power BI."],
      },
    },
  },

  cost: {
    kicker: "MÉTRICAS & MODELO DE CUSTO",
    title: ["Custo de infraestrutura quase zero — ", "sem abrir mão da qualidade de engenharia", "."],
    lead: "O “poor man’s data lake” não é um atalho — é uma decisão de arquitetura deliberada para eliminar o custo de computação ociosa. O DuckDB só roda durante a execução do DAG. O S3 cobra só pelo storage usado. O Motherduck cobra só pelas consultas feitas.",
    stats: [
      { value: "4", unit: "etapas medallion", label: "Raw → Bronze → Silver → Gold, cada uma com retry e testes independentes" },
      { value: "68", unit: "testes automatizados no dbt", label: "Checagens de schema, not-null, unique e integridade referencial em todas as camadas de modelos" },
      { value: "US$ 0", unit: "de servidor ligado", label: "Nenhum cluster, nenhuma instância rodando — o DuckDB só consome computação durante a execução diária do DAG" },
    ],
    chart: {
      label: "MODELO DE CUSTO DE INFRAESTRUTURA",
      title: "Esta arquitetura vs. um stack tradicional de data warehouse",
      sub: "A vantagem de custo é estrutural, não acidental — vem de eliminar a computação ociosa, não de cortar funcionalidades ou qualidade.",
      alt: "Custo mensal estimado: um stack tradicional com Redshift, EMR, RDS e Airflow no EC2 por cerca de US$ 810 por mês, contra cerca de US$ 4 por mês com S3, DuckDB, Motherduck e Astronomer — uma redução de 200×.",
      header: "CUSTO MENSAL ESTIMADO DE INFRAESTRUTURA (USD)",
      total: "Total",
      traditional: {
        title: "Stack tradicional de data warehouse",
        tag: "REDSHIFT + EMR + RDS + AIRFLOW EC2",
        rows: [
          { name: "Redshift (2 nós)", value: "~ US$ 360/mês", w: 270 },
          { name: "EMR Spark (cluster pequeno)", value: "~ US$ 240/mês", w: 180 },
          { name: "RDS PostgreSQL (t3.medium)", value: "~ US$ 140/mês", w: 105 },
          { name: "Airflow no EC2 (m5.large)", value: "~ US$ 70/mês", w: 52 },
        ],
        sum: "US$ 810",
        sumNote: "por mês — com ou sem dados sendo processados",
      },
      lean: {
        title: "Esta arquitetura",
        tag: "DUCKDB + S3 + MOTHERDUCK + ASTRONOMER",
        rows: [
          { name: "AWS S3 (10 GB de dados)", value: "~ US$ 2/mês", w: 18 },
          { name: "DuckDB (in-process)", value: "US$ 0/mês", w: 0 },
          { name: "Motherduck", value: "~ US$ 2/mês", w: 24 },
          { name: "Astronomer (plano dev)", value: "~ US$ 0/mês", w: 8 },
        ],
        sum: "~ US$ 4",
        sumNote: "por mês — acompanha o volume de dados",
      },
      badge: { title: "Custo 200× menor", line: "US$ 810/mês no tradicional → ~US$ 4/mês", note: "com a mesma qualidade de engenharia" },
      why: {
        title: "Por que a diferença de custo é estrutural, não acidental",
        lines: [
          "Stacks tradicionais pagam por capacidade ociosa 24/7. DuckDB,",
          "S3 e Motherduck cobram só pelo que roda — mesma qualidade",
          "de transformação, custo 200× menor.",
        ],
      },
    },
  },

  deliverables: {
    kicker: "ENTREGÁVEIS",
    title: ["Seis artefatos — todos ", "de nível de produção e reproduzíveis", "."],
    lead: ["O pipeline é open-source. Cada componente é autocontido, documentado e implantável de forma independente. O Terraform garante que a infraestrutura seja reproduzível com um único ", "terraform apply", "."],
    items: [
      { title: "DAG do Airflow (Python)", desc: "Quatro task groups modulares (extract → bronze → silver → dbt_run), com dependências passadas por XCom, lógica de retry e testes unitários independentes por grupo." },
      { title: "Projeto dbt (staging → intermediate → marts)", desc: "68 testes automatizados em quatro camadas de modelos. Documentação gerada a cada execução. Targets de dev e prod no Motherduck configurados no profiles.yml." },
      { title: "Módulo Terraform (IaC)", desc: "Definição dos buckets S3 com versionamento e regras de ciclo de vida. DDL das tabelas externas do Motherduck gerado automaticamente para as quatro zonas do medallion." },
      { title: "Dashboard no Power BI (3 páginas de relatório)", desc: "Análise de tendências de playlists, alcance de artistas por mercado e métricas de streaming por faixa — tudo consultando o Motherduck direto via DirectQuery." },
      { title: "README & registro de decisões de arquitetura", desc: "Setup local passo a passo, referência de variáveis de ambiente, configuração das credenciais da API do Spotify e a justificativa de cada decisão de desenho importante." },
      { title: "Camada de extração com DuckDB (Python)", desc: "Módulos Python reutilizáveis para cada tipo de recurso do Spotify — lidam com paginação, back-off de limite de requisições e variações de schema entre versões da API." },
    ],
  },

  quote: ["O melhor data lake é o que dá para ", "manter rodando", ". Embarque o motor, elimine o servidor, pague só pelo que processa — e invista a economia em qualidade de engenharia."],
};

export const copy: Record<Lang, SpotifyELTCopy> = { en, pt };
