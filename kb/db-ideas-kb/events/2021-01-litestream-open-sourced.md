---
type: Event
title: "Litestream open-sourced: streaming SQLite replication to S3"
description: "Ben Johnson released Litestream on January 22, 2021, making SQLite durable for servers by continuously shipping WAL pages to object storage. It was the starting point of the server-side SQLite movement."
date: 2021-01-22
year: 2021
kind: launch
signal: positive
ideas: [ideas/edge-devx/sqlite-in-production]
systems: [systems/litestream, systems/sqlite]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: hn
    resource: https://news.ycombinator.com/item?id=25872887
    title: "Ben Johnson on HN: I just open-sourced a streaming replication tool for SQLite called Litestream"
  - id: fly-allin
    resource: https://fly.io/blog/all-in-on-sqlite-litestream/
    title: "Fly.io: I'm All-In on Server-Side SQLite (May 2022)"
    author: person:ben-johnson
---

# What happened
Ben Johnson announced Litestream on Hacker News. It is a background process that reads SQLite's write-ahead log and replicates raw pages incrementally to a file or S3, giving point-in-time restore[^hn]. In May 2022 he and the project joined Fly.io with the essay "I'm All-In on Server-Side SQLite"[^fly-allin].

# Why it matters
The standard objection to SQLite on servers was "what happens when the disk dies?". Litestream answered it for pennies, without changing applications, and made "just use SQLite" a defensible production choice for single-node apps.

# Related
[Litestream](/systems/litestream.md) · [SQLite in production](/ideas/edge-devx/sqlite-in-production.md)
