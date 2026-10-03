---
type: Event
title: "CockroachDB 20.2 makes Pebble the default storage engine"
description: "Cockroach Labs replaced RocksDB with its own Go LSM engine, Pebble, as the default in CockroachDB 20.2, the most prominent case of a major user leaving the RocksDB monoculture."
date: 2020-11-10
year: 2020
kind: launch
signal: mixed
ideas: [ideas/hardware-engines/lsm-tree-evolution]
systems: [systems/pebble, systems/cockroachdb, systems/rocksdb]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: crdb-202
    resource: https://www.cockroachlabs.com/blog/cockroachdb-20-2-release/
    title: "Cockroach Labs: Announcing CockroachDB 20.2"
    author: org:cockroach-labs
  - id: pebble-blog
    resource: https://www.cockroachlabs.com/blog/pebble-rocksdb-kv-store/
    title: "Cockroach Labs: Introducing Pebble"
    author: org:cockroach-labs
  - id: infoworld-crdb
    resource: https://www.infoworld.com/article/2261638/the-most-important-new-features-in-cockroachdb.html
    title: "InfoWorld: The most important new features in CockroachDB"
---

# What happened

CockroachDB 20.2 was announced on 10 November 2020[^crdb-202]. Pebble, introduced as an option in 20.1, became the default storage engine, with RocksDB still selectable for that release[^infoworld-crdb]. Cockroach Labs cited better performance and stability, avoiding the cgo boundary, and control over future enhancements[^pebble-blog].

# Why it matters

RocksDB was the default foundation for distributed databases. A leading user rebuilding the engine in its own language showed the limits of a shared engine controlled by another company, and the value of owning the most critical layer.

# Related

- [Pebble](/systems/pebble.md), [RocksDB](/systems/rocksdb.md), [CockroachDB](/systems/cockroachdb.md)
- [LSM-trees and the RocksDB monoculture](/ideas/hardware-engines/lsm-tree-evolution.md)
