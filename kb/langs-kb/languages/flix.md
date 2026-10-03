---
type: Language
title: Flix
description: Academic JVM language from Aarhus University that combines functional, imperative and logic (first-class Datalog) programming with a precise effect system and, since the mid-2020s, user-defined effects and handlers. It ships often and is well engineered, but it has little adoption outside research.
tags: [research, jvm, effects, datalog, aarhus]
paradigms: [functional, imperative, logic]
typing: static
memory_model: gc
first_released: 2015
steward: Magnus Madsen / Aarhus University and open-source contributors
governance: community
trajectory: niche
ideas: [ideas/types/algebraic-effects-and-handlers, ideas/types/functional-logic-programming]
runtimes: [runtimes/hotspot-openjdk]
adoption_signals:
  github_stars: { value: 2749, as_of: 2026-10-03 }
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: flix-releases
    resource: https://github.com/flix/flix/releases
    title: "flix/flix GitHub releases (v0.77.0, 2026-09-28; via GitHub API)"
  - id: flix-faq
    resource: https://flix.dev/faq/
    title: "flix.dev: FAQ"
  - id: flix-effects-doc
    resource: https://doc.flix.dev/effects-and-handlers.html
    title: "Programming Flix: Effects and Handlers"
  - id: flix-lambdadays
    resource: https://flix.dev/talks/lambdadays2025.pdf
    title: "Magnus Madsen: An Introduction to Effectful Programming in Flix (Lambda Days 2025)"
  - id: flix-principles
    resource: https://dl.acm.org/doi/pdf/10.1145/3563835.3567661
    title: "Madsen: The Principles of the Flix Programming Language (Onward! 2022)"
  - id: flix-datalog
    resource: https://dl.acm.org/doi/10.1145/3763126
    title: "Flix: A Design for Language-Integrated Datalog (ACM)"
  - id: infoq-flix
    resource: https://www.infoq.com/news/2022/02/flix-programming-language
    title: "InfoQ: Flix programming language (2022)"
---

# Summary
Flix is a carefully designed research language on the JVM. Its distinguishing features are a polymorphic effect system that separates pure from impure code, region-based local mutation, first-class Datalog, and user-defined **effects and handlers**.[^flix-effects-doc][^flix-principles][^flix-datalog] Its whole-program, monomorphising compiler gives performance "comparable to that of Java and Scala".[^flix-faq] Releases come every few weeks. v0.76 (Sept 2026) added a GraalVM native-image build of the compiler, and v0.77.0 (2026-09-28) added experimental polymorphic effects.[^flix-releases] Adoption is minimal, with about 2.7K GitHub stars. **Verdict: niche. It is a well-run test of whether "effect-oriented programming" can be made ergonomic on a mainstream VM, but it has not yet broken out.**

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022-02 | InfoQ coverage puts Flix in front of a wider audience [^infoq-flix] | + |
| E3 | 2022-12 | "Principles of Flix" paper (Onward! 2022) [^flix-principles] | + |
| E4 | 2025 | Lambda Days talk: Flix as an "effect-oriented" language with handlers [^flix-lambdadays] | + |
| E4 | 2026-09-13 | v0.76.0: GraalVM native compiler, new Java resolution [^flix-releases] | + |
| E4 | 2026-09-28 | v0.77.0: experimental polymorphic effects [^flix-releases] | + |

# Ideas it bet on
| Idea | Outcome for Flix |
|---|---|
| [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md) | Implemented with a typed effect system; ergonomics still being refined |
| [Functional-logic programming](/ideas/types/functional-logic-programming.md) (first-class Datalog) | Unique and published, but rarely used [^flix-datalog] |
| Purity/effect tracking on the JVM | Works, and Java interop is wrapped in effects |

# What succeeded
- A steady release cadence and serious engineering (LSP, package manager, native-image compiler) for an academic project.[^flix-releases]
- It shows that typed effects and handlers can coexist with Java interop.[^flix-effects-doc]

# What failed or stalled
- **No production adopters** are publicly known, and it has no corporate backing.
- It sits in the same space as Scala 3, Kotlin and Koka, so its differentiation (Datalog, effect polymorphism) appeals mainly to PL enthusiasts.

# By era
## E1
Datalog-centric research language.[^flix-principles]
## E2
Became a general-purpose language and got its first wider press.[^infoq-flix]
## E3
Effect system with regions; design principles published.[^flix-principles]
## E4
Effects and handlers became the focus, along with the native compiler and polymorphic effects.[^flix-lambdadays][^flix-releases]

# Lessons
- Good research languages can ship like products. Without a "killer use" or a sponsor, polish alone does not bring adoption.

# Related
- [Koka](/languages/koka.md), [Scala](/languages/scala.md), [Unison](/languages/unison.md)
- [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md)

[^flix-releases]: flix/flix releases — https://github.com/flix/flix/releases
[^flix-faq]: Flix FAQ — https://flix.dev/faq/
[^flix-effects-doc]: Programming Flix: Effects and Handlers — https://doc.flix.dev/effects-and-handlers.html
[^flix-lambdadays]: Effectful Programming in Flix (Lambda Days 2025) — https://flix.dev/talks/lambdadays2025.pdf
[^flix-principles]: The Principles of the Flix Programming Language — https://dl.acm.org/doi/pdf/10.1145/3563835.3567661
[^flix-datalog]: Flix: A Design for Language-Integrated Datalog — https://dl.acm.org/doi/10.1145/3763126
[^infoq-flix]: InfoQ: Flix — https://www.infoq.com/news/2022/02/flix-programming-language
