---
type: Event
title: Racket 8.0 makes the Chez Scheme backend (Racket CS) the default
description: "Racket v8.0 (Feb 2021) completed a four-year rebuild of Racket on Chez Scheme, replacing the C-based runtime; Racket's Chez fork was later merged upstream as Chez Scheme 10 (Feb 2024) — a rare successful whole-runtime swap."
event_kind: release
date: 2021-02-13
era: E2
impact: positive
languages: [languages/racket]
runtimes: []
ideas: []
tags: [racket, chez-scheme, runtime-replacement, compilers]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: racket-80
    resource: https://blog.racket-lang.org/2021/02/racket-v8-0.html
    title: "Racket blog: Racket v8.0 (Feb 2021)"
  - id: racket-status-2021
    resource: https://blog.racket-lang.org/2021/01/racket-status.html
    title: "Racket blog: Racket Compiler and Runtime Status, January 2021"
  - id: chez-10
    resource: https://github.com/cisco/ChezScheme/wiki/Announcements
    title: "cisco/ChezScheme wiki: Announcements (Chez Scheme 10.0.0, 2024-02-06)"
---

# What happened
Racket v8.0, released in February 2021, was the first release with Racket CS as the default implementation. It had been "a 4-year effort involving the entire Racket community". Racket CS was faster, easier to maintain and compatible with existing programs, with better parallel GC and 10–30% smaller generated code. The old C runtime (Racket BC) remained available as a fallback.[^racket-80][^racket-status-2021] In February 2024 Chez Scheme 10.0.0 merged all of Racket's changes to its Chez fork (new ISAs and ABIs, optimizations, build system) back upstream.[^chez-10]

# Why it matters
It is a clean example of a language moving onto a mature compiler instead of maintaining its own, achieving behavioural parity, and then removing the fork cost by contributing upstream. That foundation made Racket 9.0's parallel threads (2025) and Rhombus 1.0 (2026) feasible for a small academic team.

# Related
- [Racket](/languages/racket.md)

[^racket-80]: Racket v8.0 — https://blog.racket-lang.org/2021/02/racket-v8-0.html
[^racket-status-2021]: Racket Compiler and Runtime Status, January 2021 — https://blog.racket-lang.org/2021/01/racket-status.html
[^chez-10]: Chez Scheme Announcements — https://github.com/cisco/ChezScheme/wiki/Announcements
