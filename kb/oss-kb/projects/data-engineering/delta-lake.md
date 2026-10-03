---
type: OSS Project
title: Delta Lake
description: Databricks-led table format under the Linux Foundation; still actively developed (4.0 in 2025, 4.4 in Aug 2026) but lost the interoperability war to Iceberg and now emphasizes catalog-managed tables and UniForm.
resource: https://github.com/delta-io/delta
tags: [table-format, lakehouse, apache-2.0, linux-foundation]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0 (2019-)"]
governance: foundation
steward: Linux Foundation (Delta Lake project); Databricks primary contributor
backing_orgs: [organizations/databricks]
metrics:
  github_stars: { value: 9036, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: delta-gh
    resource: https://github.com/delta-io/delta
    title: Delta Lake GitHub repository (releases v4.0.0 → v4.4.0)
    last_modified: 2026-10-03T00:00:00Z
  - id: delta-40
    resource: https://delta.io/blog/2025-09-25-delta-lake-40/
    title: "Delta Lake 4.0 (delta.io blog)"
  - id: delta-41
    resource: https://delta.io/blog/2026-03-01-delta-lake-4-1-0-released/
    title: "Delta Lake 4.1.0 Released"
  - id: dbx-tabular
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-tabular-company-founded-original-creators
    title: "Databricks agrees to acquire Tabular (2024-06-04)"
---

# Summary
Delta Lake remains the default format inside Databricks and keeps shipping — 4.0 (GitHub release 2025-06-09; >70 contributors) introduced catalog-managed tables, followed by 4.1 (2026-02-26), 4.2 (2026-04-16), 4.3 (2026-06-18) and 4.4 (2026-08-20)[^delta-gh][^delta-40][^delta-41]. But Databricks' own purchase of Tabular (2024) and its UniForm strategy signal that Iceberg won the cross-vendor standard[^dbx-tabular]. Verdict: healthy but Databricks-centric; strategically demoted from "the" open format to one of two formats Databricks serves.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-09 | Delta 4.0.0 release (catalog-managed tables preview)[^delta-gh][^delta-40] | OSS | + |
| W9 | 2026-02-26 | Delta 4.1.0[^delta-gh][^delta-41] | OSS | + |
| W6 | 2026-04-16 | Delta 4.2.0[^delta-gh] | OSS | + |
| W6 | 2026-06-18 | Delta 4.3.0[^delta-gh] | OSS | + |
| W3 | 2026-08-20 | Delta 4.4.0[^delta-gh] | OSS | + |

# OSS successes
- Regular ~2-month minor cadence in 2026[^delta-gh]; broad community release (70+ contributors to 4.0)[^delta-40].

# OSS failures / risks
- Contributor and roadmap dominated by Databricks; third-party engines prioritize Iceberg.
- Star count (9.0k) now trails Iceberg (9.3k)[^delta-gh].

# Business successes
- Underpins Databricks' $7B+ revenue run-rate business (see Databricks org).

# Business failures / risks
- Lost the "open standard" narrative after Tabular deal[^dbx-tabular].

# By window
## W3
- Delta 4.4.0[^delta-gh].
## W6
- Delta 4.2.0 and 4.3.0[^delta-gh].
## W9
- Delta 4.1.0[^delta-41].
## W12
- No notable events found.
## W24
- Delta 4.0[^delta-40].

# Lessons
- A vendor-dominated format can thrive inside its vendor's platform yet lose the ecosystem standard.

# Related
- [Apache Iceberg](/projects/data-engineering/apache-iceberg.md), [Unity Catalog](/projects/data-engineering/unity-catalog.md), [Databricks](/organizations/databricks.md), [Apache XTable](/projects/data-engineering/apache-xtable.md)

[^delta-gh]: Delta Lake GitHub releases.
[^delta-40]: delta.io blog, Delta Lake 4.0.
[^delta-41]: delta.io blog, Delta Lake 4.1.0.
[^dbx-tabular]: Databricks press release, 2024-06-04.
