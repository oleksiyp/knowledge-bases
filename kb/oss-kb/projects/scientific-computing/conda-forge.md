---
type: OSS Project
title: conda-forge
description: The volunteer-run community channel that builds ~25k conda packages; crossed 1B monthly downloads in 2025 and became the default for academia after Anaconda's ToS enforcement, surviving a critical upload-token exposure (CVE-2025-31484) with no known compromise.
resource: https://conda-forge.org
tags: [package-repository, conda, scientific-computing, community, bsd-3-clause, numfocus, supply-chain]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause (infrastructure/recipes; packages carry upstream licenses)"]
governance: community
steward: conda-forge core team (NumFOCUS fiscally sponsored since 2018)
backing_orgs: [organizations/numfocus, organizations/prefix-dev, organizations/anaconda]
metrics:
  github_repositories: { value: 25378, as_of: 2025-04-11, note: "public repos in the conda-forge GitHub org (mostly feedstocks)" }
  monthly_downloads: { value: 1000000000, as_of: 2025-04-11, note: "first month above 1B" }
  total_downloads: { value: 27000000000, as_of: 2025-04-11, note: "almost 27B" }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cf-ten-years
    resource: https://conda-forge.org/blog/2025/04/11/ten-years-of-conda-forge/
    title: "conda-forge: Ten years of conda-forge! (2025-04-11)"
  - id: cf-cve
    resource: https://conda-forge.org/blog/2025/04/02/security-incident-with-package-uploads/
    title: "conda-forge: Security Incident with Package Uploads (CVE-2025-31484) (2025-04-02)"
  - id: ostif-bug
    resource: https://7asecurity.com/blog/2026/03/7asecurity-ostif-bug-of-the-year-award-2025/
    title: "7ASecurity: OSTIF 2025 Bug of the Year award"
  - id: cf-archive
    resource: https://conda-forge.org/news/archive/
    title: conda-forge news archive
  - id: cf-py314
    resource: https://conda-forge.org/blog/2025/10/09/python-314/
    title: "conda-forge: Python 3.14 is already usable on conda-forge (2025-10-09)"
  - id: cf-qt6
    resource: https://conda-forge.org/blog/2026/07/01/qt6-status-in-conda-forge/
    title: "conda-forge: Qt6 status in conda-forge (2026-07-01)"
  - id: cf-py310
    resource: https://conda-forge.org/news/2026/08/31/python-3-10/
    title: "conda-forge: Dropping Python 3.10 support (2026-08-31)"
  - id: conda-meetings
    resource: https://conda.org/blog/2025-12-22-new-meetings-schedule/
    title: "conda.org: New community meetings schedule for 2026"
  - id: purdue-rcac
    resource: https://docs.rcac.purdue.edu/blog/2025/09/24/conda-anaconda/
    title: "Purdue RCAC: Regarding Conda versus Anaconda (2025-09-24)"
  - id: numfocus-cf
    resource: https://numfocus.org/blog/conda-forge-joins-numfocus-sponsored-projects
    title: "NumFOCUS: Conda-forge joins NumFOCUS Sponsored Projects (2018)"
  - id: prefix-securing
    resource: https://prefix.dev/blog
    title: "prefix.dev blog (Securing the Conda-Forge Supply Chain 2026-04-21; Rolling out repodata v3 2026-07-16)"
---

# Summary
conda-forge is the clear winner of the conda ecosystem's last two years: at its 10th anniversary (April 2025) it had ~25k repositories, passed 1 billion monthly downloads for the first time and had served almost 27 billion downloads in total[^cf-ten-years]. Anaconda's commercial ToS enforcement made the free, community-run channel (a NumFOCUS fiscally sponsored project since 2018[^numfocus-cf]; installed via Miniforge) the institutional default for universities and HPC centres[^purdue-rcac]. Its main scare was CVE-2025-31484 — the channel's anaconda.org upload token exposed to all feedstock maintainers from ~2025-02-10 to 2025-04-01 — found by an OSTIF-funded audit and closed within 40 minutes, with no compromised packages found[^cf-cve]. Verdict: thriving community infrastructure, but run largely by volunteers with CI cost pressure (it dropped Python 3.10 six weeks before EOL to save CI capacity)[^cf-py310].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-04/08 | Moves chat to Zulip; migrates to unique feedstock tokens per provider[^cf-archive] | OSS | + |
| W24 | 2025-04-01/02 | CVE-2025-31484 (CVSS 9.3): upload token exposed ~7 weeks; disabled 40 min after OSTIF report; no compromise found[^cf-cve] | OSS | − |
| W24 | 2025-04-11 | 10th anniversary: >1B monthly downloads, ~27B total[^cf-ten-years] | OSS | + |
| W24 | 2025-05-08 | Governance document moved to conda-forge/governance repo[^cf-archive] | OSS | + |
| W12 | 2025-10-09 | Python 3.14 "usable, not just available" days after release[^cf-py314] | OSS | + |
| W12 | 2025-10-15 | Discourse forum made read-only (Zulip consolidation)[^cf-archive] | OSS | 0 |
| W9 | 2026-01 | conda-forge core calls merge with conda community calls[^conda-meetings] | OSS | + |
| W9 | 2026-03-08 | GitHub-hosted Actions runners for conda-forge[^cf-archive] | OSS | + |
| W9 | 2026-03 | CVE-2025-31484 finder wins OSTIF 2025 Bug of the Year[^ostif-bug] | OSS | 0 |
| W6 | 2026-04-21 | prefix.dev publishes conda-forge supply-chain hardening work[^prefix-securing] | OSS | + |
| W6 | 2026-07-01 | Qt6 now first-class (PyQt6 Feb 2026, qt6-webengine May 2026)[^cf-qt6] | OSS | + |
| W3 | 2026-08-06 | Default compilers move to GCC 15 / Clang 21[^cf-archive] | OSS | + |
| W3 | 2026-08-31 | Drops Python 3.10 from build matrix ahead of 3.15 to save CI[^cf-py310] | OSS | 0 |

