---
type: System
title: Apache Druid
description: "Real-time OLAP store from Metamarkets, commercialised by Imply. It was well funded in 2021–2022 ($170M across two rounds) but lost mindshare to ClickHouse. Imply pivoted toward an 'observability warehouse' (Lumi) in 2025–2026."
resource: https://druid.apache.org
tags: [olap, real-time, apache, imply]
kind: oss
first_release: 2012
org: "Apache Software Foundation; commercial steward Imply"
license: Apache-2.0
outcome: struggling
ideas: [ideas/analytics-lakehouse/real-time-olap]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2022
    resource: https://www.cs.cmu.edu/~pavlo/blog/2022/12/2022-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2022: A Year in Review"
    author: person:andy-pavlo
  - id: imply-news
    resource: https://imply.io/news-and-press/
    title: "Imply newsroom (Lumi, 2025–2026)"
  - id: druid-gh
    resource: https://github.com/apache/druid
    title: "Apache Druid GitHub (quarterly releases 34–38, 2025–2026)"
---

# Summary

Druid pioneered sub-second slice-and-dice over streaming event data with segment-based storage, bitmap indexes and rollups. Imply, founded by Druid's creators, raised $70M in 2021 and a $100M Series D in May 2022[^pavlo-2021][^pavlo-2022]. The project still releases about quarterly (34.0 in Aug 2025 through 38.0 in Oct 2026)[^druid-gh]. Its multi-role architecture (coordinator, overlord, broker, historical, middle manager) and ingestion specs were harder to run than ClickHouse, and community growth stalled. Imply repositioned: Imply Lumi, an "observability warehouse" for log/SIEM cost reduction, launched in September 2025, followed by BYOC and Loglake products in 2026[^imply-news]. No new Imply funding was announced after 2022 (as far as found).

# Timeline

| Year | Event |
|---|---|
| 2019 | Apache TLP (date not re-verified) |
| 2021 | Imply raises $70M[^pavlo-2021] |
| 2022 | Imply $100M Series D[^pavlo-2022] |
| 2025–2026 | Imply Lumi observability pivot[^imply-news]; Druid 34–38[^druid-gh] |

# What worked

- It has proven scale at Netflix, Airbnb and other large event-analytics deployments.

# What didn't

- Operational complexity and a weaker SQL story than ClickHouse cost it mindshare. The commercial business shifted away from "Druid as a service".

# Related

- [Real-time OLAP](/ideas/analytics-lakehouse/real-time-olap.md) · [ClickHouse](/systems/clickhouse.md) · [Apache Pinot](/systems/apache-pinot.md)
