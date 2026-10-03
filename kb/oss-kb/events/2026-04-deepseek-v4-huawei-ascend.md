---
type: Event
title: DeepSeek V4 released, adapted to Huawei Ascend
description: "On 24 Apr 2026 DeepSeek previewed V4-Pro (1.6T) and V4-Flash (284B), MIT-licensed with 1M context and day-zero Huawei Ascend support — open frontier models decoupling from Nvidia."
event_kind: release
date: 2026-04-24
window: W6
impact: positive
projects: [projects/ai-models/deepseek, projects/ai-models/glm]
organizations: [organizations/deepseek]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: reuters-v4
    resource: https://www.investing.com/news/economy-news/factboxdeepseekv4-the-chinese-ai-model-adapted-for-huawei-chips-4636025
    title: "Reuters (via Investing.com): Factbox - DeepSeek-V4"
    author: org:reuters
  - id: wiki-deepseek
    resource: https://en.wikipedia.org/wiki/DeepSeek
    title: "Wikipedia: DeepSeek"
  - id: hf-deepseek
    resource: https://huggingface.co/deepseek-ai
    title: deepseek-ai on Hugging Face
  - id: caixin-glm5
    resource: https://www.caixinglobal.com/2026-02-12/zhipu-ai-launches-new-model-better-at-coding-learning-102413996.html
    title: "Caixin: Zhipu launches GLM-5"
  - id: reuters-v4-factbox
    resource: https://www.investing.com/news/economy-news/factboxdeepseekv4-the-chinese-ai-model-adapted-for-huawei-chips-4636025
    title: "Reuters via Investing.com: Factbox — DeepSeek-V4, the Chinese AI model adapted for Huawei chips (2026-04-24)"
    author: org:reuters
---

# What happened
DeepSeek previewed V4 on 24 Apr 2026: V4-Pro (1.6T total, 49B active) and V4-Flash (284B, 13B active), 1M-token context, adapted to Huawei chips; Huawei said its full Ascend supernode line supports V4[^reuters-v4][^reuters-v4-factbox]. V4 arrived months after rumored February dates and drew a muted market reaction (Reuters, as relayed)[^reuters-v4]. V4-Flash (31 Jul) and V4-Pro (13 Aug) went GA; V4.1-Flash followed 10 Sept[^wiki-deepseek].

# Why it matters
Together with Zhipu's GLM-5 (reportedly trained on Ascend, Feb 2026)[^caixin-glm5], it shows Chinese open frontier models can be built and served without Nvidia — undercutting export controls as a lever over open-model capability.

# Outcome so far
V4-Flash-0731 ~4.5M monthly downloads (Oct 2026)[^hf-deepseek]; DeepSeek's valuation climbed past $50B in its first external round (see related).

# Related
- [DeepSeek](/projects/ai-models/deepseek.md), [DeepSeek first funding](/events/2026-06-deepseek-first-external-funding.md)

[^reuters-v4]: Reuters factbox, 24 Apr 2026.
[^wiki-deepseek]: Wikipedia, DeepSeek.
[^hf-deepseek]: HF deepseek-ai (2026-10-03).
[^caixin-glm5]: Caixin, 12 Feb 2026.
[^reuters-v4-factbox]: Reuters factbox, 2026-04-24.
