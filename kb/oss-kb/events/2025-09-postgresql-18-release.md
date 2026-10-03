---
type: Event
title: PostgreSQL 18 released with an asynchronous I/O subsystem
description: "PostgreSQL 18 (Sept 25 2025) introduced async I/O (io_uring on Linux) with up to 3x faster storage reads, virtual generated columns, temporal constraints and OAuth authentication."
event_kind: release
date: 2025-09-25
window: W24
impact: positive
projects: [projects/databases/postgresql]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pg18-release
    resource: https://www.postgresql.org/about/news/postgresql-18-released-3142/
    title: "PostgreSQL 18 Released!"
  - id: alt-pg18
    resource: https://alternativeto.net/news/2025/9/postgresql-18-released-with-async-i-o-subsystem-performance-improvements-and-oauth-support
    title: "AlternativeTo: PostgreSQL 18 released with async I/O subsystem"
  - id: reg-pg19-pulled
    resource: https://www.theregister.com/databases/2026/09/15/postgresql-19-graph-queries-fail-the-would-you-ship-this-test/5296343
    title: "The Register: PostgreSQL 19 graph queries fail the 'would you ship this?' test"
---

# What happened
The PostgreSQL Global Development Group released PostgreSQL 18 on Sept 25 2025. Headline features: a new asynchronous I/O subsystem (`io_method`, io_uring on Linux, worker fallback elsewhere) with up to 3x read speedups, virtual generated columns, temporal constraints and OAuth support[^pg18-release][^alt-pg18].

# Why it matters
Async I/O is one of the largest architectural performance changes in Postgres in years. It arrived as Postgres became the default database for AI-agent platforms.

# Outcome so far
PG 18 is supported across major hosts (e.g. pg_duckdb supports PG 14-18). PostgreSQL 19 is in beta (Beta 4, Sept 24 2026). Its planned SQL/PGQ graph queries were pulled over stability concerns, and it will ship concurrent REPACK[^reg-pg19-pulled].

# Related
- [/projects/databases/postgresql.md](/projects/databases/postgresql.md)

[^pg18-release]: PostgreSQL press release, 2025-09-25.
[^alt-pg18]: AlternativeTo, Sept 2025.
[^reg-pg19-pulled]: The Register, 2026-09-15.
