---
type: Idea
title: "LLMs inside the database: AI functions and semantic operators in SQL"
description: "Call LLMs from SQL (AI_COMPLETE, AI_FILTER, AI.GENERATE) to classify, extract, summarize and join unstructured data where it lives. It is winning in cloud warehouses (Snowflake Cortex, BigQuery, Databricks), which own both the data and the inference bill. The OLTP-side version, running models inside Postgres (PostgresML), failed. Cost and nondeterminism are now query-optimizer problems."
tags: [llm, sql, semantic-operators, warehouses, inference]
area: vector-ai
verdict: winning
hype_peak: 2025
adoption_2026: common
origins: "In-database ML (MADlib, SQL Server ML Services, BigQuery ML 2018) predates LLMs. Snowflake Cortex (Nov 2023) brought hosted LLMs to SQL."
key_systems: [systems/snowflake-cortex, systems/bigquery-ml, systems/postgresml, systems/snowflake, systems/databricks]
related_ideas: [ideas/vector-ai/text-to-sql, ideas/ml-for-db/in-database-ml, ideas/vector-ai/rag-stack-consolidation-and-graphrag]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: cortex-launch
    resource: https://www.businesswire.com/news/home/20231101784861/en/Snowflake-Puts-Industry-Leading-Large-Language-and-AI-Models-in-the-Hands-of-All-Users-with-Snowflake-Cortex
    title: "Snowflake: Snowflake Cortex announcement (2023-11-01)"
    author: org:snowflake
  - id: aisql-preview
    resource: https://docs.snowflake.com/en/release-notes/2025/other/2025-06-02-cortex-aisql-public-preview
    title: "Snowflake release notes: Cortex AI Functions (AISQL) public preview (2025-06-02)"
    author: org:snowflake
  - id: aisql-paper
    resource: https://arxiv.org/abs/2511.07663
    title: "Liskowski et al.: Cortex AISQL: A Production SQL Engine for Unstructured Data (2025)"
  - id: lotus
    resource: https://arxiv.org/abs/2407.11418
    title: "Patel et al.: Semantic Operators: A Declarative Model for Rich, AI-based Data Processing (LOTUS; VLDB 2025)"
  - id: bq-ai
    resource: https://cloud.google.com/blog/products/data-analytics/new-bigquery-gen-ai-functions-for-better-data-analysis
    title: "Google Cloud: New BigQuery gen AI functions for better data analysis"
    author: org:google
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: pgml-pigsty
    resource: https://pigsty.io/docs/pgsql/kernel/pgml/
    title: "Pigsty docs: PostgresML (deprecated; company ceased operations)"
  - id: pgml-gh
    resource: https://github.com/postgresml/postgresml
    title: "postgresml/postgresml GitHub repository (last push 2025-07-01)"
---

# Summary

**Verdict: winning (in warehouses).** Snowflake announced Cortex in November 2023, bringing hosted LLMs to SQL functions.[^cortex-launch] It extended this in June 2025 into Cortex AISQL, with operators such as `AI_FILTER`, `AI_JOIN`, `AI_CLASSIFY` and `AI_AGG`.[^aisql-preview] Google made BigQuery's `AI.GENERATE` functions GA in early 2026.[^bq-ai] Research formalized the idea as "semantic operators" (LOTUS, Stanford/Berkeley).[^lotus] Snowflake's production paper describes cost-aware optimization: model cascades and join rewrites give 2–70x speedups, because LLM calls dominate query cost.[^aisql-paper] The bottom-up version failed. PostgresML ran models inside Postgres and shut down in 2025, unable to persuade users to move their databases to its hosted platform.[^pavlo-2025][^pgml-pigsty]

# The idea

Treat an LLM as a scalar, predicate, aggregate or join function. `SELECT ... WHERE AI_FILTER('is this complaint about billing?', ticket_text)` lets analysts process text, images and PDFs with SQL, with no data export and no separate pipeline. The database schedules inference, batches it, caches results and, ideally, optimizes it.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | BigQuery ML: train/predict classic models in SQL (ML-in-DB precursor) | + |
| 2022 | PostgresML founded: run models and embeddings inside Postgres[^pgml-gh] | + |
| 2023 | Snowflake Cortex announced (Nov 1): LLM functions such as COMPLETE, SUMMARIZE, TRANSLATE[^cortex-launch] | + |
| 2024 | LOTUS / semantic operators paper (Jul) proposes a declarative model with up to 1,000x optimizations[^lotus] | + |
| 2025 | Cortex AISQL public preview (Jun 2); PostgresML shuts down (repo last pushed Jul 2025); AISQL production paper (Nov)[^aisql-preview][^pgml-gh][^aisql-paper] | ± |
| 2026 | BigQuery AI.GENERATE / AI.GENERATE_TABLE GA; AI.IF and AI.CLASSIFY in preview[^bq-ai] | + |

# What succeeded

- **Warehouses as the inference venue.** Data stays governed, and SQL users get NLP without Python. The vendor sells both compute and tokens.
- **Optimizer research found real gains.** Proxy-model cascades keep 90–95% of oracle quality at 2–6x speedup, and semantic joins rewritten as classification run 15–70x faster.[^aisql-paper]
- **Batch enrichment** (classification, extraction, sentiment over millions of rows) is the killer use case. It is tolerant of latency and of some error.

# What failed

- **LLMs inside OLTP Postgres.** GPUs and model weights do not belong in the transactional primary. PostgresML's hosted-database pitch asked users to migrate their database to get a feature.[^pavlo-2025]
- **Cost predictability.** A query whose cost depends on per-row LLM calls can cost thousands of dollars by accident. Optimizers do not know selectivity or cost at compile time.[^aisql-paper]
- **Determinism.** The same query can return different results across runs and model versions, which breaks assumptions behind caching, testing and audits.

# Why

1. **Data gravity plus billing.** Warehouses already hold the unstructured data in stages and tables, and adding inference raises revenue per query. An OLTP extension cannot offer the GPU capacity.
2. **Separation of concerns.** Inference wants elastic GPU pools; transactional databases want predictable CPU and memory. The winning designs call out to a model service, they do not embed it.
3. **Product, not extension.** PostgresML needed users to change where their database runs. Snowflake and BigQuery needed users to change nothing.

# Lessons

- Put AI functions where the data and elastic compute already are. Do not embed heavy inference in the transactional engine.
- When a new operator dominates query cost, the optimizer must model it explicitly (cost, selectivity, quality).
- "Move your database to get feature X" rarely works when X can be bolted onto the user's existing database.

# Related

- [Text-to-SQL](/ideas/vector-ai/text-to-sql.md) · [In-database ML](/ideas/ml-for-db/in-database-ml.md)
- Systems: [Snowflake Cortex](/systems/snowflake-cortex.md), [PostgresML](/systems/postgresml.md), [BigQuery ML](/systems/bigquery-ml.md)
- Events: [Snowflake Cortex launch](/events/2023-11-snowflake-cortex-launch.md)

[^cortex-launch]: Snowflake press release via Business Wire.
[^aisql-preview]: Snowflake release notes.
[^aisql-paper]: arXiv 2511.07663.
[^lotus]: arXiv 2407.11418.
[^bq-ai]: Google Cloud blog (GA announced January 2026).
[^pavlo-2025]: Pavlo, 2025 review.
[^pgml-pigsty]: Pigsty extension docs.
[^pgml-gh]: GitHub API.
