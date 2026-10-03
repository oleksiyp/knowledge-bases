---
type: OSS Project
title: Microsoft Phi
description: "Microsoft's MIT-licensed small language models (Phi-4 family); stable niche for on-device/edge, with low-cadence releases into 2026."
resource: https://huggingface.co/microsoft
tags: [open-weights, small-language-model, mit, big-tech, on-device]
domain: ai-models
license: MIT
license_history: ["MIT (Phi-3 onward)"]
governance: single-vendor
steward: Microsoft
backing_orgs: []
metrics: {}
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: n/a, W6: n/a, W9: flat, W12: n/a, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-phi
    resource: https://en.wikipedia.org/wiki/Phi_(language_model)
    title: "Wikipedia: Phi (language model)"
  - id: ms-phi4rv
    resource: https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-phi-4-reasoning-vision-to-microsoft-foundry/4499154
    title: "Microsoft Community Hub: Introducing Phi-4-Reasoning-Vision to Microsoft Foundry (2026-03)"
    author: org:microsoft
  - id: ms-phi4
    resource: https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-phi-4-microsoft%E2%80%99s-newest-small-language-model-specializing-in-comple/4357090
    title: "Microsoft Community Hub: Introducing Phi-4 (2024-12)"
    author: org:microsoft
  - id: geekwire-farhadi
    resource: https://www.geekwire.com/2026/microsoft-hires-former-ai2-ceo-ali-farhadi-and-key-researchers-for-suleymans-ai-team/
    title: "GeekWire: Microsoft hires former Ai2 CEO Ali Farhadi and key researchers for Suleyman's AI team (2026-03)"
---

# Summary
Phi is Microsoft's small-model line, all MIT-licensed[^wiki-phi]. Phi-4 (14B, Dec 2024) and its mini/reasoning variants in 2025 kept Phi relevant for on-device use; the most recent verified release is Phi-4-reasoning-vision-15B (Mar 2026), which adaptively decides when to reason[^wiki-phi]. Phi has been eclipsed in popularity by Qwen's and Gemma's small models; Microsoft's strategic attention moved to its own proprietary models. Verdict: stable niche.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12 | Phi-4 (14B) announced; MIT weights on HF followed in Jan 2025[^ms-phi4][^wiki-phi] | OSS | + |
| W24 | 2025 | Phi-4-mini / Phi-4-reasoning variants (dates unverified) | OSS | + |
| W9 | 2026-03-04 | Phi-4-reasoning-vision-15B with selective reasoning[^wiki-phi][^ms-phi4rv] | OSS | + |
| W9 | 2026-03 | Microsoft hires ex-Ai2 CEO Ali Farhadi and OLMo co-lead Hanna Hajishirzi for Suleyman's superintelligence team (in-house MAI models, not Phi)[^geekwire-farhadi] | Business | mixed |

# OSS successes
- Permissive MIT license across the line[^wiki-phi].

# OSS failures / risks
- Slow cadence; overshadowed by Qwen3/Gemma 4 small models.

# Business successes
- n/a

# Business failures / risks
- n/a

# By window
## W3
- No notable events found (searched Jul–Oct 2026; no new Phi release).
## W6
- No notable events found.
## W9
- Phi-4-reasoning-vision-15B (Mar 4, 2026)[^ms-phi4rv]; Microsoft's research hiring goes to MAI superintelligence rather than Phi[^geekwire-farhadi].
## W12
- No notable events found.
## W24
- Phi-4 family rollout.

# Lessons
- Small-model "textbook data" differentiation is hard to sustain when competitors ship full size ladders.

# Related
- [Gemma](/projects/ai-models/gemma.md), [Granite](/projects/ai-models/granite.md)

[^wiki-phi]: Wikipedia, Phi (language model).
[^ms-phi4rv]: Microsoft Foundry blog, Mar 2026.
[^ms-phi4]: Microsoft Foundry blog, Dec 2024.
[^geekwire-farhadi]: GeekWire, Mar 2026.
