---
type: Language
title: Roc
description: "Elm-inspired, purely functional, compiled language by Richard Feldman with a 'platforms vs applications' effect model and reference counting with opportunistic in-place mutation. Still pre-0.1 in October 2026 (about 6.1k GitHub stars): its 300k-line Rust compiler was rewritten in Zig over 487 days (2025–2026). Interesting ideas, long time to first release."
tags: [functional, elm-family, reference-counting, compiler-rewrite, zig, alpha]
paradigms: [functional]
typing: static
memory_model: rc
first_released: 2019
steward: Roc Programming Language Foundation (non-profit); creator Richard Feldman
governance: foundation
trajectory: stalled
ideas: [ideas/types/perceus-and-reference-counting-fp, ideas/types/algebraic-effects-and-handlers]
runtimes: []
adoption_signals:
  github_stars: { value: 6093, as_of: 2026-10-03 }
era_momentum: { E1: up, E2: up, E3: flat, E4: mixed }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: feldman-rust-to-zig
    resource: https://rtfeldman.com/rust-to-zig
    title: "Richard Feldman: How Our Rust-to-Zig Rewrite is Going (2026-07-15)"
  - id: dd-roc
    resource: https://www.developersdigest.tech/blog/roc-rust-to-zig-rewrite-feldman
    title: "Developers Digest: Roc's Rust-to-Zig Rewrite — 487 Days, 300K Lines"
  - id: corrode-roc
    resource: https://corrode.dev/podcast/s05e04-roc/
    title: "Rust in Production podcast S05E04: Roc with Richard Feldman (2025-11-13)"
  - id: goto-roc-zig
    resource: https://gotopia.tech/articles/442/roc-zig-a-compiler-rewrite-story
    title: "GOTO: Roc & Zig — A Compiler Rewrite Story"
  - id: weeklyrust-roc
    resource: https://weeklyrust.substack.com/p/why-roc-is-moving-away-from-rust
    title: "Rust Bytes: Why Roc Is Moving Away From Rust to Zig"
  - id: roc-gh
    resource: https://github.com/roc-lang/roc
    title: "GitHub: roc-lang/roc (stars via GitHub API, 2026-10-03)"
---

# Summary
Roc applies Elm's design (no runtime exceptions, friendly errors, full type inference) to backends, CLIs and embedded use. It compiles to machine code or WebAssembly. Effects come from a host **platform** that the application plugs into, and its newer "purity inference" separates pure from effectful functions without monads.[^corrode-roc] Memory is managed by reference counting with **opportunistic in-place mutation**: unique values are updated in place. This puts Roc in the [Perceus / "functional but in place"](/ideas/types/perceus-and-reference-counting-fp.md) family with Koka and Lean.[^corrode-roc] It has early production users (Vendr; Niclas Åhdén is named as the most prolific).[^corrode-roc][^feldman-rust-to-zig] But in early 2025 the team began rewriting the roughly 300k-line Rust compiler in Zig. They reached feature parity on 2026-07-15 after 487 days, and are aiming for Roc's "first-ever numbered release," 0.1.0, later in 2026.[^feldman-rust-to-zig][^dd-roc] Verdict: **stalled on adoption** while it rebuilt itself. Its design ideas are respected, but a language with no versioned release after about seven years is still an experiment (about 6.1k GitHub stars).[^roc-gh]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019 | Feldman starts Roc (Elm lineage); private alpha [^corrode-roc] | + |
| E2–E3 | 2021–2024 | Public nightly builds, platforms (basic-cli, web servers), Roc foundation with sponsors [^corrode-roc] | + |
| E4 | 2025-02 | Rewrite of the compiler from Rust to Zig announced [^weeklyrust-roc][^goto-roc-zig] | mixed |
| E4 | 2026-07-15 | Zig compiler reaches parity after 487 days; incremental rebuilds 35 ms vs 3.4 s in Rust [^feldman-rust-to-zig][^dd-roc] | + |
| E4 | 2026 (planned) | 0.1.0, first numbered release (not shipped as of 2026-10-03) [^feldman-rust-to-zig] | mixed |

# Ideas it bet on
| Idea | Outcome for Roc |
|---|---|
| [RC plus in-place mutation](/ideas/types/perceus-and-reference-counting-fp.md) | promising; shared with Koka and Lean |
| Platforms vs applications (host-provided effects), purity inference | unproven: elegant, small user base |
| Lambda-set specialization (closures without heap allocation) | drove the rewrite; unproven at scale [^dd-roc] |
| Rewriting the compiler for speed (Rust→Zig) | succeeded technically; cost about 18 months of feature work [^feldman-rust-to-zig] |

# What succeeded
- Compiler throughput: the Zig rewrite cut incremental rebuilds from 3.4 s to 35 ms, and the team reports fewer memory-corruption bugs (10 vs 21) than in the Rust compiler.[^dd-roc]
- Reusing Zig's LLVM bitcode serialization and faster build times were concrete reasons to switch.[^weeklyrust-roc]
- Real production use, and a non-profit foundation with corporate and individual sponsors.[^corrode-roc]

# What failed or stalled
- **No release in about seven years.** Roc remained "alpha" with nightly builds only, which discourages adoption.[^feldman-rust-to-zig]
- **The rewrite took 487 days.** Everything else was frozen during it — a familiar second-system risk.[^dd-roc]
- **Creator's time is split.** Feldman works full-time at Zed Industries.[^goto-roc-zig]

# By era
## E1
Started as a private project from the Elm community.
## E2
Public interest rose through Feldman's talks; the platform model and RC design took shape.[^corrode-roc]
## E3
Nightlies and early production users, but the compiler's architecture (lambda sets, build times) limited progress.[^dd-roc]
## E4
The Rust→Zig rewrite. Parity in July 2026; 0.1.0 still pending.[^feldman-rust-to-zig]

# Lessons
- "Rewrite the compiler first" can be the right engineering call and still cost a young language its window.
- The Perceus-style RC idea is spreading through small languages (Koka, Lean, Roc), but none of them has yet carried it into the mainstream.

# Related
- [Perceus and reference counting in FP](/ideas/types/perceus-and-reference-counting-fp.md)
- [Koka](/languages/koka.md), [Lean](/languages/lean.md), [Elm](/languages/elm.md), [Zig](/languages/zig.md), [Rust](/languages/rust.md)
- Event: [Roc's Zig compiler reaches parity](/events/2026-07-roc-zig-compiler-parity.md)

[^feldman-rust-to-zig]: Richard Feldman: How Our Rust-to-Zig Rewrite is Going — https://rtfeldman.com/rust-to-zig
[^dd-roc]: Developers Digest: Roc's Rust-to-Zig Rewrite — https://www.developersdigest.tech/blog/roc-rust-to-zig-rewrite-feldman
[^corrode-roc]: Rust in Production: Roc with Richard Feldman — https://corrode.dev/podcast/s05e04-roc/
[^goto-roc-zig]: GOTO: Roc & Zig — A Compiler Rewrite Story — https://gotopia.tech/articles/442/roc-zig-a-compiler-rewrite-story
[^weeklyrust-roc]: Rust Bytes: Why Roc Is Moving Away From Rust to Zig — https://weeklyrust.substack.com/p/why-roc-is-moving-away-from-rust
[^roc-gh]: roc-lang/roc on GitHub — https://github.com/roc-lang/roc
