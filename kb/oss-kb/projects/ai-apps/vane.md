---
type: OSS Project
title: Vane (formerly Perplexica) and Morphic
description: "The leading open-source Perplexity clones: Perplexica (MIT, ~37k stars), renamed Vane in March 2026 and broadened into a general answer engine, and Morphic (Apache-2.0, ~9k stars) — stable single-maintainer projects with no business behind them."
resource: https://github.com/ItzCrazyKns/Vane
tags: [ai-apps, ai-search, answer-engine, mit, apache-2.0, single-maintainer]
domain: ai-apps
license: "MIT (Vane/Perplexica); Apache-2.0 (Morphic)"
license_history: ["MIT (Perplexica 2024-)", "Renamed Vane, licence unchanged (2026-03)"]
governance: community
steward: "ItzCrazyKns (Vane); Yoshiki Miura / miurla (Morphic)"
backing_orgs: []
metrics:
  github_stars: { value: 36986, as_of: 2026-10-03 }
  latest_release: { value: "v1.12.2 (2026-04-10)", as_of: 2026-10-03 }
  morphic_github_stars: { value: 9151, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: vane-gh
    resource: https://github.com/ItzCrazyKns/Vane
    title: Vane (formerly Perplexica) GitHub repository (GitHub API, 2026-10-03)
  - id: vane-korben
    resource: https://korben.info/en/vane-perplexica-new-name.html
    title: "Korben: Vane — Perplexica gets a new name and a new dimension"
  - id: vane-guide
    resource: https://joshuaopolko.com/perplexica-self-hosted-guide/
    title: "Perplexica (now Vane) self-hosted guide 2026"
  - id: morphic-gh
    resource: https://github.com/miurla/morphic
    title: Morphic GitHub repository (GitHub API, 2026-10-03)
---

# Summary
Perplexica, a SearxNG-backed answer engine with cited answers, became the most popular self-hosted Perplexity alternative (~37k stars)[^vane-gh]. In March 2026 (commit of 9 March) its maintainer renamed it **Vane**, broadened the scope to a general answering engine and added Anthropic, Groq and Gemini providers[^vane-korben][^vane-guide]. Last release v1.12.2 (2026-04-10); commits continue to Sep 2026[^vane-gh]. **Morphic** (Apache-2.0, Next.js + Vercel AI SDK) is the smaller generative-UI alternative, still actively pushed[^morphic-gh]. Verdict: stable hobbyist-scale OSS, no business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12-27 | Perplexica v1.12.0[^vane-gh] | OSS | + |
| W9 | 2026-03-09 | Renamed Vane; multi-provider support[^vane-korben][^vane-guide] | OSS | ± |
| W6 | 2026-04-10 | v1.12.2[^vane-gh] | OSS | + |
| W3 | 2026-09-30 | Morphic still active[^morphic-gh] | OSS | + |

# OSS successes
- Popular, permissively licensed, easy to self-host[^vane-gh][^morphic-gh].
# OSS failures / risks
- Single maintainers; rename may fragment discoverability.
# Business successes
- n/a.
# Business failures / risks
- n/a.

# By window
## W3
- No release; ongoing commits[^vane-gh].
## W6
- v1.12.2[^vane-gh].
## W9
- Rename to Vane[^vane-korben].
## W12
- v1.12.0[^vane-gh].
## W24
- Growth as the go-to Perplexity clone.

# Lessons
- "Open clone of hot SaaS" projects attract stars quickly but rarely companies; their durability depends on one maintainer.

# Related
- [Open Notebook](/projects/ai-apps/open-notebook.md), [Khoj](/projects/ai-apps/khoj.md), [Open WebUI](/projects/ai-apps/open-webui.md)

[^vane-gh]: GitHub API, ItzCrazyKns/Vane — https://github.com/ItzCrazyKns/Vane
[^vane-korben]: Korben — https://korben.info/en/vane-perplexica-new-name.html
[^vane-guide]: Joshua Opolko guide — https://joshuaopolko.com/perplexica-self-hosted-guide/
[^morphic-gh]: GitHub API, miurla/morphic — https://github.com/miurla/morphic
