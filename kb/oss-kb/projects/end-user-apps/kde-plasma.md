---
type: OSS Project
title: KDE Plasma
description: "KDE's desktop environment; the default desktop of SteamOS and the gaming distro wave, with record donations (2025 year-end fundraiser €276K vs €100K goal) and a decisive move to Wayland-only in Plasma 6.8."
resource: https://kde.org/plasma-desktop/
tags: [desktop-environment, linux, gpl, foundation-hosted, donor-funded, wayland]
domain: end-user-apps
license: GPL-2.0-or-later
license_history: ["GPL/LGPL family (1996-)"]
governance: foundation
steward: KDE e.V.
backing_orgs: []
metrics:
  fundraiser_2025_eur: { value: 276000, as_of: 2025-12-31 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: fund
    resource: https://linuxiac.com/kde-surpasses-2025-fundraiser-goal-with-record-community-support/
    title: "Linuxiac: KDE surpasses 2025 fundraiser goal with record community support"
  - id: gol-fund
    resource: https://www.gamingonlinux.com/2025/12/kdes-2025-fundraising-has-been-a-huge-success/
    title: "GamingOnLinux: KDE's 2025 fundraising has been a huge success"
  - id: kde-fund
    resource: https://kde.org/fundraisers/yearend2025/
    title: "KDE: Reaching the Inflection Point (year-end 2025 fundraiser)"
  - id: p64
    resource: https://kde.org/announcements/plasma/6/6.4.0/
    title: "KDE Plasma 6.4 released"
  - id: p65
    resource: https://kde.org/announcements/plasma/6/6.5.0/
    title: "KDE Plasma 6.5 released"
  - id: p67
    resource: https://kde.org/announcements/plasma/6/6.7.0/
    title: "KDE Plasma 6.7 released"
  - id: wayland
    resource: https://www.phoronix.com/news/KDE-Plasma-68-Wayland-Exclusive
    title: "Phoronix: KDE Plasma 6.8 will go Wayland-exclusive"
    author: org:phoronix
  - id: kdelinux
    resource: https://pointieststick.com/2025/09/06/announcing-the-alpha-release-of-kde-linux/
    title: "Nate Graham: Announcing the alpha release of KDE Linux"
  - id: endof10
    resource: https://endof10.org/
    title: "End of 10 campaign"
---
# Summary
KDE Plasma had arguably its best two years: Plasma 6 matured through 6.4 (June 2025), 6.5 (Oct 2025) and 6.7 (June 2026)[^p64][^p65][^p67]; KDE launched its own reference distro, KDE Linux (alpha Sept 2025)[^kdelinux]; it co-led the "End of 10" campaign to move Windows 10 users to Linux[^endof10]; and its 2025 year-end fundraiser raised €276K against a €100K goal, part of a best-ever Q4 of nearly €330K driven largely by the in-desktop donation pop-up[^fund][^gol-fund]. Plasma's position as SteamOS's desktop and the default of CachyOS/Bazzite makes it the main beneficiary of the Linux gaming boom. In Nov 2025 KDE announced Plasma 6.8 will drop the X11 session[^wayland]. Verdict: thriving OSS; KDE e.V. finances growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-17 | Plasma 6.4[^p64] | OSS | + |
| W24 | 2025-09-06 | KDE Linux alpha[^kdelinux] | OSS | + |
| W24 | 2025 | "End of 10" Windows-10-to-Linux campaign[^endof10] | OSS | + |
| W12 | 2025-10-21 | Plasma 6.5[^p65] | OSS | + |
| W12 | 2025-11-26 | Plasma 6.8 to be Wayland-exclusive[^wayland] | OSS | mixed |
| W12 | 2025-12 | Year-end fundraiser €276K (276% of goal); Q4 ~€330K record[^fund][^gol-fund] | Business | + |
| W6 | 2026-06-16 | Plasma 6.7[^p67] | OSS | + |

# OSS successes
- Steady 4-month cadence; strong UX polish; default desktop for the gaming distro wave.
# OSS failures / risks
- X11 removal may strand some users/hardware[^wayland].
# Business successes
- Donation pop-up proved that in-product asks work at scale (fundraiser 5× the prior year's ~€54K)[^fund].
# Business failures / risks
- Funding still small relative to commercial desktops; reliance on individual donations.

# By window
## W3
- No notable events found.
## W6
- Plasma 6.7[^p67].
## W9
- No notable events found.
## W12
- Plasma 6.5; Wayland-only decision; record fundraiser[^p65][^wayland][^fund].
## W24
- Plasma 6.4, KDE Linux alpha, End of 10[^p64][^kdelinux][^endof10].

# Lessons
- Asking users for money inside the product (respectfully, rarely) dramatically increases donations.
- Being the default desktop of a hit platform (SteamOS) compounds into ecosystem dominance.

# Related
- [Steam Machine launch](/events/2026-06-steam-machine-launch.md)
- [GNOME](/projects/end-user-apps/gnome.md), [Valve](/organizations/valve.md), [Windows 10 EOL](/events/2025-10-windows-10-end-of-support.md)

[^fund]: https://linuxiac.com/kde-surpasses-2025-fundraiser-goal-with-record-community-support/
[^gol-fund]: https://www.gamingonlinux.com/2025/12/kdes-2025-fundraising-has-been-a-huge-success/
[^kde-fund]: https://kde.org/fundraisers/yearend2025/
[^p64]: https://kde.org/announcements/plasma/6/6.4.0/
[^p65]: https://kde.org/announcements/plasma/6/6.5.0/
[^p67]: https://kde.org/announcements/plasma/6/6.7.0/
[^wayland]: https://www.phoronix.com/news/KDE-Plasma-68-Wayland-Exclusive
[^kdelinux]: https://pointieststick.com/2025/09/06/announcing-the-alpha-release-of-kde-linux/
[^endof10]: https://endof10.org/
