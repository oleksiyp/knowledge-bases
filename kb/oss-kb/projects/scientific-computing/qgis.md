---
type: OSS Project
title: QGIS
description: The leading open-source desktop GIS; completed its decade-defining Qt6 migration with QGIS 4.0 (March 2026) and 4.2 (July 2026), hardened its 3,000+-plugin repository with security scanning, but runs on €320k/yr of sustaining memberships against a €634k 2026 budget.
resource: https://github.com/qgis/QGIS
tags: [gis, geospatial, desktop, gpl-2.0, community, qt6, plugin-security]
domain: scientific-computing
license: GPL-2.0-or-later
license_history: ["GPL-2.0-or-later (unchanged)"]
governance: community
steward: QGIS.ORG association (Project Steering Committee)
backing_orgs: []
metrics:
  github_stars: { value: 14455, as_of: 2026-10-03 }
  latest_release: { value: "4.2.3 (LTR 3.44.15)", as_of: 2026-09-25 }
  annual_membership_income_eur: { value: 320000, as_of: 2026-03-18 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: qgis-gh
    resource: https://github.com/qgis/QGIS
    title: QGIS GitHub repository and release tags (3.40.0 2024-10-25, 3.42 2025-02-21, 3.44 2025-06-20, 4.0.0 2026-03-06, 4.2.0 2026-07-03)
    last_modified: 2026-10-03T00:00:00Z
  - id: qgis-40-changelog
    resource: https://changelog.qgis.org/en/version/4.0/
    title: Changelog for QGIS 4.0
  - id: qgis-42-changelog
    resource: https://changelog.qgis.org/en/version/4.2/
    title: Changelog for QGIS 4.2
  - id: nextgis-qgis4
    resource: https://nextgis.com/blog/qgis-4-plugin-migration-devtools/
    title: "NextGIS: QGIS 4 is here — plugin developers have two things to fix"
  - id: qgis-members-2026
    resource: https://blog.qgis.org/2026/03/18/qgis-sustaining-member-campaign-2026/
    title: "QGIS.org: Sustaining Member Campaign 2026 (2026-03-18)"
  - id: qgis-grants-2026
    resource: https://blog.qgis.org/2026/05/17/qgis-grant-programme-2026-results/
    title: "QGIS.org: Grant Programme 2026 results (2026-05-17)"
  - id: qgis-plugin-security
    resource: https://blog.qgis.org/2026/04/23/plugin-repository-security-enhancements/
    title: "QGIS.org: Plugin Repository Security Enhancements (2026-04-23)"
  - id: qgis-blog
    resource: https://blog.qgis.org/
    title: "QGIS.org blog (Administrative Assistant hire 2026-04-13; Plugins website v4.0.0 2026-07-13)"
---

# Summary
QGIS completed the biggest technical transition in its history: QGIS 4.0 "Norrköping" (2026-03-06) moved the core to Qt6 with 100+ new features while keeping deprecated APIs to ease plugin migration[^qgis-40-changelog][^qgis-gh][^nextgis-qgis4], followed by 4.2 "Belém do Pará" (2026-07-03) focused on 3D, point clouds and cloud-native raster (COG/STAC)[^qgis-42-changelog][^qgis-gh]. With the plugin repository past 3,000 plugins, it introduced mandatory security scanning (QEP 409) in April 2026[^qgis-plugin-security]. Money is the constraint: €320k/yr membership income vs a €634k 2026 budget, prompting a membership drive and its first paid administrative hire[^qgis-members-2026][^qgis-blog]. Verdict: thriving community project, financially stretched.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-25 | QGIS 3.40[^qgis-gh] | OSS | + |
| W24 | 2025-02-21 | QGIS 3.42[^qgis-gh] | OSS | + |
| W24 | 2025-06-20 | QGIS 3.44 (current LTR line)[^qgis-gh] | OSS | + |
| W9 | 2026-03-06 | QGIS 4.0 on Qt6; most plugins need porting[^qgis-40-changelog][^nextgis-qgis4] | OSS | + |
| W9 | 2026-03-18 | Sustaining-member campaign: €320k income vs €634k budget[^qgis-members-2026] | OSS | − |
| W6 | 2026-04-13 | First paid administrative assistant role announced[^qgis-blog] | OSS | + |
| W6 | 2026-04-23 | Plugin repository security scanning (QEP 409) live[^qgis-plugin-security] | OSS | + |
| W6 | 2026-05-17 | 2026 grants: 9 proposals funded (€40k budget)[^qgis-grants-2026][^qgis-members-2026] | OSS | + |
| W3 | 2026-07-03 | QGIS 4.2[^qgis-42-changelog][^qgis-gh] | OSS | + |
| W3 | 2026-07-13 | Plugins website v4.0.0 with Qt6 compatibility checks[^qgis-blog] | OSS | + |
| W3 | 2026-09-25 | QGIS 4.2.3 / 3.44.15 point releases[^qgis-gh] | OSS | + |

# OSS successes
- Qt6 migration delivered without a fork or long freeze[^qgis-40-changelog].
- Proactive plugin supply-chain security[^qgis-plugin-security].
- Funded bug-fixing rounds (€165k/yr) and grants programme[^qgis-members-2026][^qgis-grants-2026].

# OSS failures / risks
- Qt6 broke compatibility for most plugins[^nextgis-qgis4].
- Budget nearly double recurring income[^qgis-members-2026].

# Business successes
- n/a (association; commercial support via independent firms).

# Business failures / risks
- n/a.

# By window
## W3
- QGIS 4.2 (2026-07-03)[^qgis-42-changelog]; plugins site v4.0.0; 4.2.x point releases[^qgis-blog][^qgis-gh].
## W6
- Admin hire, plugin security, grants[^qgis-blog][^qgis-plugin-security][^qgis-grants-2026].
## W9
- QGIS 4.0; membership campaign[^qgis-40-changelog][^qgis-members-2026].
## W12
- No notable events found (3.44 LTR maintenance)[^qgis-gh].
## W24
- QGIS 3.40, 3.42, 3.44[^qgis-gh].

# Lessons
- Large community desktop apps can complete toolkit migrations if they plan years ahead and keep deprecated APIs.
- Plugin ecosystems are supply-chain attack surfaces; scanning at publish time is becoming table stakes.
- Even flagship OSS with broad public-sector use is funded at a fraction of proprietary rivals.

# Related
- [/domains/scientific-computing.md](/domains/scientific-computing.md)
- [/projects/scientific-computing/conda-forge.md](/projects/scientific-computing/conda-forge.md) (Qt6 transition in conda-forge)

[^qgis-gh]: https://github.com/qgis/QGIS
[^qgis-40-changelog]: https://changelog.qgis.org/en/version/4.0/
[^qgis-42-changelog]: https://changelog.qgis.org/en/version/4.2/
[^nextgis-qgis4]: https://nextgis.com/blog/qgis-4-plugin-migration-devtools/
[^qgis-members-2026]: https://blog.qgis.org/2026/03/18/qgis-sustaining-member-campaign-2026/
[^qgis-grants-2026]: https://blog.qgis.org/2026/05/17/qgis-grant-programme-2026-results/
[^qgis-plugin-security]: https://blog.qgis.org/2026/04/23/plugin-repository-security-enhancements/
[^qgis-blog]: https://blog.qgis.org/
