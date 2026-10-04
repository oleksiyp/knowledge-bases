---
type: Event
title: "Jordan Tigani publishes \"Big Data is Dead\""
description: "MotherDuck's CEO, a former BigQuery leader, argued that most companies' data and queries are small enough for a single machine. The essay became the manifesto of the DuckDB-era single-node analytics movement."
date: 2023-02-07
year: 2023
kind: paper
signal: positive
ideas: [ideas/analytics-lakehouse/single-node-analytics]
systems: [systems/motherduck, systems/duckdb]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: big-data-dead
    resource: https://motherduck.com/blog/big-data-is-dead/
    title: "Jordan Tigani: Big Data is Dead (2023-02-07)"
---

# What happened

On 2023-02-07 Jordan Tigani published "Big Data is Dead" on the MotherDuck blog. Drawing on his BigQuery experience, he argued that the predicted data explosion had not reached most organisations. Data sizes had grown only marginally while hardware grew faster, and most queries touch small, recent data. Practitioners could therefore "stop worrying about data size"[^big-data-dead].

# Why it matters

The essay named a shift that DuckDB, Polars and fast single-node hardware were already making possible. It gave teams permission to drop distributed systems for most analytics. It was also, transparently, marketing for MotherDuck. The argument largely held up: DuckDB adoption kept rising, and AWS bought its developers in 2026.

# Related

- [Single-node analytics](/ideas/analytics-lakehouse/single-node-analytics.md) · [MotherDuck](/systems/motherduck.md) · [DuckDB](/systems/duckdb.md)
