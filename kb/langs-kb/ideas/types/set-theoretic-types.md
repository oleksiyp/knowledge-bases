---
type: Idea
title: Set-theoretic types (semantic subtyping with unions, intersections and negations)
description: Types read as sets of values, so union, intersection and negation are first-class and subtyping is set inclusion. Long confined to research (CDuce), the idea crossed into production in 2022–2026 through Luau's new type solver (GA Nov 2025) and Elixir's gradual type system (1.17 in 2024 to 1.20 in 2026). Its verdict is "succeeding", with type signatures and Erlang adoption still pending.
area: types
tags: [semantic-subtyping, gradual-typing, elixir, luau, erlang, occurrence-typing, unions, negation-types]
outcome: succeeding
maturity_2026: adopted
origin_year: 2002
mainstream_year: null
languages: [languages/elixir, languages/lua-luau, languages/erlang, languages/typescript]
runtimes: [runtimes/beam]
related_ideas: [ideas/types/gradual-typing-for-dynamic-languages, ideas/types/typescript-structural-typing-wins, ideas/types/sum-types-and-pattern-matching]
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: design-principles
    resource: https://arxiv.org/abs/2306.06391
    title: "Castagna, Duboc, Valim: The Design Principles of the Elixir Type System (Programming journal vol. 8 issue 2, 2024)"
  - id: strong-arrows
    resource: https://elixir-lang.org/blog/2023/09/20/strong-arrows-gradual-typing/
    title: "Elixir blog: Strong arrows: a new approach to gradual typing (2023-09-20)"
  - id: elixir-117
    resource: https://elixir-lang.org/blog/2024/06/12/elixir-v1-17-0-released/
    title: "Elixir blog: Elixir v1.17 released: set-theoretic data types"
  - id: elixir-118
    resource: https://elixir-lang.org/blog/2024/12/19/elixir-v1-18-0-released/
    title: "Elixir blog: Elixir v1.18 released: type checking of function calls"
  - id: elixir-119
    resource: https://elixir-lang.org/blog/2025/10/16/elixir-v1-19-0-released/
    title: "Elixir blog: Elixir v1.19 released: enhanced type checking"
  - id: elixir-120
    resource: https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/
    title: "Elixir blog: Elixir v1.20 released: now a gradually typed language"
  - id: elixir-next15
    resource: https://elixir-lang.org/blog/2026/01/09/type-inference-of-all-and-next-15/
    title: "Elixir blog: Type inference of all constructs and the next 15 months"
  - id: lazier-bdds
    resource: https://elixir-lang.org/blog/2025/12/02/lazier-bdds-for-set-theoretic-types/
    title: "Elixir blog: Lazier Binary Decision Diagrams (BDDs) for set-theoretic types"
  - id: elixir-gradual-doc
    resource: https://hexdocs.pm/elixir/main/gradual-set-theoretic-types.html
    title: "Elixir docs: Gradual set-theoretic types"
  - id: luau-semsub
    resource: https://luau.org/news/2022-10-31-luau-semantic-subtyping/
    title: "Luau: Semantic Subtyping in Luau (2022-10-31)"
  - id: luau-ga
    resource: https://devforum.roblox.com/t/general-release-luau%E2%80%99s-new-type-solver/4084991
    title: "Roblox DevForum: [General Release] Luau's New Type Solver (2025-11-20)"
    author: org:roblox
  - id: etylizer
    resource: https://github.com/etylizer/etylizer
    title: "etylizer: Static typechecker for Erlang based on set-theoretic types"
  - id: erlang-sett-2026
    resource: https://arxiv.org/abs/2603.22032
    title: "Set-Theoretic Types for Erlang: Theory, Implementation, and Evaluation (arXiv 2603.22032, 2026)"
  - id: cduce
    resource: https://www.cduce.org/
    title: "CDuce: an XML-centric functional language with semantic subtyping"
---

