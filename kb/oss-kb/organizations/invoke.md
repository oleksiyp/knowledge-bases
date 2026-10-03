---
type: Organization
title: Invoke (Invoke AI, Inc.)
description: "VC-backed company ($3.75M seed, 2023) behind InvokeAI's hosted creative platform; its team joined Adobe's Firefly Foundry in Oct 2025 and the hosted service shut down, leaving the Apache-2.0 project to community maintainers."
resource: https://invoke.ai
tags: [commercial-open-source, ai-apps, image-generation, acqui-hire]
org_kind: coss-startup
hq: undisclosed
funding: { total_usd: "≥$3.75M (seed, 2023)", last_round: "Seed", last_round_date: 2023-10, valuation_usd: "undisclosed" }
business_verdict: acquired
projects: [projects/ai-apps/invokeai]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: invoke-seed
    resource: https://invoke.ai/blog-invoke-ai-raises-3-75-million-seed-funding-to-bring-artificial-intelligence-technology-to-the-creative-process/
    title: "Invoke raises $3.75M seed (2023)"
  - id: adobe-foundry
    resource: https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry
    title: "Adobe newsroom: Firefly Foundry (2025-10-28)"
  - id: invoke-pq
    resource: https://www.promptquorum.com/power-local-llm/invokeai-review
    title: "PromptQuorum: InvokeAI review 2026"
---

# Summary
Invoke commercialised InvokeAI as a hosted studio for creative teams after a $3.75M seed[^invoke-seed]. Adobe announced on 2025-10-28 that "the team from Invoke … has joined the Adobe Firefly Foundry team"; CEO Kent Keirsey went too. The hosted product was shut (reported 2025-10-31) and the OSS passed to volunteer maintainers[^adobe-foundry][^invoke-pq]. Deal terms were not disclosed (often described as an acquisition; Adobe's wording is a team join).

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W12 | 2025-10-28 | Team joins Adobe Firefly Foundry[^adobe-foundry] | ± |
| W12 | 2025-10-31 | Hosted service ends (reported)[^invoke-pq] | − |

# Monetization model
Formerly: hosted SaaS subscriptions and enterprise deployments of InvokeAI.

# Successes
- Team exit to Adobe; OSS preserved under Apache-2.0.

# Failures / risks
- Independent hosted business did not survive competition from Midjourney/Adobe and ComfyUI.

# Related
- [InvokeAI](/projects/ai-apps/invokeai.md), [Adobe absorbs Invoke](/events/2025-10-adobe-absorbs-invoke-team.md)

[^invoke-seed]: Invoke blog — https://invoke.ai/blog-invoke-ai-raises-3-75-million-seed-funding-to-bring-artificial-intelligence-technology-to-the-creative-process/
[^adobe-foundry]: Adobe newsroom — https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry
[^invoke-pq]: PromptQuorum — https://www.promptquorum.com/power-local-llm/invokeai-review
