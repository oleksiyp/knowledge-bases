---
type: OSS Project
title: HoloViz (Panel, HoloViews, hvPlot)
description: "NumFOCUS-sponsored, Anaconda-staffed Python visualization/dashboard suite; steady but slowing releases (Panel 1.6→1.9, HoloViews 1.20→1.23) plus a Material UI component layer and MCP server — a respected but niche alternative to Streamlit with a ~6k-star Panel."
resource: https://github.com/holoviz/panel
tags: [data-apps, dashboards, visualization, python, bsd-3-clause, numfocus, anaconda]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: community
steward: HoloViz (NumFOCUS sponsored; core devs largely at Anaconda)
backing_orgs: [organizations/numfocus]
metrics:
  panel_github_stars: { value: 5782, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: panel-gh
    resource: https://github.com/holoviz/panel
    title: Panel GitHub repository
    last_modified: 2026-10-03T00:00:00Z
  - id: pypi-panel
    resource: https://pypi.org/project/panel/
    title: "PyPI: panel (1.6.0 2025-01-23, 1.7.0 2025-05-16, 1.8.0 2025-09-09, 1.9.0 2026-05-21)"
  - id: pypi-hv
    resource: https://pypi.org/project/holoviews/
    title: "PyPI: holoviews (1.20.0 2024-11-04 … 1.23.0 2026-06-24)"
  - id: panel-rel
    resource: https://panel.holoviz.org/about/releases.html
    title: Panel release notes
  - id: zenodo-194
    resource: https://zenodo.org/records/21979577
    title: "Zenodo: holoviz/panel v1.9.4 (2026-08-17)"
  - id: pmui
    resource: https://blog.holoviz.org/posts/panel_material_ui_announcement/
    title: "HoloViz blog: Panel Material UI announcement (2025-07-11)"
  - id: pmui-mcp
    resource: https://discourse.holoviz.org/t/panel-material-ui-holoviz-mcp/9044
    title: "HoloViz Discourse: Panel-Material-UI + HoloViz MCP"
  - id: panel-about
    resource: https://panel.holoviz.org/about/
    title: About Panel
  - id: pypi-pmui
    resource: https://pypi.org/project/panel-material-ui/
    title: "PyPI: panel-material-ui (0.1.0 2025-05-16 … 0.16.0 2026-09-29)"
---

# Summary
HoloViz — Panel (apps/dashboards), HoloViews and hvPlot (high-level plotting), Datashader and others — is the scientific-Python answer to Streamlit and Dash: deeper integration with notebooks, Bokeh and big-data rendering, but far smaller mindshare (Panel ~5.8k stars vs Streamlit ~46k)[^panel-gh]. Development continued steadily but more slowly: Panel minors went from roughly every four months (1.6 Jan 2025, 1.7 May 2025, 1.8 Sept 2025) to an eight-month gap before 1.9 (May 2026)[^pypi-panel]. The main innovation was panel-material-ui (announced July 2025), a modern MUI-based component set, plus a HoloViz MCP server for AI assistants[^pmui][^pmui-mcp][^pypi-pmui]. Verdict: stable, niche, dependent on Anaconda-employed maintainers.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-04 | HoloViews 1.20.0[^pypi-hv] | OSS | + |
| W24 | 2025-01-23 | Panel 1.6.0[^pypi-panel] | OSS | + |
| W24 | 2025-05-16 | Panel 1.7.0; panel-material-ui 0.1.0[^pypi-panel][^pypi-pmui] | OSS | + |
| W24 | 2025-07-11 | panel-material-ui announced[^pmui] | OSS | + |
| W24 | 2025-09-09 | Panel 1.8.0[^pypi-panel] | OSS | + |
| W12 | 2025-11-10 | HoloViews 1.22.0[^pypi-hv] | OSS | + |
| W6 | 2026-05-21 | Panel 1.9.0 (full typing with Param 2.4, wildcard routes)[^panel-rel] | OSS | + |
| W6 | 2026-06-24 | HoloViews 1.23.0[^pypi-hv] | OSS | + |
| W3 | 2026-08-17 | Panel 1.9.4 patch (ESM/React robustness, OAuth hardening)[^zenodo-194] | OSS | flat |

# OSS successes
- panel-material-ui shipped 16 minor versions in 16 months, modernizing Panel's look[^pypi-pmui].
- Early MCP/AI-assistant tooling (HoloViz MCP)[^pmui-mcp].

# OSS failures / risks
- Slowing core cadence (8-month gap to Panel 1.9)[^pypi-panel].
- Maintainer concentration at Anaconda ("maintained by Anaconda developers along with community contributors")[^panel-about] — exposed to Anaconda's priorities.
- Mindshare gap vs Streamlit/Gradio/Dash keeps widening.

# Business successes
- n/a (no commercial entity; Anaconda supports via staff time).

# Business failures / risks
- n/a; indirect dependency on Anaconda's business.

# By window
## W3
- Panel 1.9.4 patch (Aug 17); panel-material-ui 0.15/0.16 (Sept)[^zenodo-194][^pypi-pmui].
## W6
- Panel 1.9.0 (May 21); HoloViews 1.23 (June 24)[^panel-rel][^pypi-hv].
## W9
- panel-material-ui 0.9 (Feb); no core Panel minor[^pypi-pmui].
## W12
- HoloViews 1.22 (Nov 10, 2025)[^pypi-hv].
## W24
- Panel 1.6–1.8; panel-material-ui launch[^pypi-panel][^pmui].

# Lessons
- Technically rich scientific tooling loses app-framework mindshare to simpler, VC- or corporate-marketed tools.
- Projects staffed by one company's employees are only as stable as that company's strategy.

# Related
- [/projects/scientific-computing/bokeh.md](/projects/scientific-computing/bokeh.md), [/projects/scientific-computing/streamlit.md](/projects/scientific-computing/streamlit.md)
- [/organizations/numfocus.md](/organizations/numfocus.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^panel-gh]: https://github.com/holoviz/panel
[^pypi-panel]: https://pypi.org/project/panel/
[^pypi-hv]: https://pypi.org/project/holoviews/
[^panel-rel]: https://panel.holoviz.org/about/releases.html
[^zenodo-194]: https://zenodo.org/records/21979577
[^pmui]: https://blog.holoviz.org/posts/panel_material_ui_announcement/
[^pmui-mcp]: https://discourse.holoviz.org/t/panel-material-ui-holoviz-mcp/9044
[^panel-about]: https://panel.holoviz.org/about/
[^pypi-pmui]: https://pypi.org/project/panel-material-ui/
