---
type: Event
title: "Turso drops edge replicas: 70% of users never used them"
description: "On January 21, 2025 Turso stopped offering edge replicas and multi-DB schemas to new users and moved off Fly.io, citing that 70% of users never created geographic replicas. A clear data point against the edge-database thesis."
date: 2025-01-21
year: 2025
kind: discontinuation
signal: negative
ideas: [ideas/edge-devx/edge-databases, ideas/edge-devx/sqlite-forks-and-rewrites]
systems: [systems/turso]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: changes
    resource: https://turso.tech/blog/upcoming-changes-to-the-turso-platform-and-roadmap
    title: "Turso: Upcoming changes to the Turso Platform and Roadmap"
    author: org:turso
  - id: docs
    resource: https://docs.turso.tech/features/data-edge
    title: "Turso docs: Data Edge (Deprecated)"
    author: org:turso
---

# What happened
Turso announced that new users would no longer get edge replicas, the feature the company was founded on, because "70% of Turso users never create geographical replicas". It also dropped multi-DB schemas and `ATTACH`, moved free-tier users to AWS and phased out Fly.io, in order to put resources into its Rust rewrite of SQLite[^changes]. Its docs now list Data Edge as deprecated and point to embedded replicas[^docs].

# Why it matters
It is one of the clearest pieces of usage data in the edge-database debate. Even customers who chose an edge database mostly didn't replicate to the edge. Replicas inside the application process (embedded) were the part that stuck.

# Related
[Turso](/systems/turso.md) · [Edge databases](/ideas/edge-devx/edge-databases.md)
