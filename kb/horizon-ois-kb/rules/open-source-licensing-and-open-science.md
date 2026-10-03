---
type: Rule
title: "Open source, licensing, open science and standards expectations for OIS"
description: What Horizon Europe requires by default (open access to publications, DMP, FAIR data) versus what the Open Internet Stack topics expect (open-source, made-in-Europe, standards-based solutions; OSI/FSF licences; maintenance, cataloguing, audits, EU-law compliance).
tags: [open-internet-stack, cluster-4, open-source, licensing, open-science, standardisation, horizon-europe-rules]
verified_on: 2026-10-03
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wp7-2026
    title: "Horizon Europe Work Programme 2026-2027 — 7. Digital, Industry and Space"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
  - id: pg-2025
    title: "EU Grants: HE Programme Guide V5.1 (15.09.2025)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/programme-guide_horizon_en.pdf
  - id: aga-v2
    title: "EU Grants: AGA — Annotated Grant Agreement V2.0 (01.04.2025)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/aga_en.pdf
  - id: ga-2026
    title: "Horizon Europe Work Programme 2026-2027 — 15. General Annexes (PDF dated 29 Sep 2026)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
  - id: af-ria-ia
    title: "EU Grants: Application form (HE RIA and IA) V5.1 – 22.01.2026"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/temp-form/af/af_he-ria-ia_en.pdf
  - id: com-2026-503
    title: "COM(2026) 503 final — Communication on European Tech Sovereignty, accompanied by an EU Open Source Strategy (Council ST 10220/26, 4 June 2026)"
    resource: https://data.consilium.europa.eu/doc/document/ST-10220-2026-INIT/en/pdf
  - id: si-fiches
    title: "Cluster 4 Digital 2026 topic briefings (Commission Q&A per topic, gov.si)"
    resource: https://www.gov.si/assets/ministrstva/MVZI/Znanost/Obzorje-Evropa/Cluster-4/Cluster-4-digital-2026.pdf
---
# Two layers

1. **Horizon-wide open science obligations** (apply to every grant).
2. **OIS topic expectations** — not a formal licence clause, but the expected outcomes and scope make open source the whole point, and evaluators score against them.

# 1. Horizon-wide rules

| Obligation | Status | Source |
|---|---|---|
| Open access to peer-reviewed publications: deposit in a trusted repository, immediate open access under open licence (CC BY or equivalent) | **mandatory** (AGA Art. 17, Annex 5) | [^pg-2025][^aga-v2] |
| Data Management Plan (FAIR) as a deliverable by **month 6**, updated towards project end | **mandatory** | [^af-ria-ia][^pg-2025] |
| Research data "as open as possible, as closed as necessary" | default open, exceptions allowed | [^pg-2025] |
| Access to data/results needed to **validate conclusions of publications** (incl. software, workflows, protocols) | mandatory under WP 2026-2027 additional practices | [^ga-2026][^pg-2025] |
| Open access to **software**, models, algorithms, workflows | "not required but **strongly recommended**" | [^pg-2025] |
| Public-emergency deposit under CC BY/CC0 on request | mandatory if triggered | [^ga-2026] |
| Inform the granting authority for **4 years** after the action if results could contribute to European or international **standards** | mandatory for all WP 2026-2027 grants | [^ga-2026] |

**Software licences.** The Programme Guide states that, except CC0, Creative Commons licences are **not appropriate for software** (fine for documentation); instead it "strongly recommend[s]" licences "listed as free by the Free Software Foundation and listed as open source by the Open Source Initiative"[^pg-2025]. The 2026 EU Open Source Strategy defines open source as software under licences meeting the OSI Open Source Definition — e.g. GPL, Apache-2.0, MIT, MPL-2.0, EPL-2.0 and the **EUPL**[^com-2026-503].

**Grant-agreement hook.** The AGA contains an optional clause: where call conditions impose continuity or interoperability obligations, beneficiaries must make materials and results freely available online "under [open licences] [or] [open source licences]"[^aga-v2]. The OIS topics in WP 2026-2027 do **not** invoke such a clause in their conditions[^wp7-2026] — the open-source expectation comes through the award criteria.

# 2. What the OIS topics expect

