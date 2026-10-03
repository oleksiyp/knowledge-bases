---
type: Event
title: "Hugging Face puts TGI into maintenance mode (archived March 2026)"
description: "On 2025-12-11 Hugging Face moved Text Generation Inference to maintenance mode, recommending vLLM and SGLang; the repo was archived on 2026-03-21."
event_kind: shutdown
date: 2025-12-11
window: W12
impact: mixed
projects: [projects/ai-inference/text-generation-inference, projects/ai-inference/vllm, projects/ai-inference/sglang]
organizations: [organizations/hugging-face]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tgi-gh
    resource: https://github.com/huggingface/text-generation-inference
    title: "TGI repository (maintenance notice; archived 2026-03-21)"
  - id: lysandre-x
    resource: https://x.com/LysandreJik/status/1999137874378125436
    title: "Lysandre Debut on X: TGI is now in maintenance mode"
---

# What happened
HF announced TGI would accept only minor bug fixes, docs and lightweight maintenance[^lysandre-x][^tgi-gh], pointing users to vLLM, SGLang, llama.cpp and MLX, which now consume transformers model definitions[^tgi-gh]. The repository was archived read-only on 2026-03-21[^tgi-gh].

# Why it matters
The clearest admission that the LLM serving-engine war had been won by community/foundation engines; HF retreated to the model-definition layer.

# Outcome so far
Archived; HF Inference Endpoints offer vLLM/SGLang instead[^tgi-gh].

# Related
- [TGI](/projects/ai-inference/text-generation-inference.md), [vLLM](/projects/ai-inference/vllm.md), [SGLang](/projects/ai-inference/sglang.md), [transformers](/projects/ai-inference/transformers.md)

[^tgi-gh]: TGI repository (maintenance notice; archived 2026-03-21) — https://github.com/huggingface/text-generation-inference
[^lysandre-x]: Lysandre Debut on X: TGI is now in maintenance mode — https://x.com/LysandreJik/status/1999137874378125436
