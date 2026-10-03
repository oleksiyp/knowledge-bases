---
type: Organization
title: The Document Foundation
description: "German nonprofit (Stiftung) stewarding LibreOffice; riding record demand from sovereignty migrations but in April 2026 expelled ~30 Collabora-affiliated members over conflict-of-interest and charitable-status concerns, fracturing its contributor base."
resource: https://www.documentfoundation.org
tags: [foundation, office-suite, governance-crisis, digital-sovereignty]
org_kind: foundation
hq: Berlin, Germany
funding: { total_usd: "n/a (donations)", last_round: "n/a", last_round_date: null, valuation_usd: "n/a" }
business_verdict: struggling
projects: [projects/end-user-apps/libreoffice]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lwn
    resource: https://lwn.net/Articles/1066418/
    title: "LWN: Digging into drama at the Document Foundation"
    author: org:lwn
  - id: tdf-comment
    resource: https://blog.documentfoundation.org/blog/2026/04/01/comment-about-collabora-blog-post/
    title: "TDF: Comment about the Collabora blog post"
  - id: denmark-blog
    resource: https://blog.documentfoundation.org/blog/2025/07/08/danish-ministry-switching-from-microsoft-office-365-to-libreoffice/
    title: "TDF blog: Danish ministry switching to LibreOffice"
  - id: cra
    resource: https://blog.documentfoundation.org/blog/2026/03/05/cra-guidances/
    title: "TDF: Request to the European Commission to adhere to its own guidances (CRA)"
  - id: openletter
    resource: https://blog.documentfoundation.org/blog/2026/06/08/an-open-letter/
    title: "TDF: An open letter to office suite users"
  - id: odf
    resource: https://blog.documentfoundation.org/blog/2026/06/11/euro-office-open-standards-and-native-odf/
    title: "TDF: Euro-Office, open standards, and native ODF"
---
# Summary
TDF benefited from European migrations (Denmark, Schleswig-Holstein)[^denmark-blog] and lobbied on the Cyber Resilience Act[^cra], but its defining event was governance: audits in 2023–24 identified potential nonprofit-law violations (board members from Collabora and CIB voting on contracts/trademark licenses benefiting their employers), and to protect its German charitable status TDF removed ~30 Collabora-affiliated people from membership on 1 April 2026, froze tenders and adopted strict conflict bylaws[^lwn][^tdf-comment]. It then publicly challenged Euro-Office over ODF fidelity (June 2026)[^openletter][^odf]. Verdict: struggling (governance), with strong demand.

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2025-07-08 | Promotes Danish ministry switch[^denmark-blog] |
| W9 | 2026-03-05 | CRA guidance request to EC[^cra] |
| W9 | 2026-04-01 | Collabora-affiliated members removed; tenders frozen[^lwn][^tdf-comment] |
| W6 | 2026-06-08/11 | Open letter and ODF critique of Euro-Office[^openletter][^odf] |

# Monetization model
Donations; trademark stewardship; previously paid development tenders to member companies (frozen 2026)[^lwn].

# Successes
- Brand and downloads at highs; strong sovereignty narrative.
# Failures / risks
- Alienated the largest code contributor (Collabora ~43% of recent patches)[^lwn]; combative posture toward other OSS suites.

# Related
- [LibreOffice](/projects/end-user-apps/libreoffice.md), [Collabora](/organizations/collabora.md), [TDF expels Collabora members](/events/2026-04-tdf-expels-collabora-members.md)

[^lwn]: https://lwn.net/Articles/1066418/
[^tdf-comment]: https://blog.documentfoundation.org/blog/2026/04/01/comment-about-collabora-blog-post/
[^denmark-blog]: https://blog.documentfoundation.org/blog/2025/07/08/danish-ministry-switching-from-microsoft-office-365-to-libreoffice/
[^cra]: https://blog.documentfoundation.org/blog/2026/03/05/cra-guidances/
[^openletter]: https://blog.documentfoundation.org/blog/2026/06/08/an-open-letter/
[^odf]: https://blog.documentfoundation.org/blog/2026/06/11/euro-office-open-standards-and-native-odf/
