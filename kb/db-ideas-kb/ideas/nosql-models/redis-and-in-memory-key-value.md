---
type: Idea
title: "In-memory key-value stores and the Redis saga"
description: "The Redis data-structure server is mainstream infrastructure and its RESP protocol is a standard. Redis Ltd.'s 2024 source-available move failed to prevent a cloud-backed competitor: Valkey attracted major vendors and contributors, and Redis went back to open source (AGPL) within 14 months."
tags: [key-value, cache, redis, valkey, licensing, forks, resp]
area: nosql-models
verdict: won
hype_peak: 2024
adoption_2026: mainstream
origins: "Redis (2009, Salvatore Sanfilippo); memcached (2003)"
key_systems: [systems/redis, systems/valkey, systems/dragonfly, systems/garnet, systems/aerospike, systems/dynamodb]
related_ideas: [ideas/nosql-models/document-databases, ideas/nosql-models/search-engines-as-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: redis-dual
    resource: https://redis.io/blog/redis-adopts-dual-source-available-licensing/
    title: "Redis: Redis adopts dual source-available licensing (2024-03-20)"
    author: org:redis
  - id: reg-redis-2024
    resource: https://www.theregister.com/software/2024/03/22/redis-tightens-its-license-terms-pleasing-no-one/1078405
    title: "The Register: Redis tightens its license terms, pleasing basically no one"
    author: org:the-register
  - id: lf-valkey
    resource: https://www.linuxfoundation.org/press/linux-foundation-launches-open-source-valkey-community
    title: "Linux Foundation launches open source Valkey community (2024-03-28)"
    author: org:linux-foundation
  - id: valkey8
    resource: https://www.linuxfoundation.org/press/valkey-8-0
    title: "Linux Foundation: Announcing Valkey 8.0 (2024-09-16)"
    author: org:linux-foundation
  - id: aws-valkey
    resource: https://aws.amazon.com/about-aws/whats-new/2024/10/amazon-elasticache-valkey
    title: "AWS: Announcing Amazon ElastiCache for Valkey (2024-10)"
    author: org:aws
  - id: antirez-151
    resource: https://antirez.com/news/151
    title: "antirez: Redis is open source again (2025-05)"
    author: person:salvatore-sanfilippo
  - id: infoq-redis-agpl
    resource: https://www.infoq.com/news/2025/05/redis-agpl-license/
    title: "InfoQ: Redis returns to open source under AGPL license — is it too late?"
    author: org:infoq
  - id: percona-erosion
    resource: https://www.percona.com/blog/community-erosion-post-license-change-quantifying-the-power-of-open-source/
    title: "Percona: Community erosion post license change — quantifying the power of open source (2025-12-05)"
    author: org:percona
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: garnet
    resource: https://www.infoq.com/news/2024/04/microsoft-garnet-cache-store/
    title: "InfoQ: Microsoft Research open-sources Garnet cache-store (2024-04)"
    author: org:infoq
  - id: dragonfly-21m
    resource: https://siliconangle.com/2023/03/21/dragonflydb-reels-21m-speedy-memory-database/
    title: "SiliconANGLE: DragonflyDB reels in $21M for its speedy in-memory database (2023-03-21)"
  - id: aws-valkey9
    resource: https://aws.amazon.com/blogs/database/announcing-valkey-9-0-for-amazon-elasticache/
    title: "AWS Database Blog: Announcing Valkey 9.0 for Amazon ElastiCache (2026)"
    author: org:aws
---

# Summary

**Verdict: the idea won, and the license gambit failed.** An in-memory data-structure server spoken to over the RESP protocol (Redis) is standard infrastructure for caches, sessions, rate limiters, queues and leaderboards. From 2018 to 2026 the story was about who controls it. In March 2024 Redis Ltd. moved Redis from BSD to RSALv2/SSPLv1[^redis-dual]. Eight days later AWS, Google, Oracle and others had a Linux Foundation fork, Valkey[^lf-valkey]. AWS added managed Valkey at a discount in October 2024[^aws-valkey]. Valkey's contributor base grew from 18 to 49 while 9 of 24 contributors in Percona's pre-fork sample stopped contributing to Redis[^percona-erosion]. In May 2025 Redis 8 added AGPLv3 and became open source again[^antirez-151]. Meanwhile, performance challengers (Dragonfly, Microsoft Garnet) showed the single-threaded design could be beaten, but none displaced the Redis/Valkey API.

# The idea

The original promise was a key-value store whose values are rich data structures (lists, sets, sorted sets, hashes, streams), kept in RAM, with optional persistence. It was simple, fast and easy to embed in any architecture. In 2018–2026 three newer ideas were added on top. (a) Redis as a primary database (Redis Stack modules: JSON, search, time series, vectors). (b) Multi-threaded, RESP-compatible rewrites that use modern many-core hardware. (c) Redis Ltd.'s bet that a source-available license would stop cloud providers from capturing the managed-service market.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | Redis Labs applies Commons Clause to its modules (core stays BSD) | − |
| 2021 | Redis Labs renames itself Redis Ltd. | ~ |
| 2022 | DragonflyDB founded (March) by ex-Google engineers; claims up to 25x Redis throughput[^dragonfly-21m] | + |
| 2023 | Dragonfly raises $21M and goes GA under a BSL[^dragonfly-21m] | + |
| 2024 | Redis relicenses core to RSALv2/SSPLv1 (Mar 20)[^redis-dual]; Microsoft Research open-sources Garnet (Mar)[^garnet]; Valkey launched at the Linux Foundation (Mar 28)[^lf-valkey]; Valkey 8.0 with multithreaded I/O, about 1.2M req/s per node (Sep)[^valkey8]; ElastiCache and MemoryDB add Valkey at lower prices (Oct)[^aws-valkey]; antirez rejoins Redis (Dec)[^pavlo-2024] | − for Redis Ltd., + for the ecosystem |
| 2025 | Redis 8.0 adds AGPLv3, merges Stack modules into core, adds vector sets (May)[^infoq-redis-agpl] | mixed |
| 2026 | Valkey 9.0 on ElastiCache; AWS cites "more than 100 million Docker pulls"[^aws-valkey9] | + Valkey |

# What succeeded

- **RESP as a standard interface.** Garnet, Dragonfly, KeyDB, Valkey and many cloud services all speak it. Like the S3 API or the Kafka protocol, the wire protocol outlived its owner's control.
- **The fork.** Valkey had foundation governance in eight days and a major release with real performance work (asynchronous I/O threading) in six months[^valkey8]. AWS priced ElastiCache for Valkey 20% lower than Redis OSS for nodes and 33% lower for serverless[^aws-valkey]. By late 2025 Valkey was merging about 80 PRs per month against Redis's 42[^percona-erosion].
- **Redis Ltd.'s product response.** After antirez returned, Redis 8 shipped vector sets and a merged distribution and went back to an OSI license[^antirez-151]. The core project kept improving.

# What failed

- **Source-available as cloud defense.** It did not stop AWS or Google. They forked, and their managed services stopped paying Redis Ltd. any brand dividend. Redis reversed course in 14 months, citing the forks as having achieved "a level playing field"[^infoq-redis-agpl]. Pavlo noted that the backlash was stronger than for MongoDB's SSPL because Redis's code had many outside contributors[^pavlo-2024].
- **Redis as a general-purpose primary database.** Redis Stack's JSON/search/time-series modules added breadth, but suitability as a system of record depends on persistence, replication and recovery guarantees, not on the number of supported data types. RAM cost also changes the economics compared with disk-oriented engines.
- **Benchmark victory is not market displacement.** Dragonfly and Garnet published strong results, but different threading, persistence and workload configurations prevent a universal speed ranking. The research collected here does not establish their market shares or commercial failure.[^dragonfly-21m][^garnet]

# Why

The following is causal analysis of the cited examples, not a measurement of worldwide market share.

1. **Contributor mix decides fork outcomes.** Redis had important maintainers employed by AWS, Alibaba, Tencent and others. When the license changed, those people moved to Valkey, so the fork started out mature[^percona-erosion]. A single-vendor codebase such as MongoDB's had no such group to defect.
2. **Hyperscalers control distribution.** AWS can expose Valkey through an existing managed-service channel and incentivize it with pricing. API compatibility lowers migration effort, but commands, modules, failover and persistence still need testing.[^aws-valkey]
3. **Hardware shift.** Single-threaded execution left many-core machines underused. Dragonfly and Garnet exposed this, and Valkey 8 improved throughput with I/O threading; that is not the same architecture as parallel command execution[^valkey8].
4. **AGPL is a workable middle ground.** It restores an OSI-approved option while adding network-copyleft obligations. Redis retained RSAL and SSPL options; this was not a return to BSD.[^antirez-151]

# Lessons

- A license change cannot take back a protocol that the market already treats as a standard.
- Before relicensing, count how many core maintainers you do not employ. That number predicts how strong the fork will be.
- Managed-service pricing is the cloud vendors' weapon. A cheaper default engine moves the market faster than any license.
- Performance rewrites push incumbents to modernize but seldom replace them.

# Related

- [Redis](/systems/redis.md), [Valkey](/systems/valkey.md), [Dragonfly](/systems/dragonfly.md), [Garnet](/systems/garnet.md), [Aerospike](/systems/aerospike.md), [DynamoDB](/systems/dynamodb.md)
- Events: [Redis goes source-available](/events/2024-03-redis-source-available-relicense.md), [Valkey fork](/events/2024-03-valkey-fork.md), [Redis returns to AGPL](/events/2025-05-redis-agpl.md)
- [Search engines as databases](/ideas/nosql-models/search-engines-as-databases.md) (the Elastic version of the same story)
