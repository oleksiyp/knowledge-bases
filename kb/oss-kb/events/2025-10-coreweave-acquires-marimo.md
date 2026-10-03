---
type: Event
title: CoreWeave acquires Marimo
description: "On 2025-10-30 GPU cloud CoreWeave agreed to acquire Marimo Inc., maker of the Apache-2.0 reactive Python notebook marimo, for undisclosed terms — the same day Core Scientific shareholders rejected CoreWeave's $9B bid."
event_kind: acquisition
date: 2025-10-30
window: W12
impact: mixed
projects: [projects/scientific-computing/marimo]
organizations: [organizations/marimo]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cw-pr
    resource: https://www.coreweave.com/news/coreweave-acquires-marimo-to-unify-the-generative-ai-developer-workflow
    title: "CoreWeave acquires Marimo to unify the generative AI developer workflow (2025-10-30)"
    author: org:coreweave
  - id: marimo-cw
    resource: https://marimo.io/blog/joining-coreweave
    title: "marimo: Marimo is joining CoreWeave"
  - id: yahoo-cw
    resource: https://finance.yahoo.com/news/ai-mania-tanks-coreweave-core-185348869.html
    title: "Yahoo Finance: AI mania tanks CoreWeave's Core Scientific acquisition — it buys Python notebook Marimo"
  - id: molab
    resource: https://marimo.io/blog/reintroducing-molab
    title: "marimo: molab, now with GPUs! (2026-06-01)"
  - id: marimo-gh
    resource: https://github.com/marimo-team/marimo
    title: marimo GitHub repository
---

# What happened
CoreWeave announced a definitive agreement to acquire Marimo Inc. on 2025-10-30; terms were not disclosed and Morgan Stanley advised Marimo[^cw-pr]. CoreWeave pledged that "the marimo notebook will remain freely available and permissively-licensed"; all eight team members joined[^cw-pr][^marimo-cw]. The deal followed CoreWeave's purchases of Weights & Biases, OpenPipe and Monolith AI, and was announced the same day Core Scientific shareholders voted down CoreWeave's $9B offer[^cw-pr][^yahoo-cw].

# Why it matters
It was the first acquisition of a breakout Jupyter challenger, and it went to an AI-compute vendor rather than a data platform — part of the pattern of compute owners buying OSS developer tools as demand funnels.

# Outcome so far
The project accelerated: stars rose from 16.6k (Oct 2025) to ~23k (Oct 2026), and molab gained free NVIDIA RTX Pro 6000 GPUs in June 2026[^marimo-cw][^marimo-gh][^molab]. The license remains Apache-2.0[^marimo-gh].

# Related
- [/projects/scientific-computing/marimo.md](/projects/scientific-computing/marimo.md), [/organizations/marimo.md](/organizations/marimo.md)
- [/projects/coss-market/ai-lab-devtool-acquisitions.md](/projects/coss-market/ai-lab-devtool-acquisitions.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^cw-pr]: https://www.coreweave.com/news/coreweave-acquires-marimo-to-unify-the-generative-ai-developer-workflow
[^marimo-cw]: https://marimo.io/blog/joining-coreweave
[^yahoo-cw]: https://finance.yahoo.com/news/ai-mania-tanks-coreweave-core-185348869.html
[^molab]: https://marimo.io/blog/reintroducing-molab
[^marimo-gh]: https://github.com/marimo-team/marimo
