---
type: Trend
title: AI agents became open source's biggest customer
description: "From 2025 to 2026 the fastest-growing users of OSS infrastructure were AI coding agents rather than humans: they create most new databases, run toolchains in tight loops, and drove the steepest valuation climbs in the period."
tags: [ai, agents, business-model, databases, devtools, cross-domain]
strength: dominant
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
domains: [databases, cloud-native, devtools-languages, data-engineering, coss-market, ai-agents]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: supabase-f
    resource: https://supabase.com/blog/supabase-series-f
    title: "Supabase Series F (2026-06-04)"
  - id: temporal-e
    resource: https://temporal.io/blog/temporal-raises-usd550m-series-e-at-usd12-55b-valuation-ai
    title: "Temporal Series E at $12.55B (2026-09-14)"
  - id: turso-supabase
    resource: https://turso.tech/blog/turso-is-joining-supabase
    title: "Turso is joining Supabase (2026-10-02)"
  - id: yf-neon
    resource: https://finance.yahoo.com/news/databricks-buy-startup-neon-1-094745186.html
    title: "Databricks to buy Neon for ~$1B (May 2025)"
  - id: astral-openai
    resource: https://astral.sh/blog/openai
    title: "Astral to join OpenAI (2026-03-19)"
---

# Summary

The biggest single driver of OSS business success in this period was **machine consumption**. Programmatic, usage-priced, open-core infrastructure became the default target of code-generating agents. The companies whose open source sat in that path saw the steepest valuation climbs of the two years. Supabase went from $2B to $10.5B in about 14 months and said more than 60% of new databases are launched by AI tools.[^supabase-f] Temporal went from $5B to $12.55B in seven months on agent workloads.[^temporal-e] Databricks bought Neon, where agents reportedly created more than 80% of databases.[^yf-neon]

# Evidence

| Domain | Evidence | Link |
|---|---|---|
| Databases | Agents create most new Postgres instances; Supabase acquires Turso (SQLite-per-agent) | [Supabase](/projects/databases/supabase.md), [Turso deal](/events/2026-10-supabase-acquires-turso.md)[^turso-supabase] |
| Databases | Databricks–Neon (~$1B) and Snowflake–Crunchy: the "Postgres for agents" land grab | [Neon deal](/events/2025-05-databricks-acquires-neon.md), [Crunchy deal](/events/2025-06-snowflake-acquires-crunchy-data.md) |
| Cloud native | Durable execution for agent loops | [Temporal](/projects/cloud-native/temporal.md), [Series E](/events/2026-09-temporal-series-e.md) |
| Devtools | Fast single-binary tools matter because agents run them thousands of times; AI labs bought them | [uv](/projects/devtools-languages/uv.md), [Bun](/projects/devtools-languages/bun.md)[^astral-openai] |
| Data | Databricks reached a $190B valuation; every vendor pitches an "agentic data plane" | [Databricks $190B](/events/2026-08-databricks-190b-valuation.md) |
| AI agents | MCP made every OSS project's API an agent tool | [MCP](/projects/ai-agents/model-context-protocol.md) |

# Why it matters

- **Distribution moved.** Before, a developer chose a tool from docs and GitHub stars. Now an agent chooses it from training data and tool registries. Projects that are well represented in model training data and easy to provision through an API get chosen by default.
- **Seat-based and docs-funnel business models broke at the same time.** See [AI broke some OSS monetization](/trends/ai-breaks-oss-monetization.md).
- **Pricing has to follow usage.** Scale-to-zero, branching and per-database pricing became core features.

# Counter-evidence and risks

- Agent-created databases are often short-lived and free-tier. Revenue per database is unproven at scale.
- Concentration risk: a few coding-agent vendors now decide which OSS gets used.

# Related

- [Consolidation by AI labs and compute owners](/trends/ai-labs-and-compute-owners-buy-the-stack.md)
- [Domain review: databases](/domains/databases.md), [COSS market](/domains/coss-market.md)

[^supabase-f]: Supabase Series F blog post.
[^temporal-e]: Temporal Series E announcement.
[^turso-supabase]: Turso blog.
[^yf-neon]: Reuters via Yahoo Finance.
[^astral-openai]: Astral blog.
