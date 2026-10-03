---
type: Language
title: Rust
description: "Ownership-based, GC-free memory-safe systems language. The clearest language success of 2018–2026: it went from a Mozilla research language to a permanent part of Linux, Android, Windows and Chromium, entered the TIOBE top 10 (July 2026), and became the default target for rewrites (manual and AI-driven). Its async story, compile times and complexity are the main open problems."
tags: [systems, memory-safety, ownership, foundation, linux-kernel, android, async]
paradigms: [systems, multi-paradigm, functional-influenced]
typing: static
memory_model: ownership
first_released: 2015
steward: Rust Foundation / Rust Project (Leadership Council)
governance: foundation
trajectory: rising
ideas:
  - ideas/memory-safety/ownership-and-borrowing
  - ideas/memory-safety/rust-in-os-kernels
  - ideas/memory-safety/c-to-rust-translation
  - ideas/memory-safety/memory-safety-policy-push
  - ideas/concurrency/async-await-and-function-coloring
  - ideas/metaprogramming/compile-time-reflection
  - ideas/metaprogramming/comptime-and-staged-compilation
  - ideas/tooling-and-ecosystem/language-editions-and-evolution
  - ideas/concurrency/data-race-safety-in-types
  - ideas/tooling-and-ecosystem/native-rewrites-of-tooling
runtimes: []
adoption_signals:
  tiobe_rank: { value: 10, as_of: 2026-09 }
  tiobe_rating_pct: { value: 1.34, as_of: 2026-09 }
  so_survey_admired_pct: { value: 72, as_of: 2025 }
  state_of_rust_responses: { value: 7156, as_of: 2025 }
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: rust-2018
    resource: https://blog.rust-lang.org/2018/12/06/Rust-1.31-and-rust-2018/
    title: "Rust Blog: Announcing Rust 1.31 and Rust 2018 (2018-12-06)"
    author: org:rust-lang
  - id: rust-async-139
    resource: https://blog.rust-lang.org/2019/11/07/Rust-1.39.0/
    title: "Rust Blog: Announcing Rust 1.39.0 (async/await stable, 2019-11-07)"
    author: org:rust-lang
  - id: rust-mozilla-2020
    resource: https://blog.rust-lang.org/2020/08/18/laying-the-foundation-for-rusts-future.html
    title: "Rust Blog: Laying the foundation for Rust's future (after Mozilla layoffs, 2020-08-18)"
    author: org:rust-lang
  - id: modteam-2021
    resource: https://github.com/rust-lang/team/pull/671
    title: "rust-lang/team PR #671: Moderation team resignation (2021-11-22)"
  - id: rf-founded
    resource: https://techcrunch.com/2021/02/08/the-rust-programming-language-finds-a-new-home-in-a-non-profit-foundation/
    title: "TechCrunch: AWS, Microsoft, Mozilla and others launch the Rust Foundation (2021-02-08)"
  - id: rust-175
    resource: https://blog.rust-lang.org/2023/12/21/async-fn-rpit-in-traits/
    title: "Rust Blog: Announcing async fn and return-position impl Trait in traits (Rust 1.75)"
    author: org:rust-lang
  - id: rust-185
    resource: https://blog.rust-lang.org/2025/02/20/Rust-1.85.0/
    title: "Rust Blog: Announcing Rust 1.85.0 and Rust 2024 (2025-02-20)"
    author: org:rust-lang
  - id: rustconf-thephd
    resource: https://thephd.dev/i-am-no-longer-speaking-at-rustconf-2023
    title: "JeanHeyd Meneide: I Am No Longer Speaking at RustConf 2023"
  - id: ferrocene
    resource: https://ferrous-systems.com/blog/officially-qualified-ferrocene/
    title: "Ferrous Systems: Officially Qualified - Ferrocene (ISO 26262 ASIL D, 2023-11-08)"
  - id: chromium-rust
    resource: https://security.googleblog.com/2023/01/supporting-use-of-rust-in-chromium.html
    title: "Google Security Blog: Supporting the Use of Rust in the Chromium Project (2023-01)"
  - id: lwn-exp-end
    resource: https://lwn.net/Articles/1049831/
    title: "LWN: The (successful) end of the kernel Rust experiment (2025-12)"
  - id: android-2025
    resource: https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html
    title: "Google Security Blog: Rust in Android: move fast and fix things (2025-11-13)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology (Rust most admired, 72%)"
  - id: tiobe-sep26
    resource: https://www.techrepublic.com/article/news-tiobe-september-2026-julia-nears-top-20/
    title: "TechRepublic: TIOBE Index September 2026 (Rust #10, 1.34%)"
  - id: state-of-rust-2025
    resource: https://blog.rust-lang.org/2026/03/02/2025-State-Of-Rust-Survey-results
    title: "Rust Blog: 2025 State of Rust Survey Results (2026-03-02)"
    author: org:rust-lang
  - id: perf-survey-2025
    resource: https://blog.rust-lang.org/2025/09/10/rust-compiler-performance-survey-2025-results/
    title: "Rust Blog: Rust compiler performance survey 2025 results"
    author: org:rust-lang
  - id: async-std-eol
    resource: https://rustsec.org/advisories/RUSTSEC-2025-0052.html
    title: "RustSec: RUSTSEC-2025-0052 async-std has been discontinued"
  - id: reg-bun
    resource: https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
    title: "The Register: Anthropic's Bun Rust rewrite merged at speed of AI (2026-05-14)"
  - id: ms-tier1
    resource: https://www.theregister.com/devops/2026/09/11/microsoft-anoints-rust-as-a-tier-1-internal-language/5295732
    title: "The Register: Microsoft anoints Rust as a 'Tier 1' internal language (2026-09-11)"
  - id: rf-farewell
    resource: https://rustfoundation.org/media/a-fond-farewell-to-three-rust-foundation-colleagues/
    title: "Rust Foundation: A Fond Farewell To Three Rust Foundation Colleagues (2026-10-02)"
    author: org:rust-foundation
  - id: reflection-goal
    resource: https://rust-lang.github.io/rust-project-goals/2026/reflection-and-comptime.html
    title: "Rust Project Goals 2026: reflection and comptime"
    author: org:rust-lang
  - id: checkpoint-win
    resource: https://research.checkpoint.com/2025/denial-of-fuzzing-rust-in-the-windows-kernel/
    title: "Check Point Research: Denial of Fuzzing — Rust in the Windows kernel (2025)"
