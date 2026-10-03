---
type: Idea
title: "Postgres compatibility as the de-facto standard interface"
description: "New databases speak the PostgreSQL wire protocol and dialect, or fork Postgres code, so they can reuse its drivers, tools and developers. Verdict: won as the interface, but 'compatible' became a spectrum. Wire-protocol clones break on catalogs, extensions and semantics, and code forks pay a permanent cost to keep up with upstream."
tags: [postgres, wire-protocol, compatibility, forks, distributed-sql]
area: postgres-ecosystem
verdict: won
hype_peak: 2025
adoption_2026: mainstream
origins: "Redshift (2012) and Greenplum forked Postgres code. CockroachDB adopted the PG wire protocol in 2015."
key_systems: [systems/postgresql, systems/cockroachdb, systems/yugabytedb, systems/spanner, systems/aurora-dsql, systems/alloydb, systems/aurora, systems/cedardb, systems/babelfish, systems/materialize]
related_ideas: [ideas/postgres-ecosystem/just-use-postgres, ideas/cloud-architecture/disaggregated-storage-compute-oltp, ideas/distributed-sql/newsql-distributed-sql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: cedardb-compat
    resource: https://cedardb.com/blog/postgres_compatibility/
    title: "CedarDB: What It Takes to Be PostgreSQL Compatible (2025-04-24)"
    author: org:cedardb
  - id: devclass-dsql
    resource: https://www.devclass.com/databases/2024/12/09/amazon-explains-absence-of-familiar-features-in-postgresql-compatible-aurora-dsql/1620084
    title: "DevClass: Amazon explains absence of familiar features in 'PostgreSQL compatible' Aurora DSQL (2024-12-09)"
  - id: dsql-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2025/05/amazon-aurora-dsql-generally-available
    title: "AWS: Amazon Aurora DSQL is now generally available (2025-05-27)"
    author: org:aws
  - id: spanner-pg-ga
    resource: https://www.infoq.com/news/2022/07/google-cloud-spanner-postgresql/
    title: "InfoQ: PostgreSQL Interface for Cloud Spanner Now Generally Available (2022)"
    author: org:infoq
  - id: yb-pg15
    resource: https://www.yugabyte.com/blog/postgresql-compatibility-new-yugabytedb-pg15-features/
    title: "Yugabyte: Doubling down on PostgreSQL compatibility, YugabyteDB levels up with PG15 features"
    author: org:yugabyte
  - id: babelfish-ga
    resource: https://press.aboutamazon.com/2021/10/aws-announces-general-availability-of-babelfish-for-amazon-aurora-postgresql
    title: "AWS: General availability of Babelfish for Amazon Aurora PostgreSQL (2021-10-28)"
    author: org:aws
  - id: greenplum-cloudberry
    resource: https://cloudberry.apache.org/blog/cloudberry-database-enters-the-apache-incubator/
    title: "Apache Cloudberry: Cloudberry Database enters the Apache Incubator (Greenplum closed-source context)"
  - id: horizondb
    resource: https://www.infoworld.com/article/4093191/azure-horizondb-microsoft-goes-big-with-postgresql.html
    title: "InfoWorld: Azure HorizonDB, Microsoft goes big with PostgreSQL (Nov 2025)"
  - id: cockroach-why-pg
    resource: https://www.cockroachlabs.com/blog/why-postgres/
    title: "Cockroach Labs: Why CockroachDB and PostgreSQL are compatible"
    author: org:cockroach-labs
---

# Summary
**Verdict: won as the interface, with an honesty problem.** By 2026 "Postgres-compatible" had become what "SQL-92 compliant" was in the 1990s: the label almost every new operational database wanted. Distributed SQL (CockroachDB, YugabyteDB, Spanner's PG interface, Aurora DSQL), cloud-native rewrites (Aurora, AlloyDB, Neon, Azure HorizonDB), streaming databases (Materialize, RisingWave) and analytical engines (CedarDB, QuestDB, CrateDB) all speak the Postgres wire protocol. The protocol is the easy part, though. Tools also depend on `pg_catalog`, exact semantics and extensions[^cedardb-compat]. Aurora DSQL launched in 2024 without foreign keys, triggers, sequences or extensions[^devclass-dsql]. Code forks such as YugabyteDB were stuck on PG 11 for years[^yb-pg15]. Greenplum, a Postgres fork, went closed-source in 2024[^greenplum-cloudberry].

# The idea
Instead of inventing an interface, adopt Postgres's. Every language has a mature Postgres driver, ORMs and BI tools know the dialect, and developers already know `psql`. There are three ways to do it, each with a different cost:
1. **Wire-protocol and dialect reimplementation** (CockroachDB, Materialize, CedarDB, DSQL's front end): your own engine, Postgres on the surface[^cockroach-why-pg].
2. **Code fork or reuse of the Postgres query layer** (YugabyteDB YSQL, AlloyDB, Aurora PostgreSQL, Neon, HorizonDB): high fidelity, but a permanent merge burden.
3. **Protocol translation into Postgres** (Babelfish for SQL Server's TDS/T-SQL, DocumentDB/FerretDB for MongoDB): Postgres as the target engine behind a foreign interface[^babelfish-ga].

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2021 | Babelfish (T-SQL on Aurora PostgreSQL) GA and open-sourced (Oct 28)[^babelfish-ga] | + |
| 2022 | Spanner PostgreSQL interface GA (June)[^spanner-pg-ga]. | + |
| 2024 | Greenplum repos archived and closed-source under Broadcom (May). Fork continues as Apache Cloudberry[^greenplum-cloudberry] | − |
| 2024 | Aurora DSQL preview: no foreign keys, triggers, sequences or extensions[^devclass-dsql] | − |
| 2025 | CedarDB describes four layers of compatibility: grammar, wire, catalogs, low-level APIs[^cedardb-compat] | +/− |
| 2025 | YugabyteDB 2.25 moves from PG 11 to PG 15 compatibility[^yb-pg15] | + |
| 2025 | Aurora DSQL GA (May 27), adding views[^dsql-ga] | + |
| 2025 | Microsoft announces Azure HorizonDB, a Postgres-compatible disaggregated service (Nov)[^horizondb] | + |

# What succeeded
- **Ecosystem reuse.** Wire compatibility let startups launch with working drivers in every language on day one. Cockroach Labs said it chose Postgres so users "would not have to learn too many new things". It also cited Postgres's clearer protocol documentation and a license that allowed code reuse, unlike MySQL's GPL[^cockroach-why-pg].
- **Hyperscaler convergence.** AWS (Aurora, DSQL), Google (AlloyDB, Spanner PG) and Microsoft (HorizonDB) all put Postgres at the front of their newest operational databases[^horizondb][^spanner-pg-ga][^dsql-ga].
- **Migration on-ramps.** Babelfish gave SQL Server shops a path to Postgres, with named early customers (FactSet, Tyler Technologies, Q2)[^babelfish-ga].

# What failed
- **"Compatible" stopped meaning much.** A system that lacks foreign keys, sequences, PL/pgSQL and extensions (DSQL at preview[^devclass-dsql]) and one that runs unmodified Postgres code (AlloyDB) carry the same label. Users find the gaps during migration.
- **Catalog and tooling gaps.** psql, DBeaver and ORMs issue complex, undocumented `pg_catalog` queries that clones must emulate[^cedardb-compat].
- **Fork lag.** YugabyteDB's YSQL stayed on PG 11.2 until 2.25 (2025)[^yb-pg15]. Managed forks ship major versions months after community releases. Extensions that depend on heap internals don't work on forks with different storage[^devclass-dsql].
- **Forks can be closed.** Greenplum, once the flagship open MPP Postgres fork, was archived without notice in 2024[^greenplum-cloudberry].
- **Babelfish adoption stayed niche.** T-SQL coverage is partial, and public evidence of large-scale migrations is thin (unconfirmed adoption figures).

# Why
- **Network effects at the client layer.** Protocol and dialect are where developers and tools live, so the switching costs sit there. Storage and execution are invisible to users and free to replace.
- **Distributed semantics conflict with single-node assumptions.** Sequences, synchronous DDL and explicit locking assume one process holds the state[^devclass-dsql]. Distributed engines must break them.
- **Forking is cheap once and expensive forever.** Every Postgres major release must be re-merged into a codebase whose storage, planner or replication layer has diverged[^yb-pg15].

# Lessons
- Interface standards win where the ecosystem lives (drivers, tools, people), not where the engine lives.
- Publish a compatibility matrix rather than a label. Distinguish wire, dialect, catalog and extension compatibility.
- If you fork, budget for the merge treadmill. Otherwise you end up frozen on an old version.

# Related
- [PostgreSQL](/systems/postgresql.md), [Babelfish](/systems/babelfish.md), [CockroachDB](/systems/cockroachdb.md), [YugabyteDB](/systems/yugabytedb.md), [Spanner](/systems/spanner.md), [Aurora DSQL](/systems/aurora-dsql.md), [AlloyDB](/systems/alloydb.md), [CedarDB](/systems/cedardb.md), [Materialize](/systems/materialize.md)
- [Babelfish open-sourced (2021)](/events/2021-10-babelfish-open-sourced.md), [Greenplum goes closed-source (2024)](/events/2024-05-greenplum-goes-closed-source.md)
- [Disaggregated storage/compute](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md)
