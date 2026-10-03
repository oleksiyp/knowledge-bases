---
type: Organization
title: Collabora Productivity
description: "UK-based open source consultancy behind Collabora Online and the largest LibreOffice code contributor (~43% of recent patches); after TDF expelled its staff from membership in April 2026 it announced a separate, cut-down Collabora Office."
resource: https://www.collaboraonline.com
tags: [commercial-open-source, office-suite, libreoffice, fork, consultancy]
org_kind: coss-startup
hq: Cambridge, UK
funding: { total_usd: "n/a (private, services-funded)", last_round: "n/a", last_round_date: null, valuation_usd: "n/a" }
business_verdict: stable
projects: [projects/end-user-apps/libreoffice]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: eject
    resource: https://www.collaboraonline.com/blog/tdf-ejects-its-core-developers/
    title: "Collabora: TDF ejects its core developers"
  - id: meeks
    resource: https://meeksfamily.uk/~michael/blog/2026-04-02-tdf-ejects-core-devs.html
    title: "Michael Meeks: TDF ejects core developers"
  - id: lwn
    resource: https://lwn.net/Articles/1066418/
    title: "LWN: Digging into drama at the Document Foundation"
    author: org:lwn
  - id: holo
    resource: https://www.linuxcompatible.org/story/valve-and-collabora-release-holo-core-a-custom-aarch64-arch-linux-port-for-steam-frame/
    title: "Valve/Collabora release Holo Core"
---
# Summary
Collabora Productivity (part of the Collabora group) sells Collabora Online — a LibreOffice-based web office used inside Nextcloud and other platforms — and had 47 employees contributing ~43% of recent LibreOffice patches[^lwn]. After TDF revoked its staff's foundation membership on 1 April 2026, Collabora published "TDF ejects its core developers" and announced plans for "an entirely new, cut-down, differentiated Collabora Office", reducing LibreOffice involvement[^eject][^meeks][^lwn]. The wider Collabora group also does Linux platform work for Valve (Holo Core ARM port, July 2026)[^holo]. Verdict: stable business, strategic uncertainty.

# Business timeline
| Window | Date | Event |
|---|---|---|
| W9 | 2026-04-01/02 | Membership revoked by TDF; Collabora announces differentiated Collabora Office[^eject][^meeks] |
| W3 | 2026-07 | Holo Core with Valve[^holo] |

# Monetization model
Subscriptions/support for Collabora Online and Office; engineering services.

# Successes
- Dominant technical contributor; integrations in sovereignty stacks.
# Failures / risks
- Loss of governance voice at TDF; forking risks splitting the LibreOffice ecosystem; competition from Euro-Office.

# Related
- [LibreOffice](/projects/end-user-apps/libreoffice.md), [The Document Foundation](/organizations/the-document-foundation.md), [TDF event](/events/2026-04-tdf-expels-collabora-members.md)

[^eject]: https://www.collaboraonline.com/blog/tdf-ejects-its-core-developers/
[^meeks]: https://meeksfamily.uk/~michael/blog/2026-04-02-tdf-ejects-core-devs.html
[^lwn]: https://lwn.net/Articles/1066418/
[^holo]: https://www.linuxcompatible.org/story/valve-and-collabora-release-holo-core-a-custom-aarch64-arch-linux-port-for-steam-frame/
