---
type: Organization
title: Black Forest Labs
description: "Freiburg-based maker of FLUX image/video models (founded by original Stable Diffusion researchers); open-core licensing; $300M Series B at $3.25B (Dec 2025)."
resource: https://bfl.ai
tags: [commercial-open-source, ai-models, image-generation, europe]
org_kind: coss-startup
hq: Freiburg, Germany
funding: { total_usd: "~$331M+ (seed $31M + Series B $300M; other rounds unverified)", last_round: "Series B", last_round_date: 2025-12-01, valuation_usd: "$3.25B" }
business_verdict: thriving
projects: [projects/ai-models/flux]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-bfl
    resource: https://en.wikipedia.org/wiki/Black_Forest_Labs
    title: "Wikipedia: Black Forest Labs"
  - id: tc-bfl
    resource: https://techcrunch.com/2025/12/01/black-forest-labs-raises-300m-at-3-25b-valuation/
    title: "TechCrunch: Black Forest Labs raises $300M at $3.25B valuation"
    author: org:techcrunch
  - id: bfl-blog
    resource: https://bfl.ai/blog
    title: BFL blog
---

# Summary
BFL launched in Aug 2024 with a $31M seed and FLUX.1[^wiki-bfl], and became the commercial leader in open image models via tiered licensing and B2B distribution (xAI Grok, Mistral Le Chat, Adobe Photoshop, Meta Vibes, Canva)[^wiki-bfl]. On 1 Dec 2025 it raised $300M at a $3.25B post-money valuation led by Salesforce Ventures and AMP, with a16z, NVIDIA, General Catalyst, Temasek and others[^tc-bfl]. In 2026 it expanded to video and robotics "world models" (FLUX 3, Jul 2026; FLUX 3 Action open weights, Sept 2026)[^bfl-blog].

# Business timeline
| Date | Event |
|---|---|
| 2024-08 | $31M seed; FLUX.1; Grok integration[^wiki-bfl] |
| 2024-11 | Le Chat uses Flux Pro[^wiki-bfl] |
| 2025-09 | Photoshop beta integration; Meta collaboration[^wiki-bfl] |
| 2025-12-01 | $300M Series B at $3.25B[^tc-bfl] |
| 2026-07-23 | FLUX 3; mimic robotics partnership (Audi)[^bfl-blog][^wiki-bfl] |

# Monetization model
API (pro/flex/max), enterprise licensing of dev weights for commercial use, partner integrations.

# Successes
- Clear open-core model that works; marquee distribution partners.

# Failures / risks
- Chinese open image/video competition; non-commercial dev license limits community goodwill.

# Related
- [FLUX](/projects/ai-models/flux.md), [Stability AI](/organizations/stability-ai.md)

[^wiki-bfl]: Wikipedia, Black Forest Labs.
[^tc-bfl]: TechCrunch, 1 Dec 2025.
[^bfl-blog]: bfl.ai blog.
