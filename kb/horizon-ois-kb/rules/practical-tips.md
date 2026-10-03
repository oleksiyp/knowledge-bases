---
type: Rule
title: "Practical tips for OIS proposals (from Commission briefings, rules and evaluation data)"
description: Evidence-based advice for Open Internet Stack applicants — what the Commission says it does and does not want, how to hit the 14/15 cut-off, consortium and FSTP design, and common admissibility/eligibility traps — each tied to an official source.
tags: [open-internet-stack, cluster-4, proposal-writing, tips, horizon-europe-rules]
verified_on: 2026-10-03
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: si-fiches
    title: "Cluster 4 Digital 2026 topic briefings (Commission Q&A per topic: 'what we do NOT want', relevant projects, follow-up funding), compiled PDF hosted by the Slovenian ministry (gov.si)"
    resource: https://www.gov.si/assets/ministrstva/MVZI/Znanost/Obzorje-Evropa/Cluster-4/Cluster-4-digital-2026.pdf
  - id: wp7-2026
    title: "Horizon Europe Work Programme 2026-2027 — 7. Digital, Industry and Space"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
  - id: ga-2026
    title: "Horizon Europe Work Programme 2026-2027 — 15. General Annexes (PDF dated 29 Sep 2026)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
  - id: ft-data02
    title: "F&T Portal topic page HORIZON-CL4-2026-04-DATA-02 — evaluation results (20 Aug 2026)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2026-04-data-02
  - id: af-ria-ia
    title: "EU Grants: Application form (HE RIA and IA) V5.1 – 22.01.2026"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/temp-form/af/af_he-ria-ia_en.pdf
  - id: ls-guide
    title: "Lump sum funding: what do I need to know? V3.0 (24 June 2024)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/ls-funding-what-do-i-need-to-know_he_en.pdf
  - id: nlnet-stocktaking
    title: "NLnet: Transitioning from NGI to Open Internet Stack — open calls temporarily paused (12 Jun 2026)"
    resource: https://nlnet.nl/news/2026/20260612-NGIZero-stocktaking.html
---
# 1. Know what the Commission explicitly does not want

The Commission's topic briefings for the 2026 OIS topics say[^si-fiches]:
- **DATA-02 Sovereign Solutions**: not wanted — "Proprietary, experimental, outside the 3 technology areas" (network & transport; sovereign OS & firmware incl. smartphones; open-source productivity & supply-chain tools such as federated forges)[^wp7-2026].
- **DATA-03 Support for Scale**: not wanted — a "Generic communication/support proposal".
- **HUMAN-02 Web 4.0/OIS**: not wanted — "Proprietary, experimental, outside the 2 areas".
- Target stakeholders for DATA-02: those "familiar with Open Source solutions and demonstrating capabilities to move projects to deployment level in use cases" and **deployers of technologies**.
- Relevant prior work: NGI cascade projects in the same areas (searchable on ngi.eu "discover NGI innovations"); for DATA-03, the projects stemming from WP 2025 OIS and Web 4.0 topics.
- **Follow-up funding: "Not planned for 2027"** for all three topics — WP 2026-2027 has no further dedicated OIS call after April 2026[^si-fiches][^wp7-2026].

# 2. Write to the four DATA-02 "proofs"

DATA-02 lists what proposals "are expected to demonstrate"[^wp7-2026]: (1) technical maturity — scalability, resiliency, post-quantum crypto, standards alignment incl. supply chain, efficiency; (2) a community with critical mass; (3) evidence of use cases and user/deployer interest; (4) a credible path into the OIS catalogue, app stores and EU-regulation alignment. Give each its own sub-heading with numbers (contributors, releases, downloads, deployments, letters of intent from deployers). Also cover maintenance, cataloguing, marketing and the relationship with the DATA-03 CSA, and synergies with WP 2025 OIS, 3C and Web 4.0 projects[^wp7-2026].

# 3. Aim for 14+/15, not the threshold

