---
type: Idea
title: Safe C++ vs profiles (making C++ itself memory-safe)
description: "Two competing routes to memory safety inside ISO C++: a sound, borrow-checked safe subset (Safe C++, P3390) versus opt-in 'profiles' of restrictions and checks (Stroustrup/Sutter). 2018–2026 verdict: Safe C++ was abandoned in 2025; profiles won the vote but missed C++26 and were deferred to C++29. What actually shipped was hardening — a hardened standard library, erroneous behaviour for uninitialised reads, and contracts — effective but not memory safety."
area: memory-safety
tags: [cpp, wg21, profiles, safe-cpp, circle, hardening, contracts, standards]
outcome: stalled
maturity_2026: experimental
origin_year: 2015
mainstream_year: null
languages: [languages/cpp, languages/rust, languages/carbon, languages/cppfront]
runtimes: []
related_ideas:
  - ideas/memory-safety/ownership-and-borrowing
  - ideas/memory-safety/bounds-safety-and-hardened-c
  - ideas/memory-safety/cpp-successor-languages
  - ideas/memory-safety/memory-safety-policy-push
  - ideas/tooling-and-ecosystem/language-editions-and-evolution
era_momentum: { E1: flat, E2: flat, E3: up, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: core-guidelines
    resource: https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines
    title: "C++ Core Guidelines (Stroustrup, Sutter; profiles concept since 2015)"
  - id: p3390
    resource: https://isocpp.org/files/papers/P3390R0.html
    title: "WG21 P3390R0: Safe C++ (Sean Baxter, Christian Mazakas, 2024-09-11)"
  - id: reg-safecpp-2024
    resource: https://www.theregister.com/2024/09/16/safe_c_plusplus/
    title: "The Register: The empire of C++ strikes back with Safe C++ proposal (2024-09-16)"
  - id: reg-safecpp-2025
    resource: https://www.theregister.com/2025/09/16/safe_c_proposal_ditched/
    title: "The Register: Safe C++ proposal all but abandoned in favor of profiles (2025-09-16)"
  - id: infoworld-flames
    resource: https://www.infoworld.com/article/4065702/safe-c-proposal-for-memory-safety-flames-out.html
    title: "InfoWorld: Safe C++ proposal for memory safety flames out (2025)"
  - id: p3651
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3651r0.pdf
    title: "WG21 P3651R0: Stroustrup, 'Profiles are essential' (2025-03-06)"
  - id: p3608
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3608r0.html
    title: "WG21 P3608R0: Contracts and profiles — what can we reasonably ship in C++26"
  - id: thinkcell-hagenberg
    resource: https://www.think-cell.com/en/career/devblog/trip-report-winter-iso-cpp-meeting-in-hagenberg-austria
    title: "think-cell: Trip report — Winter ISO C++ meeting in Hagenberg, Austria (2025-02)"
  - id: p3471
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3471r2.html
    title: "WG21 P3471R2: Standard library hardening"
  - id: google-libcxx
    resource: https://security.googleblog.com/2024/11/retrofitting-spatial-safety-to-hundreds.html
    title: "Google Security Blog: Retrofitting spatial safety to hundreds of millions of lines of C++ (2024-11-15)"
  - id: infoq-cpp26
    resource: https://www.infoq.com/news/2026/04/cpp-26-reflection-safety-async/
    title: "InfoQ: C++26 — Reflection, Memory Safety, Contracts, and a New Async Model (2026-04)"
  - id: wrocpp-safety
    resource: https://wrocpp.github.io/toolset/memory-safety-cpp26-and-beyond/
    title: "wro.cpp: Memory safety in C++26 and beyond — what shipped, what's deferred to C++29"
  - id: p3878
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3878r0.html
    title: "WG21 P3878R0: C++26 Contracts are not a good fit for standard library hardening"
  - id: circle
    resource: https://www.circle-lang.org/site/index.html
    title: "Circle C++ with Memory Safety (Sean Baxter)"
---

# Summary
**Stalled.** Under unprecedented policy pressure ([memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md)), WG21 had to answer "can C++ be memory-safe?" Two answers competed. **Safe C++** (P3390, Sept 2024), implemented in Sean Baxter's Circle compiler, imported Rust's model wholesale: a `safe` context, borrow-checked references, a new safe standard library — sound, but effectively a second language.[^p3390][^circle] **Profiles** (Stroustrup/Sutter, lineage in the 2015 Core Guidelines) proposed opt-in sets of compile-time restrictions and run-time checks over existing code.[^core-guidelines][^p3651] In Hagenberg (Feb 2025) the safety study group voted to prioritise profiles (≈30 of 45 encouraging profiles vs ≈20 for Safe C++);[^thinkcell-hagenberg][^reg-safecpp-2025] in September 2025 Safe C++ was declared no longer pursued — "Profiles won the argument" (Baxter).[^reg-safecpp-2025][^infoworld-flames] But profiles were not ready either: C++26 (finalised March 2026) shipped standard-library hardening, contracts and erroneous behaviour, while `[[profiles::enforce]]` slipped to C++29.[^infoq-cpp26][^wrocpp-safety] As of 2026, no form of guaranteed memory safety exists in ISO C++.

# The idea
- **Safe C++ (sound subset):** mark code `safe`; inside it, only borrow-checked references, no raw pointer arithmetic, no unchecked UB; interoperate with "unsafe" legacy C++ like Rust's `unsafe`. Requires new library types (`std2::vector`, etc.).[^p3390]
- **Profiles (enforced guidelines):** named bundles (type, bounds, lifetime, initialisation…) that a translation unit can enforce; violations either rejected at compile time or checked at run time; no new reference types.[^p3651]
- **Hardening (what shipped):** turn precondition violations in `operator[]`, `front()`, `span` etc. into contract violations; make reading uninitialised locals "erroneous behaviour" rather than UB.[^p3471][^infoq-cpp26]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2015–2020 | Core Guidelines profiles exist mainly as static-analysis rules [^core-guidelines] | flat |
| E3 | 2022–23 | NSA and CISA name "C/C++" as memory-unsafe ([event](/events/2022-11-nsa-memory-safety-guidance.md)) | − |
| E3 | 2024-06 | Circle demonstrates borrow-checked C++ [^circle] | + |
| E3 | 2024-09-11 | Safe C++ (P3390) submitted [^p3390][^reg-safecpp-2024] | + |
| E4 | 2024-11 | Google: hardened libc++ at ~0.3% cost, >1,000 bugs found [^google-libcxx] | + |
| E4 | 2025-02 | Hagenberg: SG23 prioritises profiles [^thinkcell-hagenberg] | − |
| E4 | 2025-03-06 | Stroustrup's P3651 "call to urgent action" for profiles [^p3651] | mixed |
| E4 | 2025-06 | Sofia feature freeze: hardening + contracts in, profiles not ready [^p3608] | mixed |
| E4 | 2025-09 | Safe C++ abandoned ([event](/events/2025-09-safe-cpp-abandoned.md)) [^reg-safecpp-2025] | − |
| E4 | 2026-03 | C++26 final: hardening/contracts/EB shipped; profiles → C++29 ([event](/events/2026-03-cpp26-finalized.md)) [^wrocpp-safety] | mixed |

# Where it succeeded
- **Hardening.** Recompile-only spatial checks in the standard library proved cheap and valuable (Google: 30% fewer segfaults in production, 1,000–2,000 bugs/year prevented), and became standard in C++26.[^google-libcxx][^infoq-cpp26]
- **Removing one UB class.** Erroneous behaviour for uninitialised reads closes a common bug class with no source changes.[^infoq-cpp26]
- **Proof of concept.** Circle showed a borrow checker for C++ is *technically* feasible.[^circle]

# Where it failed or stalled
- **Safe C++** lost support and its author stopped work.[^reg-safecpp-2025]
- **Profiles** lacked a complete, implemented specification at the C++26 deadline; critics questioned whether opt-in restrictions without a lifetime model can deliver temporal safety.[^p3608][^wrocpp-safety]
- Even the contract-based hardening design was contested late (P3878 argued contracts are a poor fit for library hardening).[^p3878]

# Why
1. **Compatibility is WG21's prime directive.** Safe C++ required a parallel standard library and new idioms; to many members this was "Rust with C++ syntax" and a split of the ecosystem.[^reg-safecpp-2025]
2. **Consensus process vs single-author design.** Safe C++ was largely one implementer's work; profiles had the language's creator and the committee chair behind it.[^p3651]
3. **Regulatory pressure favoured something shippable.** Stroustrup argued WG21 "needs to do something significant and be seen to do it" — favouring the incremental option.[^p3651]
4. **But incrementalism hit specification reality.** Profiles were older as an idea than as a spec; a framework needing lifetime analysis could not be finished in one cycle.[^p3608]
5. **Industry had already hedged.** Google and Microsoft invested in Rust interop and hardening rather than waiting for a safe C++.[^google-libcxx]

# Lessons
- Sound safety requires library redesign; committees optimised for compatibility will choose mitigations.
- "Hardening now, safety later" delivers measurable value fast, but leaves use-after-free and data races to other tools (MTE/MIE, CHERI, Rust).
- If C++ ever gets guaranteed safety, it will most likely be via a successor dialect (Carbon, cppfront) rather than ISO C++ itself.

# Related
- Languages: [C++](/languages/cpp.md), [Rust](/languages/rust.md), [Carbon](/languages/carbon.md), [cppfront](/languages/cppfront.md)
- Ideas: [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md), [Bounds safety and hardened C](/ideas/memory-safety/bounds-safety-and-hardened-c.md), [C++ successor languages](/ideas/memory-safety/cpp-successor-languages.md), [Language editions](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md)
- Events: [Safe C++ abandoned](/events/2025-09-safe-cpp-abandoned.md), [C++26 finalised](/events/2026-03-cpp26-finalized.md), [Google hardened libc++](/events/2024-11-google-hardened-libcxx-results.md)

[^core-guidelines]: C++ Core Guidelines — https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines
[^p3390]: WG21 P3390R0: Safe C++ — https://isocpp.org/files/papers/P3390R0.html
[^reg-safecpp-2024]: The Register: The empire of C++ strikes back with Safe C++ proposal — https://www.theregister.com/2024/09/16/safe_c_plusplus/
[^reg-safecpp-2025]: The Register: Safe C++ proposal all but abandoned in favor of profiles — https://www.theregister.com/2025/09/16/safe_c_proposal_ditched/
[^infoworld-flames]: InfoWorld: Safe C++ proposal for memory safety flames out — https://www.infoworld.com/article/4065702/safe-c-proposal-for-memory-safety-flames-out.html
[^p3651]: WG21 P3651R0: Profiles are essential — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3651r0.pdf
[^p3608]: WG21 P3608R0: Contracts and profiles — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3608r0.html
[^thinkcell-hagenberg]: think-cell: Trip report Hagenberg — https://www.think-cell.com/en/career/devblog/trip-report-winter-iso-cpp-meeting-in-hagenberg-austria
[^p3471]: WG21 P3471R2: Standard library hardening — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3471r2.html
[^google-libcxx]: Google Security Blog: Retrofitting spatial safety — https://security.googleblog.com/2024/11/retrofitting-spatial-safety-to-hundreds.html
[^infoq-cpp26]: InfoQ: C++26 — https://www.infoq.com/news/2026/04/cpp-26-reflection-safety-async/
[^wrocpp-safety]: wro.cpp: Memory safety in C++26 and beyond — https://wrocpp.github.io/toolset/memory-safety-cpp26-and-beyond/
[^p3878]: WG21 P3878R0: C++26 Contracts are not a good fit for standard library hardening — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3878r0.html
[^circle]: Circle C++ with Memory Safety — https://www.circle-lang.org/site/index.html
