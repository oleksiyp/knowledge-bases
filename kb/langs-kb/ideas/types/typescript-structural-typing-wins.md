---
type: Idea
title: TypeScript's bet — an unsound, structural, erasable type layer over JavaScript
description: TypeScript's deliberately unsound, structurally typed, fully erasable superset beat Flow, Closure, Dart-as-JS-replacement and compile-to-JS languages; by August 2025 it was the most-used language on GitHub. The win came from ecosystem strategy and tooling more than type-theoretic merit.
area: types
tags: [typescript, flow, closure-compiler, structural-typing, gradual-typing, javascript, definitelytyped]
outcome: succeeded
maturity_2026: mainstream
origin_year: 2012
mainstream_year: 2017
languages: [languages/typescript, languages/javascript, languages/dart, languages/rescript-reason, languages/purescript, languages/elm, languages/coffeescript]
runtimes: [runtimes/nodejs, runtimes/deno, runtimes/bun]
related_ideas: [ideas/types/types-as-comments-and-type-stripping, ideas/types/gradual-typing-for-dynamic-languages, ideas/tooling-and-ecosystem/native-rewrites-of-tooling, ideas/ai-and-languages/llm-impact-on-language-adoption, ideas/tooling-and-ecosystem/language-server-protocol]
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: ts-design-goals
    resource: https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals
    title: "TypeScript wiki: TypeScript Design Goals (non-goal: a sound or provably correct type system)"
    author: org:microsoft
  - id: octoverse-2025
    resource: https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
    title: "GitHub blog: Octoverse 2025 — AI leads TypeScript to #1"
    author: org:github
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology (TypeScript 48.8% of professionals)"
    author: org:stack-overflow
  - id: stateofjs-2024
    resource: https://2024.stateofjs.com/en-US/usage/
    title: "State of JavaScript 2024: Usage (34% write only TypeScript)"
  - id: npm-downloads
    resource: https://api.npmjs.org/downloads/point/last-week/typescript
    title: "npm registry downloads API: typescript and flow-bin, week 2026-09-25..2026-10-01"
  - id: flow-clarity
    resource: https://flow.org/blog/2021/05/25/Clarity-on-Flows-Direction-and-Open-Source-Engagement/
    title: "Flow blog: Clarity on Flow's Direction and Open Source Engagement (2021-05-25)"
    author: org:meta
  - id: jest-24
    resource: https://jestjs.io/blog/2019/01/25/jest-24-refreshing-polished-typescript-friendly
    title: "Jest blog: Jest 24 — Refreshing, Polished, TypeScript-friendly (migration from Flow to TS)"
  - id: chromium-closure
    resource: https://chromium.googlesource.com/chromium/src.git/+/HEAD/docs/closure_compilation.md
    title: "Chromium docs: Closure Compilation (deprecated; TypeScript should be used)"
    author: org:google
  - id: devtools-ts
    resource: https://developer.chrome.com/blog/migrating-to-typescript
    title: "Chrome for Developers: DevTools architecture refresh — migrating DevTools to TypeScript"
    author: org:google
  - id: svelte-jsdoc
    resource: https://devclass.com/2023/05/11/typescript-is-not-worth-it-for-developing-libraries-says-svelte-author-as-team-switches-to-javascript-and-jsdoc/
    title: "DevClass: TypeScript is 'not worth it' for developing libraries, says Svelte author (2023-05-11)"
  - id: turbo-dhh
    resource: https://world.hey.com/dhh/turbo-8-is-dropping-typescript-70165c01
    title: "DHH: Turbo 8 is dropping TypeScript (2023-09)"
  - id: devclass-turbo
    resource: https://devclass.com/2023/09/07/ruby-on-rails-creator-removes-typescript-from-turbo-framework-upsets-community/
    title: "DevClass: Ruby on Rails creator removes TypeScript from Turbo framework, upsets community (2023-09-07)"
  - id: ts7-blog
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/
    title: "TypeScript blog: Announcing TypeScript 7.0 (2026-07-08)"
    author: org:microsoft
---

