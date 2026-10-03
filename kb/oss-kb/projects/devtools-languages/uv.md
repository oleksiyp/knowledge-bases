---
type: OSS Project
title: uv, Ruff and ty (Astral toolchain)
description: Astral's Rust-built Python toolchain — uv (package/project manager), Ruff (linter/formatter) and ty (type checker) — the biggest Python tooling success of the decade, whose VC-backed company was acquired by OpenAI in March 2026 before its pyx registry business got going.
resource: https://github.com/astral-sh/uv
tags: [python, package-manager, linter, type-checker, rust, acquired, openai, apache-2.0, mit]
domain: devtools-languages
license: "Apache-2.0 OR MIT"
license_history: ["uv: dual Apache-2.0/MIT (2024-)", "Ruff: MIT (2022-)", "ty: MIT (2025-)"]
governance: single-vendor
steward: OpenAI (via acquisition of Astral Software Inc.)
backing_orgs: [organizations/astral]
metrics:
  github_stars_uv: { value: 90379, as_of: 2026-10-03 }
  github_stars_ruff: { value: 49882, as_of: 2026-10-03 }
  github_stars_ty: { value: 19792, as_of: 2026-10-03 }
  uv_monthly_downloads: { value: 126000000, as_of: 2026-03-19 }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh-api
    resource: https://github.com/astral-sh
    title: Astral GitHub org (uv/ruff/ty stars via GitHub API, 2026-10-03)
  - id: astral-openai
    resource: https://astral.sh/blog/openai
    title: "Astral blog: Astral to join OpenAI"
    author: org:astral
  - id: willison-astral
    resource: https://simonwillison.net/2026/mar/19/openai-acquiring-astral/
    title: "Simon Willison: Thoughts on OpenAI acquiring Astral and uv/ruff/ty"
  - id: pydevtools-acq
    resource: https://pydevtools.com/blog/openai-acquires-astral/
    title: "pydevtools: OpenAI to Acquire Astral"
  - id: pydevtools-pyx
    resource: https://pydevtools.com/blog/astral-winds-down-pyx-open-sources-gpu-packaging/
    title: "pydevtools: Astral Shuts Down pyx, Open-Sources the Part That Mattered"
  - id: pyx-intro
    resource: https://astral.sh/blog/introducing-pyx
    title: "Astral blog: pyx, a Python-native package registry, now in Beta"
    author: org:astral
  - id: ty-beta
    resource: https://www.infoworld.com/article/4108979/python-type-checker-ty-now-in-beta.html
    title: "InfoWorld: Python type checker ty now in beta"
  - id: jetbrains-astral
    resource: https://blog.jetbrains.com/pycharm/2026/03/openai-acquires-astral-what-it-means-for-pycharm-users/
    title: "JetBrains blog: OpenAI acquires Astral — what it means for PyCharm users"
  - id: openai-astral
    resource: https://openai.com/index/openai-to-acquire-astral/
    title: "OpenAI: OpenAI to acquire Astral (2026-03-19; closing subject to regulatory approval)"
    author: org:openai
  - id: astral-releases
    resource: https://github.com/astral-sh/uv/releases
    title: "Astral GitHub releases for uv/ruff/ty (via GitHub API, checked 2026-10-03)"
  - id: astral-ty-beta
    resource: https://astral.sh/blog/ty
    title: "Astral blog: ty, an extremely fast Python type checker and LSP (beta, 2025-12-16)"
    author: org:astral
  - id: talkpython
    resource: https://talkpython.fm/episodes/show/552/astral-joins-openai
    title: "Talk Python #552: Astral joins OpenAI"
---

# Summary
uv is the breakout OSS success of the Python world: launched February 2024, it reached ~126M monthly downloads by March 2026 and 90k GitHub stars, with Ruff (50k stars) already the de-facto linter/formatter and ty (Rust type checker/LSP) in beta.[^willison-astral][^gh-api][^ty-beta] The company behind it, Astral, had raised a seed and Series A led by Accel and a Series B led by Andreessen Horowitz (the latter two first disclosed in the acquisition post; amounts never published) — and launched its first commercial product, the pyx registry, in August 2025.[^astral-openai][^willison-astral][^pyx-intro] On 2026-03-19 OpenAI agreed to acquire Astral, subject to regulatory approval; per Charlie Marsh on Talk Python (recorded 2026-06-02) the team had joined OpenAI's Codex group about a month earlier (i.e. ~early May 2026), and pyx was being wound down by June 2026, and its GPU-wheel indexing work was open-sourced.[^astral-openai][^openai-astral][^talkpython][^pydevtools-pyx] Verdict: OSS thriving; business "acquired" — a talent+tooling buy that mirrors Anthropic/Bun.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-13 | pyx private registry beta (Ramp, Intercom, fal as early partners) [^pyx-intro] | Business | + |
| W12 | 2025-12-16 | ty enters beta [^astral-ty-beta][^ty-beta] | OSS | + |
| W9 | 2026-03-19 | OpenAI agrees to acquire Astral; team to join Codex after closing (regulatory approval pending); price undisclosed [^astral-openai][^openai-astral] | Business | mixed |
| W6 | ~2026-05 | Deal closes; Astral team joins OpenAI Codex (approx., per Marsh on Talk Python) [^talkpython] | Business | mixed |
| W6 | ~2026-06 | pyx hosted service wound down; GPU indexes/prebuilt wheels to be open-sourced [^pydevtools-pyx][^talkpython] | Business/OSS | mixed |
| W3 | 2026-07 → 10 | uv 0.12.x (0.12.22 on 2026-10-02), Ruff 0.16.x and ty 0.0.84 (2026-09-24) keep shipping weekly; ty still pre-1.0, stable targeted for later 2026 [^astral-releases][^talkpython] | OSS | + |