---

# Summary
Rust is the defining language success of 2018–2026. It proved that a GC-free language could make memory safety the *default* for systems code and still be adopted by the most conservative codebases: Linux declared its Rust experiment a success in December 2025,[^lwn-exp-end] Google reported memory-safety bugs below 20% of Android vulnerabilities with roughly 1000x lower vulnerability density in Rust than in C/C++,[^android-2025] Chromium accepted Rust in 2023,[^chromium-rust] and Microsoft made Rust a "Tier 1" internal language in September 2026.[^ms-tier1] It has been Stack Overflow's most admired language for a decade (72% in 2025)[^so-2025] and reached TIOBE #10 in July 2026 (1.34% in September).[^tiobe-sep26] The open problems are real: compile times remain the top complaint,[^state-of-rust-2025][^perf-survey-2025] async is powerful but fragmented and "coloured", complexity worries persist (41.6% in 2025), and governance went through visible crises (2021 moderation team resignation, 2023 RustConf keynote affair).[^rustconf-thephd] Verdict: **succeeded** as the reference memory-safe systems language; **mixed** on async ergonomics and compile-time metaprogramming.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-12-06 | Rust 2018 edition (1.31), NLL borrow checker [^rust-2018] | + |
| E1 | 2019-11-07 | async/await stabilised (1.39) [^rust-async-139] | + |
| E1 | 2020-08 | Mozilla layoffs hit Servo and Rust contributors [^rust-mozilla-2020] | − |
| E2 | 2021-02-08 | Rust Foundation formed (AWS, Google, Huawei, Microsoft, Mozilla) [^rf-founded] | + |
| E2 | 2021-11 | Moderation team resigns in protest over core-team accountability [^modteam-2021] | − |
| E3 | 2022-12 | Linux 6.1 ships initial Rust support | + |
| E3 | 2023-01 | Chromium supports third-party Rust libraries [^chromium-rust] | + |
| E3 | 2023-05 | RustConf keynote downgrade; compile-time reflection work abandoned [^rustconf-thephd] | − |
| E3 | 2023-11-08 | Ferrocene qualified for ISO 26262 ASIL D [^ferrocene] | + |
| E3 | 2023-12-28 | async fn in traits (1.75), with dyn limitations [^rust-175] | + |
| E4 | 2025-02-20 | Rust 2024 edition + async closures (1.85) [^rust-185] | + |
| E4 | 2025-03 | async-std discontinued; ecosystem consolidates on Tokio [^async-std-eol] | mixed |
| E4 | 2025-05 | Check Point shows a Rust panic in the Windows kernel is a BSOD/DoS [^checkpoint-win] | mixed |
| E4 | 2025-11-13 | Android: memory-safety bugs <20%, ~1000x lower density in Rust [^android-2025] | + |
| E4 | 2025-12-10 | Linux Maintainers Summit ends the "experiment": Rust is here to stay [^lwn-exp-end] | + |
| E4 | 2026-05-14 | Bun's AI-assisted Zig→Rust rewrite merged [^reg-bun] | + |
| E4 | 2026-07 | Rust enters TIOBE top 10 [^tiobe-sep26] | + |
| E4 | 2026-09-11 | Microsoft makes Rust a Tier 1 internal language [^ms-tier1] | + |
| E4 | 2026-10-02 | Rust Foundation announces departure of three staff [^rf-farewell] | − |

