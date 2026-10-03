---
type: OSS Project
title: NumPy
description: The array foundation of scientific Python; after the 2024 NumPy 2.0 ABI break it settled into a steady twice-yearly cadence (2.2 Dec 2024 → 2.5 Jun 2026) focused on free-threading, typing and deprecation clean-up, and published one of the most-copied AI-contribution policies — thriving community project with no commercial vendor.
resource: https://github.com/numpy/numpy
tags: [scientific-python, arrays, bsd-3-clause, numfocus, community, free-threading]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause (2005-; wheels also carry bundled 0BSD/MIT/Zlib/CC0 components)"]
governance: community
steward: NumPy Steering Council (NumFOCUS fiscally sponsored)
backing_orgs: [organizations/numfocus, organizations/quansight]
metrics:
  github_stars: { value: 32902, as_of: 2026-10-03 }
  default_branch_commits_apr_sep: { value: 1275, as_of: 2026-10-01, note: "vs 1193 in Apr–Sep 2025 (GitHub API)" }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: numpy-gh
    resource: https://github.com/numpy/numpy
    title: NumPy GitHub repository and releases (v2.2.0 2024-12-08 … v2.5.3 2026-09-06)
    last_modified: 2026-10-03T00:00:00Z
  - id: numpy-news
    resource: https://numpy.org/news/
    title: NumPy News (release announcements 2.2–2.5, fellowship retrospective)
  - id: numpy-250
    resource: https://numpy.org/doc/2.5/release/2.5.0-notes.html
    title: NumPy 2.5.0 Release Notes
  - id: numpy-240
    resource: https://numpy.org/devdocs/release/2.4.0-notes.html
    title: NumPy 2.4.0 Release Notes
  - id: numpy-230
    resource: https://github.com/numpy/numpy/releases/tag/v2.3.0
    title: NumPy v2.3.0 release (2025-06-07)
  - id: numpy-ai-policy
    resource: https://numpy.org/devdocs/dev/ai_policy.html
    title: NumPy AI Policy (developer docs)
  - id: numpydoc-ai
    resource: https://github.com/numpy/numpydoc/pull/710
    title: "numpydoc PR #710: Add AI policy that follows NumPy"
  - id: quansight-czi-numpy
    resource: https://labs.quansight.org/blog/numpy_czi_grant
    title: "Quansight Labs: A new grant for NumPy and OpenBLAS"
---

# Summary
NumPy is in a healthy post-2.0 phase: after the June 2024 ABI-breaking 2.0, it returned to a twice-yearly release cycle with 2.2 (2024-12-08), 2.3 (2025-06-07), 2.4 (2025-12-20) and 2.5 (2026-06-21), each pushing free-threaded CPython support, static typing and expiry of deprecations[^numpy-news][^numpy-gh]. Activity is stable-to-rising (1,275 default-branch commits Apr–Sep 2026 vs 1,193 a year earlier)[^numpy-gh]. Its developer-docs AI policy — disclosure required, no autonomous agents, "AI slop" rejected — became a template other projects copy[^numpy-ai-policy][^numpydoc-ai]. Verdict: thriving community infrastructure; funding remains grant- and employer-based (Quansight, NVIDIA, Intel, universities) rather than vendor-led.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-08 | NumPy 2.2.0 — return to twice-yearly cycle, `matvec`/`vecmat`, StringDType work[^numpy-news] | OSS | + |
| W24 | 2025-06-07 | NumPy 2.3.0 — free-threading improvements, OpenMP build option, Windows-on-ARM preview, manylinux_2_28[^numpy-230] | OSS | + |
| W12 | 2025-12-20 | NumPy 2.4.0 — `same_value` casting, `__numpy_dtype__` protocol, user-dtype work, Python 3.11–3.14[^numpy-240] | OSS | + |
| W9 | 2026-01-08 | NumPy Fellowship 2025 retrospective (typing fellow)[^numpy-news] | OSS | + |
| W6 | 2026-06-21 | NumPy 2.5.0 — drops Python 3.11, removes `numpy.distutils`, descending sorts, mass deprecation expiry[^numpy-250] | OSS | + |
| W3 | 2026-07-04 → 09-06 | 2.5.1–2.5.3 patch releases[^numpy-gh] | OSS | + |

# OSS successes
- Delivered four on-time feature releases after 2.0 with no repeat of the 2.0 ecosystem breakage[^numpy-news].
- Free-threaded (no-GIL) Python support matured release by release — a prerequisite for the whole stack's free-threading story[^numpy-250].
- Typing overhaul (funded fellowship) and runtime signature introspection in 2.4[^numpy-240][^numpy-news].
- AI policy adopted by sibling projects (numpydoc, docrepr and others)[^numpydoc-ai].

# OSS failures / risks
- Removal of `numpy.distutils` and many expired deprecations in 2.5 create upgrade work for long-tail Fortran/C extension packages[^numpy-250].
- Core maintenance remains concentrated in a small set of paid maintainers whose funding is grant-dependent (CZI EOSS, NASA, corporate employers)[^quansight-czi-numpy].

# Business successes
- n/a (no commercial owner). Paid maintainer time comes via Quansight, NVIDIA, Intel and grants[^quansight-czi-numpy].

# Business failures / risks
- Exposure to the retrenchment of science-OSS grant programs (see domain review).

# By window
## W3
- 2.5.1 (07-04), 2.5.2 (08-09), 2.5.3 (09-06) patch releases[^numpy-gh].
## W6
- NumPy 2.5.0 (2026-06-21): distutils removed, Python 3.12–3.14[^numpy-250].
## W9
- 2.4.1–2.4.4 patches; fellowship retrospective (2026-01-08)[^numpy-gh][^numpy-news].
## W12
- NumPy 2.4.0 (2025-12-20)[^numpy-240].
## W24
- NumPy 2.2.0 (2024-12-08) and 2.3.0 (2025-06-07)[^numpy-news][^numpy-230].

# Lessons
- After a painful major (2.0), a predictable cadence and long deprecation windows rebuild trust.
- Foundational projects can set ecosystem norms (AI-contribution policy) cheaply and quickly.
- Free-threading migration is a bottom-up dependency chain; NumPy had to move first.

# Related
- [SciPy](/projects/scientific-computing/scipy.md), [scikit-learn](/projects/scientific-computing/scikit-learn.md), [Matplotlib](/projects/scientific-computing/matplotlib.md), [pandas](/projects/data-engineering/pandas.md), [JAX](/projects/ai-inference/jax.md), [PyTorch](/projects/ai-inference/pytorch.md)
- [NumFOCUS](/organizations/numfocus.md), [Quansight](/organizations/quansight.md), [/events/2025-05-quansight-pbc-openteams-split.md](/events/2025-05-quansight-pbc-openteams-split.md)
- [Scientific computing domain review](/domains/scientific-computing.md)

[^numpy-gh]: https://github.com/numpy/numpy
[^numpy-news]: https://numpy.org/news/
[^numpy-250]: https://numpy.org/doc/2.5/release/2.5.0-notes.html
[^numpy-240]: https://numpy.org/devdocs/release/2.4.0-notes.html
[^numpy-230]: https://github.com/numpy/numpy/releases/tag/v2.3.0
[^numpy-ai-policy]: https://numpy.org/devdocs/dev/ai_policy.html
[^numpydoc-ai]: https://github.com/numpy/numpydoc/pull/710
[^quansight-czi-numpy]: https://labs.quansight.org/blog/numpy_czi_grant
