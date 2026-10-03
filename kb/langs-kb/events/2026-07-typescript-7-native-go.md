---
type: Event
title: TypeScript 7.0 ships with a native Go compiler
description: Microsoft shipped TypeScript 7.0, the first release built on its Go port of the compiler (Project Corsa, announced March 2025), with full builds typically 8–12x faster; the stable programmatic API was deferred to 7.1.
event_kind: release
date: 2026-07-08
era: E4
impact: positive
languages: [languages/typescript, languages/go, languages/javascript]
runtimes: []
ideas: [ideas/types/typescript-structural-typing-wins, ideas/tooling-and-ecosystem/native-rewrites-of-tooling]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: ts-native
    resource: https://devblogs.microsoft.com/typescript/typescript-native-port/
    title: "TypeScript blog: A 10x Faster TypeScript (2025-03-11)"
    author: org:microsoft
  - id: ts6
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/
    title: "TypeScript blog: Announcing TypeScript 6.0 (2026-03-23)"
    author: org:microsoft
  - id: ts7
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/
    title: "TypeScript blog: Announcing TypeScript 7.0 (2026-07-08)"
    author: org:microsoft
---

# What happened
On 2025-03-11 Anders Hejlsberg announced a port of the TypeScript compiler and language service from TypeScript to Go, targeting about a 10x speedup.[^ts-native] The team chose a near line-by-line port over a redesign. That preserved semantics and made Go, with its GC and a structure close to the existing code, a better fit than Rust. TypeScript 6.0 (2026-03-23) was the last JavaScript-based compiler and served as a deprecation bridge, making strict mode the default.[^ts6] TypeScript 7.0 shipped on 2026-07-08. Microsoft reported full builds typically 8–12x faster: type-checking VS Code dropped from 125.7s to 10.6s, and Sentry from 139.8s to 15.7s.[^ts7] A stable programmatic API was deferred to 7.1, so tools that embed the compiler (Vue, Svelte and Angular template checking) stayed on 6.0 for now.[^ts7]

# Why it matters
By 2026 TypeScript had won typed JavaScript so thoroughly that its main problem was its own speed at scale. The port is the largest example of the 2020s trend of rewriting JavaScript tooling in native languages (esbuild, SWC, Rolldown, Oxc, Biome). Choosing Go over Rust was a pragmatic call, and it delivered. The deferred API shows the cost of native rewrites: the ecosystem that built on the JS-hosted compiler has to wait.

# Related
- [TypeScript](/languages/typescript.md), [Go](/languages/go.md)
- [Why TypeScript's structural typing won](/ideas/types/typescript-structural-typing-wins.md), [Native rewrites of tooling](/ideas/tooling-and-ecosystem/native-rewrites-of-tooling.md)

[^ts-native]: TypeScript blog: A 10x Faster TypeScript — https://devblogs.microsoft.com/typescript/typescript-native-port/
[^ts6]: TypeScript blog: Announcing TypeScript 6.0 — https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/
[^ts7]: TypeScript blog: Announcing TypeScript 7.0 — https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/
