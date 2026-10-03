---
type: OSS Project
title: PyTorch (and the PyTorch Foundation umbrella)
description: "The dominant deep-learning framework, whose Linux Foundation home became an umbrella for vLLM, DeepSpeed and Ray in 2025 — thriving; the gravitational center of open AI infrastructure."
resource: https://github.com/pytorch/pytorch
tags: [ai-inference, training, bsd-3-clause, foundation-hosted]
domain: ai-inference
license: BSD-3-Clause
license_history: ["BSD-3-Clause (2016-)"]
governance: foundation
steward: PyTorch Foundation (Linux Foundation)
backing_orgs: [organizations/pytorch-foundation]
metrics:
  github_stars: { value: 103632, as_of: 2026-10-03 }
  latest_release: { value: v2.14.1, as_of: 2026-09-30 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pt-gh
    resource: https://github.com/pytorch/pytorch
    title: PyTorch GitHub repository (stars, releases via GitHub API)
  - id: ptf-umbrella
    resource: https://pytorch.org/blog/pt-foundation-expands/
    title: "PyTorch Foundation Expands to an Umbrella Foundation (2025-05)"
    author: org:pytorch-foundation
  - id: ptf-vllm
    resource: https://pytorch.org/blog/pytorch-foundation-welcomes-vllm/
    title: PyTorch Foundation Welcomes vLLM (2025-05-06)
  - id: ptf-ray
    resource: https://www.prnewswire.com/news-releases/pytorch-foundation-welcomes-ray-to-deliver-a-unified-open-source-ai-compute-stack-302591184.html
    title: PyTorch Foundation Welcomes Ray (2025-10-22)
  - id: pt-x-ray
    resource: https://x.com/PyTorch/status/1983656568450068579
    title: "PyTorch on X: Ray joins PyTorch, vLLM and DeepSpeed under open governance"
  - id: hf-tf5
    resource: https://huggingface.co/blog/transformers-v5
    title: "Transformers v5: PyTorch becomes the sole backend"
---

# Summary
PyTorch consolidated its position over 2024–2026 from "most popular framework" to the hub of an open AI stack. In May 2025 the PyTorch Foundation became an umbrella foundation (30+ members, 120 ecosystem projects at the time)[^ptf-umbrella] and took in vLLM (2025-05-06)[^ptf-vllm], DeepSpeed (2025) and Ray (2025-10-22)[^ptf-ray][^pt-x-ray]. Hugging Face transformers v5 dropped TensorFlow and JAX/Flax to make PyTorch its sole backend[^hf-tf5]. Core releases kept a steady cadence: 2.9 (2025-10-15), 2.10 (2026-01-21), 2.13 (2026-07-08), 2.14 (2026-09-02)[^pt-gh]. Verdict: thriving.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05 | PyTorch Foundation expands to umbrella foundation[^ptf-umbrella] | Governance | + |
| W24 | 2025-05-06 | vLLM becomes first new hosted project[^ptf-vllm] | Governance | + |
| W12 | 2025-10-15 | PyTorch 2.9[^pt-gh] | OSS | + |
| W12 | 2025-10-22 | Ray joins (alongside PyTorch, vLLM, DeepSpeed)[^ptf-ray][^pt-x-ray] | Governance | + |
| W12 | 2025-12-01 | transformers v5 makes PyTorch the sole backend[^hf-tf5] | OSS | + |
| W9 | 2026-01-21 | PyTorch 2.10[^pt-gh] | OSS | + |
| W3 | 2026-09-02 | PyTorch 2.14[^pt-gh] | OSS | + |

# OSS successes
- Became the neutral home for inference (vLLM), training (DeepSpeed) and distributed compute (Ray)[^ptf-ray].
- Competing frameworks lost share: transformers dropped TF/JAX[^hf-tf5].
# OSS failures / risks
- Foundation now hosts projects whose commercial stewards were acquired (Anyscale → Nscale) or VC-funded (Inferact), raising governance stress.
- Meta remains the dominant contributor to core.
# Business successes
- n/a (foundation); member growth not verified for 2026.
# Business failures / risks
- n/a

# By window
## W3
- 2.13/2.14 releases; Nscale commits to join the Foundation via Anyscale deal[^pt-gh].
## W6
- No notable governance events found.
## W9
- 2.10 release[^pt-gh].
## W12
- Ray joins; transformers v5 PyTorch-only[^ptf-ray][^hf-tf5].
## W24
- Umbrella expansion; vLLM joins[^ptf-umbrella][^ptf-vllm].

# Lessons
- A framework foundation that expands up-stack can capture the neutral-governance role for an entire ecosystem.

# Related
- [PyTorch Foundation](/organizations/pytorch-foundation.md), [vLLM](/projects/ai-inference/vllm.md), [Ray](/projects/ai-inference/ray.md), [DeepSpeed](/projects/ai-inference/deepspeed.md), [JAX](/projects/ai-inference/jax.md)
- [Event: umbrella expansion](/events/2025-05-pytorch-foundation-umbrella-vllm.md)

[^pt-gh]: PyTorch GitHub — https://github.com/pytorch/pytorch
[^ptf-umbrella]: PyTorch blog — https://pytorch.org/blog/pt-foundation-expands/
[^ptf-vllm]: PyTorch blog — https://pytorch.org/blog/pytorch-foundation-welcomes-vllm/
[^ptf-ray]: PR Newswire — https://www.prnewswire.com/news-releases/pytorch-foundation-welcomes-ray-to-deliver-a-unified-open-source-ai-compute-stack-302591184.html
[^pt-x-ray]: PyTorch on X — https://x.com/PyTorch/status/1983656568450068579
[^hf-tf5]: HF blog — https://huggingface.co/blog/transformers-v5
