---
type: Language
title: Civet and the compile-to-JS family
description: "A family page for languages that target JavaScript (and increasingly WasmGC) instead of replacing it: Civet, Kotlin/JS, Scala.js, Fable (F#), Gleam's JS target, ClojureScript, plus the Elm/ReScript/PureScript/CoffeeScript pages. From 2018 to 2026 the 'better language that compiles to JS' market collapsed into TypeScript; survivors are those that bring a *whole other ecosystem* (Kotlin, Scala, F#, Gleam) to the browser."
tags: [compile-to-js, transpilers, civet, kotlin-js, scala-js, fable, gleam, wasmgc]
paradigms: [multi-paradigm]
typing: gradual
memory_model: gc
first_released: 2009
steward: "Various: Civet (Daniel X. Moore, community), Kotlin/JS & Kotlin/Wasm (JetBrains), Scala.js (EPFL/community), Fable (community), Gleam (Louis Pilfold, community)"
governance: community
trajectory: niche
ideas:
  - ideas/types/typescript-structural-typing-wins
  - ideas/platforms-and-portability/webassembly-in-the-browser
  - ideas/platforms-and-portability/kotlin-multiplatform
  - ideas/tooling-and-ecosystem/tc39-proposal-outcomes
  - ideas/tooling-and-ecosystem/esm-migration
runtimes: [runtimes/v8, runtimes/spidermonkey, runtimes/javascriptcore, runtimes/nodejs]
adoption_signals:
  civet_github_stars: { value: 1959, as_of: 2026-10-03 }
  civet_npm_weekly_downloads: { value: 2427, as_of: 2026-10-01, note: "@danielx/civet" }
  typescript_npm_weekly_downloads: { value: 354808929, as_of: 2026-10-01, note: "for scale" }
