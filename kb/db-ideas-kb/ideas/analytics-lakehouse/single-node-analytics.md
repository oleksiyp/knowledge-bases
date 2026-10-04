---
type: Idea
title: "\"Big data is dead\": single-node and in-process analytics (DuckDB, Polars, MotherDuck)"
description: "Most analytical datasets fit on one modern machine, so an embedded vectorized engine (DuckDB) or a fast dataframe library (Polars) beats a distributed cluster for most work. Winning: DuckDB and Polars became default tools and AWS bought DuckDB's developer company in 2026. The 'hybrid' cloud business built on the idea (MotherDuck) is still unproven."
tags: [olap, embedded, duckdb, polars, single-node, big-data]
area: analytics-lakehouse
verdict: winning
hype_peak: 2024
adoption_2026: common
origins: "MonetDB/X100 vectorized execution (CWI, 2000s); DuckDB started at CWI in 2018 (SIGMOD 2019 demo); 'Scalability! But at what COST?' (McSherry et al., HotOS 2015)"
key_systems: [systems/duckdb, systems/motherduck, systems/polars, systems/ducklake, systems/clickhouse]
related_ideas: [ideas/analytics-lakehouse/composable-data-systems, ideas/analytics-lakehouse/cloud-data-warehouses, ideas/postgres-ecosystem/extensions-as-platform, ideas/edge-devx/sqlite-in-production]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: big-data-dead
    resource: https://motherduck.com/blog/big-data-is-dead/
    title: "Jordan Tigani: Big Data is Dead (MotherDuck blog, 2023-02-07)"
  - id: duckdb-1
    resource: https://duckdb.org/2024/06/03/announcing-duckdb-100
    title: "Announcing DuckDB 1.0.0 (2024-06-03)"
  - id: duck-aws
    resource: https://duckdb.org/2026/08/26/ducklabs-to-join-aws
    title: "DuckLabs to Join AWS, Projects to Remain Open Source (2026-08-26)"
  - id: reg-aws-duck
    resource: https://www.theregister.com/databases/2026/08/26/aws-buys-ducklabs-the-people-behind-the-popular-in-process-olap-database/5292590
    title: "The Register: AWS buys DuckLabs (2026-08-26)"
  - id: pavlo-2022
    resource: https://www.cs.cmu.edu/~pavlo/blog/2022/12/2022-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2022: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: md-ga
    resource: https://www.prnewswire.com/news-releases/motherduck-announces-general-availability-brings-simplicity-and-power-of-duckdb-in-a-serverless-data-warehouse-302168749.html
    title: "PR Newswire: MotherDuck announces general availability (2024-06-12)"
  - id: md-duck-amazon
    resource: https://motherduck.com/blog/duckdb-amazon/
    title: "MotherDuck blog: DuckDB outgrows its nest (Aug 2026)"
  - id: polars-posts
    resource: https://pola.rs/posts/
    title: "Polars blog (1.0, Cloud, GPU engine, 2.0 preview)"
  - id: tc-polars
    resource: https://techcrunch.com/2025/09/29/the-startup-behind-open-source-tool-polars-raises-21m-from-accel/
    title: "TechCrunch: The startup behind Polars raises $21M from Accel (2025-09-29)"
  - id: ducklake-10
    resource: https://duckdb.org/2026/04/13/ducklake-10
    title: "DuckLake v1.0 (2026-04-13)"
---

# Summary

**Verdict: winning.** Jordan Tigani's February 2023 essay "Big Data is Dead" argued that the predicted data explosion never reached most companies. Data sizes grew a little, hardware grew faster, and most queries touch a small, recent slice of data[^big-data-dead]. Since then the single-node analytics stack has become standard practice. DuckDB reached 1.0 in June 2024[^duckdb-1] and became the default embedded OLAP engine, used inside notebooks, Postgres extensions, BI tools and lakehouse pipelines. Polars displaced pandas for new performance-sensitive Python work[^polars-posts]. In August 2026 AWS agreed to acquire DuckLabs, the company employing DuckDB's core developers, with the project staying MIT under the non-profit DuckDB Foundation[^duck-aws][^reg-aws-duck]. What remains unproven is the standalone business: MotherDuck's "hybrid" cloud warehouse now competes with a hyperscaler that employs DuckDB's core team[^md-duck-amazon].

# The idea

