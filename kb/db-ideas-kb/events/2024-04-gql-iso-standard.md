---
type: Event
title: GQL becomes an ISO database language standard
description: ISO published ISO/IEC 39075:2024, the GQL language standard, on April
  12, 2024. It defines structures and operations for creating, querying, modifying
  and controlling property graphs.
date: '2024-04-12'
year: 2024
kind: standard
signal: positive
ideas:
- ideas/nosql-models/graph-databases
systems:
- systems/neo4j
status: stable
generated:
  by: codex
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  resource: https://www.iso.org/standard/76120.html
  title: ISO/IEC 39075:2024
---

# What happened

ISO published ISO/IEC 39075:2024, the GQL language standard, on April 12, 2024. It defines structures and operations for creating, querying, modifying and controlling property graphs.[^announcement]

# Why it matters

The standard gives graph implementations a common portability target. It is separate from SQL/PGQ, which embeds graph querying in SQL. A published standard does not immediately imply interoperable implementations, automatic query migration or a common physical storage design.

For the graph-database idea, this is a positive ecosystem signal rather than proof of mainstream displacement of relational databases. Standardization can reduce language fragmentation while also making graph capabilities easier for general-purpose vendors to offer. The beneficiary may be the graph query model even when users keep their existing relational engine.

# Related

- [neo4j](/systems/neo4j.md)
- [graph databases](/ideas/nosql-models/graph-databases.md)
