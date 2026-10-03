---
type: Event
title: Apple ships Memory Integrity Enforcement (always-on EMTE) in iPhone 17
description: On 2025-09-09 Apple announced Memory Integrity Enforcement, which combines typed secure allocators with always-on synchronous Enhanced Memory Tagging (EMTE) on A19 chips across the kernel and 70+ userland processes. It was the first mass-market, default-on hardware memory-tagging deployment.
event_kind: release
date: 2025-09-09
era: E4
impact: positive
languages: [languages/c, languages/cpp]
runtimes: []
ideas: [ideas/memory-safety/bounds-safety-and-hardened-c, ideas/memory-safety/cheri-capability-hardware]
tags: [apple, mte, emte, hardware, memory-tagging, ios]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: apple-mie
    resource: https://security.apple.com/blog/memory-integrity-enforcement/
    title: "Apple Security Research: Memory Integrity Enforcement — A complete vision for memory safety in Apple devices (2025-09-09)"
    author: org:apple
  - id: macrumors-mie
    resource: https://www.macrumors.com/2025/09/10/iphone-17-new-memory-security-feature/
    title: "MacRumors: iPhone 17 Introduces 'Groundbreaking' New Memory Security Feature"
  - id: graphene-mte
    resource: https://x.com/GrapheneOS/status/1716945639198880037
    title: "GrapheneOS on X: Pixel 8 supports hardware memory tagging (Oct 2023)"
---

# What happened
On 2025-09-09, alongside the iPhone 17 and iPhone Air, Apple Security Research described **Memory Integrity Enforcement (MIE)**. It is "the culmination of … half a decade" of work combining Apple's typed secure allocators (kalloc_type, xzone malloc) with **Enhanced MTE (EMTE)** in *synchronous* mode plus "Tag Confidentiality Enforcement".[^apple-mie] Arm released EMTE in 2022 after collaborating with Apple. MIE is always on for the kernel and over 70 userland processes on A19/A19 Pro, and Apple calls it "the most significant upgrade to memory safety in the history of consumer operating systems". EMTE is also offered to third-party developers through Xcode's Enhanced Security option.[^apple-mie][^macrumors-mie]

# Why it matters
Hardware memory tagging (Arm MTE, specified 2019) had been stuck as an opt-in or debug feature. Pixel 8 (2023) exposed it only as a developer option, and GrapheneOS was the main production user.[^graphene-mte] Apple's move showed that tagging can run default-on at consumer scale if hardware is designed for it and paired with allocator isolation. It is a probabilistic, retrofit defence for existing C/C++/Objective-C code, complementing [bounds hardening](/ideas/memory-safety/bounds-safety-and-hardened-c.md) and Apple's -fbounds-safety. It is the commercial counterpoint to deterministic [CHERI capabilities](/ideas/memory-safety/cheri-capability-hardware.md). The main target is mercenary spyware exploit chains, not ordinary bugs.

# Related
- [Bounds safety and hardened C](/ideas/memory-safety/bounds-safety-and-hardened-c.md)
- [CHERI capability hardware](/ideas/memory-safety/cheri-capability-hardware.md)
- [C](/languages/c.md), [C++](/languages/cpp.md)

[^apple-mie]: Apple Security Research: Memory Integrity Enforcement — https://security.apple.com/blog/memory-integrity-enforcement/
[^macrumors-mie]: MacRumors: iPhone 17 Introduces 'Groundbreaking' New Memory Security Feature — https://www.macrumors.com/2025/09/10/iphone-17-new-memory-security-feature/
[^graphene-mte]: GrapheneOS on X: Pixel 8 hardware memory tagging — https://x.com/GrapheneOS/status/1716945639198880037
