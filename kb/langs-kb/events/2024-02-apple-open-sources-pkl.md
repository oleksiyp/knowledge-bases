---
type: Event
title: Apple open-sources Pkl, a configuration language
description: "On 2024-02-01 Apple released Pkl ('pickle'), a typed, validating configuration-as-code language with Java, Kotlin, Swift and Go bindings, under Apache-2.0; by 2026 it was the fastest-growing standalone config language (~11.5k GitHub stars, releases through 0.32)."
event_kind: release
date: 2024-02-01
era: E3
impact: positive
languages: [languages/kotlin, languages/swift, languages/java, languages/go]
runtimes: [runtimes/graalvm]
ideas: [ideas/tooling-and-ecosystem/configuration-languages]
tags: [pkl, apple, configuration, open-source, apache-2.0]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: pkl-intro
    resource: https://pkl-lang.org/blog/introducing-pkl.html
    title: "Pkl blog: Introducing Pkl, a programming language for configuration (2024-02-01)"
  - id: pkl-030
    resource: https://pkl-lang.org/main/current/release-notes/0.30.html
    title: "Pkl docs: Pkl 0.30 release notes (2025-11-03)"
  - id: gh-pkl
    resource: https://github.com/apple/pkl
    title: "GitHub: apple/pkl (11.5k stars; release 0.32.1 2026-07-23, via API 2026-10-03)"
---

# What happened
On 2024-02-01 Apple open-sourced Pkl under Apache-2.0. It is a configuration language that renders to JSON, YAML, XML and property lists and can be embedded through language bindings. Apple's argument was that static formats "fall short when configuration grows in complexity", while general-purpose languages "are not oriented around defining and validating data". Pkl adds classes, functions, type constraints and packages on top of a declarative core, with IDE support from launch.[^pkl-intro] The implementation runs on the JVM (Truffle/GraalVM) and ships as native binaries.

# Why it matters
It was the highest-profile entry in a crowded field (CUE, Dhall, Nickel, KCL, Jsonnet) and the first backed by a large platform vendor. Development continued after launch. Pkl 0.30 (Nov 2025) added a formatter and a binary format for bindings,[^pkl-030] 0.32.1 shipped in July 2026, and the repository reached ~11.5k stars, the most of any standalone config language.[^gh-pkl] It has not displaced YAML. Pkl adds a layer that still emits YAML, which is the core adoption problem for every configuration language.

# Related
- [Configuration languages](/ideas/tooling-and-ecosystem/configuration-languages.md)
- [Swift](/languages/swift.md), [Kotlin](/languages/kotlin.md), [GraalVM](/runtimes/graalvm.md)

[^pkl-intro]: Introducing Pkl — https://pkl-lang.org/blog/introducing-pkl.html
[^pkl-030]: Pkl 0.30 release notes — https://pkl-lang.org/main/current/release-notes/0.30.html
[^gh-pkl]: GitHub apple/pkl — https://github.com/apple/pkl
