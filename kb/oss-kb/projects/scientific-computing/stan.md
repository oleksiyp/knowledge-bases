---
type: OSS Project
title: Stan
description: The reference probabilistic-programming language for Bayesian statistics (C++ core; R/Python/Julia interfaces); steady thrice-yearly releases (2.36 → 2.40) adding an embedded Laplace approximation and new constrained types, with an elected governing body and StanCon 2026 in Uppsala — stable academic project.
resource: https://github.com/stan-dev/stan
tags: [bayesian, probabilistic-programming, r, bsd-3-clause, numfocus, academic]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause (core); some interfaces GPL-3"]
governance: academic
steward: Stan Governing Body (NumFOCUS fiscally sponsored)
backing_orgs: [organizations/numfocus]
metrics:
  github_stars: { value: 2775, as_of: 2026-10-03, note: "stan-dev/stan core repo" }
  default_branch_commits_apr_sep: { value: 124, as_of: 2026-10-01, note: "vs 52 in Apr–Sep 2025 (GitHub API)" }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: stan-gh
    resource: https://github.com/stan-dev/stan
    title: Stan GitHub repository and releases (v2.36.0 2024-12-10 … v2.40.0 2026-09-16)
    last_modified: 2026-10-03T00:00:00Z
  - id: cmdstan-237
    resource: https://blog.mc-stan.org/2025/09/02/release-of-cmdstan-2-37/
    title: "Stan Blog: Release of CmdStan 2.37 (2025-09-02)"
  - id: cmdstan-238
    resource: https://blog.mc-stan.org/2026/01/13/release-of-cmdstan-2-38/
    title: "Stan Blog: Release of CmdStan 2.38 (2026-01-13)"
  - id: cmdstan-239
    resource: https://blog.mc-stan.org/2026/05/19/release-of-cmdstan-2-39/
    title: "Stan Blog: Release of CmdStan 2.39 (2026-05-19)"
  - id: cmdstan-240
    resource: https://blog.mc-stan.org/2026/09/16/release-of-cmdstan-2-40/
    title: "Stan Blog: Release of CmdStan 2.40 (2026-09-16)"
  - id: stan-sgb
    resource: https://statmodeling.stat.columbia.edu/2025/03/15/elections-for-the-stan-governing-body-2025/
    title: "Statistical Modeling blog: Elections for the Stan Governing Body 2025"
  - id: stancon26
    resource: https://statmodeling.stat.columbia.edu/2025/10/13/stancon-2026-in-uppsala-sweden/
    title: "StanCon 2026 in Uppsala, Sweden (Aug 17–21 2026)"
  - id: pymc6
    resource: https://www.pymc.io/blog/pymc_v6_ecosystem_updates.html
    title: "PyMC 6.0 ecosystem updates (nutpie becomes default NUTS sampler)"
---

# Summary
Stan remains the reference tool for applied Bayesian statistics and is governed academically through an elected Stan Governing Body (all five seats were up for election in 2025)[^stan-sgb]. It shipped on a predictable cadence — 2.36 (Dec 2024), 2.37 (Sep 2025; `sum_to_zero_matrix`, new simplex transforms), 2.38 (Jan 2026; Wiener CDFs, colored compiler messages), 2.39 (May 2026; embedded Laplace approximation for latent Gaussian models) and 2.40 (Sep 2026)[^stan-gh][^cmdstan-237][^cmdstan-238][^cmdstan-239][^cmdstan-240]. Core-repo commits more than doubled YoY (124 vs 52, Apr–Sep)[^stan-gh]. StanCon 2026 ran in Uppsala, Aug 17–21[^stancon26]. Verdict: stable; competitive pressure from the faster-moving Python stack (PyMC 6/nutpie, NumPyro/JAX)[^pymc6].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-10 | Stan 2.36.0[^stan-gh] | OSS | + |
| W24 | 2025-03-15 | Elections for all 5 Stan Governing Body seats[^stan-sgb] | OSS | + |
| W24 | 2025-09-02 | CmdStan/Stan 2.37 — sum_to_zero_matrix, faster simplex transforms[^cmdstan-237] | OSS | + |
| W9 | 2026-01-13 | Stan 2.38[^cmdstan-238] | OSS | + |
| W6 | 2026-05-19 | Stan 2.39 — embedded Laplace approximation, yule_simon distribution[^cmdstan-239] | OSS | + |
| W3 | 2026-08-17 | StanCon 2026, Uppsala[^stancon26] | OSS | + |
| W3 | 2026-09-16 | Stan 2.40[^cmdstan-240] | OSS | + |

# OSS successes
- Embedded Laplace approximation (2.39) is a major algorithmic addition for hierarchical/latent Gaussian models[^cmdstan-239].
- Functioning democratic governance and an active conference series[^stan-sgb][^stancon26].

# OSS failures / risks
- PyMC 6 made the Rust-based nutpie sampler its default NUTS (~2x faster end-to-end); Python users increasingly reach for JAX-based samplers[^pymc6].
- Reliant on academic grants and a modest contributor base.

# Business successes
- n/a.

# Business failures / risks
- n/a (no commercial vendor); exposure to academic funding cuts.

# By window
## W3
- StanCon 2026 (Aug 17–21); Stan 2.40 (09-16)[^stancon26][^cmdstan-240].
## W6
- Stan 2.39 (05-19)[^cmdstan-239].
## W9
- Stan 2.38 (01-13)[^cmdstan-238].
## W12
- No notable events found.
## W24
- 2.36 (Dec 2024), governing-body elections (Mar 2025), 2.37 (Sep 2025)[^stan-gh][^stan-sgb][^cmdstan-237].

# Lessons
- Academic OSS with elected governance can stay stable for a decade+ without a company — but innovation speed lags VC- or Big-Tech-adjacent rivals.

# Related
- [PyMC](/projects/scientific-computing/pymc.md), [JAX](/projects/ai-inference/jax.md)
- [NumFOCUS](/organizations/numfocus.md), [Scientific computing domain review](/domains/scientific-computing.md)

[^stan-gh]: https://github.com/stan-dev/stan
[^cmdstan-237]: https://blog.mc-stan.org/2025/09/02/release-of-cmdstan-2-37/
[^cmdstan-238]: https://blog.mc-stan.org/2026/01/13/release-of-cmdstan-2-38/
[^cmdstan-239]: https://blog.mc-stan.org/2026/05/19/release-of-cmdstan-2-39/
[^cmdstan-240]: https://blog.mc-stan.org/2026/09/16/release-of-cmdstan-2-40/
[^stan-sgb]: https://statmodeling.stat.columbia.edu/2025/03/15/elections-for-the-stan-governing-body-2025/
[^stancon26]: https://statmodeling.stat.columbia.edu/2025/10/13/stancon-2026-in-uppsala-sweden/
[^pymc6]: https://www.pymc.io/blog/pymc_v6_ecosystem_updates.html
