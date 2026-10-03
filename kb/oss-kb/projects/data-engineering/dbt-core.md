---
type: OSS Project
title: dbt Core
description: The analytics-engineering standard; survived a 2025 trust crisis over the ELv2-licensed Rust "Fusion" engine, then reversed course by open-sourcing the Fusion runtime as Apache-2.0 dbt Core v2 (alpha June 2026, GA Sept 2026) as dbt Labs merged into Fivetran.
resource: https://github.com/dbt-labs/dbt
tags: [transformation, sql, apache-2.0, company-led-open-core, license-controversy]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0 (dbt Core, 2016-)", "ELv2 for dbt Fusion engine source-available parts (2025-05-28 to 2026-06-01)", "Apache-2.0 for Rust runtime as dbt Core v2 (2026-06-01-)"]
governance: company-led-open-core
steward: dbt Labs (now part of Fivetran)
backing_orgs: [organizations/dbt-labs, organizations/fivetran]
metrics:
  github_stars: { value: 13961, as_of: 2026-10-03, note: "repo renamed dbt-labs/dbt (formerly dbt-core)" }
  contributors_fusion_preview: { value: 300, as_of: 2026-06-01, note: "approx., per dbt Labs" }
oss_verdict: contested
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: flat, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dbt-gh
    resource: https://github.com/dbt-labs/dbt
    title: dbt GitHub repository (v1.10.0 2025-06-16, v1.11.0 2025-12-19, v2.0.0 2026-09-14)
    last_modified: 2026-10-03T00:00:00Z
  - id: dbt-fusion-license
    resource: https://www.getdbt.com/blog/new-code-new-license-understanding-the-new-license-for-the-dbt-fusion-engine
    title: "dbt Labs (Tristan Handy): New code, new license – dbt Fusion engine (2025-05-28)"
  - id: tobiko-fusion
    resource: https://www.tobikodata.com/blog/dbt-fusion-death-of-dbt-core
    title: "Tobiko Data: Is dbt Fusion the death of dbt Core?"
  - id: dbt-core-v2
    resource: https://docs.getdbt.com/blog/dbt-core-v2-is-here
    title: "dbt Core v2 is here: still open source, now rebuilt (2026-06-01)"
  - id: dbt-merger-close
    resource: https://www.getdbt.com/blog/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents
    title: "Fivetran + dbt Labs complete merger (2026-06-01)"
  - id: dbt-sdf
    resource: https://www.getdbt.com/blog/dbt-labs-acquires-sdf-labs
    title: "dbt Labs acquires SDF Labs to advance analytics engineering (2025-01-14)"
  - id: geekwire-sdf
    resource: https://www.geekwire.com/2025/seattle-startup-sdf-labs-acquired-by-dbt-labs-in-data-warehousing-deal/
    title: "GeekWire: Seattle startup SDF Labs acquired by dbt Labs (terms undisclosed)"
  - id: fivetran-merger-close
    resource: https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents
    title: "Fivetran press: Fivetran + dbt Labs complete merger (2026-06-01; announced 2025-10-13, all-stock)"
  - id: techtarget-merger
    resource: https://www.techtarget.com/searchdatamanagement/news/366643590/Fivetran-DBT-Labs-complete-merger-to-form-data-layer-for-AI
    title: "TechTarget: Fivetran, dbt Labs complete merger"
  - id: fusion-gh
    resource: https://github.com/dbt-labs/dbt-fusion
    title: "dbt-fusion GitHub repository (now archived pointer to dbt-core)"
---

