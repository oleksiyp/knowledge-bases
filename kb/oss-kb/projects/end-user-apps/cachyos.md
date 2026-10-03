---
type: OSS Project
title: CachyOS
description: "Performance-tuned Arch-based distro that became the most-used Linux distro among Steam/ProtonDB gamers in 2025–26; a breakout community success of the Windows-10-EOL and Linux-gaming wave."
resource: https://cachyos.org
tags: [linux-distro, arch-based, gaming, community, sponsorship-funded]
domain: end-user-apps
license: GPL-3.0
license_history: ["GPL-3.0 (kernel/tooling repos)"]
governance: community
steward: CachyOS team
backing_orgs: []
metrics:
  github_stars_linux_cachyos: { value: 4543, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: site
    resource: https://cachyos.org
    title: CachyOS website
  - id: boiling
    resource: https://boilingsteam.com/distro-for-gaming-cachy-os-takes-over/
    title: "Boiling Steam: Linux distros for gaming — CachyOS takes over, according to ProtonDB"
  - id: framework
    resource: https://discuss.cachyos.org/t/framework-sponsorship-for-cachyos/19376
    title: "CachyOS forum: Framework sponsorship for CachyOS"
  - id: xda
    resource: https://www.xda-developers.com/cachyos-skipped-open-gaming-initiative-gamers-rewarded-making-top-linux-distro-steam/
    title: "XDA: CachyOS skipped the Open Gaming Collective, and gamers rewarded it by making it the top Linux distro on Steam"
    author: org:xda
  - id: june26
    resource: https://cachyos.org/blog/2606-june-release/
    title: "CachyOS June 2026 release"
  - id: steam-mar26
    resource: https://www.kitguru.net/gaming/joao-silva/steamos-propels-linux-to-record-5-33-share-in-latest-steam-survey/
    title: "KitGuru: SteamOS propels Linux to record 5.33% share in latest Steam Survey"
---
# Summary
CachyOS went from niche Arch derivative to the top Linux distro among gamers in under two years. ProtonDB-based analysis had it taking over in July 2025[^boiling]; by Q1–Q2 2026 reporting placed it at ~21% of Linux Steam users, overtaking Arch itself in March 2026[^xda]. Hardware maker Framework began sponsoring it in December 2025[^framework]. It rode the same wave that pushed Linux to a record 5.33% of Steam users in March 2026[^steam-mar26]. It is volunteer-run and donation/sponsor-funded; there is no commercial entity. Verdict: thriving OSS, n/a business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07-21 | ProtonDB data shows CachyOS taking over as top gaming distro[^boiling] | OSS | + |
| W12 | 2025-12-05 | Framework sponsors CachyOS[^framework] | Business | + |
| W9 | 2026-03 | Overtakes Arch as #1 gaming distro by Steam user share (~21%)[^xda] | OSS | + |
| W9 | 2026-03 | Linux hits 5.33% on Steam survey (record)[^steam-mar26] | OSS | + |
| W6 | 2026-06-29 | June 2026 release[^june26] | OSS | + |

# OSS successes
- Optimized kernels/packages (x86-64-v3/v4 builds, schedulers) translate into visible gaming performance claims; strong word of mouth[^site].
- Stayed independent of the Open Gaming Collective yet won share[^xda].
# OSS failures / risks
- Small core team; reliance on Arch upstream (which suffered an AUR malware incident in June 2026).
# Business successes
- Hardware-vendor sponsorship (Framework)[^framework].
# Business failures / risks
- No commercial model; sustainability depends on donations and sponsors.

# By window
## W3
- Continued #1 standing in gaming distro rankings (reported by XDA)[^xda].
## W6
- June 2026 release[^june26].
## W9
- Overtakes Arch; Linux Steam share record[^xda][^steam-mar26].
## W12
- Framework sponsorship[^framework].
## W24
- Emerges as top ProtonDB distro[^boiling].

# Lessons
- "Batteries-included performance" on top of a rolling base hits a sweet spot for gamers migrating from Windows.
- Hardware vendors now sponsor community distros directly.

# Related
- [Arch Linux](/projects/end-user-apps/arch-linux.md), [Bazzite](/projects/end-user-apps/bazzite.md), [Omarchy](/projects/end-user-apps/omarchy.md), [Valve](/organizations/valve.md)
- [Windows 10 end of support](/events/2025-10-windows-10-end-of-support.md)

[^site]: https://cachyos.org
[^boiling]: https://boilingsteam.com/distro-for-gaming-cachy-os-takes-over/
[^framework]: https://discuss.cachyos.org/t/framework-sponsorship-for-cachyos/19376
[^xda]: https://www.xda-developers.com/cachyos-skipped-open-gaming-initiative-gamers-rewarded-making-top-linux-distro-steam/
[^june26]: https://cachyos.org/blog/2606-june-release/
[^steam-mar26]: https://www.kitguru.net/gaming/joao-silva/steamos-propels-linux-to-record-5-33-share-in-latest-steam-survey/
