---
type: Event
title: Android memory-safety bugs fall below 20% of vulnerabilities
description: On 2025-11-13 Google reported that memory-safety bugs had fallen below 20% of Android vulnerabilities (from about 76% in 2019), that Rust code had about 1000x lower memory-safety vulnerability density than C/C++, and that Rust changes had 4x lower rollback rates. It is the strongest industrial evidence for "memory-safe languages for new code".
event_kind: adoption
date: 2025-11-13
era: E4
impact: positive
languages: [languages/rust, languages/cpp, languages/c]
runtimes: []
ideas: [ideas/memory-safety/ownership-and-borrowing, ideas/memory-safety/memory-safety-policy-push, ideas/memory-safety/rust-in-os-kernels]
tags: [android, google, rust, memory-safety, data]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: gsb-android-2025
    resource: https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html
    title: "Google Online Security Blog: Rust in Android — move fast and fix things (2025-11-13)"
    author: org:google
  - id: gsb-android-2024
    resource: https://security.googleblog.com/2024/09/eliminating-memory-safety-vulnerabilities-Android.html
    title: "Google Online Security Blog: Eliminating Memory Safety Vulnerabilities at the Source (2024-09)"
    author: org:google
  - id: thn-android
    resource: https://thehackernews.com/2025/11/rust-adoption-drives-android-memory.html
    title: "The Hacker News: Rust Adoption Drives Android Memory Safety Bugs Below 20% for First Time"
---

# What happened
On 2025-11-13 Google's Android team (Jeff Vander Stoep and colleagues) published its annual memory-safety data.[^gsb-android-2025] Memory-safety issues fell **below 20%** of Android's vulnerabilities for the first time. In 2024 Google had reported 24%, down from 76% in 2019, and attributed the fall to writing *new* code in memory-safe languages while leaving old C/C++ in place.[^gsb-android-2024] The 2025 post added three findings:
- About a **1000x lower** memory-safety vulnerability density in Rust than in Android's C/C++.
- Rust changes have a **4x lower rollback rate**, spend **25% less time in code review**, and need about 20% fewer revisions than comparable C++ changes.
- Android's 6.12 kernel is the first with Rust enabled and a production Rust driver. Rust is expanding into firmware and first-party apps.[^gsb-android-2025][^thn-android]

# Why it matters
This is the main empirical support for the [memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md) and for [ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md) as a mainstream idea. It also makes a second, under-appreciated argument: Rust was *faster to ship*, not just safer. That answers the productivity objection that had slowed adoption. The "vulnerabilities decay with code age, so focus on new code" thesis gave C/C++ shops a feasible strategy that needs no rewrites. That made the transition politically viable for large organisations.

# Related
- [Rust](/languages/rust.md), [C++](/languages/cpp.md)
- [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md)
- [CISA/NSA memory-safe languages guide](/events/2025-06-cisa-nsa-memory-safe-languages-guide.md)

[^gsb-android-2025]: Google Online Security Blog: Rust in Android — move fast and fix things — https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html
[^gsb-android-2024]: Google Online Security Blog: Eliminating Memory Safety Vulnerabilities at the Source — https://security.googleblog.com/2024/09/eliminating-memory-safety-vulnerabilities-Android.html
[^thn-android]: The Hacker News: Rust Adoption Drives Android Memory Safety Bugs Below 20% — https://thehackernews.com/2025/11/rust-adoption-drives-android-memory.html
