---
type: System
title: Cloudflare D1
description: "Cloudflare's serverless SQLite database for Workers, built on Durable Objects. Announced in 2022 with global-database ambitions, GA in April 2024 with a 10 GB limit, and given read replicas only as a 2025 beta. It found its place as a per-app and per-tenant SQLite service rather than a global database."
resource: https://developers.cloudflare.com/d1/
tags: [sqlite, serverless, edge, cloudflare]
kind: cloud-service
first_release: 2022
org: "Cloudflare"
outcome: growing
ideas: [ideas/edge-devx/sqlite-in-production, ideas/edge-devx/edge-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: d1-announce
    resource: https://businesswire.com/news/home/20220511005106/en/Cloudflare-Announces-D1-The-First-Integrated-Database-for-the-Workers-Serverless-Platform
    title: "Cloudflare announces D1 (2022-05-11)"
    author: org:cloudflare
  - id: d1-beta
    resource: https://www.infoq.com/news/2023/10/cloudflare-d1-open-beta
    title: "InfoQ: Cloudflare D1 open beta (Oct 2023)"
    author: org:infoq
  - id: d1-ga
    resource: https://www.infoq.com/news/2024/04/cloudflare-d1-hyperdrive-ga/
    title: "InfoQ: Cloudflare D1, Workers Analytics Engine and Hyperdrive GA (Apr 2024)"
    author: org:infoq
  - id: d1-repl
    resource: https://blog.cloudflare.com/d1-read-replication-beta/
    title: "Cloudflare: How D1 implements global read replication (2025-04-10)"
    author: org:cloudflare
---

# Summary
Cloudflare announced D1 on May 11, 2022, with Matthew Prince predicting it would "quickly become one of the largest databases in the world"[^d1-announce]. It reached open beta in 2023[^d1-beta] and general availability in April 2024, with 10 GB per database, 50,000 databases per account, data export and query insights[^d1-ga]. The original pitch of data replicated close to every user took until April 2025 to appear, as a read-replication beta: up to six regional replicas, with sequential consistency per session through a Sessions API and no extra charge for replicas[^d1-repl]. Writes still go to one primary. In practice D1 is used as a convenient serverless SQLite for Workers apps and as a many-small-databases (per-tenant) store, while large or write-heavy apps on Cloudflare use Postgres through Hyperdrive.

# Timeline
| Year | Event |
|---|---|
| 2022 | Announced (May)[^d1-announce] |
| 2023 | Open beta[^d1-beta] |
| 2024 | GA (Apr): 10 GB databases, 50k databases per account[^d1-ga] |
| 2025 | Read replication beta, Sessions API (Apr)[^d1-repl] |

# What worked
- Zero-ops SQLite bound into the Workers developer workflow.
- An honest consistency model for replicas (session-level sequential consistency)[^d1-repl].

# What didn't
- A 10 GB size cap and a single writer limit it to small or sharded workloads.
- The "global database" positioning was quietly scaled down to regional read replicas.

# Related
[Durable Objects](/systems/durable-objects.md) · [Edge databases](/ideas/edge-devx/edge-databases.md) · [SQLite in production](/ideas/edge-devx/sqlite-in-production.md) · [D1 announced](/events/2022-05-cloudflare-d1-announced.md)
