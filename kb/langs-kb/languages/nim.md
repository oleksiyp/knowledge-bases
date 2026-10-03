---
type: Language
title: Nim
description: Python-flavoured compiled systems language with powerful macros that reached 1.0 (2019) and 2.0 with deterministic ARC/ORC memory management (2023), but stayed niche, suffered a community hard fork (Nimskull), and is now betting on a ground-up rewrite (Nimony → Nim 3). Technically strong, commercially marginal.
tags: [systems, python-like, macros, reference-counting, arc-orc, transpile-to-c]
paradigms: [systems, multi-paradigm, imperative]
typing: static
memory_model: rc
first_released: 2008
steward: Andreas Rumpf (Araq) and the Nim core team
governance: bdfl
trajectory: niche
ideas: [ideas/types/perceus-and-reference-counting-fp, ideas/metaprogramming/comptime-and-staged-compilation, ideas/tooling-and-ecosystem/language-editions-and-evolution]
runtimes: []
adoption_signals:
  tiobe_rank: { value: "outside top 50 ('next 50' list)", as_of: 2025 }
era_momentum: { E1: up, E2: flat, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: nim-10
    resource: https://nim-lang.org/blog/2019/09/23/version-100-released.html
    title: "Nim Blog: Version 1.0 released (2019-09-23)"
  - id: nim-20
    resource: https://nim-lang.org/blog/2023/08/01/nim-v20-released.html
    title: "Nim Blog: Nim v2.0 released (2023-08-01) — ORC default"
  - id: nim-22
    resource: https://nim-lang.org/blog/2024/10/02/nim-220-2010.html
    title: "Nim Blog: Nim versions 2.2.0 and 2.0.10 released (2024-10-02)"
  - id: nim-222
    resource: https://nim-lang.org/blog/2025/02/05/nim-222.html
    title: "Nim Blog: Nim version 2.2.2 released (2025-02-05)"
  - id: nimony
    resource: https://nim-lang.org/araq/nimony.html
    title: "Araq: Nimony (new compiler that will eventually become Nim 3.0)"
  - id: nimony-gh
    resource: https://github.com/nim-lang/nimony
    title: "GitHub: nim-lang/nimony (active development through 2026)"
  - id: nim-roadmap-2025
    resource: https://github.com/nim-lang/RFCs/issues/556
    title: "nim-lang/RFCs #556: Nim Roadmap 2025 and beyond"
  - id: nimskull
    resource: https://github.com/nim-works/nimskull
    title: "GitHub: nim-works/nimskull — community hard fork of Nim"
  - id: status-nim
    resource: https://nim-lang.org/blog/2018/08/07/nim-partners-with-status.html
    title: "Nim Blog: Nim partners with Status.im (2018-08-07)"
  - id: nimbus
    resource: https://github.com/status-im/nimbus-eth1
    title: "GitHub: status-im/nimbus-eth1 — Ethereum client in Nim"
  - id: tiobe
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index (Nim appears only in the 'next 50' list)"
---

# Summary
Nim compiles a Python-looking, statically typed language to C/C++/JS, with hygienic AST macros, templates and compile-time evaluation that make it one of the most expressive metaprogramming languages in this KB.[^nim-10] The era's big technical bet was memory management: Nim replaced its tracing GC with **ARC** (deterministic reference counting with move semantics and destructors) and **ORC** (ARC + cycle collector), which became the default in Nim 2.0 on 2023-08-01 — the same "RC + ownership-inferred moves" family as Perceus in Koka/Lean.[^nim-20] Releases have been steady (1.0 in Sep 2019, 2.2.0 in Oct 2024, 2.2.x patches in 2025).[^nim-10][^nim-22][^nim-222] Adoption is not: Nim's main industrial anchor is Status.im's Nimbus Ethereum clients, it remains outside TIOBE's top 50, and a group of contributors hard-forked it as **Nimskull** over governance and codebase concerns.[^status-nim][^nimbus][^tiobe][^nimskull] Rumpf's answer is **Nimony**, a new compiler for a revised Nim that will "eventually become Nim 3.0", under heavy development throughout 2026.[^nimony][^nimony-gh] Verdict: **niche and stable** — good ideas (ARC/ORC) that validated a direction, without the ecosystem or sponsor to matter commercially.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-08-07 | Status.im partnership funds Nim core work [^status-nim] | + |
| E1 | 2019-09-23 | Nim 1.0, stability promise [^nim-10] | + |
| E2 | 2020–2021 | ARC/ORC introduced (ORC first released with 1.4, Dec 2020) [^nim-20] | + |
| E2 | 2021–2022 | Nimskull hard fork by community contributors [^nimskull] | − |
| E3 | 2023-08-01 | Nim 2.0: ORC default, many language cleanups [^nim-20] | + |
| E4 | 2024-10-02 | Nim 2.2.0 (~1000 commits, ORC improvements) [^nim-22] | + |
| E4 | 2025 | Roadmap: Nimony to become Nim 3; target first release autumn 2025 slipped [^nim-roadmap-2025][^nimony] | − |
| E4 | 2026 | Nimony active (ORC cycle collector port, parser speedups) but no Nim 3 release [^nimony-gh] | mixed |

# Ideas it bet on
| Idea | Outcome for Nim |
|---|---|
| Deterministic RC with move semantics ([Perceus-style RC](/ideas/types/perceus-and-reference-counting-fp.md)) | succeeded technically (ORC default in 2.0) |
| AST macros / [compile-time evaluation](/ideas/metaprogramming/comptime-and-staged-compilation.md) | succeeded technically; harms tooling and readability |
| Compile to C for portability | worked; also inherits C toolchain complexity |
| Big rewrite for the next major ([language evolution](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md)) | unproven (Nimony) |

# What succeeded
- **ARC/ORC**: a memory-management migration completed inside a live language, giving deterministic destruction and making Nim usable for embedded and hard-real-time-ish code.[^nim-20]
- **Production in blockchain**: Nimbus runs on resource-constrained validator hardware.[^nimbus]
- **Release discipline**: regular 2.x point releases with backports.[^nim-222]

# What failed or stalled
- **Adoption never broke out** of enthusiasts despite Python-like syntax — the Python-speed niche was taken by Cython, Rust extensions (PyO3) and later [Mojo](/languages/mojo.md).[^tiobe]
- **Governance friction**: Nimskull's hard fork split an already small contributor base.[^nimskull]
- **Second-system risk**: Nimony's planned 2025 release slipped; a compiler rewrite consumes the BDFL's time while the existing compiler's tooling (nimsuggest/LSP) remains a common complaint.[^nimony][^nim-roadmap-2025]

# By era
## E1
- 1.0 and Status.im funding — peak momentum.[^nim-10][^status-nim]
## E2
- ARC/ORC; Nimskull fork.[^nimskull]
## E3
- Nim 2.0 ships.[^nim-20]
## E4
- 2.2 series; Nimony as the Nim 3 path.[^nim-22][^nimony]

# Lessons
- Language-level quality (macros, RC) does not substitute for a killer app or a corporate sponsor.
- BDFL governance can ship big changes (ARC/ORC) but also produces forks when contributors feel unheard.

# Related
- [Zig](/languages/zig.md), [Odin](/languages/odin.md), [V](/languages/v-lang.md), [D](/languages/d-lang.md), [Mojo](/languages/mojo.md)
- [Perceus and RC in FP](/ideas/types/perceus-and-reference-counting-fp.md), [Comptime and staged compilation](/ideas/metaprogramming/comptime-and-staged-compilation.md)

[^nim-10]: Nim Blog: Version 1.0 released — https://nim-lang.org/blog/2019/09/23/version-100-released.html
[^nim-20]: Nim Blog: Nim v2.0 released — https://nim-lang.org/blog/2023/08/01/nim-v20-released.html
[^nim-22]: Nim Blog: Nim 2.2.0 and 2.0.10 released — https://nim-lang.org/blog/2024/10/02/nim-220-2010.html
[^nim-222]: Nim Blog: Nim 2.2.2 released — https://nim-lang.org/blog/2025/02/05/nim-222.html
[^nimony]: Araq: Nimony — https://nim-lang.org/araq/nimony.html
[^nimony-gh]: GitHub: nim-lang/nimony — https://github.com/nim-lang/nimony
[^nim-roadmap-2025]: nim-lang/RFCs #556: Nim Roadmap 2025 and beyond — https://github.com/nim-lang/RFCs/issues/556
[^nimskull]: GitHub: nim-works/nimskull — https://github.com/nim-works/nimskull
[^status-nim]: Nim Blog: Nim partners with Status.im — https://nim-lang.org/blog/2018/08/07/nim-partners-with-status.html
[^nimbus]: GitHub: status-im/nimbus-eth1 — https://github.com/status-im/nimbus-eth1
[^tiobe]: TIOBE Index — https://www.tiobe.com/tiobe-index/
