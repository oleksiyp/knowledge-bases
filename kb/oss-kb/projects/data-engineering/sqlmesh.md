---
type: OSS Project
title: SQLMesh
description: dbt challenger from Tobiko Data; Tobiko was acquired by Fivetran (Sept 2025) and SQLMesh was donated to the Linux Foundation (March 2026) — neutral governance, but owned-by-the-same-parent-as-dbt raises long-term questions.
resource: https://github.com/SQLMesh/sqlmesh
tags: [transformation, sql, apache-2.0, linux-foundation]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Linux Foundation (contributed by Fivetran)
backing_orgs: [organizations/fivetran]
metrics:
  github_stars: { value: 3305, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: acquired
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sqlmesh-gh
    resource: https://github.com/SQLMesh/sqlmesh
    title: SQLMesh GitHub repository (v0.235–v0.236 releases)
    last_modified: 2026-10-03T00:00:00Z
  - id: fivetran-tobiko
    resource: https://www.fivetran.com/blog/fivetran-acquires-tobiko-data-to-power-enterprise-grade-transformations
    title: "Fivetran acquires Tobiko Data (2025-09-03)"
  - id: lf-sqlmesh
    resource: https://www.linuxfoundation.org/press/linux-foundation-welcomes-sqlmesh-project
    title: "Linux Foundation welcomes SQLMesh project"
  - id: fivetran-lf
    resource: https://www.fivetran.com/press/fivetran-contributes-sqlmesh-to-the-linux-foundation-to-advance-open-data-infrastructure
    title: "Fivetran contributes SQLMesh to the Linux Foundation (2026-03-25)"
  - id: tobiko-fusion
    resource: https://www.tobikodata.com/blog/dbt-fusion-death-of-dbt-core
    title: "Tobiko Data: Is dbt Fusion the death of dbt Core?"
---

# Summary
SQLMesh (with its sister library SQLGlot) offered virtual environments, column-level lineage and incremental-by-default semantics as a dbt alternative, and Tobiko Data used the dbt Fusion license debate as a marketing wedge[^tobiko-fusion]. Fivetran acquired Tobiko on 2025-09-03[^fivetran-tobiko], then — after agreeing to merge with dbt Labs — contributed SQLMesh to the Linux Foundation on 2026-03-25 with founding members Benzinga, CloudKitchens, Harness, Infinite Lambda, Jump AI and Minerva[^fivetran-lf][^lf-sqlmesh]. The repo moved to the SQLMesh GitHub org and still ships 0.x releases (v0.236.2, Sept 2026)[^sqlmesh-gh]. Verdict: alive under neutral governance, but strategic momentum likely capped now that its corporate owner also owns dbt.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-03 | Fivetran acquires Tobiko Data (SQLMesh, SQLGlot)[^fivetran-tobiko] | Business | ± |
| W9 | 2026-03-25 | SQLMesh contributed to Linux Foundation[^fivetran-lf][^lf-sqlmesh] | OSS | + |
| W6 | 2026-05-21/06-11 | v0.235.x releases[^sqlmesh-gh] | OSS | + |
| W3 | 2026-07-06 → 09-08 | v0.236.0–0.236.2[^sqlmesh-gh] | OSS | ± |

# OSS successes
- Neutral LF home with six end-user founding members[^lf-sqlmesh].

# OSS failures / risks
- Release cadence slowed in 2026 (monthly-ish patch releases)[^sqlmesh-gh]; still pre-1.0.
- Founding members are end users rather than vendors — limited funded engineering beyond Fivetran.

# Business successes
- Tobiko founders achieved an exit within ~3 years[^fivetran-tobiko].

# Business failures / risks
- Independent dbt-challenger business model ended with the acquisition.

# By window
## W3
- 0.236.x releases[^sqlmesh-gh].
## W6
- 0.235.x releases[^sqlmesh-gh].
## W9
- Linux Foundation donation[^lf-sqlmesh].
## W12
- No notable events found.
## W24
- Fivetran acquisition[^fivetran-tobiko].

# Lessons
- Acquirers increasingly park OSS from tuck-in deals at foundations to preserve community trust.

# Related
- [dbt Core](/projects/data-engineering/dbt-core.md), [Fivetran](/organizations/fivetran.md), [Tobiko acquisition](/events/2025-09-fivetran-acquires-tobiko-data.md), [SQLMesh to LF](/events/2026-03-sqlmesh-linux-foundation.md)

[^sqlmesh-gh]: SQLMesh GitHub releases.
[^fivetran-tobiko]: Fivetran blog, 2025-09-03.
[^lf-sqlmesh]: Linux Foundation press release.
[^fivetran-lf]: Fivetran press release, 2026-03-25.
[^tobiko-fusion]: Tobiko Data blog.
