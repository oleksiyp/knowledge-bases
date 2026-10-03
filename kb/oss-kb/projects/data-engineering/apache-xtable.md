---
type: OSS Project
title: Apache XTable (incubating)
description: Metadata translation layer between Hudi, Delta and Iceberg; still incubating with slow releases as the format war it was built to bridge ended in Iceberg's favor.
resource: https://github.com/apache/incubator-xtable
tags: [table-format, interoperability, apache-2.0, asf-incubator]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation (Incubator)
backing_orgs: [organizations/onehouse]
metrics:
  github_stars: { value: 1254, as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: xtable-gh
    resource: https://github.com/apache/incubator-xtable
    title: Apache XTable GitHub repository (0.2.0 2024-11-08, 0.3.0 2025-06-04, 0.4.0 2026-08-24)
    last_modified: 2026-10-03T00:00:00Z
  - id: delta-40
    resource: https://delta.io/blog/2025-09-25-delta-lake-40/
    title: Delta Lake 4.0 blog
---

# Summary
XTable (originally OneTable, from Onehouse with Microsoft and Google) translates table metadata among Hudi, Delta and Iceberg. It has shipped only three incubating releases — 0.2.0 (2024-11-08), 0.3.0 (2025-06-04) and 0.4.0 (2026-08-24) — and has ~1.25k stars[^xtable-gh]. With Iceberg as the de facto interchange format and Databricks pushing its own UniForm, the need for a neutral translator shrank. Verdict: declining relevance, not dead.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-08 | 0.2.0-incubating[^xtable-gh] | OSS | + |
| W24 | 2025-06-04 | 0.3.0-incubating[^xtable-gh] | OSS | + |
| W3 | 2026-08-24 | 0.4.0-incubating after 14-month gap[^xtable-gh] | OSS | ± |

# OSS successes
- Still releasing; active commits through Sept 2026[^xtable-gh].

# OSS failures / risks
- Long release gaps; no graduation after >2 years of incubation[^xtable-gh].

# Business successes
- n/a.

# Business failures / risks
- n/a (used by Onehouse).

# By window
## W3
- 0.4.0-incubating[^xtable-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- 0.2.0 and 0.3.0 releases[^xtable-gh].

# Lessons
- Bridge projects lose purpose once a standard wins.

# Related
- [Apache Hudi](/projects/data-engineering/apache-hudi.md), [Apache Iceberg](/projects/data-engineering/apache-iceberg.md), [Delta Lake](/projects/data-engineering/delta-lake.md)

[^xtable-gh]: Apache XTable GitHub releases.
[^delta-40]: Delta Lake 4.0 blog.
