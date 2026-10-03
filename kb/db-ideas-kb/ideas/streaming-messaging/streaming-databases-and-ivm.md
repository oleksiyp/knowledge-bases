---
type: Idea
title: "Streaming databases and incremental view maintenance"
description: "Define results as SQL views and let the engine keep them up to date incrementally as input streams change (Materialize, RisingWave, ksqlDB, Feldera, ReadySet). Mixed: the theory matured (DBSP won VLDB 2023 best paper) and incremental refresh became a standard warehouse feature, but standalone streaming databases stayed niche and ksqlDB was effectively abandoned in favour of Flink SQL."
tags: [streaming-database, ivm, materialized-views, sql, differential-dataflow, dbsp]
area: streaming-messaging
verdict: mixed
hype_peak: 2022
adoption_2026: niche
origins: "Decades of IVM research; Naiad/Timely and Differential Dataflow (McSherry et al., 2013); Noria (MIT, OSDI 2018); KSQL (2017)."
key_systems: [systems/materialize, systems/risingwave, systems/ksqldb, systems/feldera, systems/readyset, systems/apache-flink, systems/snowflake]
related_ideas: [ideas/streaming-messaging/stream-processing-engines-consolidate-on-flink, ideas/streaming-messaging/cdc-as-integration-backbone, ideas/analytics-lakehouse/real-time-olap]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: dbsp
    resource: https://www.feldera.com/vldb23.pdf
    title: "Budiu et al.: DBSP — Automatic Incremental View Maintenance for Rich Query Languages (VLDB 2023, Best Paper)"
  - id: feldera-a
    resource: https://www.feldera.com/blog/announcing-our-series-a-and-seed
    title: "Feldera: Announcing our Series A and Seed (2026-09)"
    author: org:feldera
  - id: mz-c
    resource: https://www.alleywatch.com/2021/10/materialize-streaming-sql-data-database-arjun-narayan/
    title: "AlleyWatch: Materialize raises $60M (2021)"
  - id: mz-gh
    resource: https://github.com/MaterializeInc/materialize
    title: "Materialize GitHub repository (BSL 1.1)"
    author: org:materialize
  - id: mz-odw
    resource: https://materialize.com/blog/what-is-an-operational-data-warehouse/
    title: "Materialize: What is an operational data warehouse?"
    author: org:materialize
  - id: mz-sm
    resource: https://materialize.com/self-managed/
    title: "Materialize Self-Managed (Community and Enterprise editions)"
    author: org:materialize
  - id: rw-a
    resource: https://www.techtarget.com/data-technologies/news/252526292/RisingWave-Labs-raises-36M-for-stream-processing-database
    title: "TechTarget: RisingWave Labs raises $36M (Oct 2022)"
  - id: immerok
    resource: https://investors.confluent.io/news-releases/news-release-details/confluent-announces-intent-acquire-immerok-accelerate
    title: "Confluent announces intent to acquire Immerok (2023-01-06)"
    author: org:confluent
  - id: ksql-status
    resource: https://www.conduktor.io/kafka-streams/vs-ksqldb
    title: "Conduktor: Kafka Streams vs ksqlDB (status of ksqlDB)"
  - id: sf-dt
    resource: https://docs.snowflake.com/en/release-notes/2024/other/2024-04-29-dynamic-tables
    title: "Snowflake: Dynamic Tables — General Availability (2024-04-29)"
    author: org:snowflake
  - id: rs-a
    resource: https://techcrunch.com/2022/04/05/readyset-raises-29m-to-expedite-access-to-enterprise-scale-app-data
    title: "TechCrunch: ReadySet raises $29M (2022-04-05)"
---

# Summary

**Verdict: mixed.** The 2019–2022 wave of streaming databases promised that any SQL query could be a live, always-correct materialized view over Kafka or CDC streams, so ETL jobs and caches would go away. The theory got much better. Feldera's DBSP paper won VLDB 2023 Best Paper by giving a general algorithm that incrementalizes rich SQL, including recursion[^dbsp]. The mainstream form is the incremental-refresh features in warehouses, such as Snowflake Dynamic Tables (GA April 2024)[^sf-dt], and Flink SQL. Standalone streaming databases stayed small. Materialize raised $100M+ by 2021[^mz-c] and later repositioned as an "operational data warehouse"[^mz-odw]. RisingWave is solid open source with a modest footprint. Confluent's ksqlDB was effectively frozen after Confluent bought a Flink company in 2023[^immerok][^ksql-status].

# The idea

