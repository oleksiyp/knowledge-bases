---
type: Event
title: Anaconda's Terms-of-Service prompt breaks conda CI pipelines
description: In mid-July 2025 Anaconda began requiring explicit ToS acceptance for its channels via the conda-anaconda-tos plugin, causing CondaToSNonInteractiveError failures in CI (GitHub-hosted Miniconda, scikit-learn), the culmination of a 2024–25 enforcement campaign that pushed academia toward conda-forge.
event_kind: license-change
date: 2025-07-15
window: W24
impact: negative
projects: [projects/scientific-computing/conda, projects/scientific-computing/conda-forge]
organizations: [organizations/anaconda]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh-runner-issue
    resource: https://github.com/actions/runner-images/issues/12641
    title: "actions/runner-images #12641: Miniconda fails due to new Terms of Service"
  - id: sklearn-ci-issue
    resource: https://github.com/scikit-learn/scikit-learn/issues/31773
    title: "scikit-learn #31773: Anaconda new ToS causing CI failures"
  - id: tos-plugin
    resource: https://www.anaconda.com/blog/conda-anaconda-tos-plugin
    title: "Anaconda: Enabling ToS compliance with the conda-anaconda-tos plugin"
  - id: register-tos
    resource: https://www.theregister.com/2024/08/08/anaconda_puts_the_squeeze_on/
    title: "The Register: Anaconda puts the squeeze on data scientists (2024-08-08)"
    author: org:the-register
  - id: anaconda-academia
    resource: https://www.anaconda.com/blog/update-on-anacondas-terms-of-service-for-academia-and-research
    title: "Anaconda: Update on ToS for Academia and Research (2024-09-18)"
  - id: purdue-rcac
    resource: https://docs.rcac.purdue.edu/blog/2025/09/24/conda-anaconda/
    title: "Purdue RCAC: Regarding Conda versus Anaconda (2025-09-24)"
  - id: conda-sep-2025
    resource: https://conda.org/blog/2025-10-01-september-releases/
    title: "conda.org: conda 25.9.0 removes hardcoded Anaconda default channels"
---

# What happened
Around 2025-07-15 Anaconda's installers and channels began requiring users to accept its Terms of Service through the conda-anaconda-tos plugin. Non-interactive environments failed with `CondaToSNonInteractiveError`, breaking GitHub-hosted runner images using Miniconda and projects such as scikit-learn[^gh-runner-issue][^sklearn-ci-issue]. Anaconda shipped conda-anaconda-tos 0.2.1 on 2025-07-17 to detect CI and print a notice instead of blocking[^tos-plugin].

# Why it matters
This followed the March 2024 ToS change and 2024 legal demand letters to non-profit research institutions, including threats of back-billing[^register-tos]. Anaconda then clarified academic exemptions in September 2024[^anaconda-academia]. The July 2025 breakage made the commercial channel's terms a hard technical dependency for millions of automated builds.

# Outcome so far
University HPC centres formalized guidance to use Miniforge/conda-forge instead of Anaconda[^purdue-rcac]. In conda 25.9.0 (Oct 2025) the community removed Anaconda's channels as hardcoded defaults in conda's source[^conda-sep-2025]. Anaconda's revenue nonetheless kept growing (Series C two weeks later).

# Related
- [/organizations/anaconda.md](/organizations/anaconda.md), [/projects/scientific-computing/conda.md](/projects/scientific-computing/conda.md), [/projects/scientific-computing/conda-forge.md](/projects/scientific-computing/conda-forge.md), [/events/2025-07-anaconda-series-c.md](/events/2025-07-anaconda-series-c.md)

[^gh-runner-issue]: https://github.com/actions/runner-images/issues/12641
[^sklearn-ci-issue]: https://github.com/scikit-learn/scikit-learn/issues/31773
[^tos-plugin]: https://www.anaconda.com/blog/conda-anaconda-tos-plugin
[^register-tos]: https://www.theregister.com/2024/08/08/anaconda_puts_the_squeeze_on/
[^anaconda-academia]: https://www.anaconda.com/blog/update-on-anacondas-terms-of-service-for-academia-and-research
[^purdue-rcac]: https://docs.rcac.purdue.edu/blog/2025/09/24/conda-anaconda/
[^conda-sep-2025]: https://conda.org/blog/2025-10-01-september-releases/
