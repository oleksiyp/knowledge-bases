---
type: OSS Project
title: Bazzite
description: "Universal Blue's immutable Fedora-Atomic gaming distro; survived a 2025 existential threat from Fedora's 32-bit drop proposal and in 2026 anchored the new Open Gaming Collective, becoming one of the most popular new distros."
resource: https://github.com/ublue-os/bazzite
tags: [linux-distro, fedora-atomic, gaming, immutable, apache-2.0, community]
domain: end-user-apps
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: community
steward: Universal Blue
backing_orgs: []
metrics:
  github_stars: { value: 9134, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/ublue-os/bazzite
    title: Bazzite GitHub repository
  - id: gol-32bit
    resource: https://www.gamingonlinux.com/2025/06/bazzite-would-shut-down-if-fedora-goes-ahead-with-removing-32-bit/
    title: "GamingOnLinux: Bazzite would shut down if Fedora goes ahead with removing 32-bit"
  - id: gol-withdrawn
    resource: https://www.gamingonlinux.com/2025/06/fedora-proposal-to-drop-32-bit-support-has-been-withdrawn/
    title: "GamingOnLinux: Fedora proposal to drop 32-bit support has been withdrawn"
  - id: ogc
    resource: https://videocardz.com/newz/bazzite-and-asus-linux-shadowblip-pikaos-fyra-labs-launch-open-gaming-collective
    title: "VideoCardz: Bazzite and ASUS Linux, ShadowBlip, PikaOS, Fyra Labs launch Open Gaming Collective"
  - id: ublue-future
    resource: https://universal-blue.discourse.group/t/a-brighter-future-for-bazzite/11575
    title: "Universal Blue: A brighter future for Bazzite"
  - id: top10
    resource: https://linux.how2shout.com/top-10-most-popular-linux-distributions-in-june-july-2026/
    title: "LinuxShout: Top 10 most popular Linux distributions June & July 2026"
---
# Summary
Bazzite is the leading immutable gaming distro (Fedora Atomic base, SteamOS-like UX, strong handheld support). In June 2025 it said it would have to shut down if Fedora dropped 32-bit packages; Fedora withdrew the proposal within days[^gol-32bit][^gol-withdrawn] — a vivid example of downstream dependence. On 2026-01-29 Universal Blue launched the Open Gaming Collective (with Nobara, ChimeraOS, ShadowBlip, Playtron, PikaOS, ASUS Linux, Fyra Labs) to share a kernel, InputPlumber and gamescope work[^ogc][^ublue-future]. By mid-2026 Bazzite had entered "top 10 distro" popularity rankings[^top10]. Verdict: thriving OSS, no business entity.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-25 | Bazzite warns it would shut down if Fedora removes 32-bit[^gol-32bit] | OSS | − |
| W24 | 2025-06-30 | Fedora proposal withdrawn[^gol-withdrawn] | OSS | + |
| W9 | 2026-01-29 | Open Gaming Collective launched; Bazzite adopts shared OGC kernel and InputPlumber[^ogc][^ublue-future] | OSS | + |
| W3 | 2026-07/08 | Listed among top-10 most popular distros (alongside PikaOS, AnduinOS)[^top10] | OSS | + |

# OSS successes
- Collaboration over fragmentation (OGC) — rare in the distro world[^ogc].
- 9.1k GitHub stars (2026-10-03)[^gh]; fast growth among Windows-10 refugees and handheld owners.
# OSS failures / risks
- Structural dependence on Fedora decisions (32-bit episode)[^gol-32bit].
# Business successes
- n/a (community; hardware partners like Playtron/ASUS participate via OGC).
# Business failures / risks
- No revenue model; maintainers are volunteers.

# By window
## W3
- Popularity rankings top-10[^top10].
## W6
- No notable events found.
## W9
- OGC founded[^ogc].
## W12
- No notable events found.
## W24
- 32-bit crisis and resolution[^gol-32bit][^gol-withdrawn].

# Lessons
- Downstream distros should engage upstream policy early; a single upstream decision can be existential.
- Pooling kernel/input work across competing distros reduces duplicated maintenance.

# Related
- [CachyOS](/projects/end-user-apps/cachyos.md), [Valve](/organizations/valve.md), [Windows 10 EOL](/events/2025-10-windows-10-end-of-support.md)

[^gh]: https://github.com/ublue-os/bazzite
[^gol-32bit]: https://www.gamingonlinux.com/2025/06/bazzite-would-shut-down-if-fedora-goes-ahead-with-removing-32-bit/
[^gol-withdrawn]: https://www.gamingonlinux.com/2025/06/fedora-proposal-to-drop-32-bit-support-has-been-withdrawn/
[^ogc]: https://videocardz.com/newz/bazzite-and-asus-linux-shadowblip-pikaos-fyra-labs-launch-open-gaming-collective
[^ublue-future]: https://universal-blue.discourse.group/t/a-brighter-future-for-bazzite/11575
[^top10]: https://linux.how2shout.com/top-10-most-popular-linux-distributions-in-june-july-2026/
