---
type: OSS Project
title: Apache Spark
description: Still the workhorse of big-data processing; Spark 4.0 (May 2025), 4.1 (Dec 2025) and 4.2 (mid-2026) modernized SQL, Spark Connect and VARIANT, while Databricks' $190B valuation shows the commercial engine around it is booming.
resource: https://github.com/apache/spark
tags: [batch-processing, sql-engine, apache-2.0, asf]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: [organizations/databricks]
metrics:
  github_stars: { value: 44112, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: spark-gh
    resource: https://github.com/apache/spark
    title: Apache Spark GitHub repository (tags v4.0.0, v4.1.x, v4.2.0)
    last_modified: 2026-10-03T00:00:00Z
  - id: spark-eol
    resource: https://endoflife.date/apache-spark
    title: "endoflife.date: Apache Spark"
  - id: spark-41
    resource: https://datadriven.io/blog/apache-spark-40-and-41-breaking-changes-for-data-engineers
    title: "Apache Spark 4.0 and 4.1: Breaking Changes for Data Engineers"
  - id: dbx-cnbc
    resource: https://www.cnbc.com/2026/08/13/databricks-funding-round-190-billion-valuation.html
    title: "CNBC: Databricks wraps $5 billion funding round at $190 billion valuation"
  - id: onehouse-blog
    resource: https://www.onehouse.ai/blog
    title: Onehouse blog (Quanton Spark acceleration)
  - id: asf-grad
    resource: https://news.apache.org/foundation/entry/the-apache-software-foundation-graduates-two-open-source-projects-from-incubator
    title: "ASF: graduates Gluten and Polaris from the Incubator"
---

# Summary
Spark 4.0 shipped in May 2025 (tag 2025-05-19) with ANSI mode default, VARIANT type, SQL scripting, SQL UDFs and production-ready Spark Connect (thin Python client, Go/Rust/Swift clients)[^spark-gh][^spark-41]. Spark 4.1 followed on 2025-12-11 (VARIANT shredding GA, SQL scripting GA)[^spark-eol][^spark-41] and v4.2.0 was tagged 2026-07-11[^spark-gh]. Native-acceleration efforts (Apache Gluten — graduated TLP Feb 2026 alongside Polaris; DataFusion Comet; Onehouse Quanton) target Spark's JVM execution costs[^asf-grad][^onehouse-blog]. Commercially, Databricks — Spark's creator — crossed a $7B revenue run-rate and a $190B valuation[^dbx-cnbc].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05 | Spark 4.0.0 released[^spark-gh][^spark-41] | OSS | + |
| W12 | 2025-12-11 | Spark 4.1.0[^spark-eol] | OSS | + |
| W3 | 2026-07-11 | Spark 4.2.0 tagged[^spark-gh] | OSS | + |
| W3 | 2026-08-13 | Databricks $5B at $190B valuation[^dbx-cnbc] | Business | + |

# OSS successes
- Major-version modernization (Spark Connect decoupling, ANSI SQL, VARIANT) without community fracture[^spark-41].

# OSS failures / risks
- Breaking changes (ANSI default) raised upgrade cost[^spark-41].
- Single-node engines (DuckDB, Polars) and Rust/C++ engines erode Spark's share for small/medium workloads.

# Business successes
- Databricks' growth (>$7B run-rate) is the strongest COSS business story in the domain[^dbx-cnbc].

# Business failures / risks
- Heavy dependence on one company's committers (Databricks).

# By window
## W3
- 4.2.0 tagged; Databricks $190B round[^spark-gh][^dbx-cnbc].
## W6
- 4.1.x maintenance (4.1.2/4.1.3)[^spark-gh].
## W9
- No notable events found.
## W12
- Spark 4.1.0[^spark-eol].
## W24
- Spark 4.0.0[^spark-41].

# Lessons
- A mature Apache project can remain the anchor of a hyper-growth vendor while competing engines nibble at the edges.

# Related
- [Databricks](/organizations/databricks.md), [Delta Lake](/projects/data-engineering/delta-lake.md), [Apache DataFusion](/projects/data-engineering/apache-datafusion.md), [Polars](/projects/data-engineering/polars.md), [Databricks $190B round](/events/2026-08-databricks-190b-valuation.md)

[^spark-gh]: Apache Spark GitHub tags.
[^spark-eol]: endoflife.date, Apache Spark.
[^spark-41]: datadriven.io, Spark 4.0 and 4.1.
[^dbx-cnbc]: CNBC, 2026-08-13.
[^onehouse-blog]: Onehouse blog.
[^asf-grad]: ASF news on Gluten/Polaris graduation.
