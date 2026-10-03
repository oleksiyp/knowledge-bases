---
type: OSS Project
title: Mistral models
description: "Mistral AI's open-weight model line (Small, Large 3, Devstral, Magistral, Medium 3.5); oscillated between closed and Apache-2.0 releases but ended the period as Europe's flagship open-weight lab with a €21B (~$24B) valuation after its Sept 2026 Series D."
resource: https://huggingface.co/mistralai
tags: [open-weights, llm, apache-2.0, europe, sovereign-ai]
domain: ai-models
license: "Apache-2.0 (Small 3/4, Large 3, Ministral 3); Modified MIT (Medium 3.5); some models API-only"
license_history: ["Mix of Apache-2.0 and Mistral Research/Non-Production License (2024)", "Return to Apache-2.0 for Small 3 (2025-01)", "Medium 3 API-only (2025-05)", "Mistral 3 family incl. Large 3 Apache-2.0 (2025-12)", "Medium 3.5 Modified MIT with large-revenue exception (2026-05)"]
governance: single-vendor
steward: Mistral AI
backing_orgs: [organizations/mistral-ai]
metrics:
  hf_followers: { value: 19681, as_of: 2026-10-03 }
  medium_3_5_downloads_last_month: { value: "127k", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-mistral
    resource: https://en.wikipedia.org/wiki/Mistral_AI
    title: "Wikipedia: Mistral AI"
  - id: mistral-news
    resource: https://mistral.ai/news
    title: Mistral AI news page
    last_modified: 2026-10-03T00:00:00Z
  - id: hf-large3
    resource: https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512
    title: Mistral-Large-3-675B-Instruct-2512 model card
  - id: hf-small4
    resource: https://huggingface.co/mistralai/Mistral-Small-4-119B-2603-NVFP4
    title: Mistral-Small-4-119B-2603 model card
  - id: hf-medium35
    resource: https://huggingface.co/mistralai/Mistral-Medium-3.5-128B
    title: Mistral-Medium-3.5-128B model card
  - id: hf-mistral
    resource: https://huggingface.co/mistralai
    title: mistralai organization on Hugging Face
  - id: dcd-series-d
    resource: https://www.datacenterdynamics.com/en/news/mistral-raises-3bn-in-series-d-led-by-samsung-electronics/
    title: "DCD: Mistral raises €3bn in Series D led by Samsung Electronics"
    author: org:datacenterdynamics
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report (arXiv 2604.07190)"
  - id: tc-series-d
    resource: https://techcrunch.com/2026/09/08/mistral-raises-e3b-as-sovereign-ai-becomes-big-business/
    title: "TechCrunch: Mistral raises €3B as sovereign AI becomes big business (2026-09-08)"
    author: org:techcrunch
  - id: bbg-series-d
    resource: https://www.bloomberg.com/news/articles/2026-09-08/mistral-ai-raises-at-21-billion-valuation-in-samsung-led-round
    title: "Bloomberg: Mistral AI raises at €21 billion valuation in Samsung-led round (2026-09-08)"
    author: org:bloomberg
  - id: mistral-series-c
    resource: https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai/
    title: "Mistral AI: Mistral AI raises 1.7B€ to accelerate technological progress with AI (Series C, 2025-09)"
  - id: dcd-series-c
    resource: https://www.datacenterdynamics.com/en/news/mistral-ai-raises-17bn-in-funding-round-led-by-asml/
    title: "DCD: Mistral AI raises €1.7bn in funding round led by ASML"
    author: org:datacenterdynamics
  - id: mistral-medium35-news
    resource: https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/
    title: "Mistral AI: Remote agents in Vibe. Powered by Mistral Medium 3.5."
  - id: decoder-medium35
    resource: https://the-decoder.com/mistrals-new-flagship-medium-3-5-folds-chat-reasoning-and-code-into-one-model/
    title: "The Decoder: Mistral's new flagship Medium 3.5 folds chat, reasoning, and code into one model (2026-05-01)"
  - id: mistral-shieldstral
    resource: https://mistral.ai/news/shieldstral/
    title: "Mistral AI: Introducing Shieldstral"
  - id: mistral-emmi
    resource: https://mistral.ai/news/accelerate-ai-native-industry/
    title: "Mistral AI: Emmi joins Mistral to accelerate the AI-native industry (2026-05)"
  - id: vktr-koyeb
    resource: https://www.vktr.com/ai-news/mistral-ai-acquires-koyeb-to-bolster-cloud-infrastructure/
    title: "VKTR: Mistral AI acquires Koyeb to bolster cloud infrastructure (2026-02)"
  - id: pymnts-arr
    resource: https://www.pymnts.com/artificial-intelligence-2/2026/mistral-pushes-eu-ai-freedom-as-revenues-top-400-million/
    title: "PYMNTS: Mistral pushes EU AI freedom as revenues top $400 million (2026-01, citing FT interview)"
---

# Summary
Mistral's models are Europe's main contribution to open weights. After a 2024 detour into restrictive "research/non-production" licenses, Mistral re-committed to Apache-2.0 with Small 3 (Jan 2025) and the Mistral 3 family including the 675B Large 3 (Dec 2025)[^wiki-mistral][^hf-large3], followed by Small 4 (119B MoE, Mar 2026, Apache-2.0)[^hf-small4]. Its Medium 3.5 (released ~30 Apr 2026) shipped open weights under a Modified MIT license with a high-revenue-company exception[^hf-medium35][^decoder-medium35] — part of a wider 2026 trend of revenue-gated licenses. Downloads are modest next to Qwen (all of Europe had 163M cumulative HF downloads vs China's 1.15B by Mar 2026)[^atom-report], but the business behind it is thriving: ARR passed $400M in Jan 2026 (CEO target: >$1B by end-2026)[^pymnts-arr] and a €3B Series D in Sept 2026 valued it at €21B post-money (~$24B)[^tc-series-d][^bbg-series-d].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01 | Mistral Small 3 (24B) Apache-2.0[^wiki-mistral] | OSS | + |
| W24 | 2025-05 | Mistral Medium 3 (API-only) and Devstral Small[^wiki-mistral] | OSS | mixed |
| W24 | 2025-06 | Magistral reasoning models; Mistral Compute announced (2025-06-11)[^wiki-mistral][^mistral-news] | OSS/Business | + |
| W24 | 2025-09-09 | €1.7B Series C led by ASML (€1.3B, ~11% stake) at €11.7B post-money[^mistral-series-c][^dcd-series-c] | Business | + |
| W12 | 2025-12-02 | Mistral 3 family incl. Large 3 (675B, 41B active) under Apache-2.0[^hf-large3][^mistral-news] | OSS | + |
| W12 | 2025-12-09 | Devstral 2 + Mistral Vibe CLI[^mistral-news] | OSS | + |
| W9 | 2026-01 | ARR "north of $400M" (vs ~$20M a year earlier); CEO targets >$1B revenue by end-2026[^pymnts-arr] | Business | + |
| W9 | 2026-02-17 | First acquisition: Koyeb (serverless platform) folded into Mistral Compute[^vktr-koyeb] | Business | + |
| W9 | 2026-03-16 | Mistral Small 4 (119B MoE, 6.5B active) Apache-2.0; NVIDIA partnership[^hf-small4][^mistral-news] | OSS | + |
| W6 | 2026-04-30 | Medium 3.5 (128B dense, 77.6% SWE-bench Verified) open weights under Modified MIT with high-revenue exception; replaces Devstral 2 in Vibe[^hf-medium35][^mistral-medium35-news][^decoder-medium35] | OSS | mixed |
| W6 | 2026-05-19 | Acquires Emmi AI (Austrian physics-AI startup; price undisclosed)[^mistral-emmi] | Business | + |
| W3 | 2026-08-04 | Shieldstral 1.0 (3B multimodal, policy-adaptive safety model) under Apache-2.0[^mistral-shieldstral] | OSS | + |
| W3 | 2026-09-08 | €3B Series D at €21B+ post-money (~$24B) led by Samsung, co-led by EQT's Scaleup Europe Fund and PSG; largest European tech equity round[^tc-series-d][^bbg-series-d][^dcd-series-d] | Business | + |

# OSS successes
- Frontier-scale Apache-2.0 model from Europe (Large 3)[^hf-large3]; consistent Apache-2.0 small models.
- Ecosystem tie-ins: NVIDIA (NVFP4 builds), vLLM recommended serving[^hf-medium35][^hf-small4].

# OSS failures / risks
- License inconsistency (research licenses → Apache → Modified MIT) confuses adopters[^wiki-mistral][^hf-medium35].
- Small share of global downloads vs Chinese labs[^atom-report].

# Business successes
- See [Mistral AI](/organizations/mistral-ai.md): €3B Series D (Sept 2026)[^tc-series-d]; ARR >$400M (Jan 2026)[^pymnts-arr]; sovereign-AI positioning; acquisitions of Koyeb and Emmi AI[^vktr-koyeb][^mistral-emmi].

# Business failures / risks
- Best models (e.g., Medium tiers historically) often API-only; open line could become a marketing tier.

# By window
## W3
- Series D €3B at €21B (Sept 8)[^tc-series-d]; Shieldstral Apache-2.0 (Aug 4)[^mistral-shieldstral].
## W6
- Medium 3.5 under Modified MIT (Apr 30)[^decoder-medium35]; Emmi AI acquisition (May 19)[^mistral-emmi].
## W9
- Small 4 Apache-2.0 (Mar 16)[^hf-small4]; Koyeb acquisition (Feb 17)[^vktr-koyeb]; ARR >$400M (Jan)[^pymnts-arr].
## W12
- Mistral 3 / Large 3 Apache-2.0; Devstral 2 (Dec 2025)[^mistral-news].
## W24
- Small 3 Apache-2.0[^wiki-mistral]; ASML-led €1.7B Series C at €11.7B (Sept 2025)[^mistral-series-c].

# Lessons
- "Sovereign AI" demand can fund an open-weight lab even with small download share.
- License churn erodes the trust that permissive licensing is meant to build.

# Related
- [Mistral AI org](/organizations/mistral-ai.md)
- [Mistral Series D event](/events/2026-09-mistral-series-d-samsung.md)
- [Flagship license tightening](/events/2026-07-kimi-k3-and-flagship-license-tightening.md)

[^wiki-mistral]: Wikipedia, Mistral AI.
[^mistral-news]: mistral.ai/news (accessed 2026-10-03).
[^hf-large3]: HF model card, Mistral Large 3.
[^hf-small4]: HF model card, Mistral Small 4.
[^hf-medium35]: HF model card, Mistral Medium 3.5.
[^hf-mistral]: HF mistralai org.
[^dcd-series-d]: DatacenterDynamics, 8 Sept 2026.
[^tc-series-d]: TechCrunch, 8 Sept 2026 (€3B ≈ $3.58B; €21B ≈ $24.4B). Pass 2 note: dollar figures of ~$31B seen elsewhere are not supported by TechCrunch/Bloomberg.
[^bbg-series-d]: Bloomberg, 8 Sept 2026.
[^mistral-series-c]: Mistral AI announcement, Sept 2025 (Series C; 2025 round is Series C, 2026 round is Series D).
[^dcd-series-c]: DatacenterDynamics, Sept 2025.
[^mistral-medium35-news]: Mistral AI news, Medium 3.5 / Vibe remote agents.
[^decoder-medium35]: The Decoder, 1 May 2026. Corrected in pass 2: Medium 3.5 date 2026-05-22 → ~2026-04-30.
[^mistral-shieldstral]: Mistral AI news, Shieldstral (4 Aug 2026).
[^mistral-emmi]: Mistral AI news, Emmi AI acquisition (19 May 2026). Corrected in pass 2: May 23 → May 19.
[^vktr-koyeb]: VKTR, Feb 2026.
[^pymnts-arr]: PYMNTS, Jan 2026 (citing Mensch's FT interview).
[^atom-report]: ATOM Report, Apr 2026.
