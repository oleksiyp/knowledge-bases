---
type: System
title: Babelfish for PostgreSQL
description: "AWS-built set of Postgres extensions that implement SQL Server's TDS wire protocol and T-SQL dialect, so SQL Server applications can run on Aurora PostgreSQL. GA and open-sourced in Oct 2021. A useful migration accelerator with limited visible adoption."
resource: https://babelfishpg.org
tags: [postgres, sql-server, t-sql, tds, migration, wire-protocol, aws]
kind: oss
first_release: 2021
org: "Amazon Web Services"
license: "Apache-2.0 / PostgreSQL"
outcome: stable
ideas: [ideas/postgres-ecosystem/postgres-compatibility-standard]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tc-babelfish
    resource: https://techcrunch.com/2020/12/01/aws-goes-after-microsofts-sql-server-with-babelfish-for-aurora-postgresql/
    title: "TechCrunch: AWS goes after Microsoft's SQL Server with Babelfish for Aurora PostgreSQL (2020-12-01)"
    author: org:techcrunch
  - id: babelfish-ga
    resource: https://press.aboutamazon.com/2021/10/aws-announces-general-availability-of-babelfish-for-amazon-aurora-postgresql
    title: "AWS: General availability of Babelfish for Amazon Aurora PostgreSQL (2021-10-28)"
    author: org:aws
  - id: babelfish-oss
    resource: https://babelfishpg.org/blog/releases/2021/10/babelfish-launch/
    title: "Babelfish: Announcing open source Babelfish for PostgreSQL (Oct 2021)"
---

# Summary
Babelfish was AWS's direct attack on SQL Server licensing. Announced at re:Invent in Dec 2020[^tc-babelfish], it adds a TDS (SQL Server wire protocol) listener and T-SQL semantics (procedures, nested transactions, savepoints and more) on top of PostgreSQL through extensions plus a patched Postgres. It went GA on Aurora PostgreSQL on Oct 28 2021, with FactSet, Tyler Technologies and Q2 named as customers[^babelfish-ga]. The same day it was open-sourced under Apache-2.0 and PostgreSQL licenses[^babelfish-oss]. It is the clearest example of Postgres as the *target engine behind a foreign interface*, the same pattern Microsoft later used for MongoDB (DocumentDB).

# Timeline
| Date | Event |
|---|---|
| 2020-12-01 | Announced at re:Invent[^tc-babelfish] |
| 2021-10-28 | GA on Aurora PostgreSQL. Open-sourced[^babelfish-ga][^babelfish-oss] |

# What worked
- Lowered the cost of the first step off SQL Server. Apps could connect unchanged and be rewritten gradually.
- Strengthened the case for Postgres as a universal back end that can be reached through other databases' protocols.

# What didn't
- T-SQL and SQL Server behavior are large and quirky, so coverage is partial. Migrations still need assessment tools and rewrites.
- Outside Aurora the open-source distribution needs a patched Postgres, which limits community adoption. Public evidence of large-scale migrations is thin (adoption figures unconfirmed).
- Microsoft meanwhile invested heavily in its own Postgres services (Citus, Azure HorizonDB), so SQL Server shops moving to Postgres have options beyond AWS.

# Related
- [Postgres compatibility as a standard](/ideas/postgres-ecosystem/postgres-compatibility-standard.md)
- [Babelfish open-sourced](/events/2021-10-babelfish-open-sourced.md)
- [Aurora](/systems/aurora.md), [DocumentDB](/systems/documentdb.md), [PostgreSQL](/systems/postgresql.md)
