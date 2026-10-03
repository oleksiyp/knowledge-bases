---
type: System
title: Pebble
description: "Cockroach Labs' Go key-value store, inspired by and on-disk compatible with RocksDB, which replaced RocksDB as CockroachDB's default engine in v20.2 (November 2020)."
resource: https://github.com/cockroachdb/pebble
tags: [storage-engine, lsm-tree, go, cockroachdb]
kind: oss
first_release: 2020
org: "Cockroach Labs"
license: BSD-3-Clause
outcome: stable
ideas: [ideas/hardware-engines/lsm-tree-evolution, ideas/hardware-engines/rust-database-rewrites]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pebble-blog
    resource: https://www.cockroachlabs.com/blog/pebble-rocksdb-kv-store/
    title: "Cockroach Labs: Introducing Pebble: A RocksDB-inspired key-value store written in Go"
    author: org:cockroach-labs
  - id: pebble-gh
    resource: https://github.com/cockroachdb/pebble
    title: "cockroachdb/pebble on GitHub (about 6k stars, 2026-10)"
  - id: infoworld-crdb
    resource: https://www.infoworld.com/article/2261638/the-most-important-new-features-in-cockroachdb.html
    title: "InfoWorld: The most important new features in CockroachDB"
---

# Summary

Pebble is an LSM key-value store written in Go by Cockroach Labs. It reimplements the subset of RocksDB that CockroachDB needs, remains compatible with RocksDB's on-disk format, and avoids the cost of crossing the cgo boundary on every operation[^pebble-blog]. It was introduced as an option in CockroachDB 20.1 and became the default in 20.2 (November 2020)[^infoworld-crdb]. Other Go projects use it as a library (about 6k GitHub stars)[^pebble-gh].

# Timeline

| Year | Event |
|---|---|
| 2020 | Optional engine in CockroachDB 20.1; default in 20.2[^infoworld-crdb] |
| 2021+ | RocksDB support removed from CockroachDB; Pebble gets CockroachDB-specific features |

# What worked

- Cockroach Labs got control over a critical component, better debuggability in one language, and features tailored to its needs[^pebble-blog].
- Shows that a heavy RocksDB user can reduce scope and gain stability by owning its engine.

# What didn't

- Large ongoing engineering cost; Pebble is maintained essentially by one company for one product.
- Not a general RocksDB replacement for non-Go users.

# Related

- [RocksDB](/systems/rocksdb.md), [CockroachDB](/systems/cockroachdb.md)
- [CockroachDB makes Pebble default (2020)](/events/2020-11-cockroachdb-pebble-default.md)
