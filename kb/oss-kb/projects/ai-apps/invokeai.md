---
type: OSS Project
title: InvokeAI
description: "Apache-2.0 professional image-generation studio (~28k stars) whose VC-backed company Invoke had its team absorbed by Adobe's Firefly Foundry in Oct 2025, shutting the hosted product — the OSS survived under volunteer maintainers and keeps shipping (v6.14, Sep 2026): stable OSS, business acquired/failed."
resource: https://github.com/invoke-ai/InvokeAI
tags: [ai-apps, image-generation, apache-2.0, acqui-hire, community-stewardship]
domain: ai-apps
license: Apache-2.0
license_history: ["Apache-2.0 (2022-)"]
governance: community
steward: Community maintainers (formerly Invoke AI, Inc.)
backing_orgs: [organizations/invoke]
metrics:
  github_stars: { value: 28336, as_of: 2026-10-03 }
  latest_release: { value: "v6.14.2 (2026-09-27)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: acquired
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: down, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: invoke-gh
    resource: https://github.com/invoke-ai/InvokeAI
    title: InvokeAI GitHub repository (GitHub API, 2026-10-03)
  - id: adobe-foundry
    resource: https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry
    title: "Adobe newsroom: Adobe Firefly Foundry (2025-10-28) — Invoke team joins"
  - id: aieconomy-invoke
    resource: https://theaieconomy.substack.com/p/adobe-ai-foundry-invoke-acquisition
    title: "The AI Economy: Adobe AI Foundry / Invoke acquisition"
  - id: taonaw-invoke
    resource: https://taonaw.com/2025/10/21/invokeai-bought-by-adobe.html
    title: "Blog: InvokeAI bought by Adobe (2025-10-21)"
  - id: invoke-seed
    resource: https://invoke.ai/blog-invoke-ai-raises-3-75-million-seed-funding-to-bring-artificial-intelligence-technology-to-the-creative-process/
    title: "Invoke raises $3.75M seed (2023)"
  - id: invoke-pq
    resource: https://www.promptquorum.com/power-local-llm/invokeai-review
    title: "PromptQuorum: InvokeAI review 2026 (community stewardship, release history)"
---

# Summary
InvokeAI is a polished canvas-based image-generation studio under Apache-2.0 (~28k stars)[^invoke-gh]. Invoke AI, Inc. (seed $3.75M, 2023)[^invoke-seed] ran a paid hosted version; at Adobe MAX (announced 2025-10-28) Adobe said "the team from Invoke … has joined the Adobe Firefly Foundry team"[^adobe-foundry][^aieconomy-invoke]. The hosted service was shut down (reported end of Oct 2025) and the OSS passed to long-time maintainers (Lincoln Stein, blessedcoolant)[^invoke-pq][^taonaw-invoke]. The community edition kept releasing — v6.10 (Jan 2026) through v6.14.2 (2026-09-27), adding Wan 2.2 video and multi-GPU[^invoke-gh][^invoke-pq]. Verdict: OSS stable (survived its company); business acquired (acqui-hire, hosted product shut).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-28 | Adobe announces Invoke team has joined Firefly Foundry[^adobe-foundry] | Business | ± |
| W12 | 2025-10-31 | Hosted Invoke service ends (reported)[^invoke-pq] | Business | − |
| W9 | 2026-01-06 | v6.10.0 — first community-edition release post-company[^invoke-pq] | OSS | + |
| W6 | 2026-05-27 | v6.13.0 (external-provider models)[^invoke-pq] | OSS | + |
| W3 | 2026-08-25 → 09-27 | v6.14.x: video generation, Wan 2.2, multi-GPU[^invoke-gh] | OSS | + |

# OSS successes
- Apache-2.0 and engaged maintainers allowed a clean community continuation[^invoke-gh].
# OSS failures / risks
- Loss of paid engineering team; slower than ComfyUI on new models.
# Business successes
- Founders/team landed at Adobe (exit terms undisclosed)[^adobe-foundry].
# Business failures / risks
- Hosted SaaS discontinued; the company could not compete with Midjourney/Adobe on hosted and ComfyUI on local[^taonaw-invoke].

# By window
## W3
- v6.14 video/multi-GPU releases[^invoke-gh].
## W6
- v6.13[^invoke-pq].
## W9
- v6.10 first community release[^invoke-pq].
## W12
- Adobe absorbs Invoke team; hosted product ends[^adobe-foundry][^invoke-pq].
## W24
- No notable events found.

# Lessons
- Permissive licence + pre-existing non-employee maintainers is what lets an OSS project survive its company's acqui-hire.

# Related
- [Invoke (company)](/organizations/invoke.md), [Adobe absorbs Invoke](/events/2025-10-adobe-absorbs-invoke-team.md), [ComfyUI](/projects/ai-apps/comfyui.md), [AUTOMATIC1111](/projects/ai-apps/automatic1111-webui.md)

[^invoke-gh]: GitHub API, invoke-ai/InvokeAI — https://github.com/invoke-ai/InvokeAI
[^adobe-foundry]: Adobe newsroom, 2025-10-28 — https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry
[^aieconomy-invoke]: The AI Economy — https://theaieconomy.substack.com/p/adobe-ai-foundry-invoke-acquisition
[^taonaw-invoke]: taonaw blog, 2025-10-21 — https://taonaw.com/2025/10/21/invokeai-bought-by-adobe.html
[^invoke-seed]: Invoke blog, 2023 — https://invoke.ai/blog-invoke-ai-raises-3-75-million-seed-funding-to-bring-artificial-intelligence-technology-to-the-creative-process/
[^invoke-pq]: PromptQuorum review — https://www.promptquorum.com/power-local-llm/invokeai-review
