---
type: OSS Project
title: ClickHouse
description: "Apache-2.0 real-time OLAP database whose company more than doubled its valuation to about $15B (Jan 2026) and bought open-source AI and observability tools (HyperDX, LibreChat, Langfuse) to build an 'agentic data stack' that now includes managed Postgres."
resource: https://github.com/ClickHouse/ClickHouse
tags: [olap, analytics, apache-2.0, observability, ai-agents, company-led]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0 (2016-)"]
governance: company-led-open-core
steward: ClickHouse Inc.
backing_orgs: [organizations/clickhouse-inc]
metrics:
  github_stars: { value: 50212, as_of: 2026-10-03 }
  valuation_usd: { value: "~15B", as_of: 2026-01-16 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ch-gh
    resource: https://github.com/ClickHouse/ClickHouse
    title: ClickHouse GitHub repository
  - id: ch-wiki
    resource: https://en.wikipedia.org/wiki/ClickHouse
    title: ClickHouse — Wikipedia
  - id: bbl-ch-c
    resource: https://news.bloomberglaw.com/legal-ops-and-tech/khosla-led-deal-values-data-startup-clickhouse-at-6-35-billion
    title: "Bloomberg Law: Khosla-Led Deal Values Data Startup ClickHouse at $6.35 Billion (2025-05-29)"
    author: org:bloomberg
  - id: bw-ch-pg
    resource: https://www.businesswire.com/news/home/20260122173204/en/ClickHouse-Announces-Native-Postgres-Service-Offering-a-Unified-Data-Stack-for-Real-Time-and-AI-Driven-Applications
    title: "BusinessWire: ClickHouse Announces Native Postgres Service (2026-01-22)"
  - id: ch-250m
    resource: https://clickhouse.com/blog/clickhouse-tops-250m-arr-and-4000-customers
    title: "ClickHouse blog: ClickHouse tops $250M ARR and 4,000 customers, launches Claude-powered agents at Open House 2026 (2026-05-27)"
    author: org:clickhouse
  - id: tc-ch-250m
    resource: https://techcrunch.com/2026/05/27/clickhouse-triples-annualized-revenue-to-250m-charting-a-path-toward-an-ipo/
    title: "TechCrunch: ClickHouse triples annualized revenue to $250M, charting a path toward an IPO (2026-05-27)"
    author: org:techcrunch
  - id: ch-runreveal
    resource: https://clickhouse.com/blog/clickhouse-welcomes-runreveal
    title: "ClickHouse blog: ClickHouse welcomes RunReveal (2026-09-01)"
    author: org:clickhouse
  - id: bbg-15b
    resource: https://www.bloomberg.com/news/articles/2026-01-16/clickhouse-lands-15-billion-valuation-in-ai-database-race
    title: "Bloomberg: ClickHouse Lands $15 Billion Valuation in AI Database Race"
    author: org:bloomberg
  - id: ch-langfuse
    resource: https://clickhouse.com/blog/clickhouse-acquires-langfuse-open-source-llm-observability
    title: "ClickHouse welcomes Langfuse: The future of open-source LLM observability"
    author: org:clickhouse
  - id: ch-hyperdx
    resource: https://clickhouse.com/blog/clickhouse-acquires-hyperdx-the-future-of-open-source-observability
    title: "ClickHouse acquires HyperDX"
    author: org:clickhouse
  - id: bw-librechat
    resource: https://www.businesswire.com/news/home/20251104505230/en/ClickHouse-Acquires-LibreChat-to-Democratize-AI-Driven-Analytics-Through-the-Open-Source-Agentic-Data-Stack
    title: "BusinessWire: ClickHouse Acquires LibreChat"
  - id: vktr-pg
    resource: https://www.vktr.com/ai-news/clickhouse-raises-400m-acquires-langfuse-launches-postgres-service/
    title: "VKTR: ClickHouse Raises $400M, Acquires Langfuse & Launches Postgres Service"
  - id: ch-agents-pg
    resource: https://clickhouse.com/blog/clickhouse-agents-managed-postgres
    title: "ClickHouse Agents is now available for Managed Postgres"
    author: org:clickhouse
  - id: infoworld-langfuse
    resource: https://www.infoworld.com/article/4118621/clickhouse-buys-langfuse-as-data-platforms-race-to-own-the-ai-feedback-loop.html
    title: "InfoWorld: ClickHouse buys Langfuse as data platforms race to own the AI feedback loop"
    author: org:infoworld
---

# Summary
ClickHouse is the most successful open-source analytics database company of the period. It raised a $350M Series C led by Khosla (May 2025, ~$6.35B valuation)[^bbl-ch-c] and a $400M Series D led by Dragoneer at about $15B (Jan 16 2026)[^bbg-15b]. Total funding is now over $1B[^ch-wiki]. On May 27 2026 it said annualized revenue had passed $250M, roughly triple a year earlier, with 4,000 customers, and TechCrunch reported it hired a public-company CFO with an eye to an eventual IPO[^ch-250m][^tc-ch-250m]. It used that capital to buy permissively licensed open-source projects and assemble an "agentic data stack": HyperDX for observability (Mar 2025)[^ch-hyperdx], LibreChat for chat UI (Nov 2025)[^bw-librechat] and Langfuse for LLM observability (Jan 2026)[^ch-langfuse]. On Jan 22 2026 it also announced a managed Postgres service with change-data-capture into ClickHouse, built with Ubicloud (public beta by May 2026)[^bw-ch-pg][^ch-250m]. In Sept 2026 it bought RunReveal, a security-data platform built on ClickHouse[^ch-runreveal]. The engine stays Apache-2.0 (50k stars) with frequent stable and LTS releases[^ch-gh].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03 | Acquires HyperDX, which becomes the ClickStack UI [^ch-hyperdx] | Business | + |
| W24 | 2025-05-29 | $350M Series C led by Khosla, ~$6.35B, plus $100M credit facility [^bbl-ch-c] | Business | + |
| W12 | 2025-11-04 | Acquires LibreChat (MIT, 45k stars) [^bw-librechat] | Business | + |
| W9 | 2026-01-16 | $400M Series D led by Dragoneer at ~$15B. Acquires Langfuse [^bbg-15b][^ch-langfuse] |
| W9 | 2026-01-22 | Announces native managed Postgres service (with Ubicloud) [^bw-ch-pg][^vktr-pg] | Business | + |
| W6 | 2026-05-27 | Open House: ARR >$250M (≈3x YoY), 4,000 customers; ClickHouse Agents (Claude-powered) launched; full-text search GA [^ch-250m][^tc-ch-250m] |
| W6 | 2026-06 | ClickHouse Agents extended to Managed Postgres [^ch-agents-pg] | Business | + |
| W3 | 2026-09-01 | Acquires RunReveal (security data platform; terms undisclosed) [^ch-runreveal] | Business | + |
| W3 | 2026-10-02 | v26.9 stable and v26.3 LTS patch releases [^ch-gh] | OSS | + |

# OSS successes
- Steady releases and permissive licensing. No relicensing during the period[^ch-gh].
- Acquired projects stayed open source. Langfuse kept its MIT core and "remains 100% open-source"[^ch-langfuse].

# OSS failures / risks
- The roll-up widens the vendor's control over a broad open-source stack. Community projects such as LibreChat and Langfuse now depend on one company's roadmap.

# Business successes
- Valuation more than doubled in under a year[^bbg-15b], and ARR roughly tripled to $250M+ by May 2026[^ch-250m]. At acquisition, Langfuse counted 19 of the Fortune 50 as customers[^infoworld-langfuse].
- Expanded from OLAP into OLTP (Postgres) and AI observability. That attacks Databricks and Snowflake from the developer side.

# Business failures / risks
- Execution risk from integrating many acquisitions. Competition is heavy in observability (Grafana, Datadog) and Postgres (Supabase, Neon).

# By window
## W3
- RunReveal acquisition (Sept 1). Continued release cadence[^ch-runreveal][^ch-gh].
## W6
- $250M ARR milestone, ClickHouse Agents launch, IPO-track CFO hire[^ch-250m][^tc-ch-250m].
## W9
- Series D at ~$15B, Langfuse acquisition, managed Postgres launch[^bbg-15b][^ch-langfuse][^vktr-pg].
## W12
- LibreChat acquisition[^bw-librechat].
## W24
- HyperDX acquisition, Series C[^ch-hyperdx][^bbl-ch-c].

# Lessons
- A well-funded open-source vendor can buy adjacent permissively licensed projects to build a platform. Keeping their licenses intact helps preserve community trust.
- Analytics databases are converging with LLM observability, since traces and evals are just high-volume event data.

# Related
- [/organizations/clickhouse-inc.md](/organizations/clickhouse-inc.md), [/events/2026-01-clickhouse-400m-15b-valuation.md](/events/2026-01-clickhouse-400m-15b-valuation.md)
- [DuckDB](/projects/databases/duckdb.md), [StarRocks](/projects/databases/starrocks.md), [Apache Doris](/projects/databases/apache-doris.md), [PostgreSQL](/projects/databases/postgresql.md)

[^ch-gh]: GitHub API, ClickHouse/ClickHouse, 2026-10-03.
[^ch-wiki]: Wikipedia, ClickHouse (accessed 2026-10-03).
[^bbg-15b]: Bloomberg, 2026-01-16.
[^ch-langfuse]: ClickHouse blog, 2026-01-16.
[^ch-hyperdx]: ClickHouse blog, Mar 2025.
[^bw-librechat]: BusinessWire, 2025-11-04.
[^vktr-pg]: VKTR, Jan 2026.
[^bbl-ch-c]: Bloomberg Law, 2025-05-29.
[^bw-ch-pg]: BusinessWire, 2026-01-22.
[^ch-250m]: ClickHouse blog, 2026-05-27.
[^tc-ch-250m]: TechCrunch, 2026-05-27.
[^ch-runreveal]: ClickHouse blog, 2026-09-01.
[^ch-agents-pg]: ClickHouse blog.
[^infoworld-langfuse]: InfoWorld, Jan 2026.
