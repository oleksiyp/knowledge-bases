---
type: Organization
title: Inferact
description: "Commercial company founded by vLLM's creators and core maintainers; launched 2026-01-22 with a $150M seed at an $800M valuation to offer managed/serverless vLLM."
resource: https://inferact.ai
tags: [commercial-open-source, ai-inference, vllm, vc-spinout]
org_kind: coss-startup
hq: San Francisco Bay Area, USA
funding: { total_usd: "150M", last_round: "Seed ($150M; a16z + Lightspeed co-lead)", last_round_date: 2026-01-22, valuation_usd: "800M" }
business_verdict: growing
projects: [projects/ai-inference/vllm]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sa-inferact
    resource: https://siliconangle.com/2026/01/22/inferact-launches-150m-funding-commercialize-vllm/
    title: "SiliconANGLE: Inferact launches with $150M in funding to commercialize vLLM"
    author: org:siliconangle
  - id: bbg-inferact
    resource: https://www.bloomberg.com/news/articles/2026-01-22/andreessen-backed-inferact-raises-150-million-in-seed-round
    title: "Bloomberg: Inferact Raises $150 Million in Seed Funding Led by Andreessen Horowitz"
    author: org:bloomberg
  - id: tc-radixark
    resource: https://techcrunch.com/2026/01/21/sources-project-sglang-spins-out-as-radixark-with-400m-valuation-as-inference-market-explodes
    title: "TechCrunch (2026-01-21): reports on vLLM fundraising talks"
---

# Summary
Inferact is the commercial vehicle of the vLLM team (co-founders include Woosuk Kwon and Ion Stoica, with several core maintainers). It launched on 2026-01-22 with a $150M seed at an $800M valuation, co-led by Andreessen Horowitz and Lightspeed with Databricks Ventures and the UC Berkeley Chancellor's Fund[^sa-inferact][^bbg-inferact]. Its plan: a managed, serverless vLLM with observability and disaster recovery, while upstreaming performance and hardware work to the foundation-hosted project[^sa-inferact]. Press had earlier reported talks at up to ~$1B valuation[^tc-radixark].

# Business timeline
| Date | Event |
|---|---|
| 2026-01-21 | TechCrunch reports vLLM team raising at ~$1B (disputed by a co-founder)[^tc-radixark] |
| 2026-01-22 | Launch; $150M seed at $800M[^sa-inferact][^bbg-inferact] |

# Monetization model
Managed/serverless vLLM service and enterprise support; open-source engine stays in the PyTorch Foundation[^sa-inferact].

# Successes
- One of the largest seed rounds in OSS infrastructure history; controls deep maintainer bench[^bbg-inferact].

# Failures / risks
- Must compete with inference clouds that already run vLLM for free; revenue undisclosed. Governance tension if company priorities diverge from foundation community.

# Related
- [vLLM](/projects/ai-inference/vllm.md), [RadixArk](/organizations/radixark.md), [PyTorch Foundation](/organizations/pytorch-foundation.md), [Event](/events/2026-01-inferact-vllm-seed.md)

[^sa-inferact]: SiliconANGLE, 2026-01-22 — https://siliconangle.com/2026/01/22/inferact-launches-150m-funding-commercialize-vllm/
[^bbg-inferact]: Bloomberg, 2026-01-22 — https://www.bloomberg.com/news/articles/2026-01-22/andreessen-backed-inferact-raises-150-million-in-seed-round
[^tc-radixark]: TechCrunch, 2026-01-21 — https://techcrunch.com/2026/01/21/sources-project-sglang-spins-out-as-radixark-with-400m-valuation-as-inference-market-explodes
