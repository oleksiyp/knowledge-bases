---
type: System
title: Polars
description: "Rust DataFrame library with a lazy query optimizer and streaming engine, created by Ritchie Vink. It became pandas' main challenger (1.0 in 2024), and its company raised an €18M Series A for Polars Cloud in 2025."
resource: https://pola.rs
tags: [dataframe, rust, single-node, arrow, python]
kind: oss
first_release: 2020
org: "Polars Inc."
license: MIT
outcome: growing
ideas: [ideas/analytics-lakehouse/single-node-analytics, ideas/analytics-lakehouse/composable-data-systems, ideas/analytics-lakehouse/gpu-accelerated-analytics]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: polars-posts
    resource: https://pola.rs/posts/
    title: "Polars blog"
  - id: tc-polars
    resource: https://techcrunch.com/2025/09/29/the-startup-behind-open-source-tool-polars-raises-21m-from-accel/
    title: "TechCrunch: Polars raises $21M from Accel (2025-09-29)"
  - id: polars-gh
    resource: https://github.com/pola-rs/polars
    title: "Polars GitHub"
---

# Summary

Polars is a DataFrame library written in Rust on an Arrow-style columnar memory model. Unlike pandas it is multi-threaded by default and has a lazy API with a query optimizer (predicate and projection pushdown) and a streaming engine for larger-than-memory data. It grew quickly in Python data work from 2022 and reached 1.0 in mid-2024. Polars Inc., formed in 2023, launched Polars Cloud and distributed Polars in September 2025 and raised an €18M (~$21M) Series A led by Accel[^tc-polars][^polars-posts]. In 2026 it added a GPU streaming backend (with NVIDIA) and previewed Polars 2.0 with streaming as the default[^polars-posts][^polars-gh].

# Timeline

| Year | Event |
|---|---|
| 2020 | First releases |
| 2023 | Company formed |
| 2024 | Polars 1.0 |
| 2025 | Polars Cloud; €18M Series A[^tc-polars] |
| 2026 | GPU streaming backend; 2.0 preview[^polars-posts] |

# What worked

- Large speedups over pandas with a cleaner, expression-based API, and an MIT licence.

# What didn't (yet)

- pandas' installed base and ecosystem remain huge, and the commercial cloud is unproven against Spark/Databricks and DuckDB/MotherDuck.

# Related

- [Single-node analytics](/ideas/analytics-lakehouse/single-node-analytics.md) · [DuckDB](/systems/duckdb.md) · [Apache Arrow](/systems/apache-arrow.md)
