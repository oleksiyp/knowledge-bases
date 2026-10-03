---
type: OSS Project
title: Astro
description: Content-first, islands-architecture web framework; its VC-funded company shut its Studio DB service (2024–25), then was acquired by Cloudflare (2026-01-16) and has since shipped Astro 6 (Mar 2026) and Astro 7 with a Rust compiler (Jun 2026) — an OSS success whose business exited by acquisition.
resource: https://github.com/withastro/astro
tags: [web-framework, static-site, islands, mit, acquisition, cloudflare]
domain: devtools-languages
license: MIT
license_history: ["MIT (2021-)"]
governance: company-led-open-core
steward: Cloudflare (via the acquired Astro Technology Company team)
backing_orgs: [organizations/astro-technology-company]
metrics:
  github_stars: { value: 63019, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: astro-gh
    resource: https://github.com/withastro/astro
    title: Astro GitHub repository (stars via GitHub API, 2026-10-03)
  - id: cf-astro-pr
    resource: https://cloudflare.net/news/news-details/2026/Cloudflare-Acquires-Astro-to-Accelerate-the-Future-of-High-Performance-Web-Development/default.aspx
    title: "Cloudflare IR: Cloudflare Acquires Astro to Accelerate the Future of High-Performance Web Development"
    author: org:cloudflare
  - id: hn-cf-astro
    resource: https://news.ycombinator.com/item?id=46646645
    title: "Hacker News: Cloudflare acquires Astro"
  - id: astro-company
    resource: https://astro.build/blog/the-astro-technology-company/
    title: "Astro blog: Announcing The Astro Technology Company ($7M seed, Jan 2022)"
    author: org:astro
  - id: astro-goodbye-studio
    resource: https://astro.build/blog/goodbye-astro-studio/
    title: "Astro blog: Goodbye Studio, Hello DB"
    author: org:astro
  - id: astro-6
    resource: https://astro.build/blog/astro-6/
    title: "Astro blog: Astro 6.0"
    author: org:astro
  - id: astro-blog
    resource: https://astro.build/blog/
    title: "The Astro Blog (Astro 7.0 on 2026-06-22; 7.1–7.3)"
    author: org:astro
  - id: astro-sep-2026
    resource: https://astro.build/blog/whats-new-september-2026/
    title: "What's new in Astro — September 2026"
    author: org:astro
  - id: astro-aug-2026
    resource: https://astro.build/blog/whats-new-august-2026/
    title: "What's new in Astro — August 2026"
    author: org:astro
---

# Summary
Astro is the 2024–26 breakout framework for content sites, and its company is a textbook case of an OSS success without a standalone business. The Astro Technology Company raised a $7M seed led by Lightspeed in January 2022.[^astro-company] Its first managed product, Astro Studio (hosted DB), was wound down. New databases stopped on 2024-10-01 and data was deleted after 2025-03-01, with Astro DB pointed at any libSQL host such as Turso.[^astro-goodbye-studio] On **2026-01-16 Cloudflare acquired the company**. It committed to keep Astro open source and to continue the Astro Ecosystem Fund with Webflow, Netlify, Wix and Sentry, and it named Unilever, Visa and NBC News as users.[^cf-astro-pr] Releases sped up after the deal: Astro 6 (2026-03-10, Vite Environment API dev server, Fonts and CSP APIs, live content collections) and **Astro 7 (2026-06-22: Vite 8, a new Rust compiler, advanced routing)**, followed by 7.1–7.3.[^astro-6][^astro-blog][^astro-sep-2026] Verdict: OSS growing. Business: acquired.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-01 | Astro Studio stops new databases (wind-down; deletion after 2025-03-01) [^astro-goodbye-studio] | Business | − |
| W24 | 2025-03-01 | Astro Studio databases inaccessible/deleted [^astro-goodbye-studio] | Business | − |
| W9 | 2026-01-16 | Cloudflare acquires The Astro Technology Company; Astro stays open source [^cf-astro-pr][^hn-cf-astro] | Business | mixed |
| W9 | 2026-01 | Astro 6 beta (more JS runtimes) [^cf-astro-pr] | OSS | + |
| W9 | 2026-03-10 | Astro 6.0 [^astro-6] | OSS | + |
| W6 | 2026-06-22 | Astro 7.0: Vite 8, Rust compiler, Advanced Routing [^astro-blog] | OSS | + |
| W3 | 2026-08 | Astro 7.2 (experimental incremental static builds); playground on Cloudflare Dynamic Workers [^astro-aug-2026] | OSS | + |
| W3 | 2026-09 | Astro 7.3; Starlight 0.42 [^astro-sep-2026] | OSS | + |

# OSS successes
- About 63k GitHub stars as of 2026-10-03.[^astro-gh]
- Fast, credible release cadence after the acquisition: two majors in about 3.5 months.[^astro-6][^astro-blog]
- Used by large brands and as the backbone for platforms such as Webflow and Wix on Cloudflare.[^cf-astro-pr]

# OSS failures / risks
- Steward concentration: Astro's roadmap is now funded by one edge cloud. Cloudflare-specific helpers (e.g., `finalize()` for custom Worker entrypoints) are appearing in core releases.[^astro-sep-2026]

# Business successes
- The team found a well-funded owner, and the ecosystem fund continued.[^cf-astro-pr]

# Business failures / risks
- Astro Studio, its first managed product, failed within about a year.[^astro-goodbye-studio]
- No independent revenue model was proven before the exit.[^astro-goodbye-studio][^cf-astro-pr]

# By window
## W3
- Astro 7.2 and 7.3; Starlight 0.42.[^astro-aug-2026][^astro-sep-2026]
## W6
- Astro 7.0 (2026-06-22).[^astro-blog]
## W9
- Cloudflare acquisition (2026-01-16); Astro 6 (2026-03-10).[^cf-astro-pr][^astro-6]
## W12
- No notable events found.
## W24
- Astro Studio shutdown (Oct 2024 – Mar 2025).[^astro-goodbye-studio]

# Lessons
- Frameworks are now a distribution channel for clouds: Vercel owns Next.js and Nuxt, Cloudflare owns Astro and Vite/VoidZero.
- Hosted add-ons (DB, CMS) on top of an MIT framework failed as businesses for both Astro and Nuxt. The exit was acquisition.

# Related
- [Cloudflare acquires Astro (event)](/events/2026-01-cloudflare-acquires-astro.md)
- [Astro Technology Company](/organizations/astro-technology-company.md)
- [Vite](/projects/devtools-languages/vite.md), [Vue / Nuxt](/projects/devtools-languages/vue.md), [Next.js](/projects/devtools-languages/nextjs.md)

[^astro-company]: Astro blog: Announcing The Astro Technology Company ($7M seed, Jan 2022) — https://astro.build/blog/the-astro-technology-company/
[^astro-goodbye-studio]: Astro blog: Goodbye Studio, Hello DB — https://astro.build/blog/goodbye-astro-studio/
[^cf-astro-pr]: Cloudflare IR: Cloudflare Acquires Astro to Accelerate the Future of High-Performance Web Development — https://cloudflare.net/news/news-details/2026/Cloudflare-Acquires-Astro-to-Accelerate-the-Future-of-High-Performance-Web-Development/default.aspx
[^astro-6]: Astro blog: Astro 6.0 — https://astro.build/blog/astro-6/
[^astro-blog]: The Astro Blog (Astro 7.0 on 2026-06-22; 7.1–7.3) — https://astro.build/blog/
[^astro-sep-2026]: What's new in Astro — September 2026 — https://astro.build/blog/whats-new-september-2026/
[^hn-cf-astro]: Hacker News: Cloudflare acquires Astro — https://news.ycombinator.com/item?id=46646645
[^astro-aug-2026]: What's new in Astro — August 2026 — https://astro.build/blog/whats-new-august-2026/
[^astro-gh]: Astro GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/withastro/astro
