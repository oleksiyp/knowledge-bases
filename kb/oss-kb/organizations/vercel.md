---
type: Organization
title: Vercel
description: Frontend cloud company and steward of Next.js; valued at $9.3B after a $300M Series F (Sept 2025), acquisitive (NuxtLabs, Better Auth), but marked by Next.js CVEs, a 2026 breach and a 2025 developer boycott.
resource: https://vercel.com
tags: [commercial-open-source, frontend-cloud, nextjs, nuxt]
org_kind: coss-startup
hq: San Francisco, USA
funding: { total_usd: "~$863M (trackers; not company-confirmed)", last_round: "Series F $300M (Accel, GIC co-lead) + ~$300M tender", last_round_date: 2025-09-30, valuation_usd: "9.3B post-money (no primary round since, as of 2026-10-03)" }
business_verdict: thriving
projects: [projects/devtools-languages/nextjs, projects/devtools-languages/react]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-vercel
    resource: https://en.wikipedia.org/wiki/Vercel
    title: "Wikipedia: Vercel"
  - id: vercel-postmortem
    resource: https://vercel.com/blog/postmortem-on-next-js-middleware-bypass
    title: "Vercel: Postmortem on Next.js middleware bypass"
  - id: react-foundation
    resource: https://react.dev/blog/2025/10/07/introducing-the-react-foundation
    title: "react.dev: Introducing the React Foundation"
  - id: cm-gn-vercel
    resource: https://dealroom.co/news/137900-vercel-acquires-better-auth-a-year-after-ethiopian-founders-5m-seed/
    title: "Dealroom: Vercel acquires Better Auth, a year after Ethiopian founder's seed (2026-07)"
  - id: vercel-series-f
    resource: https://vercel.com/blog/series-f
    title: "Vercel: Towards the AI Cloud — Our Series F (2025-09-30)"
    author: org:vercel
  - id: vercel-apr-incident
    resource: https://vercel.com/kb/bulletin/vercel-april-2026-security-incident
    title: "Vercel: April 2026 security incident bulletin"
    author: org:vercel
  - id: thn-vercel
    resource: https://thehackernews.com/2026/04/vercel-breach-tied-to-context-ai-hack.html
    title: "The Hacker News: Vercel breach tied to Context AI hack exposes limited customer credentials (2026-04)"
    author: org:thehackernews
  - id: vercel-nuxtlabs
    resource: https://vercel.com/blog/nuxtlabs-joins-vercel
    title: "Vercel: NuxtLabs joins Vercel"
  - id: vercel-nuxt-advisory
    resource: https://vercel.com/changelog/nuxt-july-2026-security-advisory
    title: "Vercel changelog: Nuxt July 2026 security advisory"
  - id: reg-sveltekit3
    resource: https://www.theregister.com/devops/2026/08/19/sveltekit-3-puts-heat-on-nextjs-with-radical-approach-to-rpcs/5289925
    title: "The Register: SvelteKit 3 puts heat on Next.js with radical approach to RPCs"
  - id: wp-ba-joins
    resource: https://better-auth.com/blog/better-auth-joins-vercel
    title: "Better Auth: Better Auth is joining Vercel (2026-07-07)"
  - id: wp-ba-launchbase
    resource: https://launchbaseafrica.com/2026/07/09/ethiopian-founder-sells-ai-authentication-startup-to-vercel-a-year-after-5m-round/
    title: "Launch Base Africa: Ethiopian founder sells AI authentication startup to Vercel (2026-07-09)"
---

