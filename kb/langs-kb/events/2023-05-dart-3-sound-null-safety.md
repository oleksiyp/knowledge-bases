---
type: Event
title: Dart 3 ships 100% sound null safety, records and patterns
description: Google's Dart 3 dropped unsound (pre-null-safety) code entirely after a roughly three-year migration and added records, patterns and class modifiers, completing a rare retrofit of sound null safety onto an existing language.
event_kind: release
date: 2023-05-10
era: E3
impact: positive
languages: [languages/dart]
runtimes: []
ideas: [ideas/types/null-safety, ideas/types/sum-types-and-pattern-matching, ideas/platforms-and-portability/webassembly-in-the-browser]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: dart3
    resource: https://dart.dev/blog/announcing-dart-3
    title: "Dart blog: Announcing Dart 3 (2023-05-10)"
    author: org:google
---

# What happened
Google announced Dart 3 at Google I/O on 2023-05-10. Dart now required 100% sound null safety: code that had not migrated no longer compiled.[^dart3] Before the cut, 99% of the top 1,000 pub.dev packages already supported null safety. The work started with a technical preview in July 2020 and opt-in sound mode in Dart 2.12.[^dart3] The release also added records, patterns with exhaustive `switch` over sealed hierarchies, and class modifiers (`interface`, `base`, `final`, `sealed`). It named WebAssembly compilation as the next platform goal.[^dart3]

# Why it matters
Dart is the clearest success story for retrofitting *sound* null safety onto an existing language. TypeScript, Kotlin-on-Java and C# nullable reference types all accept unsoundness at boundaries. Dart could make a hard cut because one steward (Google) controls the language, the main framework (Flutter) and the package registry. It also staged the change: opt-in first, then a mixed-mode period, then a forced cutover once the ecosystem was ready. Dart's wider fate is tied to Flutter. Outside Flutter it has no meaningful adoption. Its Wasm target depends on WasmGC (Chrome 119, October 2023).

# Related
- [Dart](/languages/dart.md)
- [Null safety](/ideas/types/null-safety.md), [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md)
- [WasmGC ships in Chrome](/events/2023-10-wasmgc-ships-in-chrome.md)

[^dart3]: Dart blog: Announcing Dart 3 — https://dart.dev/blog/announcing-dart-3
