/* Copy for the Adventure Works analytics engineering case study, prose and chart labels included.
   Mono labels are typed in UPPERCASE here, as the Ledger content rules ask. */

import type { Lang } from "@/lib/i18n";

const en = {
  lead: "Analytics engineering certification project built on dbt Core and BigQuery. Adventure Works SAP data flows through three disciplined layers — staging standardises raw inputs, intermediate applies business logic, and marts deliver domain-organised dimensional models ready for BI consumption. Every layer covered by automated dbt tests and generated documentation.",
  facts: [
    ["TYPE", "Analytics engineering"],
    ["SOURCES", "64 SAP tables"],
    ["WAREHOUSE", "BigQuery"],
    ["LAYERS", "3 · stg → int → mart"],
  ] as [string, string][],
  tags: ["dbt", "BigQuery", "SQL", "Python", "Data modeling"],
  links: [
    { label: "GitHub repository", href: "https://github.com/danielmschaves/academy-dbt-test" },
    { label: "View dashboard", href: "https://drive.google.com/file/d/1P5sIFxPpFo0O0Vb3xIx0Xd5AipQMJtO5/preview" },
    { label: "Conceptual model", href: "https://drive.google.com/file/d/1ltGTRQKS7peliVuWBNowrY_ltx8IU8oJ/preview" },
  ],

  context: {
    kicker: "CONTEXT & APPROACH",
    title: ["From ", "raw SAP exports", " to a dimensional schema — the analytics engineer’s job."],
    problem: {
      title: "The source data problem",
      p1: "SAP systems generate tables optimised for transactional throughput, not analytical querying. Column names are abbreviated, types are inconsistent across modules, null handling is implicit, and relationships are buried in surrogate key conventions that vary by SAP module. Adventure Works exposes all of this across 64 tables spanning six business domains.",
      p2: "The analytics engineer’s job is to impose order without losing fidelity: standardise the grain, enforce types, name things for humans, and model the business logic once — so every downstream consumer sees a consistent, documented, testable surface.",
    },
    why: {
      title: "Why the three-layer architecture",
      strong: "Separation of concerns.",
      p1: " Staging is never business logic — it is just standardisation. Intermediate is never a BI model — it is preparation. Marts are the contract: the stable, domain-facing surface that BI tools and analysts depend on.",
      p2: "When a source changes schema, only the staging model needs to change. When business logic changes, only the intermediate model changes. The mart stays stable — and with it, the dashboards that depend on it.",
    },
    chart: {
      label: "SOURCE TABLE INVENTORY",
      title: "64 SAP source tables across six business domains",
      sub: "Each domain maps to a distinct SAP module. The staging layer creates one-to-one models for every source table shown here.",
      alt: "64 SAP source tables: sales and distribution 14, products and inventory 13, production 12, purchasing 11, human resources 8, and 6 shared master data tables.",
      header: "SAP MODULE · TABLE COUNT · SAMPLE TABLES",
      columns: { domain: "DOMAIN", tables: "TABLES", distribution: "DISTRIBUTION", samples: "SAMPLE SOURCES" },
      domains: [
        { name: "Sales & Distribution", count: 14, inBar: "SalesOrderHeader · SalesOrderDetail · Customer", samples: ["SalesPerson · SalesTerritory · SpecialOffer"] },
        { name: "Products & Inventory", count: 13, inBar: "Product · ProductCategory · ProductSubcategory", samples: ["ProductInventory · ProductPhoto · ProductReview"] },
        { name: "Production", count: 12, inBar: "WorkOrder · WorkOrderRouting · ProductDocument", samples: ["Location · ProductCostHistory · BillOfMaterials"] },
        { name: "Purchasing", count: 11, inBar: "PurchaseOrderHeader · PurchaseOrderDetail · Vendor", samples: ["ProductVendor · ShipMethod · VendorAddress"] },
        { name: "Human Resources", count: 8, inBar: "Employee · Department · Shift", samples: ["JobCandidate · EmployeeDepartmentHistory"] },
        { name: "Shared / master data", count: 6, inBar: "Address · AddressType", samples: ["ContactType · CountryRegion", "Currency · StateProvince"] },
      ],
      total: "TOTAL",
    },
  },

  layers: {
    kicker: "THREE-LAYER ARCHITECTURE",
    title: ["Staging cleans. Intermediate joins. ", "Marts deliver", "."],
    lead: "The three-layer pattern imposes strict separation of concerns. No staging model contains business logic. No mart model reads directly from source. Each layer has a single responsibility — and a test suite to prove it.",
    chart: {
      label: "DBT LAYER ARCHITECTURE",
      title: "Source → Staging → Intermediate → Marts · each layer’s job",
      sub: "Reading left to right: data fidelity increases, business meaning increases, and the audience shifts from engineers to analysts.",
      alt: "Four columns: raw BigQuery source tables for data engineers; staging models that rename, cast and default nulls; intermediate models that join and apply business rules; and marts with fct_sales and five dimensions for analysts and BI tools.",
      whatHappens: "What happens here",
      examples: "Example models",
      audience: "AUDIENCE",
      tests: "TESTS",
      source: {
        name: "Source (BigQuery raw)",
        tag: "64 TABLES · 6 DOMAINS",
        tables: ["sales.SalesOrderHeader", "sales.SalesOrderDetail", "product.Product", "product.ProductCategory", "hr.Employee", "purchasing.Vendor"],
        more: "… 58 more tables",
        audience: "Data engineers",
      },
      staging: {
        name: "Staging (stg_*)",
        tag: "1-TO-1 SOURCE MAPPING",
        steps: ["Column renaming (snake_case)", "Type casting (STRING → INT64)", "Null default substitution", "No business logic whatsoever"],
        models: ["stg_sales__orders", "stg_product__products", "stg_hr__employees"],
        tests: "not_null · unique",
      },
      intermediate: {
        name: "Intermediate (int_*)",
        tag: "BUSINESS LOGIC & JOINS",
        steps: ["Joining related staging models", "Applying business rules", "Enriching with derived fields", "Preparing grain for mart joins"],
        models: ["int_orders__enriched", "int_products__with_category", "int_employees__history"],
        tests: "not_null · relationships",
      },
      marts: {
        name: "Marts (fct_* + dim_*)",
        tag: "BUSINESS-DOMAIN DIMENSIONAL MODELS",
        facts: "Fact tables",
        fact: "fct_sales",
        grain: "one row per sales order line",
        dimsTitle: "Dimension tables",
        dims: ["dim_customer", "dim_product", "dim_employee", "dim_territory", "dim_date"],
        audience: "Analysts · BI tools",
      },
      direction: { title: "DIRECTION OF ABSTRACTION", from: "Raw & verbose", to: "Business-ready & documented" },
    },
  },

  datasets: {
    kicker: "BIGQUERY DATASET STRUCTURE",
    title: ["One BigQuery project, ", "four datasets", " — each owned by a dbt layer."],
    lead: "dbt manages the physical dataset structure in BigQuery. Each layer materialises into its own dataset, giving analysts a clear contract: query mart tables, never staging or intermediate tables directly. The layer boundary is both a modelling convention and an access-control point.",
    chart: {
      label: "BIGQUERY DATASET LAYOUT",
      title: "Project → dataset → table hierarchy by dbt layer",
      sub: "dbt’s target schema configuration maps directly to BigQuery dataset names — making layer boundaries visible at the infrastructure level, not just in code.",
      alt: "BigQuery project adventure-works-analytics with four datasets: raw_adventure_works with 64 read-only source tables, staging with 64 view models, intermediate view models, and marts materialised as tables for BI tools.",
      project: "BigQuery project · adventure-works-analytics",
      managed: "DBT-MANAGED · DEV + PROD TARGETS",
      dataset: "DATASET",
      sets: [
        { name: "raw_adventure_works", tag: "SOURCE · READ-ONLY", items: ["SalesOrderHeader", "SalesOrderDetail", "Customer", "Product", "ProductCategory", "Employee", "Department", "Vendor"], more: "… 56 more tables", foot: "64 TABLES" },
        { name: "staging", tag: "MATERIALISATION: VIEW", items: ["stg_sales__orders", "stg_sales__orderdetail", "stg_product__products", "stg_product__categories", "stg_hr__employees", "stg_purchasing__vendors"], more: "… 58 more models", foot: "64 VIEW MODELS" },
        { name: "intermediate", tag: "MATERIALISATION: VIEW", items: ["int_orders__enriched", "int_products__with_cat", "int_employees__history", "int_customers__joined", "int_territories__sales"], more: "… additional models", foot: "VIEW MODELS" },
        { name: "marts", tag: "MATERIALISATION: TABLE", items: ["fct_sales", "dim_customer", "dim_product", "dim_employee", "dim_territory", "dim_date"], more: "", foot: "TABLE MATERIALISATIONS" },
      ],
      martsNote: ["Stable contract for BI tools.", "Analysts never query upstream layers."],
    },
  },

  star: {
    kicker: "DIMENSIONAL MODEL",
    title: ["A classic ", "star schema", " — one fact, five dimensions."],
    lead: "The mart layer delivers a dimensional model centred on the sales fact — the most analytically valuable grain in the Adventure Works dataset. Every dimension is directly joinable via surrogate key, following Kimball’s dimensional modelling principles.",
    chart: {
      label: "MART LAYER — STAR SCHEMA",
      title: "fct_sales at the centre · five dimension tables",
      sub: "All joins occur via surrogate keys generated in the staging and intermediate layers. The fact table grain is one row per sales order line item.",
      alt: "Star schema: fct_sales in the centre, one row per order line item, joined by surrogate keys to dim_customer, dim_product, dim_date, dim_employee and dim_territory.",
      fact: {
        name: "fct_sales",
        grain: "GRAIN: ONE ROW PER ORDER LINE ITEM",
        keysLeft: ["order_key (SK)", "customer_key (FK)", "product_key (FK)"],
        keysRight: ["employee_key (FK)", "territory_key (FK)", "order_date_key (FK)"],
        measures: "unit_price · order_qty · line_total · discount",
      },
      dims: {
        customer: { name: "dim_customer", cols: ["customer_key (SK)", "customer_id", "first_name · last_name", "email_address · phone"] },
        product: { name: "dim_product", cols: ["product_key (SK)", "product_id", "product_name", "category · subcategory", "list_price · color"] },
        territory: { name: "dim_territory", cols: ["territory_key (SK)", "territory_id", "territory_name", "country_region", "group (North America, etc.)"] },
        date: { name: "dim_date", cols: ["date_key (SK)", "date · year · quarter", "month · week · day_name", "is_weekend · fiscal_period"] },
        employee: { name: "dim_employee", cols: ["employee_key (SK)", "employee_id", "full_name · job_title", "department · hire_date"] },
      },
      legend: { join: "Join via surrogate key (FK → SK)", keys: "SK = surrogate key · FK = foreign key" },
    },
  },

  tests: {
    kicker: "TEST COVERAGE & DOCUMENTATION",
    title: ["Every model tested. Every column documented. ", "No exceptions", "."],
    lead: "dbt’s built-in test framework is applied at every layer. Tests are not optional bolt-ons — they are the mechanism by which the pipeline proves to downstream consumers that the data meets its documented contract.",
    stats: [
      { value: "64", unit: "source tables modeled", label: "Every SAP source table represented in the staging layer with a 1-to-1 model" },
      { value: "3", unit: "dbt layers", label: "Staging → Intermediate → Marts, each with its own materialisation and test suite" },
      { value: "100%", unit: "model documentation", label: "All models documented in schema.yml files and published via dbt docs generate" },
    ],
    chart: {
      label: "AUTOMATED TEST COVERAGE",
      title: "Test types applied per layer · dbt built-in + custom tests",
      sub: "Tests run on every dbt build. Failures block downstream materialisation — a broken mart cannot be produced from untested source data.",
      alt: "Tests per layer: staging runs not_null and unique on every primary key; intermediate runs not_null and relationships on join keys; marts run not_null, unique, accepted_values and relationships on every column. dbt docs generate runs on every build.",
      header: "TEST TYPE · COVERAGE SCOPE · EXAMPLE ASSERTION",
      columns: { layer: "LAYER", types: "TEST TYPES APPLIED", coverage: "COVERAGE", proves: "WHAT IT PROVES" },
      rows: [
        {
          name: "Staging",
          tag: "stg_* models",
          types: ["not_null", "unique"],
          desc: ["Applied to all primary key columns and all non-nullable", "business keys"],
          share: 1,
          coverage: ["All 64 staging models ·", "every PK column"],
          proves: ["No null surrogate keys", "reach the intermediate layer"],
        },
        {
          name: "Intermediate",
          tag: "int_* models",
          types: ["not_null", "relationships"],
          desc: ["FK integrity validated — every join key must exist in its", "referenced staging model"],
          share: 0.65,
          coverage: ["FK columns ·", "join key cardinality"],
          proves: ["Referential integrity holds", "across all join relationships"],
        },
        {
          name: "Marts",
          tag: "fct_* · dim_*",
          types: ["not_null", "unique", "accepted_values", "relationships"],
          desc: ["Full contract validation — the stable BI surface is the most", "thoroughly tested layer"],
          share: 1,
          coverage: ["All mart columns · FK → dim", "integrity · enum fields"],
          proves: ["BI consumers get only", "validated, documented data"],
        },
      ],
      docs: {
        command: "dbt docs generate",
        line1: "— runs on every build. Every model, column, test, and relationship is captured in a browsable documentation site.",
        line2: "Source freshness checks, model lineage graphs, and test result history are all included in the generated output.",
      },
    },
  },

  deliverables: {
    kicker: "DELIVERABLES",
    title: ["Everything a BI consumer and an engineering reviewer would ", "expect to find", "."],
    lead: "The project is open-source and documented to certification standard. Every deliverable below is present in the repository and can be verified without running the pipeline locally.",
    items: [
      { title: "dbt project (staging → intermediate → marts)", desc: "64 staging models covering all SAP source tables, multiple intermediate transformations, and a full star-schema mart layer covering Sales, Products, HR, and Territory domains." },
      { title: "Automated test suite", desc: "not_null, unique, accepted_values, and relationships tests at every layer. Tests block downstream materialisation on failure — a broken mart cannot be produced from untested source data." },
      { title: "dbt documentation site", desc: "Generated via dbt docs generate — all models, columns, tests, and source-to-mart lineage graphs browsable without running the project locally." },
      { title: "Conceptual data model", desc: "Entity-relationship diagram documenting the mart layer star schema — published externally for stakeholder review and onboarding." },
      { title: "BI dashboard", desc: "Dashboard built directly on the mart layer, demonstrating that the dimensional models are BI-tool-ready without further transformation." },
      { title: "profiles.yml + packages.json", desc: "Fully configured BigQuery connection profile and package manifest — the project is reproducible from a fresh clone with BigQuery credentials." },
    ],
  },

  quote: ["Analytics engineering is not about writing SQL — it is about building a ", "reliable contract", " between raw data and the people who depend on it. Three layers. Automated tests. Generated documentation. No shortcuts."],
};

