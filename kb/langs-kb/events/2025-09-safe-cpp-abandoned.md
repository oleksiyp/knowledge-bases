---
type: Event
title: Safe C++ (P3390) abandoned as WG21 backs profiles
description: Sean Baxter's Safe C++ proposal (September 2024) would have added Rust-style borrow checking to C++. WG21's safety group prioritised Stroustrup/Sutter "profiles" instead, and in September 2025 Baxter confirmed the work had stopped. Profiles then failed to make C++26.
event_kind: proposal-rejected
date: 2025-09-16
era: E4
impact: negative
languages: [languages/cpp, languages/rust]
runtimes: []
ideas: [ideas/memory-safety/safe-cpp-vs-profiles, ideas/memory-safety/ownership-and-borrowing, ideas/memory-safety/cpp-successor-languages]
tags: [cpp, safe-cpp, profiles, wg21, borrow-checking, circle]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: p3390
    resource: https://isocpp.org/files/papers/P3390R0.html
    title: "WG21 P3390R0: Safe C++ (Baxter, Mazakas; 2024-09-11)"
  - id: reg-safecpp-2024
    resource: https://www.theregister.com/2024/09/16/safe_c_plusplus/
    title: "The Register: The empire of C++ strikes back with Safe C++ proposal (2024-09-16)"
  - id: p3651
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3651r0.pdf
    title: "WG21 P3651R0: Profiles are essential (Stroustrup, 2025-03-06)"
  - id: reg-safecpp-2025
    resource: https://www.theregister.com/2025/09/16/safe_c_proposal_ditched/
    title: "The Register: Safe C++ proposal all but abandoned in favor of profiles (2025-09-16)"
  - id: infoworld-safecpp
    resource: https://www.infoworld.com/article/4065702/safe-c-proposal-for-memory-safety-flames-out.html
    title: "InfoWorld: Safe C++ proposal for memory safety flames out"
  - id: thinkcell-hagenberg
    resource: https://www.think-cell.com/en/career/devblog/trip-report-winter-iso-cpp-meeting-in-hagenberg-austria
    title: "think-cell: Trip Report — Winter ISO C++ Meeting in Hagenberg, Austria (Feb 2025)"
---

# What happened
- **September 2024.** Sean Baxter (author of the Circle compiler) and Christian Mazakas, with C++ Alliance backing, submitted P3390 "Safe C++". It proposed an opt-in `safe` context with a borrow-checked reference type, initialization analysis, a safe standard library and data-race safety, all implemented in Circle.[^p3390][^reg-safecpp-2024]
- **Late 2024 – February 2025.** WG21 debated it against "profiles", Stroustrup's and Sutter's framework of enforceable rule sets layered over existing C++. EWG co-chair Erich Keane later reported roughly 20 of 45 members encouraging more work on Safe C++ versus 30 of 45 for profiles. At the Hagenberg meeting (February 2025) the safety study group (SG23) prioritised profiles.[^reg-safecpp-2025][^thinkcell-hagenberg]
- **March 2025.** Stroustrup's P3651 "Profiles are essential" called for "urgent action", framing C++ as "under attack" from US/EU regulators and rival-language promoters.[^p3651]
- **September 2025.** Baxter confirmed Safe C++ "is not being continued": "The Rust safety model is unpopular with the committee … Profiles won the argument."[^reg-safecpp-2025][^infoworld-safecpp]

# Why it matters
This was the decisive fork in [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md). The committee rejected adding [ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md), which would have made a second, Rust-like dialect inside C++, in favour of incremental, compatibility-first rules. Yet profiles themselves did not ship in C++26: the `[[profiles::enforce]]` framework was deferred to C++29. What [did ship](/events/2026-03-cpp26-finalized.md) was library hardening, erroneous behaviour for uninitialised reads, and contracts. For organisations that need guaranteed temporal memory safety, the practical answer remained "use Rust for new code", which strengthened the case for [successor languages](/ideas/memory-safety/cpp-successor-languages.md) and interop.

# Related
- [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md)
- [C++](/languages/cpp.md), [Rust](/languages/rust.md)
- [Google hardened libc++ results](/events/2024-11-google-hardened-libcxx-results.md)

[^p3390]: WG21 P3390R0: Safe C++ — https://isocpp.org/files/papers/P3390R0.html
[^reg-safecpp-2024]: The Register: The empire of C++ strikes back with Safe C++ proposal — https://www.theregister.com/2024/09/16/safe_c_plusplus/
[^p3651]: WG21 P3651R0: Profiles are essential — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3651r0.pdf
[^reg-safecpp-2025]: The Register: Safe C++ proposal all but abandoned in favor of profiles — https://www.theregister.com/2025/09/16/safe_c_proposal_ditched/
[^infoworld-safecpp]: InfoWorld: Safe C++ proposal for memory safety flames out — https://www.infoworld.com/article/4065702/safe-c-proposal-for-memory-safety-flames-out.html
[^thinkcell-hagenberg]: think-cell: Trip Report — Winter ISO C++ Meeting in Hagenberg — https://www.think-cell.com/en/career/devblog/trip-report-winter-iso-cpp-meeting-in-hagenberg-austria
