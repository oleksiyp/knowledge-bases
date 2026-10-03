---
type: OSS Project
title: Deepnote (open-source notebook format & tooling)
description: "Prague-based cloud data notebook that open-sourced its .deepnote format, block library, converters and IDE extensions under Apache-2.0 in Nov 2025, billing itself 'the Jupyter successor' — an open-core pivot of a small, Series-A-stage company competing with well-funded closed rival Hex."
resource: https://github.com/deepnote/deepnote
tags: [notebooks, ai-native, apache-2.0, open-core, single-vendor]
domain: scientific-computing
license: Apache-2.0
license_history: ["proprietary SaaS (2019–2025)", "Apache-2.0 open-source layer (2025-11-)"]
governance: company-led-open-core
steward: Deepnote, Inc.
backing_orgs: []
metrics:
  github_stars: { value: 3010, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: struggling
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: up, W24: n/a }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dn-gh
    resource: https://github.com/deepnote/deepnote
    title: deepnote/deepnote GitHub repository (Apache-2.0; packages @deepnote/blocks, convert, cli, reactivity)
    last_modified: 2026-10-03T00:00:00Z
  - id: dn-x
    resource: https://x.com/DeepnoteHQ/status/1985711105549672652
    title: "Deepnote on X: 'Today, we're open sourcing it'"
  - id: hn-dn
    resource: https://news.ycombinator.com/item?id=45813994
    title: "Hacker News: Deepnote, a Jupyter alternative, is going open source (188 points)"
  - id: iprog-dn
    resource: https://www.i-programmer.info/news/216-python/18467-deepnote-goes-opensource-.html
    title: "I Programmer: Deepnote goes open source (2025-11-18)"
  - id: tns-dn
    resource: https://thenewstack.io/deepnote-a-successor-to-jupyter-notebook-goes-open-source/
    title: "The New Stack: Deepnote, a 'Successor to Jupyter Notebook,' goes open source"
    author: org:thenewstack
  - id: tracxn-dn
    resource: https://tracxn.com/d/companies/deepnote/__3Rn8-CvLT7opyDmu31_wfQ8OdyuAYVhEddkBIXGff80
    title: "Tracxn: Deepnote profile (aggregator — funding/headcount, not confirmed)"
  - id: fortune-hex
    resource: https://fortune.com/2025/05/28/exclusive-hex-raises-a-70-million-series-c-to-double-down-on-data-in-the-ai-era/
    title: "Fortune: Hex raises $70M Series C (2025-05-28)"
    author: org:fortune
  - id: bdw-hex
    resource: https://www.hpcwire.com/bigdatawire/2025/05/29/hex-raises-70m-to-power-its-ambition-for-a-virtuous-cycle-of-data-work/
    title: "BigDATAwire: Hex raises $70M"
---

# Summary
After seven years as a closed cloud product, Deepnote announced in early November 2025 that it was open-sourcing "the successor to the Jupyter notebook" under Apache-2.0[^dn-x][^iprog-dn]. What actually shipped is an open-core layer — the human-readable YAML `.deepnote` format, 23 block types, a reactivity engine, Jupyter converters, a CLI and VS Code/Cursor extensions — while the cloud UI, hosted agent and self-hosted compute stayed proprietary at launch[^iprog-dn][^dn-gh]. The launch drew ~188 HN points but heavy criticism for its hostile "successor" framing and opaque scope[^hn-dn]. Verdict: modest OSS traction (~3k stars) and an under-funded company (last priced round reportedly a 2022 Series A) up against Hex's $70M Series C[^tracxn-dn][^fortune-hex].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-28 | Closed competitor Hex raises $70M Series C led by Avra (Snowflake Ventures, Sequoia, a16z participate)[^fortune-hex][^bdw-hex] | Business | − (for Deepnote) |
| W12 | 2025-10-14 | First @deepnote/blocks and convert packages published[^dn-gh] | OSS | + |
| W12 | 2025-11 (early) | Deepnote open-source announcement; HN backlash over "successor" claim[^dn-x][^hn-dn] | OSS | ± |
| W9 | 2026-01 → 2026-03 | @deepnote/blocks 2.0→4.5, reactivity 1.0, CLI 0.1→0.6[^dn-gh] | OSS | + |
| W6 | 2026-06-29 | blocks 4.6, CLI 0.7[^dn-gh] | OSS | + |
| W3 | 2026-08-13 | CLI 0.8, runtime-core 0.5[^dn-gh] | OSS | flat |

# OSS successes
- A credible open, diffable notebook format with converters from .ipynb, usable in any VS Code-family IDE[^iprog-dn].
- Active package releases through 2026[^dn-gh].

# OSS failures / risks
- Community reception poor: HN commenters flagged hostile messaging toward Jupyter, LLM-sounding prose and lack of clarity on what was open[^hn-dn].
- Release cadence slowed after March 2026 (gap until late June)[^dn-gh]; stars (~3k) far behind marimo (~23k).

# Business successes
- Claims 500,000+ data professionals as users (company claim in README, not independently verified)[^dn-gh].

# Business failures / risks
- Aggregators report ~$23.8M total raised (Series A Jan 2022) and ~22 employees in early 2026 — not confirmed by primary sources[^tracxn-dn].
- Squeezed between free OSS (Jupyter, marimo) and a richly funded closed competitor (Hex, ~$172M raised total reported)[^bdw-hex].

# By window
## W3
- CLI 0.8 / runtime-core 0.5 (Aug 13)[^dn-gh].
## W6
- blocks 4.6, CLI 0.7 (June 29)[^dn-gh].
## W9
- Rapid 0.x/major package churn; reactivity 1.0 (Jan 5)[^dn-gh].
## W12
- Open-sourcing announcement (Nov 2025)[^dn-x][^iprog-dn].
## W24
- No notable Deepnote OSS events; Hex Series C (May 2025)[^fortune-hex].

# Lessons
- Open-sourcing a format late, as a competitive move, wins less goodwill than open-sourcing early — especially if framed as replacing a beloved community project.
- In notebooks, VC money concentrated in closed platforms (Hex) while OSS mindshare went to community or acquired projects (Jupyter, marimo).

# Related
- [/events/2025-11-deepnote-open-sources-notebook.md](/events/2025-11-deepnote-open-sources-notebook.md)
- [/projects/scientific-computing/jupyter.md](/projects/scientific-computing/jupyter.md), [/projects/scientific-computing/marimo.md](/projects/scientific-computing/marimo.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^dn-gh]: https://github.com/deepnote/deepnote
[^dn-x]: https://x.com/DeepnoteHQ/status/1985711105549672652
[^hn-dn]: https://news.ycombinator.com/item?id=45813994
[^iprog-dn]: https://www.i-programmer.info/news/216-python/18467-deepnote-goes-opensource-.html
[^tns-dn]: https://thenewstack.io/deepnote-a-successor-to-jupyter-notebook-goes-open-source/
[^tracxn-dn]: https://tracxn.com/d/companies/deepnote/__3Rn8-CvLT7opyDmu31_wfQ8OdyuAYVhEddkBIXGff80
[^fortune-hex]: https://fortune.com/2025/05/28/exclusive-hex-raises-a-70-million-series-c-to-double-down-on-data-in-the-ai-era/
[^bdw-hex]: https://www.hpcwire.com/bigdatawire/2025/05/29/hex-raises-70m-to-power-its-ambition-for-a-virtuous-cycle-of-data-work/
