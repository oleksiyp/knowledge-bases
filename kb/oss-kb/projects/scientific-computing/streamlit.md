---
type: OSS Project
title: Streamlit
description: "Snowflake-owned Python data-app framework (~46k stars) with the fastest release cadence in the space (≈27 minor releases Oct 2024–Oct 2026); swapped Tornado for Starlette/Uvicorn, added async and agent 'skills', while Snowflake monetizes it via Streamlit in Snowflake on container runtime (GA Mar 2026)."
resource: https://github.com/streamlit/streamlit
tags: [data-apps, dashboards, python, apache-2.0, corporate-owned, snowflake]
domain: scientific-computing
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: single-vendor
steward: Snowflake
backing_orgs: [organizations/snowflake]
metrics:
  github_stars: { value: 45883, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: st-gh
    resource: https://github.com/streamlit/streamlit
    title: Streamlit GitHub repository
    last_modified: 2026-10-03T00:00:00Z
  - id: pypi-st
    resource: https://pypi.org/project/streamlit/
    title: "PyPI: streamlit (1.40.0 2024-11-06 … 1.65.0 2026-10-02)"
  - id: st-rn-2026
    resource: https://docs.streamlit.io/develop/quick-reference/release-notes/2026
    title: Streamlit 2026 release notes
  - id: st-rn-2025
    resource: https://docs.streamlit.io/develop/quick-reference/release-notes/2025
    title: Streamlit 2025 release notes
  - id: st-151
    resource: https://discuss.streamlit.io/t/version-1-51-0/119934
    title: "Streamlit forum: Version 1.51.0 (custom components v2)"
  - id: sis-ga
    resource: https://docs.snowflake.com/en/release-notes/2026/other/2026-03-09-sis-container-runtime-ga
    title: "Snowflake: Streamlit in Snowflake container runtime and secrets GA (2026-03-09)"
  - id: sis-bcr
    resource: https://docs.snowflake.com/en/release-notes/bcr-bundles/2026_06/bcr-2342
    title: "Snowflake BCR 2026_06: new Streamlits default to container runtime"
  - id: snow-10q
    resource: https://www.sec.gov/Archives/edgar/data/1640147/000164014722000044/snow-20220430.htm
    title: "Snowflake Form 10-Q (quarter ended 2022-04-30): Streamlit acquisition"
    author: org:snowflake
---

# Summary
Streamlit is the most popular Python data-app framework and the healthiest of the corporate-owned ones: Snowflake bought it in March 2022 (agreement ~$800M; acquisition-date fair value $650.8M)[^snow-10q] and has kept it Apache-2.0 while shipping a minor release roughly every 2–5 weeks (1.40 in Nov 2024 → 1.65 on 2026-10-02)[^pypi-st]. 2026 brought architectural modernization — Starlette/Uvicorn replaced Tornado as the default server (1.57, Apr 2026), async app code (1.64), and AI-agent "skills" installation (1.58)[^st-rn-2026]. Snowflake's monetization is Streamlit in Snowflake, whose container runtime went GA on 2026-03-09 and becomes the default for new apps[^sis-ga][^sis-bcr]. Verdict: OSS thriving; business value captured inside Snowflake.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11 → 2025-09 | 1.40 → 1.50 releases[^pypi-st] | OSS | + |
| W12 | 2025-10-29 | 1.51: custom components v2 (frameless, bidirectional)[^st-151][^st-rn-2025] | OSS | + |
| W9 | 2026-03-09 | Streamlit in Snowflake container runtime + secrets GA[^sis-ga] | Business | + |
| W6 | 2026-04-29 | 1.57: Starlette/Uvicorn default web server[^st-rn-2026] | OSS | + |
| W6 | 2026-05-28 | 1.58: parallel fragments, `streamlit skills` CLI for AI agents[^st-rn-2026] | OSS | + |
| W3 | 2026-07-06 → 2026-10-02 | 1.59–1.65: st.App.run, lazy dataframes, async/await, ECharts[^st-rn-2026][^pypi-st] | OSS | + |

# OSS successes
- ~46k GitHub stars and the highest release cadence in its category[^st-gh][^pypi-st].
- Major architectural refresh (ASGI server, async) without breaking the simple scripting model[^st-rn-2026].

# OSS failures / risks
- Governance is fully Snowflake-controlled; no external steering.
- The rerun-the-whole-script model remains a performance criticism; fragments/async are partial answers[^st-rn-2026].

# Business successes
- Embedded in Snowflake's platform; container runtime enables GPUs and long-running apps for Snowflake customers[^sis-ga].

# Business failures / risks
- Snowflake doesn't break out Streamlit revenue; competition from Gradio (HF/NVIDIA), Dash and AI app generators (Plotly Studio, Hex).

# By window
## W3
- 1.59–1.65 (seven releases), incl. async support (1.64) and security hardening (1.60)[^st-rn-2026].
## W6
- Starlette/Uvicorn server (1.57); agent skills CLI (1.58)[^st-rn-2026]; SiS container runtime becomes default via BCR 2026_06[^sis-bcr].
## W9
- SiS container runtime GA (Mar 9)[^sis-ga]; 1.54–1.56[^st-rn-2026].
## W12
- Custom components v2 (1.51, Oct 29, 2025); 1.52 (Dec 2025)[^st-151][^pypi-st].
## W24
- 1.40–1.50 steady releases[^pypi-st].

# Lessons
- A corporate acquirer that monetizes hosting (not the library) has an incentive to keep the OSS project permissive and fast-moving.
- Simple mental models (script reruns) win adoption; later re-architecture can be done incrementally.

# Related
- [/organizations/snowflake.md](/organizations/snowflake.md)
- [/projects/scientific-computing/gradio.md](/projects/scientific-computing/gradio.md), [/projects/scientific-computing/plotly-dash.md](/projects/scientific-computing/plotly-dash.md), [/projects/scientific-computing/holoviz-panel.md](/projects/scientific-computing/holoviz-panel.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^st-gh]: https://github.com/streamlit/streamlit
[^pypi-st]: https://pypi.org/project/streamlit/
[^st-rn-2026]: https://docs.streamlit.io/develop/quick-reference/release-notes/2026
[^st-rn-2025]: https://docs.streamlit.io/develop/quick-reference/release-notes/2025
[^st-151]: https://discuss.streamlit.io/t/version-1-51-0/119934
[^sis-ga]: https://docs.snowflake.com/en/release-notes/2026/other/2026-03-09-sis-container-runtime-ga
[^sis-bcr]: https://docs.snowflake.com/en/release-notes/bcr-bundles/2026_06/bcr-2342
[^snow-10q]: https://www.sec.gov/Archives/edgar/data/1640147/000164014722000044/snow-20220430.htm
