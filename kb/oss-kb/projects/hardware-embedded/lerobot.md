---
type: OSS Project
title: LeRobot (Hugging Face) and open humanoids
description: "Hugging Face's Apache-2.0 robot-learning library plus open hardware (SO-101 arm, Reachy Mini, HopeJR). The breakout open-robotics project of 2025–26: ~28k stars, the SmolVLA model, Pollen Robotics acquisition and ~10k Reachy Minis. It contrasts with K-Scale Labs' Nov 2025 shutdown. Its future is tied to NVIDIA's pending acquisition of Hugging Face."
resource: https://github.com/huggingface/lerobot
tags: [robotics, ai, imitation-learning, open-hardware, humanoids, hugging-face]
domain: hardware-embedded
license: Apache-2.0
license_history: ["Apache-2.0 (2024-)"]
governance: single-vendor
steward: Hugging Face
backing_orgs: [organizations/hugging-face, organizations/k-scale-labs]
metrics:
  github_stars: { value: 27916, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lerobot-gh
    resource: https://github.com/huggingface/lerobot
    title: "LeRobot GitHub (v0.5.0 2026-03-09; v0.6.0 2026-07-06; v0.6.1 2026-08-03)"
  - id: tc-pollen
    resource: https://techcrunch.com/2025/04/14/hugging-face-buys-a-humanoid-robotics-startup
    title: "TechCrunch: Hugging Face buys a humanoid robotics startup (2025-04-14)"
  - id: tc-hopejr
    resource: https://techcrunch.com/2025/05/29/hugging-face-unveils-two-new-humanoid-robots/
    title: "TechCrunch: Hugging Face unveils two new humanoid robots (2025-05-29)"
  - id: hf-smolvla
    resource: https://huggingface.co/blog/smolvla
    title: "HF blog: SmolVLA — efficient VLA trained on LeRobot community data (2025-06)"
  - id: seeed-reachy
    resource: https://www.seeedstudio.com/blog/2026/01/06/reachy-mini-an-open-journey-built-together-with-hugging-face-pollen-robotics-seeed-studio/
    title: "Seeed Studio: Reachy Mini — an open journey (2026-01-06)"
  - id: axios-appstore
    resource: https://www.axios.com/2026/05/06/hugging-face-consumer-robot-app-store
    title: "Axios: Hugging Face launches consumer robot app store (2026-05-06)"
  - id: kalil-kscale
    resource: https://mikekalil.com/blog/k-scale-labs-shuts-down/
    title: "Mike Kalil: Palo Alto humanoid startup K-Scale Labs shuts down (2025-11)"
  - id: nv-hf-blog
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA blog: NVIDIA to acquire Hugging Face (2026-09-03)"
---

# Summary
LeRobot is the **breakout** open-robotics project. Hugging Face combined an Apache-2.0 learning library (~28k stars; v0.6 in Jul 2026)[^lerobot-gh] with cheap open hardware and community datasets. It bought **Pollen Robotics** (Apr 2025),[^tc-pollen] unveiled the **HopeJR** humanoid (~$3k) and the **Reachy Mini** desktop robot ($250–300 target) in May 2025,[^tc-hopejr] and released the 450M-parameter **SmolVLA** trained only on community LeRobot data (Jun 2025).[^hf-smolvla] With Seeed it shipped 3,000 Reachy Minis before the 2025 holidays.[^seeed-reachy] In May 2026 Axios reported ~10,000 units delivered or in transit, alongside a consumer robot app store (reported; primary source not fetched).[^axios-appstore] The counter-example is **K-Scale Labs**, "America's first open-source humanoid" maker. It shut down in Nov 2025, unable to find a lead investor against heavily funded Chinese rivals, and released its IP under open licenses.[^kalil-kscale] The big uncertainty is **NVIDIA's $12.93B agreement to acquire Hugging Face** (Sept 3, 2026; closing expected H1 2027).[^nv-hf-blog] Verdict: OSS **thriving**, business **growing**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-14 | HF acquires Pollen Robotics[^tc-pollen] | Business | + |
| W24 | 2025-05-29 | HopeJR and Reachy Mini announced[^tc-hopejr] | OSS | + |
| W24 | 2025-06 | SmolVLA released[^hf-smolvla] | OSS | + |
| W12 | 2025-11 | K-Scale Labs shuts down; open-sources IP[^kalil-kscale] | Business | − |
| W12 | 2025-12 | 3,000 Reachy Minis shipped with Seeed[^seeed-reachy] | Business | + |
| W6 | 2026-05-06 | ~10k Reachy Minis; robot app store (Axios)[^axios-appstore] | Business | + |
| W3 | 2026-07-06 | LeRobot v0.6.0[^lerobot-gh] | OSS | + |
| W3 | 2026-09-03 | NVIDIA agrees to acquire Hugging Face[^nv-hf-blog] | Business | ± |

# OSS successes
- Community-data flywheel: open datasets on the Hub train open models (SmolVLA) that run on cheap open arms.[^hf-smolvla]

# OSS failures / risks
- Single-vendor steward now heading into NVIDIA, with possible re-prioritisation toward NVIDIA silicon and Isaac.[^nv-hf-blog]

# Business successes
- Hardware sales at consumer scale for open robots (Reachy Mini).[^seeed-reachy][^axios-appstore]

# Business failures / risks
- Western open-humanoid startups struggle to fund manufacturing (K-Scale).[^kalil-kscale]

# By window
## W3
- LeRobot 0.6.x; NVIDIA–HF deal.[^lerobot-gh][^nv-hf-blog]
## W6
- Reachy Mini at ~10k units; app store.[^axios-appstore]
## W9
- LeRobot v0.5.0 (Mar 2026).[^lerobot-gh]
## W12
- K-Scale shutdown; holiday Reachy Mini shipments.[^kalil-kscale][^seeed-reachy]
## W24
- Pollen acquisition; HopeJR/Reachy Mini; SmolVLA.[^tc-pollen][^tc-hopejr][^hf-smolvla]

# Lessons
- Open robotics wins on cheap hardware plus shared data, not on expensive humanoids. Capital-intensive open hardware without a platform parent tends to die.

# Related
- [Hugging Face](/organizations/hugging-face.md), [K-Scale Labs](/organizations/k-scale-labs.md), [ROS 2](/projects/hardware-embedded/ros-2.md)
- [Event: HF acquires Pollen](/events/2025-04-hugging-face-acquires-pollen-robotics.md), [Event: K-Scale shuts down](/events/2025-11-k-scale-labs-shuts-down.md), [Event: NVIDIA to acquire HF](/events/2026-09-nvidia-to-acquire-hugging-face.md)

[^lerobot-gh]: GitHub releases API, 2026-10-03.
[^tc-pollen]: TechCrunch, 2025-04-14.
[^tc-hopejr]: TechCrunch, 2025-05-29.
[^hf-smolvla]: Hugging Face blog.
[^seeed-reachy]: Seeed Studio, 2026-01-06.
[^axios-appstore]: Axios, 2026-05-06 (reported).
[^kalil-kscale]: Mike Kalil.
[^nv-hf-blog]: NVIDIA blog, 2026-09-03.
