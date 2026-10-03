---
type: OSS Project
title: OpenBMC
description: "Linux Foundation project providing open baseboard-management-controller firmware for servers, now the hyperscaler default and increasingly the OEM default. A quiet success: 2.18 shipped (May 2025), and incumbent firmware vendor AMI pivoted to selling an SLA-backed OpenBMC distribution (Oct 2025)."
resource: https://github.com/openbmc/openbmc
tags: [firmware, server, datacenter, ocp, foundation-hosted]
domain: hardware-embedded
license: "Apache-2.0 (most components; mixed per Yocto layer)"
license_history: ["Apache-2.0 (2018-, LF)"]
governance: foundation
steward: Linux Foundation (OpenBMC project)
backing_orgs: [organizations/linux-foundation]
metrics:
  github_stars: { value: 2580, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: phx-218
    resource: https://www.phoronix.com/news/OpenBMC-2.18-Released
    title: "Phoronix: OpenBMC 2.18 released (2025-05)"
  - id: ami-openbmc
    resource: https://www.morningstar.com/news/pr-newswire/20251014cl97186/ami-expands-support-to-open-source-ecosystem-and-accelerates-openbmc-adoption
    title: "PR Newswire: AMI expands support to open-source ecosystem and accelerates OpenBMC adoption (2025-10-14)"
  - id: lf-nov25
    resource: https://www.linuxfoundation.org/blog/linux-foundation-newsletter-november-2025
    title: "Linux Foundation Newsletter Nov 2025 (OpenBMC ported to Zephyr)"
  - id: ocp-2025
    resource: https://www.opencompute.org/blog/the-2025-ocp-global-summit-leading-the-future-of-ai
    title: "OCP: The 2025 OCP Global Summit (11,000+ attendees)"
---

# Summary
OpenBMC is a **growing**, low-drama infrastructure success. 2.18 (May 2025) is based on Yocto 5.2 and upstreamed many more motherboard ports.[^phx-218] The incumbent proprietary BMC vendor's pivot is the strongest market signal. In Oct 2025 **AMI** announced a unified, SLA-backed OpenBMC codebase synchronised with upstream and covering OCP-accepted platforms.[^ami-openbmc] The firmware layer is converging on open source, driven by the Open Compute Project, whose 2025 summit drew 11,000+ attendees and centred on AI racks.[^ocp-2025] Work to bring OpenBMC to Zephyr-class microcontrollers also appeared in late 2025.[^lf-nov25] Verdict: **growing**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05 | OpenBMC 2.18[^phx-218] | OSS | + |
| W12 | 2025-10-14 | AMI launches SLA-backed OpenBMC offering[^ami-openbmc] | Business | + |
| W12 | 2025-10/11 | OpenBMC ported to Zephyr (LF newsletter)[^lf-nov25] | OSS | + |

# OSS successes
- Proprietary incumbents now ship the open stack.[^ami-openbmc]

# OSS failures / risks
- Vendor forks diverge ("code drift"), which is exactly what AMI's offering monetises.[^ami-openbmc]

# Business successes
- Creates a support market (AMI and others).

# Business failures / risks
- n/a.

# By window
## W3
- No notable events found.
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- AMI pivot; Zephyr port.[^ami-openbmc][^lf-nov25]
## W24
- 2.18 release.[^phx-218]

# Lessons
- When hyperscaler buyers standardise on open firmware, incumbents switch to selling support for it.

# Related
- [coreboot / Dasharo](/projects/hardware-embedded/coreboot.md), [Caliptra](/projects/hardware-embedded/caliptra.md), [Zephyr](/projects/hardware-embedded/zephyr.md)

[^phx-218]: Phoronix, May 2025.
[^ami-openbmc]: PR Newswire via Morningstar, 2025-10-14.
[^lf-nov25]: Linux Foundation.
[^ocp-2025]: Open Compute Project.
