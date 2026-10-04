---
type: Idea
title: "Replacing Postgres's heap with pluggable storage engines"
description: "Use the table access method API (PG 12, 2019) to swap Postgres's append-only heap and VACUUM for undo-log, columnar or index-organized engines. Verdict: niche. Seven years on, zheap and zedstore are dead, Timescale removed its Hypercore TAM, and OrioleDB is still in beta. The storage changes that shipped went below the WAL instead (Aurora, Neon, AlloyDB)."
tags: [postgres, storage-engine, table-access-method, mvcc, vacuum]
area: postgres-ecosystem
verdict: niche
hype_peak: 2019
adoption_2026: rare
origins: "MySQL's pluggable storage engines (InnoDB, MyRocks) showed the model. zheap work began at EnterpriseDB around 2017–2018."
key_systems: [systems/orioledb, systems/postgresql, systems/timescaledb, systems/citus, systems/supabase]
related_ideas: [ideas/postgres-ecosystem/extensions-as-platform, ideas/cloud-architecture/disaggregated-storage-compute-oltp, ideas/postgres-ecosystem/analytics-inside-postgres]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pg12
    resource: https://www.postgresql.org/about/news/postgresql-12-released-1976/
    title: "PostgreSQL 12 Released! (2019-10-03)"
    author: org:postgresql
  - id: zheap-wiki
    resource: https://wiki.postgresql.org/wiki/Zheap
    title: "PostgreSQL wiki: Zheap"
  - id: zheap-cybertec
    resource: https://github.com/cybertec-postgresql/zheap
    title: "cybertec-postgresql/zheap (archived 2025-02-10)"
  - id: thebuild-field-guide
    resource: https://thebuild.com/blog/a-field-guide-to-alternative-storage-engines-for-postgresql/
    title: "Christophe Pettus: A Field Guide to Alternative Storage Engines for PostgreSQL (2026-05-08)"
  - id: tsdb-hypercore-pr
    resource: https://github.com/timescale/timescaledb/pull/8196
    title: "timescale/timescaledb PR #8196: deprecation warning for hypercore access method"
    author: org:timescale
  - id: tsdb-222
    resource: https://github.com/timescale/timescaledb/releases/tag/2.22.0
    title: "TimescaleDB 2.22.0 release (2025-09-02)"
    author: org:timescale
  - id: oriole-joins
    resource: https://supabase.com/blog/supabase-acquires-oriole
    title: "Supabase: Oriole joins Supabase (2024-04-15)"
    author: org:supabase
  - id: oriole-blog
    resource: https://www.orioledb.com/blog
    title: "OrioleDB blog (beta releases; 'Why PostgreSQL needs better Table Access Method API', 2025)"
  - id: sb-select-2026
    resource: https://supabase.com/blog/select-2026-scale-without-limits
    title: "Supabase: Scale without limits: Multigres, OrioleDB, and dbarena (2026-10-02)"
    author: org:supabase
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary
**Verdict: niche, possibly too early.** PostgreSQL 12 (Oct 2019) introduced the "pluggable table storage interface"[^pg12]. The hope was that Postgres would get what MySQL had with InnoDB and MyRocks: alternative engines that remove VACUUM and bloat or add columnar storage. By Oct 2026 the record is poor:
- **zheap** (undo-based in-place updates, EDB then Cybertec) was dormant from about 2020 and archived in Feb 2025[^zheap-cybertec].
- **zedstore** (columnar) died around 2019–2020[^thebuild-field-guide].
- **TimescaleDB's Hypercore TAM** shipped, was deprecated in 2.21 and was removed in 2.22 (Sept 2025) because it "did not show the performance improvements expected"[^tsdb-hypercore-pr][^tsdb-222].
- **OrioleDB**, the strongest candidate, was acquired by Supabase in April 2024[^oriole-joins]. It was still a public beta in Oct 2026, with up to 1.8x TPC-C-derived throughput claimed[^sb-select-2026].

Append-oriented columnar engines such as Citus columnar illustrate a narrower production use case, rather than proving that every alternative TAM failed[^thebuild-field-guide].

