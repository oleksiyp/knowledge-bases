---
type: OSS Project
title: scikit-learn
description: The default classical-ML library (~67k stars, ~2B downloads/yr); kept a steady release cadence (1.6 → 1.9) adding GPU via the array API, callbacks and free-threading, while spin-out Probabl raised a €13M seed (Oct 2025) and began monetizing skore, certifications and support — a leading European COSS experiment.
resource: https://github.com/scikit-learn/scikit-learn
tags: [machine-learning, scientific-python, bsd-3-clause, numfocus, inria, coss, array-api]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause (2007-)"]
governance: community
steward: scikit-learn core team (Inria scikit-learn consortium; NumFOCUS fiscally sponsored); Probabl employs a large share of maintainers
backing_orgs: [organizations/probabl, organizations/numfocus]
metrics:
  github_stars: { value: 67457, as_of: 2026-10-03 }
  annual_downloads: { value: 2000000000, as_of: 2026-07-21, note: "Probabl analysis; +93% YoY" }
  default_branch_commits_apr_sep: { value: 535, as_of: 2026-10-01, note: "vs 597 in Apr–Sep 2025 (GitHub API)" }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sk-gh
    resource: https://github.com/scikit-learn/scikit-learn
    title: scikit-learn GitHub repository and releases (1.6.0 2024-12-09 … 1.9.1 2026-09-11)
    last_modified: 2026-10-03T00:00:00Z
  - id: sk-19-blog
    resource: https://blog.scikit-learn.org/updates/release-1-9/
    title: "scikit-learn release 1.9: better numerics, new core functionality"
  - id: sk-19-notes
    resource: https://scikit-learn.org/stable/whats_new/v1.9.html
    title: scikit-learn Version 1.9 changelog
  - id: sk-18-highlights
    resource: https://scikit-learn.org/stable/auto_examples/release_highlights/plot_release_highlights_1_8_0.html
    title: Release Highlights for scikit-learn 1.8
  - id: probabl-seed
    resource: https://blog.probabl.ai/probabl-raises-a-13m-in-seed-to-accelerate-enterprise-grade-ai
    title: "Probabl Raises €13M in Seed (2025-10-16)"
  - id: probabl-ceo
    resource: https://blog.probabl.ai/strengthening-stewardship-as-probabl-enters-its-scale-up-phase
    title: "Probabl: Strengthening Stewardship as Probabl Enters Its Scale-Up Phase (2026-01-14)"
  - id: probabl-roadmap
    resource: https://blog.probabl.ai/scikit-learn-roadmap-11-march-2026
    title: "Current scikit-learn priorities at Probabl — March 2026"
  - id: skore-live
    resource: https://blog.probabl.ai/skore-is-live
    title: "Skore is live (2026-03-05)"
  - id: probabl-downloads
    resource: https://blog.probabl.ai/data-deep-dive-1
    title: "Probabl Data deep dive #1: scikit-learn downloaded 2B times last year (2026-07-21)"
  - id: sk-cert
    resource: https://blog.probabl.ai/official-scikit-learn-certification-launch
    title: "Official scikit-learn Certification Launch (2024-10-31)"
  - id: sk-nvidia
    resource: https://blog.scikit-learn.org/funding/nvidia-is-a-new-sponsor/
    title: "NVIDIA is a new sponsor of the scikit-learn consortium at the Inria Foundation (2023-11-14)"
  - id: sk-inst
    resource: https://scikit-learn.org/stable/about.html
    title: scikit-learn About us / institutional support
---

