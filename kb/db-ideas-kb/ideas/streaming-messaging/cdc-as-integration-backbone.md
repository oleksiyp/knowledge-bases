---
type: Idea
title: "Change data capture as the integration backbone"
description: "Read the database's own replication log (WAL/binlog) and publish every row change as an event, instead of dual writes, polling or nightly dumps. It won: Debezium became the open-source default, CDC vendors were bought for hundreds of millions, and 'Postgres → CDC → analytics' is a standard managed pipeline. It succeeded because it lets the OLTP database stay the source of truth."
tags: [cdc, debezium, replication, integration, etl, postgres, kafka-connect]
area: streaming-messaging
verdict: won
hype_peak: 2021
adoption_2026: mainstream
origins: "Database log-based replication (GoldenGate, 1990s–2000s); LinkedIn Databus (2012); Debezium started at Red Hat in 2015; Kleppmann's 'turning the database inside out' (2014)."
key_systems: [systems/debezium, systems/peerdb, systems/apache-kafka, systems/confluent, systems/clickhouse, systems/postgresql]
related_ideas: [ideas/streaming-messaging/kafka-as-central-log, ideas/streaming-messaging/event-sourcing-and-database-inside-out, ideas/streaming-messaging/streams-as-lakehouse-tables, ideas/analytics-lakehouse/real-time-olap]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: dbz-30
    resource: https://debezium.io/blog/2024/10/02/debezium-3-0-final-released/
    title: "Debezium 3.0.0.Final released (2024-10-02)"
    author: org:debezium
  - id: dbz-commonhaus
    resource: https://debezium.io/blog/2024/11/04/debezium-moving-to-commonhaus/
    title: "Moving Debezium to the Commonhaus Foundation (2024-11-04)"
    author: org:debezium
  - id: fivetran-hvr
    resource: https://siliconangle.com/2021/09/20/fivetran-nabs-565m-buys-data-integration-firm-hvr-software-700m/
    title: "SiliconANGLE: Fivetran raises $565M at $5.6B valuation and buys HVR for $700M (2021-09-20)"
  - id: ch-peerdb
    resource: https://clickhouse.com/blog/clickhouse-acquires-peerdb-to-boost-real-time-analytics-with-postgres-cdc-integration
    title: "ClickHouse acquires PeerDB (2024-07-30)"
    author: org:clickhouse
  - id: ch-cdc-2025
    resource: https://clickhouse.com/blog/postgres-cdc-year-in-review-2025
    title: "ClickHouse: Postgres CDC in ClickHouse, a year in review (2025)"
    author: org:clickhouse
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: tt-fivetran-dbt
    resource: https://www.techtarget.com/data-technologies/news/366632699/Fivetran-DBT-Labs-merge-to-add-complementary-capabilities
    title: "TechTarget: Fivetran, dbt Labs merge (Oct 2025)"
  - id: kleppmann-2019
    resource: https://martin.kleppmann.com/2019/05/13/kafka-summit.html
    title: "Martin Kleppmann: Is Kafka a Database? (2019)"
    author: person:martin-kleppmann
---

# Summary

**Verdict: won.** By 2026 log-based CDC is the default way to move operational data out of OLTP databases. Debezium, a Red Hat project since 2015, shipped 3.0 in October 2024 and moved to the vendor-neutral Commonhaus Foundation the next month[^dbz-30][^dbz-commonhaus]. Fivetran paid $700M for the CDC vendor HVR in 2021[^fivetran-hvr]. ClickHouse bought Postgres-CDC startup PeerDB in July 2024[^ch-peerdb] and reported 100x growth and 400+ companies using it by 2025[^ch-cdc-2025]. Pavlo called the deal "a smart move by ClickHouse, Inc."[^pavlo-2024]. CDC succeeded because it asks nothing of application developers. The database stays the source of truth and the log is derived from it. That is the reverse of the event-sourcing pitch, and it is the version that won.

# The idea

