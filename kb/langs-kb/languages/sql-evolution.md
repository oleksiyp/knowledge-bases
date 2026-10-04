---
type: Language
title: SQL evolution and new query languages
description: SQL absorbed pipeline syntax while PRQL and Malloy explored alternative interfaces. PostgreSQL 19 withdrew
  SQL/PGQ, illustrating the gap between proposed features and shipped support.
trajectory: stable
tags:
- language-evolution
paradigms:
- declarative
- relational
typing: static
memory_model: mixed
steward: Standards bodies, database vendors and independent language projects
governance: committee-standard
ideas: []
runtimes: []
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: pipes
  title: GoogleSQL pipe query syntax
  resource: https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/pipe-syntax
- id: prql
  title: PRQL project overview
  resource: https://prql-lang.org/
- id: malloy
  title: Malloy project overview
  resource: https://www.malloydata.dev/
- id: pipes-launch
  title: 'Google Cloud: SQL pipe syntax in BigQuery and Cloud Logging'
  resource: https://cloud.google.com/blog/products/data-analytics/simplify-your-sql-with-pipe-syntax-in-bigquery-and-cloud-logging/
- id: spark4
  title: Apache Spark 4.0 release
  resource: https://spark.apache.org/releases/spark-release-4-0-0.html
- id: pg19
  title: PostgreSQL 19 Beta 4 release, 24 September 2026
  resource: https://www.postgresql.org/about/news/postgresql-19-beta-4-released-3386/
---

# Summary
**Verdict: compatible extensions shipped; wholesale replacement remains unproven by this evidence.** SQL evolved through engine-specific features and languages that compile to or run over existing engines. Pipeline syntax addresses composition while keeping the database investment intact.[^pipes][^prql][^malloy]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E3–E4 | 2024 | Google presents pipe syntax in BigQuery and Cloud Logging | + [^pipes-launch] |
| E4 | 2025 | Spark 4.0 includes SQL pipe syntax | + [^spark4] |
| E4 | 2026-09-24 | PostgreSQL 19 Beta 4 reverts SQL/PGQ support | deferred [^pg19] |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| Pipeline-based query composition | Implemented in existing SQL engines [^pipes][^spark4] |
| Compile a friendlier language to SQL | PRQL offers this architecture [^prql] |
| Reusable semantic models and nested results | Malloy takes this direction [^malloy] |

# What succeeded
GoogleSQL pipe operators consume and produce tables, support sequential composition, and can be mixed with conventional SQL. This preserves access to an existing engine while reducing some nesting and alias-management problems.[^pipes]

PRQL presents a pipeline-oriented language compiling to SQL. Malloy combines modeling and queries over existing data systems. These are real alternative interfaces; their project documentation does not establish that either displaced SQL at scale.[^prql][^malloy]

# What failed or stalled
PostgreSQL 19's fourth beta explicitly reverted SQL/PGQ. As of the 2026-10-03 cutoff, it must not be listed as a feature shipping in PostgreSQL 19. A previously merged patch or a benchmark against an earlier beta does not override the release notice.[^pg19]

Engine support remains the practical boundary for syntax extensions. BigQuery documentation and Spark's release establish those implementations; they do not make pipe syntax universally accepted across SQL products.[^pipes][^spark4]

# By era
- **E1–E2:** existing relational engines and SQL interfaces are the compatibility baseline.
- **E3:** alternative pipeline and modeling interfaces explore usability.[^prql][^malloy]
- **E4:** established engines adopt some ideas while a graph-query implementation is deferred.[^spark4][^pg19]

# Lessons
**Synthesis:** a better interface can spread by targeting existing engines rather than replacing them. Evaluate semantic portability and generated queries, not only surface syntax. Distinguish standardization, implementation, beta availability and final release support.

# Related
- [Configuration languages](/ideas/tooling-and-ecosystem/configuration-languages.md)
- [Language editions](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md)

[^pipes]: GoogleSQL pipe query syntax — https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/pipe-syntax
[^prql]: PRQL project overview — https://prql-lang.org/
[^malloy]: Malloy project overview — https://www.malloydata.dev/
[^pipes-launch]: Google Cloud: SQL pipe syntax in BigQuery and Cloud Logging — https://cloud.google.com/blog/products/data-analytics/simplify-your-sql-with-pipe-syntax-in-bigquery-and-cloud-logging/
[^spark4]: Apache Spark 4.0 release — https://spark.apache.org/releases/spark-release-4-0-0.html
[^pg19]: PostgreSQL 19 Beta 4 release, 24 September 2026 — https://www.postgresql.org/about/news/postgresql-19-beta-4-released-3386/
