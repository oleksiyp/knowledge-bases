---
type: Organization
title: DeepSeek
description: "Hangzhou AI lab spun out of the High-Flyer hedge fund; MIT-licensed frontier models; first external funding (~RMB50B / ~$7.4B, reported June 2026, registered July) at >RMB350B (~$52B) post-money, a ~$1B revenue run-rate by Sept 2026 and a second round at a reported ~$75B ahead of a Shanghai listing."
resource: https://www.deepseek.com
tags: [ai-models, open-weights, china, research-lab]
org_kind: research-lab
hq: Hangzhou, China
funding: { total_usd: "~50B yuan (~$7–7.4B) in first external round, incl. 20B yuan from founder Liang Wenfeng (Reuters via TNW)", last_round: "First external round (Liang, Tencent, CATL, National AI Industry Investment Fund et al.); second round of ~50B yuan at ~500B yuan (~$75B) being finalized (The Information, Sept 2026)", last_round_date: 2026-06-16, valuation_usd: ">RMB350B (~$52B) post-money (Caixin, filing 2026-07-17); ~RMB500B (~$75B) sought in second round" }
business_verdict: thriving
projects: [projects/ai-models/deepseek]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-deepseek
    resource: https://en.wikipedia.org/wiki/DeepSeek
    title: "Wikipedia: DeepSeek"
  - id: fortune-ipo
    resource: https://fortune.com/2026/07/23/moonshot-deepseek-great-chinese-ai-ipo-rush/
    title: "Fortune: Moonshot, DeepSeek, and the great Chinese AI IPO rush"
    author: org:fortune
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report (arXiv 2604.07190)"
  - id: tnw-deepseek
    resource: https://thenextweb.com/news/deepseek-closes-7bn-plus-round-with-an-unusual-structure
    title: "The Next Web: DeepSeek closes $7bn-plus round with an unusual structure (citing Reuters; closed 2026-06-16)"
    author: org:thenextweb
  - id: forbes-deepseek
    resource: https://www.forbes.com/sites/anishasircar/2026/06/17/deepseek-just-raised-74-billion-heres-the-catch/
    title: "Forbes: DeepSeek Just Raised $7.4 Billion. Here's The Catch (2026-06-17)"
    author: org:forbes
  - id: pymnts-deepseek-1b
    resource: https://www.pymnts.com/news/artificial-intelligence/2026/deepseek-doubles-annual-revenue-run-rate-to-1-billion-ahead-of-ipo/
    title: "PYMNTS (citing The Information): DeepSeek doubles annual revenue run rate to $1 billion ahead of IPO (2026-09-24)"
    author: org:pymnts
  - id: caixin-deepseek
    resource: https://www.caixinglobal.com/2026-07-17/deepseek-reaches-52-billion-valuation-in-round-backed-by-tencent-catl-102465358.html
    title: "Caixin Global: DeepSeek reaches $52 billion valuation in round backed by Tencent, CATL (filing, 2026-07-17)"
    author: org:caixin
  - id: yahoo-deepseek-7b
    resource: https://finance.yahoo.com/markets/stocks/articles/deepseek-slated-draw-7-billion-041632070.html
    title: "Reuters via Yahoo: DeepSeek slated to raise $7 billion in maiden funding round, sources say (2026-06-03)"
    author: org:reuters
  - id: fortune-deepseek-pause
    resource: https://fortune.com/2026/07/25/deepseek-liang-wenfeng-backers-fundraising-pause-viral-posts-investors/
    title: "Fortune (Bloomberg): DeepSeek said to tell backers of funding pause after viral posts (2026-07-25)"
    author: org:fortune
  - id: pymnts-deepseek-resume
    resource: https://www.pymnts.com/news/artificial-intelligence/2026/deepseek-resumes-funding-round-to-raise-8-billion/
    title: "PYMNTS (citing Bloomberg): DeepSeek resumes funding round to raise ~$8 billion (2026-08-06)"
    author: org:pymnts
  - id: ds-api-changelog
    resource: https://api-docs.deepseek.com/updates/
    title: "DeepSeek API change log (peak/off-peak pricing from 2026-08-16)"
    author: org:deepseek
  - id: qz-cac-probe
    resource: https://qz.com/china-deepseek-moonshot-anthropic-data-probe-092326
    title: "Quartz: China probes DeepSeek, Moonshot over user data sent to Anthropic (2026-09-23)"
---

