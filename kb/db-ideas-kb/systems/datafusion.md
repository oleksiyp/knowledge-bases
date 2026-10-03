---
type: System
title: Apache DataFusion
description: "Extensible Rust query engine built on Arrow (donated to Arrow in 2019, Apache TLP in 2024). It became the default toolkit for building new analytical databases (InfluxDB 3, Comet and many startups), a clear composability success."
resource: https://datafusion.apache.org
tags: [query-engine, rust, arrow, composable, apache]
kind: oss
first_release: 2017
org: "Apache Software Foundation"
license: Apache-2.0
outcome: thriving
ideas: [ideas/analytics-lakehouse/composable-data-systems]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: datafusion-tlp
    resource: https://news.apache.org/foundation/entry/apache-software-foundation-announces-new-top-level-project-apache-datafusion
    title: "ASF: Apache DataFusion becomes a Top-Level Project (2024)"
  - id: df-blog
    resource: https://datafusion.apache.org/blog/
    title: "Apache DataFusion blog"
  - id: df-gh
    resource: https://github.com/apache/datafusion
    title: "Apache DataFusion GitHub"
  - id: pavlo-2022
    resource: https://www.cs.cmu.edu/~pavlo/blog/2022/12/2022-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2022: A Year in Review"
    author: person:andy-pavlo
---

# Summary

DataFusion, started by Andy Grove, is a Rust library providing a SQL parser, logical and physical planner, optimizer and vectorized execution over Arrow. Users can replace or extend almost every part of it. It was donated to Apache Arrow in February 2019 and became its own Apache top-level project in April 2024[^datafusion-tlp]. InfluxData rebuilt InfluxDB's engine (IOx, GA 2022) on DataFusion and Arrow[^pavlo-2022], and many Rust-era databases, streaming systems and lakehouse tools followed. Releases run roughly monthly (45.0 in Feb 2025 to 55.0 in Aug 2026). Comet, a DataFusion-based Spark accelerator, reached 1.0 in 2026[^df-blog][^df-gh].

# Timeline

| Year | Event |
|---|---|
| 2019 | Donated to Apache Arrow |
| 2022 | InfluxDB IOx GA on DataFusion[^pavlo-2022] |
| 2024 | Apache TLP[^datafusion-tlp] |
| 2026 | v55; Comet 1.0[^df-blog] |

# What worked

- Its library-first design and Rust's popularity for new data systems made it the "LLVM of databases" for many startups.

# What didn't

- Single-node raw performance historically trailed DuckDB, and distributed execution (Ballista) saw little adoption compared with the core library.

# Related

- [Composable data systems](/ideas/analytics-lakehouse/composable-data-systems.md) · [Apache Arrow](/systems/apache-arrow.md) · [Velox](/systems/velox.md) · [InfluxDB](/systems/influxdb.md)
