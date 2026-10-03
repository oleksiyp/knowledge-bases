---
type: Idea
title: "Edge databases and globally distributed reads"
description: "Putting database replicas, or the database itself, in dozens of edge locations so that serverless edge functions get low-latency data. Verdict: fading. Global multi-region data for small apps found little demand (Fauna shut down, Turso and PlanetScale dropped edge features). What survived was moving compute to the data (Durable Objects, smart placement) and pooling connections to one central database."
tags: [edge, serverless, replication, latency, cloudflare]
area: edge-devx
verdict: fading
hype_peak: 2022
adoption_2026: niche
origins: "CDN-era edge compute (Cloudflare Workers 2017, Lambda@Edge) created demand for data near the function."
key_systems: [systems/cloudflare-d1, systems/durable-objects, systems/turso, systems/fauna, systems/planetscale, systems/litefs]
related_ideas: [ideas/edge-devx/sqlite-in-production, ideas/edge-devx/serverless-db-connectivity, ideas/distributed-sql/geo-partitioning-data-residency]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: do-beta
    resource: https://blog.cloudflare.com/introducing-workers-durable-objects/
    title: "Cloudflare: Workers Durable Objects Beta: A New Approach to Stateful Serverless (2020-09-28)"
    author: org:cloudflare
  - id: d1-announce
    resource: https://businesswire.com/news/home/20220511005106/en/Cloudflare-Announces-D1-The-First-Integrated-Database-for-the-Workers-Serverless-Platform
    title: "Cloudflare announces D1 (press release, 2022-05-11)"
    author: org:cloudflare
  - id: d1-replication
    resource: https://blog.cloudflare.com/d1-read-replication-beta/
    title: "Cloudflare: Sequential consistency without borders: how D1 implements global read replication (2025-04-10)"
    author: org:cloudflare
  - id: do-sqlite
    resource: https://blog.cloudflare.com/sqlite-in-durable-objects/
    title: "Cloudflare: Zero-latency SQLite storage in every Durable Object (2024-09-26)"
    author: org:cloudflare
  - id: turso-changes
    resource: https://turso.tech/blog/upcoming-changes-to-the-turso-platform-and-roadmap
    title: "Turso: Upcoming changes to the Turso Platform and Roadmap (2025-01-21)"
    author: org:turso
  - id: fauna-reg
    resource: https://www.theregister.com/2025/03/24/faunadb_shut_down/
    title: "The Register: FaunaDB shutters but hints at open source future (2025-03-24)"
    author: org:the-register
  - id: ps-boost
    resource: https://www.techtarget.com/searchdatamanagement/news/252527345/PlanetScale-boosts-cloud-database-with-data-caching
    title: "TechTarget: PlanetScale boosts cloud database with data caching (Nov 2022)"
  - id: ps-four-years
    resource: https://arslan.io/2025/01/20/four-years-at-planetscale/
    title: "Fatih Arslan: Four years at PlanetScale (2025-01-20), notes Boost is deprecated"
    author: person:fatih-arslan
  - id: hyperdrive
    resource: https://www.infoq.com/news/2023/10/cloudflare-hyperdrive-postgres
    title: "InfoQ: Cloudflare Hyperdrive (Oct 2023)"
    author: org:infoq
  - id: litefs-sunset
    resource: https://community.fly.io/t/sunsetting-litefs-cloud/20829
    title: "Fly.io community: Sunsetting LiteFS Cloud"
    author: org:fly-io
---

# Summary
**Fading.** Around 2020–2022, edge function platforms (Cloudflare Workers, Vercel Edge, Deno Deploy, Fly.io) made "run your code in 300 cities" easy. They then needed data in those cities. A wave of products promised it: Fauna's globally consistent serverless database, Cloudflare D1 ("will quickly become one of the largest databases in the world", May 2022[^d1-announce]), Turso's edge replicas, Fly's LiteFS, PlanetScale Boost's query cache[^ps-boost]. By 2026 most of the "replicate everywhere" bets had been withdrawn or shrunk. Fauna shut down in May 2025, saying a global operational database was too "capital intensive" to fund independently[^fauna-reg]. Turso stopped offering edge replicas because 70% of users never created one[^turso-changes]. PlanetScale deprecated Boost[^ps-four-years]. LiteFS Cloud closed[^litefs-sunset]. D1 only added read replicas, in six regions, as a beta in April 2025[^d1-replication]. The design that worked was the reverse: **move the compute to the data**. Durable Objects colocate code with a single-homed SQLite database[^do-sqlite], and connection poolers such as Hyperdrive let edge functions talk to one central Postgres[^hyperdrive].

