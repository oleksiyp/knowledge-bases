---
type: Idea
title: "In-database machine learning (train and predict with SQL)"
description: "Train and serve ML models inside the database with SQL (MADlib, SQL Server ML Services, BigQuery ML, Redshift ML) so data never leaves. SQL-ML in cloud warehouses found a lasting niche for simple models and analysts. In-database training as a replacement for the Python ML stack failed: MADlib was terminated by Apache in September 2026, and by 2023–26 the 'ML in the database' energy moved to calling LLMs from SQL."
tags: [in-database-ml, sql, bigquery-ml, madlib, redshift-ml, analytics]
area: ml-for-db
verdict: mixed
hype_peak: 2019
adoption_2026: niche
origins: "MADlib (Hellerstein et al., VLDB 2012, Greenplum/Pivotal); Oracle Data Mining; SQL Server R Services (2016)."
key_systems: [systems/bigquery-ml, systems/madlib, systems/bigquery, systems/redshift, systems/snowflake-cortex, systems/postgresml]
related_ideas: [ideas/ml-for-db/instance-optimized-systems]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: bqml-blog
    resource: https://research.google/blog/machine-learning-in-google-bigquery/
    title: "Google Research blog: Machine Learning in Google BigQuery (2018-07-25)"
  - id: bqml-docs
    resource: https://cloud.google.com/bigquery/docs/bqml-introduction
    title: "Google Cloud: Introduction to ML in BigQuery"
  - id: redshift-ml-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2021/05/aws-announces-general-availability-of-amazon-redshift-ml
    title: "AWS: General availability of Amazon Redshift ML (2021-05-27)"
  - id: devclass-redshift-ml
    resource: https://www.devclass.com/ai-ml/2021/05/28/amazon-redshift-ml-available-train-and-operate-machine-learning-models-on-redshift-data/1624845
    title: "DevClass: Amazon Redshift ML available (2021-05-28)"
  - id: ml-server-retire
    resource: https://learn.microsoft.com/en-us/lifecycle/announcements/microsoft-machine-learning-server-retiring
    title: "Microsoft Lifecycle: Machine Learning Server retirement on July 1, 2022"
  - id: sqlmi-ml
    resource: https://learn.microsoft.com/is-is/azure/azure-sql/managed-instance/machine-learning-services-overview?view=azuresql
    title: "Microsoft Learn: Machine Learning Services in Azure SQL Managed Instance"
  - id: madlib-vote
    resource: http://www.mail-archive.com/dev@madlib.apache.org/msg05081.html
    title: "dev@madlib.apache.org: [RESULT][VOTE] Moving to the Attic (2026-09-03)"
  - id: madlib-minutes
    resource: https://whimsy.apache.org/board/minutes/MADlib.html
    title: "Apache Board minutes: MADlib"
  - id: madlib-attic-pr
    resource: https://github.com/apache/attic/pull/60
    title: "apache/attic PR #60: Retire madlib"
---

# Summary

**Verdict: mixed.** Two different products shared one name.

- **SQL-ML in cloud warehouses: a durable niche.** BigQuery ML (announced July 2018) lets analysts run `CREATE MODEL` for linear and logistic regression, k-means, boosted trees, time-series forecasting and imported TensorFlow/ONNX models.[^bqml-blog][^bqml-docs] Redshift ML (GA May 2021) does the same by sending data to SageMaker Autopilot behind the scenes.[^redshift-ml-ga] These features survive because they are cheap to offer and useful for analysts who know SQL but not Python. No vendor reports them as a major revenue line, and serious ML teams still train in Python on exported data.
- **In-engine ML libraries for data scientists: failed.** Apache MADlib, the reference project for in-database analytics on PostgreSQL and Greenplum, went quiet. Its board termination was tabled in 2022 and the project was rebooted in 2023, but in September 2026 the PMC voted to move to the Attic and the board terminated it.[^madlib-vote][^madlib-attic-pr] Microsoft retired Machine Learning Server in July 2022. SQL Server ML Services (R/Python inside the engine) survives but is no longer a strategic focus.[^ml-server-retire][^sqlmi-ml]

Starting in 2023, "ML inside the database" came to mean calling LLMs and embedding models from SQL (Snowflake Cortex, BigQuery `AI.GENERATE`, PostgresML). That is covered in the vector/AI area.

# The idea

