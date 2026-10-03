---
type: Event
title: Vercel acquires NuxtLabs (Nuxt and Nitro)
description: Vercel bought NuxtLabs, the company funding the Nuxt and Nitro core teams, promising unchanged MIT licensing, public roadmap and open governance and open-sourcing NuxtLabs' paid products.
event_kind: acquisition
date: 2025-07-08
window: W24
impact: mixed
projects: [projects/devtools-languages/vue, projects/devtools-languages/nextjs]
organizations: [organizations/vercel, organizations/nuxtlabs]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
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
  - id: vercel-nuxt-advisory
    resource: https://vercel.com/changelog/nuxt-july-2026-security-advisory
    title: "Vercel changelog: Nuxt July 2026 security advisory"
    author: org:vercel
---

# What happened
On 2025-07-08 Vercel announced that NuxtLabs, founded by Nuxt creator Sébastien Chopin, was joining Vercel. NuxtLabs funded and employed much of the Nuxt and Nitro team, including Daniel Roe, Pooya Parsa and Anthony Fu. Vercel said Nuxt has more than 1M weekly downloads.[^vercel-nuxtlabs] Nuxt and Nitro stay MIT-licensed with a public roadmap and open governance. Nuxt Studio, Nuxt UI Pro and NuxtHub Admin were to become free and open source, and sponsorship money moved to Open Collective.[^vercel-nuxtlabs][^nuxtlabs-site] The price was not disclosed.

# Why it matters
Vercel now pays the core teams of the two leading meta-frameworks, Next.js and Nuxt. Nuxt lead Daniel Roe described the move as solving financial sustainability for the framework.[^redmonk-roe] It is the clearest 2025 example of the "framework company exits to a hosting cloud" pattern. The Cloudflare–Astro (Jan 2026) and Cloudflare–VoidZero (Jun 2026) deals repeated it.

# Outcome so far
- The promises have been kept so far: Nuxt Studio was released as a free self-hostable module and legacy subscriptions were cancelled.[^nuxt-studio-oss]
- In July 2026 a Nuxt security advisory (8 issues, including a server-side RCE) was handled with Vercel WAF mitigations deployed before disclosure. This shows both Vercel's resources and the platform coupling.[^vercel-nuxt-advisory]

# Related
- [Vue.js and Nuxt](/projects/devtools-languages/vue.md)
- [Vercel](/organizations/vercel.md), [NuxtLabs](/organizations/nuxtlabs.md)
- [Cloudflare acquires Astro](/events/2026-01-cloudflare-acquires-astro.md), [Cloudflare acquires VoidZero](/events/2026-06-cloudflare-acquires-voidzero.md)

[^vercel-nuxtlabs]: Vercel: NuxtLabs joins Vercel — https://vercel.com/blog/nuxtlabs-joins-vercel
[^nuxtlabs-site]: NuxtLabs: NuxtLabs is joining Vercel — https://nuxtlabs.com/
[^redmonk-roe]: RedMonk: Daniel Roe on Vercel's NuxtLabs acquisition — https://redmonk.com/blog/2025/07/10/rmc-daniel-roe-vercels-nuxtlabs-acquisition/
[^nuxt-studio-oss]: Nuxt Content: Nuxt Studio is now free and open source — https://content.nuxt.com/blog/studio-oss
[^vercel-nuxt-advisory]: Vercel changelog: Nuxt July 2026 security advisory — https://vercel.com/changelog/nuxt-july-2026-security-advisory
