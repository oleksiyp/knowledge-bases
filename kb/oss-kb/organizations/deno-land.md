---
type: Organization
title: Deno Land Inc.
description: Company behind the Deno runtime, Deno Deploy and JSR; Sequoia-backed, last verified raise in 2022, layoffs in March 2026 and Deploy Classic shutdown in July 2026.
resource: https://deno.com
tags: [commercial-open-source, javascript-runtime, struggling]
org_kind: coss-startup
hq: San Diego / remote, USA
funding: { total_usd: "~$26M announced ($4.9M seed 2021 + $21M Series A 2022)", last_round: "Series A $21M (Sequoia)", last_round_date: 2022-06-21, valuation_usd: "undisclosed" }
business_verdict: struggling
projects: [projects/devtools-languages/deno]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bushell
    resource: https://dbushell.com/2026/03/20/denos-decline-and-layoffs/
    title: "David Bushell: 404 Deno CEO not found"
  - id: deno-company
    resource: https://deno.com/blog/the-deno-company
    title: "Deno blog: Announcing the Deno Company ($4.9M seed, 2021-03)"
    author: org:deno-land
  - id: byteiota
    resource: https://byteiota.com/deno-deploy-classic-shuts-down-july-20-migrate-now/
    title: "byteiota: Deno Deploy Classic Shuts Down July 20"
  - id: deno-series-a
    resource: https://deno.com/blog/series-a
    title: "Deno blog: Deno raises $21M (2022-06-21)"
    author: org:deno-land
  - id: deno-classic-docs
    resource: https://docs.deno.com/deploy/classic/
    title: "Deno docs: Deploy Classic (shutdown 2026-07-20 notice)"
    author: org:deno-land
  - id: deno-blog
    resource: https://deno.com/blog
    title: Deno blog
  - id: deno-oracle4
    resource: https://deno.com/blog/deno-v-oracle4
    title: "Deno blog: JavaScript™ Trademark Update"
  - id: deno-update4
    resource: https://deno.com/blog/deno-v-oracle4
    title: "Deno: JavaScript trademark update (2025-06-27)"
---

# Summary
Deno Land Inc. raised a $4.9M seed (announced with the company's launch in March 2021) and a $21M Sequoia-led Series A announced 21 June 2022 (~$26M in announced funding).[^deno-company][^deno-series-a] Its commercial bets (Deno Deploy, Deno KV/Queues, JSR, Sandbox) struggled: the company laid off staff the week of 2026-03-20, and shut Deploy Classic (dash.deno.com and the subhosting v1 API) on 2026-07-20, reducing regions from six to two.[^bushell][^byteiota][^deno-classic-docs] The layoffs are documented only by staff posts and a developer blog; no company statement or major-press report was found in pass 2. It continues to lead the petition to cancel Oracle's JavaScript trademark.[^deno-oracle4]

# Business timeline
| Date | Event |
|---|---|
| 2022-06-21 | Series A $21M (Sequoia) [^deno-series-a] |
| 2025-06-18 | TTAB dismisses fraud claim vs Oracle; case continues [^deno-oracle4] |
| 2026-02 | New Deno Deploy GA [^deno-blog] |
| 2026-03-20 (week) | Layoffs [^bushell] |
| 2026-07-20 | Deploy Classic shut down [^byteiota][^deno-classic-docs] |

# Monetization model
Hosted platform (Deno Deploy, Sandbox), enterprise support; the runtime and JSR are free.[^deno-blog]

# Successes
- Shipped Deploy GA, Sandbox and steady runtime releases despite cuts.[^deno-blog]

# Failures / risks
- No new funding announced since 2022 (any 2026 raise is unconfirmed); layoffs reported only on blogs and X; product shutdowns.[^bushell]

# Related
- [Deno](/projects/devtools-languages/deno.md), [Deno layoffs](/events/2026-03-deno-layoffs.md)

[^bushell]: David Bushell — https://dbushell.com/2026/03/20/denos-decline-and-layoffs/
[^deno-company]: Deno blog, 2021-03.
[^byteiota]: byteiota — https://byteiota.com/deno-deploy-classic-shuts-down-july-20-migrate-now/
[^deno-blog]: Deno blog — https://deno.com/blog
[^deno-series-a]: Deno blog, 2022-06-21.
[^deno-classic-docs]: Deno docs, Deploy Classic.
[^deno-oracle4]: Deno blog: JavaScript™ Trademark Update — https://deno.com/blog/deno-v-oracle4

## Additional notes (licensing-forks)
- **JavaScript trademark fight:** Deno petitioned the USPTO in Nov 2024 to cancel Oracle's "JavaScript" trademark. The TTAB dismissed the fraud claim on June 18, 2025, and the genericness and abandonment claims moved into discovery.[^deno-update4] No final decision was found as of Oct 2026. See [event](/events/2024-11-deno-petitions-cancel-javascript-trademark.md).

[^deno-update4]: Deno blog — https://deno.com/blog/deno-v-oracle4
