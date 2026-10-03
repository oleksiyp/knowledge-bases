---
type: Organization
title: Zhipu AI (Z.ai)
description: "Tsinghua-rooted maker of the MIT-licensed GLM models; first Chinese LLM company to IPO (HKEX 2513, Jan 2026); market cap peaked near HK$1T in June 2026 before halving; H1 2026 revenue up ~400% to ¥954M with a ¥2B loss."
resource: https://z.ai
tags: [ai-models, open-weights, china, public-company]
org_kind: public-company
hq: Beijing, China
funding: { total_usd: "IPO raised ~HK$4.3B (~$558M) at HK$116.20/share", last_round: "Hong Kong IPO", last_round_date: 2026-01-08, valuation_usd: "~$6.6–7.1B at IPO (sources differ); peak >HK$1T (~$128B) on 2026-06-22 (Caixin); ~$62B Aug 2026 (Wikipedia; unconfirmed)" }
business_verdict: growing
projects: [projects/ai-models/glm]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-zai
    resource: https://en.wikipedia.org/wiki/Z.ai
    title: "Wikipedia: Z.ai"
  - id: cnbc-zhipu-ipo
    resource: https://www.cnbc.com/2026/01/08/china-ai-tiger-goes-ipo-zhipu-hong-kong-debut-openai-knowledge-atlas-hsi-hang-seng-listing.html
    title: "CNBC: Zhipu climbs in Hong Kong debut"
    author: org:cnbc
  - id: row-ipo
    resource: https://restofworld.org/2026/zhipu-ai-minimax-ipo/
    title: "Rest of World: China's MiniMax, Zhipu AI beat OpenAI to IPO"
  - id: tc-moonshot
    resource: https://techcrunch.com/2026/05/07/chinas-moonshot-ai-raises-2b-at-20b-valuation-as-demand-for-open-source-ai-skyrockets/
    title: "TechCrunch: Moonshot AI raises $2B at $20B (peer market caps)"
    author: org:techcrunch
  - id: caixin-zhipu-1t
    resource: https://www.caixinglobal.com/2026-06-23/new-model-propels-zhipu-ais-market-value-to-record-hk1-trillion-102456760.html
    title: "Caixin Global: New model propels Zhipu AI's market value to record HK$1 trillion (2026-06-23)"
    author: org:caixin
  - id: reuters-zhipu-h1
    resource: https://srnnews.com/zhipu-ai-first-half-revenue-grows-400/
    title: "Reuters (via SRN News): China's Zhipu AI revenue quintuples in first half, loss narrows (2026-08-31)"
    author: org:reuters
---

# Summary
Zhipu (Knowledge Atlas Technology; international brand Z.ai) listed on HKEX on 8 Jan 2026, raising ~HK$4.3B (~$558M) at HK$116.20 per share and a valuation of roughly $6.6–7.1B (sources differ on share count), with retail demand >1,000× oversubscribed[^cnbc-zhipu-ipo]. Its stock then rode its MIT-licensed GLM-5 series: market cap ~$55.9B by May 2026[^tc-moonshot], a peak above HK$1 trillion (~$128B) on 22 June 2026 after the open-weight GLM-5.2 release[^caixin-zhipu-1t], then a fall of nearly half[^reuters-zhipu-h1] (Wikipedia gives ≈$62B for Aug 2026; not confirmed by a primary source)[^wiki-zai]. H1 2026 revenue rose ~400% to ¥953.9M (~$142M) while the net loss narrowed to ~¥2B (from ¥2.4B) on R&D of ¥2.1B[^reuters-zhipu-h1] — up from H1 2025 revenue of only ~$27M[^row-ipo]. It has been on the US Entity List since Jan 2025[^wiki-zai].

# Business timeline
| Date | Event |
|---|---|
| 2025-01 | US Entity List[^wiki-zai] |
| 2025-07 | International rebrand to Z.ai with GLM-4.5[^wiki-zai] |
| 2026-01-08 | HK IPO[^cnbc-zhipu-ipo] |
| 2026-02 | GLM-5; shares later fall 23% on compute shortage[^wiki-zai] |
| 2026-04-07 | GLM-5.1 open; shares +11.5%[^wiki-zai] |
| 2026-06-22 | Market cap tops HK$1T (~$128B) after GLM-5.2[^caixin-zhipu-1t]; later sheds nearly half[^reuters-zhipu-h1] |
| 2026-08-31 | H1 results: revenue ¥953.9M (+400%), net loss ~¥2B[^reuters-zhipu-h1] |
| 2026-09-10 | Named in Anthropic's distillation threat report (with six other Chinese labs) |

# Monetization model
Enterprise/government (SOEs, financial institutions) deployments, API and GLM Coding Plan subscriptions; open weights as brand and developer funnel[^row-ipo].

# Successes
- Public-market validation of an open-weight strategy.

# Failures / risks
- Thin revenue vs losses; compute constraints; sanctions.

# Related
- [GLM](/projects/ai-models/glm.md), [HK IPOs](/events/2026-01-zhipu-minimax-hong-kong-ipos.md), [MiniMax](/organizations/minimax.md)

[^wiki-zai]: Wikipedia, Z.ai.
[^cnbc-zhipu-ipo]: CNBC, 8 Jan 2026.
[^row-ipo]: Rest of World, Jan 2026.
[^tc-moonshot]: TechCrunch, 7 May 2026.
[^reuters-zhipu-h1]: Reuters, 31 Aug 2026.
[^caixin-zhipu-1t]: Caixin Global, 23 Jun 2026.
