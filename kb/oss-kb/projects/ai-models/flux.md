---
type: OSS Project
title: FLUX (Black Forest Labs)
description: "Black Forest Labs' FLUX image (and from 2026 video/world) models; open-core licensing (Apache small models, non-commercial dev weights, proprietary pro) made it the leading open image family and a $3.25B company."
resource: https://huggingface.co/black-forest-labs
tags: [open-weights, image-generation, video, open-core, europe]
domain: ai-models
license: "Apache-2.0 (schnell, FLUX.2 klein); FLUX non-commercial license (dev); proprietary (pro/flex)"
license_history: ["Tiered: Apache-2.0 / non-commercial / API-only since FLUX.1 (2024-08)"]
governance: company-led-open-core
steward: Black Forest Labs
backing_orgs: [organizations/black-forest-labs]
metrics: {}
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-bfl
    resource: https://en.wikipedia.org/wiki/Black_Forest_Labs
    title: "Wikipedia: Black Forest Labs"
  - id: tc-bfl
    resource: https://techcrunch.com/2025/12/01/black-forest-labs-raises-300m-at-3-25b-valuation/
    title: "TechCrunch: Black Forest Labs raises $300M at $3.25B valuation (2025-12-01)"
    author: org:techcrunch
  - id: bfl-blog
    resource: https://bfl.ai/blog
    title: Black Forest Labs blog
    last_modified: 2026-10-03T00:00:00Z
  - id: techtimes-flux3-image
    resource: https://www.techtimes.com/articles/328502/20261002/black-forest-labs-launches-flux-3-image-json-bounding-boxes-lock-unchanged-pixels-numerically.htm
    title: "Tech Times: Black Forest Labs launches Flux 3 Image (2026-10-02)"
---

# Summary
FLUX, from the original Stable Diffusion researchers, is the open image model winner of the period and a textbook open-core strategy: a small Apache-2.0 model (schnell / FLUX.2 klein), non-commercial "dev" weights for the community, and proprietary pro/flex models sold by API and licensing[^wiki-bfl]. It powered Grok (Aug 2024) and Le Chat (Nov 2024), and FLUX.1 Kontext went into Photoshop beta (Sept 2025)[^wiki-bfl]. FLUX.2 (Nov 2025) followed, then a $300M Series B at $3.25B (1 Dec 2025)[^tc-bfl]. In W3, BFL expanded to video and "world models": FLUX 3 (23 Jul 2026), FLUX 3 Video (4 Aug) and the open-weight 7B FLUX 3 Action robotics model (23 Sept 2026)[^bfl-blog].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05 | FLUX.1 Kontext (in-context editing)[^wiki-bfl] | OSS | + |
| W24 | 2025-07 | FLUX.1 Krea Dev with Krea AI[^wiki-bfl] | OSS | + |
| W24 | 2025-09 | Kontext Pro in Photoshop beta; Meta Vibes collaboration[^wiki-bfl] | Business | + |
| W12 | 2025-11 | FLUX.2 (klein Apache-2.0, dev non-commercial, flex/pro proprietary)[^wiki-bfl] | OSS | + |
| W12 | 2025-12-01 | $300M Series B at $3.25B (Salesforce Ventures, AMP lead)[^tc-bfl] | Business | + |
| W6 | 2026-06-04 | FLUX.2 klein on-device on ASUS ProArt[^bfl-blog] | OSS | + |
| W3 | 2026-07-23 | FLUX 3 "real world models"; mimic robotics partnership[^bfl-blog] | OSS | + |
| W3 | 2026-09-23 | FLUX 3 Action — open-weight 7B world-action model[^bfl-blog] | OSS | + |
| W3 | 2026-10-01 | FLUX 3 Image via API/Playground; open-weight version promised "within weeks"[^techtimes-flux3-image] | OSS | + |

# OSS successes
- Dominant open image family; huge LoRA/fine-tune ecosystem around FLUX dev.

# OSS failures / risks
- Most popular weights (dev) are non-commercial — "open weights" but not open source.

# Business successes
- Distribution deals (xAI, Mistral, Adobe, Meta) and $3.25B valuation[^wiki-bfl][^tc-bfl].

# Business failures / risks
- Competition from Chinese open image/video models (Qwen-Image, MiniMax H3).

# By window
## W3
- FLUX 3, FLUX 3 Video, FLUX 3 Action[^bfl-blog]; FLUX 3 Image (Oct 1, API first)[^techtimes-flux3-image]. No new funding round found in 2026.
## W6
- On-device klein; Envato and VTO deals[^bfl-blog].
## W9
- No notable events found.
## W12
- FLUX.2; $300M Series B[^tc-bfl].
## W24
- Kontext; Adobe integration[^wiki-bfl].

# Lessons
- Tiered licensing by model size is the most commercially successful open-weight strategy seen in this domain.

# Related
- [Black Forest Labs org](/organizations/black-forest-labs.md), [Stable Diffusion](/projects/ai-models/stable-diffusion.md)

[^wiki-bfl]: Wikipedia, Black Forest Labs.
[^tc-bfl]: TechCrunch, 1 Dec 2025.
[^bfl-blog]: bfl.ai blog (accessed 2026-10-03).
[^techtimes-flux3-image]: Tech Times, 2 Oct 2026.
