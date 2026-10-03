---
type: Event
title: Epic ships the Verse language in Unreal Editor for Fortnite
description: "On 2023-03-22 Epic Games launched Unreal Editor for Fortnite (UEFN) in public beta with Verse, a functional-logic language co-designed by Simon Peyton Jones, plus a creator economy paying out 40% of eligible Fortnite revenue; in June 2026 Verse was named the gameplay language of Unreal Engine 6."
event_kind: release
date: 2023-03-22
era: E3
impact: positive
languages: [languages/verse]
runtimes: []
ideas: [ideas/types/functional-logic-programming]
tags: [verse, epic-games, fortnite, uefn, functional-logic, game-scripting]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: forbes-uefn
    resource: https://www.forbes.com/sites/erikkain/2023/03/22/unreal-editor-for-fortnite-is-now-available-in-public-beta-heres-how-it-works/
    title: "Forbes: Unreal Editor For Fortnite is now available in public beta (2023-03-22)"
  - id: tc-uefn
    resource: https://techcrunch.com/2023/03/22/epic-launches-unreal-editor-for-fortnite-will-give-40-of-all-revenue-to-creators
    title: "TechCrunch: Epic launches Unreal Editor for Fortnite, will give 40% of revenue to creators"
  - id: vc-paper
    resource: https://dl.acm.org/doi/abs/10.1145/3607845
    title: "The Verse Calculus (ICFP 2023)"
  - id: gb-ue6
    resource: https://gamesbeat.com/unreal-engine-6-will-combine-ue5-and-uefn-into-a-unified-engine-state-of-unreal/
    title: "GamesBeat: Unreal Engine 6 will combine UE5 and UEFN (2026-06-17)"
  - id: tubefilter-payouts
    resource: https://www.tubefilter.com/2026/06/17/epic-games-unreal-editor-for-fortnite-creator-payouts/
    title: "Tubefilter: Epic has paid over $1 billion to Fortnite island creators (2026-06-17)"
---

# What happened
At State of Unreal (GDC, 2023-03-22), Epic released UEFN in public beta. It was the first time anyone outside Epic could program in Verse.[^forbes-uefn] Epic also launched "Creator Economy 2.0", which distributes 40% of net revenue from the Fortnite Item Shop and most real-money purchases to island creators by engagement.[^tc-uefn] Five months later the language's formal core appeared as the Verse Calculus at ICFP 2023.[^vc-paper]

# Why it matters
It is the first deployment of a functional-logic language (failure contexts, choice, logical variables, transactional effects) to a mass, non-academic audience. The economic incentive was large: Epic reported more than $1B paid to creators by mid-2026.[^tubefilter-payouts] At State of Unreal on 2026-06-17, Epic made Verse the gameplay language of Unreal Engine 6 (Early Access targeted for late 2027). The planned open-source implementation, however, remained "not intended for general adoption".[^gb-ue6]

# Related
- [Verse](/languages/verse.md), [Functional logic programming](/ideas/types/functional-logic-programming.md)

[^forbes-uefn]: Forbes: UEFN public beta — https://www.forbes.com/sites/erikkain/2023/03/22/unreal-editor-for-fortnite-is-now-available-in-public-beta-heres-how-it-works/
[^tc-uefn]: TechCrunch: Epic launches UEFN — https://techcrunch.com/2023/03/22/epic-launches-unreal-editor-for-fortnite-will-give-40-of-all-revenue-to-creators
[^vc-paper]: The Verse Calculus — https://dl.acm.org/doi/abs/10.1145/3607845
[^gb-ue6]: GamesBeat: UE6 — https://gamesbeat.com/unreal-engine-6-will-combine-ue5-and-uefn-into-a-unified-engine-state-of-unreal/
[^tubefilter-payouts]: Tubefilter: $1B to creators — https://www.tubefilter.com/2026/06/17/epic-games-unreal-editor-for-fortnite-creator-payouts/
