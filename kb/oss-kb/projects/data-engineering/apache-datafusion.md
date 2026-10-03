---
type: OSS Project
title: Apache DataFusion
description: Rust query-engine toolkit that became the default "build-your-own-database" foundation; commit volume nearly doubled year over year, Comet (Spark accelerator) hit 1.0 and v55 shipped MERGE INTO in Aug 2026.
resource: https://github.com/apache/datafusion
tags: [query-engine, rust, apache-2.0, asf, breakout]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: []
metrics:
  github_stars: { value: 9395, as_of: 2026-10-03 }
  default_branch_commits_apr_sep_2026: { value: 2011, as_of: 2026-10-01, note: "vs 1139 in Apr–Sep 2025" }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: df-gh
    resource: https://github.com/apache/datafusion
    title: Apache DataFusion GitHub repository (tags 45.0.0 2025-02-03, 50.0.0 2025-09-16, 55.0.0 2026-08-14)
    last_modified: 2026-10-03T00:00:00Z
  - id: df-blog
    resource: https://datafusion.apache.org/blog/
    title: Apache DataFusion blog
  - id: rw-blog
    resource: https://risingwave.com/blog/
    title: "RisingWave blog: How RisingWave uses Apache DataFusion for faster Iceberg analytics"
---

# Summary
DataFusion released ten major versions in ~18 months (45.0.0 Feb 2025 → 55.0.0 Aug 2026), with 100+ contributors per release[^df-gh][^df-blog]. v55 added range partitioning, MERGE INTO and runtime row-group pruning; Comet, the DataFusion-based Spark accelerator, reached 1.0 in Aug 2026; DataFusion Java bindings debuted in May 2026[^df-blog]. Default-branch commits rose from 1,139 (Apr–Sep 2025) to 2,011 (Apr–Sep 2026)[^df-gh]. It is embedded by many vendors (e.g. RisingWave for Iceberg analytics)[^rw-blog]. Verdict: thriving; the Rust analytics foundation of choice.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-03 | DataFusion 45.0.0[^df-gh] | OSS | + |
| W24 | 2025-09-16 | DataFusion 50.0.0[^df-gh] | OSS | + |
| W6 | 2026-05 | DataFusion Java 0.1.0[^df-blog] | OSS | + |
| W3 | 2026-07-23 | RisingWave documents DataFusion-based Iceberg analytics[^rw-blog] | OSS | + |
| W3 | 2026-08 | DataFusion 55.0.0 (2026-08-14); Comet 1.0.0[^df-gh][^df-blog] | OSS | + |

# OSS successes
- Rapid cadence and commit growth[^df-gh]; ClickBench leadership claim for Parquet (Nov 2024)[^df-blog].
- Spark acceleration via Comet 1.0[^df-blog].

# OSS failures / risks
- Frequent breaking API changes across majors burden embedders (qualitative).

# Business successes
- Underpins commercial products (e.g. RisingWave) without a single controlling vendor[^rw-blog].

# Business failures / risks
- n/a.

# By window
## W3
- v55.0.0; Comet 1.0[^df-blog].
## W6
- DataFusion Java bindings[^df-blog].
## W9
- Majors 52–53 (dates not individually verified).
## W12
- Major 51 (date not individually verified).
## W24
- 45.0.0 through 50.0.0[^df-gh].

# Lessons
- "Composable data systems" — embeddable engines under a foundation — attract more contributors than single-vendor engines.

# Related
- [Apache Arrow](/projects/data-engineering/apache-arrow.md), [Apache Spark](/projects/data-engineering/apache-spark.md), [Polars](/projects/data-engineering/polars.md), [RisingWave](/projects/data-engineering/risingwave.md)

[^df-gh]: DataFusion GitHub tags and commit history.
[^df-blog]: DataFusion blog.
[^rw-blog]: RisingWave blog.
