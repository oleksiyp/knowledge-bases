---
type: Idea
title: Government and industry push for memory-safe languages
description: "Treat memory-unsafe languages as a measurable security liability and steer vendors (via guidance, procurement and liability) towards memory-safe languages and published roadmaps. 2018–2026 verdict: succeeding as agenda-setting — it moved budgets, standards debates and vendor roadmaps — but mixed as policy, since US guidance stayed voluntary, the 2026 roadmap deadline was non-binding, and the 2025 executive order removed technology-specific mandates."
area: memory-safety
tags: [policy, cisa, nsa, white-house, oncd, eu-cra, secure-by-design, android, chromium]
outcome: succeeding
maturity_2026: adopted
origin_year: 2019
mainstream_year: 2022
languages: [languages/rust, languages/c, languages/cpp, languages/go, languages/swift, languages/java, languages/csharp, languages/ada-spark]
runtimes: []
related_ideas:
  - ideas/memory-safety/ownership-and-borrowing
  - ideas/memory-safety/safe-cpp-vs-profiles
  - ideas/memory-safety/bounds-safety-and-hardened-c
  - ideas/memory-safety/c-to-rust-translation
  - ideas/memory-safety/cheri-capability-hardware
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: msrc-2019
    resource: https://msrc.microsoft.com/blog/2019/07/a-proactive-approach-to-more-secure-code/
    title: "Microsoft MSRC: A proactive approach to more secure code (2019-07; ~70% of CVEs are memory safety)"
    author: org:microsoft
  - id: chromium-ms
    resource: https://www.chromium.org/Home/chromium-security/memory-safety/
    title: "Chromium: Memory safety (around 70% of high-severity security bugs)"
  - id: nsa-2022
    resource: https://media.defense.gov/2022/Nov/10/2003112742/-1/-1/0/CSI_SOFTWARE_MEMORY_SAFETY.PDF
    title: "NSA: Software Memory Safety cybersecurity information sheet (2022-11-10)"
  - id: cisa-roadmaps
    resource: https://www.cisa.gov/resources-tools/resources/case-memory-safe-roadmaps
    title: "CISA et al.: The Case for Memory Safe Roadmaps (2023-12)"
  - id: oncd-2024
    resource: https://bidenwhitehouse.archives.gov/wp-content/uploads/2024/02/Final-ONCD-Technical-Report.pdf
    title: "White House ONCD: Back to the Building Blocks — A Path Toward Secure and Measurable Software (2024-02-26)"
  - id: cisa-pledge
    resource: https://www.cisa.gov/news-events/news/cisa-announces-secure-design-commitments-leading-technology-providers
    title: "CISA: Secure by Design commitments from leading technology providers (2024-05)"
  - id: cisa-bad-practices
    resource: https://www.ic3.gov/CSA/2024/241016-2.pdf
    title: "CISA/FBI: Product Security Bad Practices (2024-10; memory-safety roadmap by 2026-01-01)"
  - id: eu-cra
    resource: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
    title: "European Commission: Cyber Resilience Act — reporting obligations (in force 2024-12-10; reporting from 2026-09-11)"
  - id: cisa-nsa-2025
    resource: https://www.cisa.gov/news-events/alerts/2025/06/24/new-guidance-released-reducing-memory-related-vulnerabilities
    title: "CISA: New guidance released for reducing memory-related vulnerabilities (CISA/NSA, 2025-06-24)"
  - id: eo-14306
    resource: https://www.congress.gov/crs_external_products/IN/HTML/IN12570.html
    title: "Congressional Research Service: Executive Order 14306 (2025-06-06) amending EO 14144"
  - id: p3651
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3651r0.pdf
    title: "WG21 P3651R0: Stroustrup, 'Profiles are essential' (2025-03-06)"
  - id: android-2024
    resource: https://lwn.net/Articles/991775/
    title: "LWN: Eliminating memory safety vulnerabilities at the source (Google, 2024-09; 76% → 24%)"
  - id: android-2025
    resource: https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html
    title: "Google Security Blog: Rust in Android: move fast and fix things (2025-11-13)"
  - id: darpa-tractor
    resource: https://www.darpa.mil/research/programs/translating-all-c-to-rust
    title: "DARPA: Translating All C to Rust (TRACTOR)"
  - id: ms-tier1
    resource: https://www.theregister.com/devops/2026/09/11/microsoft-anoints-rust-as-a-tier-1-internal-language/5295732
    title: "The Register: Microsoft anoints Rust as a 'Tier 1' internal language (2026-09-11)"
  - id: runsafe
    resource: https://runsafesecurity.com/blog/cisa-memory-safety-ot-leaders/
    title: "RunSafe Security: CISA's 2026 memory safety deadline (non-binding; appears in procurement questionnaires)"
---

