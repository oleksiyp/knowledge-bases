---
type: System
title: Apache Arrow
description: "Language-independent columnar in-memory format plus libraries (Flight, Flight SQL, ADBC). It became the lingua franca of analytics tooling in 2018–2026, the most successful part of the composable-data-systems movement, even though its biggest corporate funder (Voltron Data) failed."
resource: https://arrow.apache.org
tags: [columnar, in-memory, composable, apache, interoperability]
kind: oss
first_release: 2016
org: "Apache Software Foundation"
license: Apache-2.0
outcome: thriving
ideas: [ideas/analytics-lakehouse/composable-data-systems, ideas/analytics-lakehouse/single-node-analytics]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: arrow-gh
    resource: https://github.com/apache/arrow
    title: "Apache Arrow GitHub (releases 24.0 Apr 2026, 25.0 Jul 2026)"
  - id: dbt-core-v2
    resource: https://docs.getdbt.com/blog/dbt-core-v2-is-here
    title: "dbt Core v2 is here (2026-06-01; ADBC/Arrow adapters)"
  - id: composable-manifesto
    resource: https://www.vldb.org/pvldb/vol16/p2679-pedreira.pdf
    title: "The Composable Data Management System Manifesto (PVLDB 2023)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Arrow defines a standard columnar memory layout so that engines, dataframes and drivers can exchange data without serialisation. Around it grew Arrow Flight (RPC), Flight SQL, ADBC (Arrow Database Connectivity, a columnar alternative to JDBC/ODBC), compute kernels and implementations in a dozen languages. Between 2018 and 2026 it became the default interchange layer for pandas 2, Polars, DuckDB, Spark's Python UDFs, DataFusion, Velox and the client libraries of cloud warehouses. The 2023 composable-systems manifesto put Arrow at the base of its stack[^composable-manifesto]. Releases kept a quarterly major cadence (24.0 in Apr 2026, 25.0 in Jul 2026)[^arrow-gh], and dbt Core v2 (June 2026) built its adapters on ADBC[^dbt-core-v2]. Voltron Data, its largest corporate sponsor, shut down in 2025[^pavlo-2025] with no visible effect on Arrow's release cadence[^arrow-gh].

# Timeline

| Year | Event |
|---|---|
| 2016 | Project launched (Apache TLP) |
| 2019 | DataFusion donated to Arrow |
| 2021–2022 | Voltron Data formed around Arrow |
| 2023 | ADBC; Arrow named as foundation in the composable manifesto[^composable-manifesto] |
| 2025 | Voltron Data shuts down[^pavlo-2025] |
| 2026 | dbt Core v2 adopts ADBC[^dbt-core-v2] |

# What worked

- Network effects: each additional consumer made Arrow more valuable. The format is simple, stable and permissively licensed.

# What didn't

- Arrow Flight/Flight SQL adoption as a database wire protocol has been slower than the in-memory format's. Commercial sponsorship proved fragile.

# Related

- [Composable data systems](/ideas/analytics-lakehouse/composable-data-systems.md) · [DataFusion](/systems/datafusion.md) · [Voltron Data](/systems/voltron-data.md) · [Polars](/systems/polars.md)
