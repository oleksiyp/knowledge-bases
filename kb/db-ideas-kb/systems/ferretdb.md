---
type: System
title: FerretDB
description: "An Apache-licensed MongoDB-compatible proxy that stores data in PostgreSQL. Since 2.0 (2025) it runs on Microsoft's DocumentDB extension. MongoDB sued it in May 2025."
resource: https://www.ferretdb.com
tags: [document, mongodb-compatible, postgres, open-source, litigation]
kind: oss
first_release: 2021
org: "FerretDB Inc."
license: Apache-2.0
outcome: growing
ideas: [ideas/nosql-models/document-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: v2
    resource: https://blog.ferretdb.io/ferretdb-releases-v2-faster-more-compatible-mongodb-alternative/
    title: "FerretDB releases 2.0"
    author: org:ferretdb
  - id: infoq
    resource: https://www.infoq.com/news/2025/02/ferretdb-documentdb
    title: "InfoQ: FerretDB 2.0 moves to DocumentDB (2025-02)"
    author: org:infoq
  - id: suit
    resource: https://www.courtlistener.com/docket/70354365/mongodb-inc-v-ferretdb-inc/
    title: "MongoDB, Inc. v. FerretDB Inc. (D. Del. 1:25-cv-00641)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: shuji
    resource: https://shujisado.org/2026/07/15/mongodb-v-ferretdb-when-open-source-compatibility-becomes-a-patent-risk/
    title: "Shuji Sado: MongoDB v. FerretDB — when open source compatibility becomes a patent risk (2026-07-15)"
---

# Summary

FerretDB was started in 2021 by former Percona executives as "open-source MongoDB" after SSPL. It translates the MongoDB wire protocol and queries into operations on PostgreSQL; an older generation also offered SQLite[^pavlo-2025]. Version 1.x did its own JSONB translation and had performance and compatibility limits. FerretDB 2.0 (early 2025) switched to Microsoft's open-source DocumentDB extension and claimed more than 20x speedups, plus vector search and replication[^v2][^infoq]. MongoDB sent a cease-and-desist letter in November 2023 and sued in Delaware on May 23, 2025, alleging infringement of four patents (aggregation pipeline optimization, write reliability), false advertising and trademark dilution[^suit][^pavlo-2025]. The case was pending as of mid-2026[^shuji].

# Timeline

| Year | Event |
|---|---|
| 2021 | Project launched (originally "MangoDB") |
| 2023 | MongoDB cease-and-desist (Nov)[^pavlo-2025] |
| 2025 | FerretDB 2.0 GA on DocumentDB[^v2]; MongoDB files suit (May 23)[^suit] |

# What worked

- The 2.0 release demonstrates collaboration on a Mongo-compatible layer over Postgres rather than independent reinvention of every document operator.[^v2]
- Pivoting to DocumentDB let a small team stop maintaining its own storage translation.

# What didn't

- Small-company economics: the differentiation narrowed once hyperscalers backed DocumentDB directly.
- The 2025 filing created legal uncertainty for the project. Allegations and a pending case are not a judicial finding of infringement.[^suit]

# Related

- [Document databases](/ideas/nosql-models/document-databases.md)
- [MongoDB](/systems/mongodb.md), [DocumentDB](/systems/documentdb.md), [PostgreSQL](/systems/postgresql.md)
