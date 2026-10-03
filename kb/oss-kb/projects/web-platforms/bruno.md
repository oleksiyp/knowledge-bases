---
type: OSS Project
title: Bruno
description: "MIT, Git-native, offline-first API client from Bengaluru that became the default Postman exit: 26K→40K stars and ~250K→600K+ monthly users in 2025, v3 (Jan 2026) and an AI-centric v4 (July 2026), boosted when Postman's free plan dropped to one user (Mar 2026)."
resource: https://github.com/usebruno/bruno
tags: [api-client, devtools, mit, offline-first, postman-alternative, bootstrapped]
domain: web-platforms
license: MIT (core app, .bru format, CLI); paid Pro/Ultimate editions
license_history: ["MIT"]
governance: single-vendor
steward: Bruno (Anoop M D and team)
backing_orgs: []
metrics:
  github_stars: { value: 47326, as_of: 2026-10-03 }
  monthly_active_users: { value: "600K+", as_of: 2025-12 }
  team_size: { value: 23, as_of: 2025-12 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/usebruno/bruno
    title: Bruno GitHub repository (releases)
  - id: state24
    resource: https://blog.usebruno.com/bruno-update
    title: "Bruno: State of Bruno updates (2024-12-09; Golden Edition sunset)"
  - id: y2025
    resource: https://blog.usebruno.com/bruno-2025-from-idea-to-daily-driver
    title: "Bruno: Bruno's 2025 — a year of relentless shipping"
  - id: v3
    resource: https://www.usebruno.com/v3-release
    title: "Bruno v3 release notes & breaking changes"
  - id: v4
    resource: https://secburg.com/posts/bruno-v400-released/
    title: "Bruno v4.0.0 released (2026-07-23)"
  - id: postman
    resource: https://yaak.app/blog/postman-free-plan-one-user
    title: "Yaak: Postman's free plan is now one user"
  - id: insomnia
    resource: https://github.com/Kong/insomnia
    title: "Kong/insomnia repository (Apache-2.0; local/Git/cloud storage)"
---
# Summary
Bruno is the clearest *bottom-up* OSS devtool success of the window. It stores collections as plain-text files in Git, with no cloud account required. In Dec 2024 it sunset its one-off "Golden Edition" for Pro/Ultimate subscriptions while moving gRPC/WebSocket/MQTT into the MIT core[^state24]. In 2025 monthly active users grew from ~250K to **600K+**, GitHub stars from 26K to 40K, and the team from 6 to 23, with 70+ releases[^y2025]. **v3 (5 Jan 2026)** refreshed the UI, added YAML collections and freed formerly paid features[^v3]; **v4 (23 July 2026)** added AI chat/autocomplete and API docs generation[^v4][^gh]. Postman's **1 March 2026 change limiting its free plan to one user** pushed more teams toward Bruno[^postman]. Kong's Insomnia — whose 2023 forced-account backlash first seeded Bruno's growth — remains Apache-2.0 with optional local/Git storage[^insomnia]. Verdict: OSS thriving; business growing (no outside funding disclosed).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-09 | Golden Edition sunset → Pro/Ultimate; more features into OSS[^state24] | Business | ± |
| W24–W12 | 2025 | 250K → 600K+ MAU; 26K → 40K stars; team 6 → 23[^y2025] | OSS | + |
| W9 | 2026-01-05 | Bruno v3[^v3] | OSS | + |
| W9 | 2026-03-01 | Postman free plan limited to 1 user[^postman] | Business | + |
| W3 | 2026-07-23 | Bruno v4 (AI features)[^v4] | OSS | + |
| W3 | 2026-09-30 | v4.2.1[^gh] | OSS | + |

# OSS successes
- Moving paid features *into* the MIT core while growing revenue[^state24][^v3].
# OSS failures / risks
- AI features may tilt toward paid tiers; fast release cadence introduces breaking changes (v3)[^v3].
# Business successes
- Organic growth from incumbent missteps (Insomnia 2023, Postman 2026)[^postman].
# Business failures / risks
- Golden Edition buyers saw a perpetual-license model replaced by subscriptions[^state24].

# By window
## W3
- v4 launch[^v4].
## W6
- Monthly cadence of v3.x releases[^gh].
## W9
- v3; Postman free-plan cut[^v3][^postman].
## W12
- 2025 growth recap[^y2025].
## W24
- Pricing reset[^state24].

# Lessons
- Local-first, file-based OSS tools win when SaaS incumbents force accounts or cut free tiers.

# Related
- [Hoppscotch](/projects/web-platforms/hoppscotch.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/usebruno/bruno
[^state24]: https://blog.usebruno.com/bruno-update
[^y2025]: https://blog.usebruno.com/bruno-2025-from-idea-to-daily-driver
[^v3]: https://www.usebruno.com/v3-release
[^v4]: https://secburg.com/posts/bruno-v400-released/
[^postman]: https://yaak.app/blog/postman-free-plan-one-user
[^insomnia]: https://github.com/Kong/insomnia
