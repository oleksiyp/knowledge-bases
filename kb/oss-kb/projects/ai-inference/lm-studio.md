---
type: OSS Project
title: LM Studio
description: "Proprietary-but-free desktop app for local LLMs (built on llama.cpp and MLX, with MIT-licensed SDK/CLI) that dropped its commercial-license requirement in July 2025 and expanded into teams, mobile and agents — stable OSS-adjacent, business growing."
resource: https://lmstudio.ai
tags: [ai-inference, local-ai, proprietary-app, mit-sdk]
domain: ai-inference
license: proprietary (app); MIT (lms CLI, SDKs)
license_history: ["Proprietary app, free for personal use; commercial use required a license until 2025-07-08", "Free for work from 2025-07-08"]
governance: single-vendor
steward: Element Labs
backing_orgs: []
metrics:
  lms_cli_github_stars: { value: 5331, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lms-free
    resource: https://lmstudio.ai/blog/free-for-work
    title: "LM Studio is free for use at work (2025-07-08)"
    author: org:element-labs
  - id: wiki-lms
    resource: https://en.wikipedia.org/wiki/LM_Studio
    title: "Wikipedia: LM Studio"
  - id: gz-locally
    resource: https://gigazine.net/gsc_news/en/20260410-lm-studio-acquired-locally-ai/
    title: "GIGAZINE: LM Studio acquires Locally AI (2026-04-10)"
  - id: gz-bionic
    resource: https://gigazine.net/gsc_news/en/20260717-lm-studio-bionic/
    title: "GIGAZINE: LM Studio Bionic agent app (2026-07-17)"
  - id: lms-gh
    resource: https://github.com/lmstudio-ai/lms
    title: lms CLI GitHub repository
---

# Summary
LM Studio is the main closed-source competitor to Ollama for local LLMs. It added an MLX engine alongside llama.cpp in October 2024[^wiki-lms], removed its commercial-licensing friction on 2025-07-08 (free at work; Teams and Enterprise tiers instead)[^lms-free], acquired the iPhone app Locally AI in April 2026[^gz-locally], and launched the Bionic agent app in July 2026[^gz-bionic]. Funding is not publicly verified. Verdict: OSS-adjacent (proprietary core, open SDKs) — stable; business growing via enterprise tiers.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10 | MLX engine for Apple Silicon added[^wiki-lms] | OSS | + |
| W24 | 2025-07-08 | Free for commercial use; Teams/Enterprise plans announced[^lms-free] | Business | + |
| W6 | 2026-04-10 | Acquires Locally AI (iOS local-model app)[^gz-locally] | Business | + |
| W3 | 2026-07-17 | LM Studio Bionic agent app (local + cloud models)[^gz-bionic] | Business | + |

# OSS successes
- Ships open SDKs and `lms` CLI (MIT, 5.3k stars)[^lms-gh]; dual llama.cpp/MLX engines.
# OSS failures / risks
- Core app remains proprietary; depends on llama.cpp (now under HF/NVIDIA) and Apple's MLX.
# Business successes
- Removing the commercial license form removed adoption friction for teams[^lms-free]; expansion to mobile and agents[^gz-locally][^gz-bionic].
# Business failures / risks
- No disclosed funding/revenue; squeezed between free Ollama and OS-vendor-native runtimes.

# By window
## W3
- Bionic agent app (2026-07-17)[^gz-bionic].
## W6
- Locally AI acquisition (2026-04-10)[^gz-locally].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- MLX engine; free-for-work change[^wiki-lms][^lms-free].

# Lessons
- Charging for "use at work" licenses on a free desktop tool blocks bottom-up adoption; per-seat team features monetise better.

# Related
- [Ollama](/projects/ai-inference/ollama.md), [llama.cpp](/projects/ai-inference/llama-cpp.md), [MLX](/projects/ai-inference/mlx.md)

[^lms-free]: LM Studio blog, 2025-07-08 — https://lmstudio.ai/blog/free-for-work
[^wiki-lms]: Wikipedia: LM Studio — https://en.wikipedia.org/wiki/LM_Studio
[^gz-locally]: GIGAZINE, 2026-04-10 — https://gigazine.net/gsc_news/en/20260410-lm-studio-acquired-locally-ai/
[^gz-bionic]: GIGAZINE, 2026-07-17 — https://gigazine.net/gsc_news/en/20260717-lm-studio-bionic/
[^lms-gh]: lms GitHub — https://github.com/lmstudio-ai/lms
