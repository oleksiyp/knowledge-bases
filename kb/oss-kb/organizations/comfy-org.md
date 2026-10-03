---
type: Organization
title: Comfy Org
description: "Company formed in June 2024 by ComfyUI's creator and core contributors after leaving Stability AI; raised $17M (Sep 2025) and $30M at a $500M valuation (Apr 2026, Craft Ventures) and monetises via Comfy Cloud and Comfy API while keeping ComfyUI GPL-3.0."
resource: https://comfy.org
tags: [commercial-open-source, ai-apps, generative-media]
org_kind: coss-startup
hq: San Francisco, USA
funding: { total_usd: "~$47M", last_round: "$30M (Craft Ventures lead)", last_round_date: 2026-04-24, valuation_usd: "$500M" }
business_verdict: thriving
projects: [projects/ai-apps/comfyui]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: comfy-17m
    resource: https://blog.comfy.org/p/comfy-raises-17m-funding
    title: "Comfy blog: Comfy raises $17M (2025-09-16)"
  - id: comfy-30m
    resource: https://blog.comfy.org/p/comfyui-raises-30m-to-scale-open
    title: "Comfy blog: ComfyUI raises $30M (2026-04-24)"
  - id: gnw-comfy
    resource: https://www.globenewswire.com/news-release/2026/04/24/3281014/0/en/comfyui-raises-30m-at-500m-valuation-to-scale-open-source-ai-for-creative-production.html
    title: "GlobeNewswire: ComfyUI raises $30M at $500M valuation"
  - id: comfy-cloud
    resource: https://blog.comfy.org/p/comfy-cloud-is-now-in-public-beta
    title: "Comfy Cloud public beta (Nov 2025)"
  - id: comfy-api
    resource: https://blog.comfy.org/p/comfy-api-is-live-deploy-comfyui
    title: "Comfy API is live (2026-09-30)"
  - id: wiki-comfy
    resource: https://en.wikipedia.org/wiki/ComfyUI
    title: "Wikipedia: ComfyUI"
---

# Summary
Comfy Org was created around 2024-06-03 by comfyanonymous and core contributors after his Stability AI stint ended[^wiki-comfy]. It raised $17M (Pace, Chemistry, Abstract, Essence VC; 2025-09-16)[^comfy-17m] and $30M led by Craft Ventures at a $500M valuation (2026-04-24; ~$47M total), claiming 4M users[^comfy-30m][^gnw-comfy]. Revenue comes from Comfy Cloud (public beta Nov 2025, $20/month)[^comfy-cloud] and Comfy API (GA 2026-09-30, per-second GPU billing)[^comfy-api].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-09-16 | $17M round[^comfy-17m] | + |
| W12 | 2025-11-05 | Comfy Cloud public beta[^comfy-cloud] | + |
| W6 | 2026-04-24 | $30M at $500M[^gnw-comfy] | + |
| W3 | 2026-09-30 | Comfy API GA[^comfy-api] | + |

# Monetization model
Hosted GPU workspaces and workflow-as-API deployment on top of the GPL-3.0 engine; partner/API nodes for closed models.

# Successes
- Fastest-growing COSS company in generative media; pledged ComfyUI "will always stay open"[^comfy-30m].

# Failures / risks
- Registry malware and exposed-instance botnets; GPU-cloud competitors can host the same GPL code.

# Related
- [ComfyUI](/projects/ai-apps/comfyui.md), [$30M round event](/events/2026-04-comfyui-30m-500m-valuation.md), [Stability AI](/organizations/stability-ai.md)

[^comfy-17m]: Comfy blog — https://blog.comfy.org/p/comfy-raises-17m-funding
[^comfy-30m]: Comfy blog — https://blog.comfy.org/p/comfyui-raises-30m-to-scale-open
[^gnw-comfy]: GlobeNewswire — https://www.globenewswire.com/news-release/2026/04/24/3281014/0/en/comfyui-raises-30m-at-500m-valuation-to-scale-open-source-ai-for-creative-production.html
[^comfy-cloud]: Comfy blog — https://blog.comfy.org/p/comfy-cloud-is-now-in-public-beta
[^comfy-api]: Comfy blog — https://blog.comfy.org/p/comfy-api-is-live-deploy-comfyui
[^wiki-comfy]: Wikipedia — https://en.wikipedia.org/wiki/ComfyUI
