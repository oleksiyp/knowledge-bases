---
type: System
title: SQream
description: "Israeli GPU-accelerated SQL analytics database for very large datasets, sold mostly for on-prem and hybrid deployments; raised a $45M Series C in 2023 (about $111M total). Still operating in 2026 but niche."
resource: https://sqream.com
tags: [gpu, olap, data-warehouse, on-prem]
kind: product
first_release: 2014
org: "SQream Technologies"
outcome: struggling
ideas: [ideas/hardware-engines/gpu-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: sqream-c
    resource: https://techcrunch.com/2023/09/12/sqream-series-c/
    title: "TechCrunch: SQream calls in $45M to expand its GPU-based big data analytics platform (Sept 2023)"
  - id: blocks-sqream
    resource: https://blocksandfiles.com/2023/09/12/sqream-screeches-to-111m-funding-mark-in-big-gpu-data-processing-play/
    title: "Blocks & Files: SQream screeches to $111M funding mark"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary

SQream builds a columnar SQL database that offloads scans, joins and aggregation to Nvidia GPUs, aimed at petabyte-scale analytics where data preparation and ingestion are expensive. In September 2023 it raised a $45M Series C led by World Trade Ventures, bringing total funding to about $111M, and said it would expand in North America and into AI/ML workloads[^sqream-c][^blocks-sqream]. It was still operating at the end of 2025[^pavlo-2025]. (First release year is approximate.)

# Timeline

| Year | Event |
|---|---|
| 2010 | Company founded (approximate) |
| 2023 | $45M Series C[^sqream-c] |
| 2025 | Among remaining GPU database vendors[^pavlo-2025] |

# What worked

- Raised money in 2023 when many data startups could not, by selling cost reduction for large on-prem analytics.

# What didn't

- Little visible adoption among cloud-native data teams, which standardized on Snowflake, BigQuery, Databricks and ClickHouse.
- Vendor benchmarks (e.g. 90% reductions in ingest and preparation time) are not independently verified.

# Related

- [GPU-accelerated databases](/ideas/hardware-engines/gpu-databases.md)
- [Kinetica](/systems/kinetica.md)
