---
type: Language
title: Hylo (formerly Val)
description: Research systems language built on mutable value semantics instead of references and a borrow checker; intellectually influential in the C++ successor debate, but in October 2026 its compiler is being rewritten and the project still says it is "not ready to be used yet." Unproven.
tags: [systems, research, value-semantics, generic-programming, memory-safety, cpp-successor]
paradigms: [systems, generic, imperative]
typing: static
memory_model: ownership
first_released: 2022
steward: Hylo project (Dimi Racordon, Dave Abrahams, academic contributors)
governance: community
trajectory: niche
ideas: [ideas/memory-safety/cpp-successor-languages, ideas/memory-safety/ownership-and-borrowing, ideas/types/linear-and-affine-types]
runtimes: []
adoption_signals:
  production_users: { value: "none; project says not ready for use", as_of: 2026-07 }
era_momentum: { E1: n/a, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: hylo-site
    resource: https://hylo-lang.org/
    title: "Hylo: The Hylo Programming Language (official site)"
  - id: hylo-intro
    resource: https://hylo-lang.org/introduction/
    title: "Hylo: Introduction to Hylo"
  - id: hylo-gh
    resource: https://github.com/hylo-lang/hylo
    title: "GitHub: hylo-lang/hylo (README: under active development, not ready to be used)"
  - id: hylo-new
    resource: https://github.com/hylo-lang/hylo-new
    title: "GitHub: hylo-lang/hylo-new (new compiler; main development target)"
  - id: hylo-rename
    resource: https://news.ycombinator.com/item?id=37122714
    title: "Hacker News: Rename 'Val' to 'Hylo' (August 2023)"
  - id: tns-hylo
    resource: https://thenewstack.io/what-you-need-to-know-about-carbon-python-and-val/
    title: "The New Stack: What You Need to Know about Carbon, Python and Hylo"
  - id: plss-2025
    resource: https://2025.ecoop.org/details/plss-2025-papers/12/Designing-Hylo-a-programming-language-for-safe-systems-programming
    title: "ECOOP/PLSS 2025: Designing Hylo, a programming language for safe systems programming"
  - id: cpponsea-2024
    resource: https://cpponsea.uk/2024/session/hylo-the-safe-systems-and-generic-programming-language-built-on-value-semantics
    title: "C++ on Sea 2024 keynote: Hylo — the safe systems and generic-programming language built on value semantics (Dave Abrahams)"
---

# Summary
Hylo (named Val until August 2023, renamed because of confusion with V, Vala and Vale) is a systems language whose memory-safety story is **mutable value semantics**: there are no first-class references at all, values are independent, and mutation is expressed through parameter conventions (`let`, `inout`, `sink`, `set`) that the compiler checks for exclusivity.[^hylo-rename][^hylo-intro] It is the most serious attempt to get Rust-class safety *without* lifetime annotations, and it drew attention in the C++ world when Dave Abrahams (of Boost and Swift's value-semantics fame) championed it, e.g. as C++ on Sea's 2024 opening keynote.[^cpponsea-2024] As of 2026 the language design has "solidified" according to its authors, but the original compiler is being superseded by a rewrite (`hylo-new`) and the project still says it is not ready to be used.[^plss-2025][^hylo-gh][^hylo-new] Verdict: **unproven** — influential as an idea, absent as a tool.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022 | Val announced publicly; implemented in Swift; mutable value semantics as core [^tns-hylo] | + |
| E3 | 2023-08 | Renamed Val → Hylo [^hylo-rename] | = |
| E3 | 2024-07 | Abrahams keynotes C++ on Sea on Hylo [^cpponsea-2024] | + |
| E4 | 2025 | PLSS 2025 paper "Designing Hylo"; C interop and debugging (DWARF) research [^plss-2025] | + |
| E4 | 2025–26 | Development shifts to new compiler `hylo-new`; "not ready to be used yet" [^hylo-new][^hylo-gh] | − |

# Ideas it bet on
| Idea | Outcome for Hylo |
|---|---|
| Mutable value semantics instead of references + borrow checker | unproven at scale; elegant in papers |
| [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md) without lifetime annotations | unproven |
| [C++ successor languages](/ideas/memory-safety/cpp-successor-languages.md) via generic programming heritage (Stepanov-style) | unproven |
| [Linear / affine-style](/ideas/types/linear-and-affine-types.md) `sink` parameters and exclusivity | shares lineage with Swift's ownership work |

# What succeeded
- **A distinct point in the design space.** Hylo showed that a lot of what Rust's lifetimes buy can come from forbidding references entirely and leaning on exclusivity — the same ideas Swift adopted piecemeal (`inout`, ownership modifiers).[^hylo-intro]
- **Academic output**: steady stream of papers (type-class coherence, C interop, debugging) and conference talks keeps the ideas in circulation.[^plss-2025]

# What failed or stalled
- **No usable compiler after ~4 years**; partial type checker and IR lowering, and now a second compiler.[^hylo-gh][^hylo-new]
- **Small, academic team** with no corporate sponsor, in a period when sponsors decided outcomes (Rust Foundation members, Google for Carbon).
- **Interop and ecosystem** — the things that decided the C++-successor race — remain research topics rather than shipped features.

# By era
## E1
- Not public.
## E2
- Val announced; strong interest from C++ and Swift communities.[^tns-hylo]
## E3
- Rename to Hylo; keynote exposure; design consolidation.[^hylo-rename][^cpponsea-2024]
## E4
- Papers and a compiler rewrite; still pre-usable.[^plss-2025][^hylo-new]

# Lessons
- Better ideas than the incumbent's are not enough: Rust's lifetime syntax is widely criticized, yet Rust won on shipping, tooling and corporate backing.
- Research languages influence mainstream ones (Swift, possibly future C++) even if they never ship — that is a legitimate, if modest, success mode.

# Related
- [Rust](/languages/rust.md), [Swift](/languages/swift.md), [Carbon](/languages/carbon.md), [Vale](/languages/vale.md), [cppfront](/languages/cppfront.md)
- [C++ successor languages](/ideas/memory-safety/cpp-successor-languages.md), [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md)

[^hylo-site]: Hylo official site — https://hylo-lang.org/
[^hylo-intro]: Hylo: Introduction to Hylo — https://hylo-lang.org/introduction/
[^hylo-gh]: GitHub: hylo-lang/hylo — https://github.com/hylo-lang/hylo
[^hylo-new]: GitHub: hylo-lang/hylo-new — https://github.com/hylo-lang/hylo-new
[^hylo-rename]: Hacker News: Rename 'Val' to 'Hylo' — https://news.ycombinator.com/item?id=37122714
[^tns-hylo]: The New Stack: What You Need to Know about Carbon, Python and Hylo — https://thenewstack.io/what-you-need-to-know-about-carbon-python-and-val/
[^plss-2025]: PLSS 2025: Designing Hylo — https://2025.ecoop.org/details/plss-2025-papers/12/Designing-Hylo-a-programming-language-for-safe-systems-programming
[^cpponsea-2024]: C++ on Sea 2024 keynote on Hylo — https://cpponsea.uk/2024/session/hylo-the-safe-systems-and-generic-programming-language-built-on-value-semantics
