---
type: Trend
title: China took the lead in open-weight AI and turned it into capital
description: "Chinese labs (Qwen, DeepSeek, Kimi, GLM, MiniMax) overtook US labs on open-model downloads, derivatives and API tokens in 2025. They converted that lead into Hong Kong IPOs and $20–70B valuations. Meta retreated from open frontier weights, and US labs answered with smaller open releases."
tags: [ai, open-weights, china, geopolitics, ipo, cross-domain]
strength: dominant
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
domains: [ai-models, ai-inference, coss-market]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report: Measuring the Open Language Model Ecosystem (Apr 2026)"
  - id: mittr-china
    resource: https://www.technologyreview.com/2026/02/12/1132811/whats-next-for-chinese-open-source-ai/
    title: "MIT Technology Review: What's next for Chinese open-source AI"
  - id: cnbc-zhipu-ipo
    resource: https://www.cnbc.com/2026/01/08/china-ai-tiger-goes-ipo-zhipu-hong-kong-debut-openai-knowledge-atlas-hsi-hang-seng-listing.html
    title: "CNBC: Zhipu Hong Kong debut (2026-01-08)"
  - id: vb-muse-spark
    resource: https://venturebeat.com/technology/goodbye-llama-meta-launches-new-proprietary-ai-model-muse-spark-first-since
    title: "VentureBeat: Goodbye, Llama?"
  - id: reuters-v4
    resource: https://www.investing.com/news/economy-news/factboxdeepseekv4-the-chinese-ai-model-adapted-for-huawei-chips-4636025
    title: "Reuters factbox: DeepSeek-V4 adapted for Huawei chips"
---

# Summary

This is the biggest geographic shift in open source of the period. Chinese open models passed US models in cumulative Hugging Face downloads by Aug 2025. Qwen passed Llama in Sept 2025 and accounted for 69% of new derivative models by early 2026. Chinese models took more than 70% of OpenRouter tokens by Jan 2026.[^atom-report] About 80% of Silicon Valley startups that build on open models reportedly use Chinese ones.[^mittr-china]

# Timeline

| Window | Milestone |
|---|---|
| W24 | [DeepSeek-R1 shock](/events/2025-01-deepseek-r1-shock.md), with Nvidia losing about $600B in one day; Qwen3; Kimi K2; [Llama 4 flop](/events/2025-04-llama-4-launch-and-lmarena-controversy.md); [gpt-oss](/events/2025-08-openai-gpt-oss-release.md) as the US response |
| W12 | Kimi K2 Thinking; DeepSeek V3.2; Meta Superintelligence Labs layoffs and LeCun's exit |
| W9 | [Zhipu and MiniMax Hong Kong IPOs](/events/2026-01-zhipu-minimax-hong-kong-ipos.md)[^cnbc-zhipu-ipo]; Kimi K2.5; GLM-5 on Ascend; [distillation accusations](/events/2026-02-anthropic-distillation-accusations.md); [Gemma 4 moves to Apache-2.0](/events/2026-04-gemma-4-apache-relicense.md) |
| W6 | [Meta's closed Muse Spark](/events/2026-04-meta-muse-spark-closed-pivot.md)[^vb-muse-spark]; [DeepSeek V4 on Huawei Ascend](/events/2026-04-deepseek-v4-huawei-ascend.md)[^reuters-v4]; [DeepSeek's first outside funding](/events/2026-06-deepseek-first-external-funding.md); Moonshot valued at $20B |
| W3 | [Kimi K3 and tighter licenses](/events/2026-07-kimi-k3-and-flagship-license-tightening.md); Moonshot at about $35B; DeepSeek in talks at about $70B; [NVIDIA–Hugging Face](/events/2026-09-nvidia-to-acquire-hugging-face.md) |

# Why China won

- **Cadence.** Frequent releases across a full ladder of model sizes.
- **Permissive licenses.** MIT and Apache instead of custom community licenses.
- **Efficiency.** Mixture-of-experts architectures and sparse attention.
- **Specialisation.** Agentic and coding models captured paid API demand.
- **State and capital support.** Domestic chips such as Huawei Ascend made openness a sovereignty asset.

# Counter-currents

- **US labs liberalised smaller models.** Gemma 4 and Muse Glimmer moved to Apache-2.0, and OpenAI released gpt-oss, Nemotron followed, and Thinking Machines released Inkling, a US model built on Chinese open models.
- **2026 Chinese flagships added revenue gates.** Being open now appears to depend on not being the frontier leader.
- **Provenance became a fight.** Distillation accusations, a Chinese regulator (CAC) probe and US congressional pressure all target where model weights came from.
- **Valuations rest on thin revenue.** Zhipu and MiniMax post heavy losses.

# Related

- [Domain review: AI models](/domains/ai-models.md)
- [Qwen](/projects/ai-models/qwen.md), [DeepSeek](/projects/ai-models/deepseek.md), [Kimi](/projects/ai-models/kimi.md), [Meta Llama](/projects/ai-models/meta-llama.md)
- [License pendulum](/trends/license-pendulum.md)

[^atom-report]: ATOM Report (arXiv 2604.07190).
[^mittr-china]: MIT Technology Review.
[^cnbc-zhipu-ipo]: CNBC.
[^vb-muse-spark]: VentureBeat.
[^reuters-v4]: Reuters via Investing.com.
