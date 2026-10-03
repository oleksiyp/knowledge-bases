---
type: Organization
title: Probabl
description: Inria spin-out (2023) that employs many scikit-learn core maintainers and calls itself the project's "exclusive operator"; raised a €13M seed (Oct 2025, €18.5M total), installed a Talend-veteran CEO (Jan 2026) and launched the skore data-science platform (Mar 2026).
resource: https://probabl.ai
tags: [commercial-open-source, machine-learning, scikit-learn, europe, sovereign-tech]
org_kind: coss-startup
hq: Paris, France
funding: { total_usd: "EUR 18.5M total seed funding", last_round: "Seed EUR 13M (Serena, Capital Fund Management)", last_round_date: 2025-10-16, valuation_usd: "undisclosed" }
business_verdict: growing
projects: [projects/scientific-computing/scikit-learn]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: probabl-seed
    resource: https://blog.probabl.ai/probabl-raises-a-13m-in-seed-to-accelerate-enterprise-grade-ai
    title: "Probabl Raises €13M in Seed (2025-10-16)"
  - id: inria-probabl
    resource: https://www.inria.fr/en/probabl-logiciel-open-source-intelligence-artificielle
    title: "Inria: Probabl raises €13M in seed funding to build Europe's open source AI champion"
  - id: probabl-ceo
    resource: https://blog.probabl.ai/strengthening-stewardship-as-probabl-enters-its-scale-up-phase
    title: "Probabl: Strengthening Stewardship as Probabl Enters Its Scale-Up Phase (2026-01-14)"
  - id: skore-live
    resource: https://blog.probabl.ai/skore-is-live
    title: "Skore is live (2026-03-05)"
  - id: sk-cert
    resource: https://blog.probabl.ai/official-scikit-learn-certification-launch
    title: "Official scikit-learn Certification Launch (2024-10-31)"
  - id: probabl-roadmap
    resource: https://blog.probabl.ai/scikit-learn-roadmap-11-march-2026
    title: "Current scikit-learn priorities at Probabl — March 2026"
  - id: probabl-downloads
    resource: https://blog.probabl.ai/data-deep-dive-1
    title: "Probabl Data deep dive #1 (2026-07-21)"
  - id: probabl-blog
    resource: https://blog.probabl.ai/
    title: Probabl blog index (Open Weights letter 2026-08-04; tabular AI essay 2026-09-30)
  - id: varoquaux-cso
    resource: https://gael-varoquaux.info/programming/stepping-up-as-probabls-cso-to-supercharge-scikit-learn-and-its-ecosystem.html
    title: "Gaël Varoquaux: Stepping up as Probabl's CSO"
---

# Summary
Probabl was spun out of Inria in 2023 to sustain and commercialize the scikit-learn ecosystem; it employs a large part of the core team and runs the project's certification program[^probabl-seed][^sk-cert]. Its €13M seed (2025-10-16; co-led by Serena and Capital Fund Management, with Apertu Capital, Mozilla Ventures and French Tech Souveraineté) took total seed funding to €18.5M and was billed as Europe's largest COSS seed; the company then had 30+ staff across Paris, Saclay, Berlin and Sophia-Antipolis[^probabl-seed][^inria-probabl]. In January 2026 François Méro became CEO, founder Yann Lechelle moved to executive chairman and scikit-learn co-founder Gaël Varoquaux became Chief Science Officer[^probabl-ceo][^varoquaux-cso]. Verdict: **growing**, revenue undisclosed.

# Business timeline
| Date | Event |
|---|---|
| 2024-10-31 | Official scikit-learn certification launched (with Inria, Artefact)[^sk-cert] |
| 2025-10-16 | €13M seed; €18.5M total[^probabl-seed] |
| 2026-01-14 | François Méro CEO; Lechelle chairman; Varoquaux CSO[^probabl-ceo] |
| 2026-03-05 | skore platform goes live[^skore-live] |
| 2026-03-11 | Public scikit-learn priorities roadmap (NASA ROSES, CZI–Wellcome funded work)[^probabl-roadmap] |
| 2026-07-21 | Publishes analysis: scikit-learn ~2B downloads/yr, +93% YoY[^probabl-downloads] |
| 2026-08-04 | Signs the Open Weights open letter[^probabl-blog] |

# Monetization model
Open-core-adjacent: scikit-learn stays BSD-3-Clause; revenue from the skore platform (open-source skore lib + paid hub), certifications, support contracts and professional services[^probabl-ceo][^skore-live].

# Successes
- Credible stewardship story: public, funder-attributed roadmap and maintainers on payroll[^probabl-roadmap].
- Strong European sovereign-tech backing (French Tech Souveraineté, Inria)[^inria-probabl].

# Failures / risks
- Product-market fit for ML-experiment tooling unproven against MLflow/W&B and cloud ML platforms.
- Company concentration in scikit-learn's maintainer base creates governance-perception risk.
- CEO change only ~3 months after the seed suggests a pivot from founder-led to sales-led scaling[^probabl-ceo].

# Related
- [scikit-learn](/projects/scientific-computing/scikit-learn.md), [/events/2025-10-probabl-13m-seed.md](/events/2025-10-probabl-13m-seed.md)
- [NumFOCUS](/organizations/numfocus.md), [Scientific computing domain review](/domains/scientific-computing.md)

[^probabl-seed]: https://blog.probabl.ai/probabl-raises-a-13m-in-seed-to-accelerate-enterprise-grade-ai
[^inria-probabl]: https://www.inria.fr/en/probabl-logiciel-open-source-intelligence-artificielle
[^probabl-ceo]: https://blog.probabl.ai/strengthening-stewardship-as-probabl-enters-its-scale-up-phase
[^skore-live]: https://blog.probabl.ai/skore-is-live
[^sk-cert]: https://blog.probabl.ai/official-scikit-learn-certification-launch
[^probabl-roadmap]: https://blog.probabl.ai/scikit-learn-roadmap-11-march-2026
[^probabl-downloads]: https://blog.probabl.ai/data-deep-dive-1
[^probabl-blog]: https://blog.probabl.ai/
[^varoquaux-cso]: https://gael-varoquaux.info/programming/stepping-up-as-probabls-cso-to-supercharge-scikit-learn-and-its-ecosystem.html