export type AdventureWorksCopy = typeof en;
const pt: AdventureWorksCopy = {
  lead: "Projeto de certificação em analytics engineering construído com dbt Core e BigQuery. Os dados SAP da Adventure Works passam por três camadas disciplinadas — a staging padroniza os dados brutos, a intermediate aplica a lógica de negócio e os marts entregam modelos dimensionais organizados por domínio, prontos para BI. Toda camada é coberta por testes automatizados do dbt e por documentação gerada.",
  facts: [
    ["TIPO", "Analytics engineering"],
    ["FONTES", "64 tabelas SAP"],
    ["WAREHOUSE", "BigQuery"],
    ["CAMADAS", "3 · stg → int → mart"],
  ],
  tags: ["dbt", "BigQuery", "SQL", "Python", "Modelagem de dados"],
  links: [
    { label: "Repositório no GitHub", href: "https://github.com/danielmschaves/academy-dbt-test" },
    { label: "Ver o dashboard", href: "https://drive.google.com/file/d/1P5sIFxPpFo0O0Vb3xIx0Xd5AipQMJtO5/preview" },
    { label: "Modelo conceitual", href: "https://drive.google.com/file/d/1ltGTRQKS7peliVuWBNowrY_ltx8IU8oJ/preview" },
  ],

  context: {
    kicker: "CONTEXTO & ABORDAGEM",
    title: ["De ", "exportações brutas do SAP", " a um schema dimensional — o trabalho de quem faz analytics engineering."],
    problem: {
      title: "O problema dos dados de origem",
      p1: "Sistemas SAP geram tabelas otimizadas para volume transacional, não para consulta analítica. Os nomes de colunas são abreviados, os tipos variam entre módulos, o tratamento de nulos é implícito e os relacionamentos ficam escondidos em convenções de surrogate keys que mudam de um módulo SAP para outro. A Adventure Works expõe tudo isso em 64 tabelas de seis domínios de negócio.",
      p2: "O trabalho de analytics engineering é impor ordem sem perder fidelidade: padronizar o grão, garantir os tipos, dar nomes que pessoas entendem e modelar a lógica de negócio uma única vez — para que todo consumidor seguinte veja uma superfície consistente, documentada e testável.",
    },
    why: {
      title: "Por que a arquitetura em três camadas",
      strong: "Separação de responsabilidades.",
      p1: " Staging nunca é lógica de negócio — é só padronização. Intermediate nunca é modelo de BI — é preparação. Os marts são o contrato: a superfície estável, voltada aos domínios, da qual ferramentas de BI e analistas dependem.",
      p2: "Quando o schema de uma fonte muda, só o modelo de staging precisa mudar. Quando a lógica de negócio muda, só o modelo intermediate muda. O mart continua estável — e, com ele, os dashboards que dependem dele.",
    },
    chart: {
      label: "INVENTÁRIO DE TABELAS DE ORIGEM",
      title: "64 tabelas de origem do SAP em seis domínios de negócio",
      sub: "Cada domínio corresponde a um módulo SAP diferente. A camada de staging cria um modelo 1-para-1 para cada tabela de origem mostrada aqui.",
      alt: "64 tabelas de origem do SAP: vendas e distribuição 14, produtos e estoque 13, produção 12, compras 11, recursos humanos 8 e 6 tabelas de dados mestres compartilhados.",
      header: "MÓDULO SAP · QUANTIDADE DE TABELAS · TABELAS DE EXEMPLO",
      columns: { domain: "DOMÍNIO", tables: "TABELAS", distribution: "DISTRIBUIÇÃO", samples: "EXEMPLOS DE FONTES" },
      domains: [
        { name: "Sales & Distribution", count: 14, inBar: "SalesOrderHeader · SalesOrderDetail · Customer", samples: ["SalesPerson · SalesTerritory · SpecialOffer"] },
        { name: "Products & Inventory", count: 13, inBar: "Product · ProductCategory · ProductSubcategory", samples: ["ProductInventory · ProductPhoto · ProductReview"] },
        { name: "Production", count: 12, inBar: "WorkOrder · WorkOrderRouting · ProductDocument", samples: ["Location · ProductCostHistory · BillOfMaterials"] },
        { name: "Purchasing", count: 11, inBar: "PurchaseOrderHeader · PurchaseOrderDetail · Vendor", samples: ["ProductVendor · ShipMethod · VendorAddress"] },
        { name: "Human Resources", count: 8, inBar: "Employee · Department · Shift", samples: ["JobCandidate · EmployeeDepartmentHistory"] },
        { name: "Dados mestres", count: 6, inBar: "Address · AddressType", samples: ["ContactType · CountryRegion", "Currency · StateProvince"] },
      ],
      total: "TOTAL",
    },
  },

  layers: {
    kicker: "ARQUITETURA EM TRÊS CAMADAS",
    title: ["A staging limpa. A intermediate junta. ", "Os marts entregam", "."],
    lead: "O padrão de três camadas impõe uma separação rígida de responsabilidades. Nenhum modelo de staging contém lógica de negócio. Nenhum modelo de mart lê direto da fonte. Cada camada tem uma única responsabilidade — e uma suíte de testes para provar isso.",
    chart: {
      label: "ARQUITETURA DE CAMADAS DO DBT",
      title: "Source → Staging → Intermediate → Marts · o papel de cada camada",
      sub: "Da esquerda para a direita: a fidelidade dos dados aumenta, o significado de negócio aumenta e o público passa de engenheiros a analistas.",
      alt: "Quatro colunas: tabelas de origem brutas no BigQuery, para engenheiros de dados; modelos de staging que renomeiam, convertem tipos e tratam nulos; modelos intermediate que fazem joins e aplicam regras de negócio; e marts com fct_sales e cinco dimensões, para analistas e ferramentas de BI.",
      whatHappens: "O que acontece aqui",
      examples: "Modelos de exemplo",
      audience: "PÚBLICO",
      tests: "TESTES",
      source: {
        name: "Fonte (BigQuery raw)",
        tag: "64 TABELAS · 6 DOMÍNIOS",
        tables: ["sales.SalesOrderHeader", "sales.SalesOrderDetail", "product.Product", "product.ProductCategory", "hr.Employee", "purchasing.Vendor"],
        more: "… mais 58 tabelas",
        audience: "Engenheiros de dados",
      },
      staging: {
        name: "Staging (stg_*)",
        tag: "1-PARA-1 COM A FONTE",
        steps: ["Colunas renomeadas (snake_case)", "Cast de tipos (STRING → INT64)", "Nulos com valor padrão", "Nenhuma lógica de negócio"],
        models: ["stg_sales__orders", "stg_product__products", "stg_hr__employees"],
        tests: "not_null · unique",
      },
      intermediate: {
        name: "Intermediate (int_*)",
        tag: "LÓGICA DE NEGÓCIO & JOINS",
        steps: ["Joins entre modelos de staging", "Aplica regras de negócio", "Enriquece com campos derivados", "Prepara o grão para os marts"],
        models: ["int_orders__enriched", "int_products__with_category", "int_employees__history"],
        tests: "not_null · relationships",
      },
      marts: {
        name: "Marts (fct_* + dim_*)",
        tag: "MODELOS DIMENSIONAIS POR DOMÍNIO",
        facts: "Tabelas fato",
        fact: "fct_sales",
        grain: "uma linha por item de pedido",
        dimsTitle: "Tabelas dimensão",
        dims: ["dim_customer", "dim_product", "dim_employee", "dim_territory", "dim_date"],
        audience: "Analistas · ferramentas de BI",
      },
      direction: { title: "DIREÇÃO DA ABSTRAÇÃO", from: "Bruto & verboso", to: "Pronto para o negócio & documentado" },
    },
  },

  datasets: {
    kicker: "ESTRUTURA DE DATASETS NO BIGQUERY",
    title: ["Um projeto BigQuery, ", "quatro datasets", " — cada um de uma camada do dbt."],
    lead: "O dbt gerencia a estrutura física dos datasets no BigQuery. Cada camada é materializada no seu próprio dataset, o que dá aos analistas um contrato claro: consultar as tabelas dos marts, nunca as de staging ou intermediate diretamente. A fronteira entre camadas é ao mesmo tempo uma convenção de modelagem e um ponto de controle de acesso.",
    chart: {
      label: "ORGANIZAÇÃO DOS DATASETS NO BIGQUERY",
      title: "Hierarquia projeto → dataset → tabela por camada do dbt",
      sub: "A configuração de target schema do dbt corresponde direto aos nomes dos datasets no BigQuery — deixando as fronteiras entre camadas visíveis na infraestrutura, não só no código.",
      alt: "Projeto BigQuery adventure-works-analytics com quatro datasets: raw_adventure_works com 64 tabelas de origem somente leitura, staging com 64 modelos view, intermediate com modelos view e marts materializados como tabelas para ferramentas de BI.",
      project: "Projeto BigQuery · adventure-works-analytics",
      managed: "GERENCIADO PELO DBT · TARGETS DEV + PROD",
      dataset: "DATASET",
      sets: [
        { name: "raw_adventure_works", tag: "ORIGEM · SOMENTE LEITURA", items: ["SalesOrderHeader", "SalesOrderDetail", "Customer", "Product", "ProductCategory", "Employee", "Department", "Vendor"], more: "… mais 56 tabelas", foot: "64 TABELAS" },
        { name: "staging", tag: "MATERIALIZAÇÃO: VIEW", items: ["stg_sales__orders", "stg_sales__orderdetail", "stg_product__products", "stg_product__categories", "stg_hr__employees", "stg_purchasing__vendors"], more: "… mais 58 modelos", foot: "64 MODELOS VIEW" },
        { name: "intermediate", tag: "MATERIALIZAÇÃO: VIEW", items: ["int_orders__enriched", "int_products__with_cat", "int_employees__history", "int_customers__joined", "int_territories__sales"], more: "… outros modelos", foot: "MODELOS VIEW" },
        { name: "marts", tag: "MATERIALIZAÇÃO: TABLE", items: ["fct_sales", "dim_customer", "dim_product", "dim_employee", "dim_territory", "dim_date"], more: "", foot: "MATERIALIZADOS COMO TABELA" },
      ],
      martsNote: ["Contrato estável para ferramentas de BI.", "Analistas nunca consultam as camadas acima."],
    },
  },

  star: {
    kicker: "MODELO DIMENSIONAL",
    title: ["Um ", "star schema", " clássico — uma fato, cinco dimensões."],
    lead: "A camada de marts entrega um modelo dimensional centrado na fato de vendas — o grão de maior valor analítico do dataset Adventure Works. Toda dimensão se liga direto por surrogate key, seguindo os princípios de modelagem dimensional de Kimball.",
    chart: {
      label: "CAMADA DE MARTS — STAR SCHEMA",
      title: "fct_sales no centro · cinco tabelas dimensão",
      sub: "Todos os joins usam surrogate keys geradas nas camadas de staging e intermediate. O grão da fato é uma linha por item de pedido de venda.",
      alt: "Star schema: fct_sales no centro, uma linha por item de pedido, ligada por surrogate keys a dim_customer, dim_product, dim_date, dim_employee e dim_territory.",
      fact: {
        name: "fct_sales",
        grain: "GRÃO: UMA LINHA POR ITEM DE PEDIDO",
        keysLeft: ["order_key (SK)", "customer_key (FK)", "product_key (FK)"],
        keysRight: ["employee_key (FK)", "territory_key (FK)", "order_date_key (FK)"],
        measures: "unit_price · order_qty · line_total · discount",
      },
      dims: {
        customer: { name: "dim_customer", cols: ["customer_key (SK)", "customer_id", "first_name · last_name", "email_address · phone"] },
        product: { name: "dim_product", cols: ["product_key (SK)", "product_id", "product_name", "category · subcategory", "list_price · color"] },
        territory: { name: "dim_territory", cols: ["territory_key (SK)", "territory_id", "territory_name", "country_region", "group (North America, etc.)"] },
        date: { name: "dim_date", cols: ["date_key (SK)", "date · year · quarter", "month · week · day_name", "is_weekend · fiscal_period"] },
        employee: { name: "dim_employee", cols: ["employee_key (SK)", "employee_id", "full_name · job_title", "department · hire_date"] },
      },
      legend: { join: "Join por surrogate key (FK → SK)", keys: "SK = surrogate key · FK = foreign key" },
    },
  },

  tests: {
    kicker: "COBERTURA DE TESTES & DOCUMENTAÇÃO",
    title: ["Todo modelo testado. Toda coluna documentada. ", "Sem exceções", "."],
    lead: "O framework de testes nativo do dbt é aplicado em todas as camadas. Testes não são um acessório opcional — são o mecanismo com que o pipeline prova aos consumidores seguintes que os dados cumprem o contrato documentado.",
    stats: [
      { value: "64", unit: "tabelas de origem modeladas", label: "Toda tabela de origem do SAP representada na staging com um modelo 1-para-1" },
      { value: "3", unit: "camadas do dbt", label: "Staging → Intermediate → Marts, cada uma com sua materialização e sua suíte de testes" },
      { value: "100%", unit: "dos modelos documentados", label: "Todos os modelos documentados em arquivos schema.yml e publicados via dbt docs generate" },
    ],
    chart: {
      label: "COBERTURA DE TESTES AUTOMATIZADOS",
      title: "Tipos de teste por camada · nativos do dbt + testes próprios",
      sub: "Os testes rodam a cada dbt build. Uma falha bloqueia a materialização seguinte — um mart quebrado não pode ser gerado a partir de dados de origem não testados.",
      alt: "Testes por camada: a staging roda not_null e unique em toda chave primária; a intermediate roda not_null e relationships nas chaves de join; os marts rodam not_null, unique, accepted_values e relationships em todas as colunas. O dbt docs generate roda a cada build.",
      header: "TIPO DE TESTE · ESCOPO DE COBERTURA · EXEMPLO DE VERIFICAÇÃO",
      columns: { layer: "CAMADA", types: "TIPOS DE TESTE APLICADOS", coverage: "COBERTURA", proves: "O QUE ISSO PROVA" },
      rows: [
        {
          name: "Staging",
          tag: "modelos stg_*",
          types: ["not_null", "unique"],
          desc: ["Aplicados a todas as colunas de chave primária e a todas as chaves", "de negócio não anuláveis"],
          share: 1,
          coverage: ["Todos os 64 modelos de staging ·", "toda coluna de PK"],
          proves: ["Nenhuma surrogate key nula", "chega à intermediate"],
        },
        {
          name: "Intermediate",
          tag: "modelos int_*",
          types: ["not_null", "relationships"],
          desc: ["Integridade das FKs validada — toda chave de join precisa existir", "no modelo de staging referenciado"],
          share: 0.65,
          coverage: ["Colunas FK ·", "cardinalidade das chaves de join"],
          proves: ["A integridade referencial vale", "em todas as relações de join"],
        },
        {
          name: "Marts",
          tag: "fct_* · dim_*",
          types: ["not_null", "unique", "accepted_values", "relationships"],
          desc: ["Validação completa do contrato — a superfície estável de BI é a", "camada mais testada"],
          share: 1,
          coverage: ["Todas as colunas dos marts ·", "integridade FK → dim · enums"],
          proves: ["O consumidor de BI só recebe", "dados validados e documentados"],
        },
      ],
      docs: {
        command: "dbt docs generate",
        line1: "— roda a cada build. Todo modelo, coluna, teste e relação fica registrado em um site de documentação navegável.",
        line2: "Checagens de freshness das fontes, grafos de linhagem dos modelos e o histórico de resultados dos testes entram na saída gerada.",
      },
    },
  },

  deliverables: {
    kicker: "ENTREGÁVEIS",
    title: ["Tudo o que quem consome BI e quem revisa engenharia ", "esperaria encontrar", "."],
    lead: "O projeto é open-source e documentado no padrão de certificação. Todo entregável abaixo está no repositório e pode ser verificado sem rodar o pipeline localmente.",
    items: [
      { title: "Projeto dbt (staging → intermediate → marts)", desc: "64 modelos de staging cobrindo todas as tabelas de origem do SAP, várias transformações intermediate e uma camada completa de marts em star schema, cobrindo os domínios de vendas, produtos, RH e territórios." },
      { title: "Suíte de testes automatizados", desc: "Testes not_null, unique, accepted_values e relationships em todas as camadas. Uma falha bloqueia a materialização seguinte — um mart quebrado não pode ser gerado a partir de dados de origem não testados." },
      { title: "Site de documentação do dbt", desc: "Gerado via dbt docs generate — todos os modelos, colunas, testes e grafos de linhagem da fonte ao mart, navegáveis sem rodar o projeto localmente." },
      { title: "Modelo conceitual de dados", desc: "Diagrama entidade-relacionamento que documenta o star schema da camada de marts — publicado externamente para revisão de stakeholders e onboarding." },
      { title: "Dashboard de BI", desc: "Dashboard construído direto sobre a camada de marts, mostrando que os modelos dimensionais estão prontos para BI sem transformação adicional." },
      { title: "profiles.yml + packages.json", desc: "Perfil de conexão com o BigQuery e manifesto de pacotes totalmente configurados — o projeto é reproduzível a partir de um clone limpo com credenciais do BigQuery." },
    ],
  },

  quote: ["Analytics engineering não é escrever SQL — é construir um ", "contrato confiável", " entre os dados brutos e as pessoas que dependem deles. Três camadas. Testes automatizados. Documentação gerada. Sem atalhos."],
};

export const copy: Record<Lang, AdventureWorksCopy> = { en, pt };
