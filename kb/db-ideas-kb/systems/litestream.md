---
type: System
title: Litestream
description: "Open-source streaming replication for SQLite that ships WAL changes to S3-compatible object storage. It was the tool that made server-side SQLite safe. Owned by Fly.io since 2022 and rebuilt around the LTX format in 2025."
resource: https://litestream.io
tags: [sqlite, replication, backup, object-storage]
kind: oss
first_release: 2021
org: "Ben Johnson; Fly.io (since 2022)"
license: Apache-2.0
outcome: thriving
ideas: [ideas/edge-devx/sqlite-in-production]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: hn-launch
    resource: https://news.ycombinator.com/item?id=25872887
    title: "Ben Johnson on HN: open-sourcing Litestream (2021-01-22)"
  - id: fly-allin
    resource: https://fly.io/blog/all-in-on-sqlite-litestream/
    title: "Fly.io: I'm All-In on Server-Side SQLite (May 2022)"
    author: person:ben-johnson
  - id: fly-revamped
    resource: https://fly.io/blog/litestream-revamped/
    title: "Fly.io: Litestream: Revamped (May 2025)"
    author: org:fly-io
  - id: simonw
    resource: https://simonwillison.net/2025/Oct/3/litestream/
    title: "Simon Willison: Litestream v0.5.0 is Here"
    author: person:simon-willison
  - id: gh
    resource: https://github.com/benbjohnson/litestream
    title: "Litestream GitHub repository"
---

# Summary
Ben Johnson, author of the BoltDB key-value store, open-sourced Litestream on January 22, 2021. It runs as a sidecar process, reads SQLite's write-ahead log and streams pages to S3 or another target, giving point-in-time restore for a few cents a month[^hn-launch]. Johnson and the project joined Fly.io in May 2022 alongside the "All-In on Server-Side SQLite" manifesto[^fly-allin]. Fly then put its effort into LiteFS and Litestream stalled for almost two years. In 2025 Fly returned to it: the "revamped" design uses the LTX file format with LSM-like compaction levels (30 s, 5 min, 1 h), S3 conditional writes for leases instead of Consul, read replicas through a VFS, and replication of thousands of databases from one process[^fly-revamped]. v0.5.0 shipped in October 2025[^simonw]. The repository had about 14.4k stars and was actively developed in October 2026[^gh].

# Timeline
| Year | Event |
|---|---|
| 2021 | Open-sourced (Jan 22)[^hn-launch] |
| 2022 | Joins Fly.io (May)[^fly-allin] |
| 2022–24 | Little development while Fly focuses on LiteFS |
| 2025 | Revamp announced (May). v0.5.0 with LTX and PITR (Oct)[^fly-revamped][^simonw] |

# What worked
- A minimal design: no changes to the app, works with any SQLite, and uses cheap object storage as the durable copy.
- The approach outlived its more ambitious sibling, LiteFS.

# What didn't
- Asynchronous replication can lose the last second or so of writes, and it gives no automatic failover until the 2025 lease work.
- About two years of neglect between 2022 and 2025, when the owner's priorities moved elsewhere.

# Related
[LiteFS](/systems/litefs.md) · [SQLite](/systems/sqlite.md) · [SQLite in production](/ideas/edge-devx/sqlite-in-production.md) · [Launch event](/events/2021-01-litestream-open-sourced.md)
