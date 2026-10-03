---
type: Organization
title: Replicate
description: "Model-hosting platform built on its open-source Cog packaging tool (50k+ models); acquired by Cloudflare in November 2025 to power Workers AI."
resource: https://replicate.com
tags: [commercial-open-source, ai-inference, model-hosting, acquired]
org_kind: coss-startup
hq: San Francisco, USA
funding: { total_usd: "23M+ (per SiliconANGLE; later rounds not verified)", last_round: "unverified", last_round_date: 2023, valuation_usd: "undisclosed" }
business_verdict: acquired
projects: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cf-replicate
    resource: https://blog.cloudflare.com/replicate-joins-cloudflare/
    title: "Cloudflare blog: Replicate joins Cloudflare (2025-11-17)"
    author: org:cloudflare
  - id: sa-replicate
    resource: https://siliconangle.com/2025/11/17/cloudflare-acquires-ai-deployment-startup-replicate/
    title: "SiliconANGLE: Cloudflare acquires AI deployment startup Replicate"
  - id: cog-gh
    resource: https://github.com/replicate/cog
    title: Cog GitHub repository
---

# Summary
Replicate ran a catalog of 50,000+ containerised open and fine-tuned models packaged with its Apache-2.0 tool Cog (9.5k stars)[^cf-replicate][^cog-gh]. Cloudflare announced the acquisition on 2025-11-17 (terms undisclosed), promising API continuity and integrating the catalog into Workers AI[^cf-replicate][^sa-replicate]. SiliconANGLE cites "more than $23 million" raised from Y Combinator, Sequoia and others[^sa-replicate]. Verdict: acquired — a typical outcome for sub-scale model-hosting platforms squeezed by hyperscalers and GPU clouds.

# Business timeline
| Date | Event |
|---|---|
| 2019 | Cog open-sourced[^sa-replicate] |
| 2025-11-17 | Acquired by Cloudflare[^cf-replicate] |

# Monetization model
Pay-per-second/usage model hosting API[^cf-replicate].

# Successes
- Became a default catalog for image/video open models; clean exit to a strategic buyer[^cf-replicate].

# Failures / risks
- Could not scale independently against Together/Fireworks/Baseten-scale funding; Cog's future now tied to Workers AI.

# Related
- [Event: Cloudflare acquires Replicate](/events/2025-11-cloudflare-acquires-replicate.md), [Fireworks AI](/organizations/fireworks-ai.md), [Together AI](/organizations/together-ai.md)

[^cf-replicate]: Cloudflare blog, 2025-11-17 — https://blog.cloudflare.com/replicate-joins-cloudflare/
[^sa-replicate]: SiliconANGLE, 2025-11-17 — https://siliconangle.com/2025/11/17/cloudflare-acquires-ai-deployment-startup-replicate/
[^cog-gh]: Cog GitHub — https://github.com/replicate/cog
