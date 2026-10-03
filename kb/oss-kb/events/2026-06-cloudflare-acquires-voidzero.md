---
type: Event
title: Cloudflare acquires VoidZero (Vite, Vitest, Rolldown, Oxc)
description: Cloudflare bought Evan You's VoidZero, committed to keeping Vite and its sister tools MIT-licensed, and funded a $1M independent Vite ecosystem fund.
event_kind: acquisition
date: 2026-06-04
window: W6
impact: mixed
projects: [projects/devtools-languages/vite]
organizations: [organizations/voidzero]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cf-pr
    resource: https://www.cloudflare.com/press/press-releases/2026/cloudflare-acquires-voidzero-to-build-the-future-of-the-ai-native-web/
    title: "Cloudflare press release: Cloudflare Acquires VoidZero"
  - id: siliconangle
    resource: https://siliconangle.com/2026/06/04/cloudflare-acquires-voidzero-maker-vite-javascript-toolchain/
    title: "SiliconANGLE: Cloudflare acquires VoidZero"
  - id: viteplus-1
    resource: https://voidzero.dev/posts/announcing-vite-plus-1-0
    title: "VoidZero: Announcing Vite+ 1.0"
---

# What happened
On 2026-06-04 Cloudflare announced it had acquired VoidZero; the price was not disclosed. The team, led by Evan You, joined Cloudflare's Emerging Technology and Incubation organization.[^cf-pr][^siliconangle] Vite, Vitest, Rolldown, Oxc and Vite+ stay MIT-licensed and vendor-agnostic. Cloudflare also funded a $1M independent Vite ecosystem fund for maintainers who work for neither company.[^cf-pr] At the time Vite had 130M+ weekly downloads, and Cloudflare's own Vite plugin had 13.9M.[^cf-pr]

# Why it matters
This was the third major acquisition of a JS/Python tooling company in seven months, after Bun and Astral, and this time the buyer was an edge/cloud platform rather than an AI lab. Control of the default frontend build tool gives Cloudflare a direct path from local development to deployment on its network.[^cf-pr]

# Outcome so far
Vite+ 1.0 shipped under MIT on 2026-09-28 and is close to 2M weekly downloads.[^viteplus-1] No license changes have been reported.

# Related
- [Vite](/projects/devtools-languages/vite.md), [VoidZero](/organizations/voidzero.md), [Vite+ goes MIT](/events/2026-03-vite-plus-goes-mit.md)

[^cf-pr]: Cloudflare press release — https://www.cloudflare.com/press/press-releases/2026/cloudflare-acquires-voidzero-to-build-the-future-of-the-ai-native-web/
[^siliconangle]: SiliconANGLE — https://siliconangle.com/2026/06/04/cloudflare-acquires-voidzero-maker-vite-javascript-toolchain/
[^viteplus-1]: VoidZero — https://voidzero.dev/posts/announcing-vite-plus-1-0
