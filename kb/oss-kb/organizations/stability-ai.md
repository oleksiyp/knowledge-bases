---
type: Organization
title: Stability AI
description: "Creator of Stable Diffusion; survived 2024 near-collapse under new CEO Prem Akkaraju and pivoted to licensed-data tools with music and games partners; Series B closed Aug 2026."
resource: https://stability.ai
tags: [commercial-open-source, ai-models, image-generation, audio]
org_kind: coss-startup
hq: London, UK
funding: { total_usd: "$232M (company statement)", last_round: "Series B (reported $76M)", last_round_date: 2026-08, valuation_usd: "unverified" }
business_verdict: struggling
projects: [projects/ai-models/stable-diffusion, projects/ai-apps/open-music-generation]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-stability
    resource: https://en.wikipedia.org/wiki/Stability_AI
    title: "Wikipedia: Stability AI"
  - id: stability-news
    resource: https://stability.ai/news-updates
    title: Stability AI news
  - id: aiapps-wiki-comfy
    resource: https://en.wikipedia.org/wiki/ComfyUI
    title: "Wikipedia: ComfyUI"
  - id: aiapps-sat-gh
    resource: https://github.com/Stability-AI/stable-audio-tools
    title: Stability-AI/stable-audio-tools GitHub repository
---

# Summary
Stability AI went from the poster child of open generative AI to a turnaround story. CEO Emad Mostaque resigned on 23 Mar 2024; Prem Akkaraju (ex-Weta Digital) became CEO on 25 Jun 2024 alongside a rescue round (Greycroft, Coatue, Sound Ventures, Lightspeed, O'Shaughnessy) with Sean Parker as executive chairman; James Cameron joined the board in Sept 2024[^wiki-stability]. Since then it has prioritised enterprise and "responsibly trained" models: deals with AMD, Arm, NVIDIA, AWS (2025), EA and UMG (Oct 2025), WMG (Nov 2025)[^stability-news]; it won the UK Getty case (Nov 2025)[^wiki-stability]; and its Series B (Aug 2026) brought in UMG, Sony Music, WMG, EA and AMD Ventures, for $232M total funding[^stability-news][^wiki-stability].

# Business timeline
| Date | Event |
|---|---|
| 2024-03-23 | Mostaque resigns[^wiki-stability] |
| 2024-06-25 | Akkaraju CEO; rescue financing; Parker exec chair[^wiki-stability] |
| 2025-05 | Arm partnership[^stability-news] |
| 2025-10 | EA, UMG partnerships[^stability-news] |
| 2025-11 | UK Getty ruling in Stability's favour; WMG deal[^wiki-stability][^stability-news] |
| 2026-05 | Stable Audio 3.0 (licensed data, open weights)[^stability-news] |
| 2026-08 | Series B closes[^stability-news] |

# Monetization model
Enterprise licenses (Community License requires paid license above a revenue threshold), API, cloud marketplace integrations, co-development with media/game companies.

# Successes
- Survival and legal win; strategic industry investors.

# Failures / risks
- Lost image-model leadership; modest capital vs competitors.

# Related
- [Stable Diffusion](/projects/ai-models/stable-diffusion.md), [Black Forest Labs](/organizations/black-forest-labs.md)

[^wiki-stability]: Wikipedia, Stability AI.
[^stability-news]: Stability AI news (accessed 2026-10-03).

## Additional notes (ai-apps)
- ComfyUI's creator worked at Stability AI before leaving to form Comfy Org with core contributors in June 2024[^aiapps-wiki-comfy]; Comfy Org went on to raise $30M at a $500M valuation (Apr 2026) — arguably the most valuable business to emerge from the Stable Diffusion community. See [/organizations/comfy-org.md](/organizations/comfy-org.md), [/projects/ai-apps/comfyui.md](/projects/ai-apps/comfyui.md).
- Stability's stable-audio-tools (MIT code, ~3.9k stars) is a minor player in open music generation next to ACE-Step and YuE[^aiapps-sat-gh]; see [/projects/ai-apps/open-music-generation.md](/projects/ai-apps/open-music-generation.md).

[^aiapps-wiki-comfy]: Wikipedia — https://en.wikipedia.org/wiki/ComfyUI
[^aiapps-sat-gh]: GitHub — https://github.com/Stability-AI/stable-audio-tools
