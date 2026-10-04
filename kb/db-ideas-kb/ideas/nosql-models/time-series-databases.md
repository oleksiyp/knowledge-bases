---
type: Idea
title: "Purpose-built time-series databases"
description: "Time-series workloads boomed, but the standalone time-series database category fragmented and was largely absorbed. InfluxDB changed its query stack across major versions and replaced its TSM engine in version 3 and dropped its own query language. Timescale renamed itself a Postgres company, and the winners were columnar or analytical engines on object storage plus Prometheus-compatible metrics stores."
tags: [time-series, influxdb, prometheus, observability, iot, columnar]
area: nosql-models
verdict: mixed
hype_peak: 2019
adoption_2026: common
origins: "RRDtool/Graphite (2000s), OpenTSDB on HBase (2010), InfluxDB (2013), Prometheus (2012, CNCF 2016)"
key_systems: [systems/influxdb, systems/timescaledb, systems/questdb, systems/victoriametrics, systems/clickhouse]
related_ideas: [ideas/nosql-models/sql-nosql-convergence, ideas/analytics-lakehouse/real-time-olap]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: recovery
    resource: https://www.influxdata.com/blog/update-from-influxdata-paul-dix-july-10/
    title: "InfluxData CTO statement and July 14 recovery update"
  - id: influx-plan
    resource: https://www.influxdata.com/blog/the-plan-for-influxdb-3-0-open-source/
    title: "InfluxData: The plan for InfluxDB 3 open source"
    author: org:influxdata
  - id: influx-ga
    resource: https://www.businesswire.com/news/home/20250415573560/en/InfluxData-Announces-General-Availability-of-InfluxDB-3-Core-and-InfluxDB-3-Enterprise-Simplifying-How-Developers-Build-with-Time-Series-Data
    title: "InfluxData announces GA of InfluxDB 3 Core and Enterprise (2025-04-15)"
    author: org:influxdata
  - id: influx-wiki
    resource: https://en.wikipedia.org/wiki/InfluxDB
    title: "InfluxDB — Wikipedia (versions, $81M Series E Feb 2023)"
  - id: reg-influx
    resource: https://www.theregister.com/2023/07/11/influxdata_apologizes_for_ending_services/
    title: "The Register: InfluxData sorry for deleting cloud regions that were in use (2023-07-11)"
    author: org:the-register
  - id: tiger
    resource: https://www.tigerdata.com/blog/timescale-becomes-tigerdata
    title: "Tiger Data: Timescale becomes TigerData (2025-06-17)"
    author: org:tiger-data
  - id: vm-growth
    resource: https://victoriametrics.com/blog/300-percent-growth-in-2024-join-our-team-in-2025/
    title: "VictoriaMetrics: 300%+ growth in 2024"
    author: org:victoriametrics
  - id: vm-1b
    resource: https://victoriametrics.com/blog/announcing-1b-downloads-and-product-development-with-logs-traces-metrics/
    title: "VictoriaMetrics: Announcing 1B+ downloads"
    author: org:victoriametrics
  - id: quest-a
    resource: https://www.techtarget.com/searchdatamanagement/news/252508994/QuestDB-grows-time-series-database-with-12M-fund-raise
    title: "TechTarget: QuestDB grows time series database with $12M fund raise (2021)"
  - id: ts-c
    resource: https://www.finsmes.com/2022/02/timescale-raises-110m-in-series-c-funding-valued-at-over-1b.html
    title: "FinSMEs: Timescale raises $110M in Series C funding; valued at over $1B (2022-02)"
---

# Summary

**Verdict: mixed.** The workload won: metrics, IoT telemetry, market ticks and observability data grew enormously from 2018 to 2026. The standalone time-series database as a separate category did much worse. Its best-known product, InfluxDB, changed its product and query stack across three major generations (Go/TSM 1.x, Flux-centric 2.x on TSM, then Rust/Arrow/DataFusion/Parquet 3.x). It put its own query language, Flux, into maintenance mode[^influx-plan]. In 2023 it deleted live customer data when it closed two cloud regions[^reg-influx]. Timescale, the "time series on Postgres" company, renamed itself Tiger Data in 2025 and repositioned as a general fast-Postgres platform[^tiger]. Value moved to three places: columnar engines that handle time series as one workload (ClickHouse, DuckDB, Parquet/Iceberg on object storage), Postgres extensions, and Prometheus-compatible metrics stores such as VictoriaMetrics, which grew 300%+ in 2024 while bootstrapped[^vm-growth].

# The idea

