---
type: OSS Project
title: Asahi Linux
description: "Linux on Apple Silicon; survived the Feb 2025 resignation of founder Hector Martin by moving to a seven-person board and Open Collective funding, and by mid-2026 was bringing up M3 hardware."
resource: https://asahilinux.org
tags: [linux-distro, apple-silicon, reverse-engineering, rust, community]
domain: end-user-apps
license: various (GPL-2.0 kernel, MIT/Apache m1n1)
license_history: []
governance: community
steward: Asahi Linux board (7 members)
backing_orgs: []
metrics: {}
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: marcan
    resource: https://marcan.st/2025/02/resigning-as-asahi-linux-project-lead/
    title: "Hector Martin: Resigning as Asahi Linux project lead"
  - id: lkml
    resource: https://lkml.org/lkml/2025/2/7/9
    title: "LKML: Hector Martin resigns as Apple Silicon kernel maintainer"
  - id: phoronix
    resource: https://www.phoronix.com/news/Hector-Martin-Resigns-Asahi
    title: "Phoronix: Hector Martin resigns from the Asahi Linux project"
    author: org:phoronix
  - id: asahi-torch
    resource: https://asahilinux.org/2025/02/passing-the-torch/
    title: "Asahi Linux: Passing the torch on Asahi Linux (2025-02-13)"
  - id: gaming
    resource: https://rosenzweig.io/blog/aaa-gaming-on-m1.html
    title: "Alyssa Rosenzweig: AAA gaming on Asahi Linux"
  - id: pr70
    resource: https://asahilinux.org/2026/04/progress-report-7-0/
    title: "Asahi Linux progress report: Linux 7.0"
  - id: pr71
    resource: https://asahilinux.org/2026/06/progress-report-7-1/
    title: "Asahi Linux progress report: Linux 7.1"
---
# Summary
Asahi Linux is a case study in surviving founder burnout. In October 2024 it showed AAA games running on M1 via its Vulkan stack[^gaming]; in February 2025 founder Hector Martin resigned first as upstream kernel maintainer and then as project lead, citing burnout, user entitlement over M3/M4 support, low donations and Rust-for-Linux friction[^lkml][^marcan][^phoronix]. The project moved to a seven-person board and Open Collective funding via the Open Source Collective, replacing Martin's personal Patreon[^asahi-torch]. 2026 progress reports show it advancing: Linux 7.0 report (April 2026) and Linux 7.1 report (late June 2026) with M3 audio, CPU frequency scaling and much of the M3 platform being brought up, plus m1n1 1.6.0 requiring Rust[^pr70][^pr71]. Verdict: OSS stable after a crisis; no business entity.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-10 | AAA gaming on M1 demonstrated[^gaming] | OSS | + |
| W24 | 2025-02-07 | Martin resigns as kernel maintainer for Apple Silicon[^lkml] | OSS | − |
| W24 | 2025-02-13 | Martin resigns as project lead; move to 7-person board[^marcan][^asahi-torch] | OSS | − |
| W6 | 2026-04-26 | Linux 7.0 progress report[^pr70] | OSS | + |
| W6 | 2026-06-30 | Linux 7.1 progress report: M3 audio/cpufreq; m1n1 1.6 requires Rust[^pr71] | OSS | + |

# OSS successes
- Shared-governance transition kept the project alive; new contributors on M3 and video decode[^pr71].
# OSS failures / risks
- Still no M4 install support; Apple ships new silicon faster than reverse-engineering can follow[^pr71].
# Business successes
- n/a (donations via GitHub Sponsors/Open Collective)[^pr71].
# Business failures / risks
- Low donation volume cited as a burnout factor[^phoronix].

# By window
## W3
- No notable events found.
## W6
- 7.0 and 7.1 progress reports; M3 bring-up[^pr70][^pr71].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Founder resignation; governance overhaul[^marcan][^asahi-torch].

# Lessons
- Single-leader reverse-engineering projects need distributed governance before the leader burns out.
- User entitlement is a real sustainability risk for volunteer projects.

# Related
- [Hector Martin resigns event](/events/2025-02-hector-martin-resigns-asahi.md)
- [Ubuntu](/projects/end-user-apps/ubuntu.md), [Omarchy](/projects/end-user-apps/omarchy.md) (Omarchy M targets Apple Silicon)

[^marcan]: https://marcan.st/2025/02/resigning-as-asahi-linux-project-lead/
[^lkml]: https://lkml.org/lkml/2025/2/7/9
[^phoronix]: https://www.phoronix.com/news/Hector-Martin-Resigns-Asahi
[^asahi-torch]: https://asahilinux.org/2025/02/passing-the-torch/
[^gaming]: https://rosenzweig.io/blog/aaa-gaming-on-m1.html
[^pr70]: https://asahilinux.org/2026/04/progress-report-7-0/
[^pr71]: https://asahilinux.org/2026/06/progress-report-7-1/
