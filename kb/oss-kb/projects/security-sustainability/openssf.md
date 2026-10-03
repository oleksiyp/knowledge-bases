---
type: OSS Project
title: OpenSSF (Open Source Security Foundation)
description: "Linux Foundation's open source security umbrella (Sigstore, Scorecard, SLSA, Alpha-Omega sibling); grew into the de facto coordinator of AI-era vulnerability response with $12.5M AI-triage grants, Akrites and a registry-sustainability pledge in 2026."
resource: https://openssf.org
tags: [foundation, supply-chain, sigstore, scorecard, slsa, linux-foundation]
domain: security-sustainability
license: Apache-2.0
license_history: ["Apache-2.0 (most projects)"]
governance: foundation
steward: Linux Foundation
backing_orgs: [organizations/linux-foundation]
metrics: {}
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lf-12m
    resource: https://www.linuxfoundation.org/press/linux-foundation-announces-12.5-million-in-grant-funding-from-leading-organizations-to-advance-open-source-security
    title: "LF: $12.5M in grant funding to advance open source security (2026-03-17)"
  - id: lf-akrites
    resource: https://www.linuxfoundation.org/press/linux-foundation-and-industry-leaders-launch-akrites-to-defend-critical-open-source-software-against-ai-enabled-cyber-threats
    title: "LF: Akrites launch (2026-06-25)"
  - id: lf-openssf-q
    resource: https://www.linuxfoundation.org/press/openssf-notes-quarter-of-growth-with-new-members-added-ai-security-resources-and-growing-community
    title: "LF: OpenSSF notes quarter of growth (2026-05-21)"
  - id: openssf-registries
    resource: https://openssf.org/blog/2026/09/16/were-in-enterprise-commitment-to-sustainable-package-registries/
    title: "OpenSSF: Enterprise commitment to sustainable package registries"
  - id: openssf-nhs
    resource: https://openssf.org/blog/2026/09/10/open-by-default-after-ai-the-gds-guidance-and-the-enforcement-question/
    title: "OpenSSF: Open by default after AI"
  - id: anthropic-glasswing
    resource: https://www.anthropic.com/glasswing
    title: "Anthropic: Project Glasswing"
  - id: openssf-cra
    resource: https://openssf.org/blog/2026/09/11/a-community-guide-to-the-eu-cra-september-11-deadline-for-manufacturers/
    title: "OpenSSF: CRA September 11 guide"
---
# Summary
OpenSSF went from a standards-and-tooling body (Sigstore, Scorecard, SLSA) to the coordinating hub for the AI-era wave of vulnerability discovery. Verdict: **growing**. In 2026 it administered $12.5M of AI-security grants funded by Anthropic, AWS, GitHub, Google, Google DeepMind, Microsoft and OpenAI (March).[^lf-12m] Together with Alpha-Omega it received $2.5M from Anthropic at the Glasswing launch (2026-04-07).[^anthropic-glasswing] It sat alongside the LF-launched Akrites shared SIRT (June)[^lf-akrites], and on 2026-09-16 it coordinated an enterprise commitment to fund package registries (PyPI, Maven Central, crates.io, RubyGems, npm, NuGet, OpenVSX, Packagist). Signatories accept registry fees as a business expense, but no dollar amounts were pledged.[^openssf-registries] The risk: corporate funders (AI labs, hyperscalers) now shape the agenda, and whether money actually reaches individual maintainers is still unproven.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-03-17 | $12.5M AI-security grant pool (Alpha-Omega + OpenSSF)[^lf-12m] | Business | + |
| W6 | 2026-04-07 | Anthropic Glasswing: $2.5M to Alpha-Omega/OpenSSF[^anthropic-glasswing] | Business | + |
| W6 | 2026-05-21 | Quarter of growth: new members, AI security resources[^lf-openssf-q] | OSS | + |
| W6 | 2026-06-25 | Akrites launched (seeded by Alpha-Omega)[^lf-akrites] | OSS | + |
| W3 | 2026-09-10 | Publishes analysis rebutting NHS England repo closures[^openssf-nhs] | OSS | + |
| W3 | 2026-09-11 | CRA deadline community guide[^openssf-cra] | OSS | + |
| W3 | 2026-09-16 | Organizations incl. Arm, Datadog, Dell, Ericsson, GitHub, Google, IBM, Microsoft, Red Hat, Sonatype sign registry sustainability commitment (no dollar amounts)[^openssf-registries] | Business | + |

# OSS successes
- Became the default venue for coordinating responses to AI-found vulnerabilities and to the CRA.[^lf-akrites][^openssf-cra]
- Defended "open by default" against security-through-obscurity moves such as NHS England's repository closures.[^openssf-nhs]

# OSS failures / risks
- Sigstore/SLSA provenance did not stop the 2026 CI-trust attacks (see [npm](/projects/security-sustainability/npm-registry.md)). Provenance has to be paired with hardened workflows.

# Business successes
- Corporate funding grew, especially from AI labs.[^lf-12m]

# Business failures / risks
- Funding is concentrated among a handful of big-tech and AI donors.

# By window
## W3
- Registry pledge, CRA guide, NHS rebuttal.[^openssf-registries][^openssf-cra][^openssf-nhs]
## W6
- Glasswing donation and Akrites.[^anthropic-glasswing][^lf-akrites]
## W9
- $12.5M grants.[^lf-12m]
## W12
- No notable events verified.
## W24
- No notable events verified in this pass.

# Lessons
- AI labs that cause floods of findings are now paying for triage. Expect "polluter pays" funding to become normal.

# Related
- [Alpha-Omega](/projects/security-sustainability/alpha-omega.md), [Linux Foundation](/organizations/linux-foundation.md), [Akrites](/events/2026-06-akrites-launch.md), [Glasswing](/events/2026-04-project-glasswing-ai-vuln-discovery.md), [registry pledge](/events/2026-09-registry-sustainability-commitment.md)

[^lf-12m]: Linux Foundation press, 2026-03-17.
[^lf-akrites]: Linux Foundation press, 2026-06-25.
[^lf-openssf-q]: Linux Foundation press, 2026-05-21.
[^openssf-registries]: OpenSSF blog, 2026-09-16.
[^openssf-nhs]: OpenSSF blog, 2026-09-10.
[^anthropic-glasswing]: Anthropic.
[^openssf-cra]: OpenSSF blog, 2026-09-11.
