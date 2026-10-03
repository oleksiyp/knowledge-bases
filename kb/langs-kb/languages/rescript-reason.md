---
type: Language
title: ReScript and Reason
description: "Two descendants of Facebook's 2016 Reason project, which brought OCaml's sound type system to JavaScript developers. The 2020 BuckleScript→ReScript rebrand split the community into ReScript (a JS-focused language) and Reason/Melange (OCaml-ecosystem syntax). Both are technically alive and active in 2026, and both were beaten by TypeScript."
tags: [ocaml, compile-to-js, sound-typing, react, rebrand, community-split, melange]
paradigms: [functional, multi-paradigm]
typing: static
memory_model: gc
first_released: 2016
steward: ReScript Association (ReScript); Reason/Melange maintainers with Ahrefs funding (Melange)
governance: community
trajectory: niche
ideas:
  - ideas/types/typescript-structural-typing-wins
  - ideas/types/sum-types-and-pattern-matching
  - ideas/tooling-and-ecosystem/esm-migration
  - ideas/tooling-and-ecosystem/native-rewrites-of-tooling
runtimes: [runtimes/v8, runtimes/nodejs]
adoption_signals:
  github_stars: { value: 7458, as_of: 2026-10-03, note: "rescript-lang/rescript" }
  npm_weekly_downloads: { value: 77892, as_of: 2026-10-01, note: "rescript package" }
