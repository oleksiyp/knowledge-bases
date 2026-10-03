---
type: Idea
title: Bounds safety and hardened C/C++ (retrofit without rewriting)
description: "Make existing C and C++ safer by recompiling rather than rewriting: bounds-annotated pointers (-fbounds-safety, __counted_by), hardened standard libraries, _FORTIFY_SOURCE=3, UAF-mitigating smart pointers (MiraclePtr), hardware memory tagging (MTE/EMTE) and fully safe C implementations (Fil-C). 2018–2026 verdict: succeeding — cheap spatial hardening became standard practice and entered C++26, and Apple shipped always-on tagging in iPhone 17; but these are mitigations, temporal safety remains partial, and fully-safe-C projects stayed niche."
area: memory-safety
tags: [hardening, bounds-safety, libcxx, fortify-source, mte, emte, miracleptr, fil-c, trapc, apple, google]
outcome: succeeding
maturity_2026: adopted
origin_year: 2004
mainstream_year: 2024
languages: [languages/c, languages/cpp]
runtimes: [runtimes/llvm, runtimes/gcc]
related_ideas:
  - ideas/memory-safety/safe-cpp-vs-profiles
  - ideas/memory-safety/cheri-capability-hardware
  - ideas/memory-safety/memory-safety-policy-push
  - ideas/memory-safety/ownership-and-borrowing
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: fortify3
    resource: https://developers.redhat.com/articles/2022/09/17/gccs-new-fortification-level
    title: "Red Hat Developers: GCC's new fortification level — the gains and costs (_FORTIFY_SOURCE=3, 2022-09)"
  - id: counted-by
    resource: https://people.kernel.org/gustavoars/how-to-use-the-new-counted_by-attribute-in-c-and-linux
    title: "Gustavo A. R. Silva: How to use the new counted_by attribute in C (and Linux) (Clang 18, GCC 15)"
  - id: fbounds-rfc
    resource: https://discourse.llvm.org/t/rfc-enforcing-bounds-safety-in-c-fbounds-safety/70854
    title: "LLVM Discourse: RFC — Enforcing Bounds Safety in C (-fbounds-safety), Apple, 2023"
  - id: fbounds-plan
    resource: https://clang.llvm.org/docs/BoundsSafetyImplPlans.html
    title: "Clang docs: Implementation plans for -fbounds-safety (upstreaming behind -fbounds-safety-experimental)"
  - id: libcxx-hardening
    resource: https://releases.llvm.org/18.1.0/projects/libcxx/docs/Hardening.html
    title: "libc++ 18 documentation: Hardening Modes (fast / extensive / debug)"
  - id: google-libcxx
    resource: https://security.googleblog.com/2024/11/retrofitting-spatial-safety-to-hundreds.html
    title: "Google Security Blog: Retrofitting spatial safety to hundreds of millions of lines of C++ (2024-11-15)"
  - id: miracleptr-2024
    resource: https://security.googleblog.com/2024/01/miracleptr-protecting-users-from-use.html
    title: "Google Security Blog: MiraclePtr — protecting users from use-after-free vulnerabilities on more platforms (2024-01; 57% of UAFs mitigated)"
  - id: grapheneos-mte
    resource: https://x.com/GrapheneOS/status/1716945639198880037
    title: "GrapheneOS: Pixel 8 supports hardware memory tagging; stock OS has only an experimental developer option (2023-10)"
  - id: apple-mie
    resource: https://www.macrumors.com/2025/09/10/iphone-17-new-memory-security-feature/
    title: "MacRumors: iPhone 17 introduces 'groundbreaking' Memory Integrity Enforcement (2025-09-10)"
  - id: thn-mie
    resource: https://thehackernews.com/2025/09/apple-iphone-air-and-iphone-17-feature.html
    title: "The Hacker News: iPhone 17 and iPhone Air A19 chips with spyware-resistant memory safety (EMTE, kernel + 70 userland processes)"
  - id: filc-lwn
    resource: https://lwn.net/Articles/1042938/
    title: "LWN: Fil-C — a memory-safe C implementation (2025)"
  - id: trapc-claude
    resource: https://www.theregister.com/software/2026/01/26/dev-used-claude-to-build-trapc-memory-safe-extension-of-c/4132586
    title: "The Register: Dev used Claude to build TrapC, memory-safe extension of C (2026-01-26)"
  - id: infoq-cpp26
    resource: https://www.infoq.com/news/2026/04/cpp-26-reflection-safety-async/
    title: "InfoQ: C++26 — Reflection, Memory Safety, Contracts, and a New Async Model (2026-04)"
  - id: openssf-annotations
    resource: https://openssf.org/blog/2026/02/12/fill-out-all-the-margins-%F0%9F%93%96-openssf-releases-compiler-annotations-guide-for-c-and-c/
    title: "OpenSSF: Compiler Annotations Guide for C and C++ (2026-02-12)"
