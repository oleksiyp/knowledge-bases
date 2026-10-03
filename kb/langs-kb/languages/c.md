---
type: Language
title: C
description: "The substrate language. 2018–2026 made C the primary target of the memory-safety policy push; it kept its #2 TIOBE slot and its role in kernels, embedded and runtimes, but lost the argument for new security-sensitive code. Its own evolution (C23, C2y defer) was incremental, and the serious safety work happened in compilers and hardware, not the standard."
tags: [systems, legacy, memory-unsafe, standards, iso, embedded, kernels]
paradigms: [systems, procedural]
typing: static
memory_model: manual
first_released: 1972
steward: ISO/IEC JTC1/SC22/WG14
governance: committee-standard
trajectory: stable
ideas:
  - ideas/memory-safety/memory-safety-policy-push
  - ideas/memory-safety/bounds-safety-and-hardened-c
  - ideas/memory-safety/c-to-rust-translation
  - ideas/memory-safety/cheri-capability-hardware
  - ideas/memory-safety/rust-in-os-kernels
runtimes: [runtimes/gcc, runtimes/llvm]
adoption_signals:
  tiobe_rank: { value: 2, as_of: 2026-09 }
  tiobe_rating_pct: { value: 10.28, as_of: 2026-09 }
era_momentum: { E1: flat, E2: flat, E3: down, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: c23-iso
    resource: https://blog.ansi.org/ansi/c-programming-language-standard-iso-iec-9899-2024/
    title: "ANSI Blog: The Current C Programming Language Standard — ISO/IEC 9899:2024 (C23, published 2024-10-31)"
  - id: cppref-c23
    resource: https://en.cppreference.com/c/23
    title: "cppreference: C23 feature list"
  - id: c2y-thephd
    resource: https://thephd.dev/c2y-hitting-the-ground-running
    title: "JeanHeyd Meneide: C2y — Hitting the Ground Running"
  - id: named-loops
    resource: https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3474.htm
    title: "WG14 N3474: Named loops (C2y)"
  - id: clang22-defer
    resource: https://releases.llvm.org/22.1.0/tools/clang/docs/ReleaseNotes.html
    title: "Clang 22.1.0 Release Notes (-fdefer-ts implements the defer TS 25755)"
  - id: linux-c11
    resource: https://www.phoronix.com/news/Linux-5.18-Does-C11
    title: "Phoronix: The switch has been made from C89 to C11/GNU11 with Linux 5.18 (2022)"
  - id: tiobe-sep26
    resource: https://www.techrepublic.com/article/news-tiobe-september-2026-julia-nears-top-20/
    title: "TechRepublic: TIOBE Index September 2026 (C #2, 10.28%)"
  - id: nsa-2022
    resource: https://media.defense.gov/2022/Nov/10/2003112742/-1/-1/0/CSI_SOFTWARE_MEMORY_SAFETY.PDF
    title: "NSA: Software Memory Safety cybersecurity information sheet (2022-11-10)"
  - id: cisa-bad-practices
    resource: https://www.ic3.gov/CSA/2024/241016-2.pdf
    title: "CISA/FBI: Product Security Bad Practices (October 2024)"
  - id: trapc-reg
    resource: https://www.theregister.com/2024/11/12/trapc_memory_safe_fork/
    title: "The Register: To kill memory safety bugs in C code, try the TrapC fork (2024-11-12)"
  - id: trapc-claude
    resource: https://www.theregister.com/software/2026/01/26/dev-used-claude-to-build-trapc-memory-safe-extension-of-c/4132586
    title: "The Register: Dev used Claude to build TrapC, memory-safe extension of C (2026-01-26)"
  - id: filc-lwn
    resource: https://lwn.net/Articles/1042938/
    title: "LWN: Fil-C — a memory-safe C implementation (2025)"
  - id: fbounds
    resource: https://clang.llvm.org/docs/BoundsSafetyImplPlans.html
    title: "Clang docs: Implementation plans for -fbounds-safety"
  - id: apt-rust
    resource: https://lwn.net/Articles/1044496/
    title: "LWN: Debian to require Rust as of May 2026 (APT)"
  - id: darpa-tractor
    resource: https://www.darpa.mil/research/programs/translating-all-c-to-rust
    title: "DARPA: Translating All C to Rust (TRACTOR)"
---

# Summary
C did not decline in usage so much as in *legitimacy*. It remains #2 on TIOBE (10.28% in September 2026)[^tiobe-sep26] and the language of kernels, firmware, libc, interpreters and embedded systems. But from the NSA's November 2022 guidance onward, US and EU policy treated "C/C++" as the canonical memory-unsafe category,[^nsa-2022] and CISA labelled shipping new memory-unsafe products without a memory-safety roadmap a "bad practice".[^cisa-bad-practices] DARPA funded automated C→Rust translation.[^darpa-tractor] The standard itself moved slowly — C23 (published Oct 2024) added `nullptr`, `#embed`, `constexpr` objects, `typeof` and `_BitInt`,[^c23-iso][^cppref-c23] and C2y work added named loops, `_Countof` and a `defer` TS[^c2y-thephd][^named-loops][^clang22-defer] — none of which addresses memory safety directly. The interesting C-safety work happened *around* the standard: `-fbounds-safety` (Apple), Fil-C, TrapC, hardened allocators, MTE and CHERI. Verdict: **stable/entrenched** for existing systems; **lost** the default for new security-critical components.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022-03 | Linux 5.18 moves from gnu89 to gnu11 [^linux-c11] | + |
| E3 | 2022-11-10 | NSA guidance names C/C++ as memory-unsafe [^nsa-2022] | − |
| E3 | 2024-02-26 | White House ONCD report urges memory-safe languages ([event](/events/2024-02-white-house-oncd-memory-safety-report.md)) | − |
| E3 | 2024-07 | DARPA TRACTOR: "Translating All C to Rust" [^darpa-tractor] | − |
| E4 | 2024-10 | CISA/FBI "bad practices": memory-safety roadmap by 2026-01-01 [^cisa-bad-practices] | − |
| E4 | 2024-10-31 | C23 published as ISO/IEC 9899:2024 [^c23-iso] | + |
| E4 | 2024-11 | TrapC announced as a memory-safe C dialect [^trapc-reg] | mixed |
| E4 | 2025 | Fil-C runs OpenSSL, CPython, SQLite memory-safely at a few-x slowdown [^filc-lwn] | mixed |
| E4 | 2025 | Named loops, `_Countof` accepted for C2y; `defer` TS implemented in Clang [^named-loops][^clang22-defer] | + |
| E4 | 2025-11 | Debian APT announces hard Rust dependency from May 2026 [^apt-rust] | − |
| E4 | 2026-01 | TrapC still unreleased; author reports code-complete with AI help [^trapc-claude] | − |

# Ideas it bet on
| Idea | Outcome for C |
|---|---|
| [Bounds safety and hardened C](/ideas/memory-safety/bounds-safety-and-hardened-c.md) | Succeeding piecemeal — vendor extensions, not the standard |
| [CHERI capability hardware](/ideas/memory-safety/cheri-capability-hardware.md) | Unproven at scale — would make C safe with recompilation |
| [C-to-Rust translation](/ideas/memory-safety/c-to-rust-translation.md) | C is the *source* — translation is the exit strategy |
| [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md) | C is the target of the policy |

# What succeeded
- **Ubiquity and ABI.** C remains the lingua franca of FFI; every new language (Rust, Zig, Swift, Odin) interoperates via the C ABI.
- **Modest modernisation.** C23 and C2y finally standardised long-standing extensions (`typeof`, `nullptr`, `#embed`, `defer` as TS).[^cppref-c23][^c2y-thephd]
- **Compiler-level safety retrofits.** Apple's `-fbounds-safety` is deployed on millions of lines of production C (XNU networking) and is being upstreamed to Clang;[^fbounds] Fil-C showed that *complete* memory safety for unmodified C is possible at a performance cost.[^filc-lwn]

# What failed or stalled
- **No standard-level safety story.** WG14 produced no memory-safety profile; safety dialects (TrapC, Checked C, Fil-C) live outside the standard.[^trapc-reg]
- **TrapC overpromised.** Announced in 2024 with a 2025 release, it was still being debugged in early 2026.[^trapc-claude]
- **Policy pressure.** CISA's January 2026 roadmap deadline was non-binding but entered procurement questionnaires.[^cisa-bad-practices] Infrastructure projects began requiring Rust alongside C (Debian APT, Linux drivers).[^apt-rust]

# By era
## E1
Business as usual; Microsoft (2019) and Chromium published the "~70% of security bugs are memory-safety" figures that framed the next six years.
## E2
Linux finally moved to C11.[^linux-c11] Rust-for-Linux patches circulated; C was still the only kernel language.
## E3
NSA and White House reports made "C/C++" a policy term.[^nsa-2022] DARPA TRACTOR proposed translating C away entirely.[^darpa-tractor]
## E4
C23 published;[^c23-iso] safety work moved to compilers and hardware (bounds-safety, Fil-C, MTE/MIE, CHERIoT silicon). C stayed #2 on TIOBE.[^tiobe-sep26]

# Lessons
- A language with a 50-year installed base cannot be "replaced"; it is contained — new code moves elsewhere, old code is hardened in place.
- When a standards body does not address a pressing problem, vendors and researchers will, through non-portable extensions.

# Related
- [C++](/languages/cpp.md), [Rust](/languages/rust.md), [Zig](/languages/zig.md), [Odin](/languages/odin.md), [Hare](/languages/hare.md), [COBOL/Fortran legacy](/languages/cobol-fortran-legacy.md)
- [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md), [Bounds safety and hardened C](/ideas/memory-safety/bounds-safety-and-hardened-c.md), [C-to-Rust translation](/ideas/memory-safety/c-to-rust-translation.md), [CHERI](/ideas/memory-safety/cheri-capability-hardware.md)
- Events: [NSA guidance](/events/2022-11-nsa-memory-safety-guidance.md), [CISA roadmap deadline](/events/2024-10-cisa-memory-safety-roadmap-deadline.md), [DARPA TRACTOR](/events/2024-07-darpa-tractor-announced.md)

[^c23-iso]: ANSI Blog: ISO/IEC 9899:2024 — https://blog.ansi.org/ansi/c-programming-language-standard-iso-iec-9899-2024/
[^cppref-c23]: cppreference: C23 — https://en.cppreference.com/c/23
[^c2y-thephd]: JeanHeyd Meneide: C2y — Hitting the Ground Running — https://thephd.dev/c2y-hitting-the-ground-running
[^named-loops]: WG14 N3474: Named loops — https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3474.htm
[^clang22-defer]: Clang 22.1.0 Release Notes — https://releases.llvm.org/22.1.0/tools/clang/docs/ReleaseNotes.html
[^linux-c11]: Phoronix: Linux 5.18 switches to C11 — https://www.phoronix.com/news/Linux-5.18-Does-C11
[^tiobe-sep26]: TechRepublic: TIOBE Index September 2026 — https://www.techrepublic.com/article/news-tiobe-september-2026-julia-nears-top-20/
[^nsa-2022]: NSA: Software Memory Safety — https://media.defense.gov/2022/Nov/10/2003112742/-1/-1/0/CSI_SOFTWARE_MEMORY_SAFETY.PDF
[^cisa-bad-practices]: CISA/FBI: Product Security Bad Practices — https://www.ic3.gov/CSA/2024/241016-2.pdf
[^trapc-reg]: The Register: TrapC fork — https://www.theregister.com/2024/11/12/trapc_memory_safe_fork/
[^trapc-claude]: The Register: Dev used Claude to build TrapC — https://www.theregister.com/software/2026/01/26/dev-used-claude-to-build-trapc-memory-safe-extension-of-c/4132586
[^filc-lwn]: LWN: Fil-C — https://lwn.net/Articles/1042938/
[^fbounds]: Clang docs: Implementation plans for -fbounds-safety — https://clang.llvm.org/docs/BoundsSafetyImplPlans.html
[^apt-rust]: LWN: Debian to require Rust as of May 2026 — https://lwn.net/Articles/1044496/
[^darpa-tractor]: DARPA: TRACTOR — https://www.darpa.mil/research/programs/translating-all-c-to-rust
