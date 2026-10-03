---
type: OSS Project
title: Hugging Face Text Generation Inference (TGI)
description: "Hugging Face's once-leading LLM serving server; lost to vLLM/SGLang, entered maintenance mode on 2025-12-11 and was archived 2026-03-21 — dead (deliberately retired)."
resource: https://github.com/huggingface/text-generation-inference
tags: [ai-inference, llm-serving, apache-2.0, deprecated, archived]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (initial)", "HFOIL 1.0 source-available (2023–2024; dates not re-verified)", "Apache-2.0 (2024-)"]
governance: single-vendor
steward: Hugging Face
backing_orgs: [organizations/hugging-face]
metrics:
  github_stars: { value: 10884, as_of: 2026-10-03 }
  last_release: { value: v3.3.6, as_of: 2025-09-17 }
oss_verdict: dead
business_verdict: n/a
momentum_by_window: { W3: n/a, W6: n/a, W9: down, W12: down, W24: down }
status: archived
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tgi-gh
    resource: https://github.com/huggingface/text-generation-inference
    title: TGI GitHub repository (maintenance notice; archived flag via GitHub API)
  - id: lysandre-x
    resource: https://x.com/LysandreJik/status/1999137874378125436
    title: "Lysandre Debut on X: text-generation-inference is now in maintenance mode"
  - id: hf-tf5
    resource: https://huggingface.co/blog/transformers-v5
    title: "Hugging Face: Transformers v5 (interoperability with vLLM, SGLang, llama.cpp, MLX)"
    author: org:hugging-face
---

# Summary
TGI is the clearest "graceful death" in the domain. Hugging Face put it in maintenance mode on 2025-12-11 (only minor fixes/docs accepted)[^tgi-gh][^lysandre-x] and archived the repository read-only on 2026-03-21[^tgi-gh]; the last release was v3.3.6 on 2025-09-17[^tgi-gh]. HF's stated rationale: TGI started the movement of engines relying on transformers model definitions, which vLLM, SGLang, llama.cpp and MLX now all adopt, so HF contributes to and recommends those instead[^tgi-gh]. An earlier (2023–24, pre-window) detour to the source-available HFOIL license, later reverted to Apache-2.0, is widely believed to have cost it community momentum (license history not re-verified in this review). Verdict: dead by choice; strategy shifted to transformers-as-model-definition layer[^hf-tf5].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-17 | Final release v3.3.6[^tgi-gh] | OSS | − |
| W12 | 2025-12-11 | Maintenance mode announced[^tgi-gh][^lysandre-x] | OSS | − |
| W9 | 2026-03-21 | Repository archived (read-only)[^tgi-gh] | OSS | − |

# OSS successes
- Pioneered continuous batching/production LLM serving and pushed engines toward transformers-defined architectures[^tgi-gh].
# OSS failures / risks
- Outpaced by vLLM and SGLang's multi-vendor communities; single-vendor project could not match their contributor base.
# Business successes
- HF Inference Endpoints migrated to offer vLLM/SGLang, so the business did not depend on owning the engine[^tgi-gh].
# Business failures / risks
- Loss of a differentiated in-house serving stack.

# By window
## W3
- No notable events found (archived).
## W6
- No notable events found (archived).
## W9
- Archived 2026-03-21[^tgi-gh].
## W12
- Maintenance mode 2025-12-11[^lysandre-x].
## W24
- Last release 2025-09-17[^tgi-gh].

# Lessons
- When a neutral community engine wins, a single-vendor competitor is better retired than starved; HF redirected effort to the layer it uniquely owns (model definitions).
- License experiments (HFOIL) on infrastructure software can forfeit the contributor flywheel at the critical moment.

# Related
- [Hugging Face](/organizations/hugging-face.md), [vLLM](/projects/ai-inference/vllm.md), [SGLang](/projects/ai-inference/sglang.md), [transformers](/projects/ai-inference/transformers.md)
- [Event: TGI maintenance mode](/events/2025-12-tgi-maintenance-mode.md)

[^tgi-gh]: TGI GitHub — https://github.com/huggingface/text-generation-inference
[^lysandre-x]: Lysandre on X, 2025-12-11 — https://x.com/LysandreJik/status/1999137874378125436
[^hf-tf5]: HF Transformers v5 blog — https://huggingface.co/blog/transformers-v5
