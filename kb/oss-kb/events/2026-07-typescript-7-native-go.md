---
type: Event
title: TypeScript 7.0 ships with a native Go compiler
description: Microsoft shipped TypeScript 7.0, the first release built on its Go port of the compiler (Project Corsa, announced in March 2025), with full builds roughly 8–12x faster.
event_kind: release
date: 2026-07-08
window: W3
impact: positive
projects: [projects/devtools-languages/typescript]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-ts
    resource: https://en.wikipedia.org/wiki/TypeScript
    title: "Wikipedia: TypeScript"
  - id: ts-native
    resource: https://devblogs.microsoft.com/typescript/typescript-native-port/
    title: "TypeScript blog: A 10x Faster TypeScript"
  - id: ts-devblog
    resource: https://devblogs.microsoft.com/typescript/
    title: "TypeScript devblog: Announcing TypeScript 7.0 (2026-07-08)"
    author: org:microsoft
---

# What happened
Anders Hejlsberg announced the Go port on 2025-03-11, targeting about a 10x speedup.[^ts-native][^wiki-ts] TypeScript 6.0 (2026-03-23) was the last JavaScript-based release. TypeScript 7.0 (2026-07-08) made full builds typically 8–12x faster; type-checking VS Code dropped from 125.7s to 10.6s. A stable programmatic API is deferred to 7.1.[^wiki-ts][^ts-devblog] (GA version 7.0.2; Vue, Svelte and Astro template checking waits on the 7.1 API.)

# Why it matters
It is the biggest example of JS tooling being rewritten in native code. It changes editor and CI performance for millions of developers without changing the language.

# Outcome so far
Tools that embed the compiler API are waiting for 7.1. The interim typescript-go repository has been archived.

# Related
- [TypeScript](/projects/devtools-languages/typescript.md), [Vite / Oxc](/projects/devtools-languages/vite.md)

[^wiki-ts]: Wikipedia: TypeScript — https://en.wikipedia.org/wiki/TypeScript
[^ts-native]: TypeScript blog — https://devblogs.microsoft.com/typescript/typescript-native-port/
[^ts-devblog]: Microsoft TypeScript devblog, 2026-07-08.
