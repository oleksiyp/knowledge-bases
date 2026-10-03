---
type: OSS Project
title: Logseq
description: "AGPL local-first outliner; after a long DB-version rewrite it split into maintenance-only 'Logseq OG' (Markdown) and a database-based Logseq whose 2.0 beta shipped in July 2026."
resource: https://github.com/logseq/logseq
tags: [notes, pkm, agpl-3.0, local-first, rewrite]
domain: end-user-apps
license: AGPL-3.0
license_history: ["AGPL-3.0"]
governance: single-vendor
steward: Logseq Inc.
backing_orgs: []
metrics:
  github_stars: { value: 45114, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: flat }
status: beta
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: split
    resource: https://logseq.io/page/b2ad9ce1-9cb7-4436-8083-54cb4516d324/df4dc09d-0a12-4c87-904e-22a9bf4c350a
    title: "Logseq: Logseq is splitting into two versions"
  - id: beta
    resource: https://github.com/logseq/logseq/releases
    title: "Logseq releases (2.0 beta, DB version)"
  - id: gh
    resource: https://github.com/logseq/logseq
    title: Logseq repository
  - id: silverbullet
    resource: https://silverbullet.md/
    title: "SilverBullet (Git-friendly alternative)"
---
# Summary
Logseq spent most of 2024–26 rewriting itself around a database backend, a slow transition that frustrated Markdown-file users and fed alternatives like SilverBullet[^silverbullet]. On 24 April 2026 it formally split: "Logseq OG" (file-based Markdown) moves to maintenance-only (security and framework updates) while the DB-based Logseq becomes the focus, with optional end-to-end-encrypted Logseq Sync and early access for $15/month Open Collective sponsors[^split]. The Logseq 2.0 beta (DB version) shipped in July 2026[^beta]. ~45k stars[^gh]. Verdict: OSS stable (risky transition), business stable but undisclosed.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-08 | Alternatives like SilverBullet gain attention amid slow DB rewrite[^silverbullet] | OSS | − |
| W6 | 2026-04-24 | Split into Logseq OG (maintenance) and DB-based Logseq[^split] | OSS | mixed |
| W3 | 2026-07-13 | Logseq 2.0 beta (DB version)[^beta] | OSS | + |

# OSS successes
- No forced migration; OG remains usable[^split].
# OSS failures / risks
- Multi-year rewrite stalled features and scattered users[^silverbullet].
# Business successes
- Sync service as monetization path[^split].
# Business failures / risks
- Pricing/revenue not public.

# By window
## W3
- 2.0 beta[^beta].
## W6
- Split announced[^split].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Rewrite delays (qualitative).

# Lessons
- Big storage-model rewrites in local-first apps should ship behind parallel products, as Logseq ultimately did.

# Related
- [Immich](/projects/end-user-apps/immich.md) (contrast: stable-release discipline)

[^split]: https://logseq.io/page/b2ad9ce1-9cb7-4436-8083-54cb4516d324/df4dc09d-0a12-4c87-904e-22a9bf4c350a
[^beta]: https://github.com/logseq/logseq/releases
[^gh]: https://github.com/logseq/logseq
[^silverbullet]: https://silverbullet.md/
