---
type: Event
title: Linux 6.1 ships initial Rust support
description: Linux 6.1 (released 2022-12-11) merged the Rust-for-Linux infrastructure as an explicit experiment. It contained no real drivers, but made Rust the first language besides C (and assembly) accepted into the mainline kernel.
event_kind: release
date: 2022-12-11
era: E3
impact: positive
languages: [languages/rust, languages/c]
runtimes: []
ideas: [ideas/memory-safety/rust-in-os-kernels]
tags: [linux, kernel, rust-for-linux, release]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: lwn-61
    resource: https://lwn.net/Articles/917843/
    title: "LWN: Kernel release status — 6.1 released (2022-12-11)"
  - id: phoronix-61
    resource: https://www.phoronix.com/news/Linux-6.1-Released
    title: "Phoronix: Linux 6.1 Released With MGLRU, Initial Rust Code"
  - id: kn-61
    resource: https://kernelnewbies.org/Linux_6.1
    title: "KernelNewbies: Linux 6.1"
---

# What happened
Linus Torvalds released Linux 6.1 on 2022-12-11. Among its headline items was "initial support for kernel development in Rust".[^lwn-61][^kn-61] The merge was deliberately minimal. It contained the build infrastructure, the `kernel` crate scaffolding and sample code, but "no actual Rust code in the kernel yet", so no production 6.1 system ran any Rust.[^phoronix-61] Kernel developers framed the merge as an experiment: if Rust did not work out technically, procedurally or socially, it would be removed.

# Why it matters
This was the institutional turning point for [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md). The road from here was not smooth. Bindings had to be negotiated subsystem by subsystem, and maintainers who did not want to read Rust pushed back. This led to the [2024 resignation of Wedson Almeida Filho](/events/2024-08-rust-for-linux-maintainer-resigns.md) and the [2025 DMA dispute](/events/2025-02-hector-martin-resigns-rust-dma-dispute.md). Still, real drivers arrived: Android Binder in Rust, the Nova and Tyr GPU drivers, and Apple GPU work in Asahi. Three years later, maintainers [declared the experiment a success](/events/2025-12-linux-rust-experiment-concluded.md).

# Related
- [Rust](/languages/rust.md), [C](/languages/c.md)
- [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md)

[^lwn-61]: LWN: Kernel release status (6.1) — https://lwn.net/Articles/917843/
[^phoronix-61]: Phoronix: Linux 6.1 Released With MGLRU, Initial Rust Code — https://www.phoronix.com/news/Linux-6.1-Released
[^kn-61]: KernelNewbies: Linux 6.1 — https://kernelnewbies.org/Linux_6.1
