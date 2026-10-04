---
type: Reference
title: Scope, evidence and verdicts
description: How to interpret five years of cloud-native and DevOps successes and failures, including the limits
  of the evidence.
tags:
- methodology
- scope
- evidence
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T09:48:59Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: okf
  resource: https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
  title: Open Knowledge Format v0.2
- id: cncf
  resource: https://www.cncf.io/reports/the-cncf-annual-cloud-native-survey/
  title: CNCF Annual Cloud Native Survey, published January 2026
- id: dora
  resource: https://dora.dev/research/2025/dora-report/
  title: DORA State of AI-assisted Software Development 2025
---

# Scope

This knowledge base examines ideas that were adopted, changed, matured or disappointed between October 4, 2021 and October 4, 2026. An idea may be older than that window: Kubernetes, infrastructure as code and SRE did not originate in 2021. Earlier history is background; verdicts concern outcomes visible during these five years. The bundle follows Open Knowledge Format 0.2.[^okf]

The coverage spans orchestration, software delivery, platform engineering, infrastructure as code, networking, observability, reliability, security, cloud economics, application architecture, developer workflows and AI operations. Data-system internals and model quality are outside scope except where they change deployment or operating economics.

# What success means

A useful technique, a widely adopted project and a profitable company are different outcomes. Each idea receives an editorial verdict: **won** for an established approach with strong in-scope evidence; **winning** for a durable useful mechanism with in-scope progress and stated limits; **mixed** when meaningful gains coexist with important failures; **niche** for bounded usefulness; **fading** for a weakening proposition; **failed** for a specified abandoned or disproven promise; and **too-early** when outcomes are not established.

Idea pages discuss technical value, adoption evidence and operating economics separately, and record an editorial confidence field. These are judgments supported by the cited cases, not a measured market-share index. A failed vendor does not prove its technique failed. An acquisition alone does not prove successful customer outcomes or enduring independent product support. A large open-source installation base does not establish sustainable maintenance funding.

# Evidence hierarchy

Project release and retirement records establish what shipped and what stopped. First-party engineering reports establish what a particular organization did and measured. Research studies establish findings within their actual methods and samples. Vendor reports can establish a vendor's own claims, but are not independent performance comparisons. A product description establishes available functionality more readily than realized customer outcomes.

Factual assertions link to sources through keyed citations. Interpretation is identified as such, especially explanations of why an idea succeeded or failed. Pages record missing evidence and what would change a verdict. Announcements, release availability, migrations and completed transactions are kept separate.

Survey percentages keep their denominators. The CNCF survey samples a cloud-native-oriented community; its Kubernetes adoption figures cannot be projected onto all organizations.[^cncf] DORA's findings about platforms and AI are evidence about relationships observed in its research, not promises that installing a tool causes the reported improvement.[^dora]

# Comparing failures fairly

The corpus intentionally includes reversals, retirements and disappointing tradeoffs. It is a purposive research sample, not a representative sample of every cloud company or software team. Counting its failed cases therefore cannot estimate the industry's failure rate. Small-team and large-enterprise decision boundaries are discussed rather than assuming one architecture fits both.

Absence of a convincing adoption study means adoption is uncertain, not zero. A mature component can be technically successful while its operation is too costly for a particular workload. Recent AI products may be promising while evidence of safe autonomous production changes remains insufficient.

# Reading and maintenance

Start with the executive summary, use area reviews to compare related ideas, then follow links to systems, events and research. Year reviews organize the same evidence chronologically; lessons compare mechanisms across areas. Sources are preserved on the content pages instead of treating the summary as a substitute for the evidence.

All content is agent-generated. Format and link checks confirm structure, not the truth of every causal interpretation. No human verification is implied. The January 2027 freshness date is a review reminder, particularly for fast-changing AI and security tooling, not an expiration date for historical events.

# Source selection and temporal limits

The source catalog records primary documents used in this review: project records, provider and operator accounts, research publications and survey reports. Searches also encountered secondary summaries; they were not used to substitute for a missing primary case. The widely repeated Prime Video cost-reduction story was excluded because its original article was not retrievable during this research. This is not evidence against that case.

Historical milestones use dated announcements or release notes. Current documentation is used to explain mechanisms, not to backdate every feature on a changing page. The survey year and publication year may differ; 2021 and 2026 are partial calendar years within the five-year window. The January 2026 CNCF publication reports 2025 survey results.

The source set is intentionally broad but not exhaustive. It is stronger for project milestones and disclosed incident mechanisms than for independent multi-company return-on-investment estimates. Public success stories have promotion and selection biases; public postmortems have disclosure and selection biases. The verdicts are qualitative synthesis, not a statistical comparison of products.

[^okf]: [Open Knowledge Format v0.2](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)
[^cncf]: [CNCF Annual Cloud Native Survey, published January 2026](https://www.cncf.io/reports/the-cncf-annual-cloud-native-survey/)
[^dora]: [DORA State of AI-assisted Software Development 2025](https://dora.dev/research/2025/dora-report/)
