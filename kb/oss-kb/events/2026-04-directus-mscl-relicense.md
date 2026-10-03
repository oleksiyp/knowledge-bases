---
type: Event
title: Directus moves from BSL to its own 'Monospace Sustainable Core License'
description: "Proposed on 2 Apr 2026 and shipped in v12.0.0 on 10 Jun 2026, Directus replaced BSL 1.1 with MSCL-1.0-GPL: free under $5M revenue and 50 employees, license keys instead of honor system, gated enterprise features, GPLv3 conversion after four years."
event_kind: license-change
date: 2026-04-02
window: W9
impact: negative
projects: [projects/web-platforms/directus]
organizations: [organizations/directus]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: forum
    resource: https://community.directus.com/t/directus-license-revision-community-feedback-requested/2125
    title: "Directus Community: License revision — community feedback requested (2026-04-02)"
  - id: v12
    resource: https://github.com/directus/directus/releases/tag/v12.0.0
    title: "Directus v12.0.0 release notes (published 2026-06-10)"
  - id: docs
    resource: https://directus.com/docs/licensing/overview
    title: "Directus docs: Licensing overview"
---
# What happened
CEO Ben Haynes opened a community thread on 2 April 2026 proposing a new license, citing unclear BSL terms ("total finances", "production use"), enterprises ignoring the honor system, and BSL's incompatibility with license-key enforcement. MSCL was drafted on Fair Core License principles with input from Bruce Perens and attorneys[^forum]. Directus v12.0.0 (10 June 2026) relicensed BUSL-1.1 → MSCL-1.0-GPL and made the Core tier the default for unlicensed self-hosted instances; SSO, custom permission rules and AI translations require licenses[^v12][^docs].

# Why it matters
It is the second-generation "source-available" move: from honor-system BSL to key-enforced, feature-tiered licensing with a GPL sunset. Thresholds (<$5M revenue, <50 employees) make it free for small users only[^docs].

# Outcome so far
Critics objected to an untested custom license and phone-home keys; the company said it was not in financial trouble[^forum]. Development continued (v12.4 by Sept 2026).

# Related
- [Directus](/projects/web-platforms/directus.md), [Directus (org)](/organizations/directus.md), [NocoDB SUL relicense](/events/2026-01-nocodb-sustainable-use-license.md), [Liquibase FSL relicense](/events/2025-09-liquibase-fsl-relicense.md)

[^forum]: https://community.directus.com/t/directus-license-revision-community-feedback-requested/2125
[^v12]: https://github.com/directus/directus/releases/tag/v12.0.0
[^docs]: https://directus.com/docs/licensing/overview
