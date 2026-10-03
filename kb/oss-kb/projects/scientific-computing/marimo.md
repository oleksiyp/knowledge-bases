---
type: OSS Project
title: marimo
description: "Reactive, git-friendly Python notebook stored as pure .py files; the breakout Jupyter challenger of the period (~23k stars, 1M+ monthly downloads) whose 8-person company was acquired by CoreWeave in Oct 2025 and now offers free GPU notebooks (molab)."
resource: https://github.com/marimo-team/marimo
tags: [notebooks, reactive, python, apache-2.0, acquired, ai-native]
domain: scientific-computing
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: single-vendor
steward: CoreWeave (via Marimo Inc.)
backing_orgs: [organizations/marimo]
metrics:
  github_stars: { value: 22996, as_of: 2026-10-03 }
  monthly_downloads: { value: "1M+", as_of: 2025-10-30, note: "per marimo blog" }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: marimo-gh
    resource: https://github.com/marimo-team/marimo
    title: marimo GitHub repository
    last_modified: 2026-10-03T00:00:00Z
  - id: pypi-marimo
    resource: https://pypi.org/project/marimo/
    title: "PyPI: marimo (0.10.0 2024-12-13 … 0.25.0 2026-09-23)"
  - id: marimo-seed
    resource: https://marimo.io/blog/seed-announcement
    title: "marimo: Announcing Marimo Inc. ($5M seed led by AIX Ventures)"
  - id: bdw-seed
    resource: https://www.hpcwire.com/bigdatawire/2024/11/21/marimo-emerges-from-stealth-to-debut-its-python-notebook/
    title: "BigDATAwire: Marimo emerges from stealth (2024-11-21)"
  - id: cw-pr
    resource: https://www.coreweave.com/news/coreweave-acquires-marimo-to-unify-the-generative-ai-developer-workflow
    title: "CoreWeave acquires Marimo (2025-10-30)"
    author: org:coreweave
  - id: marimo-cw
    resource: https://marimo.io/blog/joining-coreweave
    title: "marimo: Marimo is joining CoreWeave (2025-10-30)"
  - id: yahoo-cw
    resource: https://finance.yahoo.com/news/ai-mania-tanks-coreweave-core-185348869.html
    title: "Yahoo Finance: CoreWeave's Core Scientific deal fails — it buys Python notebook Marimo"
  - id: molab
    resource: https://marimo.io/blog/reintroducing-molab
    title: "marimo: molab, now with GPUs! (2026-06-01)"
  - id: marimo-blog
    resource: https://marimo.io/blog
    title: marimo blog (Launch Week 2, Sept 2026)
---

# Summary
marimo is the clearest OSS success among new notebooks: a reactive Python notebook whose files are plain, diffable Python scripts that can also run as apps. It went from a stealth launch with a $5M seed (Nov 2024) to ~23k GitHub stars and 1M+ monthly downloads, and on 2025-10-30 CoreWeave acquired Marimo Inc. (terms undisclosed), pledging the notebook stays "freely available and permissively-licensed"[^marimo-seed][^cw-pr][^marimo-cw][^marimo-gh]. Since then CoreWeave has used it as a developer on-ramp: molab, a hosted marimo service, got free NVIDIA RTX Pro 6000 GPUs in June 2026[^molab]. Verdict: OSS thriving; business outcome is an early acqui-hire-style exit into an AI-cloud vendor.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-19/21 | Marimo Inc. emerges with $5M seed led by AIX Ventures (angels incl. Jeff Dean, Clem Delangue, Wes McKinney, Charlie Marsh)[^marimo-seed][^bdw-seed] | Business | + |
| W24 | 2024-12 → 2025-09 | 0.10 → 0.16 releases (roughly monthly minors)[^pypi-marimo] | OSS | + |
| W12 | 2025-10-30 | CoreWeave agrees to acquire Marimo; OSS license commitment[^cw-pr][^marimo-cw] | Business | ± |
| W9 | 2026-01-08 → 2026-03-31 | 0.19 → 0.22[^pypi-marimo] | OSS | + |
| W6 | 2026-06-01 | molab relaunched on CoreWeave Cloud with free GPUs and "marimo pair" for Claude Code/Codex/OpenCode[^molab] | OSS/Business | + |
| W3 | 2026-08-17 / 2026-09-23 | 0.24.0, 0.25.0; Launch Week 2 (marimohub self-hosting, Pixi sandboxes)[^pypi-marimo][^marimo-blog] | OSS | + |

# OSS successes
- Stars grew from 16.6k (Oct 2025, per marimo) to ~23k (Oct 2026)[^marimo-cw][^marimo-gh]; ~200 contributors by Oct 2025[^marimo-cw].
- Pure-Python file format solves Jupyter's git-diff and hidden-state problems; agent integration ("marimo pair") positions it as an AI-agent workspace[^molab].
- Sustained fast cadence: 16 minor versions between Oct 2024 and Sept 2026[^pypi-marimo].

# OSS failures / risks
- Single-vendor governance now owned by a GPU cloud whose priorities may shift; no foundation or neutral governance.
- Still pre-1.0 (0.25.x) after three years.

# Business successes
- Fast exit: seed to acquisition in ~11 months; Morgan Stanley advised Marimo[^cw-pr].
- CoreWeave funds a free GPU tier, a subsidy no standalone startup could offer[^molab].

# Business failures / risks
- Independent monetization was never proven; the business value is as a funnel for CoreWeave compute. CoreWeave announced the deal the same day its Core Scientific acquisition failed, and press framed it as a small consolation deal[^yahoo-cw].

# By window
## W3
- 0.24/0.25 releases; Launch Week 2 with marimohub (self-hostable notebook hub) and Pixi sandboxes[^marimo-blog][^pypi-marimo].
## W6
- molab GPU public preview (June 1)[^molab].
## W9
- 0.19–0.23 releases[^pypi-marimo].
## W12
- CoreWeave acquisition (Oct 30, 2025)[^cw-pr].
## W24
- Seed round and stealth exit (Nov 2024)[^marimo-seed]; rapid 0.x releases.

# Lessons
- A better file format plus reactivity was enough to win mindshare against an entrenched standard within two years.
- AI clouds buy developer tools as demand funnels; early-stage OSS tool companies may exit before building revenue.

# Related
- [/organizations/marimo.md](/organizations/marimo.md), [/events/2025-10-coreweave-acquires-marimo.md](/events/2025-10-coreweave-acquires-marimo.md)
- [/projects/scientific-computing/jupyter.md](/projects/scientific-computing/jupyter.md), [/projects/scientific-computing/deepnote.md](/projects/scientific-computing/deepnote.md)
- [/projects/devtools-languages/uv.md](/projects/devtools-languages/uv.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^marimo-gh]: https://github.com/marimo-team/marimo
[^pypi-marimo]: https://pypi.org/project/marimo/
[^marimo-seed]: https://marimo.io/blog/seed-announcement
[^bdw-seed]: https://www.hpcwire.com/bigdatawire/2024/11/21/marimo-emerges-from-stealth-to-debut-its-python-notebook/
[^cw-pr]: https://www.coreweave.com/news/coreweave-acquires-marimo-to-unify-the-generative-ai-developer-workflow
[^marimo-cw]: https://marimo.io/blog/joining-coreweave
[^yahoo-cw]: https://finance.yahoo.com/news/ai-mania-tanks-coreweave-core-185348869.html
[^molab]: https://marimo.io/blog/reintroducing-molab
[^marimo-blog]: https://marimo.io/blog
