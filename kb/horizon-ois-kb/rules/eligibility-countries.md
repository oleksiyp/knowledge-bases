---
type: Rule
title: "Who can participate and who can be funded (countries, association status 2026)"
description: Country eligibility for Horizon Europe Cluster 4 / Open Internet Stack grants as of October 2026 — Member States, 23 associated countries (incl. UK, Switzerland, Ukraine, Moldova, Norway, Egypt, Japan), low/middle-income countries, and the exclusions that bite in OIS topics.
tags: [open-internet-stack, cluster-4, eligibility, associated-countries, horizon-europe-rules]
rule_scope: all Horizon Europe calls; OIS-specific deviations flagged
applies_to: [HORIZON-CL4-2026-04-DATA-02, HORIZON-CL4-2026-04-DATA-03, HORIZON-CL4-2026-04-HUMAN-02, HORIZON-CL4-2025-03-DATA-11]
verified_on: 2026-10-03
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ga-2026
    title: "Horizon Europe Work Programme 2026-2027 — 15. General Annexes (PDF dated 29 Sep 2026)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
  - id: lpc-2026
    title: "EU Grants: List of Participating Countries in Horizon Europe, V4.1 – 16.09.2026"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/list-3rd-country-participation_horizon-euratom_en.pdf
  - id: wp7-2026
    title: "Horizon Europe Work Programme 2026-2027 — 7. Digital, Industry and Space"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
  - id: rtd-australia-2026
    title: "The European Union and Australia successfully conclude Horizon Europe negotiations (9 June 2026)"
    resource: https://research-and-innovation.ec.europa.eu/news/all-research-and-innovation-news/european-union-and-australia-successfully-conclude-horizon-europe-negotiations-2026-06-09_en
  - id: joint-statement-2026
    title: "Ten countries associated to Horizon Europe present joint statement on association to future EU programmes (25 Sep 2026)"
    resource: https://grantoffice.athenauni.eu/2026/09/25/ten-countries-associated-to-horizon-europe-present-joint-statement-on-association-to-future-eu-programmes/
---
# Summary

Horizon Europe separates **who may participate** (almost anyone) from **who may receive EU funding** (a defined country list). Any legal entity anywhere may take part, subject to the Regulation and topic conditions[^ga-2026]; but to be a funded beneficiary an entity must be established in an EU Member State (incl. outermost regions), an Overseas Country or Territory, a country associated to Horizon Europe, or a listed low/middle-income country[^ga-2026]. OIS topics add security restrictions on top of this (see [/rules/security-restrictions.md](/rules/security-restrictions.md)).

# Eligible for funding (as of October 2026)

| Group | Countries | Notes |
|---|---|---|
| EU Member States | all 27, incl. outermost regions | — [^ga-2026] |
| OCTs | Aruba, Bonaire, Curaçao, French Polynesia, French Southern and Antarctic Territories, Greenland, New Caledonia, Saba, Saint Barthélemy, Sint Eustatius, Sint Maarten, St. Pierre and Miquelon, Wallis and Futuna | [^ga-2026] |
| Associated to the **whole programme** | Albania, Armenia, Bosnia and Herzegovina, Egypt (from 2025 budget), Faroe Islands, Georgia, Iceland, Israel, Kosovo, Moldova, Montenegro, North Macedonia, Norway, Serbia, Switzerland (from 2025 budget), Tunisia, Türkiye, Ukraine, United Kingdom (all except the EIC Fund, from 2024 budget) | 19 whole-programme + 4 Pillar-II-only = 23 associated countries[^lpc-2026] |
| Associated to **Pillar II only** (covers Cluster 4) | Canada (from 2024 budget), Japan (from 2026 budget), New Zealand (from WP 2023), Republic of Korea (from 2025 budget) | Pillar II = "Global Challenges and European Industrial Competitiveness", which contains Cluster 4[^lpc-2026] |
| Transitional arrangements | Morocco (entire programme) | Treated as associated if the association agreement applies by grant signature[^lpc-2026][^ga-2026] |
| Low- and middle-income countries | ~120 countries listed in the General Annexes (e.g. Algeria, Kenya, Nigeria, Vietnam, South Africa) | Automatically eligible for funding, subject to EU restrictive measures[^ga-2026][^lpc-2026] |

