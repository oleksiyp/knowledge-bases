---
type: Event
title: "TeamPCP compromises Trivy, Checkmarx and LiteLLM"
description: "Threat actor TeamPCP poisoned the Trivy GitHub Action and image, then used CI credentials stolen through it to publish backdoored LiteLLM to PyPI — a cascading attack via security tooling."
event_kind: security-incident
date: 2026-03-19
window: W9
impact: negative
projects: [projects/security-sustainability/trivy, projects/security-sustainability/pypi]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: snyk-litellm
    resource: https://snyk.io/blog/poisoned-security-scanner-backdooring-litellm/
    title: "Snyk: poisoned security scanner backdooring LiteLLM"
  - id: kaspersky-teampcp
    resource: https://www.kaspersky.co.uk/blog/critical-supply-chain-attack-trivy-litellm-checkmarx-teampcp/30159/
    title: "Kaspersky: Trivy, Checkmarx, LiteLLM trojanized"
  - id: csa-teampcp
    resource: https://labs.cloudsecurityalliance.org/research/csa-research-note-teampcp-cicd-supply-chain-20260325-csa-sty/
    title: "CSA: TeamPCP CI/CD supply chain compromise"
---
# What happened
In late February 2026, a `pull_request_target` flaw leaked Trivy's aqua-bot credentials. On 03-19, trivy-action tags were rewritten and a malicious v0.69.4 image was pushed.[^snyk-litellm][^csa-teampcp] LiteLLM's CI ran unpinned Trivy, which leaked its PyPI token. Backdoored LiteLLM 1.82.7/1.82.8 were live on 03-24 for about 3 hours (LiteLLM gets about 3.4M downloads a day).[^snyk-litellm] The campaign was assigned CVE-2026-33634 (CVSS 9.4) and Checkmarx artifacts were also hit.[^kaspersky-teampcp]

# Why it matters
Security scanners are privileged CI components. TeamPCP went on to run the Mini Shai-Hulud npm waves.

# Outcome so far
Industry-wide advice to pin Actions by SHA and isolate publishing credentials.

# Related
- [Trivy](/projects/security-sustainability/trivy.md), [PyPI](/projects/security-sustainability/pypi.md), [Mini Shai-Hulud/TanStack](/events/2026-05-tanstack-mini-shai-hulud.md)

[^snyk-litellm]: Snyk: poisoned security scanner backdooring LiteLLM
[^kaspersky-teampcp]: Kaspersky: Trivy, Checkmarx, LiteLLM trojanized
[^csa-teampcp]: CSA: TeamPCP CI/CD supply chain compromise
