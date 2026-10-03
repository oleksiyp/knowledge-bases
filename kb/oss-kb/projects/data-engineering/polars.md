---
type: OSS Project
title: Polars
description: Rust DataFrame library that became pandas' main challenger (~40k stars); its company raised an €18M Series A (Sept 2025), launched Polars Cloud/distributed Polars, and is preparing Polars 2.0 with streaming-by-default.
resource: https://github.com/pola-rs/polars
tags: [dataframe, rust, python, mit, company-led-open-core]
domain: data-engineering
license: MIT
license_history: ["MIT"]
governance: company-led-open-core
steward: Polars Inc.
backing_orgs: [organizations/polars-inc]
metrics:
  github_stars: { value: 39914, as_of: 2026-10-03 }
  default_branch_commits_apr_sep_2026: { value: 1237, as_of: 2026-10-01, note: "vs 1117 in Apr–Sep 2025" }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: polars-gh
    resource: https://github.com/pola-rs/polars
    title: Polars GitHub repository (py-1.44.x, py-2.0.0-rc.1/rc.2)
    last_modified: 2026-10-03T00:00:00Z
  - id: polars-posts
    resource: https://pola.rs/posts/
    title: Polars blog (Series A 2025-09-29; Cloud launch 2025-09-03; 2.0 preview 2026-09-02)
---

# Summary
Polars is the fastest-growing DataFrame library and the clearest Python-ecosystem breakout of the period (~39.9k stars)[^polars-gh]. The company launched Polars Cloud and distributed Polars on 2025-09-03 and raised an €18M Series A (announced 2025-09-29)[^polars-posts]. In 2026 it added on-prem Kubernetes distributed execution (June), Cloud 0.9/0.10 (July/Aug), a new GPU streaming backend with NVIDIA RapidsMPF (Aug), and previewed Polars 2.0 with the streaming engine for all lazy queries (Sept; rc.2 on 2026-09-20)[^polars-posts][^polars-gh]. Verdict: thriving OSS; early but growing business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-03 | Polars Cloud and distributed Polars launch[^polars-posts] | Business | + |
| W24 | 2025-09-29 | €18M Series A[^polars-posts] | Business | + |
| W6 | 2026-06-03 | Distributed Polars on Kubernetes (on-prem)[^polars-posts] | Business | + |
| W3 | 2026-08-26 | Polars 1.44 (Iceberg schema evolution, correlated subqueries)[^polars-posts] | OSS | + |
| W3 | 2026-08-28 | New GPU streaming backend[^polars-posts] | OSS | + |
| W3 | 2026-09-02 | Polars 2.0 pre-release[^polars-posts][^polars-gh] | OSS | + |

# OSS successes
- Commit volume up ~11% YoY; strong release cadence[^polars-gh].
- Moving toward streaming-by-default and GPU execution[^polars-posts].

# OSS failures / risks
- 2.0 introduces breaking changes; company-led governance.

# Business successes
- Series A and a cloud product with steady releases[^polars-posts].

# Business failures / risks
- Monetizing a single-node library via a distributed cloud is unproven; competitors include Daft, Spark, DuckDB/MotherDuck.

# By window
## W3
- 1.44, GPU streaming, 2.0 RCs[^polars-posts].
## W6
- K8s distributed, Cloud 0.9[^polars-posts].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Polars Cloud; Series A[^polars-posts].

# Lessons
- A permissively licensed library with a clearly separated paid cloud avoided license controversy entirely.

# Related
- [Polars Inc.](/organizations/polars-inc.md), [pandas](/projects/data-engineering/pandas.md), [Daft](/projects/data-engineering/daft.md), [Apache Arrow](/projects/data-engineering/apache-arrow.md)

[^polars-gh]: Polars GitHub repository and commit history.
[^polars-posts]: Polars blog posts index.
