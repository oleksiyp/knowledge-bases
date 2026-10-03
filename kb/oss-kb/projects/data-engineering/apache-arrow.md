---
type: OSS Project
title: Apache Arrow
description: The columnar in-memory standard underpinning nearly every modern data engine; steady quarterly majors (24.0 Apr 2026, 25.0 Jul 2026) and growing ADBC adoption (now used by dbt Core v2), even as its largest corporate funder Voltron Data halved staff in late 2024 and reportedly shut down in early 2026.
resource: https://github.com/apache/arrow
tags: [columnar, interoperability, apache-2.0, asf]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: []
metrics:
  github_stars: { value: 17169, as_of: 2026-10-03 }
  default_branch_commits_apr_sep_2026: { value: 667, as_of: 2026-10-01, note: "vs 614 in Apr–Sep 2025" }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: arrow-gh
    resource: https://github.com/apache/arrow
    title: Apache Arrow GitHub repository (24.0.0 2026-04-21, 25.0.0 2026-07-10, 25.0.1 2026-08-10)
    last_modified: 2026-10-03T00:00:00Z
  - id: dbt-core-v2
    resource: https://docs.getdbt.com/blog/dbt-core-v2-is-here
    title: "dbt Core v2 is here (adapters via ADBC and Arrow)"
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
Arrow is infrastructure everyone depends on and no one sells. Releases continue on schedule (24.0.0 on 2026-04-21, 25.0.0 on 2026-07-10)[^arrow-gh], and default-branch commit volume is flat-to-up year over year (667 in Apr–Sep 2026 vs 614 a year earlier)[^arrow-gh]. ADBC is gaining ecosystem pull — dbt Core v2 builds its adapters on ADBC/Arrow[^dbt-core-v2]. Voltron Data, once the biggest Arrow employer, switched CEOs and laid off about half its staff in Nov 2024[^info-voltron], took a strategic investment from Accenture in Feb 2025 to push its GPU SQL engine Theseus[^accenture-voltron], and was reported to be shutting down in January 2026 (third-party post; no official announcement found)[^x-voltron-shutdown]; its voltrondata.com domain did not resolve on 2026-10-03. There is no visible impact on Arrow's release cadence. Verdict: thriving.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11 | Voltron Data halves staff, changes CEO[^info-voltron] | Business | − |
| W9 | 2026-01-05 | Voltron Data reported shutting down (unofficial)[^x-voltron-shutdown] | Business | − |
| W6 | 2026-04-21 | Arrow 24.0.0[^arrow-gh] | OSS | + |
| W6 | 2026-06-01 | dbt Core v2 adopts ADBC/Arrow adapters[^dbt-core-v2] | OSS | + |
| W3 | 2026-07-10 | Arrow 25.0.0; 25.0.1 on 2026-08-10[^arrow-gh] | OSS | + |

# OSS successes
- Stable cadence and growing downstream (DataFusion, Polars, DuckDB interop, dbt ADBC)[^arrow-gh][^dbt-core-v2].

# OSS failures / risks
- Loss of a dedicated corporate funder (Voltron Data: 50% layoff Nov 2024, reported shutdown Jan 2026)[^info-voltron][^x-voltron-shutdown] could thin maintainer capacity in C++/R components.

# Business successes
- n/a.

# Business failures / risks
- Voltron Data's retrenchment and reported shutdown suggest "commercialize the Arrow ecosystem" (later GPU SQL via Theseus) was not a viable standalone business[^info-voltron][^accenture-voltron][^x-voltron-shutdown].

# By window
## W3
- 25.0.0 / 25.0.1[^arrow-gh].
## W6
- 24.0.0; dbt ADBC adoption[^arrow-gh][^dbt-core-v2].
## W9
- Voltron Data reported shutting down (third-party post)[^x-voltron-shutdown].
## W12
- No notable events found.
## W24
- Regular releases; Voltron Data layoffs (Nov 2024) and Accenture investment (Feb 2025)[^info-voltron][^accenture-voltron].

# Lessons
- Foundation-hosted standards survive the failure of companies built on top of them.

# Related
- [Apache DataFusion](/projects/data-engineering/apache-datafusion.md), [Polars](/projects/data-engineering/polars.md), [Ibis](/projects/data-engineering/ibis.md), [dbt Core](/projects/data-engineering/dbt-core.md)

[^arrow-gh]: Apache Arrow GitHub repository and commit history.
[^dbt-core-v2]: dbt docs blog, 2026-06-01.
[^info-voltron]: The Information, Nov 2024 (headline; paywalled).
[^accenture-voltron]: Accenture newsroom, 2025-02-20.
[^x-voltron-shutdown]: Post on X by Taylor Murphy, 2026-01-05 (third-party; no official announcement found).
