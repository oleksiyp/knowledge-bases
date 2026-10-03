---
type: OSS Project
title: Plotly (plotly.py / plotly.js) & Dash
description: "MIT-licensed charting libraries and Dash app framework from Montreal's Plotly; OSS shipped plotly.py 6→7, Dash 3→4.4 (FastAPI backend, MCP-server apps) while the company pivoted to AI app generation (Plotly Studio, Plotly Cloud) and a re-architected Dash Enterprise 6."
resource: https://github.com/plotly/dash
tags: [data-apps, dashboards, visualization, python, mit, open-core, mcp]
domain: scientific-computing
license: MIT
license_history: ["MIT"]
governance: company-led-open-core
steward: Plotly Technologies Inc.
backing_orgs: [organizations/plotly]
metrics:
  dash_github_stars: { value: 24439, as_of: 2026-10-03 }
  plotly_py_github_stars: { value: 18820, as_of: 2026-10-03 }
  dash_monthly_downloads: { value: "7M+", as_of: 2026-09-15, note: "per Plotly" }
oss_verdict: growing
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dash-gh
    resource: https://github.com/plotly/dash
    title: Dash GitHub repository
  - id: pypi-dash
    resource: https://pypi.org/project/dash/
    title: "PyPI: dash (3.0.0 2025-03-17, 4.0.0 2026-02-03, 4.4.0 2026-07-03)"
  - id: pypi-plotly
    resource: https://pypi.org/project/plotly/
    title: "PyPI: plotly (6.0.0 2025-01-28, 7.0.0 2026-08-25, 7.1.0 2026-09-15)"
  - id: plotly-12m
    resource: https://plotly.com/blog/12-months-in-review-september-2026/
    title: "Plotly: 12 months in review (Sept 2026)"
    author: org:plotly
  - id: dash4
    resource: https://plotly.com/blog/dash-core-components-gets-a-design-driven-refresh-with-dash-4/
    title: "Plotly: Dash Core Components gets a design-driven refresh with Dash 4"
    author: org:plotly
  - id: studio
    resource: https://plotly.com/blog/introducing-plotly-studio/
    title: "Plotly: Introducing Plotly Studio (2025-06-02)"
    author: org:plotly
  - id: gnw-studio
    resource: https://www.globenewswire.com/news-release/2025/06/02/3091917/0/en/Plotly-Unveils-AI-Native-Plotly-Studio-and-Plotly-Cloud-Bringing-Vibe-Coding-to-Visual-Data-App-Development.html
    title: "GlobeNewswire: Plotly unveils Plotly Studio and Plotly Cloud (2025-06-02)"
  - id: cloud-ga
    resource: https://community.plotly.com/t/plotly-cloud-is-now-generally-available/94123
    title: "Plotly forum: Plotly Cloud is now generally available"
  - id: de56
    resource: https://www.globenewswire.com/news-release/2025/01/22/3013526/0/en/Plotly-Announces-Dash-Enterprise-5-6-Build-Data-Apps-Smarter-with-Plotly-AI.html
    title: "GlobeNewswire: Dash Enterprise 5.6 with Plotly AI (2025-01-22)"
---

