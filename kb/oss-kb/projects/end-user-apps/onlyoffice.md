---
type: OSS Project
title: OnlyOffice
description: "AGPL web/desktop office suite from Ascensio System SIA; won sovereignty deals (Lyon) but in 2026 was forked by Nextcloud/IONOS as Euro-Office, ended its Nextcloud partnership, and saw its logo-retention ('badgeware') license terms challenged by SFC."
resource: https://github.com/ONLYOFFICE/DocumentServer
tags: [office-suite, agpl-3.0, open-core, fork, badgeware, digital-sovereignty]
domain: end-user-apps
license: AGPL-3.0
license_history: ["AGPL-3.0 with §7 additional terms (logo retention) — challenged 2026"]
governance: company-led-open-core
steward: Ascensio System SIA
backing_orgs: []
metrics:
  github_stars_documentserver: { value: 6964, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: struggling
momentum_by_window: { W3: flat, W6: down, W9: down, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lyon
    resource: https://www.zdnet.com/article/this-city-is-dumping-microsoft-office-and-windows-for-onlyoffice-and-linux-heres-why/
    title: "ZDNET: Lyon is dumping Microsoft Office and Windows for OnlyOffice and Linux"
    author: org:zdnet
  - id: tdf-attack
    resource: https://www.neowin.net/news/libreoffice-blasts-fake-open-source-onlyoffice-for-working-with-microsoft-to-lock-users-in/
    title: "Neowin: LibreOffice blasts 'fake open source' OnlyOffice"
    author: org:neowin
  - id: heise-viol
    resource: https://www.heise.de/en/news/Euro-Office-OnlyOffice-accuses-of-license-violations-11241334.html
    title: "heise: 'Euro-Office' — OnlyOffice accuses of license violations"
    author: org:heise
  - id: xda
    resource: https://www.xda-developers.com/onlyoffice-pulled-its-8-year-partnership-with-nextcloud-licensing-violations/
    title: "XDA: OnlyOffice pulled its 8-year partnership with Nextcloud"
  - id: sfc
    resource: https://sfconservancy.org/blog/2026/apr/16/badgeware-onlyoffice-nextcloud-affero-gpl/
    title: "SFC: AGPLv3 §7¶4 empowers users to thwart badgeware like OnlyOffice"
  - id: eo
    resource: https://www.heise.de/en/news/Euro-Office-First-version-of-the-open-source-web-office-is-here-11322160.html
    title: "heise: Euro-Office first version is here"
    author: org:heise
  - id: linuxiac-fsf
    resource: https://linuxiac.com/fsf-says-onlyoffice-cannot-use-agpl-to-restrict-forks/
    title: "Linuxiac: Free Software Foundation says OnlyOffice cannot use AGPL to restrict forks (2026-04-17)"
  - id: linuxiac-accuse
    resource: https://linuxiac.com/onlyoffice-accuses-euro-office-of-license-violations/
    title: "Linuxiac: ONLYOFFICE accuses Euro-Office of license violations after launch (2026-03)"
  - id: omg-94
    resource: https://www.omgubuntu.co.uk/2026/05/onlyoffice-9-4-released
    title: "OMG! Ubuntu: ONLYOFFICE 9.4 is out with a stricter FOSS licence (2026-05)"
  - id: itconnect-94
    resource: https://www.it-connect.tech/onlyoffice-docs-9-4-drops-the-20-connection-limit-and-updates-its-open-source-license/
    title: "IT-Connect: ONLYOFFICE Docs 9.4 drops the 20-connection limit and updates its open-source license (2026-05)"
  - id: eo-spdx
    resource: https://github.com/Euro-Office/web-apps/pull/268
    title: "Euro-Office web-apps PR #268: use AGPL-3.0-only and Euro-Office contributors in SPDX header"
  - id: gh
    resource: https://github.com/ONLYOFFICE/DocumentServer
    title: OnlyOffice DocumentServer repository
---
# Summary
OnlyOffice was the office engine of choice inside Nextcloud and won sovereignty-driven deals such as the city of Lyon's 2025 move off Microsoft Office and Windows[^lyon]. In 2026 it became the domain's cautionary tale about open-core control: TDF attacked it as "fake open source" aligned with Microsoft formats (Feb 2026)[^tdf-attack]; Nextcloud, IONOS and partners unveiled Euro-Office in Berlin on 27 Mar 2026, choosing OnlyOffice for its "more modern architecture" than LibreOffice. The fork is licensed AGPL-3.0-only and strips the "additional terms" OnlyOffice had added under §7 in May 2021.[^linuxiac-accuse][^eo][^eo-spdx][^heise-viol] Within days (30–31 Mar) OnlyOffice accused the fork of license violations and ended its 8-year Nextcloud partnership.[^heise-viol][^xda] Both the Software Freedom Conservancy (16 Apr) and the FSF (Apr 2026) said its logo-retention requirement is a removable "further restriction" under AGPLv3.[^sfc][^linuxiac-fsf] OnlyOffice answered in Docs 9.4 (May 2026) by tightening its terms, requiring forks to credit it "prominently" in the UI and barring trademark use, while also removing the 20-connection limit in Community Edition.[^omg-94][^itconnect-94] Heise reported the dispute settled by adding source and brand notices before Euro-Office GA on 9 June 2026; no court ruling was found.[^eo] Verdict: OSS contested; business struggling (lost its largest distribution partner).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06/07 | Lyon replaces Microsoft Office/Windows with OnlyOffice/Linux[^lyon] | Business | + |
| W9 | 2026-02-21 | TDF publicly attacks OnlyOffice[^tdf-attack] | OSS | − |
| W9 | 2026-03-27 | Euro-Office (AGPL-3.0-only fork) unveiled in Berlin by Nextcloud, IONOS and partners[^linuxiac-accuse][^eo-spdx] | OSS | − |
| W9 | 2026-03-31 | OnlyOffice alleges Euro-Office license violations; ends Nextcloud partnership[^heise-viol][^xda] | Business | − |
| W6 | 2026-04-16 | SFC: logo requirement is removable badgeware under AGPLv3 §7¶4[^sfc] | OSS | − |
| W6 | 2026-04-17 | FSF also says OnlyOffice cannot use AGPL to restrict forks[^linuxiac-fsf] | OSS | − |
| W6 | 2026-05-19 | Docs 9.4: stricter attribution/trademark terms; 20-connection limit removed[^omg-94][^itconnect-94] | OSS | ± |
| W6 | 2026-06-09 | Euro-Office GA; dispute settled with attribution notices[^eo] | OSS | − |

# OSS successes
- Its codebase was attractive enough that a European consortium chose to fork it[^eo].
# OSS failures / risks
- License additional terms (logo retention) invite legal challenge and forks[^sfc].
# Business successes
- Public-sector wins (Lyon)[^lyon].
# Business failures / risks
- Loss of Nextcloud bundling; a well-funded fork now competes on the same code[^xda][^eo].

# By window
## W3
- No notable events found.
## W6
- SFC and FSF analyses; Docs 9.4 licence tightening; Euro-Office GA[^sfc][^linuxiac-fsf][^omg-94][^eo].
## W9
- TDF attack; Nextcloud split[^tdf-attack][^xda].
## W12
- No notable events found.
## W24
- Lyon migration[^lyon].

# Lessons
- Under AGPL, a vendor's leverage over downstream partners is weaker than it looks; "badgeware" terms are fragile.
- Origin/jurisdiction of a vendor matters in sovereignty procurement — partners may fork rather than depend.

# Related
- [Euro-Office fork event](/events/2026-06-euro-office-onlyoffice-fork.md), [Nextcloud](/projects/end-user-apps/nextcloud.md), [LibreOffice](/projects/end-user-apps/libreoffice.md)

[^lyon]: https://www.zdnet.com/article/this-city-is-dumping-microsoft-office-and-windows-for-onlyoffice-and-linux-heres-why/
[^tdf-attack]: https://www.neowin.net/news/libreoffice-blasts-fake-open-source-onlyoffice-for-working-with-microsoft-to-lock-users-in/
[^heise-viol]: https://www.heise.de/en/news/Euro-Office-OnlyOffice-accuses-of-license-violations-11241334.html
[^xda]: https://www.xda-developers.com/onlyoffice-pulled-its-8-year-partnership-with-nextcloud-licensing-violations/
[^sfc]: https://sfconservancy.org/blog/2026/apr/16/badgeware-onlyoffice-nextcloud-affero-gpl/
[^eo]: https://www.heise.de/en/news/Euro-Office-First-version-of-the-open-source-web-office-is-here-11322160.html
[^linuxiac-fsf]: https://linuxiac.com/fsf-says-onlyoffice-cannot-use-agpl-to-restrict-forks/
[^linuxiac-accuse]: https://linuxiac.com/onlyoffice-accuses-euro-office-of-license-violations/
[^omg-94]: https://www.omgubuntu.co.uk/2026/05/onlyoffice-9-4-released
[^itconnect-94]: https://www.it-connect.tech/onlyoffice-docs-9-4-drops-the-20-connection-limit-and-updates-its-open-source-license/
[^eo-spdx]: https://github.com/Euro-Office/web-apps/pull/268
[^gh]: https://github.com/ONLYOFFICE/DocumentServer
