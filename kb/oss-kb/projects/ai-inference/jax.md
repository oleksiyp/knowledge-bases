---
type: OSS Project
title: JAX
description: "Google's composable numerical/ML framework, central to TPU workloads; stable and actively released, but lost ecosystem breadth as transformers v5 dropped Flax/JAX support — stable."
resource: https://github.com/jax-ml/jax
tags: [ai-inference, training, apache-2.0, big-tech]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2018-)"]
governance: single-vendor
steward: Google
backing_orgs: []
metrics:
  github_stars: { value: 36370, as_of: 2026-10-03 }
  latest_release: { value: jax-v0.11.2, as_of: 2026-09-17 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: down, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: jax-gh
    resource: https://github.com/jax-ml/jax
    title: JAX GitHub repository (stars, releases via GitHub API)
  - id: hf-tf5
    resource: https://huggingface.co/blog/transformers-v5
    title: "Transformers v5: Flax and TensorFlow support sunset"
  - id: vllm-blog
    resource: https://vllm.ai/blog
    title: "vLLM blog: TPU backend redesign unifying PyTorch and JAX (2025-10-16)"
---

# Summary
JAX remains the framework of choice for Google/DeepMind and TPU-centric labs, with monthly releases (v0.11.0 on 2026-07-16, v0.11.2 on 2026-09-17)[^jax-gh]. Its broader ecosystem shrank when Hugging Face transformers v5 sunset Flax support (Dec 2025)[^hf-tf5], though vLLM's October 2025 TPU backend redesign unified PyTorch and JAX paths, keeping JAX relevant for serving on TPUs[^vllm-blog]. Verdict: stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-16 | vLLM TPU backend unifies PyTorch and JAX[^vllm-blog] | OSS | + |
| W12 | 2025-12-01 | transformers v5 drops Flax/JAX backend[^hf-tf5] | OSS | − |
| W3 | 2026-07-16 | JAX v0.11.0[^jax-gh] | OSS | + |

# OSS successes
- Steady releases; strong TPU integration[^jax-gh].
# OSS failures / risks
- Loss of HF transformers support narrows the community funnel[^hf-tf5].
# Business successes
- n/a
# Business failures / risks
- n/a

# By window
## W3
- v0.11.x releases[^jax-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- transformers v5 drops JAX; vLLM TPU unification[^hf-tf5][^vllm-blog].
## W24
- No notable events found.

# Lessons
- Framework network effects compound: once the model hub standardises on one backend, alternatives become niche even if technically excellent.

# Related
- [PyTorch](/projects/ai-inference/pytorch.md), [transformers](/projects/ai-inference/transformers.md)

[^jax-gh]: JAX GitHub — https://github.com/jax-ml/jax
[^hf-tf5]: HF blog — https://huggingface.co/blog/transformers-v5
[^vllm-blog]: vLLM blog — https://vllm.ai/blog
