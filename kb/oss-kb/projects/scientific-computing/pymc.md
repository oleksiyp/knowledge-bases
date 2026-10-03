---
type: OSS Project
title: PyMC
description: Leading Python probabilistic-programming library; PyMC 6 / PyTensor 3 (May 2026) switched to a Numba backend, made nutpie the default NUTS sampler (~2x faster), became pip-installable and moved to ArviZ 1.0 — growing OSS, with consultancy PyMC Labs pivoting to "agentic data science".
resource: https://github.com/pymc-devs/pymc
tags: [bayesian, probabilistic-programming, scientific-python, apache-2.0, numfocus, community]
domain: scientific-computing
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: community
steward: PyMC core developers (NumFOCUS fiscally sponsored)
backing_orgs: [organizations/numfocus]
metrics:
  github_stars: { value: 9790, as_of: 2026-10-03 }
  default_branch_commits_apr_sep: { value: 154, as_of: 2026-10-01, note: "vs 80 in Apr–Sep 2025 (GitHub API)" }
oss_verdict: growing
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pymc-gh
    resource: https://github.com/pymc-devs/pymc
    title: PyMC GitHub repository and releases (v6.0.0 2026-05-13 … v6.3.2 2026-09-08)
    last_modified: 2026-10-03T00:00:00Z
  - id: pymc6
    resource: https://www.pymc.io/blog/pymc_v6_ecosystem_updates.html
    title: "PyMC 6.0 & PyTensor 3.0 ecosystem updates (2026-05-11)"
  - id: pymc6-rel
    resource: https://github.com/pymc-devs/pymc/releases/tag/v6.0.0
    title: PyMC v6.0.0 release notes
  - id: pymclabs
    resource: https://www.pymc-labs.com/
    title: PyMC Labs (Bayesian AI consultancy)
  - id: pymclabs-decision
    resource: https://www.pymc-labs.com/blog-posts/open-sourcing-decision-lab-scaling-ai-judgment-data-science
    title: "PyMC Labs: Agentic Data Science Done Right (Decision Lab open-sourced)"
  - id: pymclabs-mmm
    resource: https://www.pymc-labs.com/blog-posts/the-ai-mmm-agent
    title: "PyMC Labs: The AI MMM Agent"
---

# Summary
PyMC had its biggest release in years: PyMC 6.0 with PyTensor 3.0 (announced 2026-05-11, tagged 2026-05-13) made Numba the default compute backend, made nutpie (Rust) the default NUTS sampler for roughly 2x faster end-to-end sampling, made PyMC cleanly pip-installable and moved to ArviZ 1.0 built on `xarray.DataTree`[^pymc6][^pymc6-rel]. About 150 people contributed across the ecosystem and rapid 6.1–6.3 releases followed; commits nearly doubled YoY (154 vs 80, Apr–Sep)[^pymc6][^pymc-gh]. The commercial satellite PyMC Labs is a consultancy that now markets "Bayesian AI" and agentic data science (Decision Lab framework, MMM Agent)[^pymclabs][^pymclabs-decision][^pymclabs-mmm]. Verdict: growing OSS; services business stable, funding undisclosed.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10 → 2025-09 | PyMC 5.x maintenance/feature releases[^pymc-gh] | OSS | + |
| W9 | 2026-03-30 / 04-07 | 5.28.3, 5.28.4[^pymc-gh] | OSS | + |
| W6 | 2026-04 | PyMC Labs open-sources Decision Lab agentic-data-science framework[^pymclabs-decision] | Business | + |
| W6 | 2026-05-11/13 | PyMC 6.0 + PyTensor 3.0: Numba default, nutpie default sampler, ArviZ 1.0, pip-installable[^pymc6][^pymc6-rel] | OSS | + |
| W3 | 2026-07-07 → 09-08 | PyMC 6.1, 6.2, 6.3.0–6.3.2[^pymc-gh] | OSS | + |

# OSS successes
- Removing the C-compiler dependency (Numba default) and pip-installability lower the adoption barrier dramatically[^pymc6-rel].
- Faster sampling via nutpie; new inference (Pathfinder, DADVI), automatic marginalization, `pymc.dims`, JAX interop[^pymc6].

# OSS failures / risks
- Breaking changes (ArviZ 1.0 API, default credible interval 0.94 HDI → 0.89 ETI, moved imports) force user migrations[^pymc6-rel].
- Small maintainer core relative to the stack it owns (PyMC + PyTensor + ArviZ).

# Business successes
- PyMC Labs sustains several core developers via consulting and repositioned around AI agents for marketing-mix and decision science[^pymclabs][^pymclabs-mmm].

# Business failures / risks
- Consultancy model scales linearly; no disclosed venture funding or product revenue.

# By window
## W3
- 6.1.0–6.3.2 releases[^pymc-gh].
## W6
- PyMC 6.0 / PyTensor 3.0 (May 2026); Decision Lab (Apr 2026)[^pymc6][^pymclabs-decision].
## W9
- 5.28.x maintenance[^pymc-gh].
## W12
- No notable events found.
## W24
- 5.x releases; groundwork for PyTensor 3[^pymc-gh].

# Lessons
- Packaging friction (compilers) is a real adoption tax; removing it can matter as much as new features.
- OSS-founder consultancies survive by riding the current hype vocabulary (now "agentic").

# Related
- [Stan](/projects/scientific-computing/stan.md), [xarray](/projects/scientific-computing/xarray.md), [JAX](/projects/ai-inference/jax.md)
- [NumFOCUS](/organizations/numfocus.md), [Scientific computing domain review](/domains/scientific-computing.md)

[^pymc-gh]: https://github.com/pymc-devs/pymc
[^pymc6]: https://www.pymc.io/blog/pymc_v6_ecosystem_updates.html
[^pymc6-rel]: https://github.com/pymc-devs/pymc/releases/tag/v6.0.0
[^pymclabs]: https://www.pymc-labs.com/
[^pymclabs-decision]: https://www.pymc-labs.com/blog-posts/open-sourcing-decision-lab-scaling-ai-judgment-data-science
[^pymclabs-mmm]: https://www.pymc-labs.com/blog-posts/the-ai-mmm-agent
