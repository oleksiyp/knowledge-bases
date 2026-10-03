---
type: Event
title: NVIDIA agrees to acquire Hugging Face for $12.93B
description: "On 3 Sept 2026 NVIDIA announced it will acquire Hugging Face, the neutral hub of the open-model ecosystem, for $12.93B, pledging it stays an open, multi-accelerator platform; closing expected H1 2027."
event_kind: acquisition
date: 2026-09-03
window: W3
impact: mixed
projects: [projects/ai-models/nemotron]
organizations: [organizations/hugging-face]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-hf
    resource: https://en.wikipedia.org/wiki/Hugging_Face
    title: "Wikipedia: Hugging Face (citing The Information: 'Nvidia Agrees to Buy Open Source AI Platform Hugging Face For $12.9 Billion')"
  - id: nv-hf-blog
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA blog: NVIDIA to Acquire Hugging Face (2026-09-03)"
    author: org:nvidia
  - id: nvda-8k-hf
    resource: https://www.sec.gov/Archives/edgar/data/1045810/000104581026000078/nvda-20260902.htm
    title: NVIDIA Form 8-K (merger agreement signed 2026-09-02)
  - id: fortune-hf
    resource: https://fortune.com/2026/09/03/hugging-face-goes-from-a-scrappy-startup-named-after-an-emoji-to-13-billion-nvidia-acquisition/
    title: "Fortune: Hugging Face goes from a 'scrappy' startup ... to $13 billion Nvidia acquisition"
    author: org:fortune
  - id: hf-ggml
    resource: https://huggingface.co/blog/ggml-joins-hf
    title: "HF blog: GGML and llama.cpp join HF (2026-02-20)"
  - id: cm-nvidia-hf
    resource: "https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/"
    title: "NVIDIA blog: NVIDIA to Acquire Hugging Face (2026-09-03)"
  - id: cm-gn-nvidia-hf
    resource: https://www.cnbc.com/2026/08/27/nvidia-hugging-face-acquisition.html
    title: "CNBC: Nvidia agrees to buy Hugging Face for $12.9 billion, report says (2026-08-27; first reported by The Information)"
    author: org:cnbc
  - id: tc-nvidia-hf-0826
    resource: https://techcrunch.com/2026/08/26/nvidia-closes-in-on-hugging-face-acquisition/
    title: "TechCrunch: Nvidia closes in on Hugging Face acquisition (2026-08-26)"
    author: org:techcrunch
  - id: cnbc-nvidia-hf-0903
    resource: https://www.cnbc.com/2026/09/03/nvidia-agrees-to-buy-hugging-face-for-almost-13-billion-ai-expansion.html
    title: "CNBC: Hugging Face approached Nvidia's Huang weeks ahead of $12.9B acquisition, CEO tells CNBC (2026-09-03)"
    author: org:cnbc
  - id: qz-openai-hf
    resource: https://qz.com/openai-hugging-face-investment-nvidia-acquisition-092926
    title: "Quartz: OpenAI tried to invest $100 million in Hugging Face (2026-09-29)"
  - id: hw-lerobot-gh
    resource: https://github.com/huggingface/lerobot
    title: "LeRobot GitHub (~27.9k stars, 2026-10-03)"
---

# What happened
NVIDIA announced on 3 Sept 2026 that it will acquire Hugging Face for $12.93B, stating that Hugging Face "will remain an open platform for the entire AI ecosystem", that NVIDIA compute will not be required, and that multi-cloud/multi-accelerator support continues; Jensen Huang cited NVIDIA's 500+ models and 250+ datasets already on HF[^nv-hf-blog]. The merger agreement was signed 2 Sept (≈$11.9B to stockholders plus up to ~$1B retention equity), with closing expected in the first half of 2027 subject to required regulatory approvals and customary closing conditions[^nvda-8k-hf][^cnbc-nvidia-hf-0903]. The deal was first reported by The Information on 26–27 Aug 2026[^tc-nvidia-hf-0826][^cm-gn-nvidia-hf].

