---
type: OSS Project
title: Node.js
description: The incumbent server-side JavaScript runtime under the OpenJS Foundation; absorbed competitors' best ideas (native TypeScript execution) and in 2026 moved to one major release per year — stable, foundation-governed, no business entity at risk.
resource: https://github.com/nodejs/node
tags: [javascript-runtime, foundation-hosted, openjs, mit]
domain: devtools-languages
license: MIT
license_history: ["MIT (2009-)"]
governance: foundation
steward: OpenJS Foundation
backing_orgs: []
metrics:
  github_stars: { value: 122227, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: node-gh
    resource: https://github.com/nodejs/node
    title: Node.js GitHub repository (stars via GitHub API, 2026-10-03)
  - id: wiki-node
    resource: https://en.wikipedia.org/wiki/Node.js
    title: "Wikipedia: Node.js"
  - id: node-releases
    resource: https://github.com/nodejs/node/releases
    title: "Node.js GitHub releases (v24.0.0 2025-05-06; v25.0.0 2025-10-15; v26.0.0 2026-05-05; v26.10.0 2026-09-22; via GitHub API)"
  - id: node-schedule
    resource: https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule
    title: "Node.js blog: Evolving the Node.js release schedule"
    author: org:nodejs
  - id: cisa-npm
    resource: https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
    title: "CISA: Widespread Supply Chain Compromise Impacting npm Ecosystem"
---

# Summary
Node.js remains the default JavaScript server runtime and is the "boring winner" of the runtime wars: it adopted native TypeScript execution (type stripping, since 22.6), shipped 24 (Krypton, 2025-05-06, later LTS), 25 (2025-10-15) and 26 (2026-05-05; LTS due October 2026), and announced that from Node.js 27 it will ship **one major release per year** with every release becoming LTS.[^node-releases][^node-schedule] The rationale is explicitly about maintainer load: odd-numbered releases saw little adoption and most maintainers are volunteers.[^node-schedule] With Bun now Anthropic-owned and Deno shrinking, foundation neutrality is Node's comparative advantage. Its weakest point is the npm ecosystem's supply-chain security, not the runtime itself.[^cisa-npm]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-06 | Node.js 24 (Krypton) released, later Active LTS. Corrected in pass 2: April → 2025-05-06 [^node-releases] | OSS | + |
| W24 | 2025-09-23 | CISA alert on Shai-Hulud npm worm (ecosystem, not runtime) [^cisa-npm] | OSS | − |
| W12 | 2025-10-15 | Node.js 25 released [^node-releases] | OSS | = |
| W6 | 2026-05-05 | Node.js 26.0.0 — last release under the old twice-yearly model; 26.10.0 by 2026-09-22 [^node-releases][^node-schedule] | OSS | + |
| W6 | 2026-06 | Node.js 25 goes unsupported [^wiki-node] | OSS | = |
| W3 | 2026-10 | New annual release model takes effect: Node 27 alpha channel from Oct 2026, release April 2027, LTS Oct 2027, EOL April 2030 [^node-schedule] | OSS | + |

# OSS successes
- Native TypeScript execution (type stripping) narrowed Deno/Bun's DX lead.[^wiki-node]
- Annual cadence with 36-month total support improves enterprise predictability and reduces release-line burden.[^node-schedule]

# OSS failures / risks
- Volunteer-maintainer load cited as a driver for the schedule change.[^node-schedule]
- npm supply-chain attacks (Shai-Hulud, Sept 2025) hit Node users even though the runtime was not at fault.[^cisa-npm]

# Business successes
- n/a (foundation project); vendors (Vercel, Netlify, cloud providers) continue to build on it.

# Business failures / risks
- n/a.

# By window
## W3
- Annual release schedule rollout begins (Node 27 alpha from October 2026).[^node-schedule]
## W6
- Node 26.0.0 (2026-05-05); Node 25 EOL (June 2026).[^node-releases][^wiki-node]
## W9
- No notable events found.
## W12
- Node 25 released 2025-10-15.[^node-releases]
## W24
- Node 24 (2025-05-06); Shai-Hulud npm worm (Sept 2025).[^node-releases][^cisa-npm]

# Lessons
- Incumbents can neutralise challengers by adopting their best feature (TypeScript) rather than competing on raw speed.
- Reducing release surface is a legitimate sustainability lever for volunteer-heavy projects.

# Related
- [Bun](/projects/devtools-languages/bun.md), [Deno](/projects/devtools-languages/deno.md), [npm registry](/projects/devtools-languages/npm-registry.md)
- [Shai-Hulud npm worm](/events/2025-09-shai-hulud-npm-worm.md)

[^node-gh]: Node.js GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/nodejs/node
[^wiki-node]: Wikipedia: Node.js — https://en.wikipedia.org/wiki/Node.js
[^node-releases]: Node.js GitHub releases — https://github.com/nodejs/node/releases
[^node-schedule]: Node.js blog: Evolving the Node.js release schedule — https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule
[^cisa-npm]: CISA: Widespread Supply Chain Compromise Impacting npm Ecosystem — https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
