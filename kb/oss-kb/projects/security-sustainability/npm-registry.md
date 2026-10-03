---
type: OSS Project
title: npm registry (security posture)
description: "The JavaScript package registry run by GitHub/Microsoft; the epicenter of OSS supply-chain attacks 2025-2026 (chalk/debug, Shai-Hulud waves, axios, TanStack, keyv), forcing the biggest security-default overhaul in its history (classic tokens revoked, trusted publishing, npm 12 install scripts off)."
resource: https://www.npmjs.com
tags: [supply-chain, package-registry, javascript, worm, trusted-publishing]
domain: security-sustainability
license: Artistic-2.0
license_history: ["Artistic-2.0 (npm CLI, unchanged)"]
governance: single-vendor
steward: GitHub (Microsoft)
backing_orgs: [organizations/openjs-foundation]
metrics:
  shai_hulud_2_packages: { value: 796, as_of: 2025-11-26 }
  keyv_wave_component_versions: { value: 2225, as_of: 2026-08-10 }
oss_verdict: contested
business_verdict: n/a
momentum_by_window: { W3: up, W6: down, W9: down, W12: up, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
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
---
# Summary
npm is the single most attacked open source distribution channel of the last two years. Verdict: **contested** — the registry keeps working and grew, but it suffered a near-continuous run of maintainer-account and CI/CD compromises from September 2025 onward, including self-propagating worms (Shai-Hulud, Shai-Hulud 2.0, "Mini Shai-Hulud") and state-actor intrusions (axios, Mastra). GitHub responded with the most aggressive security-default changes the registry has ever seen: classic tokens revoked (Dec 2025), short-lived granular tokens, trusted publishing via OIDC, staged publishing, and npm 12 (Jul 2026) disabling dependency install scripts by default. Attackers adapted by pivoting to CI trust (stolen OIDC tokens, cache poisoning) so provenance alone stopped being a guarantee.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-08 | 18 packages incl. chalk & debug (2B+ weekly downloads) hijacked via npmjs.help phishing[^aikido-chalk] | OSS | − |
| W24 | 2025-09-15 | Shai-Hulud: first self-replicating npm worm detected (patient zero published 09-14)[^rl-shai][^unit42-shai] | OSS | − |
| W24 | 2025-09-22 | GitHub announces plan: trusted publishing, short-lived tokens, mandatory 2FA[^gh-npm-plan] | OSS | + |
| W12 | 2025-11-05 | Classic token creation disabled; granular tokens time-limited[^gh-classic-disabled] | OSS | + |
| W12 | 2025-11-24 | Shai-Hulud 2.0: 796 packages, 20M+ weekly downloads backdoored[^datadog-sh2] | OSS | − |
| W12 | 2025-12-09 | All classic tokens permanently revoked[^gh-dec9] | OSS | + |
| W9 | 2026-03-31 | axios 1.14.1/0.30.4 backdoored via maintainer creds; DPRK-linked[^huntress-axios] | OSS | − |
| W6 | 2026-04-29 → 06-01 | Mini Shai-Hulud waves: SAP CAP, TanStack, @antv, Red Hat namespace[^unit42-landscape] | OSS | − |
| W6 | 2026-05-14 | node-ipc 9.1.6/9.2.3/12.0.1 backdoored with credential stealer (10M+ weekly downloads)[^stepsec-nodeipc] | OSS | − |
| W6 | 2026-05-11 | TanStack: 84 malicious versions via pull_request_target + cache poisoning + OIDC theft[^tanstack-pm] | OSS | − |
| W6 | 2026-06-09 | npm 12 breaking changes announced (install scripts opt-in)[^reg-npm12] | OSS | + |
| W3 | 2026-07-08 | npm 12 released; 2FA-bypass granular tokens deprecated[^infoq-npm12] | OSS | + |
| W3 | 2026-08-04 | keyv/cacheable wave: 2,225 component versions affected, valid provenance[^sb-keyv] | OSS | − |

# OSS successes
- Classic tokens were fully revoked on 2025-12-09 and replaced by granular tokens and OIDC trusted publishing.[^gh-dec9][^gh-npm-plan]
- npm 12 (2026-07-08) made dependency `preinstall`/`install`/`postinstall` scripts opt-in, closing the code-execution path that every Shai-Hulud wave used.[^infoq-npm12] Socket notes the deprecation of 2FA-bypass tokens: they lost account powers in early August 2026, and direct publishing with them ends around January 2027.[^socket-npm12]
- Detection got very fast. The TanStack malicious versions were spotted publicly within about 20–26 minutes.[^tanstack-pm] Malicious axios versions were up for about 3 hours.[^huntress-axios]

# OSS failures / risks
- Worms that spread on their own changed the threat model: one stolen token now poisons hundreds of packages. Shai-Hulud 2.0 also tried to wipe the victim's home directory when it failed to steal credentials.[^unit42-shai]
- Trusted publishing did not end compromises. Attackers stole OIDC tokens from runner memory (TanStack) and pushed code to main to get valid provenance (keyv).[^tanstack-pm][^sb-keyv]
- On 2026-05-12, TeamPCP released the Mini Shai-Hulud source code, which led to copycat waves.[^unit42-landscape]
- In Nov 2025, Amazon Inspector researchers found 150,000+ npm packages tied to a tea.xyz token-farming spam campaign. They reported them to the OpenSSF malicious-packages database.[^aws-tea]

# Business successes
- n/a. The registry is free and run by GitHub. Security vendors (Socket, Aikido, Chainguard, Endor, StepSecurity) won a lot of customers on the back of these incidents (see the domain review).

# Business failures / risks
- Registry operators say download volume is growing much faster than their funding (see [registry sustainability commitment](/events/2026-09-registry-sustainability-commitment.md)).

# By window
## W3
- npm 12 shipped with install scripts off by default.[^infoq-npm12]
- The keyv/cacheable Mini Shai-Hulud wave hit 2,225 component versions, the largest by spread.[^sb-keyv]
## W6
- TeamPCP's Mini Shai-Hulud campaign hit SAP CAP, TanStack, @antv (323 packages in one hour) and Red Hat's namespace.[^unit42-landscape]
- node-ipc was backdoored on 2026-05-14 with a credential stealer that also targets AI tool configs.[^stepsec-nodeipc]
- GitHub pre-announced the npm 12 breaking changes on 2026-06-09.[^reg-npm12]
## W9
- axios was compromised and attributed to North Korean actors. The attackers got past OIDC because a long-lived token still existed alongside it.[^huntress-axios]
## W12
- Shai-Hulud 2.0 hit 796 packages.[^datadog-sh2] Classic tokens were revoked on Dec 9.[^gh-dec9]
## W24
- The chalk/debug phishing compromise[^aikido-chalk], the first Shai-Hulud worm[^unit42-shai] and GitHub's hardening plan.[^gh-npm-plan]

# Lessons
- Changing the defaults (no install scripts, no long-lived tokens) works better than telling maintainers about best practices.
- Provenance proves where a build ran, not that the code is honest. CI workflow hygiene (`pull_request_target`, cache scoping) is now the weakest point.
- Waiting before adopting new versions (a 24–72h "cooldown") is becoming standard enterprise practice.

# Related
- [Shai-Hulud worm](/events/2025-09-shai-hulud-npm-worm.md), [Shai-Hulud 2.0](/events/2025-11-shai-hulud-2-npm-worm.md), [chalk/debug](/events/2025-09-chalk-debug-npm-compromise.md), [classic tokens revoked](/events/2025-12-npm-classic-tokens-revoked.md), [axios](/events/2026-03-axios-npm-compromise.md), [TanStack/Mini Shai-Hulud](/events/2026-05-tanstack-mini-shai-hulud.md), [npm 12](/events/2026-07-npm-12-install-scripts-off.md), [keyv wave](/events/2026-08-keyv-shai-hulud-wave.md)
- [Socket](/organizations/socket.md), [Aikido Security](/organizations/aikido-security.md), [OpenJS Foundation](/organizations/openjs-foundation.md)

[^aikido-chalk]: Aikido, Sep 2025.
[^unit42-shai]: Unit 42 Shai-Hulud analysis.
[^datadog-sh2]: Datadog Security Labs.
[^gh-npm-plan]: GitHub blog, 2025-09-22.
[^gh-classic-disabled]: GitHub changelog, 2025-11-05.
[^gh-dec9]: GitHub community discussion #179562.
[^huntress-axios]: Huntress.
[^unit42-landscape]: Unit 42 npm threat landscape (Jul 2026 update).
[^tanstack-pm]: TanStack postmortem.
[^reg-npm12]: The Register, 2026-06-10.
[^infoq-npm12]: InfoQ, Aug 2026.
[^socket-npm12]: Socket blog.
[^sb-keyv]: Security Boulevard, Aug 2026.
[^aws-tea]: AWS Security Blog, Nov 2025.
[^rl-shai]: ReversingLabs, Sep 2025.
[^stepsec-nodeipc]: StepSecurity, 2026-05-14.