A laptop or a single cloud VM in 2023 had dozens of cores, hundreds of GB of RAM and multi-GB/s NVMe. A vectorized, in-process columnar engine on such a machine handles datasets of hundreds of GB with no cluster, no network shuffle and no operations work. The claim had two parts. **Technical:** scale-up beats scale-out for most workloads. **Economic:** most companies pay for distributed systems they don't need.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018–2019 | DuckDB begins at CWI; first releases and SIGMOD 2019 demo | + |
| 2021 | DuckDB Labs and the DuckDB Foundation formed; Polars gains traction | + |
| 2022 | MotherDuck raises $45M+ seed/A to commercialise DuckDB[^pavlo-2022] | + |
| 2023 | "Big Data is Dead" essay (Feb)[^big-data-dead]; MotherDuck $52.5M Series B (Sept)[^pavlo-2023] | + |
| 2024 | DuckDB 1.0 (June 3)[^duckdb-1]; MotherDuck GA (June 12)[^md-ga]; Polars 1.0; four competing DuckDB-in-Postgres extensions (pg_duckdb, pg_analytics, pg_mooncake, Crunchy)[^pavlo-2024] | + |
| 2025 | DuckLake launched; Polars Cloud and €18M Series A[^tc-polars]; Hydra (DuckDB-in-Postgres startup) folds[^pavlo-2025] | ± |
| 2026 | DuckLake 1.0 (Apr)[^ducklake-10]; Polars 2.0 preview[^polars-posts]; AWS acquires DuckLabs (Aug)[^duck-aws] | + |

# What succeeded

- **DuckDB as infrastructure.** It is embedded everywhere: Python and R, Postgres (pg_duckdb), MotherDuck, BI tools, data-quality tools and as the local engine for lakehouse files. The Foundation structure kept it MIT through an acquisition of its developers[^duck-aws].
- **Polars.** Rust-native, multi-threaded and lazily optimized. It became pandas' main challenger and added streaming, cloud and GPU execution[^polars-posts].
- **A change in default architecture.** "Try DuckDB first" became normal advice for analysis under 1TB. Many teams dropped Spark clusters for single-node jobs.
- **Strategic validation.** AWS described DuckDB as "connective tissue" across its data estate after the deal[^reg-aws-duck].

# What failed

- **Monetising embedded engines.** DuckDB Labs lived on support contracts and was absorbed by AWS rather than becoming an independent company. Hydra, which put DuckDB in Postgres, folded[^pavlo-2025]. Four DuckDB-in-Postgres projects competing in 2024 shows how easy the engine is to embed and how hard it is to build a moat around[^pavlo-2024].
- **MotherDuck's hybrid execution** (split queries between laptop and cloud) is technically interesting but has not been shown to drive mass adoption. Its pricing changed several times after GA.
- **Concurrency and multi-writer scenarios.** An in-process engine is still single-writer. Shared, governed, multi-user analytics still needs a server or a catalog (DuckLake's motivation)[^ducklake-10].

# Why

1. **Hardware outran data.** Core counts, RAM and NVMe bandwidth grew faster than the working sets of typical companies[^big-data-dead].
2. **Vectorized execution research matured.** DuckDB applied about 15 years of CWI work (MonetDB/X100) in a library with no dependencies.
3. **Developer experience.** `pip install duckdb`, then SQL on Parquet/CSV/JSON on S3 with no server. Polars offered a similar experience for dataframes.
4. **Permissive licensing plus a foundation.** MIT licensing let anyone embed it, which drove ubiquity. The Foundation kept a credible neutral steward even after AWS bought the developers.
5. **Distributed systems' cost and complexity** (Spark tuning, cluster bills) gave teams a strong reason to try something simpler.

# Lessons

- Re-check your scale assumptions every hardware generation. Yesterday's big data is often today's single-node problem.
- Ubiquitous embeddable engines create a lot of value but capture little. Expect acquisition by a platform rather than an IPO.
- A foundation that holds the IP can keep an open-source project stable through ownership changes.

# Related

- [Composable data systems](/ideas/analytics-lakehouse/composable-data-systems.md) · [Cloud data warehouses](/ideas/analytics-lakehouse/cloud-data-warehouses.md) · [Postgres extension ecosystem](/ideas/postgres-ecosystem/extensions-as-platform.md) · [SQLite in production](/ideas/edge-devx/sqlite-in-production.md)
- [DuckDB](/systems/duckdb.md) · [MotherDuck](/systems/motherduck.md) · [Polars](/systems/polars.md) · [DuckLake](/systems/ducklake.md)
- [DuckDB 1.0](/events/2024-06-duckdb-1-0.md) · [AWS acquires DuckLabs](/events/2026-08-aws-acquires-ducklabs.md) · [Big Data is Dead essay](/events/2023-02-big-data-is-dead-essay.md)
