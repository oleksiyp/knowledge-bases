---
type: Executive Summary
title: "Programming Languages & Runtimes, 2018–2026: Executive Summary (draft)"
description: "Draft synthesis while research is still running. Incumbents absorbed challengers' ideas. Platform owners decided adoption more than technical merit did. Compatible, incremental changes beat clean breaks. Several heavily hyped ideas (server-side Wasm, edge rendering, sweeping language redesigns) stalled or reversed."
tags: [summary, languages, runtimes]
status: draft
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
---

# Status

This is an early draft. It is based on the first completed research slices: managed languages
and VMs, JavaScript and WebAssembly, and functional and research languages. The other slices,
plus area reviews, themes, era reviews, lessons and a verification pass, will replace it.
Each linked concept cites its own sources.

# Early findings

## Incumbents absorbed the challengers' ideas
- [Node.js](/runtimes/nodejs.md) took type stripping, `require(esm)` and a permission model from
  [Deno](/runtimes/deno.md) and [Bun](/runtimes/bun.md), and kept its dominant usage. See
  [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md).
- Java added [virtual threads](/ideas/concurrency/virtual-threads.md) and
  [pattern matching](/ideas/types/sum-types-and-pattern-matching.md). That reduced the case for
  JVM alternatives and actor libraries ([actor model](/ideas/concurrency/actor-model.md)).
- [Null safety](/ideas/types/null-safety.md) and sum types became table stakes across Kotlin,
  C#, Dart, Swift and Java.

## Platform owners decided adoption more than capability did
- [Kotlin](/languages/kotlin.md) won Android after Google's 2019 "Kotlin-first" decision.
- [TypeScript](/languages/typescript.md) won outright. The reasons were a cheap migration path
  and deliberately unsound types, not type theory
  ([why structural typing won](/ideas/types/typescript-structural-typing-wins.md)).
- [Lean](/languages/lean.md) became the shared verifier of formal mathematics and of AI provers,
  backed by one library and a funded team
  ([dependent types and proof assistants](/ideas/types/dependent-types-and-proof-assistants.md)).

## Compatible evolution beat clean breaks
- Java startup caching ([startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md))
  won for mainstream use, while separate native images
  ([AOT native images](/ideas/runtime-performance/aot-native-images.md)) remained niche.
- [Elixir's set-theoretic types](/ideas/types/set-theoretic-types.md) and
  [OCaml 5](/languages/ocaml.md) added major features without breaking existing code.
- [Scala 3](/ideas/types/scala-3-and-language-redesigns.md) and the first
  [Swift 6 concurrency](/ideas/concurrency/data-race-safety-in-types.md) defaults show what hard
  breaks cost.

## Hype that stalled or reversed
- [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md) as "the next
  containers" failed. [Wasm in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md)
  succeeded in niches and did not replace JavaScript.
- Moving rendering to [edge isolates](/ideas/platforms-and-portability/edge-isolates.md) was
  partly reversed, although Cloudflare Workers grew.
- Many big TC39 proposals stalled or were withdrawn
  ([TC39 proposal outcomes](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md)).
- [Valhalla value types](/ideas/runtime-performance/value-types.md) were still unfinished after
  more than a decade.
- Viral research launches such as [Bend/HVM](/languages/bend-hvm.md) did not survive benchmarks.

# Browse

- [Ideas](/ideas/), [Languages](/languages/), [Runtimes](/runtimes/), [Events](/events/)
- [Methodology](/references/methodology.md)
