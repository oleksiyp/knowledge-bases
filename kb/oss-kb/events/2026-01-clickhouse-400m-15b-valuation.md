---
type: Event
title: "ClickHouse raises $400M at ~$15B and buys Langfuse"
description: "On 2026-01-16 ClickHouse raised a $400M Series D led by Dragoneer at ~$15B (more than double its prior valuation) and acquired open source LLM-observability startup Langfuse."
event_kind: funding
date: 2026-01-16
window: W9
impact: positive
projects: [projects/databases/clickhouse]
organizations: [organizations/clickhouse-inc]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bbg-clickhouse
    resource: "https://www.bloomberg.com/news/articles/2026-01-16/clickhouse-lands-15-billion-valuation-in-ai-database-race"
    title: "Bloomberg: ClickHouse lands $15B valuation in AI database race (2026-01-16)"
  - id: sa-clickhouse
    resource: "https://siliconangle.com/2026/01/16/database-maker-clickhouse-raises-400m-acquires-ai-observability-startup-langfuse/"
    title: "SiliconANGLE: ClickHouse raises $400M, acquires Langfuse (2026-01-16)"
  - id: db-ch-langfuse
    resource: https://clickhouse.com/blog/clickhouse-acquires-langfuse-open-source-llm-observability
    title: "ClickHouse welcomes Langfuse (2026-01-16)"
  - id: tc-clickhouse-arr
    resource: https://techcrunch.com/2026/05/27/clickhouse-triples-annualized-revenue-to-250m-charting-a-path-toward-an-ipo/
    title: "TechCrunch: ClickHouse triples annualized revenue to $250M, charting a path toward an IPO (2026-05-27)"
    author: org:techcrunch
  - id: db-vktr-pg
    resource: https://www.vktr.com/ai-news/clickhouse-raises-400m-acquires-langfuse-launches-postgres-service/
    title: "VKTR: ClickHouse Raises $400M, Acquires Langfuse & Launches Postgres Service"
---
# What happened
Dragoneer led a $400M Series D at ~$15B with Bessemer, GIC, Index, Khosla, Lightspeed, T. Rowe Price and WCM; total funding >$1B; ARR grew >250% in the prior year. ClickHouse also acquired Langfuse, whose core stays MIT-licensed[^bbg-clickhouse][^sa-clickhouse][^db-ch-langfuse].

# Why it matters
Shows Apache-2.0 data infrastructure commanding top-tier valuations when positioned for AI workloads.

# Outcome so far
By May 2026 annualized revenue had tripled to ~$250M; ClickHouse hired a public-company CFO and said it targets an IPO "within the next few years"[^tc-clickhouse-arr].

# Related
- [ClickHouse](/organizations/clickhouse-inc.md), [COSS funding](/projects/coss-market/coss-funding-2024-2026.md)

[^bbg-clickhouse]: Bloomberg: ClickHouse lands $15B valuation in AI database race (2026-01-16).
[^sa-clickhouse]: SiliconANGLE: ClickHouse raises $400M, acquires Langfuse (2026-01-16).
[^tc-clickhouse-arr]: TechCrunch, 2026-05-27.

## Additional notes (databases)
- Langfuse keeps its MIT core and "remains 100% open-source". At acquisition it counted 19 of the Fortune 50 and 63 of the Fortune 500 as users[^db-ch-langfuse].
- The same announcement cycle launched ClickHouse's managed Postgres service (built with Ubicloud, CDC into ClickHouse), ClickHouse's entry into the Postgres land-grab[^db-vktr-pg].
- See [/projects/databases/clickhouse.md](/projects/databases/clickhouse.md).

[^db-ch-langfuse]: ClickHouse blog, 2026-01-16.
[^db-vktr-pg]: VKTR, Jan 2026.
