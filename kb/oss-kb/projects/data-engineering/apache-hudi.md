---
type: OSS Project
title: Apache Hudi
description: The third lakehouse table format; shipped 1.0 (Dec 2024) through 1.2 (2026) but lost mindshare to Iceberg, and its commercial steward Onehouse pivoted to engine acceleration (Quanton), Lakegres and AI tooling.
resource: https://github.com/apache/hudi
tags: [table-format, lakehouse, apache-2.0, asf]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: [organizations/onehouse]
metrics:
  github_stars: { value: 6280, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: struggling
momentum_by_window: { W3: flat, W6: flat, W9: down, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: hudi-gh
    resource: https://github.com/apache/hudi
    title: Apache Hudi GitHub repository (releases 1.0.0 → 1.2.1)
    last_modified: 2026-10-03T00:00:00Z
  - id: onehouse-blog
    resource: https://www.onehouse.ai/blog
    title: Onehouse blog
  - id: reg-onehouse
    resource: https://www.theregister.com/2024/06/26/onehouse_35_million_hudi/
    title: "The Register: OneHouse takes $35M to fight for Hudi in table format wars"
---

# Summary
Hudi delivered its 1.0 milestone on 2024-12-11, then 1.1 (2025-11-17) and 1.2 (2026-05-23), still maintaining 0.14/0.15 branches[^hudi-gh]. Technically alive, but the table-format market consolidated on Iceberg (and Delta inside Databricks). Onehouse — Hudi's commercial steward, last funded with a $35M Series B in June 2024 (total $68M)[^reg-onehouse] — has broadened away from Hudi: Open Engines (managed Trino/Ray, April 2025), Quanton Spark acceleration, the LakeBase→"Lakegres" SQL product (July 2026), and an AI Gateway (Sept 2026)[^onehouse-blog]. Verdict: OSS stable but niche; business strategy in flux.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-11 | Hudi 1.0.0[^hudi-gh] | OSS | + |
| W24 | 2025-04-17 | Onehouse launches Open Engines (Trino, Ray)[^onehouse-blog] | Business | ± |
| W12 | 2025-11-17 | Hudi 1.1.0[^hudi-gh] | OSS | + |
| W9 | 2026-03-24 | Onehouse Quanton K8s operator (self-managed Spark acceleration)[^onehouse-blog] | Business | ± |
| W6 | 2026-05-23 | Hudi 1.2.0[^hudi-gh] | OSS | + |
| W3 | 2026-07-02 | Onehouse renames LakeBase to Lakegres[^onehouse-blog] | Business | ± |
| W3 | 2026-09-24 | Hudi 1.2.1[^hudi-gh] | OSS | + |
| W3 | 2026-09-30 | Onehouse AI Gateway[^onehouse-blog] | Business | ± |

# OSS successes
- Delivered 1.x line with continued releases and backports[^hudi-gh].

# OSS failures / risks
- Mindshare loss to Iceberg; interoperability now pursued via XTable rather than direct adoption.

# Business successes
- Onehouse diversified product line and cloud reach (Azure, March 2026)[^onehouse-blog].

# Business failures / risks
- No new verified funding since June 2024[^reg-onehouse]; repeated repositioning suggests Hudi alone was not a sufficient commercial base.

# By window
## W3
- Hudi 1.2.1; Onehouse Lakegres and AI Gateway[^hudi-gh][^onehouse-blog].
## W6
- Hudi 1.2.0[^hudi-gh].
## W9
- Onehouse Quanton K8s operator, Azure support[^onehouse-blog].
## W12
- Hudi 1.1.0[^hudi-gh].
## W24
- Hudi 1.0; Open Engines[^hudi-gh][^onehouse-blog].

# Lessons
- In standards wars, the #3 format's steward tends to pivot to format-agnostic services.

# Related
- [Onehouse](/organizations/onehouse.md), [Apache XTable](/projects/data-engineering/apache-xtable.md), [Apache Iceberg](/projects/data-engineering/apache-iceberg.md)

[^hudi-gh]: Apache Hudi GitHub releases.
[^onehouse-blog]: Onehouse blog.
[^reg-onehouse]: The Register, 2024-06-26.
