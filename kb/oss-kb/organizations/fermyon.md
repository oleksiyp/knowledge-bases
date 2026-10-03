---
type: Organization
title: "Fermyon Technologies"
description: "Server-side WebAssembly startup behind Spin and SpinKube (donated to CNCF); acquired by Akamai (announced Dec 1, 2025, undisclosed price) to bolster Akamai's edge-functions offering against Cloudflare Workers."
resource: https://www.fermyon.com
tags: [commercial-open-source, webassembly, serverless, edge, acquired]
org_kind: coss-startup
hq: USA
funding: { total_usd: "~$26M ($6M seed + $20M Series A, 2022)", last_round: "Series A $20M (Insight Partners, Amplify) 2022; acquired by Akamai (closed Nov 2025, announced 2025-12-01)", last_round_date: 2025-11, valuation_usd: "undisclosed (Akamai recorded ~$36M goodwill)" }
business_verdict: acquired
projects: [projects/cloud-native/spin-webassembly]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nww-fermyon
    resource: https://www.networkworld.com/article/4099424/akamai-acquires-fermyon-for-edge-computing-as-webassembly-comes-of-age.html
    title: "Network World: Akamai acquires Fermyon"
    author: org:networkworld
  - id: devclass-fermyon
    resource: https://www.devclass.com/containers/2025/12/04/akamai-buys-fermyon-for-wasm-based-serverless-functions-a-possible-answer-to-cloudflare-workers/1732513
    title: "DevClass: Akamai buys Fermyon"
    author: org:devclass
  - id: tc-fermyon-a
    resource: https://techcrunch.com/2022/10/24/fermyon-cloud-app-webassembly-20m-funding-series-a/
    title: "TechCrunch: Fermyon raises $20M (Series A, 2022-10-24)"
    author: org:techcrunch
  - id: akam-10k
    resource: https://www.sec.gov/Archives/edgar/data/1086222/000108622226000022/akam-20251231.htm
    title: "Akamai Form 10-K FY2025 (Fermyon acquired Nov 2025; ~$36.0M goodwill)"
    author: org:akamai
  - id: spin-cncf
    resource: https://www.cncf.io/projects/spin/
    title: "CNCF: Spin (Sandbox)"
---

# Summary
Fermyon (founded 2021 by Matt Butcher and Radu Matei) built Spin as a developer-friendly WebAssembly framework and contributed Spin to the CNCF Sandbox (Jan 21, 2025)[^spin-cncf][^nww-fermyon]. After running Fermyon Wasm Functions on Akamai's network from March 2025, it was acquired by Akamai: the deal closed in November 2025 per Akamai's 10-K and was announced Dec 1, 2025 for an undisclosed sum (Akamai recorded ~$36.0M of goodwill)[^akam-10k]; Fermyon had raised ~$26M ($20M Series A in Oct 2022)[^tc-fermyon-a]; staff joined Akamai's Cloud Technology Group and committed to continue Spin, SpinKube and Wasmtime contributions[^nww-fermyon][^devclass-fermyon]. Business verdict: **acquired**.

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2025-01-21 | Spin accepted to CNCF Sandbox[^spin-cncf] |
| W24 | 2025-03 | Fermyon Wasm Functions on Akamai launched[^devclass-fermyon] |
| W12 | 2025-12-01 | Akamai acquisition announced[^nww-fermyon] |

# Monetization model
Previously Fermyon Cloud and enterprise SpinKube; now part of Akamai's edge compute portfolio[^nww-fermyon].

# Successes
- Strategic exit with OSS safely in CNCF[^spin-cncf].

# Failures / risks
- Undisclosed price; Wasm-as-container-replacement thesis did not reach mainstream adoption.

# Related
- [Spin & WebAssembly](/projects/cloud-native/spin-webassembly.md), [Event: Akamai acquires Fermyon](/events/2025-12-akamai-acquires-fermyon.md)

[^nww-fermyon]: https://www.networkworld.com/article/4099424/akamai-acquires-fermyon-for-edge-computing-as-webassembly-comes-of-age.html
[^devclass-fermyon]: https://www.devclass.com/containers/2025/12/04/akamai-buys-fermyon-for-wasm-based-serverless-functions-a-possible-answer-to-cloudflare-workers/1732513
[^spin-cncf]: https://www.cncf.io/projects/spin/
[^akam-10k]: Akamai 10-K, FY2025.
[^tc-fermyon-a]: TechCrunch, 2022-10-24.
