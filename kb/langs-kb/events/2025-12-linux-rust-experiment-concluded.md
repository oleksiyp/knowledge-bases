---
type: Event
title: Linux kernel declares the Rust experiment a success
description: At the 2025 Maintainers Summit in Tokyo (2025-12-10) kernel developers agreed Rust is "here to stay" and dropped its "experimental" label, three years after Linux 6.1. Rust Binder (6.18) and the Nova and Tyr GPU drivers were the proof points. The C Binder driver was queued for removal in 2026.
event_kind: governance
date: 2025-12-10
era: E4
impact: positive
languages: [languages/rust, languages/c]
runtimes: []
ideas: [ideas/memory-safety/rust-in-os-kernels]
tags: [linux, kernel, rust-for-linux, maintainers-summit]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: lwn-end
    resource: https://lwn.net/Articles/1049831/
    title: "LWN: The (successful) end of the kernel Rust experiment (2025 Maintainers Summit)"
  - id: lwn-conclude-patch
    resource: https://lwn.net/Articles/1050308/
    title: "LWN: rust: conclude the Rust experiment (patch)"
  - id: devclass-end
    resource: https://devclass.com/2025/12/15/rust-boosted-by-permanent-adoption-for-linux-kernel-code/
    title: "DevClass: Rust boosted by permanent adoption for Linux kernel code (2025-12-15)"
  - id: phoronix-binder
    resource: https://www.phoronix.com/news/Google-Binder-C-Goodbye
    title: "Phoronix: Google's 'Painful To Maintain' Binder C Linux Driver Being Removed In Favor Of Rust"
---

# What happened
On 2025-12-10, at the Linux Kernel Maintainers Summit in Tokyo, a session reviewed the Rust experiment begun with [Linux 6.1](/events/2022-12-linux-6-1-merges-rust.md). The consensus was that Rust "is no longer experimental — it is now a core part of the kernel and is here to stay".[^lwn-end] A follow-up patch, "rust: conclude the Rust experiment", removed the experimental wording. It noted that Rust is in production, enabled by major distributions, and "already in millions of devices via Android".[^lwn-conclude-patch][^devclass-end]

By then the evidence included Google's Rust Binder driver, merged in 6.18 alongside the C version, and the Nova (NVIDIA) and Tyr (Arm Mali) GPU drivers. In September 2026 Greg Kroah-Hartman queued Google's patch deleting the 11,470-line C Binder driver for the 7.4 cycle. It is the first time a deployed C driver has been replaced outright by Rust.[^phoronix-binder]

# Why it matters
This is the clearest success verdict for [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md). It came despite the [2024](/events/2024-08-rust-for-linux-maintainer-resigns.md) and [2025](/events/2025-02-hector-martin-resigns-rust-dma-dispute.md) conflicts, and after Torvalds ruled that C maintainers may not veto Rust users of their APIs. The causes were steady corporate investment (Google, Red Hat, Collabora, Arm, Microsoft), real drivers that showed equal or better performance, and Android's need. Open costs remain: dependence on newer Rust toolchains, the dual-language review burden, and Rust becoming a hard build dependency for Android kernels.

# Related
- [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md)
- [Rust](/languages/rust.md), [C](/languages/c.md)
- [Android memory-safety data](/events/2025-11-android-memory-safety-below-20pct.md)

[^lwn-end]: LWN: The (successful) end of the kernel Rust experiment — https://lwn.net/Articles/1049831/
[^lwn-conclude-patch]: LWN: rust: conclude the Rust experiment — https://lwn.net/Articles/1050308/
[^devclass-end]: DevClass: Rust boosted by permanent adoption for Linux kernel code — https://devclass.com/2025/12/15/rust-boosted-by-permanent-adoption-for-linux-kernel-code/
[^phoronix-binder]: Phoronix: Binder C Linux driver being removed in favor of Rust — https://www.phoronix.com/news/Google-Binder-C-Goodbye
