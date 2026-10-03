---
type: Organization
title: Qualcomm
description: "Mobile-chip giant (big tech) that became the most acquisitive buyer of open-source hardware and embedded assets in 2024–26: Foundries.io (2024), Edge Impulse (2025), Arduino (Oct 2025), Ventana RISC-V (Dec 2025), Modular (Jun 2026), PickNik/MoveIt (Sept 2026), plus reported Tenstorrent talks."
resource: https://www.qualcomm.com
tags: [big-tech, semiconductors, acquisitions, risc-v, robotics, edge-ai]
org_kind: big-tech
hq: San Diego, California, USA
funding: { total_usd: "n/a (public: QCOM)", last_round: "n/a", valuation_usd: "n/a" }
business_verdict: growing
projects: [projects/licensing-forks/arduino, projects/hardware-embedded/risc-v, projects/hardware-embedded/ros-2, projects/hardware-embedded/eclipse-s-core]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: edge-impulse
    resource: https://www.edgeimpulse.com/blog/edge-impulse-qualcomm-acquisition/
    title: "Edge Impulse: Our next chapter — joining Qualcomm (2025-03)"
  - id: cnbc-arduino
    resource: https://www.cnbc.com/2025/10/07/qualcomm-acquires-italian-hardware-company-arduino-in-robotics-play-.html
    title: "CNBC: Qualcomm acquires Arduino (2025-10-07)"
  - id: reg-ventana
    resource: https://www.theregister.com/2025/12/10/qualcomm_riscv_arm_ventana/
    title: "The Register: Qualcomm acquires Ventana (2025-12-10)"
  - id: techtimes-modular
    resource: https://www.techtimes.com/articles/319017/20260624/qualcomm-bets-14-billion-cracking-nvidias-ai-monopoly-risc-v-open-compiler.htm
    title: "TechTimes: Qualcomm bets $14B on RISC-V and an open compiler (Modular $3.92B all-stock; Tenstorrent talks) (2026-06-24)"
  - id: robotreport-picknik
    resource: https://www.therobotreport.com/qualcomm-acquires-picknik-robotics-keep-moveit-open-source/
    title: "The Robot Report: Qualcomm to acquire PickNik and keep MoveIt open-source (2026-09)"
  - id: guru-denial
    resource: https://www.gurufocus.com/news/8938157/tenstorrent-ceo-denies-qualcomm-acquisition-talks-amid-focus-on-ai-development
    title: "GuruFocus: Tenstorrent CEO denies Qualcomm talks (2026-06-30)"
  - id: rcr-qcom
    resource: https://www.rcrwireless.com/20251009/chips/bookmarks-qualcomm-edge
    title: "RCR Wireless: Qualcomm on edge AI (Foundries.io 2024, Edge Impulse 2025, Arduino 2025)"
  - id: score-qcom
    resource: https://newsroom.eclipse.org/news/community-news/eclipse-s-core-eclipse-safe-open-vehicle-core-project-unites-qualcomm-advance
    title: "Eclipse newsroom: S-CORE unites with Qualcomm"
---

# Summary
This file exists because Qualcomm's moves are **central** to this domain. It is building a full stack around its silicon by buying open-source communities: Foundries.io (embedded Linux, Mar 2024) and **Edge Impulse** (edge-ML tooling, 170k developers, Mar 2025),[^rcr-qcom][^edge-impulse] **Arduino** (announced Oct 7, 2025),[^cnbc-arduino] **Ventana Micro Systems** (RISC-V server CPUs, Dec 10, 2025),[^reg-ventana] **Modular** (Mojo/MAX, ~$3.92B all-stock, Jun 2026),[^techtimes-modular] and **PickNik** (MoveIt steward, Sept 2026), pledging MoveIt stays open.[^robotreport-picknik] Reported talks to buy Tenstorrent for $8–10B were denied by Tenstorrent's CEO.[^guru-denial] Qualcomm also joined Eclipse S-CORE.[^score-qcom] The pattern is **"buy the open community, keep it nominally open, integrate with Dragonwing/Snapdragon"**, and Arduino's ToS backlash shows the trust risk this carries.

# Business timeline
| Date | Event |
|---|---|
| 2024-03 | Foundries.io acquired[^rcr-qcom] |
| 2025-03 | Edge Impulse acquired[^edge-impulse] |
| 2025-10-07 | Arduino acquisition announced[^cnbc-arduino] |
| 2025-12-10 | Ventana acquired[^reg-ventana] |
| 2026-06 | Modular (~$3.92B) announced; Tenstorrent talks reported, then denied[^techtimes-modular][^guru-denial] |
| 2026-09 | PickNik/MoveIt deal announced[^robotreport-picknik] |

# Monetization model
Chip sales (Snapdragon, Dragonwing IoT/robotics). Open-source assets serve as developer funnels.

# Successes
- Fast assembly of a developer ecosystem for edge AI, robotics and RISC-V.[^robotreport-picknik][^reg-ventana]

# Failures / risks
- Community trust (Arduino ToS episode); integration risk across many acquisitions.

# Related
- [Arduino](/projects/licensing-forks/arduino.md), [RISC-V](/projects/hardware-embedded/risc-v.md), [ROS 2](/projects/hardware-embedded/ros-2.md), [Tenstorrent](/organizations/tenstorrent.md)
- [Event: Qualcomm acquires Arduino](/events/2025-10-qualcomm-acquires-arduino.md), [Event: Qualcomm acquires Modular](/events/2026-06-qualcomm-acquires-modular.md), [Event: Qualcomm acquires Ventana](/events/2025-12-qualcomm-acquires-ventana.md), [Event: Qualcomm to acquire PickNik](/events/2026-09-qualcomm-to-acquire-picknik.md)

[^edge-impulse]: Edge Impulse blog.
[^cnbc-arduino]: CNBC.
[^reg-ventana]: The Register.
[^techtimes-modular]: TechTimes.
[^robotreport-picknik]: The Robot Report.
[^guru-denial]: GuruFocus.
[^rcr-qcom]: RCR Wireless.
[^score-qcom]: Eclipse newsroom.
