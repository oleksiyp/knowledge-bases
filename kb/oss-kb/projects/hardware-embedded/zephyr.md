---
type: OSS Project
title: Zephyr RTOS
description: "Linux Foundation-hosted RTOS for microcontrollers backed by Nordic, NXP, Intel, Google and others. Contributor counts kept rising (810 for 4.2 in Jun 2025, 930+ for 4.4 in Apr 2026), it moved to a twice-yearly cadence and shipped SDK 1.0, making it the vendor-neutral default for new MCU designs."
resource: https://www.zephyrproject.org
tags: [rtos, embedded, iot, foundation-hosted, apache-2.0]
domain: hardware-embedded
license: Apache-2.0
license_history: ["Apache-2.0 (2016-)"]
governance: foundation
steward: Linux Foundation (Zephyr Project)
backing_orgs: [organizations/linux-foundation]
metrics:
  github_stars: { value: 16676, as_of: 2026-10-03 }
  contributors_per_release: { value: "930+ (v4.4)", as_of: 2026-04-14 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: z-44
    resource: https://www.zephyrproject.org/zephyr-rtos-4-4-now-available-wireguard-wi-fi-direct-openrisc-and-more/
    title: "Zephyr Project: Zephyr RTOS 4.4 now available (2026-04-14)"
  - id: z-43
    resource: https://github.com/zephyrproject-rtos/zephyr/discussions/99337
    title: "Announcing Zephyr 4.3.0 (2025-11-13; 795 contributors)"
  - id: z-41
    resource: https://zephyrproject.org/zephyr-rtos-4-1-is-available/
    title: "Zephyr RTOS 4.1 now available (Mar 2025)"
  - id: z-wiki
    resource: https://en.wikipedia.org/wiki/Zephyr_(operating_system)
    title: "Wikipedia: Zephyr (4.2 released 2025-06-18 with 810 contributors)"
  - id: z-gh
    resource: https://github.com/zephyrproject-rtos/zephyr
    title: Zephyr GitHub (stars/releases via API, 2026-10-03)
  - id: lf-nov25
    resource: https://www.linuxfoundation.org/blog/linux-foundation-newsletter-november-2025
    title: "Linux Foundation Newsletter Nov 2025 (OpenBMC ported to Zephyr)"
---

# Summary
Zephyr is the embedded world's **foundation-model success**. Releases kept growing: 4.1 (Mar 2025), 4.2 (Jun 2025, 810 contributors), 4.3 (Nov 2025, 795 contributors) and 4.4 (Apr 14, 2026, 930+ contributors).[^z-41][^z-wiki][^z-43][^z-44] With 4.4 the project moved to a **twice-yearly cadence** (April and October). It also shipped **Zephyr SDK 1.0** with experimental LLVM, a C17 baseline, WireGuard, Wi-Fi Direct and OpenRISC support, plus 121 new boards.[^z-44] Point releases (4.4.2, Aug 2026) and LTS maintenance continue.[^z-gh] Even BMC firmware is being ported to it.[^lf-nov25] Verdict: **thriving**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03 | Zephyr 4.1 (IAR toolchain, Rust, perf)[^z-41] | OSS | + |
| W24 | 2025-06-18 | Zephyr 4.2, 810 contributors[^z-wiki] | OSS | + |
| W12 | 2025-11-13 | Zephyr 4.3, 795 contributors[^z-43] | OSS | + |
| W6 | 2026-04-14 | Zephyr 4.4: SDK 1.0, twice-yearly cadence, 930+ contributors[^z-44] | OSS | + |
| W3 | 2026-08-07 | 4.4.2 maintenance release[^z-gh] | OSS | + |

# OSS successes
- Multi-vendor contribution and over 100 new boards per release make it the neutral alternative to vendor SDKs.[^z-44]
- Moving to a slower cadence helps downstream planning and shows maturity.[^z-44]

# OSS failures / risks
- Complexity (devicetree, Kconfig) is a steep learning curve. Rust-native stacks ([Embassy](/projects/hardware-embedded/embassy.md)) are courting newcomers.

# Business successes
- n/a. Silicon vendors (Nordic, NXP, ST, Espressif) treat it as shared infrastructure.

# Business failures / risks
- None notable.

# By window
## W3
- 4.4.2 maintenance; 4.5 due in October 2026.[^z-gh][^z-44]
## W6
- Zephyr 4.4 and the cadence change.[^z-44]
## W9
- No notable events found.
## W12
- Zephyr 4.3 (Nov 2025).[^z-43]
## W24
- 4.1 and 4.2 releases.[^z-41][^z-wiki]

# Lessons
- A neutral foundation plus competing silicon vendors produces a broad, durable RTOS, much as Linux did for servers.

# Related
- [FreeRTOS](/projects/hardware-embedded/freertos.md), [NuttX](/projects/hardware-embedded/nuttx.md), [Embassy](/projects/hardware-embedded/embassy.md), [Linux Foundation](/organizations/linux-foundation.md)

[^z-44]: Zephyr Project, 2026-04-14.
[^z-43]: GitHub discussion, 2025-11-13.
[^z-41]: Zephyr Project.
[^z-wiki]: Wikipedia.
[^z-gh]: GitHub API.
[^lf-nov25]: Linux Foundation newsletter.
