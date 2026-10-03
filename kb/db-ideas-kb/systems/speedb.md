---
type: System
title: Speedb
description: "Israeli startup (2020) offering a RocksDB-compatible, drop-in faster storage engine; open-sourced in 2022 and acquired by Redis in March 2024 to back Redis with SSD tiers. Its public repository has seen no commits since mid-2024."
resource: https://github.com/speedb-io/speedb
tags: [storage-engine, lsm-tree, rocksdb-fork, startup, acquired]
kind: oss
first_release: 2022
org: "Speedb Ltd. (acquired by Redis, 2024)"
license: Apache-2.0
outcome: acquired
ideas: [ideas/hardware-engines/lsm-tree-evolution]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: speedb-oss
    resource: https://www.hpcwire.com/bigdatawire/2022/11/09/speedbs-data-storage-engine-goes-open-source/
    title: "BigDATAwire: Speedb's Data Storage Engine Goes Open Source (Nov 2022)"
  - id: speedb-tc
    resource: https://techcrunch.com/2024/03/21/redis-switches-licenses-acquires-speedb-to-go-beyond-its-core-in-memory-database/
    title: "TechCrunch: Redis switches licenses, acquires Speedb"
  - id: speedb-redis
    resource: https://redis.io/press/redis-acquires-speedb-to-supercharge-end-to-end-application-performance-at-lower-cost/
    title: "Redis press release: Redis Acquires Speedb"
    author: org:redis
  - id: speedb-gh
    resource: https://github.com/speedb-io/speedb
    title: "speedb-io/speedb on GitHub (last push June 2024, per GitHub API checked 2026-10-03)"
---

# Summary

Speedb was founded in 2020 to sell a faster, API-compatible replacement for RocksDB, targeting write amplification, memory use and stalls. It open-sourced its engine under Apache-2.0 in November 2022[^speedb-oss]. On 21 March 2024 Redis announced it had acquired Speedb, the same day Redis moved away from the BSD license; Redis said Speedb would let it serve data from SSDs and reduce reliance on DRAM[^speedb-tc][^speedb-redis]. The public open-source repository shows no pushes after June 2024[^speedb-gh].

# Timeline

| Year | Event |
|---|---|
| 2020 | Company founded |
| 2022 | Open-source release[^speedb-oss] |
| 2024 | Acquired by Redis (March 21)[^speedb-tc] |
| 2024 | Last push to public repo (June)[^speedb-gh] |

# What worked

- A credible drop-in engine that attracted an acquirer looking for SSD-backed tiers.

# What didn't

- As a standalone business: storage engines are components, not products, and RocksDB is free and improving.
- The open-source fork went quiet after the acquisition, so users who adopted it were left without a maintained upstream.

# Related

- [RocksDB](/systems/rocksdb.md), [Redis](/systems/redis.md)
- [Redis acquires Speedb (2024)](/events/2024-03-redis-acquires-speedb.md)
