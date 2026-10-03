---
type: Rule
title: "Action types (RIA, IA, CSA) and funding rates"
description: What RIA, IA and CSA mean in Horizon Europe, the maximum funding rates (100% / 70% with 100% for non-profits / 100%), the 25% indirect-cost flat rate, pre-financing and the mutual insurance deduction — and which type each OIS topic uses.
tags: [open-internet-stack, cluster-4, funding-rates, action-types, horizon-europe-rules]
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
  - id: ft-topic-json
    title: "F&T Portal topic data (type of MGA) for HORIZON-CL4-2026-04-DATA-02, DATA-03, HUMAN-02"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2026-04-data-03
---
# Action types

| Type | What it funds (General Annex B) | Max funding rate |
|---|---|---|
| **RIA** — Research and Innovation Action | New knowledge or feasibility of a new/improved technology, product, process, service; may include basic/applied research, technology development and integration, testing, demonstration and validation of a small-scale prototype in a lab or simulated environment | **100%** |
| **IA** — Innovation Action | Plans and designs for new/improved products, processes or services: prototyping, testing, demonstrating, piloting, large-scale validation, market replication | **70%**, except **non-profit legal entities: up to 100%** |
| **CSA** — Coordination and Support Action | Accompanying measures (standardisation, dissemination, awareness, networking, coordination, policy support); excludes R&I activities (except under Widening) | **100%** |
| Programme co-fund | Programmes run by R&I funders | 30–70% |
| PCP / PPI | Pre-commercial procurement / procurement of innovative solutions | 100% / 50% |

Definitions and rates: General Annexes B and G[^ga-2026]. "Other funding rates may be set out in the specific call/topic conditions"[^ga-2026] — none of the OIS topics does[^wp7-2026].

# OIS topics by type and grant model

| Topic | Type | Grant model | Typical EU contribution |
|---|---|---|---|
| HORIZON-CL4-2026-04-DATA-02 Open Internet Stack Sovereign Solutions | RIA | actual-cost (HORIZON-AG) | €7.00–10.25M, 2 projects, €20.5M total |
| HORIZON-CL4-2026-04-DATA-03 Open Internet Stack Support for Scale | CSA | lump sum (HORIZON-AG-LS) | ~€4.0M, 1 project |
| HORIZON-CL4-2026-04-HUMAN-02 Web 4.0 architectural framework and OIS applications for virtual worlds | RIA | actual-cost (HORIZON-AG) | €2.8–8.4M, €16.8M total |

Budgets and lump-sum clause from the WP[^wp7-2026]; model grant agreement type from the F&T Portal topic data[^ft-topic-json].

# Cost model for actual-cost grants (DATA-02, HUMAN-02)

- Budget-based mixed actual-cost grant: reimburses only eligible costs actually incurred[^ga-2026].
- Budget categories: personnel (actual or unit costs, incl. SME-owner unit costs and average personnel costs), subcontracting, purchases (travel, equipment, other goods/services), **financial support to third parties** (only where the topic allows), internally invoiced goods/services[^ga-2026].
- **Indirect costs: 25% flat rate** of eligible direct costs, excluding subcontracting, FSTP and unit costs/lump sums that already include indirect costs[^ga-2026]. Because FSTP is excluded from the 25% base, a project that puts 80% of its budget into cascade grants gets very little overhead — plan staffing accordingly.
- No-profit rule: grants may not produce a profit; any surplus is deducted at the end[^ga-2026].

# Payments (all grant types)

- **Pre-financing** normally **160% of the average EU funding per reporting period** (max grant ÷ number of periods), less for single-period actions[^ga-2026].
- **5–8% of the maximum grant** is withheld from pre-financing for the **Mutual Insurance Mechanism** and released at the end[^ga-2026].
- Interim payments after each periodic report; final balance after the final report (recovery if overpaid)[^ga-2026].
- Liability is individual: each beneficiary is liable only for its own debts (and its affiliated entities')[^ga-2026].

# Budget flexibility at call level

Topic budgets are indicative; final budgets may change by up to 20% after evaluation[^ga-2026]. The per-project "expected EU contribution" does not preclude other amounts[^wp7-2026], but requesting far above the range reduces the number of fundable projects and is often penalised in the implementation score.

# Related
- [/rules/lump-sum-funding.md](/rules/lump-sum-funding.md)
- [/rules/financial-support-to-third-parties.md](/rules/financial-support-to-third-parties.md)
- [/rules/trl-definitions.md](/rules/trl-definitions.md)

[^ga-2026]: Horizon Europe WP 2026-2027 General Annexes, Annexes B and G — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
[^wp7-2026]: WP 2026-2027 Part 7 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
[^ft-topic-json]: F&T Portal topic pages (type of MGA: HORIZON-AG vs HORIZON-AG-LS) — https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2026-04-data-03