# The idea
If code runs within 50 ms of every user, a database 150 ms away cancels the benefit, and an app making several sequential queries is slower at the edge than in one region. So replicate the data too: read replicas everywhere with writes forwarded to a primary, or a globally consistent database (Fauna's Calvin-derived protocol).

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2020 | Durable Objects beta: one object lives in one place, with strong consistency[^do-beta] | + |
| 2022 | D1 announced (May)[^d1-announce]. LiteFS. libSQL/Turso founded around edge replicas. PlanetScale Boost (Nov)[^ps-boost] | + |
| 2023 | Cloudflare Hyperdrive: pooling and caching for central Postgres/MySQL[^hyperdrive] | + (alternative) |
| 2024 | SQLite in Durable Objects (Sep)[^do-sqlite]. LiteFS Cloud retired (Oct)[^litefs-sunset] | +/− |
| 2025 | Turso drops edge replicas (Jan)[^turso-changes]. Fauna announces shutdown (Mar, service ends May 30)[^fauna-reg]. D1 read replication beta (Apr)[^d1-replication]. Boost listed as deprecated[^ps-four-years] | − |

# What succeeded
- **Compute-to-data.** Durable Objects run "in the same thread as the storage", so per-entity state (a chat room, a document, a tenant) gets zero-latency reads with strong consistency[^do-sqlite]. Cloudflare later built its agent platform on this.
- **Session-consistent read replicas as an option.** D1's Sessions API gives sequential consistency across replicas without charging extra for them[^d1-replication]. It is a careful, modest design that arrived three years after the original pitch.
- **Connection pooling at the edge.** Hyperdrive and HTTP drivers made a central database usable from edge runtimes. See [serverless DB connectivity](/ideas/edge-devx/serverless-db-connectivity.md).

# What failed
- **Global-everywhere databases for typical apps.** Fauna, the most ambitious, closed down[^fauna-reg].
- **Edge read replicas as a selling point.** Most customers did not use them[^turso-changes], and they add replication lag and read-your-writes problems.
- **Edge caches with automatic invalidation** (PlanetScale Boost) did not survive as products[^ps-four-years].

# Why
1. **Writes still go to one place.** Any app that writes and then reads its own writes pays a cross-region round trip or deals with staleness. The physics did not change.
2. **Most apps' users and data are regional.** One region near the users, plus a CDN for static content, was good enough, and much cheaper than N replicas.
3. **Platforms responded by moving compute.** Vercel and Cloudflare added options to run functions near the database (Cloudflare's Smart Placement, regional functions), which made the edge-data problem disappear for most workloads.
4. **Capital intensity.** Running a global database service is expensive before revenue arrives. Fauna said so explicitly when it shut down[^fauna-reg].

# Lessons
- Latency wins come from removing round trips (colocating code and data), not from adding replicas.
- Measure whether users turn on a distribution feature before building a company around it.
- Single-homed, per-entity state (actors) scales out more simply than a globally replicated database.

# Related
[Cloudflare D1](/systems/cloudflare-d1.md) · [Durable Objects](/systems/durable-objects.md) · [Turso](/systems/turso.md) · [Fauna](/systems/fauna.md) · [PlanetScale](/systems/planetscale.md) · [SQLite in production](/ideas/edge-devx/sqlite-in-production.md) · [Turso drops edge replicas](/events/2025-01-turso-drops-edge-replicas.md) · [Durable Objects beta](/events/2020-09-durable-objects-beta.md) · [Geo-partitioning](/ideas/distributed-sql/geo-partitioning-data-residency.md) · [Database per tenant](/ideas/cloud-architecture/database-per-tenant.md)
