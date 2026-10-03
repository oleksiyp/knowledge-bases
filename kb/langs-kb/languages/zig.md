---
type: Language
title: Zig
description: "'Better C' with comptime, explicit allocators and no hidden control flow. Grew a devoted community and flagship users (Bun, TigerBeetle, Ghostty) and a uniquely successful C toolchain (zig cc), but is still pre-1.0 after a decade, broke users repeatedly (async removed in 0.11, 'Writergate' 0.15, std.Io 0.16), and lost its biggest user when Bun rewrote itself in Rust in 2026 citing memory-safety pain."
tags: [systems, comptime, c-interop, toolchain, pre-1.0, foundation, no-ai-policy]
paradigms: [systems, procedural, imperative]
typing: static
memory_model: manual
first_released: 2016
steward: Zig Software Foundation (Andrew Kelley)
governance: foundation
trajectory: growing
ideas:
  - ideas/metaprogramming/comptime-and-staged-compilation
  - ideas/concurrency/async-await-and-function-coloring
  - ideas/memory-safety/cpp-successor-languages
  - ideas/tooling-and-ecosystem/integrated-toolchains
runtimes: [runtimes/llvm]
adoption_signals:
  tiobe_rank: { value: 40, as_of: 2026-09 }
  tiobe_rating_pct: { value: 0.43, as_of: 2026-09 }
  so_survey_admired_pct: { value: 64, as_of: 2025 }
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: zig-011
    resource: https://ziglang.org/download/0.11.0/release-notes.html
    title: "Zig 0.11.0 Release Notes (async/await not available in self-hosted compiler)"
    author: org:ziglang
  - id: zig-0151
    resource: https://ziglang.org/download/0.15.1/release-notes.html
    title: "Zig 0.15.1 Release Notes (Writergate; async keywords removed)"
    author: org:ziglang
  - id: devclass-writergate
    resource: https://devclass.com/2025/07/07/zig-lead-makes-extremely-breaking-change-to-std-io-ahead-of-async-and-awaits-return/
    title: "DevClass: Zig lead makes 'extremely breaking' change to std.io ahead of async and await's return (2025-07-07)"
  - id: kristoff-io
    resource: https://kristoff.it/blog/zig-new-async-io/
    title: "Loris Cro: Zig's New Async I/O"
  - id: lwn-zig016
    resource: https://lwn.net/Articles/1067634/
    title: "LWN: Zig 0.16.0 released (2026-04-14)"
  - id: zsf-2025
    resource: https://ziglang.org/news/2025-financials/
    title: "Zig Software Foundation: 2025 Financial Report and Fundraiser"
    author: org:ziglang
  - id: tb-pledge
    resource: https://tigerbeetle.com/blog/2025-10-25-synadia-and-tigerbeetle-pledge-512k-to-the-zig-software-foundation/
    title: "TigerBeetle: Synadia and TigerBeetle pledge $512,000 to the Zig Software Foundation (2025-10-25)"
  - id: ghostty-1
    resource: https://lwn.net/Articles/1004377/
    title: "LWN: Ghostty 1.0 has been summoned (2024-12)"
  - id: infoq-bun
    resource: https://www.infoq.com/news/2026/09/bun-AI-rewrite-zig-rust-4-months/
    title: "InfoQ: Bun rewrites 535K lines of Zig into Rust in four months (2026-09)"
  - id: reg-bun
    resource: https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
    title: "The Register: Anthropic's Bun Rust rewrite merged at speed of AI (2026-05-14)"
  - id: tsai-ai-policy
    resource: https://mjtsai.com/blog/2026/04/30/zigs-anti-ai-contribution-policy/
    title: "Michael Tsai: Zig's Anti-AI Contribution Policy (2026-04-30)"
  - id: tiobe-sep26
    resource: https://www.techrepublic.com/article/news-tiobe-index-language-rankings/
    title: "TechRepublic: TIOBE Index September 2026 (Zig #40, 0.43%)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology (Zig admired 64%)"
  - id: zig-devlog-2025
    resource: https://ziglang.org/devlog/2025/
    title: "Zig Devlog 2025 (incl. Codeberg migration, Nov 2025)"
    author: org:ziglang
