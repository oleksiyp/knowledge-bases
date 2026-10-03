---
type: Event
title: "keyv/cacheable compromise: largest Shai-Hulud wave yet"
description: "A hijacked GitHub account behind keyv and the cacheable family pushed malware to main and released with valid provenance, spreading worm-like to 400-2,200+ packages with over 2 billion monthly installs."
event_kind: security-incident
date: 2026-08-04
window: W3
impact: negative
projects: [projects/security-sustainability/npm-registry]
organizations: [organizations/chainguard, organizations/aikido-security]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sb-keyv
    resource: https://securityboulevard.com/2026/08/mini-shai-hulud-npm-attack-more-than-2200-components-impacted/
    title: "Security Boulevard: Mini Shai-Hulud, 2,200+ components impacted"
  - id: cg-keyv
    resource: https://www.chainguard.dev/unchained/the-keyv-and-cacheable-npm-supply-chain-attack-inside-the-mini-shai-hulud-campaign
    title: "Chainguard: keyv and cacheable attack"
  - id: esp-keyv
    resource: https://www.esecurityplanet.com/threats/github-account-breach-fuels-shai-hulud-npm-supply-chain-attack/
    title: "eSecurity Planet: GitHub account breach fuels Shai-Hulud"
---
# What happened
On 2026-08-04 the attacker pushed directly to main and cut keyv@6.0.0 and other releases through GitHub Actions, so they carried valid provenance. keyv has about 127M weekly downloads.[^esp-keyv] The wave spread to packages from Deliveroo, OneReach, Picsart, Qlik and @servicetitan, with 2,225 component versions tracked.[^sb-keyv][^esp-keyv] Chainguard says Libraries customers were never exposed because of cooldown periods and scanning.[^cg-keyv]

# Why it matters
Provenance and OIDC do not help when the source repository itself is compromised. Cooldown periods were the defense that worked.

# Outcome so far
Contained within days. It strengthened enterprise demand for curated registries and cooldowns.

# Related
- [npm registry](/projects/security-sustainability/npm-registry.md), [Chainguard](/organizations/chainguard.md)

[^sb-keyv]: Security Boulevard: Mini Shai-Hulud, 2,200+ components impacted
[^cg-keyv]: Chainguard: keyv and cacheable attack
[^esp-keyv]: eSecurity Planet: GitHub account breach fuels Shai-Hulud
