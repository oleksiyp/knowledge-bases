---
type: System
title: PeerDB
description: PeerDB specializes in PostgreSQL CDC and became part of ClickHouse in July 2024. Its integration
  into ClickPipes gives a focused connector a distribution channel.
resource: https://github.com/PeerDB-io/peerdb
tags:
- streaming
- data-infrastructure
kind: product
outcome: acquired
ideas:
- ideas/streaming-messaging/cdc-as-integration-backbone
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

# Summary

ClickHouse announced its acquisition of PeerDB on July 30, 2024 to improve PostgreSQL change-data capture into its analytical platform.[^ch-peerdb] Its later account says PeerDB became the engine for the Postgres CDC connector in ClickPipes and remained a free, open component rather than disappearing into an inaccessible service.[^ch-cdc-2025]

The outcome illustrates the value of a narrow integration product. A fast analytical database still needs reliable access to operational data; owning the connector can reduce the effort between purchase and a useful application.

# Timeline

| Period | Event |
|---|---|
| 2024-07-30 | ClickHouse announces the PeerDB acquisition[^ch-peerdb] |
| 2025 | ClickHouse's retrospective reports ClickPipes integration and a May general-availability milestone[^ch-cdc-2025] |

# What worked

The acquirer reports more than 400 companies using PostgreSQL CDC through ClickPipes and over 200 TB replicated monthly. These are vendor-reported figures, but they are a more concrete integration signal than acquisition alone.[^ch-cdc-2025] PostgreSQL specialization also gives a product a clearly defined surface on which to improve compatibility and operator experience.

# What didn't

Acquisition does not establish that every workload should replace a general CDC stack. The architectural tradeoff is breadth versus focus: a specialized path can be attractive for one source and destination while a heterogeneous estate needs broader coverage. Users still need to evaluate backfills, failure recovery and changes to source schemas. The evidence supports integration traction, not an independently measured universal performance advantage.

# Related

- [ClickHouse](/systems/clickhouse.md) · [Debezium](/systems/debezium.md)
- [PeerDB acquisition](/events/2024-07-clickhouse-acquires-peerdb.md)
