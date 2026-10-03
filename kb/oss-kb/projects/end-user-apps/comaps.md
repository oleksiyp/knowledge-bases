---
type: OSS Project
title: CoMaps (Organic Maps fork)
description: "Community-governed fork of Organic Maps created in 2025 after disputes over KAYAK affiliate links, a hidden server component and shareholder control; by 2026 it had its own momentum, including use by rescuers in Venezuela."
resource: https://www.comaps.app
tags: [maps, openstreetmap, apache-2.0, fork, community-governance, offline]
domain: end-user-apps
license: Apache-2.0
license_history: ["Apache-2.0 (inherited from Organic Maps/MAPS.ME)"]
governance: community
steward: CoMaps community (Open Collective)
backing_orgs: []
metrics:
  codeberg_stars: { value: 2130, as_of: 2026-10-03 }
  github_stars_comaps_mirror: { value: 568, as_of: 2026-10-03 }
  github_stars_organicmaps: { value: 15551, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lwn
    resource: https://lwn.net/Articles/1024387/
    title: "LWN: CoMaps emerges as an Organic Maps fork"
    author: org:lwn
  - id: mapsme
    resource: https://github.com/orgs/organicmaps/discussions/9837
    title: "Organic Maps discussion: MAPS.ME co-founder tries to close down Organic Maps"
  - id: forgejo
    resource: https://mastodon.social/@organicmaps/114233788700982882
    title: "Organic Maps migrates to Forgejo after GitHub account blocked"
  - id: fork
    resource: https://www.comaps.app/news/2025-05-12/3/
    title: "CoMaps: A community-led fork of Organic Maps"
  - id: launch
    resource: https://www.comaps.app/news/2025-07-03/Announcing-Navigate-with-Privacy-Discover-more-of-your-journey/
    title: "CoMaps: Announcing CoMaps navigation app"
  - id: hot
    resource: https://hotosm.org/en/news/comaps-the-offline-app-that-guided-rescuers-without-a-signal-in-the-venezuela-response/
    title: "HOT: CoMaps, the offline app that guided rescuers without a signal in Venezuela"
  - id: floss
    resource: https://www.comaps.app/news/2026-08-23/comaps-integration-with-the-wider-floss-ecosystem/
    title: "CoMaps: Integration with the wider FLOSS ecosystem"
  - id: open-letter
    resource: https://www.comaps.app/news/2025-04-16/1/
    title: "CoMaps: Open letter to Organic Maps shareholders (2025-04-16)"
  - id: codeberg
    resource: https://codeberg.org/comaps/comaps
    title: "CoMaps Codeberg repository (created 2025-04-13; releases through v2026.09.23)"
---
# Summary
CoMaps is the domain's clearest governance-driven fork. Organic Maps (itself a MAPS.ME fork) faced turmoil: a MAPS.ME co-founder's attempt to shut it down (Dec 2024)[^mapsme], a GitHub account block that pushed it to Forgejo (Mar 2025)[^forgejo], and contributor anger over KAYAK referral links merged without consultation (Nov 2023), a secret server component, and opaque finances controlled by an Estonian company owned by two shareholders[^lwn]. After an open letter (16 Apr 2025) went unanswered, contributors forked as CoMaps: the Codeberg repo was created on 13 Apr, donations opened via Open Collective by end of April, and the fork was publicly announced on 12 May 2025[^open-letter][^codeberg][^lwn][^fork]. The app launched in July 2025[^launch], and releases kept coming through v2026.09.23 (including a release tagged "car"), with ~2.1k Codeberg stars by Oct 2026[^codeberg]. By Aug 2026, CoMaps was credited by the Humanitarian OpenStreetMap Team with guiding rescuers without signal in Venezuela, and was integrating with the wider FLOSS ecosystem[^hot][^floss]. Organic Maps continues (15.5k GitHub stars, 2026-10-03). Verdict: fork growing; no business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-06 | MAPS.ME co-founder tries to close Organic Maps[^mapsme] | OSS | − |
| W24 | 2025-03-30 | Organic Maps moves to Forgejo after GitHub block[^forgejo] | OSS | − |
| W24 | 2025-04-16 | Open letter demanding governance/transparency[^open-letter][^lwn] | OSS | − |
| W24 | 2025-04-13 → 05-12 | CoMaps repo created (Apr 13); fork publicly announced (May 12); name confirmed May 20[^codeberg][^fork][^lwn] | OSS | + |
| W24 | 2025-07-03 | CoMaps app launch[^launch] | OSS | + |
| W3 | 2026-08-23 | FLOSS ecosystem integration update[^floss] | OSS | + |
| W3 | 2026-08-26 | HOT: CoMaps used by Venezuela rescuers[^hot] | OSS | + |
| W3 | 2026-09-23 | v2026.09.23 release incl. car build[^codeberg] | OSS | + |

# OSS successes
- Transparent, community-owned governance and real-world humanitarian use[^hot].
# OSS failures / risks
- Split community and duplicated effort across Organic Maps, CoMaps and OsmAnd.
# Business successes
- n/a.
# Business failures / risks
- Organic Maps' attempted monetization (affiliate links) is what triggered the fork[^lwn].

# By window
## W3
- Humanitarian use; ecosystem integration[^hot][^floss].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Disputes, fork, launch[^lwn][^fork][^launch].

# Lessons
- When a small set of shareholders controls trademarks and money of a community project, contributors will fork once trust breaks.

# Related
- [CoMaps fork event](/events/2025-04-comaps-fork-organic-maps.md), [F-Droid](/projects/end-user-apps/f-droid.md)

[^lwn]: https://lwn.net/Articles/1024387/
[^open-letter]: https://www.comaps.app/news/2025-04-16/1/
[^codeberg]: https://codeberg.org/comaps/comaps
[^mapsme]: https://github.com/orgs/organicmaps/discussions/9837
[^forgejo]: https://mastodon.social/@organicmaps/114233788700982882
[^fork]: https://www.comaps.app/news/2025-05-12/3/
[^launch]: https://www.comaps.app/news/2025-07-03/Announcing-Navigate-with-Privacy-Discover-more-of-your-journey/
[^hot]: https://hotosm.org/en/news/comaps-the-offline-app-that-guided-rescuers-without-a-signal-in-the-venezuela-response/
[^floss]: https://www.comaps.app/news/2026-08-23/comaps-integration-with-the-wider-floss-ecosystem/
