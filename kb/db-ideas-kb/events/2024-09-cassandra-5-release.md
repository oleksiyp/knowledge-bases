---
type: Event
title: Apache Cassandra 5.0 adds indexing and vector search
description: The Cassandra community announced version 5.0 on September 5, 2024. The
  release includes Storage Attached Indexing, vector search, trie-based storage improvements
  and Unified Compaction Strategy.
date: '2024-09-05'
year: 2024
kind: launch
signal: positive
ideas:
- ideas/nosql-models/wide-column-stores
systems:
- systems/cassandra
status: stable
generated:
  by: codex
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  resource: https://cassandra.apache.org/_/blog/Apache-Cassandra-5.0-Announcement.html
  title: Apache Cassandra 5.0 announcement
---

# What happened

The Cassandra community announced version 5.0 on September 5, 2024. The release includes Storage Attached Indexing, vector search, trie-based storage improvements and Unified Compaction Strategy.[^announcement]

# Why it matters

The release counters a simple story that wide-column databases merely stagnated after the NoSQL boom. Better indexing broadens accessible queries, and vector search connects an established distributed engine to newer retrieval workloads.

These additions do not remove the need for partition-aware data modeling, nor turn Cassandra into a general distributed SQL engine. The useful signal is sustained modernization inside a mature architecture. Teams can sometimes meet new query needs in an existing operational system instead of creating another database and synchronization pipeline; whether that is sensible remains workload-dependent.

# Related

- [cassandra](/systems/cassandra.md)
- [wide column stores](/ideas/nosql-models/wide-column-stores.md)
