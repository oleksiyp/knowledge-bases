---
type: Event
title: "Shai-Hulud 2.0 worm backdoors ~800 npm packages"
description: "The second Shai-Hulud wave moved to preinstall execution via the Bun runtime, backdoored 796 packages (20M+ weekly downloads) including Zapier, PostHog, Postman and ENS, and added a destructive wiper fallback."
event_kind: security-incident
date: 2025-11-24
window: W12
impact: negative
projects: [projects/security-sustainability/npm-registry]
organizations: [organizations/wiz, organizations/endor-labs]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: datadog-sh2
    resource: https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/
    title: "Datadog Security Labs: Shai-Hulud 2.0"
  - id: unit42-shai
    resource: https://unit42.paloaltonetworks.com/npm-supply-chain-attack/
    title: "Unit 42: Shai-Hulud (updated Nov 26)"
  - id: wiz-sh2
    resource: https://www.wiz.io/blog/shai-hulud-2-0-ongoing-supply-chain-attack
    title: "Wiz: Sha1-Hulud 2.0"
  - id: posthog-pm
    resource: https://posthog.com/blog/nov-24-shai-hulud-attack-post-mortem
    title: "PostHog: Post-mortem of Shai-Hulud attack"
---
# What happened
Identified on 2025-11-24. 796 unique packages with 20M+ weekly downloads were backdoored.[^datadog-sh2] More than 25,000 malicious repositories appeared across about 350 users. When credential theft failed, the worm tried to wipe the victim's home directory.[^unit42-shai][^wiz-sh2] PostHog published its own postmortem.[^posthog-pm]

# Why it matters
It showed the worm family evolving (preinstall execution, Bun, a sabotage fallback) faster than registry defenses.

# Outcome so far
Classic npm tokens were revoked two weeks later, on 2025-12-09.

# Related
- [npm registry](/projects/security-sustainability/npm-registry.md), [classic tokens revoked](/events/2025-12-npm-classic-tokens-revoked.md)

[^datadog-sh2]: Datadog Security Labs: Shai-Hulud 2.0
[^unit42-shai]: Unit 42: Shai-Hulud (updated Nov 26)
[^wiz-sh2]: Wiz: Sha1-Hulud 2.0
[^posthog-pm]: PostHog: Post-mortem of Shai-Hulud attack
