---
type: OSS Project
title: Unity Catalog (OSS)
description: Databricks' open-sourced data & AI catalog under LF AI & Data; steady 0.x releases in 2026 but adoption outside Databricks remains limited compared with the commercial product.
resource: https://github.com/unitycatalog/unitycatalog
tags: [catalog, lakehouse, apache-2.0, lf-ai-data]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0 (2024-)"]
governance: foundation
steward: LF AI & Data Foundation; Databricks primary contributor
backing_orgs: [organizations/databricks]
metrics:
  github_stars: { value: 3550, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: uc-gh
    resource: https://github.com/unitycatalog/unitycatalog
    title: Unity Catalog GitHub repository (releases v0.4.0 → v0.6.0)
    last_modified: 2026-10-03T00:00:00Z
  - id: lfai-uc
    resource: https://lfaidata.foundation/blog/2024/06/20/welcoming-unity-catalog-to-the-lf-ai-data-foundation-a-milestone-in-open-data-and-ai-governance/
    title: "LF AI & Data: Welcoming Unity Catalog to the LF AI & Data Foundation (2024-06-20)"
  - id: dbx-uc-oss
    resource: https://www.databricks.com/blog/open-sourcing-unity-catalog
    title: "Databricks: Open sourcing Unity Catalog (June 2024)"
  - id: delta-40
    resource: https://delta.io/blog/2025-09-25-delta-lake-40/
    title: Delta Lake 4.0 (catalog-managed tables)
---

# Summary
Databricks open-sourced Unity Catalog in June 2024 and contributed it to the LF AI & Data Foundation as a sandbox project[^dbx-uc-oss][^lfai-uc]. In the window it remained pre-1.0: v0.4.0 (2026-02-14), v0.5.0 (2026-06-18), v0.6.0 (2026-08-20), plus an "ai" track[^uc-gh]. Delta 4.0's catalog-managed tables deepen the coupling to UC[^delta-40]. With ~3.5k stars it out-stars Polaris but is seen as Databricks-led; the commercial UC remains far richer than OSS. Verdict: stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06/09 | Delta 4.0 catalog-managed tables (UC integration)[^delta-40] | OSS | + |
| W9 | 2026-02-14 | UC v0.4.0[^uc-gh] | OSS | + |
| W6 | 2026-06-18 | UC v0.5.0[^uc-gh] | OSS | + |
| W3 | 2026-08-20 | UC v0.6.0[^uc-gh] | OSS | + |

# OSS successes
- Foundation-hosted (LF AI & Data sandbox), regular releases[^uc-gh][^lfai-uc].

# OSS failures / risks
- Still 0.x two years after launch; feature gap vs Databricks' managed UC; perceived as single-vendor.

# Business successes
- Strengthens Databricks' "open" positioning against Snowflake/Polaris.

# Business failures / risks
- n/a.

# By window
## W3
- v0.6.0[^uc-gh].
## W6
- v0.5.0[^uc-gh].
## W9
- v0.4.0[^uc-gh].
## W12
- No notable events found.
## W24
- Delta 4.0 catalog-managed integration[^delta-40].

# Lessons
- Open-sourcing a "lite" version of a commercial control plane earns goodwill but not ecosystem ownership.

# Related
- [Apache Polaris](/projects/data-engineering/apache-polaris.md), [Delta Lake](/projects/data-engineering/delta-lake.md), [Databricks](/organizations/databricks.md)

[^uc-gh]: Unity Catalog GitHub releases.
[^lfai-uc]: LF AI & Data blog, 2024-06-20.
[^dbx-uc-oss]: Databricks blog, June 2024.
[^delta-40]: Delta Lake 4.0 blog.
