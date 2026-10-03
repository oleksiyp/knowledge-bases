---
type: OSS Project
title: Astropy
description: Community-governed core Python library for astronomy (NumFOCUS-sponsored, BSD-3); secured a 5-year $1.8M NASA Foundation grant (Nov 2024) and shipped 7.0 (Nov 2024) and 8.0 (Jun 2026, NumPy 2 required) — a model of grant-funded scientific OSS that held steady through the 2025 funding turmoil.
resource: https://github.com/astropy/astropy
tags: [astronomy, python, bsd-3-clause, numfocus, community, nasa-funded]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: community
steward: Astropy Project (NumFOCUS fiscally sponsored)
backing_orgs: [organizations/numfocus]
metrics:
  github_stars: { value: 5325, as_of: 2026-10-03 }
  contributors_v8_0: { value: 70, as_of: 2026-06-16, note: "37 new contributors; 1,014 commits since v7.2" }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: astropy-gh
    resource: https://github.com/astropy/astropy
    title: astropy GitHub repository and releases
    last_modified: 2026-10-03T00:00:00Z
  - id: astropy-80
    resource: https://docs.astropy.org/en/stable/whatsnew/8.0.html
    title: "What's New in Astropy 8.0?"
  - id: astropy-nasa
    resource: https://groups.google.com/g/astropy-dev/c/ZEe1QulfnsI
    title: "astropy-dev: Astropy has 5 years of NASA funding! (2024-11-15)"
  - id: nasa-oss-2024
    resource: https://www.nasa.gov/news-release/nasa-funds-open-source-software-underpinning-scientific-innovation/
    title: "NASA Funds Open-Source Software Underpinning Scientific Innovation (2024-10-24)"
  - id: astropy-moore
    resource: https://numfocus.org/blog/astropy-receives-900k-grant-from-moore-foundation
    title: "NumFOCUS: Astropy receives $900k grant from Moore Foundation"
---

# Summary
Astropy is the shared core library of Python astronomy, governed by its community and fiscally sponsored by NumFOCUS[^astropy-gh]. It won one of NASA's six 2024 "Foundation" open-source awards — a five-year, $1.8M grant announced to developers on 2024-11-15[^nasa-oss-2024][^astropy-nasa] — on top of earlier Moore Foundation support ($900k)[^astropy-moore]. Releases stayed on an annual-major rhythm: 7.0 (2024-11-22), 7.1 (2025-05-20), 7.2 (2025-11-28), 8.0 (2026-06-16) and 8.0.1 (2026-07-08)[^astropy-gh]. Astropy 8.0 had 70 contributors (37 new), adopted CODATA 2022 constants and requires NumPy 2.0[^astropy-80]. Verdict: stable and well-funded relative to peers.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-24 | Named in NASA's $15.6M OSS awards (Foundation track)[^nasa-oss-2024] | Business | + |
| W24 | 2024-11-15 | Project announces 5-year $1.8M NASA grant[^astropy-nasa] | Business | + |
| W24 | 2024-11-22 | Astropy 7.0[^astropy-gh] | OSS | + |
| W24 | 2025-05-20 | Astropy 7.1[^astropy-gh] | OSS | + |
| W12 | 2025-11-28 | Astropy 7.2[^astropy-gh] | OSS | + |
| W6 | 2026-06-16 | Astropy 8.0 (NumPy 2 required, CODATA 2022)[^astropy-80] | OSS | + |
| W3 | 2026-07-08 | 8.0.1 / 7.2.2[^astropy-gh] | OSS | ~ |

# OSS successes
- Predictable major releases with healthy new-contributor inflow (37 new in 8.0)[^astropy-80].
- Moved its ecosystem onto NumPy 2 by requiring it in 8.0[^astropy-80].

# OSS failures / risks
- Small star count belies its importance — typical of domain infrastructure that is invisible to general developers.

# Business successes
- Multi-year federal funding locked in before the 2025 cuts[^astropy-nasa].

# Business failures / risks
- Dependence on NASA/NSF grants exposes it to future US budget requests that again propose deep science cuts — see [/events/2025-04-us-federal-science-grant-terminations.md](/events/2025-04-us-federal-science-grant-terminations.md).

# By window
## W3
- 8.0.1 bugfix (2026-07-08)[^astropy-gh].
## W6
- Astropy 8.0 (2026-06-16)[^astropy-80].
## W9
- No notable events found.
## W12
- Astropy 7.2 (2025-11-28)[^astropy-gh].
## W24
- NASA 5-year $1.8M grant; 7.0 and 7.1 releases[^astropy-nasa][^astropy-gh].

# Lessons
- Domain "core" libraries with formal governance and a fiscal sponsor can win multi-year agency grants that individual-maintainer projects cannot.
- Locking in multi-year funding before a political downturn is the best hedge.

# Related
- [/organizations/numfocus.md](/organizations/numfocus.md), [/events/2024-10-nasa-funds-open-source-science-software.md](/events/2024-10-nasa-funds-open-source-science-software.md)
- [/projects/scientific-computing/numpy.md](/projects/scientific-computing/numpy.md), [/projects/scientific-computing/matplotlib.md](/projects/scientific-computing/matplotlib.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^astropy-gh]: https://github.com/astropy/astropy
[^astropy-80]: https://docs.astropy.org/en/stable/whatsnew/8.0.html
[^astropy-nasa]: https://groups.google.com/g/astropy-dev/c/ZEe1QulfnsI
[^nasa-oss-2024]: https://www.nasa.gov/news-release/nasa-funds-open-source-software-underpinning-scientific-innovation/
[^astropy-moore]: https://numfocus.org/blog/astropy-receives-900k-grant-from-moore-foundation
