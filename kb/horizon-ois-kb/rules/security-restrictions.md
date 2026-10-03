---
type: Rule
title: "Security restrictions: Article 22(5)/22(6), communication-network restrictions and China rules"
description: Which security-driven participation restrictions apply to Open Internet Stack topics (high-risk-supplier exclusion, China exclusion from RIA/IA, right to object to transfers) and how they differ from full Article 22(5) country restrictions used elsewhere in Cluster 4.
tags: [open-internet-stack, cluster-4, eligibility, security, article-22-5, horizon-europe-rules]
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
  - id: lpc-2026
    title: "EU Grants: List of Participating Countries in Horizon Europe, V4.1 – 16.09.2026"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/list-3rd-country-participation_horizon-euratom_en.pdf
  - id: pg-2025
    title: "EU Grants: HE Programme Guide V5.1 (15.09.2025)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/programme-guide_horizon_en.pdf
---
# Summary

Three layers of security rules can apply to a Cluster 4 topic. For the **Open Internet Stack** topics of WP 2026-2027 the applicable layers are (1) the "protection of European communication networks" restriction and (2) the destination-level China exclusion for RIAs/IAs, plus (3) the granting authority's right to object to transfers/exclusive licences. They are **not** subject to a full Article 22(5) country-list restriction[^wp7-2026].

| Topic | Comm.-network restriction | China excluded (RIA/IA) | Art. 22(5) country list | Right to object to transfer (4 yrs) |
|---|---|---|---|---|
| HORIZON-CL4-2026-04-DATA-02 OIS Sovereign Solutions (RIA) | yes | yes | no | yes |
| HORIZON-CL4-2026-04-DATA-03 OIS Support for Scale (CSA) | yes | n/a (CSA) | no | yes |
| HORIZON-CL4-2026-04-HUMAN-02 Web 4.0 & OIS apps (RIA) | yes | yes | no | yes |
| HORIZON-CL4-2027-04-DATA-08 3C demand pilots (IA, uses OIS components) | — | yes | **yes** (MS + IS, NO, CA, IL, KR, NZ, CH, UK) | — |

Source: topic conditions in WP Part 7[^wp7-2026].

# 1. "Subject to restrictions for the protection of European communication networks"

Defined in General Annex B. Entities assessed as **high-risk suppliers of mobile network communication equipment** (and entities they own or control) are not eligible as beneficiaries, affiliated entities or associated partners[^ga-2026]. The list of high-risk suppliers is the one in the NIS Cooperation Group's 2023 second progress report on the EU 5G Toolbox and the Commission's June 2023 Communication on its implementation[^ga-2026]. Assessment criteria include likelihood of interference from a non-associated third country (ownership/governance, links to a foreign government, the third country's legislation and offensive cyber policy), supply-chain security practices, and risks identified by Member States[^ga-2026]. Exceptions may be requested case by case[^ga-2026].

Practical effect: avoid any partner that is, or is owned/controlled by, a vendor named as high-risk under the 5G Toolbox.

# 2. China

Under Article 22(6) of the Horizon Europe Regulation, entities established in China cannot participate in any Innovation Action and, by default, any RIA[^ga-2026]. Both destinations hosting OIS topics restate that Chinese entities are not eligible for RIAs and IAs[^wp7-2026]. This covers **any capacity**, including subcontractor and recipient of financial support to third parties — relevant when you design cascade open calls[^ga-2026]. Separately, China-controlled entities established in eligible countries are excluded from IAs in the ten critical technology areas (incl. AI, advanced connectivity/navigation/digital) where topic conditions say so[^ga-2026].

# 3. Article 22(5) restrictions (when a topic invokes them)

For actions related to EU strategic assets, interests, autonomy or security, a topic may limit participation to entities established in Member States only or in MS plus named countries, and may exclude entities **controlled** by non-eligible countries unless the entity's country of establishment positively assesses guarantees[^ga-2026][^lpc-2026]. Example in Cluster 4: the 3C demand-side pilot topic HORIZON-CL4-2027-04-DATA-08 restricts participation to MS, Iceland, Norway, Canada, Israel, Korea, New Zealand, Switzerland and the UK, and China-controlled entities cannot submit guarantees[^wp7-2026]. Guarantees must ensure control is not exercised to restrict the action, sensitive information is protected, and results/IP stay in eligible countries[^wp7-2026].

# 4. Right to object to transfers and exclusive licences

All three OIS topics provide that the granting authority (DG CNECT and HaDEA) may, **up to 4 years after the end of the action**, object to a transfer of ownership or exclusive licensing of results; beneficiaries must notify before such a transfer[^wp7-2026]. Where call conditions impose obligations tied to strategic-autonomy restrictions, these also apply up to four years after the action[^pg-2025]. For open-source projects this rarely bites (results are licensed non-exclusively), but it matters if you plan to sell the company that owns the copyright or to grant an exclusive commercial licence.

# 5. Other security obligations

- EU classified information (EUCI) and sensitive information trigger a security appraisal; see [/rules/ethics-and-security-self-assessment.md](/rules/ethics-and-security-self-assessment.md)[^ga-2026].
- Russia/Belarus exclusions and sanctions apply in all topics ([/rules/eligibility-countries.md](/rules/eligibility-countries.md))[^ga-2026].

# Related
- [/topics/wp-2026-2027/horizon-cl4-2026-04-data-02.md](/topics/wp-2026-2027/horizon-cl4-2026-04-data-02.md)
- [/topics/wp-2026-2027/horizon-cl4-2026-04-data-03.md](/topics/wp-2026-2027/horizon-cl4-2026-04-data-03.md)
- [/topics/wp-2026-2027/horizon-cl4-2026-04-human-02.md](/topics/wp-2026-2027/horizon-cl4-2026-04-human-02.md)
- [/rules/eligibility-countries.md](/rules/eligibility-countries.md)
- [/rules/ipr-and-consortium-agreement.md](/rules/ipr-and-consortium-agreement.md)
- [/rules/financial-support-to-third-parties.md](/rules/financial-support-to-third-parties.md)

[^ga-2026]: Horizon Europe WP 2026-2027 General Annexes, Annex B — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
[^wp7-2026]: WP 2026-2027 Part 7 (topic specific conditions) — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
[^lpc-2026]: List of Participating Countries V4.1 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/list-3rd-country-participation_horizon-euratom_en.pdf
[^pg-2025]: HE Programme Guide V5.1 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/programme-guide_horizon_en.pdf
