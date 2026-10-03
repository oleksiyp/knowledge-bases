---
type: Event
title: "Shai-Hulud: first self-replicating npm worm"
description: "A self-propagating worm stole npm/GitHub credentials from developers and automatically republished poisoned versions of their packages, compromising hundreds of packages and prompting GitHub's npm security overhaul."
event_kind: security-incident
date: 2025-09-14
window: W24
impact: negative
projects: [projects/security-sustainability/npm-registry]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: unit42-shai
    resource: https://unit42.paloaltonetworks.com/npm-supply-chain-attack/
    title: "Unit 42: Shai-Hulud worm"
  - id: krebs-shai
    resource: https://krebsonsecurity.com/2025/09/self-replicating-worm-hits-180-software-packages/
    title: "KrebsOnSecurity: Self-replicating worm hits 180+ software packages (2025-09-16)"
  - id: stepsec-shai
    resource: https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised
    title: "StepSecurity: Shai-Hulud — self-replicating worm compromises 500+ npm packages"
  - id: gh-npm-plan
    resource: https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/
    title: "GitHub: Our plan for a more secure npm supply chain"
  - id: cisa-npm
    resource: https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
    title: "CISA: Widespread Supply Chain Compromise Impacting npm Ecosystem"
---
# What happened
A postinstall worm harvested credentials and republished infected versions of every package the victim could publish. The first malicious publish was on Sept 14, 2025 (~17:58 UTC). KrebsOnSecurity counted at least 187 packages by Sept 16, including some of CrowdStrike's, and later counts from StepSecurity and Socket exceeded 500 (e.g., @ctrl/tinycolor).[^krebs-shai][^stepsec-shai][^unit42-shai] CISA issued an alert on Sept 23.[^cisa-npm] (Corrected in pass 2: date 2025-09-15 (approximate) → 2025-09-14, the first malicious publish.)

# Why it matters
Worms that spread on their own turn one compromised token into an ecosystem-wide incident.

# Outcome so far
GitHub announced its plan on 2025-09-22: trusted publishing, short-lived granular tokens, mandatory 2FA and FIDO.[^gh-npm-plan] The worm family came back in Nov 2025 and throughout 2026.

# Related
- [Shai-Hulud 2.0](/events/2025-11-shai-hulud-2-npm-worm.md), [classic tokens revoked](/events/2025-12-npm-classic-tokens-revoked.md), [npm registry](/projects/security-sustainability/npm-registry.md)

[^unit42-shai]: Unit 42: Shai-Hulud worm
[^krebs-shai]: KrebsOnSecurity — https://krebsonsecurity.com/2025/09/self-replicating-worm-hits-180-software-packages/
[^stepsec-shai]: StepSecurity — https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised
[^gh-npm-plan]: GitHub: Our plan for a more secure npm supply chain

## Additional notes (devtools-languages)
- CISA's alert of 2025-09-23 put the count at **500+ compromised packages**. It told users to pin dependencies to versions published before 2025-09-16, rotate developer credentials, and block exfiltration to webhook.site. GitHub's own post dates the worm's start to 2025-09-14.[^cisa-npm][^gh-npm-plan]
- Developer-tooling view: [npm registry](/projects/devtools-languages/npm-registry.md), [Node.js](/projects/devtools-languages/nodejs.md)

[^cisa-npm]: CISA alert — https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
