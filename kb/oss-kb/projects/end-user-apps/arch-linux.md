---
type: OSS Project
title: Arch Linux
description: "Rolling-release community distro that became the base of the Linux gaming/desktop boom (SteamOS, CachyOS, Omarchy), but suffered a major AUR malware incident (1,500+ packages) in June 2026."
resource: https://archlinux.org
tags: [linux-distro, rolling-release, community, supply-chain-security]
domain: end-user-apps
license: various (GPL family)
license_history: []
governance: community
steward: Arch Linux (community; finances via SPI)
backing_orgs: [organizations/valve]
metrics: {}
oss_verdict: contested
business_verdict: n/a
momentum_by_window: { W3: down, W6: down, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: aur-malware
    resource: https://www.phoronix.com/news/Arch-Linux-AUR-More-Than-1500
    title: "Phoronix: Arch Linux now believes malware incident under control — more than 1,500 packages"
    author: org:phoronix
  - id: aur-adopt
    resource: https://lwn.net/Articles/1086489/
    title: "LWN: Arch Linux disables AUR package adoption"
    author: org:lwn
  - id: repro
    resource: https://antiz.fr/blog/archlinux-now-has-a-reproducible-docker-image/
    title: "Arch Linux now has a bit-for-bit reproducible Docker image"
  - id: holo
    resource: https://www.linuxcompatible.org/story/valve-and-collabora-release-holo-core-a-custom-aarch64-arch-linux-port-for-steam-frame/
    title: "Valve/Collabora release Holo Core, a custom AArch64 Arch Linux port for Steam Frame"
  - id: xda
    resource: https://www.xda-developers.com/cachyos-skipped-open-gaming-initiative-gamers-rewarded-making-top-linux-distro-steam/
    title: "XDA: CachyOS becomes top Linux distro on Steam"
---
# Summary
Arch Linux is the quiet foundation of the 2025–26 Linux desktop surge: SteamOS (Valve's Holo), CachyOS and Omarchy all build on it, and Valve with Collabora released an AArch64 Arch port ("Holo Core") for the Steam Frame in July 2026[^holo]. Arch itself lost the top "gaming distro" spot to its derivative CachyOS in March 2026[^xda]. Its worst moment came on 12 June 2026, when malicious commits compromised 1,579+ AUR packages[^aur-malware]; on 31 July 2026 Arch disabled AUR package adoption — the mechanism abused to take over orphaned packages[^aur-adopt]. Positive engineering news included a bit-for-bit reproducible Docker image (April 2026)[^repro]. Verdict: OSS contested (security), no business entity.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-03 | CachyOS overtakes Arch among Steam Linux users[^xda] | OSS | mixed |
| W6 | 2026-04-23 | Reproducible Docker image[^repro] | OSS | + |
| W6 | 2026-06-12 | AUR malware: 1,500+ packages compromised; malicious commits removed[^aur-malware] | OSS | − |
| W3 | 2026-07 | Valve/Collabora release Holo Core AArch64 Arch port for Steam Frame[^holo] | OSS | + |
| W3 | 2026-07-31 | AUR package adoption disabled[^aur-adopt] | OSS | mixed |

# OSS successes
- Upstream of the most popular new distros; Valve investment in ARM port[^holo].
# OSS failures / risks
- AUR's trust model (anyone can adopt orphaned packages) proved exploitable at scale[^aur-malware][^aur-adopt].
# Business successes
- n/a (sponsorships from Valve and others; amounts not verified here).
# Business failures / risks
- Volunteer moderation capacity does not scale with the popularity derivatives bring.

# By window
## W3
- Holo Core; AUR adoption disabled[^holo][^aur-adopt].
## W6
- AUR malware incident; reproducible image[^aur-malware][^repro].
## W9
- Derivative CachyOS overtakes Arch[^xda].
## W12
- No notable events found.
## W24
- Growth as base of SteamOS/CachyOS/Omarchy (no single event).

# Lessons
- Popularity of downstream distros funnels inexperienced users to the AUR — a supply-chain risk upstream must price in.

# Related
- [Steam Machine launch](/events/2026-06-steam-machine-launch.md)
- [CachyOS](/projects/end-user-apps/cachyos.md), [Omarchy](/projects/end-user-apps/omarchy.md), [Valve](/organizations/valve.md)
- [AUR malware event](/events/2026-06-arch-aur-malware.md)

[^aur-malware]: https://www.phoronix.com/news/Arch-Linux-AUR-More-Than-1500
[^aur-adopt]: https://lwn.net/Articles/1086489/
[^repro]: https://antiz.fr/blog/archlinux-now-has-a-reproducible-docker-image/
[^holo]: https://www.linuxcompatible.org/story/valve-and-collabora-release-holo-core-a-custom-aarch64-arch-linux-port-for-steam-frame/
[^xda]: https://www.xda-developers.com/cachyos-skipped-open-gaming-initiative-gamers-rewarded-making-top-linux-distro-steam/
