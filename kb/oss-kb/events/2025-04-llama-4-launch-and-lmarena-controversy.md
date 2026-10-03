---
type: Event
title: Llama 4 launch and LMArena benchmark controversy
description: "Meta's Llama 4 Scout/Maverick (5 Apr 2025) underwhelmed developers and Meta was criticised for submitting an unreleased chat-tuned variant to LMArena — the start of Llama's decline."
event_kind: release
date: 2025-04-05
window: W24
impact: negative
projects: [projects/ai-models/meta-llama]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: meta-llama4
    resource: https://ai.meta.com/blog/llama-4-multimodal-intelligence/
    title: "Meta AI blog: The Llama 4 herd (2025-04-05)"
  - id: tc-llama4
    resource: https://techcrunch.com/2025/04/05/meta-releases-llama-4-a-new-crop-of-flagship-ai-models
    title: "TechCrunch: Meta releases Llama 4, a new crop of flagship AI models (2025-04-05)"
  - id: tc-misleading
    resource: https://techcrunch.com/2025/04/06/metas-benchmarks-for-its-new-ai-models-are-a-bit-misleading/
    title: "TechCrunch: Meta's benchmarks for its new AI models are a bit misleading (2025-04-06)"
  - id: tc-deny
    resource: https://techcrunch.com/2025/04/07/meta-exec-denies-the-company-artificially-boosted-llama-4s-benchmark-scores/
    title: "TechCrunch: Meta exec denies the company artificially boosted Llama 4's benchmark scores (2025-04-07)"
  - id: vb-muse-spark
    resource: https://venturebeat.com/technology/goodbye-llama-meta-launches-new-proprietary-ai-model-muse-spark-first-since
    title: "VentureBeat: Goodbye, Llama?"
  - id: hf-meta-llama
    resource: https://huggingface.co/meta-llama
    title: meta-llama on Hugging Face
---

# What happened
On 5 Apr 2025 Meta released Llama 4 Scout (17B active parameters, 10M-token context) and Maverick (17B active, MoE), with the larger Behemoth still training.[^meta-llama4][^tc-llama4] Meta's launch post cited an "experimental chat version" of Maverick scoring 1417 Elo on LMArena. That variant was not the released weights, and researchers saw the public model behave very differently.[^meta-llama4][^tc-misleading] Meta's VP of generative AI, Ahmad Al-Dahle, denied rumours that Meta had trained on test sets.[^tc-deny]

# Why it matters
It broke developer trust in Meta's benchmark claims just as Qwen3 (Apr 2025) and DeepSeek were surging; Llama 4 "failed to gain expected developer traction".[^vb-muse-spark]

# Outcome so far
No new Llama checkpoint followed as of Oct 2026, and Behemoth was never released.[^hf-meta-llama] Meta reorganised into MSL and launched the closed Muse Spark in Apr 2026.[^vb-muse-spark]

# Related
- [Meta Llama](/projects/ai-models/meta-llama.md), [Muse Spark pivot](/events/2026-04-meta-muse-spark-closed-pivot.md)

[^meta-llama4]: Meta AI blog — https://ai.meta.com/blog/llama-4-multimodal-intelligence/
[^tc-llama4]: TechCrunch — https://techcrunch.com/2025/04/05/meta-releases-llama-4-a-new-crop-of-flagship-ai-models
[^tc-misleading]: TechCrunch — https://techcrunch.com/2025/04/06/metas-benchmarks-for-its-new-ai-models-are-a-bit-misleading/
[^tc-deny]: TechCrunch — https://techcrunch.com/2025/04/07/meta-exec-denies-the-company-artificially-boosted-llama-4s-benchmark-scores/
[^vb-muse-spark]: VentureBeat — https://venturebeat.com/technology/goodbye-llama-meta-launches-new-proprietary-ai-model-muse-spark-first-since
[^hf-meta-llama]: Hugging Face — https://huggingface.co/meta-llama
