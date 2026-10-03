---
type: Organization
title: Fireworks AI
description: "Inference cloud for open-weight models; raised $250M at $4B (Oct 2025) and $1.505B at $17.5B (Jul 2026) with ARR above $1B — the biggest business winner of open-model inference."
resource: https://fireworks.ai
tags: [ai-inference, inference-cloud, open-models]
org_kind: coss-startup
hq: USA (city not verified)
funding: { total_usd: "1.8B+ (sum of announced rounds)", last_round: "Series D ($1.505B; Atreides, Index Ventures, TCV co-lead)", last_round_date: 2026-07-16, valuation_usd: "17.5B" }
business_verdict: thriving
projects: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-fireworks
    resource: https://en.wikipedia.org/wiki/Fireworks_AI
    title: "Wikipedia: Fireworks AI"
  - id: wsj-fireworks
    resource: https://www.wsj.com/articles/ai-inference-startup-fireworks-ai-is-valued-at-4-billion-in-funding-round-758885c8
    title: "WSJ: AI inference startup Fireworks AI is valued at $4 billion in funding round"
    author: org:wsj
  - id: reuters-fireworks
    resource: https://www.reuters.com/technology/nvidia-backed-startup-fireworks-valued-175-billion-latest-funding-2026-07-16/
    title: "Reuters: Nvidia-backed startup Fireworks valued at $17.5 billion in latest funding (2026-07-16)"
    author: org:reuters
  - id: fw-series-d
    resource: https://fireworks.ai/blog/series-d-announcement
    title: "Fireworks blog: Fireworks secures $1.5 billion in Series D funding (2026-07-16)"
    author: org:fireworks-ai
  - id: otpp-fw
    resource: https://www.otpp.com/en-ca/about-us/news-and-insights/2026/fireworks-raises-a-1-5-billion-series-d-to-lead-the-specialized-intelligence-revolution/
    title: "OTPP: Fireworks raises a $1.5 billion Series D (2026-07)"
---

# Summary
Fireworks AI sells fast inference and fine-tuning for open-weight models (Cursor's Fast Apply is a flagship customer)[^wiki-fireworks]. It raised a $52M Series B (Sequoia, Jul 2024), a $250M Series C at ~$4B in October 2025 (Lightspeed, Index, Evantic)[^wiki-fireworks][^wsj-fireworks], and a $1.505B Series D at $17.5B on 16 July 2026 led by Atreides, Index Ventures and TCV with Lightspeed, NVIDIA, Evantic and others participating; it said ARR had passed $1B (≈5x since the prior round) and daily token volume exceeded 40T[^fw-series-d][^otpp-fw][^reuters-fireworks]. Context: Fireworks shows where value from OSS inference engines accrues — to operators, not engine authors.

# Business timeline
| Date | Event |
|---|---|
| 2024-07 | $52M Series B (Sequoia)[^wiki-fireworks] |
| 2025-10 | $250M Series C at ~$4B[^wiki-fireworks][^wsj-fireworks] |
| 2026-07-16 | $1.505B Series D at $17.5B; ARR >$1B[^fw-series-d][^reuters-fireworks] |

# Monetization model
Usage-based serverless and dedicated inference; fine-tuning.

# Successes
- 4x+ valuation step-up in nine months[^wiki-fireworks].

# Failures / risks
- GPU-capex intensity; competition from Together, Baseten, hyperscalers and labs' own APIs.

# Related
- [Together AI](/organizations/together-ai.md), [vLLM](/projects/ai-inference/vllm.md), [SGLang](/projects/ai-inference/sglang.md), [Domain review](/domains/ai-inference.md)

[^wiki-fireworks]: Wikipedia: Fireworks AI — https://en.wikipedia.org/wiki/Fireworks_AI
[^wsj-fireworks]: WSJ — https://www.wsj.com/articles/ai-inference-startup-fireworks-ai-is-valued-at-4-billion-in-funding-round-758885c8
[^fw-series-d]: Fireworks blog, 2026-07-16.
[^otpp-fw]: OTPP news, July 2026.
[^reuters-fireworks]: Reuters, 2026-07-16 — https://www.reuters.com/technology/nvidia-backed-startup-fireworks-valued-175-billion-latest-funding-2026-07-16/
