---
type: Event
title: ClickHouse acquires PeerDB
description: A PostgreSQL CDC specialist becomes part of an analytical database’s ingestion platform.
date: '2024-07-30'
year: 2024
kind: acquisition
signal: positive
ideas:
- ideas/streaming-messaging/cdc-as-integration-backbone
systems:
- systems/peerdb
- systems/clickhouse
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: ch-peerdb
  resource: https://clickhouse.com/blog/clickhouse-acquires-peerdb-to-boost-real-time-analytics-with-postgres-cdc-integration
  title: ClickHouse acquires PeerDB (2024-07-30)
  author: org:clickhouse
- id: ch-cdc-2025
  resource: https://clickhouse.com/blog/postgres-cdc-year-in-review-2025
  title: 'ClickHouse: Postgres CDC in ClickHouse, a year in review (2025)'
  author: org:clickhouse
---

# What happened

ClickHouse announced the acquisition of PeerDB on July 30, 2024, emphasizing easier movement of PostgreSQL changes into ClickHouse for real-time analytics.[^ch-peerdb] A later ClickHouse retrospective describes PeerDB as the engine behind the managed Postgres CDC connector in ClickPipes and reports that it remained a free, open component.[^ch-cdc-2025]

# Why it matters

The event shows why connector work can be strategically important to a database vendor. An analytical engine is useful only after applications can deliver reliable, fresh data to it. Buying a specialist can improve the complete user workflow even without changing the query engine. The inference is a distribution advantage for narrow infrastructure: PeerDB gained a ready customer base and an integrated service destination. This does not imply that general CDC frameworks became unnecessary for customers with other sources and sinks.

# Related

- [Peerdb](/systems/peerdb.md)
- [Clickhouse](/systems/clickhouse.md)
