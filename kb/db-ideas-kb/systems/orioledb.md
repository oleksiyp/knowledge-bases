---
type: System
title: OrioleDB
description: "Undo-log, index-organized storage engine for PostgreSQL delivered as a table access method. Acquired by Supabase in April 2024. Technically the strongest heap replacement, but still in public beta in Oct 2026 and dependent on patches to core Postgres."
resource: https://github.com/orioledb/orioledb
tags: [postgres, storage-engine, table-access-method, mvcc, undo-log]
kind: oss
first_release: 2021
org: "Supabase Inc. (acquired Oriole DB Inc., 2024)"
license: Apache-2.0
outcome: acquired
ideas: [ideas/postgres-ecosystem/pluggable-storage-engines]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: oriole-joins
    resource: https://supabase.com/blog/supabase-acquires-oriole
    title: "Supabase: Oriole joins Supabase (2024-04-15)"
    author: org:supabase
  - id: oriole-gh
    resource: https://github.com/orioledb/orioledb
    title: "OrioleDB GitHub repository"
  - id: oriole-blog
    resource: https://www.orioledb.com/blog
    title: "OrioleDB blog (beta releases; TAM API post, Mar 2025)"
  - id: sb-select-2026
    resource: https://supabase.com/blog/select-2026-scale-without-limits
    title: "Supabase: Scale without limits: Multigres, OrioleDB, and dbarena (2026-10-02)"
    author: org:supabase
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: thebuild-field-guide
    resource: https://thebuild.com/blog/a-field-guide-to-alternative-storage-engines-for-postgresql/
    title: "Christophe Pettus: A Field Guide to Alternative Storage Engines for PostgreSQL (2026-05-08)"
---

# Summary
OrioleDB, created by Alexander Korotkov's team, replaces Postgres's heap with a design built for modern hardware: MVCC through an undo log with in-place updates (no VACUUM-driven bloat), row-level WAL, lock-free in-memory page access, page-level compression and tables organized by primary key[^oriole-joins]. Supabase acquired it on April 15 2024, saying upstreaming "could be a few major Postgres versions away"[^oriole-joins]. Pavlo welcomed the deal: Postgres "has an outdated storage architecture. OrioleDB fixes that problem"[^pavlo-2024]. Since then it has moved through a long series of betas (beta12 in July 2025 added non-B-tree indexes, rewind and tablespaces). OrioleDB has argued publicly for a better TAM API[^oriole-blog]. In Oct 2026 it was a public beta selectable per table on Supabase, with up to 1.8x throughput over heap on a TPC-C-derived benchmark[^sb-select-2026].

# Timeline
| Date | Event |
|---|---|
| 2021–22 | Early public releases as an extension needing patched Postgres (exact first-release date unconfirmed)[^oriole-gh] |
| 2024-04-15 | Acquired by Supabase[^oriole-joins] |
| 2025-03 | "Why PostgreSQL needs better Table Access Method API"[^oriole-blog] |
| 2025-07 | beta12[^oriole-blog] |
| 2026-10-02 | Public beta on Supabase. Up to 1.8x heap throughput claimed[^sb-select-2026] |

# What worked
- The most complete answer yet to Postgres's bloat and VACUUM problem. Pettus's 2026 survey calls it the "most architecturally ambitious living project"[^thebuild-field-guide].
- A well-funded owner with a direct product use for it.

# What didn't
- Years after its first public releases, it is still not production-ready[^sb-select-2026][^thebuild-field-guide].
- It needs core Postgres patches and TAM API changes. That makes it dependent on the slow upstream process.
- It has a single sponsor. If Supabase's priorities change, the project has no other backer.

# Related
- [Pluggable storage engines](/ideas/postgres-ecosystem/pluggable-storage-engines.md)
- [Supabase acquires OrioleDB](/events/2024-04-supabase-acquires-orioledb.md)
- [Supabase](/systems/supabase.md), [PostgreSQL](/systems/postgresql.md), [LeanStore](/systems/leanstore.md)