Moving data to an ML system is slow, insecure and duplicative. If the database can train and score models where the data lives, analysts get ML with one language, governance stays in one place, and predictions can be used directly in queries and dashboards.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| Jul 2018 | Google announces BigQuery ML (`CREATE MODEL` in SQL) | + |
| 2019 | BigQuery ML reaches GA; k-means clustering and TensorFlow model import follow | + |
| 2021 | Redshift ML GA (May 2021), training via SageMaker Autopilot | + |
| Jul 2022 | Microsoft Machine Learning Server retired (SQL Server ML Services continues) | − |
| Oct 2022 | Apache board resolution to terminate MADlib for inactivity is tabled; project rebooted in March 2023 | − / + |
| 2023–2025 | Warehouses pivot "in-database AI" to LLM functions and vector search (Cortex, BigQuery Gemini functions) | ± |
| Feb 2025 | SQL Server Big Data Clusters (which bundled ML features) fully retired | − |
| Sep 2026 | MADlib PMC votes to move to the Attic; board terminates the project on 16 September | − |

# What succeeded

- **Lowering the barrier for analysts.** Predicting churn or forecasting a time series in SQL inside BigQuery is a real convenience for many analytics teams, and Google has kept adding model types for eight years.[^bqml-docs]
- **Pushing work to managed services.** Redshift ML's design, where SQL is the interface and SageMaker does the training, was pragmatic. The warehouse orchestrates and does not try to be an ML engine.[^devclass-redshift-ml]
- **Scoring in place.** Batch inference with `ML.PREDICT`-style functions inside pipelines is widely used. Imported models let teams train elsewhere and score in the warehouse.

# What failed

- **Replacing Python ML.** Data scientists stayed with pandas, scikit-learn, XGBoost, PyTorch and notebooks. Then dataframes and Spark/Databricks became the default ML platform. In-database libraries offered fewer algorithms, slower iteration and worse debugging.
- **Community-maintained in-database libraries.** MADlib depended on Pivotal/VMware engineers. When corporate support faded, the project could not sustain a PMC.[^madlib-minutes]
- **Deep learning in SQL engines.** Research systems for training neural networks inside an RDBMS did not become products. GPUs and ML frameworks advanced much faster than a database could integrate them.

# Why

1. **Different users, different tools.** The people who build models want Python's ecosystem and GPU access. The people who use SQL mostly want predictions. Products that served the second group (BigQuery ML) survived. Products aimed at the first (MADlib) did not.
2. **Moving data got cheap.** Lakehouses and open formats (Parquet, Iceberg) let ML frameworks read warehouse data directly. That removed the "don't move the data" argument.
3. **Pace of ML.** Algorithms, hardware and frameworks changed every year from 2018 to 2026. Database release cycles and SQL surfaces could not keep up, so in-DB ML was always a generation behind.
4. **LLMs reset the category.** When "AI in the database" came back in 2023, it meant calling hosted foundation models from SQL, not training in the engine.

# Lessons

- Embed what is stable (scoring, simple models, orchestration) and delegate what changes fast (training, model architectures) to specialized systems.
- An Apache project kept alive by one vendor's employees is fragile. MADlib shows the timeline: years of quiet, then the Attic.
- "Don't move the data" stops being a strong argument once open formats let every engine read the same files.

# Related

- [Instance-optimized systems](/ideas/ml-for-db/instance-optimized-systems.md)
- Systems: [BigQuery ML](/systems/bigquery-ml.md), [MADlib](/systems/madlib.md), [BigQuery](/systems/bigquery.md), [Redshift](/systems/redshift.md), [Snowflake Cortex](/systems/snowflake-cortex.md), [PostgresML](/systems/postgresml.md)
- Events: [BigQuery ML announced](/events/2018-07-bigquery-ml-announced.md), [Apache MADlib terminated](/events/2026-09-apache-madlib-terminated.md)

[^bqml-blog]: Google Research blog, 2018-07-25.
[^bqml-docs]: Google Cloud docs.
[^redshift-ml-ga]: AWS What's New, 2021-05-27.
[^devclass-redshift-ml]: DevClass, 2021-05-28.
[^ml-server-retire]: Microsoft Lifecycle.
[^sqlmi-ml]: Microsoft Learn: ML Services remains supported in SQL Server 2025 and Azure SQL MI; Big Data Clusters retired 2025-02-28.
[^madlib-vote]: MADlib dev list, 2026-09-03.
[^madlib-minutes]: Apache Whimsy board minutes.
[^madlib-attic-pr]: apache/attic PR #60 notes "Termination decided during board meeting on 2026-09-16".