era_momentum: { E1: up, E2: down, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: rebrand
    resource: https://rescript-lang.org/blog/bucklescript-is-rebranding/
    title: "ReScript blog: BuckleScript & Reason Rebranding (2020-08)"
    author: org:rescript-association
  - id: bs-commitments
    resource: https://rescript-lang.org/blog/archived/a-note-on-bucklescripts-future-commitments/
    title: "ReScript blog: A Note on BuckleScript's New Syntax and Its Future Support Commitments"
    author: org:rescript-association
  - id: reason-react-rebrand
    resource: https://reasonml.github.io/reason-react/blog/2021/05/07/rescript-migration
    title: "ReasonReact blog: We are rebranding to ReScript / React (2021-05-07)"
  - id: rescript11
    resource: https://rescript-lang.org/blog/release-11-0-0/
    title: "ReScript blog: ReScript 11.0 (uncurried by default, 2024-01-11)"
    author: org:rescript-association
  - id: rescript12
    resource: https://rescript-lang.org/blog/release-12-0-0/
    title: "ReScript blog: Announcing ReScript 12 (2025-11-25)"
    author: org:rescript-association
  - id: infoq12
    resource: https://www.infoq.com/news/2025/12/rescript-12-release/
    title: "InfoQ: ReScript 12.0 Released with New Build System"
  - id: rescript-gh
    resource: https://github.com/rescript-lang/rescript/releases
    title: "rescript-lang/rescript GitHub releases (v12.3.1 2026-08-24; v13.0.0-alpha.6 2026-09-16)"
  - id: melange-why
    resource: https://melange.re/v2.0.0/rationale/
    title: "Melange: Why (rationale and history of the BuckleScript fork)"
  - id: ahrefs-melange
    resource: https://tech.ahrefs.com/building-ahrefs-codebase-with-melange-9f881f6d022b
    title: "Ahrefs tech blog: Building Ahrefs codebase with Melange"
    author: org:ahrefs
  - id: ocaml-discuss
    resource: https://discuss.ocaml.org/t/what-is-actually-going-on-now-with-reasonml-and-rescript/13973
    title: "OCaml Discuss: What is actually going on now with ReasonML and ReScript?"
  - id: hn-split
    resource: https://news.ycombinator.com/item?id=32008739
    title: "Hacker News: 'the ReasonML > ReScript drama/change killed…' (community discussion, 2022)"
  - id: npm-rescript
    resource: https://api.npmjs.org/downloads/point/last-week/rescript
    title: "npm API: rescript weekly downloads (week ending 2026-10-01)"
---

# Summary
Reason (Facebook, 2016) gave OCaml a JavaScript-like syntax. Combined with the BuckleScript compiler it promised **sound** types, fast compilation and readable JS output, and it was used in production at Facebook/Messenger. It was TypeScript's most credible "better type system" rival at the start of the period. On 2020-08-13 the BuckleScript team rebranded as **ReScript**, with its own syntax and toolchain focused purely on JS developers. That split the community: Reason users wanting OCaml compatibility went to **Melange**, a BuckleScript fork that Ahrefs funded to 1.0 in 2023.[^rebrand][^melange-why][^ahrefs-melange] Many observers say the confusion over names, syntaxes and two compilers cost the ecosystem its moment.[^hn-split][^ocaml-discuss] ReScript itself kept improving: v11 (January 2024) made uncurried functions the default, v12 (November 2025) rewrote the build system and modularised the runtime, and v13 alphas were shipping in September 2026.[^rescript11][^rescript12][^rescript-gh] Reddit reactions to v12 included surprise that "the project was [not] dead".[^infoq12] ~78k weekly npm downloads against TypeScript's ~355M sums up the outcome.[^npm-rescript] Verdict: technically healthy niche; strategically lost.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-07 | BuckleScript introduces a new syntax diverging from Reason[^bs-commitments] | mixed |
| E1 | 2020-08-13 | BuckleScript rebrands as ReScript ([event](/events/2020-08-bucklescript-rebrands-rescript.md))[^rebrand] | − (split) |
| E2 | 2021-05-07 | ReasonReact rebrands to ReScript/React[^reason-react-rebrand] | mixed |
| E3 | 2023 | Melange 1.0 with Dune integration; Ahrefs migrates its frontend[^ahrefs-melange][^melange-why] | + (Reason side) |
| E3 | 2024-01-11 | ReScript 11: uncurried mode by default, new Core stdlib[^rescript11] | + |
| E4 | 2025-11-25 | ReScript 12: new build system, modular runtime, dict and regex literals[^rescript12][^infoq12] | + |
| E4 | 2026-09-16 | ReScript 13 alpha.6; 12.3.1 stable (2026-08-24)[^rescript-gh] | + |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| Sound Hindley–Milner types for JS developers | Failed to win the market; [TS's unsound structural typing won](/ideas/types/typescript-structural-typing-wins.md) |
| [Variants & pattern matching](/ideas/types/sum-types-and-pattern-matching.md) | Succeeded as an idea, now approximated in TS discriminated unions |
| Readable JS output, zero-cost interop | Succeeded technically; still needs hand-written bindings for every npm library |
| Fast native compiler | Succeeded; anticipated the [native tooling rewrite](/ideas/tooling-and-ecosystem/native-rewrites-of-tooling.md) wave |
| Rebrand and syntax fork to court JS users | Failed: confused and split a small community |

# What succeeded
- **ReScript as a product.** Steady, coherent releases (11, 12, 13-alpha). Uncurried-by-default and the new stdlib removed long-standing friction.[^rescript11][^rescript12]
- **Melange for OCaml shops.** Ahrefs built its frontend on Melange and funded Dune integration. Reason syntax survives as an OCaml front-end.[^ahrefs-melange]
- **Compile speed and soundness** remain genuine differentiators against TypeScript.[^infoq12]

# What failed or stalled
- **The 2020 split.** BuckleScript → ReScript, then the ReasonReact rename, left users unsure which toolchain was "the" Reason.[^rebrand][^reason-react-rebrand][^ocaml-discuss]
- **Binding tax.** Every npm package needs bindings, while TypeScript reuses DefinitelyTyped and native `.d.ts`.
- **Visibility.** Sentiment around v12 still included "I thought it was dead".[^infoq12]

# By era
## E1
Reason/BuckleScript at peak hype, then the rebrand to ReScript.[^rebrand]
## E2
ReScript/React rename. Reason users drift to Melange or TypeScript.[^reason-react-rebrand]
## E3
Melange 1.0 (Ahrefs) and ReScript 11.[^ahrefs-melange][^rescript11]
## E4
ReScript 12 and 13 alphas. A small, stable community.[^rescript12][^rescript-gh]

# Lessons
- In a niche, community unity matters more than syntax polish. A split halves an already small user base.
- Soundness is not the feature mainstream JS developers buy; ecosystem reuse is.
- Funding by a single production user (Ahrefs for Melange) can keep a branch alive indefinitely, but not grow it.

# Related
- [OCaml](/languages/ocaml.md), [TypeScript](/languages/typescript.md), [Elm](/languages/elm.md), [PureScript](/languages/purescript.md), [Compile-to-JS languages](/languages/civet-and-compile-to-js.md)
- [Why TypeScript won](/ideas/types/typescript-structural-typing-wins.md)

[^rebrand]: ReScript blog: BuckleScript & Reason Rebranding — https://rescript-lang.org/blog/bucklescript-is-rebranding/
[^bs-commitments]: ReScript blog: A Note on BuckleScript's New Syntax — https://rescript-lang.org/blog/archived/a-note-on-bucklescripts-future-commitments/
[^reason-react-rebrand]: ReasonReact blog: We are rebranding to ReScript / React — https://reasonml.github.io/reason-react/blog/2021/05/07/rescript-migration
[^rescript11]: ReScript blog: ReScript 11.0 — https://rescript-lang.org/blog/release-11-0-0/
[^rescript12]: ReScript blog: Announcing ReScript 12 — https://rescript-lang.org/blog/release-12-0-0/
[^infoq12]: InfoQ: ReScript 12.0 Released with New Build System — https://www.infoq.com/news/2025/12/rescript-12-release/
[^rescript-gh]: rescript-lang/rescript GitHub releases — https://github.com/rescript-lang/rescript/releases
[^melange-why]: Melange: Why — https://melange.re/v2.0.0/rationale/
[^ahrefs-melange]: Ahrefs tech blog: Building Ahrefs codebase with Melange — https://tech.ahrefs.com/building-ahrefs-codebase-with-melange-9f881f6d022b
[^ocaml-discuss]: OCaml Discuss: What is actually going on now with ReasonML and ReScript? — https://discuss.ocaml.org/t/what-is-actually-going-on-now-with-reasonml-and-rescript/13973
[^hn-split]: Hacker News discussion — https://news.ycombinator.com/item?id=32008739
[^npm-rescript]: npm API: rescript weekly downloads — https://api.npmjs.org/downloads/point/last-week/rescript
