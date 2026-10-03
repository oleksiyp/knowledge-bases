---
type: Organization
title: Moonshot AI
description: "Beijing lab behind the Kimi open-weight models; valuation rose from $4.3B to ~$35B within 2026 on surging open-model API demand; confidentially filed for a ~$3B Hong Kong IPO in Sept 2026 while raising at a reported $50B."
resource: https://www.moonshot.ai
tags: [ai-models, open-weights, china]
org_kind: coss-startup
hq: Beijing, China
funding: { total_usd: "~$3.9B in six months to May 2026 (TechCrunch) plus ~$3.5B in July 2026 (Bloomberg)", last_round: "Round closed above target (state AI Industry Investment Fund among leads, per press)", last_round_date: 2026-07-29, valuation_usd: "~$35B (Bloomberg, Jul 2026); ~$50B in an ongoing pre-IPO round (Reuters, Sept 2026)" }
business_verdict: thriving
projects: [projects/ai-models/kimi]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-moonshot
    resource: https://en.wikipedia.org/wiki/Moonshot_AI
    title: "Wikipedia: Moonshot AI"
  - id: tc-moonshot
    resource: https://techcrunch.com/2026/05/07/chinas-moonshot-ai-raises-2b-at-20b-valuation-as-demand-for-open-source-ai-skyrockets/
    title: "TechCrunch: China's Moonshot AI raises $2B at $20B valuation"
    author: org:techcrunch
  - id: fortune-ipo
    resource: https://fortune.com/2026/07/23/moonshot-deepseek-great-chinese-ai-ipo-rush/
    title: "Fortune: Moonshot, DeepSeek, and the great Chinese AI IPO rush"
    author: org:fortune
  - id: bbg-moonshot-35b
    resource: https://www.bloomberg.com/news/articles/2026-07-29/china-s-moonshot-ai-passes-funding-goal-to-hit-35-billion-value
    title: "Bloomberg: Moonshot AI Surpasses Funding Goal to Hit $35 Billion Value (2026-07-29)"
    author: org:bloomberg
  - id: technode-moonshot-50b
    resource: https://technode.com/2026/07/22/moonshot-ai-reportedly-plans-final-pre-ipo-round-at-50-billion-valuation/
    title: "TechNode: Moonshot AI reportedly plans final pre-IPO round at $50 billion valuation (2026-07-22)"
    author: org:technode
  - id: bbg-moonshot-arr
    resource: https://www.bloomberg.com/news/articles/2026-09-11/china-ai-star-moonshot-eyes-2-billion-annualized-sales-in-2026
    title: "Bloomberg: China AI star Moonshot eyes $2 billion annualized sales in 2026 (2026-09-11; ARR >$1B in Aug, $300M in Jun)"
    author: org:bloomberg
  - id: qz-k3-revshare
    resource: https://qz.com/moonshot-ai-kimi-k3-revenue-sharing-microsoft-amazon-google-082626
    title: "Quartz (citing Reuters): Moonshot AI is seeking a revenue cut from Microsoft, Amazon and Google (2026-08-26)"
    author: org:quartz
  - id: vb-k3-license
    resource: https://venturebeat.com/technology/kimi-k3s-full-weights-are-here-but-theyre-open-with-a-caveat-what-enterprises-should-know
    title: "VentureBeat: Kimi K3's full weights are here, but they're 'open' with a caveat (2026-07-27/28)"
    author: org:venturebeat
  - id: rte-moonshot-ipo
    resource: https://www.rte.ie/news/business/2026/0903/1590165-ai-firm-moonshot-files-confidentially-for-hong-kong-ipo/
    title: "RTÉ/Reuters: AI firm Moonshot files confidentially for Hong Kong IPO (2026-09-03)"
    author: org:reuters
  - id: qz-cac-probe
    resource: https://qz.com/china-deepseek-moonshot-anthropic-data-probe-092326
    title: "Quartz: China probes DeepSeek, Moonshot over user data sent to Anthropic (2026-09-23)"
---

