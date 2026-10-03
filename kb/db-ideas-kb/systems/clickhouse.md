---
type: System
title: ClickHouse
description: "Apache-2.0 columnar OLAP database from Yandex. Spun out as ClickHouse Inc. in 2021, it became the winner of real-time OLAP and observability analytics: ~$15B valuation (Jan 2026) and ~$250M annualized revenue (May 2026)."
resource: https://clickhouse.com
tags: [olap, real-time, columnar, observability, apache-2]
kind: oss
first_release: 2016
org: "ClickHouse, Inc."
license: Apache-2.0
outcome: thriving
ideas: [ideas/analytics-lakehouse/real-time-olap, ideas/analytics-lakehouse/single-node-analytics]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ch-spinout
    resource: https://www.businesswire.com/news/home/20210920005219/en/ClickHouse-Inc.-Announces-Incorporation-Along-With-%2450M-In-Series-A-Funding
    title: "BusinessWire: ClickHouse, Inc. incorporation and $50M Series A (2021-09-20)"
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: bbg-ch-15b
    resource: https://www.bloomberg.com/news/articles/2026-01-16/clickhouse-lands-15-billion-valuation-in-ai-database-race
    title: "Bloomberg: ClickHouse lands $15B valuation (2026-01-16)"
  - id: tc-ch-250m
    resource: https://techcrunch.com/2026/05/27/clickhouse-triples-annualized-revenue-to-250m-charting-a-path-toward-an-ipo/
    title: "TechCrunch: ClickHouse triples annualized revenue to $250M (2026-05-27)"
  - id: tc-ch-cloud
    resource: https://techcrunch.com/2022/12/06/clickhouse-launches-clickhouse-cloud-extends-its-series-b/
    title: "TechCrunch: ClickHouse launches ClickHouse Cloud (2022-12-06)"
---

# Summary

ClickHouse was built at Yandex for web analytics (Metrica) and open-sourced in 2016. In September 2021 Yandex spun it out as ClickHouse, Inc. with a $50M Series A from Index and Benchmark[^ch-spinout], followed in October by a $250M Series B that also secured rights to the name[^pavlo-2021]. ClickHouse Cloud launched in December 2022[^tc-ch-cloud]. Adoption came bottom-up, especially for logs, metrics and product analytics. The company raised $350M in 2025[^pavlo-2025] and $400M at ~$15B in January 2026[^bbg-ch-15b], and reported ~$250M annualized revenue (about triple year on year) with 4,000+ customers in May 2026[^tc-ch-250m]. It bought PeerDB (Postgres CDC), HyperDX, LibreChat and Langfuse to build an "agentic data stack".

# Timeline

| Year | Event |
|---|---|
| 2016 | Open-sourced by Yandex |
| 2021 | ClickHouse Inc. spin-out, $50M A and $250M B[^ch-spinout][^pavlo-2021] |
| 2022 | ClickHouse Cloud[^tc-ch-cloud] |
| 2024 | Acquires PeerDB |
| 2025 | $350M Series C[^pavlo-2025]; acquires LibreChat |
| 2026 | $400M at ~$15B[^bbg-ch-15b]; ~$250M ARR[^tc-ch-250m] |

# What worked

- Single-binary simplicity and very high single-node performance drove grassroots adoption.
- It kept the Apache-2.0 licence (no relicensing drama), which kept the community's trust.
- It caught the observability and LLM-observability workload wave.

# What didn't

- Joins and updates were historically weak (improved over time), and it is not a general-purpose warehouse for complex BI.
- Firebolt's closed fork showed the code can be reused by competitors, though that fork did not succeed.

# Related

- [Real-time OLAP](/ideas/analytics-lakehouse/real-time-olap.md) · [Firebolt](/systems/firebolt.md) · [PeerDB](/systems/peerdb.md)
- [ClickHouse spins out of Yandex](/events/2021-09-clickhouse-spins-out-of-yandex.md)
