---
type: Organization
title: Quansight
description: Travis Oliphant-founded company that employs core maintainers across NumPy, SciPy, pandas, Jupyter and more; in May 2025 it split — consulting went to sister company OpenTeams (which seeks a $100M Series A at a $400M pre-money merged valuation) while Quansight became a Labs-focused Public Benefit Corporation.
resource: https://quansight.com
tags: [commercial-open-source, scientific-python, public-benefit-corporation, consulting, maintainers]
org_kind: coss-startup
hq: unverified
funding: { total_usd: "undisclosed", last_round: "OpenTeams $100M Series A initiated (not confirmed closed)", last_round_date: 2026-03-19, valuation_usd: "OpenTeams+Quansight consulting: $400M pre-money (company-stated target)" }
business_verdict: stable
projects: [projects/scientific-computing/numpy, projects/scientific-computing/scipy, projects/data-engineering/pandas]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: quansight-pbc
    resource: https://quansight.com/post/quansight-is-now-a-public-benefit-corporation/
    title: "Quansight Is Now a Public Benefit Corporation (2025-05-30)"
  - id: openteams-acq
    resource: https://www.businesswire.com/news/home/20250527258356/en/OpenTeams-Acquires-Quansights-AI-Consulting-Division-to-Accelerate-Open-Source-AI-for-Enterprise-and-Government
    title: "Business Wire: OpenTeams Acquires Quansight's AI Consulting Division (2025-05-27)"
  - id: openteams-ceo
    resource: https://openteams.com/openteams-announces-ceo-transition-marking-next-phase-of-growth-and-product-expansion/
    title: "OpenTeams Announces CEO Transition (2026-03-19)"
  - id: quansight-czi-numpy
    resource: https://labs.quansight.org/blog/numpy_czi_grant
    title: "Quansight Labs: A new grant for NumPy and OpenBLAS"
  - id: quansight-labs-team
    resource: https://labs.quansight.org/team
    title: Quansight Labs team page
---

# Summary
Quansight, founded by NumPy/SciPy creator and Anaconda co-founder Travis Oliphant, has been one of the largest employers of scientific-Python maintainers via its Labs division and grant-funded work (e.g., NumPy/OpenBLAS CZI grants)[^quansight-czi-numpy][^quansight-labs-team]. On 2025-05-27/30 it restructured: OpenTeams — Oliphant's other company — acquired Quansight's AI consulting division and core engineering team (CTO Dharhas Pothina became OpenTeams CTO), while Quansight converted from an LLC to a Public Benefit Corporation focused on open-source sustainability, led by co-CEOs Ralf Gommers (Technology) and Tania Allard (Impact), with Oliphant moving to the board[^openteams-acq][^quansight-pbc]. In March 2026 Oliphant became OpenTeams CEO; the company says it initiated a $100M Series A at a $400M pre-money valuation for the merged business and sells the Nebari "private AI" platform to government[^openteams-ceo]. Verdict: Quansight PBC **stable**; OpenTeams' raise unconfirmed.

# Business timeline
| Date | Event |
|---|---|
| 2025-05-27 | OpenTeams acquires Quansight's AI consulting division; Pothina becomes OpenTeams CTO[^openteams-acq] |
| 2025-05-30 | Quansight becomes a PBC; Gommers and Allard co-CEOs; Oliphant to board[^quansight-pbc] |
| 2026-03-19 | Travis Oliphant replaces Joe Merrill as OpenTeams CEO; $100M Series A "initiated" at $400M pre-money[^openteams-ceo] |

# Monetization model
Quansight PBC: grants, sponsored open-source development and support contracts that pay maintainers (NumPy, SciPy, pandas, Jupyter, conda ecosystem). OpenTeams: consulting plus the Nebari platform for on-prem/government AI[^openteams-ceo].

# Successes
- PBC structure legally binds the maintainer-employer to open-source impact[^quansight-pbc].
- Sustained employment of core maintainers for foundational libraries[^quansight-labs-team].

# Failures / risks
- Consulting revenue (the cash engine) left with OpenTeams; Quansight PBC now leans more on grants at a time when US federal and philanthropic science-software funding is contracting (see domain review).
- OpenTeams' $100M Series A is company-stated as "initiated"; no closing has been confirmed by press.

# Related
- [NumPy](/projects/scientific-computing/numpy.md), [SciPy](/projects/scientific-computing/scipy.md), [pandas](/projects/data-engineering/pandas.md)
- [/events/2025-05-quansight-pbc-openteams-split.md](/events/2025-05-quansight-pbc-openteams-split.md)
- [NumFOCUS](/organizations/numfocus.md), [Scientific computing domain review](/domains/scientific-computing.md)

[^quansight-pbc]: https://quansight.com/post/quansight-is-now-a-public-benefit-corporation/
[^openteams-acq]: https://www.businesswire.com/news/home/20250527258356/en/OpenTeams-Acquires-Quansights-AI-Consulting-Division-to-Accelerate-Open-Source-AI-for-Enterprise-and-Government
[^openteams-ceo]: https://openteams.com/openteams-announces-ceo-transition-marking-next-phase-of-growth-and-product-expansion/
[^quansight-czi-numpy]: https://labs.quansight.org/blog/numpy_czi_grant
[^quansight-labs-team]: https://labs.quansight.org/team
