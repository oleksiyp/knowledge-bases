---
type: Event
title: Rust-for-Linux maintainer Wedson Almeida Filho resigns
description: On 2024-08-28 Microsoft engineer Wedson Almeida Filho quit as a Rust-for-Linux maintainer, citing "nontechnical nonsense" after a hostile filesystem-bindings discussion. It was the most visible sign of the kernel's social resistance to Rust.
event_kind: governance
date: 2024-08-28
era: E3
impact: negative
languages: [languages/rust, languages/c]
runtimes: []
ideas: [ideas/memory-safety/rust-in-os-kernels]
tags: [linux, rust-for-linux, maintainers, governance, burnout]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: reg-wedson
    resource: https://www.theregister.com/software/2024/09/02/rust-for-linux-maintainer-steps-down-in-frustration/628448
    title: "The Register: Rust for Linux maintainer steps down in frustration (2024-09-02)"
  - id: devclass-wedson
    resource: https://devclass.com/2024/09/18/rustconf-speakers-affirm-rust-for-linux-project-despite-challenges-of-unstable-rust-maintainer-resignation/
    title: "DevClass: RustConf speakers affirm Rust for Linux project despite … maintainer resignation (2024-09-18)"
---

# What happened
Wedson Almeida Filho, one of the original Rust-for-Linux maintainers, announced on the kernel mailing list in late August 2024 that he was stepping down. After almost four years, he wrote, he lacked "the energy and enthusiasm" to keep responding to "nontechnical nonsense".[^reg-wedson] The resignation followed a Linux Storage, Filesystem, MM & BPF Summit session on Rust filesystem abstractions. In that session, ext4 maintainer Ted Ts'o objected that he would not learn Rust and that C-side changes must not be constrained by Rust bindings. Almeida Filho linked to the session video and warned that if Linux did not embrace memory-safe languages, another kernel would eventually supersede it.[^reg-wedson]

# Why it matters
Rust-for-Linux depended on goodwill from C maintainers who owned the APIs Rust had to wrap. This resignation showed that the binding chokepoint was social as much as technical. The same pattern led to the [2025 DMA dispute](/events/2025-02-hector-martin-resigns-rust-dma-dispute.md). At RustConf weeks later, speakers reaffirmed the project, while acknowledging its reliance on unstable Rust features.[^devclass-wedson] The episode is a cautionary data point: two languages in one codebase multiply the review burden, and the people who bear that burden decide whether adoption happens.

# Related
- [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md)
- [Linux 6.1 merges Rust](/events/2022-12-linux-6-1-merges-rust.md)
- [Kernel Rust experiment concluded](/events/2025-12-linux-rust-experiment-concluded.md)

[^reg-wedson]: The Register: Rust for Linux maintainer steps down in frustration — https://www.theregister.com/software/2024/09/02/rust-for-linux-maintainer-steps-down-in-frustration/628448
[^devclass-wedson]: DevClass: RustConf speakers affirm Rust for Linux project — https://devclass.com/2024/09/18/rustconf-speakers-affirm-rust-for-linux-project-despite-challenges-of-unstable-rust-maintainer-resignation/
