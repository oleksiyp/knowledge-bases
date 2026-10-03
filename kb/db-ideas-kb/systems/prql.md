---
type: System
title: PRQL
description: "Pipelined Relational Query Language: an open-source language that compiles to SQL, written in Rust. It built a loyal following and an experimental ClickHouse dialect, but never became a mainstream alternative. Pipe syntax inside SQL took its main idea."
resource: https://prql-lang.org
tags: [query-language, sql-alternative, rust, compiler]
kind: oss
first_release: 2022
org: "PRQL community"
license: Apache-2.0
outcome: stable
ideas: [ideas/edge-devx/sql-alternatives]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: changelog
    resource: https://prql-lang.org/book/project/changelog.html
    title: "PRQL changelog"
  - id: ch
    resource: https://clickhouse.com/blog/clickhouse-release-23-07
    title: "ClickHouse release 23.7 (experimental PRQL dialect)"
    author: org:clickhouse
  - id: gh
    resource: https://github.com/PRQL/prql
    title: "PRQL GitHub repository"
  - id: npm
    resource: https://api.npmjs.org/downloads/point/last-week/prql-js
    title: "npm download API: prql-js, week ending 2026-10-01"
  - id: pipe
    resource: https://vldb.org/pvldb/vol17/p4051-shute.pdf
    title: "Shute et al.: Pipe Syntax In SQL (VLDB 2024)"
    author: org:google
---

# Summary
PRQL ("prequel") writes queries as a top-to-bottom pipeline (`from`, `filter`, `derive`, `aggregate`) and compiles them to SQL for many dialects. It drew strong Hacker News interest from 2022. ClickHouse merged an experimental PRQL dialect in release 23.7 (July 2023)[^ch], and bindings exist for Python, JS, R and other languages. Usage stayed small: the JavaScript binding had about 1,100 weekly npm downloads in late September 2026[^npm], against about 10.9k GitHub stars[^gh]. Releases continued at a slow pace in the 0.13.x line[^changelog]. Google's 2024 pipe-syntax work delivered the same left-to-right model inside SQL itself[^pipe], which removed most of the reason to switch languages.

# Timeline
| Year | Event |
|---|---|
| 2022 | Project announced, first releases |
| 2023 | ClickHouse 23.7 experimental PRQL dialect[^ch] |
| 2024 | SQL pipe syntax published by Google[^pipe] |
| 2025 | 0.13.x releases continue[^changelog] |

# What worked
- Readability and clear composition. It also influenced the case for pipe syntax.

# What didn't
- Requiring a separate compiler and toolchain. BI tools, ORMs and LLMs all speak SQL.

# Related
[SQL alternatives](/ideas/edge-devx/sql-alternatives.md) · [Malloy](/systems/malloy.md) · [Pipe syntax paper](/papers/2024-pipe-syntax-in-sql.md)
