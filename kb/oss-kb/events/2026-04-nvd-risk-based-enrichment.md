---
type: Event
title: "NIST NVD abandons universal CVE enrichment"
description: "NIST moved NVD to risk-based prioritization (KEV, federal, critical software) and parked its pre-March-2026 backlog as 'Not Scheduled', citing a 263% surge in CVE submissions."
event_kind: governance
date: 2026-04-15
window: W6
impact: negative
projects: [projects/security-sustainability/nvd, projects/security-sustainability/cve-program]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nist-nvd
    resource: https://www.nist.gov/itl/nvd
    title: "NIST NVD updates"
---
# What happened
As of 2026-04-15, KEV CVEs are enriched within about one business day, followed by federal and EO 14028 critical software. Everything else is "Lowest Priority – not scheduled". Unenriched CVEs published before 2026-03-01 were moved to Not Scheduled.[^nist-nvd]

# Why it matters
Scanners and SBOM tools that depend on NVD's CVSS and CPE data lose coverage. Enrichment moves to vendors and CNAs.

# Outcome so far
Commercial databases and the EUVD fill the gap.

# Related
- [NVD](/projects/security-sustainability/nvd.md)

[^nist-nvd]: NIST NVD updates