# Summary
Plotly's MIT-licensed stack (plotly.js, plotly.py, Dash) remains a pillar of interactive scientific and business charting, and the OSS side was unusually active: Dash 3.0 (Mar 2025), a ground-up redesign of core components in Dash 4.0 (2026-02-03), Flask-optional FastAPI/Quart backends and WebSocket callbacks (4.2, June 2026), Dash apps as MCP servers (4.3), and plotly.py 7 / plotly.js 4 (Aug 2026)[^pypi-dash][^dash4][^plotly-12m][^pypi-plotly]. Plotly says Dash exceeds 7M monthly downloads with 109 contributors over the year[^plotly-12m]. Commercially, Plotly pivoted to AI-generated data apps: Plotly AI in Dash Enterprise 5.6 (Jan 2025), proprietary Plotly Studio desktop and Plotly Cloud hosting (June 2025; Cloud GA Sept 2025), and Kubernetes-native Dash Enterprise 6 (Feb 2026)[^de56][^studio][^cloud-ga][^plotly-12m]. Verdict: OSS growing; business stable but unproven in the AI pivot (no disclosed funding or revenue).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-22 | Dash Enterprise 5.6 with Plotly AI[^de56] | Business | + |
| W24 | 2025-01-28 | plotly.py 6.0[^pypi-plotly] | OSS | + |
| W24 | 2025-03-17 | Dash 3.0[^pypi-dash] | OSS | + |
| W24 | 2025-06-02 | Plotly Studio (proprietary AI app builder) + Plotly Cloud announced[^studio][^gnw-studio] | Business | + |
| W24 | 2025-09 | Plotly Cloud GA; free tier for one app[^cloud-ga] | Business | + |
| W12 | 2025-11-12 | Dash 3.3: one-click publish to Plotly Cloud[^plotly-12m][^pypi-dash] | OSS/Business | + |
| W9 | 2026-02 | Dash 4.0 (rebuilt core components); Dash Enterprise 6.0 (K8s, zero-trust)[^dash4][^plotly-12m] | OSS/Business | + |
| W6 | 2026-06 | Dash 4.2 (FastAPI/Quart backends, WebSocket callbacks), 4.3 (apps as MCP servers)[^plotly-12m] | OSS | + |
| W3 | 2026-08 | plotly.py 7.0 / plotly.js 4.0; Plotly Studio Embedded[^pypi-plotly][^plotly-12m] | OSS/Business | + |

# OSS successes
- Two major Dash versions and two major plotly.py versions in two years, with backward-compatible component redesign[^dash4][^pypi-plotly].
- Decoupled from Flask, opening Dash to async Python stacks[^plotly-12m].

# OSS failures / risks
- Open-core boundary: the AI app builder (Studio) is proprietary, so OSS gains less from the company's AI investment[^studio].

# Business successes
- New product lines (Studio, Cloud, Studio Embedded) and a re-architected Dash Enterprise 6 reducing operational footprint ~50%[^plotly-12m].

# Business failures / risks
- No new funding or revenue disclosed in the window; AI app generation is a crowded field (Hex, Streamlit/Snowflake, Gradio, general coding agents).

# By window
## W3
- plotly.py 7.0 (Aug 25) and 7.1 (Sept 15); Studio Embedded (Aug)[^pypi-plotly][^plotly-12m].
## W6
- Dash 4.2/4.3/4.4 (June–July 3)[^pypi-dash][^plotly-12m].
## W9
- Dash 4.0 (Feb 3); Dash Enterprise 6.0[^dash4][^plotly-12m].
## W12
- Dash 3.3 with Cloud publishing (Nov 12)[^pypi-dash].
## W24
- plotly.py 6.0, Dash 3.0, Plotly Studio and Cloud launch[^pypi-plotly][^studio].

# Lessons
- An open-core viz company can keep OSS healthy while putting AI features in proprietary layers — but that weakens the OSS-to-revenue link.
- "Apps as MCP servers" is becoming a standard feature for data-app frameworks (Dash, Gradio).

# Related
- [/organizations/plotly.md](/organizations/plotly.md)
- [/projects/scientific-computing/streamlit.md](/projects/scientific-computing/streamlit.md), [/projects/scientific-computing/gradio.md](/projects/scientific-computing/gradio.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^dash-gh]: https://github.com/plotly/dash
[^pypi-dash]: https://pypi.org/project/dash/
[^pypi-plotly]: https://pypi.org/project/plotly/
[^plotly-12m]: https://plotly.com/blog/12-months-in-review-september-2026/
[^dash4]: https://plotly.com/blog/dash-core-components-gets-a-design-driven-refresh-with-dash-4/
[^studio]: https://plotly.com/blog/introducing-plotly-studio/
[^gnw-studio]: https://www.globenewswire.com/news-release/2025/06/02/3091917/0/en/Plotly-Unveils-AI-Native-Plotly-Studio-and-Plotly-Cloud-Bringing-Vibe-Coding-to-Visual-Data-App-Development.html
[^cloud-ga]: https://community.plotly.com/t/plotly-cloud-is-now-generally-available/94123
[^de56]: https://www.globenewswire.com/news-release/2025/01/22/3013526/0/en/Plotly-Announces-Dash-Enterprise-5-6-Build-Data-Apps-Smarter-with-Plotly-AI.html
