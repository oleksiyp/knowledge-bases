---
type: Event
title: "axios npm package backdoored by North Korea-linked actors"
description: "Compromised maintainer credentials were used to publish RAT-dropping axios 1.14.1 and 0.30.4; the long-lived token coexisted with OIDC publishing, bypassing it."
event_kind: security-incident
date: 2026-03-31
window: W9
impact: negative
projects: [projects/security-sustainability/npm-registry]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: huntress-axios
    resource: https://www.huntress.com/blog/supply-chain-compromise-axios-npm-package
    title: "Huntress: axios npm compromise"
---
# What happened
On 2026-03-30/31, axios 1.14.1 (latest) and 0.30.4 (legacy) pulled in a malicious plain-crypto-js@4.2.1, which deployed cross-platform RATs. They were live for about 3 hours, and Huntress saw 135+ endpoints contact the attacker's C2. Researchers linked it to UNC1069/BlueNoroff (DPRK).[^huntress-axios]

# Why it matters
It showed that trusted publishing is useless while long-lived tokens still exist alongside it, and that state actors now target top-10 npm packages.

# Outcome so far
It fed into npm 12's deprecation of 2FA-bypass tokens.

# Related
- [npm registry](/projects/security-sustainability/npm-registry.md), [npm 12](/events/2026-07-npm-12-install-scripts-off.md)

[^huntress-axios]: Huntress: axios npm compromise
