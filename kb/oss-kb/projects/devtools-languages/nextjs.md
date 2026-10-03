---
type: OSS Project
title: Next.js
description: Vercel's React meta-framework; commercially the strongest framework franchise (Vercel valued at $9.3B in Sept 2025) but hit by two critical security incidents — the middleware auth bypass (CVE-2025-29927) and the exploited React2Shell RCE (Dec 2025) — followed by monthly security releases with critical fixes through mid-2026.
resource: https://github.com/vercel/next.js
tags: [javascript, react, framework, mit, single-vendor, security-incident]
domain: devtools-languages
license: MIT
license_history: ["MIT (2016-)"]
governance: single-vendor
steward: Vercel
backing_orgs: [organizations/vercel]
metrics:
  github_stars: { value: 143020, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: thriving
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: down, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: next-gh
    resource: https://github.com/vercel/next.js
    title: Next.js GitHub repository (stars via GitHub API, 2026-10-03)
  - id: next-blog
    resource: https://nextjs.org/blog
    title: "nextjs.org blog index (15: 2024-10-24; 16: 2025-10-21; 16.1: 2025-12-18; 16.2: 2026-03-18; 16.3: 2026-08-03; security releases Jul/Aug/Sep 2026)"
    author: org:vercel
  - id: next-16
    resource: https://nextjs.org/blog/next-16
    title: "nextjs.org: Next.js 16 (2025-10-21; Build Adapters API alpha, Turbopack default)"
    author: org:vercel
  - id: next-platforms
    resource: https://nextjs.org/blog/nextjs-across-platforms
    title: "nextjs.org: Next.js Across Platforms — Adapters, OpenNext, and Our Commitments (2026-03-25; stable Adapter API)"
    author: org:vercel
  - id: next-cve-66478
    resource: https://nextjs.org/blog/CVE-2025-66478
    title: "nextjs.org: Security Advisory CVE-2025-66478 (2025-12-03)"
    author: org:vercel
  - id: next-sec-aug26
    resource: https://nextjs.org/blog/august-2026-security-release
    title: "nextjs.org: August 2026 Security Release (16.3.3 / 15.5.24; 2 critical)"
    author: org:vercel
  - id: next-sec-sep26
    resource: https://nextjs.org/blog/september-2026-security-release
    title: "nextjs.org: September 2026 Security Release (16.3.8 / 15.5.27)"
    author: org:vercel
  - id: cisa-kev
    resource: https://www.cisa.gov/news-events/alerts/2025/12/05/cisa-adds-one-known-exploited-vulnerability-catalog
    title: "CISA: Adds One Known Exploited Vulnerability to Catalog (CVE-2025-55182, 2025-12-05)"
  - id: vercel-postmortem
    resource: https://vercel.com/blog/postmortem-on-next-js-middleware-bypass
    title: "Vercel: Postmortem on Next.js middleware bypass (CVE-2025-29927)"
    author: org:vercel
  - id: nvd-29927
    resource: https://nvd.nist.gov/vuln/detail/cve-2025-29927
    title: "NVD: CVE-2025-29927"
  - id: vercel-series-f
    resource: https://vercel.com/blog/series-f
    title: "Vercel: Towards the AI Cloud — Our Series F ($300M at $9.3B, Sept 2025)"
    author: org:vercel
  - id: redmonk-nuxtlabs
    resource: https://redmonk.com/blog/2025/07/10/rmc-daniel-roe-vercels-nuxtlabs-acquisition/
    title: "RedMonk: Daniel Roe on Vercel's NuxtLabs Acquisition (July 2025)"
  - id: mee-boycott
    resource: https://www.middleeasteye.net/trending/developers-drop-vercel-call-boycott-after-ceo-posts-selfie-netanyahu
    title: "Middle East Eye: Developers drop Vercel, call for boycott after CEO posts selfie with Netanyahu (Sept 2025)"
  - id: vercel-breach
    resource: https://vercel.com/kb/bulletin/vercel-april-2026-security-incident
    title: "Vercel: April 2026 security incident bulletin"
    author: org:vercel
  - id: hns-breach
    resource: https://www.helpnetsecurity.com/2026/04/20/vercel-breached/
    title: "Help Net Security: Vercel breached via compromised third-party AI tool (2026-04-20)"
  - id: vercel-better-auth
    resource: https://vercel.com/blog/vercel-acquires-better-auth
    title: "Vercel: Vercel acquires Better Auth (2026-07-07)"
    author: org:vercel
  - id: vercel-board
    resource: https://www.streetinsider.com/Business+Wire/Vercel+Appoints+Mitchell+Hashimoto,+Co-Founder+of+HashiCorp+and+Creator+of+Terraform,+to+Board+of+Directors/26184063.html
    title: "Business Wire (via StreetInsider): Vercel Appoints Mitchell Hashimoto to Board of Directors (March 2026)"
  - id: rspack-next
    resource: https://rspack.rs/blog/
    title: "Rspack blog (incl. 'Rspack joins the Next.js ecosystem', 2025-04-10)"
---

# Summary
Next.js is the most-starred JS framework on GitHub (143k) and the commercial engine of Vercel, whose $300M Series F (co-led by Accel and GIC) in September 2025 valued it at $9.3B.[^next-gh][^vercel-series-f] Releases continued on a steady cadence — 15 (2024-10-24), 16 (2025-10-21, Turbopack default, Build Adapters API alpha), 16.1, 16.2 (2026-03-18) and 16.3 (2026-08-03) — and on 2026-03-25 Vercel declared the Adapter API stable with shared tests and OpenNext collaboration, answering long-standing self-hosting criticism.[^next-blog][^next-16][^next-platforms] But the period was dominated by security: CVE-2025-29927 (disclosed 2025-03-21) let attackers bypass middleware via the internal `x-middleware-subrequest` header on self-hosted deployments, and Vercel's own postmortem admitted delayed triage; in December 2025 React2Shell (CVE-2025-55182, CVSS 10) and its Next.js counterpart CVE-2025-66478 were exploited in the wild and added to CISA's KEV catalog on 2025-12-05; and mid-2026 brought monthly security releases (July: 4 high; August: 2 critical; September: a critical upstream issue plus 7 more).[^vercel-postmortem][^nvd-29927][^next-cve-66478][^cisa-kev][^next-sec-aug26][^next-sec-sep26] Verdict: OSS contested (single-vendor control, security record), business thriving.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-24 | Next.js 15 (React 19, async request APIs, Turbopack dev) [^next-blog] | OSS | + |
| W24 | 2025-03-21 | CVE-2025-29927 middleware bypass public; patches 14.2.25/15.2.3 [^vercel-postmortem][^nvd-29927] | OSS | − |
| W24 | 2025-04-10 | Rspack announces Next.js integration (non-Vercel bundler option) [^rspack-next] | OSS | + |
| W24 | 2025-07-08 | Vercel acquires NuxtLabs (Nuxt/Nitro stay MIT) [^redmonk-nuxtlabs] | Business | + |
| W24 | 2025-09 | Vercel Series F $300M at $9.3B; developer boycott over CEO's Netanyahu photo [^vercel-series-f][^mee-boycott] | Business | + / − |
| W12 | 2025-10-21 | Next.js 16 with Build Adapters API (alpha), Turbopack default [^next-16] | OSS | + |
| W12 | 2025-12-03 → 12-11 | React2Shell / CVE-2025-66478 patched (12-03); CISA KEV (12-05); follow-up RSC fixes (12-11) [^next-cve-66478][^cisa-kev][^next-blog] | OSS | − |
| W9 | 2026-03 | Hashimoto joins Vercel board; Next.js 16.2 (03-18); stable Adapter API (03-25) [^vercel-board][^next-blog][^next-platforms] | OSS/Business | + |
| W6 | 2026-04-20 | Vercel discloses breach via compromised third-party AI tool (Context.ai) and OAuth grant; limited customer env vars exposed [^vercel-breach][^hns-breach] | Business | − |
| W3 | 2026-07-07 | Vercel acquires Better Auth (MIT, 4.7M weekly downloads) [^vercel-better-auth] | Business | + |
| W3 | 2026-07-20 → 09-30 | Monthly Next.js security releases: July (4 high), August (2 critical), Sept 22 (critical upstream issue), Sept 30 (1 high, 5 medium, 1 low) [^next-blog][^next-sec-aug26][^next-sec-sep26] | OSS | − |
| W3 | 2026-08-03 | Next.js 16.3 (up to 90% less dev memory, Instant Navigations) [^next-blog] | OSS | + |

# OSS successes
- Stable Adapter API (March 2026) answers long-standing criticism that self-hosting/other clouds were second-class.[^next-platforms]
- Ecosystem diversity: Rspack can now power Next.js builds.[^rspack-next]

# OSS failures / risks
- Critical CVEs kept coming: middleware bypass (Mar 2025), React2Shell (Dec 2025, exploited), and two more criticals in August 2026.[^vercel-postmortem][^cisa-kev][^next-sec-aug26]
- CVE-2025-29927 affected only self-hosted deployments (Vercel-hosted apps were protected), reinforcing perceptions of a two-tier framework.[^vercel-postmortem]

# Business successes
- Vercel funding: $300M Series F at $9.3B (Sept 2025) plus a ~$300M tender offer; acquisitions of NuxtLabs (July 2025) and Better Auth (July 2026).[^vercel-series-f][^redmonk-nuxtlabs][^vercel-better-auth]

# Business failures / risks
- September 2025 developer boycott over the CEO's meeting with Benjamin Netanyahu.[^mee-boycott]
- April 2026 internal breach traced to a compromised third-party AI tool.[^vercel-breach][^hns-breach]

# By window
## W3
- Vercel buys Better Auth (2026-07-07); Next.js 16.3 (2026-08-03); three months of security releases including two critical fixes (August).[^vercel-better-auth][^next-blog][^next-sec-aug26]
## W6
- Vercel security breach disclosed (2026-04-20).[^vercel-breach]
## W9
- Hashimoto joins Vercel board; Next.js 16.2; stable Adapter API.[^vercel-board][^next-platforms]
## W12
- Next.js 16; React2Shell exploitation and emergency patching.[^next-16][^next-cve-66478][^cisa-kev]
## W24
- CVE-2025-29927; NuxtLabs acquisition; Series F at $9.3B; boycott.[^vercel-postmortem][^redmonk-nuxtlabs][^vercel-series-f][^mee-boycott]

# Lessons
- When a framework's security model depends on the vendor's hosting architecture, self-hosters bear the risk — and trust erodes.
- Commercial success and OSS trust can diverge: Vercel's valuation tripled through a period of repeated framework CVEs.
- Publishing a stable adapter contract is the credible remedy for "vendor framework" criticism.

# Related
- [Vercel](/organizations/vercel.md)
- [Next.js middleware bypass](/events/2025-03-nextjs-middleware-auth-bypass.md), [React2Shell](/events/2025-12-react2shell-rsc-rce.md)
- [React](/projects/devtools-languages/react.md), [React Router / Remix](/projects/devtools-languages/react-router.md), [Vite](/projects/devtools-languages/vite.md)

[^next-gh]: Next.js GitHub repository — https://github.com/vercel/next.js
[^next-blog]: nextjs.org blog index — https://nextjs.org/blog
[^next-16]: nextjs.org: Next.js 16 — https://nextjs.org/blog/next-16
[^next-platforms]: nextjs.org: Next.js Across Platforms — https://nextjs.org/blog/nextjs-across-platforms
[^next-cve-66478]: nextjs.org: Security Advisory CVE-2025-66478 — https://nextjs.org/blog/CVE-2025-66478
[^next-sec-aug26]: nextjs.org: August 2026 Security Release — https://nextjs.org/blog/august-2026-security-release
[^next-sec-sep26]: nextjs.org: September 2026 Security Release — https://nextjs.org/blog/september-2026-security-release
[^cisa-kev]: CISA: Adds One Known Exploited Vulnerability to Catalog — https://www.cisa.gov/news-events/alerts/2025/12/05/cisa-adds-one-known-exploited-vulnerability-catalog
[^vercel-postmortem]: Vercel: Postmortem on Next.js middleware bypass — https://vercel.com/blog/postmortem-on-next-js-middleware-bypass
[^nvd-29927]: NVD: CVE-2025-29927 — https://nvd.nist.gov/vuln/detail/cve-2025-29927
[^vercel-series-f]: Vercel: Our Series F — https://vercel.com/blog/series-f
[^redmonk-nuxtlabs]: RedMonk: Daniel Roe on Vercel's NuxtLabs Acquisition — https://redmonk.com/blog/2025/07/10/rmc-daniel-roe-vercels-nuxtlabs-acquisition/
[^mee-boycott]: Middle East Eye: Developers drop Vercel — https://www.middleeasteye.net/trending/developers-drop-vercel-call-boycott-after-ceo-posts-selfie-netanyahu
[^vercel-breach]: Vercel: April 2026 security incident — https://vercel.com/kb/bulletin/vercel-april-2026-security-incident
[^hns-breach]: Help Net Security: Vercel breached via compromised third-party AI tool — https://www.helpnetsecurity.com/2026/04/20/vercel-breached/
[^vercel-better-auth]: Vercel: Vercel acquires Better Auth — https://vercel.com/blog/vercel-acquires-better-auth
[^vercel-board]: Vercel Appoints Mitchell Hashimoto to Board — https://www.streetinsider.com/Business+Wire/Vercel+Appoints+Mitchell+Hashimoto,+Co-Founder+of+HashiCorp+and+Creator+of+Terraform,+to+Board+of+Directors/26184063.html
[^rspack-next]: Rspack blog — https://rspack.rs/blog/
