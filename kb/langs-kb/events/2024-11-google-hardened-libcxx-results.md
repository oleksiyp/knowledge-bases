---
type: Event
title: Google reports hardened libc++ across its C++ at ~0.3% cost
description: On 2024-11-15 Google reported that enabling libc++ hardening (bounds checks in the standard library) across hundreds of millions of lines of C++ cost about 0.30% performance, found over 1,000 bugs and cut baseline segfaults by 30%. This was key evidence for retrofitting safety into C++.
event_kind: adoption
date: 2024-11-15
era: E4
impact: positive
languages: [languages/cpp]
runtimes: []
ideas: [ideas/memory-safety/bounds-safety-and-hardened-c, ideas/memory-safety/safe-cpp-vs-profiles]
tags: [cpp, libcxx, hardening, google, bounds-checking]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: gsb-libcxx
    resource: https://security.googleblog.com/2024/11/retrofitting-spatial-safety-to-hundreds.html
    title: "Google Online Security Blog: Retrofitting spatial safety to hundreds of millions of lines of C++ (2024-11-15)"
    author: org:google
  - id: p3471
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3471r2.html
    title: "WG21 P3471: Standard library hardening"
---

# What happened
On 2024-11-15 Google's security blog described rolling out hardened libc++ across its server fleet and products including Chrome. Hardened libc++ turns out-of-bounds `operator[]`, `front()` on an empty container and similar standard-library undefined behaviour into a trap. Google reported an average performance impact of **0.30%**, more than **1,000 bugs** found (some exploitable), an estimated 1,000–2,000 new bugs prevented per year, and a **30% reduction** in its baseline segmentation-fault rate in production.[^gsb-libcxx]

# Why it matters
The result undercut the long-standing assumption that bounds checking is too expensive for C++. It became the evidence base for WG21 paper P3471, standard library hardening, which [shipped in C++26](/events/2026-03-cpp26-finalized.md).[^p3471] It also showed the "retrofit" path working at scale: spatial safety for the existing C++ estate without rewriting it, complementing [Rust for new code](/events/2025-11-android-memory-safety-below-20pct.md). The limit is that hardening addresses spatial (bounds) errors only. Use-after-free and other temporal bugs need different tools: MTE, MiraclePtr-style quarantines, [CHERI](/ideas/memory-safety/cheri-capability-hardware.md) or ownership.

# Related
- [Bounds safety and hardened C/C++](/ideas/memory-safety/bounds-safety-and-hardened-c.md)
- [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md)
- [C++](/languages/cpp.md)

[^gsb-libcxx]: Google Online Security Blog: Retrofitting spatial safety to hundreds of millions of lines of C++ — https://security.googleblog.com/2024/11/retrofitting-spatial-safety-to-hundreds.html
[^p3471]: WG21 P3471: Standard library hardening — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3471r2.html
