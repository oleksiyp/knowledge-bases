---
type: Organization
title: VoidZero
description: Evan You's company behind Vite, Vitest, Rolldown, Oxc and Vite+; raised $17.1M, dropped a paid Vite+ license in favor of MIT, and was acquired by Cloudflare on 2026-06-04.
resource: https://voidzero.dev
tags: [commercial-open-source, javascript, build-tools, acquired, cloudflare]
org_kind: coss-startup
hq: unverified
funding: { total_usd: "17.1M", last_round: "Series A $12.5M (Accel; Peak XV, Sunflower)", last_round_date: 2025-10-30, valuation_usd: "undisclosed" }
business_verdict: acquired
projects: [projects/devtools-languages/vite]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bw
    resource: https://www.bwdisrupt.com/article/voidzero-raises-12-5-mn-in-series-a-from-accel-peak-xv-partners-others-577647
    title: "BW Disrupt: VoidZero raises $12.5M Series A"
  - id: viteplus-announce
    resource: https://voidzero.dev/posts/announcing-vite-plus
    title: "VoidZero: Announcing Vite+ (2025-10-13)"
  - id: viteplus-alpha
    resource: https://voidzero.dev/posts/announcing-vite-plus-alpha
    title: "VoidZero: Announcing Vite+ Alpha (2026-03-13)"
  - id: cf-pr
    resource: https://www.cloudflare.com/press/press-releases/2026/cloudflare-acquires-voidzero-to-build-the-future-of-the-ai-native-web/
    title: "Cloudflare press release: Cloudflare Acquires VoidZero"
  - id: viteplus-1
    resource: https://voidzero.dev/posts/announcing-vite-plus-1-0
    title: "VoidZero: Announcing Vite+ 1.0 (2026-09-28)"
  - id: vue-gh-pass2
    resource: https://github.com/vuejs/core
    title: "vuejs/core GitHub releases (3.6.0-rc.1 2026-07-18)"
  - id: vz-series-a
    resource: https://voidzero.dev/posts/announcing-series-a
    title: "VoidZero: VoidZero raises $12.5M Series A (2025-10-30)"
    author: org:voidzero
---

# Summary
VoidZero raised a $4.6M seed and a $12.5M Series A led by Accel (Peak XV, Sunflower Capital; angels incl. Koen Bok and Eric Simons), $17.1M total; the Series A was announced on 2025-10-30.[^bw][^vz-series-a] It announced Vite+ on 2025-10-13 with paid tiers for larger companies, then dropped that model and released Vite+ under MIT at alpha (2026-03-13).[^viteplus-announce][^viteplus-alpha] Cloudflare acquired the company on 2026-06-04 (price undisclosed), pledging that Vite, Vitest, Rolldown, Oxc and Vite+ stay MIT and funding a $1M independent Vite ecosystem fund; Vite+ 1.0 followed on 2026-09-28.[^cf-pr][^viteplus-1]

# Business timeline
| Date | Event |
|---|---|
| 2024 | Founded with $4.6M seed (Accel) [^bw] |
| 2025-10-30 | $12.5M Series A (Accel) [^vz-series-a] |
| 2025-10-13 | Vite+ announced with commercial license tiers [^viteplus-announce] |
| 2026-03-13 | Vite+ alpha, MIT — commercial plan dropped [^viteplus-alpha] |
| 2026-06-04 | Acquired by Cloudflare [^cf-pr] |
| 2026-09-28 | Vite+ 1.0 [^viteplus-1] |

# Monetization model
Originally: source-available/commercial Vite+ for enterprises. Then: free MIT toolchain with separate services ("Step into the Void"). Now: strategic unit of Cloudflare driving deployments to its network.[^viteplus-alpha][^cf-pr]

# Successes
- Shipped Rolldown-powered Vite 8 and Vite+ 1.0; strategic exit.[^viteplus-1][^cf-pr]

# Failures / risks
- Commercial licensing plan abandoned after community friction; independence lost.[^viteplus-alpha]

# Related
- [Vite](/projects/devtools-languages/vite.md), [Cloudflare acquires VoidZero](/events/2026-06-cloudflare-acquires-voidzero.md), [Vite+ goes MIT](/events/2026-03-vite-plus-goes-mit.md)

[^bw]: BW Disrupt — https://www.bwdisrupt.com/article/voidzero-raises-12-5-mn-in-series-a-from-accel-peak-xv-partners-others-577647
[^viteplus-announce]: VoidZero: Announcing Vite+ — https://voidzero.dev/posts/announcing-vite-plus
[^viteplus-alpha]: VoidZero: Announcing Vite+ Alpha — https://voidzero.dev/posts/announcing-vite-plus-alpha
[^cf-pr]: Cloudflare press release — https://www.cloudflare.com/press/press-releases/2026/cloudflare-acquires-voidzero-to-build-the-future-of-the-ai-native-web/
[^viteplus-1]: VoidZero: Announcing Vite+ 1.0 — https://voidzero.dev/posts/announcing-vite-plus-1-0

## Additional notes (devtools-languages, pass 2)

Founder Evan You also leads Vue.js, which is not part of the Cloudflare deal and stays community- and sponsor-funded. Vue 3.6, whose Vapor Mode builds on the same compiler and tooling work, reached RC on 2026-07-18.[^vue-gh-pass2] See [Vue.js and Nuxt](/projects/devtools-languages/vue.md). Together with the Astro acquisition (2026-01), Cloudflare now funds two of the main non-React frontend toolchains.

[^vue-gh-pass2]: vuejs/core GitHub releases — https://github.com/vuejs/core
[^vz-series-a]: VoidZero blog, 2025-10-30.