**HORIZON-CL4-2026-04-DATA-02 Open Internet Stack Sovereign Solutions (RIA)** — expected outcome is "a large selection of Open-Source solutions" organised under the OIS framework built in WP 2025 that are[^wp7-2026]:
- "Open source and made in Europe", delivering credible alternatives for citizens, governments and companies;
- paced for easy deployment by European providers, integrators and verticals;
- interoperable, standard-based and decentralised.

Proposals must show: technical maturity incl. post-quantum cryptography and **alignment with standards including for software and hardware supply chain**; a community with critical mass; user/deployer interest; and a credible path into the OIS catalogue, app stores and **alignment with EU regulation**. They must describe **maintenance, cataloguing, marketing and communication** and the relationship with the Support-for-Scale CSA[^wp7-2026].

**HORIZON-CL4-2026-04-DATA-03 Support for Scale (CSA)** must cover cataloguing, **security and accessibility audits**, advice on **sustainability models, standardisation, licensing schemes, localisation**, training material stressing compliance with **GDPR, DSA/DMA, CRA**, lists of dependencies, and policy sandbox tools for compliance-by-design[^wp7-2026].

**HORIZON-CL4-2026-04-HUMAN-02 Web 4.0/OIS (RIA)** — building blocks "that rely on Open Source software", commons based on open-source software, **open standards and open hardware**; cross-cutting requirements include security and accessibility audits, packaging, localisation in EU languages, "advising on licensing" and a clear **standardisation strategy**[^wp7-2026].

Commission briefings for these topics list "Proprietary" among the things they do **not** want[^si-fiches].

# Practical licensing checklist for applicants

- Pick an OSI-approved licence for all code produced (state it per component), and REUSE-style licence metadata; reserve CC BY for docs and CC0 for data where appropriate[^pg-2025][^com-2026-503].
- Address licence compatibility of dependencies and your SBOM/supply-chain posture — DATA-02 explicitly scores supply-chain standards alignment[^wp7-2026].
- Explain copyright/IP ownership in the consortium agreement so that open licensing is not blocked by one partner ([/rules/ipr-and-consortium-agreement.md](/rules/ipr-and-consortium-agreement.md)).
- Plan **standardisation** concretely (IETF, W3C, ETSI, CEN/CENELEC) — standards bodies may be consortium members[^pg-2025], and you have a 4-year post-project reporting duty on standards relevance[^ga-2026].
- Cover **CRA** obligations (open-source steward role, vulnerability handling) and GDPR/DSA/DMA compliance by design, since the CSA will train adopters on these[^wp7-2026].

# Related
- [/topics/wp-2026-2027/horizon-cl4-2026-04-data-02.md](/topics/wp-2026-2027/horizon-cl4-2026-04-data-02.md)
- [/topics/wp-2026-2027/horizon-cl4-2026-04-data-03.md](/topics/wp-2026-2027/horizon-cl4-2026-04-data-03.md)
- [/topics/wp-2026-2027/horizon-cl4-2026-04-human-02.md](/topics/wp-2026-2027/horizon-cl4-2026-04-human-02.md)
- [/rules/ipr-and-consortium-agreement.md](/rules/ipr-and-consortium-agreement.md)
- [/context/tech-sovereignty-package-2026.md](/context/tech-sovereignty-package-2026.md)
- [/rules/proposal-template-and-page-limits.md](/rules/proposal-template-and-page-limits.md)

[^wp7-2026]: WP 2026-2027 Part 7 (DATA-02, DATA-03, HUMAN-02 topic texts) — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
[^pg-2025]: HE Programme Guide V5.1, open science and standardisation sections — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/programme-guide_horizon_en.pdf
[^aga-v2]: AGA V2.0, Article 16/17 and Annex 5 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/aga_en.pdf
[^ga-2026]: General Annexes WP 2026-2027, Annex G — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
[^af-ria-ia]: Application form HE RIA/IA V5.1 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/temp-form/af/af_he-ria-ia_en.pdf
[^com-2026-503]: COM(2026) 503 final, footnote 61 — https://data.consilium.europa.eu/doc/document/ST-10220-2026-INIT/en/pdf
[^si-fiches]: Cluster 4 Digital 2026 topic briefings (gov.si) — https://www.gov.si/assets/ministrstva/MVZI/Znanost/Obzorje-Evropa/Cluster-4/Cluster-4-digital-2026.pdf
