---
type: Idea
title: "LSM-trees and the RocksDB monoculture"
description: "Log-structured merge trees became the default storage engine for distributed and write-heavy databases, with RocksDB as the shared component. Won: RocksDB sits under MyRocks, TiKV, YugabyteDB, Kafka Streams, Flink and many more; but the monoculture also produced forks (Pebble in Go for CockroachDB, Speedb, Titan) when users needed control RocksDB's owners would not give."
tags: [storage-engine, lsm-tree, rocksdb, key-value, ssd]
area: hardware-engines
verdict: won
hype_peak: 2020
adoption_2026: mainstream
origins: "LSM-tree (O'Neil et al., 1996); Bigtable/LevelDB (2006/2011); RocksDB forked from LevelDB at Facebook in 2012 for flash."
key_systems: [systems/rocksdb, systems/pebble, systems/speedb, systems/cockroachdb, systems/tidb, systems/yugabytedb]
related_ideas: [ideas/hardware-engines/ssd-optimized-buffer-managers, ideas/hardware-engines/rust-database-rewrites, ideas/distributed-sql/newsql-distributed-sql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: rocksdb-fast21
    resource: https://www.usenix.org/system/files/fast21-dong.pdf
    title: "Dong et al.: Evolution of Development Priorities in Key-value Stores Serving Large-scale Applications: The RocksDB Experience (FAST 2021)"
  - id: myrocks-vldb
    resource: https://www.vldb.org/pvldb/vol13/p3217-matsunobu.pdf
    title: "Matsunobu et al.: MyRocks: LSM-Tree Database Storage Engine Serving Facebook's Social Graph (PVLDB 13, 2020)"
  - id: pebble-blog
    resource: https://www.cockroachlabs.com/blog/pebble-rocksdb-kv-store/
    title: "Cockroach Labs: Introducing Pebble: A RocksDB-inspired key-value store written in Go"
    author: org:cockroach-labs
  - id: titan
    resource: https://github.com/tikv/titan
    title: "tikv/titan: A RocksDB plugin for key-value separation, inspired by WiscKey"
  - id: speedb-tc
    resource: https://techcrunch.com/2024/03/21/redis-switches-licenses-acquires-speedb-to-go-beyond-its-core-in-memory-database/
    title: "TechCrunch: Redis switches licenses, acquires Speedb"
  - id: speedb-oss
    resource: https://www.hpcwire.com/bigdatawire/2022/11/09/speedbs-data-storage-engine-goes-open-source/
    title: "BigDATAwire: Speedb's Data Storage Engine Goes Open Source (2022)"
  - id: scavenger
    resource: https://arxiv.org/abs/2508.13909
    title: "Scavenger: Better Space-Time Trade-Offs for Key-Value Separated LSM-trees (2025)"
---

# Summary

**Verdict: won.** Between 2018 and 2026 the LSM-tree became the default storage structure for distributed SQL, key-value, streaming state and many NoSQL systems, and RocksDB became the most widely embedded storage engine in the industry. Facebook replaced InnoDB with MyRocks on its main user database and cut the space footprint by about half[^rocksdb-fast21][^myrocks-vldb]. TiKV, YugabyteDB, Kafka Streams, Flink's state backend and many others embed RocksDB. The interesting part of the period is the backlash to a single shared engine: Cockroach Labs wrote Pebble in Go and made it the default in 2020[^pebble-blog]; Speedb forked RocksDB as a company and was acquired by Redis in 2024[^speedb-tc]; TiKV built Titan for WiscKey-style key-value separation[^titan]. B-trees did not disappear (PostgreSQL, InnoDB, WiredTiger, LMDB), but nearly every new distributed database started on an LSM.

# The idea

Buffer writes in memory, flush them as sorted immutable files, and merge files in the background (compaction). This turns random writes into sequential ones, compresses well, and fits flash, at the cost of read and space amplification and compaction tuning. RocksDB's own retrospective describes the priority shift over time from write amplification to space amplification to CPU efficiency as SSDs got faster[^rocksdb-fast21].

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018–20 | MyRocks serves Facebook's social graph; ~50% space saving vs InnoDB[^myrocks-vldb] | + |
| 2020 | CockroachDB 20.1 introduces Pebble; 20.2 (Nov 2020) makes it the default, replacing RocksDB[^pebble-blog] | mixed |
| 2021 | RocksDB FAST retrospective[^rocksdb-fast21] | + |
| 2022 | Speedb open-sources its RocksDB-compatible engine[^speedb-oss] | + |
| 2024 | Redis acquires Speedb for SSD-backed Redis tiers (same day as Redis's license change)[^speedb-tc] | mixed |
| 2025 | Research on key-value-separated LSMs (WiscKey lineage: BlobDB, Titan) continues[^scavenger] | + |

# What succeeded

- **A shared, battle-tested engine.** Building a distributed database on RocksDB saved years; TiDB/TiKV, YugabyteDB, CockroachDB (until 2020) and many others did exactly that.
- **Space efficiency on flash.** LSM compression and lack of page fragmentation beat B-trees for storage cost[^myrocks-vldb].
- **Key-value separation (WiscKey) went from paper to production** in Titan and RocksDB's integrated BlobDB for large values[^titan][^scavenger].

# What failed

- **One engine fits all.** RocksDB is huge and tuned for Meta's needs; tuning its many options is notoriously hard. Cockroach Labs cited the cgo boundary cost, stability and the need for control over future work as reasons to write Pebble[^pebble-blog].
- **Commercial RocksDB forks.** Speedb tried to be a business around a better RocksDB; it ended as an acquisition by Redis within about four years of founding[^speedb-tc]. A storage engine alone is hard to monetize.
- **Read-heavy and range-heavy workloads** still often favor B-trees; LSM read amplification and compaction stalls remain operational pain points.

# Why

1. **Flash plus write-heavy, replicated workloads** suit sequential, append-only structures.
2. **Embedding a library is cheaper than writing an engine,** which created the monoculture; once a company's product depends deeply on the engine, owning it (Pebble) becomes worth the cost.
3. **Language ecosystems matter.** A Go database calling C++ through cgo pays overhead and complexity; a native engine is easier to debug and profile[^pebble-blog].
4. **Engines are infrastructure, not products.** Value accrues to the database built on top, which is why Speedb was bought rather than becoming a standalone business.

# Lessons

- A shared open-source component can dominate an industry and still be forked by its biggest users when their roadmaps diverge.
- Storage engines rarely sustain a standalone company.
- Tune for the dominant hardware cost of the decade: write amplification on early flash, space and CPU later.

# Related

- [RocksDB](/systems/rocksdb.md), [Pebble](/systems/pebble.md), [Speedb](/systems/speedb.md), [CockroachDB](/systems/cockroachdb.md), [TiDB](/systems/tidb.md)
- [CockroachDB makes Pebble default (2020)](/events/2020-11-cockroachdb-pebble-default.md)
- [Redis acquires Speedb (2024)](/events/2024-03-redis-acquires-speedb.md)
