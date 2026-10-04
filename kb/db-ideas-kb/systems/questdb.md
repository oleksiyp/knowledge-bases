---
type: System
title: QuestDB
description: "A SQL-first, column-oriented time-series database (Java/C++/Rust, no GC on the hot path) aimed at market data and high-ingest telemetry. It moved toward Parquet and object storage for cold data."
resource: https://questdb.com
tags: [time-series, sql, columnar, finance, parquet]
kind: oss
first_release: 2019
org: "QuestDB Inc."
license: Apache-2.0
outcome: growing
ideas: [ideas/nosql-models/time-series-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: seriesa
    resource: https://www.techtarget.com/searchdatamanagement/news/252508994/QuestDB-grows-time-series-database-with-12M-fund-raise
    title: "TechTarget: QuestDB grows time series database with $12M fund raise (2021)"
  - id: journey
    resource: https://questdb.com/blog/2022/01/03/two-year-journey-raising-15m-venture-capital/
    title: "QuestDB: Our two-year journey to raise $15m in venture capital (2022-01-03)"
    author: org:questdb
  - id: tick
    resource: https://www.timestored.com/data/questdb-for-tick-data-2025
    title: "TimeStored: QuestDB 2025 for tick data"
---

# Summary

QuestDB bet that time-series users wanted SQL (with time extensions like `SAMPLE BY`, `LATEST ON` and `ASOF JOIN`) rather than a new language. It also bet on mechanical sympathy: column files, SIMD and zero-GC Java plus native code. It was founded around 2019 and raised a $12M Series A led by 468 Capital in November 2021, about $15M in total by then[^seriesa][^journey]. It found traction in capital markets (tick data) and industrial telemetry. Its later architecture keeps hot partitions in native files and converts colder data to Parquet on object storage, readable by other engines[^tick]. That reflects the category-wide move toward open columnar formats.

# Timeline

| Year | Event |
|---|---|
| 2021 | $12M Series A (Nov)[^seriesa] |
| 2024–25 | Parquet/object-storage tiering for cold partitions[^tick] |

# What worked

- SQL from day one, which avoided the query-language churn InfluxDB went through.
- Performance focus that appeals to finance, a segment that pays and was long served by kdb+.

The lesson is to distinguish SQL compatibility from a general-purpose relational workload. Time-aware operators and sorted columnar storage can be useful precisely because the engine focuses on a narrower set of access patterns. Adoption decisions should compare ingest disorder, retention, concurrency and recovery needs, not just a single scan benchmark.

# What didn't

- Like every standalone TSDB, it competes with ClickHouse, DuckDB/Parquet stacks and TimescaleDB for the same workloads. The collected funding evidence ends around 2022; it does not establish the company's 2026 revenue or market share.

# Related

- [Time-series databases](/ideas/nosql-models/time-series-databases.md)
- [InfluxDB](/systems/influxdb.md), [TimescaleDB](/systems/timescaledb.md), [ClickHouse](/systems/clickhouse.md)
