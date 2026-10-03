---
type: Event
title: "Snowflake announces Cortex (LLM functions in SQL)"
description: "At Snowday on 2023-11-01 Snowflake announced Cortex, a managed service exposing hosted LLMs as SQL/Python functions. It set the template for warehouses as the place where LLM inference over enterprise data runs."
date: 2023-11-01
year: 2023
kind: launch
signal: positive
ideas: [ideas/vector-ai/llm-functions-in-sql, ideas/vector-ai/text-to-sql]
systems: [systems/snowflake-cortex, systems/snowflake]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: launch
    resource: https://www.businesswire.com/news/home/20231101784861/en/Snowflake-Puts-Industry-Leading-Large-Language-and-AI-Models-in-the-Hands-of-All-Users-with-Snowflake-Cortex
    title: "Snowflake press release: Snowflake Cortex (2023-11-01)"
    author: org:snowflake
  - id: aisql
    resource: https://docs.snowflake.com/en/release-notes/2025/other/2025-06-02-cortex-aisql-public-preview
    title: "Snowflake release notes: Cortex AISQL public preview (2025-06-02)"
    author: org:snowflake
---

# What happened

Snowflake announced Cortex with serverless LLM functions (complete, summarize, extract answers, translate, sentiment) and ML functions callable from SQL, plus previews of Document AI, Snowflake Copilot (text-to-SQL) and Universal Search.[^launch]

# Why it matters

It established "LLMs as SQL functions" inside a governed warehouse. BigQuery and Databricks followed with their own AI functions. Snowflake extended it in June 2025 to semantic operators (Cortex AISQL).[^aisql] Contrast it with PostgresML's failed attempt to run models inside OLTP Postgres.

# Related

- [Snowflake Cortex](/systems/snowflake-cortex.md) · [LLM functions in SQL](/ideas/vector-ai/llm-functions-in-sql.md) · [PostgresML](/systems/postgresml.md)

[^launch]: Snowflake press release.
[^aisql]: Snowflake release notes.
