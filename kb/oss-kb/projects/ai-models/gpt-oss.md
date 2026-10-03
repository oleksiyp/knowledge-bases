---
type: OSS Project
title: OpenAI gpt-oss
description: "OpenAI's first open-weight LLMs since GPT-2 (Aug 2025, Apache-2.0); a well-received one-off that set a US benchmark but was not followed by a new open flagship through Oct 2026."
resource: https://github.com/openai/gpt-oss
tags: [open-weights, llm, apache-2.0, reasoning, us-open-models]
domain: ai-models
license: Apache-2.0
license_history: ["Apache-2.0 (2025-08-)"]
governance: single-vendor
steward: OpenAI
backing_orgs: []
metrics:
  gpt_oss_20b_downloads_last_month: { value: "6.66M", as_of: 2026-10-03 }
  gpt_oss_120b_downloads_last_month: { value: "4.49M", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: openai-gptoss
    resource: https://openai.com/index/introducing-gpt-oss/
    title: "OpenAI: Introducing gpt-oss"
    author: org:openai
  - id: wiki-gptoss
    resource: https://en.wikipedia.org/wiki/GPT-OSS
    title: "Wikipedia: GPT-OSS"
  - id: hf-openai
    resource: https://huggingface.co/openai
    title: openai organization on Hugging Face
    last_modified: 2026-10-03T00:00:00Z
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report (arXiv 2604.07190)"
---

# Summary
On 5 Aug 2025 OpenAI released gpt-oss-120b (117B total, 5.1B active; runs on one 80 GB GPU) and gpt-oss-20b (runs in ~16 GB) under Apache-2.0, claiming near-parity with o4-mini and o3-mini respectively[^openai-gptoss][^wiki-gptoss]. It was the strongest US open-weight launch of 2025 by early uptake — the ATOM report measured gpt-oss-120b at 20.45× its size-category median downloads after 7 days[^atom-report] — and both models still draw millions of monthly downloads in Oct 2026[^hf-openai]. But OpenAI only followed with small utilities (gpt-oss-safeguard, Oct 2025; privacy-filter, Apr 2026), not a new open flagship[^hf-openai]. Verdict: stable, a successful but static release.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-05 | gpt-oss-120b and gpt-oss-20b, Apache-2.0[^openai-gptoss] | OSS | + |
| W24 | 2025-08 | Strong launch-week uptake (20.45× size-class median at day 7)[^atom-report] | OSS | + |
| W12 | 2025-10-29 | gpt-oss-safeguard-120b/20b safety classifiers[^hf-openai] | OSS | + |
| W12 | 2025-12 | circuit-sparsity research model[^hf-openai] | OSS | + |
| W6 | 2026-04-22 | openai/privacy-filter (1B token classifier), ~350k monthly downloads by Oct[^hf-openai] | OSS | + |
| W3 | — | No new open LLM found | OSS | flat |

# OSS successes
- Apache-2.0 with no usage policy beyond law — more permissive than Llama[^openai-gptoss].
- Durable demand: 6.66M (20b) and 4.49M (120b) monthly downloads in Oct 2026[^hf-openai].

# OSS failures / risks
- No refresh in 14 months; risk of obsolescence vs fast Chinese cadence.
- Weights only; no training data.

# Business successes
- n/a (strategic/political: answered US policy calls for American open models).

# Business failures / risks
- n/a

# By window
## W3
- No notable events found.
## W6
- privacy-filter release[^hf-openai].
## W9
- No notable events found.
## W12
- gpt-oss-safeguard (Oct 29, 2025)[^hf-openai].
## W24
- gpt-oss launch (Aug 5, 2025)[^openai-gptoss].

# Lessons
- One strong permissive release can earn lasting usage, but ecosystems reward cadence.

# Related
- [gpt-oss release event](/events/2025-08-openai-gpt-oss-release.md)
- [Gemma](/projects/ai-models/gemma.md), [Nemotron](/projects/ai-models/nemotron.md), [OLMo](/projects/ai-models/olmo.md)

[^openai-gptoss]: OpenAI blog, 5 Aug 2025.
[^wiki-gptoss]: Wikipedia, GPT-OSS.
[^hf-openai]: Hugging Face openai org (last-30-day downloads, 2026-10-03).
[^atom-report]: ATOM Report, Apr 2026.
