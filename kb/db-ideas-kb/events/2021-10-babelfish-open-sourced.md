---
type: Event
title: "Babelfish for Aurora PostgreSQL goes GA and open source"
description: "On 2021-10-28 AWS made Babelfish GA, letting SQL Server apps speak TDS/T-SQL to Aurora PostgreSQL, and open-sourced it. A landmark for 'Postgres behind a foreign protocol', with modest visible adoption since."
date: 2021-10-28
year: 2021
kind: launch
signal: positive
ideas: [ideas/postgres-ecosystem/postgres-compatibility-standard]
systems: [systems/babelfish, systems/aurora, systems/postgresql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: babelfish-ga
    resource: https://press.aboutamazon.com/2021/10/aws-announces-general-availability-of-babelfish-for-amazon-aurora-postgresql
    title: "AWS: General availability of Babelfish for Amazon Aurora PostgreSQL (2021-10-28)"
    author: org:aws
  - id: babelfish-oss
    resource: https://aws.amazon.com/about-aws/whats-new/2021/10/babelfish-postgresql-open-source-project/
    title: "AWS: Announcing availability of the Babelfish for PostgreSQL open source project"
    author: org:aws
---

# What happened
AWS announced general availability of Babelfish for Aurora PostgreSQL, a TDS listener plus T-SQL support (stored procedures, savepoints, nested transactions), with FactSet, Tyler Technologies and Q2 named as users[^babelfish-ga]. On the same day it released Babelfish for PostgreSQL as open source under the Apache-2.0 and PostgreSQL licenses[^babelfish-oss].

# Why it matters
It made Postgres a *target* for another vendor's protocol, aimed squarely at SQL Server licensing revenue. The same pattern appeared later with MongoDB-compatible layers on Postgres (DocumentDB, FerretDB). Babelfish is still a migration accelerator rather than a mass-migration tool, since T-SQL coverage is partial.

# Related
- [Babelfish](/systems/babelfish.md), [Postgres compatibility as a standard](/ideas/postgres-ecosystem/postgres-compatibility-standard.md), [Aurora](/systems/aurora.md)