Every serious database already keeps an ordered change log for crash recovery and replication (Postgres WAL with logical decoding, MySQL binlog, Oracle redo, MongoDB oplog). A CDC connector reads it as a replication client and emits ordered insert/update/delete events, often through Kafka. Consumers (search, cache, warehouse, lakehouse, microservices) get exactly the committed changes without dual writes. Dual writes are the classic source of inconsistency when the app writes to the DB and Kafka separately. The "outbox pattern" (write an event row in the same transaction, capture it via CDC) makes this a supported way to publish domain events.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019 | Debezium 1.0 GA (Dec) | + |
| 2021 | Fivetran raises $565M at a $5.6B valuation and buys HVR for $700M (Sept 20)[^fivetran-hvr] | + |
| 2022 | Debezium 2.0 | + |
| 2023 | PeerDB founded (YC) to do fast Postgres CDC without Kafka | + |
| 2024 | ClickHouse acquires PeerDB (Jul 30)[^ch-peerdb]. Debezium 3.0 (Oct 2)[^dbz-30]. Debezium moves to Commonhaus (Nov 4)[^dbz-commonhaus] | + |
| 2025 | ClickPipes Postgres CDC GA (May); 100x growth, 400+ companies, 200+ TB replicated[^ch-cdc-2025]. Fivetran buys Census, then announces merger with dbt Labs (Oct)[^tt-fivetran-dbt] | + |
| 2026 | Fivetran–dbt merger completes (Jun 1)[^tt-fivetran-dbt] | + |

# What succeeded

- **Standardization.** Debezium's change-event envelope (before/after, source metadata, op type) is the de facto format, reused by Flink CDC and many vendors.
- **Kafka-optional pipelines.** PeerDB, Flink CDC, Estuary and cloud-native services (AWS DMS, Datastream) go straight from database to warehouse. ClickHouse's figures show demand for the simple "Postgres to analytics" path without operating Kafka[^ch-cdc-2025].
- **Valuations and consolidation.** HVR at $700M[^fivetran-hvr], PeerDB into ClickHouse[^ch-peerdb], and Fivetran's 2025 roll-up into an end-to-end ingestion-to-transformation company[^tt-fivetran-dbt].
- **Governance.** Debezium leaving single-vendor sponsorship for Commonhaus lowered the risk of depending on it[^dbz-commonhaus].

# What failed

- **Operational fragility.** Postgres logical replication slots that fall behind make WAL accumulate and can fill the primary's disk. Schema changes, TOAST columns, large transactions and failovers (slots did not move to replicas until Postgres 17's failover slots) are recurring operational problems.
- **Kafka Connect complexity.** Running Debezium in Kafka Connect means a Kafka cluster, a Connect cluster, Schema Registry and sink connectors. This overhead is what PeerDB, Estuary and managed services sell against.
- **Semantics gaps.** CDC streams are row-level and physical. Turning them into business events still needs modelling (outbox) or downstream joins.

# Why

CDC fit the way systems were already built. It needed no rewrite of applications, used a log the database already maintained, and kept transactional guarantees at the source. It also fed the 2020s analytics boom: warehouses and lakehouses needed fresh operational data, and batch ELT (Fivetran, Airbyte) moved to CDC for freshness and lower source load. The failures are operational, not conceptual, so they produced managed products rather than abandonment.

# Lessons

- Ideas that keep the existing source of truth and add derived flows win more often than ideas that ask teams to change where truth lives (compare [event sourcing](/ideas/streaming-messaging/event-sourcing-and-database-inside-out.md)).
- The database's internal log is a public interface whether vendors like it or not. Make logical decoding and slots robust.
- Point-to-point pipelines (Postgres → ClickHouse) can beat general-purpose buses when the destination is known.

# Related

- [Debezium](/systems/debezium.md), [PeerDB](/systems/peerdb.md), [Apache Kafka](/systems/apache-kafka.md), [ClickHouse](/systems/clickhouse.md), [PostgreSQL](/systems/postgresql.md)
- [ClickHouse acquires PeerDB](/events/2024-07-clickhouse-acquires-peerdb.md)
- [Kafka as central log](/ideas/streaming-messaging/kafka-as-central-log.md), [Streams as lakehouse tables](/ideas/streaming-messaging/streams-as-lakehouse-tables.md)
