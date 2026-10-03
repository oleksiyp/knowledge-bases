---
type: OSS Project
title: EU Cyber Resilience Act (CRA)
description: "EU regulation imposing security obligations on products with digital elements, with a light-touch 'open-source steward' role; reporting obligations for manufacturers went live on 2026-09-11 via ENISA's Single Reporting Platform."
resource: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
tags: [regulation, eu, cra, open-source-steward, vulnerability-reporting]
domain: security-sustainability
license: n/a
license_history: []
governance: foundation
steward: European Commission / ENISA
backing_orgs: [organizations/eclipse-foundation, organizations/linux-foundation]
metrics: {}
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ec-cra
    resource: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
    title: "European Commission: CRA reporting obligations"
  - id: enisa-srp
    resource: https://www.enisa.europa.eu/news/the-cra-single-reporting-platform-is-launched
    title: "ENISA: The CRA Single Reporting Platform is launched"
  - id: openssf-cra
    resource: https://openssf.org/blog/2026/09/11/a-community-guide-to-the-eu-cra-september-11-deadline-for-manufacturers/
    title: "OpenSSF: A community guide to the EU CRA September 11 deadline"
  - id: osi-cra
    resource: https://opensource.org/blog
    title: "OSI blog: EU AI Act and CRA timelines and resources (2026-08-13)"
  - id: sta-site
    resource: https://www.sovereign.tech/news/resilience-relaunch
    title: "Sovereign Tech Agency: Resilience relaunch (2026-09-28)"
  - id: ec-cra-summary
    resource: https://digital-strategy.ec.europa.eu/en/policies/cra-summary
    title: "European Commission: The Cyber Resilience Act, summary of the legislative text"
  - id: redhat-cra
    resource: https://access.redhat.com/security/eu-cyber-resilience-act-stewardship-guidelines
    title: "Red Hat: CRA stewardship guidelines for Red Hat supported OSS projects"
---
# Summary
The CRA is the first major law to treat open source as part of product-security liability. It does this mostly by placing obligations on **manufacturers** and creating a lighter **open-source software steward** role, typically filled by foundations. The first operational milestone arrived on **2026-09-11**. From that date manufacturers must report actively exploited vulnerabilities and severe incidents through ENISA's Single Reporting Platform: an early warning within 24h, a notification within 72h, and a final report within 14 days of a fix.[^ec-cra][^enisa-srp] Stewards face Article 24(3) reporting from **2027-12-11**. From 2026-09-11 they must report incidents affecting their own development infrastructure.[^ec-cra] Verdict: **stable** for OSS. Early fears of liability for individual maintainers were mostly resolved by the steward compromise. The burden is now compliance work and money flowing to foundations and vendors.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-10 | CRA (Regulation (EU) 2024/2847) enters into force; reporting from 2026-09-11, full application 2027-12-11[^ec-cra-summary] | OSS | + |
| W12 | 2025-12-11 | Commission adopts delegated act on CSIRTs delaying dissemination of notifications[^ec-cra] | OSS | + |
| W3 | 2026-08-13 | OSI publishes CRA/AI Act timeline resources for the community[^osi-cra] | OSS | + |
| W3 | 2026-09-28 | Sovereign Tech Agency relaunches Resilience program incl. CRA compliance service[^sta-site] | OSS | + |
| W3 | 2026-09-11 | Manufacturer reporting obligations start; ENISA SRP live[^enisa-srp] | OSS | + |
| — | 2027-12-11 | Steward reporting obligations (Art. 24(3)); full application[^ec-cra] | OSS | n/a |

# OSS successes
- The steward model protects non-commercial maintainers and gives foundations a defined role. Vendors such as Red Hat publish stewardship guidelines.[^redhat-cra]
- Community readiness material arrived on time from OpenSSF[^openssf-cra] and OSI[^osi-cra].

# OSS failures / risks
- Upstream maintainers will receive more vulnerability-handling requests from manufacturers who now have legal deadlines, which adds to the AI-generated report load.
- Steward obligations from Dec 2027 will strain small foundations.

# Business successes
- Demand for compliance tooling (SBOMs, vulnerability management, hardened images) rises. Chainguard, Sonatype and others market CRA readiness.

# Business failures / risks
- Manufacturers carry the liability and the reporting cost.

# By window
## W3
- Reporting obligations went live on 2026-09-11.[^enisa-srp]
## W6
- No notable events found. Preparation phase.
## W9
- No notable events found.
## W12
- Delegated act on delaying CSIRT dissemination (2025-12-11).[^ec-cra]
## W24
- Entered into force on 2024-12-10.[^ec-cra-summary]

# Lessons
- Regulators can include open source without crushing volunteers if a steward layer separates commercial use from upstream maintainers.

# Related
- [CRA reporting obligations start](/events/2026-09-cra-reporting-obligations-start.md), [Sovereign Tech Agency](/projects/security-sustainability/sovereign-tech-agency.md), [OpenSSF](/projects/security-sustainability/openssf.md), [Eclipse Foundation](/organizations/eclipse-foundation.md)

[^ec-cra]: European Commission CRA reporting page.
[^enisa-srp]: ENISA, 2026-09-11.
[^openssf-cra]: OpenSSF blog, 2026-09-11.
[^osi-cra]: OSI blog.
[^sta-site]: Sovereign Tech Agency, 2026-09-28.
[^ec-cra-summary]: European Commission CRA summary.
[^redhat-cra]: Red Hat.
