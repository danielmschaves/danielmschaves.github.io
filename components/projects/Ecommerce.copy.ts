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
export const copy: Record<Lang, EcommerceCopy> = { en, pt: en };