# Summary
dbt Core is the most important transformation tool in the modern data stack. On 2025-01-14 dbt Labs bought SDF Labs (Rust SQL compiler; terms undisclosed)[^dbt-sdf][^geekwire-sdf] and on 2025-05-28 launched dbt Fusion, a Rust rewrite released under a mix of ELv2 source-available, proprietary and Apache-2.0 code[^dbt-fusion-license]. Critics — notably competitor Tobiko Data — argued it signaled the slow death of Apache-2.0 dbt Core[^tobiko-fusion]. dbt Labs then agreed (Oct 13, 2025) to an all-stock merger with Fivetran (~$600M combined ARR), which closed 2026-06-01 with George Fraser as CEO and Tristan Handy as president[^dbt-merger-close][^fivetran-merger-close][^techtarget-merger]. The same day dbt Labs reversed the licensing direction: the Fusion runtime was relicensed Apache-2.0 as "dbt Core v2", with the Fusion binary becoming a free-plus-premium distribution[^dbt-core-v2]; v2.0.0 GA'd on 2026-09-14[^dbt-gh]. Verdict: OSS contested but recovering; business absorbed into Fivetran.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-14 | dbt Labs acquires SDF Labs[^dbt-sdf] | Business | + |
| W24 | 2025-05-28 | dbt Fusion engine launched; ELv2 for source-available components[^dbt-fusion-license] | OSS | − |
| W24 | 2025-06-16 | dbt Core 1.10.0[^dbt-gh] | OSS | + |
| W12 | 2025-10-13 | dbt Labs–Fivetran all-stock merger announced[^fivetran-merger-close][^techtarget-merger] | Business | ± |
| W12 | 2025-12-19 | dbt Core 1.11.0[^dbt-gh] | OSS | + |
| W6 | 2026-06-01 | Merger closes; Fusion runtime open-sourced as Apache-2.0 dbt Core v2 (alpha)[^dbt-merger-close][^dbt-core-v2] | OSS/Business | + |
| W3 | 2026-09-14 | dbt Core v2.0.0 GA[^dbt-gh] | OSS | + |

# OSS successes
- The licensing U-turn: all code needed for a Rust implementation of the dbt v2.0 framework is now Apache-2.0; ~300 community members contributed to Fusion during preview[^dbt-core-v2].
- v2 brings faster parsing, a tighter language spec, Parquet artifacts, ADBC/Arrow-based adapters[^dbt-core-v2].

# OSS failures / risks
- A year of ambiguity (May 2025–June 2026) damaged trust and pushed some users to evaluate SQLMesh[^tobiko-fusion].
- The Fusion binary still gates premium features behind login/payment; the dbt-fusion repo is archived[^fusion-gh][^dbt-core-v2].
- Now owned by an ingestion vendor (Fivetran) that also owns the main rival, SQLMesh.

# Business successes
- Combined Fivetran + dbt Labs approaches $600M ARR and serves 80,000–100,000 data teams[^techtarget-merger][^dbt-merger-close].

# Business failures / risks
- dbt Labs did not reach an independent IPO; merged instead. The deal closed on 2026-06-01 per both companies[^dbt-merger-close][^fivetran-merger-close]. (Pass 2: removed a Wikipedia-only note about regulatory questions — no primary source found.)

# By window
## W3
- dbt Core v2.0.0 GA (2026-09-14) and dbt Summit 2026 announcements[^dbt-gh].
## W6
- Merger closes; Apache-2.0 dbt Core v2 alpha (2026-06-01)[^dbt-core-v2].
## W9
- No notable events found.
## W12
- Fivetran merger announced; dbt Core 1.11[^techtarget-merger][^dbt-gh].
## W24
- SDF acquisition; Fusion launch under ELv2; community backlash[^dbt-fusion-license][^tobiko-fusion].

# Lessons
- Moving the "next-gen" engine to a source-available license while keeping the old one OSS reads as an abandonment signal; dbt Labs reversed within ~12 months.
- Consolidation (ingestion + transformation) is the business endgame for modern-data-stack point tools.

# Related
- [dbt Labs](/organizations/dbt-labs.md), [Fivetran](/organizations/fivetran.md), [SQLMesh](/projects/data-engineering/sqlmesh.md)
- [dbt Fusion ELv2 license](/events/2025-05-dbt-fusion-elv2-license.md), [dbt Labs–Fivetran merger](/events/2025-10-dbt-labs-fivetran-merger.md), [dbt Core v2 Apache relicense](/events/2026-06-dbt-core-v2-fusion-runtime-apache-2.md)

[^dbt-gh]: dbt GitHub releases.
[^dbt-fusion-license]: dbt Labs blog, 2025-05-28.
[^tobiko-fusion]: Tobiko Data blog.
[^dbt-core-v2]: dbt docs blog, 2026-06-01.
[^dbt-merger-close]: dbt Labs blog, 2026-06-01.
[^dbt-sdf]: dbt Labs blog, 2025-01-14.
[^geekwire-sdf]: GeekWire, Jan 2025.
[^fivetran-merger-close]: Fivetran press release, 2026-06-01.
[^techtarget-merger]: TechTarget.
[^fusion-gh]: dbt-fusion GitHub repository.
