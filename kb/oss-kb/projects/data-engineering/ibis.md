---
type: OSS Project
title: Ibis
description: Portable Python dataframe API over 20+ backends; activity collapsed (~82% fewer commits YoY, no release since Feb 2026) after its main corporate sponsor Voltron Data faded.
resource: https://github.com/ibis-project/ibis
tags: [dataframe, python, apache-2.0, declining]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: community
steward: Ibis project (historically funded by Voltron Data)
backing_orgs: []
metrics:
  github_stars: { value: 6671, as_of: 2026-10-03 }
  default_branch_commits_apr_sep_2026: { value: 65, as_of: 2026-10-01, note: "vs 354 in Apr–Sep 2025" }
oss_verdict: declining
business_verdict: n/a
momentum_by_window: { W3: down, W6: down, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ibis-gh
    resource: https://github.com/ibis-project/ibis
    title: Ibis GitHub repository (11.0.0 2025-10-15, 12.0.0 2026-02-07)
    last_modified: 2026-10-03T00:00:00Z
  - id: ibis-posts
    resource: https://ibis-project.org/posts/
    title: Ibis project blog (latest posts Feb 2025)
  - id: ibis-voda
    resource: https://ibis-project.org/posts/why-voda-supports-ibis/
    title: "Ibis blog: Why Voltron Data supports Ibis (core team employed by Voltron Data)"
  - id: info-voltron
    resource: https://www.theinformation.com/briefings/ai-startup-voltron-data-switches-ceos-lays-off-staff
    title: "The Information: AI Startup Voltron Data Switches CEOs, Lays Off 50% of Staff (Nov 2024)"
  - id: accenture-voltron
    resource: https://newsroom.accenture.com/news/2025/accenture-invests-in-voltron-data-to-help-organizations-use-gpu-technology-to-simplify-large-scale-data-processing
    title: "Accenture invests in Voltron Data (2025-02-20)"
  - id: x-voltron-shutdown
    resource: https://x.com/tayloramurphy/status/2008214050899911039
    title: "Taylor Murphy on X: 'Voltron Data is shutting down' (2026-01-05; third-party post)"
---

# Summary
Ibis offered one Python API compiled to DuckDB, Polars, Spark, BigQuery, Snowflake and more. Releases continued into early 2026 (11.0.0 on 2025-10-15, 12.0.0 on 2026-02-07) but none since, and default-branch commits fell from 354 (Apr–Sep 2025) to 65 (Apr–Sep 2026)[^ibis-gh]; the blog's latest posts date from Feb 2025[^ibis-posts]. The core team was historically employed by Voltron Data[^ibis-voda], which halved its staff in Nov 2024[^info-voltron] and was reported to be shutting down in January 2026 (third-party post; no official announcement found)[^x-voltron-shutdown]; voltrondata.com did not resolve on 2026-10-03. Low-level maintenance continues (commits through 2026-10-02, e.g. sqlglot compatibility fixes)[^ibis-gh]. Verdict: declining — a cautionary tale of single-sponsor dependency.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02 | Last blog posts (Athena backend, UDF rewriting)[^ibis-posts] | OSS | ± |
| W12 | 2025-10-15 | Ibis 11.0.0[^ibis-gh] | OSS | + |
| W24 | 2024-11 | Sponsor Voltron Data lays off ~50% of staff[^info-voltron] | Business | − |
| W9 | 2026-01-05 | Voltron Data reported shutting down (unofficial)[^x-voltron-shutdown] | Business | − |
| W9 | 2026-02-07 | Ibis 12.0.0 — last release as of 2026-10-03[^ibis-gh] | OSS | ± |
| W3 | 2026-04→09 | Commit volume down ~82% YoY[^ibis-gh] | OSS | − |

# OSS successes
- Still maintained at a low level; 12.0 shipped[^ibis-gh].

# OSS failures / risks
- Sharp maintainer drop; no release in ~8 months[^ibis-gh].

# Business successes
- n/a.

# Business failures / risks
- Sponsor dependence: core maintainers were Voltron Data employees[^ibis-voda]; the sponsor retrenched (2024) and reportedly shut down (2026)[^info-voltron][^x-voltron-shutdown].

# By window
## W3
- Continued low activity[^ibis-gh].
## W6
- No releases[^ibis-gh].
## W9
- 12.0.0[^ibis-gh]; sponsor reportedly shuts down[^x-voltron-shutdown].
## W12
- 11.0.0[^ibis-gh].
## W24
- 10.x releases; blog goes quiet[^ibis-posts].

# Lessons
- Projects staffed by one venture-funded sponsor are fragile when that sponsor retrenches.

# Related
- [Apache Arrow](/projects/data-engineering/apache-arrow.md), [Polars](/projects/data-engineering/polars.md), [pandas](/projects/data-engineering/pandas.md)

[^ibis-gh]: Ibis GitHub releases and commit history.
[^ibis-posts]: Ibis project blog.
[^ibis-voda]: Ibis blog, Why Voltron Data supports Ibis.
[^info-voltron]: The Information, Nov 2024 (headline; paywalled).
[^accenture-voltron]: Accenture newsroom, 2025-02-20.
[^x-voltron-shutdown]: Post on X by Taylor Murphy, 2026-01-05 (third-party; no official announcement found).
