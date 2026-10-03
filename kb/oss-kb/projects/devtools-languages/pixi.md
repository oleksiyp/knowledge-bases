---
type: OSS Project
title: Pixi (prefix.dev)
description: BSD-3-Clause Rust package/workflow manager built on the conda ecosystem by Berlin startup prefix.dev; growing steadily in robotics, scientific and AI/CUDA work (Pixi Build, lockfile v7, Pixi Audit in 2026) and monetizing via conda channel hosting (GA April 2026) and enterprise support — a quieter, conda-side counterpart to Astral's uv.
resource: https://github.com/prefix-dev/pixi
tags: [package-manager, conda, conda-forge, rust, bsd-3-clause, vc-backed, robotics, scientific-computing]
domain: devtools-languages
license: BSD-3-Clause
license_history: ["BSD-3-Clause (2023-)"]
governance: company-led-open-core
steward: prefix.dev GmbH
backing_orgs: []
metrics:
  github_stars: { value: 7819, as_of: 2026-10-03 }
  hosted_channels: { value: "600+", as_of: 2026-04-16, note: "self-reported" }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:16:50Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pixi-gh
    resource: https://github.com/prefix-dev/pixi
    title: prefix-dev/pixi GitHub repository (stars via GitHub API, 2026-10-03)
  - id: prefix-home
    resource: https://prefix.dev/
    title: prefix.dev homepage (products, customers)
    author: org:prefix-dev
  - id: prefix-blog
    resource: https://prefix.dev/blog
    title: The prefix.dev blog (2025–2026 index)
    author: org:prefix-dev
  - id: prefix-channels
    resource: https://prefix.dev/blog/welcome-channel-hosting-on-prefix-dev
    title: "prefix.dev: Channel Hosting on prefix.dev! (2026-04-16)"
    author: org:prefix-dev
  - id: pixi-build
    resource: https://prefix.dev/blog/pixi-build
    title: "prefix.dev: Introducing Pixi Build (2026-07-02)"
    author: org:prefix-dev
  - id: pixi-arxiv
    resource: https://arxiv.org/html/2511.04827v1
    title: "arXiv: Pixi — Unified Software Development and Distribution for Robotics and AI"
  - id: tracxn-prefix
    resource: https://tracxn.com/d/companies/prefix.dev/__kBqv-xjEWV03NAElKhzjqdNNvf2duQQhwioeDbUs1_w/funding-and-investors
    title: "Tracxn: prefix.dev funding and investors (aggregator)"
---

# Summary
Pixi is the conda world's answer to uv: a fast Rust tool (on prefix.dev's `rattler` libraries) that manages per-project, lockfile-based environments mixing conda-forge and PyPI packages across languages.[^pixi-gh][^prefix-home] Its niche — robotics (ROS), scientific computing and CUDA/AI stacks that need non-Python binaries — is one uv does not serve, and a 2025 arXiv paper documents its robotics/AI positioning.[^pixi-arxiv] 2026 was a heavy shipping year: Pixi GUI (Feb), RISC-V support (Apr), lockfile v7 and a new login flow (May), Pixi Build preview (2026-07-02), repodata v3 (Jul), CUDA packaging (Aug) and Pixi Audit beta (2026-09-24).[^prefix-blog][^pixi-build] Commercially, prefix.dev made conda channel hosting generally available on 2026-04-16 (600+ channels, a 19.6 TB conda-forge mirror) and sells security tooling and enterprise support to users such as Modular, AWS and QuantCo.[^prefix-channels][^prefix-home] Verdict: growing, though still pre-1.0 and far smaller than uv (~7.8k stars).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-24 | "Pixi: Modern package management for Robotics" push [^prefix-blog] | OSS | + |
| W9 | 2026-02-03 | Pixi GUI introduced [^prefix-blog] | OSS | + |
| W6 | 2026-04-16 | Channel hosting on prefix.dev GA (600+ channels) [^prefix-channels] | Business | + |
| W6 | 2026-04-21 | "Securing the conda-forge supply chain" initiative [^prefix-blog] | OSS | + |
| W6 | 2026-05-13 | Lockfile version 7 [^prefix-blog] | OSS | + |
| W3 | 2026-07-02 | Pixi Build introduced (preview; CPython, SciPy, Dask supported) [^pixi-build] | OSS | + |
| W3 | 2026-09-24 | Pixi Audit beta [^prefix-blog] | Business | + |

# OSS successes
- Fills the multi-language/binary gap uv leaves open; strong pull in robotics and research software engineering.[^pixi-arxiv][^prefix-blog]
- Rapid feature velocity and conda-forge supply-chain security work.[^prefix-blog]

# OSS failures / risks
- Still 0.x (0.7x releases in mid-2026); Pixi Build is opt-in preview with possible breaking changes.[^pixi-build]
- Overshadowed in mindshare by uv/Astral (now OpenAI-owned).

# Business successes
- Productized hosting/security/support around the open tools; named enterprise users.[^prefix-home][^prefix-channels]

# Business failures / risks
- Only a 2022 seed (Costanoa, 468 Capital; amount undisclosed) is known per aggregators; no 2025–26 round found.[^tracxn-prefix]

# By window
## W3
- Pixi Build (2026-07-02), repodata v3, CUDA packaging, Pixi Audit beta (2026-09-24).[^prefix-blog][^pixi-build]
## W6
- Channel hosting GA (2026-04-16), lockfile v7, new login flow.[^prefix-channels][^prefix-blog]
## W9
- Pixi GUI; Octoconda (GitHub releases → conda packages).[^prefix-blog]
## W12
- Robotics positioning; S3 publishing.[^prefix-blog]
## W24
- No single notable event found beyond steady releases.

# Lessons
- In package management, owning a niche uv does not cover (binary, multi-language, GPU stacks) is a viable strategy even against a dominant tool.
- Registry/channel hosting is the natural business for a package-manager startup — the same bet Astral made with pyx.

# Related
- [uv, Ruff and ty (Astral)](/projects/devtools-languages/uv.md)
- [mise](/projects/devtools-languages/mise.md)
- [CPython](/projects/devtools-languages/cpython.md)
- [Mojo](/projects/devtools-languages/mojo.md) — Modular is a named prefix.dev user
- [conda](/projects/scientific-computing/conda.md) — scientific-computing view of the conda ecosystem

[^pixi-gh]: prefix-dev/pixi GitHub repository
[^prefix-home]: prefix.dev homepage
[^prefix-blog]: The prefix.dev blog
[^prefix-channels]: prefix.dev: Channel Hosting on prefix.dev!
[^pixi-build]: prefix.dev: Introducing Pixi Build
[^pixi-arxiv]: arXiv: Pixi for Robotics and AI
[^tracxn-prefix]: Tracxn: prefix.dev funding
