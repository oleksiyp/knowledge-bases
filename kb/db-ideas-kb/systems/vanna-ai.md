---
type: System
title: Vanna AI
description: "MIT-licensed Python RAG framework for text-to-SQL (2023) that reached about 24k GitHub stars. The company shipped an agent-based 2.0 in late 2025 and archived the open-source repository in 2026. A typical arc for a standalone text-to-SQL tool."
resource: https://vanna.ai
tags: [text-to-sql, rag, open-source, python]
kind: oss
first_release: 2023
org: "Vanna AI"
license: MIT
outcome: pivoted
ideas: [ideas/vector-ai/text-to-sql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/vanna-ai/vanna
    title: "vanna-ai/vanna GitHub repository (archived; ≈23.8k stars, 2026-10-03)"
  - id: site
    resource: https://vanna.ai/
    title: "Vanna 2.0 website"
    author: org:vanna-ai
  - id: why
    resource: https://vanna.ai/docs/why-we-built-this
    title: "Vanna docs: Why we built this"
    author: org:vanna-ai
  - id: tai
    resource: https://pub.towardsai.net/i-turned-an-archived-23k-star-text-to-sql-project-into-a-self-hosted-tool-that-actually-works-out-b08abcb6d0e3
    title: "Towards AI: I turned an archived 23K-star text-to-SQL project into a self-hosted tool"
---

# Summary

Vanna trained a retrieval index on a database's DDL, documentation and known-good question/SQL pairs, then used an LLM to generate SQL for new questions. It worked with many databases and LLMs and became one of the most-starred open-source text-to-SQL projects.[^gh] In late 2025 it released Vanna 2.0, rewritten as a user-aware agent framework with row-level security and audit logging, and sold cloud, self-hosted enterprise and embedded editions.[^site] The GitHub repository is now archived and read-only (about 23.8k stars), with commercial development continuing.[^gh][^tai]

# Timeline

| Date | Event |
|---|---|
| 2023-05 | Repository created[^gh] |
| 2025 | Vanna 2.0: agent architecture, enterprise security features[^site] |
| 2026 | Open-source repository archived (reported as 2026-03-29)[^gh][^tai] |

# What worked

- Its core insight was right: curated question/SQL examples matter more than the model. Retrieval of verified examples is how production text-to-SQL works.
- Very fast community uptake.

# What didn't

- Text-to-SQL became a built-in feature of warehouses and BI tools. A standalone library had little to sell beyond enterprise controls.
- Its move from a simple library to an agent framework, followed by archiving the OSS repo, left community users maintaining forks.[^tai]

# Related

- [Text-to-SQL](/ideas/vector-ai/text-to-sql.md) · [Snowflake Cortex](/systems/snowflake-cortex.md)

[^gh]: GitHub API.
[^site]: Vanna website.
[^why]: Vanna docs.
[^tai]: Towards AI article.
