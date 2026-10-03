---
type: Idea
title: "SQLite as a production server database"
description: "Running SQLite as the primary database of a web application, made safe by streaming replication to object storage (Litestream) and platform support (D1, Durable Objects, Rails 8). Verdict: winning for single-node and per-tenant apps; the attempts to make it a distributed database (LiteFS, edge replicas) stalled."
tags: [sqlite, embedded, replication, object-storage, developer-experience]
area: edge-devx
verdict: winning
hype_peak: 2024
adoption_2026: common
origins: "SQLite (2000) was long 'not for servers'; Expensify's Bedrock and the 2021 Litestream release started the server-side movement."
key_systems: [systems/sqlite, systems/litestream, systems/litefs, systems/cloudflare-d1, systems/durable-objects, systems/turso, systems/libsql]
related_ideas: [ideas/edge-devx/sqlite-forks-and-rewrites, ideas/edge-devx/edge-databases, ideas/edge-devx/sync-engines]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: sqlite-mostdeployed
    resource: https://www.sqlite.org/mostdeployed.html
    title: "SQLite: Most Widely Deployed and Used Database Engine"
    author: org:sqlite
  - id: litestream-hn
    resource: https://news.ycombinator.com/item?id=25872887
    title: "Ben Johnson on Hacker News: I just open-sourced a streaming replication tool for SQLite called Litestream (2021-01-22)"
  - id: fly-allin
    resource: https://fly.io/blog/all-in-on-sqlite-litestream/
    title: "Fly.io: I'm All-In on Server-Side SQLite (May 2022)"
    author: person:ben-johnson
  - id: litefs-sunset
    resource: https://community.fly.io/t/sunsetting-litefs-cloud/20829
    title: "Fly.io community: Sunsetting LiteFS Cloud"
    author: org:fly-io
  - id: fly-revamped
    resource: https://fly.io/blog/litestream-revamped/
    title: "Fly.io: Litestream: Revamped (May 2025)"
    author: org:fly-io
  - id: simonw-ls05
    resource: https://simonwillison.net/2025/Oct/3/litestream/
    title: "Simon Willison: Litestream v0.5.0 is Here (2025-10-03)"
    author: person:simon-willison
  - id: rails8
    resource: https://rubyonrails.org/2024/11/7/rails-8-no-paas-required
    title: "Rails 8.0: No PaaS Required (2024-11-07)"
    author: org:rails
  - id: d1-ga
    resource: https://www.infoq.com/news/2024/04/cloudflare-d1-hyperdrive-ga/
    title: "InfoQ: Cloudflare D1, Workers Analytics Engine and Hyperdrive GA (Apr 2024)"
    author: org:infoq
  - id: do-sqlite
    resource: https://blog.cloudflare.com/sqlite-in-durable-objects/
    title: "Cloudflare: Zero-latency SQLite storage in every Durable Object (2024-09-26)"
    author: org:cloudflare
  - id: turso-changes
    resource: https://turso.tech/blog/upcoming-changes-to-the-turso-platform-and-roadmap
    title: "Turso: Upcoming changes to the Turso Platform and Roadmap (2025-01-21)"
    author: org:turso
  - id: npm-bsq
    resource: https://api.npmjs.org/downloads/point/last-week/better-sqlite3
    title: "npm download API: better-sqlite3, week ending 2026-10-01"
  - id: gh-litestream
    resource: https://github.com/benbjohnson/litestream
    title: "Litestream GitHub repository"
---

# Summary
**Winning, within limits.** Between 2021 and 2026 SQLite went from "the database inside your phone" to a credible default for single-server web apps, per-tenant databases and edge platforms. Two things made it work: Litestream (2021) made durability cheap by streaming the write-ahead log to S3[^litestream-hn], and big platforms adopted it: Cloudflare D1 (GA April 2024)[^d1-ga], SQLite inside every Durable Object (September 2024)[^do-sqlite], and Rails 8 shipping SQLite as a production-ready default with Solid Queue, Cache and Cable (November 2024)[^rails8]. The more ambitious goal, turning SQLite into a replicated, multi-writer, globally distributed database, mostly stalled. Fly.io sunset LiteFS Cloud in October 2024 and went back to Litestream[^litefs-sunset][^fly-revamped], and Turso stopped offering edge replicas to new users in January 2025[^turso-changes]. SQLite won as a *single-writer, embedded-next-to-the-app* database. It did not win as a distributed one.

