---
type: Event
title: Euro-Office launches as a European fork of OnlyOffice
description: "Nextcloud and IONOS led a consortium forking OnlyOffice into 'Euro-Office' (announced March 2026, GA 2026-06-09); OnlyOffice alleged license violations and ended its 8-year Nextcloud partnership before the dispute was settled with attribution notices."
event_kind: fork
date: 2026-06-09
window: W6
impact: mixed
projects: [projects/end-user-apps/onlyoffice, projects/end-user-apps/nextcloud, projects/end-user-apps/libreoffice]
organizations: [organizations/nextcloud]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: htg
    resource: https://www.howtogeek.com/this-new-open-source-web-editor-wants-to-replace-google-docs-and-microsoft-office/
    title: "How-To Geek: Euro-Office wants to replace Google Docs and Microsoft Office"
  - id: heise-viol
    resource: https://www.heise.de/en/news/Euro-Office-OnlyOffice-accuses-of-license-violations-11241334.html
    title: "heise: OnlyOffice accuses Euro-Office of license violations"
    author: org:heise
  - id: xda
    resource: https://www.xda-developers.com/onlyoffice-pulled-its-8-year-partnership-with-nextcloud-licensing-violations/
    title: "XDA: OnlyOffice pulled its 8-year partnership with Nextcloud"
  - id: sfc
    resource: https://sfconservancy.org/blog/2026/apr/16/badgeware-onlyoffice-nextcloud-affero-gpl/
    title: "SFC: AGPLv3 §7¶4 empowers users to thwart badgeware like OnlyOffice"
  - id: ga-date
    resource: https://nextcloud.com/blog/euro-office-general-availability-set-for-june-9/
    title: "Nextcloud: Euro-Office general availability set for June 9"
  - id: tuta
    resource: https://www.neowin.net/news/tuta-has-joined-euro-office-and-will-now-contribute-to-its-codebase/
    title: "Neowin: Tuta has joined Euro-Office"
    author: org:neowin
  - id: heise-ga
    resource: https://www.heise.de/en/news/Euro-Office-First-version-of-the-open-source-web-office-is-here-11322160.html
    title: "heise: Euro-Office — first version is here"
    author: org:heise
  - id: tdf-letter
    resource: https://blog.documentfoundation.org/blog/2026/06/08/an-open-letter/
    title: "TDF: An open letter to office suite users"
  - id: gh
    resource: https://github.com/Euro-Office
    title: "Euro-Office GitHub organization"
---
# What happened
In late March 2026 a European consortium led by Nextcloud and IONOS unveiled Euro-Office, a browser office suite forked from OnlyOffice, chosen over LibreOffice/Collabora for its "more modern architecture"[^htg][^heise-ga][^gh]. OnlyOffice (Ascensio System SIA) alleged license violations (its AGPLv3 §7 terms include a requirement to retain the OnlyOffice logo, per the SFC) and ended its 8-year partnership with Nextcloud (31 Mar–1 Apr 2026)[^heise-viol][^xda]. The SFC argued on 16 April that such logo requirements are "further restrictions" users may remove[^sfc]. Tuta joined in June[^tuta]; TDF published an open letter questioning ODF fidelity just before launch[^tdf-letter]. Euro-Office went GA on 9 June 2026, with source and brand notices added to settle the dispute (per Frank Karlitschek)[^ga-date][^heise-ga].

# Why it matters
It shows sovereignty buyers preferring a European-governed fork over depending on an upstream vendor, and it tested the enforceability of "badgeware" terms under AGPL.

# Outcome so far
Euro-Office shipping; OnlyOffice lost its biggest distribution partner; the European office-suite landscape is now split among LibreOffice/TDF, Collabora, Euro-Office and OnlyOffice.

# Related
- [OnlyOffice](/projects/end-user-apps/onlyoffice.md), [Nextcloud](/projects/end-user-apps/nextcloud.md), [LibreOffice](/projects/end-user-apps/libreoffice.md)
- [TDF expels Collabora members](/events/2026-04-tdf-expels-collabora-members.md)

[^htg]: https://www.howtogeek.com/this-new-open-source-web-editor-wants-to-replace-google-docs-and-microsoft-office/
[^heise-viol]: https://www.heise.de/en/news/Euro-Office-OnlyOffice-accuses-of-license-violations-11241334.html
[^xda]: https://www.xda-developers.com/onlyoffice-pulled-its-8-year-partnership-with-nextcloud-licensing-violations/
[^sfc]: https://sfconservancy.org/blog/2026/apr/16/badgeware-onlyoffice-nextcloud-affero-gpl/
[^ga-date]: https://nextcloud.com/blog/euro-office-general-availability-set-for-june-9/
[^tuta]: https://www.neowin.net/news/tuta-has-joined-euro-office-and-will-now-contribute-to-its-codebase/
[^heise-ga]: https://www.heise.de/en/news/Euro-Office-First-version-of-the-open-source-web-office-is-here-11322160.html
[^tdf-letter]: https://blog.documentfoundation.org/blog/2026/06/08/an-open-letter/
[^gh]: https://github.com/Euro-Office