# Summary
**Succeeded, decisively.** Between 2018 and 2026 TypeScript went from "the popular option" to the default way JavaScript is written professionally. In August 2025 it overtook Python and JavaScript as the most-used language on GitHub (2.63M monthly contributors, +66% year over year).[^octoverse-2025] It was used by 48.8% of professional respondents in the 2025 Stack Overflow survey.[^so-2025] In the week ending 2026-10-01, `typescript` had about 355M npm downloads against about 0.53M for Meta's `flow-bin`.[^npm-downloads] The rivals each lost in a different way. Flow retreated to Meta's internal needs in 2021.[^flow-clarity] Google's Closure type annotations were deprecated inside Chromium in favour of TypeScript.[^chromium-closure] The sound, compile-to-JS languages (Elm, ReScript, PureScript) stayed niche. The key point is that TypeScript won *because of* compromises type theorists criticised: it is unsound by design, structural, and erasable.[^ts-design-goals]

# The idea
TypeScript is a typed superset of JavaScript. Any JS file is a valid TS file, the types are erased at compile time, and the type system describes the shapes that existing JavaScript code already uses. Its published design goals list as an explicit *non-goal* "apply a sound or provably correct type system", choosing "a balance between correctness and productivity" instead. They also commit to emitting idiomatic JavaScript and adding no runtime overhead.[^ts-design-goals] Structural typing fits JavaScript's object literals and duck typing. Flow, by contrast, mixed nominal class typing with structural object typing and aimed for more soundness. Closure Compiler used JSDoc annotations tied to Google's optimizing compiler.

Prior art: Closure (2009), Dart (2011, initially meant to replace JS in the browser), TypeScript (2012) and Flow (2014). The problem was large JS codebases that could not be refactored safely and had poor editor tooling.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-01 | Jest (a Facebook project) announces its migration from Flow to TypeScript [^jest-24] | + |
| E2 | 2021-05-25 | Flow team says it will prioritise Meta's internal codebase over open-source compatibility ([event](/events/2021-05-flow-refocuses-on-meta.md)) [^flow-clarity] | + (for TS) |
| E2 | 2020-12 | Chrome DevTools reports its 13-month migration from the Closure type checker to TypeScript [^devtools-ts] | + |
| E3 | 2023-05 | Svelte moves its own source from `.ts` to JS+JSDoc, but still type-checks with `tsc` [^svelte-jsdoc] | mixed |
| E3 | 2023-09 | DHH drops TypeScript from Turbo 8, prompting a community backlash [^turbo-dhh][^devclass-turbo] | − |
| E4 | 2025-08 | TypeScript becomes the #1 language on GitHub by contributors [^octoverse-2025] | + |
| E4 | 2026-07-08 | TypeScript 7.0 ships a Go-native compiler with 8–12x faster builds ([event](/events/2026-07-typescript-7-native-go.md)) [^ts7-blog] | + |

# Where it succeeded
- **Ecosystem capture.** In State of JS 2024, the largest group of respondents (34%) wrote *only* TypeScript.[^stateofjs-2024] Library authors ship `.d.ts` files by default, and DefinitelyTyped covers the rest.
- **Inside its rivals' owners.** Google's Chromium now says Closure Compiler is deprecated and "TypeScript should be used".[^chromium-closure] Facebook's own Jest moved from Flow to TS.[^jest-24]
- **Runtimes followed.** Deno and Bun ran `.ts` natively, and Node.js added type stripping in 2024 (see [types as comments](/ideas/types/types-as-comments-and-type-stripping.md)).
- **AI era tailwind.** GitHub attributes part of TypeScript's 2025 surge to AI-assisted coding, where static types help catch errors in generated code.[^octoverse-2025]

# Where it failed or stalled
- **Soundness never arrived.** `any`, bivariant method parameters and unchecked casts remain. That is by design, but runtime validation libraries (Zod and similar) became necessary as a result.[^ts-design-goals]
- **Build-step backlash.** Svelte and Turbo publicly stepped back from `.ts` sources in 2023. Svelte kept types in JSDoc, which is still checked by TypeScript, while Turbo dropped types altogether.[^svelte-jsdoc][^turbo-dhh]
- **Compiler speed.** By the mid-2020s the self-hosted JS compiler was a bottleneck at large scale. This forced the Go port in TypeScript 7, and 7.0 shipped without a stable programmatic API.[^ts7-blog]

