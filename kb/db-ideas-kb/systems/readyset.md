---
type: System
title: ReadySet
description: 'ReadySet incrementally maintains SQL query results in front of PostgreSQL and MySQL. It applies
  streaming ideas to a narrower problem: accelerating existing applications.'
resource: https://github.com/readysettech/readyset
tags:
- streaming
- data-infrastructure
kind: product
outcome: stable
ideas:
- ideas/streaming-messaging/streaming-databases-and-ivm
license: BUSL-1.1
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: rs-repo
  resource: https://github.com/readysettech/readyset
  title: ReadySet repository and licensing
- id: rs-a
  resource: https://techcrunch.com/2022/04/05/readyset-raises-29m-to-expedite-access-to-enterprise-scale-app-data
  title: 'TechCrunch: ReadySet raises $29M (2022-04-05)'
---

# Summary

ReadySet is a PostgreSQL- and MySQL-wire-compatible cache that uses database replication streams to maintain query results. Its repository describes placement between existing clients and databases so applications can retain their existing SQL tooling. The license is BSL 1.1 with conversion to Apache 2.0 after four years.[^rs-repo]

The product is a useful counterpoint to replacing an entire data platform. Incremental computation can be packaged as a query-acceleration layer, with the original transactional database remaining authoritative.

# Timeline

| Period | Event |
|---|---|
| 2022 | Funding announcement describes approximately $29 million raised and the commercialization of Noria's ideas[^rs-a] |
| 2026 snapshot | Repository documents the SQL-compatible cache and a managed ReadySet Cloud offering[^rs-repo] |

# What worked

Using replication updates avoids relying entirely on application-authored cache invalidation. Compatibility with familiar clients makes the cache easier to evaluate alongside existing database access paths.[^rs-repo] The analytical advantage is a smaller adoption boundary: teams can ask whether selected expensive reads benefit without first redesigning their entire transaction system.

# What didn't

A transparent interface should not be mistaken for universal query coverage or identical freshness under every failure condition. The practical evaluation still includes supported queries, fallback behavior and replication lag. BSL source availability also differs from an immediate permissive open-source license.[^rs-repo] The available evidence supports a maintained specialized product; it does not establish current revenue, market share or that all applications can replace their existing caches.

# Related

- [Streaming databases and IVM](/ideas/streaming-messaging/streaming-databases-and-ivm.md)
- [PostgreSQL](/systems/postgresql.md) · [Materialize](/systems/materialize.md)
