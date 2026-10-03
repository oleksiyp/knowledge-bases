---
type: Event
title: "EU Cyber Resilience Act reporting obligations take effect"
description: "From 2026-09-11 manufacturers must report actively exploited vulnerabilities and severe incidents to ENISA's new Single Reporting Platform (24h/72h/14-day clock); OSS stewards follow in Dec 2027."
event_kind: other
date: 2026-09-11
window: W3
impact: mixed
projects: [projects/security-sustainability/eu-cyber-resilience-act]
organizations: [organizations/eclipse-foundation, organizations/open-source-initiative]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ec-cra
    resource: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
    title: "European Commission: CRA reporting"
  - id: enisa-srp
    resource: https://www.enisa.europa.eu/news/the-cra-single-reporting-platform-is-launched
    title: "ENISA: CRA Single Reporting Platform launched"
  - id: openssf-cra
    resource: https://openssf.org/blog/2026/09/11/a-community-guide-to-the-eu-cra-september-11-deadline-for-manufacturers/
    title: "OpenSSF: CRA Sept 11 guide"
  - id: heise-cra-oss
    resource: https://www.heise.de/en/news/Cyber-Resilience-Act-EU-Commission-provides-more-clarity-for-open-source-11381056.html
    title: "heise: Cyber Resilience Act — EU Commission provides more clarity for open source (2026-07-28)"
---
# What happened
The ENISA SRP went live on 2026-09-11. Manufacturers must send an early warning within 24h, a notification within 72h, and a final report within 14 days of a fix (one month for incidents). Stewards' Article 24(3) reporting starts on 2027-12-11.[^ec-cra][^enisa-srp] OpenSSF published a community guide.[^openssf-cra]

# Why it matters
The first legally binding vulnerability-reporting clock covering software that ships OSS components.

# Outcome so far
Just started. Expect manufacturers to push more inquiries upstream to maintainers.

# Related
- [EU CRA](/projects/security-sustainability/eu-cyber-resilience-act.md)

[^ec-cra]: European Commission: CRA reporting
[^enisa-srp]: ENISA: CRA Single Reporting Platform launched
[^openssf-cra]: OpenSSF: CRA Sept 11 guide

## Additional notes (licensing-forks)
- **Relevance to license/fork dynamics:** the Commission's July 28, 2026 guidance says free OSS escapes CRA obligations unless it is monetised (selling the software, paid enterprise versions or monetised related services). Donations, public funding and sponsorship do not trigger "commercial activity", and paid consulting does not automatically do so either.[^heise-cra-oss] Single-vendor open-core companies (Redis, Elastic, Grafana, MinIO/AIStor) are therefore clearly "manufacturers". Foundation-hosted forks (Valkey, OpenTofu, OpenBao, OpenSearch) fall under the lighter "steward" regime. This is a new regulatory advantage for foundation governance.
- The EU sovereignty push that comes with the CRA is driving adoption of vendor-neutral projects, for example the Dutch government's NixOS-based DAWO desktop and OpenBao in sovereign clouds. See [NixOS](/projects/licensing-forks/nixos.md) and [OpenBao](/projects/licensing-forks/openbao.md).

[^heise-cra-oss]: heise — https://www.heise.de/en/news/Cyber-Resilience-Act-EU-Commission-provides-more-clarity-for-open-source-11381056.html
