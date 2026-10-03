---
type: Event
title: "Turso announces Limbo, a Rust rewrite of SQLite"
description: "Turso announced Limbo, a from-scratch SQLite-compatible database in Rust built around asynchronous I/O, later renamed Turso; a high-profile example of the Rust-rewrite trend applied to the most deployed database."
date: 2024-12-10
year: 2024
kind: launch
signal: positive
ideas: [ideas/hardware-engines/rust-database-rewrites, ideas/hardware-engines/io-uring-kernel-bypass, ideas/edge-devx/sqlite-forks-and-rewrites]
systems: [systems/turso, systems/sqlite, systems/libsql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: limbo
    resource: https://turso.tech/blog/introducing-limbo-a-complete-rewrite-of-sqlite-in-rust
    title: "Turso: Introducing Limbo: A complete rewrite of SQLite in Rust"
    author: org:turso
  - id: devclass-limbo
    resource: https://devclass.com/2024/12/12/sqlite-re-implemented-in-rust-to-achieve-asynchronous-i-o-and-other-changes/
    title: "DevClass: SQLite re-implemented in Rust to achieve asynchronous I/O and other changes"
  - id: newstack-turso
    resource: https://thenewstack.io/why-we-created-turso-a-rust-based-rewrite-of-sqlite/
    title: "The New Stack: Why We Created Turso, a Rust-Based Rewrite of SQLite"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: gh-turso
    resource: https://github.com/tursodatabase/turso
    title: "tursodatabase/turso GitHub repository"
---

# What happened

On 10 December 2024 Turso, which had earlier forked SQLite as libSQL, announced Limbo, a complete rewrite of SQLite in Rust[^limbo]. The founders said a fork could not deliver changes they wanted, notably asynchronous I/O (io_uring) and a more open contribution model[^devclass-limbo]. The project was later renamed Turso and became the company's main engine effort[^newstack-turso].

# Why it matters

It applied the Rust-rewrite trend to SQLite, the most widely deployed database, and tied it explicitly to modern I/O interfaces. It also tests whether a rewrite can match SQLite's decades of testing and compatibility.

# Related

- [Rewriting databases in Rust](/ideas/hardware-engines/rust-database-rewrites.md)
- [io_uring and kernel bypass](/ideas/hardware-engines/io-uring-kernel-bypass.md)
- [Turso](/systems/turso.md), [SQLite](/systems/sqlite.md)

# Notes from edge-devx
- Turso's stated trigger was vector search. Adding it to libSQL showed that meaningful changes needed invasive bytecode edits, and SQLite's proprietary test suite made refactoring the C code risky. Limbo instead relies on deterministic simulation testing with Antithesis, and early benchmarks were about 20% faster than SQLite[^limbo]. Pavlo highlighted the testing angle[^pavlo-2024].
- In January 2025 Turso cut platform features, including edge replicas, to fund the rewrite ([event](/events/2025-01-turso-drops-edge-replicas.md)). In October 2026 the rewrite was still labelled beta (about 24.5k stars)[^gh-turso], and Supabase agreed to acquire Turso ([event](/events/2026-10-supabase-acquires-turso.md)).
- See [SQLite forks and rewrites](/ideas/edge-devx/sqlite-forks-and-rewrites.md).