# Summary
**Verdict: succeeding, and the most significant academic-to-industry type-system transfer of the period.** Semantic subtyping comes from Frisch, Castagna and Benzaken (CDuce, early 2000s).[^cduce] It interprets a type as the set of values it denotes. Unions (`A or B`), intersections (`A and B`) and negations (`not A`) are then ordinary set operations, and `A <: B` means set inclusion. For two decades it lived in research languages. In 2022–2026 two production languages with big user bases adopted it:

- **Luau** (Roblox's typed Lua) moved its new type solver to semantic subtyping in 2022 and made it generally available in November 2025.[^luau-semsub][^luau-ga]
- **Elixir** built a *gradual* set-theoretic system with Castagna's group (CNRS/IRIF). It rolled out across 1.17 (Jun 2024), 1.18, 1.19 and 1.20 (Jun 2026). As of 1.20 every Elixir program is type-checked with full inference and no annotations required.[^design-principles][^elixir-117][^elixir-120]

What is still missing: Elixir has not shipped user-written type signatures, recursive or parametric types, or typed structs (planned for v1.21+).[^elixir-next15] Erlang has only research checkers (etylizer, which still lacks map support).[^etylizer][^erlang-sett-2026] No top-20 language uses full semantic subtyping as its *only* type system. TypeScript's unions and intersections are syntactic and have no negation.

# The idea
In a dynamic functional language, code naturally branches on runtime shape: patterns, guards and `is_integer(x)`. Set-theoretic types let the checker follow that branching precisely. After `case x do n when is_integer(n) -> ...; other -> ... end`, the second branch knows `x : T and not integer()` (occurrence typing via negation). Intersections of arrows express overloaded functions. Exhaustiveness and redundant-clause detection fall out as emptiness checks.[^design-principles] Elixir's gradual twist is a `dynamic()` type that is *narrowed* rather than trusted, together with "strong arrows": functions whose runtime guards already ensure type safety, so no runtime casts are inserted.[^strong-arrows][^elixir-gradual-doc]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022-06 | Elixir announces type-system research with CNRS (ElixirConf EU; date approximate) [^design-principles] | + |
| E2 | 2022-10-31 | Luau adopts semantic subtyping in its new solver [^luau-semsub] | + |
| E3 | 2023-06 | "Design Principles of the Elixir Type System" preprint [^design-principles] | + |
| E3 | 2023-09-20 | "Strong arrows" gradual-typing design published [^strong-arrows] | + |
| E3 | 2024-06-12 | Elixir 1.17 ships set-theoretic data types in the compiler [^elixir-117] | + |
| E4 | 2024-12-19 | Elixir 1.18: type checking of function calls [^elixir-118] | + |
| E4 | 2025-10-16 | Elixir 1.19: protocols and anonymous functions inferred [^elixir-119] | + |
| E4 | 2025-11-20 | Luau new type solver general release [^luau-ga] | + |
| E4 | 2025-12-02 | Elixir publishes lazier-BDD work to keep checking fast [^lazier-bdds] | + |
| E4 | 2026-03 | Set-theoretic types for Erlang paper and implementation (etylizer) [^erlang-sett-2026] | mixed |
| E4 | 2026-06-03 | Elixir 1.20: inference of all constructs, every program gradually checked [^elixir-120] | + |

# Where it succeeded
- **Elixir.** Type checking reached the whole ecosystem without a split between typed and untyped code. Warnings report only "verified bugs", violations guaranteed to fail at runtime. The checker also detects dead code and redundant clauses. It passes 12 of 13 categories of the "If T" type-narrowing benchmark.[^elixir-120]
- **Luau.** Negation types power refinements (shown as `~T` in errors), and the redesigned non-strict mode reports only definite runtime errors. That is the same "no false positives on untyped code" philosophy as Elixir.[^luau-ga]
- **Research-to-practice pipeline.** The Elixir paper appeared in a peer-reviewed venue (‹Programming› 2024), and its co-author Duboc did the implementation, a rare direct transfer.[^design-principles]

# Where it failed or stalled
- **Performance risk.** Subtyping with negation is expensive. Elixir had to invest in BDD representations (lazier BDDs, Dec 2025) to keep compile times acceptable.[^lazier-bdds]
- **Signatures and polymorphism still pending.** Without user-written signatures, library authors cannot state contracts. Typed structs and parametric/protocol polymorphism are milestones with "no precise date".[^elixir-next15]
- **Erlang.** No set-theoretic checker ships with OTP. etylizer is academic, and Erlang users remain split across Dialyzer and eqWAlizer.[^etylizer] See [Erlang](/languages/erlang.md).
- **Mainstream languages.** Python and TypeScript stayed with syntactic union/intersection approximations. Negation types never got there (no accepted proposal found).

# Why
1. **Fit with pattern-matching dynamic languages.** Elixir, Erlang and Lua code already uses unions of shapes and type tests. Set-theoretic types describe the code as written, so no Hindley–Milner-style rewrite is needed. That is why it worked where earlier attempts at "ML types for Erlang" did not.[^design-principles]
2. **Inference-first, zero-annotation rollout.** Both Elixir and Luau start by flagging only certain errors. That avoids the adoption cliff of mypy-style strictness and the friction of migrating to a separate superset language. Compare [gradual typing](/ideas/types/gradual-typing-for-dynamic-languages.md).
3. **Patient, funded stewardship.** Elixir's work was funded first by CNRS and Remote, then by Fresha and Tidewave, and planned across multi-year milestones.[^elixir-120][^elixir-next15] Roblox employs the Luau team.
4. **Theory was ready.** Twenty years of CDuce research had solved the decision procedures. The remaining problems were engineering: gradual typing, performance and error messages.[^cduce]

# Lessons
- Choosing a theory that matches how the language is already written beats importing the type system of a different language family.
- "Report only provable bugs" is a viable way to bring types into a large untyped ecosystem without a schism.
- Academic partnerships work when the researcher is embedded in the implementation, not just consulted.

# Related
- [Elixir](/languages/elixir.md), [Erlang](/languages/erlang.md), [Lua / Luau](/languages/lua-luau.md), [TypeScript](/languages/typescript.md)
- [Gradual typing for dynamic languages](/ideas/types/gradual-typing-for-dynamic-languages.md), [TypeScript structural typing](/ideas/types/typescript-structural-typing-wins.md)
- [Event: Elixir 1.17 ships set-theoretic types](/events/2024-06-elixir-1-17-set-theoretic-types.md), [Event: Elixir 1.20 gradual typing](/events/2026-06-elixir-1-20-gradual-typing.md)

[^design-principles]: The Design Principles of the Elixir Type System — https://arxiv.org/abs/2306.06391
[^strong-arrows]: Elixir blog: Strong arrows — https://elixir-lang.org/blog/2023/09/20/strong-arrows-gradual-typing/
[^elixir-117]: Elixir v1.17 released — https://elixir-lang.org/blog/2024/06/12/elixir-v1-17-0-released/
[^elixir-118]: Elixir v1.18 released — https://elixir-lang.org/blog/2024/12/19/elixir-v1-18-0-released/
[^elixir-119]: Elixir v1.19 released — https://elixir-lang.org/blog/2025/10/16/elixir-v1-19-0-released/
[^elixir-120]: Elixir v1.20 released — https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/
[^elixir-next15]: Type inference of all constructs and the next 15 months — https://elixir-lang.org/blog/2026/01/09/type-inference-of-all-and-next-15/
[^lazier-bdds]: Lazier BDDs for set-theoretic types — https://elixir-lang.org/blog/2025/12/02/lazier-bdds-for-set-theoretic-types/
[^elixir-gradual-doc]: Elixir docs: Gradual set-theoretic types — https://hexdocs.pm/elixir/main/gradual-set-theoretic-types.html
[^luau-semsub]: Luau: Semantic Subtyping in Luau — https://luau.org/news/2022-10-31-luau-semantic-subtyping/
[^luau-ga]: Roblox: General Release of Luau's New Type Solver — https://devforum.roblox.com/t/general-release-luau%E2%80%99s-new-type-solver/4084991
[^etylizer]: etylizer — https://github.com/etylizer/etylizer
[^erlang-sett-2026]: Set-Theoretic Types for Erlang — https://arxiv.org/abs/2603.22032
[^cduce]: CDuce — https://www.cduce.org/
