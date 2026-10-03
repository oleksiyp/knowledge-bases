---
type: Organization
title: Socket
description: "Developer-first supply-chain security company (malicious-package detection for npm, PyPI and more); raised a $40M Series B (Oct 2024) and a $60M Series C at $1B (May 2026), and became an inaugural funder of OpenJS's Security Stewardship Program in 2026."
resource: https://socket.dev
tags: [supply-chain-security, npm, coss-startup]
org_kind: coss-startup
hq: San Francisco, CA, USA
funding: { total_usd: "~$125M (SecurityWeek)", last_round: "Series C $60M (Thrive Capital lead)", last_round_date: 2026-05, valuation_usd: "1B" }
business_verdict: growing
projects: [projects/security-sustainability/npm-registry]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-socket-b
    resource: https://techcrunch.com/2024/10/22/socket-lands-a-fresh-40m-to-scan-software-for-security-flaws/
    title: "TechCrunch: Socket lands a fresh $40M"
  - id: tc-socket-a
    resource: https://techcrunch.com/2023/08/01/socket-lands-20m-investment-to-help-companies-secure-open-source-software/
    title: "TechCrunch: Socket lands $20M"
  - id: openjs-ssp
    resource: https://openjsf.org/blog/openjs-foundation-launches-the-security-stewardshi
    title: "OpenJS: Security Stewardship Program launch"
  - id: socket-npm12
    resource: https://socket.dev/blog/npm-12
    title: "Socket: npm v12"
  - id: sw-socket-c
    resource: https://www.securityweek.com/socket-raises-60-million-at-1-billion-valuation/
    title: "SecurityWeek: Socket raises $60 million at $1 billion valuation (2026-05)"
    author: org:securityweek
---
# Summary
Socket detects malicious and risky open source packages and has been one of the first to report many npm incidents (TanStack, npm 12 analysis and others).[^socket-npm12] Funding: $4.6M seed (2022), $20M Series A (2023)[^tc-socket-a] and a **$40M Series B on 2024-10-22**.[^tc-socket-b] In May 2026 it raised a $60M Series C at a $1B valuation led by Thrive Capital (a16z, Abstract, Capital One Ventures), bringing total funding to ~$125M and expanding into browser extensions, editor plug-ins, MCP servers and AI skills marketplaces[^sw-socket-c]. On 2026-09-25 Socket became an inaugural partner, alongside Aikido, of OpenJS's Security Stewardship Program, contributing at least $100k a year to Node.js bug bounties and maintainer support.[^openjs-ssp]

# Business timeline
| Date | Event |
|---|---|
| 2023-08 | $20M Series A[^tc-socket-a] |
| 2024-10-22 | $40M Series B[^tc-socket-b] |
| 2026-05 | $60M Series C at $1B (Thrive Capital)[^sw-socket-c] |
| 2026-09-25 | Inaugural OpenJS Security Stewardship partner[^openjs-ssp] |

# Monetization model
Freemium GitHub app and CLI, with enterprise policy, firewall/proxy and reachability features.

# Successes
- Its threat-research blog is a primary source for npm incidents, which also drives brand awareness.[^socket-npm12]

# Failures / risks
- Crowded market (Aikido, Endor, Chainguard, Snyk, StepSecurity), and registry-level defenses such as npm 12 may commoditize parts of the product.

# Related
- [npm registry](/projects/security-sustainability/npm-registry.md), [OpenJS Foundation](/organizations/openjs-foundation.md)

[^tc-socket-b]: TechCrunch 2024-10-22.
[^tc-socket-a]: TechCrunch 2023-08-01.
[^openjs-ssp]: OpenJS 2026-09-25.
[^socket-npm12]: Socket blog.
[^sw-socket-c]: SecurityWeek, May 2026.
