---
type: Organization
title: ClickHouse, Inc.
description: "Company behind the Apache-2.0 ClickHouse OLAP database; raised $400M at ~$15B in Jan 2026 (valuation more than doubled in under a year, ARR +250%), bought LLM-observability OSS Langfuse, and targets an IPO 'within the next few years'."
resource: https://clickhouse.com
tags: [commercial-open-source, database, analytics, apache-2.0, ai]
org_kind: coss-startup
hq: San Francisco, USA / Amsterdam, Netherlands
funding: { total_usd: ">$1B (incl. $350M Series C May 2025, $400M Series D Jan 2026)", last_round: "Series D $400M (Dragoneer)", last_round_date: 2026-01-16, valuation_usd: "~$15B" }
business_verdict: thriving
projects: [projects/ai-apps/librechat, projects/ai-apps/langfuse]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bbg-clickhouse
    resource: https://www.bloomberg.com/news/articles/2026-01-16/clickhouse-lands-15-billion-valuation-in-ai-database-race
    title: "Bloomberg: ClickHouse lands $15B valuation in AI database race (2026-01-16)"
  - id: sa-clickhouse
    resource: https://siliconangle.com/2026/01/16/database-maker-clickhouse-raises-400m-acquires-ai-observability-startup-langfuse/
    title: "SiliconANGLE: ClickHouse raises $400M, acquires Langfuse (2026-01-16)"
  - id: wiki-clickhouse
    resource: https://en.wikipedia.org/wiki/ClickHouse
    title: "Wikipedia: ClickHouse"
  - id: tc-clickhouse-arr
    resource: https://techcrunch.com/2026/05/27/clickhouse-triples-annualized-revenue-to-250m-charting-a-path-toward-an-ipo/
    title: "TechCrunch: ClickHouse triples annualized revenue to $250M, charting a path toward an IPO (2026-05-27)"
    author: org:techcrunch
  - id: bbg-clickhouse-c
    resource: https://bloomberg.com/news/articles/2025-05-29/khosla-led-deal-values-data-startup-clickhouse-at-6-35-billion
    title: "Bloomberg: Khosla-Led Deal Values Data Startup ClickHouse at $6.35 Billion (2025-05-29)"
    author: org:bloomberg
  - id: db-ch-hyperdx
    resource: https://clickhouse.com/blog/clickhouse-acquires-hyperdx-the-future-of-open-source-observability
    title: "ClickHouse acquires HyperDX (Mar 2025)"
  - id: db-bw-librechat
    resource: https://www.businesswire.com/news/home/20251104505230/en/ClickHouse-Acquires-LibreChat-to-Democratize-AI-Driven-Analytics-Through-the-Open-Source-Agentic-Data-Stack
    title: "BusinessWire: ClickHouse Acquires LibreChat (2025-11-04)"
  - id: db-vktr-pg
    resource: https://www.vktr.com/ai-news/clickhouse-raises-400m-acquires-langfuse-launches-postgres-service/
    title: "VKTR: ClickHouse Raises $400M, Acquires Langfuse & Launches Postgres Service"
  - id: db-ch-agents
    resource: https://clickhouse.com/blog/clickhouse-agents-managed-postgres
    title: "ClickHouse Agents is now available for Managed Postgres"
  - id: aiapps-lf-join
    resource: https://langfuse.com/blog/joining-clickhouse
    title: "Langfuse blog: Langfuse joins ClickHouse (2026-01-16)"
  - id: aiapps-lc-gh
    resource: https://github.com/LibreChat-AI/LibreChat
    title: LibreChat GitHub repository (GitHub API, 2026-10-03)
---

