---
type: OSS Project
title: RISC-V ISA
description: "The open, royalty-free instruction set architecture stewarded by RISC-V International. Between 2024 and 2026 it moved from embedded niche to an application/datacenter contender: RVA23 was ratified, SiFive raised at a $3.65B valuation, Qualcomm bought Ventana, and China adopted it as a strategic hedge."
resource: https://riscv.org
tags: [open-hardware, isa, risc-v, semiconductors, geopolitics, foundation-hosted]
domain: hardware-embedded
license: "Open specification (ratified specs CC-BY-4.0); implementations vary (Apache-2.0, Solderpad, proprietary)"
license_history: ["Open ISA since 2010 (UC Berkeley); RISC-V International (Swiss association) since 2020"]
governance: foundation
steward: RISC-V International
backing_orgs: [organizations/risc-v-international, organizations/sifive, organizations/tenstorrent, organizations/qualcomm]
metrics:
  github_stars_isa_manual: { value: 4841, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: rvi-rva23
    resource: https://riscv.org/blog/risc-v-announces-ratification-of-the-rva23-profile-standard/
    title: "RISC-V International: RISC-V Announces Ratification of the RVA23 Profile Standard (2024-10-21)"
    author: org:risc-v-international
  - id: rvi-annual-2025
    resource: https://riscv.org/wp-content/uploads/2026/01/RISC-V-Annual-Report-2025.pdf
    title: "RISC-V International Annual Report 2025 (Jan 2026)"
    author: org:risc-v-international
  - id: rvi-gallo
    resource: https://riscv.org/blog/andrea-gallo-takes-over-as-risc-v-internationals-new-ceo/
    title: "RISC-V International: Andrea Gallo takes over as new CEO"
  - id: rvi-redmond
    resource: https://riscv.org/blog/risc-v-ceo-calista-redmond-resigns-after-5-years-of-progress/
    title: "RISC-V International: CEO Calista Redmond resigns after 5+ years"
  - id: sifive-g
    resource: https://www.sifive.com/press/sifive-raises-400-million-to-accelerate-high-performance-risc-v-data-center-solutions
    title: "SiFive: raises $400M; valuation $3.65B (2026-04-09)"
  - id: reg-ventana
    resource: https://www.theregister.com/2025/12/10/qualcomm_riscv_arm_ventana/
    title: "The Register: Qualcomm takes RISC on Arm alternative with Ventana acquisition (2025-12-10)"
  - id: reg-c930
    resource: https://www.theregister.com/2025/03/05/china_alibaba_risc_v_c930/
    title: "The Register: Alibaba launches server-grade RISC-V CPU design (2025-03-05)"
  - id: csis-riscv
    resource: https://www.csis.org/analysis/sustaining-standards-leadership-united-states-cannot-disengage-risc-v
    title: "CSIS: The United States Cannot Disengage from RISC-V (2025-04-28)"
  - id: toms-2023-lawmakers
    resource: https://www.tomshardware.com/news/us-lawmakers-want-to-block-china-from-american-risc-v
    title: "Tom's Hardware: U.S. lawmakers want to block China from 'American' RISC-V (2023)"
  - id: reg-cuda-riscv
    resource: https://www.theregister.com/on-prem/2025/07/21/nvidia-cuda-gets-risc-v-support/802029
    title: "The Register: Nvidia CUDA gets RISC-V support (2025-07-21)"
  - id: ubuntu-rva23
    resource: https://canonical.com/blog/canonical-and-ubuntu-risc-v-a-2025-retro-and-looking-forward-to-2026
    title: "Canonical: Ubuntu RISC-V — a 2025 retro and looking forward to 2026"
  - id: phoronix-k3
    resource: https://www.phoronix.com/news/Ubuntu-SpacemiT-K3
    title: "Phoronix: Ubuntu to support the SpacemiT K3 as one of the first RVA23 SoCs"
  - id: digitimes-gallo
    resource: https://www.digitimes.com/news/a20260603VL217/risc-v-ceo-software-mips-computex-2026.html
    title: "DigiTimes: RISC-V will be 'default ISA of choice' for new chip designs, CEO predicts (2026-06-03)"
  - id: reuters-qcom-tt
    resource: https://www.tradingview.com/news/reuters.com,2026:newsml_L4N42N1X5:0-qualcomm-in-talks-to-buy-tenstorrent-the-information-reports/
    title: "Reuters (via TradingView): Qualcomm in talks to buy Tenstorrent, The Information reports (2026-06)"
---

# Summary
RISC-V is the clearest **OSS success** in hardware over the past two years, though its business payoff is still concentrated in a handful of IP vendors and in China. RVA23, ratified in Oct 2024, gave application processors a common baseline with mandatory vector and hypervisor extensions.[^rvi-rva23] By 2025–26 distributions had started to require it: Ubuntu 25.10 and later support only RVA23 hardware.[^ubuntu-rva23][^phoronix-k3] Money and M&A followed. SiFive raised $400M at a $3.65B valuation in Apr 2026,[^sifive-g] Qualcomm bought Ventana (Dec 2025),[^reg-ventana] Qualcomm's reported $8–10B approach to Tenstorrent was publicly denied,[^reuters-qcom-tt] and NVIDIA announced CUDA support for RISC-V hosts.[^reg-cuda-riscv] Geopolitics is the main risk. China is the largest single bloc (12 of 24 premier members per CSIS), and US lawmakers have periodically proposed restricting US participation.[^csis-riscv][^toms-2023-lawmakers] Verdict: **thriving** (OSS), **growing** (business).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-21 | RVA23 profile ratified[^rvi-rva23] | OSS | + |
| W24 | 2024-12 | CEO Calista Redmond resigns (later joins NVIDIA); Andrea Gallo named CEO (in role from May 2025 per annual report)[^rvi-redmond][^rvi-gallo][^rvi-annual-2025] | OSS | ± |
| W24 | 2025-02/03 | Alibaba XuanTie C930 server-class RVA23 core; Reuters reports 8 Chinese agencies drafting pro-RISC-V guidance[^reg-c930] | Business | + |
| W24 | 2025-04-28 | CSIS argues US must not disengage from RISC-V[^csis-riscv] | OSS | ± |
| W24 | 2025-07 | NVIDIA announces CUDA support for RISC-V host CPUs[^reg-cuda-riscv] | Business | + |
| W12 | 2025-12-10 | Qualcomm acquires Ventana Micro Systems[^reg-ventana] | Business | + |
| W9 | 2026-01 | Annual report: RISC-V International becomes ISO/IEC JTC 1 PAS submitter; server platform spec targeted for end-2026[^rvi-annual-2025] | OSS | + |
| W6 | 2026-04-09 | SiFive $400M Series G at $3.65B, billed as its last private round before an IPO[^sifive-g] | Business | + |
| W6 | 2026-06 | Qualcomm–Tenstorrent talks reported ($8–10B); Keller denies on 2026-06-30[^reuters-qcom-tt] | Business | ± |
| W6 | 2026-06-03 | Gallo at Computex: RISC-V to be the "default ISA" for new designs[^digitimes-gallo] | OSS | + |

# OSS successes
- RVA23 fixes the fragmentation problem for rich-OS software. Canonical made it the Ubuntu baseline, and first RVA23 SoCs (SpacemiT K3) arrived in 2026.[^ubuntu-rva23][^phoronix-k3]
- Steady specification output: 2025 brought progress on server platform, supervisor domains/confidential computing and debug specs, and RISC-V International became an ISO PAS submitter.[^rvi-annual-2025]
- Embedded volume: NVIDIA alone shipped roughly 1 billion RISC-V cores inside its GPUs in 2024.[^rvi-annual-2025]

# OSS failures / risks
- Geopolitical capture risk. Chinese firms make up half of premier members, and US restriction proposals (2023) have not gone away.[^csis-riscv][^toms-2023-lawmakers]
- Application-class silicon still lags Arm and x86. High-performance RVA23 boards only appeared in 2026.[^phoronix-k3]

# Business successes
- SiFive's $3.65B valuation and IPO plans,[^sifive-g] Qualcomm's Ventana purchase,[^reg-ventana] and big Tenstorrent rounds (see [Tenstorrent](/organizations/tenstorrent.md)).
- SHD Group, cited by RVI, projects market penetration rising from 2.5% (2021) to 33.7% (2031).[^rvi-annual-2025]

# Business failures / risks
- Consolidation into big incumbents (Qualcomm) could reduce the number of independent RISC-V CPU vendors.[^reg-ventana]
- Revenue for pure-play IP vendors is still small next to Arm's.

# By window
## W3
- No ISA-level milestone found. Ecosystem news was dominated by Tenstorrent financing (see org) and the run-up to server-platform ratification.[^rvi-annual-2025]
## W6
- SiFive $400M Series G (Apr 9);[^sifive-g] Qualcomm–Tenstorrent rumour and denial (June);[^reuters-qcom-tt] CEO's "default ISA" claim at Computex.[^digitimes-gallo]
## W9
- 2025 annual report published: ISO PAS submitter status and server spec timeline.[^rvi-annual-2025]
## W12
- Qualcomm acquires Ventana (Dec 10).[^reg-ventana] Ubuntu 25.10 makes RVA23 the required baseline.[^ubuntu-rva23]
## W24
- RVA23 ratified;[^rvi-rva23] leadership change;[^rvi-redmond] China's policy push and C930;[^reg-c930] NVIDIA CUDA-on-RISC-V.[^reg-cuda-riscv]

# Lessons
- An open standard only becomes commercially credible once a **profile** pins down a common baseline. RVA23 did more for adoption than any single core.
- Open standards are geopolitically neutral by design, so they attract both sovereignty-seeking states and export-control hawks.
- The money is in proprietary implementations (IP cores, chiplets) built on the open ISA. This is the "open core" model applied to silicon.

# Related
- [RISC-V International](/organizations/risc-v-international.md), [SiFive](/organizations/sifive.md), [Tenstorrent](/organizations/tenstorrent.md), [Qualcomm](/organizations/qualcomm.md)
- [Event: RVA23 ratified](/events/2024-10-rva23-profile-ratified.md), [Event: Qualcomm acquires Ventana](/events/2025-12-qualcomm-acquires-ventana.md), [Event: SiFive Series G](/events/2026-04-sifive-400m-series-g.md)
- [OpenTitan](/projects/hardware-embedded/opentitan.md), [Caliptra](/projects/hardware-embedded/caliptra.md)
- [Domain review](/domains/hardware-embedded.md)

[^rvi-rva23]: RISC-V International, 2024-10-21.
[^rvi-annual-2025]: RISC-V International Annual Report 2025.
[^rvi-gallo]: RISC-V International blog.
[^rvi-redmond]: RISC-V International blog.
[^sifive-g]: SiFive press release, 2026-04-09.
[^reg-ventana]: The Register, 2025-12-10.
[^reg-c930]: The Register, 2025-03-05.
[^csis-riscv]: CSIS, 2025-04-28.
[^toms-2023-lawmakers]: Tom's Hardware, 2023.
[^reg-cuda-riscv]: The Register, 2025-07-21.
[^ubuntu-rva23]: Canonical blog.
[^phoronix-k3]: Phoronix.
[^digitimes-gallo]: DigiTimes, 2026-06-03.
[^reuters-qcom-tt]: Reuters via TradingView, June 2026; Keller denial reported 2026-06-30.
