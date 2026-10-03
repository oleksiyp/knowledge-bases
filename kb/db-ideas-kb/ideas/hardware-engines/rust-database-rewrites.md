---
type: Idea
title: "Rewriting databases in Rust (and Zig)"
description: "Build new database engines, or rewrite existing ones, in memory-safe systems languages instead of C/C++/Go/Java. Winning: most new data systems since 2020 are Rust (InfluxDB 3, DataFusion, Materialize, RisingWave, GreptimeDB, Turso's SQLite rewrite, Neon's storage, Polars), with Zig for TigerBeetle; but full rewrites of existing products proved costly, as InfluxDB's third storage-engine rewrite showed."
tags: [rust, zig, languages, storage-engine, rewrite]
area: hardware-engines
verdict: winning
hype_peak: 2024
adoption_2026: common
origins: "TiKV (2016) was an early Rust storage system; Rust 1.0 in 2015; Apache Arrow's Rust implementation and DataFusion (2019 donation) created a shared Rust data stack."
key_systems: [systems/influxdb, systems/turso, systems/tigerbeetle, systems/materialize, systems/risingwave, systems/datafusion, systems/polars, systems/neon]
related_ideas: [ideas/hardware-engines/lsm-tree-evolution, ideas/hardware-engines/io-uring-kernel-bypass, ideas/analytics-lakehouse/composable-data-systems, ideas/nosql-models/time-series-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: influx-iox
    resource: https://www.influxdata.com/blog/announcing-influxdb-iox/
    title: "InfluxData: Announcing InfluxDB IOx – The Future Core of InfluxDB Built with Rust and Arrow (Nov 2020)"
    author: org:influxdata
  - id: influx-3
    resource: https://www.datanami.com/2023/04/26/influxdata-revamps-influxdb-with-3-0-release-embraces-apache-arrow/
    title: "Datanami: InfluxData Revamps InfluxDB with 3.0 Release, Embraces Apache Arrow (April 2023)"
  - id: influx-72h
    resource: https://www.influxdata.com/blog/influxdb3-open-source-public-alpha-jan-27/
    title: "InfluxData: An update on InfluxDB 3 Core's 72-hour limitation (Jan 2025)"
    author: org:influxdata
  - id: limbo
    resource: https://turso.tech/blog/introducing-limbo-a-complete-rewrite-of-sqlite-in-rust
    title: "Turso: Introducing Limbo: A complete rewrite of SQLite in Rust (Dec 2024)"
    author: org:turso
  - id: devclass-limbo
    resource: https://devclass.com/2024/12/12/sqlite-re-implemented-in-rust-to-achieve-asynchronous-i-o-and-other-changes/
    title: "DevClass: SQLite re-implemented in Rust to achieve asynchronous I/O and other changes"
  - id: tb-arch
    resource: https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/ARCHITECTURE.md
    title: "TigerBeetle ARCHITECTURE.md"
    author: org:tigerbeetle
  - id: pebble-blog
    resource: https://www.cockroachlabs.com/blog/pebble-rocksdb-kv-store/
    title: "Cockroach Labs: Introducing Pebble"
    author: org:cockroach-labs
  - id: pavlo-2022
    resource: https://www.cs.cmu.edu/~pavlo/blog/2022/12/2022-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2022: A Year in Review"
    author: person:andy-pavlo
---

# Summary

**Verdict: winning for new systems; mixed for rewrites of existing ones.** After 2019 Rust became the default language for new data-infrastructure projects: the Arrow/DataFusion stack, Polars, InfluxDB 3.0, Materialize, RisingWave, GreptimeDB, Databend, Neon's storage layer, LanceDB, turbopuffer and Turso's ground-up SQLite rewrite all use it. Zig took a smaller but visible slot with TigerBeetle, designed around io_uring and static memory allocation[^tb-arch]. The motivation is memory safety without garbage-collection pauses, plus a shared ecosystem of reusable crates. The failure mode is the rewrite of a working product: InfluxDB's move to a Rust/Arrow/DataFusion core (announced 2020, shipped 2023) was its third storage engine, and the open-source release in 2025 caused backlash over feature gating[^influx-iox][^influx-3][^influx-72h].

# The idea

- C and C++ engines have recurring memory-safety bugs; Java and Go engines suffer garbage-collection pauses and cgo/JNI boundaries (Cockroach Labs cited cgo overhead as one reason to write Pebble[^pebble-blog]).
- Rust promises C++-level performance with compile-time safety; Zig offers explicit control and simplicity.
- A shared Rust data stack (Arrow, DataFusion, Parquet, object_store, sqlparser) lets a small team assemble a database from components.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019 | DataFusion donated to Apache Arrow | + |
| 2020 | InfluxData announces IOx, a Rust core on Arrow, DataFusion and Parquet[^influx-iox] | + |
| 2020–22 | Materialize, RisingWave, GreptimeDB, Neon, Polars launch in Rust; TigerBeetle in Zig[^tb-arch] | + |
| 2023 | InfluxDB 3.0 (Rust) released, first in cloud products[^influx-3] | mixed |
| 2024 | Turso announces Limbo, a full Rust rewrite of SQLite, later renamed Turso[^limbo][^devclass-limbo] | + |
| 2025 | InfluxDB 3 Core OSS alpha; community objects to a 72-hour query window, partly walked back[^influx-72h] | − |

# What succeeded

- **Greenfield systems.** The Rust ecosystem let small teams ship credible engines quickly, often by reusing DataFusion and Arrow.
- **Safety and predictability.** No GC pauses and fewer memory-corruption bugs are real advantages for long-running servers.
- **Recruiting and community.** Rust attracts contributors; projects use it as a signal of modernity.

# What failed

- **Rewrites of established products.** InfluxDB 1.x/2.x users faced a new engine, a changed query story (Flux deprecated in favour of SQL/InfluxQL) and gated OSS features; competitors used the transition to win users[^influx-72h].
- **Rewriting SQLite is a huge job.** Turso's rewrite is ambitious; SQLite's maturity comes from decades of testing, and compatibility is a moving target[^devclass-limbo]. As of 2026 it is in beta (unconfirmed exact status).
- **Language does not fix architecture.** Pavlo noted that InfluxDB's earlier engines used mmap, which he had warned against; the new system dropped it[^pavlo-2022]. The bigger wins came from design changes, not the language alone.

# Why

1. **Memory safety became a mainstream requirement** (government guidance, security incidents), favoring Rust for new infrastructure.
2. **Component reuse** lowered the cost of building a database; the Rust data stack is the most complete outside the JVM.
3. **Rewrites carry migration cost** that users pay. A rewrite also tends to bundle a business-model change (cloud-first, open-core), compounding the backlash.

# Lessons

- Pick the language for a new engine on ecosystem reuse and safety; Rust is now the default choice for data infrastructure.
- Do not rewrite a working product's core unless users get a clear new capability; migrations cost trust.
- Language choice matters less than storage and execution architecture.

# Related

- [InfluxDB](/systems/influxdb.md), [Turso](/systems/turso.md), [TigerBeetle](/systems/tigerbeetle.md), [DataFusion](/systems/datafusion.md), [Materialize](/systems/materialize.md), [RisingWave](/systems/risingwave.md)
- [Turso announces Limbo (2024)](/events/2024-12-turso-limbo-rust-rewrite.md)
