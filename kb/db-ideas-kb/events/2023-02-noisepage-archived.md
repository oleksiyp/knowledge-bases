---
type: Event
title: CMU archives the NoisePage repository
description: NoisePage becomes read-only after the self-driving DBMS research effort is discontinued, while related work continues
  through frameworks for existing engines.
date: '2023-02-20'
year: 2023
kind: discontinuation
signal: negative
ideas:
- ideas/ml-for-db/self-driving-databases
systems:
- systems/noisepage
- systems/peloton
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: np-repo
  resource: https://github.com/cmu-db/noisepage
  title: 'NoisePage repository: archived February 20, 2023'
- id: dbgym
  resource: https://github.com/cmu-db/dbgym
  title: Database Gym README
- id: firebolt-pavlo
  resource: https://www.firebolt.io/blog/vector-databases-wont-replace-sql---andy-pavlo
  title: 'Firebolt: Vector Databases Won''t Replace SQL – Andy Pavlo (interview)'
---

# What happened

The CMU NoisePage repository was archived on February 20, 2023 and became read-only.[^np-repo] This is the repository lifecycle date, distinct from earlier reductions in development activity. The Database Gym README describes its origins in the discontinued NoisePage effort.[^dbgym]

# Why it matters

Pavlo's later interview attributes the decision to divided attention, pandemic-era staffing difficulties and shortcomings in the engine, including its query optimizer.[^firebolt-pavlo] Our assessment is that building a competitive database and its autonomous controller simultaneously compounded the research burden. The archive does not show that forecasting or automated tuning cannot work. It documents the end of this particular integrated engine effort, followed by research infrastructure intended to reduce duplicated engineering. Separating those outcomes preserves the useful lesson: an existing engine can provide a more practical foundation for studying autonomous operations than a new engine that also needs to prove its basic performance and compatibility.

# Related

- [Noisepage](/systems/noisepage.md)
- [Peloton](/systems/peloton.md)
- [Self Driving Databases](/ideas/ml-for-db/self-driving-databases.md)

[^np-repo]: [NoisePage repository: archived February 20, 2023](https://github.com/cmu-db/noisepage).
[^dbgym]: [Database Gym README](https://github.com/cmu-db/dbgym).
[^firebolt-pavlo]: [Firebolt: Vector Databases Won't Replace SQL – Andy Pavlo (interview)](https://www.firebolt.io/blog/vector-databases-wont-replace-sql---andy-pavlo).
