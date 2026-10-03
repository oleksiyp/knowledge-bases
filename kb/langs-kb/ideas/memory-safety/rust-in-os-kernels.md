---
type: Idea
title: Rust in OS kernels (Linux, Android, Windows)
description: "Allow a second, memory-safe language inside production kernels, starting with drivers. 2018–2026 verdict: succeeded — Linux merged Rust in 6.1 (2022), declared the experiment over in December 2025, shipped Rust Binder in 6.18 and queued deletion of the C Binder for 7.4; Windows ships Rust kernel components. The cost was years of social conflict and high-profile resignations, and coverage is still a small share of kernel code."
area: memory-safety
tags: [linux, kernel, rust-for-linux, android, binder, windows, drivers, governance]
outcome: succeeded
maturity_2026: adopted
origin_year: 2019
mainstream_year: 2022
languages: [languages/rust, languages/c]
runtimes: [runtimes/gcc, runtimes/llvm]
related_ideas:
  - ideas/memory-safety/ownership-and-borrowing
  - ideas/memory-safety/memory-safety-policy-push
  - ideas/memory-safety/c-to-rust-translation
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: lwn-exp-end
    resource: https://lwn.net/Articles/1049831/
    title: "LWN: The (successful) end of the kernel Rust experiment (Maintainers Summit, Tokyo, 2025-12-10)"
  - id: phoronix-stay
    resource: https://www.phoronix.com/news/Rust-To-Stay-Linux-Kernel
    title: "Phoronix: New Linux patch confirms Rust experiment is done, Rust is here to stay (2025-12)"
  - id: reg-wedson
    resource: https://www.theregister.com/software/2024/09/02/rust-for-linux-maintainer-steps-down-in-frustration/628448
    title: "The Register: Rust for Linux maintainer steps down in frustration (2024-09-02)"
  - id: reg-cancer
    resource: https://www.theregister.com/2025/02/05/mixing_rust_and_c_linux/
    title: "The Register: Mixing Rust and C in Linux likened to cancer by maintainer (2025-02-05)"
  - id: lwn-linus-dma
    resource: https://lwn.net/Articles/1011197/
    title: "LWN: Linus on Rust and the kernel's DMA layer (2025-02)"
  - id: reg-asahi
    resource: https://www.theregister.com/software/2025/02/13/asahi-linux-head-quits-citing-kernel-leadership-failure/1257727
    title: "The Register: Asahi Linux head quits, citing kernel leadership failure (2025-02-13)"
  - id: binder-618
    resource: https://rust-for-linux.com/android-binder-driver
    title: "Rust for Linux: Android Binder Driver (upstream in 6.18)"
  - id: binder-c-removal
    resource: https://www.phoronix.com/news/Google-Binder-C-Goodbye
    title: "Phoronix: Google's 'painful to maintain' Binder C driver being removed in favor of Rust (queued for Linux 7.4, 2026-09)"
  - id: tyr-618
    resource: https://www.collabora.com/news-and-blog/news-and-events/kernel-618-tyr-advances-rust-in-linux.html
    title: "Collabora: Kernel 6.18 — Tyr advances Rust in Linux"
  - id: win-rust-checkpoint
    resource: https://research.checkpoint.com/2025/denial-of-fuzzing-rust-in-the-windows-kernel/
    title: "Check Point Research: Denial of Fuzzing — Rust in the Windows kernel (2025)"
  - id: ms-tier1
    resource: https://www.theregister.com/devops/2026/09/11/microsoft-anoints-rust-as-a-tier-1-internal-language/5295732
    title: "The Register: Microsoft anoints Rust as a 'Tier 1' internal language (2026-09-11)"
  - id: devclass-rustconf24
    resource: https://devclass.com/2024/09/18/rustconf-speakers-affirm-rust-for-linux-project-despite-challenges-of-unstable-rust-maintainer-resignation/
    title: "DevClass: RustConf speakers affirm Rust for Linux despite unstable-Rust challenges and resignation (2024-09-18)"
  - id: android-2025
    resource: https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html
    title: "Google Security Blog: Rust in Android: move fast and fix things (2025-11-13)"
  - id: apt-rust
    resource: https://lwn.net/Articles/1044496/
    title: "LWN: Debian to require Rust as of May 2026 (APT)"
---