# Ideas it bet on
| Idea | Outcome for Rust |
|---|---|
| [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md) | Succeeded — the core reason for adoption |
| [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md) | Succeeding — Linux, Android Binder, Windows components |
| [Async/await and function colouring](/ideas/concurrency/async-await-and-function-coloring.md) | Mixed — powers servers at scale, but hard, fragmented, slow to complete |
| [Language editions](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md) | Succeeded — four editions without an ecosystem split |
| [Compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md) | Stalled 2023, restarted as a nightly MVP in 2026 |
| [C-to-Rust translation](/ideas/memory-safety/c-to-rust-translation.md) | Mixed — mechanical tools produce unsafe Rust; AI-assisted ports emerging |
| [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md) | Succeeded — Send/Sync became the model others copied |

# What succeeded
- **Security outcomes with numbers.** Android is the strongest evidence any language idea got in this period: memory-safety share of vulnerabilities fell from ~76% (2019) to under 20% (2025), Rust changes had a 4x lower rollback rate and spent ~25% less time in review.[^android-2025] Safety did not cost velocity.
- **Kernel and platform acceptance.** Linux 6.1 (Dec 2022) → experiment concluded (Dec 2025);[^lwn-exp-end] Windows shipped Rust in `win32kbase_rs.sys` from 2023; Chromium uses Rust for fonts (Skrifa) and parsers.[^chromium-rust]
- **Safety-critical credibility.** Ferrocene became the first qualified Rust toolchain (ISO 26262 ASIL D, IEC 61508 SIL 4) in 2023,[^ferrocene] opening automotive and industrial use previously reserved for C, C++ and [Ada/SPARK](/languages/ada-spark.md).
- **Tooling and ecosystem.** Cargo, crates.io, rustup, clippy and rust-analyzer made Rust the template for [integrated toolchains](/ideas/tooling-and-ecosystem/integrated-toolchains.md) and the default language for [native rewrites of tooling](/ideas/tooling-and-ecosystem/native-rewrites-of-tooling.md) (uv, Ruff, Biome, Rolldown).
- **Rewrite target of choice.** fish shell (C++→Rust, 2025), Ladybird's LibJS frontend (C++→Rust with AI, 2026), and Bun (Zig→Rust with AI agents, 2026) all chose Rust;[^reg-bun] when [Zig](/languages/zig.md) projects left Zig, it was for Rust.
- **Editions.** 2018, 2021 and 2024 editions changed defaults without splitting the crate ecosystem.[^rust-185]

