---
type: Runtime
title: Hermes
description: Meta's mobile-first JavaScript engine that precompiles to bytecode and skips the JIT; it displaced JavaScriptCore as React Native's default (2022) and became the most successful "AOT bytecode, no JIT" bet of the period, while its typed native-compilation sequel (Static Hermes) folded into Hermes V1 (default in 2026) without yet proving typed-JS-to-native at scale.
tags: [javascript, react-native, meta, mobile, bytecode, aot, static-hermes, no-jit]
runtime_kind: js-runtime
languages: [languages/javascript, languages/typescript]
steward: Meta
governance: single-vendor
first_released: 2019
trajectory: growing
ideas: [ideas/runtime-performance/js-engine-tiering, ideas/types/types-as-comments-and-type-stripping, ideas/platforms-and-portability/js-runtime-competition, ideas/runtime-performance/startup-snapshotting]
adoption_signals:
  react_native_default_engine: { value: "Hermes V1", as_of: 2026-02, note: "default since RN 0.70 (2022); V1 default from RN 0.84" }
era_momentum: { E1: up, E2: up, E3: flat, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: fb-hermes
    resource: https://engineering.fb.com/2019/07/12/android/hermes/
    title: "Engineering at Meta: Hermes — an open source JavaScript engine optimized for mobile apps (2019-07-12)"
    author: org:meta
  - id: rn-hermes-2019
    resource: https://reactnative.dev/blog/2019/07/17/hermes
    title: "React Native blog: Meet Hermes, a new JavaScript engine optimized for React Native (2019-07-17)"
    author: org:meta
  - id: rn-070
    resource: https://reactnative.dev/blog/2022/09/05/version-070
    title: "React Native blog: Announcing React Native 0.70 — Hermes as default engine (2022-09-05)"
    author: org:meta
  - id: static-hermes
    resource: https://www.react-native.eu/talks/tzvetan-mikov-static-hermes-the-next-generation-of-hermes
    title: "React Native EU 2023: Tzvetan Mikov — Static Hermes, the Next Generation of Hermes"
  - id: hn-static
    resource: https://news.ycombinator.com/item?id=37459829
    title: "Hacker News: Static Hermes — compile JavaScript to speed it up 300x (in microbenchmarks), Sept 2023"
  - id: rn-079
    resource: https://reactnative.dev/blog/2025/04/08/react-native-0.79
    title: "React Native blog: React Native 0.79 (JSC moves to a community package; 2025-04-08)"
    author: org:meta
  - id: rn-084
    resource: https://reactnative.dev/blog/2026/02/11/react-native-0.84
    title: "React Native blog: React Native 0.84 — Hermes V1 by default (2026-02-11)"
    author: org:meta
  - id: mikov-2024
    resource: https://speakerdeck.com/tmikov2023/optimizing-with-static-hermes-chain-react-2024
    title: "Tzvetan Mikov: Optimizing with Static Hermes (Chain React 2024 slides)"
---

# Summary
Hermes is the success story for an unfashionable idea: give up the JIT. Meta open-sourced it on 2019-07-12 as a small engine that compiles JavaScript to bytecode **at build time**, so a React Native app ships bytecode, maps it from disk and starts without parsing or JIT warm-up — the right trade-off for low-end Android phones and for iOS, where third-party JITs are forbidden.[^fb-hermes][^rn-hermes-2019] React Native 0.70 (September 2022) made Hermes the default, React Native 0.79 (April 2025) pushed JavaScriptCore out of core into a community package, and React Native 0.84 (February 2026) made the rebuilt **Hermes V1** the default on iOS and Android.[^rn-070][^rn-079][^rn-084] The more ambitious sequel — Static Hermes, announced September 2023, compiling *soundly typed* TypeScript/Flow to native code — produced eye-catching microbenchmarks but, as of 2026, ships only as compiler/VM improvements inside Hermes V1 rather than as a general typed-JS-to-native path (unverified whether native compilation is used in production apps).[^static-hermes][^hn-static][^rn-084] Verdict: growing within its niche; it is effectively React Native's runtime.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-07-12 | Hermes open-sourced at Chain React (MIT), Android-only at first [^fb-hermes][^rn-hermes-2019] | + |
| E2 | 2022-09-05 | React Native 0.70 makes Hermes the default engine [^rn-070] | + |
| E3 | 2023-09 | Static Hermes announced at React Native EU: optional AOT native compilation of soundly typed JS [^static-hermes][^hn-static] | mixed |
| E3 | 2024 | Static Hermes talks show native FFI and typed-code speedups, still "not ready for general use" [^mikov-2024] | mixed |
| E4 | 2025-04-08 | React Native 0.79: JSC moves to `@react-native-community/javascriptcore`, to be removed from core [^rn-079] | + |
| E4 | 2025-10 | Hermes V1 offered as an experimental opt-in in React Native 0.82 [^rn-084] | + |
| E4 | 2026-02-11 | React Native 0.84 ships Hermes V1 by default on iOS and Android [^rn-084] | + |

# Ideas it bet on
| Idea | Outcome for Hermes |
|---|---|
| AOT bytecode, no JIT (a variant of [JS engine tiering](/ideas/runtime-performance/js-engine-tiering.md)) | succeeded for mobile startup and memory |
| Engine co-designed with one framework (React Native) | succeeded — but couples its fate to RN |
| Using type annotations for speed (Static Hermes; contrast [types as comments](/ideas/types/types-as-comments-and-type-stripping.md)) | unproven |
| Precompiled heap/bytecode for fast start (cf. [startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md)) | succeeded |

# What succeeded
- **Startup over peak throughput.** Meta's launch post framed the problem as time-to-interactive, APK size and memory on mass-market Android; precompiled bytecode and a GC tuned for mobile addressed exactly those.[^fb-hermes]
- **Owning the stack.** Because Meta controls both React Native and Hermes, it could make Hermes the default, add features React Native needed, and finally drop JSC from core.[^rn-070][^rn-079]
- **Non-disruptive upgrade.** Hermes V1 reached all apps already using Hermes "with no configuration changes", the same flag-free rollout pattern V8 used for its new tiers.[^rn-084]

# What failed or stalled
- **Static Hermes as a language bet.** Compiling soundly typed JS to native is attractive, but it requires sound types (TypeScript is deliberately unsound) and a subset of the language; two years after the 2023 announcement it surfaced as Hermes V1 VM/compiler gains, not as a widely used native-compilation mode.[^static-hermes][^rn-084]
- **No life outside React Native.** Unlike QuickJS or V8, Hermes has little embedding use beyond RN; its spec coverage historically lagged (e.g. features like `with` and some ES2015+ semantics arrived late), limiting it as a general engine (detail unverified for 2026).
- **Peak performance ceiling.** Without a JIT, CPU-heavy JS is slower than in JIT engines; the bet works only because mobile UI code is startup- and memory-bound.

# By era
## E1
- Open-sourced July 2019 for Android React Native.[^fb-hermes]
## E2
- Hermes default in React Native 0.70 (September 2022).[^rn-070]
## E3
- Static Hermes announced (September 2023) and demoed through 2024.[^static-hermes][^mikov-2024]
## E4
- JSC leaves RN core (0.79); Hermes V1 opt-in (0.82) then default (0.84, February 2026).[^rn-079][^rn-084]

# Lessons
- "No JIT" is a legitimate design point when startup, memory and platform rules (iOS W^X) dominate.
- Vertical integration of framework and engine can beat a better general-purpose engine.
- Using types for performance needs soundness; mainstream TypeScript's unsound design limits that path.

# Related
- [JavaScriptCore](/runtimes/javascriptcore.md), [V8](/runtimes/v8.md), [QuickJS](/runtimes/quickjs.md)
- [JS engine tiering](/ideas/runtime-performance/js-engine-tiering.md), [Types as comments and type stripping](/ideas/types/types-as-comments-and-type-stripping.md)
- [Hermes open-sourced](/events/2019-07-hermes-open-sourced.md), [TypeScript](/languages/typescript.md), [JavaScript](/languages/javascript.md)

[^fb-hermes]: Engineering at Meta: Hermes — https://engineering.fb.com/2019/07/12/android/hermes/
[^rn-hermes-2019]: React Native blog: Meet Hermes — https://reactnative.dev/blog/2019/07/17/hermes
[^rn-070]: React Native blog: Announcing React Native 0.70 — https://reactnative.dev/blog/2022/09/05/version-070
[^static-hermes]: React Native EU 2023: Static Hermes — https://www.react-native.eu/talks/tzvetan-mikov-static-hermes-the-next-generation-of-hermes
[^hn-static]: Hacker News: Static Hermes — https://news.ycombinator.com/item?id=37459829
[^rn-079]: React Native blog: React Native 0.79 — https://reactnative.dev/blog/2025/04/08/react-native-0.79
[^rn-084]: React Native blog: React Native 0.84 — https://reactnative.dev/blog/2026/02/11/react-native-0.84
[^mikov-2024]: Tzvetan Mikov: Optimizing with Static Hermes (Chain React 2024) — https://speakerdeck.com/tmikov2023/optimizing-with-static-hermes-chain-react-2024
