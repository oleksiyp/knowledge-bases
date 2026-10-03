---
type: OSS Project
title: xAI Grok open weights
description: "xAI's sporadic release of old Grok checkpoints (Grok-1 Apache-2.0 in 2024; Grok 2.5 under a restrictive license in Aug 2025); the promised Grok 3 open release had not happened by Oct 2026 — symbolic 'open-sourcing' with little ecosystem impact."
resource: https://huggingface.co/xai-org
tags: [open-weights, llm, source-available, open-washing]
domain: ai-models
license: "source-available (Grok 2 Community License; commercial use restricted)"
license_history: ["Apache-2.0 (Grok-1, 2024-03)", "Source-available with commercial restrictions (Grok 2.5, 2025-08)"]
governance: single-vendor
steward: xAI
backing_orgs: []
metrics: {}
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: down, W9: flat, W12: n/a, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-grok
    resource: https://en.wikipedia.org/wiki/Grok_(chatbot)
    title: "Wikipedia: Grok (chatbot)"
  - id: tc-grok25
    resource: https://techcrunch.com/2025/08/24/elon-musk-says-xai-has-open-sourced-grok-2-5/
    title: "TechCrunch: Elon Musk says xAI has open sourced Grok 2.5 (2025-08-24)"
    author: org:techcrunch
  - id: dataconomy-grok3
    resource: https://dataconomy.com/2026/02/10/musk-confirms-xai-to-open-source-grok-3/
    title: "Dataconomy: Musk confirms xAI to open-source Grok 3 (2026-02-10)"
  - id: xai-grok-build
    resource: https://x.ai/news/grok-build-open-source
    title: "xAI: Grok Build is now open source"
  - id: decoder-grok-build
    resource: https://the-decoder.com/xai-open-sources-grok-build-on-github-after-massive-data-breach/
    title: "The Decoder: xAI open-sources Grok-Build on GitHub after massive data breach"
---

# Summary
xAI publishes old Grok weights well after they are superseded. Grok-1 was released under Apache-2.0 in March 2024; Grok 2.5 weights followed on 23–24 Aug 2025 under a license restricting commercial use, with Musk promising Grok 3 in "about 6 months"[^tc-grok25]. Musk re-confirmed the Grok 3 pledge in Feb 2026[^dataconomy-grok3], but as of Oct 2026 no Grok 3 weights had appeared (reports say xAI retired Grok 3 API access in May 2026 without releasing it)[^wiki-grok]. In 2026 xAI's main open release was instead code: the Grok Build coding-agent CLI under Apache-2.0 (Jul 2026), published after a data-exposure incident and without accepting external PRs[^xai-grok-build][^decoder-grok-build].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-24 | Grok 2.5 weights released, commercial use restricted; Grok 3 promised in ~6 months[^tc-grok25] | OSS | mixed |
| W9 | 2026-02-10 | Musk re-confirms Grok 3 will be open-sourced[^dataconomy-grok3] | OSS | + |
| W6 | 2026-05 | Grok 3 API retired with weights still unreleased (reported)[^wiki-grok] | OSS | − |
| W3 | 2026-07 | Grok Build coding agent open-sourced (Apache-2.0, Rust) after cloud upload exposed user SSH keys/repos; no external PRs accepted[^xai-grok-build][^decoder-grok-build] | OSS | mixed |

# OSS successes
- Some transparency into a large production model's architecture; Grok Build is genuinely Apache-2.0 code[^xai-grok-build].

# OSS failures / risks
- Restrictive weight license; stale checkpoints; Grok 3 promise unfulfilled after ~14 months[^tc-grok25][^wiki-grok].
- Grok Build is "source-transparency", not community open source[^decoder-grok-build].

# Business successes
- n/a

# Business failures / risks
- n/a

# By window
## W3
- Grok Build open-sourced (Jul)[^xai-grok-build].
## W6
- Grok 3 retired without open release (reported)[^wiki-grok].
## W9
- Grok 3 open-source pledge repeated (Feb 10)[^dataconomy-grok3].
## W12
- No notable events found.
## W24
- Grok 2.5 open weights (Aug 2025)[^tc-grok25].

# Lessons
- Releasing obsolete weights under restrictive terms earns headlines, not ecosystems; unkept promises cost credibility.

# Related
- [OSI definition / open-washing](/events/2024-10-osi-open-source-ai-definition.md), [Meta Llama](/projects/ai-models/meta-llama.md)

[^wiki-grok]: Wikipedia, Grok (chatbot) (Grok 3 retirement claim not independently confirmed).
[^tc-grok25]: TechCrunch, 24 Aug 2025.
[^dataconomy-grok3]: Dataconomy, 10 Feb 2026.
[^xai-grok-build]: xAI news, Jul 2026.
[^decoder-grok-build]: The Decoder, Jul 2026.
