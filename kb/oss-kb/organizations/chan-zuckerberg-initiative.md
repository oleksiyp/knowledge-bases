---
type: Organization
title: Chan Zuckerberg Initiative (CZI) / Biohub
description: Philanthropy of Priscilla Chan and Mark Zuckerberg whose Essential Open Source Software for Science (EOSS) program was the largest dedicated funder of scientific OSS ($58M, 230+ projects, 2019–2024); EOSS ended after cycle 6, CZI folded its science work into Biohub (Nov 2025), and Biohub co-anchored the successor Open Source for Science Fund (May 2026).
resource: https://chanzuckerberg.com
tags: [philanthropy, research-funding, scientific-open-source, eoss]
org_kind: nonprofit
hq: Redwood City, California, USA
funding: { total_usd: "n/a (philanthropy)", last_round: "n/a", last_round_date: 2026-05-04, valuation_usd: "n/a" }
business_verdict: stable
projects: [projects/scientific-computing/numpy, projects/scientific-computing/scipy, projects/scientific-computing/matplotlib, projects/scientific-computing/jupyter]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: czi-eoss-rfa
    resource: https://chanzuckerberg.com/rfa/essential-open-source-software-for-science/
    title: "CZI: Essential Open Source Software for Science RFA (cycle 6 closed 2023-10-17)"
  - id: os4s-launch
    resource: https://os4science.org/news/open-source-for-science-fund-launch/
    title: "Open Source for Science Fund launches (2026-05-04)"
  - id: rp-launch
    resource: https://www.renaissancephilanthropy.org/insights/open-source-for-science-fund-launches
    title: "Renaissance Philanthropy: Open Source for Science Fund launches"
  - id: fortune-czi
    resource: https://fortune.com/2025/11/06/mark-zuckerberg-priscilla-chan-billionaire-philanthropy
    title: "Fortune: Zuckerberg and Chan refocus philanthropy on Biohub (2025-11-06)"
  - id: insidephil-biohub
    resource: https://www.insidephilanthropy.com/home/czi-is-poised-to-become-the-worlds-largest-private-biomedical-funder-what-might-that-look-like
    title: "Inside Philanthropy: CZI's Biohub — a new era in disease research funding?"
---

# Summary
From 2019 to 2024 CZI's EOSS program was the single most important philanthropic funder of scientific open source: over six cycles it deployed $58M across 230+ projects (NumPy, SciPy, Matplotlib, scikit-image, napari, Bioconductor packages and many more)[^os4s-launch]. The sixth and final RFA closed on 2023-10-17 with awards starting in 2024, and no seventh cycle followed[^czi-eoss-rfa]. In November 2025 Chan and Zuckerberg declared that Biohub — combining "frontier AI and frontier biology" — would be "the main focus of our philanthropy going forward", stepping back from education and social causes with layoffs[^fortune-czi][^insidephil-biohub]. Biohub then co-anchored (with Wellcome) the $20M Open Source for Science Fund at Renaissance Philanthropy, designed by the former EOSS team, launched 2026-05-04[^os4s-launch][^rp-launch]. Verdict: funding for scientific OSS survived the transition but shrank and narrowed to life sciences.

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2024 | Final EOSS cycle-6 awards start (RFA closed 2023-10-17)[^czi-eoss-rfa] | ~ |
| W12 | 2025-11 | CZI makes Biohub the main focus; science activities move into Biohub; non-science staff laid off[^fortune-czi][^insidephil-biohub] | − |
| W6 | 2026-05-04 | Biohub + Wellcome seed the $20M Open Source for Science Fund (Renaissance Philanthropy)[^os4s-launch] | + |

# Monetization model
n/a — philanthropic LLC/foundation funded by the Chan–Zuckerberg fortune.

# Successes
- EOSS created a template (multi-funder, maintainer-led grants, sustainability focus) that its alumni rebuilt as the Open Source for Science Fund[^os4s-launch].

# Failures / risks
- The end of EOSS left a multi-year gap (no new open calls between late 2023 and May 2026) at the same time US federal research funding was being cut — see [/events/2025-04-us-federal-science-grant-terminations.md](/events/2025-04-us-federal-science-grant-terminations.md).
- The successor fund is smaller per year than EOSS at its peak and initially restricted to life sciences[^rp-launch].

# Related
- [/events/2026-05-open-source-for-science-fund-launch.md](/events/2026-05-open-source-for-science-fund-launch.md)
- [/organizations/numfocus.md](/organizations/numfocus.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^czi-eoss-rfa]: https://chanzuckerberg.com/rfa/essential-open-source-software-for-science/
[^os4s-launch]: https://os4science.org/news/open-source-for-science-fund-launch/
[^rp-launch]: https://www.renaissancephilanthropy.org/insights/open-source-for-science-fund-launches
[^fortune-czi]: https://fortune.com/2025/11/06/mark-zuckerberg-priscilla-chan-billionaire-philanthropy
[^insidephil-biohub]: https://www.insidephilanthropy.com/home/czi-is-poised-to-become-the-worlds-largest-private-biomedical-funder-what-might-that-look-like
