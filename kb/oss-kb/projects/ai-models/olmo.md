---
type: OSS Project
title: OLMo (Ai2)
description: "Ai2's fully open language models (weights, data, code, checkpoints); the reference for OSI-grade open-source AI, technically respected (Olmo 3, Nov 2025) but small in adoption and hit by a CEO departure in Mar 2026."
resource: https://allenai.org/olmo
tags: [open-source-ai, fully-open, apache-2.0, nonprofit, us-open-models]
domain: ai-models
license: Apache-2.0
license_history: ["Apache-2.0 (2024-)"]
governance: academic
steward: Allen Institute for AI (Ai2)
backing_orgs: [organizations/allen-institute-for-ai]
metrics:
  hf_cumulative_downloads_atom: { value: "14.8 million", as_of: 2026-03-31 }
  hf_followers_allenai: { value: 6727, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: down, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-ai2
    resource: https://en.wikipedia.org/wiki/Allen_Institute_for_AI
    title: "Wikipedia: Allen Institute for AI"
  - id: ai2-blog
    resource: https://allenai.org/blog
    title: Ai2 blog
    last_modified: 2026-10-03T00:00:00Z
  - id: hf-allenai
    resource: https://huggingface.co/allenai
    title: allenai on Hugging Face
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report (arXiv 2604.07190)"
  - id: osi-ai
    resource: https://opensource.org/ai
    title: "OSI: Open Source AI Definition"
  - id: geekwire-farhadi-steps-down
    resource: https://www.geekwire.com/2026/allen-institute-for-ai-ceo-ali-farhadi-steps-down-as-nonprofit-navigates-shifting-ai-landscape/
    title: "GeekWire: Allen Institute for AI CEO Ali Farhadi steps down as nonprofit navigates shifting AI landscape (2026-03-10)"
  - id: geekwire-farhadi-msft
    resource: https://www.geekwire.com/2026/microsoft-hires-former-ai2-ceo-ali-farhadi-and-key-researchers-for-suleymans-ai-team/
    title: "GeekWire: Microsoft hires former Ai2 CEO Ali Farhadi and key researchers for Suleyman's AI team (2026-03)"
---

# Summary
OLMo is the flagship "fully open" LLM: Ai2 releases weights, training data, code, logs and intermediate checkpoints, meeting the spirit of the OSI's Open Source AI Definition[^osi-ai]. OLMo 2 32B (Mar 2025) was billed as the first fully-open model to beat GPT-3.5 and GPT-4o mini; Olmo 3 (Nov 2025; 7B/32B Think, Base, Instruct, RL-Zero) and Olmo 3.1 (Dec 2025) followed[^wiki-ai2]. Adoption is small — 14.8M cumulative HF downloads by Mar 2026 vs Qwen's 942M[^atom-report]. CEO Ali Farhadi departed on 10 Mar 2026[^wiki-ai2]; the lab's 2026 output shifted to infrastructure (Olmo-core 3, Oct 2026) and domain models (OlmoEarth, AstaBrief)[^ai2-blog].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11 | OLMo 2 (7B, 13B); Tülu 3[^wiki-ai2] | OSS | + |
| W24 | 2025-03 | OLMo 2 32B[^wiki-ai2] | OSS | + |
| W12 | 2025-11 | Olmo 3 family[^wiki-ai2] | OSS | + |
| W12 | 2025-12 | Olmo 3.1 32B update[^wiki-ai2] | OSS | + |
| W9 | 2026-03-10 | CEO Ali Farhadi steps down; Peter Clark interim; board chair cites cost of competing at the frontier as a nonprofit[^geekwire-farhadi-steps-down] | Governance | − |
| W9 | 2026-03 | Microsoft hires Farhadi plus OLMo co-lead Hanna Hajishirzi and Ranjay Krishna[^geekwire-farhadi-msft] | OSS | − |
| W3 | 2026-07-28 | OlmoEarth Platform[^ai2-blog] | OSS | + |
| W3 | 2026-10-01 | Olmo-core 3: fully open training stack for trillion-scale MoEs[^ai2-blog] | OSS | + |

# OSS successes
- Only top-tier family that is fully reproducible (data + code + checkpoints)[^wiki-ai2].
- Research infrastructure (Olmo-core 3) benefits the whole field[^ai2-blog].

# OSS failures / risks
- Low adoption relative to open-weight peers[^atom-report]; no Olmo 4 flagship in 2026 (as of Oct 3)[^hf-allenai].
- Leadership change and loss of OLMo co-lead Hajishirzi to Microsoft[^geekwire-farhadi-msft].

# Business successes
- n/a (non-profit).

# Business failures / risks
- Dependent on philanthropic and government/NVIDIA support; funding details for 2026 not verified.

# By window
## W3
- OlmoEarth, Olmo-core 3, AstaBrief 8B[^ai2-blog].
## W6
- No notable events found.
## W9
- CEO departure (Mar 10)[^geekwire-farhadi-steps-down]; OLMo co-lead and researchers hired by Microsoft[^geekwire-farhadi-msft].
## W12
- Olmo 3 and 3.1[^wiki-ai2].
## W24
- OLMo 2 32B[^wiki-ai2].

# Lessons
- Full openness earns credibility and research impact, but not downloads; adoption follows capability and size range.

# Related
- [Ai2 org](/organizations/allen-institute-for-ai.md), [OSI definition debate](/events/2024-10-osi-open-source-ai-definition.md)

[^wiki-ai2]: Wikipedia, Allen Institute for AI.
[^ai2-blog]: Ai2 blog (accessed 2026-10-03).
[^hf-allenai]: HF allenai org.
[^atom-report]: ATOM Report, Apr 2026.
[^osi-ai]: OSI, Open Source AI Definition page.
[^geekwire-farhadi-steps-down]: GeekWire, 10 Mar 2026.
[^geekwire-farhadi-msft]: GeekWire, Mar 2026.