# Why it matters
Hugging Face is the neutral distribution layer for Chinese, US and European open models alike, and its download counts are the industry's adoption metric. Ownership by the dominant GPU vendor — also a major open-model publisher (Nemotron) — raises neutrality, data-access and antitrust questions, while giving HF deep pockets.

# Outcome so far
Pending regulatory review/closing; NVIDIA's 8-K gives expected closing as the first half of 2027[^nvda-8k-hf]. As of 2026-10-03 the deal has not closed.

# Related
- [Hugging Face](/organizations/hugging-face.md), [Nemotron](/projects/ai-models/nemotron.md), [Domain review](/domains/ai-models.md)

[^wiki-hf]: Wikipedia, Hugging Face (background only).
[^tc-nvidia-hf-0826]: TechCrunch, 2026-08-26.
[^cnbc-nvidia-hf-0903]: CNBC, 2026-09-03.
[^qz-openai-hf]: Quartz, 2026-09-29.
[^nv-hf-blog]: NVIDIA blog, 3 Sept 2026.
[^nvda-8k-hf]: NVIDIA Form 8-K (merger agreement dated 2026-09-02; ~$11.9B cash to stockholders + up to ~$1.0B retention equity; expected close H1 2027) — fetched and confirmed in pass 2.


## Additional notes (ai-inference)
- The ai-inference agent fetched NVIDIA's 8-K directly: agreement dated 2026-09-02, ~$11.9B purchase price to stockholders, up to ~$1.0B equity retention program, close expected H1 2027 subject to regulatory approvals[^nvda-8k-hf].
- **Inference-stack consequences:** HF owns transformers (the canonical model-definition library; v5 went PyTorch-only) and — since 2026-02-20 — employs the ggml/llama.cpp team[^hf-ggml]. Pending close, NVIDIA would therefore steward both the model-definition layer and the dominant hardware-neutral local runtime (Apple Metal, Vulkan, ROCm, CPU backends). Fortune quotes model creator Eric Hartford warning of "unnatural incentives to favor Nvidia and disfavor Nvidia's competitors"[^fortune-hf]. Per Fortune, CEO Clément Delangue said HF had turned down many acquisition offers before and had rejected a 2025 NVIDIA investment at a $7B valuation[^fortune-hf].
- Related: [llama.cpp](/projects/ai-inference/llama-cpp.md), [transformers](/projects/ai-inference/transformers.md), [AI inference review](/domains/ai-inference.md)

[^fortune-hf]: Fortune, 2026-09-03 — https://fortune.com/2026/09/03/hugging-face-goes-from-a-scrappy-startup-named-after-an-emoji-to-13-billion-nvidia-acquisition/
[^hf-ggml]: HF blog — https://huggingface.co/blog/ggml-joins-hf

## Additional notes (coss-market)

Market context: The NVIDIA blog post of 2026-09-03 is a primary-source confirmation: $12.93B; "Hugging Face will remain an open platform"; "NVIDIA compute will not be required"; founders continue to lead under the Hugging Face brand[^cm-nvidia-hf]. The deal was first reported 2026-08-26 (The Information/Reuters); Quartz later reported OpenAI had tried to invest ~$100M first[^qz-openai-hf]; AMD's $8.2B World Labs deal was widely framed as a response (trade press; not independently confirmed here). It is the largest acquisition of a commercial open source company in the 2024–26 window, ahead of IBM–Confluent (~$11B). See [COSS M&A](/projects/coss-market/coss-ma-2024-2026.md).

[^cm-nvidia-hf]: NVIDIA blog, 2026-09-03.
[^cm-gn-nvidia-hf]: CNBC, 2026-08-27.

## Additional notes (hardware-embedded)
- The deal also covers Hugging Face's open-robotics assets: LeRobot (~27.9k stars),[^hw-lerobot-gh] Pollen Robotics and the Reachy Mini and HopeJR hardware lines. Together with Qualcomm's Arduino and PickNik deals and Google's Intrinsic Core release, it puts the main open "physical AI" stacks under chip and platform vendors. See [LeRobot](/projects/hardware-embedded/lerobot.md).

[^hw-lerobot-gh]: GitHub.
