---
type: Organization
title: dbt Labs
description: Steward of dbt; launched the Rust dbt Fusion engine under ELv2 (May 2025), merged into Fivetran (closed June 2026), and reversed course by relicensing the Fusion runtime Apache-2.0 as dbt Core v2.
resource: https://www.getdbt.com
tags: [commercial-open-source, transformation, license-controversy, merged]
org_kind: coss-startup
hq: "Philadelphia, Pennsylvania, USA (unverified)"
funding: { total_usd: "~$410M through Series D (trackers)", last_round: "Series D $222M (Altimeter lead), Feb 2022; then all-stock merger with Fivetran closed 2026-06-01", last_round_date: 2022-02-24, valuation_usd: "4.2B (2022); merger terms undisclosed" }
business_verdict: acquired
projects: [projects/data-engineering/dbt-core]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dbt-wiki
    resource: https://en.wikipedia.org/wiki/Data_build_tool
    title: "Wikipedia: Data build tool"
  - id: fusion-license
    resource: https://www.getdbt.com/blog/new-code-new-license-understanding-the-new-license-for-the-dbt-fusion-engine
    title: "dbt Labs: New code, new license (2025-05-28)"
  - id: dbt-core-v2
    resource: https://docs.getdbt.com/blog/dbt-core-v2-is-here
    title: "dbt Core v2 is here (2026-06-01)"
  - id: merger-close
    resource: https://www.getdbt.com/blog/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents
    title: "Fivetran + dbt Labs complete merger (2026-06-01)"
  - id: forbes-dbt-d
    resource: https://www.forbes.com/sites/kenrickcai/2022/02/24/dbt-labs-series-d-4-billion-less-than-planned/
    title: "Forbes: dbt Labs raises at $4.2 billion valuation (2022-02-24)"
    author: org:forbes
  - id: snow-osi
    resource: https://www.snowflake.com/en/blog/open-semantic-interchange-ai-standard/
    title: "Snowflake: Open Semantic Interchange (dbt Labs a founding member)"
---

# Summary
dbt Labs acquired SDF Labs in January 2025, launched dbt Fusion (Rust) on 2025-05-28 with ELv2-licensed source-available components[^dbt-wiki][^fusion-license], co-founded the Open Semantic Interchange (Sept 2025)[^snow-osi], and agreed to merge with Fivetran on 2025-10-13[^dbt-wiki]. When the merger closed on 2026-06-01, it relicensed the Fusion runtime as Apache-2.0 dbt Core v2, introduced dbt State and dbt Wizard, and an open "Agents Schema"[^merger-close][^dbt-core-v2]. Verdict: **acquired** (merged).

# Business timeline
| Date | Event |
|---|---|
| 2022-02-24 | $222M Series D at $4.2B (Altimeter)[^forbes-dbt-d] |
| 2025-01 | Acquires SDF Labs[^dbt-wiki] |
| 2025-05-28 | dbt Fusion launched; ELv2 license[^fusion-license] |
| 2025-09-23 | Founding member of OSI[^snow-osi] |
| 2025-10-13 | Merger agreement with Fivetran[^dbt-wiki] |
| 2026-06-01 | Merger closes; dbt Core v2 (Apache-2.0)[^merger-close][^dbt-core-v2] |

# Monetization model
dbt Cloud / dbt platform subscriptions; premium Fusion features gated behind login/payment[^dbt-core-v2].

# Successes
- Defined analytics engineering; dbt Core v2 restored OSS credibility[^dbt-core-v2].

# Failures / risks
- ELv2 Fusion episode damaged trust and fueled SQLMesh interest (May 2025–June 2026)[^fusion-license].
- No independent IPO.

# Related
- [Fivetran](/organizations/fivetran.md), [dbt Core](/projects/data-engineering/dbt-core.md), [dbt Fusion ELv2](/events/2025-05-dbt-fusion-elv2-license.md), [dbt Core v2 relicense](/events/2026-06-dbt-core-v2-fusion-runtime-apache-2.md)

[^dbt-wiki]: Wikipedia.
[^fusion-license]: dbt Labs blog, 2025-05-28.
[^dbt-core-v2]: dbt docs blog, 2026-06-01.
[^merger-close]: dbt Labs blog, 2026-06-01.
[^snow-osi]: Snowflake blog.
[^forbes-dbt-d]: Forbes, 2022-02-24.
