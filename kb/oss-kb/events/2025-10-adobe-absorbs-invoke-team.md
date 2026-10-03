---
type: Event
title: Adobe absorbs Invoke team; hosted InvokeAI shuts down
description: "At Adobe MAX (announced 2025-10-28) Adobe said the Invoke team had joined Adobe Firefly Foundry; Invoke's hosted service closed and the Apache-2.0 InvokeAI project passed to community maintainers."
event_kind: acquisition
date: 2025-10-28
window: W12
impact: mixed
projects: [projects/ai-apps/invokeai]
organizations: [organizations/invoke]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: adobe-foundry
    resource: https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry
    title: "Adobe newsroom: Adobe Firefly Foundry (2025-10-28)"
  - id: aieconomy-invoke
    resource: https://theaieconomy.substack.com/p/adobe-ai-foundry-invoke-acquisition
    title: "The AI Economy: Adobe AI Foundry / Invoke acquisition"
  - id: invoke-pq
    resource: https://www.promptquorum.com/power-local-llm/invokeai-review
    title: "PromptQuorum: InvokeAI review 2026"
  - id: invoke-gh
    resource: https://github.com/invoke-ai/InvokeAI
    title: InvokeAI GitHub repository
---

# What happened
Adobe's Firefly Foundry announcement stated that "the team from Invoke … has joined the Adobe Firefly Foundry team"[^adobe-foundry]; press described it as an acquisition[^aieconomy-invoke]. The paid hosted service ended (reported 2025-10-31) and long-time maintainers took over the open-source project[^invoke-pq].

# Why it matters
A textbook acqui-hire of a COSS creative-AI startup by an incumbent, and a test of whether an Apache-2.0 app can survive losing its paid team.

# Outcome so far
It did: community releases resumed with v6.10 (Jan 2026) and reached v6.14.2 (2026-09-27) with video and multi-GPU support[^invoke-gh][^invoke-pq].

# Related
- [InvokeAI](/projects/ai-apps/invokeai.md), [Invoke](/organizations/invoke.md), [ComfyUI](/projects/ai-apps/comfyui.md)

[^adobe-foundry]: Adobe newsroom — https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry
[^aieconomy-invoke]: The AI Economy — https://theaieconomy.substack.com/p/adobe-ai-foundry-invoke-acquisition
[^invoke-pq]: PromptQuorum — https://www.promptquorum.com/power-local-llm/invokeai-review
[^invoke-gh]: GitHub — https://github.com/invoke-ai/InvokeAI