---

# Summary
**Succeeding.** While the policy debate argued "rewrite in a memory-safe language", the largest volume of actual risk reduction in 2018–2026 came from *recompiling* existing C and C++ with checks on. Google's hardened libc++ rollout across hundreds of millions of lines found >1,000 bugs, cut production segfaults by 30% and cost ~0.3% performance;[^google-libcxx] the same approach became C++26's hardened standard library.[^infoq-cpp26] Chrome's MiraclePtr mitigated 57% of use-after-free bugs in privileged processes.[^miracleptr-2024] Apple's `-fbounds-safety` covers millions of lines of production C including the XNU networking stack and is being upstreamed to Clang;[^fbounds-rfc][^fbounds-plan] Linux adopted `__counted_by` for flexible arrays;[^counted-by] GCC 12 / glibc 2.34 brought `_FORTIFY_SOURCE=3`.[^fortify3] Hardware tagging went from a Pixel 8 developer option (2023)[^grapheneos-mte] to Apple's always-on Memory Integrity Enforcement on iPhone 17 (2025).[^apple-mie][^thn-mie] The limits: these are probabilistic or spatial-only mitigations; fully safe C (Fil-C) costs a few-x slowdown, and TrapC remained vapourware into 2026.[^filc-lwn][^trapc-claude]

# The idea
Attack the commonest memory bugs without changing languages: (1) **spatial safety** — know every buffer's bounds and check accesses (annotated pointers, hardened containers, fortified libc calls); (2) **temporal mitigation** — quarantine or poison freed memory (MiraclePtr/BackupRefPtr, hardened allocators); (3) **hardware tagging** — MTE/EMTE colour memory and pointers so mismatched accesses trap; (4) **full runtime safety** — capability-carrying pointers plus GC (Fil-C) or hardware capabilities ([CHERI](/ideas/memory-safety/cheri-capability-hardware.md)). Prior art: StackGuard, `_FORTIFY_SOURCE` (2004), SafeStack, Checked C, AddressSanitizer.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022-06 | Chrome enables MiraclePtr (BackupRefPtr) in browser process [^miracleptr-2024] | + |
| E2 | 2022-09 | `_FORTIFY_SOURCE=3` with GCC 12 / glibc 2.34 [^fortify3] | + |
| E3 | 2023-05 | Apple RFC: `-fbounds-safety` for Clang [^fbounds-rfc] | + |
| E3 | 2023-10 | Pixel 8: first phone with MTE; GrapheneOS enables it in production [^grapheneos-mte] | + |
| E3 | 2024-01 | MiraclePtr data: 57% of privileged-process UAFs mitigated [^miracleptr-2024] | + |
| E3 | 2024-03 | libc++ 18 ships fast/extensive/debug hardening modes [^libcxx-hardening] | + |
| E3 | 2024 | `__counted_by` in Clang 18; Linux annotates flexible arrays [^counted-by] | + |
| E4 | 2024-11-15 | Google: hardened libc++ fleet-wide, ~0.3% cost ([event](/events/2024-11-google-hardened-libcxx-results.md)) [^google-libcxx] | + |
| E4 | 2025 | Fil-C runs OpenSSL, CPython, SQLite unmodified, memory-safe [^filc-lwn] | mixed |
| E4 | 2025-09-09 | Apple Memory Integrity Enforcement (EMTE) always-on in iPhone 17 ([event](/events/2025-09-apple-memory-integrity-enforcement.md)) [^apple-mie] | + |
| E4 | 2026-01 | TrapC still unreleased after promised 2025 release [^trapc-claude] | − |
| E4 | 2026-02 | OpenSSF publishes compiler annotations guide for C/C++ [^openssf-annotations] | + |
| E4 | 2026-03 | C++26 standardises hardened library + erroneous behaviour ([event](/events/2026-03-cpp26-finalized.md)) [^infoq-cpp26] | + |

# Where it succeeded
- **Hyperscale C++ (Google, Apple)**: hardening was cheap enough to turn on by default for production fleets.[^google-libcxx]
- **Browsers**: MiraclePtr made a majority of UAFs non-exploitable without rewriting Chrome.[^miracleptr-2024]
- **Consumer OS**: Apple's MIE is the first always-on hardware memory-safety deployment at hundreds-of-millions scale, covering the kernel and 70+ userland processes.[^thn-mie]
- **Standardisation**: C++26 hardened library; Clang upstreaming `-fbounds-safety`; Linux `__counted_by`.[^infoq-cpp26][^fbounds-plan][^counted-by]

