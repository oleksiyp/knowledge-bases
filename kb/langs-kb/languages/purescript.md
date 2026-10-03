---
type: Language
title: PureScript
description: "Strict, Haskell-like pure functional language compiling to JavaScript. Throughout 2018–2026 it was a small, committed community with a slow 0.x compiler, an ES-modules migration in 2022 and a package registry that only reached GA in February 2026. It survives, but never left the niche."
tags: [functional, pure, haskell-like, compile-to-js, type-classes, community]
paradigms: [functional, pure]
typing: static
memory_model: gc
first_released: 2013
steward: PureScript core team (community)
governance: community
trajectory: niche
ideas:
  - ideas/tooling-and-ecosystem/esm-migration
  - ideas/types/typescript-structural-typing-wins
  - ideas/types/algebraic-effects-and-handlers
runtimes: [runtimes/v8, runtimes/nodejs]
adoption_signals:
  github_stars: { value: 8913, as_of: 2026-10-03, note: "purescript/purescript" }
  npm_weekly_downloads: { value: 11359, as_of: 2026-10-01, note: "purescript package" }
era_momentum: { E1: flat, E2: flat, E3: down, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: ps015
    resource: https://discourse.purescript.org/t/purescript-v0-15-0-released/2989
    title: "PureScript Discourse: PureScript v0.15.0 Released (2022-04-29)"
  - id: ps-esm-rfc
    resource: https://discourse.purescript.org/t/rfc-only-support-es-modules-in-purescript-0-15/2877
    title: "PureScript Discourse: RFC — Only support ES modules in PureScript 0.15"
  - id: ps-releases
    resource: https://github.com/purescript/purescript/releases
    title: "purescript/purescript GitHub releases (v0.15.16 2026-03-15; v0.15.17-0 2026-06-07; via GitHub API)"
  - id: registry-ga
    resource: https://discourse.purescript.org/t/registry-and-spago-1-0-launch-its-happening/5005
    title: "PureScript Discourse: Registry and Spago 1.0 launch — it's happening (GA 2026-02-01)"
  - id: spago-next
    resource: https://discourse.purescript.org/t/announcing-spago-next-a-purescript-rewrite-registry-support-and-more/3737
    title: "PureScript Discourse: Announcing Spago Next — a PureScript rewrite, Registry support"
  - id: backend-optimizer
    resource: https://github.com/aristanetworks/purescript-backend-optimizer
    title: "Arista Networks: purescript-backend-optimizer (optimizing ES backend)"
    author: org:arista
  - id: npm-ps
    resource: https://api.npmjs.org/downloads/point/last-week/purescript
    title: "npm API: purescript weekly downloads (week ending 2026-10-01)"
  - id: wiki-ps
    resource: https://en.wikipedia.org/wiki/PureScript
    title: "Wikipedia: PureScript"
---

# Summary
PureScript brought Haskell's type classes, higher-kinded types, row polymorphism and effect tracking to JavaScript with strict evaluation and readable output. Over 2018–2026 it behaved like a healthy research-grade community language. The compiler is still at 0.15.x (0.15.16 in March 2026, a 0.15.17 pre-release in June 2026) and has never declared 1.0.[^ps-releases] The period's major change was **dropping CommonJS for ES modules** in 0.15 (April 2022). Most 0.14 code stopped compiling, and the core team migrated the core, contrib, node and web libraries itself.[^ps015][^ps-esm-rfc] Infrastructure work followed slowly: Spago was rewritten in PureScript, and the new package registry reached general availability only on 2026-02-01.[^spago-next][^registry-ga] Industrial support came from a few companies, such as Arista Networks' optimizing backend.[^backend-optimizer] With ~11k weekly npm downloads it is about 1/30,000 the size of TypeScript.[^npm-ps] Verdict: niche and stable. A respected place to do typed FP in the browser, not a contender.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019–2020 | 0.13/0.14 series: polykinds, roles, coercible (0.14, early 2021)[^wiki-ps] | + |
| E2 | 2022-04-29 | 0.15.0: ES modules only, `purs bundle` dropped in favour of esbuild[^ps015][^ps-esm-rfc] | mixed |
| E2–E3 | 2022–2023 | Arista's purescript-backend-optimizer brings an optimizing ES backend[^backend-optimizer] | + |
| E3 | 2023 | "Spago Next": build tool rewritten in PureScript, YAML replaces Dhall config[^spago-next] | + |
| E4 | 2026-02-01 | PureScript Registry GA with Spago 1.0[^registry-ga] | + |
| E4 | 2026-03-15 | Compiler v0.15.16; still no 1.0[^ps-releases] | flat |

# Ideas it bet on
| Idea | Outcome for PureScript |
|---|---|
| Haskell-grade types on JS (type classes, HKTs, rows) | Technically succeeded; adoption failed against [TypeScript](/ideas/types/typescript-structural-typing-wins.md) |
| Effect tracking (Eff → Effect, monadic) | Niche; the [effects-and-handlers](/ideas/types/algebraic-effects-and-handlers.md) wave went elsewhere |
| [ES modules](/ideas/tooling-and-ecosystem/esm-migration.md) early and only | Succeeded, but with a breaking release for a small ecosystem |
| Community package registry | Took ~4 years to GA |

# What succeeded
- **Clean ESM migration with tooling help.** A migration script and core-team library ports eased a hard break.[^ps015]
- **Self-hosted tooling.** Spago rewritten in PureScript; registry delivered.[^spago-next][^registry-ga]
- **Multiple backends.** The CoreFn IR enabled community backends and Arista's optimizer.[^backend-optimizer]

# What failed or stalled
- **No 1.0.** After 13 years the compiler is 0.15.x, which signals instability to managers.[^ps-releases]
- **Growth.** Usage is flat-to-declining and outside the TIOBE top 100; the typed-FP-for-the-web audience is split with Elm, ReScript and now Gleam's JS target.[^npm-ps]
- **Learning curve.** Haskell-level abstraction limits the audience to Haskell-adjacent teams.

# By era
## E1
0.13 and the 0.14 preparation. The community overlaps heavily with Haskell's.
## E2
0.15 ES modules break (April 2022).[^ps015]
## E3
Backend optimizer and Spago Next.[^backend-optimizer][^spago-next]
## E4
Registry GA and Spago 1.0 (February 2026). Incremental compiler releases.[^registry-ga][^ps-releases]

# Lessons
- Small ecosystems can make hard breaking changes (ESM-only) faster than large ones, but each break costs users they can't spare.
- A language whose value is abstraction power competes for a tiny audience; ecosystem reuse beats it in the mainstream.

# Related
- [Haskell](/languages/haskell.md), [Elm](/languages/elm.md), [ReScript/Reason](/languages/rescript-reason.md), [TypeScript](/languages/typescript.md), [Compile-to-JS languages](/languages/civet-and-compile-to-js.md)
- [ESM migration](/ideas/tooling-and-ecosystem/esm-migration.md)

[^ps015]: PureScript Discourse: PureScript v0.15.0 Released — https://discourse.purescript.org/t/purescript-v0-15-0-released/2989
[^ps-esm-rfc]: PureScript Discourse: RFC — Only support ES modules — https://discourse.purescript.org/t/rfc-only-support-es-modules-in-purescript-0-15/2877
[^ps-releases]: purescript/purescript GitHub releases — https://github.com/purescript/purescript/releases
[^registry-ga]: PureScript Discourse: Registry and Spago 1.0 launch — https://discourse.purescript.org/t/registry-and-spago-1-0-launch-its-happening/5005
[^spago-next]: PureScript Discourse: Announcing Spago Next — https://discourse.purescript.org/t/announcing-spago-next-a-purescript-rewrite-registry-support-and-more/3737
[^backend-optimizer]: Arista Networks: purescript-backend-optimizer — https://github.com/aristanetworks/purescript-backend-optimizer
[^npm-ps]: npm API: purescript weekly downloads — https://api.npmjs.org/downloads/point/last-week/purescript
[^wiki-ps]: Wikipedia: PureScript — https://en.wikipedia.org/wiki/PureScript
