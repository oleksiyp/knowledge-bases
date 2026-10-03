---
type: Language
title: V (Vlang)
description: Go-like compiled language whose 2019 launch promised memory safety without GC ("autofree"), instant compilation and much more; seven years later V 0.5 (Dec 2025) still defaults to a tracing GC with autofree "experimental and not production ready", making V the era's clearest case of hype outrunning delivery. Niche, credibility-damaged.
tags: [systems, go-like, autofree, hype, transpile-to-c, overpromising]
paradigms: [systems, imperative, procedural]
typing: static
memory_model: gc
first_released: 2019
steward: Alexander Medvednikov and V contributors
governance: bdfl
trajectory: niche
ideas: [ideas/memory-safety/ownership-and-borrowing, ideas/metaprogramming/comptime-and-staged-compilation]
runtimes: []
adoption_signals:
  latest_release: { value: "0.5.2", as_of: 2026-07-12 }
era_momentum: { E1: up, E2: flat, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: vlang-home
    resource: https://vlang.io/
    title: "vlang.io homepage (memory management: default tracing GC; autofree 'still experimental and not production ready yet')"
  - id: v-05
    resource: https://github.com/vlang/v/releases/tag/0.5
    title: "GitHub: vlang/v Release 0.5 (2025-12-31; 3700 fixes since 0.4)"
  - id: v-052
    resource: https://github.com/vlang/v/releases/tag/0.5.2
    title: "GitHub: vlang/v Release 0.5.2 (2026-07-12)"
  - id: xe-vapor
    resource: https://christine.website/blog/v-vaporware-2019-06-23
    title: "Xe Iaso: V is for Vaporware (2019-06-23)"
  - id: hn-vapor
    resource: https://news.ycombinator.com/item?id=29836360
    title: "Hacker News (2022): 'V is still vaporware at this point, most of the claims on the website are...'"
  - id: v-review-2023
    resource: https://n-skvortsov-1997.github.io/reviews/
    title: "V Language Review (2023) — independent critical review of claims incl. autofree"
  - id: justinas-v
    resource: https://justinas.org/the-bizarre-world-of-v
    title: "Justinas Stankevičius: The bizarre world of V"
  - id: hn-v-defense
    resource: https://news.ycombinator.com/item?id=37304740
    title: "Hacker News (2023): V maintainer-side rebuttal of the 'vaporware' characterization"
---

# Summary
V announced itself in early 2019 with a list of headline promises — compile ~1M lines/second, no GC yet memory-safe via **autofree** (compiler-inserted frees), no null, no undefined behaviour, hot reload, C-to-V translation — and attracted a large following (and Patreon support) before the source was public (exact star counts at the time unverified). When the code appeared on 2019-06-22, reviewers found many claims unimplemented or untrue, popularizing the "V is for vaporware" critique.[^xe-vapor] Development has continued steadily since (V 0.5 on 2025-12-31 with "3700 fixes since V 0.4"; 0.5.2 on 2026-07-12), and V is a usable Go-like language that compiles via C.[^v-05][^v-052] But the central memory-management promise did not materialize: the homepage in 2026 says the *default* is "a minimal and well performing tracing GC", and autofree "is still experimental and not production ready yet. That's planned for V 1.0."[^vlang-home] Independent reviews (2023) catalogued autofree handling only some allocation patterns and other gaps between claims and behaviour; V's defenders call this unfair.[^v-review-2023][^hn-v-defense] Verdict: **niche, credibility-damaged** — the reference case for "don't market a language on features it doesn't have."

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-06-22 | Source released; "V is for Vaporware" critique next day [^xe-vapor] | − |
| E1–E2 | 2019–2022 | Steady 0.x releases; persistent vaporware debate on HN [^hn-vapor] | mixed |
| E3 | 2023 | Independent review documents autofree and safety-claim gaps [^v-review-2023] | − |
| E4 | 2025-12-31 | V 0.5: new comptime stage, scoped `defer`, ORM/web improvements [^v-05] | + |
| E4 | 2026-07-12 | V 0.5.2 [^v-052] | = |
| E4 | 2026 | Homepage: tracing GC default; autofree experimental, deferred to 1.0 [^vlang-home] | − |

# Ideas it bet on
| Idea | Outcome for V |
|---|---|
| "Autofree": memory safety without GC or borrow checker | failed / unproven after 7 years; GC is default [^vlang-home] |
| Extremely fast compilation via C/tcc backends | succeeded (self-compile in well under a second per project claims) [^vlang-home] |
| Go-like simplicity with sum types, option/result | delivered |
| [Compile-time](/ideas/metaprogramming/comptime-and-staged-compilation.md) code generation (`$if`, comptime stage) | delivered incrementally [^v-05] |

# What succeeded
- **Persistence and output**: frequent releases, a large standard library (web framework, ORM, crypto), and a community that kept shipping despite reputational damage.[^v-05]
- **Fast builds** remain a genuine strength via the tcc backend.[^vlang-home]

# What failed or stalled
- **Trust.** The launch-era gap between marketing and implementation became the language's identity in many developer communities; that is very hard to recover from.[^xe-vapor][^justinas-v]
- **Memory safety story**: autofree never became the default; relying on a GC put V in competition with Go, which it cannot match on ecosystem.[^vlang-home]
- **No 1.0** after seven years, with 1.0 now carrying the autofree promise.[^vlang-home]

# By era
## E1
- Hype-fuelled launch, star explosion, vaporware backlash.[^xe-vapor]
## E2
- Continued development; reputation largely fixed by then.[^hn-vapor]
## E3
- Critical reviews of safety claims.[^v-review-2023]
## E4
- 0.5 series; autofree still experimental.[^v-05][^vlang-home]

# Lessons
- In language design, credibility compounds: announcing unimplemented guarantees (especially safety ones) costs more than it gains in stars.
- "Memory safety without GC *and* without a borrow checker or RC" is a much harder problem than it looks — compare [Rust](/languages/rust.md)'s borrow checker, [Vale](/languages/vale.md)'s generational references and [Nim](/languages/nim.md)'s ORC, all of which pay some explicit cost.

# Related
- [Go](/languages/go.md), [Zig](/languages/zig.md), [Odin](/languages/odin.md), [Nim](/languages/nim.md), [Rust](/languages/rust.md)
- [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md)

[^vlang-home]: vlang.io homepage — https://vlang.io/
[^v-05]: GitHub: vlang/v Release 0.5 — https://github.com/vlang/v/releases/tag/0.5
[^v-052]: GitHub: vlang/v Release 0.5.2 — https://github.com/vlang/v/releases/tag/0.5.2
[^xe-vapor]: Xe Iaso: V is for Vaporware — https://christine.website/blog/v-vaporware-2019-06-23
[^hn-vapor]: Hacker News: "V is still vaporware…" thread — https://news.ycombinator.com/item?id=29836360
[^v-review-2023]: V Language Review (2023) — https://n-skvortsov-1997.github.io/reviews/
[^justinas-v]: Justinas Stankevičius: The bizarre world of V — https://justinas.org/the-bizarre-world-of-v
[^hn-v-defense]: Hacker News: rebuttal of the "vaporware" characterization — https://news.ycombinator.com/item?id=37304740