The formal thresholds are 3 per criterion and 10 overall[^ga-2026], but in 2026 the funding cut-off was **14.0** for DATA-02 and DATA-03 and 13.5 for HUMAN-02; 24 of 31 DATA-02 proposals passed the thresholds and only 3 were funded[^ft-data02]. A single weak criterion (e.g. a 4.0 in Implementation) usually means no grant.

# 4. Design the cascade properly (if you use FSTP)

- DATA-02 allows up to 80% of the EU contribution as FSTP, max €400k per third party; programme logic, lifecycle management and technical/non-technical support **must be funded outside** the FSTP pot[^wp7-2026].
- Respect the General Annex conditions: open calls on the F&T Portal, open ≥2 months, published results, European dimension[^ga-2026].
- Consider the existing operator landscape: NLnet paused NGI Zero calls in June 2026 to transition to OIS programmes (Restack, CodeSupply, ELFA), with its next deadline on 3 November 2026[^nlnet-stocktaking] — new cascade operators must show what they add.

# 5. Avoid admissibility and eligibility traps

- Dissemination & exploitation plan missing = inadmissible[^ga-2026].
- Page limits: 40 (RIA) / 28 (lump-sum CSA); 11-pt minimum font[^ga-2026][^af-ria-ia].
- Three independent beneficiaries in three countries, one in an EU Member State; affiliated entities don't count[^ga-2026].
- No high-risk telecom suppliers and no Chinese entities (incl. as subcontractors or FSTP recipients) in OIS RIAs[^ga-2026][^wp7-2026].
- In 2026, 6 of the 69 proposals to the three OIS topics were ineligible[^ft-data02].

# 6. Implementation section

- Show each partner's open-source track record: the operational-capacity table lets you list up to five relevant **software** outputs and five previous projects per partner[^ga-2026].
- For the lump-sum CSA, split long WPs (management, dissemination) per reporting period so they can be paid at interim payments, and justify personnel rates above the Commission's dashboard ranges[^ls-guide].

# 7. Process tips

- Submit early: deadlines cannot be extended on request and last-minute technical problems are at your own risk[^ga-2026]; resubmission before the deadline is possible ([/rules/how-to-submit.md](/rules/how-to-submit.md)).
- Read the Destination introduction as well as the topic; Impact 2.1 asks how you contribute to topic outcomes **and** destination impacts[^af-ria-ia].
- If you use generative AI to draft, disclose it and verify everything — you are fully responsible for the content[^af-ria-ia].

# Related
- [/topics/wp-2026-2027/horizon-cl4-2026-04-data-02.md](/topics/wp-2026-2027/horizon-cl4-2026-04-data-02.md)
- [/topics/wp-2026-2027/horizon-cl4-2026-04-data-03.md](/topics/wp-2026-2027/horizon-cl4-2026-04-data-03.md)
- [/topics/wp-2026-2027/horizon-cl4-2026-04-human-02.md](/topics/wp-2026-2027/horizon-cl4-2026-04-human-02.md)
- [/rules/evaluation-criteria-and-scoring.md](/rules/evaluation-criteria-and-scoring.md)
- [/rules/open-source-licensing-and-open-science.md](/rules/open-source-licensing-and-open-science.md)
- [/rules/financial-support-to-third-parties.md](/rules/financial-support-to-third-parties.md)
- [/rules/success-rates.md](/rules/success-rates.md)

[^si-fiches]: Cluster 4 Digital 2026 topic briefings (gov.si) — https://www.gov.si/assets/ministrstva/MVZI/Znanost/Obzorje-Evropa/Cluster-4/Cluster-4-digital-2026.pdf
[^wp7-2026]: WP 2026-2027 Part 7 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
[^ga-2026]: General Annexes WP 2026-2027 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
[^ft-data02]: F&T Portal, HORIZON-CL4-2026-04 evaluation results — https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2026-04-data-02
[^af-ria-ia]: Application form HE RIA/IA V5.1 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/temp-form/af/af_he-ria-ia_en.pdf
[^ls-guide]: Lump sum guide V3.0 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/guidance/ls-funding-what-do-i-need-to-know_he_en.pdf
[^nlnet-stocktaking]: NLnet, 12 Jun 2026 — https://nlnet.nl/news/2026/20260612-NGIZero-stocktaking.html
