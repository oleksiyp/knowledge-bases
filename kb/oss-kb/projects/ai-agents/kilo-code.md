---
type: OSS Project
title: Kilo Code
description: Open-source coding agent (VS Code/JetBrains extension, CLI, Slack bot) forked from Roo/Cline lineage and co-founded with ex-GitLab CEO Sid Sijbrandij; raised $8M in Dec 2025 and was acquired by Anaconda in July 2026 — fast build-and-flip outcome.
resource: https://github.com/Kilo-Org/kilocode
tags: [ai-agents, coding-agent, vscode-extension, mit, acquired]
domain: ai-agents
license: MIT
license_history: ["MIT per GitHub license detection (as of 2026-10-03)", "described as 'source-available' in Anaconda acquisition post (2026-07-15) — unclarified"]
governance: company-led-open-core
steward: Anaconda (acquired Kilo, July 2026)
backing_orgs: [organizations/kilo-code]
metrics:
  github_stars: { value: 27475, as_of: 2026-10-03 }
  developers: { value: 3000000, as_of: 2026-07-15 }
  monthly_tokens: { value: "~10 trillion", as_of: 2026-07-15 }
oss_verdict: growing
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: kilo-gh
    resource: https://github.com/Kilo-Org/kilocode
    title: Kilo Code GitHub repository (created 2025-03-10; API stats 2026-10-03)
  - id: kilo-press
    resource: https://kilo.ai/press
    title: Kilo press page
  - id: cnbc-kilo
    resource: https://www.cnbc.com/2025/12/10/former-gitlab-ceo-raises-8-million-for-kilo-to-compete-in-vibe-coding.html
    title: "CNBC: Former GitLab CEO raises $8 million for Kilo to compete in vibe coding"
    author: org:cnbc
  - id: anaconda-kilo
    resource: https://www.anaconda.com/blog/anaconda-acquires-kilo-code
    title: "Anaconda: Anaconda acquires Kilo Code"
    author: org:anaconda
  - id: kilo-blog
    resource: https://blog.kilo.ai/
    title: Kilo blog (Substack)
  - id: bw-kilo-openai
    resource: https://www.businesswire.com/news/home/20260929316880/en/Anacondas-Kilo-Partners-with-OpenAI-to-Bring-Sign-in-with-ChatGPT-to-AI-Builders
    title: "BusinessWire: Anaconda's Kilo partners with OpenAI to bring Sign in with ChatGPT to AI builders (2026-09-29)"
  - id: devops-kilo
    resource: https://devops.com/anaconda-acquires-kilo-code-to-unify-ai-development-from-first-prompt-to-production/
    title: "DevOps.com: Anaconda acquires Kilo Code (2026-07)"
---

# Summary
Kilo Code launched in March 2025 as a fork in the Cline/Roo lineage, positioned as an "all-in-one agentic engineering platform" with 500+ model support, and grew to 27.5k stars[^kilo-gh][^kilo-press]. Backed by former GitLab CEO Sid Sijbrandij, it raised $8M (reported 2025-12-10)[^cnbc-kilo], shipped Kilo CLI 1.0 (Feb 2026) and a Slack bot (Jan 2026)[^kilo-press], and was acquired by **Anaconda**, announced 2026-07-15, at which point it served 3M+ developers and orchestrated ~10T tokens/month[^anaconda-kilo]. Verdict: OSS **growing**; business **acquired** (terms undisclosed).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-10 | Repo created; Kilo Code launches | OSS | + [^kilo-gh] |
| W12 | 2025-12-10 | $8M raise led by/with ex-GitLab CEO Sid Sijbrandij (CNBC) | Business | + [^cnbc-kilo] |
| W9 | 2026-01-16 | Slack bot for shipping code from chat | OSS | + [^kilo-press] |
| W9 | 2026-02-04 | Kilo CLI 1.0 (500+ models) | OSS | + [^kilo-press] |
| W6 | 2026-04/05 | Courts Roo Code users after Roo shutdown | OSS | + [^kilo-press] |
| W3 | 2026-07-15 | Acquired by Anaconda; 3M+ devs, ~10T tokens/month | Business | + [^anaconda-kilo] |
| W3 | 2026-09-29 | Partnership with OpenAI: "Sign in with ChatGPT" for Kilo users | Business | + [^bw-kilo-openai] |

# OSS successes
- Rapid feature parity across IDE, CLI and chat surfaces; claims 5M+ "Kilo Coders" on its site[^kilo-blog].
- Beneficiary of Roo Code's shutdown (migration guide)[^kilo-press].
# OSS failures / risks
- Anaconda's announcement describes the codebase as "source-available" while GitHub reports MIT — future licensing direction under Anaconda is worth watching[^anaconda-kilo][^kilo-gh].
# Business successes
- Exit within ~16 months of launch to Anaconda, which positions it as a governed multi-model gateway for enterprises[^anaconda-kilo].
# Business failures / risks
- Thin moat: three near-identical open-source siblings (Cline, Roo, Kilo) competed on the same codebase lineage.

# By window
## W3
- Anaconda acquisition (2026-07-15; terms undisclosed; 3M+ developers, ~10T tokens/month)[^anaconda-kilo][^devops-kilo].
- Kilo partners with OpenAI for "Sign in with ChatGPT" (2026-09-29)[^bw-kilo-openai].
## W6
- Roo Code migration push[^kilo-press].
## W9
- Kilo CLI 1.0; Slack bot[^kilo-press].
## W12
- $8M funding[^cnbc-kilo].
## W24
- Launch (Mar 2025)[^kilo-gh].

# Lessons
- Forks of permissive OSS can become acquirable companies quickly when they own distribution and a model gateway.
- Acquirers in the Python/data ecosystem (Anaconda) are buying coding agents to stay relevant.

# Related
- [/events/2026-07-anaconda-acquires-kilo-code.md](/events/2026-07-anaconda-acquires-kilo-code.md)
- [/organizations/kilo-code.md](/organizations/kilo-code.md)
- [/projects/ai-agents/cline.md](/projects/ai-agents/cline.md), [/projects/ai-agents/roo-code.md](/projects/ai-agents/roo-code.md)

[^kilo-gh]: https://github.com/Kilo-Org/kilocode
[^kilo-press]: https://kilo.ai/press
[^cnbc-kilo]: https://www.cnbc.com/2025/12/10/former-gitlab-ceo-raises-8-million-for-kilo-to-compete-in-vibe-coding.html
[^anaconda-kilo]: https://www.anaconda.com/blog/anaconda-acquires-kilo-code
[^kilo-blog]: https://blog.kilo.ai/
[^bw-kilo-openai]: BusinessWire, 2026-09-29.
[^devops-kilo]: DevOps.com, Jul 2026.
