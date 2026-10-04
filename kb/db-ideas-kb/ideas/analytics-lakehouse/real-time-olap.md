---
type: Idea
title: "Real-time OLAP engines (ClickHouse, Druid, Pinot, StarRocks, Rockset)"
description: "Purpose-built columnar engines for sub-second analytics on fresh, streaming data and user-facing dashboards. Mixed: the category is real and growing, but it consolidated around ClickHouse. Druid and Pinot stagnated commercially, Rockset was absorbed by OpenAI and shut down, and StarRocks' sponsor rebranded around AI agents."
tags: [olap, real-time, clickhouse, druid, pinot, starrocks, observability]
area: analytics-lakehouse
verdict: mixed
hype_peak: 2022
adoption_2026: common
origins: "Druid (Metamarkets, 2011), Pinot (LinkedIn, 2014–2015), ClickHouse (Yandex, open-sourced 2016), Apache Doris/Palo (Baidu)"
key_systems: [systems/clickhouse, systems/apache-druid, systems/apache-pinot, systems/starrocks, systems/rockset, systems/firebolt]
related_ideas: [ideas/analytics-lakehouse/lakehouse, ideas/streaming-messaging/streaming-databases-and-ivm, ideas/analytics-lakehouse/single-node-analytics]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ch-spinout
    resource: https://www.businesswire.com/news/home/20210920005219/en/ClickHouse-Inc.-Announces-Incorporation-Along-With-%2450M-In-Series-A-Funding
    title: "BusinessWire: ClickHouse, Inc. announces incorporation and $50M Series A (2021-09-20)"
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2022
    resource: https://www.cs.cmu.edu/~pavlo/blog/2022/12/2022-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2022: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: bbg-ch-15b
    resource: https://www.bloomberg.com/news/articles/2026-01-16/clickhouse-lands-15-billion-valuation-in-ai-database-race
    title: "Bloomberg: ClickHouse lands $15 billion valuation (2026-01-16)"
  - id: tc-ch-250m
    resource: https://techcrunch.com/2026/05/27/clickhouse-triples-annualized-revenue-to-250m-charting-a-path-toward-an-ipo/
    title: "TechCrunch: ClickHouse triples annualized revenue to $250M (2026-05-27)"
  - id: rockset-vb
    resource: https://venturebeat.com/ai/openai-acquires-rockset-to-strengthen-its-retrieval-capabilities
    title: "VentureBeat: OpenAI acquires Rockset (2024-06-21)"
  - id: imply-news
    resource: https://imply.io/news-and-press/
    title: "Imply newsroom (Imply Lumi observability warehouse, 2025–2026)"
  - id: tc-startree
    resource: https://techcrunch.com/2022/08/29/data-analytics-startup-startree-secures-cash-to-expand-its-pinot-powered-platform/
    title: "TechCrunch: StarTree secures cash for Pinot platform (2022-08-29)"
  - id: starrocks-lf
    resource: https://www.globenewswire.com/en/news-release/2023/02/14/2607982/0/en/CelerData-Contributes-StarRocks-Project-to-the-Linux-Foundation.html
    title: "GlobeNewswire: CelerData contributes StarRocks to the Linux Foundation (2023-02-14)"
  - id: dbta-phoenix
    resource: https://www.dbta.com/Editorial/News-Flashes/CelerData-Rebrands-as-PhoenixAI-Introduces-Analytical-Engine-Designed-for-AI-Agents-174972.aspx
    title: "DBTA: CelerData rebrands as PhoenixAI (May 2026)"
  - id: firebolt-calcalist
    resource: https://www.calcalistech.com/ctechnews/article/r1cj0csuwl
    title: "Calcalist: Firebolt slashes workforce (2026-02-20)"
---

# Summary

**Verdict: mixed. ClickHouse won the category, and most of the rest stalled.** Demand for sub-second analytics on fresh data (product analytics, observability, ad tech, user-facing dashboards) grew throughout 2018–2026. But the market consolidated around one open-source engine. ClickHouse Inc. went from a $50M spin-out in September 2021[^ch-spinout] to a ~$15B valuation in January 2026[^bbg-ch-15b] and ~$250M annualized revenue by May 2026[^tc-ch-250m]. Its peers had worse outcomes. Druid's steward Imply pivoted to an "observability warehouse"[^imply-news]. Pinot's steward StarTree has announced no funding since 2022[^tc-startree]. Rockset was bought by OpenAI and its service shut down in September 2024[^rockset-vb][^pavlo-2024]. StarRocks' sponsor rebranded as PhoenixAI in 2026[^dbta-phoenix].

# The idea

