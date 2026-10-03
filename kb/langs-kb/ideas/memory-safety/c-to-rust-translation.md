---
type: Idea
title: Automated C (and C++) to Rust translation
description: "Migrate legacy C/C++ to memory-safe Rust by tools rather than hand rewrites — first by rule-based transpilers (c2rust), then by LLM-driven agents. 2018–2026 verdict: mixed, rising fast — mechanical transpilation produced unidiomatic unsafe Rust and saw little production use, but 2026 brought the first large AI-assisted ports (Ladybird LibJS, Bun's 535K-line Zig→Rust) while DARPA TRACTOR, Microsoft research and Canonical-funded work still chase safe, idiomatic output at scale."
area: memory-safety
tags: [c2rust, tractor, darpa, llm, migration, rust, legacy-code, ai-agents]
outcome: mixed
maturity_2026: experimental
origin_year: 2018
mainstream_year: null
languages: [languages/c, languages/cpp, languages/rust, languages/zig]
runtimes: []
related_ideas:
  - ideas/ai-and-languages/ai-assisted-code-migration
  - ideas/memory-safety/memory-safety-policy-push
  - ideas/memory-safety/ownership-and-borrowing
  - ideas/tooling-and-ecosystem/native-rewrites-of-tooling
era_momentum: { E1: flat, E2: flat, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: c2rust
    resource: https://github.com/immunant/c2rust
    title: "GitHub: immunant/c2rust — Migrate C code to Rust (output is unsafe Rust mirroring the C)"
  - id: c2saferrust
    resource: https://arxiv.org/pdf/2501.14257
    title: "arXiv 2501.14257: C2SaferRust — Transforming C projects into safer Rust with neurosymbolic techniques (2025)"
  - id: darpa-tractor
    resource: https://www.darpa.mil/research/programs/translating-all-c-to-rust
    title: "DARPA: Translating All C to Rust (TRACTOR)"
  - id: darkreading-tractor
    resource: https://www.darkreading.com/application-security/darpa-aims-to-ditch-c-code-move-to-rust
    title: "Dark Reading: DARPA aims to ditch C code, move to Rust (2024-08)"
  - id: tractor-bench
    resource: https://arxiv.org/abs/2609.25121
    title: "arXiv 2609.25121: TRACTOR Benchmark for Evaluating C to Rust Translators (MIT Lincoln Laboratory, 2026-09)"
  - id: rav1d
    resource: https://www.memorysafety.org/blog/rav1d-perf-bounty/
    title: "Prossimo: $20,000 rav1d AV1 decoder performance bounty (2025; Rust port ~5% slower than dav1d)"
  - id: fish4
    resource: https://linuxiac.com/fish-shell-4-is-here-entirely-rewritten-in-rust/
    title: "Linuxiac: Fish Shell 4 is here, entirely rewritten in Rust (2025-02-27)"
  - id: ladybird-rust
    resource: https://www.theregister.com/2026/02/23/ladybird_goes_rusty/
    title: "The Register: Ladybird indie web browser flutters toward Rust (2026-02-23)"
  - id: infoq-bun
    resource: https://www.infoq.com/news/2026/09/bun-AI-rewrite-zig-rust-4-months/
    title: "InfoQ: Bun rewrites 535K lines of Zig into Rust in four months (2026-09)"
  - id: ms-2030
    resource: https://www.xda-developers.com/no-microsoft-isnt-actually-eliminating-c-and-c-from-its-software-rust/
    title: "XDA: No, Microsoft isn't actually eliminating C and C++ from its software (2025-12)"
  - id: canonical-phd
    resource: https://www.infoworld.com/article/4212147/canonical-and-uks-university-of-bristol-partner-to-investigate-automated-c-to-rust-translations.html
    title: "InfoWorld: Canonical and University of Bristol partner to investigate automated C to Rust translation (2026-08)"
  - id: newstack-canonical
    resource: https://thenewstack.io/canonical-c-rust-apparmor/
    title: "The New Stack: AI-generated Rust compiles perfectly. That's the scary part. (2026-08)"
  - id: reg-bun
    resource: https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
    title: "The Register: Anthropic's Bun Rust rewrite merged at speed of AI (2026-05-14)"
---

# Summary
**Mixed, with momentum.** The promise — press a button, get safe Rust from legacy C — drove three waves. **Wave 1 (2018–2023), rule-based:** c2rust produced compilable Rust that "closely mirrors the input C", i.e. pervasively `unsafe` and unidiomatic; research measured its safe-code rate near zero.[^c2rust][^c2saferrust] Its best-known product, the rav1d AV1 decoder, worked but remained ~5% slower than C and needed a $20K bounty to chase parity.[^rav1d] **Wave 2 (2024–2025), funded research:** DARPA's TRACTOR (announced mid-2024) set the goal of translation "of the same quality and style that a skilled Rust developer would produce" using LLMs plus analysis, with MIT Lincoln Laboratory benchmarks.[^darpa-tractor][^tractor-bench] **Wave 3 (2026), AI agents in production:** Ladybird ported its JS parser/bytecode generator from C++ to ~25K lines of Rust in two weeks with Claude Code and Codex, passing all tests;[^ladybird-rust] Bun's 535K-line Zig codebase was rewritten to Rust in four months by a fleet of Claude agents.[^infoq-bun][^reg-bun] Microsoft floated "1 engineer, 1 month, 1 million lines" towards eliminating C/C++ by 2030, then clarified it was research, not a Windows rewrite.[^ms-2030] Unsolved: verifying behavioural equivalence, idiomatic ownership design, and residual `unsafe`.[^newstack-canonical]

# The idea
Translate C/C++ to Rust automatically or semi-automatically: (1) syntax-directed transpilation to unsafe Rust, then (2) refactoring passes (or humans) lift pointers to references, slices and owned types; or (3) LLMs generate idiomatic Rust guided by tests, compilers and static analysis in a loop. The problem: rewriting billions of lines by hand is unaffordable, and policy now asks for memory-safety roadmaps ([policy push](/ideas/memory-safety/memory-safety-policy-push.md)).

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018–2019 | c2rust (Galois/Immunant) open-sourced: C99 → unsafe Rust [^c2rust] | + |
| E3 | 2023-03 | rav1d port of dav1d via c2rust begins (Prossimo) [^rav1d] | + |
| E3 | 2024-07 | DARPA TRACTOR announced ([event](/events/2024-07-darpa-tractor-announced.md)) [^darpa-tractor][^darkreading-tractor] | + |
| E4 | 2025-01 | C2SaferRust: LLM+symbolic hybrid reaches ~50–60% safe code vs ~0–2% for c2rust [^c2saferrust] | + |
| E4 | 2025-02-27 | fish 4.0: complete manual C++→Rust port ships invisibly to users [^fish4] | + |
| E4 | 2025-05 | rav1d performance bounty: Rust port ~5% slower than C [^rav1d] | mixed |
| E4 | 2025-12 | Microsoft "eliminate C/C++ by 2030" post, then walk-back ([event](/events/2025-12-microsoft-2030-rust-post.md)) [^ms-2030] | mixed |
| E4 | 2026-02 | Ladybird: AI-assisted C++→Rust LibJS port in two weeks [^ladybird-rust] | + |
| E4 | 2026-05-14 | Bun: AI-agent Zig→Rust rewrite merged ([event](/events/2026-05-bun-zig-to-rust.md)) [^reg-bun] | + |
| E4 | 2026-08 | Canonical + Bristol PhD on AI C→Rust (AppArmor, snap-confine as test cases) [^canonical-phd] | + |
| E4 | 2026-09 | TRACTOR benchmark paper published [^tractor-bench] | + |

# Where it succeeded
- **Test-rich, well-bounded components**: Ladybird's LibJS frontend (52K test262 tests) and Bun (huge test suite) gave agents a tight correctness oracle.[^ladybird-rust][^infoq-bun]
- **Cost collapse**: a port estimated at a team-year took four months; Ladybird's took two weeks.[^infoq-bun][^ladybird-rust]
- **Manual ports remain viable** when a team commits: fish's 55K-line C++ → 75K-line Rust port shipped without user-visible change.[^fish4]

# Where it failed or stalled
- **Rule-based transpilation** never produced code teams wanted to maintain; c2rust is mostly a starting point.[^c2rust][^c2saferrust]
- **Performance parity** is not free: rav1d's gap persisted despite identical assembly kernels.[^rav1d]
- **Hype vs reality**: Microsoft's 2030 framing had to be corrected within days.[^ms-2030]
- **Verification gap**: Canonical framed the core risk as AI-generated Rust that "compiles perfectly" but may differ in behaviour; nothing from its project will ship soon.[^newstack-canonical][^canonical-phd]

# Why
1. **Ownership is a design, not a syntax.** C programs encode lifetimes implicitly; recovering them requires whole-program reasoning that rule-based tools cannot do, so they emit `unsafe`.[^c2saferrust]
2. **LLMs supply the missing "taste"** — idiomatic restructuring — while compilers and test suites supply verification; the combination works where tests are strong.[^ladybird-rust]
3. **Organisational ownership matters**: Bun and Ladybird were owned by the people doing the port (Bun by Anthropic since Dec 2025), so they could accept risk; regulated or OS-core code (AppArmor, Windows) demands proofs of equivalence first.[^infoq-bun][^canonical-phd]
4. **Policy funding** (DARPA) created benchmarks that make progress measurable.[^tractor-bench]

# Lessons
- Translation quality is bounded by the test oracle; invest in tests before translating.
- The economics of rewrites changed in 2026: "too expensive to rewrite" is no longer a safe assumption for mid-sized codebases.
- Expect a split: AI-ported application code now, formally validated translation for safety-critical/OS code later.

# Related
- Languages: [C](/languages/c.md), [C++](/languages/cpp.md), [Rust](/languages/rust.md), [Zig](/languages/zig.md)
- Ideas: [AI-assisted code migration](/ideas/ai-and-languages/ai-assisted-code-migration.md), [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md), [Native rewrites of tooling](/ideas/tooling-and-ecosystem/native-rewrites-of-tooling.md), [AI and formal verification](/ideas/ai-and-languages/ai-and-formal-verification.md)
- Events: [DARPA TRACTOR](/events/2024-07-darpa-tractor-announced.md), [Microsoft 2030 post](/events/2025-12-microsoft-2030-rust-post.md), [Bun Zig→Rust](/events/2026-05-bun-zig-to-rust.md)

[^c2rust]: GitHub: immunant/c2rust — https://github.com/immunant/c2rust
[^c2saferrust]: arXiv: C2SaferRust — https://arxiv.org/pdf/2501.14257
[^darpa-tractor]: DARPA: TRACTOR — https://www.darpa.mil/research/programs/translating-all-c-to-rust
[^darkreading-tractor]: Dark Reading: DARPA aims to ditch C code — https://www.darkreading.com/application-security/darpa-aims-to-ditch-c-code-move-to-rust
[^tractor-bench]: arXiv: TRACTOR Benchmark — https://arxiv.org/abs/2609.25121
[^rav1d]: Prossimo: rav1d performance bounty — https://www.memorysafety.org/blog/rav1d-perf-bounty/
[^fish4]: Linuxiac: Fish Shell 4 rewritten in Rust — https://linuxiac.com/fish-shell-4-is-here-entirely-rewritten-in-rust/
[^ladybird-rust]: The Register: Ladybird flutters toward Rust — https://www.theregister.com/2026/02/23/ladybird_goes_rusty/
[^infoq-bun]: InfoQ: Bun rewrites 535K lines of Zig into Rust — https://www.infoq.com/news/2026/09/bun-AI-rewrite-zig-rust-4-months/
[^ms-2030]: XDA: No, Microsoft isn't eliminating C and C++ — https://www.xda-developers.com/no-microsoft-isnt-actually-eliminating-c-and-c-from-its-software-rust/
[^canonical-phd]: InfoWorld: Canonical and Bristol on automated C to Rust — https://www.infoworld.com/article/4212147/canonical-and-uks-university-of-bristol-partner-to-investigate-automated-c-to-rust-translations.html
[^newstack-canonical]: The New Stack: AI-generated Rust compiles perfectly — https://thenewstack.io/canonical-c-rust-apparmor/
[^reg-bun]: The Register: Bun Rust rewrite merged — https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