---

# Summary
Zig is the most successful of the "better C" languages and the clearest example of a community-funded language without a corporate sponsor. Its bets — **comptime** as the single metaprogramming mechanism, explicit allocators, seamless C interop and a self-contained cross-compiling toolchain (`zig cc`) — attracted serious production users: Bun, TigerBeetle, Ghostty (1.0 in Dec 2024).[^ghostty-1] The Zig Software Foundation spends ~92% of its budget paying contributors and got a $512K pledge from TigerBeetle and Synadia in October 2025.[^zsf-2025][^tb-pledge] Zig is 64% "admired" on Stack Overflow 2025[^so-2025] but only #40 on TIOBE (0.43%).[^tiobe-sep26] The costs of staying pre-1.0 were visible: async/await was dropped in 0.11 (2023),[^zig-011] the std I/O API was rewritten in 0.15 ("Writergate"),[^devclass-writergate] and 0.16 (April 2026) re-founded concurrency on an `Io` interface.[^lwn-zig016] Zig also chose a strict no-LLM contribution policy,[^tsai-ai-policy] and in May 2026 its flagship user Bun — by then owned by Anthropic — merged an AI-driven rewrite into Rust, citing memory leaks and crashes.[^reg-bun][^infoq-bun] Verdict: **succeeding** as a niche systems language and toolchain; **unproven** as a mainstream C replacement; **lost** the memory-safety argument to Rust for large apps.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020 | Zig Software Foundation established (501(c)(3)) | + |
| E2 | 2021–22 | Bun (in Zig) launches; `zig cc` gains users as a drop-in cross C compiler | + |
| E3 | 2023-08 | 0.11: self-hosted compiler; async/await removed pending redesign [^zig-011] | − |
| E3 | 2024 | ZSF income $670K; 92% spent on contributors [^zsf-2025] | + |
| E4 | 2024-12 | Ghostty 1.0 (terminal emulator in Zig) [^ghostty-1] | + |
| E4 | 2025-07 | No-LLM contribution policy takes effect [^tsai-ai-policy] | mixed |
| E4 | 2025-08 | 0.15.1 "Writergate": all std readers/writers replaced [^zig-0151][^devclass-writergate] | − |
| E4 | 2025-10-25 | TigerBeetle + Synadia pledge $512K over two years [^tb-pledge] | + |
| E4 | 2025-11 | Development moves from GitHub to Codeberg [^zig-devlog-2025] | mixed |
| E4 | 2026-04-14 | 0.16: `std.Io` interface — "colourless" async via passed-in Io [^lwn-zig016][^kristoff-io] | + |
| E4 | 2026-04 | Bun's 4x faster Zig-compiler fork not upstreamed due to AI ban [^tsai-ai-policy] | − |
| E4 | 2026-05-14 | Bun's Zig→Rust rewrite (535K lines) merged [^reg-bun][^infoq-bun] | − |

# Ideas it bet on
| Idea | Outcome for Zig |
|---|---|
| [Comptime and staged compilation](/ideas/metaprogramming/comptime-and-staged-compilation.md) | **Succeeded** — the most influential Zig idea; copied/admired widely |
| [Async/await and function colouring](/ideas/concurrency/async-await-and-function-coloring.md) | First design **abandoned** (0.11); second (Io interface, 0.16) **unproven** |
| [Integrated toolchains](/ideas/tooling-and-ecosystem/integrated-toolchains.md) | **Succeeded** — `zig cc` used even by non-Zig projects |
| Spatial-only safety (bounds checks, no borrow checker) | **Mixed** — insufficient for Bun's scale; see [ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md) |

# What succeeded
- **Comptime.** One mechanism for generics, reflection (`@typeInfo`) and code generation; a coherent alternative to templates + macros.[^kristoff-io]
- **Toolchain.** Cross-compilation to many targets with bundled libc headers; `zig cc` became a widely used C/C++ cross-compiler.
- **Production flagships.** TigerBeetle (financial DB), Ghostty, and (until 2026) Bun proved Zig at scale.[^ghostty-1][^tb-pledge]
- **Funding model.** A lean foundation paying contributors directly; diversified donors (GitHub Sponsors $170K, Mitchell Hashimoto $150K in 2024).[^zsf-2025]

