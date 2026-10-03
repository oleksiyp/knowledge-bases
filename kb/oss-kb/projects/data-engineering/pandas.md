---
type: OSS Project
title: pandas
description: Python's default DataFrame library; shipped the long-delayed pandas 3.0 (Jan 2026) with Copy-on-Write and a new string dtype, and community activity jumped, but mindshare for new workloads keeps shifting to Polars/DuckDB.
resource: https://github.com/pandas-dev/pandas
tags: [dataframe, python, bsd-3-clause, numfocus, community]
domain: data-engineering
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: community
steward: NumFOCUS (fiscally sponsored)
backing_orgs: []
metrics:
  github_stars: { value: 49901, as_of: 2026-10-03 }
  default_branch_commits_apr_sep_2026: { value: 1577, as_of: 2026-10-01, note: "vs 434 in Apr–Sep 2025" }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pandas-gh
    resource: https://github.com/pandas-dev/pandas
    title: pandas GitHub repository (v3.0.0 2026-01-21 → v3.1.0rc0 2026-09-30)
    last_modified: 2026-10-03T00:00:00Z
  - id: pandas-blog
    resource: https://pandas.pydata.org/community/blog/
    title: pandas community blog (3.0 RC 2025-12-12; 3.0 release 2026-01-21)
---

# Summary
pandas 3.0.0 shipped on 2026-01-21 after a release candidate on 2025-12-12, finally making Copy-on-Write the default and introducing breaking changes (including the new default string dtype) that had been planned since 2024[^pandas-blog][^pandas-gh]. Patch releases followed roughly monthly (3.0.2–3.0.6) and 3.1.0rc0 landed on 2026-09-30[^pandas-gh]. Default-branch commits more than tripled (434 → 1,577, Apr–Sep YoY)[^pandas-gh]. Verdict: stable incumbent with renewed activity, though new projects increasingly start on Polars or DuckDB.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12-12 | pandas 3.0.0 RC[^pandas-blog] | OSS | + |
| W9 | 2026-01-21 | pandas 3.0.0 released[^pandas-blog][^pandas-gh] | OSS | + |
| W6 | 2026-05-11/06-28 | 3.0.3, 3.0.4[^pandas-gh] | OSS | + |
| W3 | 2026-09-30 | 3.1.0rc0[^pandas-gh] | OSS | + |

# OSS successes
- Delivered a multi-year-delayed major version; activity surge afterwards[^pandas-gh].

# OSS failures / risks
- Breaking changes create upgrade friction; performance gap vs Polars/DuckDB persists.

# Business successes
- n/a.

# Business failures / risks
- n/a.

# By window
## W3
- 3.0.5/3.0.6, 3.1.0rc0[^pandas-gh].
## W6
- 3.0.3/3.0.4[^pandas-gh].
## W9
- 3.0.0 GA[^pandas-blog].
## W12
- 3.0 RC[^pandas-blog].
## W24
- 2.x maintenance; 3.0 preparation.

# Lessons
- Community-governed incumbents move slowly but can still execute large breaking transitions.

# Related
- [Polars](/projects/data-engineering/polars.md), [Ibis](/projects/data-engineering/ibis.md), [Apache Arrow](/projects/data-engineering/apache-arrow.md)

[^pandas-gh]: pandas GitHub releases and commit history.
[^pandas-blog]: pandas community blog.
