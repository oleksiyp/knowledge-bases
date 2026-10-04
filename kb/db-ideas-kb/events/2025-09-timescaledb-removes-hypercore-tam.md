---
type: Event
title: TimescaleDB removes the experimental Hypercore table access method
description: TimescaleDB 2.22 removed Hypercore TAM after disappointing gains; the
  columnstore continued, so this was removal of one integration approach rather than
  the Hypercore product.
date: '2025-09-02'
year: 2025
kind: discontinuation
signal: mixed
ideas:
- ideas/postgres-ecosystem/pluggable-storage-engines
systems:
- systems/timescaledb
sources:
- id: release
  resource: https://github.com/timescale/timescaledb/releases/tag/2.22.0
  title: TimescaleDB 2.22.0 release notes, September 2, 2025
status: stable
generated:
  by: codex
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
---

# What happened

TimescaleDB 2.22.0 removed the Hypercore table access method, deprecated in 2.21. The release notes said the experiment had not delivered the expected performance and that columnstore improvements offered comparable functionality without maintaining an additional index. Upgrades were blocked while the TAM remained in use, and the notes supplied a conversion path.[^release]

# Why it matters

This is a documented failed implementation bet, not the discontinuation of TimescaleDB's columnstore or the entire Hypercore capability. The distinction prevents a dramatic but inaccurate category verdict.

A table access method gives an extension a way into PostgreSQL storage, but that hook alone does not guarantee a better complete system. The experiment must outperform alternatives after accounting for indexes, maintenance and migration cost. Removing it was a setback for this design and an example of responding to measured results. Existing deployments still faced conversion work, which is part of the cost of shipping experimental engine features.[^release]

# Related

- [TimescaleDB](/systems/timescaledb.md)
- [Pluggable Postgres storage engines](/ideas/postgres-ecosystem/pluggable-storage-engines.md)
