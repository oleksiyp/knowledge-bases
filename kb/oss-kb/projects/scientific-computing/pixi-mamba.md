---
type: OSS Project
title: mamba / micromamba, Rattler and pixi (fast conda tooling)
description: The fast, non-Anaconda conda clients — QuantStack's C++ mamba/micromamba (2.x line) and prefix.dev's Rust stack (Rattler, rattler-build, pixi); pixi shipped ~50 releases in two years, added Pixi Build, a GUI and channel hosting, and Rattler is about to become conda's default solver.
resource: https://github.com/prefix-dev/pixi
tags: [package-manager, conda, rust, cpp, scientific-computing, bsd-3-clause, vc-backed, robotics]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause (pixi, rattler, mamba — unchanged)"]
governance: company-led-open-core
steward: prefix.dev GmbH (pixi, rattler-build); conda organization (Rattler, since 2024-10); mamba-org / QuantStack (mamba)
backing_orgs: [organizations/prefix-dev]
metrics:
  pixi_github_stars: { value: 7819, as_of: 2026-10-03 }
  mamba_github_stars: { value: 8102, as_of: 2026-10-03 }
  rattler_github_stars: { value: 461, as_of: 2026-10-03 }
  pixi_latest_release: { value: "v0.81.0", as_of: 2026-09-15, note: "v0.32 in Oct 2024" }
  mamba_latest_release: { value: "2.9.0", as_of: 2026-08-07 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pixi-gh
    resource: https://github.com/prefix-dev/pixi/releases
    title: pixi GitHub releases (v0.32 Oct 2024 → v0.81.0 2026-09-15)
    last_modified: 2026-09-15T00:00:00Z
  - id: mamba-gh
    resource: https://github.com/mamba-org/mamba/releases
    title: mamba GitHub releases (2.1.0 2025-04 → 2.9.0 2026-08-07)
  - id: mamba2
    resource: https://medium.com/@QuantStack/introducing-mamba-2-0-0e8d5c6d1d0c
    title: "QuantStack: Introducing Mamba 2.0"
  - id: rattler-to-conda
    resource: https://conda.org/blog/2024-10-01-rattler-to-conda/
    title: "conda.org: Rattler is moving to the conda organization (2024-10-01)"
  - id: conda-sep-2026
    resource: https://conda.org/blog/2026-10-02-september-releases/
    title: "conda.org: August and September 2026 Releases (Rattler default solver in conda 26.10)"
  - id: prefix-blog
    resource: https://prefix.dev/blog
    title: "prefix.dev blog index (Pixi GUI 2026-02-03; Channel Hosting 2026-04-16; Securing conda-forge 2026-04-21; Lockfile v7 2026-05-13; repodata v3 2026-07-16; Pixi Audit beta 2026-09-24)"
  - id: pixi-build
    resource: https://prefix.dev/blog/pixi-build
    title: "prefix.dev: Introducing Pixi Build (2026-07-02)"
  - id: pixi-robotics
    resource: https://prefix.dev/blog/reproducible-package-management-for-robotics
    title: "prefix.dev: Pixi — modern package management for Robotics (2025-10-24)"
  - id: prefix-vendor-lockin
    resource: https://prefix.dev/blog/towards_a_vendor_lock_in_free_conda_experience
    title: "prefix.dev: Towards a Vendor-Lock-In-Free conda Experience"
---

# Summary
The conda ecosystem's speed and innovation now come from outside Anaconda. QuantStack's mamba 2.0 rewrote mamba as a standalone C++ tool sharing micromamba's code (first RC July 2024)[^mamba2] and kept shipping (2.1 → 2.9.0, Aug 2026)[^mamba-gh]. prefix.dev — founded by mamba creator Wolf Vollprecht — built a Rust stack: the Rattler libraries (moved into the conda org under community governance in Oct 2024)[^rattler-to-conda], rattler-build, and the pixi project/environment manager, which went from v0.32 (Oct 2024) to v0.81 (Sept 2026)[^pixi-gh] and added Pixi Build, a GUI, a security-audit beta and paid channel hosting[^prefix-blog][^pixi-build]. Rattler becoming conda's default solver in conda 26.10 is the clearest sign this stack won the technical argument[^conda-sep-2026]. Verdict: growing; pixi is the conda-native answer to uv, popular in robotics (ROS) and research software engineering[^pixi-robotics][^prefix-blog].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| pre-W24 | 2024-10-01 | Rattler joins the conda organization[^rattler-to-conda] | OSS | + |
| W24 | 2025-04-09 | mamba 2.1.0 (2.x line continues; 1.x security-only)[^mamba-gh][^mamba2] | OSS | + |
| W12 | 2025-10-24 | Pixi pitched for robotics/ROS environments[^pixi-robotics] | OSS | + |
| W9 | 2026-02-03 | Pixi GUI introduced; UW eScience SSEC adoption case study[^prefix-blog] | OSS | + |
| W6 | 2026-04-16 | Channel hosting on prefix.dev generally available (commercial)[^prefix-blog] | Business | + |
| W6 | 2026-04-21 | "Securing the conda-forge supply chain" work[^prefix-blog] | OSS | + |
| W6 | 2026-05-13 | Lockfile v7[^prefix-blog] | OSS | + |
| W6 | 2026-07-02 | Pixi Build introduced[^pixi-build] | OSS | + |
| W3 | 2026-07-16 | repodata v3 rollout (extras, conditional deps) for conda-forge[^prefix-blog] | OSS | + |
| W3 | 2026-08-07 | mamba 2.9.0[^mamba-gh] | OSS | + |
| W3 | 2026-09-24 | Pixi Audit beta (vulnerability scanning)[^prefix-blog] | OSS | + |
| W3 | 2026-10-02 | conda announces Rattler as default solver from 26.10[^conda-sep-2026] | OSS | + |

# OSS successes
- Rattler adopted by conda itself as default solver[^conda-sep-2026]; under neutral conda-org governance[^rattler-to-conda].
- pixi's very high release cadence (~50 minor versions in 2 years)[^pixi-gh] and expanding scope (build, GUI, audit, RISC-V)[^prefix-blog].
- mamba 2.x continues as the C++ client (micromamba used heavily in CI)[^mamba-gh].

# OSS failures / risks
- Fragmentation: conda, mamba, micromamba, pixi and uv overlap; pixi still pre-1.0 after 3 years[^pixi-gh].
- Dependence on a small VC-funded company for key infrastructure.

# Business successes
- prefix.dev's channel-hosting product went GA in April 2026[^prefix-blog]; seed-funded since 2022 (see [prefix.dev](/organizations/prefix-dev.md)).

# Business failures / risks
- No disclosed revenue or follow-on funding; competes with Anaconda (enterprise channels) and Astral/OpenAI's uv for mindshare.

# By window
## W3
- repodata v3, mamba 2.9.0, Pixi Audit beta, Rattler-default announcement[^prefix-blog][^mamba-gh][^conda-sep-2026].
## W6
- Channel hosting GA, conda-forge supply-chain work, lockfile v7, Pixi Build[^prefix-blog][^pixi-build].
## W9
- Pixi GUI; academic adoption case studies[^prefix-blog].
## W12
- Robotics positioning; mamba 2.4.0 (Nov 2025)[^pixi-robotics][^mamba-gh].
## W24
- mamba 2.1–2.3; pixi v0.32 → v0.5x[^mamba-gh][^pixi-gh].

# Lessons
- A Rust rewrite from a challenger can be absorbed upstream (Rattler → conda default) rather than forking the ecosystem.
- Donating core libraries to the community org (Rattler) and campaigning for a vendor-lock-in-free conda[^prefix-vendor-lockin] built trust that let them become defaults.
- The conda world's response to uv was pixi: project-centric lockfiles plus native (non-Python) packages.

# Related
- [/organizations/prefix-dev.md](/organizations/prefix-dev.md), [/organizations/anaconda.md](/organizations/anaconda.md)
- [/projects/scientific-computing/conda.md](/projects/scientific-computing/conda.md), [/projects/scientific-computing/conda-forge.md](/projects/scientific-computing/conda-forge.md)
- [/projects/devtools-languages/uv.md](/projects/devtools-languages/uv.md), [/organizations/astral.md](/organizations/astral.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^pixi-gh]: https://github.com/prefix-dev/pixi/releases
[^mamba-gh]: https://github.com/mamba-org/mamba/releases
[^mamba2]: https://medium.com/@QuantStack/introducing-mamba-2-0-0e8d5c6d1d0c
[^rattler-to-conda]: https://conda.org/blog/2024-10-01-rattler-to-conda/
[^conda-sep-2026]: https://conda.org/blog/2026-10-02-september-releases/
[^prefix-blog]: https://prefix.dev/blog
[^pixi-build]: https://prefix.dev/blog/pixi-build
[^pixi-robotics]: https://prefix.dev/blog/reproducible-package-management-for-robotics
[^prefix-vendor-lockin]: https://prefix.dev/blog/towards_a_vendor_lock_in_free_conda_experience
