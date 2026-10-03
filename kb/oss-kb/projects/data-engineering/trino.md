---
type: OSS Project
title: Trino
description: Leading federated SQL engine (Presto fork) with active Iceberg-centric development; commit volume doubled YoY while release cadence slowed, and Starburst kept pivoting to "data for AI agents".
resource: https://github.com/trinodb/trino
tags: [query-engine, federation, apache-2.0, community]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: community
steward: Trino Software Foundation
backing_orgs: []
metrics:
  github_stars: { value: 13296, as_of: 2026-10-03 }
  default_branch_commits_apr_sep_2026: { value: 2668, as_of: 2026-10-01, note: "vs 1323 in Apr–Sep 2025" }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: trino-gh
    resource: https://github.com/trinodb/trino
    title: Trino GitHub repository (releases 478 2025-10-29 → 483 2026-07-18)
    last_modified: 2026-10-03T00:00:00Z
  - id: trino-rename
    resource: https://trino.io/blog/2020/12/27/announcing-trino.html
    title: "Trino blog: We're rebranding PrestoSQL as Trino (2020-12-27)"
  - id: starburst-arr
    resource: https://www.businesswire.com/news/home/20260218724496/en/Starburst-Crosses-$100M-ARR-as-their-Enterprise-AI-Solution-Takes-Aim-at-BI
    title: "Business Wire: Starburst Crosses $100M ARR as their Enterprise AI Solution Takes Aim at BI (2026-02-18)"
  - id: starburst-arr-pr
    resource: https://www.starburst.io/press-releases/starburst-crosses-100m-arr-as-enterprises-move-from-bi-to-ai/
    title: "Starburst press release: Starburst crosses $100M ARR"
  - id: starburst-blog
    resource: https://www.starburst.io/blog/
    title: Starburst blog (Sept 2026 posts)
  - id: presto-gh
    resource: https://github.com/prestodb/presto
    title: PrestoDB GitHub repository
---

# Summary
Trino (the PrestoSQL fork by Presto's creators, renamed Trino on 2020-12-27)[^trino-rename] remains the main open federated query engine for Iceberg lakehouses. Releases went from roughly monthly to every 1–2 months (478 on 2025-10-29 → 483 on 2026-07-18; none Aug–Sep 2026)[^trino-gh], while default-branch commits doubled (1,323 → 2,668, Apr–Sep YoY)[^trino-gh]. Starburst, its primary commercial backer, focused on Iceberg materialized views, AI-agent data infrastructure and a server-side scan-planning partnership with Databricks (Sept 2026)[^starburst-blog]; on 2026-02-18 Starburst said it had passed $100M ARR with ~40% YoY growth and a $20M AI run-rate[^starburst-arr][^starburst-arr-pr]; no new funding round was announced in the window. PrestoDB (Linux Foundation, 16.8k stars) continues in parallel[^presto-gh]. Verdict: stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-29 | Trino 478[^trino-gh] | OSS | + |
| W12 | 2025-12-15 | Trino 479[^trino-gh] | OSS | + |
| W9 | 2026-02-18 | Starburst passes $100M ARR (~40% YoY)[^starburst-arr] | Business | + |
| W9 | 2026-03-24 | Trino 480[^trino-gh] | OSS | + |
| W6 | 2026-05-12 / 06-25 | Trino 481, 482[^trino-gh] | OSS | + |
| W3 | 2026-07-18 | Trino 483 (latest as of 2026-10-03)[^trino-gh] | OSS | ± |
| W3 | 2026-09-18 | Starburst + Databricks server-side scan planning[^starburst-blog] | Business | + |

# OSS successes
- Commit volume doubled YoY[^trino-gh].

# OSS failures / risks
- Slower release cadence; competition from DuckDB, StarRocks/Doris and warehouse-native Iceberg engines.

# Business successes
- Starburst interoperability with Databricks catalogs[^starburst-blog]; Starburst crossed $100M ARR with eight-figure bank deals[^starburst-arr][^starburst-arr-pr].

# Business failures / risks
- No new Starburst funding round was announced in 2025–2026; its "AI" revenue is still a small slice ($20M run-rate of $100M+ ARR)[^starburst-arr].

# By window
## W3
- 483; Starburst–Databricks scan planning[^trino-gh][^starburst-blog].
## W6
- 481, 482[^trino-gh].
## W9
- 480; Starburst $100M ARR[^trino-gh][^starburst-arr].
## W12
- 478, 479[^trino-gh].
## W24
- Releases ~monthly (details not tracked).

# Lessons
- Federated engines are increasingly "Iceberg engines"; catalog interoperability is the key integration.

# Related
- [Apache Iceberg](/projects/data-engineering/apache-iceberg.md), [Apache Polaris](/projects/data-engineering/apache-polaris.md), [Unity Catalog](/projects/data-engineering/unity-catalog.md)

[^trino-gh]: Trino GitHub releases and commit history.
[^trino-rename]: Trino blog, 2020-12-27.
[^starburst-arr]: Business Wire, 2026-02-18.
[^starburst-arr-pr]: Starburst press release.
[^starburst-blog]: Starburst blog.
[^presto-gh]: PrestoDB GitHub repository.
