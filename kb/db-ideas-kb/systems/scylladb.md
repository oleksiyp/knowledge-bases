---
type: System
title: ScyllaDB
description: "A C++ shard-per-core (Seastar) rewrite of Cassandra, with a DynamoDB-compatible API, that delivers large constant-factor efficiency gains. It added Raft-based tablets in 2024 and in December 2024 ended its AGPL open-source edition for a source-available license."
resource: https://www.scylladb.com
tags: [wide-column, cassandra-compatible, dynamodb-compatible, seastar, cpp, source-available]
kind: product
first_release: 2015
org: "ScyllaDB Inc."
license: "ScyllaDB Source Available License (since 2025); AGPL-3.0 until 6.2"
outcome: stable
ideas: [ideas/nosql-models/wide-column-stores]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: discord
    resource: https://discord.com/blog/how-discord-stores-trillions-of-messages
    title: "Discord: How Discord stores trillions of messages (2023-03-06)"
    author: org:discord
  - id: s6
    resource: https://www.globenewswire.com/news-release/2024/06/12/2897561/0/en/ScyllaDB-Announces-6-0-Release-for-True-Elastic-Scale.html
    title: "ScyllaDB announces 6.0 release for true elastic scale (2024-06-12)"
    author: org:scylladb
  - id: sa
    resource: https://www.scylladb.com/2024/12/18/why-were-moving-to-a-source-available-license/
    title: "ScyllaDB: Why we're moving to a source available license (2024-12-18)"
    author: org:scylladb
  - id: faq
    resource: https://www.scylladb.com/source-available-faq/
    title: "ScyllaDB source-available licensing FAQ"
    author: org:scylladb
  - id: zaitsev
    resource: https://peterzaitsev.com/thoughts-on-scylladb-license-change/
    title: "Peter Zaitsev: Thoughts on ScyllaDB license change"
    author: person:peter-zaitsev
---

# Summary

ScyllaDB is a hardware-aware rewrite. It runs the Cassandra data model and CQL (plus the DynamoDB API through "Alternator") on Seastar, a C++ framework that pins one shard per core and avoids locks and the JVM. Its showcase is Discord, which in 2022 replaced 177 Cassandra nodes with 72 ScyllaDB nodes. p99 historical-read latency fell from 40–125 ms to 15 ms, and Discord migrated trillions of messages in about nine days[^discord]. ScyllaDB 6.0 (June 2024) introduced "tablets", Raft-managed table fragments enabling parallel scaling; the vendor demonstrated doubling a cluster in about 15 minutes[^s6]. On December 18, 2024 it announced that AGPL 6.2 would be the last open-source release. A unified source-available build is free up to 50 vCPUs and 10 TB per organization[^sa][^faq].

# Timeline

| Year | Event |
|---|---|
| 2022 | Discord migration completed (May)[^discord] |
| 2024 | 6.0 with tablets (Jun)[^s6]; source-available announcement (Dec)[^sa] |
| 2025 | Source-available unified release replaces open-source and enterprise editions[^faq] |

# What worked

- Large constant-factor efficiency from modern-hardware design, at the same API.
- Tablets target slow, sequential rebalancing; the benefit depends on workload and data distribution.[^s6]

# What didn't

- The open-source edition did not convert enough paying users, so the license change followed[^sa]. Percona co-founder Peter Zaitsev called it "what happens to 'corporate-owned' Open Source Software these days". He predicted no meaningful fork, because the contributor base was small, unlike Redis[^zaitsev].
- Discord's node-count improvement is a case study, not a controlled comparison: instance configuration and the surrounding data-service design also changed.[^discord]

# Related

- [Wide-column stores](/ideas/nosql-models/wide-column-stores.md)
- [Apache Cassandra](/systems/cassandra.md), [DynamoDB](/systems/dynamodb.md)
- [ScyllaDB goes source-available](/events/2024-12-scylladb-source-available.md)
