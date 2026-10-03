---
type: OSS Project
title: GrapheneOS
description: "Hardened Android OS; grew to ~400k users and in March 2026 signed its first OEM partnership (Motorola) to break its Pixel-only dependence, while relocating infrastructure out of France and becoming a flashpoint in border-search law."
resource: https://grapheneos.org
tags: [android, mobile-os, security, nonprofit, donor-funded, oem-partnership]
domain: end-user-apps
license: various (Apache-2.0/GPL AOSP-derived; GrapheneOS code MIT)
license_history: []
governance: foundation
steward: GrapheneOS Foundation (Canada)
backing_orgs: []
metrics:
  active_users: { value: 400000, as_of: 2026-04-30 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki
    resource: https://en.wikipedia.org/wiki/GrapheneOS
    title: "Wikipedia: GrapheneOS"
  - id: moto
    resource: https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/
    title: "Motorola: three new B2B solutions at MWC 2026 (GrapheneOS partnership)"
  - id: unlock
    resource: https://grapheneos.social/@GrapheneOS/116160393783585567
    title: "GrapheneOS: Motorola devices will be bootloader unlockable/relockable"
  - id: patches
    resource: https://grapheneos.social/@GrapheneOS/115647408229616018
    title: "GrapheneOS: only Android OS providing full security patches"
  - id: a17
    resource: https://discuss.grapheneos.org/d/36469-grapheneos-has-been-ported-to-android-17-and-official-releases-are-coming-soon
    title: "GrapheneOS ported to Android 17"
  - id: airport
    resource: https://www.techspot.com/news/113236-us-prosecutors-charge-atlanta-man-after-grapheneos-phone.html
    title: "TechSpot: US citizen charged after GrapheneOS phone wipes during airport search"
    author: org:techspot
  - id: dcd-ovh
    resource: https://www.datacenterdynamics.com/en/news/grapheneos-migrates-workloads-off-of-ovh-cites-issues-with-frances-digital-privacy-policy/
    title: "DCD: GrapheneOS migrates workloads off OVH, cites France's digital privacy policy (2025-11)"
  - id: stack-ovh
    resource: https://www.thestack.technology/grapheneos-exits-french-servers-cloud-provider/
    title: "The Stack: GrapheneOS exits French servers and French cloud provider (2025-11)"
  - id: ac-moto
    resource: https://www.androidcentral.com/phones/motorola/waiting-for-grapheneos-motorolas-2027-phones-are-up-first-and-foldables-are-included
    title: "Android Central: GrapheneOS confirms Motorola's 2027 phones will receive full support (2026-08)"
  - id: 9to5-moto
    resource: https://9to5google.com/2026/08/24/motorola-razr-fold-ultra-grapheneos-support-coming/
    title: "9to5Google: GrapheneOS support coming to Motorola Razr Fold & Ultra next year (2026-08-24)"
---
# Summary
GrapheneOS had a breakout 2026. On 2 March 2026 (MWC) Motorola announced a partnership with GrapheneOS, with Snapdragon flagship devices supporting unlock/relock expected Q4 2026–Q1 2027. In August 2026 GrapheneOS said the first official Motorola devices will be 2027 non-folding models with 7 years of updates, followed by next-gen Razr Fold/Ultra; the current 2026 models lack MTE and adequate secure-element integration[^moto][^unlock][^ac-moto][^9to5-moto]. It claims to be the only Android OS shipping full security patches (Dec 2025)[^patches], ported to Android 17 within days (June 2026)[^a17], and reported ~400k active users (April 2026; project estimate from update-server logs, cited via Wikipedia, not independently verified)[^wiki]. Late 2025 it moved infrastructure off OVHcloud, stating France isn't safe for open-source privacy projects[^dcd-ovh][^stack-ovh]. In July 2026 a US activist was charged after a duress-PIN wipe during an airport search — the first high-profile case of its kind[^airport]. Verdict: OSS growing; nonprofit, donor-funded (e.g., Jack Dorsey $1M historically)[^wiki].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-11-24/28 | Shuts all servers in France and leaves OVHcloud over legal-risk/encryption concerns[^dcd-ovh][^stack-ovh] | OSS | mixed |
| W12 | 2025-12-06 | Claims sole full-patch Android OS status[^patches] | OSS | + |
| W9 | 2026-03-02 | Motorola partnership announced at MWC[^moto] | Business | + |
| W9 | 2026-03-04 | Motorola devices to be unlockable/relockable[^unlock] | OSS | + |
| W6 | 2026-04 | ~400k active users (project estimate from update-server logs, as cited by Wikipedia; not independently verified)[^wiki] | OSS | + |
| W6 | 2026-06-16 | Ported to Android 17[^a17] | OSS | + |
| W3 | 2026-07-26 | Airport duress-wipe prosecution[^airport] | OSS | mixed |
| W3 | 2026-08-22/24 | Motorola plan detailed: 2027 slab phones first (7-year updates), then next-gen Razr Fold/Ultra[^ac-moto][^9to5-moto] | Business | + |

# OSS successes
- First OEM deal ends Pixel-only dependence[^moto].
# OSS failures / risks
- Hardware security gaps on partner devices[^ac-moto]; legal exposure of users and project.
# Business successes
- Donor base plus OEM collaboration (terms undisclosed).
# Business failures / risks
- Dependence on Google's AOSP release practices.

# By window
## W3
- Airport case; Motorola 2027 roadmap incl. Razr[^airport][^ac-moto].
## W6
- 400k users; Android 17[^wiki][^a17].
## W9
- Motorola partnership[^moto].
## W12
- France/OVH exit (Nov 2025); patch leadership[^dcd-ovh][^patches].
## W24
- No notable events found.

# Lessons
- Security-focused OSS can win OEM partners when enterprises demand hardened devices.

# Related
- [F-Droid](/projects/end-user-apps/f-droid.md), [Android developer verification](/events/2026-09-android-developer-verification-enforcement.md)

[^wiki]: https://en.wikipedia.org/wiki/GrapheneOS
[^moto]: https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/
[^unlock]: https://grapheneos.social/@GrapheneOS/116160393783585567
[^patches]: https://grapheneos.social/@GrapheneOS/115647408229616018
[^a17]: https://discuss.grapheneos.org/d/36469-grapheneos-has-been-ported-to-android-17-and-official-releases-are-coming-soon
[^airport]: https://www.techspot.com/news/113236-us-prosecutors-charge-atlanta-man-after-grapheneos-phone.html
[^dcd-ovh]: https://www.datacenterdynamics.com/en/news/grapheneos-migrates-workloads-off-of-ovh-cites-issues-with-frances-digital-privacy-policy/
[^stack-ovh]: https://www.thestack.technology/grapheneos-exits-french-servers-cloud-provider/
[^ac-moto]: https://www.androidcentral.com/phones/motorola/waiting-for-grapheneos-motorolas-2027-phones-are-up-first-and-foldables-are-included
[^9to5-moto]: https://9to5google.com/2026/08/24/motorola-razr-fold-ultra-grapheneos-support-coming/