# Summary
ClickHouse raised a **$400M Series D led by Dragoneer at ~$15B** in January 2026 — more than double its valuation from less than a year earlier — with Bessemer, GIC, Index, Khosla, Lightspeed, T. Rowe Price and WCM participating; total funding exceeds $1B and ARR grew more than 250% in the prior year[^bbg-clickhouse][^sa-clickhouse]. Simultaneously it acquired **Langfuse**, an open source LLM-observability platform[^sa-clickhouse]. In May 2026 it reported a ~$250M annualized revenue run-rate (tripled year on year; 4,000+ customers), hired ex-Snowflake executive Jimmy Sexton as CFO, and co-founder Yury Izrailevsky said it targets an IPO "within the next few years"[^tc-clickhouse-arr].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W9 | 2026-01-16 | $400M Series D at ~$15B; acquires Langfuse[^bbg-clickhouse][^sa-clickhouse] | + |
| W6 | 2026-05-27 | ~$250M ARR (3x YoY); new CFO; IPO targeted within a few years[^tc-clickhouse-arr] | + |

# Monetization model
ClickHouse Cloud (managed, consumption) on top of the Apache-2.0 engine; expanding into Postgres and AI observability.

# Successes
- Among the fastest-growing COSS companies; Apache-2.0 retained.

# Failures / risks
- Valuation premised on sustaining AI-driven hypergrowth.

# Related
- [COSS funding](/projects/coss-market/coss-funding-2024-2026.md), [/events/2026-01-clickhouse-400m-15b-valuation.md](/events/2026-01-clickhouse-400m-15b-valuation.md)

[^bbg-clickhouse]: Bloomberg, 2026-01-16.
[^sa-clickhouse]: SiliconANGLE, 2026-01-16.
[^wiki-clickhouse]: Wikipedia, ClickHouse.
[^tc-clickhouse-arr]: TechCrunch, 2026-05-27.
[^bbg-clickhouse-c]: Bloomberg, 2025-05-29.

## Additional notes (databases)
- **Full acquisition roll-up:** PeerDB (Postgres CDC, July 2024), HyperDX (observability UI and ClickStack, Mar 2025)[^db-ch-hyperdx], LibreChat (MIT chat UI, about 45k stars, 2025-11-04)[^db-bw-librechat] and Langfuse (Jan 2026). Together they form an open-source "Agentic Data Stack". Acquired projects kept their licenses (Langfuse core stays MIT).
- **Prior round:** $350M Series C led by Khosla in May 2025 at $6.35B, plus a $100M credit facility; total raised then >$650M[^bbg-clickhouse-c].
- **Postgres:** In Jan 2026 ClickHouse launched an enterprise managed Postgres service built with Ubicloud, with automated CDC into ClickHouse[^db-vktr-pg]. ClickHouse Agents (beta at OpenHouse, June 2026, powered by Claude) now also covers Managed Postgres[^db-ch-agents].
- Domain project file: [/projects/databases/clickhouse.md](/projects/databases/clickhouse.md).

[^db-ch-hyperdx]: ClickHouse blog, Mar 2025.
[^db-bw-librechat]: BusinessWire, 2025-11-04.
[^db-vktr-pg]: VKTR, Jan 2026.
[^db-ch-agents]: ClickHouse blog, 2026.

## Additional notes (ai-apps)
- Post-acquisition health of the AI-app layer: LibreChat (MIT, ~45k stars) moved to the LibreChat-AI org and ships weekly RCs/monthly stables (v0.8.8, 2026-10-01)[^aiapps-lc-gh]; Langfuse kept its MIT core ("no licensing changes planned"), with copyright now held by ClickHouse, Inc., and near-daily 4.x releases[^aiapps-lf-join].
- Domain files: [/projects/ai-apps/librechat.md](/projects/ai-apps/librechat.md), [/projects/ai-apps/langfuse.md](/projects/ai-apps/langfuse.md), [/events/2025-11-clickhouse-acquires-librechat.md](/events/2025-11-clickhouse-acquires-librechat.md), [/events/2026-01-clickhouse-acquires-langfuse.md](/events/2026-01-clickhouse-acquires-langfuse.md).

[^aiapps-lc-gh]: GitHub API, LibreChat-AI/LibreChat — https://github.com/LibreChat-AI/LibreChat
[^aiapps-lf-join]: Langfuse blog, 2026-01-16 — https://langfuse.com/blog/joining-clickhouse
