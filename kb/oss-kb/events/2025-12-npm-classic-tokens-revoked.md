---
type: Event
title: "npm permanently revokes classic tokens"
description: "GitHub disabled npm classic token creation (Nov 2025) and permanently revoked all classic tokens on 2025-12-09, pushing publishers to OIDC trusted publishing or short-lived granular tokens."
event_kind: other
date: 2025-12-09
window: W12
impact: positive
projects: [projects/security-sustainability/npm-registry]
organizations: [organizations/openjs-foundation]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh-classic-disabled
    resource: https://github.blog/changelog/2025-11-05-npm-security-update-classic-token-creation-disabled-and-granular-token-changes/
    title: "GitHub changelog: classic token creation disabled"
  - id: gh-dec9
    resource: https://github.com/orgs/community/discussions/179562
    title: "GitHub community: classic token removal moves to December 9"
  - id: gh-npm-plan
    resource: https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/
    title: "GitHub: npm security plan"
---
# What happened
Classic token creation was disabled in early November.[^gh-classic-disabled] Revocation was moved to 2025-12-09, when all classic tokens stopped working.[^gh-dec9] `npm login` now issues 2-hour session tokens. Granular write tokens are time-limited (90 days max per GitHub's revised timeline) and require 2FA.[^gh-npm-plan]

# Why it matters
It removed the long-lived credentials that Shai-Hulud harvested.

# Outcome so far
Partly effective. The 2026 attacks moved to OIDC theft and leftover granular tokens (axios). npm 12 deprecated 2FA-bypass tokens.

# Related
- [npm 12](/events/2026-07-npm-12-install-scripts-off.md), [npm registry](/projects/security-sustainability/npm-registry.md)

[^gh-classic-disabled]: GitHub changelog: classic token creation disabled
[^gh-dec9]: GitHub community: classic token removal moves to December 9
[^gh-npm-plan]: GitHub: npm security plan
