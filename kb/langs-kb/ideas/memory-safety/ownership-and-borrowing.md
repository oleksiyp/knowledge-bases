---
type: Idea
title: Ownership and borrowing (static, GC-free memory safety)
description: "Track a unique owner for every value and check temporary borrows at compile time, so memory safety needs neither GC nor runtime checks. 2018–2026 verdict: succeeded — Rust carried it into Linux, Android, Windows and Chromium with measured security wins, and Swift, Mojo, OCaml (OxCaml), Carbon and Hylo adopted variants; attempts to retrofit it onto C++ and D failed."
area: memory-safety
tags: [ownership, borrow-checker, affine-types, rust, swift, mojo, memory-safety]
outcome: succeeded
maturity_2026: mainstream
origin_year: 2002
mainstream_year: 2022
languages: [languages/rust, languages/swift, languages/mojo, languages/carbon, languages/hylo, languages/vale, languages/d-lang, languages/cpp]
runtimes: []
related_ideas:
  - ideas/types/linear-and-affine-types
  - ideas/concurrency/data-race-safety-in-types
  - ideas/memory-safety/safe-cpp-vs-profiles
  - ideas/memory-safety/cpp-successor-languages
  - ideas/memory-safety/rust-in-os-kernels
  - ideas/types/perceus-and-reference-counting-fp
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: rust-2018-nll
    resource: https://blog.rust-lang.org/2018/12/06/Rust-1.31-and-rust-2018/
    title: "Rust Blog: Announcing Rust 1.31 and Rust 2018 (non-lexical lifetimes)"
    author: org:rust-lang
  - id: polonius-2026
    resource: https://blog.rust-lang.org/2026/08/04/enabling-polonius-alpha-on-nightly/
    title: "Rust Blog: Enabling the next iteration of the borrow checker on nightly (Polonius alpha, 2026-08-04)"
    author: org:rust-lang
  - id: android-2022
    resource: https://security.googleblog.com/2022/12/memory-safe-languages-in-android-13.html
    title: "Google Security Blog: Memory Safe Languages in Android 13 (2022-12)"
  - id: android-2025
    resource: https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html
    title: "Google Security Blog: Rust in Android: move fast and fix things (2025-11-13)"
  - id: se0390
    resource: https://github.com/swiftlang/swift-evolution/blob/main/proposals/0390-noncopyable-structs-and-enums.md
    title: "Swift Evolution SE-0390: Noncopyable structs and enums (Swift 5.9)"
  - id: se0377
    resource: https://github.com/swiftlang/swift-evolution/blob/main/proposals/0377-parameter-ownership-modifiers.md
    title: "Swift Evolution SE-0377: borrowing and consuming parameter ownership modifiers"
  - id: oxcaml
    resource: https://blog.janestreet.com/oxidizing-ocaml-ownership/
    title: "Jane Street Blog: Oxidizing OCaml — Rust-Style Ownership (2023)"
  - id: p3390
    resource: https://isocpp.org/files/papers/P3390R0.html
    title: "WG21 P3390R0: Safe C++ (borrow checking for C++, 2024-09-11)"
  - id: reg-safecpp
    resource: https://www.theregister.com/2025/09/16/safe_c_proposal_ditched/
    title: "The Register: Safe C++ proposal all but abandoned in favor of profiles (2025-09-16)"
  - id: d-live
    resource: https://forum.dlang.org/thread/qssaruktegnbtsdjeyri@forum.dlang.org
    title: "D Forum: D needs first-class lifetimes before it can get ownership and borrowing"
  - id: carbon-roadmap
    resource: https://docs.carbon-lang.dev/docs/project/roadmap.html
    title: "Carbon Language: Roadmap (memory safety following the direction of Rust)"
  - id: hylo
    resource: https://hylo-lang.org/
    title: "Hylo: mutable value semantics for safe systems programming"
  - id: state-of-rust-2025
    resource: https://blog.rust-lang.org/2026/03/02/2025-State-Of-Rust-Survey-results
    title: "Rust Blog: 2025 State of Rust Survey Results"
    author: org:rust-lang
  - id: infoq-bun
    resource: https://www.infoq.com/news/2026/09/bun-AI-rewrite-zig-rust-4-months/
    title: "InfoQ: Bun rewrites 535K lines of Zig into Rust in four months (2026-09)"
  - id: lwn-exp-end
    resource: https://lwn.net/Articles/1049831/
    title: "LWN: The (successful) end of the kernel Rust experiment (2025-12)"
---

