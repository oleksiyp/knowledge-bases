---
type: Idea
title: "Composable data systems: Arrow, DataFusion, Velox, Substrait, ADBC"
description: "Build databases from shared, reusable open components (columnar memory format, execution engines, plan IR, connectivity) instead of monoliths. Winning: Arrow is universal and DataFusion and Velox power dozens of products. The cross-engine plan IR (Substrait) and the company built to sell the stack (Voltron Data) did not succeed."
tags: [composable, arrow, datafusion, velox, substrait, adbc, query-engines]
area: analytics-lakehouse
verdict: winning
hype_peak: 2023
adoption_2026: common
origins: "Apache Arrow (2016, Wes McKinney and others); Apache Calcite (2014) as an earlier reusable optimizer"
key_systems: [systems/apache-arrow, systems/datafusion, systems/velox, systems/voltron-data, systems/polars, systems/duckdb]
related_ideas: [ideas/analytics-lakehouse/single-node-analytics, ideas/analytics-lakehouse/gpu-accelerated-analytics, ideas/hardware-engines/compiled-vs-vectorized-execution]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: composable-manifesto
    resource: https://www.vldb.org/pvldb/vol16/p2679-pedreira.pdf
    title: "Pedreira et al.: The Composable Data Management System Manifesto (PVLDB 16, 2023)"
  - id: velox-paper
    resource: https://www.vldb.org/pvldb/vol15/p3372-pedreira.pdf
    title: "Pedreira et al.: Velox: Meta's Unified Execution Engine (PVLDB 15, 2022)"
  - id: velox-tt
    resource: https://www.techtarget.com/searchdatamanagement/news/252524446/Meta-and-partners-build-Velox-open-source-execution-engine
    title: "TechTarget: Meta and partners build Velox open source execution engine (2022-08-31)"
  - id: datafusion-tlp
    resource: https://news.apache.org/foundation/entry/apache-software-foundation-announces-new-top-level-project-apache-datafusion
    title: "ASF: Apache DataFusion becomes a Top-Level Project (2024)"
  - id: df-blog
    resource: https://datafusion.apache.org/blog/
    title: "Apache DataFusion blog (releases, Comet 1.0)"
  - id: arrow-gh
    resource: https://github.com/apache/arrow
    title: "Apache Arrow GitHub repository (releases)"
  - id: dbt-core-v2
    resource: https://docs.getdbt.com/blog/dbt-core-v2-is-here
    title: "dbt Core v2 is here (2026-06-01; ADBC-based adapters)"
  - id: duckdb-substrait
    resource: https://github.com/duckdb/duckdb/pull/15810
    title: "DuckDB PR #15810: Removing all core code and CI related to the substrait extension (Jan 2025)"
  - id: pavlo-2022
    resource: https://www.cs.cmu.edu/~pavlo/blog/2022/12/2022-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2022: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary

**Verdict: winning.** The idea that new data systems should be built by assembling shared open components has largely come true at the lower layers. **Apache Arrow** is the columnar interchange format almost every analytics tool speaks, with quarterly major releases (24.0 Apr 2026, 25.0 Jul 2026)[^arrow-gh]. **DataFusion** (Rust) became the default "build your own database" kit and an Apache TLP in 2024[^datafusion-tlp]. **Velox** (C++, Meta) powers Presto C++ and Spark-via-Gluten[^velox-tt]. **ADBC** now underpins dbt Core v2's adapters[^dbt-core-v2]. The upper layers did worse. **Substrait**, the cross-engine plan IR, saw limited real use, and DuckDB moved its extension out of core in 2025[^duckdb-substrait]. **Voltron Data**, the $110M company built to commercialise the composable Arrow stack, shut down[^pavlo-2022][^pavlo-2025].

# The idea

Every analytics engine reimplements the same parts: a columnar memory layout, vectorized operators, file readers, a SQL parser, an optimizer and client protocols. The 2023 *Composable Data Management System Manifesto* (Meta, Voltron Data, Databricks, Sundeck and others) argued that these should be standardised, reusable libraries joined by open interfaces[^composable-manifesto]:

