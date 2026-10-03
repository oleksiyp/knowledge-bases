---
type: System
title: MotherDuck
description: "VC-backed serverless DuckDB cloud ('hybrid execution' between laptop and cloud), founded by ex-BigQuery lead Jordan Tigani, author of 'Big Data is Dead'. GA June 2024, ~$100M raised. Its position became uncertain when AWS bought DuckDB's core team in 2026."
resource: https://motherduck.com
tags: [duckdb, cloud, serverless, data-warehouse, single-node]
kind: cloud-service
first_release: 2023
org: "MotherDuck Corporation"
outcome: growing
ideas: [ideas/analytics-lakehouse/single-node-analytics, ideas/analytics-lakehouse/cloud-data-warehouses]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: big-data-dead
    resource: https://motherduck.com/blog/big-data-is-dead/
    title: "Jordan Tigani: Big Data is Dead (2023-02-07)"
  - id: pavlo-2022
    resource: https://www.cs.cmu.edu/~pavlo/blog/2022/12/2022-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2022: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: md-ga
    resource: https://www.prnewswire.com/news-releases/motherduck-announces-general-availability-brings-simplicity-and-power-of-duckdb-in-a-serverless-data-warehouse-302168749.html
    title: "PR Newswire: MotherDuck GA (2024-06-12)"
  - id: md-wiki
    resource: https://en.wikipedia.org/wiki/MotherDuck
    title: "Wikipedia: MotherDuck"
  - id: md-duck-amazon
    resource: https://motherduck.com/blog/duckdb-amazon/
    title: "MotherDuck blog: DuckDB outgrows its nest (Aug 2026)"
---

# Summary

MotherDuck was founded in 2022 by Jordan Tigani (a founding engineer and later product leader of BigQuery) to build a serverless cloud warehouse on DuckDB. It raised about $45M seed/Series A in November 2022[^pavlo-2022] and a $52.5M Series B in September 2023[^pavlo-2023], about $100M in total[^md-wiki]. Tigani's essay "Big Data is Dead" (Feb 2023) was the manifesto for single-node analytics[^big-data-dead]. MotherDuck went GA on 2024-06-12 with a $25/month plan[^md-ga]. Its pricing changed several times afterward. When AWS announced the DuckLabs acquisition in August 2026, MotherDuck responded by offering enterprise DuckDB support itself[^md-duck-amazon].

# Timeline

| Year | Event |
|---|---|
| 2022 | Founded; ~$45M seed/A[^pavlo-2022] |
| 2023 | "Big Data is Dead"[^big-data-dead]; $52.5M Series B[^pavlo-2023] |
| 2024 | GA[^md-ga] |
| 2026 | AWS acquires DuckLabs; MotherDuck adds DuckDB support offering[^md-duck-amazon] |

# What worked

- Strong thought leadership and developer goodwill, and a close partnership with DuckDB Labs.
- Dual execution (local plus cloud) is a distinctive idea that no incumbent offers.

# What didn't

- Revenue scale is undisclosed. Small-data warehousing is a price-sensitive segment where BigQuery, Snowflake and now AWS compete.
- It depends on an engine whose core developers now work for a hyperscaler.

# Related

- [Single-node analytics](/ideas/analytics-lakehouse/single-node-analytics.md) · [DuckDB](/systems/duckdb.md) · [Big Data is Dead essay](/events/2023-02-big-data-is-dead-essay.md)
