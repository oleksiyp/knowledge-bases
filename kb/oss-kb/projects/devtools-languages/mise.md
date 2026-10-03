---
type: OSS Project
title: mise (mise-en-place)
description: MIT-licensed Rust polyglot tool-version manager, env manager and task runner (successor to asdf/rtx) by Jeff Dickey (jdx); a fast-growing one-maintainer success that in 2026 turned into a sponsored full-time job, with ex-GitHub CEO Thomas Dohmke's startup Entire as title sponsor and Omarchy's Omacom Foundation as premier sponsor.
resource: https://github.com/jdx/mise
tags: [developer-environment, version-manager, task-runner, rust, mit, solo-maintainer, sponsorship]
domain: devtools-languages
license: MIT
license_history: ["MIT (2023-, as rtx; renamed mise Jan 2024)"]
governance: community
steward: Jeff Dickey (jdx), sponsored by Entire
backing_orgs: []
metrics:
  github_stars: { value: 34540, as_of: 2026-10-03 }
  homebrew_rank: { value: "10th most downloaded Homebrew formula", as_of: 2026-04-17, note: "self-reported by jdx" }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:16:50Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mise-gh
    resource: https://github.com/jdx/mise
    title: jdx/mise GitHub repository (stars via GitHub API, 2026-10-03)
  - id: jdx-fulltime
    resource: https://jdx.dev/posts/2026-04-17-going-full-time-on-open-source/
    title: "jdx.dev: Going Full Time on Open Source (2026-04-17)"
  - id: jdx-sponsors
    resource: https://jdx.dev/sponsors.html
    title: "jdx.dev: Sponsors"
  - id: omarchy-mise
    resource: https://omarchy.org/news/2026/08/omacom-foundation-to-be-premier-mise-sponsor/
    title: "Omarchy News: Omacom Foundation to be premier mise sponsor (2026-08-25)"
  - id: mise-2026
    resource: https://github.com/jdx/mise/discussions/7727
    title: "mise-en-place Welcomes 2026 (jdx/mise Discussion #7727)"
  - id: rcp-entire
    resource: https://rcpmag.com/articles/2026/02/12/ex-github-ceo-thomas-dohmke-unveils-entire.aspx
    title: "Redmond Channel Partner: Ex-GitHub CEO Thomas Dohmke Unveils Entire, a $60M Startup"
---

# Summary
mise is the clearest "solo maintainer breaks out" story in developer tooling: a Rust rewrite of the asdf model that also manages environment variables and tasks, it reached ~34.5k GitHub stars and, by its author's count, became the 10th most-downloaded Homebrew formula (installed by ~1% of Homebrew users).[^mise-gh][^jdx-fulltime] In April 2026 Jeff Dickey (jdx) left Figma to work on it full time; before that, the project earned roughly $100/month from docs ads and $500/month from GitHub Sponsors.[^jdx-fulltime] His work is now underwritten by Entire — the AI-code-governance startup ex-GitHub CEO Thomas Dohmke launched with a $60M seed in February 2026 — as title sponsor/employer, plus Omacom Foundation (DHH's Omarchy Linux, which ships mise) as premier sponsor from August 2026.[^jdx-sponsors][^rcp-entire][^omarchy-mise] In 2026 mise added monorepo task support and S3, Forgejo and Conda backends.[^mise-2026] Verdict: thriving; bus factor remains the risk.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-01 | "mise welcomes 2026": monorepo tasks, S3/Forgejo/Conda backends [^mise-2026] | OSS | + |
| W9 | 2026-02 | Entire (Dohmke) launches with $60M seed; later becomes mise's title sponsor [^rcp-entire][^jdx-sponsors] | Business | + |
| W6 | 2026-04-17 | jdx leaves Figma to go full time on mise and related tools [^jdx-fulltime] | Business | + |
| W3 | 2026-08-25 | Omacom Foundation (Omarchy) becomes premier sponsor; mise saw +24% traffic after Omarchy launch [^omarchy-mise] | Business | + |

# OSS successes
- Explosive organic adoption as the default polyglot version manager, displacing asdf/nvm/pyenv for many teams.[^jdx-fulltime][^mise-gh]
- Expanding scope (tasks, monorepos, agent-CLI management) while keeping a fast release cadence.[^mise-2026][^omarchy-mise]

# OSS failures / risks
- Effectively a single-maintainer project (jdx also maintains aube, fnox, hk, pitchfork).[^jdx-sponsors]

# Business successes
- From ~$600/month to a sponsored full-time role in under a year; sponsorship explicitly "not roadmap control".[^jdx-fulltime][^jdx-sponsors]

# Business failures / risks
- Dependence on one title sponsor, itself an early-stage startup.[^rcp-entire]

# By window
## W3
- Omacom Foundation premier sponsorship (2026-08-25).[^omarchy-mise]
## W6
- jdx goes full time (2026-04-17).[^jdx-fulltime]
## W9
- Monorepo tasks and new backends; Entire launches.[^mise-2026][^rcp-entire]
## W12
- No notable events found.
## W24
- Continued rapid growth; no single notable event found.

# Lessons
- AI-era startups (Entire) and opinionated distros (Omarchy) are a new class of sponsor for critical solo-maintained tools.
- Homebrew-scale adoption can coexist with near-zero income until someone deliberately asks for money.

# Related
- [Homebrew](/projects/devtools-languages/homebrew.md)
- [uv](/projects/devtools-languages/uv.md)
- [Pixi](/projects/devtools-languages/pixi.md)
- [GitHub](/projects/devtools-languages/github.md) — Entire founder Thomas Dohmke was GitHub CEO until 2025

[^mise-gh]: jdx/mise GitHub repository
[^jdx-fulltime]: jdx.dev: Going Full Time on Open Source
[^jdx-sponsors]: jdx.dev: Sponsors
[^omarchy-mise]: Omarchy News: Omacom Foundation premier mise sponsor
[^mise-2026]: mise-en-place Welcomes 2026
[^rcp-entire]: RCP: Ex-GitHub CEO Thomas Dohmke Unveils Entire
