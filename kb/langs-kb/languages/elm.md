---
type: Language
title: Elm
description: "Pure functional language for web front-ends whose ideas (The Elm Architecture, friendly compiler errors, no runtime exceptions) were widely copied while the language itself froze. No release from October 2019 until a performance-only 0.19.2 in July 2026. It is the period's emblem of BDFL-paced stagnation."
tags: [web, functional, pure, compile-to-js, bdfl, stagnation, elm-architecture]
paradigms: [functional, pure]
typing: static
memory_model: gc
first_released: 2012
steward: Evan Czaplicki (creator; elm/compiler)
governance: bdfl
trajectory: niche
ideas:
  - ideas/types/typescript-structural-typing-wins
  - ideas/concurrency/signals-and-fine-grained-reactivity
  - ideas/types/sum-types-and-pattern-matching
  - ideas/types/null-safety
runtimes: [runtimes/v8]
adoption_signals:
  github_stars: { value: 7906, as_of: 2026-10-03, note: "elm/compiler" }
  npm_weekly_downloads: { value: 43997, as_of: 2026-10-01, note: "elm package, week 2026-09-25..10-01" }
era_momentum: { E1: down, E2: down, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: elm-releases
    resource: https://github.com/elm/compiler/releases
    title: "elm/compiler GitHub releases (0.19.1 2019-10-21; 0.19.2 2026-07-06; 0.19.3 2026-10-02; via GitHub API)"
  - id: elm-faster
    resource: https://elm-lang.org/news/faster-builds
    title: "elm-lang.org: Faster Builds with Elm 0.19.2"
  - id: elm-discourse-dead
    resource: https://discourse.elm-lang.org/t/request-elm-0-19-2-any-update-to-help-adoption-to-prove-that-elm-is-not-dead/8843
    title: "Elm Discourse: Request — Elm 0.19.2: any update to help adoption to prove that Elm is not dead?"
  - id: elm-2025
    resource: https://engagesoftware.com/posts/using-elm-in-2025/
    title: "Engage Software: Using Elm in 2025"
  - id: derw
    resource: https://derw.substack.com/p/whatever-happened-to-elm-anyway
    title: "Noah (Derw): Whatever happened to Elm, anyway?"
  - id: linkedlist
    resource: https://linkedlist.org/2024/11/30/evan-czaplicki-elm-interview
    title: "Linked List: Interview with Evan Czaplicki, creator of Elm (2024-11-30)"
  - id: zokka
    resource: https://github.com/Zokka-Dev/zokka-compiler
    title: "Zokka: alternative Elm compiler fork carrying unmerged bug fixes"
  - id: npm-elm
    resource: https://api.npmjs.org/downloads/point/last-week/elm
    title: "npm API: elm weekly downloads (week ending 2026-10-01)"
  - id: tiobe
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index for September 2026"
    author: org:tiobe
---

# Summary
Elm is the clearest case in this knowledge base of **ideas succeeding while the language stalls**. The Elm Architecture (model–update–view with immutable state) shaped Redux and many later UI frameworks, and Elm's famously friendly compiler errors became a standard others copied. Yet the language had no release between 0.19.1 (2019-10-21) and 0.19.2 (2026-07-06), and 0.19.2 was explicitly a compiler-performance release with "no language changes".[^elm-releases][^elm-faster] Through E2–E3 the community repeatedly asked for any sign of life.[^elm-discourse-dead] Forks appeared, notably Zokka (bug fixes the core repo would not merge) and Gren (a general-purpose fork), and Lamdera built a full-stack platform on an Elm-compatible compiler.[^zokka][^elm-2025] The creator spent the period on exploratory server and data work that was not public.[^linkedlist] The 2026 releases (0.19.2 in July, 0.19.3 pre-release binaries on 2026-10-02) suggest the project is waking up, but from a much smaller base: ~44k weekly npm downloads and no TIOBE top-100 presence.[^elm-releases][^npm-elm][^tiobe] Verdict: niche. Influential, but lost the typed-front-end market to TypeScript.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-08 (pre-era) | Elm 0.19 restricts native/kernel code to core packages, alienating some industrial users[^derw] | − |
| E1 | 2019-10-21 | Elm 0.19.1, the last release for almost seven years[^elm-releases] | − |
| E2 | 2021–2022 | "Is Elm dead?" threads on the official Discourse; Evan's work moves to unannounced research[^elm-discourse-dead][^derw] | − |
| E3 | 2023–2024 | Community forks: Zokka (patches) and Gren (general-purpose); Lamdera keeps an un-fork alive[^zokka][^elm-2025] | mixed |
| E3 | 2024-11 | Evan interviewed publicly for the first time in years; hints at server-side work[^linkedlist] | mixed |
| E4 | 2026-07-06 | Elm 0.19.2: faster builds, no language changes[^elm-releases][^elm-faster] | + |
| E4 | 2026-10-02 | Elm 0.19.3 pre-release binaries ("a little faster and better")[^elm-releases] | + |

# Ideas it bet on
| Idea | Outcome for Elm |
|---|---|
| The Elm Architecture (unidirectional data flow) | Succeeded as an idea: copied by Redux and others; Elm itself didn't benefit |
| No runtime exceptions / [no null](/ideas/types/null-safety.md) | Succeeded technically; the market went to unsound-but-compatible TS ([why](/ideas/types/typescript-structural-typing-wins.md)) |
| [Sum types & pattern matching](/ideas/types/sum-types-and-pattern-matching.md) for UIs | Succeeded as an idea; now common in TS-land via discriminated unions |
| Restricted JS interop (ports only) | Failed commercially: blocked integration with the npm ecosystem |
| BDFL, slow, "done when it's done" governance | Failed for adoption: users read silence as abandonment |
| Friendly compiler error messages | Succeeded: became an industry expectation (Rust, Gleam, Roc cite it) |

# What succeeded
- **Influence.** Elm's architecture and error-message style became mainstream through other tools.[^derw]
- **Reliability for those who stayed.** Users report stable production apps with no runtime exceptions, and "no critical bugs or blockers" in core.[^elm-2025]
- **Backward compatibility.** 0.19.2 runs any 0.19.x code unchanged.[^elm-faster]

# What failed or stalled
- **Release cadence.** 0.19.1 → 0.19.2 took 6 years 8 months.[^elm-releases]
- **Ecosystem access.** The 0.19 restrictions on native code and the ports-only interop kept Elm out of the npm mainstream, the opposite of TypeScript's strategy.[^derw]
- **Governance.** Bug-fix PRs went unmerged, which prompted the Zokka fork, and communication was sparse.[^zokka][^elm-discourse-dead]
- **Market share.** Not in the TIOBE top 100; npm downloads are a rounding error next to TypeScript.[^tiobe][^npm-elm]

# By era
## E1
0.19 fallout, then 0.19.1 (Oct 2019). Elm was still a common "typed FP for the web" recommendation, but momentum turned.[^elm-releases][^derw]
## E2
Silence. TypeScript and ReScript absorbed would-be Elm users. Discourse threads asked whether Elm was dead.[^elm-discourse-dead]
## E3
Forks (Zokka, Gren) and Lamdera kept the ecosystem going. The creator re-emerged in interviews.[^zokka][^linkedlist]
## E4
0.19.2 (July 2026) and 0.19.3 pre-release (October 2026): small, performance-focused releases.[^elm-releases]

# Lessons
- Purity and safety do not beat interop. Languages that wall off the host ecosystem lose to those that embrace it.
- Under BDFL governance, a long silence is read as abandonment, whatever the actual state of the code.
- Ideas outlive languages: Elm's best ideas live on in React/Redux, Rust's diagnostics and Gleam.

# Related
- [TypeScript](/languages/typescript.md), [PureScript](/languages/purescript.md), [ReScript/Reason](/languages/rescript-reason.md), [Gleam](/languages/gleam.md), [Roc](/languages/roc.md)
- [Compile-to-JS languages](/languages/civet-and-compile-to-js.md)
- [Signals and fine-grained reactivity](/ideas/concurrency/signals-and-fine-grained-reactivity.md)

[^elm-releases]: elm/compiler GitHub releases — https://github.com/elm/compiler/releases
[^elm-faster]: elm-lang.org: Faster Builds with Elm 0.19.2 — https://elm-lang.org/news/faster-builds
[^elm-discourse-dead]: Elm Discourse: Request — Elm 0.19.2 any update — https://discourse.elm-lang.org/t/request-elm-0-19-2-any-update-to-help-adoption-to-prove-that-elm-is-not-dead/8843
[^elm-2025]: Engage Software: Using Elm in 2025 — https://engagesoftware.com/posts/using-elm-in-2025/
[^derw]: Noah (Derw): Whatever happened to Elm, anyway? — https://derw.substack.com/p/whatever-happened-to-elm-anyway
[^linkedlist]: Linked List: Interview with Evan Czaplicki — https://linkedlist.org/2024/11/30/evan-czaplicki-elm-interview
[^zokka]: Zokka compiler — https://github.com/Zokka-Dev/zokka-compiler
[^npm-elm]: npm API: elm weekly downloads — https://api.npmjs.org/downloads/point/last-week/elm
[^tiobe]: TIOBE Index for September 2026 — https://www.tiobe.com/tiobe-index/
