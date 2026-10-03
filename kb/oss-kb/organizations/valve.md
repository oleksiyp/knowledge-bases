---
type: Organization
title: Valve
description: "Private game company whose SteamOS/Proton strategy (Steam Deck, SteamOS on third-party handhelds in 2025, Steam Machine in June 2026) is the single biggest driver of Linux desktop growth, pushing Linux to a record 5.33% of Steam users in March 2026."
resource: https://store.steampowered.com
tags: [gaming, linux, steamos, proton, upstream-sponsor]
org_kind: big-tech
hq: Bellevue, Washington, USA
funding: { total_usd: "n/a (private, self-funded)", last_round: "n/a", last_round_date: null, valuation_usd: "n/a" }
business_verdict: thriving
projects: [projects/end-user-apps/arch-linux, projects/end-user-apps/kde-plasma, projects/end-user-apps/cachyos, projects/end-user-apps/bazzite]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ars-steamos
    resource: https://arstechnica.com/gaming/2025/01/bye-bye-windows-gaming-steamos-officially-expands-past-the-steam-deck/
    title: "Ars Technica: SteamOS officially expands past the Steam Deck"
    author: org:ars-technica
  - id: ars-perf
    resource: https://arstechnica.com/gaming/2025/06/games-run-faster-on-steamos-than-windows-11-ars-testing-finds/
    title: "Ars Technica: Games run faster on SteamOS than Windows 11"
    author: org:ars-technica
  - id: announce
    resource: https://www.phoronix.com/news/Steam-Machines-Frame-2026
    title: "Phoronix: Valve announces new Steam Machine, Steam Controller and Steam Frame"
    author: org:phoronix
  - id: launch
    resource: https://store.steampowered.com/news/group/45479024/view/685257114654870245
    title: "Steam: Steam Machine launches today"
  - id: price
    resource: https://the-gadgeteer.com/2026/06/27/steam-machine-2026-price-specs/
    title: "The Gadgeteer: Steam Machine $1,049 price, specs"
  - id: survey
    resource: https://www.kitguru.net/gaming/joao-silva/steamos-propels-linux-to-record-5-33-share-in-latest-steam-survey/
    title: "KitGuru: SteamOS propels Linux to record 5.33% share"
  - id: gol-apr
    resource: https://www.gamingonlinux.com/2026/05/steam-survey-for-april-2026-shows-linux-still-trending-well/
    title: "GamingOnLinux: Steam Survey for April 2026"
  - id: steamos38
    resource: https://store.steampowered.com/news/app/1675200/view/697641379212298072
    title: "SteamOS 3.8 released as stable"
  - id: holo
    resource: https://www.linuxcompatible.org/story/valve-and-collabora-release-holo-core-a-custom-aarch64-arch-linux-port-for-steam-frame/
    title: "Valve/Collabora release Holo Core AArch64 Arch port for Steam Frame"
  - id: eink
    resource: https://www.gamingonlinux.com/2026/07/valve-open-source-the-steam-machine-e-ink-screen-so-you-can-make-your-own/
    title: "GamingOnLinux: Valve open-sources the Steam Machine e-ink screen"
---
# Summary
Valve is not an OSS company, but its Linux bet is the central business driver of the desktop-Linux story. SteamOS officially expanded beyond the Steam Deck in January 2025 (Lenovo Legion Go S)[^ars-steamos]; Ars found games running faster on SteamOS than Windows 11 (June 2025)[^ars-perf]. Valve announced the Steam Machine, Steam Controller and Steam Frame in Nov 2025[^announce]; the Steam Machine launched in late June 2026 (from $1,049, via a reservation queue)[^launch][^price], alongside SteamOS 3.8 stable[^steamos38] and open-sourced e-ink screen designs[^eink]. With Collabora it released an AArch64 Arch port for Steam Frame[^holo]. Linux hit a record 5.33% on the March 2026 Steam survey (SteamOS ~24.5% of Linux installs), before settling around 4% by July[^survey][^gol-apr]. Verdict: thriving.

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2025-01-08 | SteamOS expands to third-party handhelds[^ars-steamos] |
| W24 | 2025-06-25 | SteamOS outperforms Windows 11 in tests[^ars-perf] |
| W12 | 2025-11-12 | Steam Machine/Controller/Frame announced[^announce] |
| W9 | 2026-03 | Linux 5.33% on Steam survey (record)[^survey] |
| W6 | 2026-06-18/22 | SteamOS 3.8 stable; Steam Machine launches[^steamos38][^launch] |
| W3 | 2026-07 | Holo Core ARM port; e-ink screen open-sourced[^holo][^eink] |

# Monetization model
Steam store revenue share; hardware sales. Funds upstream Linux work through contractors, e.g. the Holo Core Arch ARM port built with Collabora[^holo].

# Successes
- Made Linux a mainstream gaming platform; validated Proton compatibility at scale.
# Failures / risks
- Steam Machine priced above consoles ($1,049+) and supply-limited[^price]; Linux share volatile month to month[^gol-apr].

# Related
- [Arch Linux](/projects/end-user-apps/arch-linux.md), [KDE Plasma](/projects/end-user-apps/kde-plasma.md), [CachyOS](/projects/end-user-apps/cachyos.md), [Bazzite](/projects/end-user-apps/bazzite.md)
- [Windows 10 end of support](/events/2025-10-windows-10-end-of-support.md)

[^ars-steamos]: https://arstechnica.com/gaming/2025/01/bye-bye-windows-gaming-steamos-officially-expands-past-the-steam-deck/
[^ars-perf]: https://arstechnica.com/gaming/2025/06/games-run-faster-on-steamos-than-windows-11-ars-testing-finds/
[^announce]: https://www.phoronix.com/news/Steam-Machines-Frame-2026
[^launch]: https://store.steampowered.com/news/group/45479024/view/685257114654870245
[^price]: https://the-gadgeteer.com/2026/06/27/steam-machine-2026-price-specs/
[^survey]: https://www.kitguru.net/gaming/joao-silva/steamos-propels-linux-to-record-5-33-share-in-latest-steam-survey/
[^gol-apr]: https://www.gamingonlinux.com/2026/05/steam-survey-for-april-2026-shows-linux-still-trending-well/
[^steamos38]: https://store.steampowered.com/news/app/1675200/view/697641379212298072
[^holo]: https://www.linuxcompatible.org/story/valve-and-collabora-release-holo-core-a-custom-aarch64-arch-linux-port-for-steam-frame/
[^eink]: https://www.gamingonlinux.com/2026/07/valve-open-source-the-steam-machine-e-ink-screen-so-you-can-make-your-own/