# Summary
**Succeeded.** Ownership-and-borrowing is the most consequential language idea of 2018–2026. Rust turned an academic lineage (linear/affine types, Cyclone's regions) into an industrial default, and the evidence of benefit became quantitative: Android's memory-safety share of vulnerabilities fell from ~76% in 2019 to under 20% in 2025, with Rust code showing ~1000x lower memory-safety vulnerability density than C/C++ and *faster* delivery (4x lower rollback rate).[^android-2022][^android-2025] Linux declared Rust permanent in December 2025.[^lwn-exp-end] Other languages adopted partial versions — Swift's noncopyable types and `borrowing`/`consuming` (5.9),[^se0390][^se0377] Jane Street's OxCaml modes,[^oxcaml] Mojo's ownership, Carbon's planned safe dialect.[^carbon-roadmap] Where it failed was *retrofitting*: Safe C++ (a borrow-checked C++ dialect) was abandoned in 2025,[^reg-safecpp] and D's `@live`/DIP1000 never became default.[^d-live] The cost — learning curve, lifetime annotations, fights with the checker — is real but shrinking (NLL 2018, Polonius alpha 2026).[^rust-2018-nll][^polonius-2026]

# The idea
Every value has exactly one owner; when the owner goes out of scope the value is destroyed (RAII without double-free). Code may *borrow* references — either many shared (`&T`) or one exclusive (`&mut T`) — and the compiler proves no borrow outlives its referent. This "aliasing XOR mutability" rule simultaneously prevents use-after-free, double free, iterator invalidation and (with `Send`/`Sync`) data races, at zero runtime cost. Prior art: linear logic (Girard 1987), Cyclone regions (~2002), C++ `unique_ptr`/move semantics (2011). The problem it solved: 60–70% of serious security bugs in large C/C++ codebases (Microsoft, Chromium, Android) were memory-safety bugs, and GC was unacceptable for kernels, browsers and embedded code.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-12 | Rust 2018 ships non-lexical lifetimes, removing many false borrow errors [^rust-2018-nll] | + |
| E2 | 2022-12 | Android 13: 21% of new native code in Rust, zero Rust memory-safety vulns found [^android-2022] | + |
| E3 | 2022-12 | Linux 6.1 merges Rust support ([event](/events/2022-12-linux-6-1-merges-rust.md)) | + |
| E3 | 2023-05 | Jane Street "Oxidizing OCaml": locality, uniqueness and ownership modes [^oxcaml] | + |
| E3 | 2023-09 | Swift 5.9: noncopyable types, borrowing/consuming parameters [^se0390][^se0377] | + |
| E3 | 2024-09 | Safe C++ (P3390) proposes Rust's model for C++ [^p3390] | + |
| E4 | 2025-01 | Carbon commits to a Rust-direction memory-safety design before 0.1 [^carbon-roadmap] | + |
| E4 | 2025-09 | Safe C++ abandoned; WG21 picks profiles [^reg-safecpp] | − |
| E4 | 2025-11 | Android: <20% memory-safety vulns; ~1000x lower density in Rust [^android-2025] | + |
| E4 | 2025-12 | Linux: Rust no longer experimental [^lwn-exp-end] | + |
| E4 | 2026-05 | Bun abandons Zig for Rust citing leaks and crashes [^infoq-bun] | + |
| E4 | 2026-08 | Polonius alpha enabled on nightly ahead of stabilisation [^polonius-2026] | + |

# Where it succeeded
- **Greenfield systems code at the biggest vendors**: Android (Binder, Keystore, UWB, DNS), Chromium (fonts, parsers), Windows kernel components, AWS (Firecracker), Cloudflare (Pingora).[^android-2025]
- **Measured outcomes**: the Android data is the strongest causal evidence in this KB; memory-safety vulnerabilities declined as the share of new memory-unsafe code declined, even though old C++ remained.[^android-2022][^android-2025]
- **Influence on other languages**: Swift, OCaml, Mojo, Carbon, Hylo, Vale all moved towards explicit ownership/uniqueness, each softening the model (value semantics, modes, generational references).[^se0390][^oxcaml][^hylo]
- **Rewrites**: when large projects in unsafe languages migrated in 2025–26 (fish, Ladybird LibJS, Bun), they picked the ownership model.[^infoq-bun]

# Where it failed or stalled
- **Retrofitting onto C++**: Safe C++ needed a new reference type, a new std library and "safe" function colouring; WG21 rejected it for profiles (≈20 vs ≈30 of 45 votes).[^reg-safecpp]
- **D's @live/DIP1000**: shipped as opt-in around 2019–2020, never became default; long-time users report fundamental design problems.[^d-live]
- **Ergonomics ceiling**: self-referential structures, graphs and async borrowing remain hard; complexity is a top-2 worry among Rust users (41.6% in 2025).[^state-of-rust-2025] Polonius, designed ~2018, was still only on nightly in August 2026.[^polonius-2026]

# Why
1. **The problem was enormous and quantified.** "~70% of CVEs are memory safety" from Microsoft/Chromium/Android gave executives a number; ownership was the only known fix without GC.
2. **Zero-cost was non-negotiable** for kernels, browsers and embedded; GC'd memory-safe languages could not enter those domains. Ownership was the only option that met performance and safety simultaneously.
3. **New code is where bugs are.** Google showed vulnerabilities decay with code age, so writing *new* code in a safe language captured most of the benefit without rewriting — making incremental adoption economical.[^android-2025]
4. **Rust paired the idea with excellent tooling** (cargo, error messages, clippy) that softened the learning curve; languages that offered ownership without the ecosystem (D, Vale) did not get adoption.
5. **Retrofits fail on compatibility.** A borrow checker requires the *library* to be designed for it; C++ and D could not change their standard libraries and idioms, so the checker became an opt-in island few would use.
6. **Policy pressure** (NSA 2022, ONCD 2024, CISA 2024–25) converted a technical preference into a procurement criterion — see [memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md).

# Lessons
- Soundness plus good tooling can overcome a steep learning curve when the payoff is measurable.
- Ownership is not only a safety tool; Android found it improves delivery speed and review cost.
- Retrofitting a type-system discipline onto an existing ecosystem rarely works; successor languages with interop are the realistic path.
- Expect hybrid designs (value semantics, modes, RC+uniqueness) to spread ownership ideas to higher-level languages.

# Related
- Languages: [Rust](/languages/rust.md), [Swift](/languages/swift.md), [Mojo](/languages/mojo.md), [Carbon](/languages/carbon.md), [Hylo](/languages/hylo.md), [Vale](/languages/vale.md), [D](/languages/d-lang.md), [C++](/languages/cpp.md), [OCaml](/languages/ocaml.md)
- Ideas: [Linear and affine types](/ideas/types/linear-and-affine-types.md), [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md), [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md), [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md), [Perceus and RC in FP](/ideas/types/perceus-and-reference-counting-fp.md)
- Events: [Android memory safety below 20%](/events/2025-11-android-memory-safety-below-20pct.md), [Safe C++ abandoned](/events/2025-09-safe-cpp-abandoned.md)

[^rust-2018-nll]: Rust Blog: Announcing Rust 1.31 and Rust 2018 — https://blog.rust-lang.org/2018/12/06/Rust-1.31-and-rust-2018/
[^polonius-2026]: Rust Blog: Enabling the next iteration of the borrow checker on nightly — https://blog.rust-lang.org/2026/08/04/enabling-polonius-alpha-on-nightly/
[^android-2022]: Google Security Blog: Memory Safe Languages in Android 13 — https://security.googleblog.com/2022/12/memory-safe-languages-in-android-13.html
[^android-2025]: Google Security Blog: Rust in Android: move fast and fix things — https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html
[^se0390]: Swift Evolution SE-0390: Noncopyable structs and enums — https://github.com/swiftlang/swift-evolution/blob/main/proposals/0390-noncopyable-structs-and-enums.md
[^se0377]: Swift Evolution SE-0377: Parameter ownership modifiers — https://github.com/swiftlang/swift-evolution/blob/main/proposals/0377-parameter-ownership-modifiers.md
[^oxcaml]: Jane Street Blog: Oxidizing OCaml — Rust-Style Ownership — https://blog.janestreet.com/oxidizing-ocaml-ownership/
[^p3390]: WG21 P3390R0: Safe C++ — https://isocpp.org/files/papers/P3390R0.html
[^reg-safecpp]: The Register: Safe C++ proposal all but abandoned — https://www.theregister.com/2025/09/16/safe_c_proposal_ditched/
[^d-live]: D Forum: D needs first-class lifetimes before it can get ownership and borrowing — https://forum.dlang.org/thread/qssaruktegnbtsdjeyri@forum.dlang.org
[^carbon-roadmap]: Carbon Language: Roadmap — https://docs.carbon-lang.dev/docs/project/roadmap.html
[^hylo]: Hylo — https://hylo-lang.org/
[^state-of-rust-2025]: Rust Blog: 2025 State of Rust Survey Results — https://blog.rust-lang.org/2026/03/02/2025-State-Of-Rust-Survey-results
[^infoq-bun]: InfoQ: Bun rewrites 535K lines of Zig into Rust — https://www.infoq.com/news/2026/09/bun-AI-rewrite-zig-rust-4-months/
[^lwn-exp-end]: LWN: The (successful) end of the kernel Rust experiment — https://lwn.net/Articles/1049831/
