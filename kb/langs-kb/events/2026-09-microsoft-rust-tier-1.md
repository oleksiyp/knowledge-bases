---
type: Event
title: Microsoft makes Rust a Tier 1 internal language
description: At RustConf in September 2026 Microsoft said Rust is now a "Tier 1" internal language alongside C++, C# and TypeScript. It is used in 100+ repos, including Microsoft 365 services via the Oxidizer crates, and has a new rustc backend that plugs into MSVC's code generator for Windows.
event_kind: adoption
date: 2026-09-11
era: E4
impact: positive
languages: [languages/rust, languages/cpp]
runtimes: []
ideas: [ideas/memory-safety/rust-in-os-kernels, ideas/memory-safety/memory-safety-policy-push]
tags: [microsoft, rust, windows, enterprise-adoption, rustconf]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: reg-tier1
    resource: https://www.theregister.com/devops/2026/09/11/microsoft-anoints-rust-as-a-tier-1-internal-language/5295732
    title: "The Register: Microsoft anoints Rust as a 'Tier 1' internal language (2026-09-11)"
  - id: slashdot-tier1
    resource: https://developers.slashdot.org/story/26/09/13/2144215/rust-is-now-a-tier-one-language-at-microsoft
    title: "Slashdot: Rust is Now a 'Tier One' Language at Microsoft (2026-09-13)"
  - id: cp-rust-win
    resource: https://research.checkpoint.com/2025/denial-of-fuzzing-rust-in-the-windows-kernel/
    title: "Check Point Research: Denial of Fuzzing — Rust in the Windows Kernel (2025)"
---

# What happened
In a RustConf 2026 keynote, Victor Ciura, principal engineer on Microsoft's Rust tooling team, said Rust is now a **Tier 1** language at Microsoft, alongside C++, C# and TypeScript as the best-supported languages for internal development.[^reg-tier1] Microsoft had "paved a path" of tooling across the development lifecycle. Rust is in over 100 Microsoft repositories, and the internal **Oxidizer** crates are used to build Microsoft 365 core services (Outlook, Word, Excel, OneDrive, SharePoint). Engineers built `rustc_codegen_utc`, a rustc backend that wires into the Visual C++ toolchain's code generator, giving one codegen platform for Rust and C++ on Windows.[^reg-tier1][^slashdot-tier1] The designation covers internal engineering, not an Azure-wide mandate.

# Why it matters
Microsoft's Rust path ran from MSRC's 2019 "70% of CVEs are memory-safety" blog, through Rust in the Windows kernel (win32kbase_rs.sys, 2023), to the [2030 walk-back](/events/2025-12-microsoft-2030-rust-post.md). The 2026 step is institutional rather than aspirational: tooling, build integration and support on par with C++. The kernel experience also showed Rust's limits. In 2025 Check Point found that an out-of-bounds index in the Rust GDI code turned into a kernel *panic* (a system crash and denial of service) instead of memory corruption. That is a safer failure mode, but still a bug.[^cp-rust-win] Next to [Linux's verdict](/events/2025-12-linux-rust-experiment-concluded.md) and Android's data, this puts all three major OS vendors' kernels on a Rust trajectory.

# Related
- [Rust](/languages/rust.md), [C++](/languages/cpp.md)
- [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md)
- [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md)

[^reg-tier1]: The Register: Microsoft anoints Rust as a 'Tier 1' internal language — https://www.theregister.com/devops/2026/09/11/microsoft-anoints-rust-as-a-tier-1-internal-language/5295732
[^slashdot-tier1]: Slashdot: Rust is Now a 'Tier One' Language at Microsoft — https://developers.slashdot.org/story/26/09/13/2144215/rust-is-now-a-tier-one-language-at-microsoft
[^cp-rust-win]: Check Point Research: Denial of Fuzzing — Rust in the Windows Kernel — https://research.checkpoint.com/2025/denial-of-fuzzing-rust-in-the-windows-kernel/
