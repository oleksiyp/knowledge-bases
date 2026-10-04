---
type: Paper
title: 'Anarchy in the Database: A Survey and Evaluation of Database Management System
  Extensibility'
description: A survey and automated analysis of extension mechanisms shows that a
  large plugin ecosystem does not guarantee safe composition; pairwise tests expose
  integration failures and testing limitations.
year: 2025
venue: PVLDB 18(6), pages 1962–1976
authors:
- Abigale Kim
- Marco Slot
- David G. Andersen
- Andrew Pavlo
resource: https://www.vldb.org/pvldb/vol18/p1962-kim.pdf
impact: medium
ideas:
- ideas/postgres-ecosystem/extensions-as-platform
- ideas/postgres-ecosystem/pluggable-storage-engines
sources:
- id: paper
  resource: https://www.vldb.org/pvldb/vol18/p1962-kim.pdf
  title: Anarchy in the Database, PVLDB 18(6), 2025
- id: artifact
  resource: https://github.com/cmu-db/ext-analyzer
  title: ExtAnalyzer research artifact
status: stable
generated:
  by: codex
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
---

# Claim

Kim and colleagues compare extensibility in PostgreSQL, MySQL, MariaDB, SQLite, Redis and DuckDB. They catalogue 441 PostgreSQL extensions and introduce ExtAnalyzer for static and dynamic analysis. Their core finding is that extensibility mechanisms affect composability: shared hooks, copied server code, configuration and load order create interactions that cannot be understood by counting available plugins.[^paper]

The denominator deserves care. Although the abstract summarizes incompatibility at the extension level, section 5.4 describes dynamic tests of 96 extensions with installation scripts and reports failure in 16.8% of tested pairs. Tests install both orders, run extension tests and use pgbench as a smoke test. Some failures are brittle output comparisons rather than database corruption. This is not proof that 16.8% of all 441 extensions corrupt data.[^paper]

# What happened next

The released toolkit and data make the study inspectable and provide a basis for checking combinations rather than assuming that individually supported plugins compose safely.[^artifact] The paper supports recommendations for clearer interfaces, finer-grained integration points and better extension testing. Its medium impact rating reflects a reusable diagnostic framework; no direct industry-wide reduction in failures is established here.

For product evaluation, the important lesson is to test the actual extension set, versions and loading order. A passing pairwise smoke test is not proof of every higher-order combination or production workload, just as a failed test is not automatically evidence of data loss.

# Related

- [Extensions as a platform](/ideas/postgres-ecosystem/extensions-as-platform.md)
- [Pluggable storage engines](/ideas/postgres-ecosystem/pluggable-storage-engines.md)
