---
type: OSS Project
title: PrivateGPT
description: "The 2023 'chat with your docs offline' sensation (~58k stars) whose creators founded Zylon; after a quiet 2025 it was relaunched in June 2026 as PrivateGPT 1.0, an Apache-2.0 API backend into which Zylon merged its private fork — stable OSS, small business."
resource: https://github.com/zylon-ai/private-gpt
tags: [ai-apps, rag, local-ai, apache-2.0, relaunch]
domain: ai-apps
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: company-led-open-core
steward: Zylon
backing_orgs: [organizations/zylon]
metrics:
  github_stars: { value: 57557, as_of: 2026-10-03 }
  latest_release: { value: "v1.0.1 (2026-06-18)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pgpt-gh
    resource: https://github.com/zylon-ai/private-gpt
    title: PrivateGPT GitHub repository (GitHub API, 2026-10-03)
  - id: pgpt-10
    resource: https://www.zylon.ai/resources/blog/introducing-privategpt-1-0-the-open-source-application-backend-for-private-ai
    title: "Zylon blog: Introducing PrivateGPT 1.0 (2026-06-03)"
  - id: pgpt-disc
    resource: https://github.com/zylon-ai/private-gpt/discussions/2259
    title: "Discussion #2259: PrivateGPT 1.0 is out"
  - id: pgpt-wiki
    resource: https://ai.miraheze.org/wiki/PrivateGPT
    title: "Learn AI wiki: PrivateGPT (Zylon founders, 2024 pre-seed)"
---

# Summary
PrivateGPT hit #1 on GitHub trending in May 2023 and has ~58k stars[^pgpt-gh]. Its creators formed Zylon (enterprise private-AI platform; reported $3.2M pre-seed in Feb 2024)[^pgpt-wiki]. After slow 2025 activity, Zylon relaunched it on 2026-06-03 as **PrivateGPT 1.0** — a rewrite repositioned as a full application API layer (ingestion, cited retrieval, tools/MCP, text-to-SQL) above any OpenAI-compatible inference server — and merged its private commercial fork back into the public repo, so Zylon's product now runs on the open code[^pgpt-10][^pgpt-disc]. Verdict: OSS stable (revived); business stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10 → 2025-09 | Low activity; focus on Zylon commercial product[^pgpt-10] | OSS | − |
| W6 | 2026-06-03 | PrivateGPT 1.0 relaunch; Zylon merges private fork into OSS[^pgpt-10][^pgpt-disc] | OSS/Business | + |
| W6 | 2026-06-18 | v1.0.1[^pgpt-gh] | OSS | + |

# OSS successes
- "Upstream-first" commitment: commercial development flows into the public repo[^pgpt-10].
# OSS failures / risks
- Star count reflects 2023 hype; current user base far smaller.
# Business successes
- Zylon has a defined enterprise private-AI niche[^pgpt-10].
# Business failures / risks
- Small company; crowded "private AI" market.

# By window
## W3
- No notable events found (commits continue)[^pgpt-gh].
## W6
- 1.0 relaunch[^pgpt-10].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Quiet period[^pgpt-10].

# Lessons
- Merging the private fork back into OSS is a credible way to revive a stagnating project while aligning business and community.

# Related
- [Zylon](/organizations/zylon.md), [h2oGPT](/projects/ai-apps/h2ogpt.md), [AnythingLLM](/projects/ai-apps/anythingllm.md), [Ollama](/projects/ai-inference/ollama.md), [vLLM](/projects/ai-inference/vllm.md)

[^pgpt-gh]: GitHub API, zylon-ai/private-gpt — https://github.com/zylon-ai/private-gpt
[^pgpt-10]: Zylon blog, 2026-06-03 — https://www.zylon.ai/resources/blog/introducing-privategpt-1-0-the-open-source-application-backend-for-private-ai
[^pgpt-disc]: GitHub discussion #2259 — https://github.com/zylon-ai/private-gpt/discussions/2259
[^pgpt-wiki]: Learn AI wiki — https://ai.miraheze.org/wiki/PrivateGPT
