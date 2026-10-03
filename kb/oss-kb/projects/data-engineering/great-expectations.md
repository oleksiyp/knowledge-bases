---
type: OSS Project
title: Great Expectations (GX Core)
description: Leading Python data-quality library whose company was split up in May 2026 — FICO bought the GX Cloud SaaS (shut to new public use June 1) and Fivetran became steward of the open-source GX Core project and community.
resource: https://github.com/great-expectations/great_expectations
tags: [data-quality, apache-2.0, stewardship-transfer, acquired]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: company-led-open-core
steward: Fivetran (since May 2026)
backing_orgs: [organizations/fivetran]
metrics:
  github_stars: { value: 11856, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: acquired
momentum_by_window: { W3: up, W6: down, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T08:19:24Z }
sources:
  - id: gx-gh
    resource: https://github.com/great-expectations/great_expectations
    title: Great Expectations GitHub repository (releases 1.22.0 → 1.23.2, Aug–Sept 2026)
    last_modified: 2026-10-03T00:00:00Z
  - id: gx-blog
    resource: https://greatexpectations.io/blog/an-update-from-great-expectations/
    title: "Great Expectations blog: An Update for the Great Expectations Community (2026-05-06)"
  - id: fivetran-press
    resource: https://www.fivetran.com/press/fivetran-to-become-steward-of-the-great-expectations-open-source-community-and-gx-core-project
    title: "Fivetran: Fivetran to Become Steward of the Great Expectations Open Source Community and GX Core Project (2026-05-13)"
---

# Summary
Great Expectations (GX) popularized "expectations" for data testing. On 2026-05-06 the company announced a definitive agreement under which FICO acquired GX Cloud, its SaaS product, to become the foundation of data quality in the FICO Platform; GX Cloud stopped being publicly available on 2026-06-01[^gx-blog]. The open-source GX Core project and community passed to Fivetran as steward (announced 2026-05-13), with Fivetran committing to maintenance, integrations and community work and planning to hire engineers experienced with GX Core[^fivetran-press][^gx-blog]. Financial terms were not disclosed. Verdict: the standalone company was sold off in parts; the OSS continues under a commercial steward and kept a weekly-to-biweekly release pace.

Corrected in pass 2: business_verdict "failed (inferred, unverified)" → "acquired" — GX Cloud sold to FICO, GX Core stewardship to Fivetran (GX blog, 2026-05-06).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026-05-06 | GX announces FICO acquisition of GX Cloud; Fivetran to steward GX Core[^gx-blog] | Business | ± |
| W6 | 2026-05-13 | Fivetran formally announces stewardship of GX Core and community[^fivetran-press] | OSS/Business | ± |
| W6 | 2026-06-01 | GX Cloud no longer publicly available[^gx-blog] | Business | − |
| W3 | 2026-08-31 → 09-28 | GX Core 1.22.0 → 1.23.2[^gx-gh] | OSS | + |

# OSS successes
- Project has a funded steward rather than being abandoned[^fivetran-press]; releases continued at a ~weekly-to-biweekly pace in Aug–Sept 2026 (11.9k stars)[^gx-gh].

# OSS failures / risks
- Steward is a commercial vendor rather than a foundation; roadmap now tied to Fivetran's "Open Data Infrastructure" priorities[^fivetran-press].
- The hosted product users relied on (GX Cloud) disappeared from public availability[^gx-blog].

# Business successes
- Exit rather than shutdown: GX Cloud bought by a large public company (FICO)[^gx-blog].

# Business failures / risks
- The company could not sustain an independent open-core business; terms undisclosed, suggesting a modest outcome[^gx-blog].

# By window
## W3
- Releases continue under new stewardship: 1.22.0 (2026-08-31) through 1.23.2 (2026-09-28)[^gx-gh].
## W6
- FICO buys GX Cloud; Fivetran becomes GX Core steward; GX Cloud closed to public on June 1[^gx-blog][^fivetran-press].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- Open-core data tools can be "split" on exit: the SaaS goes to a strategic buyer, the OSS to an ecosystem player.
- Fivetran is becoming a consolidator of orphaned/acquired data-tooling OSS (dbt, SQLMesh, GX).

# Related
- [Fivetran](/organizations/fivetran.md), [dbt Core](/projects/data-engineering/dbt-core.md), [SQLMesh](/projects/data-engineering/sqlmesh.md)

[^gx-gh]: GX GitHub releases.
[^gx-blog]: Great Expectations blog, 2026-05-06.
[^fivetran-press]: Fivetran press release, 2026-05-13.
