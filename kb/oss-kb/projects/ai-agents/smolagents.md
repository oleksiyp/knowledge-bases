---
type: OSS Project
title: smolagents
description: Hugging Face's minimalist Apache-2.0 "code agents" library (1.0 on 2024-12-31, ~29.7k stars); popular but release cadence slowed in 2026 (last release May 2026).
resource: https://github.com/huggingface/smolagents
tags: [ai-agents, agent-framework, apache-2.0, single-vendor]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2024-12-)"]
governance: single-vendor
steward: Hugging Face
backing_orgs: []
metrics:
  github_stars: { value: 29656, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: smol-gh
    resource: https://github.com/huggingface/smolagents
    title: smolagents GitHub repository (v1.0.0 2024-12-31; v1.26.0 2026-05-29; last push 2026-09-30)
---

# Summary
smolagents is a small library where agents write and execute Python code as actions. It launched v1.0.0 on 2024-12-31, reached ~29.7k stars, and released v1.26.0 on 2026-05-29; commits continue but no release since[^smol-gh]. Verdict: OSS **stable**; business n/a.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-31 | v1.0.0 | OSS | + [^smol-gh] |
| W6 | 2026-05-29 | v1.26.0 (latest) | OSS | ~ [^smol-gh] |

# OSS successes
- Popularized "code-as-action" agents; strong educational use.
# OSS failures / risks
- Slower cadence in 2026[^smol-gh].
# Business successes
- n/a.
# Business failures / risks
- n/a.

# By window
## W3
- No release; maintenance commits[^smol-gh].
## W6
- v1.26.0[^smol-gh].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Launch and 1.0[^smol-gh].

# Lessons
- Minimal libraries attract stars quickly but need sustained investment to stay current with model/tooling changes.

# Related
- [/projects/ai-agents/pydantic-ai.md](/projects/ai-agents/pydantic-ai.md), [/projects/ai-agents/openai-agents-sdk.md](/projects/ai-agents/openai-agents-sdk.md)

[^smol-gh]: https://github.com/huggingface/smolagents
