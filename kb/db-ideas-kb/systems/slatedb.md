---
type: System
title: SlateDB
description: "Apache-2.0 embedded LSM-tree key-value engine in Rust that uses object storage as its only durable store, with batched writes, distributed compaction, checkpoints and forks. Open-sourced Aug 2024; used at Dropbox and others by 2026."
resource: https://slatedb.io
tags: [storage-engine, lsm, object-storage, s3, rust, embedded]
kind: oss
first_release: 2024
org: "SlateDB project (Commonhaus Foundation); created by Chris Riccomini, Rohan Desai and others"
license: Apache-2.0
outcome: growing
ideas: [ideas/cloud-architecture/object-storage-native-databases, ideas/cloud-architecture/database-branching]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: riccomini-slatedb
    resource: https://materializedview.io/p/slatedb-an-embedded-storage-engine
    title: "Chris Riccomini: SlateDB: An Embedded Storage Engine Built on Object Storage (Aug 2024)"
    author: person:chris-riccomini
  - id: triad
    resource: https://materializedview.io/p/cloud-storage-triad-latency-cost-durability
    title: "Chris Riccomini: The Cloud Storage Triad: Latency, Cost, Durability"
    author: person:chris-riccomini
  - id: slatedb-intro
    resource: https://slatedb.io/blog/introducing-slatedb/
    title: "SlateDB: An Object-Native LSM for Online Systems (2026-06-30)"
    author: org:slatedb
  - id: slatedb-gh
    resource: https://github.com/slatedb/slatedb
    title: "SlateDB GitHub repository"
    author: org:slatedb
---

# Summary
SlateDB grew out of Chris Riccomini's "Cloud Storage Triad" essay: you can pick two of low latency, low cost and high durability[^triad]. It was open-sourced in August 2024 after about four months of work by Riccomini, Rohan Desai and others[^riccomini-slatedb]. It is a RocksDB-like embedded LSM whose memtables flush directly to S3/GCS/Azure Blob/MinIO/Tigris as SSTs. The flush interval trades write latency against PUT cost[^riccomini-slatedb]. Later releases added transactions with snapshot isolation, single-writer/multi-reader deployments, distributed compaction, CDC, and O(1) checkpoints and forks[^slatedb-gh]. The team explains that adapting RocksDB to object storage was not enough, because object stores lack locking, links and filesystem caching semantics[^slatedb-intro]. The formal launch post in June 2026 lists production users including Dropbox, ZeroFS and HelixDB. The repository lists 21+ adopters (including Prisma and Responsive) and has about 3.5k GitHub stars[^slatedb-intro][^slatedb-gh].

# Timeline
| Date | Event |
|---|---|
| 2024-08 | Open-sourced[^riccomini-slatedb] |
| 2025 | Transactions, multi-reader, bindings for Go/Java/Python/Node and others[^slatedb-gh] |
| 2026-06-30 | "Introducing SlateDB" launch post with production users[^slatedb-intro] |

# What worked
- A reusable building block: it lets other systems become object-storage-native without writing a storage engine.
- Fencing and manifests based on S3 conditional writes avoid external coordinators.

# What didn't / limits
- Write latency is bound by object-store PUT latency (tens of ms) unless callers accept weaker durability.
- Pre-1.0 for most of its life, with API churn.

# Related
[Object-storage-native databases](/ideas/cloud-architecture/object-storage-native-databases.md) · [S3](/systems/s3.md) · [RocksDB](/systems/rocksdb.md) · [S3 conditional writes](/events/2024-08-s3-conditional-writes.md)
