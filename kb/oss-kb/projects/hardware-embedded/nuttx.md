---
type: OSS Project
title: Apache NuttX
description: "POSIX-style RTOS under the Apache Software Foundation, used in PX4 flight controllers and as the base of Xiaomi's openvela AIoT OS. Xiaomi contributes over half of commits; NuttX hit 13.0 in July 2026, a healthy but corporate-dependent project."
resource: https://nuttx.apache.org
tags: [rtos, embedded, apache, posix, xiaomi]
domain: hardware-embedded
license: Apache-2.0
license_history: ["BSD (pre-ASF)", "Apache-2.0 (ASF incubation 2019; TLP 2022)"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: []
metrics:
  github_stars: { value: 4057, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nuttx-dl
    resource: https://nuttx.apache.org/download/
    title: "Apache NuttX downloads (13.0.0 on 2026-07-12; 13.0.1 on 2026-09-15)"
  - id: openvela-conf
    resource: https://www.manilatimes.net/2025/10/25/tmt-newswire/pr-newswire/openvelas-inaugural-global-developer-conference-concludes-successfully-nuttx-founder-gregory-nutt-joins-to-shape-aiot-ecosystem/2208343
    title: "PR Newswire: openvela's inaugural global developer conference (2025-10-25)"
  - id: itsfoss-vela
    resource: https://news.itsfoss.com/xiaomi-vela-open-source/
    title: "It's FOSS: Xiaomi Vela IoT platform being open-sourced based on NuttX"
  - id: nuttx-gh
    resource: https://github.com/apache/nuttx
    title: Apache NuttX GitHub
---

# Summary
NuttX is a **growing**, ASF-governed RTOS. Releases ran roughly quarterly: 12.10 (Jul 2025), 12.11 (Oct 2025), 12.12 (Dec 31, 2025), 12.13 (Apr 2026), then **13.0.0 (Jul 12, 2026)** and 13.0.1 (Sep 15, 2026).[^nuttx-dl] Its main patron is **Xiaomi**. Xiaomi's open-source **openvela** AIoT OS is built on NuttX, and the company says it accounts for over 50% of NuttX code submissions. It held its first global openvela developer conference in Oct 2025 with NuttX founder Gregory Nutt.[^openvela-conf][^itsfoss-vela] NuttX is also the OS under [PX4](/projects/hardware-embedded/px4.md). Verdict: **growing**, with concentration risk.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07-07 | NuttX 12.10.0[^nuttx-dl] | OSS | + |
| W12 | 2025-10 | openvela Global Developer Conference; Gregory Nutt joins[^openvela-conf] | OSS | + |
| W12 | 2025-12-31 | NuttX 12.12.0[^nuttx-dl] | OSS | + |
| W3 | 2026-07-12 | NuttX 13.0.0 major release[^nuttx-dl] | OSS | + |

# OSS successes
- ASF governance gives vendor neutrality on paper, while Xiaomi provides resources.[^openvela-conf]

# OSS failures / risks
- More than half of contributions come from one company (Xiaomi), a classic bus-factor and agenda risk.[^openvela-conf]

# Business successes
- n/a.

# Business failures / risks
- n/a.

# By window
## W3
- 13.0.0 and 13.0.1.[^nuttx-dl]
## W6
- 12.13.0 (Apr 2).[^nuttx-dl]
## W9
- No notable events found.
## W12
- openvela conference; 12.11/12.12 releases.[^openvela-conf][^nuttx-dl]
## W24
- 12.10 release.[^nuttx-dl]

# Lessons
- Chinese device makers are becoming major upstream patrons of embedded OSS. Foundation governance is what makes that patronage acceptable to Western users.

# Related
- [Zephyr](/projects/hardware-embedded/zephyr.md), [PX4](/projects/hardware-embedded/px4.md)

[^nuttx-dl]: Apache NuttX downloads page.
[^openvela-conf]: PR Newswire via Manila Times, 2025-10-25.
[^itsfoss-vela]: It's FOSS.
[^nuttx-gh]: GitHub.
