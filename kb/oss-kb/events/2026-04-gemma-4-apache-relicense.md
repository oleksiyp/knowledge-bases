---
type: Event
title: Google releases Gemma 4 under Apache-2.0
description: "Gemma 4 (2 Apr 2026) dropped Google's custom Gemma Terms of Use for Apache-2.0 — the biggest big-tech license liberalisation of the period."
event_kind: license-change
date: 2026-04-02
window: W9
impact: positive
projects: [projects/ai-models/gemma]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-gemma
    resource: https://en.wikipedia.org/wiki/Gemma_(language_model)
    title: "Wikipedia: Gemma"
  - id: hf-gemma4
    resource: https://huggingface.co/models?search=google/gemma-4
    title: HF search google/gemma-4
  - id: google-gemma4
    resource: https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/
    title: "Google blog: Gemma 4 — byte for byte, the most capable open models (2026-04-02)"
    author: org:google
---

# What happened
On 2 Apr 2026 Google DeepMind released Gemma 4 (E2B, E4B, 26B MoE, 31B dense; multimodal input), switching from the Gemma Terms of Use (Gemma 1–3) to Apache-2.0[^wiki-gemma][^google-gemma4].

# Why it matters
Gemma's prior terms let Google restrict usage and were a frequent open-washing example. Apache-2.0 put Gemma on equal license footing with Qwen and gpt-oss, as US labs tried to win back developers from Chinese models.

# Outcome so far
Strong uptake: Gemma 4 26B-A4B ~13.1M and 31B ~9.9M monthly downloads in Oct 2026[^hf-gemma4].

# Related
- [Gemma](/projects/ai-models/gemma.md), [OSI definition](/events/2024-10-osi-open-source-ai-definition.md)

[^wiki-gemma]: Wikipedia, Gemma.
[^hf-gemma4]: HF search (2026-10-03).
[^google-gemma4]: Google blog, 2026-04-02.
