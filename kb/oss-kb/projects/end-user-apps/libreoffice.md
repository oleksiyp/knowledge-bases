---
type: OSS Project
title: LibreOffice
description: "The Document Foundation's office suite; adoption boomed with European government migrations (Denmark, Schleswig-Holstein) and 'no AI' positioning, but governance imploded in April 2026 when TDF expelled ~30 Collabora-affiliated members and Collabora announced a cut-down fork."
resource: https://www.libreoffice.org
tags: [office-suite, mpl-2.0, foundation-hosted, digital-sovereignty, governance-crisis, fork]
domain: end-user-apps
license: MPL-2.0
license_history: ["MPL-2.0 / LGPLv3+ (2010-)"]
governance: foundation
steward: The Document Foundation
backing_orgs: [organizations/the-document-foundation, organizations/collabora]
metrics:
  collabora_share_of_recent_patches: { value: "43%", as_of: 2026-05-08 }
  first_week_downloads_26_8: { value: 1031162, as_of: 2026-09-02 }
oss_verdict: contested
business_verdict: n/a
momentum_by_window: { W3: up, W6: down, W9: down, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: denmark
    resource: https://therecord.media/denmark-digital-agency-microsoft-digital-independence
    title: "The Record: Danish government agency to ditch Microsoft software"
    author: org:the-record
  - id: sh-heise
    resource: https://www.heise.de/en/news/Goodbye-Microsoft-Schleswig-Holstein-relies-on-Open-Source-and-saves-millions-11105459.html
    title: "heise: Goodbye Microsoft — Schleswig-Holstein relies on open source and saves millions"
    author: org:heise
  - id: itsfoss-sh
    resource: https://itsfoss.com/news/german-state-ditch-microsoft/
    title: "It's FOSS: Schleswig-Holstein to save €15M each year; LibreOffice migration 80% complete"
  - id: cw-downloads
    resource: https://www.computerworld.com/article/3840480/libreoffice-downloads-on-the-rise-as-users-look-to-avoid-subscription-costs.html
    title: "Computerworld: LibreOffice downloads on the rise as users look to avoid subscription costs"
    author: org:computerworld
  - id: lo262
    resource: https://blog.documentfoundation.org/blog/2026/02/04/libreoffice-26-2-is-here/
    title: "TDF: LibreOffice 26.2 is here (Markdown support)"
  - id: neowin-oo
    resource: https://www.neowin.net/news/libreoffice-blasts-fake-open-source-onlyoffice-for-working-with-microsoft-to-lock-users-in/
    title: "Neowin: LibreOffice blasts OnlyOffice for working with Microsoft to lock users in"
    author: org:neowin
  - id: collabora-eject
    resource: https://www.collaboraonline.com/blog/tdf-ejects-its-core-developers/
    title: "Collabora: TDF ejects its core developers"
  - id: tdf-comment
    resource: https://blog.documentfoundation.org/blog/2026/04/01/comment-about-collabora-blog-post/
    title: "TDF: Comment about the Collabora blog post"
  - id: lwn
    resource: https://lwn.net/Articles/1066418/
    title: "LWN: Digging into drama at the Document Foundation"
    author: org:lwn
  - id: openletter
    resource: https://blog.documentfoundation.org/blog/2026/06/08/an-open-letter/
    title: "TDF: An open letter to office suite users, just before the Euro-Office announcement"
  - id: noai
    resource: https://manualdousuario.net/en/libreoffice-download-record-no-ai/
    title: "Manual do Usuário: LibreOffice breaks download records after declaring it has no AI features"
  - id: omg-268
    resource: https://www.omgubuntu.co.uk/2026/09/libreoffice-download-record
    title: "OMG! Ubuntu: LibreOffice 26.8 sets a new first-week download record (1,031,162; 2026-09)"
  - id: heise-record
    resource: https://www.heise.de/en/news/Download-record-for-LibreOffice-due-to-foregoing-AI-11446747.html
    title: "heise: Download record for LibreOffice due to foregoing AI (2026-09)"
    author: org:heise
  - id: cybernews-2m
    resource: https://cybernews.com/tech/libreoffice-no-ai-two-million-downloads-record/
    title: "Cybernews: LibreOffice downloads top 2 million as No AI stance wins users (2026-09)"
  - id: codex
    resource: https://simonwillison.net/2026/Sep/1/codex-libreoffice/
    title: "Simon Willison: The ChatGPT/Codex app bundles a full copy of LibreOffice"
---
# Summary
LibreOffice had a split-screen two years. Adoption soared: Denmark's Ministry of Digitalisation announced its move from Microsoft 365 to LibreOffice in June 2025[^denmark]; Schleswig-Holstein reported its LibreOffice migration ~80% done with ~€15M/year license savings (Dec 2025)[^sh-heise][^itsfoss-sh]; downloads rose as users fled subscriptions[^cw-downloads], and LibreOffice 26.8 (released 26 Aug 2026) set a first-week record of 1,031,162 downloads from the official site, then passed 2M, which TDF tied to its "no AI" positioning. The figure excludes most Linux distro installs.[^omg-268][^heise-record][^cybernews-2m][^noai] Even OpenAI's Codex app bundles LibreOffice[^codex]. Governance, however, imploded: on 1 April 2026 TDF revoked foundation membership from ~30 Collabora-affiliated people, citing conflicts of interest and German nonprofit-status (Gemeinnützigkeit) risks found in audits; Collabora — author of ~43% of recent patches with 47 employees — responded by planning "an entirely new, cut-down, differentiated Collabora Office" and reducing LibreOffice involvement[^collabora-eject][^tdf-comment][^lwn]. TDF also feuded publicly with OnlyOffice (Feb 2026) and with the Euro-Office initiative (June 2026)[^neowin-oo][^openletter]. Verdict: OSS contested (usage up, developer base at risk); n/a business (see TDF/Collabora orgs).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-28 | Downloads rising as users avoid subscriptions[^cw-downloads] | OSS | + |
| W24 | 2025-06-10/13 | Denmark's digital ministry to switch to LibreOffice[^denmark] | OSS | + |
| W12 | 2025-12-07 | Schleswig-Holstein: ~€15M/yr savings; LibreOffice migration ~80%[^sh-heise][^itsfoss-sh] | OSS | + |
| W9 | 2026-02-04 | LibreOffice 26.2 (Markdown support in Writer)[^lo262] | OSS | + |
| W9 | 2026-02-21 | TDF attacks OnlyOffice as "fake open source"[^neowin-oo] | OSS | − |
| W9 | 2026-04-01 | TDF expels ~30 Collabora-affiliated members; Collabora plans separate Collabora Office[^collabora-eject][^tdf-comment][^lwn] | OSS | − |
| W6 | 2026-06-08 | TDF open letter ahead of Euro-Office launch[^openletter] | OSS | − |
| W3 | 2026-08-26 | LibreOffice 26.8 released[^omg-268] | OSS | + |
| W3 | 2026-09-02 | TDF: 1,031,162 first-week downloads, highest of any release; later >2M[^omg-268][^heise-record][^cybernews-2m] | OSS | + |

# OSS successes
- Government migrations and "no-AI" positioning drive record demand[^denmark][^noai].
- Rapid features (Markdown, WASM/browser work).
# OSS failures / risks
- Losing the largest corporate contributor's goodwill threatens the core developer base[^lwn].
- Combative communications against other OSS office suites fragment the "sovereign office" camp[^neowin-oo][^openletter].
# Business successes
- n/a for the project; ecosystem vendors (Collabora, allotropia) sell support.
# Business failures / risks
- The foundation's contracting model with member companies created legal/tax exposure[^lwn].

# By window
## W3
- 26.8 first-week record (1.03M downloads), >2M total, tied to "no AI" stance[^omg-268][^cybernews-2m].
## W6
- Euro-Office tension[^openletter].
## W9
- 26.2; OnlyOffice spat; Collabora expulsions[^lo262][^neowin-oo][^collabora-eject].
## W12
- Schleswig-Holstein savings report[^sh-heise].
## W24
- Denmark decision; download growth[^denmark][^cw-downloads].

# Lessons
- Foundation governance must separate commercial contributors' votes from contracts they benefit from — or face legal and community blowups.
- Demand alone doesn't secure an OSS project; developer-employer relations do.

# Related
- [LibreOffice 26.8 download record](/events/2026-09-libreoffice-26-8-download-record.md)
- [The Document Foundation](/organizations/the-document-foundation.md), [Collabora](/organizations/collabora.md)
- [TDF expels Collabora members](/events/2026-04-tdf-expels-collabora-members.md), [Euro-Office fork](/events/2026-06-euro-office-onlyoffice-fork.md)
- [OnlyOffice](/projects/end-user-apps/onlyoffice.md), [Nextcloud](/projects/end-user-apps/nextcloud.md)

[^denmark]: https://therecord.media/denmark-digital-agency-microsoft-digital-independence
[^sh-heise]: https://www.heise.de/en/news/Goodbye-Microsoft-Schleswig-Holstein-relies-on-Open-Source-and-saves-millions-11105459.html
[^itsfoss-sh]: https://itsfoss.com/news/german-state-ditch-microsoft/
[^cw-downloads]: https://www.computerworld.com/article/3840480/libreoffice-downloads-on-the-rise-as-users-look-to-avoid-subscription-costs.html
[^lo262]: https://blog.documentfoundation.org/blog/2026/02/04/libreoffice-26-2-is-here/
[^neowin-oo]: https://www.neowin.net/news/libreoffice-blasts-fake-open-source-onlyoffice-for-working-with-microsoft-to-lock-users-in/
[^collabora-eject]: https://www.collaboraonline.com/blog/tdf-ejects-its-core-developers/
[^tdf-comment]: https://blog.documentfoundation.org/blog/2026/04/01/comment-about-collabora-blog-post/
[^lwn]: https://lwn.net/Articles/1066418/
[^openletter]: https://blog.documentfoundation.org/blog/2026/06/08/an-open-letter/
[^noai]: https://manualdousuario.net/en/libreoffice-download-record-no-ai/
[^omg-268]: https://www.omgubuntu.co.uk/2026/09/libreoffice-download-record
[^heise-record]: https://www.heise.de/en/news/Download-record-for-LibreOffice-due-to-foregoing-AI-11446747.html
[^cybernews-2m]: https://cybernews.com/tech/libreoffice-no-ai-two-million-downloads-record/
[^codex]: https://simonwillison.net/2026/Sep/1/codex-libreoffice/
