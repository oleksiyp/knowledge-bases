---
type: OSS Project
title: conda (and the Anaconda Distribution / defaults channel)
description: The cross-language package and environment manager of scientific Python; the conda tool itself became more community-governed and vendor-neutral (Anaconda's channels un-hardcoded in Sept 2025, Rattler solver becoming default Oct 2026), while Anaconda's commercial "defaults" channel ToS enforcement pushed institutions toward conda-forge/Miniforge.
resource: https://github.com/conda/conda
tags: [package-manager, python, scientific-computing, bsd-3-clause, terms-of-service, community]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause (conda tool, unchanged)", "Anaconda Repository/defaults channel: proprietary ToS — paid for orgs of 200+ employees since 2020; academic/non-profit exemptions narrowed March 2024, clarified Sept 2024"]
governance: community
steward: conda community (conda organization steering council); Anaconda, Inc. is the largest contributor
backing_orgs: [organizations/anaconda, organizations/prefix-dev]
metrics:
  github_stars: { value: 7522, as_of: 2026-10-03 }
  latest_release: { value: "26.9.1", as_of: 2026-10-02 }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: up, W6: flat, W9: up, W12: up, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: conda-gh
    resource: https://github.com/conda/conda
    title: conda GitHub repository and releases (26.9.1, 2026-10-02)
    last_modified: 2026-10-02T00:00:00Z
  - id: conda-sep-2025
    resource: https://conda.org/blog/2025-10-01-september-releases/
    title: "conda.org: September 2025 releases (conda 25.9.0 removes hardcoded Anaconda default channels)"
  - id: conda-roadmap-q1-2026
    resource: https://conda.org/blog/conda-roadmap-q1-2026/
    title: "conda.org: Conda CLI Roadmap Updates Q1 2026 (2026-01-29)"
  - id: conda-sep-2026
    resource: https://conda.org/blog/2026-10-02-september-releases/
    title: "conda.org: August and September 2026 Releases (Rattler to become default solver in 26.10)"
  - id: register-tos
    resource: https://www.theregister.com/2024/08/08/anaconda_puts_the_squeeze_on/
    title: "The Register: Anaconda puts the squeeze on data scientists now deemed to be terms-of-service violators (2024-08-08)"
    author: org:the-register
  - id: anaconda-academia
    resource: https://www.anaconda.com/blog/update-on-anacondas-terms-of-service-for-academia-and-research
    title: "Anaconda: Update on Anaconda's Terms of Service for Academia and Research (2024-09-18)"
  - id: tos-plugin
    resource: https://www.anaconda.com/blog/conda-anaconda-tos-plugin
    title: "Anaconda: Enabling ToS compliance with the conda-anaconda-tos plugin"
  - id: gh-runner-issue
    resource: https://github.com/actions/runner-images/issues/12641
    title: "actions/runner-images #12641: Miniconda fails due to new Terms of Service (July 2025)"
  - id: sklearn-ci-issue
    resource: https://github.com/scikit-learn/scikit-learn/issues/31773
    title: "scikit-learn #31773: Anaconda new ToS causing CI failures"
  - id: purdue-rcac
    resource: https://docs.rcac.purdue.edu/blog/2025/09/24/conda-anaconda/
    title: "Purdue RCAC: Regarding Conda versus Anaconda (2025-09-24)"
  - id: rattler-to-conda
    resource: https://conda.org/blog/2024-10-01-rattler-to-conda/
    title: "conda.org: Rattler is moving to the conda organization (2024-10-01)"
---

# Summary
conda — the BSD-licensed, language-agnostic package and environment manager behind scientific Python — is technically healthier and more vendor-neutral than two years ago: conda 25.9.0 (Sept 2025) stopped hardcoding Anaconda's channels as defaults[^conda-sep-2025], a conda-pypi plugin and sharded repodata shipped[^conda-roadmap-q1-2026], and conda 26.10 (Oct 2026) is scheduled to make the Rust-based Rattler solver the default[^conda-sep-2026]. The *brand* damage came from Anaconda, Inc.'s commercial "defaults" channel: its March 2024 ToS change and 2024 legal demands on research institutions[^register-tos], then a July 2025 ToS-acceptance prompt that broke CI pipelines worldwide[^gh-runner-issue], pushed universities and HPC centres to Miniforge/conda-forge[^purdue-rcac]. Verdict: OSS stable (tool decoupling from its vendor), business growing for Anaconda despite reputational cost; the ecosystem's center of gravity moved to conda-forge and to Rust tooling (pixi/rattler) while uv competes for pure-Python users.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| pre-W24 | 2024-10-01 | Rattler (Rust conda libraries) moves into the conda GitHub organization under community governance[^rattler-to-conda] | OSS | + |
| W24 | 2025-07-15 | Anaconda pushes ToS acceptance via conda-anaconda-tos; `CondaToSNonInteractiveError` breaks CI (GitHub runners, scikit-learn); fix 0.2.1 on 2025-07-17[^tos-plugin][^gh-runner-issue][^sklearn-ci-issue] | Business | − |
| W24 | 2025-09 | Universities' HPC centres publish "conda vs Anaconda" guidance steering users to Miniforge[^purdue-rcac] | Business | − |
| W12 | 2025-10-01 | conda 25.9.0 removes hardcoded Anaconda default channels from the conda source[^conda-sep-2025] | OSS | + |
| W9 | 2026-01-29 | Q1 2026 roadmap: sharded repodata beta (~10× faster metadata), conda-pypi plugin, native lockfiles[^conda-roadmap-q1-2026] | OSS | + |
| W3 | 2026-10-01/02 | conda 26.9.0/26.9.1; Rattler to become default solver in 26.10; automatic pip install deprecated[^conda-sep-2026][^conda-gh] | OSS | + |

# OSS successes
- Vendor neutrality: Anaconda's channels no longer hardcoded (25.9.0)[^conda-sep-2025]; Rattler under conda-org governance[^rattler-to-conda].
- Performance and modernisation: sharded repodata (~10× faster metadata fetching, ~90% less bandwidth), conda-pypi, lockfile work[^conda-roadmap-q1-2026]; Rattler solver default planned for 26.10[^conda-sep-2026].
- Regular monthly CalVer releases (26.1 → 26.9) with Windows ARM64 launchers[^conda-sep-2026][^conda-gh].

# OSS failures / risks
- The "conda = Anaconda" confusion made the free tool collateral damage of ToS enforcement; many institutions block Anaconda/Miniconda installers[^purdue-rcac].
- Pure-Python users increasingly choose uv (see [uv](/projects/devtools-languages/uv.md)); conda's niche is compiled, multi-language stacks.

# Business successes
- The defaults channel remains a large paid enterprise asset for [Anaconda](/organizations/anaconda.md) (ARR >$150M in July 2025, see org file).

# Business failures / risks
- Enforcement tactics — legal demand letters and back-billing threats to non-profit research institutions such as Mass General Brigham[^register-tos] — and the July 2025 CI breakage[^gh-runner-issue] cost goodwill; Anaconda later apologized for unclear communication and restated academic exemptions[^anaconda-academia].

# By window
## W3
- conda 26.7.x–26.9.1 shipped; Rattler-default-solver release (26.10) announced[^conda-sep-2026][^conda-gh].
## W6
- No notable events found beyond routine monthly releases (26.5/26.7)[^conda-gh].
## W9
- Q1 roadmap: sharded repodata, conda-pypi, lockfiles[^conda-roadmap-q1-2026].
## W12
- conda 25.9.0 drops hardcoded Anaconda channels[^conda-sep-2025].
## W24
- (Just before the window, 2024-10-01: Rattler joined the conda org[^rattler-to-conda].) July 2025 ToS prompt breaks CI[^gh-runner-issue]; HPC centres migrate to Miniforge[^purdue-rcac].

# Lessons
- When a commercial vendor's paid channel is the default in a community tool, every licensing change becomes a community crisis; un-hardcoding the vendor was the structural fix.
- Monetizing a distribution channel via ToS enforcement works financially but pushes the academic base to free mirrors (conda-forge).
- Rust rewrites (Rattler) from a second company (prefix.dev) revitalized a slow-moving incumbent.

# Related
- [/organizations/anaconda.md](/organizations/anaconda.md), [/organizations/prefix-dev.md](/organizations/prefix-dev.md)
- [/projects/scientific-computing/conda-forge.md](/projects/scientific-computing/conda-forge.md), [/projects/scientific-computing/pixi-mamba.md](/projects/scientific-computing/pixi-mamba.md)
- [/projects/devtools-languages/uv.md](/projects/devtools-languages/uv.md), [/events/2025-07-anaconda-tos-prompt-breaks-ci.md](/events/2025-07-anaconda-tos-prompt-breaks-ci.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^conda-gh]: https://github.com/conda/conda
[^conda-sep-2025]: https://conda.org/blog/2025-10-01-september-releases/
[^conda-roadmap-q1-2026]: https://conda.org/blog/conda-roadmap-q1-2026/
[^conda-sep-2026]: https://conda.org/blog/2026-10-02-september-releases/
[^register-tos]: https://www.theregister.com/2024/08/08/anaconda_puts_the_squeeze_on/
[^anaconda-academia]: https://www.anaconda.com/blog/update-on-anacondas-terms-of-service-for-academia-and-research
[^tos-plugin]: https://www.anaconda.com/blog/conda-anaconda-tos-plugin
[^gh-runner-issue]: https://github.com/actions/runner-images/issues/12641
[^sklearn-ci-issue]: https://github.com/scikit-learn/scikit-learn/issues/31773
[^purdue-rcac]: https://docs.rcac.purdue.edu/blog/2025/09/24/conda-anaconda/
[^rattler-to-conda]: https://conda.org/blog/2024-10-01-rattler-to-conda/
