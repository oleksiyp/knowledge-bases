---
type: Idea
title: "GPU-accelerated analytical databases (OmniSci/HeavyDB, BlazingSQL, Voltron Theseus, Sirius)"
description: "Run SQL analytics on GPUs for order-of-magnitude speedups. Failed commercially in 2018–2025: BlazingSQL folded into Voltron Data, Voltron shut down, and HEAVY.AI was absorbed by Nvidia with HeavyDB abandoned. CPU engines got fast enough and data movement dominated. A research-led revival (Sirius, GPU backends for DuckDB and Polars) is under way but unproven."
tags: [gpu, olap, hardware, voltron, heavydb, sirius]
area: analytics-lakehouse
verdict: failed
hype_peak: 2022
adoption_2026: rare
origins: "MapD (2013, later OmniSci/HEAVY.AI), Kinetica, SQream; NVIDIA RAPIDS/cuDF (2018)"
key_systems: [systems/heavydb, systems/voltron-data, systems/polars, systems/duckdb, systems/kinetica, systems/sqream]
related_ideas: [ideas/hardware-engines/gpu-databases, ideas/analytics-lakehouse/composable-data-systems]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: blazing-dbdb
    resource: https://dbdb.io/db/blazingsql
    title: "Database of Databases: BlazingSQL"
  - id: heavy-dbdb
    resource: https://dbdb.io/db/heavydb
    title: "Database of Databases: HeavyDB (MapD → OmniSci → HeavyDB; acquired by Nvidia 2025, project abandoned)"
  - id: heavy-rebrand
    resource: https://insidehpc.com/2022/03/omnisci-rebrands-as-heavy-ai/
    title: "insideHPC: OmniSci rebrands as HEAVY.AI (2022-03)"
  - id: pavlo-2022
    resource: https://www.cs.cmu.edu/~pavlo/blog/2022/12/2022-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2022: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: voltron-info
    resource: https://www.theinformation.com/briefings/ai-startup-voltron-data-switches-ceos-lays-off-staff
    title: "The Information: Voltron Data switches CEOs, lays off staff (Nov 2024)"
  - id: accenture-voltron
    resource: https://newsroom.accenture.com/news/2025/accenture-invests-in-voltron-data-to-help-organizations-use-gpu-technology-to-simplify-large-scale-data-processing
    title: "Accenture invests in Voltron Data (2025)"
  - id: sirius-paper
    resource: https://arxiv.org/abs/2508.04701
    title: "Yogatama et al.: Rethinking Analytical Processing in the GPU Era (Sirius; CIDR 2026)"
  - id: sirius-nvidia
    resource: https://developer.nvidia.com/blog/nvidia-gpu-accelerated-sirius-achieves-record-setting-clickbench-record/
    title: "NVIDIA developer blog: Sirius GPU engine for DuckDB sets ClickBench records"
  - id: polars-posts
    resource: https://pola.rs/posts/
    title: "Polars blog (GPU engine, GPU streaming backend 2026)"
---

# Summary

**Verdict: failed (2018–2025), with a possible second attempt.** Every independent GPU-analytics company of the period either folded or was absorbed. BlazingSQL closed in 2021 and its team helped found Voltron Data[^blazing-dbdb]. Voltron raised $110M in 2022[^pavlo-2022], laid off about half its staff in November 2024[^voltron-info], took a strategic investment from Accenture in 2025[^accenture-voltron], and then shut down. In Pavlo's words it "failed to launch [Theseus] in a timely manner"[^pavlo-2025]. MapD/OmniSci/HEAVY.AI was acquired by Nvidia in 2025 and HeavyDB development stopped[^heavy-dbdb]. Pavlo's 2025 review describes "the inviability of GPU-accelerated databases": modern CPU systems are fast enough that the difference rarely justifies the cost[^pavlo-2025]. The counter-signal is Sirius (UW-Madison and NVIDIA), a GPU-native drop-in engine for DuckDB that reported 7–8× better cost efficiency on TPC-H and ClickBench[^sirius-paper][^sirius-nvidia], along with GPU backends in Polars[^polars-posts].

# The idea