# Summary
DeepSeek, founded by High-Flyer's Liang Wenfeng, was self-funded until 2026 and ran as a research lab with a cheap API. After R1 (Jan 2025) made it globally famous, it rebuffed investors until April 2026, when talks began at ~$10B; valuations escalated within weeks and Reuters reported on 3 June 2026 that it was set to raise ~$7B in its first external round[^yahoo-deepseek-7b]; the round (~RMB50B, ~$7.4B) was reported closed in mid-June, and a filing disclosed on 17 July showed a post-money valuation above RMB350B (~$52B), with Liang contributing RMB20B (a controlling share of the raise), Tencent RMB10B, CATL RMB5B, plus NetEase and JD.com[^tnw-deepseek][^forbes-deepseek][^caixin-deepseek]. Fortune reports commercial investors accepted 5-year lock-ups with no voting rights while the National AI Industry Investment Fund got voting rights[^fortune-ipo]. A second round (≥RMB10B at ≥RMB480B pre-money) was paused on 25 July after viral posts about Liang's remarks to investors, then resumed in early August[^fortune-deepseek-pause][^pymnts-deepseek-resume]. DeepSeek introduced peak/off-peak API pricing with steep increases from 16 Aug 2026[^ds-api-changelog]. (Corrected in pass 2: "talks at up to ~$70B; IPO 2027" replaced with the pause/resume sequence; "Series A $7B at $52B" (Wikipedia) and "$52–59B" replaced by the Caixin filing figure.) In late Sept 2026 The Information reported a ~$1B annualized revenue run-rate (roughly double a few months earlier, after API price rises) and a second ~50B-yuan round at ~500B yuan (~$75B) ahead of a Shanghai listing[^pymnts-deepseek-1b].

# Business timeline
| Date | Event |
|---|---|
| 2025-01-20 | R1 launch; app tops US App Store[^wiki-deepseek] |
| 2025-02-04 | Australian government ban; later US DoD/IC restrictions via NDAA[^wiki-deepseek] |
| 2026-01 | 31.1% of OpenRouter tokens[^atom-report] |
| 2026-04 | First outside-funding talks at ~$10B[^wiki-deepseek] |
| 2026-06-03 | Reuters: first external round of ~$7B in the works[^yahoo-deepseek-7b] |
| 2026-06 (mid) | First external round closes, ~RMB50B (~$7.4B)[^tnw-deepseek][^forbes-deepseek] |
| 2026-07-17 | Filing shows post-money >RMB350B (~$52B)[^caixin-deepseek] |
| 2026-07-25 | Second round paused; resumed early Aug (~$8B sought)[^fortune-deepseek-pause][^pymnts-deepseek-resume] |
| 2026-08-16 | Peak/off-peak API price increases take effect[^ds-api-changelog] |
| 2026-09-10/23 | Named in Anthropic's distillation report; CAC probes DeepSeek and Moonshot over user data reaching Anthropic[^qz-cac-probe] |
| 2026-09-24 | ~$1B revenue run-rate; second round sought at ~$75B; Shanghai IPO prep (The Information)[^pymnts-deepseek-1b] |

# Monetization model
Low-priced API and consumer app; open weights (MIT) drive adoption; enterprise/government deployments in China.

# Successes
- Global brand from open releases; policy alignment on domestic chips.

# Failures / risks
- Foreign government bans; distillation allegations; state influence on cap table[^wiki-deepseek][^fortune-ipo].

# Related
- [DeepSeek models](/projects/ai-models/deepseek.md), [R1 shock](/events/2025-01-deepseek-r1-shock.md), [First funding](/events/2026-06-deepseek-first-external-funding.md)

[^wiki-deepseek]: Wikipedia, DeepSeek.
[^fortune-ipo]: Fortune, 23 Jul 2026.
[^atom-report]: ATOM Report, Apr 2026.
[^tnw-deepseek]: The Next Web (citing Reuters), June 2026.
[^forbes-deepseek]: Forbes, 17 Jun 2026.
[^pymnts-deepseek-1b]: PYMNTS citing The Information, 24 Sept 2026.
[^qz-cac-probe]: Quartz, Sept 2026 (CAC probe opened 23 Sept).
[^caixin-deepseek]: Caixin Global, 2026-07-17.
[^yahoo-deepseek-7b]: Reuters via Yahoo, 2026-06-03.
[^fortune-deepseek-pause]: Fortune, 2026-07-25.
[^pymnts-deepseek-resume]: PYMNTS, 2026-08-06.
[^ds-api-changelog]: DeepSeek API change log.