# The idea
Postgres's MVCC writes a new tuple version on every UPDATE and leaves dead tuples for VACUUM. That causes table and index bloat, write amplification, and transaction-ID wraparound risk. It is the most-cited operational weakness of Postgres. A table access method (TAM) lets an extension supply its own tuple storage while keeping the parser, planner, executor and protocol. Possible engines: undo-log MVCC with in-place updates (zheap, OrioleDB), index-organized tables, columnar storage for analytics, and engines designed for SSDs and many cores[^oriole-joins].

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018 | zheap developed at EDB as a heap replacement with undo logs[^zheap-wiki] | + |
| 2019 | PG 12 ships the table AM API[^pg12]. zedstore columnar prototype appears | + |
| 2020 | zheap moves to Cybertec (sponsored by Heroic Labs). Activity fades[^zheap-wiki] | − |
| 2021–23 | Citus columnar and Hydra columnar ship as append-only TAMs[^thebuild-field-guide] | + |
| 2024 | Supabase acquires OrioleDB. Upstreaming expected to be "a few major Postgres versions away"[^oriole-joins]. Pavlo: Postgres "has an outdated storage architecture. OrioleDB fixes that problem"[^pavlo-2024] | + |
| 2025 | Cybertec zheap repo archived (Feb)[^zheap-cybertec]. OrioleDB argues that Postgres needs a better TAM API (Mar)[^oriole-blog] | − |
| 2025 | Timescale deprecates (2.21) and removes (2.22) Hypercore TAM[^tsdb-222] | − |
| 2026 | OrioleDB public beta selectable on Supabase. Claims up to 1.8x heap throughput[^sb-select-2026] | +/− |

# What succeeded
- **The API exists and is used.** Columnar TAMs (Citus, Hydra) give real compression and scan speedups for append-mostly data[^thebuild-field-guide].
- **OrioleDB found a well-funded home.** Supabase can fund the multi-year path to production and keep pushing upstream API changes[^oriole-joins][^sb-select-2026].

# What failed
- **Undo-log MVCC on Postgres.** zheap consumed years of senior engineering at two companies and never shipped[^zheap-wiki][^zheap-cybertec].
- **TAM in production at a major vendor.** Timescale built, shipped, deprecated and removed a TAM within about a year. Simpler sparse indexes on compressed chunks replaced it[^tsdb-222].
- **The API is too narrow.** It assumes heap-like tuple identifiers (TIDs) and leaves WAL, indexes and VACUUM integration to each engine. OrioleDB has had to patch core Postgres and campaign for API changes[^oriole-blog]. Pettus's 2026 field guide makes the same point about zheap: undo-log MVCC needs years of integration work after the code first compiles[^thebuild-field-guide].

# Why
- **Everything in Postgres assumes the heap.** Indexes point at TIDs, and replication, logical decoding, VACUUM, HOT updates and many extensions depend on heap behavior. A new engine must be correct across all of it. That is far harder than MySQL's handler API, which was built for multiple engines from the start.
- **Better places to put the effort.** Vendors got larger wins by replacing storage *below* the WAL (Aurora, Neon, AlloyDB, HorizonDB), which keeps heap semantics intact. See [Disaggregated storage/compute](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md). Analytics went to embedded engines (DuckDB) instead of columnar TAMs. See [Analytics inside Postgres](/ideas/postgres-ecosystem/analytics-inside-postgres.md).
- **Core Postgres moves conservatively.** API changes need consensus over several release cycles. Startups cannot wait that long, which makes patient funding valuable.

# Lessons
- A plug-in point added late to a mature engine tends to stay shallow. The rest of the system must be refactored before plug-ins are first-class.
- When upper layers are tightly coupled to a storage format, swapping the layer *beneath* the log is easier than swapping the format.
- Deep engine work on community databases needs patient platform-company money, not a standalone startup.

# Related
- [OrioleDB](/systems/orioledb.md), [PostgreSQL](/systems/postgresql.md), [TimescaleDB](/systems/timescaledb.md), [Citus](/systems/citus.md), [Supabase](/systems/supabase.md)
- [PostgreSQL 12 adds table access methods](/events/2019-10-postgresql-12-table-access-methods.md), [Supabase acquires OrioleDB](/events/2024-04-supabase-acquires-orioledb.md)
- [SSD-optimized buffer managers](/ideas/hardware-engines/ssd-optimized-buffer-managers.md)
