---
type: Rule
title: "IPR, exploitation obligations and the consortium agreement"
description: Horizon Europe IP rules relevant to open-source consortia — ownership of results, access rights (AGA Article 16 / Annex 5), exploitation and Horizon Results Platform duties, the OIS right-to-object clause, and the mandatory consortium agreement (DESCA 2.1 with software clauses).
tags: [open-internet-stack, cluster-4, ipr, consortium-agreement, desca, horizon-europe-rules]
verified_on: 2026-10-03
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ga-2026
    title: "Horizon Europe Work Programme 2026-2027 — 15. General Annexes (PDF dated 29 Sep 2026)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
  - id: pg-2025
    title: "EU Grants: HE Programme Guide V5.1 (15.09.2025)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/programme-guide_horizon_en.pdf
  - id: aga-v2
    title: "EU Grants: AGA — Annotated Grant Agreement V2.0 (01.04.2025)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/aga_en.pdf
  - id: wp7-2026
    title: "Horizon Europe Work Programme 2026-2027 — 7. Digital, Industry and Space"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
  - id: desca-21
    title: "BayFOR: DESCA 2.1 released — updated consortium agreement for Horizon Europe projects"
    resource: https://www.bayfor.org/en/news/latest-news/news-detail/5402-desca-21-released-updated-consortium-agreement-for-horizon-europe-projects.html
  - id: desca-ip-helpdesk
    title: "European IP Helpdesk: Model Consortium Agreement DESCA Horizon Europe 2.0"
    resource: https://intellectual-property-helpdesk.ec.europa.eu/ip-management-and-resources/publications/model-consortium-agreement-desca-horizon-europe-20_en
  - id: desca-pdf-21
    title: "DESCA Horizon Europe 2.1 with elucidations (28 Feb 2026, PDF)"
    resource: https://www.desca-agreement.eu/assets/helmholtz_gemeinschaft/user_upload/Brussels_Office/DESCA/2026/20260228_DESCA_HorizonEurope_.2.1_with_elucidations_final.pdf
---
# Grant-agreement IP rules (AGA Article 16 and Annex 5)

The applicable version is the **AGA — Annotated Grant Agreement V2.0 (1 April 2025)**; Article 16 covers IPR, background and results, access rights and rights of use, and refers to Annex 5 for detail[^aga-v2]. Key points:

- **Results belong to the beneficiary that generates them** (joint ownership if generated jointly); background stays with its owner. The consortium identifies background in writing (usually in the consortium agreement)[^aga-v2][^pg-2025].
- **Access rights** between beneficiaries: royalty-free to results and background needed to implement the action; on fair and reasonable conditions for exploitation, subject to agreement[^aga-v2]. EU institutions and national authorities may get access to results for policy purposes (non-commercial)[^aga-v2].
- **Exploitation:** beneficiaries must use best efforts to exploit results (directly or via others); if a result is not exploited within **one year after the action ends**, they must use the **Horizon Results Platform** to find interested parties unless otherwise agreed[^pg-2025].
- **Standards:** for 4 years after the action, inform the granting authority if results could contribute to European or international standards[^ga-2026].
- **Public emergency:** on request, grant non-exclusive licences on fair and reasonable terms (up to 4 years after the action)[^ga-2026].
- **Continuity/interoperability clause** (only if the call imposes it): results must be made freely available under open or open-source licences[^aga-v2].

# OIS-specific clause: right to object

DATA-02, DATA-03 and HUMAN-02 all state that the granting authority (DG CNECT and HaDEA) may, **up to 4 years after the end of the action, object to a transfer of ownership or exclusive licensing of results**, and beneficiaries must notify it **before** such a transfer[^wp7-2026]. Non-exclusive open-source licensing is unaffected; selling the company that holds the copyright to a non-EU acquirer or granting an exclusive dual-licence deal is the scenario to plan for.

# Consortium agreement (CA)

- **Mandatory** for multi-beneficiary grants unless the call says otherwise; it can redistribute EU funding internally and protects members in disputes[^ga-2026].
- A private agreement among beneficiaries; it must not contradict the grant agreement and should be concluded **before grant signature**[^pg-2025].
- It should settle IPR management and ownership early to maximise exploitation[^pg-2025].

**DESCA** (Development of a Simplified Consortium Agreement) is the most used model. DESCA Horizon Europe 2.1 (dated 28 February 2026, reflecting modifications of August 2025) was produced by a group including EARTO, KoWi, LERU, ANRT, VTT and ZENIT, coordinated by Fraunhofer and the Helmholtz Association, and works for both actual-cost and lump-sum grants[^desca-21][^desca-pdf-21]. A DESCA HE variant for associated partners exists, and the European IP Helpdesk hosts the model[^desca-ip-helpdesk].

For software-heavy OIS projects use the **software special clauses** (sublicensing, open-source code) and state in the CA:
- the outbound licence(s) for each software result (e.g. EUPL/Apache/GPL) and that partners consent to release under them;
- how background code (and its licence) is made available;
- how contributions by FSTP recipients and community contributors are licensed (contributor agreements/DCO) — cascade grantees are not CA parties, so their IP terms go into the open-call grant agreement;
- who may act as the CRA "open-source steward" for each component.

# Related
- [/rules/open-source-licensing-and-open-science.md](/rules/open-source-licensing-and-open-science.md)
- [/rules/security-restrictions.md](/rules/security-restrictions.md)
- [/rules/financial-support-to-third-parties.md](/rules/financial-support-to-third-parties.md)

[^ga-2026]: General Annexes WP 2026-2027, Annex G and "Important" box — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
[^pg-2025]: HE Programme Guide V5.1, dissemination and exploitation section — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/programme-guide_horizon_en.pdf
[^aga-v2]: AGA V2.0, Article 16 and Annex 5 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/aga_en.pdf
[^wp7-2026]: WP 2026-2027 Part 7 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
[^desca-21]: BayFOR, DESCA 2.1 — https://www.bayfor.org/en/news/latest-news/news-detail/5402-desca-21-released-updated-consortium-agreement-for-horizon-europe-projects.html
[^desca-ip-helpdesk]: European IP Helpdesk, DESCA HE 2.0 — https://intellectual-property-helpdesk.ec.europa.eu/ip-management-and-resources/publications/model-consortium-agreement-desca-horizon-europe-20_en
[^desca-pdf-21]: DESCA HE 2.1 with elucidations (PDF) — https://www.desca-agreement.eu/assets/helmholtz_gemeinschaft/user_upload/Brussels_Office/DESCA/2026/20260228_DESCA_HorizonEurope_.2.1_with_elucidations_final.pdf
