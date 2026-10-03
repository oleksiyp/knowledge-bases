---
type: Event
title: "Cloudflare announces D1, a serverless SQLite database"
description: "On May 11, 2022 Cloudflare announced D1, SQLite for Workers, predicting it would become one of the largest databases in the world. This was the peak of edge-database hype; global read replicas only arrived as a beta in 2025."
date: 2022-05-11
year: 2022
kind: launch
signal: mixed
ideas: [ideas/edge-devx/edge-databases, ideas/edge-devx/sqlite-in-production]
systems: [systems/cloudflare-d1, systems/sqlite]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pr
    resource: https://businesswire.com/news/home/20220511005106/en/Cloudflare-Announces-D1-The-First-Integrated-Database-for-the-Workers-Serverless-Platform
    title: "Cloudflare announces D1: the first integrated database for the Workers serverless platform"
    author: org:cloudflare
  - id: repl
    resource: https://blog.cloudflare.com/d1-read-replication-beta/
    title: "Cloudflare: How D1 implements global read replication (2025-04-10)"
    author: org:cloudflare
---

# What happened
Cloudflare announced D1, its first SQL database, built on SQLite and integrated with Workers. Matthew Prince said "the hardest part about serverless isn't actually the code, it's the storage", and that D1 would "quickly become one of the largest databases in the world"[^pr].

# Why it matters
A major cloud adopting SQLite made it legitimate as a server database. The "data close to every user" promise took three years to arrive in limited form: read replicas in six regions with session consistency, in beta from April 2025[^repl]. D1 found its real role as a convenient per-app and per-tenant database.

# Related
[Cloudflare D1](/systems/cloudflare-d1.md) · [Edge databases](/ideas/edge-devx/edge-databases.md)
