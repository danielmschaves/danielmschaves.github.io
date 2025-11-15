# README Files for Projects

## How to Add README Content to Project Pages

To add detailed documentation to individual project pages, place markdown files in the `readme/` folder.

### File Naming Convention

The README file name must match the project ID from `data/projects.json`.

**Example:**
- Project ID: `adventure-works-dbt`
- README file: `readme/adventure-works-dbt.md`

### Current Projects and Their IDs

| Project | ID | README File |
|---------|-----|-------------|
| Adventure Works Data Pipeline | `adventure-works-dbt` | `readme/adventure-works-dbt.md` ✅ |
| E-commerce Data Pipeline | `ecommerce-dbt` | `readme/ecommerce-dbt.md` |
| Spotify ELT pipeline | `spotify-etl-aws` | `readme/spotify-etl-aws.md` |
| Billion rows | `billion-rows` | `readme/billion-rows.md` |
| Northwind data pipeline | `northwind-sql-dbt` | `readme/northwind-sql-dbt.md` |
| Air Quality Analysis | `air-quality-dbt` | `readme/air-quality-dbt.md` |
| IBM Data Engineering Capstone | `ibm-data-engineering-capstone` | `readme/ibm-data-engineering-capstone.md` |
| IBM Data Science Capstone | `ibm-data-science-capstone` | `readme/ibm-data-science-capstone.md` |
| IBM Data Engineering Python | `ibm-data-engineering-python` | `readme/ibm-data-engineering-python.md` |
| Chicago Crime Analysis | `chicago-crime-analysis` | `readme/chicago-crime-analysis.md` |
| IBM ML Spark | `ibm-ml-spark` | `readme/ibm-ml-spark.md` |
| IBM Data Science Python | `ibm-data-science-python` | `readme/ibm-data-science-python.md` |
| Housing Prices Prediction | `housing-prices-prediction` | `readme/housing-prices-prediction.md` |
| Rainfall Prediction | `rainfall-prediction` | `readme/rainfall-prediction.md` |

### Markdown Support

The README files support standard Markdown syntax:
- Headers (# ## ###)
- Lists (ordered and unordered)
- Code blocks (with syntax highlighting)
- Links
- Bold and italic text
- Blockquotes

### Example

For the project with ID `adventure-works-dbt`, create:
```
readme/adventure-works-dbt.md
```

The content will automatically be displayed on the project detail page at `/projects/adventure-works-dbt`.

### Notes

- If a README file doesn't exist for a project, the page will show a default "Project Details" section
- README files are read at build time for static generation
- The markdown is rendered with dark mode styling to match the site theme

