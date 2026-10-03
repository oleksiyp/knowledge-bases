---
type: System
title: Google Cloud Spanner
description: "Google's globally distributed, strongly consistent SQL database (TrueTime + Paxos), sold as a cloud service since 2017. Between 2018 and 2026 it went from an expensive niche product to a multi-model platform with a PostgreSQL dialect and a low entry price. It is the main commercial proof that Spanner-style distributed SQL works."
resource: https://cloud.google.com/spanner
tags: [distributed-sql, newsql, truetime, multi-region, google-cloud, postgres-interface]
kind: cloud-service
first_release: 2017
org: "Google"
license: proprietary
outcome: thriving
ideas: [ideas/distributed-sql/newsql-distributed-sql, ideas/distributed-sql/geo-partitioning-data-residency, ideas/cloud-architecture/hyperscaler-distributed-sql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021: A Year in Review"
    author: person:andy-pavlo
  - id: pg-ga
    resource: https://www.infoq.com/news/2022/07/google-cloud-spanner-postgresql/
    title: "InfoQ: PostgreSQL interface for Cloud Spanner now generally available (2022-07)"
  - id: gis
    resource: https://cloud.google.com/blog/products/databases/use-spanner-at-low-cost-with-granular-instance-sizing
    title: "Google Cloud: Use Spanner at low cost with granular instance sizing"
    author: org:google-cloud
  - id: spanner-2024
    resource: https://cloud.google.com/blog/products/databases/spanner-innovations-in-2024
    title: "Google Cloud: Spanner innovations in 2024"
    author: org:google-cloud
  - id: editions
    resource: https://cloud.google.com/spanner/docs/editions-overview
    title: "Spanner editions overview"
    author: org:google-cloud
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary
Spanner is the system the whole distributed-SQL category copied. Between 2018 and 2026 Google worked on making it accessible. It added a PostgreSQL interface (announced Oct 2021, GA 2022)[^pavlo-2021][^pg-ga] and sub-node "processing units" that brought the price of a production instance down to about $40/month[^gis]. In 2024 it added graph, full-text and vector search, sold through Standard and Enterprise editions[^spanner-2024][^editions]. Google reports peaks of 4 billion queries per second and more than 15 EB under management, with customers such as Yahoo!, Home Depot, Wayfair and Pokémon Go[^spanner-2024]. Of the Spanner-style systems, it is the one that clearly succeeded commercially, helped by being sold inside the Google Cloud bill.

# Timeline
| Date | Event |
|---|---|
| 2017 | Cloud Spanner GA (origins: OSDI 2012 paper) |
| 2021-10 | PostgreSQL interface announced[^pavlo-2021] |
| 2022 | PG interface GA. Granular instance sizing, about $40/month entry[^pg-ga][^gis] |
| 2023 | 50% throughput increase and 2.5x storage per node at the same price[^spanner-2024] |
| 2024 | Spanner Graph, full-text and vector search. Editions pricing (Sept). Geo-partitioning, dual-region, Cassandra proxy adapter[^spanner-2024][^editions] |

# What worked
- Its five-nines multi-region availability and external consistency are unmatched by any other managed product.
- Repeated price-performance increases without price rises lowered the barrier to entry[^spanner-2024].
- Multi-model features let Google position Spanner as a consolidation target (it now includes a Cassandra migration path).

# What didn't
- Its "Postgres compatibility" is a front end on a non-Postgres engine. Pavlo groups it with CockroachDB as Postgres-compatible front ends over back ends not derived from PostgreSQL[^pavlo-2025], so extensions and many semantics do not carry over.
- It is proprietary and GCP-only, which limits it to Google Cloud customers. It cannot run in other clouds or on-prem.

# Related
- [NewSQL / distributed SQL](/ideas/distributed-sql/newsql-distributed-sql.md), [Geo-partitioning](/ideas/distributed-sql/geo-partitioning-data-residency.md), [CockroachDB](/systems/cockroachdb.md), [Aurora DSQL](/systems/aurora-dsql.md), [AlloyDB](/systems/alloydb.md)

[^pavlo-2021]: Pavlo, Databases in 2021.
[^pg-ga]: InfoQ, July 2022.
[^gis]: Google Cloud blog, 2022.
[^spanner-2024]: Google Cloud blog, Dec 2024.
[^editions]: Google Cloud docs.
[^pavlo-2025]: Pavlo, Databases in 2025.
