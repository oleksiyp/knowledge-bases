---
type: OSS Project
title: JupyterHub
description: "Multi-user Jupyter server behind most university, research-lab and national-lab notebook deployments; shipped 5.3–5.5 and a major 6.0 (Sept 2026) and gained a funded community manager, while its hosting ecosystem (2i2c) absorbs the shock of US federal research-funding cuts."
resource: https://github.com/jupyterhub/jupyterhub
tags: [notebooks, multi-user, education, research-infrastructure, bsd-3-clause, foundation-hosted]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: foundation
steward: Project Jupyter (LF Charities / Jupyter Foundation)
backing_orgs: [organizations/linux-foundation]
metrics:
  github_stars: { value: 8348, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: jh-gh
    resource: https://github.com/jupyterhub/jupyterhub
    title: JupyterHub GitHub repository
    last_modified: 2026-10-01T00:00:00Z
  - id: pypi-jh
    resource: https://pypi.org/project/jupyterhub/
    title: "PyPI: jupyterhub (5.3.0 2025-04-15, 5.4.0 2025-10-06, 5.5.0 2026-06-10, 6.0.0 2026-09-01)"
  - id: jh6-ann
    resource: https://discourse.jupyter.org/t/ann-jupyterhub-6-0-release/38853
    title: "Jupyter forum: [ANN] JupyterHub 6.0 release"
  - id: jupyter-blog
    resource: https://blog.jupyter.org/
    title: Jupyter Blog (JupyterHub 6.0 post 2026-09-11; community manager 2026-06-15)
  - id: cve-33709
    resource: https://github.com/advisories/GHSA-3vff-hjqv-m7h8
    title: "GitHub Advisory: JupyterHub open redirect (CVE-2026-33709)"
  - id: cve-54338
    resource: https://nvd.nist.gov/vuln/detail/CVE-2026-54338
    title: "NVD: CVE-2026-54338 (JupyterHub login-log DoS, fixed in 5.5.0)"
  - id: 2i2c-strategy
    resource: https://2i2c.org/blog/strategy-update-after-2025/
    title: "2i2c: 2026 strategy update — an increased focus on co-creation"
  - id: 2i2c-q1
    resource: https://discourse.jupyter.org/t/a-quarterly-update-from-2i2c-on-our-progress-q1-2025/34778
    title: "2i2c quarterly update Q1 2025"
  - id: jf-funding
    resource: https://jupyterfoundation.org/community-funding-proposals/
    title: Jupyter Foundation community funding (2025 recipients)
---

# Summary
JupyterHub is the plumbing behind campus-wide and lab-wide notebook services, and it kept a steady, conservative cadence — 5.3 (Apr 2025), 5.4 (Oct 2025), 5.5 (Jun 2026) — culminating in JupyterHub 6.0 on 2026-09-01, a substantial release with a database schema upgrade but minimal breaking changes[^pypi-jh][^jh6-ann]. Jupyter Foundation grants funded a JupyterHub/Jupyter Book community manager, hired in June 2026[^jf-funding][^jupyter-blog]. The main risk is economic, not technical: its users are universities and research institutions hit by 2025 US federal funding cuts, as non-profit host 2i2c has described[^2i2c-strategy]. Verdict: stable, quietly healthy.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-15 | JupyterHub 5.3.0[^pypi-jh] | OSS | + |
| W24 | 2025 (early) | 2i2c switches from managed-hub service to membership model, recovering ~50% of costs from fees[^2i2c-q1][^2i2c-strategy] | Business | ± |
| W12 | 2025-10-06 | JupyterHub 5.4.0[^pypi-jh] | OSS | + |
| W9 | 2026 | 2i2c 2026 strategy update cites federal-funding uncertainty[^2i2c-strategy] | Business | − |
| W6 | 2026-06-10 | JupyterHub 5.5.0 (fixes CVE-2026-54338 login-log DoS)[^pypi-jh][^cve-54338] | OSS | + |
| W6 | 2026-06-15 | Foundation-funded JupyterHub & Jupyter Book community manager announced[^jupyter-blog] | OSS | + |
| W3 | 2026-09-01 | JupyterHub 6.0.0; 6.0.1 bugfix 2026-09-14[^jh6-ann] | OSS | + |

# OSS successes
- Major 6.0 release delivered with minimal breakage[^jh6-ann].
- First paid community manager for JupyterHub via Foundation grants[^jf-funding][^jupyter-blog].

# OSS failures / risks
- Security maintenance load on an internet-facing auth component: open redirect (CVE-2026-33709, fixed 5.4.4) and unauthenticated log-exhaustion DoS (CVE-2026-54338, fixed 5.5.0)[^cve-33709][^cve-54338].
- Small core team; slow minor cadence (~2 per year)[^pypi-jh].

# Business successes
- n/a (no single vendor). Ecosystem host 2i2c says it is "more confident" in a fee-based membership sustainability model[^2i2c-strategy].

# Business failures / risks
- Research/education customers face US federal cuts; 2i2c calls itself a "second order" recipient of research funding whose revenue depends on how institutions respond[^2i2c-strategy].

# By window
## W3
- JupyterHub 6.0.0 (Sept 1) and 6.0.1 (Sept 14)[^jh6-ann].
## W6
- 5.5.0 with security fixes (June 10)[^pypi-jh]; community manager hired[^jupyter-blog].
## W9
- No notable releases found; 2i2c strategy update on funding climate[^2i2c-strategy].
## W12
- 5.4.0 (Oct 6, 2025)[^pypi-jh].
## W24
- 5.3.0 (Apr 2025)[^pypi-jh]; 2i2c moves to membership model[^2i2c-q1].

# Lessons
- Infrastructure OSS whose users are publicly funded inherits public-funding risk even when the code is healthy.
- Foundation dues converted into community-manager roles are an effective, cheap intervention for mature projects.

# Related
- [/projects/scientific-computing/jupyter.md](/projects/scientific-computing/jupyter.md)
- [/organizations/linux-foundation.md](/organizations/linux-foundation.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^jh-gh]: https://github.com/jupyterhub/jupyterhub
[^pypi-jh]: https://pypi.org/project/jupyterhub/
[^jh6-ann]: https://discourse.jupyter.org/t/ann-jupyterhub-6-0-release/38853
[^jupyter-blog]: https://blog.jupyter.org/
[^cve-33709]: https://github.com/advisories/GHSA-3vff-hjqv-m7h8
[^cve-54338]: https://nvd.nist.gov/vuln/detail/CVE-2026-54338
[^2i2c-strategy]: https://2i2c.org/blog/strategy-update-after-2025/
[^2i2c-q1]: https://discourse.jupyter.org/t/a-quarterly-update-from-2i2c-on-our-progress-q1-2025/34778
[^jf-funding]: https://jupyterfoundation.org/community-funding-proposals/
