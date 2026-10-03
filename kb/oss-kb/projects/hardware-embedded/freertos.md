---
type: OSS Project
title: FreeRTOS
description: "The most widely deployed MIT-licensed microcontroller RTOS, stewarded by AWS since 2017. A stable incumbent: two-year LTS releases (202406, then 202604 LTS in Apr 2026 with MQTT v5 and Y2038 fixes) and little drama, though momentum has shifted toward Zephyr and Rust."
resource: https://www.freertos.org
tags: [rtos, embedded, aws, mit, single-vendor]
domain: hardware-embedded
license: MIT
license_history: ["Modified GPL (pre-2017)", "MIT (2017-, after AWS stewardship)"]
governance: single-vendor
steward: Amazon Web Services
backing_orgs: []
metrics:
  github_stars_kernel: { value: 4537, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: aws-lts-2026
    resource: https://aws.amazon.com/about-aws/whats-new/2026/04/freertos-lts/
    title: "AWS What's New: FreeRTOS 202604 LTS now available (2026-04)"
  - id: freertos-lts-faq
    resource: https://www.freertos.org/Why-FreeRTOS/FAQs/Long-term-support/
    title: "FreeRTOS: What is an LTS release?"
  - id: freertos-gh
    resource: https://github.com/FreeRTOS/FreeRTOS-Kernel
    title: FreeRTOS-Kernel GitHub
---

# Summary
FreeRTOS is a **stable incumbent**. AWS ships a Long-Term-Support bundle every two years. **FreeRTOS 202604 LTS** (April 2026) brings kernel v11.3.0 with more MPU support and security hardening, coreMQTT v5.0.2 with MQTT v5, coreSNTP v2 with Year-2038 readiness, and memory-safety/MISRA-verified libraries. It is supported until April 30, 2028, while 202406 LTS support ended June 30, 2026.[^aws-lts-2026] The kernel stays MIT-licensed under AWS stewardship.[^freertos-gh] No governance or licensing controversy was found in the window. Verdict: **stable**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026-04 | FreeRTOS 202604 LTS released[^aws-lts-2026] | OSS | + |
| W6 | 2026-06-30 | 202406 LTS reaches end of support[^aws-lts-2026] | OSS | ± |

# OSS successes
- Predictable LTS policy valued by regulated and IoT vendors.[^freertos-lts-faq]

# OSS failures / risks
- Single-vendor stewardship. Community energy has moved to Zephyr, NuttX and Rust frameworks.

# Business successes
- n/a. It is a funnel into AWS IoT services.

# Business failures / risks
- None found.

# By window
## W3
- No notable events found.
## W6
- 202604 LTS release.[^aws-lts-2026]
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- A permissive license plus a hyperscaler steward produces reliability but not much community momentum.

# Related
- [Zephyr](/projects/hardware-embedded/zephyr.md), [ESP-IDF](/projects/hardware-embedded/esp-idf.md)

[^aws-lts-2026]: AWS, April 2026.
[^freertos-lts-faq]: FreeRTOS.org.
[^freertos-gh]: GitHub.