Time-ordered, append-only data with tags has special properties: high ingest rates, compression by delta/XOR encoding, downsampling, retention policies, and queries over time windows. Specialization promises better ingest and compression, plus time-aware queries. Such claims require workload-specific benchmarks: series cardinality, retention, late data and query selectivity can change the result.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | InfluxData begins Flux, a new functional query language[^influx-plan] | ~ |
| 2020 | InfluxDB 2.x ships Flux; InfluxDB IOx (Rust, Arrow, DataFusion, Parquet) announced in November, a new storage and execution architecture[^influx-plan] | − |
| 2021 | QuestDB raises $12M Series A for a SQL-first TSDB[^quest-a] | + |
| 2022 | Timescale raises a $110M Series C at a $1B+ valuation, led by Tiger Global (Feb)[^ts-c] | + |
| 2023 | InfluxData raises $81M Series E (Feb)[^influx-wiki]; shuts down AWS Sydney and GCP Belgium cloud regions on June 30 and deletes data still in use; Sydney data is unrecoverable; Belgium time-series data is later recovered[^reg-influx][^recovery] | − |
| 2024 | VictoriaMetrics reports 300%+ growth, bootstrapped[^vm-growth] | + |
| 2025 | InfluxDB 3 Core (MIT/Apache) and Enterprise GA (Apr 15)[^influx-ga]; Flux in maintenance mode[^influx-plan]; Timescale becomes Tiger Data (Jun 17)[^tiger] | mixed |

# What succeeded

- **Columnar + object storage for time series.** InfluxDB 3 itself adopted the general analytical stack (Arrow, DataFusion, Parquet) because it handles "infinite cardinality" better than a bespoke engine[^influx-plan]. QuestDB also moved cold partitions to Parquet on object storage.
- **Prometheus as the metrics standard.** PromQL and the remote-write protocol became the interface. Compatible long-term stores (VictoriaMetrics, Grafana Mimir, Thanos, Cortex) compete on cost and operations. VictoriaMetrics passed 1B downloads[^vm-1b] with a small, bootstrapped team.
- **Time series in Postgres.** TimescaleDB showed that hypertables, compression and continuous aggregates can live inside a general-purpose database. It worked well enough that the company dropped "time series" from its name[^tiger].

# What failed

- **Bespoke query languages.** InfluxQL, then Flux, then back to SQL. Flux was "powerful" but faced adoption blockers, and the company could not support it in the Rust engine[^influx-plan]. Users had to migrate twice.
- **Repeated rewrites.** Each InfluxDB major version changed the storage engine, API or query language. That eroded trust and pushed users toward stable alternatives.
- **Cloud operations discipline.** Deleting two regions' data with only email notices became a widely cited cautionary tale. CTO Paul Dix admitted the company "failed on many levels"[^reg-influx].
- **"TSDB" as a standalone business.** The successful vendors broadened: Timescale became a Postgres platform, VictoriaMetrics added logs and traces[^vm-1b], and InfluxData moved to a general Arrow/SQL stack.

# Why

The following is causal analysis of the cited examples, not a measurement of worldwide market share.

1. **Time series is a workload, not a data model.** Columnar compression, sort keys and partition pruning, which every modern OLAP engine has, capture most of the gains. The specialized advantage shrank as ClickHouse, DuckDB and Parquet-based lakes matured.
2. **High cardinality broke first-generation designs.** Series-oriented indexes face memory and management costs as distinct tag combinations grow. InfluxData identified cardinality and query flexibility as reasons for its new architecture; this does not mean every Prometheus-compatible engine requires the same redesign.[^influx-plan]
3. **Observability buyers buy platforms.** Metrics, logs and traces are bought together (Datadog, Grafana, Elastic). Expansion into adjacent signals can broaden the product relationship, as VictoriaMetrics demonstrates.[^vm-1b]
4. **SQL gravity.** InfluxDB returned to SQL and InfluxQL, while QuestDB and Timescale already used SQL. PromQL/MetricsQL remain counterexamples: a domain language can endure when it is backed by a broad monitoring ecosystem.[^influx-plan][^vm-growth]

# Lessons

- If your differentiator is a storage optimization, expect general-purpose engines to copy it within a few years.
- Don't make users learn a new query language unless the gain is very large. You will probably end up supporting SQL anyway.
- Rewrites are expensive in trust as well as engineering. Ship compatibility paths before you deprecate.
- Operational mistakes in a managed service (data deletion) can outweigh years of engineering credibility.

# Related

- [InfluxDB](/systems/influxdb.md), [TimescaleDB](/systems/timescaledb.md), [QuestDB](/systems/questdb.md), [VictoriaMetrics](/systems/victoriametrics.md), [ClickHouse](/systems/clickhouse.md)
- [InfluxData deletes cloud regions](/events/2023-06-influxdata-deletes-cloud-regions.md)
- [SQL/NoSQL convergence](/ideas/nosql-models/sql-nosql-convergence.md)
