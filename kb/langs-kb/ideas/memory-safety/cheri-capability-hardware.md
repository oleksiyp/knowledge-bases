---
type: Idea
title: CHERI capability hardware (memory safety in the ISA)
description: "Replace raw pointers with hardware-checked capabilities (bounds + permissions + validity tag) so recompiled C/C++ becomes spatially memory-safe and finely compartmentalised. 2018–2026 verdict: unproven — strong research results and generous UK funding (Morello boards, DSbD), a CHERI Alliance (2024) and first CHERIoT microcontroller silicon (2026), but no mainstream application-class CPU has shipped CHERI, and Arm's Morello remained a prototype."
area: memory-safety
tags: [cheri, capabilities, hardware, morello, cheriot, risc-v, dsbd, compartmentalisation]
outcome: unproven
maturity_2026: experimental
origin_year: 2010
mainstream_year: null
languages: [languages/c, languages/cpp, languages/rust]
runtimes: [runtimes/llvm]
related_ideas:
  - ideas/memory-safety/bounds-safety-and-hardened-c
  - ideas/memory-safety/memory-safety-policy-push
  - ideas/memory-safety/ownership-and-borrowing
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: cam-cheri
    resource: https://www.cl.cam.ac.uk/research/security/ctsrd/pdfs/20240419-ieeesp-cheri-memory-safety.pdf
    title: "Cambridge/SRI (IEEE S&P magazine, 2024): CHERI — Hardware-Enabled C/C++ Memory Protection at Scale"
  - id: arm-morello
    resource: https://www.arm.com/architecture/cpu/morello
    title: "Arm: Morello Program (research prototype SoC and boards, 2022)"
  - id: dsbd-eval
    resource: https://www.ukri.org/wp-content/uploads/2025/10/IUK-131025-2025-07-04_DSbD-Final-Impact-Evaluation-Report.pdf
    title: "UKRI: Digital Security by Design — Final Impact Evaluation Report (2025)"
    author: org:ukri
  - id: morello-perf
    resource: https://zenodo.org/records/16923143
    title: "IISWC 2025 artifact: 'Sweet or Sour CHERI: Performance Characterization of the Arm Morello Platform'"
  - id: cheri-alliance
    resource: https://www.eenewseurope.com/en/cheri-builds-global-chip-security-alliance/
    title: "eeNews Europe: CHERI builds global chip security alliance (2024)"
  - id: sci-iceni
    resource: https://www.scisemi.com/company/press-release-iceni-family/
    title: "SCI Semiconductor: ICENI family — first CHERIoT-based devices (press release, 2024-10)"
  - id: cheriot-silicon
    resource: https://cheriot.org/silicon/2026/03/04/cheriot-first-silicon.html
    title: "CHERIoT blog: First CHERIoT silicon! (2026-03-04)"
  - id: sci-funding
    resource: https://tech.eu/2026/09/09/sci-semiconductor-raises-ps5m-to-ramp-up-production-of-memory-safe-chips
    title: "Tech.eu: SCI Semiconductor raises £5M to ramp up production of memory-safe chips (2026-09-09)"
  - id: usability-study
    resource: https://arxiv.org/pdf/2506.23682
    title: "arXiv 2506.23682: Not quite a piece of CHERI-cake — Are new digital security by design architectures usable? (2025)"
  - id: nutting-cheri-oma
    resource: https://ednutting.com/2025/10/05/cheri-vs-oma.html
    title: "Ed Nutting: Two paths to memory safety — CHERI and OMA (2025-10-05)"
  - id: oncd-2024
    resource: https://bidenwhitehouse.archives.gov/wp-content/uploads/2024/02/Final-ONCD-Technical-Report.pdf
    title: "White House ONCD: Back to the Building Blocks (2024-02-26; cites CHERI as hardware path)"
---

# Summary
**Unproven.** CHERI (Capability Hardware Enhanced RISC Instructions, Cambridge/SRI since ~2010) is the most rigorous answer to "how do we make *existing* C/C++ memory-safe?": pointers become unforgeable, bounded capabilities checked by hardware, so recompiled code gets deterministic spatial safety and cheap compartmentalisation.[^cam-cheri] 2018–2026 brought real progress: the UK's Digital Security by Design programme (£70M government, >£238M private co-investment reported) funded Arm's Morello prototype SoC and boards (2022);[^dsbd-eval][^arm-morello] the White House's 2024 report cited memory-safe hardware as a complementary path;[^oncd-2024] a CHERI Alliance formed in 2024;[^cheri-alliance] and the first commercial CHERIoT microcontroller silicon (SCI Semiconductor's ICENI) appeared in March 2026, with >£2M in orders and a £5M raise in September 2026.[^cheriot-silicon][^sci-funding] But the UK's own evaluation found "no fully commercialised product incorporating DSbD technology", that tool commercialisation was blocked by the lack of a chip, and the first commercial CHERI products came on RISC-V rather than Morello.[^dsbd-eval] No phone, PC or server CPU ships CHERI in 2026.

