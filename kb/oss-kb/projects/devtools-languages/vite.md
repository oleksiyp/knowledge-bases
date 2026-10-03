---
type: OSS Project
title: Vite (and the VoidZero toolchain — Rolldown, Oxc, Vitest, Vite+)
description: The dominant frontend build tool and its Rust-powered siblings; VoidZero raised $17M, abandoned a paid Vite+ license for MIT, shipped Vite 8 on Rolldown and Vite+ 1.0, and was acquired by Cloudflare in June 2026.
resource: https://github.com/vitejs/vite
tags: [javascript, build-tool, bundler, rust, mit, acquired, cloudflare]
domain: devtools-languages
license: MIT
license_history: ["MIT (2020-)", "Vite+: announced Oct 2025 with planned paid enterprise tier; released MIT at alpha (2026-03-13)"]
governance: company-led-open-core
steward: VoidZero (Cloudflare subsidiary since June 2026); Vite core team
backing_orgs: [organizations/voidzero]
metrics:
  github_stars_vite: { value: 83101, as_of: 2026-10-03 }
  github_stars_oxc: { value: 22934, as_of: 2026-10-03 }
  github_stars_rolldown: { value: 13960, as_of: 2026-10-03 }
  github_stars_vitest: { value: 17181, as_of: 2026-10-03 }
  vite_weekly_downloads: { value: 130000000, as_of: 2026-06-04, note: "130M+ per Cloudflare press release" }
  vite_plus_weekly_downloads: { value: 2000000, as_of: 2026-09-28, note: "\"nearing\" 2M per VoidZero" }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh-api
    resource: https://github.com/vitejs/vite
    title: Vite / Oxc / Rolldown / Vitest GitHub repositories (stars via GitHub API, 2026-10-03)
  - id: cf-pr
    resource: https://www.cloudflare.com/press/press-releases/2026/cloudflare-acquires-voidzero-to-build-the-future-of-the-ai-native-web/
    title: "Cloudflare press release: Cloudflare Acquires VoidZero to Build the Future of the AI-Native Web"
    author: org:cloudflare
  - id: siliconangle
    resource: https://siliconangle.com/2026/06/04/cloudflare-acquires-voidzero-maker-vite-javascript-toolchain/
    title: "SiliconANGLE: Cloudflare acquires VoidZero, maker of the Vite JavaScript toolchain"
  - id: vz-seriesa
    resource: https://voidzero.dev/posts/announcing-series-a
    title: "VoidZero: VoidZero Raises $12.5M Series A (2025-10-30)"
    author: org:voidzero
  - id: bw-seriesa
    resource: https://www.bwdisrupt.com/article/voidzero-raises-12-5-mn-in-series-a-from-accel-peak-xv-partners-others-577647
    title: "BW Disrupt: VoidZero raises $12.5M Series A from Accel, Peak XV"
  - id: heise-viteplus
    resource: https://www.heise.de/en/news/Toolchain-for-web-development-Vite-becomes-open-source-11212433.html
    title: "heise: Toolchain for web development: Vite+ becomes open source"
  - id: viteplus-announce
    resource: https://voidzero.dev/posts/announcing-vite-plus
    title: "VoidZero: Announcing Vite+ (2025-10-13; commercial model later struck through)"
    author: org:voidzero
  - id: viteplus-alpha
    resource: https://voidzero.dev/posts/announcing-vite-plus-alpha
    title: "VoidZero: Announcing Vite+ Alpha"
    author: org:voidzero
  - id: viteplus-1
    resource: https://voidzero.dev/posts/announcing-vite-plus-1-0
    title: "VoidZero: Announcing Vite+ 1.0"
    author: org:voidzero
  - id: infoq-beta
    resource: https://www.infoq.com/news/2026/08/vite-plus-beta/
    title: "InfoQ: VoidZero Releases Vite+ Beta"
  - id: vite-releases
    resource: https://github.com/vitejs/vite/releases
    title: "Vite GitHub releases/tags (v8.0.0 tagged 2026-03-12; v8.3.2 on 2026-10-01; via GitHub API)"
---

# Summary
Vite is the frontend success story of the period: 130M+ weekly downloads by June 2026, the default dev server for nearly every non-Next.js framework, and now bundled by Rolldown (Rust) in Vite 8 (8.0.0 tagged 2026-03-12; 8.3.2 on 2026-10-01).[^cf-pr][^vite-releases] VoidZero, Evan You's company, raised a $4.6M seed and a $12.5M Series A (Accel, Peak XV; $17.1M total) to build a commercial unified toolchain, Vite+.[^bw-seriesa] After announcing Vite+ with a paid enterprise tier in October 2025, VoidZero reversed course and released it under MIT at alpha (2026-03-13), saying "we got tired of debating which features should be paid and how they should be gated" (sustainability to come from a separate commercial product, Void) — then sold itself to Cloudflare on 2026-06-04, with all tools pledged to stay MIT and a $1M independent Vite ecosystem fund.[^heise-viteplus][^viteplus-alpha][^cf-pr] Vite+ 1.0 shipped on 2026-09-28.[^viteplus-1] Verdict: OSS thriving; business exited via acquisition before monetization was proven.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-13 | Vite+ announced with tiered pricing (free for individuals/OSS/small companies) at ViteConf (first in-person, Amsterdam) [^viteplus-announce][^heise-viteplus] | Business | mixed |
| W12 | 2025-10-30 | VoidZero $12.5M Series A (Accel lead; Peak XV, Sunflower Capital, Koen Bok, Eric Simons; follows a 2024 seed reported at $4.6M) [^vz-seriesa][^bw-seriesa] | Business | + |
| W9 | 2026-03-12 | Vite 8.0.0 tagged — Rolldown becomes the bundler [^vite-releases] | OSS | + |
| W9 | 2026-03-13 | Vite+ alpha released under MIT; commercial license dropped [^viteplus-alpha] | OSS | + |
| W6 | 2026-06-04 | Cloudflare acquires VoidZero; $1M independent Vite ecosystem fund [^cf-pr][^siliconangle] | Business | + / mixed |
| W3 | 2026-08 | Vite+ beta [^infoq-beta] | OSS | + |
| W3 | 2026-09-28 | Vite+ 1.0 (MIT, Vite 8 + Rolldown, Vitest, Oxlint, Oxfmt) [^viteplus-1] | OSS | + |

