---
type: Rule
title: "Financial support to third parties (FSTP / cascade funding) rules"
description: The legal conditions for cascade funding in Horizon Europe (open calls on the F&T Portal, at least 2 months open, transparency, European dimension; default €60,000 cap per recipient) and the much higher OIS limits — €400,000 per third party and up to 80% of the budget in 2026 DATA-02 (70% in 2025 DATA-11), €300,000 and 70%/20% in HUMAN-02.
tags: [open-internet-stack, cluster-4, fstp, cascade-funding, horizon-europe-rules]
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
  - id: wp7-2025
    title: "Horizon Europe Work Programme 2025 — 7. Digital, Industry and Space"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2025/wp-7-digital-industry-and-space_horizon-2025_en.pdf
  - id: aga-v2
    title: "EU Grants: AGA — Annotated Grant Agreement V2.0 (01.04.2025)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/aga_en.pdf
  - id: si-fiches
    title: "Cluster 4 Digital 2026 topic briefings (Commission Q&A per topic, gov.si)"
    resource: https://www.gov.si/assets/ministrstva/MVZI/Znanost/Obzorje-Evropa/Cluster-4/Cluster-4-digital-2026.pdf
---
# Default rules (apply whenever a topic allows FSTP)

From General Annex B[^ga-2026]:
- The proposal must describe objectives and expected results of the support and the elements in the application template.
- Open calls must be **published widely** and follow EU standards of **transparency, equal treatment, conflict of interest and confidentiality**.
- All calls for third parties must be published on the **EU Funding & Tenders Portal** and on the beneficiaries' websites.
- Calls must stay open **at least 2 months**; deadline changes must be announced and registered applicants informed.
- Outcomes must be published without delay: description of each third-party project, award date, duration, legal name and country of the recipient.
- Calls must have a **clear European dimension**.
- Detailed rules: AGA Articles 6.2.D.1 and 9.4[^ga-2026].

**Amount cap.** The maximum per recipient must be set in the call conditions and "may not be more than 60 000 EUR, unless the objective of the actions ... would otherwise be impossible or overly difficult to achieve" (Article 207 Financial Regulation 2024/2509)[^aga-v2]. FSTP costs are excluded from the 25% indirect-cost base[^ga-2026]. Recipients are subject to the same exclusions as participants (Russia/Belarus, sanctions, and — in RIA/IA — entities established in China)[^ga-2026].

# OIS topic exceptions (WP 2025 and WP 2026-2027)

| Topic | FSTP allowed | Max per third party | Max share of EU contribution/budget | Form |
|---|---|---|---|---|
| HORIZON-CL4-2026-04-DATA-02 OIS Sovereign Solutions (RIA) | yes | **€400,000** | **80%** of requested EU contribution | grants only |
| HORIZON-CL4-2026-04-HUMAN-02, "Architectural Framework" area | yes | **€300,000** | **70%** of total proposed budget | grants only |
| HORIZON-CL4-2026-04-HUMAN-02, "Applications" area | yes | **€300,000** | **20%** of total proposed budget | grants only |
| HORIZON-CL4-2026-04-DATA-03 Support for Scale (CSA) | not provided for | — | — | — |
| HORIZON-CL4-2025-03-DATA-11 OIS technological commons (RIA, WP 2025) | yes | **€400,000** | **70%** of requested EU contribution | grants only[^wp7-2025] |

Source: topic conditions[^wp7-2026][^wp7-2025]. The WP justifies the high caps to allow (1) a legal entity to receive FSTP under several grants and (2) third-party projects to reach maturity and sustainability through multiple awards[^wp7-2026].

Further OIS conditions for DATA-02: calls should **primarily target internet innovators and adopters of open-source technologies**; applicants must provide the **programme logic** for third-party projects, manage their lifecycle and provide technical and non-technical support, and **these support tasks cannot be paid from the FSTP budget**[^wp7-2026]. For HUMAN-02, the Commission briefing says calls should target European open-source communities[^si-fiches].

# What this means for applicants

- An OIS consortium is effectively a **re-granting operator** plus technical service providers (security audits, packaging, accessibility, localisation, licensing advice). Experience running open calls (evaluation, conflict-of-interest handling, payments by milestones) is part of the implementation score.
- Budget the operator costs (call management, mentoring, audits) separately from the cascade pot.
- If you are a small team or individual developer, applying to the cascade calls is usually a better route than joining a consortium; see [/context/cascade-funding-explained.md](/context/cascade-funding-explained.md).

# Related
- [/topics/wp-2026-2027/horizon-cl4-2026-04-data-02.md](/topics/wp-2026-2027/horizon-cl4-2026-04-data-02.md)
- [/topics/wp-2026-2027/horizon-cl4-2026-04-data-03.md](/topics/wp-2026-2027/horizon-cl4-2026-04-data-03.md)
- [/topics/wp-2026-2027/horizon-cl4-2026-04-human-02.md](/topics/wp-2026-2027/horizon-cl4-2026-04-human-02.md)
- [/context/cascade-funding-explained.md](/context/cascade-funding-explained.md)
- [/rules/action-types-and-funding-rates.md](/rules/action-types-and-funding-rates.md)
- [/rules/ipr-and-consortium-agreement.md](/rules/ipr-and-consortium-agreement.md)

[^ga-2026]: General Annexes WP 2026-2027, Annexes B and G — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
[^wp7-2026]: WP 2026-2027 Part 7 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
[^wp7-2025]: WP 2025 Part 7, HORIZON-CL4-2025-03-DATA-11 conditions — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2025/wp-7-digital-industry-and-space_horizon-2025_en.pdf
[^aga-v2]: AGA V2.0, Data Sheet footnote on FSTP amounts — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/aga_en.pdf
[^si-fiches]: Cluster 4 Digital 2026 topic briefings (gov.si) — https://www.gov.si/assets/ministrstva/MVZI/Znanost/Obzorje-Evropa/Cluster-4/Cluster-4-digital-2026.pdf
