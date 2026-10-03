---
type: Event
title: "tj-actions/changed-files GitHub Action compromised"
description: "Popular GitHub Action tj-actions/changed-files (and reviewdog/action-setup) was modified to dump CI secrets into build logs, exposing tokens across thousands of repositories."
event_kind: security-incident
date: 2025-03-14
window: W24
impact: negative
projects: [projects/security-sustainability/trivy]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cisa-tj
    resource: https://www.cisa.gov/news-events/alerts/2025/03/18/supply-chain-compromise-third-party-tj-actionschanged-files-cve-2025-30066-and-reviewdogaction
    title: "CISA alert: tj-actions/changed-files (CVE-2025-30066) and reviewdog/action-setup (CVE-2025-30154)"
---
# What happened
Between 2025-03-11 and 03-15, tj-actions/changed-files was changed to read secrets from Actions runner memory and print them to workflow logs. That exposed access keys, GitHub PATs, npm tokens and RSA keys. The compromise was probably made possible by a simultaneous breach of reviewdog/action-setup@v1 (CVE-2025-30154). CISA issued an alert on 03-18 and added both CVEs to the KEV catalog on 03-26.[^cisa-tj]

# Why it matters
It showed that mutable Action tags are a supply-chain attack surface and started a run of CI/CD-pipeline compromises that peaked in 2026 (Trivy, TanStack).

# Outcome so far
Pinning Actions by SHA became mainstream advice. The same type of attack hit Trivy's GitHub Action in March 2026.

# Related
- [Trivy](/projects/security-sustainability/trivy.md), [TeamPCP campaign](/events/2026-03-teampcp-trivy-litellm-compromise.md)

[^cisa-tj]: CISA alert: tj-actions/changed-files (CVE-2025-30066) and reviewdog/action-setup (CVE-2025-30154)
