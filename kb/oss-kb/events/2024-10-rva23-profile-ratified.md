---
type: Event
title: RISC-V International ratifies the RVA23 profile
description: "On Oct 21, 2024 RISC-V International ratified RVA23, making vector and hypervisor extensions mandatory for 64-bit application processors. It became the baseline Ubuntu requires and the catalyst cited by NVIDIA and server-CPU vendors."
event_kind: release
date: 2024-10-21
window: W24
impact: positive
projects: [projects/hardware-embedded/risc-v]
organizations: [organizations/risc-v-international]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: rvi-rva23
    resource: https://riscv.org/blog/risc-v-announces-ratification-of-the-rva23-profile-standard/
    title: "RISC-V International: RVA23 ratified (2024-10-21)"
  - id: ubuntu-rva23
    resource: https://canonical.com/blog/canonical-and-ubuntu-risc-v-a-2025-retro-and-looking-forward-to-2026
    title: "Canonical: Ubuntu RISC-V 2025 retro"
  - id: rvi-annual-2025
    resource: https://riscv.org/wp-content/uploads/2026/01/RISC-V-Annual-Report-2025.pdf
    title: RISC-V International Annual Report 2025
---

# What happened
RISC-V International ratified the RVA23 profile, which specifies the mandatory ISA features (including vector and hypervisor) for 64-bit application processors running standard binary OS distributions.[^rvi-rva23]

# Why it matters
It ended "pick-your-extensions" fragmentation for rich-OS software. Ubuntu made RVA23 its minimum from 25.10,[^ubuntu-rva23] and RISC-V International's 2025 report quotes NVIDIA calling RVA23 the catalyst for its CUDA-on-RISC-V plans.[^rvi-annual-2025]

# Outcome so far
The first RVA23 SoCs and boards (e.g. SpacemiT K3) arrived in 2026, and the server platform spec is due by end-2026.[^rvi-annual-2025][^ubuntu-rva23]

# Related
- [RISC-V](/projects/hardware-embedded/risc-v.md), [RISC-V International](/organizations/risc-v-international.md)

[^rvi-rva23]: RISC-V International.
[^ubuntu-rva23]: Canonical.
[^rvi-annual-2025]: RISC-V International Annual Report 2025.
