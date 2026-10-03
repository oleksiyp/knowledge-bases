---
type: Event
title: "ggml.ai (llama.cpp) joins Hugging Face"
description: "On 2026-02-20 ggml.ai — Georgi Gerganov's company behind ggml and llama.cpp — joined Hugging Face, with projects staying MIT and the team keeping technical autonomy."
event_kind: acquisition
date: 2026-02-20
window: W9
impact: mixed
projects: [projects/ai-inference/llama-cpp]
organizations: [organizations/hugging-face]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: hf-ggml
    resource: https://huggingface.co/blog/ggml-joins-hf
    title: "HF blog: GGML and llama.cpp join HF (2026-02-20)"
  - id: llamacpp-gh
    resource: https://github.com/ggml-org/llama.cpp
    title: "llama.cpp GitHub repository"
---

# What happened
Gerganov and team joined HF (alongside existing HF llama.cpp contributors Xuan-Son Nguyen and Aleksander Grygier), dedicating 100% of their time to llama.cpp with full technical autonomy; goals include single-click transformers → llama.cpp deployment and better packaging[^hf-ggml].

# Why it matters
Secured long-term funding for the most important local-inference engine (130k stars)[^llamacpp-gh] — but tied it to a company that seven months later agreed to be acquired by NVIDIA.

# Outcome so far
Development continues at high velocity (1,511 commits in Q3 2026)[^llamacpp-gh]; NVIDIA–HF deal pending.

# Related
- [llama.cpp](/projects/ai-inference/llama-cpp.md), [Hugging Face](/organizations/hugging-face.md), [NVIDIA to acquire HF](/events/2026-09-nvidia-to-acquire-hugging-face.md)

[^hf-ggml]: HF blog: GGML and llama.cpp join HF (2026-02-20) — https://huggingface.co/blog/ggml-joins-hf
[^llamacpp-gh]: llama.cpp GitHub repository — https://github.com/ggml-org/llama.cpp