# The idea
SQLite is an in-process library, so a query is a function call rather than a network round trip. On modern NVMe drives one machine can handle far more traffic than most apps ever see. The pitch, made loudly in Ben Johnson's 2022 "I'm All-In on Server-Side SQLite"[^fly-allin], was that most applications don't need a separate database server, and that you can drop the operational and latency costs of one if you solve backups and failover. SQLite is also the most deployed database engine; its developers estimate over one trillion databases in active use[^sqlite-mostdeployed].

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2020 | Cloudflare Durable Objects beta (key-value storage) | + |
| 2021 | Litestream open-sourced (Jan 22): WAL streaming to S3[^litestream-hn] | + |
| 2022 | Ben Johnson and Litestream join Fly.io. LiteFS (FUSE-based replication) launched[^fly-allin] | + |
| 2022 | Cloudflare announces D1. Turso forks SQLite as libSQL | + |
| 2024 | D1 GA with 10 GB databases and 50,000 databases per account[^d1-ga] | + |
| 2024 | LiteFS Cloud sunset (announced July, retired Oct 15)[^litefs-sunset] | − |
| 2024 | SQLite-backed Durable Objects (Sep)[^do-sqlite]. Rails 8 ships SQLite-for-production defaults (Nov)[^rails8] | + |
| 2025 | Turso drops edge replicas for new users (Jan)[^turso-changes] | − |
| 2025 | Litestream "revamped" (May). v0.5.0 with the LTX format and point-in-time restore (Oct)[^fly-revamped][^simonw-ls05] | + |

# What succeeded
- **Backup and restore to object storage.** Litestream (about 14.4k GitHub stars, active in Oct 2026[^gh-litestream]) solved the "what if the disk dies" objection cheaply. Its 2025 rewrite uses S3 conditional writes for leases instead of Consul and adds compaction levels, so a restore needs only "a dozen or so files"[^fly-revamped][^simonw-ls05].
- **Platform adoption.** D1 and Durable Objects made SQLite a managed primitive on a major cloud. Rails, the framework most associated with "boring" production apps, made it a first-class default[^rails8].
- **Per-tenant / per-user databases.** Cheap, file-sized databases fit database-per-tenant designs (D1's 50,000-databases-per-account limit[^d1-ga], one SQLite per Durable Object[^do-sqlite], Turso's per-agent databases).
- **The library ecosystem.** better-sqlite3 alone had about 13.5M npm downloads in the last week of September 2026[^npm-bsq].

# What failed
- **Distributed SQLite as a product.** LiteFS needed FUSE plus Consul-based leader election, which Fly itself later called "a lot to ask of users". LiteFS Cloud closed after about a year and Fly's effort went back to Litestream[^litefs-sunset][^fly-revamped].
- **Edge read replicas.** Turso found that 70% of its users never created geographic replicas and stopped offering them to new users[^turso-changes].
- **Write concurrency.** SQLite still allows a single writer per database file. Upstream's `BEGIN CONCURRENT` and HC-tree remain on experimental branches, and the forks (libSQL, Turso's Rust rewrite) exist largely because of this.

# Why
SQLite won where its *physics* matched the workload. One writer, local NVMe, and reads as function calls are a real advantage for apps that fit on one machine, and hardware growth meant far more apps fit on one machine than in 2010. Object storage with conditional writes (S3 added them in 2024) gave a cheap, durable second copy without a consensus system. The distributed versions failed for the opposite reason: once you add a network hop and a leader election you have rebuilt a client-server database, without Postgres's ecosystem. Most customers did not need global replicas[^turso-changes]. And SQLite's closed-contribution model (open source, not open contribution) meant every structural change needed a fork.

# Lessons
- An embedded database plus asynchronous log shipping to object storage covers a surprising share of production needs. Treat "do we need a database server at all?" as a real question.
- Distribution features that most users never turn on (Turso: 70% never did) are expensive to keep alive.
- Defaults matter more than benchmarks: Rails 8 and Cloudflare probably did more for SQLite-in-prod than any blog post.

# Related
[SQLite](/systems/sqlite.md) · [Litestream](/systems/litestream.md) · [LiteFS](/systems/litefs.md) · [Cloudflare D1](/systems/cloudflare-d1.md) · [Durable Objects](/systems/durable-objects.md) · [Turso](/systems/turso.md) · [SQLite forks and rewrites](/ideas/edge-devx/sqlite-forks-and-rewrites.md) · [Edge databases](/ideas/edge-devx/edge-databases.md) · [Rails 8 event](/events/2024-11-rails-8-sqlite-production.md) · [Database per tenant](/ideas/cloud-architecture/database-per-tenant.md) · [Object-storage-native databases](/ideas/cloud-architecture/object-storage-native-databases.md)
