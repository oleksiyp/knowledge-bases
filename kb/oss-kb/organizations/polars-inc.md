---
type: Organization
title: Polars Inc.
description: Company behind the MIT-licensed Polars DataFrame library; raised an €18M Series A (Sept 2025) and sells Polars Cloud / distributed Polars.
resource: https://pola.rs
tags: [commercial-open-source, dataframe, rust]
org_kind: coss-startup
hq: Amsterdam, Netherlands
funding: { total_usd: "~$25M (€18M / ~$21M Series A + ~$4M seed 2023)", last_round: "Series A €18M (Accel lead; Bain Capital)", last_round_date: 2025-09-29, valuation_usd: "undisclosed" }
business_verdict: growing
projects: [projects/data-engineering/polars]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: polars-posts
    resource: https://pola.rs/posts/
    title: Polars blog posts index
  - id: polars-gh
    resource: https://github.com/pola-rs/polars
    title: Polars GitHub repository
  - id: tc-polars
    resource: https://techcrunch.com/2025/09/29/the-startup-behind-open-source-tool-polars-raises-21m-from-accel/
    title: "TechCrunch: The startup behind open source tool Polars raises $21M from Accel (2025-09-29)"
    author: org:techcrunch
---

# Summary
Formed in August 2023 around the Polars project, the company launched Polars Cloud and distributed Polars on 2025-09-03 and announced an €18M (~$21M) Series A led by Accel, with Bain Capital (which led the ~$4M 2023 seed), on 2025-09-29[^polars-posts][^tc-polars]. 2026 brought on-prem Kubernetes distributed execution, Cloud 0.9/0.10, a GPU streaming backend and the Polars 2.0 preview[^polars-posts][^polars-gh]. Verdict: **growing**.

# Business timeline
| Date | Event |
|---|---|
| 2023-08-03 | Company formed[^polars-posts] |
| 2025-09-03 | Polars Cloud launch[^polars-posts] |
| 2025-09-29 | €18M Series A[^polars-posts] |
| 2026-06-03 | Kubernetes distributed (on-prem)[^polars-posts] |
| 2026-09-02 | Polars 2.0 preview[^polars-posts] |

# Monetization model
Polars Cloud (managed distributed execution) and on-prem distributed licensing; library stays MIT.

# Successes
- Clean separation of free library and paid compute — no license controversy.

# Failures / risks
- Unproven revenue at scale; competition from Spark/Databricks, DuckDB/MotherDuck, Daft.

# Related
- [Polars](/projects/data-engineering/polars.md)

[^polars-posts]: Polars blog.
[^polars-gh]: Polars GitHub.
[^tc-polars]: TechCrunch, 2025-09-29.
