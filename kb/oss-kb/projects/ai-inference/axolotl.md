---
type: OSS Project
title: Axolotl
description: "Config-driven LLM fine-tuning framework; steady Apache-2.0 releases (v0.20 Sep 2026) but growth overshadowed by Unsloth — stable."
resource: https://github.com/axolotl-ai-cloud/axolotl
tags: [ai-inference, fine-tuning, apache-2.0]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: company-led-open-core
steward: Axolotl AI
backing_orgs: []
metrics:
  github_stars: { value: 12513, as_of: 2026-10-03 }
  latest_release: { value: v0.20.0, as_of: 2026-09-30 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: axolotl-gh
    resource: https://github.com/axolotl-ai-cloud/axolotl
    title: Axolotl GitHub repository (stars, releases via GitHub API)
  - id: hf-tf5
    resource: https://huggingface.co/blog/transformers-v5
    title: "Transformers v5 (collaboration with Unsloth, Axolotl, LlamaFactory)"
---

# Summary
Axolotl remains a respected fine-tuning toolkit (12.5k stars; v0.18 on 2026-07-17, v0.19 on 2026-09-10, v0.20 on 2026-09-30)[^axolotl-gh] and a named transformers v5 partner[^hf-tf5], but its growth is far behind Unsloth's (77k stars). Business details for Axolotl AI could not be verified. Verdict: stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12-01 | transformers v5 partner[^hf-tf5] | OSS | + |
| W3 | 2026-09-30 | v0.20.0[^axolotl-gh] | OSS | + |

# OSS successes
- Steady releases and config-first UX[^axolotl-gh].
# OSS failures / risks
- Mindshare loss to Unsloth.
# Business successes
- Unverified.
# Business failures / risks
- No verified funding/revenue.

# By window
## W3
- v0.18–v0.20[^axolotl-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- transformers v5 partnership[^hf-tf5].
## W24
- No notable events found.

# Lessons
- In crowded tooling niches, speed/memory headline numbers (Unsloth) beat configurability for mindshare.

# Related
- [Unsloth](/projects/ai-inference/unsloth.md), [DeepSpeed](/projects/ai-inference/deepspeed.md)

[^axolotl-gh]: Axolotl GitHub — https://github.com/axolotl-ai-cloud/axolotl
[^hf-tf5]: HF blog — https://huggingface.co/blog/transformers-v5