# Where it failed or stalled
- **Temporal safety is still mostly probabilistic** (MTE tags, quarantines) — exploitable with enough effort, while Rust/CHERI give deterministic guarantees.
- **MTE on Android stayed opt-in**: Pixel 8's stock implementation was a developer option that "breaks far too much"; only GrapheneOS shipped it by default early.[^grapheneos-mte]
- **Fully safe C dialects** remain niche: Fil-C's few-x slowdown limits it to hardened builds; TrapC missed its 2025 release.[^filc-lwn][^trapc-claude]
- **Annotation burden**: `-fbounds-safety` and `__counted_by` require per-struct annotations; adoption is file-by-file.[^fbounds-plan]

# Why
1. **Cost model.** Recompiling with checks costs ~0.3–1% CPU and no engineering rewrite; even a modest bug reduction beats a multi-year rewrite on ROI.[^google-libcxx]
2. **Vertical integration helps.** Apple controls silicon, compiler and OS, so it could co-design EMTE, allocators and `-fbounds-safety`; Android's fragmented ecosystem could not flip MTE on by default.[^apple-mie][^grapheneos-mte]
3. **It complements, not competes with, safe languages.** Google's strategy is explicit: Rust for new code, hardening for old code — so hardening was funded by the same teams pushing Rust.
4. **Policy pressure** made "we harden our C++" a necessary answer even where rewrites were impossible ([policy push](/ideas/memory-safety/memory-safety-policy-push.md)).

# Lessons
- The highest-leverage security work on legacy code is often a compiler flag turned on by default.
- Hardware/software co-design (EMTE, CHERI) is where temporal safety for legacy C will come from, if it comes at all.
- Mitigations reduce exploitability but not the need to stop writing new memory-unsafe code.

# Related
- Languages: [C](/languages/c.md), [C++](/languages/cpp.md), [Rust](/languages/rust.md)
- Runtimes: [LLVM](/runtimes/llvm.md), [GCC](/runtimes/gcc.md)
- Ideas: [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md), [CHERI](/ideas/memory-safety/cheri-capability-hardware.md), [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md)
- Events: [Google hardened libc++](/events/2024-11-google-hardened-libcxx-results.md), [Apple MIE](/events/2025-09-apple-memory-integrity-enforcement.md), [C++26 finalised](/events/2026-03-cpp26-finalized.md)

[^fortify3]: Red Hat Developers: GCC's new fortification level — https://developers.redhat.com/articles/2022/09/17/gccs-new-fortification-level
[^counted-by]: Gustavo A. R. Silva: How to use the new counted_by attribute — https://people.kernel.org/gustavoars/how-to-use-the-new-counted_by-attribute-in-c-and-linux
[^fbounds-rfc]: LLVM Discourse: RFC — Enforcing Bounds Safety in C — https://discourse.llvm.org/t/rfc-enforcing-bounds-safety-in-c-fbounds-safety/70854
[^fbounds-plan]: Clang docs: Implementation plans for -fbounds-safety — https://clang.llvm.org/docs/BoundsSafetyImplPlans.html
[^libcxx-hardening]: libc++ 18: Hardening Modes — https://releases.llvm.org/18.1.0/projects/libcxx/docs/Hardening.html
[^google-libcxx]: Google Security Blog: Retrofitting spatial safety — https://security.googleblog.com/2024/11/retrofitting-spatial-safety-to-hundreds.html
[^miracleptr-2024]: Google Security Blog: MiraclePtr on more platforms — https://security.googleblog.com/2024/01/miracleptr-protecting-users-from-use.html
[^grapheneos-mte]: GrapheneOS on Pixel 8 MTE — https://x.com/GrapheneOS/status/1716945639198880037
[^apple-mie]: MacRumors: iPhone 17 Memory Integrity Enforcement — https://www.macrumors.com/2025/09/10/iphone-17-new-memory-security-feature/
[^thn-mie]: The Hacker News: iPhone 17 A19 memory safety — https://thehackernews.com/2025/09/apple-iphone-air-and-iphone-17-feature.html
[^filc-lwn]: LWN: Fil-C — https://lwn.net/Articles/1042938/
[^trapc-claude]: The Register: TrapC with Claude — https://www.theregister.com/software/2026/01/26/dev-used-claude-to-build-trapc-memory-safe-extension-of-c/4132586
[^infoq-cpp26]: InfoQ: C++26 — https://www.infoq.com/news/2026/04/cpp-26-reflection-safety-async/
[^openssf-annotations]: OpenSSF: Compiler Annotations Guide for C and C++ — https://openssf.org/blog/2026/02/12/fill-out-all-the-margins-%F0%9F%93%96-openssf-releases-compiler-annotations-guide-for-c-and-c/
