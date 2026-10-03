---
type: OSS Project
title: PocketBase
description: "Single-binary Go backend (SQLite + auth + realtime + admin UI) maintained essentially by one developer; hugely popular (61K stars) and shipped a rewritten UI (v0.37, Apr 2026), but lost a promised FLOSS/fund grant in Feb 2026 and is still pre-1.0."
resource: https://github.com/pocketbase/pocketbase
tags: [baas, go, sqlite, mit, solo-maintainer, sustainability]
domain: web-platforms
license: MIT
license_history: ["MIT"]
governance: community
steward: Gani Georgiev (solo maintainer)
backing_orgs: []
metrics:
  github_stars: { value: 61252, as_of: 2026-10-03 }
  latest_release: { value: "v0.40.4", as_of: 2026-09-12 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: down, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/pocketbase/pocketbase
    title: PocketBase GitHub repository
  - id: floss
    resource: https://github.com/pocketbase/pocketbase/discussions/7287
    title: "GitHub discussion: (Cancelled) FLOSS/fund sponsorship and UI rewrite"
  - id: flossdir
    resource: https://dir.floss.fund/view/funding/@pocketbase.io
    title: "FLOSS/fund: funding plan for Gani Georgiev / PocketBase"
  - id: ui
    resource: https://github.com/pocketbase/pocketbase/discussions/7612
    title: "GitHub discussion: Upcoming new UI release and planned UI extension APIs"
  - id: hn
    resource: https://x.com/betterhn20/status/2024188163158147184
    title: "Hacker News 20 (X): PocketBase lost its funding from FLOSS fund"
---
# Summary
PocketBase is the indie developer's favourite backend: one Go binary bundling SQLite, auth, file storage, realtime and an admin UI, MIT-licensed and with more GitHub stars (61K) than VC-backed Appwrite (57.5K)[^gh]. On 28 Oct 2025 **FLOSS/fund (Zerodha) announced a grant** meant to let the maintainer work full-time toward a stable release by end-2026; in **Feb 2026 it was retracted** over "unforeseen regulatory constraints" around cross-border transfers[^floss][^flossdir][^hn]. The maintainer shipped the rewritten admin UI anyway (**v0.37, Apr 2026**) and continued to v0.40 (Sept 2026), but 1.0 has no firm date[^ui][^gh]. Verdict: OSS growing; bus-factor-one sustainability risk.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-28 | FLOSS/fund grant announced[^floss] | OSS | + |
| W9 | 2026-02 | Grant retracted (regulatory constraints)[^floss][^hn] | OSS | − |
| W6 | 2026-04 | v0.37 rewritten UI (dark mode, ERD view, extension groundwork)[^ui] | OSS | + |
| W3 | 2026-09-12 | v0.40.4[^gh] | OSS | + |

# OSS successes
- Exceptional adoption for a solo project; steady releases[^gh].
# OSS failures / risks
- Single maintainer; funding fell through[^floss]; still pre-1.0 with breaking changes between minors.
# Business successes
- n/a — no company; donations/sponsorships only.
# Business failures / risks
- The FLOSS/fund episode shows how fragile cross-border OSS grants are[^floss].

# By window
## W3
- v0.39–v0.40 releases[^gh].
## W6
- New UI (v0.37)[^ui].
## W9
- FLOSS/fund grant withdrawn[^floss].
## W12
- Grant announced[^flossdir].
## W24
- No notable events found (steady 0.2x releases).

# Lessons
- Popularity does not fund maintainers; even committed philanthropic funders hit payment-rail and regulatory limits.

# Related
- [Appwrite](/projects/web-platforms/appwrite.md), [Supabase](/projects/databases/supabase.md)
- [Open Source Pledge](/projects/security-sustainability/open-source-pledge.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/pocketbase/pocketbase
[^floss]: https://github.com/pocketbase/pocketbase/discussions/7287
[^flossdir]: https://dir.floss.fund/view/funding/@pocketbase.io
[^ui]: https://github.com/pocketbase/pocketbase/discussions/7612
[^hn]: https://x.com/betterhn20/status/2024188163158147184
