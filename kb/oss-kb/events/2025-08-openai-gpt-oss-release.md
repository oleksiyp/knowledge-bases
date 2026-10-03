---
type: Event
title: OpenAI returns to open weights with gpt-oss
description: "On 5 Aug 2025 OpenAI released gpt-oss-120b and gpt-oss-20b under Apache-2.0 — its first open-weight LLMs since GPT-2."
event_kind: release
date: 2025-08-05
window: W24
impact: positive
projects: [projects/ai-models/gpt-oss]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: openai-gptoss
    resource: https://openai.com/index/introducing-gpt-oss/
    title: "OpenAI: Introducing gpt-oss"
    author: org:openai
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report (arXiv 2604.07190)"
  - id: hf-openai
    resource: https://huggingface.co/openai
    title: openai on Hugging Face
---

# What happened
OpenAI published gpt-oss-120b (runs on a single 80 GB GPU; near o4-mini on core reasoning benchmarks) and gpt-oss-20b (consumer hardware) under Apache-2.0[^openai-gptoss].

# Why it matters
The most closed frontier lab conceded that open weights matter strategically, at a moment when Chinese models led open-model adoption. gpt-oss-120b hit 20.45× its size-class median downloads at day 7[^atom-report].

# Outcome so far
Both remain heavily used (6.66M and 4.49M monthly downloads, Oct 2026)[^hf-openai], but OpenAI has released only small auxiliary open models since (safeguard, privacy-filter)[^hf-openai].

# Related
- [gpt-oss](/projects/ai-models/gpt-oss.md), [Domain review](/domains/ai-models.md)

[^openai-gptoss]: OpenAI, 5 Aug 2025.
[^atom-report]: ATOM Report, Apr 2026.
[^hf-openai]: HF openai org (2026-10-03).
