---
type: System
title: TimescaleDB (Tiger Data)
description: "Time-series extension for PostgreSQL (Apache-2.0 core plus source-available Timescale License features). Its company renamed itself Tiger Data in 2025 and became a general Postgres platform after retreating from multi-node scale-out and a table-access-method engine."
resource: https://github.com/timescale/timescaledb
tags: [postgres, extension, time-series, open-core, source-available]
kind: oss
first_release: 2017
org: "Tiger Data (formerly Timescale Inc.)"
license: "Apache-2.0 core + Timescale License (TSL)"
outcome: pivoted
ideas: [ideas/postgres-ecosystem/extensions-as-platform, ideas/postgres-ecosystem/pluggable-storage-engines, ideas/postgres-ecosystem/postgres-hosting-consolidation, ideas/nosql-models/time-series-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ts-license-2020
    resource: https://blog.timescale.com/blog/building-open-source-business-in-cloud-era-v2/
    title: "Timescale: Building a self-sustaining open-source business in the cloud era (v2, Sept 2020)"
    author: org:timescale
  - id: tsdb-multinode
    resource: https://github.com/timescale/timescaledb/blob/main/docs/MultiNodeDeprecation.md
    title: "TimescaleDB: Multi-node deprecation"
    author: org:timescale
  - id: tsdb-hypercore-pr
    resource: https://github.com/timescale/timescaledb/pull/8196
    title: "timescale/timescaledb PR #8196: hypercore TAM deprecation warning"
    author: org:timescale
  - id: tsdb-222
    resource: https://github.com/timescale/timescaledb/releases/tag/2.22.0
    title: "TimescaleDB 2.22.0 (2025-09-02)"
    author: org:timescale
  - id: tiger-rebrand
    resource: https://www.tigerdata.com/newsroom/timescale-becomes-tiger-data-defining-a-new-standard-as-the-fastest-postgresql-platform-for-modern-applications
    title: "Timescale Becomes Tiger Data (2025-06-17)"
    author: org:tiger-data
  - id: pgvectorscale
    resource: https://www.prnewswire.com/news-releases/postgresql-is-now-faster-than-pinecone-75-cheaper-with-new-open-source-extensions-302169146.html
    title: "Timescale: pgvectorscale and pgai launch (June 2024)"
    author: org:timescale
  - id: reg-pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: pgBackRest gets backing (2026-05-20)"
    author: org:the-register
---

# Summary
TimescaleDB showed that a Postgres extension can win a category (time series) against purpose-built engines such as InfluxDB. Its later history also shows the limits of being an extension company. It used a source-available Timescale License (TSL) to stop cloud providers from offering compression, continuous aggregates and similar features. In Sept 2020 it made all TSL features free for users and added "right-to-repair" terms, still excluding DBaaS resale[^ts-license-2020]. Two ambitious architectural bets were withdrawn: multi-node scale-out (deprecated in 2.13, removed in 2.14 in 2024; about 1% of deployments used it)[^tsdb-multinode], and the Hypercore table access method (deprecated in 2.21, removed in 2.22 in Sept 2025, because it "did not show the performance improvements expected")[^tsdb-hypercore-pr][^tsdb-222]. In June 2025 Timescale renamed itself Tiger Data and repositioned as "the fastest PostgreSQL platform" for transactional, analytical and agentic workloads[^tiger-rebrand].

# Timeline
| Date | Event |
|---|---|
| 2018 | Timescale License (TSL) introduced for advanced features |
| 2020-09 | TSL revised: all features free, right-to-repair, DBaaS still restricted[^ts-license-2020] |
| 2024-02 | 2.14 drops multi-node[^tsdb-multinode] |
| 2024-06 | pgvectorscale and pgai launched as AI-oriented extensions[^pgvectorscale] |
| 2025-06-17 | Company renamed Tiger Data[^tiger-rebrand] |
| 2025-09-02 | 2.22 removes Hypercore TAM[^tsdb-222] |
| 2026-05 | Co-funds pgBackRest maintenance[^reg-pgbackrest] |

# What worked
- Hypertables, native compression and continuous aggregates gave Postgres users time-series performance without leaving SQL.
- The source-available license kept full features off hyperscaler-managed Postgres, which channeled users to Timescale's own cloud.
- Fast pivots into vectors (pgvectorscale) kept it relevant in the AI cycle[^pgvectorscale].

# What didn't
- Scale-out inside an extension: multi-node was too complex for too few users[^tsdb-multinode].
- Storage-engine replacement through the TAM API: Hypercore was shipped and then removed[^tsdb-222].
- As a pure time-series vendor the market was too narrow, hence the rename into a general Postgres host that competes with Neon/Databricks, Supabase and PlanetScale[^tiger-rebrand].

# Related
- [Extensions as platform](/ideas/postgres-ecosystem/extensions-as-platform.md), [Pluggable storage engines](/ideas/postgres-ecosystem/pluggable-storage-engines.md), [Time-series databases](/ideas/nosql-models/time-series-databases.md)
- [PostgreSQL](/systems/postgresql.md), [pgvector](/systems/pgvector.md), [InfluxDB](/systems/influxdb.md), [QuestDB](/systems/questdb.md)
