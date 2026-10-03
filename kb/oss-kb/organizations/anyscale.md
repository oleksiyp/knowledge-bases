---
type: Organization
title: Anyscale
description: "Company founded in 2019 to commercialise Ray; donated Ray to the PyTorch Foundation (Oct 2025) and agreed to be acquired by neocloud Nscale for ~$1.65B (Jul 2026)."
resource: https://www.anyscale.com
tags: [commercial-open-source, ai-inference, distributed-compute, acquired]
org_kind: coss-startup
hq: San Francisco, USA
funding: { total_usd: "~$260M+ through Series C extension (sum of announced rounds; not company-confirmed total)", last_round: "Series C extension $99M (Addition, Intel Capital; Aug 2022), after $100M Series C at $1B (Dec 2021)", last_round_date: 2022-08-23, valuation_usd: "~1.1–1.38B (2022; sources differ); $1.65B all-cash acquisition price (2026)" }
business_verdict: acquired
projects: [projects/ai-inference/ray]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: anyscale-ray-ptf
    resource: https://www.anyscale.com/blog/ray-by-anyscale-joins-pytorch-foundation
    title: "Anyscale: Ray is Joining the PyTorch Foundation (2025-10-22)"
  - id: nscale-pr
    resource: https://www.nscale.com/press-releases/nscale-acquires-anyscale
    title: "Nscale Acquires Anyscale (2026-07-30)"
  - id: tc-nscale
    resource: https://techcrunch.com/2026/07/30/nscale-buys-anyscale-as-it-seeks-to-own-more-of-the-ai-compute-stack/
    title: "TechCrunch: Nscale buys Anyscale"
    author: org:techcrunch
  - id: bbg-nscale
    resource: https://www.bloomberg.com/news/articles/2026-07-30/nscale-to-buy-ai-software-startup-anyscale-for-1-65-billion
    title: "Bloomberg: Nscale to Buy AI Software Startup Anyscale for $1.65 Billion"
    author: org:bloomberg
  - id: bw-anyscale-c
    resource: https://www.businesswire.com/news/home/20211208005269/en/Anyscale-Secures-%24100M-Series-C-at-%241B-Valuation-to-Radically-Simplify-Scaling-and-Productionizing-AI-Applications
    title: "Business Wire: Anyscale secures $100M Series C at $1B valuation (2021-12-08)"
    author: org:anyscale
  - id: gnw-anyscale-c2
    resource: https://www.globenewswire.com/news-release/2022/08/23/2502861/0/en/Anyscale-Unveils-Ray-2-0-and-Anyscale-Innovations-at-Ray-Summit-2022-Adds-an-Additional-99M-Funding-from-Existing-Investors-Addition-Intel-Capital-and-Foundation-Capital.html
    title: "GlobeNewswire: Anyscale adds $99M from Addition, Intel Capital and Foundation Capital (2022-08-23)"
    author: org:anyscale
---

# Summary
Anyscale (Robert Nishihara, Philipp Moritz, Ion Stoica) built a multi-cloud Ray platform used by Coinbase, Runway and others[^anyscale-ray-ptf][^tc-nscale]. It donated Ray to the PyTorch Foundation on 2025-10-22, citing ~10x download growth in a year[^anyscale-ray-ptf]. On 2026-07-30 UK neocloud Nscale (itself fresh off a $2B Series C at $14.6B in March 2026) agreed to buy Anyscale for ~$1.65B; ~200 employees join, the brand continues, and Nscale joins the PyTorch Foundation[^nscale-pr][^tc-nscale][^bbg-nscale]. Anyscale raised a $100M Series C at $1B (Dec 2021) and a $99M extension (Aug 2022), which TechCrunch values at $1.38B (other reports: ~$1.1B)[^bw-anyscale-c][^gnw-anyscale-c2][^tc-nscale]. The Nscale deal is all-cash[^tc-nscale].

# Business timeline
| Date | Event |
|---|---|
| 2021-12-08 | $100M Series C at $1B[^bw-anyscale-c] |
| 2022-08-23 | $99M Series C extension (valuation ~$1.1–1.38B, sources differ)[^gnw-anyscale-c2][^tc-nscale] |
| 2025-10-22 | Ray donated to PyTorch Foundation[^anyscale-ray-ptf] |
| 2026-07-30 | Definitive agreement: Nscale to acquire (~$1.65B), close expected H2 2026[^nscale-pr][^bbg-nscale] |

# Monetization model
Managed Ray platform (training, inference, RL, data processing) on multiple clouds[^anyscale-ray-ptf].

# Successes
- Revenue up 70% quarter-over-quarter before the deal[^tc-nscale]; clean governance handoff of Ray before the sale.

# Failures / risks
- Exit only ~20% above 2022 valuation despite the AI boom[^tc-nscale]; future as a captive software layer for one neocloud.

# Related
- [Ray](/projects/ai-inference/ray.md), [PyTorch Foundation](/organizations/pytorch-foundation.md), [Event: Nscale acquires Anyscale](/events/2026-07-nscale-acquires-anyscale.md), [Event: Ray joins PTF](/events/2025-10-ray-joins-pytorch-foundation.md)

[^anyscale-ray-ptf]: Anyscale blog — https://www.anyscale.com/blog/ray-by-anyscale-joins-pytorch-foundation
[^nscale-pr]: Nscale press release — https://www.nscale.com/press-releases/nscale-acquires-anyscale
[^tc-nscale]: TechCrunch, 2026-07-30 — https://techcrunch.com/2026/07/30/nscale-buys-anyscale-as-it-seeks-to-own-more-of-the-ai-compute-stack/
[^bbg-nscale]: Bloomberg, 2026-07-30 — https://www.bloomberg.com/news/articles/2026-07-30/nscale-to-buy-ai-software-startup-anyscale-for-1-65-billion
[^bw-anyscale-c]: Business Wire, 2021-12-08.
[^gnw-anyscale-c2]: GlobeNewswire, 2022-08-23.
