---
type: Organization
title: MiniMax
description: "Shanghai AI company (Hailuo video, Talkie, M-series open LLMs); HKEX IPO Jan 9 2026 doubled on debut; H1 2026 revenue up 283% to $116.6M but adjusted loss $293M; facing Hollywood copyright suits."
resource: https://www.minimax.io
tags: [ai-models, open-weights, china, public-company, video]
org_kind: public-company
hq: Shanghai, China
funding: { total_usd: "IPO raised HK$4.8B (~$619M)", last_round: "Hong Kong IPO", last_round_date: 2026-01-09, valuation_usd: "~$13.7B at day-one close; ~$33B by May 2026 (TechCrunch)" }
business_verdict: growing
projects: [projects/ai-models/minimax]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-minimax
    resource: https://en.wikipedia.org/wiki/MiniMax_(company)
    title: "Wikipedia: MiniMax (company)"
  - id: scmp-minimax
    resource: https://www.scmp.com/business/banking-finance/article/3339251/chinese-ai-start-minimax-shines-hong-kong-ipo-debut
    title: "SCMP: MiniMax shines on Hong Kong IPO debut"
    author: org:scmp
  - id: row-ipo
    resource: https://restofworld.org/2026/zhipu-ai-minimax-ipo/
    title: "Rest of World: China's MiniMax, Zhipu AI beat OpenAI to IPO"
  - id: tc-moonshot
    resource: https://techcrunch.com/2026/05/07/chinas-moonshot-ai-raises-2b-at-20b-valuation-as-demand-for-open-source-ai-skyrockets/
    title: "TechCrunch: Moonshot AI raises $2B at $20B (peer market caps)"
    author: org:techcrunch
  - id: hkex-minimax-fy25
    resource: https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0302/2026030202837.pdf
    title: "HKEX filing: MiniMax Group Inc. annual results for FY2025 (2026-03-02)"
    author: org:minimax
  - id: minimax-h1-26
    resource: https://www.minimax.io/news/minimax-announces-first-half-2026-financial-results-1787744160
    title: "MiniMax: First Half 2026 Financial Results (2026-08-26)"
    author: org:minimax
---

# Summary
MiniMax (founded 2022; backed by Alibaba, Tencent) listed on HKEX on 9 Jan 2026 at HK$165, raising HK$4.8B with ~56.5% from 14 cornerstones (ADIA, Alibaba, Mirae, Boyu, IDG...), and closed day one +109% at HK$345 (~US$13.7B)[^scmp-minimax]. About two-thirds of revenue comes from individual consumers outside China (Singapore, US)[^row-ipo]. Financials are weak: ~$53M revenue and ~$512M losses in the first nine months of 2025 (Rest of World)[^row-ipo]; Its FY2025 results (filed 2 Mar 2026) show revenue of $79.0M (+159%) and a reported loss of $1.87B, of which ~$1.59B was a non-cash fair-value charge on preferred shares converted at the IPO; adjusted net loss was ~$251M[^hkex-minimax-fy25]. H1 2026 revenue rose 283% to $116.6M (open-platform/enterprise revenue +703% to $73.9M, 63% of total) while adjusted net loss widened to $293.0M[^minimax-h1-26]. (Pass 2: the FY2025 figures previously marked unverified are confirmed by the HKEX filing; the $1.87B is a total loss, not an operating loss.) Market cap ~$33B by May 2026[^tc-moonshot].

# Business timeline
| Date | Event |
|---|---|
| 2024-03 | $600M Alibaba-led round at $2.5B[^wiki-minimax] |
| 2025-09 | Disney, Universal, WBD copyright suits vs Hailuo[^wiki-minimax] |
| 2026-01-09 | HK IPO, +109% day one[^scmp-minimax] |
| 2026-02 | Anthropic alleges 16M distillation interactions[^wiki-minimax] |
| 2026-03-02 | FY2025 results: revenue $79.0M, adjusted net loss ~$251M[^hkex-minimax-fy25] |
| 2026-05 | ~$33B market cap[^tc-moonshot] |
| 2026-08-26 | H1 2026 results: revenue $116.6M (+283%), adjusted net loss $293.0M[^minimax-h1-26] |
| 2026-09-10 | Named in Anthropic's distillation threat report (with six other Chinese labs) |

# Monetization model
Consumer apps (Hailuo video, Talkie companions), API; open weights for LLM/video credibility.

# Successes
- Strong IPO; open video model H3 widely downloaded (see project).

# Failures / risks
- Large losses; studio litigation; distillation allegations.

# Related
- [MiniMax models](/projects/ai-models/minimax.md), [HK IPOs](/events/2026-01-zhipu-minimax-hong-kong-ipos.md)

[^wiki-minimax]: Wikipedia, MiniMax (company).
[^scmp-minimax]: SCMP, Jan 2026.
[^row-ipo]: Rest of World, 6 Jan 2026.
[^tc-moonshot]: TechCrunch, 7 May 2026.
[^hkex-minimax-fy25]: HKEX filing, 2 Mar 2026.
[^minimax-h1-26]: MiniMax, 26 Aug 2026.
