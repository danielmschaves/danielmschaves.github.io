/* Copy for the Spotify ELT pipeline case study, prose and chart labels included.
   Mono labels are typed in UPPERCASE here, as the Ledger content rules ask. */

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
export const copy: Record<"en", SpotifyELTCopy> = { en };
