---
type: OSS Project
title: Hugging Face Transformers
description: "The model-definition library of open AI; v5 (RC Dec 2025, GA Jan 2026) went PyTorch-only and repositioned as the reference layer for vLLM/SGLang/llama.cpp/MLX — thriving, but its owner agreed to be acquired by NVIDIA (Sep 2026)."
resource: https://github.com/huggingface/transformers
tags: [ai-inference, model-definitions, apache-2.0, single-vendor]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2018-)"]
governance: single-vendor
steward: Hugging Face (pending acquisition by NVIDIA)
backing_orgs: [organizations/hugging-face]
metrics:
  github_stars: { value: 166911, as_of: 2026-10-03 }
  daily_installs: { value: 3000000, as_of: 2025-12-01 }
  latest_release: { value: v5.18.0, as_of: 2026-09-30 }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tf-gh
    resource: https://github.com/huggingface/transformers
    title: transformers GitHub repository (stars, releases via GitHub API)
  - id: hf-tf5
    resource: https://huggingface.co/blog/transformers-v5
    title: "Hugging Face: Transformers v5 (2025-12-01)"
    author: org:hugging-face
  - id: tgi-gh
    resource: https://github.com/huggingface/text-generation-inference
    title: TGI notice on transformers-based model definitions
  - id: nv-hf
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: NVIDIA to Acquire Hugging Face (2026-09-03)
  - id: fortune-hf
    resource: https://fortune.com/2026/09/03/hugging-face-goes-from-a-scrappy-startup-named-after-an-emoji-to-13-billion-nvidia-acquisition/
    title: "Fortune: Hugging Face ... $13 billion Nvidia acquisition"
---

# Summary
Transformers v5 (announced 2025-12-01; v5.0.0 tagged 2026-01-26) was the biggest rewrite in years: PyTorch became the sole backend, tokenizers and image processors were simplified, a modular model design cut code, and `transformers serve` plus interop with vLLM, SGLang, llama.cpp, MLX and ONNX Runtime made it the canonical model-definition layer[^hf-tf5][^tf-gh]. HF reported 3M installs/day (vs 20k/day at v4) and 400+ architectures[^hf-tf5]. Retiring TGI was part of the same strategy[^tgi-gh]. The library now has 167k stars and ships roughly every 2–3 weeks (v5.18.0 on 2026-09-30)[^tf-gh]. On 2026-09-03 NVIDIA agreed to acquire Hugging Face for $12.93B, prompting concern about NVIDIA's influence over this gatekeeping library[^nv-hf][^fortune-hf]. Verdict: OSS thriving; steward acquired (pending).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12-01 | Transformers v5 announced; PyTorch-only[^hf-tf5] | OSS | + |
| W9 | 2026-01-26 | v5.0.0 GA[^tf-gh] | OSS | + |
| W3 | 2026-09-03 | NVIDIA agrees to acquire Hugging Face[^nv-hf] | Business | mixed |
| W3 | 2026-09-30 | v5.18.0[^tf-gh] | OSS | + |

# OSS successes
- Became the shared model-definition substrate for all major engines[^hf-tf5][^tgi-gh].
# OSS failures / risks
- Dropping TF/JAX alienated some users[^hf-tf5]; NVIDIA ownership raises neutrality questions[^fortune-hf].
# Business successes
- Underpins HF's ~$12.9B exit[^nv-hf].
# Business failures / risks
- Model creators note they never shared in the platform's monetisation[^fortune-hf].

# By window
## W3
- NVIDIA–HF deal; v5.1x releases[^nv-hf][^tf-gh].
## W6
- Regular v5 minor releases[^tf-gh].
## W9
- v5.0.0 GA[^tf-gh].
## W12
- v5 announcement[^hf-tf5].
## W24
- v4.x maintenance; no notable events found.

# Lessons
- Owning the canonical model definition is more defensible than owning a serving engine.

# Related
- [Hugging Face](/organizations/hugging-face.md), [TGI](/projects/ai-inference/text-generation-inference.md), [llama.cpp](/projects/ai-inference/llama-cpp.md), [PyTorch](/projects/ai-inference/pytorch.md)
- [Event: NVIDIA to acquire HF](/events/2026-09-nvidia-to-acquire-hugging-face.md)

[^tf-gh]: transformers GitHub — https://github.com/huggingface/transformers
[^hf-tf5]: HF blog, 2025-12-01 — https://huggingface.co/blog/transformers-v5
[^tgi-gh]: TGI repository — https://github.com/huggingface/text-generation-inference
[^nv-hf]: NVIDIA blog — https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
[^fortune-hf]: Fortune — https://fortune.com/2026/09/03/hugging-face-goes-from-a-scrappy-startup-named-after-an-emoji-to-13-billion-nvidia-acquisition/
