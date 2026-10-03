---
type: OSS Project
title: Jellyfin
description: "Volunteer-run, GPL media server (Plex/Emby alternative); delivered the big 10.11 database refactor and Jellyfin 12.0, but lost its project leader and core members to burnout in July 2026."
resource: https://github.com/jellyfin/jellyfin
tags: [self-hosting, media-server, gpl-2.0, community, volunteer]
domain: end-user-apps
license: GPL-2.0
license_history: ["GPL-2.0 (2018 fork of Emby)"]
governance: community
steward: Jellyfin project (volunteers)
backing_orgs: []
metrics:
  github_stars: { value: 57724, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/jellyfin/jellyfin
    title: Jellyfin GitHub repository
  - id: sotf
    resource: https://jellyfin.org/posts/state-of-the-fin-2026-01-06/
    title: "Jellyfin: State of the Fin 2026-01-06"
  - id: llm
    resource: https://jellyfin.org/docs/general/contributing/llm-policies/
    title: "Jellyfin LLM/AI development policy"
  - id: leaders
    resource: https://forum.jellyfin.org/t-project-leadership-changes
    title: "Jellyfin forum: Project leadership changes"
  - id: v12
    resource: https://jellyfin.org/posts/jellyfin-release-12.0/
    title: "Jellyfin 12.0 release"
  - id: jf-1011
    resource: https://jellyfin.org/posts/jellyfin-release-10.11.0/
    title: "Jellyfin blog: Jellyfin 10.11.0 (2025-10-20)"
  - id: alt-1011
    resource: https://alternativeto.net/news/2025/10/jellyfin-10-11-migrates-to-ef-core-boosts-speed-drops-32-bit-arm-support
    title: "AlternativeTo: Jellyfin 10.11 migrates to EF Core, drops 32-bit ARM (2025-10)"
  - id: jf-sotf
    resource: https://jellyfin.org/posts/state-of-the-fin-2026-01-06/
    title: "Jellyfin blog: State of the Fin 2026-01-06"
---
# Summary
Jellyfin is the leading fully-free media server and a beneficiary of Plex's price increases and account requirements. Version 10.11 (20 Oct 2025) delivered a long-delayed EF Core refactor consolidating library.db into a single jellyfin.db and dropped ARM32[^jf-1011][^alt-1011]; version numbering jumped to 12.0 (Sept 2026)[^v12]. In January 2026 it adopted an explicit LLM/AI contribution policy[^llm]. Effective 19 July 2026 project leader Joshua Boniface and core member Anthony stepped down (Joshua citing burnout), following another long-time member's resignation[^leaders] — a reminder of volunteer fragility. Verdict: OSS stable; no business entity.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-20 | 10.11.0: EF Core DB refactor, ARM32 dropped[^jf-1011] | OSS | + |
| W12 | 2026-01-06 | State of the Fin update[^sotf] | OSS | + |
| W9 | 2026-01-28 | LLM/AI development policy[^llm] | OSS | + |
| W3 | 2026-07-19/20 | Project leader and core member step down (burnout, life changes)[^leaders] | OSS | − |
| W3 | 2026-09-08 | Jellyfin 12.0 released[^v12] | OSS | + |

# OSS successes
- 57.7k stars (2026-10-03)[^gh]; big architectural refactor shipped.
# OSS failures / risks
- Leadership loss to burnout[^leaders]; 10.11 migration caused regressions requiring many point releases[^jf-sotf][^jf-1011].
# Business successes
- n/a (donations only; no company).
# Business failures / risks
- No paid staff; all maintenance volunteer.

# By window
## W3
- Leadership change; 12.0[^leaders][^v12].
## W6
- 10.11.x maintenance releases (no notable events).
## W9
- AI contribution policy[^llm].
## W12
- 10.11 release[^jf-1011].
## W24
- Gains from Plex dissatisfaction (qualitative).

# Lessons
- Purely volunteer projects at Jellyfin's scale need succession planning; burnout is the main risk.

# Related
- [Immich](/projects/end-user-apps/immich.md), [Nextcloud](/projects/end-user-apps/nextcloud.md)

[^gh]: https://github.com/jellyfin/jellyfin
[^sotf]: https://jellyfin.org/posts/state-of-the-fin-2026-01-06/
[^llm]: https://jellyfin.org/docs/general/contributing/llm-policies/
[^leaders]: https://forum.jellyfin.org/t-project-leadership-changes
[^v12]: https://jellyfin.org/posts/jellyfin-release-12.0/
[^jf-1011]: https://jellyfin.org/posts/jellyfin-release-10.11.0/
[^alt-1011]: https://alternativeto.net/news/2025/10/jellyfin-10-11-migrates-to-ef-core-boosts-speed-drops-32-bit-arm-support
[^jf-sotf]: https://jellyfin.org/posts/state-of-the-fin-2026-01-06/
