---
type: Rule
title: "Timeline from deadline to grant signature (time-to-inform, time-to-grant)"
description: Standard Horizon Europe timing (results ~5 months after the deadline, grant signature ~8 months) and what actually happened in the OIS calls — results in ~4 months (Feb 2026 for the Oct 2025 deadline; Aug 2026 for the Apr 2026 deadline).
tags: [open-internet-stack, cluster-4, timeline, time-to-grant, horizon-europe-rules]
verified_on: 2026-10-03
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ga-2026
    title: "Horizon Europe Work Programme 2026-2027 — 15. General Annexes (PDF dated 29 Sep 2026)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
  - id: ft-data02
    title: "F&T Portal topic page HORIZON-CL4-2026-04-DATA-02 (topic updates)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2026-04-data-02
  - id: ft-data11
    title: "F&T Portal topic page HORIZON-CL4-2025-03-DATA-11 (topic updates)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2025-03-data-11
  - id: wp7-2026
    title: "Horizon Europe Work Programme 2026-2027 — 7. Digital, Industry and Space"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
  - id: ls-guide
    title: "Lump sum funding: what do I need to know? V3.0 (24 June 2024)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/ls-funding-what-do-i-need-to-know_he_en.pdf
  - id: cordis-restack
    title: "CORDIS: Restack (grant 101299072)"
    resource: https://cordis.europa.eu/project/id/101299072
  - id: om-registration
    title: "F&T Online Manual — Registration and validation of your organisation"
    resource: https://webgate.ec.europa.eu/funding-tenders-opportunities/spaces/OM/pages/1867804/Registration+and+validation+of+your+organisation
---
# Standard timing (General Annex F)

Unless a topic says otherwise[^ga-2026]:
- **Evaluation result**: around **5 months** after the submission deadline.
- **Grant agreement signature**: around **8 months** after the deadline.
- Two-stage calls: ~3 months after stage 1, ~5 months after stage 2; signature ~8 months after stage 2.
- Deadlines are at **17:00:00 Brussels time**; the Director-General may open a call up to one month earlier/later and **delay deadlines by up to two months**[^wp7-2026].

# Observed in OIS calls

| Call / topic | Opened | Deadline | Result published on topic page | Months | Signature / start |
|---|---|---|---|---|---|
| HORIZON-CL4-2025-03 (incl. DATA-11 OIS commons) | 10 Jun 2025 (call published 15 May 2025) | 2 Oct 2025 | 17 Feb 2026 | ~4.5 | signed; the DATA-11 winner [Restack](/projects/restack.md) started 1 Jun 2026 (8 months after deadline)[^cordis-restack] |
| HORIZON-CL4-2026-04 (DATA-02, DATA-03, HUMAN-02) | 15 Jan 2026 (published 12 Dec 2025) | 15 Apr 2026 | 20 Aug 2026 (announced as "expected July 2026") | ~4 | not yet signed; ~mid-December 2026 by the 8-month standard (estimate) |

Dates from the topic updates on the F&T Portal[^ft-data11][^ft-data02]. For the 2026 call the signature date is an estimate derived from the 8-month standard[^ga-2026], not an announced date.

# What happens between result and signature ("grant preparation")

1. **Evaluation result letter** with the Evaluation Summary Report; invitation to grant preparation is **not** a funding commitment[^ga-2026].
2. **Validation** of each beneficiary's legal entity by the Central Validation Service (documents uploaded in the Participant Register) — validation only starts if the proposal succeeds[^om-registration]; LEAR appointment ([/rules/how-to-submit.md](/rules/how-to-submit.md)).
3. **Financial capacity check** for coordinators requesting ≥ €500,000 (public bodies exempt; and not for low-value grants ≤ €60,000)[^ga-2026].
4. Ethics review / security appraisal where flagged[^ga-2026].
5. Preparation of the grant agreement with the project officer (Annex 1 description of action, Annex 2 budget); for lump sums the "no negotiation" principle applies[^ga-2026][^ls-guide].
6. Signature by the coordinator and accession by each beneficiary; **pre-financing** paid after signature[^ga-2026].
7. Project start date is normally after signature; retroactive start only exceptionally[^ga-2026].

Reserve-list proposals may be invited if a selected one drops out; the 2026 OIS evaluation kept one reserve proposal each for DATA-02, DATA-03 and HUMAN-02[^ft-data02].

# Planning implications

- From idea to money in the bank is roughly **12–14 months**: ~4–5 months of proposal preparation before a spring deadline, ~8 months to signature, pre-financing shortly after.
- For cascade (FSTP) recipients add the time the funded project needs to set up and run its first open call (minimum 2 months open[^ga-2026]) — usually first cascade money arrives 12–18 months after the Horizon deadline.
- Evaluation review requests: within 30 days of opening the result[^ga-2026].

# Related
- [/context/key-dates-2026-2027.md](/context/key-dates-2026-2027.md)
- [/rules/how-to-submit.md](/rules/how-to-submit.md)
- [/rules/evaluation-criteria-and-scoring.md](/rules/evaluation-criteria-and-scoring.md)

[^ga-2026]: General Annexes WP 2026-2027, Annexes C, F, G — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
[^ft-data02]: F&T Portal topic updates, HORIZON-CL4-2026-04 — https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2026-04-data-02
[^ft-data11]: F&T Portal topic updates, HORIZON-CL4-2025-03 — https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2025-03-data-11
[^wp7-2026]: WP 2026-2027 Part 7, call tables — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
[^ls-guide]: Lump sum guide V3.0 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/ls-funding-what-do-i-need-to-know_he_en.pdf
[^cordis-restack]: CORDIS, Restack (101299072) — https://cordis.europa.eu/project/id/101299072
[^om-registration]: F&T Online Manual, Registration and validation — https://webgate.ec.europa.eu/funding-tenders-opportunities/spaces/OM/pages/1867804/Registration+and+validation+of+your+organisation
