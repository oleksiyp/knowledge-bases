---
type: System
title: NoisePage
description: "CMU's second self-driving DBMS (2018–2021): a from-scratch, PostgreSQL-wire-compatible, Arrow-compatible in-memory MVCC engine written in C++17, built to be operated entirely by ML components. Abandoned around 2021 and archived in February 2023; research moved to tuning PostgreSQL through the Database Gym."
resource: https://github.com/cmu-db/noisepage
tags: [research, self-driving, cmu, in-memory, postgres-compatible, arrow]
kind: research
first_release: 2020
org: "Carnegie Mellon University Database Group"
license: MIT
outcome: dead
ideas: [ideas/ml-for-db/self-driving-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: dbdb
    resource: https://dbdb.io/db/noisepage
    title: "Database of Databases: NoisePage"
  - id: gh
    resource: https://github.com/cmu-db/noisepage
    title: "cmu-db/noisepage (GitHub, archived)"
  - id: tweet
    resource: https://x.com/andy_pavlo/status/1321500205301325830
    title: "Andy Pavlo on X announcing NoisePage (2020-10-28)"
  - id: firebolt-pavlo
    resource: https://www.firebolt.io/blog/vector-databases-wont-replace-sql---andy-pavlo
    title: "Firebolt: interview with Andy Pavlo"
  - id: electric-sheep
    resource: https://db.cs.cmu.edu/papers/2021/p3211-pavlo.pdf
    title: "Pavlo et al.: Make Your Database System Dream of Electric Sheep (PVLDB 14(12), 2021)"
  - id: dbgym
    resource: https://github.com/cmu-db/dbgym
    title: "cmu-db/dbgym"
---

# Summary

NoisePage replaced Peloton in 2018. On 28 October 2020 Pavlo announced the "first album": "an in-memory relational MVCC DBMS that is PostgreSQL + Apache Arrow compatible. Written in C++17. MIT licensed."[^tweet] The plan was a DBMS whose every tuning decision comes from ML models, summarized in the PVLDB 2021 paper "Make Your Database System Dream of Electric Sheep".[^electric-sheep] Development stopped around 2021, and the repository was archived in February 2023 (last push November 2022) with about 1,800 stars.[^dbdb][^gh] The Database Gym "rose from the ashes" of NoisePage. It is a framework for self-driving research on existing DBMSs such as PostgreSQL.[^dbgym]

# Timeline

| Date | Event |
|---|---|
| 2018 | Started from scratch after Peloton |
| 2020-10-28 | Public announcement |
| 2021 | Self-driving architecture paper (PVLDB); development stops |
| Feb 2023 | Repository archived; Database Gym takes over |

# What worked

- Research output: behaviour models, training-data collection and action planning for self-driving operation were published.
- The pivot itself: CMU's later work (Proto-X, Database Gym) targets PostgreSQL, where results can actually be used.

# What didn't

Pavlo gave the reasons in an interview. He was "spreading [himself] too thin" after the OtterTune startup forked off. The pandemic swelled the team to about 35 students, and quality suffered. And "we didn't have actually a good query optimizer".[^firebolt-pavlo] Building a competitive engine and an autonomous layer at the same time, with student labour, failed twice (Peloton, then NoisePage).

# Related

- [Peloton](/systems/peloton.md), [OtterTune](/systems/ottertune.md), [PostgreSQL](/systems/postgresql.md)
- Idea: [Self-driving databases](/ideas/ml-for-db/self-driving-databases.md)
- Event: [NoisePage archived](/events/2023-02-noisepage-archived.md)

[^tweet]: X post, 2020-10-28.
[^electric-sheep]: PVLDB 2021.
[^dbdb]: dbdb.io lists 2018–2021, abandoned.
[^gh]: GitHub metadata.
[^dbgym]: Database Gym README.
[^firebolt-pavlo]: Firebolt interview.
