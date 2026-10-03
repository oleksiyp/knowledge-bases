---
type: OSS Project
title: DeepSeek (V3 / R1 / V4)
description: "MIT-licensed Chinese frontier open-weight models; R1 (Jan 2025) triggered a record Nvidia sell-off and V4 (Apr 2026) ran on Huawei Ascend — the defining open-model success of the period, valued at ~$52B after its first outside round (2026) with a ~$1B revenue run rate by Sept 2026."
resource: https://huggingface.co/deepseek-ai
tags: [open-weights, llm, mit, china, moe, reasoning]
domain: ai-models
license: MIT
license_history: ["DeepSeek Model License + MIT code (to 2024)", "MIT for weights (2025-01-)"]
governance: single-vendor
steward: DeepSeek (Hangzhou DeepSeek AI, funded by High-Flyer)
backing_orgs: [organizations/deepseek]
metrics:
  hf_followers: { value: 148405, as_of: 2026-10-03 }
  v4_flash_0731_downloads_last_month: { value: "4.49M", as_of: 2026-10-03 }
  openrouter_token_share: { value: "31.1%", as_of: 2026-01-31 }
  revenue_run_rate_usd: { value: "1B", as_of: 2026-09-23 }
  valuation_usd: { value: "~52B post-money (RMB ~351B)", as_of: 2026-07-17 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-deepseek
    resource: https://en.wikipedia.org/wiki/DeepSeek
    title: "Wikipedia: DeepSeek"
  - id: techspot-nvda
    resource: https://www.techspot.com/news/106534-nvidia-experiences-record-600-billion-market-value-loss.html
    title: "TechSpot: Nvidia loses record $600 billion market value in one day as DeepSeek AI shakes industry"
  - id: reuters-v4
    resource: https://www.investing.com/news/economy-news/factboxdeepseekv4-the-chinese-ai-model-adapted-for-huawei-chips-4636025
    title: "Reuters (via Investing.com): Factbox - DeepSeek-V4, the Chinese AI model adapted for Huawei chips"
    author: org:reuters
  - id: hf-deepseek
    resource: https://huggingface.co/deepseek-ai
    title: deepseek-ai organization on Hugging Face
    last_modified: 2026-10-03T00:00:00Z
  - id: fortune-ipo
    resource: https://fortune.com/2026/07/23/moonshot-deepseek-great-chinese-ai-ipo-rush/
    title: "Fortune: Moonshot, DeepSeek, and the great Chinese AI IPO rush (2026-07-23)"
    author: org:fortune
  - id: tc-moonshot
    resource: https://techcrunch.com/2026/05/07/chinas-moonshot-ai-raises-2b-at-20b-valuation-as-demand-for-open-source-ai-skyrockets/
    title: "TechCrunch: China's Moonshot AI raises $2B at $20B valuation (2026-05-07)"
    author: org:techcrunch
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report (arXiv 2604.07190)"
  - id: wiki-moonshot
    resource: https://en.wikipedia.org/wiki/Moonshot_AI
    title: "Wikipedia: Moonshot AI"
  - id: ds-changelog
    resource: https://api-docs.deepseek.com/updates/
    title: DeepSeek API change log
    last_modified: 2026-09-10T00:00:00Z
  - id: caixin-52b
    resource: https://www.caixinglobal.com/2026-07-17/deepseek-reaches-52-billion-valuation-in-round-backed-by-tencent-catl-102465358.html
    title: "Caixin: DeepSeek reaches $52 billion valuation in round backed by Tencent, CATL (2026-07-17)"
    author: org:caixin
  - id: cnbc-7b
    resource: https://www.cnbc.com/2026/06/03/deepseek-slated-to-draw-7-billion-in-maiden-fundraising-sources-say.html
    title: "CNBC/Reuters: DeepSeek slated to draw $7 billion in maiden fundraising, sources say (2026-06-03)"
    author: org:cnbc
  - id: fortune-pause
    resource: https://fortune.com/2026/07/25/deepseek-liang-wenfeng-backers-fundraising-pause-viral-posts-investors/
    title: "Fortune/Bloomberg: DeepSeek said to tell backers of funding pause after viral posts (2026-07-25)"
    author: org:fortune
  - id: fortune-price
    resource: https://fortune.com/2026/08/13/deepseek-increases-prices-for-ai-services-by-multiple-times/
    title: "Fortune: DeepSeek increases prices for AI services by multiple times (2026-08-13)"
    author: org:fortune
  - id: pymnts-1b
    resource: https://www.pymnts.com/news/artificial-intelligence/2026/deepseek-doubles-annual-revenue-run-rate-to-1-billion-ahead-of-ipo/
    title: "PYMNTS (citing The Information): DeepSeek doubles annual revenue run rate to $1 billion ahead of IPO (2026-09-24)"
  - id: decrypt-cac
    resource: https://decrypt.co/379120/china-probes-deepseek-moonshot-data-leaks-anthropic-claude
    title: "Decrypt: China probes DeepSeek, Moonshot over alleged data leaks to Anthropic's Claude (2026-09-23)"
---

# Summary
DeepSeek is the breakout open-model success of 2025–2026. R1 (20 Jan 2025), released under MIT, matched frontier reasoning at a fraction of reported training cost and on 27 Jan 2025 contributed to Nvidia losing roughly $590–600B of market value in a day[^techspot-nvda]. A steady cadence (V3.1, V3.2, V3.2-Speciale) kept it near the open frontier[^wiki-deepseek], and V4 (preview 24 Apr 2026; 1.6T-param Pro, 284B Flash, 1M context) was adapted to Huawei Ascend hardware[^reuters-v4]. After years of refusing outside money, DeepSeek closed its first external round in June–July 2026: ~RMB50B (~$7.4B; founder Liang Wenfeng himself ~RMB20B, Tencent ~RMB10B, CATL ~RMB5B) at ~RMB351B (~$52B) post-money[^caixin-52b]. Its revenue run rate reached ~$1B by Sept 2026 after a steep August price rise, and it is finalizing a second round (~$7.5B at ~$75B) ahead of a planned Shanghai listing[^pymnts-1b][^fortune-price]. Risks: state-security scrutiny abroad, distillation accusations, and growing state influence via its cap table.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12 | DeepSeek-V3 released[^wiki-deepseek] | OSS | + |
| W24 | 2025-01-20 | DeepSeek-R1 released under MIT; tops US iOS App Store by 27 Jan[^wiki-deepseek] | OSS | + |
| W24 | 2025-01-27 | Nvidia falls ~17%, ~$590–600B market value lost in one day[^techspot-nvda] | Business | + (for DeepSeek) |
| W24 | 2025-02-04 | Australia bans DeepSeek on government systems; other bans follow[^wiki-deepseek] | Business | − |
| W24 | 2025-05-28 | R1-0528 update[^wiki-deepseek] | OSS | + |
| W24 | 2025-08-21 | V3.1 hybrid thinking model; V3.2-Exp sparse attention 2025-09-29[^wiki-deepseek] | OSS | + |
| W12 | 2025-12-01 | V3.2 and V3.2-Speciale released[^wiki-deepseek] | OSS | + |
| W9 | 2026-01 | DeepSeek holds 31.1% of OpenRouter inference tokens (Jan 2026)[^atom-report] | OSS | + |
| W9 | 2026-02 | Anthropic accuses DeepSeek (with Moonshot, MiniMax) of distillation via fraudulent accounts[^wiki-deepseek] | OSS | − |
| W6 | 2026-04-24 | V4-Pro (1.6T/49B active) and V4-Flash (284B/13B active) preview; Huawei Ascend day-zero support[^reuters-v4][^ds-changelog] | OSS | + |
| W6 | 2026-06 | First external round (reported 3 Jun, closed by mid-Jul): ~RMB50B (~$7.4B) at ~RMB351B (~$52B) post-money; Liang ~RMB20B, Tencent ~RMB10B, CATL ~RMB5B, plus NetEase, JD.com, national AI fund; 5-year lock-up, outside investors without votes[^cnbc-7b][^caixin-52b] | Business | + |
| W3 | 2026-07-17 | Caixin: round registered; investor vehicle holds 8.52%, Liang retains ~91%[^caixin-52b] | Business | + |
| W3 | 2026-07-25 | Second-round talks (≥RMB480B pre-money) paused after Liang's investor comments went viral; IPO prep begun[^fortune-pause][^fortune-ipo] | Business | mixed |
| W3 | 2026-07-31 / 08-13 | V4-Flash and V4-Pro-0813 go GA; peak/off-peak pricing raises API prices several-fold from Aug 16[^ds-changelog][^fortune-price] | OSS/Business | mixed |
| W3 | 2026-09-10 | V4.1-Flash (native vision, 1M context) replaces V4-Flash[^ds-changelog] | OSS | + |
| W3 | 2026-09-10 / 09-23 | Anthropic threat report alleges DeepSeek ran 12.1M+ exchanges with Claude in 14 days of July; CAC probes DeepSeek and Moonshot over user data reaching Anthropic[^decrypt-cac] | OSS/Business | − |
| W3 | 2026-09-23 | Revenue run rate ~$1B; second round ~RMB50B at ~RMB500B (~$75B) being finalized; Shanghai IPO prep[^pymnts-1b] | Business | + |

# OSS successes
- MIT license on frontier weights since Jan 2025[^wiki-deepseek] made DeepSeek the base for countless derivatives; with Qwen it drove Chinese derivatives above US/EU ones from Jan 2025[^atom-report].
- Technical influence: MLA, MoE, sparse attention widely copied; Thinking Machines' Inkling (2026) reused a DeepSeek-V3-style architecture (see [Inkling](/projects/ai-models/inkling.md)).
- V4-Flash-0731 had ~4.5M monthly HF downloads as of Oct 2026[^hf-deepseek].

# OSS failures / risks
- V4 slipped months past rumored Feb 2026 date and drew a "muted" market reaction per Reuters reporting[^reuters-v4].
- Distillation accusations (Feb and Sept 2026) and CAC probe (Sept 2026)[^wiki-deepseek][^decrypt-cac].
- Training data and full recipes are not released — "open weights", not OSI-open source.

# Business successes
- First outside round at ~$52B post-money (June 2026) with founder control preserved (~91%); commercial investors accepted 5-year lock-ups without voting rights[^caixin-52b][^fortune-ipo]. Pass 2 note: "$7B at $52B" and "$7.4B at >$50B" describe the same RMB50B round (USD conversions differ).
- Revenue run rate ~$1B by Sept 2026, almost all API[^pymnts-1b].
- Hardware sovereignty story (Ascend) aligns with Beijing policy[^reuters-v4].

# Business failures / risks
- Government bans (Australia, US DoD restrictions via NDAA)[^wiki-deepseek].
- State fund with voting rights on cap table[^fortune-ipo] may increase Western distrust.

# By window
## W3
- V4 GA (Jul 31/Aug 13) and multi-fold price rise (Aug 16); V4.1-Flash (Sep 10)[^ds-changelog][^fortune-price]; second round paused (Jul 25) then revived at ~$75B; $1B run rate; Shanghai IPO prep[^fortune-pause][^pymnts-1b]; CAC probe[^decrypt-cac].
## W6
- V4 preview on Huawei Ascend (Apr 24)[^reuters-v4]; first external funding ~$7.4B at ~$52B[^cnbc-7b][^caixin-52b].
## W9
- Dominant OpenRouter share (31.1% Jan 2026)[^atom-report]; Anthropic distillation accusation (Feb)[^wiki-deepseek].
## W12
- V3.2 / V3.2-Speciale (Dec 1, 2025)[^wiki-deepseek].
## W24
- R1 shock (Jan 2025) and Nvidia sell-off[^techspot-nvda]; R1-0528, V3.1, V3.2-Exp[^wiki-deepseek].

# Lessons
- Releasing frontier-quality weights under MIT can produce more strategic value (talent, policy support, valuation) than API revenue.
- Efficiency innovations travel faster as open weights than as papers.
- Geopolitics now shapes both adoption (bans) and supply (domestic chips).

# Related
- [DeepSeek org](/organizations/deepseek.md)
- [R1 shock event](/events/2025-01-deepseek-r1-shock.md), [V4 on Ascend](/events/2026-04-deepseek-v4-huawei-ascend.md), [DeepSeek first funding](/events/2026-06-deepseek-first-external-funding.md), [Distillation accusations](/events/2026-02-anthropic-distillation-accusations.md)
- [Qwen](/projects/ai-models/qwen.md), [Kimi](/projects/ai-models/kimi.md)

[^wiki-deepseek]: Wikipedia, DeepSeek.
[^techspot-nvda]: TechSpot, 27–28 Jan 2025 (figures vary $589–600B across outlets).
[^reuters-v4]: Reuters factbox via Investing.com, 24 Apr 2026.
[^hf-deepseek]: Hugging Face deepseek-ai org (last-30-day downloads, as of 2026-10-03).
[^fortune-ipo]: Fortune, 23 Jul 2026.
[^atom-report]: ATOM Report, Apr 2026.
[^wiki-moonshot]: Wikipedia, Moonshot AI.
[^ds-changelog]: DeepSeek API change log (accessed 2026-10-03).
[^caixin-52b]: Caixin, 17 Jul 2026.
[^cnbc-7b]: CNBC (Reuters), 3 Jun 2026.
[^fortune-pause]: Fortune (Bloomberg), 25 Jul 2026.
[^fortune-price]: Fortune, 13 Aug 2026.
[^pymnts-1b]: PYMNTS citing The Information, 24 Sept 2026.
[^decrypt-cac]: Decrypt, 23 Sept 2026.
