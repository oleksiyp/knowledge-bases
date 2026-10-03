---
type: System
title: Apache Pinot
description: "LinkedIn-born real-time OLAP engine for user-facing analytics at high concurrency, commercialised by StarTree. It is technically respected (LinkedIn, Uber), but StarTree has announced no funding since its 2022 Series B, and Pinot remains a niche next to ClickHouse."
resource: https://pinot.apache.org
tags: [olap, real-time, user-facing-analytics, apache, startree]
kind: oss
first_release: 2015
org: "Apache Software Foundation; commercial steward StarTree"
license: Apache-2.0
outcome: stable
ideas: [ideas/analytics-lakehouse/real-time-olap]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tc-startree
    resource: https://techcrunch.com/2022/08/29/data-analytics-startup-startree-secures-cash-to-expand-its-pinot-powered-platform/
    title: "TechCrunch: StarTree secures cash to expand its Pinot-powered platform (2022-08-29)"
  - id: pinot-gh
    resource: https://github.com/apache/pinot
    title: "Apache Pinot GitHub (1.3 Feb 2025, 1.4 Sept 2025, 1.5 Apr 2026)"
---

# Summary

Pinot was built at LinkedIn for features like "Who viewed your profile", which need analytics served to millions of end users with millisecond latency. It uses pluggable indexes (star-tree, inverted, range, JSON, text) and real-time ingestion from Kafka. StarTree, founded by Pinot's creators, raised a $47M Series B in 2022[^tc-startree]. Releases continued at a slower pace (1.3 in Feb 2025, 1.4 in Sept 2025, 1.5 in Apr 2026)[^pinot-gh]. Pinot works well for high-QPS, user-facing workloads, but its community and commercial footprint stayed far smaller than ClickHouse's.

# Timeline

| Year | Event |
|---|---|
| 2018–2021 | Apache incubation and graduation |
| 2022 | StarTree $47M Series B[^tc-startree] |
| 2025–2026 | Pinot 1.3–1.5[^pinot-gh] |

# What worked

- High-concurrency user-facing analytics at LinkedIn, Uber and other large tech companies.

# What didn't

- It is complex to operate, and its market niche (user-facing analytics) is narrower than general real-time OLAP. It had little momentum after 2022.

# Related

- [Real-time OLAP](/ideas/analytics-lakehouse/real-time-olap.md) · [Apache Druid](/systems/apache-druid.md) · [ClickHouse](/systems/clickhouse.md)
