---
type: OSS Project
title: SciPy
description: Core scientific algorithms library for Python; on a reliable twice-yearly cadence (1.16 Jun 2025 → 1.18 Jun 2026) it finished translating its legacy Fortran to C, broadened array-API/JAX support and batched linear algebra — thriving, volunteer- and grant-funded.
resource: https://github.com/scipy/scipy
tags: [scientific-python, numerical-methods, bsd-3-clause, numfocus, community, array-api]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: community
steward: SciPy Steering Council (NumFOCUS fiscally sponsored)
backing_orgs: [organizations/numfocus, organizations/quansight]
metrics:
  github_stars: { value: 15073, as_of: 2026-10-03 }
  default_branch_commits_apr_sep: { value: 1085, as_of: 2026-10-01, note: "vs 1024 in Apr–Sep 2025 (GitHub API)" }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: scipy-gh
    resource: https://github.com/scipy/scipy
    title: SciPy GitHub repository and releases (v1.16.0 2025-06-22 … v1.18.1 2026-08-21)
    last_modified: 2026-10-03T00:00:00Z
  - id: scipy-118
    resource: https://docs.scipy.org/doc/scipy/release/1.18.0-notes.html
    title: SciPy 1.18.0 Release Notes
  - id: scipy-117
    resource: https://docs.scipy.org/doc/scipy/release/1.17.0-notes.html
    title: SciPy 1.17.0 Release Notes
  - id: scipy-117-ann
    resource: https://discuss.scientific-python.org/t/ann-scipy-1-17-0-release/2218
    title: "ANN: SciPy 1.17.0 release (Scientific Python Discourse)"
  - id: scipy-ai-policy
    resource: https://discuss.scientific-python.org/t/a-policy-on-generative-ai-assisted-contributions/1702
    title: "Scientific Python Discourse: A policy on generative AI assisted contributions (SciPy)"
---

# Summary
SciPy is a well-run community project that hit every planned release: 1.16.0 (2025-06-22), 1.17.0 (2026-01-10) and 1.18.0 (2026-06-19), with patch releases in between[^scipy-gh]. The two-year arc is a deep modernization — FITPACK, ARPACK and PROPACK rewritten from Fortran to C, culminating in an experimental Fortran-free build in 1.18 — plus wide array-API standard support, N-D batching and lazy-array/JAX-JIT support in `scipy.stats`[^scipy-117][^scipy-118]. Commit volume is flat-to-up YoY (1,085 vs 1,024, Apr–Sep)[^scipy-gh]. Verdict: thriving infrastructure with no commercial owner.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-22 | SciPy 1.16.0[^scipy-gh] | OSS | + |
| W12 | 2025-10-28 | SciPy 1.16.3[^scipy-gh] | OSS | + |
| W9 | 2026-01-10 | SciPy 1.17.0 — array-API coverage table, N-D batching, ARPACK/PROPACK rewritten in C, coo_array indexing[^scipy-117][^scipy-117-ann] | OSS | + |
| W6 | 2026-06-19 | SciPy 1.18.0 — experimental Fortran-free build, LP64/ILP64 BLAS modes, C batching loops in linalg, JAX JIT for many stats functions[^scipy-118] | OSS | + |
| W3 | 2026-08-21 | SciPy 1.18.1[^scipy-gh] | OSS | + |

# OSS successes
- Retired most legacy Fortran 77 code — a long-standing build and portability burden (Windows, WASM, new architectures)[^scipy-118].
- Array-API work lets SciPy functions run on PyTorch/CuPy/JAX arrays, keeping SciPy relevant in GPU/AI stacks[^scipy-117][^scipy-118].
- Joined NumPy in adopting an explicit generative-AI contribution policy[^scipy-ai-policy].

# OSS failures / risks
- Breadth of the array-API migration means partial, uneven backend coverage for some time[^scipy-117].
- Small core team; most maintainers' time depends on grants or employer goodwill.

# Business successes
- n/a.

# Business failures / risks
- n/a; indirect exposure to declining US science-OSS grants (see domain review).

# By window
## W3
- 1.18.1 (2026-08-21)[^scipy-gh].
## W6
- 1.18.0 (2026-06-19): Fortran-free build option, ILP64[^scipy-118].
## W9
- 1.17.0 (2026-01-10) and 1.17.1 (2026-02-23)[^scipy-117][^scipy-gh].
## W12
- 1.16.3 (2025-10-28)[^scipy-gh].
## W24
- 1.16.0 (2025-06-22)[^scipy-gh].

# Lessons
- Paying down decades-old technical debt (Fortran) is feasible with sustained, funded effort.
- Array-API standards are how pre-GPU libraries stay relevant to accelerator users.

# Related
- [NumPy](/projects/scientific-computing/numpy.md), [scikit-learn](/projects/scientific-computing/scikit-learn.md), [JAX](/projects/ai-inference/jax.md)
- [NumFOCUS](/organizations/numfocus.md), [Quansight](/organizations/quansight.md)
- [Scientific computing domain review](/domains/scientific-computing.md)

[^scipy-gh]: https://github.com/scipy/scipy
[^scipy-118]: https://docs.scipy.org/doc/scipy/release/1.18.0-notes.html
[^scipy-117]: https://docs.scipy.org/doc/scipy/release/1.17.0-notes.html
[^scipy-117-ann]: https://discuss.scientific-python.org/t/ann-scipy-1-17-0-release/2218
[^scipy-ai-policy]: https://discuss.scientific-python.org/t/a-policy-on-generative-ai-assisted-contributions/1702