# The idea
Every pointer carries a hidden 1-bit validity tag plus bounds and permissions in a 128-bit capability; the CPU refuses out-of-bounds or forged accesses. A CHERI-aware compiler (Clang/LLVM-based CHERI toolchains) and libc recompile C/C++ with mostly modest source changes. Temporal safety needs additional revocation support. Compared with [MTE](/ideas/memory-safety/bounds-safety-and-hardened-c.md) (probabilistic tags), CHERI is deterministic; compared with [Rust](/languages/rust.md), it protects legacy code without rewriting.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019 | UK DSbD launched (£70M govt + matched industry) with Arm Morello [^dsbd-eval] | + |
| E2 | 2022-01 | Arm ships Morello prototype boards to researchers and companies [^arm-morello] | + |
| E3 | 2023 | Microsoft open-sources CHERIoT (RISC-V microcontroller ISA + RTOS); Codasip demonstrates a commercial CHERI core [^dsbd-eval] | + |
| E3 | 2024-02 | ONCD report points to memory-safe hardware such as CHERI [^oncd-2024] | + |
| E3 | 2024-06 | CHERI Alliance announced (Google among founding supporters) [^cheri-alliance] | + |
| E4 | 2024-10 | SCI Semiconductor announces ICENI CHERIoT devices [^sci-iceni] | + |
| E4 | 2025 | Morello study: overhead from negligible to 1.65x on pointer-heavy code [^morello-perf] | mixed |
| E4 | 2025 | DSbD evaluation: no fully commercialised product yet [^dsbd-eval] | − |
| E4 | 2026-03-04 | First CHERIoT silicon [^cheriot-silicon] | + |
| E4 | 2026-09-09 | SCI raises £5M; >£2M orders [^sci-funding] | + |

# Where it succeeded
- **Research rigour**: millions of lines of C/C++ (FreeBSD, KDE components, browsers) ported to CheriBSD with modest changes; formal ISA models.[^cam-cheri]
- **Embedded wedge**: CHERIoT targets microcontrollers where compartmentalisation and safety matter and legacy ISA compatibility matters less — the first real silicon came here.[^cheriot-silicon]
- **Funding leverage**: DSbD exceeded its private co-investment target (>£238M vs £117M).[^dsbd-eval]

# Where it failed or stalled
- **No application-class product.** Morello was explicitly a prototype; Arm has not announced a CHERI product line.[^arm-morello][^dsbd-eval]
- **Performance and usability**: Morello results range from negligible to 1.65x overhead (partly prototype artefacts); a 2025 usability study found developers struggled with the new architectures.[^morello-perf][^usability-study]
- **Chicken-and-egg**: tool vendors could not commercialise without chips; chip vendors waited for software.[^dsbd-eval]
- **Competition from cheaper mitigations**: MTE/EMTE shipped first in consumer devices (Apple iPhone 17), and alternatives like OMA are being proposed.[^nutting-cheri-oma]

# Why
1. **ISA changes are the slowest change in computing.** A new pointer format touches compilers, OSes, allocators, debuggers and ABIs; commercial CPU roadmaps run 5+ years.
2. **Funding was research-shaped.** Government money produced prototypes and papers, not a productised core from a major vendor.[^dsbd-eval]
3. **The market chose cheaper partial answers first** — MTE needed fewer changes and delivered probabilistic protection that vendors judged "good enough" for now.[^nutting-cheri-oma]
4. **Rust reduced the urgency** for new code, narrowing CHERI's value proposition to legacy and embedded code.

# Lessons
- Hardware memory safety for legacy code is technically solved but commercially stuck until a major CPU vendor commits.
- Start where incumbency is weakest (microcontrollers) — CHERIoT's route to silicon was faster than Morello's.
- Public R&D programmes need a productisation partner with market incentives, or they end at the prototype.

# Related
- Languages: [C](/languages/c.md), [C++](/languages/cpp.md), [Rust](/languages/rust.md)
- Ideas: [Bounds safety and hardened C](/ideas/memory-safety/bounds-safety-and-hardened-c.md), [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md), [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md)
- Events: [Apple Memory Integrity Enforcement](/events/2025-09-apple-memory-integrity-enforcement.md), [ONCD report](/events/2024-02-white-house-oncd-memory-safety-report.md)

[^cam-cheri]: Cambridge/SRI: CHERI — Hardware-Enabled C/C++ Memory Protection at Scale — https://www.cl.cam.ac.uk/research/security/ctsrd/pdfs/20240419-ieeesp-cheri-memory-safety.pdf
[^arm-morello]: Arm: Morello Program — https://www.arm.com/architecture/cpu/morello
[^dsbd-eval]: UKRI: DSbD Final Impact Evaluation Report — https://www.ukri.org/wp-content/uploads/2025/10/IUK-131025-2025-07-04_DSbD-Final-Impact-Evaluation-Report.pdf
[^morello-perf]: Sweet or Sour CHERI (IISWC 2025) — https://zenodo.org/records/16923143
[^cheri-alliance]: eeNews Europe: CHERI builds global chip security alliance — https://www.eenewseurope.com/en/cheri-builds-global-chip-security-alliance/
[^sci-iceni]: SCI Semiconductor: ICENI family press release — https://www.scisemi.com/company/press-release-iceni-family/
[^cheriot-silicon]: CHERIoT blog: First CHERIoT silicon — https://cheriot.org/silicon/2026/03/04/cheriot-first-silicon.html
[^sci-funding]: Tech.eu: SCI Semiconductor raises £5M — https://tech.eu/2026/09/09/sci-semiconductor-raises-ps5m-to-ramp-up-production-of-memory-safe-chips
[^usability-study]: arXiv: Not quite a piece of CHERI-cake — https://arxiv.org/pdf/2506.23682
[^nutting-cheri-oma]: Ed Nutting: CHERI vs OMA — https://ednutting.com/2025/10/05/cheri-vs-oma.html
[^oncd-2024]: White House ONCD: Back to the Building Blocks — https://bidenwhitehouse.archives.gov/wp-content/uploads/2024/02/Final-ONCD-Technical-Report.pdf
