---
type: Event
title: "Redis acquires Speedb"
description: "Redis bought Speedb, maker of a RocksDB-compatible storage engine, to back Redis with SSDs; announced the same day Redis dropped the BSD license."
date: 2024-03-21
year: 2024
kind: acquisition
signal: mixed
ideas: [ideas/hardware-engines/lsm-tree-evolution]
systems: [systems/speedb, systems/redis, systems/rocksdb]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: speedb-tc
    resource: https://techcrunch.com/2024/03/21/redis-switches-licenses-acquires-speedb-to-go-beyond-its-core-in-memory-database/
    title: "TechCrunch: Redis switches licenses, acquires Speedb"
  - id: speedb-redis
    resource: https://redis.io/press/redis-acquires-speedb-to-supercharge-end-to-end-application-performance-at-lower-cost/
    title: "Redis press release: Redis Acquires Speedb"
    author: org:redis
  - id: speedb-gh
    resource: https://github.com/speedb-io/speedb
    title: "speedb-io/speedb on GitHub (last push June 2024)"
---

# What happened

On 21 March 2024 Redis announced the acquisition of Speedb, a 2020 Israeli startup with an open-source, API-compatible RocksDB replacement. Redis said the engine would let it serve data from SSDs instead of relying only on DRAM. The same day Redis moved Redis from BSD to dual RSALv2/SSPLv1 licensing[^speedb-tc][^speedb-redis]. Speedb's public repository received no further pushes after June 2024[^speedb-gh].

# Why it matters

It shows two patterns: storage-engine startups end as components inside bigger databases, and in-memory databases need flash tiers to control cost. The license change overshadowed the deal and triggered the Valkey fork.

# Related

- [Speedb](/systems/speedb.md), [RocksDB](/systems/rocksdb.md), [Redis](/systems/redis.md)
- [LSM-trees and the RocksDB monoculture](/ideas/hardware-engines/lsm-tree-evolution.md)
