---
type: OSS Project
title: Elixir
description: Apache-2.0 functional language on the Erlang VM; executed a research-grade gradual set-theoretic type system without breaking the language — inference of all constructs in v1.20 (2026-06-03, "now a gradually typed language") — and consolidated its fractured language servers into the official Expert LSP (2026), funded by a handful of sponsors.
resource: https://github.com/elixir-lang/elixir
tags: [programming-language, beam, erlang, apache-2.0, type-system, community]
domain: devtools-languages
license: Apache-2.0
license_history: ["Apache-2.0 (2012-)"]
governance: community
steward: Elixir core team (José Valim / Dashbit), type system with CNRS
backing_orgs: []
metrics:
  github_stars: { value: 26673, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: elixir-gh
    resource: https://github.com/elixir-lang/elixir
    title: elixir-lang/elixir GitHub repository (stars via GitHub API, 2026-10-03)
  - id: elixir-118
    resource: https://elixir-lang.org/blog/2024/12/19/elixir-v1-18-0-released/
    title: "elixir-lang.org: Elixir v1.18 released — type checking of calls, LSP listeners, built-in JSON"
  - id: elixir-119
    resource: https://elixir-lang.org/blog/2025/10/16/elixir-v1-19-0-released/
    title: "elixir-lang.org: Elixir v1.19 released — enhanced type checking and up to 4x faster compilation"
  - id: elixir-bdd
    resource: https://elixir-lang.org/blog/2025/12/02/lazier-bdds-for-set-theoretic-types/
    title: "elixir-lang.org: Lazier BDDs for set-theoretic types"
  - id: elixir-next15
    resource: https://elixir-lang.org/blog/2026/01/09/type-inference-of-all-and-next-15/
    title: "elixir-lang.org: Type inference of all constructs and the next 15 months"
  - id: elixir-120
    resource: https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/
    title: "elixir-lang.org: Elixir v1.20 released — now a gradually typed language"
  - id: elixir-lsp-team
    resource: https://elixir-lang.org/blog/2024/08/15/welcome-elixir-language-server-team/
    title: "elixir-lang.org: Announcing the official Elixir Language Server team"
  - id: expert-rc
    resource: https://expert-lsp.org/the-first-release-candidate/
    title: "expert-lsp.org: The First Release Candidate"
  - id: phoenix-18
    resource: https://www.phoenixframework.org/blog/phoenix-1-8-released
    title: "Phoenix Blog: Phoenix 1.8.0 released"
  - id: so-2025-tech
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
---

# Summary
Elixir's two-year story is a rare successful retrofit of a type system onto a dynamic language without annotations or a breaking release. Building on set-theoretic types introduced in 1.17, v1.18 (2024-12-19) type-checked function calls,[^elixir-118] v1.19 (2025-10-16) added inference of anonymous functions and protocol checking with up to 4x faster compilation,[^elixir-119][^elixir-bdd] and v1.20 (2026-06-03) completed the first milestone — type inference of all constructs, gradual checking of every program — declaring Elixir "now a gradually typed language".[^elixir-120] Type signatures are still future work, with v1.21 (Nov 2026) and v1.22 (May 2027) planned to tackle performance and ergonomics.[^elixir-next15] Tooling consolidated too: the three competing language servers merged into the official Expert LSP (first RC Feb 2026),[^elixir-lsp-team][^expert-rc] and Phoenix 1.8 (Aug 2025) shipped AGENTS.md for LLM-assisted development.[^phoenix-18] Verdict: OSS growing; no business entity at risk (work funded by CNRS/Remote partnership and sponsors Fresha and Tidewave).[^elixir-120]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-19 | Elixir v1.18: type checking of calls, built-in JSON [^elixir-118] | OSS | + |
| W24 | 2025-08-05 | Phoenix 1.8.0 (scopes, magic links, AGENTS.md) [^phoenix-18] | OSS | + |
| W12 | 2025-10-16 | Elixir v1.19: anonymous-function inference, protocol checking, up to 4x faster compiles [^elixir-119] | OSS | + |
| W9 | 2026-01-09 | v1.20 RC: type inference of all constructs; 15-month roadmap [^elixir-next15] | OSS | + |
| W9 | 2026-02-22 | Expert (official unified LSP) first release candidate [^expert-rc] | OSS | + |
| W6 | 2026-06-03 | Elixir v1.20: "now a gradually typed language" [^elixir-120] | OSS | + |

# OSS successes
- Gradual typing delivered incrementally with minimal false positives and no annotation burden.[^elixir-120]
- Language-server fragmentation (ElixirLS, Lexical, Next LS) resolved into Expert.[^expert-rc]
- Compilation performance improvements alongside the type work.[^elixir-119]

# OSS failures / risks
- Type signatures — what many users actually want — have no committed date.[^elixir-next15]
- Small community relative to mainstream languages; Gleam competes for typed-BEAM mindshare.[^so-2025-tech]

# Business successes
- Type-system work financed through academic partnership (CNRS) and corporate sponsors (Remote, Fresha, Tidewave).[^elixir-120][^elixir-next15]

# Business failures / risks
- Reliance on a few sponsors and on José Valim's Dashbit for core work.

# By window
## W3
- No notable events found (v1.21 planned for Nov 2026).[^elixir-next15]
## W6
- Elixir v1.20 released (2026-06-03).[^elixir-120]
## W9
- v1.20 RCs with inference of all constructs; Expert LSP RC.[^elixir-next15][^expert-rc]
## W12
- Elixir v1.19 (2025-10-16); BDD-based type representation work.[^elixir-119][^elixir-bdd]
## W24
- Elixir v1.18 (2024-12-19); Phoenix 1.8 (2025-08-05).[^elixir-118][^phoenix-18]

# Lessons
- Academic–industry partnerships can fund deep language research that a small community could not.
- Retrofitting types works best as inference-first (find verified bugs) before asking users to write annotations.

# Related
- [Gleam](/projects/devtools-languages/gleam.md)
- [Elixir becomes gradually typed (v1.20)](/events/2026-06-elixir-1-20-gradual-typing.md)
