---
type: OSS Project
title: MaxKB
description: "FIT2CLOUD's GPL-3.0 enterprise RAG/agent platform (~23k stars) from the 1Panel family, shipping parallel v1/v2 LTS lines through 2026 — stable, Chinese enterprise open-core."
resource: https://github.com/1Panel-dev/MaxKB
tags: [ai-apps, rag, agents, gpl-3.0, china, open-core]
domain: ai-apps
license: GPL-3.0
license_history: ["GPL-3.0 (2023-)"]
governance: company-led-open-core
steward: FIT2CLOUD (飞致云)
backing_orgs: []
metrics:
  github_stars: { value: 22899, as_of: 2026-10-03 }
  latest_release: { value: "v2.10.6-lts (2026-09-03)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: maxkb-gh
    resource: https://github.com/1Panel-dev/MaxKB
    title: MaxKB GitHub repository (GitHub API, 2026-10-03)
  - id: maxkb-js
    resource: https://jimmysong.io/ai/maxkb/
    title: "Jimmy Song: MaxKB overview"
---

# Summary
MaxKB ("Max Knowledge Brain") is a GPL-3.0 enterprise agent platform built on RAG, workflows and MCP tool-use (Django + Vue, PostgreSQL/pgvector), copyrighted by FIT2CLOUD, the company behind 1Panel and JumpServer[^maxkb-gh][^maxkb-js]. ~23k stars; it maintains parallel LTS lines (v1.10.15-lts Aug 2026, v2.10.6-lts Sep 2026)[^maxkb-gh]. Monetised via an enterprise "Pro" edition (FIT2CLOUD's usual model). Verdict: stable on both axes.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W3 | 2026-08-11 | v1.10.15-lts[^maxkb-gh] | OSS | + |
| W3 | 2026-09-03 | v2.10.6-lts[^maxkb-gh] | OSS | + |

# OSS successes
- OSI licence (GPL-3.0) with predictable LTS releases[^maxkb-gh].
# OSS failures / risks
- Primarily Chinese-language community; vendor-driven.
# Business successes
- Fits FIT2CLOUD's proven open-core playbook.
# Business failures / risks
- Slower growth than Dify/RAGFlow.

# By window
## W3
- LTS releases[^maxkb-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- v2 line introduced (agent platform)[^maxkb-js].

# Lessons
- GPL + enterprise edition remains viable alongside the more common "Apache + conditions" model.

# Related
- [FastGPT](/projects/ai-apps/fastgpt.md), [RAGFlow](/projects/ai-apps/ragflow.md), [Dify](/projects/ai-agents/dify.md)

[^maxkb-gh]: GitHub API, 1Panel-dev/MaxKB — https://github.com/1Panel-dev/MaxKB
[^maxkb-js]: Jimmy Song — https://jimmysong.io/ai/maxkb/
