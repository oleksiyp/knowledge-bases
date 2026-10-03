---
type: OSS Project
title: Positron (and RStudio IDE)
description: Posit's Code-OSS-based data-science IDE for Python and R, stable since mid-2025 and shipping monthly with AI (Posit Assistant) and notebook features; source-available under Elastic License 2.0, while the AGPL RStudio IDE is maintained in parallel.
resource: https://github.com/posit-dev/positron
tags: [ide, data-science, r, python, code-oss, elastic-license, source-available, posit, ai-assistant]
domain: scientific-computing
license: Elastic-2.0
license_history: ["Elastic License 2.0 with Education License Rider (Positron, since public beta 2024)", "RStudio IDE: AGPL-3.0 (unchanged)"]
governance: single-vendor
steward: Posit PBC
backing_orgs: [organizations/posit]
metrics:
  github_stars: { value: 4282, as_of: 2026-10-03 }
  rstudio_github_stars: { value: 5077, as_of: 2026-10-03 }
  latest_release: { value: "2026.09.1", as_of: 2026-09-04 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: positron-gh
    resource: https://github.com/posit-dev/positron
    title: Positron GitHub repository and releases
    last_modified: 2026-10-03T00:00:00Z
  - id: positron-license
    resource: https://github.com/posit-dev/positron/blob/main/LICENSE.txt
    title: Positron LICENSE (Elastic License 2.0 + Education rider)
  - id: positron-ga
    resource: https://posit.co/blog/positron-product-announcement-aug-2025
    title: "Posit: Announcing Positron, a new Data Science IDE (2025-08)"
  - id: positron-2025-07
    resource: https://positron.posit.co/release-notes/release-2025-07.html
    title: "Positron 2025.07.0 release notes"
  - id: workbench-2026-04
    resource: https://posit.co/blog/workbench-release-2026-04
    title: "Posit: Workbench 2026.04.0 — Posit Assistant, monthly releases, Positron Notebook Editor (2026-04-23)"
  - id: posit-ai
    resource: https://posit.co/blog/posit-ai-now-available-all
    title: "Posit: Posit AI is now available to all (2026-05-05)"
  - id: positron-2026-08
    resource: https://positron.posit.co/release-notes/release-2026-08.html
    title: "Positron 2026.08.0 release notes (2026-08-06)"
  - id: positron-cloud
    resource: https://posit.co/blog/positron-now-available-posit-cloud-preview
    title: "Posit: Positron is now available on Posit Cloud in preview"
  - id: glimpse-sep-2026
    resource: https://posit.co/blog/2026-09-glimpse
    title: "posit::glimpse() Newsletter — September 2026"
  - id: rftrou
    resource: https://rfortherestofus.com/2025/11/pros-and-cons-of-positron
    title: "R for the Rest of Us: Pros and Cons of Positron (2025-11)"
---

# Summary
Positron is Posit's bet that the RStudio franchise can be carried into a polyglot (Python + R), VS Code-style world. Built on Code OSS with Open VSX extensions, it left beta with stable desktop releases in July 2025 and was formally launched as GA on 2025-08-14 (2025.08.0)[^positron-ga][^positron-2025-07], then moved to monthly releases with a Data Explorer, data connections (8 sources by Aug 2026), Quarto inline output and an alpha native notebook editor[^positron-2026-08][^workbench-2026-04]. In 2026 Posit added a paid AI layer (Posit Assistant on Anthropic models, from $20/month) to both Positron and RStudio[^posit-ai]. It is *source-available* (Elastic License 2.0 with an education rider), not OSI open source[^positron-license]. Verdict: growing product with real adoption, but a licensing step back from AGPL RStudio, and RStudio (AGPL) remains maintained and monthly-released[^positron-ga][^workbench-2026-04].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07 | Positron exits beta; first stable release 2025.07.0[^positron-2025-07] | OSS | + |
| W24 | 2025-08-14 | Positron formally announced as GA desktop IDE; supported IDE in Posit Workbench; "RStudio is not going away"[^positron-ga] | Business | + |
| W12 | 2025-11 | Community reviews weigh Positron vs RStudio for R users[^rftrou] | OSS | 0 |
| W6 | 2026-04-23 | Workbench 2026.04: Posit Assistant preview in RStudio & Positron, monthly release cadence, Positron Notebook Editor alpha[^workbench-2026-04] | Business | + |
| W6 | 2026-05-05 | Posit AI subscription GA ($20/mo), Posit Assistant + Next Edit Suggestions public preview[^posit-ai] | Business | + |
| W3 | 2026-08-06 | Positron 2026.08: 8 data connection types, Quarto inline output GA, centralized AI providers[^positron-2026-08] | OSS | + |
| W3 | 2026-09-03/04 | Positron 2026.09.0/.1 (env-setup welcome, package CVE display)[^positron-gh] | OSS | + |
| W3 | 2026-09 | Posit AI adds Kimi K3 and GLM 5.2 models[^glimpse-sep-2026] | Business | + |

# OSS successes
- Shipped a credible polyglot data-science IDE in ~3 years; monthly cadence[^positron-gh][^positron-2026-08].
- Treats Python and R equally; integrates Quarto, Shiny, Streamlit, Dash app workflows[^positron-ga].
- Available in Posit Cloud (preview) and Workbench[^positron-cloud][^positron-ga].

# OSS failures / risks
- Elastic License 2.0 is not an OSI license — a departure from AGPL RStudio, and limits third-party hosting[^positron-license].
- Competes with free VS Code/Cursor-style editors whose AI features are deeper; R users' switching costs from RStudio are real[^rftrou].

# Business successes
- Gives Posit a modern seat for Workbench and an on-ramp for paid AI (Posit AI subscription)[^posit-ai][^workbench-2026-04].

# Business failures / risks
- AI features depend on third-party models (Anthropic; later Kimi/GLM)[^posit-ai][^glimpse-sep-2026]; margins and differentiation uncertain.

# By window
## W3
- 2026.08 and 2026.09 releases; new AI models in Posit AI[^positron-2026-08][^positron-gh][^glimpse-sep-2026].
## W6
- Posit Assistant, monthly releases, notebook editor alpha; Posit AI GA[^workbench-2026-04][^posit-ai].
## W9
- Monthly releases continue (2026.01–2026.03)[^positron-gh]; no other notable events found.
## W12
- Community comparison/adoption debate vs RStudio[^rftrou].
## W24
- Stable release and GA launch (July–Aug 2025)[^positron-2025-07][^positron-ga].

# Lessons
- Forking Code OSS lets a vendor ship a full IDE quickly, but the license choice (ELv2) signals the vendor wants to keep hosting rights.
- Keeping the legacy product (RStudio) alive while launching the successor avoided a user revolt.
- IDE vendors in data science monetize via AI subscriptions and enterprise workbenches, not the editor.

# Related
- [/organizations/posit.md](/organizations/posit.md)
- [/projects/scientific-computing/quarto.md](/projects/scientific-computing/quarto.md), [/projects/scientific-computing/r-cran.md](/projects/scientific-computing/r-cran.md)
- [/projects/devtools-languages/open-vsx.md](/projects/devtools-languages/open-vsx.md)
- [/events/2025-08-positron-ga.md](/events/2025-08-positron-ga.md), [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^positron-gh]: https://github.com/posit-dev/positron
[^positron-license]: https://github.com/posit-dev/positron/blob/main/LICENSE.txt
[^positron-ga]: https://posit.co/blog/positron-product-announcement-aug-2025
[^positron-2025-07]: https://positron.posit.co/release-notes/release-2025-07.html
[^workbench-2026-04]: https://posit.co/blog/workbench-release-2026-04
[^posit-ai]: https://posit.co/blog/posit-ai-now-available-all
[^positron-2026-08]: https://positron.posit.co/release-notes/release-2026-08.html
[^positron-cloud]: https://posit.co/blog/positron-now-available-posit-cloud-preview
[^glimpse-sep-2026]: https://posit.co/blog/2026-09-glimpse
[^rftrou]: https://rfortherestofus.com/2025/11/pros-and-cons-of-positron
