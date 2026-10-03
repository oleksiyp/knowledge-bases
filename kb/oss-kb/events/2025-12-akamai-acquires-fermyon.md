---
type: Event
title: "Akamai acquires Fermyon (server-side WebAssembly)"
description: "Akamai announced on Dec 1, 2025 that it had acquired Fermyon, creator of the CNCF Spin framework, for an undisclosed sum, folding Wasm serverless into a CDN's edge platform to compete with Cloudflare Workers."
event_kind: acquisition
date: 2025-12-01
window: W12
impact: mixed
projects: [projects/cloud-native/spin-webassembly]
organizations: [organizations/fermyon]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
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
  - id: spin-gh
    resource: https://github.com/spinframework/spin
    title: "Spin releases"
  - id: cm-gn-fermyon
    resource: "https://news.google.com/rss/search?q=Akamai+Fermyon+acquisition&hl=en-US&gl=US&ceid=US:en"
    title: "Google News index: Akamai–Fermyon coverage incl. Dealroom listing '$56.6M (closed November 2025)' (2026-09-19)"
---

# What happened
On Dec 1, 2025, Akamai announced it had acquired Fermyon for an undisclosed sum. Fermyon staff, including co-founders Matt Butcher and Radu Matei, joined Akamai's Cloud Technology Group[^nww-fermyon]. The two companies had worked together for over a year, and Fermyon Wasm Functions had run on Akamai's network since March 2025[^devclass-fermyon].

# Why it matters
It is the clearest exit in the server-side Wasm space. Wasm ended up as an edge-functions technology inside a CDN, not as a general container replacement. Analysts framed the deal as Akamai's answer to Cloudflare Workers[^devclass-fermyon].

# Outcome so far
Fermyon pledged continued contributions to Spin, SpinKube and Wasmtime[^devclass-fermyon]. Spin has since shipped 4.0 (Apr 2026), 4.1 and 4.2 (Sep 29, 2026)[^spin-gh].

# Related
- [Spin & WebAssembly](/projects/cloud-native/spin-webassembly.md), [Fermyon](/organizations/fermyon.md)

[^nww-fermyon]: https://www.networkworld.com/article/4099424/akamai-acquires-fermyon-for-edge-computing-as-webassembly-comes-of-age.html
[^devclass-fermyon]: https://www.devclass.com/containers/2025/12/04/akamai-buys-fermyon-for-wasm-based-serverless-functions-a-possible-answer-to-cloudflare-workers/1732513
[^spin-gh]: https://github.com/spinframework/spin

## Additional notes (coss-market)

Market context: Part of a 2025–26 wave in which infrastructure OSS startups exited to strategic acquirers rather than scaling independently. A Dealroom listing (2026-09-19) gives the price as ~$56.6M, which is **unverified** against primary sources[^cm-gn-fermyon]. See [COSS M&A 2024–2026](/projects/coss-market/coss-ma-2024-2026.md).

[^cm-gn-fermyon]: Dealroom/SiliconANGLE via Google News.
