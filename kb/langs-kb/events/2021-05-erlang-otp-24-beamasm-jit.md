---
type: Event
title: Erlang/OTP 24 ships the BeamAsm JIT
description: OTP 24, released 2021-05-12, made BeamAsm (a template JIT for x86-64 and AArch64) the default execution engine for Erlang, Elixir and Gleam. It ended about a decade of failed BEAM JIT attempts and arrived with much clearer error messages.
event_kind: release
date: 2021-05-12
era: E2
impact: positive
languages: [languages/erlang, languages/elixir, languages/gleam]
runtimes: [runtimes/beam]
ideas: [ideas/concurrency/actor-model]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: otp24-highlights
    resource: https://www.erlang.org/blog/my-otp-24-highlights/
    title: "Erlang/OTP blog: My OTP 24 highlights"
    author: org:ericsson
  - id: jit-first-look
    resource: https://www.erlang.org/blog/a-first-look-at-the-jit/
    title: "Erlang/OTP blog: A first look at the JIT (2020-11-03)"
    author: org:ericsson
---

# What happened
Ericsson's OTP team released Erlang/OTP 24 on 2021-05-12. It had more than 1,400 commits from 60+ external contributors.[^otp24-highlights] Its headline was **BeamAsm**, a JIT that translates each BEAM instruction to native code at load time using AsmJit. The team had previewed the design in November 2020 and targeted x86-64 and AArch64, with other platforms keeping the interpreter.[^jit-first-look] Because the JIT emits native code, standard tools such as Linux `perf` can profile Erlang code. The same release added EEP-54 error messages that say *which* argument was bad and why, column numbers in compiler errors, process aliases (EEP-53), and a socket backend for `gen_tcp`.[^otp24-highlights]

# Why it matters
- It removed the BEAM's longest-standing performance complaint without changing semantics, so every Erlang, Elixir and Gleam program got faster for free.
- It is a case study in choosing a modest design. Earlier, more ambitious BEAM JIT projects (HiPE-style native compilation and tracing JITs) never became the default. A simple template JIT shipped and stuck.[^jit-first-look]
- It started a run of yearly modernisation releases (OTP 25–29) that kept the BEAM competitive.

# Related
- [BEAM](/runtimes/beam.md), [Erlang](/languages/erlang.md), [Elixir](/languages/elixir.md)
- [Actor model](/ideas/concurrency/actor-model.md)
- [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md)

[^otp24-highlights]: Erlang/OTP blog: My OTP 24 highlights — https://www.erlang.org/blog/my-otp-24-highlights/
[^jit-first-look]: Erlang/OTP blog: A first look at the JIT — https://www.erlang.org/blog/a-first-look-at-the-jit/