# Summary
**Succeeding (as agenda-setting), mixed (as enforceable policy).** Between 2019 and 2025 a chain of vendor data and government documents turned "memory safety" from a PL-research concern into a board-level and procurement term. Microsoft (2019) and Chromium reported that ~70% of their serious security bugs were memory-safety bugs;[^msrc-2019][^chromium-ms] the NSA (Nov 2022) named C and C++ as memory-unsafe and recommended alternatives;[^nsa-2022] CISA and Five Eyes partners asked for "memory safe roadmaps" (Dec 2023);[^cisa-roadmaps] the White House ONCD report (Feb 2024) made the case at presidential level;[^oncd-2024] CISA/FBI called the absence of a roadmap by 1 January 2026 a "bad practice";[^cisa-bad-practices] and CISA/NSA restated the case in June 2025.[^cisa-nsa-2025] The EU Cyber Resilience Act (in force Dec 2024) added liability-style reporting duties from September 2026.[^eu-cra] Effects were real: Stroustrup's "call to urgent action" for profiles explicitly cited regulatory attack on C++;[^p3651] DARPA funded TRACTOR;[^darpa-tractor] Microsoft made Rust Tier 1.[^ms-tier1] But nothing became mandatory: the roadmap deadline was voluntary,[^runsafe] and Executive Order 14306 (June 2025) stripped technology-specific software-security mandates from the previous order.[^eo-14306]