# What failed or stalled
- **Async complexity.** async/await shipped in 2019, but async fn in traits took until Dec 2023 (still without `dyn` support),[^rust-175] async closures until Feb 2025,[^rust-185] and the runtime split (Tokio vs async-std vs smol) ended only when async-std was discontinued in 2025.[^async-std-eol] Keyword generics ("effects") never stabilised.
- **Compile times.** The perennial #1 complaint across four survey cycles.[^state-of-rust-2025][^perf-survey-2025]
- **Governance crises.** Moderation team resignation (2021), trademark-policy backlash and the RustConf 2023 keynote affair, which killed the most advanced compile-time reflection effort for years.[^rustconf-thephd]
- **Panics are not free.** A bounds-check panic in Windows' Rust GDI code turned a would-be memory corruption into a system-wide BSOD (DoS), a reminder that safety ≠ availability in kernel context.[^checkpoint-win]
- **Social friction in Linux.** High-profile resignations (Wedson Almeida Filho 2024, Hector Martin 2025) — see [/events/2024-08-rust-for-linux-maintainer-resigns.md](/events/2024-08-rust-for-linux-maintainer-resigns.md) and [/events/2025-02-hector-martin-resigns-rust-dma-dispute.md](/events/2025-02-hector-martin-resigns-rust-dma-dispute.md).
- **Foundation fragility.** Despite new platinum members, the Foundation cut three staff in October 2026.[^rf-farewell]

# By era
## E1
Rust 2018 edition and async/await landed; adoption was mostly enthusiasts, Mozilla, Dropbox, Cloudflare, AWS (Firecracker). Mozilla's August 2020 layoffs created an existential stewardship scare.[^rust-2018][^rust-async-139]
## E2
The Rust Foundation (Feb 2021) moved stewardship to a multi-vendor nonprofit.[^rf-founded] Rust 2021 edition, const generics MVP, and the Linux patch series matured; governance turbulence began (Nov 2021).
## E3
Linux 6.1, Chromium, Windows kernel and Ferrocene made Rust "infrastructure-grade".[^chromium-rust][^ferrocene] The White House ONCD report named memory-safe languages explicitly ([event](/events/2024-02-white-house-oncd-memory-safety-report.md)). Async fn in traits shipped.[^rust-175] RustConf 2023 was a self-inflicted wound.[^rustconf-thephd]
## E4
The payoff era: Rust 2024 edition, Android's <20% data, the end of the kernel experiment, AI-assisted rewrites into Rust, TIOBE top 10 and Microsoft Tier 1.[^rust-185][^android-2025][^lwn-exp-end][^tiobe-sep26][^ms-tier1] Reflection restarted as a 2025–2026 project goal.[^reflection-goal]

# Lessons
- A safety guarantee wins when it is *checkable, default and measurable* — Android's vulnerability curves did more than any manifesto.
- Interop-first incrementalism (new code in Rust, old C stays) beat rewrite-everything strategies; vulnerability density decays with code age, so writing *new* code safely captures most of the benefit.
- Language power without finished ergonomics (async) creates long-tail pain that a decade of releases has not fully removed.
- Governance is part of the product: community crises cost Rust real contributors and features.

# Related
- Languages: [C](/languages/c.md), [C++](/languages/cpp.md), [Zig](/languages/zig.md), [Ada/SPARK](/languages/ada-spark.md), [Carbon](/languages/carbon.md), [Swift](/languages/swift.md), [Go](/languages/go.md)
- Ideas: [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md), [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md), [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md), [C-to-Rust translation](/ideas/memory-safety/c-to-rust-translation.md)
- Events: [Rust Foundation formed](/events/2021-02-rust-foundation-formed.md), [Linux 6.1 merges Rust](/events/2022-12-linux-6-1-merges-rust.md), [Rust 2024 edition](/events/2025-02-rust-2024-edition.md), [Kernel experiment concluded](/events/2025-12-linux-rust-experiment-concluded.md), [Bun moves Zig→Rust](/events/2026-05-bun-zig-to-rust.md), [Microsoft Rust Tier 1](/events/2026-09-microsoft-rust-tier-1.md)