- **Arrow** for in-memory data and **Arrow Flight / ADBC** for transport and connectivity;
- **Velox** or **DataFusion** for execution;
- **Substrait** as the plan IR between front ends (SQL dialects, dataframes) and engines;
- Parquet, Iceberg and similar formats for storage.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019 | DataFusion donated to the Apache Arrow project | + |
| 2021 | Voltron Data founded (Arrow, RAPIDS and BlazingSQL leaders) | + |
| 2022 | Voltron raises $110M seed + A[^pavlo-2022]; Meta open-sources Velox (Aug), paper at VLDB[^velox-tt][^velox-paper]; InfluxDB IOx built on DataFusion/Arrow[^pavlo-2022] | + |
| 2023 | Composable Data Management System Manifesto (VLDB)[^composable-manifesto] | + |
| 2024 | DataFusion becomes an Apache TLP[^datafusion-tlp]; Voltron lays off about half its staff (Nov) | ± |
| 2025 | DuckDB removes Substrait from core (Jan)[^duckdb-substrait]; Voltron Data shuts down[^pavlo-2025] | − |
| 2026 | DataFusion 55 and Comet 1.0 (Spark accelerator)[^df-blog]; dbt Core v2 adopts ADBC[^dbt-core-v2] | + |

# What succeeded

- **Arrow as lingua franca.** pandas 2, Polars, DuckDB, Spark (Arrow-based UDFs), BigQuery and Snowflake connectors, and Flight SQL all use it. Converting between in-memory formats largely stopped being an engineering cost.
- **DataFusion as a startup substrate.** InfluxDB 3, GreptimeDB, many lakehouse and streaming engines, and Comet (Spark acceleration) build on it. Release cadence and contributor counts kept rising into 2026[^df-blog].
- **Velox inside large companies.** Meta, IBM/Ahana (Presto C++), Intel (Gluten) and others use Velox to replace JVM execution with native vectorized C++[^velox-tt].
- **Speed of building new systems.** A credible analytics engine can now be built by a small team in months.

# What failed

- **Substrait as the narrow waist.** Few production systems exchange Substrait plans. Engines kept their own IRs, and DuckDB handed its extension to the community[^duckdb-substrait].
- **Composability as a business.** Voltron Data had well-known founders and $110M, but no product customers would pay for until its GPU engine (Theseus), which Pavlo says it "failed to launch in a timely manner"[^pavlo-2025]. Infrastructure that everyone uses is hard to charge for.
- **Optimizer reuse.** There is still no widely shared cost-based optimizer component. Calcite is the closest, and it is not the default for new Rust and C++ engines.

# Why

1. **Lower layers have clear interfaces.** A columnar buffer layout or a vectorized hash join has an obvious contract. A query plan or a cost model is tied to each engine's semantics, so standardising it gives less benefit and costs more.
2. **Network effects favour data formats.** Each new Arrow consumer raises Arrow's value for everyone. A plan IR only pays off if both producers and consumers adopt it, which is a chicken-and-egg problem.
3. **Hyperscalers and vendors embed, they don't pay.** Composable components lower the cost of building competitors, which helps adoption and hurts the monetisation of the components themselves.
4. **Rust timing.** DataFusion benefited from the wave of Rust database rewrites after 2020.

# Lessons

- Standardise data at rest and in memory first. Standardising computation (plans, optimizers) is much harder.
- Open infrastructure succeeds as a commons funded by companies that sell something else. A pure "composable stack" company has no natural product.
- Composability speeds up market entry, so expect more engines competing for the same customers.

# Related

- [Single-node analytics](/ideas/analytics-lakehouse/single-node-analytics.md) · [GPU-accelerated analytics](/ideas/analytics-lakehouse/gpu-accelerated-analytics.md) · [Compiled vs vectorized execution](/ideas/hardware-engines/compiled-vs-vectorized-execution.md)
- [Apache Arrow](/systems/apache-arrow.md) · [DataFusion](/systems/datafusion.md) · [Velox](/systems/velox.md) · [Voltron Data](/systems/voltron-data.md) · [Polars](/systems/polars.md)
- [Composable manifesto paper](/papers/2023-composable-data-management-system-manifesto.md)
