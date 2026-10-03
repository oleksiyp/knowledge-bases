---
type: System
title: ParadeDB
description: "AGPL-licensed Postgres extension (pg_search) that brings Elasticsearch-style BM25 full-text search and faceted aggregation into Postgres using the Rust Tantivy library. It is the 'Postgres eats search' bet. It raised a $12M Series A in 2025, dropped its DuckDB-based analytics extension, and is still pre-1.0."
resource: https://www.paradedb.com
tags: [postgres, extension, full-text-search, bm25, agpl, elasticsearch-alternative]
kind: oss
first_release: 2023
org: "ParadeDB Inc."
license: AGPL-3.0
outcome: growing
ideas: [ideas/postgres-ecosystem/extensions-as-platform, ideas/postgres-ecosystem/analytics-inside-postgres, ideas/postgres-ecosystem/just-use-postgres]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pd-gh
    resource: https://github.com/paradedb/paradedb
    title: "ParadeDB GitHub repository"
  - id: pd-blog
    resource: https://www.paradedb.com/blog
    title: "ParadeDB blog index (Series A July 2025; 0.20 Nov 2025; Railway and Render 2026)"
    author: org:paradedb
  - id: pg-analytics-archived
    resource: https://github.com/paradedb/pg_analytics
    title: "paradedb/pg_analytics (archived 2025-03-19)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary
ParadeDB packages Elasticsearch-style search as a Postgres extension. `pg_search` adds a BM25 index built on Tantivy, so Postgres can handle relevance-ranked full-text search, faceting and aggregations without a separate search cluster or sync pipeline[^pd-gh]. It first tried analytics as well: `pg_lakehouse` (DataFusion), then `pg_analytics` (DuckDB through foreign data wrappers, June 2024)[^pavlo-2024]. It archived pg_analytics in March 2025 and folded analytics into pg_search[^pg-analytics-archived]. It raised a $12M Series A (July 2025), shipped 0.20 (Nov 2025) and gained one-click deploys on Railway and Render in 2026[^pd-blog]. It chose AGPL-3.0 from the start, which avoided a later relicensing fight but limits inclusion in hyperscaler-managed Postgres.

# Timeline
| Date | Event |
|---|---|
| 2023 | Launch as Postgres-for-search[^pd-gh] |
| 2024-06 | pg_analytics (DuckDB-backed) replaces DataFusion-based pg_lakehouse[^pavlo-2024] |
| 2025-03-19 | pg_analytics archived[^pg-analytics-archived] |
| 2025-07 | $12M Series A[^pd-blog] |
| 2025-11 | 0.20: search aggregations, v2 API default[^pd-blog] |
| 2026-04/05 | Available on Railway and Render[^pd-blog] |

# What worked
- A clear, narrow pitch: replace the Elasticsearch-plus-sync-pipeline pattern for Postgres-centric apps.
- Fast iteration and early focus. Dropping analytics to concentrate on search was the right call.

# What didn't
- AGPL keeps it off RDS, Cloud SQL and Azure. Distribution depends on ParadeDB's own cloud, PaaS marketplaces or self-hosting.
- Still pre-1.0. It competes with Postgres's built-in full-text search for simpler needs and with platform-native search from other Postgres vendors.

# Related
- [Extensions as platform](/ideas/postgres-ecosystem/extensions-as-platform.md), [Analytics inside Postgres](/ideas/postgres-ecosystem/analytics-inside-postgres.md)
- [Elasticsearch](/systems/elasticsearch.md), [OpenSearch](/systems/opensearch.md), [PostgreSQL](/systems/postgresql.md)
