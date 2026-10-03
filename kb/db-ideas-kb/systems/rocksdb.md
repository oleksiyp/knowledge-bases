---
type: System
title: RocksDB
description: "Meta's embeddable LSM-tree key-value store, forked from LevelDB in 2012. The most widely embedded storage engine of 2018–2026 (MyRocks, TiKV, YugabyteDB, Kafka Streams, Flink state), and the base of forks such as Speedb and Titan."
resource: https://github.com/facebook/rocksdb
tags: [storage-engine, lsm-tree, key-value, embedded, meta]
kind: oss
first_release: 2013
org: "Meta (Facebook)"
license: "GPL-2.0 OR Apache-2.0"
outcome: thriving
ideas: [ideas/hardware-engines/lsm-tree-evolution]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: rocksdb-gh
    resource: https://github.com/facebook/rocksdb
    title: "facebook/rocksdb on GitHub (about 32k stars, 2026-10)"
  - id: rocksdb-fast21
    resource: https://www.usenix.org/system/files/fast21-dong.pdf
    title: "Dong et al.: The RocksDB Experience (FAST 2021)"
  - id: myrocks-vldb
    resource: https://www.vldb.org/pvldb/vol13/p3217-matsunobu.pdf
    title: "MyRocks: LSM-Tree Database Storage Engine Serving Facebook's Social Graph (PVLDB 13, 2020)"
  - id: pebble-blog
    resource: https://www.cockroachlabs.com/blog/pebble-rocksdb-kv-store/
    title: "Cockroach Labs: Introducing Pebble"
  - id: titan
    resource: https://github.com/tikv/titan
    title: "tikv/titan"
---

# Summary

RocksDB is a C++ LSM-tree key-value library tuned for flash. Its FAST 2021 retrospective describes development priorities moving from write amplification to space amplification to CPU efficiency as hardware and workloads changed[^rocksdb-fast21]. At Meta, MyRocks (MySQL on RocksDB) replaced InnoDB on the main user database, roughly halving storage[^myrocks-vldb]. Outside Meta it became the default engine to embed when building a distributed database or stateful stream processor. The repository has about 32k GitHub stars[^rocksdb-gh].

# Timeline

| Year | Event |
|---|---|
| 2012–13 | Forked from LevelDB at Facebook; open-sourced |
| 2016–20 | MyRocks deployed for Facebook's social graph[^myrocks-vldb] |
| 2020 | CockroachDB replaces RocksDB with Pebble[^pebble-blog] |
| 2021 | FAST retrospective[^rocksdb-fast21] |
| 2024 | Redis acquires Speedb, a RocksDB fork |

# What worked

- Performance and space efficiency on SSDs; extensive production hardening at Meta scale.
- Pluggability (column families, compaction styles, merge operators, BlobDB) let many systems adapt it; TiKV's Titan adds WiscKey-style value separation[^titan].

# What didn't

- Hundreds of tuning options; poor defaults for many workloads; compaction stalls.
- Roadmap driven by Meta's needs; heavy users (Cockroach Labs) found it worth writing their own engine[^pebble-blog].
- The C++ API is awkward from Go/Java (cgo/JNI overhead).

# Related

- [LSM-trees and the RocksDB monoculture](/ideas/hardware-engines/lsm-tree-evolution.md)
- [Pebble](/systems/pebble.md), [Speedb](/systems/speedb.md)
