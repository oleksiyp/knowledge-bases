---
type: Language
title: Racket
description: "Language-oriented Scheme descendant that completed a full runtime swap to Chez Scheme (Racket CS default in 8.0, 2021), upstreamed it into Chez Scheme 10 (2024), added parallel threads (9.0, 2025) and shipped Rhombus 1.0 (2026); technically strong, still mainly an education and research language."
tags: [lisp, scheme, chez-scheme, language-oriented-programming, macros, education, rhombus]
paradigms: [functional, multi-paradigm, lisp, language-oriented]
typing: dynamic
memory_model: gc
first_released: 1995
steward: "Racket project (PLT: Northwestern, Utah, Brown, Northeastern et al.)"
governance: community
trajectory: niche
ideas: [ideas/metaprogramming/comptime-and-staged-compilation, ideas/types/gradual-typing-for-dynamic-languages, ideas/types/scala-3-and-language-redesigns]
runtimes: []
adoption_signals:
  github_stars: { value: 5217, as_of: 2026-10-03 }
era_momentum: { E1: flat, E2: up, E3: flat, E4: up }
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
    title: "cisco/ChezScheme wiki: Announcements (Chez Scheme 10.0, 2024-02-06)"
  - id: racket-90
    resource: https://blog.racket-lang.org/2025/11/racket-v9-0.html
    title: "Racket blog: Racket v9.0 (2025-11-22)"
  - id: racket-91
    resource: https://blog.racket-lang.org/2026/02/racket-v9-1.html
    title: "Racket blog: Racket v9.1 (Feb 2026)"
  - id: rhombus-10
    resource: https://blog.racket-lang.org/2026/06/rhombus-v1.0.html
    title: "Racket blog: Rhombus v1.0 (2026-06-22)"
  - id: gh-racket
    resource: https://github.com/racket/racket
    title: "GitHub: racket/racket (stars via API, 2026-10-03)"
---

# Summary
Racket spent 2018–2026 on **two big, risky internal projects, and both succeeded**. First, it replaced its C-based runtime (Racket BC) with one built on Chez Scheme. Racket CS became the default in v8.0 (Feb 2021) after a four-year effort.[^racket-80][^racket-status-2021] Racket's fork of Chez was then merged back upstream as Chez Scheme 10.0 (Feb 2024).[^chez-10] Second, it built **Rhombus**, a conventional-syntax language on the Racket platform ("as Elixir is to Erlang"). Rhombus reached 1.0 on 2026-06-22.[^rhombus-10] Racket 9.0 (Nov 2025) added true parallel threads.[^racket-90] Racket's outside influence remains academic: macro hygiene, `#lang` language-oriented programming, contracts, and Typed Racket's sound gradual typing. Industrial adoption stayed small. Verdict: **niche, technically healthy**. Rhombus is a late bet on whether syntax was what limited Lisp adoption.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-07 | Rhombus ("Racket2") effort proposed: explore non-parenthesized syntax | mixed |
| E2 | 2021-02 | Racket 8.0: Racket CS (Chez Scheme backend) becomes default [^racket-80] | + |
| E3 | 2024-02-06 | Chez Scheme 10.0 merges Racket's fork upstream [^chez-10] | + |
| E4 | 2025-11-22 | Racket 9.0: parallel threads [^racket-90] | + |
| E4 | 2026-02 | Racket 9.1: docs organized by language family, used by Rhombus [^racket-91] | + |
| E4 | 2026-06-22 | Rhombus 1.0 released [^rhombus-10] | + |

# Ideas it bet on
| Idea | Outcome for Racket |
|---|---|
| Language-oriented programming (`#lang`, hygienic macros) | Succeeded academically; ideas spread to Rust/Scala/Julia macro designs more than its syntax did |
| Rebuilding on another compiler (Chez Scheme) | Succeeded: faster, easier to maintain, upstreamed [^racket-80][^chez-10] |
| [Gradual typing](/ideas/types/gradual-typing-for-dynamic-languages.md) (Typed Racket, sound) | Research influence high; soundness costs at boundaries kept it niche, and TypeScript-style unsound gradual typing won the industry |
| Conventional syntax over Lisp core ([redesign](/ideas/types/scala-3-and-language-redesigns.md), Rhombus) | Shipped 1.0 in 2026; adoption unproven |

# What succeeded
- **Runtime replacement without breaking users.** Racket CS was compatible with existing programs, had better parallel GC and produced 10–30% smaller code.[^racket-80]
- **Giving back upstream.** Merging the fork into Chez Scheme 10 removed the cost of maintaining a fork and benefited all Chez users.[^chez-10]
- **Parallelism.** Racket 9.0's parallel threads closed a long-standing gap beyond futures and places.[^racket-90]
- **Rhombus 1.0** delivered pattern matching, a class system and extensible "shrubbery" syntax while keeping full macro power.[^rhombus-10]

# What failed or stalled
- **Industrial adoption** stayed minimal. Racket does not appear among the listed languages in the major usage surveys. It is used mainly in teaching (HtDP), PL research and DSL work; the core repository has ~5.2k GitHub stars.[^gh-racket]
- **Rhombus's long gestation** (2019 → 2026) split attention, and early community worries that Racket would be "replaced" caused friction. The project now presents the two as sibling languages.[^rhombus-10]
- **Typed Racket's sound gradual typing** carried runtime contract costs that research tried to reduce, but it never became a mainstream template.

# By era
## E1
Racket CS was in progress and Rhombus was proposed.

## E2
Racket 8.0 made CS the default, the main technical milestone of the period.

## E3
Chez Scheme 10 upstreamed Racket's changes. Rhombus continued in preview.

## E4
Racket 9.0 brought parallel threads, 9.1 added language-family docs, and Rhombus 1.0 shipped. The Rhombus announcement noted that coding agents could already write idiomatic Rhombus.[^rhombus-10]

# Lessons
- Moving onto a mature compiler (Chez) can be cheaper over the long run than maintaining your own, if you can reach behavioural parity.
- Syntax may not be the main barrier to Lisp adoption. Rhombus is the experiment that will test this in E4 and later.

# Related
- [Racket 8.0 makes Racket CS the default](/events/2021-02-racket-cs-default.md)
- [Clojure](/languages/clojure.md), [Scala 3 and language redesigns](/ideas/types/scala-3-and-language-redesigns.md)
- [Compile-time metaprogramming](/ideas/metaprogramming/comptime-and-staged-compilation.md)

[^racket-80]: Racket v8.0 — https://blog.racket-lang.org/2021/02/racket-v8-0.html
[^racket-status-2021]: Racket Compiler and Runtime Status, January 2021 — https://blog.racket-lang.org/2021/01/racket-status.html
[^chez-10]: Chez Scheme Announcements — https://github.com/cisco/ChezScheme/wiki/Announcements
[^racket-90]: Racket v9.0 — https://blog.racket-lang.org/2025/11/racket-v9-0.html
[^racket-91]: Racket v9.1 — https://blog.racket-lang.org/2026/02/racket-v9-1.html
[^rhombus-10]: Rhombus v1.0 — https://blog.racket-lang.org/2026/06/rhombus-v1.0.html
[^gh-racket]: GitHub racket/racket — https://github.com/racket/racket
