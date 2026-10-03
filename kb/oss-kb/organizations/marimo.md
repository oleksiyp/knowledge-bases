---
type: Organization
title: Marimo Inc.
description: "San Francisco startup behind the marimo reactive Python notebook; raised a $5M seed (Nov 2024) and was acquired by CoreWeave in Oct 2025, which now funds the Apache-2.0 project and a free GPU-backed hosted notebook (molab)."
resource: https://marimo.io
tags: [commercial-open-source, notebooks, acquired, coreweave]
org_kind: coss-startup
hq: San Francisco, CA (unverified)
funding: { total_usd: "5M (seed)", last_round: "Seed (AIX Ventures)", last_round_date: 2024-11-19, valuation_usd: "undisclosed" }
business_verdict: acquired
projects: [projects/scientific-computing/marimo]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: marimo-seed
    resource: https://marimo.io/blog/seed-announcement
    title: "marimo: Announcing Marimo Inc."
  - id: bdw-seed
    resource: https://www.hpcwire.com/bigdatawire/2024/11/21/marimo-emerges-from-stealth-to-debut-its-python-notebook/
    title: "BigDATAwire: Marimo emerges from stealth (2024-11-21)"
  - id: cw-pr
    resource: https://www.coreweave.com/news/coreweave-acquires-marimo-to-unify-the-generative-ai-developer-workflow
    title: "CoreWeave acquires Marimo (2025-10-30)"
    author: org:coreweave
  - id: marimo-cw
    resource: https://marimo.io/blog/joining-coreweave
    title: "marimo: Marimo is joining CoreWeave"
  - id: molab
    resource: https://marimo.io/blog/reintroducing-molab
    title: "marimo: molab, now with GPUs! (2026-06-01)"
  - id: marimo-blog
    resource: https://marimo.io/blog
    title: marimo blog
---

# Summary
Marimo Inc. was founded by Akshay Agrawal and Myles Scolnick to commercialize the marimo notebook, emerging from stealth in Nov 2024 with a $5M seed led by AIX Ventures and a roster of notable angels (Jeff Dean, Clem Delangue, Wes McKinney, Charlie Marsh, Lukas Biewald, Jordan Tigani)[^marimo-seed][^bdw-seed]. Less than a year later, on 2025-10-30, CoreWeave agreed to acquire the eight-person company for undisclosed terms[^cw-pr][^marimo-cw]. It now operates as CoreWeave's developer-experience arm, offering molab with free GPUs (June 2026) and self-hostable marimohub (Sept 2026)[^molab][^marimo-blog].

# Business timeline
| Date | Event |
|---|---|
| 2024-11-19 | $5M seed closes, led by AIX Ventures[^marimo-seed] |
| 2025-10-30 | CoreWeave definitive agreement to acquire; Morgan Stanley advised Marimo[^cw-pr] |
| 2026-06-01 | molab on CoreWeave Cloud with free RTX Pro 6000 GPUs (public preview)[^molab] |
| 2026-09 | Launch Week 2: marimohub, marimo-studio, Pixi sandboxes[^marimo-blog] |

# Monetization model
Pre-acquisition: planned hosted/cloud offerings (molab) atop the free Apache-2.0 notebook. Post-acquisition: a funnel to CoreWeave GPU compute and W&B inference; the notebook itself stays free and permissive per CoreWeave's commitment[^cw-pr][^molab].

# Successes
- Rapid OSS adoption (16.6k stars, 1M+ monthly downloads by Oct 2025) and a fast exit[^marimo-cw].

# Failures / risks
- No standalone revenue track record; roadmap now subject to CoreWeave's strategy.

# Related
- [/projects/scientific-computing/marimo.md](/projects/scientific-computing/marimo.md), [/events/2025-10-coreweave-acquires-marimo.md](/events/2025-10-coreweave-acquires-marimo.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^marimo-seed]: https://marimo.io/blog/seed-announcement
[^bdw-seed]: https://www.hpcwire.com/bigdatawire/2024/11/21/marimo-emerges-from-stealth-to-debut-its-python-notebook/
[^cw-pr]: https://www.coreweave.com/news/coreweave-acquires-marimo-to-unify-the-generative-ai-developer-workflow
[^marimo-cw]: https://marimo.io/blog/joining-coreweave
[^molab]: https://marimo.io/blog/reintroducing-molab
[^marimo-blog]: https://marimo.io/blog
