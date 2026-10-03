---
type: Language
title: Odin
description: Data-oriented "better C" for games and graphics by Ginger Bill; a small language with one flagship commercial user (JangaFX) that spent the whole 2018–2026 period on monthly dev releases and only in July 2026 announced a first stable release ("Odin 2027", RC targeted for Christmas 2026). Niche but steady.
tags: [systems, better-c, gamedev, data-oriented, manual-memory, allocators]
paradigms: [systems, imperative, procedural]
typing: static
memory_model: manual
first_released: 2016
steward: Ginger Bill (Bill Hall) and Odin contributors
governance: bdfl
trajectory: niche
ideas: [ideas/metaprogramming/comptime-and-staged-compilation, ideas/memory-safety/bounds-safety-and-hardened-c]
runtimes: []
adoption_signals:
  release_cadence: { value: "monthly dev-YYYY-MM tags", as_of: 2026-09 }
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: odin-releases
    resource: https://github.com/odin-lang/Odin/releases
    title: "GitHub: odin-lang/Odin releases (monthly dev-YYYY-MM tags)"
  - id: odin-showcase
    resource: https://odin-lang.org/showcase/
    title: "Odin: Showcase (JangaFX EmberGen and others)"
  - id: odin-newsletter-2026q1
    resource: https://odin-lang.org/news/newsletter-2026-q1/
    title: "Odin: 2025 Q4 and 2026 Q1 Newsletter (2026-02-11)"
  - id: odin-1-0-video
    resource: https://www.youtube.com/watch?v=dLPAqXi9In0
    title: "Ginger Bill: Odin 1.0 Announcement (video, July 2026)"
  - id: odin-1-0-hn
    resource: https://news.ycombinator.com/item?id=48813850
    title: "Hacker News: Odin 1.0 Announcement (July 2026)"
  - id: odin-1-0-lobsters
    resource: https://lobste.rs/s/5rvgim/odin_1_0_announcement
    title: "Lobsters: Odin 1.0 Announcement — 'Odin 2027', RC by Christmas 2026"
  - id: hn-embergen
    resource: https://news.ycombinator.com/item?id=22204611
    title: "Hacker News (2020): One of the big users of Odin at the moment is JangaFX's EmberGen"
  - id: odin-faq
    resource: https://github.com/odin-lang/Odin/wiki/Frequently-Asked-Questions-(FAQ)
    title: "Odin Wiki: Frequently Asked Questions"
---

# Summary
Odin is a C-alternative built for "the joy of programming" in games, simulation and graphics: explicit allocators passed through an implicit `context`, `defer`, distinct types, built-in SoA layouts and array programming, parametric polymorphism without templates, and bounds checks on by default (with opt-out).[^odin-faq] Its defining adoption story is **JangaFX**, whose EmberGen real-time volumetric fluid tool (and siblings) is written fully in Odin and used across the games and film industries.[^odin-showcase] Odin never chased memory safety beyond bounds checks, and never chased hype; instead it shipped monthly `dev-YYYY-MM` builds for years, with steady library growth (e.g. `core:nbio` with io_uring/IOCP/kqueue, LTO, tail calls in early 2026).[^odin-releases][^odin-newsletter-2026q1] In July 2026, on the language's 10th anniversary, Bill announced the road to the first stable release, named **"Odin 2027"**: release candidate targeted for Christmas 2026, release in January 2027.[^odin-1-0-video][^odin-1-0-lobsters] Verdict: **niche but healthy** — one of the few "better C" languages whose commercial users predate its 1.0.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-01 | JangaFX's EmberGen cited as Odin's biggest production user [^odin-showcase][^hn-embergen] | + |
| E2 | 2021–2022 | Monthly `dev-YYYY-MM` release tags become the norm (exact start unverified) [^odin-releases] | + |
| E3 | 2023–2024 | Core library growth; vendor bindings (raylib, SDL, Vulkan…) [^odin-releases] | + |
| E4 | 2026-02-11 | Newsletter: new `core:os`, `core:nbio`, `#must_tail`, license BSD-3 → zlib [^odin-newsletter-2026q1] | + |
| E4 | 2026-07 | "Odin 1.0 Announcement": first stable named Odin 2027; RC Christmas 2026 [^odin-1-0-video][^odin-1-0-hn] | + |
| E4 | 2026-09 | dev-2026-09 release continues monthly cadence [^odin-releases] | = |