# OSS successes
- Scale: >1B monthly downloads (2025)[^cf-ten-years]; fast Python 3.14 migration[^cf-py314]; Qt6 flip done[^cf-qt6].
- Became the neutral default for academia after Anaconda ToS enforcement[^purdue-rcac].
- Security posture improved after independent audit (per-provider tokens, incident response in 40 min)[^cf-cve][^cf-archive].

# OSS failures / risks
- CVE-2025-31484 showed a single infra misconfiguration could have let any of thousands of maintainers push to the whole channel[^cf-cve].
- CI capacity constraints force early drops of Python versions[^cf-py310]; dependence on donated CI and anaconda.org hosting.

# Business successes
- n/a (community project). Indirectly fuels prefix.dev (channel hosting, pixi) — see [prefix.dev](/organizations/prefix-dev.md).

# Business failures / risks
- n/a. Hosting still on Anaconda's anaconda.org, a dependency on a commercial actor[^cf-cve].

# By window
## W3
- GCC 15/Clang 21 defaults; Python 3.10 dropped[^cf-archive][^cf-py310].
## W6
- Supply-chain hardening work with prefix.dev[^prefix-securing]; Qt6 declared first-class (2026-07-01)[^cf-qt6].
## W9
- Joint calls with conda; GitHub-hosted runners[^conda-meetings][^cf-archive].
## W12
- Python 3.14 day-one usability; Discourse retired[^cf-py314][^cf-archive].
## W24
- CVE-2025-31484; 10-year milestone and 1B monthly downloads; governance repo[^cf-cve][^cf-ten-years][^cf-archive].

# Lessons
- When a vendor monetizes a distribution channel, the community mirror wins the users.
- Externally funded audits (OSTIF) catch infra misconfigurations volunteers miss.
- Volunteer build farms are compute-bound; CI sponsorship is the real sustainability lever.

# Related
- [/projects/scientific-computing/conda.md](/projects/scientific-computing/conda.md), [/projects/scientific-computing/pixi-mamba.md](/projects/scientific-computing/pixi-mamba.md)
- [/organizations/numfocus.md](/organizations/numfocus.md), [/organizations/anaconda.md](/organizations/anaconda.md), [/organizations/prefix-dev.md](/organizations/prefix-dev.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^cf-ten-years]: https://conda-forge.org/blog/2025/04/11/ten-years-of-conda-forge/
[^cf-cve]: https://conda-forge.org/blog/2025/04/02/security-incident-with-package-uploads/
[^ostif-bug]: https://7asecurity.com/blog/2026/03/7asecurity-ostif-bug-of-the-year-award-2025/
[^cf-archive]: https://conda-forge.org/news/archive/
[^cf-py314]: https://conda-forge.org/blog/2025/10/09/python-314/
[^cf-qt6]: https://conda-forge.org/blog/2026/07/01/qt6-status-in-conda-forge/
[^cf-py310]: https://conda-forge.org/news/2026/08/31/python-3-10/
[^conda-meetings]: https://conda.org/blog/2025-12-22-new-meetings-schedule/
[^purdue-rcac]: https://docs.rcac.purdue.edu/blog/2025/09/24/conda-anaconda/
[^prefix-securing]: https://prefix.dev/blog
[^numfocus-cf]: https://numfocus.org/blog/conda-forge-joins-numfocus-sponsored-projects
