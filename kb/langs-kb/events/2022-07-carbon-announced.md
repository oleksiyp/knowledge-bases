---
type: Event
title: Google unveils Carbon as an experimental C++ successor
description: Chandler Carruth introduced Carbon at CppNorth (Toronto, July 2022) as an experimental successor to C++ built around bidirectional C++ interop. Four years later it has not shipped its 0.1 evaluation release, which slipped to end-2026 at the earliest after memory safety was added to its scope.
event_kind: announcement
date: 2022-07-19
era: E2
impact: mixed
languages: [languages/carbon, languages/cpp]
runtimes: []
ideas: [ideas/memory-safety/cpp-successor-languages]
tags: [carbon, google, cpp-successor, announcement]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: carbon-gh
    resource: https://github.com/carbon-language/carbon-lang
    title: "GitHub: carbon-language/carbon-lang (README: experimental successor to C++)"
  - id: carbon-roadmap
    resource: https://docs.carbon-lang.dev/docs/project/roadmap.html
    title: "Carbon Language: Roadmap (0.1 at end of 2026 at the soonest)"
  - id: carbon-safety-pr
    resource: https://github.com/carbon-language/carbon-lang/pull/4880
    title: "carbon-lang PR #4880: Safety milestones and a 2025 roadmap (Chandler Carruth)"
---

# What happened
In July 2022, at the CppNorth conference in Toronto, Google engineer Chandler Carruth presented Carbon, an open-source "experimental successor to C++".[^carbon-gh] Its pitch was that C++ could not evolve fast enough under ISO's backward-compatibility constraints. Carbon would instead offer modern generics, a cleaner grammar and *bidirectional* interop with existing C++, in the way Kotlin relates to Java and TypeScript to JavaScript. Carbon chose not to be a Rust-like clean break.

The project published a roadmap: a 0.1 evaluation language, then 1.0 after 2028. In early 2025 the team made memory safety part of the 0.1 milestone. The roadmap now says "the end of 2026 is now the *soonest* that 0.1 could realistically be ready to ship" and calls that goal "very ambitious".[^carbon-roadmap][^carbon-safety-pr]

# Why it matters
Carbon was the best-resourced of the [C++ successor languages](/ideas/memory-safety/cpp-successor-languages.md) and shaped the 2022–2023 discourse. Herb Sutter's [cppfront](/languages/cppfront.md) appeared two months later. By 2026, though, it was still nightly-only, while Rust took the "new memory-safe systems code" niche and C++ itself pursued [hardening and profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md). The slip shows the cost of a "design the interop first" strategy: the regulatory demand for memory safety arrived before the language did, and Carbon had to re-plan around it.

# Related
- [Carbon](/languages/carbon.md), [C++](/languages/cpp.md)
- [C++ successor languages](/ideas/memory-safety/cpp-successor-languages.md)
- [Safe C++ abandoned in favour of profiles](/events/2025-09-safe-cpp-abandoned.md)

[^carbon-gh]: GitHub: carbon-language/carbon-lang — https://github.com/carbon-language/carbon-lang
[^carbon-roadmap]: Carbon Language: Roadmap — https://docs.carbon-lang.dev/docs/project/roadmap.html
[^carbon-safety-pr]: carbon-lang PR #4880: Safety milestones and a 2025 roadmap — https://github.com/carbon-language/carbon-lang/pull/4880
