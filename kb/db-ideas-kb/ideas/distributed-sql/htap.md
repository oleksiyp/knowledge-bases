---
type: Idea
title: "HTAP: one database for transactions and analytics"
description: "Hybrid transactional/analytical processing runs OLTP and OLAP on the same fresh data in one system, usually a row store plus a columnar replica. Verdict: fading as a product category. It survives as a feature (columnar replicas, hybrid tables) and as an architecture assembled from parts (CDC into lakehouse or real-time OLAP). Its strongest advocates moved on and sold to Databricks."
tags: [htap, oltp, olap, columnar, cdc, lakehouse]
area: distributed-sql
verdict: fading
hype_peak: 2022
adoption_2026: niche
origins: "Gartner coined HTAP in 2014; SAP HANA, MemSQL and Oracle Database In-Memory were early examples"
key_systems: [systems/tidb, systems/singlestore, systems/snowflake, systems/alloydb, systems/databricks]
related_ideas: [ideas/distributed-sql/newsql-distributed-sql, ideas/analytics-lakehouse/lakehouse, ideas/streaming-messaging/cdc-integration-backbone, ideas/analytics-lakehouse/real-time-olap]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tidb-vldb
    resource: https://www.pingcap.com/blog/vldb-2020-tidb-a-raft-based-htap-database/
    title: "PingCAP: VLDB 2020, TiDB: A Raft-based HTAP Database"
    author: org:pingcap
  - id: singlestore-rename
    resource: https://www.businesswire.com/news/home/20201027005244/en/MemSQL-Changes-Name-to-SingleStore
    title: "BusinessWire: MemSQL changes name to SingleStore (2020-10-27)"
  - id: alloydb-intro
    resource: https://cloud.google.com/blog/products/databases/introducing-alloydb-for-postgresql
    title: "Google Cloud: Introducing AlloyDB for PostgreSQL (2022-05)"
    author: org:google-cloud
  - id: unistore-ga
    resource: https://www.snowflake.com/en/news/press-releases/snowflakes-unistore-unifies-transactional-and-analytical-data-with-the-general-availability-of-hybrid-tables/
    title: "Snowflake: Unistore hybrid tables generally available (2024-11-12)"
    author: org:snowflake
  - id: hybrid-limits
    resource: https://docs.snowflake.com/en/user-guide/tables-hybrid-limitations
    title: "Snowflake docs: Limitations and unsupported features for hybrid tables"
    author: org:snowflake
  - id: htap-dead
    resource: https://neon.com/blog/htap-is-dead
    title: "Zhou Sun: HTAP is Dead (2025-05-04)"
    author: person:zhou-sun
  - id: infoq-htap
    resource: https://www.infoq.com/news/2025/06/htap-databases/
    title: "InfoQ: HTAP: the Rise and Fall of Unified Database Systems? (2025-06)"
  - id: mooncake-dbx
    resource: https://www.databricks.com/blog/mooncake-labs-joins-databricks-accelerate-vision-lakebase
    title: "Databricks: Mooncake Labs joins Databricks to accelerate the vision of Lakebase (2025-10)"
    author: org:databricks
  - id: singlestore-bb
    resource: https://www.blocksandfiles.com/ai-ml/2025/09/17/singlestore-sidesteps-into-private-equity-ownership/1589537
    title: "Blocks and Files: SingleStore sidesteps into private equity ownership (2025-09-17)"
  - id: ss-vc-blog
    resource: https://www.singlestore.com/blog/a-new-chapter-for-singlestore-accelerating-our-growth-with-vector-capital/
    title: "SingleStore and Vector Capital close growth buyout to accelerate Enterprise AI innovation"
    author: org:singlestore
  - id: tidbx
    resource: https://www.pingcap.com/blog/introducing-tidb-x-a-new-foundation-distributed-sql-ai-era/
    title: "PingCAP: TiDB X, a new foundation for distributed SQL in the AI era (2025-10)"
    author: org:pingcap
  - id: htap-survey
    resource: https://arxiv.org/pdf/2404.15670
    title: "HTAP Databases: A Survey (arXiv 2404.15670, 2024)"
---

# Summary
**Verdict: fading.** HTAP promised to end ETL by running analytics directly on live transactional data in one engine. Between 2018 and 2024 nearly every vendor shipped something under the label: TiDB with TiFlash[^tidb-vldb], SingleStore (renamed from MemSQL in 2020)[^singlestore-rename], AlloyDB's columnar engine[^alloydb-intro], Snowflake's Unistore hybrid tables[^unistore-ga], and Oracle and SQL Server in-memory column stores. None of them displaced the standard pattern of an OLTP database plus CDC plus a separate warehouse or lakehouse. In May 2025 Zhou Sun, founder of Mooncake Labs, wrote "HTAP is Dead"[^htap-dead]. His company, Mooncake, was then bought by Databricks to bring Postgres data into the lakehouse through mirroring rather than through one engine[^mooncake-dbx]. That is the pattern that won: HTAP built from separate components, not one unified database.