# Summary
Vercel monetises Next.js (and now Nuxt) via its hosting platform and the v0 AI app builder. It raised $250M at $3.25B (Series E, May 2024) and $300M at $9.3B post-money (Series F, 30 Sept 2025, co-led by Accel and GIC, alongside a ~$300M tender offer)[^vercel-series-f]; it acquired Tremor (Jan 2025), NuxtLabs (July 2025) and Better Auth (7 July 2026; library stays MIT)[^cm-gn-vercel], and added Mitchell Hashimoto to its board (March 2026).[^wiki-vercel] It is a founding member of the React Foundation.[^react-foundation] Risks: the CVE-2025-29927 response (Vercel's own postmortem admits delays), React2Shell, an April 2026 breach (disclosed 19 April) in which an attacker pivoted from the compromised Context.ai tool via an employee's Google Workspace OAuth grant and decrypted non-sensitive environment variables of a subset of customers[^vercel-apr-incident][^thn-vercel], and a September 2025 developer boycott over the CEO's meeting with Benjamin Netanyahu.[^vercel-postmortem][^wiki-vercel]

# Business timeline
| Date | Event |
|---|---|
| 2024-05 | Series E $250M at $3.25B [^wiki-vercel] |
| 2025-01 | Acquires Tremor [^wiki-vercel] |
| 2025-03-21 | CVE-2025-29927 disclosed; postmortem published [^vercel-postmortem] |
| 2025-07 | Acquires NuxtLabs [^wiki-vercel] |
| 2025-09-30 | Series F $300M at $9.3B[^vercel-series-f]; developer boycott controversy [^wiki-vercel] |
| 2025-10-07 | Founding member of React Foundation [^react-foundation] |
| 2026-03 | Mitchell Hashimoto joins board [^wiki-vercel] |
| 2026-04-19 | Security incident via compromised third-party AI tool (Context.ai) [^vercel-apr-incident] |
| 2026-07-07 | Acquires Better Auth (terms undisclosed) [^cm-gn-vercel] |

# Monetization model
Usage-based hosting/serverless (Fluid compute), enterprise plans, v0 AI builder; OSS frameworks (Next.js, Nuxt) as top-of-funnel.[^wiki-vercel]

# Successes
- Tripled valuation in 16 months; consolidated framework ownership (Next.js + Nuxt).[^wiki-vercel]

# Failures / risks
- Security incidents and perception that frameworks favour Vercel hosting.[^vercel-postmortem]

# Related
- [Next.js](/projects/devtools-languages/nextjs.md), [React](/projects/devtools-languages/react.md), [Next.js middleware bypass](/events/2025-03-nextjs-middleware-auth-bypass.md)

[^wiki-vercel]: Wikipedia: Vercel — https://en.wikipedia.org/wiki/Vercel
[^vercel-postmortem]: Vercel postmortem — https://vercel.com/blog/postmortem-on-next-js-middleware-bypass
[^react-foundation]: react.dev — https://react.dev/blog/2025/10/07/introducing-the-react-foundation
[^vercel-series-f]: Vercel blog, 2025-09-30.
[^vercel-apr-incident]: Vercel bulletin, April 2026.
[^thn-vercel]: The Hacker News, April 2026.

## Additional notes (coss-market)

Market context: Vercel is the leading framework-steward acquirer of the period — NuxtLabs (Jul 2025), Better Auth (Jul 2026) and Stakpak (Jul 2026, reported by Dealroom; not independently confirmed)[^cm-gn-vercel] — consolidating OSS frameworks and agent infrastructure around its hosting business. See [COSS M&A](/projects/coss-market/coss-ma-2024-2026.md).

[^cm-gn-vercel]: Dealroom, July 2026.

## Additional notes (devtools-languages, pass 2)

- **NuxtLabs (2025-07-08):** Vercel committed to keeping Nuxt and Nitro MIT-licensed with a public roadmap and open governance, and to open-sourcing Nuxt Studio, Nuxt UI Pro and NuxtHub Admin.[^vercel-nuxtlabs] In July 2026 Vercel handled a Nuxt security advisory (8 issues, including a server-side RCE) by deploying WAF mitigations before public disclosure.[^vercel-nuxt-advisory] See [Vue.js and Nuxt](/projects/devtools-languages/vue.md) and [the acquisition event](/events/2025-07-vercel-acquires-nuxtlabs.md).
- **Svelte:** Vercel employs Svelte creator Rich Harris and sponsors Svelte without owning it. SvelteKit 3's remote functions are now positioned as a Next.js competitor.[^reg-sveltekit3] See [Svelte / SvelteKit](/projects/devtools-languages/svelte.md).
- Vercel's main rival in owning frameworks is now Cloudflare, which acquired Astro (2026-01) and VoidZero (2026-06).

[^vercel-nuxtlabs]: Vercel: NuxtLabs joins Vercel — https://vercel.com/blog/nuxtlabs-joins-vercel
[^vercel-nuxt-advisory]: Vercel changelog: Nuxt July 2026 security advisory — https://vercel.com/changelog/nuxt-july-2026-security-advisory
[^reg-sveltekit3]: The Register: SvelteKit 3 puts heat on Next.js — https://www.theregister.com/devops/2026/08/19/sveltekit-3-puts-heat-on-nextjs-with-radical-approach-to-rpcs/5289925

## Additional notes (web-platforms)
- Primary confirmation of the Better Auth deal: Better Auth announced on **7 July 2026** that it is joining Vercel; the library stays MIT, keeps its name and framework neutrality, and the team (led by founder Bereket Engida) will focus on an "Agent Auth Protocol"[^wp-ba-joins]. Press put the library at 4.7M+ weekly npm downloads and 850+ contributors; terms were undisclosed, roughly a year after a $5M seed (Peak XV, YC)[^wp-ba-launchbase]. Better Auth had already absorbed Auth.js/NextAuth maintenance in Sept 2025, so Vercel now stewards two of the most widely used JS auth libraries. See [Better Auth](/projects/web-platforms/better-auth.md) and [Vercel acquires Better Auth](/events/2026-07-vercel-acquires-better-auth.md).

[^wp-ba-joins]: https://better-auth.com/blog/better-auth-joins-vercel
[^wp-ba-launchbase]: https://launchbaseafrica.com/2026/07/09/ethiopian-founder-sells-ai-authentication-startup-to-vercel-a-year-after-5m-round/
