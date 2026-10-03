---
type: Event
title: Roc's Zig compiler rewrite reaches feature parity
description: "After 487 days, the Roc team's rewrite of its roughly 300k-line Rust compiler in Zig reached feature parity. Incremental rebuilds fell from 3.4 s to 35 ms, but Roc still had no numbered release; 0.1.0 is targeted for later in 2026."
event_kind: release
date: 2026-07-15
era: E4
impact: mixed
languages: [languages/roc, languages/zig, languages/rust]
runtimes: []
ideas: [ideas/types/perceus-and-reference-counting-fp]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: feldman-rust-to-zig
    resource: https://rtfeldman.com/rust-to-zig
    title: "Richard Feldman: How Our Rust-to-Zig Rewrite is Going (2026-07-15)"
  - id: dd-roc
    resource: https://www.developersdigest.tech/blog/roc-rust-to-zig-rewrite-feldman
    title: "Developers Digest: Roc's Rust-to-Zig Rewrite — 487 Days, 300K Lines"
  - id: weeklyrust-roc
    resource: https://weeklyrust.substack.com/p/why-roc-is-moving-away-from-rust
    title: "Rust Bytes: Why Roc Is Moving Away From Rust to Zig"
---

# What happened
In early 2025 the Roc team decided to rewrite the compiler in Zig rather than restructure it in Rust. Their reasons: lambda-set resolution needed a new architecture anyway, Rust build times were slow, they wanted fine-grained allocator control and struct-of-arrays layouts, and Zig already had LLVM bitcode serialization they could reuse.[^weeklyrust-roc][^feldman-rust-to-zig] On 15 July 2026 Richard Feldman reported feature parity after 487 days. Incremental rebuilds take 35 ms vs 3.4 s, and the new compiler has had 10 memory-corruption bugs vs 21 in the Rust one. The first numbered release, 0.1.0, is targeted for later in 2026.[^feldman-rust-to-zig][^dd-roc]

# Why it matters
It is a rare, well-documented move *away* from Rust for a compiler, made for compile-time and allocator-control reasons. It also shows the cost a small language pays for rewriting itself: no features and no release for about a year and a half.

# Related
- [Roc](/languages/roc.md), [Zig](/languages/zig.md), [Rust](/languages/rust.md), [Perceus and reference counting in FP](/ideas/types/perceus-and-reference-counting-fp.md)

[^feldman-rust-to-zig]: Richard Feldman: How Our Rust-to-Zig Rewrite is Going — https://rtfeldman.com/rust-to-zig
[^dd-roc]: Developers Digest: Roc's Rust-to-Zig Rewrite — https://www.developersdigest.tech/blog/roc-rust-to-zig-rewrite-feldman
[^weeklyrust-roc]: Rust Bytes: Why Roc Is Moving Away From Rust to Zig — https://weeklyrust.substack.com/p/why-roc-is-moving-away-from-rust
