---
type: OSS Project
title: Trivy
description: "Aqua Security's widely used open source vulnerability scanner; became the entry point of the TeamPCP campaign (Feb-Mar 2026) — a security tool turned supply-chain weapon that cascaded into LiteLLM and beyond."
resource: https://github.com/aquasecurity/trivy
tags: [security-scanner, supply-chain, github-actions, apache-2.0, vendor-led]
domain: security-sustainability
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: company-led-open-core
steward: Aqua Security
backing_orgs: []
metrics:
  github_stars: { value: 38205, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: struggling
momentum_by_window: { W3: up, W6: flat, W9: down, W12: down, W24: n/a }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: snyk-litellm
    resource: https://snyk.io/blog/poisoned-security-scanner-backdooring-litellm/
    title: "Snyk: How a poisoned security scanner became the key to backdooring LiteLLM"
  - id: kaspersky-teampcp
    resource: https://www.kaspersky.co.uk/blog/critical-supply-chain-attack-trivy-litellm-checkmarx-teampcp/30159/
    title: "Kaspersky: Trojanization of Trivy, Checkmarx, and LiteLLM solutions"
  - id: csa-teampcp
    resource: https://labs.cloudsecurityalliance.org/research/csa-research-note-teampcp-cicd-supply-chain-20260325-csa-sty/
    title: "CSA: TeamPCP CI/CD security tool supply chain compromise"
  - id: halcyon-vect
    resource: https://www.halcyon.ai/ransomware-alerts/trivy-supply-chain-compromise-enters-extortion-phase-as-vect-ransomware-publishes-first-victim
    title: "Halcyon: Trivy compromise enters extortion phase as Vect ransomware publishes first victim (2026-04-17)"
  - id: trivy-conclusion
    resource: https://github.com/aquasecurity/trivy/discussions/10462
    title: "Trivy: Security incident 2026-03-19 conclusion (GitHub discussion #10462)"
  - id: trivy-ghsa
    resource: https://github.com/aquasecurity/trivy/security/advisories/GHSA-69fq-xp46-6x23
    title: "Trivy advisory GHSA-69fq-xp46-6x23: Trivy ecosystem supply chain temporarily compromised"
  - id: trivy-releases
    resource: https://github.com/aquasecurity/trivy/releases
    title: Trivy GitHub releases
    last_modified: 2026-10-01T00:00:00Z
  - id: calcalist-aqua
    resource: https://www.calcalistech.com/ctechnews/article/4bzp62ggf
    title: "Calcalist: Aqua Security lays off staff weeks after management shake-up (2025-12-01)"
---
# Summary
Trivy is one of the most-used open source container and IaC scanners (about 38k GitHub stars).[^trivy-releases] In 2026 it became a cautionary example. Verdict: **contested**. The project is still widely used and shipping (v0.75.0 on 2026-10-01), but it was the first link in the most damaging CI/CD supply-chain chain of the period. On about 2026-02-27/28 an attacker exploited a `pull_request_target` workflow to steal `aqua-bot` credentials. Containment was incomplete. On 2026-03-19 (about 17:43 UTC), TeamPCP force-pushed 76 of 77 tags in `aquasecurity/trivy-action` and all 7 in `setup-trivy`, and triggered release automation to publish malicious Trivy v0.69.4 (later also v0.69.5/0.69.6) plus a malicious VS Code extension on Open VSX (CVE-2026-33634).[^halcyon-vect][^trivy-conclusion][^trivy-ghsa] Tokens stolen from downstream pipelines fed attacks on Checkmarx KICS, LiteLLM and Telnyx. Halcyon counts more than 1,000 affected SaaS environments, and the stolen data entered a ransomware extortion phase (Vect, 2026-04-17).[^halcyon-vect][^snyk-litellm] Aqua's remediation included revoking all tokens, moving to GitHub Apps, pinning actions by SHA, immutable releases and SLSA provenance.[^trivy-conclusion] On the business side, its steward Aqua Security had already replaced its founding CEO and CTO and cut staff in late 2025, its third round of layoffs.[^calcalist-aqua]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12-01 | Aqua Security layoffs after founders Davidoff (CEO) and Jerbi (CTO) step down; Mike Dube CEO[^calcalist-aqua] | Business | − |
| W9 | 2026-02-27 | `pull_request_target` flaw used to exfiltrate aqua-bot credentials[^halcyon-vect][^snyk-litellm] | OSS | − |
| W9 | 2026-03-19 | trivy-action/setup-trivy tags rewritten; malicious v0.69.4 on GitHub, Docker Hub, ECR, GHCR; CVE-2026-33634[^trivy-ghsa][^csa-teampcp] | OSS | − |
| W9 | 2026-03-19..27 | Campaign extends to Checkmarx KICS, LiteLLM, Telnyx[^kaspersky-teampcp][^halcyon-vect] | OSS | − |
| W9 | 2026-03-23 | Last suspicious activity; remediation concluded[^trivy-conclusion] | OSS | + |
| W6 | 2026-04-17 | Vect ransomware publishes first victim data from the campaign[^halcyon-vect] | OSS | − |
| W3 | 2026-08-14 → 10-01 | v0.74.0 and v0.75.0 released[^trivy-releases] | OSS | + |

# OSS successes
- The incident was disclosed publicly (GHSA, CVE), followed by a detailed public conclusion and hardening (GitHub Apps, SHA-pinned actions, immutable releases, SLSA provenance).[^trivy-ghsa][^trivy-conclusion]

# OSS failures / risks
- **Security tools have privileged CI access.** Pipelines run scanners with secrets present, which makes the scanners ideal targets.[^csa-teampcp]
- Mutable git tags on GitHub Actions let the attackers redirect users without changing what users had pinned to.[^csa-teampcp]
- Incomplete credential revocation after the February incident made the March attack possible.[^trivy-conclusion]

# Business successes
- None verified for 2025–2026.

# Business failures / risks
- A security vendor's flagship OSS tool became the attack vector, which hurts trust.
- Aqua cut staff and changed leadership in late 2025 while aiming for "cash flow independence".[^calcalist-aqua]

# By window
## W3
- Regular releases resumed (v0.74.0, v0.75.0).[^trivy-releases]
## W6
- The aftermath moved into an extortion phase.[^halcyon-vect]
## W9
- Compromise and cascade into LiteLLM/Checkmarx.[^kaspersky-teampcp]
## W12
- Aqua Security leadership change and layoffs.[^calcalist-aqua]
## W24
- No notable events found.

# Lessons
- Pin GitHub Actions by commit SHA, not by tag. Give scanners only the minimum tokens they need.
- `pull_request_target` workflows were behind tj-actions (2025), Nx (2025), Trivy (2026) and TanStack (2026).

# Related
- [TeamPCP campaign](/events/2026-03-teampcp-trivy-litellm-compromise.md), [tj-actions](/events/2025-03-tj-actions-changed-files-compromise.md), [PyPI](/projects/security-sustainability/pypi.md)

[^snyk-litellm]: Snyk blog.
[^kaspersky-teampcp]: Kaspersky blog.
[^csa-teampcp]: Cloud Security Alliance, 2026-03-25.
[^halcyon-vect]: Halcyon, 2026-04-17.
[^trivy-conclusion]: Trivy GitHub discussion #10462.
[^trivy-ghsa]: Trivy GHSA-69fq-xp46-6x23.
[^trivy-releases]: Trivy GitHub releases (checked 2026-10-03).
[^calcalist-aqua]: Calcalist, 2025-12-01.
