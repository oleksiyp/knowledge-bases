---
type: OSS Project
title: Unsloth
description: "Fast, memory-efficient LLM fine-tuning library that grew to ~77k stars and in 2026 added a desktop app and web 'Studio' under AGPL-3.0 (core stays Apache-2.0) — OSS thriving, business model emerging."
resource: https://github.com/unslothai/unsloth
tags: [ai-inference, fine-tuning, apache-2.0, agpl-3.0, open-core]
domain: ai-inference
license: Apache-2.0 (core) + AGPL-3.0 (Studio UI and optional components)
license_history: ["Apache-2.0 (2023-)", "Dual Apache-2.0 / AGPL-3.0 with Studio (2026-03-)"]
governance: company-led-open-core
steward: Unsloth AI
backing_orgs: []
metrics:
  github_stars: { value: 77151, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: unsloth-gh
    resource: https://github.com/unslothai/unsloth
    title: Unsloth GitHub repository (README license section, releases, COPYING history via GitHub API)
  - id: hf-tf5
    resource: https://huggingface.co/blog/transformers-v5
    title: "Transformers v5 (continued collaboration with Unsloth, Axolotl)"
---

# Summary
Unsloth is the breakout fine-tuning project of the period: ~77k stars by October 2026[^unsloth-gh], a reference partner for transformers v5[^hf-tf5], and a prolific publisher of quantized GGUF model uploads. In 2026 it expanded from a Python library into a product — Unsloth Desktop and the Unsloth Studio web UI for running and training models — and adopted dual licensing: core remains Apache-2.0, while Studio and certain optional components are AGPL-3.0 (AGPL `COPYING` added 2026-03-12)[^unsloth-gh]. Funding and revenue figures could not be verified. Verdict: OSS thriving; business growing (unverified scale).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12-01 | Named collaborator in transformers v5 launch[^hf-tf5] | OSS | + |
| W9 | 2026-03-12 | AGPL-3.0 added for Studio components (dual licensing)[^unsloth-gh] | License | mixed |
| W9 | 2026-03 | Unsloth Studio web UI introduced[^unsloth-gh] | OSS/Business | + |
| W3 | 2026-10-01 | Frequent beta releases (v0.1.902-beta)[^unsloth-gh] | OSS | + |

# OSS successes
- Massive star growth; broad model support (GGUF, MLX, diffusion)[^unsloth-gh].
# OSS failures / risks
- AGPL for the UI may deter some enterprise embedders; licence split adds complexity[^unsloth-gh].
# Business successes
- Productisation (Desktop/Studio) creates a path to paid tiers[^unsloth-gh].
# Business failures / risks
- No verified funding or revenue data.

# By window
## W3
- Rapid beta releases; Studio features (MCP, connections)[^unsloth-gh].
## W6
- No notable events found.
## W9
- Studio + AGPL dual licensing (Mar 2026)[^unsloth-gh].
## W12
- transformers v5 partnership[^hf-tf5].
## W24
- Growth as default LoRA/QLoRA fine-tuner (stars; details unverified).

# Lessons
- Using AGPL for the new UI layer while keeping the library permissive is a 2026 template for open-core without relicensing existing code.

# Related
- [Axolotl](/projects/ai-inference/axolotl.md), [transformers](/projects/ai-inference/transformers.md), [llama.cpp](/projects/ai-inference/llama-cpp.md)

[^unsloth-gh]: Unsloth GitHub — https://github.com/unslothai/unsloth
[^hf-tf5]: HF blog — https://huggingface.co/blog/transformers-v5