Warehouses were built for analysts running queries that take seconds to minutes. Real-time OLAP engines target thousands of concurrent queries with millisecond-to-second latency on data ingested seconds ago, often served directly to end users. Techniques include columnar storage with aggressive compression, sparse primary indexes, pre-aggregation and rollups, streaming ingestion from Kafka, and vectorized execution.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018–2021 | Pinot (incubating from 2018) and Druid (TLP 2019) become Apache projects (dates from project records, not re-verified) | + |
| 2020 | StarRocks forks Apache Doris (as DorisDB)[^starrocks-lf] | + |
| 2021 | ClickHouse Inc. spins out of Yandex with $50M, then a $250M Series B[^ch-spinout][^pavlo-2021]; Imply raises $70M; Firebolt (ClickHouse fork) raises $127M[^pavlo-2021] | + |
| 2022 | Imply $100M Series D[^pavlo-2022]; StarTree $47M Series B[^tc-startree]; ClickHouse Cloud launches | + |
| 2023 | StarRocks, relicensed from Elastic License to Apache-2.0 in Dec 2022, moves to the Linux Foundation[^starrocks-lf]; Rockset and ClickHouse add vector search | ± |
| 2024 | OpenAI acquires Rockset (June); Rockset service shut down Sept 30[^rockset-vb][^pavlo-2024]; ClickHouse buys PeerDB (Postgres CDC) | − / + |
| 2025 | ClickHouse $350M Series C; Imply launches Lumi observability warehouse[^imply-news] | ± |
| 2026 | ClickHouse $400M at ~$15B[^bbg-ch-15b], ~$250M ARR[^tc-ch-250m]; CelerData becomes PhoenixAI[^dbta-phoenix]; Firebolt layoffs[^firebolt-calcalist] | ± |

# What succeeded

- **ClickHouse.** Apache-2.0, easy to run as a single binary, very fast on a single node, and broadly applicable (logs, metrics, traces, product analytics, LLM observability). It grew a large community and then a cloud business, and used that capital to buy adjacent open-source tools (HyperDX, LibreChat, Langfuse).
- **Observability as the killer app.** Logs and traces at petabyte scale are the largest real-time OLAP workload. Several observability vendors moved onto ClickHouse-style columnar backends, and Imply's pivot points the same way[^imply-news].
- **StarRocks/Doris as lakehouse query engines.** StarRocks found a second role as a fast engine over Iceberg.

# What failed

- **Druid and Pinot as businesses.** Both remain maintained Apache projects, but their operational complexity (many node types, ingestion specs) lost to ClickHouse's simplicity. Their commercial stewards stopped raising money or changed product focus[^imply-news][^tc-startree].
- **Rockset.** It had strong engineering (ex-Facebook RocksDB team) and $105M raised, but it was proprietary and cloud-only in a market where open-source engines were free. It exited as an AI acquihire, and customers were given three months to leave[^rockset-vb].
- **Firebolt.** A closed fork of ClickHouse sold as a warehouse. After raising over $260M it released a free edition (Firebolt Core) and cut most staff in 2026[^firebolt-calcalist].

# Why

1. **Open-source distribution beat closed services.** ClickHouse spread bottom-up long before it had a company. Rockset and Firebolt had to sell top-down against free alternatives.
2. **Operational simplicity is a feature.** ClickHouse's single-binary deployment beat Druid's and Pinot's multi-role clusters for most teams.
3. **The workload shifted to observability.** Engines that handled semi-structured logs well and cheaply captured the growth.
4. **Lakehouse pressure from below.** For many "real-time-ish" dashboards, a warehouse or lakehouse with caching became good enough, which shrank the dedicated market to high-concurrency and low-latency cases.
5. **AI acquihires.** Rockset's retrieval and indexing skills were worth more to OpenAI than its database business[^rockset-vb].

# Lessons

- In infrastructure categories with an open-source leader, closed-source challengers need a 10× advantage or a distribution channel.
- A category can grow while most of its vendors fail. Winner-take-most is common when one project has momentum.
- Operations cost (number of node types, tuning knobs) decides adoption as much as benchmark speed.

# Related

- [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md) · [Single-node analytics](/ideas/analytics-lakehouse/single-node-analytics.md) · [Streaming databases](/ideas/streaming-messaging/streaming-databases-and-ivm.md)
- [ClickHouse](/systems/clickhouse.md) · [Apache Druid](/systems/apache-druid.md) · [Apache Pinot](/systems/apache-pinot.md) · [StarRocks](/systems/starrocks.md) · [Rockset](/systems/rockset.md) · [Firebolt](/systems/firebolt.md)
- [ClickHouse spins out of Yandex](/events/2021-09-clickhouse-spins-out-of-yandex.md) · [OpenAI acquires Rockset](/events/2024-06-openai-acquires-rockset.md)
