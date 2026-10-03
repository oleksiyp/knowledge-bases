---
type: OSS Project
title: Google Gemma
description: "Google DeepMind's small/medium open-weight family; steady growth through Gemma 3 and a major openness upgrade when Gemma 4 (Apr 2026) moved to Apache-2.0, now the strongest US-made open model family by downloads."
resource: https://huggingface.co/google
tags: [open-weights, llm, apache-2.0, big-tech, on-device, multimodal]
domain: ai-models
license: Apache-2.0
license_history: ["Gemma Terms of Use (Gemma 1-3, 2024-2025)", "Apache-2.0 (Gemma 4, 2026-04)"]
governance: single-vendor
steward: Google DeepMind
backing_orgs: []
metrics:
  gemma_downloads_cumulative: { value: "1 billion+", as_of: 2026-08-20 }
  community_variants: { value: "100,000+", as_of: 2026-08-20 }
  gemma_4_26b_a4b_downloads_last_month: { value: "13.1M", as_of: 2026-10-03 }
  gemma_4_31b_downloads_last_month: { value: "9.88M", as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-gemma
    resource: https://en.wikipedia.org/wiki/Gemma_(language_model)
    title: "Wikipedia: Gemma (language model)"
  - id: hf-gemma4
    resource: https://huggingface.co/models?search=google/gemma-4
    title: Hugging Face search results for google/gemma-4
    last_modified: 2026-10-03T00:00:00Z
  - id: hf-gemma4-31b
    resource: https://huggingface.co/google/gemma-4-31B-it
    title: gemma-4-31B-it model card
  - id: google-gemma4
    resource: https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/
    title: "Google: Gemma 4 — byte for byte, the most capable open models (2026-04-02)"
    author: org:google
  - id: decoder-gemma4
    resource: https://the-decoder.com/googles-gemma-4-is-now-available-with-apache-2-0-licensing-for-the-first-time/
    title: "The Decoder: Google's Gemma 4 is now available with Apache 2.0 licensing for the first time"
  - id: tnw-gemma-1b
    resource: https://thenextweb.com/news/google-gemma-one-billion-downloads-gemmaverse-variants
    title: "TNW: Gemma has passed a billion downloads, Google says (2026-08)"
---

# Summary
Gemma is Google's open-weight line, deliberately kept below Gemini's frontier. Gemma 3 (Mar 2025, 1B–27B, 140 languages) and on-device Gemma 3n grew the "Gemmaverse" to 150M+ downloads and ~70k HF variants by May 2025[^wiki-gemma]. The decisive move came with Gemma 4 (2 Apr 2026): four sizes (E2B, E4B, 26B MoE, 31B dense) with image/video/audio input, released under Apache-2.0 instead of the restrictive Gemma Terms of Use[^google-gemma4][^decoder-gemma4]. On 20 Aug 2026 Google said Gemma had passed 1 billion cumulative downloads and 100,000+ community variants[^tnw-gemma-1b]. By Oct 2026 the 26B-A4B and 31B variants were drawing ~13.1M and ~9.9M monthly HF downloads[^hf-gemma4] — putting Gemma among the few US families competitive with Qwen at small/medium sizes.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-12 | Gemma 3 (1B/4B/12B/27B), 128K context[^wiki-gemma] | OSS | + |
| W24 | 2025-05 | 150M+ downloads, ~70k variants[^wiki-gemma] | OSS | + |
| W24 | 2025 | Gemma 3n edge models; MedGemma, ShieldGemma 2 variants[^wiki-gemma] | OSS | + |
| W9 | 2026-04-02 | Gemma 4 released, license switched to Apache-2.0[^google-gemma4][^decoder-gemma4] | OSS | + |
| W6 | 2026-06-03 | Gemma 4 12B unified multimodal (encoder-free) model[^wiki-gemma] | OSS | + |
| W3 | 2026-07 | Gemma 4 technical report; 31B card cites 256K context, 140+ languages[^hf-gemma4-31b] | OSS | + |
| W3 | 2026-08-20 | Gemma passes 1B cumulative downloads and 100k+ variants[^tnw-gemma-1b] | OSS | + |

# OSS successes
- Apache-2.0 relicensing removes Google's prior right to restrict use via the Gemma ToU[^wiki-gemma].
- Strong current adoption (Gemma 4 26B-A4B: 13.1M monthly downloads)[^hf-gemma4].

# OSS failures / risks
- Weights only — no training data; not OSI-open.
- Google keeps the frontier closed (Gemini); Gemma is a strategic "second tier".

# Business successes
- n/a (funnel to Google Cloud/Vertex; not separately monetised).

# Business failures / risks
- n/a

# By window
## W3
- 1B cumulative downloads milestone (Aug 20)[^tnw-gemma-1b]; very high monthly downloads for Gemma 4[^hf-gemma4].
## W6
- Gemma 4 12B (June 3)[^wiki-gemma].
## W9
- Gemma 4 Apache-2.0 launch (Apr 2)[^google-gemma4].
## W12
- No notable events found.
## W24
- Gemma 3 and Gemma 3n; 150M downloads milestone[^wiki-gemma].

# Lessons
- Moving to a standard OSI license is a cheap, high-impact adoption lever for big-tech open models.

# Related
- [gpt-oss](/projects/ai-models/gpt-oss.md), [Meta Llama](/projects/ai-models/meta-llama.md)
- [Gemma 4 Apache relicense](/events/2026-04-gemma-4-apache-relicense.md)

[^wiki-gemma]: Wikipedia, Gemma (language model).
[^hf-gemma4]: Hugging Face search google/gemma-4 (last-30-day downloads, 2026-10-03).
[^hf-gemma4-31b]: gemma-4-31B-it model card.
[^google-gemma4]: Google blog, 2 Apr 2026.
[^decoder-gemma4]: The Decoder, Apr 2026.
[^tnw-gemma-1b]: The Next Web, Aug 2026.
