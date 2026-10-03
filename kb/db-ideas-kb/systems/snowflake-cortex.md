---
type: System
title: Snowflake Cortex
description: "Snowflake's managed AI layer: hosted LLMs callable as SQL functions (2023), Cortex Search, Cortex Analyst (text-to-SQL), and Cortex AISQL semantic operators (2025). The leading production example of LLMs inside a data platform."
resource: https://www.snowflake.com/en/product/features/cortex/
tags: [llm, sql, warehouse, semantic-operators, text-to-sql]
kind: cloud-service
first_release: 2023
org: "Snowflake Inc."
license: proprietary
outcome: growing
ideas: [ideas/vector-ai/llm-functions-in-sql, ideas/vector-ai/text-to-sql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: launch
    resource: https://www.businesswire.com/news/home/20231101784861/en/Snowflake-Puts-Industry-Leading-Large-Language-and-AI-Models-in-the-Hands-of-All-Users-with-Snowflake-Cortex
    title: "Snowflake: Snowflake Cortex announcement (2023-11-01)"
    author: org:snowflake
  - id: aisql
    resource: https://docs.snowflake.com/en/release-notes/2025/other/2025-06-02-cortex-aisql-public-preview
    title: "Snowflake release notes: Cortex AISQL public preview (2025-06-02)"
    author: org:snowflake
  - id: aisql-paper
    resource: https://arxiv.org/abs/2511.07663
    title: "Cortex AISQL: A Production SQL Engine for Unstructured Data (2025)"
  - id: arctic
    resource: https://www.snowflake.com/en/blog/engineering/arctic-text2sql-r1-sql-generation-benchmark/
    title: "Snowflake: Arctic-Text2SQL-R1"
    author: org:snowflake
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Snowflake announced Cortex at Snowday on 2023-11-01. It is a fully managed service exposing LLM functions (complete, summarize, translate, extract and others, backed by models such as Mistral and Llama) and ML functions from SQL, plus Document AI and Snowflake Copilot previews.[^launch] In 2024 Snowflake trained its own Arctic LLM and stressed "enterprise tasks like SQL generation".[^pavlo-2024] At Summit in June 2025 it introduced **Cortex AISQL**: `AI_COMPLETE`, `AI_FILTER`, `AI_JOIN`, `AI_CLASSIFY`, `AI_AGG` as first-class SQL operators.[^aisql] Its production paper reports AI-aware optimization (2–8x), model cascades (2–6x at 90–95% of oracle quality) and semantic-join rewriting (15–70x).[^aisql-paper]

# Timeline

| Date | Event |
|---|---|
| 2023-11 | Cortex announced[^launch] |
| 2024-04 | Arctic LLM; SQL generation emphasis[^pavlo-2024] |
| 2025-06 | Cortex AISQL public preview[^aisql] |
| 2025 | Arctic-Text2SQL-R1 tops BIRD; AISQL paper (Nov)[^arctic][^aisql-paper] |

# What worked

- It turned LLM inference into a governed, billable warehouse workload with no data egress.
- It did real query-optimizer research on semantic operators instead of naive per-row calls.[^aisql-paper]

# What didn't

- The Arctic foundation-model effort did not make Snowflake an LLM vendor. Cortex mostly serves third-party models.
- Cost unpredictability of per-row LLM calls remains a customer concern, which is why the optimizer work matters.

# Related

- [LLM functions in SQL](/ideas/vector-ai/llm-functions-in-sql.md) · [Text-to-SQL](/ideas/vector-ai/text-to-sql.md) · [Snowflake](/systems/snowflake.md)
- Event: [Snowflake Cortex launch](/events/2023-11-snowflake-cortex-launch.md)

[^launch]: Snowflake press release.
[^aisql]: Snowflake release notes.
[^aisql-paper]: arXiv 2511.07663.
[^arctic]: Snowflake engineering blog.
[^pavlo-2024]: Pavlo, 2024 review.
