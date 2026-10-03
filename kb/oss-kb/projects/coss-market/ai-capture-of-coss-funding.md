---
type: Market Study
title: "AI's capture of COSS funding"
description: "From 2025 AI absorbed ~50% and by Q2 2026 >70% of global venture dollars; within COSS, money flowed to open-weight model makers (Mistral) and to data/infra companies that rebranded as AI-agent infrastructure (Databricks, Supabase, ClickHouse, Temporal), squeezing non-AI open source."
resource: https://news.crunchbase.com/venture/global-startup-exits-ipo-ma-soar-ai-q2-h1-2026/
tags: [coss, ai, venture-capital, concentration, market-study]
domain: coss-market
metrics:
  ai_share_global_vc_2025: { value: "~50% ($211B of $425B)", as_of: 2026-01-07 }
  ai_share_global_vc_q2_2026: { value: ">70%", as_of: 2026-07-02 }
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T18:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T18:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cb-2025
    resource: https://news.crunchbase.com/venture/funding-data-third-largest-year-2025/
    title: "Crunchbase News: 2025 global venture totals"
  - id: cb-h1-2026
    resource: https://news.crunchbase.com/venture/global-startup-exits-ipo-ma-soar-ai-q2-h1-2026/
    title: "Crunchbase News: H1 2026 $510B, >70% AI in Q2"
  - id: supabase-f
    resource: https://supabase.com/blog/supabase-series-f
    title: "Supabase Series F"
  - id: cnbc-supabase
    resource: https://www.cnbc.com/2026/06/04/database-startup-supabase-raises-500-million-10point5-billion-valuation.html
    title: "CNBC: Supabase raises $500M at $10.5B (2026-06-04)"
  - id: temporal-e
    resource: https://temporal.io/blog/temporal-raises-usd550m-series-e-at-usd12-55b-valuation-ai
    title: "Temporal Series E"
  - id: cnbc-dbx-aug26
    resource: "https://www.cnbc.com/2026/08/13/databricks-funding-round-190-billion-valuation.html"
    title: "CNBC: Databricks wraps $5 billion funding round at $190 billion valuation (2026-08-13)"
  - id: bbg-clickhouse
    resource: https://www.bloomberg.com/news/articles/2026-01-16/clickhouse-lands-15-billion-valuation-in-ai-database-race
    title: "Bloomberg: ClickHouse lands $15B valuation in AI database race"
  - id: cnbc-mistral26
    resource: "https://www.cnbc.com/2026/09/08/mistral-ai-funding-valuation-samsung.html"
    title: "CNBC: Mistral bags $24 billion valuation as Samsung leads funding (2026-09-08)"
  - id: cnbc-zhipu
    resource: "https://www.cnbc.com/2026/01/08/china-ai-tiger-goes-ipo-zhipu-hong-kong-debut-openai-knowledge-atlas-hsi-hang-seng-listing.html"
    title: "CNBC: Zhipu climbs in Hong Kong debut (2026-01-08)"
  - id: together-c
    resource: "https://theaiinsider.tech/2026/07/02/together-ai-raises-800m-at-8-3b-valuation-to-make-frontier-ai-accessible-to-all/"
    title: "The AI Insider: Together AI raises $800M Series C at $8.3B, led by Aramco Ventures (2026-07-02)"
  - id: tc-modal
    resource: "https://techcrunch.com/2026/09/28/source-inference-provider-modal-labs-closing-in-on-750m-round-at-15-75b-valuation/"
    title: "TechCrunch: Modal Labs closing in on $750M round at $15.75B valuation (sources, 2026-09-28)"
  - id: bbg-modal-baseten
    resource: "https://www.bloomberg.com/news/articles/2026-09-23/startups-modal-baseten-in-funding-talks-to-help-businesses-run-ai"
    title: "Bloomberg: Startups Modal, Baseten in funding talks (2026-09-23)"
  - id: nvidia-hf
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA to acquire Hugging Face"
  - id: eweek-tw
    resource: "https://www.eweek.com/news/tailwind-labs-lays-off-engineers-due-to-ai/"
    title: "eWeek: Tailwind Labs lays off engineers, citing the 'brutal impact' of AI (2026-01-09; 3 of 4 engineers, revenue down ~80%)"
  - id: mistral-c
    resource: "https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai/"
    title: "Mistral AI: raises EUR 1.7B Series C led by ASML at EUR 11.7B post-money (2025-09-09)"
---

# Summary

