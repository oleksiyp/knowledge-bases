---
type: System
title: InfluxDB
description: "The best-known purpose-built time-series database. Over a decade it went through three major product generations (1.x/2.x on TSM, then Rust/Arrow/DataFusion/Parquet 3.x), put its Flux language into maintenance mode, and deleted live data when it closed two cloud regions in 2023."
resource: https://www.influxdata.com
tags: [time-series, rust, arrow, datafusion, parquet, rewrite]
kind: product
first_release: 2013
org: "InfluxData Inc."
license: "MIT/Apache-2.0 (Core); commercial (Enterprise, Cloud)"
outcome: pivoted
ideas: [ideas/nosql-models/time-series-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: recovery
    resource: https://www.influxdata.com/blog/update-from-influxdata-paul-dix-july-10/
    title: "InfluxData CTO statement and July 14 recovery update"
  - id: plan
    resource: https://www.influxdata.com/blog/the-plan-for-influxdb-3-0-open-source/
    title: "InfluxData: The plan for InfluxDB 3 open source"
    author: org:influxdata
  - id: ga
    resource: https://www.businesswire.com/news/home/20250415573560/en/InfluxData-Announces-General-Availability-of-InfluxDB-3-Core-and-InfluxDB-3-Enterprise-Simplifying-How-Developers-Build-with-Time-Series-Data
    title: "InfluxData announces GA of InfluxDB 3 Core and Enterprise (2025-04-15)"
    author: org:influxdata
  - id: wiki
    resource: https://en.wikipedia.org/wiki/InfluxDB
    title: "InfluxDB — Wikipedia"
  - id: reg
    resource: https://www.theregister.com/2023/07/11/influxdata_apologizes_for_ending_services/
    title: "The Register: InfluxData sorry for deleting cloud regions that were in use (2023-07-11)"
    author: org:the-register
---

# Summary

InfluxDB defined the open-source TSDB category in the late 2010s, and its 2018–2026 history is a cautionary tale about rewrites. Versions 1.x and 2.x were written in Go on a TSM storage engine with a per-series inverted index, which struggled with high cardinality. Version 2.x pushed Flux, a new functional query language developed from 2018[^plan]. In November 2020 InfluxData announced IOx, a Rust engine on Apache Arrow, DataFusion and Parquet with object storage, built for "infinite cardinality". That engine became InfluxDB 3 (cloud first, then Core and Enterprise GA on April 15, 2025)[^plan][^ga]. Flux was put into maintenance mode, and SQL plus InfluxQL became the query languages again[^plan]. The company admitted that its earlier "open source data plane + commercial control plane" plan was "not viable"[^plan]. It raised an $81M Series E in February 2023[^wiki]. In June 2023 it shut down its AWS Sydney and GCP Belgium regions and deleted data still in use, and the Sydney data was unrecoverable; Belgium time-series data was subsequently recovered[^reg][^recovery].

# Timeline

| Year | Event |
|---|---|
| 2018 | Flux development begins[^plan] |
| 2020 | 2.x with Flux; IOx (Rust) announced (Nov)[^plan] |
| 2023 | $81M Series E (Feb)[^wiki]; region shutdown and data loss (Jun 30)[^reg] |
| 2025 | InfluxDB 3 Core (MIT/Apache) and Enterprise GA (Apr 15)[^ga] |

# What worked

- Adopting the shared analytical stack (Arrow, DataFusion, Parquet) instead of a bespoke engine. InfluxData also became a major DataFusion contributor.
- The line protocol and the Telegraf collector remain widely used.

# What didn't

- Three major product generations changed the language and deployment story; versions 1 and 2 shared TSM, so they should not be counted as independent storage-engine rewrites.[^plan]
- Core's early limits and its open-core boundaries drew criticism. Operational trust took a hit from the 2023 deletion[^reg].

# Related

- [Time-series databases](/ideas/nosql-models/time-series-databases.md)
- [TimescaleDB](/systems/timescaledb.md), [QuestDB](/systems/questdb.md), [VictoriaMetrics](/systems/victoriametrics.md), [DataFusion](/systems/datafusion.md)
- [InfluxData deletes cloud regions](/events/2023-06-influxdata-deletes-cloud-regions.md)
