---
type: Event
title: "Rails 8 ships production-ready SQLite defaults"
description: "Rails 8.0 (November 7, 2024) shipped with SQLite production-ready and database-backed Solid Queue, Solid Cache and Solid Cable, removing Redis from the default stack. A mainstream framework thereby endorsed SQLite-in-production."
date: 2024-11-07
year: 2024
kind: launch
signal: positive
ideas: [ideas/edge-devx/sqlite-in-production]
systems: [systems/sqlite]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: rails8
    resource: https://rubyonrails.org/2024/11/7/rails-8-no-paas-required
    title: "Rails 8.0: No PaaS Required"
    author: org:rails
---

# What happened
Rails 8.0, released under the slogan "No PaaS Required", made SQLite viable for production out of the box. It added Solid Queue (jobs, using `FOR UPDATE SKIP LOCKED` on Postgres and MySQL), Solid Cache (disk-backed cache) and Solid Cable (pub/sub), all database-backed, alongside Kamal 2 for deployment[^rails8].

# Why it matters
It was the strongest endorsement yet from a mainstream framework that a single server with SQLite, and no Redis or managed database, is a sensible default for many apps. It also shows the "database replaces auxiliary infrastructure" trend: queues and caches moved into the database.

# Related
[SQLite in production](/ideas/edge-devx/sqlite-in-production.md) · [SQLite](/systems/sqlite.md)
