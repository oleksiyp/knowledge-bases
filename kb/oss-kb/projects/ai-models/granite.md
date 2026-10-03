---
type: OSS Project
title: IBM Granite
description: "IBM's Apache-2.0 enterprise models; Granite 4.0 (Oct 2025) hybrid Mamba models with ISO 42001 certification, then dense Granite 4.1 (Apr 2026) and reasoning Granite 4.2 (Aug 2026) — trusted, steady cadence, low adoption."
resource: https://huggingface.co/ibm-granite
tags: [open-weights, apache-2.0, enterprise, hybrid-mamba, big-tech]
domain: ai-models
license: Apache-2.0
license_history: ["Apache-2.0 (2024-)"]
governance: single-vendor
steward: IBM
backing_orgs: []
metrics:
  hf_cumulative_downloads_atom: { value: "8.6 million", as_of: 2026-03-31 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ibm-granite4
    resource: https://www.ibm.com/new/announcements/ibm-granite-4-0-hyper-efficient-high-performance-hybrid-models
    title: "IBM: Granite 4.0 hyper-efficient, high performance hybrid models"
    author: org:ibm
  - id: wiki-granite
    resource: https://en.wikipedia.org/wiki/IBM_Granite
    title: "Wikipedia: IBM Granite"
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report (arXiv 2604.07190)"
  - id: hf-granite41
    resource: https://huggingface.co/ibm-granite/granite-4.1-8b
    title: granite-4.1-8b model card (Hugging Face)
  - id: mtp-granite-speech41
    resource: https://www.marktechpost.com/2026/04/30/ibm-releases-two-granite-speech-4-1-2b-models-autoregressive-asr-with-translation-and-non-autoregressive-editing-for-fast-inference/
    title: "MarkTechPost: IBM releases two Granite Speech 4.1 2B models (2026-04-30)"
  - id: hf-granite42
    resource: https://huggingface.co/ibm-granite/granite-4.2-30b
    title: granite-4.2-30b model card (Hugging Face)
  - id: mtp-granite42
    resource: https://www.marktechpost.com/2026/08/25/ibm-releases-granite-4-2-bringing-native-reasoning-and-agentic-rl-to-open-enterprise-models/
    title: "MarkTechPost: IBM releases Granite 4.2, bringing native reasoning and agentic RL to open enterprise models (2026-08-25)"
---

# Summary
Granite is IBM's enterprise-oriented, Apache-2.0 model family[^wiki-granite]. Granite 4.0 (2 Oct 2025) introduced hybrid Mamba-2/transformer models (H-Small 32B/9B active, H-Tiny 7B/1B active, H-Micro 3B) claiming >70% lower RAM for long contexts, was billed as the only open model family with ISO 42001 certification, and ships cryptographically signed checkpoints[^ibm-granite4]. IBM then shipped dense Granite 4.1 (3B/8B/30B, up to 512K context, ~29 Apr 2026) and Granite 4.2 (25 Aug 2026; 3B/8B/30B with switchable native reasoning, Apache-2.0)[^hf-granite41][^mtp-granite42]. Adoption is modest (8.6M cumulative HF downloads by Mar 2026)[^atom-report].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-10-02 | Granite 4.0 hybrid Mamba models, ISO 42001, signed checkpoints[^ibm-granite4] | OSS | + |
| W9 | 2026-03 | ATOM report: 8.6M cumulative downloads[^atom-report] | OSS | flat |
| W6 | 2026-04-29/30 | Granite 4.1 dense 3B/8B/30B (up to 512K context) and Granite Speech 4.1 2B models[^hf-granite41][^mtp-granite-speech41] | OSS | + |
| W3 | 2026-08-25 | Granite 4.2 (3B/8B/30B) with native, toggleable reasoning; 30B scores 57.0 on SWE-bench Verified (IBM testing)[^mtp-granite42][^hf-granite42] | OSS | + |

# OSS successes
- Governance/trust features (ISO 42001, signing) unique among open families[^ibm-granite4].
- Reliable Apache-2.0 cadence (4.0 → 4.1 → 4.2 within 11 months)[^mtp-granite42].

# OSS failures / risks
- Low developer mindshare[^atom-report].
- Moved back from hybrid Mamba to dense architecture in 4.1/4.2, blurring the differentiator[^mtp-granite42].

# Business successes
- n/a (funnel to watsonx).

# Business failures / risks
- n/a

# By window
## W3
- Granite 4.2 (Aug 25)[^mtp-granite42].
## W6
- Granite 4.1 and Granite Speech 4.1 (late Apr)[^hf-granite41][^mtp-granite-speech41].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Granite 4.0 (Oct 2, 2025)[^ibm-granite4].

# Lessons
- Enterprise trust features matter for procurement but do not drive community adoption.

# Related
- [Phi](/projects/ai-models/phi.md), [Nemotron](/projects/ai-models/nemotron.md)

[^ibm-granite4]: IBM announcement, 2 Oct 2025.
[^wiki-granite]: Wikipedia, IBM Granite.
[^atom-report]: ATOM Report, Apr 2026.
[^hf-granite41]: Hugging Face, granite-4.1-8b model card.
[^mtp-granite-speech41]: MarkTechPost, 30 Apr 2026.
[^hf-granite42]: Hugging Face, granite-4.2-30b model card.
[^mtp-granite42]: MarkTechPost, 25 Aug 2026.
