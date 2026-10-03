---
type: OSS Project
title: Ray
description: "Distributed Python compute framework for training, serving and RL; donated by Anyscale to the PyTorch Foundation (Oct 2025), after which Anyscale agreed to be bought by neocloud Nscale for ~$1.65B (Jul 2026) — OSS thriving, business acquired."
resource: https://github.com/ray-project/ray
tags: [ai-inference, distributed-compute, apache-2.0, foundation-hosted, acquired]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2016-)"]
governance: foundation
steward: PyTorch Foundation (since 2025-10-22); originally Anyscale
backing_orgs: [organizations/anyscale, organizations/pytorch-foundation]
metrics:
  github_stars: { value: 43965, as_of: 2026-10-03 }
  downloads_total: { value: "237M+", as_of: 2025-10-22 }
  latest_release: { value: ray-2.59.0, as_of: 2026-10-02 }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ray-gh
    resource: https://github.com/ray-project/ray
    title: Ray GitHub repository (stars, releases via GitHub API)
  - id: ptf-ray
    resource: https://www.prnewswire.com/news-releases/pytorch-foundation-welcomes-ray-to-deliver-a-unified-open-source-ai-compute-stack-302591184.html
    title: "PyTorch Foundation Welcomes Ray (2025-10-22)"
    author: org:pytorch-foundation
  - id: anyscale-ray-ptf
    resource: https://www.anyscale.com/blog/ray-by-anyscale-joins-pytorch-foundation
    title: "Anyscale: Ray is Joining the PyTorch Foundation"
    author: org:anyscale
  - id: nscale-pr
    resource: https://www.nscale.com/press-releases/nscale-acquires-anyscale
    title: "Nscale Acquires Anyscale (2026-07-30)"
    author: org:nscale
  - id: tc-nscale
    resource: https://techcrunch.com/2026/07/30/nscale-buys-anyscale-as-it-seeks-to-own-more-of-the-ai-compute-stack/
    title: "TechCrunch: Nscale buys Anyscale as it seeks to own more of the AI compute stack"
    author: org:techcrunch
  - id: bbg-nscale
    resource: https://www.bloomberg.com/news/articles/2026-07-30/nscale-to-buy-ai-software-startup-anyscale-for-1-65-billion
    title: "Bloomberg: Nscale to Buy AI Software Startup Anyscale for $1.65 Billion"
    author: org:bloomberg
---

# Summary
Ray completed the classic "donate then sell" arc. Anyscale contributed Ray to the PyTorch Foundation on 2025-10-22 (39k+ stars, 237M+ downloads at the time), forming a PyTorch + vLLM + Ray "unified compute stack"[^ptf-ray]; Anyscale said Ray downloads grew ~10x in a year and it powers xAI, Perplexity, JPMorgan, Apple and Netflix[^anyscale-ray-ptf]. On 2026-07-30 British neocloud Nscale agreed to acquire Anyscale for about $1.65B — modestly above Anyscale's 2022 $1.38B Series C valuation — with Ray staying community-governed and Nscale joining the PyTorch Foundation[^nscale-pr][^tc-nscale][^bbg-nscale]. Verdict: OSS thriving (44k stars, monthly releases)[^ray-gh]; business acquired at a flat-ish outcome for late investors.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-22 | Ray joins PyTorch Foundation[^ptf-ray][^anyscale-ray-ptf] | OSS/governance | + |
| W3 | 2026-07-30 | Nscale agrees to acquire Anyscale (~$1.65B; ~200 staff)[^nscale-pr][^bbg-nscale][^tc-nscale] | Business | mixed |
| W3 | 2026-10-02 | Ray 2.59.0[^ray-gh] | OSS | + |

# OSS successes
- Neutral governance secured before the corporate sale, insulating users from acquirer strategy[^nscale-pr].
- RL post-training and LLM batch inference drove renewed adoption[^anyscale-ray-ptf].
# OSS failures / risks
- Contributor base remains Anyscale-heavy; future investment depends on Nscale.
# Business successes
- Anyscale reported 70% quarter-over-quarter revenue growth before the deal[^tc-nscale].
# Business failures / risks
- Exit at ~$1.65B vs $1.38B in 2022 — little valuation growth over four years of the AI boom[^tc-nscale]; acquirer is a GPU neocloud, not a software company.

# By window
## W3
- Nscale–Anyscale deal (2026-07-30)[^nscale-pr].
## W6
- No notable events found; regular releases[^ray-gh].
## W9
- No notable events found.
## W12
- PyTorch Foundation donation (2025-10-22)[^ptf-ray].
## W24
- Ray 2.4x–2.50 releases; growth in RL workloads[^anyscale-ray-ptf].

# Lessons
- Donating to a foundation before an exit preserves user trust and makes the company easier to sell.
- Pure-software AI infra companies are being absorbed by compute owners (neoclouds, chipmakers).

# Related
- [Anyscale](/organizations/anyscale.md), [PyTorch Foundation](/organizations/pytorch-foundation.md), [vLLM](/projects/ai-inference/vllm.md)
- [Event: Ray joins PyTorch Foundation](/events/2025-10-ray-joins-pytorch-foundation.md), [Event: Nscale acquires Anyscale](/events/2026-07-nscale-acquires-anyscale.md)

[^ray-gh]: Ray GitHub — https://github.com/ray-project/ray
[^ptf-ray]: PR Newswire, 2025-10-22 — https://www.prnewswire.com/news-releases/pytorch-foundation-welcomes-ray-to-deliver-a-unified-open-source-ai-compute-stack-302591184.html
[^anyscale-ray-ptf]: Anyscale blog — https://www.anyscale.com/blog/ray-by-anyscale-joins-pytorch-foundation
[^nscale-pr]: Nscale press release, 2026-07-30 — https://www.nscale.com/press-releases/nscale-acquires-anyscale
[^tc-nscale]: TechCrunch, 2026-07-30 — https://techcrunch.com/2026/07/30/nscale-buys-anyscale-as-it-seeks-to-own-more-of-the-ai-compute-stack/
[^bbg-nscale]: Bloomberg, 2026-07-30 — https://www.bloomberg.com/news/articles/2026-07-30/nscale-to-buy-ai-software-startup-anyscale-for-1-65-billion
