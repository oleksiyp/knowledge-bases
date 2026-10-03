---
type: Language
title: Ada / SPARK
description: The 1980s safety-critical language and its formally verifiable subset found a second wind in the memory-safety era — NVIDIA's firmware and DRIVE OS adoption, Ada 2022, a TIOBE spike to #9 in July 2025 — but Rust, now with qualified toolchains (Ferrocene, and AdaCore's own GNAT Pro for Rust), captured most of the new safety-critical mindshare. Stable niche with a proof-based edge.
tags: [systems, safety-critical, formal-verification, spark, adacore, automotive, aerospace]
paradigms: [systems, imperative, object-oriented, contract-based]
typing: static
memory_model: manual
first_released: 1983
steward: ISO/IEC JTC1/SC22/WG9 (Ada standard); AdaCore (dominant toolchain, SPARK)
governance: committee-standard
trajectory: stable
ideas: [ideas/memory-safety/memory-safety-policy-push, ideas/memory-safety/ownership-and-borrowing, ideas/memory-safety/bounds-safety-and-hardened-c]
runtimes: []
adoption_signals:
  tiobe_rank: { value: 17, as_of: 2026-09 }
  tiobe_peak: { value: 9, as_of: 2025-07 }
era_momentum: { E1: flat, E2: flat, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: nvidia-case
    resource: https://www.adacore.com/case-studies/nvidia-adoption-of-spark-new-era-in-security-critical-software-development
    title: "AdaCore case study: NVIDIA — Adoption of SPARK Ushers in a New Era in Security-Critical Software Development"
    author: org:adacore
  - id: nvidia-iso26262
    resource: https://www.adacore.com/press/ada-and-spark-enter-the-automotive-iso-26262-market-with-nvidia
    title: "AdaCore press: Ada and SPARK enter the automotive ISO-26262 market with NVIDIA (2025-06-02)"
    author: org:adacore
  - id: nvidia-spark-process
    resource: https://github.com/NVIDIA/spark-process
    title: "GitHub: NVIDIA/spark-process — open ISO 26262 reference process for SPARK"
  - id: ada-2022
    resource: https://www.iso.org/standard/83621.html
    title: "ISO/IEC 8652:2023 — Programming languages — Ada (Ada 2022)"
  - id: ada-2022-ara
    resource: https://www.adaic.org/advantages/ada-2022/
    title: "Ada Resource Association: Ada 2022 (parallel loops/blocks, data-race detection)"
  - id: tiobe-jul-2025
    resource: https://www.infoworld.com/article/4020512/ada-other-older-languages-vie-for-top-spots-in-tiobe-language-index.html
    title: "InfoWorld: Ada, other older languages vie for top spots in Tiobe language index (July 2025, Ada #9)"
  - id: tiobe-sep-2026
    resource: https://www.techrepublic.com/article/news-tiobe-index-language-rankings/
    title: "TechRepublic: TIOBE Index for September 2026 (Ada #17, 0.85%)"
  - id: ferrocene-qualified
    resource: https://ferrous-systems.com/blog/officially-qualified-ferrocene/
    title: "Ferrous Systems: Officially Qualified — Ferrocene (ISO 26262 / IEC 61508, 2023)"
  - id: ferrocene-update
    resource: https://ferrous-systems.com/blog/ferrocene-update/
    title: "Ferrous Systems: Ferrocene update (AdaCore leaves the joint project, 2023)"
  - id: gnatpro-rust
    resource: https://www.adacore.com/press/adacore-announces-gnat-pro-for-rust
    title: "AdaCore: AdaCore Announces GNAT Pro for Rust"
    author: org:adacore
  - id: alire
    resource: https://github.com/alire-project
    title: "GitHub: Alire — source-based package manager for Ada/SPARK"
---

# Summary
Ada entered 2018 as a respected but shrinking language confined to avionics, rail and defence. The memory-safety debate gave it a new argument — Ada was memory-safe-ish (bounds/range checks, strong typing) decades before the term was fashionable, and **SPARK**, its formally verifiable subset, can *prove* absence of runtime errors — and one marquee adopter: **NVIDIA**, which publicly decided to move security-critical firmware from C to SPARK, and in June 2025 announced with AdaCore that Ada/SPARK components in its DRIVE OS meet ISO 26262's highest integrity levels, publishing the reference process as open source.[^nvidia-case][^nvidia-iso26262][^nvidia-spark-process] The language itself was revised as **Ada 2022** (ISO/IEC 8652:2023, with parallel blocks/loops and static data-race detection), and SPARK gained Rust-inspired pointer ownership.[^ada-2022][^ada-2022-ara] Popularity indicators spiked: Ada reached **#9 on TIOBE in July 2025**, up from 24th a year earlier, before sliding back to **#17 (0.85%) in September 2026**.[^tiobe-jul-2025][^tiobe-sep-2026] Meanwhile Rust acquired the certifications that used to be Ada's moat — Ferrocene was qualified for ISO 26262/IEC 61508 in 2023, and AdaCore itself left the joint Ferrocene effort to sell GNAT Pro for Rust.[^ferrocene-qualified][^ferrocene-update][^gnatpro-rust] Verdict: **stable niche** — SPARK's proofs are a real differentiator, but new safety-critical projects increasingly default to Rust.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1–E2 | ~2019–2022 | NVIDIA moves security-critical firmware from C to SPARK (case study; exact start unverified) [^nvidia-case] | + |
| E2 | 2020–2021 | Alire package manager matures (cargo-like tool for Ada/SPARK) [^alire] | + |
| E3 | 2023-05 | Ada 2022 published as ISO/IEC 8652:2023 [^ada-2022] | + |
| E3 | 2023 | Ferrocene (Rust) qualified for ISO 26262 / IEC 61508; AdaCore exits joint project, launches GNAT Pro for Rust [^ferrocene-qualified][^ferrocene-update][^gnatpro-rust] | mixed |
| E4 | 2025-06-02 | AdaCore + NVIDIA: Ada/SPARK in ISO 26262 automotive; open reference process [^nvidia-iso26262][^nvidia-spark-process] | + |
| E4 | 2025-07 | Ada hits TIOBE #9, its highest ever [^tiobe-jul-2025] | + |
| E4 | 2026-09 | Ada at TIOBE #17 (0.85%) [^tiobe-sep-2026] | − |

# Ideas it bet on
| Idea | Outcome for Ada/SPARK |
|---|---|
| Formal proof of absence of runtime errors (SPARK) | succeeded in its niche; unique among mainstream-ish languages |
| [Ownership](/ideas/memory-safety/ownership-and-borrowing.md) for pointers (SPARK borrowing, Rust-inspired) | adopted; validates Rust's model |
| Range/bounds checks by default ([bounds safety](/ideas/memory-safety/bounds-safety-and-hardened-c.md)) | long-standing strength |
| Riding the [memory safety policy push](/ideas/memory-safety/memory-safety-policy-push.md) | mixed — policy lists name Rust, Go, C#, Java, Swift… rather than Ada first |

# What succeeded
- **NVIDIA as a modern reference customer**, with a published, reusable ISO 26262 process — the kind of evidence safety assessors need.[^nvidia-iso26262][^nvidia-spark-process]
- **A living standard**: Ada 2022 added parallelism and data-race detection.[^ada-2022-ara]
- **Modern tooling**: Alire gives Ada a cargo-style workflow.[^alire]

# What failed or stalled
- **The TIOBE spike did not hold** (#9 → #17 in 14 months); TIOBE's search-based method is noisy, but no other survey showed a comparable surge.[^tiobe-jul-2025][^tiobe-sep-2026]
- **Rust took the certification moat**: once Rust toolchains were qualified, the main reason to choose Ada for *new* safety-critical code narrowed to SPARK proofs and existing Ada estates.[^ferrocene-qualified]
- **The steward hedged**: AdaCore's own Rust product signals where it sees growth.[^gnatpro-rust]

# By era
## E1
- Quiet; NVIDIA's SPARK exploration begins (date unverified).[^nvidia-case]
## E2
- Alire; SPARK pointer ownership; case-study evangelism.[^alire]
## E3
- Ada 2022 standard; Rust qualification erodes uniqueness.[^ada-2022][^ferrocene-qualified]
## E4
- NVIDIA automotive announcement; TIOBE peak and fall.[^nvidia-iso26262][^tiobe-sep-2026]

# Lessons
- Being right early (memory safety, contracts) is not enough when the market wants a large ecosystem and hiring pool; Ada's revival was real but bounded.
- Formal verification is the durable differentiator — the part of Ada/SPARK that Rust has not (yet) matched as a product.

# Related
- [Rust](/languages/rust.md), [C](/languages/c.md), [C++](/languages/cpp.md)
- [Memory safety policy push](/ideas/memory-safety/memory-safety-policy-push.md), [AI and formal verification](/ideas/ai-and-languages/ai-and-formal-verification.md)

[^nvidia-case]: AdaCore case study: NVIDIA adoption of SPARK — https://www.adacore.com/case-studies/nvidia-adoption-of-spark-new-era-in-security-critical-software-development
[^nvidia-iso26262]: AdaCore press: Ada and SPARK enter the automotive ISO-26262 market with NVIDIA — https://www.adacore.com/press/ada-and-spark-enter-the-automotive-iso-26262-market-with-nvidia
[^nvidia-spark-process]: GitHub: NVIDIA/spark-process — https://github.com/NVIDIA/spark-process
[^ada-2022]: ISO/IEC 8652:2023 (Ada 2022) — https://www.iso.org/standard/83621.html
[^ada-2022-ara]: Ada Resource Association: Ada 2022 — https://www.adaic.org/advantages/ada-2022/
[^tiobe-jul-2025]: InfoWorld: Ada, other older languages vie for top spots in Tiobe — https://www.infoworld.com/article/4020512/ada-other-older-languages-vie-for-top-spots-in-tiobe-language-index.html
[^tiobe-sep-2026]: TechRepublic: TIOBE Index for September 2026 — https://www.techrepublic.com/article/news-tiobe-index-language-rankings/
[^ferrocene-qualified]: Ferrous Systems: Officially Qualified — Ferrocene — https://ferrous-systems.com/blog/officially-qualified-ferrocene/
[^ferrocene-update]: Ferrous Systems: Ferrocene update — https://ferrous-systems.com/blog/ferrocene-update/
[^gnatpro-rust]: AdaCore Announces GNAT Pro for Rust — https://www.adacore.com/press/adacore-announces-gnat-pro-for-rust
[^alire]: GitHub: Alire project — https://github.com/alire-project
