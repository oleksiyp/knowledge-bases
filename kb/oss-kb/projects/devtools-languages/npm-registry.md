---
type: OSS Project
title: npm (registry and CLI)
description: GitHub-owned JavaScript package registry and CLI; the epicenter of the period's supply-chain attacks (chalk/debug phishing and the Shai-Hulud worm in Sept 2025, Shai-Hulud variants through 2026), forcing a hardening of tokens, 2FA and trusted publishing.
resource: https://github.com/npm/cli
tags: [package-registry, javascript, supply-chain-security, github, microsoft]
domain: devtools-languages
license: Artistic-2.0
license_history: ["Artistic-2.0 (CLI)"]
governance: single-vendor
steward: GitHub (Microsoft)
backing_orgs: []
metrics:
  github_stars_cli: { value: 10165, as_of: 2026-10-03 }
oss_verdict: crisis
business_verdict: n/a
momentum_by_window: { W3: flat, W6: down, W9: flat, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: npm-gh
    resource: https://github.com/npm/cli
    title: npm CLI GitHub repository (stars via GitHub API, 2026-10-03)
  - id: cisa-npm
    resource: https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
    title: "CISA: Widespread Supply Chain Compromise Impacting npm Ecosystem"
  - id: aikido-chalk
    resource: https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised
    title: "Aikido: npm debug and chalk packages compromised"
    author: org:aikido-security
  - id: unit42-shai
    resource: https://unit42.paloaltonetworks.com/npm-supply-chain-attack/
    title: "Unit 42: Shai-Hulud worm compromises npm ecosystem"
  - id: datadog-sh2
    resource: https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/
    title: "Datadog Security Labs: The Shai-Hulud 2.0 npm worm"
  - id: gh-npm-plan
    resource: https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/
    title: "GitHub: Our plan for a more secure npm supply chain (2025-09-22)"
    author: org:github
  - id: gh-classic-disabled
    resource: https://github.blog/changelog/2025-11-05-npm-security-update-classic-token-creation-disabled-and-granular-token-changes/
    title: "GitHub Changelog: classic token creation disabled (2025-11-05)"
  - id: gh-dec9
    resource: https://github.com/orgs/community/discussions/179562
    title: "GitHub community: classic token removal moves to December 9"
  - id: huntress-axios
    resource: https://www.huntress.com/blog/supply-chain-compromise-axios-npm-package
    title: "Huntress: Supply chain compromise of axios npm package"
  - id: unit42-landscape
    resource: https://unit42.paloaltonetworks.com/monitoring-npm-supply-chain-attacks/
    title: "Unit 42: The npm Threat Landscape (updated July 15, 2026)"
  - id: tanstack-pm
    resource: https://tanstack.com/blog/npm-supply-chain-compromise-postmortem
    title: "TanStack: npm supply-chain compromise postmortem"
  - id: reg-npm12
    resource: https://www.theregister.com/devops/2026/06/10/github-pulls-pin-on-npms-auto-run-scripts/5253453
    title: "The Register: GitHub pulls pin on npm's auto-run scripts"
    author: org:the-register
  - id: infoq-npm12
    resource: https://www.infoq.com/news/2026/08/npm-12-released/
    title: "InfoQ: npm 12 released, install scripts off by default"
  - id: socket-npm12
    resource: https://socket.dev/blog/npm-12
    title: "Socket: npm v12 ships with install scripts off by default"
  - id: sb-keyv
    resource: https://securityboulevard.com/2026/08/mini-shai-hulud-npm-attack-more-than-2200-components-impacted/
    title: "Security Boulevard: Mini Shai-Hulud npm attack, 2,200+ components impacted"
  - id: aws-tea
    resource: https://aws.amazon.com/blogs/security/amazon-inspector-detects-over-150000-malicious-packages-linked-to-token-farming-campaign
    title: "AWS Security Blog: Amazon Inspector detects over 150,000 malicious packages linked to token farming campaign (Nov 2025)"
  - id: rl-shai
    resource: https://www.reversinglabs.com/blog/shai-hulud-worm-npm
    title: "ReversingLabs: Shai-Hulud npm supply chain attack: what you need to know (Sep 2025)"
  - id: stepsec-nodeipc
    resource: https://www.stepsecurity.io/blog/node-ipc-npm-supply-chain-attack
    title: "StepSecurity: Malicious node-ipc versions published to npm (2026-05-14)"
  - id: pnpm-blog
    resource: https://pnpm.io/blog
    title: pnpm blog (release cadence, 11.x/12.x in Sept 2026)
---

# Summary
npm is the critical-infrastructure failure story of the domain (this file is the devtools view; the detailed security record is in [/projects/security-sustainability/npm-registry.md](/projects/security-sustainability/npm-registry.md)). On 2025-09-08 phishing of a maintainer (fake npmjs.help domain) put crypto-stealing malware into 18 extremely popular packages including chalk and debug (2B+ weekly downloads); the self-replicating **Shai-Hulud** worm (patient zero published 2025-09-14, detected 09-15) then stole GitHub tokens and cloud keys and republished infected packages, prompting a CISA alert on 2025-09-23.[^aikido-chalk][^rl-shai][^cisa-npm] GitHub responded (2025-09-22) with a plan — trusted publishing, short-lived granular tokens, phishing-resistant 2FA — disabled classic-token creation on 2025-11-05 and revoked all classic tokens on 2025-12-09.[^gh-npm-plan][^gh-classic-disabled][^gh-dec9] Abuse kept escalating: Shai-Hulud 2.0 (2025-11-24, 796 packages), a Tea-protocol token-farming campaign spanning 150,000+ packages (Nov 2025), a DPRK-linked axios backdoor (2026-03-31), "Mini Shai-Hulud" waves including TanStack (2026-05-11) and node-ipc (2026-05-14), and a keyv/cacheable wave with valid provenance (2026-08-04).[^datadog-sh2][^aws-tea][^huntress-axios][^tanstack-pm][^stepsec-nodeipc][^sb-keyv] npm 12 (2026-07-08) finally made install scripts opt-in.[^infoq-npm12][^reg-npm12] Alternative clients (pnpm) compete on security defaults.[^pnpm-blog] Verdict: OSS crisis (ecosystem trust), with structural mitigations now landing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-08 | Phished maintainer: 18 popular packages (chalk, debug) ship crypto-stealing malware [^aikido-chalk] | OSS | − |
| W24 | 2025-09-15 | Shai-Hulud worm detected (patient zero published 09-14). Corrected in pass 2: "began 09-14" → detected 09-15 [^rl-shai][^unit42-shai] | OSS | − |
| W24 | 2025-09-22 | GitHub announces npm hardening plan [^gh-npm-plan] | OSS | + |
| W24 | 2025-09-23 | CISA alert: 500+ packages compromised [^cisa-npm] | OSS | − |
| W12 | 2025-11 | 150,000+ packages linked to Tea token-farming campaign (Amazon Inspector) [^aws-tea] | OSS | − |
| W12 | 2025-11-05 / 12-09 | Classic token creation disabled; all classic tokens revoked [^gh-classic-disabled][^gh-dec9] | OSS | + |
| W12 | 2025-11-24 | Shai-Hulud 2.0: 796 packages, 20M+ weekly downloads [^datadog-sh2] | OSS | − |
| W9 | 2026-03-31 | axios backdoored via maintainer credentials (DPRK-linked) [^huntress-axios] | OSS | − |
| W6 | 2026-04-29 → 06-01 | "Mini Shai-Hulud" waves (SAP CAP, TanStack, @antv, Red Hat namespace); node-ipc backdoor (05-14) [^unit42-landscape][^tanstack-pm][^stepsec-nodeipc] | OSS | − |
| W6 | 2026-06-09 | npm 12 breaking changes announced (install scripts opt-in) [^reg-npm12] | OSS | + |
| W3 | 2026-07-08 | npm 12 released; install scripts off by default [^infoq-npm12][^socket-npm12] | OSS | + |
| W3 | 2026-08-04 | keyv/cacheable wave: 2,225 component versions, published with valid provenance [^sb-keyv] | OSS | − |

# OSS successes
- Trusted publishing/OIDC, short-lived tokens, revoked classic tokens and opt-in install scripts — the biggest registry-security overhaul in npm's history.[^gh-npm-plan][^gh-dec9][^infoq-npm12]

# OSS failures / risks
- Worm-style propagation proved the maintainer-token model fragile; waves continued through 2026, and the August 2026 wave carried valid provenance, showing OIDC alone is not enough.[^unit42-landscape][^sb-keyv]
- Spam/token-farming pollutes the registry at six-figure package scale.[^aws-tea]

# Business successes
- n/a (GitHub-operated).

# Business failures / risks
- Reputational damage to GitHub's stewardship; no transparent public budget for registry security.

# By window
## W3
- npm 12 with install scripts off by default (2026-07-08); keyv/cacheable wave (2026-08-04).[^infoq-npm12][^sb-keyv]
## W6
- Mini Shai-Hulud waves incl. TanStack and node-ipc (Apr–Jun 2026); npm 12 announced.[^unit42-landscape][^tanstack-pm][^stepsec-nodeipc][^reg-npm12]
## W9
- axios backdoor (2026-03-31).[^huntress-axios]
## W12
- Tea token-farming discovery; Shai-Hulud 2.0; classic tokens killed.[^aws-tea][^datadog-sh2][^gh-dec9]
## W24
- chalk/debug compromise; Shai-Hulud; GitHub hardening plan.[^aikido-chalk][^rl-shai][^gh-npm-plan]

# Lessons
- Long-lived publish tokens + post-install scripts + transitive dependency sprawl make a package registry wormable.
- Security fixes that add friction (2FA, short token lifetimes, opt-in scripts) only stick after a catastrophe.

# Related
- [npm registry (security-sustainability view)](/projects/security-sustainability/npm-registry.md), [chalk/debug compromise](/events/2025-09-chalk-debug-npm-compromise.md)
- [Shai-Hulud npm worm](/events/2025-09-shai-hulud-npm-worm.md)
- [Node.js](/projects/devtools-languages/nodejs.md), [Open VSX](/projects/devtools-languages/open-vsx.md), [CPython / PyPI](/projects/devtools-languages/cpython.md)

[^npm-gh]: npm CLI GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/npm/cli
[^cisa-npm]: CISA: Widespread Supply Chain Compromise Impacting npm Ecosystem — https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
[^aikido-chalk]: Aikido: npm debug and chalk packages compromised — https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised
[^unit42-shai]: Unit 42: Shai-Hulud worm compromises npm ecosystem — https://unit42.paloaltonetworks.com/npm-supply-chain-attack/
[^datadog-sh2]: Datadog Security Labs: The Shai-Hulud 2.0 npm worm — https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/
[^gh-npm-plan]: GitHub: Our plan for a more secure npm supply chain (2025-09-22) — https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/
[^gh-classic-disabled]: GitHub Changelog: classic token creation disabled (2025-11-05) — https://github.blog/changelog/2025-11-05-npm-security-update-classic-token-creation-disabled-and-granular-token-changes/
[^gh-dec9]: GitHub community: classic token removal moves to December 9 — https://github.com/orgs/community/discussions/179562
[^huntress-axios]: Huntress: Supply chain compromise of axios npm package — https://www.huntress.com/blog/supply-chain-compromise-axios-npm-package
[^unit42-landscape]: Unit 42: The npm Threat Landscape (updated July 15, 2026) — https://unit42.paloaltonetworks.com/monitoring-npm-supply-chain-attacks/
[^tanstack-pm]: TanStack: npm supply-chain compromise postmortem — https://tanstack.com/blog/npm-supply-chain-compromise-postmortem
[^reg-npm12]: The Register: GitHub pulls pin on npm's auto-run scripts — https://www.theregister.com/devops/2026/06/10/github-pulls-pin-on-npms-auto-run-scripts/5253453
[^infoq-npm12]: InfoQ: npm 12 released, install scripts off by default — https://www.infoq.com/news/2026/08/npm-12-released/
[^socket-npm12]: Socket: npm v12 ships with install scripts off by default — https://socket.dev/blog/npm-12
[^sb-keyv]: Security Boulevard: Mini Shai-Hulud npm attack, 2,200+ components impacted — https://securityboulevard.com/2026/08/mini-shai-hulud-npm-attack-more-than-2200-components-impacted/
[^aws-tea]: AWS Security Blog: Amazon Inspector detects over 150,000 malicious packages linked to token farming campaign (Nov 2025) — https://aws.amazon.com/blogs/security/amazon-inspector-detects-over-150000-malicious-packages-linked-to-token-farming-campaign
[^rl-shai]: ReversingLabs: Shai-Hulud npm supply chain attack: what you need to know (Sep 2025) — https://www.reversinglabs.com/blog/shai-hulud-worm-npm
[^stepsec-nodeipc]: StepSecurity: Malicious node-ipc versions published to npm (2026-05-14) — https://www.stepsecurity.io/blog/node-ipc-npm-supply-chain-attack
[^pnpm-blog]: pnpm blog (release cadence, 11.x/12.x in Sept 2026) — https://pnpm.io/blog
