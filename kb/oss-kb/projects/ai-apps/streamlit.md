---
type: OSS Project
title: Streamlit
description: "Snowflake-owned Apache-2.0 Python app framework (~46k stars), a common front end for LLM chat and data apps, still shipping roughly bi-weekly releases (1.65, Oct 2026) four years after the ~$800M acquisition — stable."
resource: https://github.com/streamlit/streamlit
tags: [ai-apps, ui-framework, python, apache-2.0, snowflake]
domain: ai-apps
license: Apache-2.0
license_history: ["Apache-2.0 (2019-)"]
governance: single-vendor
steward: Snowflake
backing_orgs: [organizations/snowflake]
metrics:
  github_stars: { value: 45883, as_of: 2026-10-03 }
  latest_release: { value: "1.65.0 (2026-10-02)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: acquired
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: st-gh
    resource: https://github.com/streamlit/streamlit
    title: Streamlit GitHub repository (GitHub API, 2026-10-03)
  - id: iw-st
    resource: https://www.informationweek.com/data-management/snowflake-streamlit-acquisition-to-add-open-source-dev-framework
    title: "InformationWeek: Snowflake Streamlit acquisition (2022)"
  - id: sf-st
    resource: https://docs.snowflake.com/en/developer-guide/streamlit/about-streamlit
    title: "Snowflake docs: About Streamlit in Snowflake"
---

# Summary
Streamlit, acquired by Snowflake in March 2022 (~$800M reported), remains Apache-2.0 and actively developed: ~46k stars and releases every ~2 weeks (1.63 Sep 1, 1.64 Sep 15, 1.65 Oct 2, 2026)[^st-gh][^iw-st]. Snowflake monetises it as "Streamlit in Snowflake" for data/LLM apps[^sf-st]. Verdict: stable — a model of a big-vendor acquisition that kept the OSS healthy.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W3 | 2026-09-01 → 10-02 | 1.63 → 1.65 releases[^st-gh] | OSS | + |

# OSS successes
- Licence unchanged; regular releases[^st-gh].
# OSS failures / risks
- Roadmap shaped by Snowflake integration needs[^sf-st].
# Business successes
- Embedded in Snowflake's platform[^sf-st].
# Business failures / risks
- Competes with Gradio, Chainlit and generic React stacks for LLM UIs.

# By window
## W3
- 1.63–1.65[^st-gh].
## W6
- Regular releases; no discrete events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- Acquired OSS stays healthy when it's a funnel into the acquirer's core product rather than a revenue line itself.

# Related
- [Snowflake](/organizations/snowflake.md), [Gradio](/projects/ai-apps/gradio.md), [Chainlit](/projects/ai-apps/chainlit.md)

[^st-gh]: GitHub API, streamlit/streamlit — https://github.com/streamlit/streamlit
[^iw-st]: InformationWeek — https://www.informationweek.com/data-management/snowflake-streamlit-acquisition-to-add-open-source-dev-framework
[^sf-st]: Snowflake docs — https://docs.snowflake.com/en/developer-guide/streamlit/about-streamlit