# Ideas it bet on
| Idea | Outcome for Odin |
|---|---|
| Explicit allocators + implicit context (shared with [Zig](/languages/zig.md)'s allocator-passing culture) | succeeded in its niche |
| Bounds checks by default, no borrow checker (cf. [bounds safety](/ideas/memory-safety/bounds-safety-and-hardened-c.md)) | adequate for games; irrelevant to regulators |
| Limited compile-time execution (`#run`-style `when`, parapoly) rather than full [comptime](/ideas/metaprogramming/comptime-and-staged-compilation.md) | deliberate simplicity |
| "No package manager" philosophy | contrarian; keeps it niche |

# What succeeded
- **A real commercial anchor.** EmberGen proved the language production-worthy long before 1.0, and gave the project a sponsor whose incentives (shipping software) match the language's.[^odin-showcase]
- **Low drama, steady cadence.** Monthly releases for years without the overpromising seen in [V](/languages/v-lang.md).[^odin-releases]
- **Pragmatic batteries**: vendor libraries for graphics/game stacks make it pleasant for its target domain.

# What failed or stalled
- **No stable version for ~10 years**, which kept risk-averse adopters away until the "Odin 2027" announcement.[^odin-1-0-lobsters]
- **Visibility**: absent from mainstream survey top lists; growth comes from the Handmade/game-dev community rather than industry.
- **No memory-safety story** beyond bounds checks, so it plays no part in the [memory safety policy push](/ideas/memory-safety/memory-safety-policy-push.md).

# By era
## E1
- EmberGen in production; Odin known in Handmade Network circles.[^odin-showcase]
## E2
- Monthly dev releases become the norm.[^odin-releases]
## E3
- Library and tooling growth; competes with Zig for the "better C" mindshare.
## E4
- Large core library refactors (2026), 1.0 roadmap announced as "Odin 2027".[^odin-newsletter-2026q1][^odin-1-0-video]

# Lessons
- One committed commercial user can sustain a language for a decade if the designer stays focused on that user's domain.
- Refusing to call anything "1.0" until the core library is redesigned trades early adoption for fewer breaking promises later.

# Related
- [Zig](/languages/zig.md), [C](/languages/c.md), [Hare](/languages/hare.md), [V](/languages/v-lang.md), [Nim](/languages/nim.md)
- [Comptime and staged compilation](/ideas/metaprogramming/comptime-and-staged-compilation.md)

[^odin-releases]: GitHub: odin-lang/Odin releases — https://github.com/odin-lang/Odin/releases
[^odin-showcase]: Odin: Showcase — https://odin-lang.org/showcase/
[^odin-newsletter-2026q1]: Odin: 2025 Q4 and 2026 Q1 Newsletter — https://odin-lang.org/news/newsletter-2026-q1/
[^odin-1-0-video]: Ginger Bill: Odin 1.0 Announcement (video) — https://www.youtube.com/watch?v=dLPAqXi9In0
[^odin-1-0-hn]: Hacker News: Odin 1.0 Announcement — https://news.ycombinator.com/item?id=48813850
[^odin-1-0-lobsters]: Lobsters: Odin 1.0 Announcement — https://lobste.rs/s/5rvgim/odin_1_0_announcement
[^hn-embergen]: Hacker News (2020): JangaFX's EmberGen as big Odin user — https://news.ycombinator.com/item?id=22204611
[^odin-faq]: Odin Wiki: FAQ — https://github.com/odin-lang/Odin/wiki/Frequently-Asked-Questions-(FAQ)
