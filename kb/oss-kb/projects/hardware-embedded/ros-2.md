---
type: OSS Project
title: ROS 2 (Robot Operating System)
description: "The de facto open-source robotics middleware, stewarded by Open Robotics/OSRF through the Open Source Robotics Alliance. ROS 1 reached end of life (May 2025), ROS 2 Lyrical Luth LTS shipped (May 2026), and 2026 brought big-company commitments: Google's Intrinsic open-sourced Intrinsic Core and Qualcomm bought MoveIt steward PickNik, both pledging openness."
resource: https://www.ros.org
tags: [robotics, middleware, foundation-hosted, apache-2.0, physical-ai]
domain: hardware-embedded
license: Apache-2.0
license_history: ["BSD-3-Clause (ROS 1)", "Apache-2.0 (ROS 2 core)"]
governance: foundation
steward: Open Source Robotics Foundation (Open Robotics) / OSRA
backing_orgs: [organizations/open-robotics, organizations/qualcomm]
metrics:
  github_stars_ros2_repo: { value: 6113, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: or-kilted
    resource: https://www.openrobotics.org/blog/2025/5/23/ros-2-kilted-kaiju-released
    title: "Open Robotics: ROS 2 Kilted Kaiju released (2025-05-23)"
  - id: noetic-eol
    resource: https://discourse.openrobotics.org/t/ros-noetic-end-of-life-may-31-2025/43160
    title: "ROS Discourse: ROS Noetic end-of-life May 31, 2025"
  - id: lyrical
    resource: https://discourse.openrobotics.org/t/ros-2-lyrical-luth-and-11-years-of-fast-dds-as-ros-2-default-middleware/55062
    title: "ROS Discourse: ROS 2 Lyrical Luth and Fast DDS as default middleware (2026-05)"
  - id: osra
    resource: https://www.openrobotics.org/blog/2024/3/18/announcing-the-open-source-robotics-alliance-osra
    title: "Open Robotics: Announcing the Open Source Robotics Alliance (2024-03-18)"
  - id: intrinsic-core
    resource: https://roboticsandautomationnews.com/2026/09/23/intrinsic-open-sources-core-industrial-robotics-technology/105036/
    title: "Robotics & Automation News: Intrinsic open-sources core industrial robotics technology (2026-09-23)"
  - id: cnbc-intrinsic
    resource: https://www.cnbc.com/2026/02/25/alphabet-robotics-software-intrinsic-google-ai.html
    title: "CNBC: Former Alphabet 'moonshot' robotics company Intrinsic is folding into Google (2026-02-25)"
  - id: robotreport-picknik
    resource: https://www.therobotreport.com/qualcomm-acquires-picknik-robotics-keep-moveit-open-source/
    title: "The Robot Report: Qualcomm to acquire PickNik and keep MoveIt open-source (2026-09)"
  - id: forbes-intrinsic
    resource: https://www.forbes.com/sites/johnkoetsier/2026/09/22/google-is-giving-away-the-android-of-robotics/
    title: "Forbes: Google is giving away 'the Android of robotics' (2026-09-22)"
---

# Summary
ROS 2 is **thriving** as the shared substrate of the "physical AI" boom. ROS 1 Noetic reached **end of life on May 31, 2025**, with the community said to be ~80% migrated.[^noetic-eol] ROS 2 **Kilted Kaiju** (May 23, 2025; 178 contributors, 53 testers) was followed by **Lyrical Luth** (May 22, 2026), a 5-year LTS with zero-copy buffers and a new events executor.[^or-kilted][^lyrical] Governance is the OSRA membership model, whose platinum members are Intrinsic, NVIDIA and Qualcomm.[^osra] In 2026 the big platforms moved in. Alphabet folded **Intrinsic** into Google (Feb 25),[^cnbc-intrinsic] and at **ROSCon 2026 in Toronto** (Sept 23) Intrinsic open-sourced **Intrinsic Core** under Apache-2.0, the stack behind its production deployments.[^intrinsic-core][^forbes-intrinsic] Days later, **Qualcomm agreed to acquire PickNik**, MoveIt's steward, pledging MoveIt 1/2 stay open.[^robotreport-picknik] Verdict: **thriving**, with growing big-vendor influence.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-23 | ROS 2 Kilted Kaiju released[^or-kilted] | OSS | + |
| W24 | 2025-05-31 | ROS 1 Noetic end of life[^noetic-eol] | OSS | ± |
| W9 | 2026-02-25 | Intrinsic folded into Google[^cnbc-intrinsic] | Business | ± |
| W6 | 2026-05-22 | ROS 2 Lyrical Luth (LTS to 2031)[^lyrical] | OSS | + |
| W3 | 2026-09-23 | Intrinsic open-sources Intrinsic Core (Apache-2.0) at ROSCon[^intrinsic-core] | OSS | + |
| W3 | 2026-09 | Qualcomm to acquire PickNik; MoveIt to stay open[^robotreport-picknik] | Business | ± |

# OSS successes
- A clean ROS 1 to ROS 2 transition plus a new LTS.[^noetic-eol][^lyrical]
- Hyperscaler-grade code donated into the ecosystem (Intrinsic Core).[^intrinsic-core]

# OSS failures / risks
- Key libraries are owned by chip vendors: MoveIt goes to Qualcomm, and OSRA platinum seats are held by NVIDIA, Qualcomm and Intrinsic.[^osra][^robotreport-picknik]

# Business successes
- n/a for ROS itself; ecosystem companies (PickNik) achieved exits.[^robotreport-picknik]

# Business failures / risks
- OSRF funding depends on a few large members.[^osra]

# By window
## W3
- Intrinsic Core open-sourced; Qualcomm–PickNik.[^intrinsic-core][^robotreport-picknik]
## W6
- Lyrical Luth LTS.[^lyrical]
## W9
- Intrinsic folds into Google.[^cnbc-intrinsic]
## W12
- No notable events found.
## W24
- Kilted Kaiju; ROS 1 end of life.[^or-kilted][^noetic-eol]

# Lessons
- Physical-AI platforms court developers by open-sourcing the middle layer, as Android did, while differentiating on models and silicon.

# Related
- [Open Robotics](/organizations/open-robotics.md), [Qualcomm](/organizations/qualcomm.md), [LeRobot](/projects/hardware-embedded/lerobot.md), [Autoware](/projects/hardware-embedded/autoware.md)
- [Event: Intrinsic open-sources Intrinsic Core](/events/2026-09-intrinsic-open-sources-intrinsic-core.md), [Event: Qualcomm to acquire PickNik](/events/2026-09-qualcomm-to-acquire-picknik.md)

[^or-kilted]: Open Robotics, 2025-05-23.
[^noetic-eol]: ROS Discourse.
[^lyrical]: ROS Discourse, May 2026.
[^osra]: Open Robotics, 2024-03-18.
[^intrinsic-core]: Robotics & Automation News, 2026-09-23.
[^cnbc-intrinsic]: CNBC, 2026-02-25.
[^robotreport-picknik]: The Robot Report, Sept 2026.
[^forbes-intrinsic]: Forbes, 2026-09-22.
