---
type: OSS Project
title: Jan
description: "Offline-first desktop ChatGPT alternative by Singapore's Menlo Research (~45k stars) that unusually relicensed from AGPL to Apache-2.0 in May 2025 and ships its own small agentic models (Jan-nano) — growing OSS, unclear business."
resource: https://github.com/janhq/jan
tags: [ai-apps, desktop, local-ai, apache-2.0, relicense-permissive]
domain: ai-apps
license: Apache-2.0
license_history: ["AGPL-3.0 (2023-10 → 2025-05)", "Apache-2.0 (2025-05-20-)"]
governance: single-vendor
steward: Menlo Research
backing_orgs: [organizations/menlo-research]
metrics:
  github_stars: { value: 44767, as_of: 2026-10-03 }
  github_forks: { value: 3060, as_of: 2026-10-03 }
  latest_release: { value: "v0.8.4 (2026-07-23)", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: jan-gh
    resource: https://github.com/janhq/jan
    title: Jan GitHub repository (GitHub API incl. LICENSE commit history, 2026-10-03)
  - id: jan-v080
    resource: https://www.jan.ai/changelog/2026-05-22-jan-v0.8.0
    title: "Jan changelog: v0.8.0 — Multi-Token Prediction, llama.cpp router mode"
  - id: jan-changelog
    resource: https://www.jan.ai/changelog
    title: Jan changelog
  - id: jan-nano
    resource: https://featherless.ai/models/Menlo/Jan-nano#readme
    title: "Jan-nano model card (Menlo Research, Apache-2.0, June 2025)"
  - id: menlo-rename
    resource: https://menlo.ai/blog/homebrew-to-menlo
    title: "Menlo blog: Homebrew is now Menlo Research"
---

# Summary
Jan is an Apache-2.0 desktop app for running local models (llama.cpp, MLX) and cloud APIs fully offline; ~45k stars[^jan-gh]. Rare in this domain, it moved toward *more* permissive licensing: AGPL-3.0 from Oct 2023, then Apache-2.0 on 2025-05-20 ("Jan's code is now under the Apache license")[^jan-gh]. Steward Menlo Research (formerly Homebrew, Singapore) is an R&D lab that also trains small agentic models such as Jan-nano (4B, June 2025)[^jan-nano][^menlo-rename]. The v0.8 line (2026) added a unified llama.cpp router, multi-token prediction and MCP approvals[^jan-v080][^jan-changelog]. Verdict: OSS growing; business model unclear (no verified funding).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-20 | Relicensed AGPL-3.0 → Apache-2.0[^jan-gh] | OSS | + |
| W24 | 2025-06 | Jan-nano 4B agentic model released (Apache-2.0)[^jan-nano] | OSS | + |
| W6 | 2026-05/06 | v0.8.0–v0.8.3: router mode, MTP, ROCm, artifacts[^jan-v080][^jan-changelog] | OSS | + |
| W3 | 2026-07-23 | v0.8.4 native web_search/web_fetch; no release since[^jan-gh] | OSS | ± |

# OSS successes
- Permissive relicensing increased embeddability; strong release cadence through mid-2026[^jan-gh].
# OSS failures / risks
- Stars grew slower than Open WebUI/LobeHub; heavy reliance on llama.cpp upstream.
# Business successes
- Own-model line (Jan-nano, Jan v1) gives Menlo a research identity[^jan-nano].
# Business failures / risks
- No disclosed funding or revenue; parent's stated mission shifted toward robotics[^menlo-rename].

# By window
## W3
- v0.8.4 (2026-07-23)[^jan-gh].
## W6
- v0.8.0–0.8.3 releases[^jan-v080].
## W9
- 0.7.x releases; no notable events found.
## W12
- No notable events found.
## W24
- Apache-2.0 relicense; Jan-nano[^jan-gh][^jan-nano].

# Lessons
- Moving from AGPL to Apache can be a growth lever for a client app whose value is distribution, not server-side lock-in.

# Related
- [Menlo Research](/organizations/menlo-research.md), [AnythingLLM](/projects/ai-apps/anythingllm.md), [GPT4All](/projects/ai-apps/gpt4all.md), [LM Studio](/projects/ai-inference/lm-studio.md), [llama.cpp](/projects/ai-inference/llama-cpp.md)

[^jan-gh]: GitHub API and LICENSE history, janhq/jan — https://github.com/janhq/jan
[^jan-v080]: Jan changelog v0.8.0 — https://www.jan.ai/changelog/2026-05-22-jan-v0.8.0
[^jan-changelog]: Jan changelog — https://www.jan.ai/changelog
[^jan-nano]: Jan-nano model card — https://featherless.ai/models/Menlo/Jan-nano#readme
[^menlo-rename]: Menlo blog — https://menlo.ai/blog/homebrew-to-menlo
