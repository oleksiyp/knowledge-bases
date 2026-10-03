---
type: Event
title: Zitadel relicenses from Apache-2.0 to AGPL-3.0 with v3
description: "Announced 13 Mar 2025 and effective with Zitadel v3.0 on 31 Mar 2025, the identity platform moved its core, console and hosted login to AGPL-3.0 while keeping APIs, SDKs and Helm charts Apache-2.0."
event_kind: license-change
date: 2025-03-31
window: W24
impact: mixed
projects: [projects/web-platforms/zitadel]
organizations: [organizations/zitadel]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: agpl
    resource: https://zitadel.com/blog/apache-to-agpl
    title: "Zitadel: Strengthening our open source foundation — moving to AGPL 3.0 (2025-03-13)"
  - id: disc
    resource: https://github.com/zitadel/zitadel/discussions/9529
    title: "GitHub: Key changes in version 3"
  - id: v3rel
    resource: https://github.com/zitadel/zitadel/releases/tag/v3.0.0
    title: "Zitadel v3.0.0 release"
---
# What happened
Zitadel announced on 13 March 2025 that, from v3.0 (31 March 2025), the core backend, Console and Hosted Login would be licensed AGPL-3.0; proto definitions, APIs, SDKs, examples, docs and Helm/Terraform stayed Apache-2.0[^agpl][^v3rel]. v3 also streamlined releases and standardised on PostgreSQL[^disc].

# Why it matters
It is the "OSI-safe" relicensing path also taken by Redis (2025): AGPL forces service providers that modify the code to share changes, without leaving open source. The company framed it as "code or contribution"[^agpl].

# Outcome so far
Limited backlash; Zitadel continued to v4.x with quarterly majors. End users who do not modify the server are unaffected[^agpl].

# Related
- [Zitadel](/projects/web-platforms/zitadel.md), [Zitadel (org)](/organizations/zitadel.md)
- [Redis AGPLv3 relicense](/events/2025-05-redis-agplv3-relicense.md), [NocoDB SUL relicense](/events/2026-01-nocodb-sustainable-use-license.md)

[^agpl]: https://zitadel.com/blog/apache-to-agpl
[^disc]: https://github.com/zitadel/zitadel/discussions/9529
[^v3rel]: https://github.com/zitadel/zitadel/releases/tag/v3.0.0
