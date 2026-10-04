---
type: Event
title: "PostgreSQL 12 introduces pluggable table storage (table access methods)"
description: "PG 12 (2019-10-03) added the table access method API so extensions could replace the heap. It started seven years of storage-engine attempts (zheap, zedstore, Hypercore, OrioleDB), almost none of which reached production."
date: 2019-10-03
year: 2019
kind: launch
signal: mixed
ideas: [ideas/postgres-ecosystem/pluggable-storage-engines]
systems: [systems/postgresql, systems/orioledb, systems/timescaledb]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pg12
    resource: https://www.postgresql.org/about/news/postgresql-12-released-1976/
    title: "PostgreSQL 12 Released! (2019-10-03)"
    author: org:postgresql
  - id: thebuild-field-guide
    resource: https://thebuild.com/blog/a-field-guide-to-alternative-storage-engines-for-postgresql/
    title: "Christophe Pettus: A Field Guide to Alternative Storage Engines for PostgreSQL (2026-05-08)"
---

# What happened
PostgreSQL 12 shipped on Oct 3 2019. Among its headline features was "the pluggable table storage interface, which allows developers to create their own methods for storing data"[^pg12]. The heap became one table access method (TAM) among potentially many, chosen per table with `CREATE TABLE … USING`.

# Why it matters
The API was the community's answer to MySQL-style pluggable engines and to Postgres's VACUUM and bloat problem. The results over seven years were thin. zheap and zedstore died. TimescaleDB shipped and then removed its Hypercore TAM (2025). OrioleDB was still in beta in 2026. Only append-only columnar engines (Citus, Hydra) are used in production[^thebuild-field-guide]. The API turned out too heap-shaped to host very different engines without further core changes.

# Related
- [Pluggable storage engines](/ideas/postgres-ecosystem/pluggable-storage-engines.md), [OrioleDB](/systems/orioledb.md), [PostgreSQL](/systems/postgresql.md)
- [TimescaleDB removes Hypercore TAM](/events/2025-09-timescaledb-removes-hypercore-tam.md)
