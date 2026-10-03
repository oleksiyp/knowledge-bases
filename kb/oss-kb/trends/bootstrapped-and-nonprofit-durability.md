---
type: Trend
title: Bootstrapped and nonprofit-anchored OSS proved durable
description: "While VC-funded open-core companies relicensed, were acquired or stalled, a cohort of bootstrapped, profitable or nonprofit-anchored OSS businesses grew steadily without outside capital: Ghost, Plausible, Bruno, Home Assistant/Nabu Casa, Proxmox, Coolify and Zulip. Their weak point was the funding of community stewards such as the Drupal Association, NumFOCUS and Ruby Central."
tags: [business-model, bootstrapped, nonprofit, sustainability, cross-domain]
strength: moderate
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
domains: [web-platforms, end-user-apps, cloud-native, devtools-languages, scientific-computing]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ghost-10m
    resource: https://x.com/JohnONolan/status/2029195753428758756
    title: "John O'Nolan: Ghost passes $10M ARR (Mar 2026)"
  - id: ghost6
    resource: https://ghost.org/changelog/6/
    title: Ghost 6.0 changelog
  - id: plausible-apr
    resource: https://plausible.io/blog/homepage-edits-conversion-lift
    title: Plausible blog (record April 2026)
  - id: bruno-2025
    resource: https://blog.usebruno.com/bruno-2025-from-idea-to-daily-driver
    title: "Bruno: 2025 from idea to daily driver"
  - id: ha-2m
    resource: https://www.home-assistant.io/blog/2025/04/16/state-of-the-open-home-recap/
    title: "Home Assistant: State of the Open Home 2025"
  - id: numfocus
    resource: https://numfocus.medium.com/a-new-structure-f5aab4ca1781
    title: "NumFOCUS: A new structure (Feb 2026)"
---

# Summary

Two business archetypes diverged in this period:

| Archetype | Typical 2024–2026 outcome | Examples |
|---|---|---|
| VC-funded open core with a 2021–22 raise and no new round since | Relicensing, an acquisition, a pivot, or a stall | Strapi, Appwrite, Medusa (added a proprietary Enterprise Edition), Appsmith, Hasura (pivoted to PromptQL), NocoDB and Directus (relicensed), Deno (layoffs) |
| Bootstrapped, profitable, or nonprofit-anchored | Steady growth, no license drama | Ghost (nonprofit, $10M+ ARR, ActivityPub)[^ghost-10m][^ghost6]; Plausible (record month in Apr 2026)[^plausible-apr]; Bruno (600k+ MAU)[^bruno-2025]; Home Assistant (2M installs, owned by a foundation)[^ha-2m]; Proxmox; Coolify; Zulip (moved under a foundation); Ghostty (nonprofit) |

# Evidence links

- [Ghost](/projects/web-platforms/ghost.md), [Plausible](/projects/web-platforms/plausible.md), [Bruno](/projects/web-platforms/bruno.md)
- [Home Assistant](/projects/end-user-apps/home-assistant.md), [Proxmox VE](/projects/cloud-native/proxmox-ve.md), [Coolify](/projects/cloud-native/coolify.md), [Zulip](/projects/end-user-apps/zulip.md)
- Relicensing among VC-backed projects: [NocoDB](/events/2026-01-nocodb-sustainable-use-license.md), [Directus](/events/2026-04-directus-mscl-relicense.md), [Hasura's pivot](/events/2025-06-hasura-promptql-pivot.md)

# The weak point: steward organizations

The code itself is durable. The **nonprofit stewards** that hold the community together are fragile:

- The **Drupal Association** changed its CEO and disclosed a deficit of about $1.15M with 2.3 months of reserves ([event](/events/2026-07-drupal-association-interim-ceo-deficit.md)).
- **NumFOCUS** ran about $2.7M in annual deficits and then restructured[^numfocus] ([event](/events/2026-02-numfocus-restructuring.md)).
- **Ruby Central** took over RubyGems, then warned of "real financial jeopardy" ([event](/events/2025-09-ruby-central-rubygems-takeover.md)).
- The **Matrix Foundation** ran a deficit, and the **PHP Foundation** saw donor fatigue.

# Implications

- For long-lived infrastructure, "boring" funding beats a large raise: a profitable SaaS, a hardware business (Nabu Casa) or support subscriptions (Proxmox).
- Steward organizations need diversified revenue. The AI-lab and hyperscaler money that flowed into security, described in [the maintainer cliff](/trends/maintainer-cliff-and-ai-burden.md), has not reached them.

# Related

- [AI broke some OSS monetization](/trends/ai-breaks-oss-monetization.md), [License pendulum](/trends/license-pendulum.md)
- [Domain review: web platforms](/domains/web-platforms.md)

[^ghost-10m]: John O'Nolan on X.
[^ghost6]: Ghost changelog.
[^plausible-apr]: Plausible blog.
[^bruno-2025]: Bruno blog.
[^ha-2m]: Home Assistant blog.
[^numfocus]: NumFOCUS.