era_momentum: { E1: down, E2: down, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: civet-gh
    resource: https://github.com/DanielXMoore/Civet
    title: "DanielXMoore/Civet: A TypeScript superset that favors more types and less typing (GitHub; stars via API 2026-10-03)"
  - id: civet-infoworld
    resource: https://www.infoworld.com/article/2338105/civet-a-better-typescript.html
    title: "InfoWorld: Civet — a better TypeScript? (2023-03-16)"
  - id: civet-hn
    resource: https://news.ycombinator.com/item?id=33323574
    title: "Hacker News: Civet — The CoffeeScript of TypeScript (2022-10)"
  - id: npm-civet
    resource: https://api.npmjs.org/downloads/point/last-week/@danielx/civet
    title: "npm API: @danielx/civet weekly downloads (week ending 2026-10-01)"
  - id: npm-ts
    resource: https://api.npmjs.org/downloads/point/last-week/typescript
    title: "npm API: typescript weekly downloads (week ending 2026-10-01)"
  - id: kotlin-web
    resource: https://blog.jetbrains.com/kotlin/2025/05/present-and-future-kotlin-for-web/
    title: "JetBrains Blog: Present and Future of Kotlin for Web (2025-05)"
    author: org:jetbrains
  - id: cmp19
    resource: https://blog.jetbrains.com/kotlin/2025/09/compose-multiplatform-1-9-0-compose-for-web-beta/
    title: "JetBrains Blog: Compose Multiplatform 1.9.0 — Compose for Web goes Beta (2025-09)"
    author: org:jetbrains
  - id: scalajs-1201
    resource: http://www.scala-js.org/news/2025/09/06/announcing-scalajs-1.20.1/
    title: "Scala.js: Announcing Scala.js 1.20.1 (2025-09-06; Wasm backend runs on current Firefox, Safari, Chrome)"
  - id: scalajs-122
    resource: http://www.scala-js.org/news/2026/06/20/announcing-scalajs-1.22.0/
    title: "Scala.js: Announcing Scala.js 1.22.0 (2026-06-20)"
  - id: fable5
    resource: https://fable.io/blog/2026/2026-02-27-Fable_5_release_candidate.html
    title: "Fable blog: Announcing Fable 5 Release Candidate (2026-02-27)"
  - id: fable-gh
    resource: https://github.com/fable-compiler/Fable
    title: "fable-compiler/Fable: F# to JavaScript, TypeScript, Python, Rust, Erlang and Dart compiler"
  - id: gleam-v1
    resource: https://gleam.run/news/gleam-version-1/
    title: "Gleam: Gleam version 1 (2024-03-04)"
  - id: sheets-wasmgc
    resource: https://web.dev/case-studies/google-sheets-wasmgc
    title: "web.dev: Why Google Sheets ported its calculation worker from JavaScript to WasmGC"
    author: org:google
---

# Summary
In 2012–2016 "a better language that compiles to JavaScript" was a crowded category: CoffeeScript, Dart-to-JS, Elm, PureScript, ClojureScript, Reason/BuckleScript, Haxe, GWT. By 2026 the general-purpose part of that market had **collapsed into TypeScript**. TS is itself "compile-to-JS", but erasable and a strict superset, so it never asked users to leave the npm ecosystem. Two kinds of survivor remain. **(1) Syntax layers on top of TypeScript**, of which Civet is the main example: CoffeeScript-style terseness, pattern matching and a pipe operator, compiled *to TypeScript* so it keeps TS tooling. It has a small following (≈2.0k GitHub stars, ≈2.4k weekly npm downloads vs ≈355M for TypeScript).[^civet-gh][^npm-civet][^npm-ts][^civet-infoworld] **(2) Ecosystem bridges** that bring an existing language's community to the browser: Kotlin/JS and Kotlin/Wasm (Compose for Web reached Beta in September 2025), Scala.js (now with a WebAssembly backend), Fable for F# (Fable 5 RC in February 2026, also targeting Python, Rust and Dart), and Gleam's JS target (Gleam 1.0, March 2024).[^cmp19][^scalajs-1201][^fable5][^gleam-v1] The big shift is that the bridges are moving **from JS to WasmGC**. Google Sheets' Java calculation engine runs ~2x faster on WasmGC than its JS build, and Kotlin and Scala.js now ship Wasm backends.[^sheets-wasmgc][^kotlin-web] Verdict: as a way to replace JS for JS developers, the family failed. As a portability layer for other ecosystems, it is stable and shifting to Wasm.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-08 | BuckleScript → ReScript rebrand fractures the Reason camp ([event](/events/2020-08-bucklescript-rebrands-rescript.md)) | − |
| E2 | 2021-05 | Flow's retreat leaves TS as the only mainstream typed-JS ([event](/events/2021-05-flow-refocuses-on-meta.md)) | − (for alternatives) |
| E2 | 2022-10 | Civet announced as "the CoffeeScript of TypeScript"[^civet-hn] | + |
| E3 | 2023-10 | WasmGC ships in Chrome, opening a non-JS target for GC languages ([event](/events/2023-10-wasmgc-ships-in-chrome.md)) | + |
| E3 | 2024-03-04 | Gleam 1.0 with Erlang and JavaScript targets ([event](/events/2024-03-gleam-1-0.md))[^gleam-v1] | + |
| E3 | 2024-06 | Google Sheets' calculation worker on WasmGC, ~2x faster than JS[^sheets-wasmgc] | + |
| E4 | 2025-09 | Compose Multiplatform 1.9: Compose for Web (Kotlin/Wasm) Beta[^cmp19] | + |
| E4 | 2025-09-06 | Scala.js 1.20.1: Wasm backend runs on all current major browsers[^scalajs-1201] | + |
| E4 | 2026-02-27 | Fable 5 RC (F# → JS/TS/Python/Rust/Dart)[^fable5] | + |
| E4 | 2026-06-20 | Scala.js 1.22.0[^scalajs-122] | + |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| Replace JS's syntax/semantics for JS developers | Failed: [TypeScript's superset strategy won](/ideas/types/typescript-structural-typing-wins.md); CoffeeScript's ideas were absorbed by [TC39](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md) |
| Syntax layer *over* TypeScript (Civet) | Unproven: technically clever, tiny adoption |
| Share code across platforms (Kotlin, Scala, F#) | Succeeding (see [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md)) |
| [WasmGC instead of JS](/ideas/platforms-and-portability/webassembly-in-the-browser.md) as output | Succeeding: Sheets, Kotlin/Wasm, Dart/Flutter, Scala.js |
| ES module output | Succeeded; most compilers emit ESM ([ESM migration](/ideas/tooling-and-ecosystem/esm-migration.md)) |

# What succeeded
- **Ecosystem bridges.** Kotlin, Scala and F# teams can share domain code with the browser. JetBrains made web a first-class KMP target.[^kotlin-web][^cmp19]
- **Multi-target compilers.** Fable and Gleam treat JS as one backend among several.[^fable-gh][^gleam-v1]
- **WasmGC as the new output.** Real speedups for heavy, GC-language workloads (Sheets ~2x vs JS).[^sheets-wasmgc]
- **Civet's design.** Compiling to TS rather than JS means it inherits type checking and LSP support, the right lesson from CoffeeScript.[^civet-infoworld]

# What failed or stalled
- **General-purpose JS replacements.** CoffeeScript is dead, Elm stagnated, and ReScript and PureScript are niche ([CoffeeScript](/languages/coffeescript.md), [Elm](/languages/elm.md), [ReScript](/languages/rescript-reason.md), [PureScript](/languages/purescript.md)).
- **Civet adoption.** About 2.4k weekly downloads after four years.[^npm-civet]
- **Interop tax.** Every non-TS language still needs bindings or type importers for npm libraries. TS gets them for free.

# By era
## E1
The typed-JS field narrows. TS beats Flow, and the Reason/ReScript split begins.
## E2
Flow retreats. Civet appears.[^civet-hn]
## E3
WasmGC opens the door for GC languages. Gleam 1.0. Sheets ports to WasmGC.[^gleam-v1][^sheets-wasmgc]
## E4
Compose for Web Beta, Scala.js on Wasm, Fable 5. Compile-to-JS increasingly means compile-to-WasmGC.[^cmp19][^scalajs-1201][^fable5]

# Lessons
- To win JS developers, extend JavaScript (TypeScript, Civet) rather than replace it.
- Compile-to-web makes sense when it brings a different ecosystem and its code, not just nicer syntax.
- When the platform adds a better target (WasmGC), bridge languages move to it quickly. JS-as-bytecode was a stopgap.

# Related
- [TypeScript](/languages/typescript.md), [JavaScript](/languages/javascript.md), [CoffeeScript](/languages/coffeescript.md), [Elm](/languages/elm.md), [ReScript/Reason](/languages/rescript-reason.md), [PureScript](/languages/purescript.md), [Dart](/languages/dart.md)
- [Kotlin](/languages/kotlin.md), [Scala](/languages/scala.md), [F#](/languages/fsharp.md), [Gleam](/languages/gleam.md), [Clojure](/languages/clojure.md)
- [WebAssembly in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md)

[^civet-gh]: DanielXMoore/Civet — https://github.com/DanielXMoore/Civet
[^civet-infoworld]: InfoWorld: Civet — a better TypeScript? — https://www.infoworld.com/article/2338105/civet-a-better-typescript.html
[^civet-hn]: Hacker News: Civet — The CoffeeScript of TypeScript — https://news.ycombinator.com/item?id=33323574
[^npm-civet]: npm API: @danielx/civet weekly downloads — https://api.npmjs.org/downloads/point/last-week/@danielx/civet
[^npm-ts]: npm API: typescript weekly downloads — https://api.npmjs.org/downloads/point/last-week/typescript
[^kotlin-web]: JetBrains Blog: Present and Future of Kotlin for Web — https://blog.jetbrains.com/kotlin/2025/05/present-and-future-kotlin-for-web/
[^cmp19]: JetBrains Blog: Compose Multiplatform 1.9.0 — https://blog.jetbrains.com/kotlin/2025/09/compose-multiplatform-1-9-0-compose-for-web-beta/
[^scalajs-1201]: Scala.js: Announcing Scala.js 1.20.1 — http://www.scala-js.org/news/2025/09/06/announcing-scalajs-1.20.1/
[^scalajs-122]: Scala.js: Announcing Scala.js 1.22.0 — http://www.scala-js.org/news/2026/06/20/announcing-scalajs-1.22.0/
[^fable5]: Fable blog: Announcing Fable 5 Release Candidate — https://fable.io/blog/2026/2026-02-27-Fable_5_release_candidate.html
[^fable-gh]: fable-compiler/Fable — https://github.com/fable-compiler/Fable
[^gleam-v1]: Gleam: Gleam version 1 — https://gleam.run/news/gleam-version-1/
[^sheets-wasmgc]: web.dev: Why Google Sheets ported its calculation worker to WasmGC — https://web.dev/case-studies/google-sheets-wasmgc
