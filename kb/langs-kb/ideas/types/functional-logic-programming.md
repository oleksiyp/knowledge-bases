---
type: Idea
title: Functional logic programming
description: "Combining functional evaluation with logic-programming features (logical variables, non-determinism/choice, failure as control flow, unification). Academic for 30 years (Curry, Mercury); 2018–2026 verdict: unproven but newly relevant — Epic's Verse made it the basis of a mass-market game-scripting language and of Unreal Engine 6, while the classic research languages stayed small."
area: types
tags: [functional-logic, verse, curry, mercury, logic-programming, unification, non-determinism, transactions]
outcome: unproven
maturity_2026: niche
origin_year: 1995
mainstream_year: null
languages: [languages/verse, languages/haskell, languages/flix]
runtimes: []
related_ideas: [ideas/types/algebraic-effects-and-handlers, ideas/types/dependent-types-and-proof-assistants]
era_momentum: { E1: flat, E2: flat, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: vc-paper
    resource: https://dl.acm.org/doi/abs/10.1145/3607845
    title: "Augustsson et al.: The Verse Calculus (ICFP 2023, PACMPL 7)"
  - id: spj-vc
    resource: https://simon.peytonjones.org/verse-calculus/
    title: "Simon Peyton Jones: The Verse Calculus — a core calculus for functional logic programming"
  - id: spj-hx22
    resource: https://simon.peytonjones.org/assets/pdfs/haskell-exchange-22.pdf
    title: "Simon Peyton Jones: Beyond functional programming — the Verse programming language (Haskell eXchange 2022)"
  - id: curry
    resource: https://www.curry-lang.org/
    title: "curry-lang.org: The Curry programming language"
  - id: curry-dl
    resource: https://www.curry-language.org/downloads/
    title: "Curry: Downloads (PAKCS, KiCS2, Curry2Go releases)"
  - id: mercury-wiki
    resource: https://en.wikipedia.org/wiki/Mercury_(programming_language)
    title: "Wikipedia: Mercury (programming language)"
  - id: gb-ue6
    resource: https://gamesbeat.com/unreal-engine-6-will-combine-ue5-and-uefn-into-a-unified-engine-state-of-unreal/
    title: "GamesBeat: Unreal Engine 6 will combine UE5 and UEFN (2026-06-17)"
  - id: tc-uefn
    resource: https://techcrunch.com/2023/03/22/epic-launches-unreal-editor-for-fortnite-will-give-40-of-all-revenue-to-creators
    title: "TechCrunch: Epic launches Unreal Editor for Fortnite (2023-03-22)"
---

# Summary
**Unproven, but no longer purely academic.** Functional logic programming adds Prolog-style logical variables, choice and failure to a functional core. It was a research niche for decades: Curry (multiple implementations, including PAKCS, KiCS2 and Curry2Go) and Mercury (stable releases still in 2026) never left academia and specialist shops.[^curry][^curry-dl][^mercury-wiki] The 2018–2026 change is **Verse**. Epic hired Simon Peyton Jones and Lennart Augustsson, gave the paradigm a deterministic rewrite semantics (the Verse Calculus, ICFP 2023),[^vc-paper][^spj-vc] shipped it to Fortnite creators in March 2023,[^tc-uefn] and in June 2026 named it the gameplay language of Unreal Engine 6.[^gb-ue6] That is the first mass deployment of functional-logic ideas in the paradigm's history. It is too early to tell whether creators value failure-driven control flow and logical variables themselves, or simply use Verse because it is the only way to script Fortnite.

# The idea
Logic programming expresses search and constraints declaratively, and functional programming offers composable expressions and types. Functional logic languages unify them: an expression can produce zero, one or many results; failure is a value-level control mechanism (Verse's `if (x := Find[...])`); and variables can be solved for. The long-standing obstacle was semantics. Combining laziness, non-determinism and unification made equational reasoning hard. The Verse Calculus targets that problem with a confluent small-step rewrite system.[^spj-vc]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2021 (late) | Simon Peyton Jones joins Epic Games to work on Verse [^spj-hx22] | + |
| E2 | 2022-12 | Verse publicly presented at Haskell eXchange [^spj-hx22] | + |
| E3 | 2023-03-22 | Verse ships in Unreal Editor for Fortnite [^tc-uefn] | + |
| E3 | 2023-08 | The Verse Calculus published at ICFP 2023 [^vc-paper] | + |
| E4 | 2025 | Curry implementations continue (PAKCS 3.x, KiCS2 3.x releases) [^curry-dl] | flat |
| E4 | 2026-06-17 | Unreal Engine 6 makes Verse its gameplay language [^gb-ue6] | + |

# Where it succeeded
- **A theory problem was solved for industrial use.** VC gives deterministic functional logic programming a lambda-calculus-like semantics.[^vc-paper]
- **Distribution.** Through Fortnite's creator economy, Verse put choice, failure contexts and effect specifiers in front of a very large non-academic audience.[^tc-uefn]

# Where it failed or stalled
- **Curry and Mercury** stayed academic and specialist throughout the period, and none of the major surveys list them.[^curry][^mercury-wiki]
- **Verse is single-vendor.** Its promised open specification and compiler were not generally available by 2026, so other languages have not borrowed its features.[^gb-ue6]
- Mainstream logic-programming revival went to **Datalog** embedded in tools (CodeQL, Soufflé; [Flix](/languages/flix.md) embeds Datalog), not to functional-logic languages.

# Why
1. Most developers do not use search and unification day to day, so the paradigm needs a domain that rewards it. Game scripting plus transactions (rollback on failure) is Verse's bet.
2. Without a semantics that makes non-determinism predictable, industry would not take the risk. VC lowered that barrier.
3. Platform pull, not paradigm pull, explains Verse's reach. Without UEFN it would be another research language.

# Lessons
- Paradigms reach the mainstream through a platform that requires them (as with JavaScript and Lua), not through merit alone.
- Formal semantics before release (VC) is a good model for languages with unusual evaluation.

# Related
- [Verse](/languages/verse.md), [Haskell](/languages/haskell.md), [Flix](/languages/flix.md)
- [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md)
- [Verse ships in UEFN](/events/2023-03-verse-ships-in-uefn.md)

[^vc-paper]: The Verse Calculus (ICFP 2023) — https://dl.acm.org/doi/abs/10.1145/3607845
[^spj-vc]: SPJ: The Verse Calculus — https://simon.peytonjones.org/verse-calculus/
[^spj-hx22]: SPJ: Haskell eXchange 2022 slides — https://simon.peytonjones.org/assets/pdfs/haskell-exchange-22.pdf
[^curry]: Curry programming language — https://www.curry-lang.org/
[^curry-dl]: Curry downloads — https://www.curry-language.org/downloads/
[^mercury-wiki]: Wikipedia: Mercury — https://en.wikipedia.org/wiki/Mercury_(programming_language)
[^gb-ue6]: GamesBeat: UE6 — https://gamesbeat.com/unreal-engine-6-will-combine-ue5-and-uefn-into-a-unified-engine-state-of-unreal/
[^tc-uefn]: TechCrunch: Epic launches UEFN — https://techcrunch.com/2023/03/22/epic-launches-unreal-editor-for-fortnite-will-give-40-of-all-revenue-to-creators
