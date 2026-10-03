---
type: OSS Project
title: llama.cpp / ggml
description: "The C/C++ local-inference engine and GGUF format underpinning Ollama, LM Studio and most local AI; ggml.ai joined Hugging Face in Feb 2026, and HF itself agreed to be bought by NVIDIA in Sep 2026 — OSS thriving, stewardship now big-tech-adjacent."
resource: https://github.com/ggml-org/llama.cpp
tags: [ai-inference, local-ai, mit, gguf, acquired-team]
domain: ai-inference
license: MIT
license_history: ["MIT (2023-)"]
governance: company-led-open-core
steward: Hugging Face (ggml.ai team); HF pending acquisition by NVIDIA
backing_orgs: [organizations/hugging-face]
metrics:
  github_stars: { value: 130178, as_of: 2026-10-03 }
  commits_last_3_months: { value: 1511, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: llamacpp-gh
    resource: https://github.com/ggml-org/llama.cpp
    title: llama.cpp GitHub repository (stars, commits via GitHub API)
  - id: wiki-llamacpp
    resource: https://en.wikipedia.org/wiki/Llama.cpp
    title: "Wikipedia: llama.cpp"
  - id: hf-ggml
    resource: https://huggingface.co/blog/ggml-joins-hf
    title: "Hugging Face blog: GGML and llama.cpp join HF (2026-02-20)"
    author: org:hugging-face
  - id: nv-hf
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA to Acquire Hugging Face (2026-09-03)"
    author: org:nvidia
  - id: fortune-hf
    resource: https://fortune.com/2026/09/03/hugging-face-goes-from-a-scrappy-startup-named-after-an-emoji-to-13-billion-nvidia-acquisition/
    title: "Fortune: Hugging Face goes from scrappy startup to $13B Nvidia acquisition"
    author: org:fortune
  - id: ollama-3185
    resource: https://github.com/ollama/ollama/issues/3185
    title: "Ollama issue #3185: ollama doesn't distribute notice licenses in its release artifacts"
---

# Summary
llama.cpp is the most-starred project in this domain after Ollama (which embeds it): 130k stars and ~1,500 commits in the last quarter[^llamacpp-gh]. Over two years it added a revived multimodal stack (libmtmd, April 2025) and native Android/ChromeOS acceleration (December 2025)[^wiki-llamacpp]. Its company ggml.ai — never a large VC-funded business — joined Hugging Face on 2026-02-20, with the code staying MIT and Georgi Gerganov keeping technical autonomy[^hf-ggml]. Seven months later NVIDIA agreed to acquire Hugging Face for $12.93B[^nv-hf], putting the world's dominant local-inference engine one step from NVIDIA ownership. Verdict: OSS thriving; business outcome = acquired (acqui-hire into HF), with an open question about neutrality.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-10 | libmtmd multimodal library reinvigorates vision support[^wiki-llamacpp] | OSS | + |
| W12 | 2025-12-17 | Full Android/ChromeOS acceleration via new GUI binding[^wiki-llamacpp] | OSS | + |
| W9 | 2026-02-20 | ggml.ai joins Hugging Face; MIT license and autonomy preserved[^hf-ggml] | Business/governance | + |
| W3 | 2026-09-03 | NVIDIA agrees to acquire Hugging Face (ggml's new parent) for $12.93B[^nv-hf] | Business | mixed |

# OSS successes
- GGUF is the de facto distribution format for local models; Ollama, LM Studio and others build on llama.cpp[^wiki-llamacpp].
- Sustained velocity (1,511 commits in W3) and star growth from ~109k (May 2026, per Wikipedia) to 130k (Oct 2026)[^wiki-llamacpp][^llamacpp-gh].
- HF deal funds full-time maintainers (Gerganov, Xuan-Son Nguyen, Aleksander Grygier) and targets one-click transformers→GGUF[^hf-ggml].

# OSS failures / risks
- Downstream free-riding: Ollama's MIT notice-compliance issue #3185 (opened 2024-03-16) remains open[^ollama-3185].
- Stewardship chain now ends at NVIDIA (pending close H1 2027); critics warned of "unnatural incentives to favor Nvidia"[^fortune-hf]. llama.cpp's value as a hardware-neutral (Apple Metal, Vulkan, ROCm, CPU) runtime is the thing most at risk.

# Business successes
- Clean acqui-hire that preserved license and autonomy[^hf-ggml].

# Business failures / risks
- ggml.ai never built an independent revenue line; value capture went to downstream wrappers (Ollama raised $88M total) rather than the engine authors.

# By window
## W3
- NVIDIA–Hugging Face deal announced (2026-09-03)[^nv-hf].
## W6
- No notable governance events found; continued releases.
## W9
- ggml.ai joins Hugging Face (2026-02-20)[^hf-ggml].
## W12
- Android/ChromeOS acceleration (2025-12-17)[^wiki-llamacpp].
## W24
- libmtmd multimodal (2025-04-10)[^wiki-llamacpp].

# Lessons
- Foundational OSS can win totally on adoption while the value accrues to UX wrappers; joining a well-funded platform was the sustainability path.
- MIT licensing maximised adoption but gave no leverage over downstream attribution.

# Related
- [Hugging Face](/organizations/hugging-face.md), [Ollama](/projects/ai-inference/ollama.md), [LM Studio](/projects/ai-inference/lm-studio.md)
- [Event: ggml joins HF](/events/2026-02-ggml-joins-hugging-face.md), [Event: NVIDIA to acquire HF](/events/2026-09-nvidia-to-acquire-hugging-face.md)

[^llamacpp-gh]: llama.cpp GitHub — https://github.com/ggml-org/llama.cpp
[^wiki-llamacpp]: Wikipedia: llama.cpp — https://en.wikipedia.org/wiki/Llama.cpp
[^hf-ggml]: HF blog, 2026-02-20 — https://huggingface.co/blog/ggml-joins-hf
[^nv-hf]: NVIDIA blog, 2026-09-03 — https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
[^fortune-hf]: Fortune, 2026-09-03 — https://fortune.com/2026/09/03/hugging-face-goes-from-a-scrappy-startup-named-after-an-emoji-to-13-billion-nvidia-acquisition/
[^ollama-3185]: Ollama issue #3185 — https://github.com/ollama/ollama/issues/3185
