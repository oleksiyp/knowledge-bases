---
type: Organization
title: Aikido Security
description: "Belgian developer-security platform that became a unicorn ($60M Series B at $1B, Jan 2026), known for detecting the chalk/debug npm compromise; co-backer of the Opengrep fork."
resource: https://www.aikido.dev
tags: [appsec, supply-chain-security, coss-startup, europe]
org_kind: coss-startup
hq: Ghent, Belgium
funding: { total_usd: "~$80M+ (sum of reported rounds)", last_round: "Series B $60M", last_round_date: 2026-01-14, valuation_usd: "1B" }
business_verdict: thriving
projects: [projects/security-sustainability/opengrep, projects/security-sustainability/npm-registry]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-aikido
    resource: https://en.wikipedia.org/wiki/Aikido_Security
    title: "Wikipedia: Aikido Security"
  - id: aikido-blog
    resource: https://www.aikido.dev/blog
    title: Aikido blog
  - id: aikido-chalk
    resource: https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised
    title: "Aikido: npm debug and chalk packages compromised"
  - id: openjs-ssp
    resource: https://openjsf.org/blog/openjs-foundation-launches-the-security-stewardshi
    title: "OpenJS: Security Stewardship Program"
  - id: opengrep
    resource: https://www.opengrep.dev/
    title: Opengrep
---
# Summary
Aikido grew from a €2M pre-seed (Jan 2023) to a **$60M Series B at a $1B valuation on 2026-01-14**.[^wiki-aikido] Its malware feed found the 2025-09-08 chalk/debug compromise (2B+ weekly downloads)[^aikido-chalk], and it reported GlassWorm repositories (Mar 2026), 15 malicious JetBrains Marketplace plugins (Jun 2026) and the ChainDrop/keyv wave (Aug 2026).[^wiki-aikido] In June 2026 it acquired **Root** (patching vulnerabilities in the open source versions customers already run), and in September 2026 it joined OpenJS's Security Stewardship Program as an inaugural partner.[^aikido-blog][^openjs-ssp] It is a backer of the Opengrep fork.[^opengrep]

# Business timeline
| Date | Event |
|---|---|
| 2024-05 | $17M Series A[^wiki-aikido] |
| 2025-01 | Co-founds Opengrep consortium[^opengrep] |
| 2025-09-08 | Detects chalk/debug compromise[^aikido-chalk] |
| 2026-01-14 | $60M Series B, $1B valuation[^wiki-aikido] |
| 2026-06 | Acquires Root[^aikido-blog] |
| 2026-09 | OpenJS Security Stewardship partner; launches open-weight "Aikido Altar" model[^aikido-blog] |

# Monetization model
All-in-one AppSec SaaS (SCA, SAST, secrets, cloud, AI pentesting) with SMB-friendly pricing.

# Successes
- The fastest unicorn in European AppSec, with brand built through threat research.[^wiki-aikido]

# Failures / risks
- Runs into giants (Wiz/Google, Palo Alto) as AppSec consolidates.

# Related
- [Opengrep](/projects/security-sustainability/opengrep.md), [chalk/debug](/events/2025-09-chalk-debug-npm-compromise.md), [OpenJS](/organizations/openjs-foundation.md)

[^wiki-aikido]: Wikipedia.
[^aikido-blog]: Aikido blog.
[^aikido-chalk]: Aikido blog, 2025-09.
[^openjs-ssp]: OpenJS.
[^opengrep]: opengrep.dev.
