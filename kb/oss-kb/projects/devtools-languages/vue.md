---
type: OSS Project
title: Vue.js and Nuxt
description: Evan You's community-funded UI framework and its Nuxt meta-framework; Vue stays a stable #2/#3 framework with Vapor Mode (no virtual DOM) reaching RC in July 2026, while Nuxt's company NuxtLabs was acquired by Vercel (July 2025) and Evan You's VoidZero by Cloudflare (June 2026).
resource: https://github.com/vuejs/core
tags: [frontend-framework, javascript, meta-framework, mit, community, acquisition, vercel, vapor-mode]
domain: devtools-languages
license: MIT
license_history: ["MIT (2014-) — Vue", "MIT (2016-) — Nuxt"]
governance: community
steward: Vue core team (Evan You); Nuxt core team (NuxtLabs staff now employed by Vercel)
backing_orgs: [organizations/vercel, organizations/voidzero, organizations/nuxtlabs]
metrics:
  github_stars_vue_core: { value: 54479, as_of: 2026-10-03 }
  github_stars_nuxt: { value: 60918, as_of: 2026-10-03 }
  nuxt_weekly_downloads: { value: "1M+", as_of: 2025-07-08, note: "per Vercel acquisition post" }
oss_verdict: stable
business_verdict: acquired
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: vue-gh
    resource: https://github.com/vuejs/core
    title: "vuejs/core GitHub repository and releases (3.6.0-alpha.1 2025-07-12, beta.1 2025-12-23, rc.1 2026-07-18, rc.10 2026-09-30; via GitHub API)"
  - id: nuxt-gh
    resource: https://github.com/nuxt/nuxt
    title: "nuxt/nuxt GitHub repository and releases (4.5.0 2026-07-18, 4.5.2 2026-08-05; via GitHub API)"
  - id: vercel-nuxtlabs
    resource: https://vercel.com/blog/nuxtlabs-joins-vercel
    title: "Vercel: NuxtLabs joins Vercel"
    author: org:vercel
  - id: nuxtlabs-site
    resource: https://nuxtlabs.com/
    title: "NuxtLabs: NuxtLabs is joining Vercel"
    author: org:nuxtlabs
  - id: redmonk-roe
    resource: https://redmonk.com/blog/2025/07/10/rmc-daniel-roe-vercels-nuxtlabs-acquisition/
    title: "RedMonk: Daniel Roe on Vercel's NuxtLabs acquisition"
    author: org:redmonk
  - id: nuxt-studio-oss
    resource: https://content.nuxt.com/blog/studio-oss
    title: "Nuxt Content: Nuxt Studio is now free and open source"
    author: org:nuxt
  - id: nuxt-roadmap
    resource: https://nuxt.com/docs/4.x/community/roadmap
    title: "Nuxt roadmap (Nuxt 5 with Nitro v3 / h3 v2)"
    author: org:nuxt
  - id: vercel-nuxt-advisory
    resource: https://vercel.com/changelog/nuxt-july-2026-security-advisory
    title: "Vercel changelog: Nuxt July 2026 security advisory"
    author: org:vercel
  - id: cf-voidzero
    resource: https://www.cloudflare.com/press/press-releases/2026/cloudflare-acquires-voidzero-to-build-the-future-of-the-ai-native-web/
    title: "Cloudflare press release: Cloudflare acquires VoidZero"
    author: org:cloudflare
  - id: stackmaven-vapor
    resource: https://stackmaven.io/news/vue-vapor-mode/
    title: "Stackmaven: Vue 3.6 Vapor Mode — first major-framework attempt to skip the virtual DOM"
---

