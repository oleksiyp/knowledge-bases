---
type: Event
title: NocoDB leaves AGPL for a Sustainable Use License
description: "Effective 9 Jan 2026 (v0.301.0), NocoDB — the most-starred open-source Airtable alternative — relicensed from AGPL-3.0 to an n8n-style Sustainable Use License that bans offering it as a managed service, then gated new features behind enterprise keys."
event_kind: license-change
date: 2026-01-09
window: W9
impact: negative
projects: [projects/web-platforms/nocodb]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lic
    resource: https://nocodb.com/docs/self-hosting/license
    title: "NocoDB docs: License (Sustainable Use License, effective 2026-01-09)"
  - id: gh
    resource: https://github.com/nocodb/nocodb
    title: "NocoDB repository (commit 'chore: change to sustainable use license', 2026-01-08)"
  - id: cloudron
    resource: https://forum.cloudron.io/topic/14918/heads-up-nocodb-is-no-longer-open-source.
    title: "Cloudron forum: NocoDB is no longer open source (2026-01-20)"
  - id: bex
    resource: https://bex.co/blog/2026/08/17/nocodb-enterprise-gate-open-core-trust-test
    title: "Bex: NocoDB's enterprise gate is the third warning (2026-08-17)"
---
# What happened
NocoDB replaced AGPL-3.0 with a Sustainable Use License (SUL) effective 9 January 2026, starting with v0.301.0: free internal use and self-hosting, but no offering NocoDB as a paid/managed service or redistributing it inside a commercial platform without a license[^lic][^gh]. The founder cited "bad actors" reselling NocoDB and AI lowering the skill needed to do so[^cloudron].

# Why it matters
It shows AGPL is no longer seen as sufficient protection against SaaS resale, and that n8n's fair-code license has become a template. A 65K-star project left the OSI-open category.

# Outcome so far
Releases 2026.06 and 2026.07 placed features such as NocoDB Sync, document version history and calendar sync behind enterprise keys[^bex]. No major community fork had emerged by Oct 2026 (based on searches).

# Related
- [NocoDB](/projects/web-platforms/nocodb.md), [n8n](/projects/ai-agents/n8n.md), [Directus MSCL relicense](/events/2026-04-directus-mscl-relicense.md), [Cal.com goes closed source](/events/2026-04-cal-com-goes-closed-source.md)

[^lic]: https://nocodb.com/docs/self-hosting/license
[^gh]: https://github.com/nocodb/nocodb
[^cloudron]: https://forum.cloudron.io/topic/14918/heads-up-nocodb-is-no-longer-open-source.
[^bex]: https://bex.co/blog/2026/08/17/nocodb-enterprise-gate-open-core-trust-test
