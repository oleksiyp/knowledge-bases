---
type: OSS Project
title: Home Assistant
description: "Local-first smart-home platform owned by the Open Home Foundation and funded by Nabu Casa's cloud/hardware sales; doubled to 2M active installs by 2025 and keeps winning, including an EU DMA decision forcing Android wake-word openness in 2026."
resource: https://github.com/home-assistant/core
tags: [smart-home, apache-2.0, foundation-hosted, self-hosting, local-first, hardware]
domain: end-user-apps
license: Apache-2.0
license_history: ["Apache-2.0 (2013-)"]
governance: foundation
steward: Open Home Foundation
backing_orgs: [organizations/open-home-foundation]
metrics:
  github_stars: { value: 91228, as_of: 2026-10-03 }
  active_installations: { value: 2000000, as_of: 2025-04-16 }
  households_claimed: { value: "2.7M+", as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/home-assistant/core
    title: Home Assistant core repository
  - id: sooh
    resource: https://www.home-assistant.io/blog/2025/04/16/state-of-the-open-home-recap/
    title: "Home Assistant: 2 million homes strong — State of the Open Home 2025"
  - id: r20255
    resource: https://www.home-assistant.io/blog/2025/05/07/release-20255/
    title: "Home Assistant 2025.5: Two million strong"
  - id: voice
    resource: https://www.home-assistant.io/voice-pe/
    title: "Home Assistant Voice Preview Edition"
  - id: ohf-announce
    resource: https://www.cnx-software.com/2024/04/23/open-home-foundation-manage-home-assistant-esphome-zigpy-over-240-open-source-smart-home-projects/
    title: "CNX Software: The Open Home Foundation will manage Home Assistant, ESPHome, Zigpy among 240+ projects (2024-04-23)"
  - id: r20269
    resource: https://www.home-assistant.io/blog/2026/09/02/release-20269/
    title: "Home Assistant 2026.9: There's room on this bus (2026-09-02)"
  - id: ha-home
    resource: https://www.home-assistant.io/
    title: "Home Assistant homepage ('Over 2.7 million households', checked 2026-10-03)"
  - id: sooh-2026
    resource: https://www.openhomefoundation.org/blog/building-whats-next-state-of-the-open-home-2026/
    title: "Open Home Foundation: Building what's next — State of the Open Home 2026 (2026-04-10)"
  - id: friesen-sooh
    resource: https://www.ajfriesen.com/state-of-the-open-home-2026/
    title: "AJ Friesen: State of the Open Home 2026 (attendee notes; ~70 OHF staff) (2026-04-14)"
  - id: dma
    resource: https://www.openhomefoundation.org/blog/a-big-win-for-android-interoperability/
    title: "Open Home Foundation: A big win for Android interoperability"
  - id: vw
    resource: https://github.com/robinostlund/homeassistant-volkswagencarnet/issues/967
    title: "Volkswagen blocks Home Assistant integration (issue #967)"
  - id: xiaomi
    resource: https://github.com/XiaoMi/ha_xiaomi_home
    title: "Xiaomi Home integration for Home Assistant (official)"
---
# Summary
Home Assistant is the domain's model success. Ownership of Home Assistant and 240+ related projects moved from Nabu Casa to the nonprofit Open Home Foundation in April 2024[^ohf-announce]; it reached 2 million active installations by April 2025 — double the prior year — with 21,000+ GitHub contributors in 2024 and 56 full-time people working on Open Home projects[^sooh][^r20255]. Funding comes primarily from Nabu Casa (Home Assistant Cloud subscriptions and hardware such as the Voice Preview Edition launched Dec 2024)[^voice][^sooh], deliberately avoiding VC ("By avoiding the startup model, we can ensure we are under no pressure to compromise on our mission")[^sooh]. Vendors increasingly ship official integrations (Xiaomi, Dec 2024)[^xiaomi], though some lock it out (Volkswagen, May 2026)[^vw]. By Oct 2026 the project's homepage claimed "over 2.7 million households"[^ha-home], and the State of the Open Home 2026 (Apr 10, Utrecht) added a community department and a public roadmap, with attendees reporting about 70 people now working at the foundation[^sooh-2026][^friesen-sooh]. Nabu Casa publishes no revenue figures and has no outside investors. On 16 July 2026 a European Commission DMA decision required Google to open Android wake-word DSP access and other features — directly enabling "Okay Nabu" on Android[^dma]. Verdict: thriving OSS and business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-16 | Xiaomi releases official HA integration[^xiaomi] | OSS | + |
| W24 | 2024-12-19 | Home Assistant Voice Preview Edition hardware[^voice] | Business | + |
| W24 | 2025-04-16 | 2M active installations; 56 FTEs across Open Home projects[^sooh] | OSS | + |
| W6 | 2026-04-10 | State of the Open Home 2026: community department, public roadmap; ~70 staff[^sooh-2026][^friesen-sooh] | OSS | + |
| W6 | 2026-05-29 | Volkswagen blocks third-party HA integration via client assertion[^vw] | OSS | − |
| W3 | 2026-07-16 | EU DMA decision forces Android to open wake-word DSP etc.; OHF hails win[^dma] | OSS | + |
| W3 | 2026-09-02 | Home Assistant 2026.9 released[^r20269] | OSS | + |
| W3 | 2026-10 | Homepage claims 2.7M+ households (vs 2M installs Apr 2025)[^ha-home][^sooh] | OSS | + |

# OSS successes
- 91k GitHub stars (2026-10-03) and one of the largest contributor bases in OSS[^gh][^sooh].
- Monthly releases with consistent quality; strong local-voice program.
# OSS failures / risks
- Cloud-API vendors can cut off integrations (VW)[^vw].
# Business successes
- Nabu Casa profit-sharing funds the Foundation; hardware line expanding[^sooh].
# Business failures / risks
- Concentrated reliance on Nabu Casa's subscription base. Nabu Casa publishes no revenue or subscriber figures; aggregator estimates (~$4M revenue) are unverified and look implausibly low for ~70 funded staff.

# By window
## W3
- DMA Android win; 2026.9; 2.7M+ households claimed[^dma][^r20269][^ha-home].
## W6
- State of the Open Home 2026 (Apr 10); VW lockout[^sooh-2026][^vw].
## W9
- No notable events found (steady releases).
## W12
- No notable events found (steady releases).
## W24
- 2M installs; Voice PE; Xiaomi integration[^sooh][^voice][^xiaomi].

# Lessons
- A nonprofit-owned project with a profitable, mission-aligned service company is a durable structure.
- Regulation (DMA) can be a lever for open ecosystems against platform gatekeepers.

# Related
- [Open Home Foundation](/organizations/open-home-foundation.md), [F-Droid](/projects/end-user-apps/f-droid.md) (Android gatekeeping)

[^gh]: https://github.com/home-assistant/core
[^sooh]: https://www.home-assistant.io/blog/2025/04/16/state-of-the-open-home-recap/
[^r20255]: https://www.home-assistant.io/blog/2025/05/07/release-20255/
[^voice]: https://www.home-assistant.io/voice-pe/
[^ohf-announce]: https://www.cnx-software.com/2024/04/23/open-home-foundation-manage-home-assistant-esphome-zigpy-over-240-open-source-smart-home-projects/
[^r20269]: https://www.home-assistant.io/blog/2026/09/02/release-20269/
[^ha-home]: https://www.home-assistant.io/
[^sooh-2026]: https://www.openhomefoundation.org/blog/building-whats-next-state-of-the-open-home-2026/
[^friesen-sooh]: https://www.ajfriesen.com/state-of-the-open-home-2026/
[^dma]: https://www.openhomefoundation.org/blog/a-big-win-for-android-interoperability/
[^vw]: https://github.com/robinostlund/homeassistant-volkswagencarnet/issues/967
[^xiaomi]: https://github.com/XiaoMi/ha_xiaomi_home
