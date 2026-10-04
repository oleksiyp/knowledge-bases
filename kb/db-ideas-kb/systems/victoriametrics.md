---
type: System
title: VictoriaMetrics
description: "A bootstrapped, Apache-licensed, Prometheus-compatible metrics database (later with logs and traces) from a Ukrainian-founded team. It reported 300%+ growth in 2024 and one billion downloads while self-funded."
resource: https://victoriametrics.com
tags: [time-series, prometheus, observability, metrics, bootstrapped, go]
kind: oss
first_release: 2018
org: "VictoriaMetrics Inc."
license: Apache-2.0
outcome: growing
ideas: [ideas/nosql-models/time-series-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: growth
    resource: https://victoriametrics.com/blog/300-percent-growth-in-2024-join-our-team-in-2025/
    title: "VictoriaMetrics: 300%+ growth in 2024"
    author: org:victoriametrics
  - id: onebn
    resource: https://victoriametrics.com/blog/announcing-1b-downloads-and-product-development-with-logs-traces-metrics/
    title: "VictoriaMetrics: Announcing 1B+ downloads"
    author: org:victoriametrics
  - id: stack
    resource: https://www.thestack.technology/one-to-watch-victoriametrics-the-story-of-a-startup-from-ukraine/
    title: "The Stack: VictoriaMetrics — the story of a startup from Ukraine"
---

# Summary

VictoriaMetrics shows what *did* work in time series. It did not invent a new model. It became a cheaper, simpler, Prometheus-compatible long-term store (PromQL/MetricsQL, remote write) with strong compression and low RAM use. It was founded by a Ukrainian team, open-sourced in 2018, and has stayed self-funded[^stack][^growth]. It reported 300%+ growth in open-source adoption and enterprise business in 2024 and 50% headcount growth[^growth]. It passed one billion downloads, counts customers including Roblox, Grammarly and Wix, and expanded into VictoriaLogs and traces[^onebn].

# Timeline

| Year | Event |
|---|---|
| 2018 | Open-sourced |
| 2023–24 | VictoriaLogs; 300%+ growth in 2024[^growth] |
| 2025 | 1B+ downloads[^onebn] |

# What worked

- Riding a standard (Prometheus) instead of fighting it, and competing on cost and operational simplicity.
- Self-funding gives the company a different capital structure from venture-funded engine startups; the cited post describes its growth, not an audited comparison of unit economics.[^growth]

# What didn't

- Download totals count artifacts, not unique installations, paying customers or market share. Vendor-reported growth should not be interpreted as a census of the metrics market.[^onebn]
- Expansion into logs and traces broadens the addressable workload, but also increases the product surface the team must maintain. That trade-off is an interpretation of the announced product expansion, not evidence that a metrics-only product cannot survive.[^onebn]

# Related

- [Time-series databases](/ideas/nosql-models/time-series-databases.md)
- [InfluxDB](/systems/influxdb.md), [QuestDB](/systems/questdb.md), [ClickHouse](/systems/clickhouse.md)
