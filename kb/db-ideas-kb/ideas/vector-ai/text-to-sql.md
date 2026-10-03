---
type: Idea
title: "Text-to-SQL and natural-language interfaces to databases"
description: "Let users ask questions in English and have an LLM write the SQL. Accuracy on academic benchmarks went from poor to over 90%, and every warehouse ships a 'talk to your data' feature. But on enterprise-scale schemas, success rates at launch of Spider 2.0 were about 21%, the benchmarks themselves turned out to be about half wrong, and standalone text-to-SQL startups mostly folded into bigger products. Verdict: mixed."
tags: [text-to-sql, nl2sql, llm, benchmarks, bi]
area: vector-ai
verdict: mixed
hype_peak: 2024
adoption_2026: common
origins: "Natural-language interfaces to databases date to the 1970s (LUNAR, LADDER). Spider (Yale, EMNLP 2018) began the modern benchmark era."
key_systems: [systems/vanna-ai, systems/snowflake-cortex, systems/snowflake, systems/databricks]
related_ideas: [ideas/vector-ai/llm-functions-in-sql, ideas/vector-ai/ai-agents-as-database-users]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: spider2
    resource: https://arxiv.org/abs/2411.07763
    title: "Lei et al.: Spider 2.0: Evaluating Language Models on Real-World Enterprise Text-to-SQL Workflows (ICLR 2025)"
  - id: spider2-gh
    resource: https://github.com/xlang-ai/Spider2
    title: "Spider 2.0 GitHub repository (news log)"
  - id: broken
    resource: https://arxiv.org/abs/2601.08778
    title: "Jin, Choi, Zhu, Kang: Pervasive Annotation Errors Break Text-to-SQL Benchmarks and Leaderboards (CIDR 2026)"
  - id: agentar
    resource: https://arxiv.org/abs/2509.24403
    title: "Agentar-Scale-SQL: Advancing Text-to-SQL through Orchestrated Test-Time Scaling (2025)"
  - id: revisql
    resource: https://arxiv.org/abs/2603.20004
    title: "ReViSQL: Human-Level Text-to-SQL via Reinforcement Learning on Verified Data (2026)"
  - id: arctic-t2s
    resource: https://www.snowflake.com/en/blog/engineering/arctic-text2sql-r1-sql-generation-benchmark/
    title: "Snowflake: Arctic-Text2SQL-R1 tops BIRD"
    author: org:snowflake
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: vanna-gh
    resource: https://github.com/vanna-ai/vanna
    title: "vanna-ai/vanna GitHub repository (archived; ≈24k stars)"
  - id: cortex-launch
    resource: https://www.businesswire.com/news/home/20231101784861/en/Snowflake-Puts-Industry-Leading-Large-Language-and-AI-Models-in-the-Hands-of-All-Users-with-Snowflake-Cortex
    title: "Snowflake: Snowflake Cortex announcement incl. Snowflake Copilot (2023-11-01)"
    author: org:snowflake
---

# Summary

**Verdict: mixed.** Text-to-SQL is the most demoed and least trusted LLM-database idea. On the original Spider benchmark, models reached about 91% execution accuracy. On BIRD, the best systems reached about 81–82% by late 2025, against a human baseline of 92.96%.[^spider2][^agentar] Spider 2.0 (ICLR 2025) used real enterprise schemas with 1,000+ columns across BigQuery and Snowflake, and the best o1-preview agent solved only 21.3% of tasks.[^spider2] Then a CIDR 2026 paper found that 52.8% of BIRD Mini-Dev and 62.8% of Spider 2.0-Snow annotations are wrong. Correcting them reshuffled leaderboard ranks by up to ±9 positions.[^broken] Every warehouse now ships an NL query assistant, and analysts do use LLMs to draft SQL. "Business users ask the database directly" remains unreliable without a curated semantic layer and a human check. Standalone startups mostly sold out or stalled.[^pavlo-2025][^vanna-gh]

# The idea