# Why
1. **Zero-cost adoption path.** Because TS is a superset, teams could rename files one at a time, while Flow, Elm or ReScript required a different toolchain or language. Erasure meant no runtime lock-in.[^ts-design-goals]
2. **Structural plus unsound matched how JS is actually written.** Precise nominal typing rejected idiomatic code, and TypeScript's pragmatism let it type the existing npm ecosystem.
3. **Steward commitment and openness.** Microsoft ran TypeScript as an open-source, community-facing project (DefinitelyTyped, a public roadmap, VS Code integration). Meta ran Flow mainly for its monorepo and said so in 2021.[^flow-clarity]
4. **Tooling network effects.** The language service powered VS Code's JavaScript experience even for JS-only users, so the editor became a distribution channel.
5. **Late-era compounding.** Frameworks, runtimes, LLM training data and job postings all reinforced the incumbent.[^octoverse-2025]

# Lessons
- In ecosystem-dominated languages, *migration cost* beats *type-system quality*.
- A type checker owned by a company that does not need outside users (Flow) loses to one whose product *is* outside users.
- Erasable types leave the door open to standardisation in the host language itself (TC39 "types as comments").

# Related
- [TypeScript](/languages/typescript.md), [JavaScript](/languages/javascript.md), [Dart](/languages/dart.md), [ReScript/Reason](/languages/rescript-reason.md), [Elm](/languages/elm.md), [PureScript](/languages/purescript.md), [CoffeeScript](/languages/coffeescript.md)
- [Types as comments and type stripping](/ideas/types/types-as-comments-and-type-stripping.md), [Gradual typing for dynamic languages](/ideas/types/gradual-typing-for-dynamic-languages.md)
- [Native rewrites of tooling](/ideas/tooling-and-ecosystem/native-rewrites-of-tooling.md), [LLM impact on language adoption](/ideas/ai-and-languages/llm-impact-on-language-adoption.md)

[^ts-design-goals]: TypeScript wiki: TypeScript Design Goals — https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals
[^octoverse-2025]: GitHub blog: Octoverse 2025 — https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
[^so-2025]: Stack Overflow Developer Survey 2025: Technology — https://survey.stackoverflow.co/2025/technology
[^stateofjs-2024]: State of JavaScript 2024: Usage — https://2024.stateofjs.com/en-US/usage/
[^npm-downloads]: npm registry downloads API (typescript; flow-bin), week 2026-09-25..2026-10-01 — https://api.npmjs.org/downloads/point/last-week/typescript
[^flow-clarity]: Flow blog: Clarity on Flow's Direction and Open Source Engagement — https://flow.org/blog/2021/05/25/Clarity-on-Flows-Direction-and-Open-Source-Engagement/
[^jest-24]: Jest blog: Jest 24 — https://jestjs.io/blog/2019/01/25/jest-24-refreshing-polished-typescript-friendly
[^chromium-closure]: Chromium docs: Closure Compilation — https://chromium.googlesource.com/chromium/src.git/+/HEAD/docs/closure_compilation.md
[^devtools-ts]: Chrome for Developers: migrating DevTools to TypeScript — https://developer.chrome.com/blog/migrating-to-typescript
[^svelte-jsdoc]: DevClass: Svelte switches to JavaScript and JSDoc — https://devclass.com/2023/05/11/typescript-is-not-worth-it-for-developing-libraries-says-svelte-author-as-team-switches-to-javascript-and-jsdoc/
[^turbo-dhh]: DHH: Turbo 8 is dropping TypeScript — https://world.hey.com/dhh/turbo-8-is-dropping-typescript-70165c01
[^devclass-turbo]: DevClass: Rails creator removes TypeScript from Turbo — https://devclass.com/2023/09/07/ruby-on-rails-creator-removes-typescript-from-turbo-framework-upsets-community/
[^ts7-blog]: TypeScript blog: Announcing TypeScript 7.0 — https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/