# Summary
Vue is technically healthy. Its business story has been absorbed by two infrastructure vendors. Vue 3.6 brings **Vapor Mode**, which compiles SFC templates directly to DOM operations with no virtual DOM. It went from alpha (2025-07-12) to beta (2025-12-23) to RC (2026-07-18), with rc.10 out by 2026-09-30, while the stable "latest" tag stays on 3.5.x.[^vue-gh][^stackmaven-vapor] On the business side, **Vercel acquired NuxtLabs**, the company funding Nuxt and Nitro, on 2025-07-08. Vercel promised the MIT license, public roadmap and open governance would stay, and that paid products (Nuxt UI Pro, Nuxt Studio, NuxtHub Admin) would become free and open source.[^vercel-nuxtlabs][^nuxtlabs-site] In June 2026 Cloudflare acquired Evan You's VoidZero (Vite, Rolldown, Oxc).[^cf-voidzero] As a result the two main Vue-adjacent companies now sit inside competing edge clouds. Nuxt 4 shipped in July 2025 and Nuxt 5 (Nitro v3) is planned. A July 2026 advisory fixed eight Nuxt vulnerabilities, including a server-side RCE.[^nuxt-roadmap][^vercel-nuxt-advisory] Verdict: OSS stable. Business: Nuxt's company was acquired.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07-08 | Vercel acquires NuxtLabs; Nuxt/Nitro stay MIT with open governance [^vercel-nuxtlabs][^redmonk-roe] | Business | mixed |
| W24 | 2025-07-12 | Vue 3.6.0-alpha.1 (Vapor Mode) [^vue-gh] | OSS | + |
| W24 | 2025-07 | Nuxt 4.0 released [^nuxt-roadmap] | OSS | + |
| W24/W12 | 2025 H2 | Nuxt Studio open-sourced; Nuxt UI Pro made free (Nuxt UI v4) [^nuxt-studio-oss][^nuxtlabs-site] | OSS | + |
| W12 | 2025-12-23 | Vue 3.6.0-beta.1 [^vue-gh] | OSS | + |
| W6 | 2026-06 | Cloudflare acquires VoidZero (Evan You's toolchain company) [^cf-voidzero] | Business | mixed |
| W3 | 2026-07-18 | Vue 3.6.0-rc.1, Vapor Mode feature-complete; Nuxt 4.5.0 [^vue-gh][^nuxt-gh] | OSS | + |
| W3 | 2026-07-27 | Nuxt security advisory: 1 critical (DevTools RCE, dev-only), 4 high incl. server-side RCE; Vercel WAF mitigation pre-disclosure [^vercel-nuxt-advisory] | OSS | − |
| W3 | 2026-09-30 | Vue 3.6.0-rc.10; stable still pending [^vue-gh] | OSS | flat |

# OSS successes
- Vapor Mode is the first time a major virtual-DOM framework has offered a no-VDOM compile target, and it can be adopted per component.[^stackmaven-vapor]
- After the acquisition Nuxt open-sourced its paid add-ons, so the ecosystem gained free code.[^nuxtlabs-site][^nuxt-studio-oss]

# OSS failures / risks
- Vue 3.6 has had a long pre-release (more than 14 months from alpha with no stable release as of 2026-10-03).[^vue-gh]
- The Nuxt vulnerability cluster in July 2026 came only months after Next.js's React2Shell incident. Server-component-style features widen the attack surface.[^vercel-nuxt-advisory]
- Nuxt's roadmap is now funded by a hosting vendor whose flagship framework is Next.js.[^redmonk-roe]

# Business successes
- NuxtLabs found a sustainable home: the stated reason was that keeping the framework funded had been financially hard.[^redmonk-roe]

# Business failures / risks
- NuxtLabs could not sustain an independent business on paid add-ons (UI Pro, Studio, NuxtHub) and exited via acquisition.[^vercel-nuxtlabs][^redmonk-roe]
- Vue itself still relies on sponsorships, and the two companies around Evan You's ecosystem now belong to Vercel and Cloudflare.[^cf-voidzero]

# By window
## W3
- Vue 3.6 RC (2026-07-18 onward); Nuxt 4.5; Nuxt security advisory (2026-07-27).[^vue-gh][^nuxt-gh][^vercel-nuxt-advisory]
## W6
- Cloudflare acquires VoidZero (June 2026).[^cf-voidzero]
## W9
- No notable events found.
## W12
- Vue 3.6 beta (2025-12-23).[^vue-gh]
## W24
- Vercel acquires NuxtLabs (2025-07-08); Nuxt 4; Vapor alpha.[^vercel-nuxtlabs][^vue-gh]

# Lessons
- Meta-framework companies sell paid add-ons on top of an MIT framework, and in 2025–26 this tended to end in acquisition by a hosting or edge cloud.
- "Same license, roadmap and governance" commitments have become standard wording in framework acquisitions, and they have so far been kept.

# Related
- [Vercel acquires NuxtLabs (event)](/events/2025-07-vercel-acquires-nuxtlabs.md)
- [Cloudflare acquires VoidZero (event)](/events/2026-06-cloudflare-acquires-voidzero.md)
- [Vite](/projects/devtools-languages/vite.md), [Next.js](/projects/devtools-languages/nextjs.md), [Astro](/projects/devtools-languages/astro.md)
- [Vercel](/organizations/vercel.md), [VoidZero](/organizations/voidzero.md), [NuxtLabs](/organizations/nuxtlabs.md)

[^vue-gh]: vuejs/core GitHub repository and releases (3.6.0-alpha.1 2025-07-12, beta.1 2025-12-23, rc.1 2026-07-18, rc.10 2026-09-30; via GitHub API) — https://github.com/vuejs/core
[^stackmaven-vapor]: Stackmaven: Vue 3.6 Vapor Mode — first major-framework attempt to skip the virtual DOM — https://stackmaven.io/news/vue-vapor-mode/
[^vercel-nuxtlabs]: Vercel: NuxtLabs joins Vercel — https://vercel.com/blog/nuxtlabs-joins-vercel
[^nuxtlabs-site]: NuxtLabs: NuxtLabs is joining Vercel — https://nuxtlabs.com/
[^cf-voidzero]: Cloudflare press release: Cloudflare acquires VoidZero — https://www.cloudflare.com/press/press-releases/2026/cloudflare-acquires-voidzero-to-build-the-future-of-the-ai-native-web/
[^nuxt-roadmap]: Nuxt roadmap (Nuxt 5 with Nitro v3 / h3 v2) — https://nuxt.com/docs/4.x/community/roadmap
[^vercel-nuxt-advisory]: Vercel changelog: Nuxt July 2026 security advisory — https://vercel.com/changelog/nuxt-july-2026-security-advisory
[^redmonk-roe]: RedMonk: Daniel Roe on Vercel's NuxtLabs acquisition — https://redmonk.com/blog/2025/07/10/rmc-daniel-roe-vercels-nuxtlabs-acquisition/
[^nuxt-studio-oss]: Nuxt Content: Nuxt Studio is now free and open source — https://content.nuxt.com/blog/studio-oss
[^nuxt-gh]: nuxt/nuxt GitHub repository and releases (4.5.0 2026-07-18, 4.5.2 2026-08-05; via GitHub API) — https://github.com/nuxt/nuxt