# OSS successes
- Rust rewrite of the JS toolchain landed: Rolldown in Vite 8; Oxlint claimed 50–100x faster than ESLint, Oxfmt up to 30x faster than Prettier.[^viteplus-1]
- Vite+ 1.0 near 2M weekly downloads and 2,600+ dependent public repos within weeks.[^viteplus-1]
- Cloudflare's Vite plugin alone is 13.9M weekly downloads (>10% of Vite).[^cf-pr]

# OSS failures / risks
- Steward is now a hosting vendor with an obvious deployment incentive; neutrality relies on MIT licensing and the separate Vite core team.[^cf-pr]

# Business successes
- Strategic exit to Cloudflare; team joins Cloudflare's Emerging Technology and Incubation org.[^cf-pr]

# Business failures / risks
- The commercial Vite+ license plan was abandoned after community pushback — the original business model never launched.[^heise-viteplus][^viteplus-alpha]
- Deal price undisclosed.[^cf-pr]

# By window
## W3
- Vite+ beta and 1.0 (2026-09-28).[^infoq-beta][^viteplus-1]
## W6
- Cloudflare acquisition (2026-06-04).[^cf-pr]
## W9
- Vite+ alpha goes MIT (2026-03-13).[^viteplus-alpha]
## W12
- Vite+ announced with paid tiers (2025-10-13); $12.5M Series A (2025-10-30); first in-person ViteConf.[^viteplus-announce][^vz-seriesa][^heise-viteplus]
## W24
- Rolldown/Oxc maturation; VoidZero operating on its 2024 seed. (Corrected in pass 2: Series A moved to W12 — announced 2025-10-30.)[^vz-seriesa]

# Lessons
- "Free for small, paid for enterprise" licensing of a build tool provoked enough friction that the vendor reverted to pure MIT.
- Ubiquitous OSS + platform-adjacent acquirer (Cloudflare) is a recurring exit pattern for JS tooling startups in 2025–26.

# Related
- [VoidZero](/organizations/voidzero.md)
- [Cloudflare acquires VoidZero](/events/2026-06-cloudflare-acquires-voidzero.md)
- [Vite+ goes MIT](/events/2026-03-vite-plus-goes-mit.md)
- [Biome](/projects/devtools-languages/biome.md), [Rspack](/projects/devtools-languages/rspack.md), [Next.js](/projects/devtools-languages/nextjs.md)

[^gh-api]: Vite / Oxc / Rolldown / Vitest GitHub repositories (stars via GitHub API, 2026-10-03) — https://github.com/vitejs/vite
[^cf-pr]: Cloudflare press release: Cloudflare Acquires VoidZero to Build the Future of the AI-Native Web — https://www.cloudflare.com/press/press-releases/2026/cloudflare-acquires-voidzero-to-build-the-future-of-the-ai-native-web/
[^siliconangle]: SiliconANGLE: Cloudflare acquires VoidZero, maker of the Vite JavaScript toolchain — https://siliconangle.com/2026/06/04/cloudflare-acquires-voidzero-maker-vite-javascript-toolchain/
[^vz-seriesa]: VoidZero: VoidZero Raises $12.5M Series A — https://voidzero.dev/posts/announcing-series-a
[^bw-seriesa]: BW Disrupt: VoidZero raises $12.5M Series A from Accel, Peak XV — https://www.bwdisrupt.com/article/voidzero-raises-12-5-mn-in-series-a-from-accel-peak-xv-partners-others-577647
[^heise-viteplus]: heise: Toolchain for web development: Vite+ becomes open source — https://www.heise.de/en/news/Toolchain-for-web-development-Vite-becomes-open-source-11212433.html
[^viteplus-announce]: VoidZero: Announcing Vite+ (2025-10-13; commercial model later struck through) — https://voidzero.dev/posts/announcing-vite-plus
[^viteplus-alpha]: VoidZero: Announcing Vite+ Alpha — https://voidzero.dev/posts/announcing-vite-plus-alpha
[^viteplus-1]: VoidZero: Announcing Vite+ 1.0 — https://voidzero.dev/posts/announcing-vite-plus-1-0
[^infoq-beta]: InfoQ: VoidZero Releases Vite+ Beta — https://www.infoq.com/news/2026/08/vite-plus-beta/
[^vite-releases]: Vite GitHub releases — https://github.com/vitejs/vite/releases