# The idea
Instead of hunting individual bugs, eliminate a *class* of bugs by shifting new development to memory-safe languages (Rust, Go, Java, C#, Swift, Python…) and hardening the rest, and make vendors publicly accountable for doing so. Precedents: Microsoft SDL (2004), the "secure by default" movement. The problem: decades of exploit mitigations had not reduced the share of memory-safety CVEs.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-07 | Microsoft: ~70% of CVEs are memory-safety issues [^msrc-2019] | + |
| E1 | 2020-05 | Chromium: ~70% of high-severity bugs are memory-safety [^chromium-ms] | + |
| E3 | 2022-11-10 | NSA "Software Memory Safety" guidance ([event](/events/2022-11-nsa-memory-safety-guidance.md)) [^nsa-2022] | + |
| E3 | 2023-12 | CISA + Five Eyes: The Case for Memory Safe Roadmaps [^cisa-roadmaps] | + |
| E3 | 2024-02-26 | White House ONCD "Back to the Building Blocks" ([event](/events/2024-02-white-house-oncd-memory-safety-report.md)) [^oncd-2024] | + |
| E3 | 2024-05 | CISA Secure by Design pledge (68 initial signatories) [^cisa-pledge] | + |
| E3 | 2024-07 | DARPA TRACTOR launched [^darpa-tractor] | + |
| E3 | 2024-09 | Google: Android memory-safety share 76% → 24% [^android-2024] | + |
| E4 | 2024-10 | CISA/FBI Bad Practices: roadmap by 2026-01-01 ([event](/events/2024-10-cisa-memory-safety-roadmap-deadline.md)) [^cisa-bad-practices] | + |
| E4 | 2024-12-10 | EU Cyber Resilience Act enters into force [^eu-cra] | + |
| E4 | 2025-03-06 | Stroustrup: C++ "under attack", profiles essential [^p3651] | mixed |
| E4 | 2025-06-06 | EO 14306 removes technology-specific software-security mandates [^eo-14306] | − |
| E4 | 2025-06-24 | CISA/NSA "Memory Safe Languages: Reducing Vulnerabilities" ([event](/events/2025-06-cisa-nsa-memory-safe-languages-guide.md)) [^cisa-nsa-2025] | + |
| E4 | 2025-11 | Android memory-safety bugs below 20% [^android-2025] | + |
| E4 | 2026-01-01 | CISA roadmap date passes; non-binding, but used in procurement questionnaires [^runsafe] | mixed |
| E4 | 2026-09-11 | CRA vulnerability reporting obligations begin [^eu-cra] | + |

# Where it succeeded
- **Framing and budgets.** "Memory safety roadmap" became a deliverable at large vendors; the pledge drew AWS, Google, Microsoft and dozens of others.[^cisa-pledge]
- **Moving standards bodies.** WG21 explicitly reacted (profiles, hardened library, erroneous behaviour) — see [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md).[^p3651]
- **Research funding.** DARPA TRACTOR (C→Rust) and UK DSbD/CHERI got justification from the same agenda.[^darpa-tractor]
- **Evidence loop.** Google's Android numbers gave policy a success story to cite; policy, in turn, raised the value of publishing such numbers.[^android-2024][^android-2025]

# Where it failed or stalled
- **No teeth in the US.** All CISA/NSA/ONCD products were guidance; the 2026 deadline had no enforcement,[^runsafe] and the June 2025 EO dropped prescriptive software-security requirements.[^eo-14306]
- **Overbroad "C/C++" label.** It provoked defensive reactions in the C++ community and conflated modern C++ with C, which slowed consensus rather than accelerating it.[^p3651]
- **Legacy reality.** Roadmaps mostly promise *new* code in safe languages and hardening of old code — rewrite targets remain small, and OT/embedded vendors face toolchain gaps.

# Why
1. **Data first, policy second.** The 70% figures came from vendors with world-class security teams, making them hard to dismiss.[^msrc-2019][^chromium-ms]
2. **A viable alternative existed.** Policy could only say "use memory-safe languages" credibly once Rust covered GC-intolerant domains.
3. **Soft power over hard law.** US agencies lacked authority to mandate languages; they used procurement signalling, pledges and naming. That moved large vendors (reputational risk) but not the long tail.
4. **Political volatility.** A change of administration revised the executive order within 18 months, showing the limits of executive-branch-only policy.[^eo-14306]
5. **The EU chose liability over prescription.** The CRA regulates outcomes (vulnerability handling, reporting), which indirectly favours safer languages without naming them.[^eu-cra]

# Lessons
- Vendor-published, longitudinal vulnerability data is the most persuasive policy instrument for language change.
- Voluntary guidance shifts leaders, not laggards; outcome-based liability (CRA) may prove more durable than language lists.
- Naming a language as the problem triggers defensive standardisation efforts that can be slower than the policy horizon.

# Related
- Languages: [Rust](/languages/rust.md), [C](/languages/c.md), [C++](/languages/cpp.md), [Ada/SPARK](/languages/ada-spark.md), [Go](/languages/go.md), [Swift](/languages/swift.md)
- Ideas: [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md), [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md), [Bounds safety and hardened C](/ideas/memory-safety/bounds-safety-and-hardened-c.md), [C-to-Rust translation](/ideas/memory-safety/c-to-rust-translation.md), [CHERI](/ideas/memory-safety/cheri-capability-hardware.md), [Package registry supply chain](/ideas/tooling-and-ecosystem/package-registry-supply-chain.md)
- Events: [NSA guidance](/events/2022-11-nsa-memory-safety-guidance.md), [ONCD report](/events/2024-02-white-house-oncd-memory-safety-report.md), [CISA roadmap deadline](/events/2024-10-cisa-memory-safety-roadmap-deadline.md), [CISA/NSA guide](/events/2025-06-cisa-nsa-memory-safe-languages-guide.md), [Android below 20%](/events/2025-11-android-memory-safety-below-20pct.md)

[^msrc-2019]: Microsoft MSRC: A proactive approach to more secure code — https://msrc.microsoft.com/blog/2019/07/a-proactive-approach-to-more-secure-code/
[^chromium-ms]: Chromium: Memory safety — https://www.chromium.org/Home/chromium-security/memory-safety/
[^nsa-2022]: NSA: Software Memory Safety — https://media.defense.gov/2022/Nov/10/2003112742/-1/-1/0/CSI_SOFTWARE_MEMORY_SAFETY.PDF
[^cisa-roadmaps]: CISA: The Case for Memory Safe Roadmaps — https://www.cisa.gov/resources-tools/resources/case-memory-safe-roadmaps
[^oncd-2024]: White House ONCD: Back to the Building Blocks — https://bidenwhitehouse.archives.gov/wp-content/uploads/2024/02/Final-ONCD-Technical-Report.pdf
[^cisa-pledge]: CISA: Secure by Design commitments — https://www.cisa.gov/news-events/news/cisa-announces-secure-design-commitments-leading-technology-providers
[^cisa-bad-practices]: CISA/FBI: Product Security Bad Practices — https://www.ic3.gov/CSA/2024/241016-2.pdf
[^eu-cra]: European Commission: CRA reporting obligations — https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
[^cisa-nsa-2025]: CISA: New guidance for reducing memory-related vulnerabilities — https://www.cisa.gov/news-events/alerts/2025/06/24/new-guidance-released-reducing-memory-related-vulnerabilities
[^eo-14306]: CRS: Executive Order 14306 — https://www.congress.gov/crs_external_products/IN/HTML/IN12570.html
[^p3651]: WG21 P3651R0: Profiles are essential — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3651r0.pdf
[^android-2024]: LWN: Eliminating memory safety vulnerabilities at the source — https://lwn.net/Articles/991775/
[^android-2025]: Google Security Blog: Rust in Android — https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html
[^darpa-tractor]: DARPA: TRACTOR — https://www.darpa.mil/research/programs/translating-all-c-to-rust
[^ms-tier1]: The Register: Microsoft anoints Rust as Tier 1 — https://www.theregister.com/devops/2026/09/11/microsoft-anoints-rust-as-a-tier-1-internal-language/5295732
[^runsafe]: RunSafe Security: CISA's 2026 memory safety deadline — https://runsafesecurity.com/blog/cisa-memory-safety-ot-leaders/
