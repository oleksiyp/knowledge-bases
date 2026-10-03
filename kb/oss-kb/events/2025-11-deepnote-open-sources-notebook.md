---
type: Event
title: Deepnote open-sources its notebook format and tooling
description: "In early November 2025 Deepnote, a closed cloud data notebook for seven years, released its .deepnote format, block library, converters and IDE extensions under Apache-2.0, calling it 'the successor to the Jupyter notebook' — drawing community backlash over framing and scope."
event_kind: license-change
date: 2025-11-04
window: W12
impact: mixed
projects: [projects/scientific-computing/deepnote, projects/scientific-computing/jupyter]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dn-x
    resource: https://x.com/DeepnoteHQ/status/1985711105549672652
    title: "Deepnote on X: 'Today, we're open sourcing it'"
  - id: hn-dn
    resource: https://news.ycombinator.com/item?id=45813994
    title: "Hacker News: Deepnote, a Jupyter alternative, is going open source"
  - id: iprog-dn
    resource: https://www.i-programmer.info/news/216-python/18467-deepnote-goes-opensource-.html
    title: "I Programmer: Deepnote goes open source (2025-11-18)"
  - id: dn-gh
    resource: https://github.com/deepnote/deepnote
    title: deepnote/deepnote GitHub repository
---

# What happened
Deepnote announced it was open-sourcing "the data notebook for the AI era" as a drop-in Jupyter replacement under Apache-2.0[^dn-x]. The released layer comprised the YAML-based `.deepnote` format, 23 block types, reactivity engine, `.ipynb` converters, a CLI and VS Code-family extensions; the cloud UI, hosted agent and self-hosted compute were not included at launch[^iprog-dn][^dn-gh]. The date is approximate (HN discussion and X post in the first days of November 2025).

# Why it matters
It is a late open-core move by a VC-backed notebook vendor, betting that an open, AI-friendly file format can become a standard against Jupyter's .ipynb and marimo's .py files.

# Outcome so far
The HN thread (188 points) was dominated by criticism of the "successor" framing, perceived LLM-written prose and unclear scope[^hn-dn]. The repo reached ~3k stars by Oct 2026 with continuing package releases (CLI 0.8, Aug 2026)[^dn-gh] — modest compared with marimo.

# Related
- [/projects/scientific-computing/deepnote.md](/projects/scientific-computing/deepnote.md), [/projects/scientific-computing/jupyter.md](/projects/scientific-computing/jupyter.md), [/projects/scientific-computing/marimo.md](/projects/scientific-computing/marimo.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^dn-x]: https://x.com/DeepnoteHQ/status/1985711105549672652
[^hn-dn]: https://news.ycombinator.com/item?id=45813994
[^iprog-dn]: https://www.i-programmer.info/news/216-python/18467-deepnote-goes-opensource-.html
[^dn-gh]: https://github.com/deepnote/deepnote