Instead of re-running queries, maintain their results. When an input row changes, compute only the delta of the output. Done right (Differential Dataflow, DBSP), results are consistent (no partial or glitchy outputs) and cost scales with the size of the change, not the size of the data. Postgres-compatible SQL makes it usable by any engineer, and the view can be read like a table or subscribed to as a stream.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | Noria (MIT) shows partially-stateful dataflow for read-heavy web apps (OSDI) | + |
| 2019 | Materialize founded (Feb) on Timely/Differential Dataflow | + |
| 2020 | ReadySet founded to commercialize Noria | + |
| 2021 | Materialize $60M Series C, $100M+ total (Sept)[^mz-c] | + |
| 2022 | RisingWave open-sourced under Apache 2.0 (Apr); $36M Series A (Oct)[^rw-a]. ReadySet $29M total (Apr)[^rs-a] | + |
| 2023 | Confluent buys Immerok (Flink) (Jan 6)[^immerok]; ksqlDB stops getting major investment[^ksql-status]. DBSP wins VLDB Best Paper (Aug)[^dbsp]. Materialize markets itself as an "operational data warehouse"[^mz-odw] | mixed |
| 2024 | Snowflake Dynamic Tables GA with incremental refresh (Apr 29)[^sf-dt]. Materialize reorganizes, with layoffs reported (unconfirmed size) | mixed |
| 2025 | Materialize launches self-managed Community and Enterprise editions[^mz-sm] | mixed |
| 2026 | Feldera raises $21.5M Seed + Series A; cites Auth0 keeping "7B+ permission checks" fresh (Sept)[^feldera-a] | + |

# What succeeded

- **Theory and correctness.** Differential Dataflow and DBSP gave IVM a clean foundation. DBSP showed a small set of operators can incrementalize the full relational algebra, aggregation and recursion[^dbsp].
- **IVM as a feature.** Warehouses absorbed the idea as scheduled incremental refresh with a target lag (Snowflake Dynamic Tables, Databricks materialized views)[^sf-dt]. This is where most users meet IVM.
- **Niche production wins.** Fraud detection, permissions (Feldera at Auth0[^feldera-a]), operational dashboards and feature freshness are real use cases where minutes of staleness cost money.

# What failed

- **"Replace your warehouse/ETL with a streaming DB."** Most buyers settled for minute-level freshness from warehouses, which was good enough and already paid for. The always-on, memory-hungry streaming DB was harder to justify.
- **ksqlDB.** Confluent's 2017 bet on streaming SQL lost to Flink inside Confluent. After the Immerok deal, Flink SQL became the strategic engine and ksqlDB was left in effective maintenance mode[^ksql-status].
- **Funding-era scale.** Materialize raised over $100M in the 2021 bubble[^mz-c], kept a BSL licence[^mz-gh], and has repositioned more than once ("streaming database" → "operational data warehouse" → "live data layer for apps and AI agents").
- **State cost.** Joins over unbounded streams need large state. Memory-resident designs were expensive, and the fix (state on object storage, as in RisingWave and Flink 2.0) only matured around 2024–25.

# Why

The technology worked, but the buyer's pain was usually smaller than the vendors assumed. Most analytics tolerates minutes of delay, and warehouses got incremental refresh cheaply. Streaming databases also had to compete with Flink, which had the community and the vendors (Confluent, AWS, Alibaba, Ververica), and with real-time OLAP engines (ClickHouse, Pinot) that simply re-query fast. The remaining market is operational: application-facing views where correctness and freshness both matter. That market is real but smaller, which suits Feldera-size companies better than a 2021-scale one.

# Lessons

- A strong theory (IVM) can win as a feature inside incumbents while startups selling it as a new category struggle.
- "Real-time" demand is often overstated. Check whether the customer would pay for seconds over minutes.
- Choose the processing engine with the largest community. Vendors consolidate on it (Flink), and alternatives inside the same vendor (ksqlDB) get dropped.

# Related

- Systems: [Materialize](/systems/materialize.md), [RisingWave](/systems/risingwave.md), [ksqlDB](/systems/ksqldb.md), [Feldera](/systems/feldera.md), [ReadySet](/systems/readyset.md), [Apache Flink](/systems/apache-flink.md), [Snowflake](/systems/snowflake.md)
- Paper: [DBSP (VLDB 2023)](/papers/2023-dbsp-incremental-view-maintenance.md)
- Ideas: [Flink consolidation](/ideas/streaming-messaging/stream-processing-engines-consolidate-on-flink.md), [Real-time OLAP](/ideas/analytics-lakehouse/real-time-olap.md)
