---
type: Language
title: Dart
description: "Google's client-optimized language, revived from its failed 'replace JavaScript' origins as the language of Flutter. 2018–2026 brought the best-executed sound null-safety migration of any language and an early WasmGC web target, but also the cancellation of macros (January 2025) and adoption that depends on a single framework."
tags: [flutter, google, mobile, cross-platform, null-safety, wasmgc, aot, hot-reload]
paradigms: [object-oriented, multi-paradigm]
typing: static
memory_model: gc
first_released: 2011
steward: Google (Dart team)
governance: single-vendor
trajectory: stable
ideas:
  - ideas/types/null-safety
  - ideas/types/sum-types-and-pattern-matching
  - ideas/platforms-and-portability/webassembly-in-the-browser
  - ideas/tooling-and-ecosystem/hot-reload-and-live-programming
  - ideas/runtime-performance/aot-native-images
  - ideas/metaprogramming/source-generators-and-annotation-processing
  - ideas/platforms-and-portability/kotlin-multiplatform
runtimes: [runtimes/v8]
adoption_signals:
  tiobe_rank: { value: 41, as_of: 2026-09 }
  so_survey_used_pct: { value: 5.9, as_of: 2025, note: "all respondents" }
era_momentum: { E1: up, E2: up, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: dart212
    resource: https://dart.dev/blog/announcing-dart-2-12
    title: "Dart blog: Announcing Dart 2.12 — sound null safety and FFI (2021-03-03)"
    author: org:google
  - id: dart3
    resource: https://medium.com/dartlang/announcing-dart-3-53f065a10635
    title: "Dart blog: Announcing Dart 3 — 100% sound null safety, records, patterns (2023-05-10)"
    author: org:google
  - id: dart34
    resource: https://dart.dev/blog/announcing-dart-3-4
    title: "Dart blog: Announcing Dart 3.4 (WasmGC compilation stable with Flutter 3.22, 2024-05-14)"
    author: org:google
  - id: dart-wasm
    resource: https://dart.dev/web/wasm
    title: "dart.dev: WebAssembly (Wasm) compilation"
    author: org:google
  - id: macros
    resource: https://dart.dev/blog/an-update-on-dart-macros-data-serialization
    title: "Dart blog: An update on Dart macros & data serialization (2025-01-29)"
    author: org:google
  - id: dart312
    resource: https://dart.dev/blog/announcing-dart-3-12
    title: "Dart blog: Announcing Dart 3.12 (2026-05)"
    author: org:google
  - id: dart-changelog
    resource: https://dart.dev/changelog
    title: "Dart changelog (3.11 Feb 2026; 3.12 May 2026; 3.13 Aug 2026 with stable primary constructors)"
    author: org:google
  - id: reg-layoffs
    resource: https://www.theregister.com/2024/04/29/google_python_flutter_layoffs/
    title: "The Register: Google layoffs hit Python and Flutter teams (2024-04-29)"
  - id: flock
    resource: https://devclass.com/2024/10/30/flutter-forked-as-flock-developer-cites-company-wide-issues-at-google/
    title: "DevClass: Flutter forked as Flock, developer cites 'company-wide issues at Google' (2024-10-30)"
  - id: so2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow: 2025 Developer Survey — Technology"
    author: org:stack-overflow
  - id: tiobe
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index for September 2026 (Dart #41)"
    author: org:tiobe
---

# Summary
Dart is a language rescued by a framework. Launched in 2011 as a would-be JavaScript replacement with its own browser VM (an idea abandoned in 2015), it found its second life as the only language for Flutter. In 2018–2026 the Dart team executed the most ambitious type-system migration of any mainstream language. Sound null safety shipped in Dart 2.12 (March 2021); Dart 3 (May 2023) made it mandatory, and by then 99% of the top 1,000 pub.dev packages had migrated. Records, patterns and class modifiers arrived in the same release.[^dart212][^dart3] Dart 3.4 with Flutter 3.22 (May 2024) made WasmGC a stable web target, one of the first production uses of [Wasm GC](/ideas/platforms-and-portability/webassembly-in-the-browser.md).[^dart34] The counter-signals are real. Google cut Flutter/Dart staff in April 2024, a former Flutter engineer forked Flutter as "Flock" in October 2024 citing understaffing, and the flagship metaprogramming feature (macros) was cancelled in January 2025 after more than two years of work.[^reg-layoffs][^flock][^macros] Usage stayed niche outside Flutter: 5.9% in the 2025 Stack Overflow survey and #41 in TIOBE.[^so2025][^tiobe] Verdict: technically excellent, strategically tied to one framework and one company.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-12 | Flutter 1.0 makes Dart a mainstream mobile language (pre-2018 groundwork: Dart 2 sound typing) | + |
| E2 | 2021-03-03 | Dart 2.12 ships sound null safety and stable FFI (Flutter 2)[^dart212] | + |
| E3 | 2023-05-10 | Dart 3.0: null safety mandatory; records, patterns, class modifiers ([event](/events/2023-05-dart-3-sound-null-safety.md))[^dart3] | + |
| E3 | 2024-04-29 | Google layoffs touch Flutter, Dart and Python teams[^reg-layoffs] | − |
| E3 | 2024-05-14 | Dart 3.4 / Flutter 3.22: `--wasm` (WasmGC) web builds stable[^dart34] | + |
| E4 | 2024-10-30 | Flock fork of Flutter announced over understaffing concerns[^flock] | − |
| E4 | 2025-01-29 | Macros cancelled; team pivots to smaller "data" features[^macros] | − |
| E4 | 2026-02 / 2026-05 / 2026-08 | Dart 3.11, 3.12 (primary constructors experimental), 3.13 (primary constructors stable)[^dart-changelog][^dart312] | + |

# Ideas it bet on
| Idea | Outcome for Dart |
|---|---|
| [Sound null safety retrofitted](/ideas/types/null-safety.md) | Succeeded: full migration of an existing ecosystem to soundness |
| [Sum types & pattern matching](/ideas/types/sum-types-and-pattern-matching.md) | Succeeded (Dart 3 sealed classes and patterns) |
| [Wasm GC as a web target](/ideas/platforms-and-portability/webassembly-in-the-browser.md) | Succeeding: stable since 2024; still requires WasmGC-capable browsers |
| [Hot reload](/ideas/tooling-and-ecosystem/hot-reload-and-live-programming.md) | Succeeded: Flutter's signature feature, and the reason macros failed |
| Static macros with semantic introspection | Failed: cancelled 2025 |
| [Code generation](/ideas/metaprogramming/source-generators-and-annotation-processing.md) (build_runner) | Persists as the fallback after macros |

# What succeeded
- **Null-safety migration.** The team ran a staged, opt-in migration with mixed-mode programs, tooling and a hard cutover in Dart 3. It is the reference case for retrofitting soundness.[^dart212][^dart3]
- **Dart 3's modern features** (records, patterns, sealed classes) closed the gap with Kotlin and Swift.[^dart3]
- **Multi-target compilation.** One language AOT-compiles to ARM/x64, JS and WasmGC; Flutter web on Wasm showed up to ~2x rendering gains in Google's benchmarks.[^dart34][^dart-wasm]
- **Steady cadence after the macro cancellation.** Primary constructors went from experimental (3.12) to stable (3.13) in 2026.[^dart-changelog]

# What failed or stalled
- **Macros.** Deep semantic introspection at compile time regressed analysis, code completion and incremental compilation, and the team "was not confident" it could fix stateful hot reload performance in a reasonable timeframe.[^macros]
- **Life beyond Flutter.** Dart on the server and standalone CLI use stayed marginal; usage numbers track Flutter's.[^so2025]
- **Steward risk.** The 2024 layoffs and the Flock fork's complaints about review backlogs and stagnant desktop platforms show how exposed a single-vendor language is.[^reg-layoffs][^flock]

# By era
## E1
Flutter 1.0 turned Dart from a post-browser-VM afterthought into a growth language. Dart 2.x built the sound type system and AOT pipeline.
## E2
Sound null safety (2.12) and FFI. Flutter 2 added web and desktop.[^dart212]
## E3
Dart 3.0 completed null safety and added patterns.[^dart3] Layoffs, then the WasmGC web target shipped.[^reg-layoffs][^dart34]
## E4
Flock fork, macros cancelled, then incremental language work: dot shorthands, private named parameters and primary constructors.[^flock][^macros][^dart-changelog]

# Lessons
- A language can recover from a failed platform bet if a framework gives it a reason to exist, but it inherits that framework's fate.
- Sound migrations are feasible when the steward controls the whole toolchain and package ecosystem and is willing to spend years on it.
- Hot reload and IDE latency are binding constraints on metaprogramming design.

# Related
- [Kotlin](/languages/kotlin.md), [Swift](/languages/swift.md), [JavaScript](/languages/javascript.md)
- [Null safety](/ideas/types/null-safety.md), [Kotlin Multiplatform vs Flutter](/ideas/platforms-and-portability/kotlin-multiplatform.md), [WebAssembly in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md)
- [WasmGC ships in Chrome](/events/2023-10-wasmgc-ships-in-chrome.md)

[^dart212]: Dart blog: Announcing Dart 2.12 — https://dart.dev/blog/announcing-dart-2-12
[^dart3]: Dart blog: Announcing Dart 3 — https://medium.com/dartlang/announcing-dart-3-53f065a10635
[^dart34]: Dart blog: Announcing Dart 3.4 — https://dart.dev/blog/announcing-dart-3-4
[^dart-wasm]: dart.dev: WebAssembly (Wasm) compilation — https://dart.dev/web/wasm
[^macros]: Dart blog: An update on Dart macros & data serialization — https://dart.dev/blog/an-update-on-dart-macros-data-serialization
[^dart312]: Dart blog: Announcing Dart 3.12 — https://dart.dev/blog/announcing-dart-3-12
[^dart-changelog]: Dart changelog — https://dart.dev/changelog
[^reg-layoffs]: The Register: Google layoffs hit Python and Flutter teams — https://www.theregister.com/2024/04/29/google_python_flutter_layoffs/
[^flock]: DevClass: Flutter forked as Flock — https://devclass.com/2024/10/30/flutter-forked-as-flock-developer-cites-company-wide-issues-at-google/
[^so2025]: Stack Overflow: 2025 Developer Survey — https://survey.stackoverflow.co/2025/technology
[^tiobe]: TIOBE Index for September 2026 — https://www.tiobe.com/tiobe-index/