# Summary
Moonshot AI (Kimi) was a fading chatbot company in mid-2025 (Kimi fell to 7th in MAU, June 2025)[^wiki-moonshot] until its open-weight K2 (July 2025) turned it into the leading Chinese agentic-model vendor. It raised ~$3.9B in six months to May 2026, going from $4.3B (end-2025) to $10B (early 2026) to $20B (May 2026, Meituan Long-Z lead) with ARR of $200M in April[^tc-moonshot], then raised ~$3.5B at ~$35B on 29 July 2026, above its target (Bloomberg)[^bbg-moonshot-35b]. ARR then rose to ~$300M in June and above $1B in August after the Kimi K3 launch (16 July), and the company told investors it targets $2B by end-2026[^bbg-moonshot-arr]. K3's license requires a separate commercial agreement for model-as-a-service operators with more than $20M of revenue in any 12 months[^vb-k3-license]. The widely quoted "30% revenue share" is not a license term: Reuters reported (26 Aug) that it is what Moonshot was seeking from Microsoft, Amazon and Google in hosting talks[^qz-k3-revshare]. On 3 Sept 2026 Reuters reported it had confidentially filed for a Hong Kong IPO targeting ~$3B (Goldman Sachs, CICC, Deutsche Bank), after redomiciling onshore, with an ongoing round valuing it at $50B[^rte-moonshot-ipo][^technode-moonshot-50b]. (Corrected in pass 2: "~$35B (Wikipedia) / just over $30B (Fortune)" → ~$35B per Bloomberg; date 2026-07-30 → 2026-07-29.)

# Business timeline
| Date | Event |
|---|---|
| 2024-02 | $1B Alibaba-led round at $2.5B[^wiki-moonshot] |
| 2024-08 | $300M (Tencent, Gaorong) at $3.3B[^wiki-moonshot] |
| 2025-07 | Kimi K2 open release[^wiki-moonshot] |
| 2025-12-31 | $500M at $4.3B[^tc-moonshot] |
| 2026-03 | Considering HK IPO[^wiki-moonshot] |
| 2026-04 | ARR $200M[^tc-moonshot] |
| 2026-06 | ARR ~$300M[^bbg-moonshot-arr] |
| 2026-07-16/27 | Kimi K3 launched; weights released 27 Jul under the Kimi K3 License[^vb-k3-license] |
| 2026-08 | ARR >$1B; $2B year-end target[^bbg-moonshot-arr] |
| 2026-08-26 | Reuters: seeking up to 30% of K3 revenue in hosting talks with Microsoft, Amazon, Google[^qz-k3-revshare] |
| 2026-05-07 | $2B at $20B[^tc-moonshot] |
| 2026-07-29 | Round closes above target at ~$35B[^bbg-moonshot-35b] |
| 2026-09-03 | Confidential Hong Kong IPO filing (~$3B target); round ongoing at $50B[^rte-moonshot-ipo] |
| 2026-09-10 | Anthropic threat report accuses seven Chinese labs incl. Moonshot of illicit distillation; CAC then probes DeepSeek and Moonshot over user data reaching Anthropic[^qz-cac-probe] |

# Monetization model
Subscriptions (Kimi app, Kimi Code), API usage (strong on OpenRouter), and from K3 a license requiring large MaaS hosts to sign commercial agreements.

# Successes
- Fastest valuation growth among open-weight labs[^tc-moonshot].

# Failures / risks
- Distillation allegations; US scrutiny of US companies using Kimi; GPU-access allegations (denied)[^wiki-moonshot].

# Related
- [Kimi](/projects/ai-models/kimi.md), [Flagship license tightening](/events/2026-07-kimi-k3-and-flagship-license-tightening.md)

[^wiki-moonshot]: Wikipedia, Moonshot AI.
[^tc-moonshot]: TechCrunch, 7 May 2026.
[^fortune-ipo]: Fortune, 23 Jul 2026.
[^bbg-moonshot-35b]: Bloomberg, 29 Jul 2026.
[^technode-moonshot-50b]: TechNode, 22 Jul 2026.
[^rte-moonshot-ipo]: RTÉ (Reuters), 3 Sept 2026.
[^qz-cac-probe]: Quartz, Sept 2026.
[^bbg-moonshot-arr]: Bloomberg, 2026-09-11.
[^qz-k3-revshare]: Quartz citing Reuters, 2026-08-26.
[^vb-k3-license]: VentureBeat, July 2026.
