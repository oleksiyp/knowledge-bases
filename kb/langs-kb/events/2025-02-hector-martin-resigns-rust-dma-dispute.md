---
type: Event
title: Rust DMA dispute ends with Hector Martin quitting Asahi Linux
description: In early 2025 kernel DMA maintainer Christoph Hellwig rejected Rust DMA bindings, calling cross-language codebases "cancer". After Linus Torvalds rebuked his "social media brigading", Asahi Linux lead Hector Martin resigned as kernel maintainer and then as project lead (2025-02-13). Torvalds then clarified that maintainers cannot veto Rust users of their APIs.
event_kind: governance
date: 2025-02-13
era: E4
impact: mixed
languages: [languages/rust, languages/c]
runtimes: []
ideas: [ideas/memory-safety/rust-in-os-kernels]
tags: [linux, rust-for-linux, asahi, governance, maintainers]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: reg-asahi
    resource: https://www.theregister.com/software/2025/02/13/asahi-linux-head-quits-citing-kernel-leadership-failure/1257727
    title: "The Register: Asahi Linux head quits, citing kernel leadership failure (2025-02-13)"
  - id: heise-dma
    resource: https://www.heise.de/en/news/The-Rust-DMA-dispute-in-the-Linux-kernel-An-attempt-at-analysis-10291239.html
    title: "heise: The Rust DMA dispute in the Linux kernel — an attempt at analysis"
  - id: phoronix-asahi
    resource: https://www.phoronix.com/news/Hector-Martin-Resigns-Asahi
    title: "Phoronix: Hector Martin Resigns From The Asahi Linux Project"
  - id: lwn-dma
    resource: https://lwn.net/Articles/1011819/
    title: "LWN: A change in maintenance for the kernel's DMA-mapping layer"
---

# What happened
In January 2025 a patch adding Rust abstractions for the kernel's DMA-mapping API, needed by Rust GPU drivers such as Nova and Asahi's Apple GPU driver, met a flat refusal from DMA maintainer Christoph Hellwig. He wanted to keep what he called the "cancer" of a multi-language codebase out of core kernel areas.[^heise-dma] Asahi Linux lead Hector Martin criticised this publicly on the lists and on Mastodon. Linus Torvalds replied that "social media brigading" was the problem. Martin stepped down as an upstream maintainer, and on 2025-02-13 resigned as Asahi Linux project lead. He called Torvalds' handling of Rust integration "a major failure of leadership".[^reg-asahi][^phoronix-asahi]

Shortly afterwards Torvalds wrote on the list that maintainers who do not want to deal with Rust need not, but cannot block Rust code that *uses* their C interfaces. In effect this overruled the veto. Hellwig then stepped down as a DMA-mapping maintainer (Marek Szyprowski took over in the 6.14 cycle), and the Rust DMA abstractions were accepted.[^lwn-dma]

# Why it matters
This was the low point of [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md), and it cost the community one of its most productive reverse-engineering leads. It also forced the policy question into the open. Torvalds' answer settled the governance rule, "C maintainers may ignore Rust but not veto it". That rule made the [December 2025 decision](/events/2025-12-linux-rust-experiment-concluded.md) possible. The episode shows that language adoption in a large project is ultimately decided by its governance, not its technology.

# Related
- [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md)
- [Rust-for-Linux maintainer resigns (2024)](/events/2024-08-rust-for-linux-maintainer-resigns.md)
- [Rust](/languages/rust.md), [C](/languages/c.md)

[^reg-asahi]: The Register: Asahi Linux head quits, citing kernel leadership failure — https://www.theregister.com/software/2025/02/13/asahi-linux-head-quits-citing-kernel-leadership-failure/1257727
[^heise-dma]: heise: The Rust DMA dispute in the Linux kernel — https://www.heise.de/en/news/The-Rust-DMA-dispute-in-the-Linux-kernel-An-attempt-at-analysis-10291239.html
[^phoronix-asahi]: Phoronix: Hector Martin Resigns From The Asahi Linux Project — https://www.phoronix.com/news/Hector-Martin-Resigns-Asahi
[^lwn-dma]: LWN: A change in maintenance for the kernel's DMA-mapping layer — https://lwn.net/Articles/1011819/
