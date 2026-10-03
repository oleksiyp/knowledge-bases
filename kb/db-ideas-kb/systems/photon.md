---
type: System
title: Photon (Databricks)
description: "Databricks' C++ vectorized query engine for Spark SQL and DataFrames on the lakehouse; SIGMOD 2022 best industry paper. A flagship example of the industry choosing vectorization over JIT compilation."
resource: https://people.eecs.berkeley.edu/~matei/papers/2022/sigmod_photon.pdf
tags: [query-engine, vectorization, lakehouse, spark, databricks]
kind: product
first_release: 2020
org: "Databricks"
license: proprietary
outcome: thriving
ideas: [ideas/hardware-engines/query-compilation-vs-vectorization, ideas/analytics-lakehouse/lakehouse]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: photon-paper
    resource: https://people.eecs.berkeley.edu/~matei/papers/2022/sigmod_photon.pdf
    title: "Behm et al.: Photon: A Fast Query Engine for Lakehouse Systems (SIGMOD 2022)"
  - id: photon-award
    resource: https://www.datanami.com/2022/06/30/databricks-scores-acm-sigmod-awards-for-spark-and-photon/
    title: "Datanami: Databricks Scores ACM SIGMOD Awards for Spark and Photon"
  - id: nvidia-spark
    resource: https://blogs.nvidia.com/blog/project-aether-accelerates-apache-spark/
    title: "NVIDIA: Enterprises Ignite Big Savings With NVIDIA-Accelerated Apache Spark"
    author: org:nvidia
---

# Summary

Photon replaces Spark's JVM execution for supported operators with a native, vectorized C++ engine that plugs into Spark's planner and memory manager. The SIGMOD 2022 paper reports average speedups of about 3x and up to over 10x on customer workloads versus the previous Databricks Runtime, and explains the choice of interpreted vectorization over code generation partly on ease of building, debugging and maintaining the engine[^photon-paper]. The paper won SIGMOD's best industry paper award[^photon-award]. Photon is a paid feature (higher DBU rate) on Databricks SQL and clusters.

# Timeline

| Year | Event |
|---|---|
| 2020 | Photon previewed in Databricks |
| 2022 | GA; SIGMOD best industry paper[^photon-award] |
| 2023–26 | Default engine for Databricks SQL warehouses |

# What worked

- Big speedups without user code changes; a central part of Databricks' warehouse push against Snowflake.
- Evidence that vectorized engines handle messy lakehouse data adaptively[^photon-paper].

# What didn't

- Proprietary; open-source Spark users do not get it, which pushed alternatives (Gluten/Velox, Comet/DataFusion, Spark RAPIDS) to fill the gap.
- Priced as a premium, so cost benefits depend on the workload; Nvidia has published comparisons claiming GPU Spark beats Photon on cost for some ETL jobs (vendor claim)[^nvidia-spark].

# Related

- [JIT compilation vs vectorization](/ideas/hardware-engines/query-compilation-vs-vectorization.md)
- [Databricks](/systems/databricks.md), [Velox](/systems/velox.md)
