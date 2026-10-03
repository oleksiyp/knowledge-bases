---
type: OSS Project
title: Apple MLX
description: "Apple's MIT-licensed array framework for Apple Silicon that became the second local-inference engine (after llama.cpp) adopted by LM Studio, Ollama and vLLM — growing."
resource: https://github.com/ml-explore/mlx
tags: [ai-inference, local-ai, apple, mit]
domain: ai-inference
license: MIT
license_history: ["MIT (2023-)"]
governance: single-vendor
steward: Apple
backing_orgs: []
metrics:
  github_stars: { value: 28635, as_of: 2026-10-03 }
  latest_release: { value: v0.32.3, as_of: 2026-09-29 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mlx-gh
    resource: https://github.com/ml-explore/mlx
    title: MLX GitHub repository (stars, releases via GitHub API)
  - id: wiki-lms
    resource: https://en.wikipedia.org/wiki/LM_Studio
    title: "Wikipedia: LM Studio (MLX engine added Oct 2024)"
  - id: ollama-blog
    resource: https://ollama.com/blog
    title: "Ollama blog: MLX preview (2026-03-30), MLX improvements (2026-06-11)"
  - id: vllm-blog
    resource: https://vllm.ai/blog
    title: "vLLM blog: vllm-metal Apple Silicon support (2026-09-22)"
  - id: tgi-gh
    resource: https://github.com/huggingface/text-generation-inference
    title: TGI notice naming MLX among recommended local engines
---

# Summary
MLX went from research curiosity to infrastructure: LM Studio added an MLX engine in October 2024[^wiki-lms], Ollama previewed an MLX engine on 2026-03-30 and improved it in June 2026[^ollama-blog], Hugging Face lists it among the recommended engines replacing TGI[^tgi-gh], and vLLM shipped Apple Silicon support via vllm-metal in September 2026[^vllm-blog]. The repo has 28.6k stars and steady releases (v0.32.3 on 2026-09-29)[^mlx-gh]. Verdict: growing; Apple-controlled but MIT.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10 | LM Studio adds MLX engine[^wiki-lms] | OSS | + |
| W9 | 2026-03-30 | Ollama MLX preview[^ollama-blog] | OSS | + |
| W6 | 2026-06-11 | Ollama MLX engine improvements[^ollama-blog] | OSS | + |
| W3 | 2026-09-22 | vLLM Apple Silicon (vllm-metal)[^vllm-blog] | OSS | + |

# OSS successes
- Became the performance path on Macs for the major local runners[^ollama-blog][^wiki-lms].
# OSS failures / risks
- Single-vendor (Apple) stewardship with limited public roadmap.
# Business successes
- n/a (supports Apple hardware sales indirectly).
# Business failures / risks
- n/a

# By window
## W3
- vllm-metal; v0.32.x releases[^vllm-blog][^mlx-gh].
## W6
- Ollama MLX improvements[^ollama-blog].
## W9
- Ollama MLX preview[^ollama-blog].
## W12
- No notable events found.
## W24
- LM Studio MLX engine (late 2024)[^wiki-lms].

# Lessons
- A hardware vendor's permissively-licensed runtime gets adopted fastest when existing popular wrappers integrate it.

# Related
- [LM Studio](/projects/ai-inference/lm-studio.md), [Ollama](/projects/ai-inference/ollama.md), [llama.cpp](/projects/ai-inference/llama-cpp.md)

[^mlx-gh]: MLX GitHub — https://github.com/ml-explore/mlx
[^wiki-lms]: Wikipedia: LM Studio — https://en.wikipedia.org/wiki/LM_Studio
[^ollama-blog]: Ollama blog — https://ollama.com/blog
[^vllm-blog]: vLLM blog — https://vllm.ai/blog
[^tgi-gh]: TGI repository — https://github.com/huggingface/text-generation-inference
