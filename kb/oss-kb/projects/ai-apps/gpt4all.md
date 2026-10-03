---
type: OSS Project
title: GPT4All
description: "Nomic AI's pioneering MIT local-LLM desktop app (~77k stars) that has had no release since Feb 2025 and no commits since May 2025, with users asking 'Is GPT4All dead?' — effectively abandoned."
resource: https://github.com/nomic-ai/gpt4all
tags: [ai-apps, desktop, local-ai, mit, abandoned]
domain: ai-apps
license: MIT
license_history: ["MIT (2023-)"]
governance: single-vendor
steward: Nomic AI
backing_orgs: [organizations/nomic-ai]
metrics:
  github_stars: { value: 77389, as_of: 2026-10-03 }
  last_release: { value: "v3.10.0 (2025-02-25)", as_of: 2026-10-03 }
  last_commit: { value: "2025-05-27", as_of: 2026-10-03 }
oss_verdict: dead
business_verdict: struggling
momentum_by_window: { W3: down, W6: down, W9: down, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: g4a-gh
    resource: https://github.com/nomic-ai/gpt4all
    title: GPT4All GitHub repository (GitHub API releases/commits, 2026-10-03)
  - id: g4a-dead
    resource: https://github.com/nomic-ai/gpt4all/issues/3605
    title: "Issue #3605: Is GPT4all dead? (2025-08-05)"
  - id: g4a-stopped
    resource: https://github.com/nomic-ai/gpt4all/issues/3558
    title: "Issue #3558: Development stopped?"
  - id: nomic-17m
    resource: https://finance.yahoo.com/news/ai-startup-nomic-raises-17-000409855.html
    title: "Nomic raises $17M Series A (2023)"
---

# Summary
GPT4All was one of the first one-click local LLM desktop apps (2023) and still has ~77k stars, but the last release is v3.10.0 (2025-02-25) and the last commit on the default branch is 2025-05-27[^g4a-gh]. Issues titled "Development stopped?" and "Is GPT4all dead?" (Aug 2025) went unanswered by maintainers[^g4a-stopped][^g4a-dead]. Nomic AI, which raised a $17M Series A in 2023[^nomic-17m], focused on embeddings and Atlas instead. Verdict: dead in practice (not archived); Ollama, LM Studio and Jan absorbed its users.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-25 | Last release v3.10.0[^g4a-gh] | OSS | − |
| W24 | 2025-05-27 | Last commit to main[^g4a-gh] | OSS | − |
| W24 | 2025-08-05 | "Is GPT4all dead?" issue, no maintainer reply[^g4a-dead] | OSS | − |
| W12–W3 | 2025-10 → 2026-10 | Zero commits[^g4a-gh] | OSS | − |

# OSS successes
- Historic role: proved demand for private local chat in 2023.
# OSS failures / risks
- Silent abandonment, no archive notice or handover; no support for new model architectures[^g4a-dead].
# Business successes
- None visible in the period.
# Business failures / risks
- App never became Nomic's revenue line.

# By window
## W3
- No commits (abandoned)[^g4a-gh].
## W6
- No commits[^g4a-gh].
## W9
- No commits[^g4a-gh].
## W12
- No commits[^g4a-gh].
## W24
- Final release (Feb 2025) and last commit (May 2025)[^g4a-gh].

# Lessons
- First-mover local apps lose fast when the inference engine (llama.cpp) moves quickly and the vendor's business is elsewhere.
- Silent abandonment hurts users more than an explicit archive/handover.

# Related
- [Nomic AI](/organizations/nomic-ai.md), [Jan](/projects/ai-apps/jan.md), [Ollama](/projects/ai-inference/ollama.md), [LM Studio](/projects/ai-inference/lm-studio.md)

[^g4a-gh]: GitHub API, nomic-ai/gpt4all — https://github.com/nomic-ai/gpt4all
[^g4a-dead]: Issue #3605 — https://github.com/nomic-ai/gpt4all/issues/3605
[^g4a-stopped]: Issue #3558 — https://github.com/nomic-ai/gpt4all/issues/3558
[^nomic-17m]: Yahoo Finance / Forbes, 2023 — https://finance.yahoo.com/news/ai-startup-nomic-raises-17-000409855.html
