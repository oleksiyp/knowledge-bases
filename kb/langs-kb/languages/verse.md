---
type: Language
title: Verse
description: "Epic Games' functional-logic language with transactional semantics, launched in Unreal Editor for Fortnite (March 2023) and named in June 2026 as the gameplay language of Unreal Engine 6; the most-used functional-logic language ever by deployment, while its promised open-source compiler and spec remained unreleased for general use."
tags: [functional-logic, epic-games, fortnite, uefn, unreal-engine, transactions, simon-peyton-jones, single-vendor]
paradigms: [functional-logic, functional, imperative]
typing: static
memory_model: gc
first_released: 2023
steward: Epic Games
governance: single-vendor
trajectory: rising
ideas: [ideas/types/functional-logic-programming, ideas/types/algebraic-effects-and-handlers]
runtimes: []
adoption_signals:
  uefn_creator_payouts: { value: "over $1B (Epic, reported June 2026)", as_of: 2026-06 }
era_momentum: { E1: n/a, E2: n/a, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: spj-hx22
    resource: https://simon.peytonjones.org/assets/pdfs/haskell-exchange-22.pdf
    title: "Simon Peyton Jones: Beyond functional programming — the Verse programming language (Haskell eXchange, Dec 2022)"
  - id: vc-paper
    resource: https://dl.acm.org/doi/abs/10.1145/3607845
    title: "Augustsson et al.: The Verse Calculus — A Core Calculus for Deterministic Functional Logic Programming (ICFP 2023, PACMPL 7)"
  - id: forbes-uefn
    resource: https://www.forbes.com/sites/erikkain/2023/03/22/unreal-editor-for-fortnite-is-now-available-in-public-beta-heres-how-it-works/
    title: "Forbes: Unreal Editor For Fortnite is now available in public beta (2023-03-22)"
  - id: tc-uefn
    resource: https://techcrunch.com/2023/03/22/epic-launches-unreal-editor-for-fortnite-will-give-40-of-all-revenue-to-creators
    title: "TechCrunch: Epic launches Unreal Editor for Fortnite, will give 40% of revenue to creators (2023-03-22)"
  - id: sweeney-oss
    resource: https://x.com/TimSweeneyEpic/status/1800184322508587449
    title: "Tim Sweeney on X: open source Verse compiler, runtime and draft spec coming, possibly as soon as 2025 (June 2024)"
  - id: gb-ue6
    resource: https://gamesbeat.com/unreal-engine-6-will-combine-ue5-and-uefn-into-a-unified-engine-state-of-unreal/
    title: "GamesBeat: Unreal Engine 6 will combine UE5 and UEFN into a unified engine (State of Unreal, 2026-06-17)"
  - id: inven-ue6
    resource: https://www.invenglobal.com/articles/22900/unreal-engine-6-to-feature-fundamental-overhaul-targeting-early-access-release-by-late-2027
    title: "Inven Global: Unreal Engine 6 to feature fundamental overhaul, targeting Early Access by late 2027"
  - id: tubefilter-payouts
    resource: https://www.tubefilter.com/2026/06/17/epic-games-unreal-editor-for-fortnite-creator-payouts/
    title: "Tubefilter: Epic Games has now paid over $1 billion to the creators of Fortnite's Islands (2026-06-17)"
  - id: fn-items
    resource: https://www.fortnite.com/news/fortnite-developers-will-soon-be-able-to-sell-in-game-items?lang=en-US
    title: "Fortnite news: Fortnite developers will soon be able to sell in-game items (Verse-based API)"
---

# Summary
Verse is the **first functional-logic language with a mass audience**. Epic Games designed it with Simon Peyton Jones (who joined Epic in late 2021), Lennart Augustsson, Guy Steele and Tim Sweeney.[^spj-hx22][^vc-paper] It combines functional programming, logic-style "failure" and choice as control flow, and transactional semantics: effectful code runs as atomic transactions that can roll back. It shipped as the scripting language of Unreal Editor for Fortnite (UEFN) on 2023-03-22, alongside a creator economy that pays 40% of eligible Fortnite revenue to island creators.[^forbes-uefn][^tc-uefn] At State of Unreal on 2026-06-17, Epic announced Unreal Engine 6 ("UE5 + UEFN") with Verse as the gameplay language next to the C++ engine core, targeting Early Access at the end of 2027.[^gb-ue6][^inven-ue6] The open-source compiler, runtime and spec, promised "possibly as soon as 2025",[^sweeney-oss] had by mid-2026 only reached a public UE6 development stream that Epic says is "not intended for general adoption".[^gb-ue6] Verdict: **rising, single-vendor**. Verse is a real deployment of research ideas, captive to one platform.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022-12 | SPJ presents Verse at Haskell eXchange ("Beyond functional programming") [^spj-hx22] | + |
| E3 | 2023-03-22 | UEFN public beta with Verse; Creator Economy 2.0 (40% revenue share) [^forbes-uefn][^tc-uefn] | + |
| E3 | 2023-08 | Verse Calculus paper at ICFP 2023 [^vc-paper] | + |
| E3 | 2024-06 | Sweeney: open-source compiler, runtime and spec "possibly as soon as 2025" [^sweeney-oss] | mixed |
| E4 | 2025-12 | Verse-based API for selling in-game items on islands [^fn-items] | + |
| E4 | 2026-06-17 | UE6 announced: Verse becomes the gameplay language; Blueprints to be phased out later [^gb-ue6] | + |
| E4 | 2026-06 | Epic reports more than $1B paid to UEFN creators [^tubefilter-payouts] | + |

# Ideas it bet on
| Idea | Outcome for Verse |
|---|---|
| [Functional logic programming](/ideas/types/functional-logic-programming.md) (failure, choice, unification-style variables) | Deployed at scale for the first time; ergonomics debated by game creators |
| Transactional memory / rollback for effects (effect-tracking specifiers such as `<transacts>`, `<decides>`) | Shipped in UEFN; under UE6 a custom LLVM compiler "transactionalizes" C++ called from Verse [^gb-ue6] |
| [Effects in types](/ideas/types/algebraic-effects-and-handlers.md) (effect specifiers) | Shipped as a fixed effect set, not user-defined handlers |
| Open specification for a "metaverse" language | Stalled: not open for general use as of 2026 [^gb-ue6][^sweeney-oss] |

# What succeeded
- **Distribution.** Platform pull gave Verse a large, paid user base almost overnight: Fortnite creators, motivated by revenue sharing.[^tc-uefn][^tubefilter-payouts]
- **A rigorous semantic core.** The Verse Calculus gives functional-logic programming a deterministic rewrite semantics, published in a top venue.[^vc-paper]
- **Strategic commitment.** Making Verse the UE6 gameplay language promotes it from a mod-scripting tool to the main language of a major game engine.[^gb-ue6][^inven-ue6]

# What failed or stalled
- **Openness promise slipped.** The "possibly 2025" open-source release did not arrive as a general-use project, which limits its influence outside Epic.[^sweeney-oss][^gb-ue6]
- **Single-vendor dependence.** Verse's fate is tied to Epic's metaverse strategy. Its 2022 "language of the metaverse" framing came out of the metaverse hype cycle.[^spj-hx22]
- **Unproven for large engines.** UE6 Early Access is not due until late 2027, so Verse has not yet been tested on AAA-scale codebases.[^inven-ue6]

# By era
## E2
Design work at Epic. The public reveal came in December 2022.
## E3
UEFN launch, the Verse Calculus paper and growth of the creator economy.
## E4
In-island commerce APIs were added, Verse was chosen as the UE6 gameplay language, and creator payouts passed $1B.

# Lessons
- Research-grade semantics can reach a mass audience when a platform with economic pull adopts them. Distribution beat paradigm unfamiliarity.
- Promising openness while shipping a closed implementation weakens claims to be an "open" language.

# Related
- [Functional logic programming](/ideas/types/functional-logic-programming.md), [Haskell](/languages/haskell.md), [Lua/Luau](/languages/lua-luau.md)
- [Verse ships in UEFN](/events/2023-03-verse-ships-in-uefn.md)

[^spj-hx22]: SPJ, Haskell eXchange 2022 slides — https://simon.peytonjones.org/assets/pdfs/haskell-exchange-22.pdf
[^vc-paper]: The Verse Calculus (ICFP 2023) — https://dl.acm.org/doi/abs/10.1145/3607845
[^forbes-uefn]: Forbes: UEFN public beta — https://www.forbes.com/sites/erikkain/2023/03/22/unreal-editor-for-fortnite-is-now-available-in-public-beta-heres-how-it-works/
[^tc-uefn]: TechCrunch: Epic launches UEFN — https://techcrunch.com/2023/03/22/epic-launches-unreal-editor-for-fortnite-will-give-40-of-all-revenue-to-creators
[^sweeney-oss]: Tim Sweeney on X — https://x.com/TimSweeneyEpic/status/1800184322508587449
[^gb-ue6]: GamesBeat: UE6 unifies UE5 and UEFN — https://gamesbeat.com/unreal-engine-6-will-combine-ue5-and-uefn-into-a-unified-engine-state-of-unreal/
[^inven-ue6]: Inven Global: UE6 Early Access by late 2027 — https://www.invenglobal.com/articles/22900/unreal-engine-6-to-feature-fundamental-overhaul-targeting-early-access-release-by-late-2027
[^tubefilter-payouts]: Tubefilter: over $1B paid to Fortnite island creators — https://www.tubefilter.com/2026/06/17/epic-games-unreal-editor-for-fortnite-creator-payouts/
[^fn-items]: Fortnite: developers can sell in-game items — https://www.fortnite.com/news/fortnite-developers-will-soon-be-able-to-sell-in-game-items?lang=en-US