[^rust-2018]: Rust Blog: Announcing Rust 1.31 and Rust 2018 — https://blog.rust-lang.org/2018/12/06/Rust-1.31-and-rust-2018/
[^rust-async-139]: Rust Blog: Announcing Rust 1.39.0 — https://blog.rust-lang.org/2019/11/07/Rust-1.39.0/
[^rust-mozilla-2020]: Rust Blog: Laying the foundation for Rust's future — https://blog.rust-lang.org/2020/08/18/laying-the-foundation-for-rusts-future.html
[^modteam-2021]: rust-lang/team PR #671: Moderation team resignation — https://github.com/rust-lang/team/pull/671
[^rf-founded]: TechCrunch: The Rust programming language finds a new home in a non-profit foundation — https://techcrunch.com/2021/02/08/the-rust-programming-language-finds-a-new-home-in-a-non-profit-foundation/
[^rust-175]: Rust Blog: Announcing async fn and return-position impl Trait in traits — https://blog.rust-lang.org/2023/12/21/async-fn-rpit-in-traits/
[^rust-185]: Rust Blog: Announcing Rust 1.85.0 and Rust 2024 — https://blog.rust-lang.org/2025/02/20/Rust-1.85.0/
[^rustconf-thephd]: JeanHeyd Meneide: I Am No Longer Speaking at RustConf 2023 — https://thephd.dev/i-am-no-longer-speaking-at-rustconf-2023
[^ferrocene]: Ferrous Systems: Officially Qualified - Ferrocene — https://ferrous-systems.com/blog/officially-qualified-ferrocene/
[^chromium-rust]: Google Security Blog: Supporting the Use of Rust in the Chromium Project — https://security.googleblog.com/2023/01/supporting-use-of-rust-in-chromium.html
[^lwn-exp-end]: LWN: The (successful) end of the kernel Rust experiment — https://lwn.net/Articles/1049831/
[^android-2025]: Google Security Blog: Rust in Android: move fast and fix things — https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html
[^so-2025]: Stack Overflow Developer Survey 2025: Technology — https://survey.stackoverflow.co/2025/technology
[^tiobe-sep26]: TechRepublic: TIOBE Index September 2026 — https://www.techrepublic.com/article/news-tiobe-september-2026-julia-nears-top-20/
[^state-of-rust-2025]: Rust Blog: 2025 State of Rust Survey Results — https://blog.rust-lang.org/2026/03/02/2025-State-Of-Rust-Survey-results
[^perf-survey-2025]: Rust Blog: Rust compiler performance survey 2025 results — https://blog.rust-lang.org/2025/09/10/rust-compiler-performance-survey-2025-results/
[^async-std-eol]: RustSec: RUSTSEC-2025-0052 async-std has been discontinued — https://rustsec.org/advisories/RUSTSEC-2025-0052.html
[^reg-bun]: The Register: Anthropic's Bun Rust rewrite merged at speed of AI — https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
[^ms-tier1]: The Register: Microsoft anoints Rust as a 'Tier 1' internal language — https://www.theregister.com/devops/2026/09/11/microsoft-anoints-rust-as-a-tier-1-internal-language/5295732
[^rf-farewell]: Rust Foundation: A Fond Farewell To Three Rust Foundation Colleagues — https://rustfoundation.org/media/a-fond-farewell-to-three-rust-foundation-colleagues/
[^reflection-goal]: Rust Project Goals 2026: reflection and comptime — https://rust-lang.github.io/rust-project-goals/2026/reflection-and-comptime.html
[^checkpoint-win]: Check Point Research: Denial of Fuzzing — Rust in the Windows kernel — https://research.checkpoint.com/2025/denial-of-fuzzing-rust-in-the-windows-kernel/
