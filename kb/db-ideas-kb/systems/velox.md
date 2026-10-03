---
type: System
title: Velox
description: "Meta's open-source C++ vectorized execution library (open-sourced Aug 2022, VLDB 2022 paper). It replaces JVM execution in Presto (Prestissimo) and Spark (via Gluten), the flagship of the composable-data-systems movement inside big companies."
resource: https://velox-lib.io
tags: [execution-engine, vectorized, composable, meta, presto, spark]
kind: oss
first_release: 2022
org: "Meta (with IBM/Ahana, Intel, Voltron Data and others)"
license: Apache-2.0
outcome: growing
ideas: [ideas/analytics-lakehouse/composable-data-systems]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: velox-paper
    resource: https://www.vldb.org/pvldb/vol15/p3372-pedreira.pdf
    title: "Velox: Meta's Unified Execution Engine (PVLDB 15, 2022)"
  - id: velox-tt
    resource: https://www.techtarget.com/searchdatamanagement/news/252524446/Meta-and-partners-build-Velox-open-source-execution-engine
    title: "TechTarget: Meta and partners build Velox (2022-08-31)"
  - id: velox-fb
    resource: https://engineering.fb.com/2023/03/09/open-source/velox-open-source-execution-engine/
    title: "Meta Engineering: Introducing Velox (2023-03-09)"
  - id: composable-manifesto
    resource: https://www.vldb.org/pvldb/vol16/p2679-pedreira.pdf
    title: "The Composable Data Management System Manifesto (PVLDB 2023)"
---

# Summary

Meta built Velox to stop maintaining separate execution engines in Presto, Spark, stream processing and ML preprocessing. It is a C++ library of vectorized operators, expression evaluation, memory management and I/O that each front end reuses. Meta open-sourced it on 2022-08-31 with partners Ahana, Intel and Voltron Data[^velox-tt], and described it at VLDB 2022[^velox-paper][^velox-fb]. Velox powers Prestissimo (Presto C++ workers) and Spark acceleration via Intel's Gluten. The 2023 composable manifesto, written by Velox's lead and others, generalised the approach[^composable-manifesto].

# Timeline

| Year | Event |
|---|---|
| 2020 | Development starts at Meta |
| 2022 | Open-sourced; VLDB paper[^velox-tt][^velox-paper] |
| 2023 | Composable manifesto[^composable-manifesto] |

# What worked

- It brought native vectorized execution to existing JVM engines without rewriting their front ends.

# What didn't

- It is a heavy C++ dependency to embed, and outside Meta, IBM and Intel-adjacent ecosystems most new engines chose DataFusion (Rust) or DuckDB instead.

# Related

- [Composable data systems](/ideas/analytics-lakehouse/composable-data-systems.md) · [DataFusion](/systems/datafusion.md) · [Photon](/systems/photon.md) · [Velox paper](/papers/2022-velox.md)
