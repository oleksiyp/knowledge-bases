---
type: System
title: Firebolt
description: "Israeli cloud data warehouse built on a fork of ClickHouse, launched in 2020–2021 with over $260M raised at a $1.4B valuation. It failed to break out against Snowflake and BigQuery, released a free self-hosted edition (Firebolt Core) and cut most of its staff in Feb 2026."
resource: https://www.firebolt.io
tags: [data-warehouse, olap, clickhouse-fork, startup]
kind: product
first_release: 2020
org: "Firebolt Analytics"
outcome: struggling
ideas: [ideas/analytics-lakehouse/cloud-data-warehouses, ideas/analytics-lakehouse/real-time-olap]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021: A Year in Review"
    author: person:andy-pavlo
  - id: firebolt-calcalist
    resource: https://www.calcalistech.com/ctechnews/article/r1cj0csuwl
    title: "Calcalist: Unicorn Firebolt slashes workforce as AI reshapes operations (2026-02-20)"
  - id: firebolt-core
    resource: https://www.firebolt.io/blog/introducing-firebolt-core
    title: "Firebolt: Introducing Firebolt Core — self-hosted, free forever"
---

# Summary

Firebolt came out of stealth in 2020 promising a faster cloud warehouse for "data-intensive applications", built on a fork of ClickHouse with its own storage and indexing[^pavlo-2021]. It raised $37M (Dec 2020), $127M (June 2021) and $100M at a $1.4B valuation (Jan 2022)[^firebolt-calcalist]. It never established a clear position against Snowflake, BigQuery and Redshift, or against free ClickHouse. Later it released Firebolt Core, a free, unrestricted self-hosted edition of its engine[^firebolt-core]. The founders stepped back from management in 2025. In February 2026 the company laid off dozens of staff, leaving a small engineering team, and said it still held over $100M in cash[^firebolt-calcalist].

# Timeline

| Year | Event |
|---|---|
| 2020 | $37M Series A |
| 2021 | $127M Series B[^pavlo-2021] |
| 2022 | $100M Series C at $1.4B[^firebolt-calcalist] |
| 2025 | Firebolt Core (free self-hosted)[^firebolt-core]; founders step back |
| 2026 | Large layoffs (Feb)[^firebolt-calcalist] |

# What worked

- Strong engine performance, and its engineering work on ClickHouse-derived code was technically credible.

# What didn't

- It started a closed warehouse in a market dominated by entrenched incumbents and open-source alternatives, and was funded at bubble valuations (2021–2022) that its growth could not support.

# Related

- [Cloud data warehouses](/ideas/analytics-lakehouse/cloud-data-warehouses.md) · [ClickHouse](/systems/clickhouse.md)
