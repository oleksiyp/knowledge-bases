---
type: Idea
title: "JIT query compilation vs. vectorized execution"
description: "Two ways to make analytical query execution CPU-efficient: compile each query to machine code (HyPer, Umbra) or interpret it over batches of values with precompiled kernels (MonetDB/X100 lineage: DuckDB, Velox, Photon, ClickHouse). Vectorization won the industry; compilation stayed niche because it is harder to build, debug and profile, and the speed difference is small."
tags: [query-execution, compilation, vectorization, olap, cpu]
area: hardware-engines
verdict: niche
hype_peak: 2018
adoption_2026: niche
origins: "Vectorized execution: MonetDB/X100 (CIDR 2005) → VectorWise. Data-centric compilation: HyPer (Neumann, VLDB 2011). Both predate 2018; the 2018–2026 story is which one industry chose."
key_systems: [systems/hyper, systems/umbra, systems/cedardb, systems/photon, systems/duckdb, systems/velox, systems/clickhouse]
related_ideas: [ideas/hardware-engines/ssd-optimized-buffer-managers, ideas/hardware-engines/gpu-databases, ideas/analytics-lakehouse/composable-data-systems]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: kersten-vldb18
    resource: https://www.vldb.org/pvldb/vol11/p2209-kersten.pdf
    title: "Kersten et al.: Everything You Always Wanted to Know About Compiled and Vectorized Queries But Were Afraid to Ask (PVLDB 11, 2018)"
  - id: photon-paper
    resource: https://people.eecs.berkeley.edu/~matei/papers/2022/sigmod_photon.pdf
    title: "Behm et al.: Photon: A Fast Query Engine for Lakehouse Systems (SIGMOD 2022)"
  - id: photon-award
    resource: https://www.datanami.com/2022/06/30/databricks-scores-acm-sigmod-awards-for-spark-and-photon/
    title: "Datanami: Databricks Scores ACM SIGMOD Awards for Spark and Photon"
  - id: hyper-journey
    resource: https://tableau.github.io/hyper-db/journey/
    title: "Hyper API: Our Journey"
    author: org:tableau
  - id: umbra-cidr
    resource: https://vldb.org/cidrdb/2020/umbra-a-disk-based-system-with-in-memory-performance.html
    title: "Neumann, Freitag: Umbra (CIDR 2020)"
  - id: cedardb-about
    resource: https://cedardb.com/about/
    title: "CedarDB: About us"
    author: org:cedardb
---

# Summary

**Verdict: compilation is niche; vectorization won the industry.** In 2018 the two best-known techniques for fast in-memory analytics were data-centric code generation (HyPer, compiling each query to LLVM) and vectorized interpretation (VectorWise lineage). A joint TUM–CMU–CWI paper implemented both in one test bed and found neither dominates: vectorization hides cache-miss latency better, compilation needs fewer instructions on cache-resident data, and the differences are usually small[^kersten-vldb18]. Industry then chose overwhelmingly: Databricks Photon (SIGMOD 2022 best industry paper), DuckDB, Meta's Velox, ClickHouse, DataFusion, Snowflake and most new engines are vectorized. Photon's authors said a vectorized engine was easier to build and maintain than a JIT[^photon-paper]. Compilation survives in HyPer (Tableau/Salesforce), Umbra and CedarDB, and in partial forms (expression JIT in PostgreSQL, Spark's whole-stage codegen).

# The idea

- **Compilation.** Fuse a pipeline of operators into one tight loop of machine code per query, keeping tuples in registers. Maximal CPU efficiency, but needs a compiler backend, adds compile latency, and makes the engine hard to debug and profile.
- **Vectorization.** Process batches of ~1,000–2,000 values per operator call with precompiled, SIMD-friendly kernels. Interpretation overhead is amortized over the batch; the code is ordinary C++/Rust that can be unit-tested and profiled.

# Timeline 2018–2026

| Year | Event | Signal (for compilation) |
|---|---|---|
| 2018 | Tableau 10.5 ships HyPer as its data engine[^hyper-journey] | + |
| 2018 | Kersten et al. compare both in one system: roughly a tie[^kersten-vldb18] | mixed |
| 2019 | DuckDB released as a vectorized embedded OLAP engine | − |
| 2020 | Umbra (CIDR) uses compilation with an adaptive low-latency backend[^umbra-cidr] | + |
| 2022 | Photon paper wins SIGMOD best industry paper; vectorized, explicitly not JIT[^photon-paper][^photon-award] | − |
| 2022 | Meta's Velox (VLDB 2022): vectorized, reusable execution library | − |
| 2024 | CedarDB launches with Umbra's compiling engine[^cedardb-about] | + |
| 2024–26 | Composable vectorized engines (DataFusion, Velox) adopted widely | − |

# What succeeded

- **Vectorized engines everywhere.** Nearly every analytical engine started after 2018 is vectorized, often in Rust or C++ with Arrow-style memory.
- **Compilation where one team owns everything.** HyPer in Tableau and Salesforce, Umbra/CedarDB: small expert teams that built their own compiler backends get excellent performance.
- **Hybrid techniques.** Vectorized engines borrow compilation ideas (fused kernels, templated specialization); compiling engines use adaptive execution to cut compile latency.

# What failed

- **Compilation as the industry default.** In 2015 compilation looked like the future; by 2026 few new systems choose it.
- **LLVM compile latency.** For short queries, compile time could exceed execution time, forcing interpreters or custom fast backends (Umbra built its own)[^umbra-cidr].

# Why

1. **Engineering cost dominates small speed differences.** If performance is roughly equal[^kersten-vldb18], the approach that ordinary engineers can build, test, profile and extend wins.
2. **Lakehouse data is messy.** Photon's paper emphasizes adaptivity to raw, uncurated data (per-batch choices about nulls, encodings, ASCII vs UTF-8), which batch-at-a-time code handles naturally[^photon-paper].
3. **Composability.** Vectorized operator libraries (Velox, DataFusion) can be shared across systems; compiled engines are monolithic.
4. **Hardware trends favor batches.** Wider SIMD, deep memory hierarchies and GPUs all reward processing columns in batches.

# Lessons

- When two techniques have similar performance, maintainability and team scalability decide.
- Benchmark papers that implement both sides fairly (Kersten et al.) can settle debates faster than years of marketing.
- Specialised techniques can still win in companies with deep expertise (CedarDB), but they rarely become the default.

# Related

- [HyPer](/systems/hyper.md), [Umbra](/systems/umbra.md), [CedarDB](/systems/cedardb.md), [Photon](/systems/photon.md), [DuckDB](/systems/duckdb.md), [Velox](/systems/velox.md)
- [Paper: Compiled vs vectorized (VLDB 2018)](/papers/2018-compiled-vs-vectorized-queries.md)