# Summary
**Succeeded.** Rust is the first language other than C (and assembly) accepted as a permanent part of the Linux kernel. Support merged in Linux 6.1 (December 2022) explicitly as an experiment that could be removed; on 10 December 2025 the Maintainers Summit in Tokyo agreed the experiment had succeeded and the "experimental" tag came off.[^lwn-exp-end][^phoronix-stay] Real drivers followed: Google's Rust Binder landed in 6.18 alongside the Arm Mali GPU driver Tyr and continued work on NVIDIA's Nova,[^binder-618][^tyr-618] and in September 2026 Greg Kroah-Hartman queued deletion of the ~11,470-line C Binder for Linux 7.4 — the first time Rust *replaced* a deployed C driver in mainline.[^binder-c-removal] Windows has shipped Rust in `win32kbase_rs.sys` since 2023, and Microsoft made Rust Tier 1 for Windows platform engineering in 2026.[^win-rust-checkpoint][^ms-tier1] The price was social: maintainer Wedson Almeida Filho quit in 2024 over "nontechnical nonsense",[^reg-wedson] a DMA maintainer called cross-language code "cancer", and Asahi's Hector Martin resigned calling Linus's handling "a major failure of leadership" (Feb 2025) — before Linus ruled that C maintainers cannot block Rust users of their APIs.[^reg-cancer][^reg-asahi][^lwn-linus-dma]

# The idea
Keep the kernel's C core, but let new drivers and subsystems be written in Rust through safe abstractions over kernel APIs, so whole bug classes (UAF, data races on driver state, bounds errors) disappear from the new code. Prior art: research kernels (Redox, Theseus, Tock, Hubris), Fuchsia components.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020 | Rust-for-Linux proposals at Linux Plumbers; Linus open to drivers | + |
| E3 | 2022-12 | Linux 6.1 merges Rust infrastructure ([event](/events/2022-12-linux-6-1-merges-rust.md)) | + |
| E3 | 2023-07 | Windows Insider builds ship Rust in `win32kbase_rs.sys` [^win-rust-checkpoint] | + |
| E3 | 2024-08 | Wedson Almeida Filho resigns from Rust for Linux ([event](/events/2024-08-rust-for-linux-maintainer-resigns.md)) [^reg-wedson] | − |
| E4 | 2025-02 | DMA "cancer" dispute; Hector Martin resigns; Linus overrules maintainer veto ([event](/events/2025-02-hector-martin-resigns-rust-dma-dispute.md)) [^reg-cancer][^reg-asahi][^lwn-linus-dma] | mixed |
| E4 | 2025-05 | Microsoft patches a Rust bounds-check panic causing BSOD in GDI [^win-rust-checkpoint] | mixed |
| E4 | 2025-11 | Linux 6.18: Rust Binder and Tyr GPU driver upstream [^binder-618][^tyr-618] | + |
| E4 | 2025-12-10 | Maintainers Summit: experiment concluded ([event](/events/2025-12-linux-rust-experiment-concluded.md)) [^lwn-exp-end] | + |
| E4 | 2026-09 | C Binder deletion queued for 7.4; Rust required for Android kernels [^binder-c-removal] | + |
| E4 | 2026-09-11 | Microsoft: Rust Tier 1 for Windows platform engineering ([event](/events/2026-09-microsoft-rust-tier-1.md)) [^ms-tier1] | + |

# Where it succeeded
- **Linux mainline**: Rust is permanent; drivers for GPUs (Nova, Tyr, Asahi AGX out-of-tree), Android Binder, PHY and block devices; Rust Binder reached feature parity and matched or beat C performance.[^binder-c-removal]
- **Android**: Rust in kernel-adjacent components and firmware is part of Google's data showing memory-safety vulns below 20%.[^android-2025]
- **Windows**: Rust GDI region code and other kernel components in production; Rust Tier 1 internally.[^ms-tier1]
- **Ripple effects**: distributions began requiring Rust in base tooling (Debian APT from May 2026).[^apt-rust]

# Where it failed or stalled
- **People cost**: two prominent contributors left; maintainers burned out on cross-language review.[^reg-wedson][^reg-asahi]
- **Toolchain friction**: kernel Rust depended on unstable Rust features for years; supporting older/rare architectures (where LLVM/rustc lag) remains a constraint.[^devclass-rustconf24][^apt-rust]
- **Limited coverage**: Rust is still a small fraction of kernel code; core subsystems (mm, VFS, scheduler) remain C.
- **Panics in kernel context**: Rust converts memory corruption into panics — in Windows that meant a reproducible BSOD/DoS from low-privilege code.[^win-rust-checkpoint]