# Summary
scikit-learn remains the default library for classical machine learning and its usage is accelerating: Probabl counts ~2 billion downloads in the year to July 2026 (+93% YoY), which it correlates with the spread of AI coding agents[^probabl-downloads]. Releases arrived on schedule — 1.6 (Dec 2024), 1.7 (Jun 2025), 1.8 (Dec 2025, native GPU via the array API) and 1.9 (Jun 2026, experimental callbacks, more GPU estimators, free-threaded wheels)[^sk-gh][^sk-18-highlights][^sk-19-blog]. Commercially, Inria spin-out Probabl — which employs many core maintainers — raised a €13M seed (Oct 2025, €18.5M total), hired a Talend veteran as CEO (Jan 2026) and launched its skore product (Mar 2026)[^probabl-seed][^probabl-ceo][^skore-live]. Verdict: thriving OSS; business growing but early and revenue undisclosed.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-31 | Probabl launches official scikit-learn certification (with Inria, Artefact)[^sk-cert] | Business | + |
| W24 | 2024-12-09 | scikit-learn 1.6.0[^sk-gh] | OSS | + |
| W24 | 2025-06-06 | scikit-learn 1.7.0[^sk-gh] | OSS | + |
| W12 | 2025-10-16 | Probabl €13M seed (Serena, CFM; Mozilla Ventures, French Tech Souveraineté)[^probabl-seed] | Business | + |
| W12 | 2025-12-10 | scikit-learn 1.8.0 — native GPU support via the array API[^sk-18-highlights][^sk-gh] | OSS | + |
| W9 | 2026-01-14 | Probabl: François Méro CEO; Yann Lechelle chairman; Gaël Varoquaux CSO[^probabl-ceo] | Business | + |
| W9 | 2026-03-05 | skore (Probabl's data-science platform) goes live[^skore-live] | Business | + |
| W6 | 2026-06-02 | scikit-learn 1.9.0 — callbacks, GPU logistic/Poisson regression, tree missing-values[^sk-gh][^sk-19-blog] | OSS | + |
| W3 | 2026-07-21 | Probabl: ~2B downloads in prior year, +93% YoY[^probabl-downloads] | OSS | + |
| W3 | 2026-09-11 | scikit-learn 1.9.1 with free-threaded wheels for CPython 3.14/3.15[^sk-gh][^sk-19-notes] | OSS | + |

# OSS successes
- Array-API adoption lets estimators run directly on PyTorch/CuPy arrays on GPU — the biggest architectural shift in years[^sk-18-highlights][^sk-19-notes].
- Grant-funded roadmap is public: NASA ROSES (GPU/array API, free-threading, supply-chain security) and CZI–Wellcome (callbacks, UX)[^probabl-roadmap].
- Usage growth accelerated in the "agentic coding" era[^probabl-downloads].

# OSS failures / risks
- Commit count slightly down YoY (535 vs 597, Apr–Sep) — partly offset by larger feature PRs[^sk-gh].
- Concentration risk: a single company now employs a large share of core maintainers[^sk-inst][^probabl-roadmap]; governance remains community-based but the boundary needs vigilance.

# Business successes
- Probabl's €13M seed was described as the largest seed for a European COSS company; total €18.5M[^probabl-seed].
- Multiple revenue lines: certification (since Oct 2024), skore platform, support/professional services[^sk-cert][^skore-live][^probabl-ceo].
- Long-standing Inria consortium with corporate sponsors (e.g., NVIDIA funds a full-time maintainer)[^sk-nvidia].

# Business failures / risks
- No disclosed revenue; "classical ML tooling" is a hard market next to LLM platforms. Experiment-tracking (skore) competes with MLflow/W&B.

# By window
## W3
- Probabl download analysis (2B/yr, +93%)[^probabl-downloads]; 1.9.1 (2026-09-11)[^sk-gh].
## W6
- 1.9.0 (2026-06-02; announced 2026-06-12)[^sk-gh][^sk-19-blog].
## W9
- Probabl leadership reshuffle (2026-01-14); skore launched (2026-03-05); public priorities roadmap (2026-03-11)[^probabl-ceo][^skore-live][^probabl-roadmap].
## W12
- Probabl €13M seed (2025-10-16); 1.8.0 GPU release (2025-12-10)[^probabl-seed][^sk-18-highlights].
## W24
- Certification launch (2024-10-31); 1.6.0 and 1.7.0[^sk-cert][^sk-gh].

# Lessons
- A mature, ubiquitous OSS library can spawn a company only by selling adjacent things (certification, tooling, services) rather than the library itself.
- Public, funder-attributed roadmaps make company-employed maintainership more legitimate.

# Related
- [Probabl](/organizations/probabl.md), [NumFOCUS](/organizations/numfocus.md)
- [/events/2025-10-probabl-13m-seed.md](/events/2025-10-probabl-13m-seed.md)
- [NumPy](/projects/scientific-computing/numpy.md), [SciPy](/projects/scientific-computing/scipy.md), [pandas](/projects/data-engineering/pandas.md), [PyTorch](/projects/ai-inference/pytorch.md), [MLflow](/projects/ai-inference/mlflow.md)
- [Scientific computing domain review](/domains/scientific-computing.md)

[^sk-gh]: https://github.com/scikit-learn/scikit-learn
[^sk-19-blog]: https://blog.scikit-learn.org/updates/release-1-9/
[^sk-19-notes]: https://scikit-learn.org/stable/whats_new/v1.9.html
[^sk-18-highlights]: https://scikit-learn.org/stable/auto_examples/release_highlights/plot_release_highlights_1_8_0.html
[^probabl-seed]: https://blog.probabl.ai/probabl-raises-a-13m-in-seed-to-accelerate-enterprise-grade-ai
[^probabl-ceo]: https://blog.probabl.ai/strengthening-stewardship-as-probabl-enters-its-scale-up-phase
[^probabl-roadmap]: https://blog.probabl.ai/scikit-learn-roadmap-11-march-2026
[^skore-live]: https://blog.probabl.ai/skore-is-live
[^probabl-downloads]: https://blog.probabl.ai/data-deep-dive-1
[^sk-cert]: https://blog.probabl.ai/official-scikit-learn-certification-launch
[^sk-nvidia]: https://blog.scikit-learn.org/funding/nvidia-is-a-new-sponsor/
[^sk-inst]: https://scikit-learn.org/stable/about.html
