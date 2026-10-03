---
type: OSS Project
title: MiniMax models (M-series, Hailuo)
description: "MiniMax's open-weight LLMs (M1 → M2.x → M3) and video models; a commercially savvy lab that listed in Hong Kong in Jan 2026 and doubled on debut, but faces Hollywood copyright suits and distillation allegations."
resource: https://huggingface.co/MiniMaxAI
tags: [open-weights, llm, video, china, agentic]
domain: ai-models
license: "Open weights (license varies by model; not verified per model)"
license_history: []
governance: single-vendor
steward: MiniMax Group
backing_orgs: [organizations/minimax]
metrics:
  minimax_h3_downloads_last_month: { value: "3.57M", as_of: 2026-10-03 }
  minimax_m3_downloads_last_month: { value: "171k", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-minimax
    resource: https://en.wikipedia.org/wiki/MiniMax_(company)
    title: "Wikipedia: MiniMax (company)"
  - id: hf-minimax
    resource: https://huggingface.co/MiniMaxAI
    title: MiniMaxAI on Hugging Face
    last_modified: 2026-10-03T00:00:00Z
  - id: cnbc-minimax-ipo
    resource: https://www.cnbc.com/2026/01/09/minimax-hong-kong-ipo-ai-tigers-zhipu.html
    title: "CNBC: MiniMax doubles in Hong Kong debut (2026-01-09)"
    author: org:cnbc
  - id: scmp-minimax
    resource: https://www.scmp.com/business/banking-finance/article/3339251/chinese-ai-start-minimax-shines-hong-kong-ipo-debut
    title: "SCMP: Chinese AI start-up MiniMax shines on Hong Kong IPO debut"
    author: org:scmp
  - id: row-ipo
    resource: https://restofworld.org/2026/zhipu-ai-minimax-ipo/
    title: "Rest of World: China's MiniMax, Zhipu AI beat OpenAI to IPO"
  - id: tc-moonshot
    resource: https://techcrunch.com/2026/05/07/chinas-moonshot-ai-raises-2b-at-20b-valuation-as-demand-for-open-source-ai-skyrockets/
    title: "TechCrunch: China's Moonshot AI raises $2B at $20B valuation (2026-05-07)"
    author: org:techcrunch
  - id: minimax-fy25
    resource: https://www.minimax.io/news/minimax-global-announces-full-year-2025-financial-results
    title: "MiniMax: Full Year 2025 financial results (2026-03-02)"
  - id: techtimes-m3
    resource: https://www.techtimes.com/articles/317532/20260601/minimax-m3-open-weight-coding-model-frontier-claims-unverified-benchmarks.htm
    title: "Tech Times: MiniMax M3 open-weight coding model (2026-06-01)"
  - id: fal-h3
    resource: https://fal.ai/minimax-h3
    title: "fal.ai: MiniMax H3 open-weights multimodal video model"
  - id: decrypt-cac
    resource: https://decrypt.co/379120/china-probes-deepseek-moonshot-data-leaks-anthropic-claude
    title: "Decrypt: China probes DeepSeek, Moonshot over alleged data leaks to Anthropic's Claude (2026-09-23)"
---

# Summary
MiniMax combines open-weight LLMs (MiniMax-01 Jan 2025, M1 Jun 2025, M2.5 Feb 2026, M2.7 Mar 2026, M3 Jun 2026) with consumer products (Hailuo video, Talkie) that generate most of its revenue[^wiki-minimax][^row-ipo]. It listed in Hong Kong on 9 Jan 2026 (HK$4.8B raised) and closed day one up 109% at a ~US$13.7B valuation[^scmp-minimax][^cnbc-minimax-ipo]. Its open video model MiniMax-H3 (Aug 2026) is its most downloaded HF model (~3.6M/month)[^hf-minimax]. Risks: large losses (FY2025: revenue $79.0M, +159%; net loss $1.87B, of which ~$1.59B is a non-cash preferred-share remeasurement; adjusted net loss $251M)[^minimax-fy25], Disney/Universal/WBD copyright suits (Sept 2025), and Anthropic's distillation allegation (Feb 2026)[^wiki-minimax].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01 | MiniMax-01 text/vision models[^wiki-minimax] | OSS | + |
| W24 | 2025-06 | MiniMax-M1 reasoning model[^wiki-minimax] | OSS | + |
| W24 | 2025-09 | Disney, Universal, WBD sue over Hailuo[^wiki-minimax] | Business | − |
| W9 | 2026-01-09 | HK IPO; +109% day one, ~US$13.7B valuation[^scmp-minimax] | Business | + |
| W9 | 2026-02 | M2.5 released; Anthropic alleges 16M distillation interactions[^wiki-minimax] | OSS | +/− |
| W9 | 2026-03-02 | FY2025 results: revenue $79.0M, adjusted net loss $250.9M[^minimax-fy25] | Business | mixed |
| W9 | 2026-03 | M2.7 released[^wiki-minimax] | OSS | + |
| W6 | 2026-06-01 | M3 (428B MoE, ~23B active, 1M context, multimodal) with open weights on HF[^techtimes-m3][^wiki-minimax] | OSS | + |
| W3 | 2026-08-13/14 | MiniMax-H3 open video model (H3-Base weights under MiniMax H3 Community License; 2K video with audio); Music3[^hf-minimax][^fal-h3] | OSS | + |
| W3 | 2026-09-10 | Named among 7 Chinese labs in Anthropic's distillation threat report[^decrypt-cac] | OSS | − |

# OSS successes
- Open video generation weights with real uptake (H3 ~3.57M monthly downloads)[^hf-minimax].

# OSS failures / risks
- LLM downloads modest vs Qwen/DeepSeek (M3 ~171k/month)[^hf-minimax]; distillation allegations[^wiki-minimax].

# Business successes
- Market value >HK$100B after IPO; ~$33B by May 2026 per TechCrunch[^tc-moonshot].

# Business failures / risks
- Loss-making (adjusted net loss $251M in FY2025)[^minimax-fy25]; copyright litigation from major studios[^wiki-minimax].

# By window
## W3
- H3 video and Music3 open releases (Aug)[^hf-minimax][^fal-h3]; named in Anthropic's Sept 10 report[^decrypt-cac].
## W6
- M3 open weights (Jun 1–2)[^techtimes-m3].
## W9
- IPO (Jan 9)[^scmp-minimax]; FY2025 results (Mar 2)[^minimax-fy25]; M2.5, M2.7; distillation accusation[^wiki-minimax].
## W12
- No notable events found (verified).
## W24
- MiniMax-01, M1; studio lawsuits[^wiki-minimax].

# Lessons
- Consumer-app revenue plus open-weight credibility proved an IPO-able combination in Hong Kong.

# Related
- [MiniMax org](/organizations/minimax.md), [HK IPOs event](/events/2026-01-zhipu-minimax-hong-kong-ipos.md), [Distillation accusations](/events/2026-02-anthropic-distillation-accusations.md)

[^wiki-minimax]: Wikipedia, MiniMax (company).
[^hf-minimax]: HF MiniMaxAI org (2026-10-03).
[^cnbc-minimax-ipo]: CNBC, 9 Jan 2026.
[^scmp-minimax]: SCMP, Jan 2026.
[^row-ipo]: Rest of World, Jan 2026.
[^tc-moonshot]: TechCrunch, 7 May 2026 (peer market caps: Zhipu ~$55.9B, MiniMax ~$33B).
[^minimax-fy25]: MiniMax press release, 2 Mar 2026.
[^techtimes-m3]: Tech Times, 1 Jun 2026.
[^fal-h3]: fal.ai model page, MiniMax H3.
[^decrypt-cac]: Decrypt, 23 Sept 2026.