Not yet associated: **Australia** concluded association negotiations on 9 June 2026 and is expected to participate in Pillar II from January 2027 under a transitional arrangement[^rtd-australia-2026] — it is not on the September 2026 list[^lpc-2026]. Liechtenstein does not intend to associate[^lpc-2026]. Entities from countries not on any list (e.g. USA, China, India, Brazil) can join without funding (usually as associated partners) unless the granting authority deems them essential[^ga-2026].

Ten associated countries (Australia, Canada, Iceland, Faroe Islands, Japan, New Zealand, Norway, South Korea, Switzerland, UK) issued a joint statement in September 2026 on association to future EU programmes (the post-2027 FP10)[^joint-statement-2026] — relevant if you plan long-term partnerships.

# Hard exclusions (any capacity, incl. as FSTP recipients)

- **Russia, Belarus, and non-government-controlled territories of Ukraine**: not eligible in any capacity (beneficiary, affiliated entity, associated partner, subcontractor, in-kind provider, or recipient of financial support to third parties); entities outside Russia >50% owned by Russian entities are also excluded[^ga-2026].
- **Entities under EU restrictive measures** (sanctions)[^ga-2026].
- **Hungarian public-interest trusts** (Act IX of 2021) cannot be in a funded role while Council Implementing Decision 2022/2506 applies; the Commission proposed lifting the measures on 23 September 2026 (COM/2026/516), not yet adopted by the Council at time of writing[^ga-2026].
- **China**: legal entities established in China are not eligible for any Innovation Action and, unless a destination is listed as an exception, any RIA[^ga-2026]. Both OIS destinations (Destination "agile and secure single market ... data-services and trustworthy AI" for DATA-02/03, and "human-centric innovation" for HUMAN-02) explicitly exclude Chinese entities from RIAs and IAs[^wp7-2026]. Chinese public universities supervised by MIIT are excluded from all actions[^ga-2026].

# CSA-specific rule

For Coordination and Support Actions (e.g. HORIZON-CL4-2026-04-DATA-03 "Open Internet Stack Support for Scale"), beneficiaries and affiliated entities must be established in a **Member State or Associated Country**; non-associated third-country entities may only join as associated partners[^ga-2026].

# How to read this for OIS

- UK, Swiss, Norwegian, Ukrainian, Moldovan, Serbian, Turkish, Israeli and Egyptian partners can be full funded beneficiaries in OIS topics and count toward the 3-country minimum ([/rules/consortium-composition.md](/rules/consortium-composition.md)).
- Canadian, Japanese, Korean and New Zealand entities are funded in Cluster 4 (Pillar II). Check each topic's eligibility box, because some Cluster 4 topics restrict participation under Article 22(5) to a named country subset (e.g. the 3C IA topic HORIZON-CL4-2027-04-DATA-08 limits participation to MS, Iceland, Norway, Canada, Israel, Korea, New Zealand, Switzerland and UK)[^wp7-2026].
- The OIS RIA/CSA topics are not limited that way; their restriction is the "protection of European communication networks" (high-risk suppliers) clause[^wp7-2026].
- Always re-check the live List of Participating Countries before submission and before grant signature: association must apply **at signature** for the status to count[^ga-2026].

# Related
- [/rules/consortium-composition.md](/rules/consortium-composition.md)
- [/rules/security-restrictions.md](/rules/security-restrictions.md)
- [/rules/financial-support-to-third-parties.md](/rules/financial-support-to-third-parties.md)
- [/rules/index.md](/rules/index.md)

[^ga-2026]: Horizon Europe WP 2026-2027 General Annexes, Annex B — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
[^lpc-2026]: List of Participating Countries in Horizon Europe, V4.1 (16.09.2026) — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/list-3rd-country-participation_horizon-euratom_en.pdf
[^wp7-2026]: WP 2026-2027 Part 7, Digital, Industry and Space — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
[^rtd-australia-2026]: European Commission R&I news, 9 June 2026 — https://research-and-innovation.ec.europa.eu/news/all-research-and-innovation-news/european-union-and-australia-successfully-conclude-horizon-europe-negotiations-2026-06-09_en
[^joint-statement-2026]: Athena University grant office news, 25 Sep 2026 — https://grantoffice.athenauni.eu/2026/09/25/ten-countries-associated-to-horizon-europe-present-joint-statement-on-association-to-future-eu-programmes/
