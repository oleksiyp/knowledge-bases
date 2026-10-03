---
type: OSS Project
title: Grist
description: "Apache-2.0 relational spreadsheet whose biggest contributor is now the French state: adoption in French public administration grew 10x to 20,000 monthly users in a year and Grist joined La Suite Numérique (Jan 2026) — the domain's best example of government-driven OSS success."
resource: https://github.com/gristlabs/grist-core
tags: [spreadsheet, no-code, apache-2.0, digital-sovereignty, government, france]
domain: web-platforms
license: Apache-2.0
license_history: ["Apache-2.0 (grist-core)"]
governance: company-led-open-core
steward: Grist Labs, with French government (DINUM/ANCT) as largest external contributor
backing_orgs: []
metrics:
  github_stars: { value: 11886, as_of: 2026-10-03 }
  french_public_sector_mau: { value: 20000, as_of: 2026-01 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/gristlabs/grist-core
    title: grist-core GitHub repository
  - id: osor
    resource: https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/grist-joins-suite-numerique-public-administration
    title: "OSOR (European Commission): Grist joins the Suite Numérique for public administration (2026-01-26)"
  - id: numgouv
    resource: https://www.numerique.gouv.fr/sinformer/blog/la-fabrique-du-libre-4-gristgouv-de-loutil-metier-au-commun-numerique/
    title: "numerique.gouv.fr: Grist.gouv, de l'outil métier au commun numérique"
  - id: aucarre
    resource: https://www.getgrist.com/blog/grist-labs-welcomes-au-carre-as-an-official-service-partner-in-france/
    title: "Grist Labs: welcomes au carré as official service partner in France"
---
# Summary
Grist (Apache-2.0) became infrastructure for the French state. By **January 2026** it had **20,000 monthly active users in French public administration — 10× January 2025** — across 15 ministries, all 100 prefectures and cities such as Lyon and Strasbourg, and the government (DINUM/ANCT) is "the largest contributor to the project, alongside the original developer"[^osor][^numgouv]. Grist joined **La Suite Numérique**, France's sovereign productivity suite[^osor], and Grist Labs added French service partners (au carré, July 2026)[^aucarre]. Verdict: OSS thriving; business growing (private company, no disclosed financials).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-01-26 | 20K MAU in French administration; joins La Suite Numérique[^osor] | OSS | + |
| W3 | 2026-07 | au carré becomes official French service partner[^aucarre] | Business | + |

# OSS successes
- A government co-maintains and funds the codebase as a digital commons[^osor][^numgouv].
# OSS failures / risks
- Concentration risk: one public-sector customer base drives much of the growth.
# Business successes
- Partner ecosystem forming around public-sector deployments[^aucarre].
# Business failures / risks
- Grist Labs' own commercial traction is not public.

# By window
## W3
- Partner expansion[^aucarre].
## W6
- No notable events found.
## W9
- La Suite Numérique / 20K MAU[^osor].
## W12
- No notable events found.
## W24
- Rapid French public-sector adoption (10× in 2025)[^osor].

# Lessons
- Permissive licensing + government co-development can produce a durable commons faster than VC-driven growth.

# Related
- [European sovereign tech OSS](/projects/coss-market/european-sovereign-tech-oss.md)
- [Baserow](/projects/web-platforms/baserow.md), [NocoDB](/projects/web-platforms/nocodb.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/gristlabs/grist-core
[^osor]: https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/grist-joins-suite-numerique-public-administration
[^numgouv]: https://www.numerique.gouv.fr/sinformer/blog/la-fabrique-du-libre-4-gristgouv-de-loutil-metier-au-commun-numerique/
[^aucarre]: https://www.getgrist.com/blog/grist-labs-welcomes-au-carre-as-an-official-service-partner-in-france/
