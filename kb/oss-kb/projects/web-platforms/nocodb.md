---
type: OSS Project
title: NocoDB
description: "Most-starred open-source Airtable alternative (65K stars) that left AGPL-3.0 for a non-OSI 'Sustainable Use License' (n8n-style fair-code) on 9 Jan 2026 and then moved new features behind enterprise keys — a W9 relicensing that ended its OSI status."
resource: https://github.com/nocodb/nocodb
tags: [no-code, airtable-alternative, source-available, sustainable-use-license, relicensing, fair-code]
domain: web-platforms
license: Sustainable Use License (source-available, not OSI)
license_history: ["AGPL-3.0 (to 2026-01)", "Sustainable Use License (v0.301.0, 2026-01-09-)"]
governance: single-vendor
steward: NocoDB, Inc.
backing_orgs: []
metrics:
  github_stars: { value: 65166, as_of: 2026-10-03 }
  latest_release: { value: "2026.09.1", as_of: 2026-09-29 }
oss_verdict: contested
business_verdict: stable
momentum_by_window: { W3: flat, W6: down, W9: down, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/nocodb/nocodb
    title: NocoDB GitHub repository (LICENSE updated 2026-01-29)
  - id: lic
    resource: https://nocodb.com/docs/self-hosting/license
    title: "NocoDB docs: License (Sustainable Use License, effective 2026-01-09)"
  - id: cloudron
    resource: https://forum.cloudron.io/topic/14918/heads-up-nocodb-is-no-longer-open-source.
    title: "Cloudron forum: Heads up — NocoDB is no longer open source (2026-01-20)"
  - id: rel
    resource: https://newreleases.io/project/github/nocodb/nocodb/release/0.301.0
    title: "NocoDB 0.301.0 release (first SUL release)"
  - id: bex
    resource: https://bex.co/blog/2026/08/17/nocodb-enterprise-gate-open-core-trust-test
    title: "Bex: NocoDB's enterprise gate is the third warning (2026-08-17)"
---
# Summary
NocoDB was the poster child of OSS "Airtable alternatives" (65K stars)[^gh]. On **9 Jan 2026** (commit "chore: change to sustainable use license", 8 Jan; release 0.301.0) it relicensed from **AGPL-3.0 to a Sustainable Use License** modelled on n8n's fair-code license: internal self-hosting stays free, but offering NocoDB as a managed service or embedding it in a commercial platform needs a commercial license[^lic][^rel][^gh]. The founder cited "bad actors" reselling NocoDB and AI making that easier[^cloudron]. Subsequent releases (2026.06–2026.07) put features such as NocoDB Sync, document version history and calendar sync behind **enterprise license keys**[^bex]. Verdict: OSS contested (no longer OSI open source); business stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-01-09 | AGPL-3.0 → Sustainable Use License (v0.301.0)[^lic][^rel] | OSS | − |
| W9 | 2026-01-20 | Cloudron community flags "no longer open source"[^cloudron] | OSS | − |
| W6–W3 | 2026-06/07 | New features gated by enterprise key (2026.06, 2026.07)[^bex] | Business | − |
| W3 | 2026-08-04 | Bending Spoons agrees to buy Airtable for $1.285B — the incumbent NocoDB clones (see event) | Business | ± |

# OSS successes
- Source remains available; self-hosting for internal use unrestricted[^lic].
# OSS failures / risks
- Lost OSI status; contributors' AGPL work now under a restrictive license[^cloudron]; no prominent fork found as of Oct 2026.
# Business successes
- Closes the hosting-reseller loophole AGPL left open (AGPL allows SaaS resale if source is shared)[^lic].
# Business failures / risks
- Trust erosion and "third warning" commentary on enterprise gating[^bex]; competitors Baserow (MIT core) and Teable (AGPL core) pitch as the open option.

# By window
## W3
- Continued enterprise gating[^bex]; Airtable acquisition context.
## W6
- Enterprise-only features in 2026.06[^bex].
## W9
- Relicense to SUL[^lic].
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- AGPL does not stop SaaS resale when resellers publish source; vendors who want that protection move to fair-code/source-available licenses.
- n8n's Sustainable Use License has become a template for other COSS companies.

# Related
- [NocoDB SUL relicense event](/events/2026-01-nocodb-sustainable-use-license.md)
- [Baserow](/projects/web-platforms/baserow.md), [Grist](/projects/web-platforms/grist.md), [Directus](/projects/web-platforms/directus.md), [n8n](/projects/ai-agents/n8n.md)
- [Bending Spoons acquires Airtable](/events/2026-08-bending-spoons-acquires-airtable.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/nocodb/nocodb
[^lic]: https://nocodb.com/docs/self-hosting/license
[^cloudron]: https://forum.cloudron.io/topic/14918/heads-up-nocodb-is-no-longer-open-source.
[^rel]: https://newreleases.io/project/github/nocodb/nocodb/release/0.301.0
[^bex]: https://bex.co/blog/2026/08/17/nocodb-enterprise-gate-open-core-trust-test
