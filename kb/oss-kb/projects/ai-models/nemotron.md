---
type: OSS Project
title: NVIDIA Nemotron
description: "NVIDIA's open models with open data (Llama-Nemotron → Nemotron 3 Nano/Super/Ultra → 3.5 Lightning); grew into the largest new US open-model line, moved to the Linux Foundation's OpenMDW-1.1 license in mid-2026, and is used to sell GPUs rather than as a standalone business."
resource: https://huggingface.co/nvidia
tags: [open-weights, open-data, llm, nvidia, us-open-models, hybrid-mamba]
domain: ai-models
license: "OpenMDW-1.1 (new releases from mid-2026, e.g. Nemotron 3 Ultra); NVIDIA Open Model License (earlier Nemotron 3 checkpoints)"
license_history: ["Llama license for Llama-Nemotron derivatives (2025)", "NVIDIA Open Model License (Nemotron 3, 2025-12-)", "OpenMDW-1.1 adopted for future Nemotron/Cosmos/GR00T releases (2026-05/06)"]
governance: single-vendor
steward: NVIDIA
backing_orgs: []
metrics:
  hf_cumulative_downloads_atom: { value: "30.7 million (Aug 2025–Mar 2026)", as_of: 2026-03-31 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-nemotron
    resource: https://en.wikipedia.org/wiki/Nemotron
    title: "Wikipedia: Nemotron"
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report (arXiv 2604.07190)"
  - id: wiki-hf
    resource: https://en.wikipedia.org/wiki/Hugging_Face
    title: "Wikipedia: Hugging Face"
  - id: mtp-ultra
    resource: https://www.marktechpost.com/2026/06/04/nvidia-ai-releases-nemotron-3-ultra-an-open-550b-mixture-of-experts-hybrid-mamba-transformer-for-long-running-agents/
    title: "MarkTechPost: NVIDIA releases Nemotron 3 Ultra, an open 550B MoE hybrid Mamba-Transformer (2026-06-04)"
  - id: nvidia-openmdw
    resource: https://x.com/NVIDIAAI/status/2060035668655677804
    title: "NVIDIA AI on X: adopting the Linux Foundation's OpenMDW framework across open model families"
    author: org:nvidia
  - id: cnbc-lightning
    resource: https://www.cnbc.com/2026/08/11/nvidia-releases-nemotron-3point5-lightning-open-source-ai-model-.html
    title: "CNBC: Nvidia releases Nemotron 3.5 Lightning, open-source AI model (2026-08-11)"
    author: org:cnbc
  - id: aa-lightning
    resource: https://artificialanalysis.ai/articles/nemotron-3-5-lightning-launch
    title: "Artificial Analysis: NVIDIA launches Nemotron 3.5 Lightning"
  - id: tc-nvda-hf
    resource: https://techcrunch.com/2026/09/03/nvidia-confirms-it-will-buy-hugging-face-for-12-9-billion/
    title: "TechCrunch: Nvidia confirms it will buy Hugging Face for $12.9 billion (2026-09-03)"
    author: org:techcrunch
---

# Summary
Nemotron evolved from Llama-derived reasoning models (Llama-Nemotron, 2025) into NVIDIA's own Nemotron 3 generation: Nano (30B/3B active, Dec 2025), Super (120B/12B active, 11 Mar 2026), Nano Omni (28 Apr 2026) and Ultra (550B/55B active, 4 Jun 2026), released with open weights, training data and software — earlier checkpoints under the NVIDIA Open Model License, Ultra under the Linux Foundation's permissive OpenMDW-1.1, which NVIDIA adopted for its open model families in mid-2026[^wiki-nemotron][^mtp-ultra][^nvidia-openmdw]. Nemotron 3.5 Lightning (31.6B/3.6B active, 11 Aug 2026) followed[^cnbc-lightning][^aa-lightning]. The ATOM report counts 30.7M downloads between Aug 2025 and Mar 2026 — the strongest new US entrant[^atom-report]. NVIDIA's $12.93B deal to acquire Hugging Face (announced 3 Sept 2026)[^wiki-hf] deepens its role as the US open-model patron.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025 | Llama-Nemotron reasoning models[^wiki-nemotron] | OSS | + |
| W12 | 2025-12 | Nemotron 3 announced; Nano (30B-A3B) released[^wiki-nemotron] | OSS | + |
| W9 | 2026-03-11 | Nemotron 3 Super (120B-A12B)[^wiki-nemotron] | OSS | + |
| W6 | 2026-04-28 | Nano Omni multimodal[^wiki-nemotron] | OSS | + |
| W6 | 2026-05/06 | NVIDIA adopts Linux Foundation OpenMDW-1.1 for Nemotron, Cosmos, Isaac GR00T, Ising releases[^nvidia-openmdw] | OSS | + |
| W6 | 2026-06-04 | Nemotron 3 Ultra (550B-A55B, 1M context) with weights, data and recipes under OpenMDW-1.1[^mtp-ultra] | OSS | + |
| W3 | 2026-08-11 | Nemotron 3.5 Lightning (31.6B/3.6B active hybrid Mamba MoE; +9 on AA Intelligence Index vs 3 Nano)[^cnbc-lightning][^aa-lightning] | OSS | + |
| W3 | 2026-09-03 | NVIDIA agrees to acquire Hugging Face for $12.93B (close expected H1 2027); pledges HF stays hardware-neutral[^tc-nvda-hf] | Business | mixed |

# OSS successes
- Open training data alongside weights — rarer than weights-only releases[^wiki-nemotron].
- Fastest-growing new US family by downloads[^atom-report].

# OSS failures / risks
- Earlier checkpoints under custom NVIDIA Open Model License; mixed licensing across checkpoints during the OpenMDW transition[^nvidia-openmdw].
- Vendor incentive to optimise for NVIDIA hardware.

# Business successes
- n/a (drives GPU, NIM and enterprise software demand).

# Business failures / risks
- n/a

# By window
## W3
- Nemotron 3.5 Lightning (Aug 11)[^cnbc-lightning]; HF acquisition announced (Sept 3)[^tc-nvda-hf].
## W6
- Nano Omni (Apr 28)[^wiki-nemotron]; OpenMDW adoption; Ultra (Jun 4)[^mtp-ultra].
## W9
- Super (Mar 11)[^wiki-nemotron].
## W12
- Nemotron 3 Nano (Dec 2025)[^wiki-nemotron].
## W24
- Llama-Nemotron series[^wiki-nemotron].

# Lessons
- Hardware vendors have the clearest economic reason to fund open models ("commoditise the complement").

# Related
- [Hugging Face org](/organizations/hugging-face.md), [NVIDIA–Hugging Face event](/events/2026-09-nvidia-to-acquire-hugging-face.md)

[^wiki-nemotron]: Wikipedia, Nemotron.
[^atom-report]: ATOM Report, Apr 2026.
[^wiki-hf]: Wikipedia, Hugging Face (citing The Information).
[^mtp-ultra]: MarkTechPost, 4 Jun 2026.
[^nvidia-openmdw]: NVIDIA AI on X, ~late May 2026 (exact date not confirmed).
[^cnbc-lightning]: CNBC, 11 Aug 2026.
[^aa-lightning]: Artificial Analysis, Aug 2026.
[^tc-nvda-hf]: TechCrunch, 3 Sept 2026.
