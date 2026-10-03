---
type: Event
title: CoMaps forks Organic Maps over governance and monetization
description: "In April–May 2025 (repo created Apr 13, public announcement May 12) Organic Maps contributors forked the offline maps app as CoMaps after disputes over KAYAK affiliate links, a hidden server component and shareholder-controlled finances."
event_kind: fork
date: 2025-05-12
window: W24
impact: mixed
projects: [projects/end-user-apps/comaps]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lwn
    resource: https://lwn.net/Articles/1024387/
    title: "LWN: CoMaps emerges as an Organic Maps fork"
    author: org:lwn
  - id: fork
    resource: https://www.comaps.app/news/2025-05-12/3/
    title: "CoMaps: A community-led fork of Organic Maps"
  - id: launch
    resource: https://www.comaps.app/news/2025-07-03/Announcing-Navigate-with-Privacy-Discover-more-of-your-journey/
    title: "CoMaps: launch announcement"
  - id: open-letter
    resource: https://www.comaps.app/news/2025-04-16/1/
    title: "CoMaps: Open letter to Organic Maps shareholders (2025-04-16)"
  - id: codeberg
    resource: https://codeberg.org/comaps/comaps
    title: "CoMaps Codeberg repository (created 2025-04-13; ~2.1k stars Oct 2026)"
  - id: hn-fork
    resource: https://news.ycombinator.com/item?id=43961908
    title: "Hacker News: A community-led fork of Organic Maps (2025-05-12)"
  - id: hot
    resource: https://hotosm.org/en/news/comaps-the-offline-app-that-guided-rescuers-without-a-signal-in-the-venezuela-response/
    title: "HOT: CoMaps guided rescuers in Venezuela"
---
# What happened
Contributors first sent their concerns to Organic Maps' shareholders privately on Mar 21, 2025, then published an open letter on Apr 16, 2025 demanding formal governance, financial transparency and an end to proprietary components.[^open-letter][^lwn] While waiting for a reply they prepared a fork: the Codeberg repository was created on Apr 13, 2025, code and Open Collective donations were in place by the end of April, and the fork was publicly announced on May 12, 2025. The name CoMaps was confirmed by a vote that ended May 20.[^codeberg][^fork][^hn-fork][^lwn] (Corrected in pass 2: event date 2025-04-28 (approximate) → 2025-05-12 (public announcement); KAYAK links were merged in Nov 2023, not Nov 2024.) Grievances included KAYAK referral links merged in Nov 2023 without consultation, a secret server component disclosed in Dec 2024, and an Estonian company owned by two shareholders controlling trademarks and finances[^lwn]. CoMaps launched its app on 3 July 2025[^launch].

# Why it matters
A textbook "community vs. owners" fork in end-user software, showing that permissive licenses plus contributor alienation make forks cheap.

# Outcome so far
CoMaps established itself, shipping regular releases (e.g., v2026.09.23, including a build tagged "car") and reaching ~2.1k stars on Codeberg[^codeberg]; by Aug 2026 the Humanitarian OpenStreetMap Team credited it with guiding rescuers without signal in Venezuela[^hot]. Organic Maps continues in parallel.

# Related
- [CoMaps](/projects/end-user-apps/comaps.md)

[^lwn]: https://lwn.net/Articles/1024387/
[^fork]: https://www.comaps.app/news/2025-05-12/3/
[^launch]: https://www.comaps.app/news/2025-07-03/Announcing-Navigate-with-Privacy-Discover-more-of-your-journey/
[^open-letter]: https://www.comaps.app/news/2025-04-16/1/
[^codeberg]: https://codeberg.org/comaps/comaps
[^hn-fork]: https://news.ycombinator.com/item?id=43961908
[^hot]: https://hotosm.org/en/news/comaps-the-offline-app-that-guided-rescuers-without-a-signal-in-the-venezuela-response/