# OSS successes
- Category-defining speed and UX: uv unified pip/pip-tools/virtualenv/pyenv/pipx workflows; adoption at 126M downloads/month.[^willison-astral]
- Ruff displaced flake8/black/isort in most new projects; ty extends the Rust approach to type checking.[^ty-beta]
- Post-acquisition, GPU packaging work (PyTorch/CUDA wheels) is being released openly instead of paywalled.[^pydevtools-pyx]

# OSS failures / risks
- Critical Python infrastructure now owned by an AI lab; community worries that priorities tilt toward Codex integration.[^pydevtools-acq][^jetbrains-astral]
- Mitigant: permissive licenses keep "fork and move on" viable.[^willison-astral]

# Business successes
- Exit for Accel/a16z; team (incl. prominent Rust engineers) retained inside OpenAI.[^willison-astral]

# Business failures / risks
- pyx, the first monetization attempt, never matured and was shut down.[^pydevtools-pyx]
- Reports that Astral was nearing the end of its runway with no revenue model (claimed by pydevtools; not confirmed by Astral or reputable press).[^pydevtools-acq]
- Acquisition price undisclosed; no formal closing announcement found. Corrected in pass 2: "closed in March 2026" (pydevtools) → closing ~early May 2026, inferred from Marsh's Talk Python remarks (recorded 2026-06-02).[^talkpython][^openai-astral]

# By window
## W3
- Continued weekly uv 0.12.x / Ruff 0.16.x releases; ty at 0.0.84 (2026-09-24), still pre-stable.[^astral-releases]
## W6
- Acquisition closes (~May 2026); pyx wind-down; GPU packaging to be open-sourced.[^talkpython][^pydevtools-pyx]
## W9
- OpenAI acquisition announced 2026-03-19.[^astral-openai]
## W12
- ty beta (2025-12-16).[^astral-ty-beta]
## W24
- pyx beta (2025-08-13); uv adoption surge throughout.[^pyx-intro]

# Lessons
- Spectacular OSS adoption does not equal a business: the registry/platform play came too late.
- AI labs now buy developer-tool companies whose products sit inside agent loops (Bun → Anthropic, Astral → OpenAI).
- Acquisition can paradoxically free OSS work from monetization pressure (pyx's GPU work released).

# Related
- [Astral](/organizations/astral.md)
- [OpenAI acquires Astral](/events/2026-03-openai-acquires-astral.md)
- [CPython](/projects/devtools-languages/cpython.md), [Bun](/projects/devtools-languages/bun.md)

[^gh-api]: Astral GitHub org (uv/ruff/ty stars via GitHub API, 2026-10-03) — https://github.com/astral-sh
[^astral-openai]: Astral blog: Astral to join OpenAI — https://astral.sh/blog/openai
[^willison-astral]: Simon Willison: Thoughts on OpenAI acquiring Astral and uv/ruff/ty — https://simonwillison.net/2026/mar/19/openai-acquiring-astral/
[^pydevtools-acq]: pydevtools: OpenAI to Acquire Astral — https://pydevtools.com/blog/openai-acquires-astral/
[^pydevtools-pyx]: pydevtools: Astral Shuts Down pyx, Open-Sources the Part That Mattered — https://pydevtools.com/blog/astral-winds-down-pyx-open-sources-gpu-packaging/
[^pyx-intro]: Astral blog: pyx, a Python-native package registry, now in Beta — https://astral.sh/blog/introducing-pyx
[^ty-beta]: InfoWorld: Python type checker ty now in beta — https://www.infoworld.com/article/4108979/python-type-checker-ty-now-in-beta.html
[^jetbrains-astral]: JetBrains blog: OpenAI acquires Astral — what it means for PyCharm users — https://blog.jetbrains.com/pycharm/2026/03/openai-acquires-astral-what-it-means-for-pycharm-users/
[^openai-astral]: OpenAI: OpenAI to acquire Astral — https://openai.com/index/openai-to-acquire-astral/
[^astral-releases]: Astral GitHub releases — https://github.com/astral-sh/uv/releases
[^astral-ty-beta]: Astral blog: ty — https://astral.sh/blog/ty
[^talkpython]: Talk Python #552: Astral joins OpenAI — https://talkpython.fm/episodes/show/552/astral-joins-openai
