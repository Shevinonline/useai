// Complete production-grade steps data for "AI Data Analytics & Business Intelligence" Roadmap (12 Nodes)

export const aiDataAnalyticsBiData = {
  id: "ai-data-analytics-bi",
  title: "AI Data Analytics & Business Intelligence",
  description: "Turn messy CSVs and databases into automated SQL queries, Python visualizations, and executive insights.",
  category: "Role & Workflow Roadmaps",
  stepCount: 12,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Ingestion, Automated Cleaning & Exploratory Data Analysis (EDA)",
      description: "Clean corrupt dates, handle missing records across multi-gigabyte data dumps, generate automated EDA profiles, and query millions of rows in-memory using DuckDB."
    },
    {
      id: "phase-2",
      title: "Phase 2: Natural Language SQL & Semantic Layer Architecture",
      description: "Build zero-hallucination Text-to-SQL pipelines with Vanna.ai, enforce single-source-of-truth metrics with Cube.js, and design Kimball star schemas with dbt."
    },
    {
      id: "phase-3",
      title: "Phase 3: Statistical Modeling, Forecasting & Python Pipelines",
      description: "Train automated Prophet time-series models, analyze cohort retention curves with Scikit-Learn, and aggregate web intelligence feeds with Firecrawl and Apify."
    },
    {
      id: "phase-4",
      title: "Phase 4: Executive BI Dashboards, Anomaly Alerts & Decision Agents",
      description: "Deploy self-serve Metabase dashboards, automate real-time statistical anomaly Slack alerts with n8n, and orchestrate autonomous BI decision agents with LangGraph."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Messy Data Parsing, Type Casting & Deduplication",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Clean corrupt dates, mismatched currency strings, and missing values across multi-gigabyte CSV and JSON exports.",
      description: "Raw real-world business data is notoriously dirty. Legacy CRM exports contain corrupt UTF-8 characters, mismatched timestamp formats (UTC vs. local timezone offsets), negative price strings with currency symbols (e.g. '$1,299.00 USD'), and thousands of duplicate customer records. Modern AI data workflows leverage Python Pandas with PyArrow engines and OpenRefine heuristics to automate data hygiene, standardize schema types, and flag suspicious anomalies before downstream analysis begins.",
      playbook: {
        setup: "Set up a clean Python 3.11 virtual environment with `pandas`, `pyarrow`, and `openrefine`. Prepare an export of raw customer orders or CRM lead CSV files.",
        execute: "Write a vector-accelerated Pandas cleaning pipeline: 1) Strip non-numeric currency characters and cast strings to `float64`, 2) Parse ISO dates using `pd.to_datetime(errors='coerce', utc=True)`, 3) Remove duplicate records based on compound primary keys (`['email', 'transaction_date']`), and 4) Impute or flag missing values using heuristic rules.",
        verify: "Inspect dataset diagnostics: verify `df.dtypes` matches expected analytical schemas, confirm zero `NaN` values in primary key columns, and verify memory usage dropped by 40%+ using PyArrow string backends."
      },
      tools: [
        {
          name: "Python Pandas",
          type: "Free",
          url: "https://pandas.pydata.org",
          description: "High-performance data manipulation and analysis library featuring DataFrame structures and PyArrow memory integration.",
          bestFor: "Tabular data cleaning, type casting & vector transformations"
        },
        {
          name: "OpenRefine",
          type: "Free",
          url: "https://openrefine.org",
          description: "Powerful open-source tool for working with messy data: cleaning, transforming, and clustering fuzzy text duplicates.",
          bestFor: "Fuzzy text deduplication & clustering misspelled strings"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model for writing complex regex string parsers, data validation schemas, and automated cleaning scripts.",
          bestFor: "Generating regex extraction rules & Python cleaning logic"
        }
      ],
      callouts: {
        mistake: "Silently dropping missing rows (`df.dropna()`) without investigating why data was missing, accidentally deleting 30% of valid transactions.",
        proTip: "Use `dtype_backend='pyarrow'` when reading CSVs in Pandas 2.0+; it reduces memory usage by up to 60% and speeds up string operations by 5x.",
        mistakes: [
          "Parsing dates without explicit UTC timezone handling, causing transactions around midnight to be assigned to the wrong business day.",
          "Overwriting original raw data files directly instead of saving clean files to an immutable staging directory (`data/clean/`).",
          "Assuming numerical ID columns (like zip codes or credit card bins) are integers, accidentally stripping leading zeros."
        ],
        proTips: [
          "Always store postal codes, phone numbers, and customer IDs as strings to prevent automatic mathematical truncation of leading zeros.",
          "Use OpenRefine's GREL fingerprint clustering to merge misspelled city names (e.g. 'San Fransisco', 'SF', 'San Francisco') in one click.",
          "Generate an automated cleaning audit log that records exact counts of duplicate rows dropped and invalid values coerced to null."
        ]
      },
      promptLab: {
        title: "Automated Data Cleaning & PyArrow Script Generator",
        description: "Generate a robust, production-grade Python script that handles currency stripping, date normalization, fuzzy deduplication, and schema validation.",
        variables: [
          {
            name: "File Format",
            label: "File Format",
            options: ["Messy Multi-Gigabyte CSV with Delimiter Issues", "Nested JSON Event Payloads with Irregular Keys", "Legacy Excel Workbook with Merged Cells"],
            default: "Messy Multi-Gigabyte CSV with Delimiter Issues"
          },
          {
            name: "Data Domain",
            label: "Data Domain",
            options: ["E-Commerce Transactional Order Logs", "SaaS User Engagement Telemetry", "B2B Sales Pipeline CRM Records"],
            default: "E-Commerce Transactional Order Logs"
          },
          {
            name: "Target Dialect",
            label: "Target Dialect",
            options: ["Python Pandas 2.2 with PyArrow Engine", "Polars High-Performance DataFrames", "SQL CTE Ingestion Script"],
            default: "Python Pandas 2.2 with PyArrow Engine"
          }
        ],
        template: `You are a principal data engineer specializing in high-throughput data cleaning and schema validation.

Write a complete, production-grade automated cleaning script:
- File Format: [File Format]
- Data Domain: [Data Domain]
- Target Dialect: [Target Dialect]

Please provide:
1. Robust Ingestion Function: Handling encoding errors, delimiter anomalies, and memory optimization.
2. Vectorized Transformations: Currency stripping, ISO-8601 UTC date casting, and compound deduplication.
3. Quality Audit Summary: Printout detailing initial row count, dropped duplicates, and remaining null rates per column.`,
        expectedOutput: `### Production Data Cleaning Pipeline (Python + PyArrow)

\`\`\`python
import pandas as pd
import numpy as np
import logging
from pathlib import Path

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

def clean_ecommerce_orders(raw_file_path: str, output_file_path: str) -> pd.DataFrame:
    logging.info(f"Loading raw dataset from {raw_file_path}...")

    # 1. High-Performance PyArrow Ingestion
    df = pd.read_csv(
        raw_file_path,
        engine="pyarrow",
        dtype_backend="pyarrow",
        on_bad_lines="warn",
        encoding="utf-8"
    )
    initial_rows = len(df)
    logging.info(f"Raw records ingested: {initial_rows:,}")

    # 2. String Cleaning & Currency Stripping
    # Remove currency symbols ($, €, commas) and convert to float64
    if "order_total" in df.columns:
        df["order_total"] = (
            df["order_total"]
            .astype(str)
            .str.replace(r"[^\d.-]", "", regex=True)
            .replace("", np.nan)
            .astype("float64")
        )

    # 3. ISO-8601 UTC Timezone Normalization
    if "created_at" in df.columns:
        df["created_at_utc"] = pd.to_datetime(
            df["created_at"],
            errors="coerce",
            utc=True
        )
        invalid_dates = df["created_at_utc"].isna().sum()
        if invalid_dates > 0:
            logging.warning(f"Coerced {invalid_dates} invalid date records to NaT.")

    # 4. Leading Zero Preservation for Identification Codes
    if "customer_zip" in df.columns:
        df["customer_zip"] = df["customer_zip"].astype(str).str.zfill(5)

    # 5. Compound Deduplication
    dedup_subset = ["order_id"] if "order_id" in df.columns else ["customer_email", "created_at_utc"]
    df = df.drop_duplicates(subset=dedup_subset, keep="last")
    duplicates_removed = initial_rows - len(df)
    logging.info(f"Deduplication complete. Dropped {duplicates_removed:,} duplicate rows.")

    # 6. Quality Audit Summary
    logging.info("--- DATA QUALITY SUMMARY ---")
    for col in df.columns:
        null_count = df[col].isna().sum()
        null_pct = (null_count / len(df)) * 100
        logging.info(f"Column '{col}': {null_pct:.2f}% nulls ({null_count:,} rows)")

    # 7. Export Clean Parquet
    Path(output_file_path).parent.mkdir(parents=True, exist_ok=True)
    df.to_parquet(output_file_path, engine="pyarrow", index=False)
    logging.info(f"Clean parquet successfully saved to {output_file_path}.")

    return df

if __name__ == "__main__":
    clean_ecommerce_orders("data/raw/orders_2026.csv", "data/clean/orders_clean.parquet")
\`\`\``
      },
      conceptGuide: {
        title: "Vectorized Type Coercion & Data Hygiene Architecture",
        overview: "In data analytics, Garbage In equals Garbage Out. If currency values are parsed as string objects, numerical aggregations will silently fail or produce nonsense concatenations (e.g. '$10' + '$20' = '$10$20'). Modern data hygiene pipelines leverage Apache Arrow in-memory columnar representations. Vectorized type coercion ensures that dates, floating-point decimals, and categorical values are cast at the C++ kernel level, avoiding slow Python for-loop bottlenecks.",
        keyPoints: [
          "**Columnar PyArrow Storage:** Traditional Python objects carry massive 28-byte overheads per element; PyArrow packs data contiguously in memory for microsecond query speeds.",
          "**UTC Date Invariance:** Always convert timestamps to UTC immediately upon ingestion; store local timezone offsets as a separate column to prevent daylight savings bugs.",
          "**Lossless Data Staging:** Never overwrite raw source files; always preserve the original immutable source data in an append-only raw lake."
        ]
      },
      learning: {
        resources: [
          {
            title: "Pandas Official Documentation (PyArrow Backend)",
            url: "https://pandas.pydata.org/docs/user_guide/pyarrow.html",
            type: "Official Docs"
          },
          {
            title: "OpenRefine Data Transformation Guide",
            url: "https://openrefine.org/docs",
            type: "Guide"
          },
          {
            title: "Data Quality Metrics & Anomaly Detection Frameworks",
            url: "https://greatexpectations.io",
            type: "Data Pipeline"
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Automated Exploratory Data Analysis (EDA) & Outlier Profiling",
      timeEstimate: "1 hr",
      difficulty: "Beginner",
      summary: "Generate statistical distributions, correlation matrices, and anomaly flags without writing hundred-line boilerplate scripts.",
      description: "Before training statistical models or building BI dashboards, analysts must understand data shape, variance, and outlier distributions. Manually writing repetitive Matplotlib and Seaborn scripts for dozens of columns wastes hours of engineering time. By using automated profiling tools like ydata-profiling and interactive Claude Artifact visualizations, data teams produce comprehensive HTML audit reports covering skewness, collinearity, and zero-variance columns in one command.",
      playbook: {
        setup: "Install automated profiling dependencies: `pip install ydata-profiling jupyter matplotlib seaborn`. Open your cleaned dataset in a Jupyter Notebook.",
        execute: "Run `ProfileReport(df, title='Data Audit').to_file('report.html')`. Inspect the interactive dashboard: examine Spearman correlation heatmaps for multicollinearity, check numerical histograms for extreme right-skew (e.g. whale spenders), and review high-cardinality categorical warnings.",
        verify: "Confirm that outlier thresholds (e.g. 3 standard deviations or 1.5x Interquartile Range) flag true data entry errors (like a negative order value) versus genuine high-value enterprise transactions."
      },
      tools: [
        {
          name: "ydata-profiling",
          type: "Free",
          url: "https://github.com/ydataai/ydata-profiling",
          description: "Automated exploratory data analysis library generating rich interactive HTML reports with distributions, correlations, and data quality warnings.",
          bestFor: "One-command automated exploratory data analysis reports"
        },
        {
          name: "Claude Artifacts",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Interactive visual environment inside Claude for rendering dynamic React and SVG statistical charts directly from raw data summaries.",
          bestFor: "Interactive SVG statistical visualizations & ad-hoc charts"
        },
        {
          name: "Jupyter Notebooks",
          type: "Free",
          url: "https://jupyter.org",
          description: "Interactive computing notebook environment enabling data scientists to interleave executable Python code with statistical markdown documentation.",
          bestFor: "Interactive Python data science experimentation"
        }
      ],
      callouts: {
        mistake: "Assuming a Normal (Gaussian) distribution for e-commerce revenue; financial and user engagement metrics almost always follow heavy-tailed Pareto power laws.",
        proTip: "Use log transformations (`np.log1p(df['revenue'])`) on heavily skewed revenue data before running correlation or regression models.",
        mistakes: [
          "Blindly deleting statistical outliers; in fraud detection or enterprise sales, the outliers represent the most valuable insights in the business.",
          "Ignoring multicollinearity (correlation > 0.85 between independent variables), causing regression weights to become unstable and misleading.",
          "Over-relying on summary means instead of medians; a single $1M transaction skews the average revenue of a thousand $10 orders."
        ],
        proTips: [
          "Always report Median and Interquartile Range (IQR) alongside Mean and Standard Deviation when analyzing customer spend.",
          "Check the missing data matrix in ydata-profiling to verify whether data is Missing Completely at Random (MCAR) or Missing at Random (MAR).",
          "Identify zero-variance columns (where 100% of rows contain the same value) and drop them to reduce dataset memory footprint."
        ]
      },
      promptLab: {
        title: "Automated Statistical EDA & Outlier Diagnostics Generator",
        description: "Generate a Python statistical EDA notebook script that computes skewness, IQR outlier bounds, correlation matrices, and distribution plots.",
        variables: [
          {
            name: "Distribution Profile",
            label: "Distribution Profile",
            options: ["Heavy-Tailed Right-Skewed Power Law (Revenue/Spend)", "Bimodal Multi-Peak Distribution (Usage Activity)", "Normal Gaussian Distribution (Physical Sensor Data)"],
            default: "Heavy-Tailed Right-Skewed Power Law (Revenue/Spend)"
          },
          {
            name: "Outlier Method",
            label: "Outlier Method",
            options: ["Interquartile Range (IQR 1.5x Fences)", "Z-Score (3+ Standard Deviations)", "Isolation Forest Anomaly Scoring"],
            default: "Interquartile Range (IQR 1.5x Fences)"
          },
          {
            name: "Target Visualization",
            label: "Target Visualization",
            options: ["Seaborn Boxplots & Log Histograms", "Interactive Plotly HTML Graphs", "Clean Matplotlib Publication Charts"],
            default: "Seaborn Boxplots & Log Histograms"
          }
        ],
        template: `You are a lead quantitative data analyst specializing in exploratory data analysis and outlier detection.

Write a complete Python EDA script:
- Distribution Profile: [Distribution Profile]
- Outlier Method: [Outlier Method]
- Target Visualization: [Target Visualization]

Please provide:
1. Statistical Summary Table: Computing count, mean, median, standard deviation, skewness, and kurtosis.
2. Outlier Detection Engine: Isolating anomalous rows using the specified mathematical bounds.
3. Visualization Plot Function: Generating side-by-side raw vs. log-transformed distribution histograms with outlier fences.`,
        expectedOutput: `### Statistical EDA & Outlier Diagnostic Script

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

def analyze_skewed_metric(df: pd.DataFrame, metric_col: str):
    """
    Computes statistical moments, identifies IQR outliers, and renders
    side-by-side raw vs. log-transformed distribution plots.
    """
    series = df[metric_col].dropna()

    # 1. Statistical Moments
    mean_val = series.mean()
    median_val = series.median()
    std_val = series.std()
    skew_val = series.skew()
    kurt_val = series.kurtosis()

    print(f"=== STATISTICAL PROFILE FOR '{metric_col}' ===")
    print(f"Count:  {len(series):,}")
    print(f"Mean:   \${mean_val:,.2f}  |  Median: \${median_val:,.2f}")
    print(f"StdDev: \${std_val:,.2f}")
    print(f"Skew:   {skew_val:.2f} (High Right Skew if > 1.0)")
    print(f"Kurt:   {kurt_val:.2f}")

    # 2. Interquartile Range (IQR) Outlier Fences
    q25 = series.quantile(0.25)
    q75 = series.quantile(0.75)
    iqr = q75 - q25
    lower_bound = q25 - (1.5 * iqr)
    upper_bound = q75 + (1.5 * iqr)

    outliers = df[(df[metric_col] < lower_bound) | (df[metric_col] > upper_bound)]
    print(f"\\nIQR Fences: [\${lower_bound:,.2f}, \${upper_bound:,.2f}]")
    print(f"Outliers Detected: {len(outliers):,} rows ({len(outliers)/len(df)*100:.2f}%)")

    # 3. Dual Visualization (Raw vs. Log-Transformed)
    fig, axes = plt.subplots(1, 2, figsize=(14, 5))
    
    # Raw Plot
    sns.histplot(series, kde=True, ax=axes[0], color="#2563eb", bins=50)
    axes[0].axvline(median_val, color="red", linestyle="--", label=f"Median (\${median_val:,.0f})")
    axes[0].axvline(upper_bound, color="orange", linestyle=":", label=f"Upper Fence (\${upper_bound:,.0f})")
    axes[0].set_title(f"Raw Distribution (Skew = {skew_val:.2f})")
    axes[0].legend()

    # Log1p Transformed Plot
    log_series = np.log1p(series)
    sns.histplot(log_series, kde=True, ax=axes[1], color="#059669", bins=50)
    axes[1].set_title(f"Log1p Transformed Distribution (Normalized)")
    axes[1].set_xlabel(f"log({metric_col} + 1)")

    plt.tight_layout()
    plt.show()

    return outliers
\`\`\``
      },
      conceptGuide: {
        title: "Statistical Moments, Outlier Bounds & Skew Normalization",
        overview: "Human intuition often fails when analyzing complex numerical datasets because our minds default to bell-curve assumptions. Real-world business data (like customer revenue or server latencies) almost always exhibits extreme positive skewness where 5% of users generate 80% of volume. Exploratory data analysis calculates mathematical moments (Mean, Variance, Skewness, Kurtosis) to determine whether transformations (like log1p or Box-Cox) are required before applying predictive models.",
        keyPoints: [
          "**Mean vs. Median Disparity:** A large divergence between mean and median is the primary indicator of heavy-tailed outlier distortion.",
          "**Tukey's IQR Fences:** Using 1.5 times the Interquartile Range provides a non-parametric outlier boundary that resists extreme data point skewing.",
          "**Log-Normal Transformations:** Applying `log(x + 1)` squashes extreme outliers, transforming exponential power-law curves into symmetrical bell distributions."
        ]
      },
      learning: {
        resources: [
          {
            title: "ydata-profiling Documentation & User Guide",
            url: "https://docs.profiling.ydata.ai/",
            type: "Official Docs"
          },
          {
            title: "NIST Engineering Statistics Handbook (EDA Principles)",
            url: "https://www.itl.nist.gov/div898/handbook/eda/eda.htm",
            type: "Guide"
          },
          {
            title: "Outlier Detection in Financial Time Series",
            url: "https://scikit-learn.org/stable/modules/outlier_detection.html",
            type: "Data Pipeline"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Embedded Fast Analytics Engines with DuckDB",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Query millions of parquet/CSV rows directly in-memory at lightning speeds with zero database server setup.",
      description: "Spinning up a cloud PostgreSQL or Snowflake warehouse just to analyze a 10GB CSV or Parquet export is slow, expensive, and unnecessary. DuckDB has revolutionized analytical data engineering as the 'SQLite of Analytics'. Operating as an in-process, columnar, vectorized analytical SQL engine, DuckDB executes multi-million row joins, window functions, and regular expressions directly inside Python or the terminal with zero network latency and zero server administration.",
      playbook: {
        setup: "Install DuckDB CLI and Python package: `pip install duckdb`. Download a sample multi-gigabyte transactional dataset in CSV or Parquet format.",
        execute: "Run SQL queries directly against raw files on disk: `SELECT customer_id, count(*), sum(amount) FROM 'data/orders/*.parquet' WHERE order_date >= '2026-01-01' GROUP BY 1 ORDER BY 3 DESC LIMIT 10`. Connect to MotherDuck for cloud collaboration and persistent storage sharing.",
        verify: "Benchmark query speed against standard Pandas: confirm that DuckDB processes a 10M-row group-by query in under 400 milliseconds using automatic multi-threaded CPU parallelization."
      },
      tools: [
        {
          name: "DuckDB",
          type: "Free",
          url: "https://duckdb.org",
          description: "High-performance embedded analytical SQL database management system running in-process with columnar vectorized execution.",
          bestFor: "Zero-latency in-memory SQL analytics on Parquet & CSV files"
        },
        {
          name: "MotherDuck",
          type: "Freemium",
          url: "https://motherduck.com",
          description: "Cloud analytics platform pairing DuckDB's fast engine with cloud sharing, persistent databases, and hybrid edge execution.",
          bestFor: "Cloud DuckDB database collaboration & hybrid execution"
        },
        {
          name: "SQL Workbench",
          type: "Free",
          url: "https://www.sql-workbench.eu",
          description: "Cross-platform database front-end for running analytical queries, benchmarking SQL execution times, and exporting result matrices.",
          bestFor: "Visual SQL query benchmarking & database connectivity"
        }
      ],
      callouts: {
        mistake: "Loading multi-gigabyte CSVs into Pandas DataFrames first before querying, triggering Out-Of-Memory (OOM) crashes that DuckDB handles gracefully via disk-spilling.",
        proTip: "Query Parquet files directly with wildcards (`'s3://bucket/data/*.parquet'`); DuckDB automatically leverages parquet metadata to skip unneeded columns and row groups.",
        mistakes: [
          "Exporting analytics results to CSV rather than compressed Snappy Parquet, bloating disk storage by 80% and slowing subsequent query loads.",
          "Using DuckDB for row-by-row transactional inserts (OLTP); DuckDB is engineered strictly for analytical scans and batch aggregations (OLAP).",
          "Forgetting to set memory limits (`SET max_memory = '8GB'`), causing DuckDB to contend with other containerized background services."
        ],
        proTips: [
          "Convert raw CSVs to Parquet using DuckDB in one line: `COPY (SELECT * FROM 'raw.csv') TO 'clean.parquet' (FORMAT PARQUET, COMPRESSION ZSTD);`.",
          "DuckDB integrates natively with Arrow: pass data between DuckDB and Pandas/Polars with zero-copy memory transfers via `duckdb.query(sql).df()`.",
          "Leverage DuckDB's `PIVOT` and `UNPIVOT` keywords to transform wide reporting matrices into relational datasets in seconds."
        ]
      },
      promptLab: {
        title: "High-Performance DuckDB Columnar Query Generator",
        description: "Generate optimized DuckDB SQL queries leveraging window functions, parquet scanning, and zero-copy Python transformations.",
        variables: [
          {
            name: "Data Source",
            label: "Data Source",
            options: ["Partitioned S3 Parquet Files (year=*/month=*)", "Multi-Gigabyte Compressed CSV Dump", "In-Memory Pandas DataFrame Object"],
            default: "Partitioned S3 Parquet Files (year=*/month=*)"
          },
          {
            name: "Analytical Calculation",
            label: "Analytical Calculation",
            options: ["Rolling 7-Day Revenue & Cumulative User LTV", "Session Inactivity Gaps & Retention Cohorts", "Top 1% Decile Spend Segmentation"],
            default: "Rolling 7-Day Revenue & Cumulative User LTV"
          },
          {
            name: "Output Destination",
            label: "Output Destination",
            options: ["Compressed Parquet File with ZSTD", "Zero-Copy Pandas DataFrame", "Direct Terminal Summary Table"],
            default: "Compressed Parquet File with ZSTD"
          }
        ],
        template: `You are an analytical database architect specializing in embedded columnar database engines and DuckDB.

Write a high-performance DuckDB SQL query and Python pipeline:
- Data Source: [Data Source]
- Analytical Calculation: [Analytical Calculation]
- Output Destination: [Output Destination]

Please provide:
1. Complete DuckDB SQL Script: Featuring CTEs, window functions, and parquet metadata filtering.
2. Python In-Process Execution: Showing how to execute the query and benchmark elapsed milliseconds.
3. Performance Optimization Notes: Column pruning, pushdown projection, and memory-limit configurations.`,
        expectedOutput: `### DuckDB High-Performance Columnar Script

\`\`\`python
import duckdb
import time

def run_analytical_aggregation():
    # 1. Initialize In-Process DuckDB Connection
    con = duckdb.connect(database=":memory:")
    
    # Configure performance constraints
    con.execute("SET threads = 8;")
    con.execute("SET max_memory = '12GB';")

    query = """
    WITH raw_transactions AS (
        -- Pushdown projection: only reads required columns from Parquet files
        SELECT 
            customer_id,
            order_date::DATE AS order_date,
            order_total
        FROM read_parquet('data/lake/orders/*/*.parquet')
        WHERE order_date >= '2025-01-01'
    ),
    daily_aggregates AS (
        SELECT 
            order_date,
            COUNT(DISTINCT customer_id) AS active_buyers,
            SUM(order_total) AS daily_revenue
        FROM raw_transactions
        GROUP BY 1
    ),
    windowed_kpis AS (
        SELECT 
            order_date,
            active_buyers,
            daily_revenue,
            -- Rolling 7-day trailing average
            AVG(daily_revenue) OVER (
                ORDER BY order_date 
                ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
            ) AS rolling_7d_avg_revenue,
            -- Cumulative gross revenue to date
            SUM(daily_revenue) OVER (
                ORDER BY order_date
            ) AS cumulative_ltv_revenue
        FROM daily_aggregates
    )
    SELECT * FROM windowed_kpis ORDER BY order_date DESC;
    """

    print("Executing DuckDB vectorized query...")
    start_time = time.perf_counter()

    # 2. Execute & Write Directly to Parquet with ZSTD Compression
    con.execute(f"""
        COPY ({query}) 
        TO 'data/clean/rolling_revenue_kpis.parquet' 
        (FORMAT PARQUET, COMPRESSION ZSTD);
    """)

    elapsed_ms = (time.perf_counter() - start_time) * 1000
    print(f"Query completed in {elapsed_ms:.2f} ms.")

    # 3. Preview Top 5 Rows in Terminal
    preview_df = con.execute("SELECT * FROM 'data/clean/rolling_revenue_kpis.parquet' LIMIT 5;").df()
    print("\\n=== REVENUE KPI PREVIEW ===")
    print(preview_df.to_string(index=False))

if __name__ == "__main__":
    run_analytical_aggregation()
\`\`\``
      },
      conceptGuide: {
        title: "Vectorized Columnar Execution & DuckDB Architecture",
        overview: "Traditional databases (like SQLite and OLTP PostgreSQL) store data row-by-row on disk. When running an aggregate function like `SUM(revenue)`, row stores must load every column into CPU cache just to read the revenue field. Columnar databases store each column separately. DuckDB processes columns in chunks of 2,048 values using CPU SIMD (Single Instruction, Multiple Data) vector instructions, delivering 100x speedups for analytical workloads.",
        keyPoints: [
          "**Columnar Scanning:** DuckDB reads only the exact columns referenced in your query, completely skipping unreferenced columns.",
          "**Vectorized SIMD Execution:** Mathematical operations run on thousands of values simultaneously in CPU registers without memory bus congestion.",
          "**Predicate Pushdown:** Parquet file statistics (min/max headers) allow DuckDB to discard entire row groups without reading raw data into RAM."
        ]
      },
      learning: {
        resources: [
          {
            title: "DuckDB Official Documentation",
            url: "https://duckdb.org/docs/",
            type: "Official Docs"
          },
          {
            title: "MotherDuck Cloud Analytics Architecture",
            url: "https://motherduck.com/docs/",
            type: "Data Pipeline"
          },
          {
            title: "Columnar Storage & Parquet Internals",
            url: "https://parquet.apache.org/docs/",
            type: "Guide"
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Text-to-SQL Engineering & Zero-Hallucination Querying",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Training local vector retrieval on DDL schemas and business rules to convert plain English questions into bulletproof Postgres/Snowflake SQL.",
      description: "Directly asking raw LLMs to write complex enterprise SQL leads to hallucinations—models invent non-existent column names, hallucinate incorrect table relationships, and calculate metrics with wrong formulas. Production Text-to-SQL architectures use Retrieval-Augmented Generation (RAG) frameworks like Vanna.ai. By indexing your exact database DDL schemas, documentation dictionaries, and verified 'Golden SQL' query pairs into a vector store, the AI writes validated, syntax-perfect SQL queries.",
      playbook: {
        setup: "Install Vanna.ai and database connectors: `pip install vanna psycopg2-binary snowflake-connector-python`. Connect to your PostgreSQL or Snowflake development database.",
        execute: "Train Vanna's local Chroma/Qdrant vector memory on three assets: 1) Your database DDL statements (`CREATE TABLE`), 2) A documentation glossary defining ambiguous business terms, and 3) 10 verified 'Golden SQL' question-query pairs. Test querying with natural language: `vn.ask('What is our monthly churn rate by plan for 2026?')`.",
        verify: "Execute the generated SQL in DBeaver against a test database: confirm zero SQL syntax errors, verify `JOIN` keys match foreign key constraints, and confirm execution time finishes in under 2 seconds."
      },
      tools: [
        {
          name: "Vanna.ai",
          type: "Free",
          url: "https://vanna.ai",
          description: "Open-source Python RAG framework that trains on schema DDL, documentation, and verified SQL to generate accurate database queries.",
          bestFor: "Zero-hallucination Text-to-SQL RAG training & execution"
        },
        {
          name: "Cursor",
          type: "Freemium",
          url: "https://www.cursor.com",
          description: "AI-native code editor with codebase indexing for navigating dbt SQL models, database migration scripts, and analytical pipelines.",
          bestFor: "Writing and refactoring dbt models & SQL queries"
        },
        {
          name: "DBeaver",
          type: "Free",
          url: "https://dbeaver.io",
          description: "Free multi-platform database tool for developers, SQL programmers, and analysts supporting all popular databases.",
          bestFor: "Visual database administration, ER diagramming & SQL testing"
        }
      ],
      callouts: {
        mistake: "Passing raw database credentials directly to third-party public AI chat interfaces, exposing confidential customer records and violating SOC-2 / GDPR compliance.",
        proTip: "Only train Text-to-SQL vectors on schema DDL structure and column documentation—never feed actual customer table rows into the AI model.",
        mistakes: [
          "Failing to provide few-shot 'Golden Query' examples, forcing the model to guess company-specific fiscal calendar or churn definitions.",
          "Executing AI-generated SQL with `write` or `DROP` permissions; Text-to-SQL database connections must strictly run on read-only service accounts.",
          "Ignoring SQL dialect nuances (e.g., Snowflake's `DATEADD` vs. Postgres `INTERVAL` vs. BigQuery `DATE_ADD`)."
        ],
        proTips: [
          "Create a dedicated read-only Postgres user (`GRANT SELECT ON ALL TABLES IN SCHEMA public TO ai_analyst;`) for AI query execution.",
          "Add SQL comments to schema definitions (`COMMENT ON COLUMN subscriptions.mrr IS 'Normalized monthly revenue in USD';`); LLMs parse these comments directly.",
          "Implement an automatic validation wrapper that executes `EXPLAIN` on the generated query before returning results to verify query cost and syntax."
        ]
      },
      promptLab: {
        title: "Few-Shot Schema-Aware Text-to-SQL System Prompt",
        description: "Scaffold a production-grade system prompt that injects DDL schema constraints, verified Golden SQL pairs, and dialect rules into Claude.",
        variables: [
          {
            name: "Database Dialect",
            label: "Database Dialect",
            options: ["PostgreSQL 16", "Snowflake SQL", "Google BigQuery Standard SQL", "DuckDB In-Memory"],
            default: "PostgreSQL 16"
          },
          {
            name: "Query Complexity",
            label: "Query Complexity",
            options: ["Multi-Table CTE with Window Functions & Rolling Averages", "Cohort Retention Triangle Matrix", "Simple Group-By & Filter Summary"],
            default: "Multi-Table CTE with Window Functions & Rolling Averages"
          },
          {
            name: "Execution Safeguard",
            label: "Execution Safeguard",
            options: ["Strict Read-Only SELECT Only (No Mutation)", "Include EXPLAIN ANALYZE Cost Cap", "Force Explicit Column Aliasing"],
            default: "Strict Read-Only SELECT Only (No Mutation)"
          }
        ],
        template: `You are an elite principal database architect and SQL engineer specializing in [Database Dialect].

Convert the user's natural language business question into an optimal, syntax-perfect SQL query:
- Database Dialect: [Database Dialect]
- Query Complexity: [Query Complexity]
- Execution Safeguard: [Execution Safeguard]

SCHEMA DEFINITION:
\`\`\`sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE,
    plan_tier VARCHAR(50) -- 'free', 'pro', 'enterprise'
);

CREATE TABLE subscriptions (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    status VARCHAR(50), -- 'active', 'canceled', 'past_due'
    mrr_cents INT,      -- Revenue in USD cents
    started_at TIMESTAMP WITH TIME ZONE,
    canceled_at TIMESTAMP WITH TIME ZONE
);
\`\`\`

USER QUESTION: "Calculate our monthly net active MRR and churn rate percentage by plan tier for the last 6 months."

Please provide:
1. Syntax-Valid SQL Query: Formatted with CTEs and explicit column names (zero SELECT *).
2. Query Plan Walkthrough: Explanation of join indexes, window partition logic, and edge case handling.`,
        expectedOutput: `### Verified Production SQL Query (PostgreSQL 16)

\`\`\`sql
WITH monthly_spine AS (
    -- Generate series for the last 6 calendar months
    SELECT 
        DATE_TRUNC('month', series_date)::DATE AS report_month
    FROM GENERATE_SERIES(
        DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '6 months',
        DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 month',
        INTERVAL '1 month'
    ) AS series_date
),
plans AS (
    SELECT DISTINCT plan_tier FROM users WHERE plan_tier IS NOT NULL
),
cohort_spine AS (
    -- Cross join to ensure zero-revenue months are represented
    SELECT 
        ms.report_month,
        p.plan_tier
    FROM monthly_spine ms
    CROSS JOIN plans p
),
subscription_snapshots AS (
    SELECT 
        cs.report_month,
        cs.plan_tier,
        COUNT(DISTINCT s.id) AS total_subscriptions,
        -- Active subscriptions during this calendar month
        COUNT(DISTINCT CASE 
            WHEN s.status = 'active' 
             AND s.started_at < cs.report_month + INTERVAL '1 month'
             AND (s.canceled_at IS NULL OR s.canceled_at >= cs.report_month)
            THEN s.id 
        END) AS active_sub_count,
        -- Active MRR converted from cents to dollars
        COALESCE(SUM(CASE 
            WHEN s.status = 'active' 
             AND s.started_at < cs.report_month + INTERVAL '1 month'
             AND (s.canceled_at IS NULL OR s.canceled_at >= cs.report_month)
            THEN s.mrr_cents / 100.0 
        END), 0) AS active_mrr_usd,
        -- Churned subscriptions during this calendar month
        COUNT(DISTINCT CASE 
            WHEN s.canceled_at >= cs.report_month 
             AND s.canceled_at < cs.report_month + INTERVAL '1 month'
            THEN s.id 
        END) AS churned_sub_count
    FROM cohort_spine cs
    LEFT JOIN users u ON u.plan_tier = cs.plan_tier
    LEFT JOIN subscriptions s ON s.user_id = u.id
    GROUP BY cs.report_month, cs.plan_tier
)
SELECT 
    report_month,
    plan_tier,
    active_mrr_usd,
    active_sub_count,
    churned_sub_count,
    -- Churn Rate % = Churned Subs / (Active Subs at Start of Month)
    CASE 
        WHEN active_sub_count > 0 
        THEN ROUND((churned_sub_count::NUMERIC / active_sub_count) * 100, 2)
        ELSE 0.00 
    END AS churn_rate_percentage
FROM subscription_snapshots
ORDER BY report_month DESC, active_mrr_usd DESC;
\`\`\`

#### Query Plan Walkthrough
- **Calendar Spine Generation:** Using \`GENERATE_SERIES\` guarantees that months with zero churn or sales still output a row rather than disappearing from your dashboard.
- **Cross-Join Spine:** Cross-joining months with plans prevents missing rows for newer plan tiers.
- **Integer Division Protection:** \`mrr_cents / 100.0\` forces floating-point decimal conversion to avoid truncated integer math.`
      },
      conceptGuide: {
        title: "Semantic DDL Embeddings & Controlled Text-to-SQL RAG",
        overview: "Language models do not possess a live socket into your database; they only know what is provided in the prompt context window. When an LLM fails at SQL generation, the error almost always stems from missing context (e.g. not knowing which table contains historical vs. active records). RAG architectures convert your DDL schema, table relationships, and SQL documentation into high-dimensional vector embeddings, dynamically injecting only the necessary table definitions into the model context.",
        keyPoints: [
          "**Schema-Level Vectorization:** Index table definitions and foreign key constraints so queries retrieve relevant sub-schemas without exceeding context tokens.",
          "**Few-Shot Golden Pairs:** Providing 3 examples of complex company-specific queries increases downstream SQL accuracy from 65% to over 95%.",
          "**Read-Only Sandboxing:** Always bind Text-to-SQL engines to read-only database connections with explicit statement timeouts (e.g. 5 seconds) to prevent accidental denial-of-service locks."
        ]
      },
      learning: {
        resources: [
          {
            title: "Vanna.ai Open Source Documentation",
            url: "https://vanna.ai/docs/",
            type: "Official Docs"
          },
          {
            title: "PostgreSQL Advanced Window Functions Guide",
            url: "https://www.postgresql.org/docs/current/tutorial-window.html",
            type: "Guide"
          },
          {
            title: "DBeaver Database Administration Handbook",
            url: "https://dbeaver.io",
            type: "Data Pipeline"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Semantic Metric Layer & Single Source of Truth",
      timeEstimate: "1.5 hrs",
      difficulty: "Advanced",
      summary: "Standardize business metric definitions (MRR, CAC, Active Users) so AI queries and BI dashboards never disagree on calculation logic.",
      description: "In growing companies, different departments constantly fight over numbers: marketing calculates 10,000 active users, product reports 8,200, and finance counts 7,500. This discord occurs because business logic is siloed inside ad-hoc SQL queries and conflicting BI dashboards. Modern data stacks solve this by creating a Semantic Metric Layer using tools like Cube.js and dbt MetricFlow. Business metrics are codified in version-controlled YAML, ensuring every AI tool, API, and dashboard queries the exact same calculation.",
      playbook: {
        setup: "Install Cube.js CLI (`npm install -g cubejs-cli`) or dbt MetricFlow. Connect Cube to your analytical data warehouse (Snowflake or PostgreSQL).",
        execute: "Define reusable semantic data cubes in YAML/JavaScript: establish data dimensions (e.g., `user_country`, `plan_type`), measures (`mrr_total`, `active_user_count`), and rolling time windows. Configure caching with Cube Pre-Aggregations for sub-second query performance.",
        verify: "Execute a test query through Cube's REST and GraphQL APIs. Confirm that the calculated MRR matches finance spreadsheets to the exact cent across multiple grouping dimensions."
      },
      tools: [
        {
          name: "Cube.js",
          type: "Freemium",
          url: "https://cube.dev",
          description: "Universal semantic layer platform that provides centralized metric modeling, access control, and pre-aggregation caching for any data app.",
          bestFor: "Centralized semantic metric modeling & high-speed caching"
        },
        {
          name: "dbt (data build tool)",
          type: "Freemium",
          url: "https://www.getdbt.com",
          description: "Data transformation framework that enables data teams to build, test, and document modular SQL models and semantic metrics.",
          bestFor: "SQL data transformation, testing & semantic metrics"
        },
        {
          name: "Snowflake",
          type: "Paid",
          url: "https://www.snowflake.com",
          description: "Cloud enterprise data warehouse featuring elastic compute clusters, zero-copy cloning, and secure data sharing.",
          bestFor: "Scalable cloud enterprise analytical data warehousing"
        }
      ],
      callouts: {
        mistake: "Hardcoding revenue formulas into individual Metabase cards or Python scripts instead of defining them once in a centralized semantic model.",
        proTip: "Enable Cube.js Pre-Aggregations; it pre-computes rollup tables in your warehouse, turning 30-second queries into 15ms cached responses.",
        mistakes: [
          "Failing to version-control metric definitions in Git, making it impossible to audit when or why a critical KPI formula was altered.",
          "Defining contradictory dimension names across tables (e.g. `client_id` in orders vs. `account_id` in subscriptions).",
          "Neglecting data testing assertions in dbt (e.g. `not_null`, `unique`), allowing bad data to contaminate semantic metric outputs."
        ],
        proTips: [
          "Document business edge cases directly in semantic YAML descriptions (e.g. 'Excludes internal testing accounts and refunded orders').",
          "Expose your Cube semantic layer to Claude and AI agents via Cube's native SQL API endpoint; the agent queries standardized metrics instead of raw tables.",
          "Automate dbt testing in CI/CD pull requests so broken schema changes are blocked before merging into production data models."
        ]
      },
      promptLab: {
        title: "Cube.js Semantic Data Cube Schema Generator",
        description: "Generate a production-ready Cube.js semantic YAML schema defining measures, dimensions, pre-aggregations, and access rules.",
        variables: [
          {
            name: "Business Model",
            label: "Business Model",
            options: ["B2B SaaS Subscription (MRR, Churn, LTV)", "E-Commerce Retail (GMV, AOV, Repeat Rate)", "Marketplace Platform (Take Rate, Liquidity)"],
            default: "B2B SaaS Subscription (MRR, Churn, LTV)"
          },
          {
            name: "Pre-Aggregation Strategy",
            label: "Pre-Aggregation Strategy",
            options: ["Rolling Daily Pre-Aggregation with 1-Hour Refresh", "Partitioned Monthly Rollup", "Real-Time Direct Warehouse Pass-Through"],
            default: "Rolling Daily Pre-Aggregation with 1-Hour Refresh"
          },
          {
            name: "Access Control Policy",
            label: "Access Control Policy",
            options: ["Role-Based Multi-Tenant Row Security", "Global Internal Analytics Access", "Masked PII for Non-Admin Roles"],
            default: "Role-Based Multi-Tenant Row Security"
          }
        ],
        template: `You are a principal data warehouse architect specializing in semantic layers and Cube.js.

Write a complete semantic model schema:
- Business Model: [Business Model]
- Pre-Aggregation Strategy: [Pre-Aggregation Strategy]
- Access Control Policy: [Access Control Policy]

Please provide:
1. Complete Cube.js Schema File: Written in standard Cube YAML defining Cube name, SQL table binding, dimensions, and measures.
2. Pre-Aggregation Definition: Configuring high-speed rollup caching to guarantee sub-100ms dashboard queries.
3. Access Control Rule: Demonstrating how to filter tenant data dynamically based on user JWT security tokens.`,
        expectedOutput: `### Cube.js Semantic Schema (\`model/cubes/subscriptions.yml\`)

\`\`\`yaml
cubes:
  - name: subscriptions
    sql_table: analytics_prod.fact_subscriptions

    # Dynamic Row-Level Security: Multi-tenant filtering
    context_members:
      - dimensions:
          - tenant_id

    dimensions:
      - name: id
        sql: id
        type: string
        primary_key: true

      - name: tenant_id
        sql: tenant_id
        type: string

      - name: plan_tier
        sql: plan_tier
        type: string

      - name: status
        sql: status
        type: string

      - name: started_at
        sql: started_at
        type: time

      - name: canceled_at
        sql: canceled_at
        type: time

    measures:
      - name: count
        type: count

      - name: active_subscription_count
        type: count
        filters:
          - sql: "{CUBE}.status = 'active'"
        description: "Total active subscription licenses currently billing."

      - name: total_mrr
        sql: "{CUBE}.mrr_cents / 100.0"
        type: sum
        filters:
          - sql: "{CUBE}.status = 'active'"
        description: "Normalized Monthly Recurring Revenue in USD."

      - name: average_revenue_per_account
        sql: "{total_mrr} / NULLIF({active_subscription_count}, 0)"
        type: number
        description: "ARPA: Average active MRR per paying account."

    # Pre-Aggregation: Rollup table pre-computed in warehouse
    pre_aggregations:
      - name: daily_mrr_rollup
        measures:
          - total_mrr
          - active_subscription_count
        dimensions:
          - plan_tier
          - tenant_id
        time_dimension: started_at
        granularity: day
        refresh_key:
          every: 1 hour
        partition_granularity: month
\`\`\``
      },
      conceptGuide: {
        title: "The Semantic Layer as a Decoupled Single Source of Truth",
        overview: "In legacy business intelligence architectures, analytical logic lived inside dashboard SQL queries. When business definitions shifted (e.g. defining whether paused accounts contribute to MRR), engineers had to update hundreds of independent reports. A semantic layer decouples business logic from visualization tools: measures and dimensions are codified upstream in a unified YAML definition that serves APIs, chatbots, and BI charts simultaneously.",
        keyPoints: [
          "**Dry Business Logic:** Define complex calculations (like Net Retention Rate) in one centralized YAML file; changes propagate instantly to all dashboards.",
          "**Pre-Aggregation Acceleration:** By pre-computing frequently queried dimensions into temporary database tables, query latency drops by 98%.",
          "**Governance & Auditability:** Versioning metric logic in Git provides total accountability: pull requests document who altered a KPI and why."
        ]
      },
      learning: {
        resources: [
          {
            title: "Cube.js Semantic Layer Documentation",
            url: "https://cube.dev/docs",
            type: "Official Docs"
          },
          {
            title: "dbt MetricFlow Semantic Documentation",
            url: "https://docs.getdbt.com/docs/build/about-metricflow",
            type: "Data Pipeline"
          },
          {
            title: "The Modern Data Stack Reference Architecture",
            url: "https://www.snowflake.com/en/data-cloud/overview/",
            type: "Guide"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Relational Data Modeling & Star Schema Design",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Structure raw transactional tables into optimized fact and dimension tables for high-performance analytical queries.",
      description: "Directly querying transactional application databases (3NF normalized tables with dozens of joins) for analytical reporting will grind production web applications to a halt. Analytical engineering reorganizes raw relational tables into Kimball dimensional models: central Fact tables (storing numerical events like purchases or clicks) surrounded by Dimension tables (storing descriptive context like customer profile, product attributes, and store locations).",
      playbook: {
        setup: "Install dbt and connect to your warehouse. Open DrawDB to sketch table relationships and foreign key mappings visually.",
        execute: "Design a Kimball dimensional star schema: 1) Extract raw staging models (`stg_orders`, `stg_users`), 2) Build conforming Dimension tables (`dim_customers`, `dim_products`, `dim_dates`), and 3) Build a grain-defined Fact table (`fct_orders`) containing foreign keys and metrics. Implement Slowly Changing Dimensions (SCD Type 2) using dbt snapshots.",
        verify: "Run `dbt test` to enforce referential integrity: verify that every foreign key in `fct_orders` points to a valid primary key in its corresponding dimension table with zero orphaned rows."
      },
      tools: [
        {
          name: "dbt",
          type: "Freemium",
          url: "https://www.getdbt.com",
          description: "Industry-standard data modeling and transformation framework providing automated testing, documentation, and version control for SQL models.",
          bestFor: "Building Kimball star schemas & automated data testing"
        },
        {
          name: "Postgres",
          type: "Free",
          url: "https://www.postgresql.org",
          description: "Enterprise open-source relational database supporting advanced analytical indexing, foreign keys, and partitioned tables.",
          bestFor: "Analytical relational database storage & indexing"
        },
        {
          name: "DrawDB",
          type: "Free",
          url: "https://www.drawdb.app",
          description: "Free, open-source online database schema designer and entity relationship diagram (ERD) tool for modeling dimensional schemas.",
          bestFor: "Visual entity relationship diagramming & schema design"
        }
      ],
      callouts: {
        mistake: "Creating Fact tables with ambiguous grains (e.g. mixing one row per order with one row per item), causing metrics to double-count during aggregations.",
        proTip: "Always explicitly declare the exact grain of every Fact table in its documentation header: e.g., 'Grain: Exactly one row per line item ordered'.",
        mistakes: [
          "Querying transactional production replicas directly for heavy aggregate reports, causing lock contention and slowing user-facing web apps.",
          "Over-normalizing analytical data warehouses into 15 nested joins, destroying query performance and confusing non-technical analysts.",
          "Failing to track customer historical changes (e.g. plan upgrades) using Slowly Changing Dimensions (SCD Type 2), distorting historical reporting."
        ],
        proTips: [
          "Use a dedicated pre-generated Date Dimension (`dim_dates`) containing fiscal quarters, holiday flags, and day-of-week indices to avoid repetitive runtime date math.",
          "Surrogate keys (generated via `dbt_utils.generate_surrogate_key(['order_id', 'line_item_id'])`) prevent primary key collisions across disparate source systems.",
          "Materialize heavy analytical fact models as `incremental` tables in dbt to process only newly arrived rows rather than re-computing multi-year histories."
        ]
      },
      promptLab: {
        title: "Kimball Star Schema & dbt Dimensional Model Generator",
        description: "Generate complete dbt SQL model files for an analytical star schema including fact table, dimensions, and dbt schema YAML tests.",
        variables: [
          {
            name: "Business Domain",
            label: "Business Domain",
            options: ["E-Commerce Order Fulfillment & Returns", "SaaS Subscription Lifecycle & Usage", "Fintech Payment Processing & Fraud"],
            default: "E-Commerce Order Fulfillment & Returns"
          },
          {
            name: "Dimensional Modeling Pattern",
            label: "Dimensional Modeling Pattern",
            options: ["Kimball Star Schema (Fact + Conformed Dimensions)", "One Big Table (OBT) Denormalized Wide Table", "Constellation Schema (Multiple Intersecting Facts)"],
            default: "Kimball Star Schema (Fact + Conformed Dimensions)"
          },
          {
            name: "Dimension Change Tracking",
            label: "Dimension Change Tracking",
            options: ["SCD Type 2 (Track Historical Changes with Valid Dates)", "SCD Type 1 (Overwrite with Current Values Only)", "Immutable Append-Only Log"],
            default: "SCD Type 2 (Track Historical Changes with Valid Dates)"
          }
        ],
        template: `You are a principal data warehouse engineer specializing in Kimball dimensional data modeling and dbt.

Design an optimal analytical dimensional model:
- Business Domain: [Business Domain]
- Dimensional Modeling Pattern: [Dimensional Modeling Pattern]
- Dimension Change Tracking: [Dimension Change Tracking]

Please provide:
1. Dimensional Architecture Overview: Stating the explicit grain, Fact table, and primary Dimensions.
2. Production Fact Table SQL (\`models/marts/fct_orders.sql\`): Complete dbt code with surrogate keys and foreign keys.
3. dbt Schema Testing File (\`models/marts/schema.yml\`): Testing unique constraints, not_null, and relationship integrity.`,
        expectedOutput: `### Kimball Dimensional Model Architecture

#### 1. Architecture Overview
- **Fact Table:** \`fct_orders\` — Grain: *Exactly one record per order transaction*.
- **Dimensions:** \`dim_customers\` (SCD Type 2 historical profile), \`dim_products\`, \`dim_dates\`.

#### 2. Fact Table Model (\`models/marts/fct_orders.sql\`)
\`\`\`sql
{{ config(
    materialized='incremental',
    unique_key='order_pk',
    on_schema_change='sync_all_columns'
) }}

WITH stg_orders AS (
    SELECT * FROM {{ ref('stg_ecommerce__orders') }}
    {% if is_incremental() %}
        WHERE updated_at > (SELECT MAX(updated_at) FROM {{ this }})
    {% endif %}
),
dim_customers AS (
    SELECT customer_id, customer_pk FROM {{ ref('dim_customers') }}
),
dim_products AS (
    SELECT product_id, product_pk FROM {{ ref('dim_products') }}
)
SELECT
    -- Surrogate Key
    {{ dbt_utils.generate_surrogate_key(['o.order_id']) }} AS order_pk,
    
    -- Foreign Keys to Dimensions
    c.customer_pk,
    p.product_pk,
    o.order_date::DATE AS date_day,
    
    -- Degenerate Dimensions (Stored in Fact for quick filtering)
    o.order_id,
    o.order_status,
    o.shipping_carrier,

    -- Numerical Metrics & Additive Facts
    o.item_quantity,
    o.gross_revenue_cents / 100.0 AS gross_revenue_usd,
    o.tax_amount_cents / 100.0 AS tax_amount_usd,
    o.discount_amount_cents / 100.0 AS discount_amount_usd,
    (o.gross_revenue_cents - o.discount_amount_cents) / 100.0 AS net_revenue_usd,

    -- Audit Metadata
    o.created_at,
    o.updated_at
FROM stg_orders o
LEFT JOIN dim_customers c ON c.customer_id = o.customer_id
LEFT JOIN dim_products p ON p.product_id = o.product_id
\`\`\`

#### 3. dbt Data Testing Specification (\`models/marts/schema.yml\`)
\`\`\`yaml
version: 2

models:
  - name: fct_orders
    description: "Core sales fact table. Grain: One row per completed order."
    columns:
      - name: order_pk
        tests:
          - unique
          - not_null
      - name: customer_pk
        tests:
          - not_null
          - relationships:
              to: ref('dim_customers')
              field: customer_pk
      - name: net_revenue_usd
        tests:
          - not_null
\`\`\``
      },
      conceptGuide: {
        title: "Kimball Dimensional Modeling & Fact-Dimension Duality",
        overview: "Operational applications write data in Third Normal Form (3NF) to guarantee transactional integrity and prevent duplicate records. However, querying 3NF databases for business analytics requires joining 10+ tables, resulting in severe performance penalties. Ralph Kimball's dimensional modeling separates tables into two distinct roles: Facts (numerical measurements of business events) and Dimensions (descriptive business context), creating simple, performant, and intuitive database schemas.",
        keyPoints: [
          "**The Sacred Fact Table Grain:** The grain defines what a single row in the Fact table represents; maintaining an uncompromised grain prevents double-counting errors.",
          "**Additive vs. Non-Additive Facts:** Additive metrics (like revenue dollars) can be summed across any dimension; non-additive metrics (like ratios) must be calculated from base components.",
          "**Conformed Dimensions:** A single customer dimension shared across multiple Fact tables (Orders, Support Tickets, Returns) allows cross-functional analytics without schema conflicts."
        ]
      },
      learning: {
        resources: [
          {
            title: "dbt Dimensional Modeling Best Practices Guide",
            url: "https://docs.getdbt.com/guides/best-practices/how-we-structure/1-guide-overview",
            type: "Official Docs"
          },
          {
            title: "The Kimball Group Dimensional Modeling Techniques",
            url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/",
            type: "Guide"
          },
          {
            title: "DrawDB Visual Schema Designer",
            url: "https://www.drawdb.app",
            type: "Data Pipeline"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "Automated Time-Series Forecasting & Trend Projections",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Predict future sales, inventory demand, and seasonal fluctuations with confidence interval bands.",
      description: "Business executives constantly ask: 'What will revenue look like next quarter?' and 'How much warehouse inventory should we order before Black Friday?' Simple straight-line trend calculations fail because they cannot account for multi-period seasonality, holiday shopping surges, and macro-economic inflections. Modern time-series pipelines use Meta's Prophet, Nixtla TimeGPT foundation models, and Statsmodels SARIMAX to generate probabilistic forecasts complete with 95% confidence interval uncertainty bands.",
      playbook: {
        setup: "Install forecasting suites: `pip install prophet statsmodels nixtla`. Prepare historical daily sales or traffic data spanning at least 24 months.",
        execute: "Configure a Prophet forecasting pipeline: map historical timestamps to `ds` and target metric to `y`. Add national holiday regressors and adjust `changepoint_prior_scale=0.05` to balance trend flexibility. Project 90 days into the future and compute upper/lower uncertainty bounds.",
        verify: "Run cross-validation backtesting using rolling cutoffs (`cross_validation`): calculate Mean Absolute Percentage Error (MAPE) and confirm forecast accuracy exceeds 85% on historical test windows."
      },
      tools: [
        {
          name: "Prophet",
          type: "Free",
          url: "https://facebook.github.io/prophet/",
          description: "Open-source forecasting procedure developed by Meta designed for business time series with strong seasonal effects and historical holidays.",
          bestFor: "Business time-series forecasting with holiday seasonality"
        },
        {
          name: "Nixtla TimeGPT",
          type: "Freemium",
          url: "https://www.nixtla.io",
          description: "First foundation model for time series offering zero-shot forecasting, anomaly detection, and exogenous feature modeling via API.",
          bestFor: "Zero-shot foundation model time-series forecasting"
        },
        {
          name: "Statsmodels",
          type: "Free",
          url: "https://www.statsmodels.org",
          description: "Python module providing statistical modeling, hypothesis testing, and rigorous SARIMAX econometric time-series analysis.",
          bestFor: "Rigorous econometric time-series modeling & hypothesis testing"
        }
      ],
      callouts: {
        mistake: "Training forecasting models on data with fewer than 12 months of history; algorithms cannot learn annual seasonality without at least one full yearly cycle.",
        proTip: "Always decompose your time series into Trend, Seasonality, and Residual noise; this immediately reveals whether growth is driven by genuine adoption or calendar seasonality.",
        mistakes: [
          "Presenting a single point estimate forecast to leadership without confidence intervals, setting unrealistic expectations for volatile metrics.",
          "Failing to account for marketing promotional spikes, causing the model to mistake a temporary ad blitz for permanent baseline growth.",
          "Ignoring non-stationarity in auto-regressive models, producing bogus trend projections that drift endlessly upward."
        ],
        proTips: [
          "Feed custom events (e.g. website outages, price increases) into Prophet as custom binary regressors to prevent them from distorting baseline trends.",
          "Measure model accuracy using MAPE (Mean Absolute Percentage Error) and WAPE (Weighted Absolute Percentage Error) rather than raw RMSE.",
          "Update and re-train time-series models weekly on automated cron jobs to incorporate newly observed actuals into downstream projections."
        ]
      },
      promptLab: {
        title: "Prophet Automated Time-Series Forecasting Pipeline",
        description: "Generate a production Python forecasting pipeline using Meta Prophet with holiday effects, changepoint detection, and rolling cross-validation.",
        variables: [
          {
            name: "Forecasting Horizon",
            label: "Forecasting Horizon",
            options: ["90 Days Forward (Quarterly Revenue Projection)", "365 Days Forward (Annual Budget Planning)", "30 Days Forward (Inventory Demand)"],
            default: "90 Days Forward (Quarterly Revenue Projection)"
          },
          {
            name: "Seasonality Mode",
            label: "Seasonality Mode",
            options: ["Multiplicative Seasonality (Spikes Scale with Growth)", "Additive Seasonality (Constant Absolute Spikes)", "Custom Fourier Seasonal Decomposition"],
            default: "Multiplicative Seasonality (Spikes Scale with Growth)"
          },
          {
            name: "Uncertainty Interval",
            label: "Uncertainty Interval",
            options: ["95% Confidence Interval Band", "80% Confidence Interval Band", "Full Probabilistic Posterior Distribution"],
            default: "95% Confidence Interval Band"
          }
        ],
        template: `You are a principal quantitative econometrician specializing in time-series forecasting.

Write a complete Python forecasting pipeline:
- Forecasting Horizon: [Forecasting Horizon]
- Seasonality Mode: [Seasonality Mode]
- Uncertainty Interval: [Uncertainty Interval]

Please provide:
1. Prophet Model Configuration: With custom holiday calendars, changepoint priors, and multiplicative seasonality.
2. Forecast Execution: Projecting the future dataframe and extracting \`yhat\`, \`yhat_lower\`, and \`yhat_upper\`.
3. Rolling Cross-Validation: Calculating Mean Absolute Percentage Error (MAPE) to quantify forecast accuracy.`,
        expectedOutput: `### Production Prophet Time-Series Pipeline

\`\`\`python
import pandas as pd
import numpy as np
from prophet import Prophet
from prophet.diagnostics import cross_validation, performance_metrics
import matplotlib.pyplot as plt

def run_quarterly_forecast(df_raw: pd.DataFrame) -> pd.DataFrame:
    """
    Expects df_raw with columns: 'date' and 'revenue'.
    Normalizes to Prophet schema (ds, y) and projects 90 days.
    """
    # 1. Format Schema for Prophet
    df_prophet = df_raw.rename(columns={"date": "ds", "revenue": "y"}).copy()
    df_prophet["ds"] = pd.to_datetime(df_prophet["ds"]).dt.tz_localize(None)
    df_prophet = df_prophet.sort_values("ds").reset_index(drop=True)

    # 2. Configure Prophet Model
    model = Prophet(
        seasonality_mode="multiplicative", # Spikes grow proportionally with revenue
        yearly_seasonality=True,
        weekly_seasonality=True,
        daily_seasonality=False,
        changepoint_prior_scale=0.05,       # Balances flexibility vs overfitting
        interval_width=0.95                 # 95% Confidence Interval
    )
    model.add_country_holidays(country_name="US")

    print("Fitting Prophet time-series model...")
    model.fit(df_prophet)

    # 3. Project 90 Days Into the Future
    future = model.make_future_dataframe(periods=90, freq="D")
    forecast = model.predict(future)

    # 4. Extract Future Predictions Only
    future_forecast = forecast[forecast["ds"] > df_prophet["ds"].max()][
        ["ds", "yhat", "yhat_lower", "yhat_upper"]
    ].copy()

    future_forecast = future_forecast.rename(columns={
        "ds": "forecast_date",
        "yhat": "predicted_revenue",
        "yhat_lower": "lower_confidence_bound",
        "yhat_upper": "upper_confidence_bound"
    })

    print("\\n=== 90-DAY FORECAST SUMMARY ===")
    total_projected = future_forecast["predicted_revenue"].sum()
    print(f"Total Projected 90-Day Revenue: \${total_projected:,.2f}")
    print(f"Confidence Range: [\${future_forecast['lower_confidence_bound'].sum():,.2f} - \${future_forecast['upper_confidence_bound'].sum():,.2f}]")

    # 5. Model Validation via Rolling Backtest
    print("\\nRunning rolling cross-validation backtest...")
    df_cv = cross_validation(
        model, 
        initial="365 days", 
        period="60 days", 
        horizon="90 days", 
        parallel="processes"
    )
    df_p = performance_metrics(df_cv)
    avg_mape = df_p["mape"].mean() * 100
    print(f"Model Historical MAPE (Accuracy Error): {avg_mape:.2f}%")

    return future_forecast
\`\`\``
      },
      conceptGuide: {
        title: "Additive Decompositions & Probabilistic Forecasting",
        overview: "Modern business time series are composite signals composed of three distinct mathematical components: $y(t) = g(t) + s(t) + h(t) + \epsilon_t$, where $g(t)$ is non-periodic trend growth, $s(t)$ represents periodic weekly and annual seasonality, $h(t)$ accounts for idiosyncratic holiday effects, and $\epsilon_t$ is normally distributed residual error. Decomposing signals into independent functions allows algorithms to project future seasonal surges without assuming infinite exponential growth.",
        keyPoints: [
          "**Multiplicative vs. Additive Seasonality:** In growing businesses, Christmas holiday sales spikes grow proportionally with company size; multiplicative modeling captures this scaling dynamic.",
          "**Changepoint Regularization:** Bayesian regularization penalizes models that react too aggressively to one-off spikes, preserving long-term structural trend lines.",
          "**Uncertainty Quantification:** Forecasting is probabilistic, not deterministic; always present confidence intervals so executive leadership understands downstream variance."
        ]
      },
      learning: {
        resources: [
          {
            title: "Meta Prophet Official Quickstart Guide",
            url: "https://facebook.github.io/prophet/docs/quick_start.html",
            type: "Official Docs"
          },
          {
            title: "Nixtla TimeGPT Foundation Model Documentation",
            url: "https://docs.nixtla.io",
            type: "Data Pipeline"
          },
          {
            title: "Forecasting: Principles and Practice (Hyndman & Athanasopoulos)",
            url: "https://otexts.com/fpp3/",
            type: "Guide"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "User Cohort Retention & Churn Risk Segmentation",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Group users by acquisition cohort and run classification algorithms to flag at-risk accounts before they cancel.",
      description: "Customer churn is the silent killer of recurring revenue businesses. Tracking overall blended churn masks reality: an app might be acquiring 1,000 new users a month while losing 90% of them within 30 days. Analytical engineering groups users into monthly acquisition cohorts and builds retention heatmaps. By training Scikit-Learn classification models (Random Forest / XGBoost) on user telemetry (login recency, feature usage, support tickets), data teams predict churn probability before customers cancel.",
      playbook: {
        setup: "Extract user event logs spanning 12 months. Install machine learning and visualization packages: `pip install scikit-learn xgboost seaborn matplotlib`.",
        execute: "Construct a cohort retention triangle matrix: group users by first-signup month and calculate the percentage active in months 1 through 12. Engineer Recency, Frequency, Monetary (RFM) feature vectors and train an XGBoost binary classification model to predict 30-day churn probability.",
        verify: "Evaluate the model using ROC-AUC score and PR-Curve (Precision-Recall): confirm ROC-AUC exceeds 0.82 and verify that top churn features align with business intuition (e.g. zero logins in 14 days)."
      },
      tools: [
        {
          name: "Python Scikit-Learn",
          type: "Free",
          url: "https://scikit-learn.org",
          description: "Premier Python machine learning library providing classification algorithms, feature preprocessors, and cross-validation pipelines.",
          bestFor: "Churn prediction models, RFM clustering & evaluation metrics"
        },
        {
          name: "Mixpanel",
          type: "Freemium",
          url: "https://mixpanel.com",
          description: "Leading product analytics platform for exploring behavioral user cohort retention curves, funnels, and event drop-offs.",
          bestFor: "Visual behavioral retention curves & cohort discovery"
        },
        {
          name: "Google Colab",
          type: "Free",
          url: "https://colab.research.google.com",
          description: "Cloud-hosted Jupyter notebook environment offering free GPU/TPU hardware acceleration for training machine learning models.",
          bestFor: "Cloud ML experimentation & reproducible notebook sharing"
        }
      ],
      callouts: {
        mistake: "Training churn prediction models on heavily imbalanced datasets (e.g. 98% retained, 2% churned) without adjusting class weights, resulting in a model that trivially guesses 'retained' every time.",
        proTip: "Use `scale_pos_weight` in XGBoost or `SMOTE` oversampling to penalize missed churn classifications on imbalanced datasets.",
        mistakes: [
          "Including target-leakage features (like 'account_cancellation_page_visited') that occur *after* the decision to churn has already been made.",
          "Looking only at blended logo churn instead of Dollar-Weighted Net Revenue Retention (NRR), missing expansion revenue trends.",
          "Treating all inactive users equally instead of segmenting by user plan value and historical product engagement."
        ],
        proTips: [
          "Calculate SHAP (SHapley Additive exPlanations) values to explain *why* each individual account was flagged as high-risk in customer success dashboards.",
          "Identify the product's 'Aha! Activation Moment' (e.g., users who complete 3 actions in their first 48 hours have 4x higher 6-month retention).",
          "Automate a daily sync that pushes high-risk churn scores directly to sales and customer support tools to trigger proactive outreach."
        ]
      },
      promptLab: {
        title: "XGBoost Churn Prediction & Cohort Matrix Pipeline",
        description: "Generate a complete Python pipeline that creates a cohort retention triangle matrix and trains an XGBoost churn classifier with feature importances.",
        variables: [
          {
            name: "Business Type",
            label: "Business Type",
            options: ["B2B SaaS Subscription (Monthly & Annual)", "Mobile Consumer App (Freemium In-App Purchases)", "DTC E-Commerce Repeat Orders"],
            default: "B2B SaaS Subscription (Monthly & Annual)"
          },
          {
            name: "Prediction Window",
            label: "Prediction Window",
            options: ["Predict Churn in Next 30 Days", "Predict Churn in Next 90 Days", "Predict 14-Day Onboarding Drop-Off"],
            default: "Predict Churn in Next 30 Days"
          },
          {
            name: "Interpretability Method",
            label: "Interpretability Method",
            options: ["SHAP TreeExplainer Feature Attribution", "Native XGBoost Gain Feature Importance", "Permutation Importance Scores"],
            default: "SHAP TreeExplainer Feature Attribution"
          }
        ],
        template: `You are a principal data scientist specializing in customer churn modeling and behavioral retention analytics.

Write a complete Python machine learning and retention pipeline:
- Business Type: [Business Type]
- Prediction Window: [Prediction Window]
- Interpretability Method: [Interpretability Method]

Please provide:
1. Cohort Retention Matrix Function: Generating a triangle cohort table with seaborn heatmap visualization.
2. Feature Engineering & ML Pipeline: Building RFM features, handling class imbalance, and training XGBoost.
3. Model Evaluation & SHAP Interpretability: Computing ROC-AUC, classification report, and top churn risk drivers.`,
        expectedOutput: `### User Cohort Retention & Churn Prediction Pipeline

\`\`\`python
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, roc_auc_score

# 1. Cohort Retention Triangle Analysis
def build_cohort_retention_matrix(df_events: pd.DataFrame):
    """
    Expects df_events with ['user_id', 'event_timestamp'].
    Computes percentage of users active in subsequent months.
    """
    df_events["event_month"] = df_events["event_timestamp"].dt.to_period("M")
    df_events["cohort_month"] = df_events.groupby("user_id")["event_timestamp"]\\
        .transform("min").dt.to_period("M")

    cohort_data = df_events.groupby(["cohort_month", "event_month"])["user_id"]\\
        .nunique().reset_index()
    
    # Calculate month offset (Cohort Index: 0, 1, 2, ...)
    cohort_data["cohort_index"] = (
        (cohort_data["event_month"].dt.year - cohort_data["cohort_month"].dt.year) * 12 +
        (cohort_data["event_month"].dt.month - cohort_data["cohort_month"].dt.month)
    )

    cohort_pivot = cohort_data.pivot(index="cohort_month", columns="cohort_index", values="user_id")
    cohort_sizes = cohort_pivot.iloc[:, 0]
    retention_matrix = cohort_pivot.divide(cohort_sizes, axis=0) * 100

    # Render Heatmap
    plt.figure(figsize=(12, 6))
    sns.heatmap(retention_matrix, annot=True, fmt=".1f", cmap="Blues", vmin=0, vmax=100)
    plt.title("User Cohort Retention Triangle (% Active)")
    plt.ylabel("Acquisition Cohort")
    plt.xlabel("Months Since First Signup")
    plt.show()

# 2. XGBoost Churn Classifier
def train_churn_model(X: pd.DataFrame, y: pd.Series):
    """
    Trains XGBoost with class-imbalance weighting and reports ROC-AUC.
    """
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.25, random_state=42, stratify=y
    )

    # Calculate class weight: negative / positive samples
    scale_weight = (len(y_train) - y_train.sum()) / y_train.sum()

    model = XGBClassifier(
        n_estimators=150,
        max_depth=5,
        learning_rate=0.08,
        scale_pos_weight=scale_weight, # Handles imbalanced churn rates
        eval_metric="auc",
        random_state=42
    )

    model.fit(X_train, y_train)

    # 3. Model Evaluation
    y_preds = model.predict(X_test)
    y_probs = model.predict_proba(X_test)[:, 1]

    roc_auc = roc_auc_score(y_test, y_probs)
    print(f"=== MODEL PERFORMANCE ===")
    print(f"ROC-AUC Score: {roc_auc:.4f}")
    print("\\nClassification Report:")
    print(classification_report(y_test, y_preds, target_names=["Retained", "Churned"]))

    # Feature Importance
    importance_df = pd.DataFrame({
        "Feature": X.columns,
        "Gain": model.feature_importances_
    }).sort_values("Gain", ascending=False)
    print("\\nTop Churn Risk Indicators:")
    print(importance_df.head(5).to_string(index=False))

    return model
\`\`\``
      },
      conceptGuide: {
        title: "Cohort Disaggregation & Behavioral Decay Modeling",
        overview: "Aggregate company metrics mask customer life-cycle dynamics. When a high-growth startup celebrates 20% month-over-month revenue growth, that growth often conceals a leaky bucket: new customer acquisitions masking terrible churn among older cohorts. Cohort analysis isolates user groups by signup date, tracking how behavior decays over time. Machine learning models classify behavioral decay vectors, identifying early warning signals weeks before cancellation.",
        keyPoints: [
          "**The Retention Curve Plateau:** A healthy product's retention curve flattens out into a horizontal plateau; if the line slopes continuously toward zero, product-market fit does not exist.",
          "**Class Imbalance Realities:** Churn events are rare compared to active sessions; failing to adjust loss functions results in models that ignore churn entirely.",
          "**Actionable Early Warning Indicators:** Features like 'days since last login' and 'weekly drop in feature usage' are 10x more predictive than static customer demographic tags."
        ]
      },
      learning: {
        resources: [
          {
            title: "Scikit-Learn Classification Evaluation Metrics",
            url: "https://scikit-learn.org/stable/modules/model_evaluation.html",
            type: "Official Docs"
          },
          {
            title: "Mixpanel Retention Analysis Handbook",
            url: "https://mixpanel.com/topics/retention-analysis/",
            type: "Guide"
          },
          {
            title: "XGBoost Handling Imbalanced Datasets Guide",
            url: "https://xgboost.readthedocs.io/en/stable/tutorials/param_tuning.html",
            type: "Data Pipeline"
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Automated Web Scraping & Alternative Market Intelligence",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Aggregate competitor pricing, job board trends, and public sector tenders into continuous intelligence feeds.",
      description: "Internal company data only tells half the story. The most lucrative market opportunities are discovered by monitoring external alternative data: competitor pricing shifts, hiring surges on LinkedIn job boards, and government tender awards. Instead of writing brittle HTML parser scripts that break on every website layout update, modern data teams use AI-native scraping engines like Firecrawl and Apify to extract structured JSON feeds from arbitrary public websites automatically.",
      playbook: {
        setup: "Sign up for Firecrawl and Apify. Install scraping and extraction libraries: `pip install firecrawl-py apify-client beautifulsoup4`.",
        execute: "Configure Firecrawl to crawl target competitor product catalogs: pass the root domain and extract clean Markdown. Instruct Claude or an LLM structured output schema to extract product names, SKU prices, and discount percentages. Upsert the structured records into your DuckDB or PostgreSQL data warehouse.",
        verify: "Schedule an automated daily cron job via GitHub Actions. Confirm that price changes trigger automated alerts when a competitor cuts prices by 10%+."
      },
      tools: [
        {
          name: "Firecrawl",
          type: "Freemium",
          url: "https://www.firecrawl.dev",
          description: "API service that crawls entire websites, handles dynamic JavaScript rendering, and converts web pages into clean Markdown for LLMs.",
          bestFor: "Clean Markdown web scraping & structured LLM data extraction"
        },
        {
          name: "Apify",
          type: "Freemium",
          url: "https://apify.com",
          description: "Cloud web scraping platform offering pre-built Actors, residential proxy rotation, and scheduled crawlers for Amazon and LinkedIn.",
          bestFor: "Enterprise proxy rotation & pre-built social/e-commerce scrapers"
        },
        {
          name: "Beautiful Soup",
          type: "Free",
          url: "https://www.crummy.com/software/BeautifulSoup/",
          description: "Python library for pulling data out of HTML and XML files, navigating parse trees, and extracting target CSS selectors.",
          bestFor: "Custom lightweight HTML parsing & DOM extraction"
        }
      ],
      callouts: {
        mistake: "Scraping heavily protected websites without proxy rotation, triggering immediate IP bans and CAPTCHA challenge locks.",
        proTip: "Use Firecrawl's `scrape_url(url, formats=['markdown'])` to strip JavaScript ads and CSS clutter; it reduces input token size by over 80%.",
        mistakes: [
          "Hardcoding brittle CSS classes that break as soon as the target website pushes a minor frontend deploy.",
          "Violating website `robots.txt` rate limits, overloading target servers and risking legal cease-and-desist notices.",
          "Failing to track historical price changes over time, overwriting past data and losing price elasticity insights."
        ],
        proTips: [
          "Store scraped HTML snapshots in Amazon S3 or Cloudflare R2 before parsing; if your extraction logic changes, you can re-parse without re-scraping.",
          "Use residential proxy pools in Apify when scraping international e-commerce sites to view localized currency pricing accurately.",
          "Include an automated hash comparison on page content to only trigger LLM extraction when the page has actually changed."
        ]
      },
      promptLab: {
        title: "Firecrawl Structured Market Intelligence Extractor",
        description: "Scaffold a Python automated scraping script using Firecrawl and Pydantic structured outputs to extract competitor pricing matrices.",
        variables: [
          {
            name: "Target Domain",
            label: "Target Domain",
            options: ["Competitor E-Commerce Pricing & Inventory", "B2B Tech Job Board Hiring Surge", "Government Public Tender Postings"],
            default: "Competitor E-Commerce Pricing & Inventory"
          },
          {
            name: "Extraction Schema",
            label: "Extraction Schema",
            options: ["Pydantic Strict Type-Safe JSON Schema", "OpenAI Tool-Calling Structured Output", "Direct DuckDB Table Upsert"],
            default: "Pydantic Strict Type-Safe JSON Schema"
          },
          {
            name: "Alert Trigger",
            label: "Alert Trigger",
            options: ["Price Reduction Exceeds 10%", "New Product SKU Launched", "Out-of-Stock Status Detected"],
            default: "Price Reduction Exceeds 10%"
          }
        ],
        template: `You are a web scraping and alternative data intelligence engineer.

Write a complete market intelligence extraction script:
- Target Domain: [Target Domain]
- Extraction Schema: [Extraction Schema]
- Alert Trigger: [Alert Trigger]

Please provide:
1. Firecrawl Web Scraping Client: Handling JS rendering and converting DOM into clean Markdown.
2. Pydantic Structured Extraction Schema: Defining required fields, data types, and validation constraints.
3. Database Upsert & Alert Logic: Checking previous price history and flagging significant competitive movements.`,
        expectedOutput: `### Automated Competitor Pricing Extraction Pipeline

\`\`\`python
import os
from firecrawl import FirecrawlApp
from pydantic import BaseModel, Field
from typing import List, Optional
import duckdb

# 1. Define Strict Pydantic Extraction Schema
class ProductPriceItem(BaseModel):
    product_name: str = Field(description="Full commercial title of the product")
    current_price_usd: float = Field(description="Active selling price in USD")
    original_price_usd: Optional[float] = Field(description="Crossed-out list price before discount")
    in_stock: bool = Field(description="Whether the item is currently available to purchase")
    sku_identifier: Optional[str] = Field(description="SKU or model number if available")

class CompetitorCatalog(BaseModel):
    items: List[ProductPriceItem]

# 2. Firecrawl Scraping & LLM Structured Extraction
def scrape_competitor_pricing(target_url: str):
    app = FirecrawlApp(api_key=os.environ.get("FIRECRAWL_API_KEY"))
    
    print(f"Scraping and parsing {target_url} via Firecrawl...")
    scrape_result = app.scrape_url(
        target_url,
        params={
            "formats": ["extract"],
            "extract": {
                "schema": CompetitorCatalog.model_json_schema()
            }
        }
    )

    extracted_data = scrape_result.get("extract", {})
    catalog = CompetitorCatalog(**extracted_data)
    print(f"Extracted {len(catalog.items)} product SKUs.")

    # 3. Store in Analytical DuckDB & Check for Price Drops
    con = duckdb.connect("data/market_intelligence.duckdb")
    con.execute("""
        CREATE TABLE IF NOT EXISTS competitor_prices (
            product_name VARCHAR,
            price_usd DOUBLE,
            in_stock BOOLEAN,
            scraped_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)

    for item in catalog.items:
        # Check historical price for alert trigger
        previous_price = con.execute("""
            SELECT price_usd FROM competitor_prices 
            WHERE product_name = ? 
            ORDER BY scraped_at DESC LIMIT 1;
        """, [item.product_name]).fetchone()

        if previous_price and previous_price[0]:
            old_p = previous_price[0]
            if item.current_price_usd < old_p * 0.90: # Alert if 10%+ drop
                print(f"🚨 PRICE ALERT: '{item.product_name}' dropped from \${old_p:.2f} to \${item.current_price_usd:.2f}!")

        # Upsert record
        con.execute("""
            INSERT INTO competitor_prices (product_name, price_usd, in_stock) 
            VALUES (?, ?, ?);
        """, [item.product_name, item.current_price_usd, item.in_stock])

    con.close()
    print("Market intelligence database successfully updated.")

if __name__ == "__main__":
    scrape_competitor_pricing("https://competitor.com/collections/bestsellers")
\`\`\``
      },
      conceptGuide: {
        title: "Alternative Data Aggregation & Dynamic LLM Extraction",
        overview: "Traditional web scraping relied on static CSS selectors (`div.price-wrapper > span.amount`). When target websites adopt single-page React apps or change frontend frameworks, legacy scrapers immediately break. Modern alternative data pipelines leverage headless browsers that render JavaScript, convert the accessibility DOM tree into semantic Markdown, and use constrained LLM decoding to extract structured JSON matching strict Pydantic schemas.",
        keyPoints: [
          "**DOM-to-Markdown Compression:** Stripping script tags, styling attributes, and analytics trackers reduces page token size by 85% without losing semantic data.",
          "**Schema-Constrained Decoding:** Guaranteeing 100% type adherence via JSON Schema ensures downstream database upserts never fail on malformed strings.",
          "**Differential Scraping:** Hashing page content prevents redundant LLM parsing calls on static web pages, reducing scraping API costs."
        ]
      },
      learning: {
        resources: [
          {
            title: "Firecrawl Extraction API Documentation",
            url: "https://docs.firecrawl.dev",
            type: "Official Docs"
          },
          {
            title: "Apify Web Scraping Architecture Guide",
            url: "https://docs.apify.com",
            type: "Data Pipeline"
          },
          {
            title: "Legal & Ethical Web Scraping Guidelines (EFF)",
            url: "https://www.eff.org/issues/cfaa",
            type: "Guide"
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Interactive Executive Dashboards & Modern BI",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Designing clean, self-serve executive dashboards with drill-down filters and role-based data permissions.",
      description: "Data has zero business value if decision-makers cannot understand or act upon it. Executive BI dashboards must respect cognitive load: leaders need to understand company health in 10 seconds. Cluttered dashboards with 40 different line charts create analysis paralysis. Using modern, open-source BI platforms like Metabase and Apache Superset, data engineers design visual hierarchies featuring high-level KPI cards, interactive date/cohort filters, and automated scheduled Slack digests.",
      playbook: {
        setup: "Deploy Metabase or Apache Superset using Docker: `docker run -d -p 3000:3000 --name metabase metabase/metabase`. Connect to your PostgreSQL or Snowflake data warehouse.",
        execute: "Construct an Executive North Star Dashboard: 1) Top row with 4 high-level stat cards (MRR, MoM Growth, Active Users, Net Churn Rate), 2) Middle row with a 12-month revenue trend bar chart, and 3) Bottom section with an interactive customer cohort drill-down table. Configure field filters for global date range and plan tier.",
        verify: "Test the dashboard on both desktop and mobile screens: verify all numbers update instantly when toggling the date filter and confirm role-based permissions prevent sales reps from viewing unredacted executive payroll data."
      },
      tools: [
        {
          name: "Metabase",
          type: "Free",
          url: "https://www.metabase.com",
          description: "Simple, open-source business intelligence and dashboarding tool that lets anyone learn from data through visual query builders.",
          bestFor: "Clean self-serve company dashboards & interactive SQL questions"
        },
        {
          name: "Apache Superset",
          type: "Free",
          url: "https://superset.apache.org",
          description: "Enterprise-grade open-source data exploration and visualization platform supporting large-scale warehouses and rich geospatial charts.",
          bestFor: "Enterprise open-source data exploration & complex visualizations"
        },
        {
          name: "Tableau",
          type: "Paid",
          url: "https://www.tableau.com",
          description: "Leading visual analytics platform providing deep statistical formatting, calculated fields, and enterprise governance controls.",
          bestFor: "Complex enterprise calculations & corporate reporting"
        }
      ],
      callouts: {
        mistake: "Building 'kitchen sink' dashboards containing 30 disparate charts, causing decision-makers to ignore the tool due to cognitive overwhelm.",
        proTip: "Follow the 5-Second Rule: an executive should understand whether performance is good or bad within 5 seconds of glancing at the dashboard.",
        mistakes: [
          "Using non-zero baselines on bar charts, distorting visual differences and misleading leadership on relative performance.",
          "Writing un-indexed SQL queries directly inside BI card editors, causing dashboard load times to exceed 45 seconds.",
          "Failing to set up automated weekly Slack/email dashboard delivery, leaving reports unvisited in browser bookmark graveyards."
        ],
        proTips: [
          "Place primary KPI cards (Number + Delta % vs. Last Period) in the top row; our eyes naturally scan western web interfaces from top-left to bottom-right.",
          "Use green and red color indicators sparingly—only to highlight positive and negative variances compared to company targets.",
          "Set up Metabase Subscriptions to dispatch an automated screenshot digest to the executive Slack channel every Monday at 8:00 AM."
        ]
      },
      promptLab: {
        title: "Executive BI Dashboard Architecture & Metabase SQL Kit",
        description: "Scaffold an executive C-suite dashboard layout featuring North Star KPI cards, rolling growth calculations, and Metabase parameter filters.",
        variables: [
          {
            name: "Dashboard Scope",
            label: "Dashboard Scope",
            options: ["C-Suite Executive North Star (MRR, Churn, CAC, LTV)", "Marketing Acquisition & Paid ROAS Performance", "Product Team User Activation & Feature Funnels"],
            default: "C-Suite Executive North Star (MRR, Churn, CAC, LTV)"
          },
          {
            name: "BI Platform",
            label: "BI Platform",
            options: ["Metabase Open-Source Self-Hosted", "Apache Superset Cloud", "Tableau Online"],
            default: "Metabase Open-Source Self-Hosted"
          },
          {
            name: "Update Cadence",
            label: "Update Cadence",
            options: ["Hourly Pre-Aggregated Cache", "Real-Time Direct Query", "Daily Midnight Snapshot"],
            default: "Hourly Pre-Aggregated Cache"
          }
        ],
        template: `You are a principal business intelligence architect and dashboard design specialist.

Design a comprehensive Executive BI Dashboard:
- Dashboard Scope: [Dashboard Scope]
- BI Platform: [BI Platform]
- Update Cadence: [Update Cadence]

Please provide:
1. Visual Layout Grid: Blueprint of card placements, metric hierarchy, and mobile responsive adaptation.
2. Production Metabase SQL Query: For the primary North Star KPI card with dynamic date parameter filtering ({{date_range}}).
3. Executive Slack Digest Blueprint: Exact template for automated weekly summary dispatch.`,
        expectedOutput: `### Executive BI Dashboard Architecture (Metabase)

#### 1. Visual Layout Grid (12-Column Layout)
- **Row 1 (KPI Stat Cards - Height 3):**
  - Col 1–3: **Net Active MRR** (\`$142,500\` | \`+8.4% MoM\` in green).
  - Col 4–6: **Net Retention Rate** (\`114.2%\` | Target: \`>110%\`).
  - Col 7–9: **Active Paid Accounts** (\`1,840\` | \`+124\` net new).
  - Col 10–12: **Monthly User Churn** (\`1.82%\` | \`-0.3%\` improvement).
- **Row 2 (Main Trend - Height 6):**
  - Col 1–8: **12-Month Revenue Trajectory** (Stacked Bar Chart: Expansion vs. New vs. Churned MRR).
  - Col 9–12: **Revenue by Plan Tier** (Donut chart with clean legend).
- **Row 3 (Cohort Table - Height 6):**
  - Col 1–12: **12-Month Customer Retention Heatmap** with drill-down links to individual customer profiles.

#### 2. Metabase Production SQL Query (Primary KPI Card)
\`\`\`sql
-- Metabase Question: Active MRR with Date Filter
SELECT 
    DATE_TRUNC('month', s.started_at)::DATE AS period_month,
    SUM(s.mrr_cents / 100.0) AS active_mrr,
    -- Calculate MoM Growth Percentage
    ROUND(
        ((SUM(s.mrr_cents / 100.0) - LAG(SUM(s.mrr_cents / 100.0), 1) OVER (ORDER BY DATE_TRUNC('month', s.started_at))) 
        / NULLIF(LAG(SUM(s.mrr_cents / 100.0), 1) OVER (ORDER BY DATE_TRUNC('month', s.started_at)), 0)) * 100, 
        2
    ) AS mom_growth_pct
FROM fact_subscriptions s
WHERE 1=1
    [[AND {{date_range}}]] -- Metabase Field Filter Tag
    [[AND s.plan_tier = {{plan_filter}}]]
GROUP BY 1
ORDER BY 1 DESC;
\`\`\`

#### 3. Weekly Executive Slack Digest Template
\`\`\`markdown
🚀 *Executive Monday Digest — [Company Name]*
*Week Ending October 23, 2026*

📊 *North Star Metrics:*
• *Active MRR:* \$142,500 (+8.4% MoM) 🟢
• *Net Retention Rate (NRR):* 114.2% (Target: 110%) 🟢
• *Churn Rate:* 1.82% (Down from 2.12%) 🟢

💡 *Key Weekly Observation:*
Enterprise tier expansion revenue lifted overall NRR by 4.2% following the launch of the new SSO integration.

🔗 *View Full Interactive Dashboard:* <https://bi.yourcompany.com/dashboard/1-executive-overview>
\`\`\``
      },
      conceptGuide: {
        title: "Visual Hierarchy, Cognitive Load & The 5-Second Dashboard Rule",
        overview: "A dashboard is an executive communication instrument, not a database dump. Cognitive load theory states that human short-term working memory can only process four chunks of information simultaneously. High-converting BI dashboards use strict visual hierarchy: placing summary North Star indicators in the top row, providing context through trend charts in the middle, and placing granular tabular data at the bottom.",
        keyPoints: [
          "**The 5-Second Rule:** An executive must be able to glance at the dashboard and determine status without calculating numbers in their head.",
          "**Visual Context Framing:** A number without context is meaningless; always pair current metrics with historical benchmarks or company targets (e.g. '$142k (+8% vs Target)').",
          "**Automated Push vs. Pull:** Do not expect leaders to remember URLs; schedule automated Slack and email digests to push insights where team discussions already happen."
        ]
      },
      learning: {
        resources: [
          {
            title: "Metabase Dashboard Design Principles Guide",
            url: "https://www.metabase.com/learn/dashboards/dashboard-design-principles",
            type: "Official Docs"
          },
          {
            title: "Apache Superset Dashboard Best Practices",
            url: "https://superset.apache.org/docs/creating-charts-dashboards/exploring-data",
            type: "Guide"
          },
          {
            title: "Stephen Few's Information Dashboard Design Framework",
            url: "https://www.perceptualedge.com",
            type: "Data Pipeline"
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "Real-Time Anomaly Detection & Metric Alerting",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Set up automated watcher agents that trigger instant Slack/email alerts when key metrics deviate by 2+ standard deviations.",
      description: "Discovering that your payment gateway checkout broke on Saturday night by looking at a weekly Monday dashboard is a financial disaster. Modern data operations implement proactive statistical anomaly detection. Automated watcher scripts run continuous checks on critical metrics (e.g. conversion rates, API error counts, checkout completions). When a metric drifts beyond 2 or 3 standard deviations of its rolling hourly average, the system alerts on-call engineers via Slack Block Kit and PagerDuty.",
      playbook: {
        setup: "Install n8n or Python alerting environment: `pip install requests numpy pandas scipy`. Create a Slack Incoming Webhook in your engineering Slack workspace.",
        execute: "Build a statistical anomaly watcher script: calculate rolling 30-day hourly mean ($\mu$) and standard deviation ($\sigma$) for key metrics. Compute the active Z-Score ($Z = (x - \mu) / \sigma$). When $|Z| > 2.5$, construct an interactive Slack Block Kit message with error context, metric deltas, and an 'Acknowledge' button.",
        verify: "Inject simulated anomaly data (e.g. 0 checkouts in an hour). Confirm that an interactive Slack card posts within 60 seconds containing actionable diagnostic links."
      },
      tools: [
        {
          name: "n8n",
          type: "Freemium",
          url: "https://n8n.io",
          description: "Fair-code workflow automation tool that connects database queries, AI models, and communication webhooks seamlessly.",
          bestFor: "No-code event-driven metric alerting & Slack workflow automation"
        },
        {
          name: "Slack Webhooks",
          type: "Free",
          url: "https://api.slack.com",
          description: "Developer API for dispatching rich interactive Block Kit cards, buttons, and system alerts directly into team communication channels.",
          bestFor: "Interactive team anomaly alerting & incident notifications"
        },
        {
          name: "Python",
          type: "Free",
          url: "https://www.python.org",
          description: "General-purpose programming language for running automated cron scripts, statistical calculations, and database health monitors.",
          bestFor: "Automated statistical Z-score calculations & cron scripts"
        }
      ],
      callouts: {
        mistake: "Using static hardcoded thresholds (e.g., 'Alert if signups < 10') that trigger false alarms every Sunday night when traffic is naturally low.",
        proTip: "Use rolling day-of-week and hour-of-day baseline comparisons so Sunday night is evaluated strictly against historical Sunday nights.",
        mistakes: [
          "Spamming engineering channels with low-priority warnings, causing alert fatigue and leading the team to mute the channel.",
          "Sending cryptic alerts ('Error in table 4') without actionable links to logs or query dashboards.",
          "Failing to implement alert de-duplication, firing 100 identical Slack messages every minute during an active outage."
        ],
        proTips: [
          "Include an automated triage graph image in the Slack alert so responders can immediately assess whether the anomaly is a brief spike or a persistent outage.",
          "Implement a 'Cooldown Period' (e.g. 60 minutes) so once an incident is flagged, identical alerts are suppressed until resolved.",
          "Use Bollinger Bands (Rolling Mean $\pm$ 2x Rolling Std Dev) to adaptively widen alert tolerances during naturally volatile high-traffic shopping periods."
        ]
      },
      promptLab: {
        title: "Statistical Z-Score Anomaly Detector & Slack Block Kit Generator",
        description: "Scaffold a Python anomaly detection engine that computes dynamic Z-scores and dispatches formatted Slack Block Kit alert cards.",
        variables: [
          {
            name: "Metric Monitored",
            label: "Metric Monitored",
            options: ["E-Commerce Stripe Checkout Success Rate", "User Signup to Activation Conversion Rate", "AI Serverless API Latency & Error Spike"],
            default: "E-Commerce Stripe Checkout Success Rate"
          },
          {
            name: "Sensitivity Threshold",
            label: "Sensitivity Threshold",
            options: ["Z-Score > 2.5 (High Confidence Anomaly)", "Z-Score > 2.0 (Early Warning Indicator)", "Z-Score > 3.0 (Critical System Emergency)"],
            default: "Z-Score > 2.5 (High Confidence Anomaly)"
          },
          {
            name: "Notification Engine",
            label: "Notification Engine",
            options: ["Slack Interactive Block Kit Message", "Discord Webhook Embed", "PagerDuty Incident Event API"],
            default: "Slack Interactive Block Kit Message"
          }
        ],
        template: `You are an automated Site Reliability Engineer and DataOps alerting specialist.

Write a complete statistical anomaly detection script:
- Metric Monitored: [Metric Monitored]
- Sensitivity Threshold: [Sensitivity Threshold]
- Notification Engine: [Notification Engine]

Please provide:
1. Statistical Calculation Logic: Comparing current value against the same hour of week over the trailing 4 weeks.
2. Anomaly Evaluation: Computing Z-score and evaluating threshold triggers.
3. Formatted Dispatch Payload: Constructing a rich JSON payload with action buttons and color-coded alerts.`,
        expectedOutput: `### Statistical Anomaly Detection & Slack Block Kit Engine

\`\`\`python
import requests
import numpy as np
import os
import json

def evaluate_metric_anomaly(current_value: float, historical_values: list, metric_name: str):
    """
    Evaluates whether current_value deviates by > 2.5 standard deviations
    from the historical mean, and posts an interactive Slack card if triggered.
    """
    if len(historical_values) < 4:
        print("Insufficient historical baseline data.")
        return

    # 1. Statistical Moments
    mean_baseline = float(np.mean(historical_values))
    std_baseline = float(np.std(historical_values))
    
    if std_baseline == 0:
        std_baseline = 0.001 # Prevent division by zero

    # Calculate Z-Score
    z_score = (current_value - mean_baseline) / std_baseline
    pct_deviation = ((current_value - mean_baseline) / mean_baseline) * 100

    print(f"Metric: '{metric_name}' | Value: {current_value:.2f} | Baseline: {mean_baseline:.2f} | Z-Score: {z_score:.2f}")

    # 2. Anomaly Evaluation Trigger (|Z| > 2.5)
    if abs(z_score) >= 2.5:
        print(f"🚨 Statistical Anomaly Detected! Z-Score = {z_score:.2f}")
        dispatch_slack_alert(metric_name, current_value, mean_baseline, z_score, pct_deviation)
    else:
        print("Metric is within normal statistical tolerance.")

# 3. Interactive Slack Block Kit Dispatcher
def dispatch_slack_alert(metric: str, current: float, baseline: float, z: float, pct: float):
    webhook_url = os.environ.get("SLACK_ALERT_WEBHOOK_URL")
    if not webhook_url:
        print("Missing SLACK_ALERT_WEBHOOK_URL environment variable.")
        return

    severity_color = "#dc2626" if z < 0 else "#ea580c" # Red for drops, Orange for spikes
    direction = "DROPPED" if z < 0 else "SPIKED"

    slack_payload = {
        "text": f"🚨 Anomaly Alert: {metric} has {direction} significantly!",
        "blocks": [
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": f"🚨 METRIC ANOMALY: {metric.upper()}",
                    "emoji": True
                }
            },
            {
                "type": "section",
                "fields": [
                    {"type": "mrkdwn", "text": f"*Current Value:*\\n\`{current:,.2f}\`"},
                    {"type": "mrkdwn", "text": f"*Expected Baseline:*\\n\`{baseline:,.2f}\`"},
                    {"type": "mrkdwn", "text": f"*Deviation:*\\n*{pct:+.1f}%*"},
                    {"type": "mrkdwn", "text": f"*Z-Score:*\\n\`{z:+.2f} σ\` (Threshold: 2.5)"}
                ]
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {"type": "plain_text", "text": "View Live Dashboard"},
                        "url": "https://bi.yourcompany.com/metrics",
                        "style": "primary"
                    },
                    {
                        "type": "button",
                        "text": {"type": "plain_text", "text": "Acknowledge Incident"},
                        "action_id": "acknowledge_alert"
                    }
                ]
            }
        ]
    }

    response = requests.post(
        webhook_url,
        data=json.dumps(slack_payload),
        headers={"Content-Type": "application/json"}
    )
    if response.status_code == 200:
        print("Slack anomaly notification successfully posted.")
    else:
        print(f"Failed to post Slack alert: {response.text}")

if __name__ == "__main__":
    # Simulated checkout drop: Baseline is 95% with 2% std dev; current drops to 78%
    mock_history = [94.5, 96.2, 95.1, 94.8, 95.8, 95.0]
    evaluate_metric_anomaly(78.5, mock_history, "Stripe Checkout Success Rate (%)")
\`\`\``
      },
      conceptGuide: {
        title: "Dynamic Statistical Baselines & Alert Fatigue Prevention",
        overview: "Static alert thresholds fail in business applications because traffic patterns fluctuate throughout the day and week. A website receiving 10 signups at 3:00 AM on Sunday is healthy; receiving 10 signups at 2:00 PM on Tuesday is an emergency. Dynamic Z-score modeling compares the active measurement strictly against the same temporal bucket (e.g. historical Tuesday 2:00 PM observations), eliminating false alarms and preventing alert fatigue.",
        keyPoints: [
          "**The Z-Score Standard:** The Z-score measures how many standard deviations an observation lies from the historical mean: $Z = (x - \mu) / \sigma$.",
          "**Temporal Baseline Matching:** Always compare metrics against matching calendar intervals (e.g. comparing Black Friday only against historical holiday seasons).",
          "**Actionable Incident Workflows:** Alerts must include direct links to debugging dashboards and runbooks; an alert without a resolution path causes organizational stress."
        ]
      },
      learning: {
        resources: [
          {
            title: "Slack Block Kit Interactive Builder",
            url: "https://api.slack.com/block-kit",
            type: "Official Docs"
          },
          {
            title: "n8n Workflow Automation Architecture",
            url: "https://docs.n8n.io",
            type: "Data Pipeline"
          },
          {
            title: "Statistical Anomaly Detection Guide (Scipy)",
            url: "https://docs.scipy.org/doc/scipy/reference/stats.html",
            type: "Guide"
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "Autonomous Business Intelligence (BI) Decision Agents",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Build interactive chat agents that can run queries, generate interactive chart widgets, and draft weekly executive summary memos automatically.",
      description: "The frontier of business intelligence is shifting from static visual dashboards to autonomous conversational decision agents. Instead of submitting a data request ticket to an analyst and waiting 3 days, executives can ask conversational questions in natural language: 'Why did churn spike in Europe last week?' Using LangGraph and Claude Tool Calling, the AI agent plans a multi-step investigation: generating SQL queries, executing them against a database, isolating the root cause, and synthesizing a data-backed executive memo with interactive charts.",
      playbook: {
        setup: "Install agentic workflow dependencies: `pip install langgraph langchain-anthropic streamlit plotly duckdb`. Open Streamlit for interactive UI prototyping.",
        execute: "Construct a cyclic LangGraph decision agent: 1) Plan investigation steps, 2) Call read-only database query tools, 3) Analyze statistical results and detect anomalies, and 4) If results are inconclusive, formulate follow-up drill-down queries before presenting the final executive answer with an interactive Plotly chart.",
        verify: "Pose an ambiguous executive question in Streamlit (e.g. 'Identify our top 3 customer acquisition bottlenecks'). Verify that the agent executes at least 2 distinct validation queries before returning a factual, hallucination-free executive synthesis."
      },
      tools: [
        {
          name: "LangGraph",
          type: "Free",
          url: "https://www.langchain.com/langgraph",
          description: "Graph-based framework for building stateful, multi-actor LLM applications with cyclic reasoning, memory, and human-in-the-loop control.",
          bestFor: "Cyclic stateful multi-step analytical reasoning agents"
        },
        {
          name: "Claude Tool Calling",
          type: "Paid",
          url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use",
          description: "Anthropic's native function calling architecture for executing SQL queries, calling external APIs, and returning structured data outputs.",
          bestFor: "Accurate database tool dispatch & complex mathematical reasoning"
        },
        {
          name: "Streamlit",
          type: "Free",
          url: "https://streamlit.io",
          description: "Open-source Python framework that turns data scripts into shareable web apps with interactive charts, sliders, and chat widgets in minutes.",
          bestFor: "Building interactive conversational BI applications in Python"
        }
      ],
      callouts: {
        mistake: "Allowing an autonomous agent to execute SQL queries in an open loop without cycle limits, triggering run-away compute loops that rack up thousands in warehouse costs.",
        proTip: "Set `recursion_limit=5` in LangGraph to guarantee that the agent finishes its investigation within a maximum of 5 autonomous query cycles.",
        mistakes: [
          "Giving the agent raw database write or update permissions, risking accidental data corruption or table deletion.",
          "Failing to validate that generated queries execute against read-only warehouse replicas with strict timeout caps.",
          "Presenting raw SQL output tables to non-technical executives instead of synthesized narrative takeaways with clear action items."
        ],
        proTips: [
          "Force the agent to output citations: every number in the executive summary must reference the exact SQL query and row calculation that produced it.",
          "Equip the agent with an interactive Plotly chart tool so it can return interactive visualizations alongside textual executive summaries.",
          "Store conversation state in a persistent checkpointer (like LangGraph MemorySaver) so executives can ask follow-up questions with full conversational memory."
        ]
      },
      promptLab: {
        title: "Autonomous BI Decision Agent Graph Specification",
        description: "Scaffold a complete LangGraph analytical agent in Python that queries a database, checks for statistical significance, and outputs executive memos.",
        variables: [
          {
            name: "Agent Persona",
            label: "Agent Persona",
            options: ["Chief of Staff & Senior Data Strategist", "Quantitative Financial Risk Auditor", "Product Growth & Conversion Analyst"],
            default: "Chief of Staff & Senior Data Strategist"
          },
          {
            name: "Tool Sandbox",
            label: "Tool Sandbox",
            options: ["Read-Only DuckDB Engine + Plotly Visualizer", "Snowflake Cloud Warehouse API + Slack Publisher", "Postgres Read Replica + Python Code Interpreter"],
            default: "Read-Only DuckDB Engine + Plotly Visualizer"
          },
          {
            name: "Output Artifact",
            label: "Output Artifact",
            options: ["Executive Briefing Memo with Interactive Plotly Chart", "Automated Root-Cause Diagnostic Report", "C-Suite Presentation Slide Deck Outline"],
            default: "Executive Briefing Memo with Interactive Plotly Chart"
          }
        ],
        template: `You are a principal AI agent architect specializing in stateful multi-agent systems and LangGraph.

Build an autonomous Business Intelligence decision agent:
- Agent Persona: [Agent Persona]
- Tool Sandbox: [Tool Sandbox]
- Output Artifact: [Output Artifact]

Please provide:
1. LangGraph State Machine Architecture: Defining State TypedDict, tool nodes, and conditional routing edges.
2. Complete Python Implementation: Using \`langgraph\` and \`ChatAnthropic\` with native tool binding.
3. Executive Response Format: Factual synthesis, cited query evidence, and interactive chart JSON.`,
        expectedOutput: `### Autonomous BI Decision Agent (LangGraph + Claude)

\`\`\`python
from typing import TypedDict, Annotated, List
import operator
import duckdb
from langchain_core.messages import BaseMessage, HumanMessage, SystemMessage, ToolMessage
from langchain_core.tools import tool
from langchain_anthropic import ChatAnthropic
from langgraph.graph import StateGraph, END

# 1. Define Analytical Tools
@tool
def execute_sql_query(query: str) -> str:
    """Executes a read-only SQL query against the analytical DuckDB data warehouse."""
    try:
        con = duckdb.connect("data/warehouse.duckdb", read_only=True)
        # Enforce statement timeout and limit
        result = con.execute(f"/* agent_query */ {query}").fetchdf()
        con.close()
        return result.head(20).to_string(index=False)
    except Exception as e:
        return f"SQL Error: {str(e)}"

tools = [execute_sql_query]
model = ChatAnthropic(model="claude-3-7-sonnet-20250219", temperature=0.1).bind_tools(tools)

# 2. Define Agent State
class AgentState(TypedDict):
    messages: Annotated[List[BaseMessage], operator.add]
    iteration_count: int

# 3. Agent Nodes & Decision Logic
def query_planner_node(state: AgentState):
    """Plans the investigation and decides whether to run a SQL tool or return the final answer."""
    system_prompt = SystemMessage(content="""
    You are an autonomous Chief of Staff & Senior Data Strategist.
    When asked a business question:
    1. Formulate a hypothesis and run targeted SQL queries using 'execute_sql_query'.
    2. If results reveal an anomaly, investigate the underlying cause with a follow-up query.
    3. Once verified, formulate an executive brief with exact numerical citations.
    Never guess numbers; all data must be verified by tool execution.
    """)
    messages = [system_prompt] + state["messages"]
    response = model.invoke(messages)
    return {
        "messages": [response],
        "iteration_count": state.get("iteration_count", 0) + 1
    }

def tool_execution_node(state: AgentState):
    """Executes the tool call returned by the model."""
    last_message = state["messages"][-1]
    tool_messages = []
    for tool_call in last_message.tool_calls:
        if tool_call["name"] == "execute_sql_query":
            output = execute_sql_query.invoke(tool_call["args"])
            tool_messages.append(ToolMessage(
                content=str(output),
                tool_call_id=tool_call["id"]
            ))
    return {"messages": tool_messages}

def should_continue(state: AgentState):
    """Routes to tools if the model requested function execution, else terminates."""
    last_message = state["messages"][-1]
    if last_message.tool_calls and state.get("iteration_count", 0) < 5:
        return "tools"
    return END

# 4. Compile Graph
workflow = StateGraph(AgentState)
workflow.add_node("planner", query_planner_node)
workflow.add_node("tools", tool_execution_node)

workflow.set_entry_point("planner")
workflow.add_conditional_edges("planner", should_continue, {
    "tools": "tools",
    END: END
})
workflow.add_edge("tools", "planner")

app = workflow.compile()

# Example Invocation
if __name__ == "__main__":
    initial_input = {
        "messages": [HumanMessage(content="Why did our enterprise customer churn rate spike in September?")],
        "iteration_count": 0
    }
    for event in app.stream(initial_input):
        for key, value in event.items():
            print(f"--- Node: {key} ---")
\`\`\``
      },
      conceptGuide: {
        title: "Stateful Agent Graphs & Autonomous Decision Engineering",
        overview: "Simple linear LLM prompts cannot conduct open-ended data science investigations. Real diagnostic analysis is cyclic: observing an anomaly triggers a hypothesis, which prompts a new query, which reveals a hidden segment. LangGraph models this analytical process as a stateful cyclic directed graph. The agent maintains state memory, invokes read-only database tools safely, and iterates until statistical confidence thresholds are met.",
        keyPoints: [
          "**Cyclic State Loops:** Unlike simple linear chains, cyclic graphs allow the AI to inspect initial data outputs, notice unexpected variances, and formulate targeted follow-up queries.",
          "**Hard Recursion Limits:** Enforcing strict loop bounds (`max_iterations=5`) prevents runaway queries and safeguards warehouse compute budgets.",
          "**Grounded Citation Architecture:** Requiring the agent to bind all executive claims to verified tool output IDs eliminates hallucinations and ensures corporate auditability."
        ]
      },
      learning: {
        resources: [
          {
            title: "LangGraph Framework Documentation",
            url: "https://langchain-ai.github.io/langgraph/",
            type: "Official Docs"
          },
          {
            title: "Claude Native Function Calling Guide",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use",
            type: "Guide"
          },
          {
            title: "Streamlit Conversational Data Apps Tutorial",
            url: "https://docs.streamlit.io",
            type: "Data Pipeline"
          }
        ]
      }
    }
  ]
};
