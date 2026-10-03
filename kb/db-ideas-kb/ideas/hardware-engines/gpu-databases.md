---
type: Idea
title: "GPU-accelerated databases"
description: "Run SQL on GPUs for massive parallelism and memory bandwidth. Mostly failed as a standalone database business: MapD/OmniSci/HEAVY.AI was absorbed by Nvidia and abandoned, Voltron Data shut down in 2025, BlazingSQL died, while GPU acceleration survives as a plug-in (Spark RAPIDS, cuDF, Sirius) and in small vendors (Kinetica, SQream)."
tags: [hardware, gpu, olap, analytics, nvidia]
area: hardware-engines
verdict: mixed
hype_peak: 2022
adoption_2026: niche
origins: "GPU query processing research from mid-2000s; MapD (2013), Kinetica (GPUdb, from US Army/intelligence work), SQream (2010) were the first products."
key_systems: [systems/kinetica, systems/sqream, systems/heavydb, systems/voltron-data, systems/photon]
related_ideas: [ideas/analytics-lakehouse/gpu-accelerated-analytics, ideas/hardware-engines/query-compilation-vs-vectorization, ideas/hardware-engines/rdma-smartnic-fpga-offload]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: heavy-wiki
    resource: https://en.wikipedia.org/wiki/HEAVY.AI
    title: "HEAVY.AI — Wikipedia"
  - id: sirius
    resource: https://arxiv.org/abs/2508.04701
    title: "Rethinking Analytical Processing in the GPU Era (Sirius, 2025)"
  - id: nvidia-sirius
    resource: https://developer.nvidia.com/blog/nvidia-gpu-accelerated-sirius-achieves-record-setting-clickbench-record/
    title: "NVIDIA blog: CUDA-X Powers the New Sirius GPU Engine for DuckDB"
    author: org:nvidia
  - id: sqream-c
    resource: https://techcrunch.com/2023/09/12/sqream-series-c/
    title: "TechCrunch: SQream calls in $45M to expand its GPU-based big data analytics platform"
  - id: kinetica-sqlgpt
    resource: https://finance.yahoo.com/news/kinetica-launches-quick-start-sql-131000535.html
    title: "Kinetica Launches Quick Start for SQL-GPT (2024)"
  - id: cudf-pandas
    resource: https://developer.nvidia.com/blog/rapids-cudf-accelerates-pandas-nearly-150x-with-zero-code-changes
    title: "NVIDIA: RAPIDS cuDF accelerates pandas with zero code changes"
    author: org:nvidia
  - id: nvidia-spark
    resource: https://blogs.nvidia.com/blog/project-aether-accelerates-apache-spark/
    title: "NVIDIA blog: Enterprises Ignite Big Savings With NVIDIA-Accelerated Apache Spark"
    author: org:nvidia
  - id: photon-paper
    resource: https://people.eecs.berkeley.edu/~matei/papers/2022/sigmod_photon.pdf
    title: "Behm et al.: Photon: A Fast Query Engine for Lakehouse Systems (SIGMOD 2022)"
---

# Summary

**Verdict: mixed, leaning failed for standalone GPU databases.** GPUs have an order of magnitude more memory bandwidth and parallelism than CPUs, and every few years a new company promises GPU SQL will replace CPU warehouses. Between 2018 and 2026 that business mostly failed. HEAVY.AI (formerly MapD, then OmniSci, launched 2013) was acquired by Nvidia in 2025 and the project was abandoned[^heavy-wiki]; Voltron Data, which raised about $110M and built the Theseus GPU engine, shut down in late 2025 after failing to launch in time[^pavlo-2025]. Pavlo summarised: these events "continue the trend of the inviability of GPU-accelerated databases"[^pavlo-2025]. What survives is GPU acceleration as a component: Spark RAPIDS, cuDF for pandas, and the 2025 research engine Sirius that plugs into DuckDB and Doris via Substrait[^sirius]. Kinetica and SQream continue as small specialists.

# The idea