Schema plus question goes to an LLM, which returns SQL; the database executes it and returns the answer. Production systems add schema linking (picking relevant tables), retrieval of example queries, self-correction from execution errors, and increasingly agent loops that explore the database before answering.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | Spider benchmark (Yale) defines cross-domain text-to-SQL | + |
| 2023 | LLMs (GPT-4) become the default text-to-SQL approach; BIRD (larger, dirtier databases) released; Vanna, DataChat and many "chat with your data" startups; Snowflake Copilot announced[^cortex-launch] | + |
| 2024 | Snowflake pitches its Arctic LLM for SQL generation; Spider 2.0 shows ~21% success on enterprise workflows[^pavlo-2024][^spider2] | − |
| 2025 | Reasoning/RL models: Arctic-Text2SQL-R1, Agentar reach ~81.7% on BIRD test; DataChat acquired by hotel software firm Mews[^arctic-t2s][^agentar][^pavlo-2025] | ± |
| 2026 | "Benchmarks are broken" (CIDR); ReViSQL claims 93.2% on a verified BIRD subset; Vanna's OSS repo archived (Mar); Spider 2.0-Snow evaluation disrupted by an account suspension (Aug)[^broken][^revisql][^vanna-gh][^spider2-gh] | − |

# What succeeded

- **SQL drafting for people who already know SQL.** Copilot-style completion in notebooks, IDEs and warehouse UIs is everyday tooling. Errors get caught by the analyst.
- **Narrow, curated domains.** With a semantic layer, verified example queries and a limited set of tables, accuracy is high enough for self-serve analytics. Vendors steer customers toward exactly this setup.
- **Research progress is real.** RL fine-tuning on verified data and test-time scaling took small open models to the top of BIRD.[^arctic-t2s][^revisql]

# What failed

- **Enterprise-scale schemas.** Spider 2.0's real schemas, dialects and multi-step workflows exposed a large gap between demos and production.[^spider2]
- **Benchmarks as evidence.** With more than half of gold answers wrong in two flagship benchmarks, leaderboard positions mostly measured noise. Rank correlation between original and corrected sets fell from 0.85 to 0.32.[^broken]
- **Standalone businesses.** Text-to-SQL became a feature of warehouses and BI tools. DataChat was sold to a hotel-software company, and Vanna archived its open-source repo in 2026 to focus on a commercial product.[^pavlo-2025][^vanna-gh]

# Why

1. **The hard part is semantics, not syntax.** "Revenue" or "active customer" lives in tribal knowledge, not the schema. LLMs write valid SQL that answers the wrong question, and users cannot tell.
2. **Silent wrong answers are worse than errors.** An execution error is visible, while a plausible wrong number is not. Trust collapses after the first one.
3. **Distribution.** The warehouse already holds the metadata, query logs and permissions, so it can ground the model better than a third party can.
4. **Evaluation debt.** Without trustworthy benchmarks, vendors and researchers optimized for leaderboards rather than for correctness.[^broken]

# Lessons

- Natural-language interfaces need a semantic contract (metrics layer, verified queries). The LLM can translate meaning only if someone has defined it.
- Audit the benchmark before trusting the leaderboard.
- A capability that depends on the platform's metadata ends up as a platform feature.

# Related

- [LLM functions in SQL](/ideas/vector-ai/llm-functions-in-sql.md) · [AI agents as database users](/ideas/vector-ai/ai-agents-as-database-users.md)
- Papers: [Spider 2.0](/papers/2025-spider-2.md), [Text-to-SQL benchmarks are broken](/papers/2026-text-to-sql-benchmarks-broken.md)
- Systems: [Vanna AI](/systems/vanna-ai.md), [Snowflake Cortex](/systems/snowflake-cortex.md)

[^spider2]: Spider 2.0 paper abstract.
[^spider2-gh]: Spider 2.0 repository news log.
[^broken]: arXiv 2601.08778 / CIDR 2026.
[^agentar]: Agentar-Scale-SQL paper.
[^revisql]: ReViSQL paper.
[^arctic-t2s]: Snowflake engineering blog.
[^pavlo-2024]: Pavlo, 2024 review.
[^pavlo-2025]: Pavlo, 2025 review.
[^vanna-gh]: GitHub; repository archived 2026-03-29.
[^cortex-launch]: Snowflake press release.
