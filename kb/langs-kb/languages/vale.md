---
type: Language
title: Vale (and successor Valen)
description: Evan Ovadia's research language that popularized generational references and region borrowing as a third memory-safety model; it never passed v0.2 (May 2022), was archived, and in September 2026 was reborn as Valen, a Rust-interop language. Abandoned as a product, influential as an idea.
tags: [systems, research, memory-safety, generational-references, regions, linear-types]
paradigms: [systems, imperative]
typing: static
memory_model: mixed
first_released: 2020
steward: Evan Ovadia (Verdagon), personal project
governance: bdfl
trajectory: dead
ideas: [ideas/memory-safety/ownership-and-borrowing, ideas/types/linear-and-affine-types, ideas/memory-safety/cpp-successor-languages]
runtimes: []
adoption_signals:
  latest_release: { value: "0.2 (final)", as_of: 2022-05-10 }
era_momentum: { E1: up, E2: up, E3: down, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: vale-site
    resource: https://vale.dev/
    title: "The Vale Programming Language (site: 'Vale is archived and no longer being worked on')"
  - id: vale-02
    resource: https://verdagon.dev/blog/version-0.2-released
    title: "Verdagon: Vale 0.2 Released (2022-05-10)"
  - id: genrefs
    resource: https://verdagon.dev/blog/generational-references
    title: "Verdagon: Vale's Memory Safety Strategy — Generational References and Regions"
  - id: regions
    resource: https://verdagon.dev/blog/zero-cost-memory-safety-regions-overview
    title: "Verdagon: Zero-Cost Memory Safety with Vale Regions (Preview)"
  - id: mojo-join
    resource: https://verdagon.dev/blog/on-joining-mojo-compiler-team
    title: "Verdagon: On joining the Mojo compiler team (2025-08-28; joined 2024-07-16)"
  - id: golden-spike
    resource: https://verdagon.dev/blog/golden-spike-reviving-vale-valen
    title: "Verdagon: The Golden Spike, and Resurrecting the Vale(n) Programming Language (2026-09-17)"
  - id: reg-valen
    resource: https://www.theregister.com/devops/2026/09/25/valen-creator-drives-golden-spike-to-connect-new-languages-with-rust/5299273
    title: "The Register: Valen creator drives 'Golden Spike' to connect new languages with Rust (2026-09-25)"
---

# Summary
Vale was a one-person research language whose main contribution was a *third* memory-safety model between garbage collection and Rust-style borrow checking: **generational references** (each allocation carries a generation counter; each non-owning reference remembers the generation it expects and checks it on dereference), combined with **region borrowing** to elide most checks, plus "higher RAII" built on linear types.[^genrefs][^regions] Vale shipped v0.2 on 2022-05-10 and never shipped again; its site now says it is "archived and no longer being worked on."[^vale-02][^vale-site] Its author, Evan Ovadia, joined Modular's Mojo compiler team on 2024-07-16, writing that Vale "largely accomplished its original goal of showing the world that there are other memory safety models out there" and that he had considered its design "more or less complete."[^mojo-join] In September 2026 he announced **Valen**, a successor using "group borrowing" and deep Rust interop including cross-language generics ("the Golden Spike").[^golden-spike][^reg-valen] Verdict: **abandoned as a language, succeeded as an idea vector** (Ovadia says Vale "directly inspired Mojo to add linear types").[^golden-spike]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1–E2 | 2020–2021 | Generational references articles circulate widely in PL communities [^genrefs] | + |
| E2 | 2022-05-10 | Vale 0.2: higher RAII, concept functions, FFI, modules [^vale-02] | + |
| E3 | 2022–2023 | Regions preview; development slows [^regions][^mojo-join] | − |
| E3 | 2024-07-16 | Ovadia joins Modular (Mojo) compiler team [^mojo-join] | − (for Vale) |
| E4 | 2025-08-28 | "On joining the Mojo compiler team": Vale's design considered complete [^mojo-join] | − |
| E4 | 2026-09-17 | Valen announced: group borrowing, Rust interop with cross-language generics [^golden-spike] | mixed |

# Ideas it bet on
| Idea | Outcome for Vale |
|---|---|
| Generational references (runtime-checked non-owning refs) | idea spread; Vale itself abandoned |
| Region borrowing to remove checks | preview only, never production |
| Higher RAII / [linear types](/ideas/types/linear-and-affine-types.md) | influenced Mojo per author [^golden-spike] |
| [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md) alternatives | Valen pivots to "group borrowing" |

# What succeeded
- **Clear writing that moved the conversation.** Ovadia's blog made "memory safety ≠ borrow checker" mainstream in language-design circles; generational indices/handles became a common pattern (e.g., handle maps in game engines, Odin's `core:container/handle_map`).[^genrefs]
- **Influence via people**: the designer went to work on Mojo's ownership model.[^mojo-join]

# What failed or stalled
- **Never became usable**: one maintainer, no sponsor, no ecosystem; v0.2 (2022) is the final release.[^vale-site]
- **Interop gap**: Valen's premise — that a new language must ride on Rust's ecosystem through deep generic interop — is an implicit admission that standalone new systems languages cannot bootstrap an ecosystem in this era.[^reg-valen]

# By era
## E1
- Early Vale designs and generational-references posts.[^genrefs]
## E2
- 0.2 release, the high point.[^vale-02]
## E3
- Regions preview, slowdown, author joins Modular.[^regions][^mojo-join]
## E4
- Archived; reborn as Valen in Sept 2026.[^golden-spike]

# Lessons
- Solo research languages succeed when they export ideas, not when they chase users.
- By 2026 the bar for a new systems language includes interop with Rust as well as C — "riding Rust" replaced "riding C" as the bootstrap strategy for at least one designer.[^reg-valen]

# Related
- [Rust](/languages/rust.md), [Mojo](/languages/mojo.md), [Hylo](/languages/hylo.md), [Odin](/languages/odin.md)
- [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md), [Linear and affine types](/ideas/types/linear-and-affine-types.md)

[^vale-site]: The Vale Programming Language — https://vale.dev/
[^vale-02]: Verdagon: Vale 0.2 Released — https://verdagon.dev/blog/version-0.2-released
[^genrefs]: Verdagon: Generational References and Regions — https://verdagon.dev/blog/generational-references
[^regions]: Verdagon: Zero-Cost Memory Safety with Vale Regions — https://verdagon.dev/blog/zero-cost-memory-safety-regions-overview
[^mojo-join]: Verdagon: On joining the Mojo compiler team — https://verdagon.dev/blog/on-joining-mojo-compiler-team
[^golden-spike]: Verdagon: The Golden Spike, and Resurrecting the Vale(n) Programming Language — https://verdagon.dev/blog/golden-spike-reviving-vale-valen
[^reg-valen]: The Register: Valen creator drives 'Golden Spike' — https://www.theregister.com/devops/2026/09/25/valen-creator-drives-golden-spike-to-connect-new-languages-with-rust/5299273
