---
type: OSS Project
title: AnythingLLM
description: "MIT-licensed all-in-one desktop/Docker app for local RAG and agents by tiny YC-backed Mintplex Labs (~67k stars), monetised via an optional Pro desktop subscription and hosted plans — growing on minimal capital."
resource: https://github.com/Mintplex-Labs/anything-llm
tags: [ai-apps, desktop, rag, mit, yc]
domain: ai-apps
license: MIT
license_history: ["MIT (2023-)"]
governance: company-led-open-core
steward: Mintplex Labs
backing_orgs: [organizations/mintplex-labs]
metrics:
  github_stars: { value: 66680, as_of: 2026-10-03 }
  github_forks: { value: 7440, as_of: 2026-10-03 }
  latest_release: { value: "v1.17.0 (2026-10-01)", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: allm-gh
    resource: https://github.com/Mintplex-Labs/anything-llm
    title: AnythingLLM GitHub repository (GitHub API, 2026-10-03)
  - id: allm-releases
    resource: https://github.com/Mintplex-Labs/anything-llm/releases
    title: AnythingLLM releases
  - id: allm-review
    resource: https://pasqualepillitteri.it/en/news/3844/anythingllm-what-it-is-review-2026
    title: "AnythingLLM: what it is, how it works and a real review (2026)"
  - id: allm-msty
    resource: https://anythingllm.com/alternatives/msty
    title: "AnythingLLM vs Msty (vendor comparison page)"
  - id: dealroom-mintplex
    resource: https://app.dealroom.co/companies/mintplex_labs
    title: "Dealroom: Mintplex Labs (aggregator)"
---

# Summary
AnythingLLM bundles document ingestion, vector store, agents and MCP into a single desktop or Docker app that works with local (Ollama/llama.cpp) or cloud models; ~67k stars and a monthly-or-faster release cadence (v1.16 Aug 2026, v1.17.0 2026-10-01)[^allm-gh][^allm-releases]. It is MIT-licensed and built by Mintplex Labs (YC S22), whose only publicly listed funding is a ~$500k 2022 seed (aggregator data)[^dealroom-mintplex]. 2026 additions include an optional "Pro" desktop subscription, image generation and Windows NPU runtimes (Foundry Local, Snapdragon)[^allm-review]. It positions itself against closed alternatives like Msty[^allm-msty]. Verdict: OSS growing; business stable/lean.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026 Q2 | v1.15 desktop "Magic" features; Pro subscription[^allm-review] | Business | + |
| W3 | 2026-08-27 | v1.16.1: Foundry Local embedded, NPU engines[^allm-review][^allm-releases] | OSS | + |
| W3 | 2026-10-01 | v1.17.0[^allm-gh] | OSS | + |

# OSS successes
- Permissive MIT and strong star growth (~60.8k end-May 2026 → ~66.7k Oct 2026)[^allm-review][^allm-gh].
# OSS failures / risks
- Small core team; single-vendor roadmap.
# Business successes
- Capital-efficient: monetises via hosted plans and desktop Pro without relicensing[^allm-review].
# Business failures / risks
- Very little outside capital; vulnerable to OS-native assistants and well-funded competitors.

# By window
## W3
- v1.16.x, v1.17.0[^allm-gh][^allm-releases].
## W6
- Pro desktop subscription[^allm-review].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Continued growth; no discrete events found.

# Lessons
- An MIT desktop app can monetise convenience features without touching the licence.

# Related
- [Mintplex Labs](/organizations/mintplex-labs.md), [Jan](/projects/ai-apps/jan.md), [GPT4All](/projects/ai-apps/gpt4all.md), [Ollama](/projects/ai-inference/ollama.md), [LM Studio](/projects/ai-inference/lm-studio.md)

[^allm-gh]: GitHub API, 2026-10-03 — https://github.com/Mintplex-Labs/anything-llm
[^allm-releases]: Releases — https://github.com/Mintplex-Labs/anything-llm/releases
[^allm-review]: Review 2026 — https://pasqualepillitteri.it/en/news/3844/anythingllm-what-it-is-review-2026
[^allm-msty]: Vendor comparison — https://anythingllm.com/alternatives/msty
[^dealroom-mintplex]: Dealroom (aggregator) — https://app.dealroom.co/companies/mintplex_labs