# The idea
Keep one copy of the truth. A row-oriented engine handles point reads and writes, and a column-oriented representation, kept transactionally consistent and isolated from OLTP resource contention, serves scans and aggregates. TiDB's design is the cleanest example: Raft learners asynchronously replicate the log into TiFlash's column store, so analytical queries read fresh, consistent data without slowing the row store[^tidb-vldb]. The promised benefits were no pipelines, no staleness, and one bill.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2020 | TiDB HTAP paper (TiKV row store + TiFlash column store) at VLDB[^tidb-vldb]. MemSQL renames itself SingleStore to shed the "in-memory" tag[^singlestore-rename] | + |
| 2022 | AlloyDB launches with a columnar engine claiming up to 100x faster analytics than standard Postgres[^alloydb-intro]. Snowflake announces Unistore | + (peak) |
| 2024 | Snowflake hybrid tables GA on AWS (Nov 12)[^unistore-ga], with a long list of limitations[^hybrid-limits]. An academic HTAP survey catalogs designs[^htap-survey] | mixed |
| 2025 | "HTAP is Dead" (May 4)[^htap-dead] and InfoQ coverage[^infoq-htap]. SingleStore sold to Vector Capital (Sept)[^singlestore-bb]. Databricks buys Mooncake for Lakebase (Oct)[^mooncake-dbx] | − |

# What succeeded
- **HTAP as a feature.** Columnar replicas inside an operational database (TiFlash, AlloyDB columnar engine, Oracle/SQL Server column stores) are useful for operational reporting on a few tables. They stay as checkboxes.
- **SingleStore as a business, modestly.** It reached over $123M ARR with roughly break-even free cash flow by 2025[^singlestore-bb]. That is a viable company, but not the category leader its 2022 $1.3B valuation implied.
- **The goal, achieved by composition.** Fresh analytics on transactional data is now routine through CDC (Debezium, PeerDB, managed mirroring) into Iceberg/Delta or ClickHouse[^infoq-htap].

# What failed
- **One engine for both.** Warehouses (Snowflake, BigQuery, Databricks) won analytics by specializing in it and separating storage from compute[^infoq-htap]. Customers did not move their warehouse workloads onto their OLTP database, or the other way round.
- **Warehouse-native OLTP.** Snowflake's hybrid tables went GA in late 2024 with many restrictions[^hybrid-limits]. In 2025 Snowflake bought a Postgres company ([Crunchy Data](/systems/crunchy-data.md)) rather than relying on Unistore for OLTP. Databricks took the same route with Neon and Mooncake[^mooncake-dbx].
- **The category name.** HTAP-first vendors repositioned around AI. PingCAP pitched TiDB X in 2025 as distributed SQL for the "AI era" and for agents[^tidbx], and SingleStore's buyout announcement was framed around "Enterprise AI"[^ss-vc-blog].

# Why
1. **Resource contention is physical.** Large scans thrash caches, memory bandwidth and I/O that latency-sensitive transactions need. Isolating them means separate replicas, which is a split system anyway[^infoq-htap].
2. **Different buyers and budgets.** OLTP belongs to application teams, analytics to data teams. Each picked best-of-breed tools, and the data team's choice (the warehouse) became the center of gravity.
3. **Analytics needs more than one source.** Real analytics joins data from dozens of OLTP databases, SaaS APIs and event streams. An HTAP engine only sees its own tables, so a warehouse is still needed.
4. **CDC got cheap and good.** Once CDC into open table formats ran at seconds of latency, the freshness gap that justified HTAP mostly closed.

# Lessons
- Merging two workloads into one engine only wins if the same team owns both and they share most of their data.
- A capability that can be assembled from commodity parts (CDC + lakehouse) rarely supports a standalone product category.
- Watch where acquirers spend money. In 2025 the warehouse vendors bought Postgres companies; they did not build HTAP.

# Related
- Systems: [TiDB](/systems/tidb.md), [SingleStore](/systems/singlestore.md), [Snowflake](/systems/snowflake.md), [AlloyDB](/systems/alloydb.md), [Databricks](/systems/databricks.md)
- Ideas: [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md), [NewSQL](/ideas/distributed-sql/newsql-distributed-sql.md)
- Papers: [TiDB: A Raft-based HTAP Database](/papers/2020-tidb-raft-htap.md)
- Events: [SingleStore buyout](/events/2025-09-singlestore-vector-capital-buyout.md), [Databricks acquires Neon](/events/2025-05-databricks-acquires-neon.md)

[^tidb-vldb]: PingCAP blog on the VLDB 2020 paper.
[^singlestore-rename]: BusinessWire, 2020-10-27.
[^alloydb-intro]: Google Cloud blog, May 2022.
[^unistore-ga]: Snowflake press release, 2024-11-12.
[^hybrid-limits]: Snowflake documentation.
[^htap-dead]: Zhou Sun, 2025-05-04.
[^infoq-htap]: InfoQ, June 2025.
[^mooncake-dbx]: Databricks blog, Oct 2025.
[^singlestore-bb]: Blocks and Files, 2025-09-17.
[^htap-survey]: arXiv 2404.15670.
[^ss-vc-blog]: SingleStore blog, 2025.
[^tidbx]: PingCAP blog, Oct 2025.
