---
type: System
title: Gel (formerly EdgeDB)
description: "A 'graph-relational' database on top of Postgres with its own schema language and EdgeQL query language. Renamed Gel in February 2025 with full SQL support; the company shut down its cloud and its team joined Vercel in December 2025. The open-source project is dormant."
resource: https://www.geldata.com
tags: [query-language, postgres, edgeql, startup-shutdown]
kind: product
first_release: 2022
org: "Gel Data Inc. (team joined Vercel, Dec 2025)"
license: Apache-2.0
outcome: dead
ideas: [ideas/edge-devx/sql-alternatives, ideas/edge-devx/reactive-backend-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: rename
    resource: https://www.geldata.com/blog/edgedb-is-now-gel-and-postgres-is-the-future
    title: "EdgeDB is now Gel and Postgres is the Future (2025-02-25)"
    author: org:gel
  - id: vercel
    resource: https://www.geldata.com/blog/gel-joins-vercel
    title: "Gel joins Vercel (2025-12-02)"
    author: org:gel
  - id: vercel-python
    resource: https://vercel.com/blog/investing-in-the-python-ecosystem
    title: "Vercel: Investing in the Python ecosystem"
    author: org:vercel
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: gh
    resource: https://github.com/geldata/gel
    title: "Gel GitHub repository (last push 2025-12-24 as of 2026-10-03)"
---

# Summary
EdgeDB, from Python core developers Yury Selivanov and Elvis Pranskevichus (creators of asyncpg and uvloop), compiled EdgeQL, a composable query language with object-graph results and link traversal, plus a declarative schema and migration system down to Postgres. EdgeDB 1.0 shipped in 2022, followed by a managed cloud. On February 25, 2025 it renamed itself Gel. The reasons given were that "EdgeDB" suggested edge computing or a graph database, and the rename came with full native SQL support and the positioning "Gel to Postgres is what TypeScript is to JavaScript", including integration with Drizzle[^rename]. On December 2, 2025 the company announced it was shutting down: Gel Cloud stopped accepting new instances immediately and closed on January 31, 2026, and the team joined Vercel to work on Python support[^vercel][^vercel-python]. The founder's postmortem named category confusion (people compared it to ORMs) and scope ("you will be boiling the ocean")[^vercel]. Pavlo treated it as an acquisition[^pavlo-2025]. The repository (about 14.2k stars) had no pushes after December 24, 2025[^gh].

# Timeline
| Year | Event |
|---|---|
| 2022 | EdgeDB 1.0 |
| 2023 | EdgeDB Cloud |
| 2025 | Renamed Gel, full SQL (Feb 25)[^rename]. Shutdown, team to Vercel (Dec 2)[^vercel] |
| 2026 | Gel Cloud closed (Jan 31)[^vercel] |

# What worked
- Excellent engineering. Its schema and migration tooling and EdgeQL were widely admired.

# What didn't
- A new query language plus a new data model plus a cloud service, sold into a Postgres-and-ORM world. Adding SQL in 2025 came too late.

# Related
[SQL alternatives](/ideas/edge-devx/sql-alternatives.md) · [Shutdown event](/events/2025-12-gel-joins-vercel.md) · [PostgreSQL](/systems/postgresql.md)
