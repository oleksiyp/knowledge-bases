---
type: Event
title: Anthropic accuses Chinese open-weight labs of distillation
description: "On 2026-02-23 Anthropic accused DeepSeek, Moonshot and MiniMax of using 24,000+ fraudulent accounts to generate 16M+ Claude exchanges for distillation; a Sept 2026 threat report naming seven Chinese labs prompted a Chinese regulator probe of DeepSeek and Moonshot."
event_kind: lawsuit
date: 2026-02-23
window: W9
impact: negative
projects: [projects/ai-models/deepseek, projects/ai-models/kimi, projects/ai-models/minimax]
organizations: [organizations/deepseek, organizations/moonshot-ai, organizations/minimax]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-moonshot
    resource: https://en.wikipedia.org/wiki/Moonshot_AI
    title: "Wikipedia: Moonshot AI"
  - id: wiki-minimax
    resource: https://en.wikipedia.org/wiki/MiniMax_(company)
    title: "Wikipedia: MiniMax (company)"
  - id: wiki-deepseek
    resource: https://en.wikipedia.org/wiki/DeepSeek
    title: "Wikipedia: DeepSeek"
  - id: tc-distill
    resource: https://techcrunch.com/2026/02/23/anthropic-accuses-chinese-ai-labs-of-mining-claude-as-us-debates-ai-chip-exports/
    title: "TechCrunch: Anthropic accuses Chinese AI labs of mining Claude as US debates AI chip exports (2026-02-23)"
    author: org:techcrunch
  - id: bbg-distill
    resource: https://www.bloomberg.com/news/articles/2026-02-23/anthropic-says-deepseek-minimax-distilled-ai-models-for-gains
    title: "Bloomberg: Anthropic accuses DeepSeek, MiniMax, Moonshot of illicit AI model distillation (2026-02-23)"
    author: org:bloomberg
  - id: qz-cac-probe
    resource: https://qz.com/china-deepseek-moonshot-anthropic-data-probe-092326
    title: "Quartz: China probes DeepSeek, Moonshot over user data sent to Anthropic (2026-09-23)"
    author: org:quartz
---

# What happened
On 23 Feb 2026 Anthropic accused DeepSeek, MiniMax and Moonshot of violating its terms by setting up more than 24,000 fraudulent accounts that generated more than 16 million exchanges with Claude, targeting reasoning, coding and tool use, in "industrial-scale distillation attacks"[^tc-distill][^bbg-distill]. (Corrected in pass 2: date 2026-02-01 (month placeholder) → 2026-02-23; the 16M figure is the total across the three labs per Bloomberg, while Wikipedia attributes ~16M to MiniMax alone[^wiki-minimax].) On 10 Sept 2026 a 154-page Anthropic threat report named seven China-based labs (Alibaba, Moonshot, DeepSeek, Zhipu, MiniMax, Xiaomi, SenseTime), including allegations that Moonshot silently routed some Kimi requests to Claude. Per Wikipedia, the Moonshot allegations covered 5,380 proxy accounts and 23M+ exchanges. The Cyberspace Administration of China then called in all seven and, on 23 Sept, focused a probe on DeepSeek and Moonshot over user data reaching Anthropic[^qz-cac-probe][^wiki-moonshot].

# Why it matters
It frames Chinese open-weight success partly as derived from US closed models, feeding US policy pressure (e.g., House scrutiny of US firms using Kimi)[^wiki-moonshot] and raising provenance questions for downstream users — including US labs that trained on Kimi outputs.

# Outcome so far
No public legal judgment found; regulator probe in China ongoing as of Sept 2026[^qz-cac-probe]. Business impact not yet visible in valuations.

# Related
- [Kimi](/projects/ai-models/kimi.md), [DeepSeek](/projects/ai-models/deepseek.md), [MiniMax](/projects/ai-models/minimax.md), [Inkling](/projects/ai-models/inkling.md)

[^wiki-moonshot]: Wikipedia, Moonshot AI.
[^wiki-minimax]: Wikipedia, MiniMax.
[^wiki-deepseek]: Wikipedia, DeepSeek.
[^tc-distill]: TechCrunch, 2026-02-23.
[^bbg-distill]: Bloomberg, 2026-02-23.
[^qz-cac-probe]: Quartz, 2026-09-23.