- Columnar scans, joins and aggregations are data-parallel; a GPU with HBM bandwidth should run them many times faster than a CPU.
- Put the whole database on GPUs (MapD, Kinetica, SQream), or accelerate a CPU engine's operators (Spark RAPIDS, BlazingSQL, Sirius).
- After 2023, a second argument: data centers are filling with GPUs for AI, so why not use them for data processing too?

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018–20 | RAPIDS/cuDF launched by Nvidia; Spark 3.0 plugin enables GPU SQL/ETL | + |
| 2021 | BlazingSQL (GPU SQL on RAPIDS) ceases; team joins Voltron Data (unconfirmed detail) | − |
| 2022 | OmniSci renames to HEAVY.AI / HeavyDB[^heavy-wiki] | mixed |
| 2022 | Databricks chooses a CPU vectorized engine (Photon) for its lakehouse[^photon-paper] | − |
| 2023 | SQream raises a $45M Series C[^sqream-c] | + |
| 2024 | Kinetica repositions around natural-language-to-SQL ("SQL-GPT")[^kinetica-sqlgpt]; cuDF pandas accelerator GA[^cudf-pandas] | mixed |
| 2024 | Voltron Data changes CEO and lays off roughly half its staff (reported; unconfirmed) | − |
| 2025 | Nvidia acquires HEAVY.AI; project abandoned[^heavy-wiki]; Voltron Data shuts down[^pavlo-2025] | − |
| 2025 | Sirius reports ~7x speedup on TPC-H with DuckDB, ClickBench records[^sirius][^nvidia-sirius] | + |

# What succeeded

- **Acceleration libraries.** cuDF and the RAPIDS Accelerator for Spark let users speed up existing code without changing databases; Nvidia reports large cost savings for Spark ETL[^nvidia-spark][^cudf-pandas].
- **Composable GPU engines.** Sirius treats the GPU as the primary engine but inherits parser, optimizer and storage from DuckDB/Doris through Substrait, avoiding building a full database[^sirius].
- **Niche verticals.** Kinetica (geospatial, real-time, defense/telecom) and SQream (very large on-prem analytics) survive with specialised customers.

# What failed

- **Standalone GPU database companies.** MapD/OmniSci/HEAVY.AI, BlazingSQL and Voltron Data all ended in shutdown or acquihire[^heavy-wiki][^pavlo-2025].
- **Displacing CPU warehouses.** Snowflake, BigQuery, Databricks and Redshift stayed CPU-based through 2025; Databricks explicitly built a CPU-vectorized engine[^photon-paper].
- **Small-data speed claims.** For data that does not fit in GPU memory, PCIe transfer and spilling erased much of the advantage.

# Why

1. **Data movement, not compute, is the bottleneck.** Analytical queries read data from object storage or SSD; GPU memory was small (tens of GB) until recent HBM generations, and PCIe bandwidth limited feeding it.
2. **GPU cost and availability.** After 2023, GPUs were the scarcest, most expensive cloud resource, reserved for AI training and inference. Spending them on SQL was hard to justify.
3. **CPU engines kept improving.** Vectorized engines (DuckDB, Photon, Velox, ClickHouse) and wider SIMD narrowed the gap at much lower cost.
4. **A full DBMS is much more than fast operators.** Transactions, storage formats, optimizers, connectors and tooling take years; startups that rebuilt the whole stack ran out of time. Pavlo's verdict on Voltron: it "failed to launch it in a timely manner"[^pavlo-2025].
5. **The plug-in model avoids these costs.** Engines that accelerate someone else's database (Spark RAPIDS, Sirius) only need to win on operators.

# Lessons

- Hardware advantage at the operator level does not equal a viable database company; total system cost and data movement decide.
- When a new accelerator appears, bet on plugging into existing engines (Substrait, Arrow) rather than building a new DBMS.
- Watch for a change in conditions: larger HBM, NVLink/C2C CPU-GPU links (Grace Hopper) and GPU-friendly file formats could revive the idea. Pavlo expects major-vendor GPU announcements in 2026[^pavlo-2025].

# Related

- [Kinetica](/systems/kinetica.md), [SQream](/systems/sqream.md), [HeavyDB](/systems/heavydb.md), [Voltron Data](/systems/voltron-data.md), [Photon](/systems/photon.md)
- [GPU-accelerated analytics (analytics area)](/ideas/analytics-lakehouse/gpu-accelerated-analytics.md)
- [JIT compilation vs vectorization](/ideas/hardware-engines/query-compilation-vs-vectorization.md)
