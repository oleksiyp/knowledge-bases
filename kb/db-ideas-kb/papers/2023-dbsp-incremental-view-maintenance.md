---
type: Paper
title: 'DBSP: Automatic Incremental View Maintenance for Rich Query Languages'
description: DBSP provides a systematic way to incrementalize expressive query computations. Feldera turns
  the research into a product, while practical cost still depends on the workload.
year: 2023
venue: 'PVLDB 16(7): 1601–1614'
authors:
- Mihai Budiu
- Tej Chajed
- Frank McSherry
- Leonid Ryzhyk
- Val Tannen
resource: https://www.vldb.org/pvldb/vol16/p1601-budiu.pdf
impact: high
ideas:
- ideas/streaming-messaging/streaming-databases-and-ivm
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: dbsp-paper
  resource: https://www.vldb.org/pvldb/vol16/p1601-budiu.pdf
  title: 'DBSP: Automatic Incremental View Maintenance for Rich Query Languages'
- id: feldera-a
  resource: https://www.feldera.com/blog/announcing-our-series-a-and-seed
  title: 'Feldera: Announcing our Series A and Seed (2026-09)'
  author: org:feldera
---

# Claim

The paper defines incremental view maintenance using computations over streams, then gives a general incrementalization procedure for DBSP programs. It shows how expressive query languages map into that framework, including aggregation, nested data and recursion.[^dbsp-paper] Its value is a compositional foundation rather than a separate hand-written rule for each supported query shape.

# What happened next

Feldera identifies DBSP as the engine behind its commercial incremental-computation platform. Its September 2026 funding announcement reports $21.5 million in combined financing and production applications.[^feldera-a] These are signs of research translation, not independent verification of every vendor performance claim.

The paper’s high impact assessment reflects the reusable framework and an implemented product path. A general transformation is not a promise that every query has cheap updates: output changes and maintained state can still be large. The practical lesson is to separate expressiveness and correctness from workload economics. Incremental maintenance is particularly compelling when repeated full recomputation dominates cost; deployment, recovery and integration remain additional engineering requirements.

# Related

- [Feldera](/systems/feldera.md)
- [Materialize](/systems/materialize.md)
