---
type: OSS Project
title: Project Jupyter (JupyterLab / Notebook)
description: "The de facto standard for interactive computing; moved from NumFOCUS to LF Charities and gained a corporate-funded Jupyter Foundation (Oct–Nov 2024), shipped steady JupyterLab 4.x/Notebook 7.x releases and Jupyter AI v3, but faces reactive-notebook challengers (marimo, Deepnote) and thin maintainer capacity in older subprojects."
resource: https://github.com/jupyterlab/jupyterlab
tags: [notebooks, interactive-computing, python, bsd-3-clause, foundation-hosted, linux-foundation]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: foundation
steward: LF Charities / Jupyter Foundation (Linux Foundation)
backing_orgs: [organizations/linux-foundation]
metrics:
  jupyterlab_github_stars: { value: 15331, as_of: 2026-10-03 }
  notebook_github_stars: { value: 13409, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: jl-gh
    resource: https://github.com/jupyterlab/jupyterlab
    title: JupyterLab GitHub repository and releases
    last_modified: 2026-10-03T00:00:00Z
  - id: pypi-jl
    resource: https://pypi.org/project/jupyterlab/
    title: "PyPI: jupyterlab (4.3.0 2024-10-30, 4.4.0 2025-04-03, 4.5.0 2025-11-18, 4.6.0 2026-06-18)"
  - id: lf-charities
    resource: https://www.linuxfoundation.org/press/lf-charities-welcomes-project-jupyter-expanding-role-in-data-science-and-furthering-community-innovation
    title: "Linux Foundation: LF Charities welcomes Project Jupyter (2024-10-17)"
    author: org:linux-foundation
  - id: lf-jf
    resource: https://www.linuxfoundation.org/press/linux-foundation-announces-formation-of-the-jupyter-foundation
    title: "Linux Foundation announces formation of the Jupyter Foundation (2024-11-19)"
    author: org:linux-foundation
  - id: jf-members
    resource: https://jupyterfoundation.org/members/
    title: Jupyter Foundation members
  - id: jf-funding
    resource: https://jupyterfoundation.org/community-funding-proposals/
    title: Jupyter Foundation community funding proposals (2025 recipients)
  - id: jupyter-blog
    resource: https://blog.jupyter.org/
    title: Jupyter Blog (2026 posts)
  - id: jl46-forum
    resource: https://discourse.jupyter.org/t/jupyterlab-4-6-and-notebook-7-6-are-out/38743
    title: "Jupyter forum: JupyterLab 4.6 and Notebook 7.6 are out"
  - id: jl46-blog
    resource: https://blog.jupyter.org/jupyterlab-4-6-and-notebook-7-6-are-out-dd84e1e919f2
    title: "Jupyter Blog: JupyterLab 4.6 and Notebook 7.6 are out! (2026-07-02)"
  - id: pypi-jai
    resource: https://pypi.org/project/jupyter-ai/
    title: "PyPI: jupyter-ai (3.0.0 2026-04-01, 3.2.0 2026-09-03)"
  - id: tns-jai3
    resource: https://thenewstack.io/jupyter-ai-v3-could-it-generate-an-ecosystem-of-ai-personas/
    title: "The New Stack: Jupyter AI v3 — an ecosystem of AI personas?"
    author: org:thenewstack
  - id: jcon25
    resource: https://discourse.jupyter.org/t/jupytercon-2025-in-san-diego-is-november-4-5-register-today/37927
    title: "JupyterCon 2025 in San Diego (Nov 2025)"
  - id: ec-notes
    resource: https://ec.jupyter.org/meeting_notes/2025/
    title: Jupyter Executive Council meeting notes 2025
  - id: pypi-lite
    resource: https://pypi.org/project/jupyterlite-core/
    title: "PyPI: jupyterlite-core (0.8.0 2026-06-23)"
---

# Summary
Project Jupyter remains the default interactive-computing environment for science, education and data work, and its institutional footing improved markedly: on 2024-10-17 it moved its fiscal home from NumFOCUS to LF Charities, and on 2024-11-19 the Linux Foundation launched a member-funded Jupyter Foundation (AWS, Google, Meta, Bloomberg as premier founders)[^lf-charities][^lf-jf]. Releases have been regular rather than revolutionary — JupyterLab 4.3→4.6 and Notebook 7.3→7.6 — plus Jupyter AI v3 (April 2026) with agent "personas"[^pypi-jl][^pypi-jai][^tns-jai3]. Verdict: stable, better funded than before, but its file format and execution model are being challenged by reactive, git-friendly notebooks (marimo, Deepnote) and AI-native tools.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-17 | Project Jupyter moves from NumFOCUS to LF Charities[^lf-charities] | OSS | + |
| W24 | 2024-10-30 | JupyterLab 4.3.0[^pypi-jl] | OSS | + |
| W24 | 2024-11-19 | Jupyter Foundation formed (AWS, Google, Meta, Bloomberg premier)[^lf-jf] | OSS | + |
| W24 | 2025-04-03 | JupyterLab 4.4.0 / Notebook 7.4[^pypi-jl] | OSS | + |
| W12 | 2025-11 | JupyterCon 2025, San Diego[^jcon25] | OSS | + |
| W12 | 2025-11-18 | JupyterLab 4.5.0 / Notebook 7.5[^pypi-jl] | OSS | + |
| W12 | 2025-12 | Executive Council election; EC discusses becoming an advisory body and asks the Foundation to hire an ED; recommends consolidating Widgets and Voilà subprojects[^ec-notes] | OSS | ± |
| W9 | 2026-04-01 | Jupyter AI 3.0.0 (multi-agent "personas", Claude Code/Codex personas)[^pypi-jai][^tns-jai3] | OSS | + |
| W6 | 2026-05/06 | Foundation hires part-time community manager (Jason Grout) and JupyterHub/Jupyter Book community manager[^jupyter-blog] | OSS | + |
| W6 | 2026-06-18 | JupyterLab 4.6.0 / Notebook 7.6 (Rspack build ~5x faster, 95 contributors)[^pypi-jl][^jl46-blog] | OSS | + |
| W3 | 2026-07-06 | New Foundation community-funding call for proposals[^jupyter-blog] | OSS | + |
| W3 | 2026-08-25 | 2026 User Experience survey results published[^jupyter-blog] | OSS | + |

# OSS successes
- Neutral, corporately funded home: Foundation now lists premier members AWS, Apple, Bloomberg, Google, Meta, Snowflake and Uber, plus Anaconda, Databricks, JetBrains, Posit and others[^jf-members].
- Foundation money flows back to maintainers: 2025 community grants funded seven projects (JupyterHub/Jupyter Book community management, accessibility, visual regression testing, build-system separation, etc.)[^jf-funding].
- JupyterLab 4.6 had 68 enhancements, 97 bug fixes and 95 contributors, and cut extension build time ~5x via Rspack[^jl46-forum][^jl46-blog].
- Jupyter AI v3 positioned Jupyter as a host for third-party coding agents rather than a competitor to them[^tns-jai3].

# OSS failures / risks
- Volunteer-run Executive Council reports limited capacity and wants a paid executive director; Widgets/Voilà flagged for consolidation[^ec-notes].
- The .ipynb JSON format is the main attack surface for challengers (marimo's pure-Python files, Deepnote's YAML format) — see [/projects/scientific-computing/marimo.md](/projects/scientific-computing/marimo.md).
- Minor-release cadence slowed to roughly two per year (4.4 Apr 2025 → 4.5 Nov 2025 → 4.6 Jun 2026)[^pypi-jl].

# Business successes
- n/a (non-profit). Vendors (AWS SageMaker, Google Colab, Databricks, Snowflake) embed Jupyter and now fund it via the Foundation[^jf-members].

# Business failures / risks
- n/a; Foundation budget figures are not publicly reported in sources found.

# By window
## W3
- Foundation's 2026 community funding call (July)[^jupyter-blog]; user survey results (Aug 25)[^jupyter-blog]; JupyterLab 4.6.x patches through 4.6.4 (Sept)[^jl-gh]; JupyterHub 6.0 (see [/projects/scientific-computing/jupyterhub.md](/projects/scientific-computing/jupyterhub.md)).
## W6
- JupyterLab 4.6 / Notebook 7.6 (June 18; blog July 2)[^pypi-jl][^jl46-blog]; JupyterLite 0.8.0 (June 23)[^pypi-lite]; community managers hired[^jupyter-blog].
## W9
- Jupyter AI 3.0.0 (April 1)[^pypi-jai].
## W12
- JupyterCon 2025 San Diego[^jcon25]; JupyterLab 4.5 (Nov 18)[^pypi-jl]; EC election and governance-evolution discussion[^ec-notes].
## W24
- LF Charities move (Oct 17, 2024) and Jupyter Foundation launch (Nov 19, 2024)[^lf-charities][^lf-jf]; JupyterLab 4.3 and 4.4[^pypi-jl].

# Lessons
- Big, ubiquitous scientific infrastructure can trade a small fiscal sponsor (NumFOCUS) for an LF-style member foundation to unlock corporate dues — at the cost of a more corporate governance surface.
- Incumbent standards respond to AI by becoming platforms for agents (Jupyter AI personas) rather than building their own.
- File-format ergonomics (diffable, executable-as-script) is where incumbents are most vulnerable.

# Related
- [/projects/scientific-computing/jupyterhub.md](/projects/scientific-computing/jupyterhub.md), [/projects/scientific-computing/marimo.md](/projects/scientific-computing/marimo.md), [/projects/scientific-computing/deepnote.md](/projects/scientific-computing/deepnote.md)
- [/events/2024-10-jupyter-joins-lf-charities-foundation.md](/events/2024-10-jupyter-joins-lf-charities-foundation.md)
- [/organizations/linux-foundation.md](/organizations/linux-foundation.md), [/organizations/numfocus.md](/organizations/numfocus.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^jl-gh]: https://github.com/jupyterlab/jupyterlab
[^pypi-jl]: https://pypi.org/project/jupyterlab/
[^lf-charities]: https://www.linuxfoundation.org/press/lf-charities-welcomes-project-jupyter-expanding-role-in-data-science-and-furthering-community-innovation
[^lf-jf]: https://www.linuxfoundation.org/press/linux-foundation-announces-formation-of-the-jupyter-foundation
[^jf-members]: https://jupyterfoundation.org/members/
[^jf-funding]: https://jupyterfoundation.org/community-funding-proposals/
[^jupyter-blog]: https://blog.jupyter.org/
[^jl46-forum]: https://discourse.jupyter.org/t/jupyterlab-4-6-and-notebook-7-6-are-out/38743
[^jl46-blog]: https://blog.jupyter.org/jupyterlab-4-6-and-notebook-7-6-are-out-dd84e1e919f2
[^pypi-jai]: https://pypi.org/project/jupyter-ai/
[^tns-jai3]: https://thenewstack.io/jupyter-ai-v3-could-it-generate-an-ecosystem-of-ai-personas/
[^jcon25]: https://discourse.jupyter.org/t/jupytercon-2025-in-san-diego-is-november-4-5-register-today/37927
[^ec-notes]: https://ec.jupyter.org/meeting_notes/2025/
[^pypi-lite]: https://pypi.org/project/jupyterlite-core/
