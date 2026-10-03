---
type: OSS Project
title: National Vulnerability Database (NVD)
description: "NIST's CVE enrichment database; never cleared its 2024 backlog and in April 2026 formally abandoned universal enrichment for a risk-based model — a structural decline of a public security good."
resource: https://nvd.nist.gov
tags: [vulnerability-management, public-infrastructure, nist]
domain: security-sustainability
license: n/a
license_history: []
governance: academic
steward: NIST
backing_orgs: []
metrics:
  cve_submission_growth_2020_2025_pct: { value: 263, as_of: 2026-04-15 }
oss_verdict: declining
business_verdict: n/a
momentum_by_window: { W3: flat, W6: down, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nist-nvd
    resource: https://www.nist.gov/itl/nvd
    title: "NIST: NVD program updates"
  - id: csa-nvd
    resource: https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-nvd-enrichment-changes-enterprise-vul/
    title: "Cloud Security Alliance: NVD enrichment triage research note (Apr 2026)"
---
# Summary
NVD adds the CVSS scores, CPEs and CWEs that most scanners depend on. Verdict: **declining**. On 2025-04-02 NIST marked all CVEs published before 2018 that were still waiting for enrichment as "Deferred". On 2026-04-15 it went further and switched to risk-based prioritization: it now enriches CISA KEV entries (target: one business day), federal software and EO 14028 "critical software", and gives everything else "Lowest Priority – not scheduled". Unenriched CVEs published before 2026-03-01 were moved to "Not Scheduled". About 29,000 backlogged CVEs were reclassified, and CSA estimates that 80–85% of new CVEs will get no NIST CVSS, CPE or CWE data.[^csa-nvd] NIST cited a 263% surge in CVE submissions between 2020 and 2025 and openly said it could not clear the backlog.[^nist-nvd]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-02 | Pre-2018 CVEs awaiting enrichment marked "Deferred"[^nist-nvd] | OSS | − |
| W6 | 2026-04-15 | Risk-based enrichment model; pre-March-2026 backlog moved to "Not Scheduled"[^nist-nvd] | OSS | − |

# OSS successes
- NIST enriched nearly 42,000 CVEs in 2025.[^nist-nvd]
- Prioritizing KEV entries makes enrichment of the most dangerous bugs faster.[^nist-nvd]

# OSS failures / risks
- Most CVEs will no longer be enriched by NIST. That pushes the work to CNAs, vendors and commercial databases, and to the EUVD.

# Business successes
- Commercial vulnerability-intelligence vendors (Snyk, Socket, Endor, Chainguard and others) gain value as NVD retreats. This is an inference, not a verified revenue effect.

# Business failures / risks
- n/a

# By window
## W3
- No notable events found.
## W6
- The April 2026 risk-based pivot.[^nist-nvd]
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Pre-2018 backlog deferred.[^nist-nvd]

# Lessons
- When the number of vulnerabilities grows faster than public budgets, enrichment moves to the vendors and, through the CRA, to manufacturers.

# Related
- [NVD risk-based model](/events/2026-04-nvd-risk-based-enrichment.md), [CVE Program](/projects/security-sustainability/cve-program.md), [EU CRA](/projects/security-sustainability/eu-cyber-resilience-act.md)

[^csa-nvd]: Cloud Security Alliance, Apr 2026.
[^nist-nvd]: NIST NVD program page.
