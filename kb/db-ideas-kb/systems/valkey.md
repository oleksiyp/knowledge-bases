---
type: System
title: Valkey
description: "The BSD-licensed Linux Foundation fork of Redis 7.2.4, launched eight days after Redis's March 2024 license change. Backed by AWS, Google, Oracle and others, it gained managed-service distribution and strong contributor activity."
resource: https://valkey.io
tags: [key-value, cache, fork, linux-foundation, bsd]
kind: oss
first_release: 2024
org: "Linux Foundation"
license: BSD-3-Clause
outcome: thriving
ideas: [ideas/nosql-models/redis-and-in-memory-key-value]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: lf
    resource: https://www.linuxfoundation.org/press/linux-foundation-launches-open-source-valkey-community
    title: "Linux Foundation launches open source Valkey community (2024-03-28)"
    author: org:linux-foundation
  - id: v8
    resource: https://www.linuxfoundation.org/press/valkey-8-0
    title: "Announcing Valkey 8.0 (2024-09-16)"
    author: org:linux-foundation
  - id: aws
    resource: https://aws.amazon.com/about-aws/whats-new/2024/10/amazon-elasticache-valkey
    title: "AWS: Announcing Amazon ElastiCache for Valkey (2024-10)"
    author: org:aws
  - id: aws9
    resource: https://aws.amazon.com/blogs/database/announcing-valkey-9-0-for-amazon-elasticache/
    title: "AWS: Announcing Valkey 9.0 for Amazon ElastiCache"
    author: org:aws
  - id: percona
    resource: https://www.percona.com/blog/community-erosion-post-license-change-quantifying-the-power-of-open-source/
    title: "Percona: Community erosion post license change (2025-12-05)"
    author: org:percona
---

# Summary

Valkey is one of the most successful database forks so far. The Linux Foundation announced it on March 28, 2024, continuing from Redis 7.2.4 under BSD-3, with support from AWS, Google, Oracle, Ericsson and Snap[^lf]. Long-time Redis maintainers employed outside Redis Ltd. (for example at AWS and Tencent) moved with it. Valkey 8.0 (September 2024) added asynchronous I/O threading with vendor-reported benchmark throughput around 1.2M requests/s per node, over 3x the previous version, and cut memory overhead[^v8]. AWS ElastiCache added it in October 2024 at prices 20% (node-based) and 33% (serverless) below Redis OSS[^aws]. By 2026 ElastiCache offered Valkey 9.0, and AWS cited over 100 million Docker pulls[^aws9]. Valkey grew from 18 to 49 contributors in 18 months and averaged about 80 merged PRs per month in 2025[^percona].

# Timeline

| Year | Event |
|---|---|
| 2024 | Fork announced (Mar 28)[^lf]; 8.0 GA (Sep 16)[^v8]; ElastiCache for Valkey (Oct)[^aws] |
| 2025 | Contributor activity grows in Percona's measured sample[^percona] |
| 2026 | Valkey 9.0 on ElastiCache[^aws9] |

# What worked

- It started with the right people: maintainers, foundation governance and hyperscaler distribution from day one.
- It shipped real performance improvements quickly instead of only matching Redis.
- Managed-service pricing gave customers an economic reason to evaluate the fork; compatibility reduces, but does not eliminate, migration testing.[^aws]

# What didn't

- Divergence from Redis 8 features (vector sets, merged modules) leaves gaps for users who want those.
- Compatibility will drift over time, and clients may need to choose sides.

# Related

- [In-memory KV and the Redis saga](/ideas/nosql-models/redis-and-in-memory-key-value.md)
- [Redis](/systems/redis.md), [OpenSearch](/systems/opensearch.md) (a similar fork)
- [Valkey fork](/events/2024-03-valkey-fork.md)
