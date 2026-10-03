---
type: OSS Project
title: Svelte / SvelteKit
description: Compiler-first UI framework and its full-stack meta-framework; Svelte 5 (runes, Oct 2024) rewrote the core, and SvelteKit's type-safe remote functions (2025–26) lead into the SvelteKit 3 release candidate (Aug 2026) — community-governed with creator Rich Harris paid by Vercel.
resource: https://github.com/sveltejs/svelte
tags: [frontend-framework, javascript, compiler, mit, community, vercel-sponsored]
domain: devtools-languages
license: MIT
license_history: ["MIT (2016-)"]
governance: community
steward: Svelte core team (maintainers employed partly by Vercel)
backing_orgs: [organizations/vercel]
metrics:
  github_stars: { value: 88231, as_of: 2026-10-03 }
  github_stars_sveltekit: { value: 20835, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: svelte-gh
    resource: https://github.com/sveltejs/svelte
    title: Svelte GitHub repository (stars via GitHub API, 2026-10-03; SvelteKit repo sveltejs/kit)
  - id: wiki-svelte
    resource: https://en.wikipedia.org/wiki/Svelte
    title: "Wikipedia: Svelte (Svelte 5 release 2024-10-19, runes)"
  - id: svelte-jul-2026
    resource: https://svelte.dev/blog/whats-new-in-svelte-july-2026
    title: "What's new in Svelte: July 2026"
    author: org:svelte
  - id: svelte-jun-2026
    resource: https://svelte.dev/blog/whats-new-in-svelte-june-2026
    title: "What's new in Svelte: June 2026"
    author: org:svelte
  - id: svelte-may-2026
    resource: https://svelte.dev/blog/whats-new-in-svelte-may-2026
    title: "What's new in Svelte: May 2026"
    author: org:svelte
  - id: reg-sveltekit3
    resource: https://www.theregister.com/devops/2026/08/19/sveltekit-3-puts-heat-on-nextjs-with-radical-approach-to-rpcs/5289925
    title: "The Register: SvelteKit 3 puts heat on Next.js with radical approach to RPCs"
    author: org:the-register
  - id: vercel-svelte-interview
    resource: https://vercel.com/blog/the-future-of-svelte-an-interview-with-rich-harris
    title: "Vercel: The future of Svelte, an interview with Rich Harris"
    author: org:vercel
---

# Summary
Svelte took the biggest risk a popular framework can take and it worked. Svelte 5 (2024-10-19) replaced the compiler-magic reactivity model with explicit "runes", a ground-up rewrite.[^wiki-svelte] Through 2025–26 the team built SvelteKit's experimental **remote functions** (`query`, `form`, `command`, `prerender`): type-safe server calls made straight from components, which the June 2026 `.live()` query extended to real-time data.[^svelte-jun-2026][^svelte-may-2026] By August 2026 SvelteKit 3 was described as being at release-candidate stage, and The Register framed it as putting "heat on Next.js".[^reg-sveltekit3] The July 2026 newsletter still described SvelteKit 3 as a preview, with config moving into `vite.config.js` and `$env` modules being replaced.[^svelte-jul-2026] Rich Harris works on Svelte full-time at Vercel, which sponsors Svelte but does not own it.[^reg-sveltekit3][^vercel-svelte-interview] Verdict: OSS growing. Svelte has no company of its own.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-19 | Svelte 5 released (runes; full rewrite) at Svelte Summit [^wiki-svelte] | OSS | + |
| W24 | 2025 (mid) | Remote functions land as experimental in SvelteKit 2.27 [^reg-sveltekit3] | OSS | + |
| W6 | 2026-05 | Remote functions transport via `hydratable`; TypeScript 6.0 support; community plugins in `sv` CLI [^svelte-may-2026] | OSS | + |
| W6 | 2026-06 | `.live()` real-time queries and forms improvements [^svelte-jun-2026] | OSS | + |
| W3 | 2026-07 | SvelteKit 2.62–2.68; SvelteKit 3 changes previewed [^svelte-jul-2026] | OSS | + |
| W3 | 2026-08-19 | The Register reports SvelteKit 3 at release-candidate stage, challenging Next.js [^reg-sveltekit3] | OSS | + |

# OSS successes
- About 88k (Svelte) and 21k (SvelteKit) GitHub stars as of 2026-10-03.[^svelte-gh]
- Pulled off a breaking reactivity rewrite (Svelte 5) without fragmenting the community.[^wiki-svelte]
- Remote functions give SvelteKit a distinctive full-stack story. One benchmark cited by The Register shows SSR HTML payloads 3x smaller than Next.js for an equivalent page.[^reg-sveltekit3]

# OSS failures / risks
- Dependence on Vercel employment for its lead maintainer, while Vercel's commercial focus is Next.js.[^reg-sveltekit3]
- Remote functions stayed "experimental" for more than a year, which slowed enterprise adoption.[^reg-sveltekit3]

# Business successes
- n/a (no Svelte company).

# Business failures / risks
- n/a.

# By window
## W3
- SvelteKit 2.62–2.68; SvelteKit 3 previews and RC reporting (Aug 2026).[^svelte-jul-2026][^reg-sveltekit3]
## W6
- Remote function improvements, `.live()` queries, TS 6.0 support.[^svelte-may-2026][^svelte-jun-2026]
## W9
- No notable events found beyond incremental releases.
## W12
- No notable events found.
## W24
- Svelte 5 (2024-10-19); remote functions introduced experimentally.[^wiki-svelte][^reg-sveltekit3]

# Lessons
- A framework with a corporate sponsor but community governance can make bold technical bets without a business owner. Svelte 5 and SvelteKit 3 are examples.
- Type-safe client-to-server RPC was the main area of framework competition in 2025–26.

# Related
- [Next.js](/projects/devtools-languages/nextjs.md)
- [Vite](/projects/devtools-languages/vite.md)
- [Vercel](/organizations/vercel.md)
- [Vue / Nuxt](/projects/devtools-languages/vue.md)

[^wiki-svelte]: Wikipedia: Svelte (Svelte 5 release 2024-10-19, runes) — https://en.wikipedia.org/wiki/Svelte
[^svelte-jun-2026]: What's new in Svelte: June 2026 — https://svelte.dev/blog/whats-new-in-svelte-june-2026
[^svelte-may-2026]: What's new in Svelte: May 2026 — https://svelte.dev/blog/whats-new-in-svelte-may-2026
[^reg-sveltekit3]: The Register: SvelteKit 3 puts heat on Next.js with radical approach to RPCs — https://www.theregister.com/devops/2026/08/19/sveltekit-3-puts-heat-on-nextjs-with-radical-approach-to-rpcs/5289925
[^svelte-jul-2026]: What's new in Svelte: July 2026 — https://svelte.dev/blog/whats-new-in-svelte-july-2026
[^vercel-svelte-interview]: Vercel: The future of Svelte, an interview with Rich Harris — https://vercel.com/blog/the-future-of-svelte-an-interview-with-rich-harris
[^svelte-gh]: Svelte GitHub repository (stars via GitHub API, 2026-10-03; SvelteKit repo sveltejs/kit) — https://github.com/sveltejs/svelte