GPUs offer 10–50× the memory bandwidth and FLOPs of CPUs. Scans, filters, hash joins and aggregations are data-parallel, so a GPU database should be much faster for interactive analytics, and with RAPIDS/cuDF (2018) the libraries existed. Pitches included sub-second queries over billions of rows (OmniSci), distributed GPU SQL over data lakes (BlazingSQL), and petabyte-scale GPU query engines for the largest enterprises (Voltron Theseus).

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | MapD renames to OmniSci; NVIDIA launches RAPIDS | + |
| 2019 | BlazingSQL open-sourced | + |
| 2021 | BlazingSQL shuts down; team co-founds Voltron Data[^blazing-dbdb] | − |
| 2022 | Voltron Data raises $110M (Feb)[^pavlo-2022]; OmniSci becomes HEAVY.AI and HeavyDB (Mar)[^heavy-rebrand] | + |
| 2024 | Voltron Data changes CEO and lays off about half its staff (Nov)[^voltron-info] | − |
| 2025 | Accenture invests in Voltron[^accenture-voltron]; Voltron shuts down[^pavlo-2025]; Nvidia acquires HEAVY.AI and HeavyDB is abandoned (last commit June 2025)[^heavy-dbdb] | − |
| 2025–2026 | Sirius reports ClickBench records and appears at CIDR 2026[^sirius-paper][^sirius-nvidia]; Polars adds a GPU streaming backend[^polars-posts] | + |

# What succeeded

- **GPU libraries as components.** cuDF and the RAPIDS libraries are used as accelerators inside other systems (Spark RAPIDS, Polars' GPU engine, Sirius) rather than as standalone databases[^polars-posts][^sirius-paper].
- **Niche visual and geospatial analytics.** OmniSci/HEAVY.AI and Kinetica found customers in telecom, defense and geospatial work where interactive visualisation of very large point datasets mattered.
- **Benchmarks.** On cost-normalised ClickBench, a GPU engine on a GH200 instance beat top CPU engines, which shows the hardware case can be real[^sirius-nvidia].

# What failed

- **Every standalone GPU database business.** No independent GPU OLAP vendor reached scale in this period.
- **Voltron Data's bet.** It spent heavily on open-source Arrow work plus a proprietary GPU engine, and the product arrived after the funding environment and buyer interest had gone[^pavlo-2025].
- **Performance advantage in practice.** End-to-end queries are limited by PCIe transfers, GPU memory capacity (tens of GB in 2018–2022), storage I/O and data loading, not by compute.

# Why

1. **CPUs and vectorized engines caught up.** DuckDB, ClickHouse, Photon and Velox got CPU analytics close enough to memory-bandwidth limits that GPU speedups shrank for typical queries[^pavlo-2025].
2. **Data movement.** Data lives in object storage or on CPU-attached RAM. Copying it to the GPU often cost more than the speedup saved. Coherent CPU–GPU memory (Grace Hopper) is what makes Sirius-style designs plausible now[^sirius-nvidia].
3. **Cost and availability.** After 2023, GPUs were scarce and priced for AI training. Analytics could not compete for them.
4. **Go-to-market.** Buyers wanted compatibility with Spark, Snowflake and Postgres dialects. Proprietary GPU databases asked them to migrate for speed alone, and speed rarely justifies a migration.

# Lessons

- Raw hardware advantage does not decide adoption. End-to-end bottlenecks (I/O, transfer, memory capacity) do.
- Accelerators win as drop-in back ends for existing engines (Sirius under DuckDB, RAPIDS under Spark and Polars), not as new databases.
- Watch hardware topology changes (unified CPU–GPU memory, CXL). They can reopen ideas that failed on the previous generation.

# Related

- [GPU databases (hardware view)](/ideas/hardware-engines/gpu-databases.md) · [Composable data systems](/ideas/analytics-lakehouse/composable-data-systems.md)
- [HeavyDB](/systems/heavydb.md) · [Voltron Data](/systems/voltron-data.md) · [Kinetica](/systems/kinetica.md) · [SQream](/systems/sqream.md) · [Polars](/systems/polars.md)
