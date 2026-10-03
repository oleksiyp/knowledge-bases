---
type: Organization
title: Plotly
description: "Montreal-based open-core company behind MIT-licensed plotly.js/plotly.py and Dash; monetizes Dash Enterprise and, since 2025, AI app generation (Plotly Studio) and Plotly Cloud hosting."
resource: https://plotly.com
tags: [commercial-open-source, data-apps, visualization, open-core]
org_kind: coss-startup
hq: Montreal, Quebec, Canada
funding: { total_usd: "undisclosed (aggregators vary)", last_round: "Series C (NVIDIA participated, 2020)", last_round_date: 2020, valuation_usd: "undisclosed" }
business_verdict: stable
projects: [projects/scientific-computing/plotly-dash]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-plotly
    resource: https://en.wikipedia.org/wiki/Plotly
    title: "Wikipedia: Plotly (founding, HQ, funding history)"
  - id: plotly-12m
    resource: https://plotly.com/blog/12-months-in-review-september-2026/
    title: "Plotly: 12 months in review (Sept 2026)"
  - id: de56
    resource: https://www.globenewswire.com/news-release/2025/01/22/3013526/0/en/Plotly-Announces-Dash-Enterprise-5-6-Build-Data-Apps-Smarter-with-Plotly-AI.html
    title: "GlobeNewswire: Dash Enterprise 5.6 with Plotly AI (2025-01-22)"
  - id: gnw-studio
    resource: https://www.globenewswire.com/news-release/2025/06/02/3091917/0/en/Plotly-Unveils-AI-Native-Plotly-Studio-and-Plotly-Cloud-Bringing-Vibe-Coding-to-Visual-Data-App-Development.html
    title: "GlobeNewswire: Plotly unveils Plotly Studio and Plotly Cloud (2025-06-02)"
  - id: cloud-ga
    resource: https://community.plotly.com/t/plotly-cloud-is-now-generally-available/94123
    title: "Plotly forum: Plotly Cloud is now generally available"
---

# Summary
Plotly (founded 2012 in Montreal by Alex Johnson, Jack Parmer, Chris Parmer and Matthew Sundquist) is one of the longest-lived open-core companies in data visualization[^wiki-plotly]. In 2025–2026 it reoriented around AI: Plotly AI in Dash Enterprise 5.6 (Jan 2025), the proprietary Plotly Studio desktop app and Plotly Cloud (June 2025; Cloud GA Sept 2025), Kubernetes-native Dash Enterprise 6 (Feb 2026) and Plotly Studio Embedded (Aug 2026), while continuing major OSS releases (Dash 4, plotly.py 7)[^de56][^gnw-studio][^cloud-ga][^plotly-12m].

# Business timeline
| Date | Event |
|---|---|
| 2020 | Series C with NVIDIA participation[^wiki-plotly] |
| 2025-01-22 | Dash Enterprise 5.6 with Plotly AI[^de56] |
| 2025-06-02 | Plotly Studio and Plotly Cloud announced[^gnw-studio] |
| 2025-09 | Plotly Cloud GA (free tier: one app)[^cloud-ga] |
| 2026-02 | Dash Enterprise 6.0 (K8s-native, zero-trust)[^plotly-12m] |
| 2026-08 | Plotly Studio Embedded[^plotly-12m] |

# Monetization model
Open-core: MIT libraries free; revenue from Dash Enterprise (self-hosted platform), Plotly Studio subscriptions and Plotly Cloud hosting.

# Successes
- Dash reported at 7M+ monthly downloads; steady OSS investment alongside new commercial products[^plotly-12m].

# Failures / risks
- No disclosed funding or revenue in the window; competing AI data-app generators are well funded (Hex, Snowflake/Streamlit). Funding totals on aggregator sites are inconsistent and unverified.

# Related
- [/projects/scientific-computing/plotly-dash.md](/projects/scientific-computing/plotly-dash.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^wiki-plotly]: https://en.wikipedia.org/wiki/Plotly
[^plotly-12m]: https://plotly.com/blog/12-months-in-review-september-2026/
[^de56]: https://www.globenewswire.com/news-release/2025/01/22/3013526/0/en/Plotly-Announces-Dash-Enterprise-5-6-Build-Data-Apps-Smarter-with-Plotly-AI.html
[^gnw-studio]: https://www.globenewswire.com/news-release/2025/06/02/3091917/0/en/Plotly-Unveils-AI-Native-Plotly-Studio-and-Plotly-Cloud-Bringing-Vibe-Coding-to-Visual-Data-App-Development.html
[^cloud-ga]: https://community.plotly.com/t/plotly-cloud-is-now-generally-available/94123
