---
type: OSS Project
title: Bokeh
description: "NumFOCUS-sponsored interactive visualization library for Python (~20k stars); kept a slow but steady release train (3.7 Mar 2025 → 3.10 Aug 2026, adding ASGI server support and WebGL polygons) on grant- and sponsor-funded maintenance by a very small core team."
resource: https://github.com/bokeh/bokeh
tags: [visualization, python, bsd-3-clause, numfocus, community, grant-funded]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: community
steward: NumFOCUS (fiscally sponsored)
backing_orgs: [organizations/numfocus]
metrics:
  github_stars: { value: 20455, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bokeh-gh
    resource: https://github.com/bokeh/bokeh
    title: Bokeh GitHub repository
    last_modified: 2026-10-03T00:00:00Z
  - id: pypi-bokeh
    resource: https://pypi.org/project/bokeh/
    title: "PyPI: bokeh (3.7.0 2025-03-12, 3.8.0 2025-08-29, 3.9.0 2026-03-11, 3.10.0 2026-08-18)"
  - id: bokeh-310
    resource: https://blog.bokeh.org/introducing-bokeh-3-10-929483b928c5
    title: "Bokeh blog: Introducing Bokeh 3.10"
  - id: bokeh-310-disc
    resource: https://discourse.bokeh.org/t/bokeh-3-10-is-released/12754
    title: "Bokeh Discourse: Bokeh 3.10 is released"
  - id: numfocus-bokeh
    resource: https://numfocus.org/project/bokeh
    title: "NumFOCUS: Bokeh project page"
  - id: czi-eoss
    resource: https://chanzuckerberg.com/eoss/proposals/
    title: "CZI EOSS funded proposals (Bokeh EOSS 3, 5, 6)"
---

# Summary
Bokeh is a mature, browser-rendered plotting library that underpins Panel/HoloViz and is embeddable in Streamlit and other frameworks. Over the two years it shipped four minor releases — 3.7 (2025-03-12), 3.8 (2025-08-29), 3.9 (2026-03-11) and 3.10 (2026-08-18)[^pypi-bokeh]. 3.10 was the most significant: a framework-neutral ASGI adapter (FastAPI, Starlette, Django, Streamlit), WebGL rendering for filled polygons, Playwright-based export and leak fixes, and a Python ≥3.12 floor[^bokeh-310][^bokeh-310-disc]. Funding has come from NumFOCUS sponsorship and multiple CZI EOSS grants (accessibility, biomedical imaging, publication quality)[^numfocus-bokeh][^czi-eoss]. Verdict: stable but thinly staffed.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-12 | Bokeh 3.7.0[^pypi-bokeh] | OSS | + |
| W24 | 2025-08-29 | Bokeh 3.8.0[^pypi-bokeh] | OSS | + |
| W9 | 2026-03-11 | Bokeh 3.9.0[^pypi-bokeh] | OSS | + |
| W3 | 2026-08-18 | Bokeh 3.10.0: ASGI adapter, WebGL patches, Python 3.12+[^bokeh-310][^pypi-bokeh] | OSS | + |

# OSS successes
- ASGI support lets Bokeh apps live inside modern async web stacks, including Streamlit[^bokeh-310].
- Long record of grant-funded feature work (CZI EOSS rounds)[^czi-eoss].

# OSS failures / risks
- Small maintainer base and ~6-month minor cadence; reliance on grants as CZI's EOSS program winds down (see domain review).
- Mindshare pressure from Plotly and from AI-generated chart code.

# Business successes
- n/a.

# Business failures / risks
- n/a (no company); funding exposure to philanthropic programs.

# By window
## W3
- Bokeh 3.10 (Aug 18)[^bokeh-310].
## W6
- No notable events found.
## W9
- Bokeh 3.9 (Mar 11)[^pypi-bokeh].
## W12
- No notable events found.
## W24
- Bokeh 3.7 and 3.8[^pypi-bokeh].

# Lessons
- Mature scientific libraries survive on modest grant streams, but feature velocity tracks those grants closely.

# Related
- [/projects/scientific-computing/holoviz-panel.md](/projects/scientific-computing/holoviz-panel.md), [/projects/scientific-computing/plotly-dash.md](/projects/scientific-computing/plotly-dash.md)
- [/organizations/numfocus.md](/organizations/numfocus.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^bokeh-gh]: https://github.com/bokeh/bokeh
[^pypi-bokeh]: https://pypi.org/project/bokeh/
[^bokeh-310]: https://blog.bokeh.org/introducing-bokeh-3-10-929483b928c5
[^bokeh-310-disc]: https://discourse.bokeh.org/t/bokeh-3-10-is-released/12754
[^numfocus-bokeh]: https://numfocus.org/project/bokeh
[^czi-eoss]: https://chanzuckerberg.com/eoss/proposals/
