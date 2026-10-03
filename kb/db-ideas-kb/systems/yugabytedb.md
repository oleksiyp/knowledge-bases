---
type: System
title: YugabyteDB
description: "Distributed SQL database that reuses PostgreSQL's query layer (a hard fork) on top of a Raft-replicated DocDB storage engine, plus a Cassandra-compatible API. It went fully Apache 2.0 in 2019 and was valued at $1.3B in 2021. It remains open source, but Postgres compatibility trails upstream (PG15 in 2025)."
resource: https://www.yugabyte.com
tags: [distributed-sql, newsql, postgres-fork, apache-2, raft, multi-region]
kind: oss
first_release: 2016
org: "Yugabyte Inc."
license: "Apache-2.0 (database core)"
outcome: stable
ideas: [ideas/distributed-sql/newsql-distributed-sql, ideas/distributed-sql/geo-partitioning-data-residency, ideas/distributed-sql/jepsen-correctness-culture]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: yb-apache
    resource: https://www.yugabyte.com/blog/why-we-changed-yugabyte-db-licensing-to-100-open-source/
    title: "Yugabyte: Why we changed YugabyteDB licensing to 100% open source (2019-07)"
    author: org:yugabyte
  - id: tdwi
    resource: https://tdwi.org/articles/2019/07/16/yugabyte-open-source.aspx
    title: "TDWI: YugaByte commits its distributed SQL database to open source (2019-07-16)"
  - id: yb-c
    resource: https://www.yugabyte.com/blog/yugabyte-raises-188-million-series-c-to-make-distributed-sql-ubiquitous/
    title: "Yugabyte raises $188M Series C (2021-10-28)"
    author: org:yugabyte
  - id: j-119
    resource: https://jepsen.io/analyses/yugabyte-db-1.1.9
    title: "Jepsen: YugaByte DB 1.1.9 (2019-03)"
  - id: j-131
    resource: https://jepsen.io/analyses/yugabyte-db-1.3.1
    title: "Jepsen: YugaByte DB 1.3.1 (2019-09)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: gh
    resource: https://github.com/yugabyte/yugabyte-db
    title: "GitHub: yugabyte/yugabyte-db"
---

# Summary
YugabyteDB took the opposite licensing path from CockroachDB. In July 2019 (v1.3) it moved all previously enterprise-only features, including distributed backups, encryption and read replicas, into the Apache 2.0 core[^yb-apache][^tdwi]. Its technical bet was to reuse PostgreSQL's actual query layer rather than reimplement it, which gives better feature coverage but means rebasing a hard fork. Pavlo calls it "probably the most widely deployed sharded PostgreSQL system (and remains open-source!)" but notes it is "only compatible with PostgreSQL v15"[^pavlo-2025]. It raised $188M at a $1.3B valuation in Oct 2021 (over $290M in total)[^yb-c]. Jepsen's 2019 reports found DDL fragility and serializability violations during master failures, and Yugabyte fixed them[^j-119][^j-131].

# Timeline
| Date | Event |
|---|---|
| 2019-03 / 2019-09 | Jepsen analyses of 1.1.9 (YCQL) and 1.3.1 (YSQL)[^j-119][^j-131] |
| 2019-07 | 100% Apache 2.0, no enterprise edition[^yb-apache] |
| 2021-10 | $188M Series C at $1.3B[^yb-c] |
| 2025 | PG15-compatible release line. Pavlo lists it among surviving independent Postgres DBaaS vendors[^pavlo-2025] |

# What worked
- Openness. It is the main fully open-source alternative in the category, with about 10.6k GitHub stars[^gh].
- Reusing Postgres code gives broader SQL coverage than clean-room front ends.

# What didn't
- Tracking upstream Postgres is a permanent cost. Its version lags behind current Postgres releases[^pavlo-2025].
- No public funding round since 2021. We could not verify revenue or reported layoffs (aggregator data only, so we left it out).

# Related
- [NewSQL](/ideas/distributed-sql/newsql-distributed-sql.md), [Jepsen culture](/ideas/distributed-sql/jepsen-correctness-culture.md), [CockroachDB](/systems/cockroachdb.md), [PostgreSQL](/systems/postgresql.md)

[^yb-apache]: Yugabyte blog, July 2019.
[^tdwi]: TDWI, 2019-07-16.
[^yb-c]: Yugabyte blog, 2021-10-28.
[^j-119]: Jepsen, March 2019.
[^j-131]: Jepsen, Sept 2019.
[^pavlo-2025]: Pavlo, Databases in 2025.
[^gh]: GitHub, checked 2026-10-03.
