---
type: Event
title: DeepSeek takes first outside capital at ~$50B+
description: "After rebuffing investors since 2023, DeepSeek closed its first external round in June 2026 (~RMB50B / ~$7.4B at >RMB350B / ~$52B post-money per a filing reported by Caixin) with founder Liang Wenfeng, Tencent, CATL and China's national AI fund, then sought ~$75B in a second round ahead of a Shanghai IPO."
event_kind: funding
date: 2026-06-16
window: W6
impact: positive
projects: [projects/ai-models/deepseek]
organizations: [organizations/deepseek]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: fortune-ipo
    resource: https://fortune.com/2026/07/23/moonshot-deepseek-great-chinese-ai-ipo-rush/
    title: "Fortune: Moonshot, DeepSeek, and the great Chinese AI IPO rush"
    author: org:fortune
  - id: wiki-deepseek
    resource: https://en.wikipedia.org/wiki/DeepSeek
    title: "Wikipedia: DeepSeek"
  - id: tnw-deepseek
    resource: https://thenextweb.com/news/deepseek-closes-7bn-plus-round-with-an-unusual-structure
    title: "The Next Web: DeepSeek closes $7bn-plus round with an unusual structure (citing Reuters; closed 2026-06-16)"
    author: org:thenextweb
  - id: forbes-deepseek
    resource: https://www.forbes.com/sites/anishasircar/2026/06/17/deepseek-just-raised-74-billion-heres-the-catch/
    title: "Forbes: DeepSeek Just Raised $7.4 Billion. Here's The Catch (2026-06-17)"
    author: org:forbes
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
  - id: pymnts-deepseek-1b
    resource: https://www.pymnts.com/news/artificial-intelligence/2026/deepseek-doubles-annual-revenue-run-rate-to-1-billion-ahead-of-ipo/
    title: "PYMNTS (citing The Information): DeepSeek doubles annual revenue run rate to $1 billion ahead of IPO (2026-09-24)"
    author: org:pymnts
---

# What happened
Talks began in April 2026 at ~$10B[^wiki-deepseek]; within weeks the valuation escalated. Reuters reported on 3 June 2026 that DeepSeek was set to raise ~$7B[^yahoo-deepseek-7b]. Fortune reports a June 2026 round of $7.4B at >$50B in which founder Liang Wenfeng contributed ~$3B, commercial investors (Tencent, JD.com, CATL) accepted 5-year lock-ups with no voting rights, and the National AI Industry Investment Fund received voting rights[^wiki-deepseek][^fortune-ipo]. Per Reuters (via The Next Web) the round closed on 16 June 2026 at ~50B yuan (~$7B), with Liang committing 20B yuan, Tencent ~10B yuan and CATL ~5B yuan, with Reuters putting the valuation at $52–59B[^tnw-deepseek][^forbes-deepseek]; a filing disclosed on 17 July showed a post-money valuation above RMB350B (~$52B)[^caixin-deepseek]. (Corrected in pass 2: date 2026-06-01 (approximate) → 2026-06-16; the Wikipedia "Series A $7B at $52B" framing replaced with filing-based figures.) A second round (≥RMB480B pre-money) was paused on 25 July after viral posts about Liang's remarks, then resumed in early August[^fortune-deepseek-pause][^pymnts-deepseek-resume]; DeepSeek raised API prices from 16 Aug[^ds-api-changelog].

# Why it matters
It monetised the strategic value of MIT-licensed open models without changing the license, and brought the Chinese state onto the cap table of the world's most influential open-model lab.

# Outcome so far
V4 GA and V4.1 shipped under MIT after the round[^wiki-deepseek]. By late Sept 2026 The Information reported a ~$1B revenue run-rate and a second ~50B-yuan round sought at ~500B yuan (~$75B) ahead of a Shanghai listing[^pymnts-deepseek-1b]; IPO pending.

# Related
- [DeepSeek org](/organizations/deepseek.md), [DeepSeek](/projects/ai-models/deepseek.md), [HK IPOs](/events/2026-01-zhipu-minimax-hong-kong-ipos.md)

[^fortune-ipo]: Fortune, 23 Jul 2026.
[^wiki-deepseek]: Wikipedia, DeepSeek.
[^tnw-deepseek]: The Next Web (citing Reuters), June 2026.
[^forbes-deepseek]: Forbes, 17 Jun 2026.
[^pymnts-deepseek-1b]: PYMNTS citing The Information, 24 Sept 2026.
[^caixin-deepseek]: Caixin Global, 2026-07-17.
[^yahoo-deepseek-7b]: Reuters via Yahoo, 2026-06-03.
[^fortune-deepseek-pause]: Fortune, 2026-07-25.
[^pymnts-deepseek-resume]: PYMNTS, 2026-08-06.
[^ds-api-changelog]: DeepSeek API change log.
