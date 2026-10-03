---
type: Organization
title: NumFOCUS
description: Austin-based 501(c)(3) fiscal sponsor for NumPy, pandas, Matplotlib, Jupyter-adjacent and ~65+ scientific open-source projects and organizer of PyData; ran deficits in 2023–2024, changed executive director in 2025 and cut staff to a balanced budget in early 2026.
resource: https://numfocus.org
tags: [nonprofit, fiscal-sponsor, scientific-python, pydata, sustainability]
org_kind: foundation
hq: Austin, Texas, USA
funding: { total_usd: "n/a (nonprofit; FY2024 revenue $8.38M)", last_round: "n/a", last_round_date: 2024-12-31, valuation_usd: "n/a" }
business_verdict: struggling
projects: [projects/scientific-computing/numpy, projects/scientific-computing/scipy, projects/scientific-computing/matplotlib, projects/scientific-computing/jupyter, projects/data-engineering/pandas, projects/scientific-computing/pymc, projects/scientific-computing/stan, projects/scientific-computing/julia]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: numfocus-home
    resource: https://numfocus.org/
    title: NumFOCUS website
  - id: propublica-numfocus
    resource: https://projects.propublica.org/nonprofits/organizations/454547709
    title: "ProPublica Nonprofit Explorer: NumFOCUS Inc (Form 990 data 2019–2024)"
  - id: numfocus-ed-search
    resource: https://numfocus.medium.com/searching-for-the-next-executive-director-of-numfocus-26313d30f7b7
    title: "NumFOCUS: Searching for the next Executive Director (Leah Silen stepping aside)"
  - id: perrett-kerestes
    resource: https://perrettlaver.com/news/rachel-kerestes-appointed-as-executive-director-at-numfocus/
    title: "Perrett Laver: Rachel Kerestes appointed as Executive Director at NumFOCUS"
  - id: numfocus-new-structure
    resource: https://numfocus.medium.com/a-new-structure-f5aab4ca1781
    title: "NumFOCUS: A New Structure (Rachel Kerestes, Feb 2026)"
  - id: nasa-oss-2024
    resource: https://www.nasa.gov/news-release/nasa-funds-open-source-software-underpinning-scientific-innovation/
    title: "NASA Funds Open-Source Software Underpinning Scientific Innovation (2024-10-24)"
  - id: numfocus-feb26
    resource: https://numfocus.medium.com/whats-new-in-the-numfocus-ecosystem-february-2026-854d6593e6f4
    title: "What's New in the NumFOCUS Ecosystem: February 2026"
  - id: numfocus-gsoc26
    resource: https://github.com/numfocus/gsoc/blob/master/2026/ideas-list.md
    title: NumFOCUS GSoC 2026 ideas list
---

# Summary
NumFOCUS is the main nonprofit fiscal home of the scientific Python (and some Julia/R/Stan) ecosystem — NumPy, pandas, Matplotlib, SciPy, PyMC, Stan, Astropy and dozens more — and funds itself largely through donations, corporate sponsorships and PyData conference income[^numfocus-home]. Its Form 990s show revenue of $9.29M (2022), $7.25M (2023) and $8.38M (2024) against expenses that jumped to $9.95M and $11.09M, i.e. two consecutive deficits (−$2.7M in 2024) that cut net assets from $11.5M to $5.67M[^propublica-numfocus]. Founding executive director Leah Silen stepped aside in 2025; Rachel Kerestes took over on 2025-08-01[^numfocus-ed-search][^perrett-kerestes], and in February 2026 the board adopted a balanced 2026 budget that "eliminates the practice of budgeting to goal revenue", reduced the team and reorganized staff into three departments[^numfocus-new-structure]. Verdict: the ecosystem it serves is thriving, but the organization itself is in a belt-tightening phase.

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2024-10-24 | NASA ROSES awards include Matplotlib+Cartopy and Astropy via NumFOCUS (part of $15.6M across 15 projects)[^nasa-oss-2024] | + |
| W24 | 2024 (FY) | Revenue $8.38M vs expenses $11.09M; net assets fall to $5.67M[^propublica-numfocus] | − |
| W24 | 2025 (spring) | Founding ED Leah Silen announces she will step aside; ED search opens[^numfocus-ed-search] | ~ |
| W24 | 2025-08-01 | Rachel Kerestes becomes Executive Director[^perrett-kerestes] | ~ |
| W9 | 2026-02 | "A New Structure": balanced 2026 budget, smaller team, three departments (community; finance & operations; advancement); new CFOO from 2026-02-01[^numfocus-new-structure] | − / + |
| W9 | 2026 | Umbrella org for GSoC 2026 (ArviZ, Matplotlib, PyMC, Stan, HoloViz, JuMP, SciML…)[^numfocus-gsoc26] | + |

# Monetization model
Nonprofit: individual and corporate donations, grants passed through to sponsored projects (e.g., NASA, CZI EOSS), a fiscal-sponsorship fee on project income, and PyData conference ticket/sponsorship revenue (program services were ~43.5% of 2024 revenue)[^propublica-numfocus].

# Successes
- Remains the default legal/financial home for community-governed scientific Python; continued to channel federal and philanthropic grants (e.g., NASA 2024 awards) to projects[^nasa-oss-2024].
- Ecosystem activity remained high in 2026 (e.g., CuPy 14 aligned with NumPy 2 semantics)[^numfocus-feb26].

# Failures / risks
- Two years of deficits spending down reserves (2023–2024)[^propublica-numfocus]; staff cuts in 2026[^numfocus-new-structure].
- Exposed to the collapse of US federal science funding in 2025 and to the end of CZI's EOSS program — see [/events/2025-04-us-federal-science-grant-terminations.md](/events/2025-04-us-federal-science-grant-terminations.md) and [/events/2026-05-open-source-for-science-fund-launch.md](/events/2026-05-open-source-for-science-fund-launch.md).
- Conference revenue is cyclical and corporate sponsorship flows increasingly toward AI-centric events.

# Related
- [/domains/scientific-computing.md](/domains/scientific-computing.md)
- [/events/2026-02-numfocus-restructuring.md](/events/2026-02-numfocus-restructuring.md)
- [/events/2024-10-nasa-funds-open-source-science-software.md](/events/2024-10-nasa-funds-open-source-science-software.md)
- [/organizations/python-software-foundation.md](/organizations/python-software-foundation.md), [/organizations/chan-zuckerberg-initiative.md](/organizations/chan-zuckerberg-initiative.md)
- [/projects/data-engineering/pandas.md](/projects/data-engineering/pandas.md), [/projects/scientific-computing/numpy.md](/projects/scientific-computing/numpy.md), [/projects/scientific-computing/matplotlib.md](/projects/scientific-computing/matplotlib.md)

[^numfocus-home]: https://numfocus.org/
[^propublica-numfocus]: https://projects.propublica.org/nonprofits/organizations/454547709
[^numfocus-ed-search]: https://numfocus.medium.com/searching-for-the-next-executive-director-of-numfocus-26313d30f7b7
[^perrett-kerestes]: https://perrettlaver.com/news/rachel-kerestes-appointed-as-executive-director-at-numfocus/
[^numfocus-new-structure]: https://numfocus.medium.com/a-new-structure-f5aab4ca1781
[^nasa-oss-2024]: https://www.nasa.gov/news-release/nasa-funds-open-source-software-underpinning-scientific-innovation/
[^numfocus-feb26]: https://numfocus.medium.com/whats-new-in-the-numfocus-ecosystem-february-2026-854d6593e6f4
[^numfocus-gsoc26]: https://github.com/numfocus/gsoc/blob/master/2026/ideas-list.md
