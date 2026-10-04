---
type: System
title: Dragonfly
description: "A multi-threaded, shared-nothing in-memory store compatible with the Redis and Memcached APIs, claiming up to 25x Redis throughput. It is technically strong but BSL-licensed, and the Valkey fork's multithreading narrowed its lead."
resource: https://www.dragonflydb.io
tags: [key-value, cache, in-memory, redis-compatible, bsl, multi-threaded]
kind: product
first_release: 2022
org: "DragonflyDB Inc."
license: BSL-1.1
outcome: growing
ideas: [ideas/nosql-models/redis-and-in-memory-key-value]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: funding
    resource: https://www.businesswire.com/news/home/20230321005067/en/DragonflyDB-Announces-$21m-in-New-Funding-and-General-Availability
    title: "DragonflyDB announces $21M in new funding and general availability (2023-03-21)"
    author: org:dragonflydb
  - id: silicon
    resource: https://siliconangle.com/2023/03/21/dragonflydb-reels-21m-speedy-memory-database/
    title: "SiliconANGLE: DragonflyDB reels in $21M (2023-03-21)"
  - id: v8
    resource: https://www.linuxfoundation.org/press/valkey-8-0
    title: "Announcing Valkey 8.0 (2024-09-16)"
    author: org:linux-foundation
---

# Summary

Dragonfly was founded in March 2022 by ex-Google engineers Oded Poncz and Roman Gershman. It re-implements the Redis and Memcached protocols on a shared-nothing, thread-per-core architecture with a novel dashtable and fork-less snapshotting. It claims up to 25x the throughput of single-threaded Redis on large machines[^silicon]. It raised $21M (seed plus Series A) and went GA in March 2023[^funding]. The source is under a BSL that forbids offering it as a hosted in-memory store[^silicon]. Its main contribution to the field was showing that Redis's single-threaded design left modern many-core hardware idle. Valkey 8.0 then added I/O multithreading[^v8], which removed much of the gap for typical workloads.

# Timeline

| Year | Event |
|---|---|
| 2022 | Founded; open-sourced under BSL |
| 2023 | $21M funding, GA (Mar)[^funding] |
| 2024 | Redis license change; Dragonfly positions itself as a drop-in alternative; Valkey 8 adds threading[^v8] |

# What worked

- Large vertical-scale gains, which mean fewer shards and simpler operations for big caches.
- High API compatibility, so it works as a drop-in replacement.

# What didn't

- The BSL keeps hyperscalers away, which limits distribution, the channel that decides cache-engine share.
- It lacked the foundation-backed neutrality that Valkey offered after the Redis license change.

# Related

- [In-memory KV and the Redis saga](/ideas/nosql-models/redis-and-in-memory-key-value.md)
- [Redis](/systems/redis.md), [Valkey](/systems/valkey.md), [Garnet](/systems/garnet.md)