AI did not just take a share of COSS funding — it redefined which COSS companies are fundable. Globally, AI took **~50% of the $425B** of 2025 venture funding ($211B, +85% YoY)[^cb-2025] and **>70% in Q2 2026**, with OpenAI and Anthropic alone absorbing 43% of H1 2026's record $510B[^cb-h1-2026]. Within COSS, three beneficiary groups emerged: (1) **open-weight model makers** (Mistral €3B round, Sept 2026[^cnbc-mistral26]; Zhipu and MiniMax HK IPOs, Jan 2026[^cnbc-zhipu]); (2) **data/infra companies repositioned as AI-agent infrastructure** — Databricks ($190B)[^cnbc-dbx-aug26], ClickHouse ("AI database race", $15B)[^bbg-clickhouse], Supabase ("Claude Code the largest contributor" to growth)[^cnbc-supabase], Temporal ("reliable AI infrastructure", $12.55B)[^temporal-e]; (3) **inference/serving platforms for open-weight models** — Together AI raised $800M at $8.3B (2026-07-01)[^together-c]; Modal was reported closing $750M at $15.75B (2026-09-28)[^tc-modal] and Modal and Baseten were reported in new funding talks (2026-09-23)[^bbg-modal-baseten] (Modal/Baseten rounds not announced as of 2026-10-03; Fireworks figures seen only in secondary aggregators and omitted). Losers: non-AI OSS developer tools and frameworks whose traffic AI displaced (Tailwind)[^eweek-tw].

# Evidence table

| Signal | Number | Source |
|---|---|---|
| AI share of global VC, 2025 | ~50% ($211B) | [^cb-2025] |
| AI share of global VC, Q2 2026 | >70% | [^cb-h1-2026] |
| Q1 2026 global VC | $305B (record quarter) | [^cb-h1-2026] |
| Supabase: new DBs launched by AI tools | >60%; DB launches +600% YoY | [^supabase-f] |
| Databricks run-rate growth | >80% YoY to >$7B | [^cnbc-dbx-aug26] |
| ClickHouse ARR growth | >250% in a year | [^bbg-clickhouse] |
| Nvidia pays for open model hub | ~$12.9B for Hugging Face (incl. up to $1B retention) | [^nvidia-hf] |

# Analysis
- **"AI-washing" is near-universal** in COSS fundraising decks; the companies that win show measurable agent-driven usage (Supabase's share of AI-created databases is the cleanest public metric).
- **Concentration** means headline totals overstate health: median COSS seed/Series A access is not visible in these aggregates.
- **Hardware vendors are now OSS funders/acquirers** (Nvidia–Hugging Face; ASML and Samsung leading Mistral rounds)[^nvidia-hf][^cnbc-mistral26].

# By window
## W3
- Databricks $190B; Temporal $12.55B; Mistral €3B; Nvidia–HF[^cnbc-dbx-aug26][^temporal-e][^cnbc-mistral26][^nvidia-hf].
- Together AI $800M at $8.3B for open-model inference (2026-07-01)[^together-c]; Modal reportedly closing $750M at $15.75B[^tc-modal].
## W6
- Supabase $10.5B, AI tools create >60% of DBs[^supabase-f]; Q2 2026 >70% AI share[^cb-h1-2026].
## W9
- ClickHouse $15B; Zhipu/MiniMax IPOs; Q1 2026 record $305B[^bbg-clickhouse][^cnbc-zhipu][^cb-h1-2026].
## W12
- 2025 closes with AI at ~50% of VC[^cb-2025].
## W24
- AI share climbs through 2025[^cb-2025]; open-weight Mistral raises €1.7B at €11.7B (2025-09-09)[^mistral-c].

# Lessons
- For COSS founders, the fundable story in 2026 is "agents are our fastest-growing user".
- Non-AI infrastructure OSS should expect to be funded via foundations, sovereign programs or strategic acquirers rather than VC.

# Related
- [COSS funding](/projects/coss-market/coss-funding-2024-2026.md), [AI disruption of OSS monetization](/projects/coss-market/ai-disruption-of-oss-monetization.md), [Hugging Face](/organizations/hugging-face.md)

[^cb-2025]: Crunchbase News, Jan 2026.
[^cb-h1-2026]: Crunchbase News, July 2026.
[^supabase-f]: Supabase blog, 2026-06-04.
[^cnbc-supabase]: CNBC, 2026-06-04.
[^temporal-e]: Temporal blog, 2026-09-14.
[^cnbc-dbx-aug26]: CNBC: Databricks wraps $5 billion funding round at $190 billion valuation (2026-08-13).
[^bbg-clickhouse]: Bloomberg, 2026-01-16.
[^cnbc-mistral26]: CNBC: Mistral bags $24 billion valuation as Samsung leads funding (2026-09-08).
[^cnbc-zhipu]: CNBC: Zhipu climbs in Hong Kong debut (2026-01-08).
[^together-c]: The AI Insider: Together AI raises $800M Series C at $8.3B, led by Aramco Ventures (2026-07-02).
[^nvidia-hf]: NVIDIA blog, 2026-09-03.
[^eweek-tw]: eWeek: Tailwind Labs lays off engineers, citing the 'brutal impact' of AI (2026-01-09; 3 of 4 engineers, revenue down ~80%).
[^bbg-modal-baseten]: Bloomberg: Startups Modal, Baseten in funding talks (2026-09-23).
[^mistral-c]: Mistral AI: raises EUR 1.7B Series C led by ASML at EUR 11.7B post-money (2025-09-09).
[^tc-modal]: TechCrunch: Modal Labs closing in on $750M round at $15.75B valuation (sources, 2026-09-28).
