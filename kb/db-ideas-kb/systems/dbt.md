---
type: System
title: dbt (data build tool)
description: "SQL-based transformation framework that defined 'analytics engineering' and became the de facto standard for in-warehouse ELT. Its maker dbt Labs ($4.2B valuation, 2022) acquired Transform for its semantic layer, hit a licensing backlash over dbt Fusion (2025) and merged with Fivetran (closed June 2026)."
resource: https://www.getdbt.com
tags: [elt, transformation, semantic-layer, analytics-engineering]
kind: oss
first_release: 2016
org: "dbt Labs (merged with Fivetran, 2026)"
license: Apache-2.0
outcome: acquired
ideas: [ideas/analytics-lakehouse/semantic-layers, ideas/analytics-lakehouse/cloud-data-warehouses]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: forbes-dbt-d
    resource: https://www.forbes.com/sites/kenrickcai/2022/02/24/dbt-labs-series-d-4-billion-less-than-planned/
    title: "Forbes: dbt Labs $222M Series D at $4.2B (2022-02-24)"
  - id: dbt-transform
    resource: https://www.getdbt.com/blog/press-release-dbt-acquisition-transform
    title: "dbt Labs acquires Transform (2023-02-08)"
  - id: fusion-license
    resource: https://www.getdbt.com/blog/new-code-new-license-understanding-the-new-license-for-the-dbt-fusion-engine
    title: "dbt Labs: New code, new license — the dbt Fusion engine (2025-05-28)"
  - id: dbt-metricflow
    resource: https://www.getdbt.com/blog/dbt-labs-affirms-commitment-to-open-semantic-interchange-by-open-sourcing-metricflow
    title: "dbt Labs: open-sourcing MetricFlow (2025-10-14)"
  - id: dbt-merger
    resource: https://www.getdbt.com/blog/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents
    title: "Fivetran and dbt Labs complete merger (2026-06-01)"
  - id: dbt-core-v2
    resource: https://docs.getdbt.com/blog/dbt-core-v2-is-here
    title: "dbt Core v2 is here (2026-06-01)"
---

# Summary

dbt let analysts write modular SELECT statements with Jinja templating, tests and documentation, compiled and run inside the warehouse. It rode the cloud-warehouse wave to become the standard transformation layer. dbt Labs raised $222M at $4.2B in February 2022[^forbes-dbt-d]. It bought Transform in February 2023 to make MetricFlow the dbt Semantic Layer engine[^dbt-transform]. In May 2025 it launched dbt Fusion, a Rust rewrite with source-available (ELv2) components, which drew community backlash[^fusion-license]. It relicensed MetricFlow to Apache-2.0 for the Open Semantic Interchange in October 2025[^dbt-metricflow]. It merged with Fivetran (closed 2026-06-01) and released the Fusion runtime as Apache-2.0 "dbt Core v2", built on Arrow/ADBC adapters[^dbt-merger][^dbt-core-v2].

# Timeline

| Year | Event |
|---|---|
| 2022 | $222M Series D at $4.2B[^forbes-dbt-d] |
| 2023 | Acquires Transform[^dbt-transform] |
| 2025 | dbt Fusion under ELv2[^fusion-license]; MetricFlow Apache-2.0[^dbt-metricflow] |
| 2026 | Fivetran merger closes; dbt Core v2 Apache-2.0[^dbt-merger][^dbt-core-v2] |

# What worked

- It created a profession (analytics engineering) and a huge open-source community. It became the place where semantic definitions live.

# What didn't

- It struggled to monetise the open core, and the Fusion licence episode cost trust and boosted SQLMesh until the 2026 reversal. It ended as a merger rather than an independent IPO.

# Related

- [Semantic layers](/ideas/analytics-lakehouse/semantic-layers.md) · [Cloud data warehouses](/ideas/analytics-lakehouse/cloud-data-warehouses.md) · [Snowflake](/systems/snowflake.md)
