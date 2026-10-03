---
type: OSS Project
title: Observable (Framework, Notebook Kit, Plot, runtime)
description: "Mike Bostock's (D3) data-visualization company and its open-source stack; Framework (ISC) has gone quiet since late 2024 while Observable pivoted to Canvases, then to Notebooks 2.0 / Notebook Kit (open file format, vanilla JS) which became the default on 2026-09-01 with agent 'chats' — a product reset after community anxiety over pricing and direction."
resource: https://github.com/observablehq
tags: [notebooks, data-visualization, javascript, isc, single-vendor]
domain: scientific-computing
license: ISC
license_history: ["ISC (Framework, Notebook Kit, Plot, runtime)"]
governance: single-vendor
steward: Observable, Inc.
backing_orgs: [organizations/observable-inc]
metrics:
  framework_github_stars: { value: 3655, as_of: 2026-10-03 }
  notebook_kit_github_stars: { value: 377, as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: struggling
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: fw-gh
    resource: https://github.com/observablehq/framework
    title: "Observable Framework GitHub (v1.13.0 2024-11-13; last tag v1.13.4 2026-03; last push 2026-05-15)"
  - id: nk-gh
    resource: https://github.com/observablehq/notebook-kit
    title: Observable Notebook Kit GitHub
  - id: obs-2
    resource: https://observablehq.com/blog/observable-2-0
    title: "Observable 2.0 (Framework launch, 2024-02)"
  - id: obs-2025
    resource: https://old.observablehq.com/blog/observable-2025-year-in-review
    title: "Observable's 2025 year in review"
  - id: nb2-preview
    resource: https://observablehq.com/release-notes/2025-07-29-observable-notebooks-2
    title: "Previewing Observable Notebooks 2.0 (2025-07-29)"
  - id: macwright
    resource: https://macwright.com/2025/07/31/observable-notebooks-2
    title: "Tom MacWright: Observable Notebooks 2.0 (2025-07-31)"
  - id: where-going
    resource: https://talk.observablehq.com/t/where-is-observable-going/10372
    title: "Observable Forum: Where is Observable going? (May 2025 thread)"
  - id: default-soon
    resource: https://talk.observablehq.com/t/making-the-new-observable-the-default-soon/10775
    title: "Observable Forum: Making the new Observable the default soon (2026-08-27)"
  - id: official-new
    resource: https://talk.observablehq.com/t/officially-announcing-the-new-observable/10782
    title: "Observable Forum: Officially announcing the new Observable (2026-09-01)"
  - id: flowingdata
    resource: https://flowingdata.com/2026/09/02/observable-notebooks-get-a-rewrite/
    title: "FlowingData: Observable notebooks get a rewrite (2026-09-02)"
  - id: tt-funding
    resource: https://www.techtarget.com/data-technologies/news/252511953/Observable-raises-356M-for-data-collaboration-platform
    title: "TechTarget: Observable raises $35.6M (2021)"
---

# Summary
Observable's open-source stack (D3 heritage, Plot, the notebook runtime, Framework and now Notebook Kit) is ISC-licensed, but its direction has been driven by a single company searching for a business model. Framework, launched as "Observable 2.0" in Feb 2024, shipped its last minor release (1.13) in Nov 2024 and has seen only patch releases since[^obs-2][^fw-gh]. In 2025 Observable launched Canvases (April), then — after users publicly worried about notebook neglect and "flip-flopping" on pricing — previewed Notebooks 2.0 with an open file format, vanilla JavaScript and a macOS desktop app (July 2025)[^obs-2025][^where-going][^nb2-preview]. On 2026-09-01 the rewritten Observable became the default at observablehq.com with agent-first "chats", while many features (version history, scheduling, database config) remain only on old.observablehq.com[^official-new][^flowingdata]. Verdict: OSS declining/at a reset point; business struggling to find focus.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-13 | Framework 1.13.0 — last minor release[^fw-gh] | OSS | − |
| W24 | 2025-04 | Observable Canvases early access (proprietary)[^obs-2025] | Business | ± |
| W24 | 2025-05-02 | "Where is Observable going?" community thread on neglect and pricing churn[^where-going] | OSS | − |
| W24 | 2025-07-29 | Notebooks 2.0 preview: open Notebook Kit format + Observable Desktop[^nb2-preview][^macwright] | OSS | + |
| W12–W6 | 2025-10 → 2026-06 | Framework receives only patch releases (1.13.4 by Mar 2026; last push May 2026)[^fw-gh] | OSS | − |
| W3 | 2026-08-27 | Announces new Observable will become default[^default-soon] | OSS/Business | ± |
| W3 | 2026-09-01 | New Observable default; legacy at old.observablehq.com; agent "chats"[^official-new][^flowingdata] | OSS/Business | ± |

# OSS successes
- Notebook Kit gives Observable notebooks an open, file-based format and static-site tooling, ending the proprietary-dialect lock-in[^nb2-preview][^macwright].
- Notebook Kit remains active (pushed Sept 2026)[^nk-gh].

# OSS failures / risks
- Framework effectively in maintenance: no minor release since Nov 2024[^fw-gh].
- Repeated strategic pivots (Framework → Canvases → Notebooks 2.0) eroded community trust[^where-going].
- New default launched missing features; educators complained about timing at semester start[^default-soon][^official-new].

# Business successes
- Raised $35.6M Series B in 2021 (~$46M total), giving a long runway[^tt-funding].

# Business failures / risks
- No new funding found since 2021; company has not published revenue. Pricing changes on free notebook access were a recurrent community complaint[^where-going].

# By window
## W3
- New Observable became default (Sept 1, 2026); old UI retained[^official-new].
## W6
- No notable OSS events found; Framework last pushed May 2026[^fw-gh].
## W9
- Framework 1.13.4 patch (Mar 2026)[^fw-gh].
## W12
- No notable events found.
## W24
- Framework stalls after 1.13; Canvases (Apr 2025); Notebooks 2.0 preview (Jul 2025)[^obs-2025][^nb2-preview].

# Lessons
- A single-vendor OSS stack follows the vendor's product pivots; side projects like Framework can stall within months.
- Open file formats became the 2025–26 notebook battleground (Notebook Kit, marimo .py, .deepnote YAML).

# Related
- [/organizations/observable-inc.md](/organizations/observable-inc.md), [/events/2026-09-observable-new-notebooks-default.md](/events/2026-09-observable-new-notebooks-default.md)
- [/projects/scientific-computing/jupyter.md](/projects/scientific-computing/jupyter.md), [/projects/scientific-computing/marimo.md](/projects/scientific-computing/marimo.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^fw-gh]: https://github.com/observablehq/framework
[^nk-gh]: https://github.com/observablehq/notebook-kit
[^obs-2]: https://observablehq.com/blog/observable-2-0
[^obs-2025]: https://old.observablehq.com/blog/observable-2025-year-in-review
[^nb2-preview]: https://observablehq.com/release-notes/2025-07-29-observable-notebooks-2
[^macwright]: https://macwright.com/2025/07/31/observable-notebooks-2
[^where-going]: https://talk.observablehq.com/t/where-is-observable-going/10372
[^default-soon]: https://talk.observablehq.com/t/making-the-new-observable-the-default-soon/10775
[^official-new]: https://talk.observablehq.com/t/officially-announcing-the-new-observable/10782
[^flowingdata]: https://flowingdata.com/2026/09/02/observable-notebooks-get-a-rewrite/
[^tt-funding]: https://www.techtarget.com/data-technologies/news/252511953/Observable-raises-356M-for-data-collaboration-platform
