---
type: Organization
title: Together AI
description: "Open-model inference/training cloud and major OSS research contributor (FlashAttention, Mamba, Together Kernel Collection); raised $305M at $3.3B (Feb 2025) and $800M at $8.3B (Jul 2026) on >$1.15B annual bookings."
resource: https://www.together.ai
tags: [ai-inference, inference-cloud, open-models, oss-research]
org_kind: coss-startup
hq: San Francisco, USA
funding: { total_usd: "~$1.2B (TechCrunch: $102.5M A + $305M B + $800M C)", last_round: "Series C ($800M; Aramco Ventures lead)", last_round_date: 2026-07-01, valuation_usd: "8.3B" }
business_verdict: thriving
projects: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: together-b
    resource: https://www.together.ai/blog/together-ai-announcing-305m-series-b
    title: "Together AI: Announcing $305M Series B (2025-02-20)"
  - id: tc-together-c
    resource: https://techcrunch.com/2026/07/01/neocloud-together-ai-raises-800m-leaps-to-8-3b-valuation/
    title: "TechCrunch: Neocloud Together AI raises $800M, leaps to $8.3B valuation (2026-07-01)"
    author: org:techcrunch
---

# Summary
Together AI raised a $305M Series B at a $3.3B post-money valuation on 2025-02-20, led by General Catalyst and Prosperity7 with NVIDIA, Salesforce Ventures, Kleiner Perkins, Coatue and others[^together-b]. It pairs an open-model cloud (200+ models) with open research: FlashAttention-3, the Together Kernel Collection led by chief scientist Tri Dao, Mixture of Agents, Medusa, Hyena and Mamba[^together-b]. On 2026-07-01 it raised an $800M Series C at $8.3B led by Aramco Ventures, with Vista Equity Partners, General Catalyst, Emergence, NVIDIA, March Capital, Pegatron and S Ventures, reporting over $1.15B in annual bookings; total raised is ~$1.2B[^tc-together-c]. (Corrected in pass 2: last round Series B 2025 at $3.3B → Series C 2026 at $8.3B; business_verdict growing → thriving.)

# Business timeline
| Date | Event |
|---|---|
| 2025-02-20 | $305M Series B at $3.3B[^together-b] |
| 2026-07-01 | $800M Series C at $8.3B (Aramco Ventures); >$1.15B annual bookings[^tc-together-c] |

# Monetization model
Serverless/dedicated inference, GPU clusters, fine-tuning on open models[^together-b].

# Successes
- Research-led OSS contributions double as marketing and performance moat[^together-b].

# Failures / risks
- Valuation ($8.3B) trails Fireworks' reported $17.5B; capex-heavy GPU business.

# Related
- [Fireworks AI](/organizations/fireworks-ai.md), [Replicate](/organizations/replicate.md), [Domain review](/domains/ai-inference.md)

[^together-b]: Together AI blog, 2025-02-20 — https://www.together.ai/blog/together-ai-announcing-305m-series-b
[^tc-together-c]: TechCrunch, 2026-07-01.

- Related event: [Together AI Series C](/events/2026-07-together-ai-series-c.md)