# Why
1. **Drivers are the right wedge.** Most kernel CVEs live in drivers; they are leaf code with clear APIs, so safe abstractions pay off without touching the core.
2. **Corporate sponsors with data.** Google (Android/Binder), Microsoft, Red Hat (Nova) and Collabora/Arm (Tyr) funded engineers and brought vulnerability statistics.[^android-2025]
3. **Benevolent-dictator decisiveness.** The decisive moment was Linus's February 2025 ruling that maintainers cannot veto Rust *users* of their C APIs — governance, not technology, unlocked progress.[^lwn-linus-dma]
4. **The experiment framing** lowered resistance: an explicit off-ramp made acceptance in 2022 politically possible, and success criteria made the 2025 decision legible.[^lwn-exp-end]
5. **Friction came from asymmetry**: C maintainers bear the cost when APIs change and Rust bindings break, while benefits accrue to driver authors — a classic adoption externality.

# Lessons
- Introduce a new language into a critical codebase as a reversible experiment, at the leaves, with sponsors who will do the binding work.
- Explicit leadership decisions about who may block what are as important as the technical design.
- Replacing (not just adding alongside) C code is the real milestone; Binder's C deletion in 2026 marks it.

# Related
- Languages: [Rust](/languages/rust.md), [C](/languages/c.md)
- Ideas: [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md), [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md), [C-to-Rust translation](/ideas/memory-safety/c-to-rust-translation.md), [eBPF as a runtime](/ideas/platforms-and-portability/ebpf-as-a-runtime.md)
- Events: [Linux 6.1 merges Rust](/events/2022-12-linux-6-1-merges-rust.md), [Maintainer resigns](/events/2024-08-rust-for-linux-maintainer-resigns.md), [DMA dispute](/events/2025-02-hector-martin-resigns-rust-dma-dispute.md), [Experiment concluded](/events/2025-12-linux-rust-experiment-concluded.md), [Ubuntu Rust coreutils/sudo-rs](/events/2025-10-ubuntu-rust-coreutils-sudo-rs.md)

[^lwn-exp-end]: LWN: The (successful) end of the kernel Rust experiment — https://lwn.net/Articles/1049831/
[^phoronix-stay]: Phoronix: Rust is here to stay — https://www.phoronix.com/news/Rust-To-Stay-Linux-Kernel
[^reg-wedson]: The Register: Rust for Linux maintainer steps down in frustration — https://www.theregister.com/software/2024/09/02/rust-for-linux-maintainer-steps-down-in-frustration/628448
[^reg-cancer]: The Register: Mixing Rust and C in Linux likened to cancer — https://www.theregister.com/2025/02/05/mixing_rust_and_c_linux/
[^lwn-linus-dma]: LWN: Linus on Rust and the kernel's DMA layer — https://lwn.net/Articles/1011197/
[^reg-asahi]: The Register: Asahi Linux head quits — https://www.theregister.com/software/2025/02/13/asahi-linux-head-quits-citing-kernel-leadership-failure/1257727
[^binder-618]: Rust for Linux: Android Binder Driver — https://rust-for-linux.com/android-binder-driver
[^binder-c-removal]: Phoronix: Binder C driver being removed in favor of Rust — https://www.phoronix.com/news/Google-Binder-C-Goodbye
[^tyr-618]: Collabora: Kernel 6.18 — Tyr advances Rust in Linux — https://www.collabora.com/news-and-blog/news-and-events/kernel-618-tyr-advances-rust-in-linux.html
[^win-rust-checkpoint]: Check Point Research: Rust in the Windows kernel — https://research.checkpoint.com/2025/denial-of-fuzzing-rust-in-the-windows-kernel/
[^ms-tier1]: The Register: Microsoft anoints Rust as Tier 1 — https://www.theregister.com/devops/2026/09/11/microsoft-anoints-rust-as-a-tier-1-internal-language/5295732
[^devclass-rustconf24]: DevClass: RustConf speakers affirm Rust for Linux — https://devclass.com/2024/09/18/rustconf-speakers-affirm-rust-for-linux-project-despite-challenges-of-unstable-rust-maintainer-resignation/
[^android-2025]: Google Security Blog: Rust in Android — https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html
[^apt-rust]: LWN: Debian to require Rust as of May 2026 — https://lwn.net/Articles/1044496/
