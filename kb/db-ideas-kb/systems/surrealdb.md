---
type: System
title: SurrealDB
description: "A Rust multi-model database (documents, graph edges, key-value, vectors, live queries) with its own SurrealQL. It raised $44M in total and shipped 3.0 in February 2026, after criticism in 2025 that 2.x defaulted to no fsync."
resource: https://surrealdb.com
tags: [multi-model, rust, graph, document, vector, durability]
kind: product
first_release: 2022
org: "SurrealDB Ltd. (London)"
license: "BSL-1.1 (core)"
outcome: growing
ideas: [ideas/nosql-models/multi-model-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: durability
    resource: https://surrealdb.com/surrealdb/benchmarks
    title: "SurrealDB benchmark methodology and disk-sync defaults"
  - id: a
    resource: https://siliconangle.com/2024/06/18/multi-model-database-startup-surrealdb-raises-20m-announces-cloud-beta-access/
    title: "SiliconANGLE: SurrealDB raises $20M (2024-06-18)"
  - id: v3
    resource: https://tech.eu/2026/02/17/surrealdb-secures-23m-and-launches-surrealdb-3-0-to-address-ai-agent-memory-challenges/
    title: "Tech.eu: SurrealDB secures $23M and launches SurrealDB 3.0 (2026-02-17)"
  - id: fsync
    resource: https://blog.cf8.gg/surrealdbs-ch/
    title: "SurrealDB is sacrificing data durability to make benchmarks look better (2025-08-23)"
  - id: lobsters
    resource: https://lobste.rs/s/8tycd0/surrealdb_is_sacrificing_data
    title: "Lobsters discussion of the SurrealDB durability post"
  - id: numbers
    resource: https://surrealdb.com/blog/surrealdb-3-x-by-the-numbers
    title: "SurrealDB: 3.x by the numbers"
    author: org:surrealdb
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary

SurrealDB is a venture-funded attempt at a broad multi-model database. It is a Rust engine with pluggable storage (RocksDB, SurrealKV, TiKV) that combines documents, record links and graph edges, full-text and vector search, permissions and live queries behind SurrealQL. It raised a $20M Series A in June 2024 (FirstMark, Georgian) and launched Surreal Cloud in beta[^a]. In August 2025 a widely shared post showed that SurrealDB defaulted to `SURREAL_SYNC_DATA=false`, meaning writes were not fsynced, so its benchmark numbers described a configuration that could lose acknowledged writes on a crash[^fsync][^lobsters]. Pavlo's 2025 review called this out as well[^pavlo-2025]. SurrealDB 3.0 (GA February 17, 2026) enables sync by default, and the company re-ran benchmarks with fsync on[^durability]. It came with a $23M Series A extension (total about $44M) and repositioning as "AI agent memory"[^v3].

# Timeline

| Year | Event |
|---|---|
| 2024 | $20M Series A; Surreal Cloud beta (Jun)[^a] |
| 2025 | Durability-default controversy (Aug)[^fsync] |
| 2026 | 3.0 GA with fsync on by default; $23M extension (Feb)[^v3][^durability] |

# What worked

- Developer experience: a single binary, embedded or server, with a broad feature set and an energetic community.

# What didn't

- The 2.x disk-sync default made durability assumptions material to benchmark interpretation. The vendor now explicitly documents full disk durability for its 3.x comparison.[^durability]
- A proprietary query language and BSL license in a market moving toward SQL and Postgres.

The causal lesson is about measurement, not motive. A benchmark can accurately measure a configuration while still mislead readers who assume stronger crash guarantees. Comparing persistence settings before comparing throughput is therefore part of evaluating the design. The changed default is a positive correction; it is not proof that every storage backend or workload has identical guarantees.[^durability]

# Related

- [Multi-model databases](/ideas/nosql-models/multi-model-databases.md)
- [ArangoDB](/systems/arangodb.md), [Azure Cosmos DB](/systems/cosmos-db.md)
