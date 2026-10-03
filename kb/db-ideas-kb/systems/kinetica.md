---
type: System
title: Kinetica
description: "GPU-accelerated analytical database (originally GPUdb) focused on real-time, geospatial and time-series analytics; raised a $50M Series A in 2017 and by 2024 repositioned around natural-language-to-SQL ('SQL-GPT'). One of the few GPU databases still operating in 2026."
resource: https://www.kinetica.com
tags: [gpu, olap, geospatial, real-time, text-to-sql]
kind: product
first_release: 2016
org: "Kinetica DB Inc."
outcome: struggling
ideas: [ideas/hardware-engines/gpu-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: kinetica-a
    resource: https://www.kinetica.com/press-releases/kinetica-raises-50-million-series-a/
    title: "Kinetica Raises $50 Million in Series A Financing (2017)"
    author: org:kinetica
  - id: kinetica-sqlgpt
    resource: https://finance.yahoo.com/news/kinetica-launches-quick-start-sql-131000535.html
    title: "Kinetica Launches Quick Start for SQL-GPT (Jan 2024)"
  - id: kinetica-wiki
    resource: https://en.wikipedia.org/wiki/Kinetica_(software)
    title: "Kinetica (software) — Wikipedia"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Kinetica grew out of GPUdb, a GPU database developed for US government and defense analytics, and was renamed Kinetica around 2016[^kinetica-wiki]. It raised a $50M Series A in 2017[^kinetica-a]. Its niche is real-time analytics over streaming, geospatial and time-series data on GPUs. In 2023–24 it rebranded around LLM-based natural-language-to-SQL (SQL-GPT), launching a quick-start offering in January 2024[^kinetica-sqlgpt]. Pavlo's 2025 review lists it among the GPU database vendors still operating after HeavyDB's acquisition and Voltron Data's shutdown[^pavlo-2025].

# Timeline

| Year | Event |
|---|---|
| 2016 | GPUdb renamed Kinetica[^kinetica-wiki] |
| 2017 | $50M Series A[^kinetica-a] |
| 2023–24 | SQL-GPT positioning; quick start (Jan 2024)[^kinetica-sqlgpt] |
| 2025 | Survives as competitors exit[^pavlo-2025] |

# What worked

- Real-time geospatial and telemetry analytics for defense, telecom and logistics, where GPU throughput is valuable.
- Survival: it outlasted MapD/HEAVY.AI and Voltron Data.

# What didn't

- No large funding round publicly announced after 2017 (none found); it remained small relative to CPU-based competitors.
- The pivot to "AI database" marketing suggests GPU speed alone was not enough to sell.

# Related

- [GPU-accelerated databases](/ideas/hardware-engines/gpu-databases.md)
- [SQream](/systems/sqream.md), [HeavyDB](/systems/heavydb.md)
