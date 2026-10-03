---
type: Language
title: Clojure
description: "Dynamic, immutable-by-default Lisp on the JVM (plus ClojureScript and Babashka) that found a durable patron when Nubank bought Cognitect in 2020; by 2026 it is a stable, loyal, fintech-heavy niche with slow, conservative evolution and no breakout growth."
tags: [lisp, jvm, functional, dynamic, immutability, nubank, datomic, clojurescript, babashka]
paradigms: [functional, lisp, dynamic]
typing: dynamic
memory_model: gc
first_released: 2007
steward: Rich Hickey and core team, sponsored by Nubank (Cognitect)
governance: bdfl
trajectory: stable
ideas: [ideas/tooling-and-ecosystem/hot-reload-and-live-programming, ideas/types/gradual-typing-for-dynamic-languages]
runtimes: [runtimes/hotspot-openjdk, runtimes/graalvm, runtimes/v8]
adoption_signals:
  so_survey_usage_pct: { value: 1.2, as_of: 2024 }
  github_stars_clojure: { value: 10965, as_of: 2026-10-03 }
era_momentum: { E1: flat, E2: flat, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: nubank-cognitect
    resource: https://building.nu.com/nubank-acquires-cognitect-press-release/
    title: "Building Nubank: Nubank acquires Cognitect (2020-07-23)"
  - id: next-rich
    resource: https://clojure.org/news/2023/08/04/next-rich
    title: "clojure.org: (next Rich) (2023-08-04)"
  - id: datomic-free
    resource: https://blog.datomic.com/2023/04/datomic-is-free.html
    title: "Datomic blog: Datomic is Free (Apr 2023)"
  - id: clj-112
    resource: https://clojure.org/news/2024/09/05/clojure-1-12-0
    title: "clojure.org: Clojure 1.12.0 (2024-09-05)"
  - id: soc-2024
    resource: https://clojure.org/news/2024/12/02/state-of-clojure-2024
    title: "clojure.org: State of Clojure 2024 Results"
  - id: soc-2025
    resource: https://clojure.org/news/2026/02/18/state-of-clojure-2025
    title: "clojure.org: State of Clojure 2025 Results (2026-02-18)"
  - id: so-2024
    resource: https://survey.stackoverflow.co/2024/technology
    title: "Stack Overflow Developer Survey 2024: Technology"
  - id: jank-alpha
    resource: https://book.jank-lang.org/
    title: "jank: Welcome to the jank alpha"
  - id: jank-community
    resource: https://jank-lang.org/blog/2025-10-03-community/
    title: "jank blog: The jank community has stepped up! (2025-10-03)"
  - id: gh-clojure
    resource: https://github.com/clojure/clojure
    title: "GitHub: clojure/clojure (stars via API, 2026-10-03)"
---

# Summary
Clojure is a **stable niche that a single corporate patron made sustainable**. In July 2020 Nubank, the Brazilian digital bank that runs its core systems on Clojure and Datomic, acquired Cognitect, the company behind both.[^nubank-cognitect] Nubank then made Datomic free under Apache-2.0 binaries (2023)[^datomic-free] and kept paying core developers after Rich Hickey retired from commercial work in August 2023.[^next-rich] The language changed slowly and on purpose: 1.11 (2022) and 1.12 (Sept 2024, mainly Java interop).[^clj-112] Its user base is loyal and senior. In the State of Clojure 2025 survey, 71% use it at work, fintech dominates, and 70% would strongly recommend it.[^soc-2025] Usage stayed small (1.2% in Stack Overflow 2024; ~11k GitHub stars on the core repo).[^so-2024][^gh-clojure] Verdict: **stable**. Clojure has a patron, a happy core and long-lived systems, but no growth story. Its most dynamic offshoots are Babashka (scripting) and jank (native LLVM Clojure).

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-07-23 | Nubank acquires Cognitect (Clojure, Datomic) [^nubank-cognitect] | + |
| E2 | 2022-03 | Clojure 1.11 | mixed |
| E3 | 2023-04 | Datomic made free (Apache-2.0 binaries) [^datomic-free] | + |
| E3 | 2023-08-04 | Rich Hickey retires from Nubank and stays on as Clojure lead [^next-rich] | mixed |
| E3 | 2024-09-05 | Clojure 1.12.0: qualified methods, method values, functional-interface conversion [^clj-112] | + |
| E4 | 2024-12 | State of Clojure 2024: fast 1.12 uptake [^soc-2024] | + |
| E4 | 2025-12 | jank (Clojure on LLVM with C++ interop) reaches alpha [^jank-alpha][^jank-community] | + |
| E4 | 2026-02-18 | State of Clojure 2025: Babashka (60%) overtakes ClojureScript as #2 dialect; 70% use AI tools [^soc-2025] | mixed |

# Ideas it bet on
| Idea | Outcome for Clojure |
|---|---|
| Immutable persistent data structures by default | Succeeded culturally; copied by libraries (Immutable.js, Kotlin persistent collections) more than by languages |
| Hosted language (JVM/JS/CLR/GraalVM) | Succeeded: Babashka on GraalVM native image is now the #2 dialect [^soc-2025] |
| REPL-driven, [live programming](/ideas/tooling-and-ecosystem/hot-reload-and-live-programming.md) | Loved by users, hard to teach; structural editing unfamiliar to 48% of newcomers [^soc-2025] |
| Spec instead of static types | Stalled: spec 2 remained alpha through the period (unverified); no move toward static typing |
| Datomic, immutable database | Niche; made free in 2023 to widen adoption [^datomic-free] |

# What succeeded
- **Sustainability through a user-company.** Nubank's purchase, and its continued funding of Alex Miller and Fogus after Hickey's retirement, gave Clojure a stable owner that is also its biggest user.[^nubank-cognitect][^next-rich]
- **Conservative compatibility.** Code written in 2015 still runs. Upgrades are cheap, and 1.12 adoption was fast.[^soc-2024]
- **Babashka** made Clojure a practical scripting tool (60% of survey respondents use it).[^soc-2025]
- **jank** brought a native, LLVM-hosted Clojure with C++ interop, funded by Clojurists Together and community sponsorship.[^jank-community]

# What failed or stalled
- **No growth.** Usage share is ~1%. The survey population skews toward experienced developers, and fintech plus enterprise software make up most of the industry base.[^soc-2025][^so-2024]
- **Tooling onboarding.** Emacs/CIDER still leads, and newcomers struggle with structural editing.[^soc-2025]
- **Dynamic typing went against the decade's trend.** TypeScript, Python typing and Kotlin all moved developers toward static types. Clojure's answer (spec) did not stop that.
- **ClojureScript lost ground** to TypeScript as the "functional language for the browser" and fell behind Babashka in the 2025 survey.[^soc-2025]

# By era
## E1
Nubank acquired Cognitect. Clojure's institutional future was secured.

## E2
Quiet era: Clojure 1.11 shipped and adoption was flat.

## E3
Datomic became free and Hickey retired. Nubank's commitment held.

## E4
Clojure 1.12 shipped, Babashka grew, and jank reached alpha. The community is stable, senior and fintech-centred, and most use AI tools.

# Lessons
- A language owned by its largest user can be very stable, but its roadmap follows that user's needs and it does not market itself.
- Being a hosted language works: being able to run on a new host (GraalVM, LLVM) created the most vibrant parts of the ecosystem.

# Related
- [Nubank acquires Cognitect](/events/2020-07-nubank-acquires-cognitect.md)
- [Racket](/languages/racket.md), [Scala](/languages/scala.md), [Elixir](/languages/elixir.md)
- [GraalVM](/runtimes/graalvm.md), [HotSpot/OpenJDK](/runtimes/hotspot-openjdk.md)

[^nubank-cognitect]: Nubank acquires Cognitect — https://building.nu.com/nubank-acquires-cognitect-press-release/
[^next-rich]: (next Rich) — https://clojure.org/news/2023/08/04/next-rich
[^datomic-free]: Datomic is Free — https://blog.datomic.com/2023/04/datomic-is-free.html
[^clj-112]: Clojure 1.12.0 — https://clojure.org/news/2024/09/05/clojure-1-12-0
[^soc-2024]: State of Clojure 2024 Results — https://clojure.org/news/2024/12/02/state-of-clojure-2024
[^soc-2025]: State of Clojure 2025 Results — https://clojure.org/news/2026/02/18/state-of-clojure-2025
[^so-2024]: Stack Overflow Developer Survey 2024 — https://survey.stackoverflow.co/2024/technology
[^jank-alpha]: jank alpha book — https://book.jank-lang.org/
[^jank-community]: The jank community has stepped up! — https://jank-lang.org/blog/2025-10-03-community/
[^gh-clojure]: GitHub clojure/clojure — https://github.com/clojure/clojure
