---
type: Rule
title: "Lump-sum funding: how it works in Horizon Europe"
description: How Horizon Europe lump-sum grants are budgeted, evaluated and paid (shares per work package paid on completion, no cost reporting or financial audits), which OIS topics use them (the DATA-03 CSA does; the DATA-02 and HUMAN-02 RIAs do not), and how to design work packages.
tags: [open-internet-stack, cluster-4, lump-sum, budget, horizon-europe-rules]
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
  - id: ls-guide
    title: "Lump sum funding: what do I need to know? A guide for participants, V3.0 (24 June 2024), DG RTD Common Implementation Centre"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/ls-funding-what-do-i-need-to-know_he_en.pdf
  - id: ls-decision
    title: "Decision of 7 July 2021 authorising the use of lump sum contributions under Horizon Europe"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/ls-decision_he_en.pdf
  - id: ffg-ls
    title: "FFG (Austrian NCP): Lump Sum Funding in Horizon Europe"
    resource: https://www.ffg.at/en/europe/heu/legal-financial/theme_lumpsum
  - id: af-ria-ia
    title: "EU Grants: Application form (HE RIA and IA) V5.1 – 22.01.2026"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/temp-form/af/af_he-ria-ia_en.pdf
  - id: desca-21
    title: "BayFOR: DESCA 2.1 released — updated consortium agreement for Horizon Europe projects"
    resource: https://www.bayfor.org/en/news/latest-news/news-detail/5402-desca-21-released-updated-consortium-agreement-for-horizon-europe-projects.html
---
# Which OIS topics are lump sum?

A topic is lump sum only if its "Legal and financial set-up" box says "Eligible costs will take the form of a lump sum as defined in the Decision of 7 July 2021"[^wp7-2026][^ls-decision]. In WP 2026-2027:

- **HORIZON-CL4-2026-04-DATA-03 Open Internet Stack Support for Scale (CSA)** — **lump sum**[^wp7-2026].
- **HORIZON-CL4-2026-04-DATA-02 Sovereign Solutions (RIA)** and **HUMAN-02 Web 4.0/OIS (RIA)** — no lump-sum clause, i.e. ordinary actual-cost grants[^wp7-2026]. This is likely linked to their large cascade (FSTP) components, which are reported as actual costs.

Many other Cluster 4 topics in WP 2026-2027 are lump sum, so check each topic[^wp7-2026].

# Core principles

- One **lump-sum share is fixed per work package (and per beneficiary)** in Annex 2 of the grant agreement; the total equals the maximum grant amount[^ls-guide].
- **Payment is triggered by completion of work packages, not by costs or by success**: "Payments do not depend on a successful outcome, but on the completion of activities"[^ls-guide].
- **No actual-cost reporting and no financial ex-post audits**; checks focus on technical implementation, deliverables, and non-financial obligations (IPR, dissemination)[^ls-guide][^ffg-ls].
- Same evaluation criteria, same pre-financing and payment scheme, same reporting periods as actual-cost grants[^ls-guide].
- Funding rate is already built into the lump sum, so it is not shown in the grant agreement[^ga-2026].

# Two lump-sum types

- **Type 1**: the lump sum is fixed in the call.
- **Type 2**: you define the lump sum in your proposal (the common case)[^ls-guide]. FFG calls these Type 1a/1b and notes the applicant-defined variant is more common[^ffg-ls].

# Writing and budgeting a lump-sum proposal

1. Use the standard application form; page limits are **45 pages** for RIA/IA and **28 pages** for CSA when lump sum applies (vs 40/25 otherwise)[^ga-2026]; section 3.1 (work plan and resources) is indicatively 17 pages instead of 12[^af-ria-ia].
2. Fill the **detailed budget table** (Excel, downloaded from the submission system, uploaded as annex to Part B) with cost estimates per beneficiary, per cost category, per work package[^ls-guide].
3. Estimates must approximate real costs and respect normal actual-cost eligibility rules (AGA Article 6): reasonable, in line with usual practices, best value for money and no conflicts of interest for purchases/subcontracts[^ga-2026][^ls-guide]. If ineligible costs slip in, the grant can be reduced even after the project[^ga-2026].
4. The detailed budget table itself is **not** part of the grant agreement; only the share breakdown (Annex 2) is[^ls-guide][^ffg-ls].

# How evaluators treat the budget

- Experts assess the cost estimates under the **Implementation** criterion[^ls-guide].
- Overestimated costs lead to concrete recommendations and a reduced lump sum, **without lowering the score**; serious problems (budget unfit for purpose, strong overestimation) **do lower the implementation score**[^ls-guide].
- Experts use a dashboard of personnel costs (20th–80th percentile by country and organisation type) from signed Horizon Europe grants; justify above-range rates in the budget table's comments tab[^ls-guide].
- Comments on the budget appear in the Evaluation Summary Report only for proposals invited to grant preparation, reserve-listed, or rejected for cost estimation problems[^ga-2026].

# Designing work packages (the most important practical point)

- A WP is a major sub-division of the work plan — not a single task, not a percentage of progress, and generally not a time slice[^ls-guide].
- **Split long-running WPs (management, dissemination) along reporting-period boundaries** (e.g. "Management RP1", "Management RP2") so they can be paid at interim payments[^ls-guide][^ffg-ls].
- Keep WPs small enough to complete within a reporting period; incomplete WPs are not paid until completed (they can be completed and paid in a later period)[^ls-guide].
- At the **final** report, **partially completed** WPs can be declared with a completion percentage and paid pro rata[^ls-guide].
- WPs are accepted when activities were carried out, essential tasks were completed, equivalent tasks were done, or deviations are justified[^ls-guide].

# During the grant

- Consortium may distribute money internally as it wishes; actual distribution "is invisible" to the Commission[^ls-guide].
- Transfers between WPs require an amendment and are allowed only for WPs not yet completed and when justified by the technical implementation[^ls-guide][^ffg-ls].
- "No negotiation" principle at grant preparation: the GA is based on the submitted proposal, adjusted only for obvious errors, legal compliance and the lump sum set in the evaluation result letter[^ls-guide].
- Use a lump-sum-aware consortium agreement: the DESCA model (v2.1, 2026) covers both actual-cost and lump-sum grants[^desca-21].

# Related
- [/rules/action-types-and-funding-rates.md](/rules/action-types-and-funding-rates.md)
- [/rules/proposal-template-and-page-limits.md](/rules/proposal-template-and-page-limits.md)
- [/rules/ipr-and-consortium-agreement.md](/rules/ipr-and-consortium-agreement.md)

[^ga-2026]: Horizon Europe WP 2026-2027 General Annexes, Annexes A, E, F, G — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
[^wp7-2026]: WP 2026-2027 Part 7 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
[^ls-guide]: DG RTD, "Lump sum funding: what do I need to know?" V3.0, 24 June 2024 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/ls-funding-what-do-i-need-to-know_he_en.pdf
[^ls-decision]: Lump sum decision, 7 July 2021 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/ls-decision_he_en.pdf
[^ffg-ls]: FFG, Lump Sum Funding in Horizon Europe — https://www.ffg.at/en/europe/heu/legal-financial/theme_lumpsum
[^af-ria-ia]: Standard application form HE RIA/IA V5.1 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/temp-form/af/af_he-ria-ia_en.pdf
[^desca-21]: BayFOR on DESCA 2.1 — https://www.bayfor.org/en/news/latest-news/news-detail/5402-desca-21-released-updated-consortium-agreement-for-horizon-europe-projects.html
