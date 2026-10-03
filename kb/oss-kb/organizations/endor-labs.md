---
type: Organization
title: Endor Labs
description: "Software composition analysis and AI-code security startup; raised $93M (Apr 2025), co-backs Opengrep and is a founding member of Akrites."
resource: https://www.endorlabs.com
tags: [sca, supply-chain-security, ai-code-security]
org_kind: coss-startup
hq: Palo Alto, CA, USA
funding: { total_usd: "~$163M+ (70M 2023 + 93M 2025, as reported)", last_round: "Series B $93M", last_round_date: 2025-04-23, valuation_usd: "unverified" }
business_verdict: growing
projects: [projects/security-sustainability/opengrep]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-endor-2025
    resource: https://techcrunch.com/2025/04/23/endor-labs-which-builds-tools-to-scan-ai-generated-code-for-vulnerabilities-lands-93m/
    title: "TechCrunch: Endor Labs lands $93M"
  - id: tc-endor-2023
    resource: https://techcrunch.com/2023/08/03/endor-labs-which-helps-companies-secure-their-open-source-packages-raises-70m/
    title: "TechCrunch: Endor Labs raises $70M"
  - id: lf-akrites
    resource: https://www.linuxfoundation.org/press/linux-foundation-and-industry-leaders-launch-akrites-to-defend-critical-open-source-software-against-ai-enabled-cyber-threats
    title: "LF: Akrites launch"
  - id: opengrep
    resource: https://www.opengrep.dev/
    title: Opengrep
  - id: endor-sh2
    resource: https://www.endorlabs.com/learn/shai-hulud-2-malware-campaign-targets-github-and-cloud-credentials-using-bun-runtime
    title: "Endor Labs: Shai-Hulud 2 campaign analysis"
---
# Summary
Endor Labs raised $70M in Aug 2023[^tc-endor-2023] and **$93M on 2025-04-23**, repositioning around scanning AI-generated code.[^tc-endor-2025] It publishes threat research (for example on Shai-Hulud 2.0)[^endor-sh2], co-backs Opengrep[^opengrep], and is a founding member of Akrites (2026-06-25).[^lf-akrites] Verdict: **growing**.

# Business timeline
| Date | Event |
|---|---|
| 2023-08-03 | $70M[^tc-endor-2023] |
| 2025-01 | Opengrep consortium[^opengrep] |
| 2025-04-23 | $93M[^tc-endor-2025] |
| 2026-06-25 | Akrites founding member[^lf-akrites] |

# Monetization model
Enterprise SCA with reachability analysis, plus AI-code review and security.

# Successes
- Well funded and aligned with the "AI writes the code" narrative.[^tc-endor-2025]

# Failures / risks
- Crowded SCA market.

# Related
- [Opengrep](/projects/security-sustainability/opengrep.md), [Akrites](/events/2026-06-akrites-launch.md)

[^tc-endor-2025]: TechCrunch 2025-04-23.
[^tc-endor-2023]: TechCrunch 2023-08-03.
[^lf-akrites]: LF press.
[^opengrep]: opengrep.dev.
[^endor-sh2]: Endor Labs.
