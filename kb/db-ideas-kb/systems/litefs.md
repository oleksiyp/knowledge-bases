---
type: System
title: LiteFS
description: "Fly.io's FUSE-based distributed file system for replicating SQLite across nodes with a single elected primary. Technically clever but operationally demanding: its managed LiteFS Cloud backup service was sunset in October 2024 and Fly refocused on Litestream."
resource: https://github.com/superfly/litefs
tags: [sqlite, replication, fuse, fly-io]
kind: oss
first_release: 2022
org: "Fly.io"
license: Apache-2.0
outcome: struggling
ideas: [ideas/edge-devx/sqlite-in-production, ideas/edge-devx/edge-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: sunset
    resource: https://community.fly.io/t/sunsetting-litefs-cloud/20829
    title: "Fly.io community: Sunsetting LiteFS Cloud (Jul 2024; retired 2024-10-15)"
    author: org:fly-io
  - id: docs-cloud
    resource: https://docs.fly.io/litefs/cloud-backups/
    title: "Fly.io docs: Using LiteFS Cloud for Backups (deprecated)"
    author: org:fly-io
  - id: fly-revamped
    resource: https://fly.io/blog/litestream-revamped/
    title: "Fly.io: Litestream: Revamped (May 2025)"
    author: org:fly-io
  - id: gh
    resource: https://github.com/superfly/litefs
    title: "LiteFS GitHub repository"
---

# Summary
LiteFS (2022) mounted a FUSE file system under an app's SQLite database, intercepted writes at transaction boundaries and shipped them to replicas, with a Consul-based lease choosing the single writer. Its aim was to let read-heavy apps run SQLite replicas in many Fly.io regions. Fly later described the costs plainly: users had to run Consul for leader election, and a FUSE file system was "a lot to ask of users" even with the LiteVFS alternative[^fly-revamped]. The paid LiteFS Cloud backup service was announced for sunset in July 2024 and retired on October 15, 2024, because "most LiteFS users don't use LiteFS Cloud"[^sunset][^docs-cloud]. The open-source project still exists, but its last push was May 2026 (about 4.9k stars)[^gh], and Fly's SQLite effort moved back to Litestream, which absorbed LiteFS ideas (LTX format, leases, VFS read replicas)[^fly-revamped].

# Timeline
| Year | Event |
|---|---|
| 2022 | LiteFS released by Fly.io |
| 2023 | LiteFS Cloud managed backups |
| 2024 | LiteFS Cloud sunset (announced Jul, retired Oct 15)[^sunset] |
| 2025 | Fly calls LiteFS's requirements "a lot to ask" and revamps Litestream[^fly-revamped] |

# What worked
- It proved transaction-aware page shipping (the LTX format) that Litestream later adopted.

# What didn't
- Operational complexity (FUSE, Consul) for users who had picked SQLite to avoid complexity.
- Little demand for multi-region SQLite replicas, the same finding Turso reported.

# Related
[Litestream](/systems/litestream.md) · [SQLite in production](/ideas/edge-devx/sqlite-in-production.md) · [Edge databases](/ideas/edge-devx/edge-databases.md)