# What failed or stalled
- **No 1.0, repeated breakage.** Each release broke APIs; Writergate was called "extremely breaking" by the lead himself.[^devclass-writergate]
- **First async design.** Colourless async via frame-based suspend was removed in 0.11 and only returned as a library design in 0.16.[^zig-011][^lwn-zig016]
- **Memory safety ceiling.** Zig provides bounds checks and safety-checked builds but no temporal safety; Bun's author: "I am so tired of worrying about & spending lots of time fixing memory leaks and crashes."[^infoq-bun]
- **AI policy friction.** The categorical LLM ban kept Bun's compiler improvements out of upstream and was cited in Bun's departure.[^tsai-ai-policy][^infoq-bun]

# By era
## E1
Zig 0.5–0.7, foundation formed; comptime and `zig cc` get noticed.
## E2
Bun launches on Zig; Zig becomes the "cool" C alternative.
## E3
Self-hosted compiler (0.11) at the cost of async; adoption by TigerBeetle and Ghostty.[^zig-011]
## E4
Peak and shock: Ghostty 1.0, big pledges, the Io redesign — then Bun leaves for Rust.[^ghostty-1][^tb-pledge][^lwn-zig016][^reg-bun]

# Lessons
- Comptime shows that one well-designed compile-time mechanism can replace several (templates, macros, reflection).
- Staying pre-1.0 buys design freedom but taxes every production user; flagship users with large codebases may leave when the language's guarantees cap their reliability.
- Contribution policy is now part of language competitiveness in the AI era.

# Related
- [C](/languages/c.md), [Rust](/languages/rust.md), [Odin](/languages/odin.md), [Hare](/languages/hare.md), [Bun](/runtimes/bun.md)
- [Comptime and staged compilation](/ideas/metaprogramming/comptime-and-staged-compilation.md), [Async/await and function colouring](/ideas/concurrency/async-await-and-function-coloring.md), [LLM impact on language adoption](/ideas/ai-and-languages/llm-impact-on-language-adoption.md)
- Event: [Bun moves from Zig to Rust](/events/2026-05-bun-zig-to-rust.md)

[^zig-011]: Zig 0.11.0 Release Notes — https://ziglang.org/download/0.11.0/release-notes.html
[^zig-0151]: Zig 0.15.1 Release Notes — https://ziglang.org/download/0.15.1/release-notes.html
[^devclass-writergate]: DevClass: Zig lead makes 'extremely breaking' change to std.io — https://devclass.com/2025/07/07/zig-lead-makes-extremely-breaking-change-to-std-io-ahead-of-async-and-awaits-return/
[^kristoff-io]: Loris Cro: Zig's New Async I/O — https://kristoff.it/blog/zig-new-async-io/
[^lwn-zig016]: LWN: Zig 0.16.0 released — https://lwn.net/Articles/1067634/
[^zsf-2025]: Zig Software Foundation: 2025 Financial Report — https://ziglang.org/news/2025-financials/
[^tb-pledge]: TigerBeetle: Synadia and TigerBeetle pledge $512,000 — https://tigerbeetle.com/blog/2025-10-25-synadia-and-tigerbeetle-pledge-512k-to-the-zig-software-foundation/
[^ghostty-1]: LWN: Ghostty 1.0 has been summoned — https://lwn.net/Articles/1004377/
[^infoq-bun]: InfoQ: Bun rewrites 535K lines of Zig into Rust — https://www.infoq.com/news/2026/09/bun-AI-rewrite-zig-rust-4-months/
[^reg-bun]: The Register: Anthropic's Bun Rust rewrite merged — https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
[^tsai-ai-policy]: Michael Tsai: Zig's Anti-AI Contribution Policy — https://mjtsai.com/blog/2026/04/30/zigs-anti-ai-contribution-policy/
[^tiobe-sep26]: TechRepublic: TIOBE Index for September 2026 — https://www.techrepublic.com/article/news-tiobe-index-language-rankings/
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^zig-devlog-2025]: Zig Devlog 2025 — https://ziglang.org/devlog/2025/
