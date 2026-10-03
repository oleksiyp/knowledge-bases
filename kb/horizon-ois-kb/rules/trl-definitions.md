---
type: Rule
title: "Technology Readiness Levels (TRL 1–9) and how they apply to OIS topics"
description: The official Horizon Europe TRL definitions from General Annex B and what maturity the Open Internet Stack topics actually expect (no formal TRL in DATA-02/03 or HUMAN-02, but "technical maturity", existing communities and deployability are evaluated).
tags: [open-internet-stack, cluster-4, trl, horizon-europe-rules]
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
  - id: si-fiches
    title: "Cluster 4 Digital 2026 topic briefings (Commission Q&A per topic, compiled PDF hosted by the Slovenian ministry, gov.si)"
    resource: https://www.gov.si/assets/ministrstva/MVZI/Znanost/Obzorje-Evropa/Cluster-4/Cluster-4-digital-2026.pdf
---
# Official definitions (General Annex B)

Where a topic requires a TRL, these definitions apply unless otherwise specified[^ga-2026]:

| TRL | Definition |
|---|---|
| 1 | Basic principles observed |
| 2 | Technology concept formulated |
| 3 | Experimental proof of concept |
| 4 | Technology validated in a lab |
| 5 | Technology validated in a relevant environment (industrially relevant environment in the case of key enabling technologies) |
| 6 | Technology demonstrated in a relevant environment (industrially relevant environment in the case of key enabling technologies) |
| 7 | System prototype demonstration in an operational environment |
| 8 | System complete and qualified |
| 9 | Actual system proven in an operational environment (competitive manufacturing in the case of key enabling technologies, or in space) |

Typical mapping: RIAs work mostly at TRL 2–6 (lab or simulated environment, small-scale prototypes), IAs at TRL 5–8 (piloting, large-scale validation, market replication) — consistent with the action-type definitions in Annex B[^ga-2026].

# What the OIS topics specify

- **HORIZON-CL4-2026-04-DATA-02 (RIA), DATA-03 (CSA), HUMAN-02 (RIA)** have **no TRL line** in their specific conditions[^wp7-2026].
- Instead DATA-02 requires proposals to demonstrate that solutions have **technical maturity** (scalability, resiliency, advanced cryptographic protection e.g. post-quantum, alignment with standards incl. supply-chain, efficiency), an **existing community with critical mass**, **evidence of use cases and user/deployer interest**, and a credible path into the OIS catalogue and app stores[^wp7-2026]. HUMAN-02 asks for the same three proofs (maturity, critical mass of community, user/deployer interest)[^wp7-2026].
- Commission topic briefings for DATA-02 and HUMAN-02 state what they do **not** want: "Proprietary, experimental, outside the [listed] technology areas"[^si-fiches].
- By contrast, the related 3C IA HORIZON-CL4-2027-04-DATA-08 explicitly targets **TRL 6–8** by project end[^wp7-2026].

**Interpretation:** although formally RIAs (which may go down to proof of concept), the OIS Sovereign Solutions and Web 4.0 topics reward existing, working open-source software that the project will harden, integrate, package and deploy — closer to TRL 5–7 in practice. State your starting and target TRL per component anyway; evaluators look for it under Excellence (ambition) and Impact (credible pathway).

# Related
- [/rules/action-types-and-funding-rates.md](/rules/action-types-and-funding-rates.md)
- [/rules/practical-tips.md](/rules/practical-tips.md)

[^ga-2026]: Horizon Europe WP 2026-2027 General Annexes, Annex B — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
[^wp7-2026]: WP 2026-2027 Part 7 — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
[^si-fiches]: Cluster 4 Digital 2026 topic briefings (gov.si) — https://www.gov.si/assets/ministrstva/MVZI/Znanost/Obzorje-Evropa/Cluster-4/Cluster-4-digital-2026.pdf
