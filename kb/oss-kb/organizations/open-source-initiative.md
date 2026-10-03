---
type: Organization
title: Open Source Initiative
description: "Steward of the Open Source Definition; released the contested Open Source AI Definition 1.0 (Oct 2024), weathered a disputed 2025 board election and leadership turnover (interim ED from Sep 2025), and refocused on policy (CRA, AI Act)."
resource: https://opensource.org
tags: [foundation, governance, osaid, policy]
org_kind: nonprofit
hq: USA
funding: { total_usd: "n/a", last_round: "n/a", last_round_date: 2025-09, valuation_usd: "n/a" }
business_verdict: struggling
projects: [projects/security-sustainability/eu-cyber-resilience-act]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-osi
    resource: https://en.wikipedia.org/wiki/Open_Source_Initiative
    title: "Wikipedia: Open Source Initiative"
  - id: osi-blog
    resource: https://opensource.org/blog
    title: OSI blog
  - id: osi-2026-elections
    resource: https://opensource.org/blog/2026-osi-elections-update
    title: "OSI: 2026 OSI elections update (2026-01)"
  - id: fontana-issue
    resource: https://github.com/liquibase/liquibase/issues/7374
    title: "Liquibase issue #7374: still advertising as open source after FSL switch (2025-10-14)"
  - id: prn-obrien
    resource: https://www.prnewswire.com/news-releases/open-source-initiative-appoints-duane-obrien-as-executive-director-302742716.html
    title: "PR Newswire: Open Source Initiative appoints Duane O'Brien as Executive Director (2026-04-15)"
    author: org:open-source-initiative
---
# Summary
The OSI released **OSAID 1.0 in October 2024**, which drew criticism from parts of the AI industry and from open source purists.[^wiki-osi] Its **2025 board election** was criticized for miscommunication about seats and for excluding candidates who had not signed required agreements. Community members called for the election to be invalidated, and the OSI declined.[^wiki-osi] **Deborah Bryant** served as interim executive director from September 2025[^wiki-osi]; the OSI paused board elections in January 2026 and appointed **Duane O'Brien** (ex-Capital One, Indeed and PayPal OSPO leader) as permanent executive director effective 2026-04-13 ([event](/events/2026-04-osi-appoints-duane-obrien.md)).[^prn-obrien] (Corrected in pass 2: "interim ED since Sept 2025" was outdated.) In 2026 its output is mostly policy and advocacy: a governance survey (Aug 2026), CRA/AI Act resources, and "Open Weights Are Good. Open Source Is Better" (Sep 2026).[^osi-blog] Verdict: **struggling** on governance credibility, though still active.

# Business timeline
| Date | Event |
|---|---|
| 2024-10 | OSAID 1.0[^wiki-osi] |
| 2025 | Disputed board election[^wiki-osi] |
| 2025-09 | Interim ED Deborah Bryant[^wiki-osi] |
| 2026-01 | Board elections paused ([event](/events/2026-01-osi-pauses-board-elections.md)) |
| 2026-04-13 | Duane O'Brien becomes executive director[^prn-obrien] |
| 2026-08-17 | Governance survey[^osi-blog] |

# Monetization model
Sponsorships, memberships and donations.

# Successes
- Still the reference authority for license approval. Active in EU policy.[^osi-blog]

# Failures / risks
- Leadership turnover, election controversy, and OSAID's limited acceptance.[^wiki-osi]

# Related
- [EU CRA](/projects/security-sustainability/eu-cyber-resilience-act.md)

[^wiki-osi]: Wikipedia.
[^osi-blog]: OSI blog.

## Additional notes (licensing-forks)
- In Jan 2026 the OSI **paused its spring 2026 board election cycle**. Interim ED Deb Bryant said public elections had created "confusion, operational strain, and diminished trust", and a working group was due to redesign board selection by Sept 2026.[^osi-2026-elections] See [event](/events/2026-01-osi-pauses-board-elections.md).
- Licensing policing has largely moved from the OSI to individuals and the press. Examples: the challenge to Liquibase's "open source" marketing after its FSL switch,[^fontana-issue] and the AGPL reversals by Elastic (2024) and Redis (2025), which each vendor framed as a return to "open source".

[^osi-2026-elections]: OSI — https://opensource.org/blog/2026-osi-elections-update
[^fontana-issue]: GitHub — https://github.com/liquibase/liquibase/issues/7374
[^prn-obrien]: PR Newswire, 2026-04-15.
