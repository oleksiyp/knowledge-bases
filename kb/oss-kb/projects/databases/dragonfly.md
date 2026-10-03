---
type: OSS Project
title: Dragonfly (with KeyDB and Garnet)
description: "BSL-licensed, multi-threaded Redis-compatible in-memory store that shipped 2.0 (Sept 2026, about 31.7k stars). Its peers split: Snap's KeyDB has had no commits since May 2024, while Microsoft's MIT-licensed Garnet keeps advancing (VLDB 2026)."
resource: https://github.com/dragonflydb/dragonfly
tags: [in-memory, redis-compatible, bsl, cache, key-value]
domain: databases
license: BSL-1.1
license_history: ["BSL-1.1 (2022-)"]
governance: single-vendor
steward: DragonflyDB Ltd
backing_orgs: []
metrics:
  github_stars: { value: 31738, as_of: 2026-10-03 }
  keydb_last_push: { value: 2024-05-29, as_of: 2026-10-03 }
  garnet_stars: { value: 12033, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: df-gh
    resource: https://github.com/dragonflydb/dragonfly
    title: Dragonfly GitHub repository
  - id: df-blog
    resource: https://www.dragonflydb.io/blog
    title: Dragonfly blog index (2.0, SSD tiering, 2025 review)
    author: org:dragonflydb
  - id: keydb-gh
    resource: https://github.com/Snapchat/KeyDB
    title: KeyDB GitHub repository
  - id: garnet-gh
    resource: https://github.com/microsoft/garnet
    title: Microsoft Garnet GitHub repository
---

# Summary
Dragonfly is the most successful independent Redis-compatible engine. It reached 29.5k stars by Dec 2025 and 31.7k by Oct 2026[^df-blog][^df-gh]. Dragonfly 2.0 shipped on Sept 16-17 2026, claiming 54% more throughput, 35% lower average latency and 30-40% less memory. SSD data tiering arrived in Dragonfly Cloud (Aug 2026)[^df-blog]. Its source-available BSL license kept it out of the Linux Foundation-led Redis fork movement. The peers diverged. Snap's KeyDB is effectively abandoned (last push May 29 2024)[^keydb-gh]. Microsoft Research's Garnet (MIT, 12k stars) is active, with a VLDB 2026 paper and DiskANN-based vector sets[^garnet-gh]. The Redis/Valkey license saga is covered in [Redis](/projects/licensing-forks/redis.md) and [Valkey](/projects/licensing-forks/valkey.md).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12-18 | "Dragonfly 2025 in Review": 29.5k stars [^df-blog] | OSS | + |
| W3 | 2026-08-10 | SSD data tiering on Dragonfly Cloud [^df-blog] | Business | + |
| W3 | 2026-09-16/17 | Dragonfly 2.0 [^df-gh][^df-blog] | OSS | + |
| W3 | 2026 | Garnet paper accepted to VLDB 2026. Vector sets preview [^garnet-gh] | OSS | + |

# OSS successes
- Rapid engineering progress and star growth[^df-blog].
- Garnet shows a hyperscaler research lab shipping a permissive Redis alternative[^garnet-gh].

# OSS failures / risks
- BSL is not OSI open source. KeyDB is dormant[^keydb-gh].

# Business successes
- Customer case studies (e.g. Instacart, 50% better performance with 70% fewer nodes) and cloud features[^df-blog].

# Business failures / risks
- Valkey, which is BSD and Linux Foundation-backed, captured the "open Redis" mindshare and cloud distribution.

# By window
## W3
- 2.0 and SSD tiering[^df-blog].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- 2025 review[^df-blog].
## W24
- No notable license or funding events found in this research.

# Lessons
- In the Redis-compatible market, the license decides who wins cloud distribution (Valkey). Performance decides who wins self-managed users (Dragonfly).

# Related
- [Redis](/projects/licensing-forks/redis.md), [Valkey](/projects/licensing-forks/valkey.md), [/events/2025-05-redis-agplv3-relicense.md](/events/2025-05-redis-agplv3-relicense.md)

[^df-gh]: GitHub API, dragonflydb/dragonfly, 2026-10-03.
[^df-blog]: Dragonfly blog index.
[^keydb-gh]: GitHub API, Snapchat/KeyDB, 2026-10-03.
[^garnet-gh]: GitHub, microsoft/garnet.
