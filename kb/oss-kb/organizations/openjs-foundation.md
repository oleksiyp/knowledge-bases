---
type: Organization
title: OpenJS Foundation
description: "Home of Node.js, Express and other JS projects; worked with GitHub on npm hardening, paused its AI-overwhelmed CNA (Sep-Oct 2026) and launched a pooled Security Stewardship Program with Socket and Aikido."
resource: https://openjsf.org
tags: [foundation, javascript, nodejs, cna, security-funding]
org_kind: foundation
hq: San Francisco, CA, USA
funding: { total_usd: "n/a", last_round: "n/a", last_round_date: 2026-09-25, valuation_usd: "n/a" }
business_verdict: stable
projects: [projects/security-sustainability/npm-registry]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: openjs-cna
    resource: https://openjsf.org/blog/the-openjs-foundation-cna-is-taking-a-coordinated-break
    title: "OpenJS: CNA coordinated break"
  - id: openjs-ssp
    resource: https://openjsf.org/blog/openjs-foundation-launches-the-security-stewardshi
    title: "OpenJS: Security Stewardship Program"
  - id: openjs-blog
    resource: https://openjsf.org/blog
    title: OpenJS blog
  - id: node-schedule
    resource: https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule
    title: "Node.js blog: Evolving the Node.js release schedule"
---
# Summary
OpenJS worked with GitHub's npm team on publishing-security guidance (Nov 2025).[^openjs-blog] Node.js's Q2 2026 security release fixed 18 vulnerabilities.[^openjs-blog] The volume of AI-assisted reports led the **OpenJS CNA to pause all security operations from 2026-09-17 to 2026-10-06**, with Express joining the break: "AI has lowered the barrier to generating security reports, but not the cost of handling them."[^openjs-cna] On **2026-09-25** it launched the **Security Stewardship Program**, a pooled fund with a $100k/year minimum per partner, split equally between bug bounties and direct maintainer pay. Inaugural partners are Socket and Aikido, and the program fills the gap left after Node.js ended its own bug bounty.[^openjs-ssp]

# Business timeline
| Date | Event |
|---|---|
| 2025-11-14 | npm publishing security guidance with GitHub[^openjs-blog] |
| 2026-07-08 | Q2 security update (18 vulns)[^openjs-blog] |
| 2026-09-17 | CNA pause begins[^openjs-cna] |
| 2026-09-25 | Security Stewardship Program[^openjs-ssp] |

# Monetization model
Corporate memberships plus the new pooled security fund.

# Successes
- A concrete model of vendors paying for security that goes to both maintainers and bounties.[^openjs-ssp]

# Failures / risks
- Volunteer CNA capacity broke under AI report volume.[^openjs-cna]

# Related
- [npm registry](/projects/security-sustainability/npm-registry.md), [OpenJS CNA pause](/events/2026-09-openjs-cna-pause-security-stewardship.md), [Socket](/organizations/socket.md), [Aikido](/organizations/aikido-security.md)

[^openjs-cna]: OpenJS blog.
[^openjs-ssp]: OpenJS blog.
[^openjs-blog]: OpenJS blog index.

## Additional notes (devtools-languages)
- Node.js, OpenJS's flagship project, is moving to **one major release per year** from Node.js 27: alpha October 2026, release April 2027, LTS October 2027, EOL April 2030. Every release becomes LTS, and version numbers track the calendar year. The stated reasons are low adoption of odd-numbered releases and the load on volunteer maintainers.[^node-schedule]
- Related: [Node.js](/projects/devtools-languages/nodejs.md), [Deno](/projects/devtools-languages/deno.md), [Bun](/projects/devtools-languages/bun.md)

[^node-schedule]: Node.js blog — https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule
