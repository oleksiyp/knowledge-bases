---
type: Idea
title: "Event sourcing, CQRS and 'turning the database inside out'"
description: "Make an immutable event log the system of record and derive all state (tables, caches, indexes) as projections. As an application architecture it stayed niche: valuable in audit-heavy domains, regretted in many CRUD systems because of schema evolution, replays and GDPR. As a data-platform idea it lost to CDC, which keeps the database as the source of truth."
tags: [event-sourcing, cqrs, architecture, kafka, event-store, microservices]
area: streaming-messaging
verdict: niche
hype_peak: 2019
adoption_2026: niche
origins: "Greg Young / DDD community (CQRS, ~2010); Event Store (2012); Martin Kleppmann's 'Turning the database inside out' talk (2014) and Kafka-as-database keynote (2019)."
key_systems: [systems/apache-kafka, systems/kurrentdb, systems/ksqldb, systems/materialize]
related_ideas: [ideas/streaming-messaging/cdc-as-integration-backbone, ideas/streaming-messaging/kafka-as-central-log, ideas/streaming-messaging/streaming-databases-and-ivm]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: kleppmann-2019
    resource: https://martin.kleppmann.com/2019/05/13/kafka-summit.html
    title: "Martin Kleppmann: Is Kafka a Database? (Kafka Summit London, 2019)"
    author: person:martin-kleppmann
  - id: kurrent
    resource: https://www.kurrent.io/press/event-store-changes-name-to-kurrent-raises-12m-to-unify-streams-and-databases
    title: "Event Store changes name to Kurrent, raises $12M (2024-12-18)"
    author: org:kurrent
  - id: doomen-ugly
    resource: https://www.linkedin.com/pulse/ugly-event-sourcing-real-world-production-issues-dennis-doomen
    title: "Dennis Doomen: The Ugly of Event Sourcing — Real-world Production Issues"
    author: person:dennis-doomen
  - id: cascade-2018
    resource: http://cascadefaliure.vocumsineratio.com/2018/10/event-sourcing-lessons-on-failure-part.html
    title: "Event Sourcing: Lessons on failure, part one (2018)"
  - id: jepsen-buf
    resource: https://jepsen.io/analyses/bufstream-0.1.0
    title: "Jepsen: Bufstream 0.1.0 (Kafka transaction semantics issues)"
    author: person:kyle-kingsbury
---

# Summary

**Verdict: niche.** The 2014–2019 "database inside out" vision held that the log should be the source of truth, with databases as caches of it. Kleppmann's 2019 keynote argued Kafka was close to being a database and could support ACID-like guarantees across systems[^kleppmann-2019]. It informed a lot of architecture thinking, but by 2026 few organizations run their core systems this way. Event sourcing survives where an immutable history is the product: ledgers, trading, logistics tracking, audit and compliance. Its specialist database vendor, Event Store, rebranded as Kurrent in December 2024 and raised $12M[^kurrent], which is a modest round for a decade-old category leader. Practitioner write-ups describe projection rebuilds, event versioning and production debugging as recurring pain points[^doomen-ugly][^cascade-2018]. The data-platform version of the idea succeeded in a different form: CDC derives the log from the database instead of the reverse.

# The idea

Store every state change as an immutable domain event ("OrderPlaced", "PaymentCaptured"). Current state is a fold over events. Read models (CQRS) are separate projections tuned for queries, rebuildable by replay. At the platform level, Kafka holds the events and each service materializes what it needs, so derived data can be rebuilt from scratch and new consumers get full history.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | Practitioner postmortems on event-sourcing failures circulate[^cascade-2018] | − |
| 2019 | Kleppmann: "Is Kafka a Database?" keynote[^kleppmann-2019]. ksqlDB launched as an "event streaming database" | + |
| 2020–22 | Microservices + Kafka + event sourcing popular in conference talks; ksqlDB and Materialize offer SQL over event logs | + |
| 2023 | Confluent shifts SQL investment to Flink; ksqlDB left in maintenance | − |
| 2024 | Jepsen documents underspecified Kafka transaction semantics, a weak base for "Kafka as database"[^jepsen-buf]. Event Store → Kurrent, $12M round (Dec)[^kurrent] | mixed |

# What succeeded

- **Audit-centric domains.** Finance, insurance claims and logistics use event-sourced cores where "how did we get here" is a legal requirement.
- **Ideas that spread.** Immutable logs, replayable projections, outbox events and idempotent consumers are now normal practice even in CRUD systems.
- **Derived-data thinking.** Treating search indexes, caches and warehouses as rebuildable views of a log is how most data platforms work today, usually via CDC.

# What failed

- **General-purpose adoption.** For ordinary business apps, event sourcing added cost: versioning events forever, slow projection rebuilds, eventual consistency in the UI, and hard deletes for GDPR[^doomen-ugly].
- **Kafka as the event store.** Kafka lacks per-entity streams at scale, optimistic concurrency on append, and queries by key. Teams that tried to event-source directly on Kafka topics usually added a database anyway. Kafka's transaction semantics were also not well specified[^jepsen-buf].
- **Specialist event stores** stayed small. Kurrent's 2024 round[^kurrent] is evidence of a durable niche, not a mainstream category.

# Why

The idea moves complexity from write time to read time and from the database to every application team. Relational databases already provide durable logs internally, plus indexes, constraints and transactions. CDC captures most of the benefit (a replayable change stream) without asking developers to model everything as events. Event sourcing pays off only when the history itself has business value.

# Lessons

- Architectural ideas that need every developer to change how they model data spread slowly. Ideas that work below the application (CDC) spread fast.
- "The log is the database" is true inside a database engine and much harder across an organization.
- Keep the system of record where queries, constraints and transactions are cheap, and derive streams from it.

# Related

- [Apache Kafka](/systems/apache-kafka.md), [KurrentDB](/systems/kurrentdb.md), [ksqlDB](/systems/ksqldb.md), [Materialize](/systems/materialize.md)
- [CDC as integration backbone](/ideas/streaming-messaging/cdc-as-integration-backbone.md), [Kafka as central log](/ideas/streaming-messaging/kafka-as-central-log.md)
