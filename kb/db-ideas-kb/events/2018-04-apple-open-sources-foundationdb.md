---
type: Event
title: Apple opens FoundationDB to the community
description: FoundationDB opens its transactional key-value core and development community, making its implementation and
  testing approach available for reuse.
date: '2018-04-19'
year: 2018
kind: launch
signal: positive
ideas:
- ideas/distributed-sql/transactional-kv-core-and-layers
- ideas/distributed-sql/deterministic-simulation-testing
systems:
- systems/foundationdb
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: fdb-open
  resource: https://forums.foundationdb.org/t/welcome-to-the-foundationdb-community/39
  title: FoundationDB project lead welcomes the open-source community, April 19, 2018
- id: fdb-paper
  resource: https://www.foundationdb.org/files/fdb-paper.pdf
  title: 'FoundationDB: A Distributed Unbundled Transactional Key Value Store (SIGMOD 2021)'
---

# What happened
FoundationDB began its public open-source community on April 19, 2018. Project lead Ben Collins invited contributions to the core, documentation and user support.[^fdb-open] The later SIGMOD paper documents the resulting open transactional key-value system and its integrated simulator.[^fdb-paper]

# Why it matters
The release made an unusually small transactional API and its testing approach available for inspection and reuse. Our assessment is that these are two distinct outcomes: one can adopt FoundationDB as a storage component or learn from its simulation architecture without adopting its data model. Open code alone did not supply application-facing query languages, managed operations or a self-sustaining business for every proposed layer. The relevant success criterion is therefore continued infrastructure use and technical influence, rather than the number of branded database products built on top.

# Related
- [Foundationdb](/systems/foundationdb.md)
- [Transactional Kv Core And Layers](/ideas/distributed-sql/transactional-kv-core-and-layers.md)
- [Deterministic Simulation Testing](/ideas/distributed-sql/deterministic-simulation-testing.md)

[^fdb-open]: [FoundationDB project lead welcomes the open-source community, April 19, 2018](https://forums.foundationdb.org/t/welcome-to-the-foundationdb-community/39).
[^fdb-paper]: [FoundationDB: A Distributed Unbundled Transactional Key Value Store (SIGMOD 2021)](https://www.foundationdb.org/files/fdb-paper.pdf).
