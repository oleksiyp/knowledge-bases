---
type: Idea
title: Language editions and compatible evolution
description: Opt-in editions succeeded in Rust; extension bundles in GHC solve a narrower problem. Migration tools
  and cross-version interoperability matter more than edition names.
area: tooling-and-ecosystem
tags:
- tooling-and-ecosystem
outcome: succeeded
maturity_2026: adopted
languages:
- languages/rust
- languages/haskell
- languages/python
runtimes: []
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: rust-editions
  title: 'Rust Edition Guide: What are editions?'
  resource: https://doc.rust-lang.org/edition-guide/editions/
- id: rust2024
  title: Rust 1.85.0 and Rust 2024, 20 February 2025
  resource: https://blog.rust-lang.org/2025/02/20/Rust-1.85.0.html
- id: python2
  title: 'Python.org: Sunsetting Python 2'
  resource: https://www.python.org/doc/sunset-python-2/
- id: ghc-editions
  title: 'GHC Users Guide: Controlling editions and extensions'
  resource: https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/control.html
---

# Summary
**Verdict: succeeded in Rust, with limits on what can change.** Editions let a crate adopt new syntax or semantics while its dependencies remain on older editions. Rust 2024 stabilized with Rust 1.85 on 20 February 2025: the edition label is not its shipping year.[^rust-editions][^rust2024]

# The idea
Separate a language's compatibility mode from its compiler release. Developers opt into a versioned set of changes; one toolchain still understands old code. A migration is easier if independently maintained dependencies need not move together. This is the principal difference between a Rust edition and a runtime-wide compatibility break.[^rust-editions]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018 | Rust 2018 provides a second edition | + [^rust-editions] |
| E1 | 2020-01-01 | Python 2 support ends | mixed [^python2] |
| E2 | 2021 | Rust 2021 continues the edition model | + [^rust-editions] |
| E3 | GHC 9.10.1 | GHC2024 extension bundle becomes available | + [^ghc-editions] |
| E4 | 2025-02-20 | Rust 2024 stabilizes | + [^rust2024] |

# Where it succeeded
Rust's ability to mix editions in one dependency graph makes migration a package-level decision. Automated migration assistance reduces the work, although reviewing behavioral changes remains necessary.[^rust-editions][^rust2024]

GHC2021 and GHC2024 provide named sets of extensions instead of requiring every project to assemble its own baseline. GHC allows a package or module to declare its edition explicitly.[^ghc-editions]

# Where it failed or stalled
GHC cautions that its extension collections do not offer all the stability guarantees of the Haskell standards; extension semantics can still change. A named bundle alone does not freeze a language.[^ghc-editions]

Python's transition required an eventual end to Python 2 support. That is evidence of a costly migration boundary, not evidence that Python 3 failed. Python's own guidance describes years of notice and porting work.[^python2]

# Why
**Synthesis:** the key success condition is an interoperability boundary that survives the change. Rust can update how a crate is interpreted while maintaining communication between crates. Changes to shared runtime representation or ABI are harder to contain; the edition mechanism should not be treated as permission for arbitrary incompatibility.[^rust-editions]

# Lessons
- Judge migration designs by whether dependencies can move independently.
- Publish the compiler requirement separately from the edition name.
- Distinguish syntax migration, extension selection, and runtime compatibility.

# Related
- [Rust](/languages/rust.md)
- [Scala 3 and language redesigns](/ideas/types/scala-3-and-language-redesigns.md)
- [Dependency management](/ideas/tooling-and-ecosystem/dependency-management-built-in.md)

[^rust-editions]: Rust Edition Guide: What are editions? — https://doc.rust-lang.org/edition-guide/editions/
[^rust2024]: Rust 1.85.0 and Rust 2024, 20 February 2025 — https://blog.rust-lang.org/2025/02/20/Rust-1.85.0.html
[^python2]: Python.org: Sunsetting Python 2 — https://www.python.org/doc/sunset-python-2/
[^ghc-editions]: GHC Users Guide: Controlling editions and extensions — https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/control.html
