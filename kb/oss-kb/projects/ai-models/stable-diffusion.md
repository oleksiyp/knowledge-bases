---
type: OSS Project
title: Stable Diffusion / Stability AI models
description: "The original open image-generation model family; lost technical leadership to FLUX and Chinese video models, while Stability AI survived via a 2024 rescue and a 2025-26 pivot to licensed-data, entertainment-industry partnerships."
resource: https://huggingface.co/stabilityai
tags: [open-weights, image-generation, audio, community-license, copyright]
domain: ai-models
license: "Stability AI Community License (SD 3.x); varies by model"
license_history: ["CreativeML OpenRAIL-M (SD 1.x/2.x)", "Stability AI non-commercial/membership licenses (2024)", "Stability AI Community License (SD 3.5, 2024-)"]
governance: single-vendor
steward: Stability AI
backing_orgs: [organizations/stability-ai]
metrics:
  total_funding_reported: { value: "$232M (company statement incl. Series B)", as_of: 2026-08-31 }
oss_verdict: declining
business_verdict: struggling
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-stability
    resource: https://en.wikipedia.org/wiki/Stability_AI
    title: "Wikipedia: Stability AI"
  - id: stability-news
    resource: https://stability.ai/news-updates
    title: Stability AI news
    last_modified: 2026-10-03T00:00:00Z
  - id: wiki-bfl
    resource: https://en.wikipedia.org/wiki/Black_Forest_Labs
    title: "Wikipedia: Black Forest Labs"
  - id: mbw-seriesb
    resource: https://www.musicbusinessworldwide.com/universal-sony-warner-join-76m-funding-round-in-stability-ai/
    title: "Music Business Worldwide: Universal, Sony, Warner join $76M funding round in Stability AI (2026-08)"
  - id: dmn-seriesb
    resource: https://www.digitalmusicnews.com/2026/08/25/stability-ai-series-b/
    title: "Digital Music News: Stability scores $76M Series B with support from the major labels (2026-08-25)"
---

# Summary
Stable Diffusion defined open image generation in 2022–23, but in this period it was overtaken: the original SD researchers' Black Forest Labs (FLUX) became the open image leader from Aug 2024[^wiki-bfl]. Stability AI, after Emad Mostaque's exit (Mar 2024) and a rescue round with Sean Parker as executive chairman and Prem Akkaraju as CEO (Jun 2024)[^wiki-stability], refocused on enterprise and "responsible", licensed-data generative tools: partnerships with EA and UMG (Oct 2025), WMG (Nov 2025), AWS Bedrock and NVIDIA NIM[^stability-news]. It won the UK Getty Images copyright case (Nov 2025)[^wiki-stability], released Stable Audio 3.0 as open weights trained on licensed data (May 2026), and closed a Series B with music labels and EA in Aug 2026 (reported $76M; total funding $232M)[^stability-news][^wiki-stability].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03 | Stable Virtual Camera[^stability-news] | OSS | + |
| W24 | 2025-05 | Arm partnership: Stable Audio Open Small; Stable Video 4D 2.0[^stability-news] | OSS | + |
| W24 | 2025-09 | Stable Audio 2.5 (enterprise); AWS Bedrock integration[^stability-news] | Business | + |
| W12 | 2025-10 | EA and UMG partnerships[^stability-news] | Business | + |
| W12 | 2025-11 | UK High Court rules for Stability in Getty case; WMG partnership[^wiki-stability][^stability-news] | Business | + |
| W6 | 2026-05 | Stable Audio 3.0 open weights on fully licensed data[^stability-news] | OSS | + |
| W3 | 2026-08-25 | $76M Series B; UMG, Sony Music, WMG, EA, AMD Ventures participate; $232M raised under CEO Akkaraju since 2024[^dmn-seriesb][^mbw-seriesb] | Business | + |

# OSS successes
- Licensed-data open audio model (Stable Audio 3.0) is a rare legally-clean open release[^stability-news].

# OSS failures / risks
- Image leadership lost to FLUX and others; Community License is not OSI-open.

# Business successes
- Survived near-collapse of 2024; strategic investors from music and games[^wiki-stability].
- Getty UK ruling reduces legal overhang[^wiki-stability].

# Business failures / risks
- Small raise ($76M) relative to peers; Getty's US case outcome not verified.

# By window
## W3
- $76M Series B with all three major labels (Aug 25, 2026)[^dmn-seriesb].
## W6
- Stable Audio 3.0 (May 2026)[^stability-news].
## W9
- No notable events found.
## W12
- Getty UK win; EA/UMG/WMG deals[^wiki-stability][^stability-news].
## W24
- Arm, AMD, NVIDIA, AWS partnerships[^stability-news].

# Lessons
- Licensed training data + industry partners is a viable survival path for an open-model company squeezed on capability.

# Related
- [Stability AI org](/organizations/stability-ai.md), [FLUX](/projects/ai-models/flux.md)

[^wiki-stability]: Wikipedia, Stability AI.
[^stability-news]: Stability AI news page (accessed 2026-10-03).
[^wiki-bfl]: Wikipedia, Black Forest Labs.
[^mbw-seriesb]: Music Business Worldwide, Aug 2026.
[^dmn-seriesb]: Digital Music News, 25 Aug 2026.
