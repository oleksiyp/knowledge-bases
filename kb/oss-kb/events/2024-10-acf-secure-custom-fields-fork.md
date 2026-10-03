---
type: Event
title: WordPress.org forks ACF into "Secure Custom Fields"
description: "On Oct 12, 2024 WordPress.org took over WP Engine's Advanced Custom Fields plugin listing, replacing it with a fork named Secure Custom Fields under the same slug and auto-update path — a hostile fork via distribution control."
event_kind: fork
date: 2024-10-12
window: W24
impact: negative
projects: [projects/licensing-forks/wordpress]
organizations: [organizations/automattic, organizations/wp-engine]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wporg-scf
    resource: https://wordpress.org/news/2024/10/secure-custom-fields/
    title: "WordPress.org News: Secure Custom Fields (2024-10-12)"
  - id: acf-response
    resource: https://www.advancedcustomfields.com/blog/acf-plugin-no-longer-available-on-wordpress-org/
    title: "ACF blog: ACF plugin no longer available on WordPress.org"
  - id: timnash
    resource: https://timnash.co.uk/advisory-advanced-custom-fields-changes/
    title: "Tim Nash: Advisory — Advanced Custom Fields changes (auto-update switched sites to SCF)"
  - id: lf-fair
    resource: https://www.linuxfoundation.org/press/linux-foundation-announces-the-fair-package-manager-project-for-open-source-content-management-system-stability
    title: "Linux Foundation: FAIR Package Manager (2025-06-06)"
---

# What happened
On Saturday Oct 12, 2024 the `wordpressdotorg` account took control of the Advanced Custom Fields (ACF) plugin slug and pushed an update renaming it "Secure Custom Fields" (SCF). Mullenweg invoked point 18 of the plugin directory guidelines, saying the fork removed commercial upsells and fixed a security problem.[^wporg-scf] Sites with auto-updates enabled were switched from ACF to SCF without warning.[^timnash] The ACF team said a plugin under active development had never before been "unilaterally and forcibly taken away from its creator without consent".[^acf-response]

# Why it matters
The GPL allows anyone to fork. Taking over a competitor's slug in the central directory is different, because it uses control of distribution to capture users. Many in the ecosystem saw this as the moment WordPress.org stopped being neutral.

# Outcome so far
It accelerated work on independent distribution, most visibly the Linux Foundation's FAIR Package Manager (June 2025).[^lf-fair]

# Related
- [WordPress](/projects/licensing-forks/wordpress.md), [FAIR](/projects/licensing-forks/fair-package-manager.md)

[^wporg-scf]: WordPress.org News — https://wordpress.org/news/2024/10/secure-custom-fields/
[^acf-response]: ACF blog — https://www.advancedcustomfields.com/blog/acf-plugin-no-longer-available-on-wordpress-org/
[^timnash]: Tim Nash — https://timnash.co.uk/advisory-advanced-custom-fields-changes/
[^lf-fair]: Linux Foundation — https://www.linuxfoundation.org/press/linux-foundation-announces-the-fair-package-manager-project-for-open-source-content-management-system-stability
