---
type: Rule
title: "Minimum consortium and participant roles"
description: The default Horizon Europe consortium rule (3 independent legal entities from 3 different MS/AC, at least one in a Member State), exceptions for CSAs, and how beneficiaries, affiliated entities, associated partners and subcontractors count.
tags: [open-internet-stack, cluster-4, eligibility, consortium, horizon-europe-rules]
verified_on: 2026-10-03
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ga-2026
    title: "Horizon Europe Work Programme 2026-2027 — 15. General Annexes (PDF dated 29 Sep 2026)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
  - id: wp7-2026
    title: "Horizon Europe Work Programme 2026-2027 — 7. Digital, Industry and Space"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
  - id: ft-data02
    title: "F&T Portal topic page HORIZON-CL4-2026-04-DATA-02 (topic updates incl. evaluation results, 20 Aug 2026)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2026-04-data-02
---
# The rule

Unless a topic says otherwise, a proposal is eligible only if the consortium includes, **as beneficiaries**, three legal entities that are independent of each other and each established in a different country[^ga-2026]:

- at least **one** independent legal entity established in an **EU Member State**; and
- at least **two other** independent legal entities, each established in **different Member States or Associated Countries**[^ga-2026].

So "Germany + UK + Switzerland" is valid; "UK + Switzerland + Norway" is not (no Member State); "Germany + Germany + France" is not (only two countries). The JRC, international European research organisations and EU bodies are deemed established in a Member State other than those of the other partners[^ga-2026].

None of the OIS topics in WP 2026-2027 (DATA-02, DATA-03, HUMAN-02) deviates from these consortium rules in their specific conditions[^wp7-2026].

# Exceptions

- **Coordination and Support Actions** (e.g. HORIZON-CL4-2026-04-DATA-03) may be submitted by **one or more** legal entities established in a Member State or Associated Country — a single-beneficiary CSA is formally possible[^ga-2026].
- Training and mobility and Programme co-fund actions: one or more entities, one in a MS/AC[^ga-2026].

# Roles and how they count

| Role | Signs grant? | Receives EU money? | Counts toward 3-entity minimum? | Needs validated PIC? |
|---|---|---|---|---|
| Beneficiary (incl. coordinator) | yes | yes | yes | yes, before signature |
| Affiliated entity (legal/capital link to a beneficiary) | no | yes | **no** | yes |
| Associated partner | no | no (bears own costs) | no | no |
| Subcontractor | no (contract with a beneficiary) | paid by beneficiary | no | no |
| Third party giving in-kind contributions | no | no | no | no |

Sources: General Annexes B and "Important" box[^ga-2026]. Affiliated entities must meet all call conditions just like beneficiaries[^ga-2026]. Subcontracting "should normally constitute a limited part" and cannot be done by another beneficiary[^ga-2026]. Recipients of **financial support to third parties** (FSTP/cascade grantees) are not consortium members at all; see [/rules/financial-support-to-third-parties.md](/rules/financial-support-to-third-parties.md).

# Practical notes for OIS consortia

- Ineligibility is a real filter in these calls: in HORIZON-CL4-2026-04, 1 of 31 DATA-02 proposals, 2 of 6 DATA-03 proposals and 3 of 32 HUMAN-02 proposals were declared ineligible[^ft-data02]. Double-check that the three-country rule is met by beneficiaries (not affiliated entities) and that no partner falls under a security restriction.
- If one applicant is ineligible, it must be replaced or the whole application is rejected[^ga-2026].
- Multiple applications are allowed, but near-identical proposals are only evaluated once[^ga-2026].
- A written consortium agreement is mandatory unless the call says otherwise ([/rules/ipr-and-consortium-agreement.md](/rules/ipr-and-consortium-agreement.md))[^ga-2026].

# Related
- [/rules/eligibility-countries.md](/rules/eligibility-countries.md)
- [/rules/security-restrictions.md](/rules/security-restrictions.md)
- [/rules/how-to-submit.md](/rules/how-to-submit.md)

[^ga-2026]: Horizon Europe WP 2026-2027 General Annexes, Annex B and "Important" notes — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
[^wp7-2026]: WP 2026-2027 Part 7 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
[^ft-data02]: F&T Portal, HORIZON-CL4-2026-04 evaluation results (topic update) — https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2026-04-data-02
