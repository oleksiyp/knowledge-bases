---
type: OSS Project
title: ComfyUI
description: "GPL-3.0 node-graph engine/UI for image, video and audio generation (~136k stars) that won the post-A1111 generative-media UI war; Comfy Org raised $17M (Sep 2025) and $30M at $500M (Apr 2026) and monetises via Comfy Cloud and Comfy API — thriving, with custom-node supply-chain risk."
resource: https://github.com/Comfy-Org/ComfyUI
tags: [ai-apps, image-generation, video-generation, gpl-3.0, coss, supply-chain]
domain: ai-apps
license: GPL-3.0
license_history: ["GPL-3.0 (2023-)"]
governance: company-led-open-core
steward: Comfy Org
backing_orgs: [organizations/comfy-org]
metrics:
  github_stars: { value: 135929, as_of: 2026-10-03 }
  github_forks: { value: 16116, as_of: 2026-10-03 }
  latest_release: { value: "v0.38.0 (2026-09-29)", as_of: 2026-10-03 }
  users: { value: "4M users, 60k+ custom nodes, 150k+ daily downloads (company claim)", as_of: 2026-04-24 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: comfy-gh
    resource: https://github.com/Comfy-Org/ComfyUI
    title: ComfyUI GitHub repository (GitHub API, 2026-10-03)
  - id: comfy-17m
    resource: https://blog.comfy.org/p/comfy-raises-17m-funding
    title: "Comfy blog: Comfy raises $17M funding (2025-09-16)"
  - id: comfy-30m
    resource: https://blog.comfy.org/p/comfyui-raises-30m-to-scale-open
    title: "Comfy blog: ComfyUI raises $30M to scale open-source AI for creative production (2026-04-24)"
  - id: gnw-comfy
    resource: https://www.globenewswire.com/news-release/2026/04/24/3281014/0/en/comfyui-raises-30m-at-500m-valuation-to-scale-open-source-ai-for-creative-production.html
    title: "GlobeNewswire: ComfyUI raises $30M at $500M valuation (2026-04-24)"
  - id: comfy-cloud
    resource: https://blog.comfy.org/p/comfy-cloud-is-now-in-public-beta
    title: "Comfy blog: Comfy Cloud is now in public beta (Nov 2025)"
  - id: comfy-api
    resource: https://blog.comfy.org/p/comfy-api-is-live-deploy-comfyui
    title: "Comfy blog: Comfy API is live (2026-09-30)"
  - id: comfy-upscaler-pm
    resource: https://blog.comfy.org/p/upscaler-4k-malicious-node-pack-post
    title: "Comfy blog: Upscaler-4K malicious node pack post-mortem (2026)"
  - id: thn-comfy-botnet
    resource: https://thehackernews.com/2026/04/over-1000-exposed-comfyui-instances.html
    title: "The Hacker News: Over 1,000 exposed ComfyUI instances targeted in cryptomining botnet (2026-04)"
  - id: wiki-comfy
    resource: https://en.wikipedia.org/wiki/ComfyUI
    title: "Wikipedia: ComfyUI"
  - id: comfy-desktop
    resource: https://github.com/Comfy-Org/desktop
    title: Comfy-Org/desktop repository (archived)
---

# Summary
ComfyUI is the node-based workflow engine that became the default open tool for image and video generation (SDXL, Flux, Wan, Hunyuan, LTX, Qwen-Image and more), with ~136k stars and weekly releases[^comfy-gh]. Its creator left Stability AI and formed Comfy Org with core contributors in June 2024[^wiki-comfy]. Comfy Org raised $17M (2025-09-16)[^comfy-17m] and $30M led by Craft Ventures at a $500M valuation (2026-04-24; ~$47M total), claiming 4M users, 60k+ community nodes and 150k+ daily downloads[^comfy-30m][^gnw-comfy]. Monetisation is cloud: Comfy Cloud public beta (Nov 2025, $20/month)[^comfy-cloud] and Comfy API for deploying workflows as autoscaling endpoints (2026-09-30)[^comfy-api]. The main risk is the custom-node ecosystem: a malicious registry node (Akira Stealer, Jan 2026, ~790 downloads) and a botnet campaign against exposed instances (Apr 2026)[^comfy-upscaler-pm][^thn-comfy-botnet]. Verdict: thriving on both axes.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-16 | Comfy Org raises $17M (Pace, Chemistry, Abstract, Essence VC)[^comfy-17m] | Business | + |
| W12 | 2025-11-05 | Comfy Cloud public beta[^comfy-cloud] | Business | + |
| W9 | 2026-01 | Malicious "Upscaler-4K" nodes in Comfy Registry deliver Akira Stealer; banned, post-mortem published[^comfy-upscaler-pm] | OSS | − |
| W6 | 2026-04 | Botnet campaign hijacks 1,000+ internet-exposed ComfyUI servers via unauthenticated nodes[^thn-comfy-botnet] | OSS | − |
| W6 | 2026-04-24 | $30M at $500M valuation led by Craft Ventures[^comfy-30m][^gnw-comfy] | Business | + |
| W6 | 2026-06 | Separate desktop repo archived (folded into main project)[^comfy-desktop] | OSS | ± |
| W3 | 2026-09-30 | Comfy API GA on paid plans[^comfy-api] | Business | + |

# OSS successes
- Became the reference implementation for day-0 support of new open image/video/audio models[^comfy-gh].
- Massive extension ecosystem (60k+ nodes)[^comfy-30m].
# OSS failures / risks
- Custom nodes execute arbitrary Python; repeated malware incidents (2024 LLMVISION, 2026 Upscaler-4K) and botnets[^comfy-upscaler-pm][^thn-comfy-botnet].
- GPL-3.0 plus company stewardship — future licence choices rest with Comfy Org.
# Business successes
- Two rounds within seven months; $500M valuation[^gnw-comfy].
- Clear cloud monetisation (Comfy Cloud, Comfy API) that doesn't restrict local use; "ComfyUI will always stay open" pledge[^comfy-30m][^comfy-api].
# Business failures / risks
- Competes with GPU clouds (RunComfy, etc.) hosting the same GPL code; closed video models (e.g., Wan 2.5/2.6) shift users to APIs.

# By window
## W3
- Comfy API GA (2026-09-30); weekly releases v0.28–v0.38[^comfy-api][^comfy-gh].
## W6
- $30M at $500M (2026-04-24); botnet campaign[^comfy-30m][^thn-comfy-botnet].
## W9
- Akira Stealer node incident[^comfy-upscaler-pm].
## W12
- Comfy Cloud public beta[^comfy-cloud].
## W24
- $17M raise (Sep 2025)[^comfy-17m].

# Lessons
- In generative media, the "engine + graph UI" that ships day-0 model support wins over polished but slower UIs (A1111, Fooocus, Invoke).
- Plugin marketplaces in AI apps need package-registry-grade security (signing, scanning, sandboxing).

# Related
- [Comfy Org](/organizations/comfy-org.md), [ComfyUI $30M event](/events/2026-04-comfyui-30m-500m-valuation.md)
- [AUTOMATIC1111 & Forge](/projects/ai-apps/automatic1111-webui.md), [InvokeAI](/projects/ai-apps/invokeai.md), [Fooocus](/projects/ai-apps/fooocus.md), [Stable Diffusion](/projects/ai-models/stable-diffusion.md), [FLUX](/projects/ai-models/flux.md)

[^comfy-gh]: GitHub API, Comfy-Org/ComfyUI — https://github.com/Comfy-Org/ComfyUI
[^comfy-17m]: Comfy blog, 2025-09-16 — https://blog.comfy.org/p/comfy-raises-17m-funding
[^comfy-30m]: Comfy blog, 2026-04-24 — https://blog.comfy.org/p/comfyui-raises-30m-to-scale-open
[^gnw-comfy]: GlobeNewswire, 2026-04-24 — https://www.globenewswire.com/news-release/2026/04/24/3281014/0/en/comfyui-raises-30m-at-500m-valuation-to-scale-open-source-ai-for-creative-production.html
[^comfy-cloud]: Comfy blog, Nov 2025 — https://blog.comfy.org/p/comfy-cloud-is-now-in-public-beta
[^comfy-api]: Comfy blog, 2026-09-30 — https://blog.comfy.org/p/comfy-api-is-live-deploy-comfyui
[^comfy-upscaler-pm]: Comfy blog post-mortem — https://blog.comfy.org/p/upscaler-4k-malicious-node-pack-post
[^thn-comfy-botnet]: The Hacker News, Apr 2026 — https://thehackernews.com/2026/04/over-1000-exposed-comfyui-instances.html
[^wiki-comfy]: Wikipedia: ComfyUI — https://en.wikipedia.org/wiki/ComfyUI
[^comfy-desktop]: Comfy-Org/desktop (archived) — https://github.com/Comfy-Org/desktop
