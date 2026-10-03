---
type: OSS Project
title: Quarto
description: Posit's open-source scientific and technical publishing system (successor to R Markdown); steady 1.6→1.10 releases with Typst, brand and accessibility features, and a from-scratch Rust rewrite (Quarto 2) announced in April 2026.
resource: https://github.com/quarto-dev/quarto-cli
tags: [publishing, notebooks, markdown, pandoc, typst, mit, posit, rust-rewrite]
domain: scientific-computing
license: MIT
license_history: ["MIT (quarto-cli; unchanged)"]
governance: single-vendor
steward: Posit PBC
backing_orgs: [organizations/posit]
metrics:
  github_stars: { value: 6049, as_of: 2026-10-03 }
  latest_stable: { value: "v1.10.18", as_of: 2026-07-24 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: quarto-gh
    resource: https://github.com/quarto-dev/quarto-cli
    title: quarto-cli GitHub repository and releases
    last_modified: 2026-10-03T00:00:00Z
  - id: quarto-18
    resource: https://quarto.org/docs/blog/posts/2025-10-13-1.8-release/
    title: "Quarto 1.8 release (2025-10-13)"
  - id: quarto-19
    resource: https://quarto.org/docs/blog/posts/2026-03-24-1.9-release/
    title: "Quarto 1.9 release (2026-03-24)"
  - id: quarto-2
    resource: https://opensource.posit.co/blog/2026-04-06_whats-next-quarto-2/
    title: "What's next: Quarto 2 (2026-04-06)"
  - id: quarto-110
    resource: https://opensource.posit.co/blog/2026-08-03_quarto-1-10/
    title: "Quarto 1.10 (2026-08-03)"
  - id: positron-2026-08
    resource: https://positron.posit.co/release-notes/release-2026-08.html
    title: "Positron 2026.08.0 release notes (Quarto inline output)"
---

# Summary
Quarto, Posit's MIT-licensed Pandoc-based publishing system for Python, R, Julia and Observable notebooks, had a steady two years: 1.8 (Oct 2025) added light/dark brand support, brand extensions and HTML accessibility checks and made lualatex the default[^quarto-18]; 1.9 (Mar 2026) added Posit Connect Cloud publishing, LLM-friendly website output, Typst books and PDF/UA accessibility[^quarto-19]; 1.10 (Aug 2026) was mostly fixes because effort has moved to Quarto 2[^quarto-110]. In April 2026 Posit announced Quarto 2, a ground-up Rust rewrite with a new Markdown parser and automerge-based collaborative editing, with no public release for at least six months[^quarto-2]. Verdict: stable, widely used but single-vendor; the rewrite is a big bet that pauses feature work in 1.x.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08/09 | 1.7.33–1.8.25 patch releases[^quarto-gh] | OSS | + |
| W12 | 2025-10-13 | Quarto 1.8: brand light/dark, brand extensions, a11y checks, lualatex default[^quarto-18] | OSS | + |
| W9 | 2026-03-24 | Quarto 1.9: Connect Cloud publishing, LLM-friendly output, Typst books, PDF/UA[^quarto-19] | OSS | + |
| W6 | 2026-04-06 | Quarto 2 announced: full Rust rewrite, collaborative editor[^quarto-2] | OSS | + |
| W3 | 2026-07-24 | 1.10.18 stable; 1.11 pre-releases from 2026-07-24[^quarto-gh] | OSS | 0 |
| W3 | 2026-08-03 | Quarto 1.10 post: maintenance-heavy, offline WCAG checks[^quarto-110] | OSS | 0 |
| W3 | 2026-08-06 | Quarto inline output GA in Positron 2026.08[^positron-2026-08] | OSS | + |

# OSS successes
- Became the default publishing tool in the R/Python data-science community and for Typst/PDF output[^quarto-19].
- Strong accessibility work (HTML a11y checks, PDF/UA, offline WCAG checks)[^quarto-18][^quarto-19][^quarto-110].

# OSS failures / risks
- Rewrites are risky: Quarto 2 diverts effort; 1.x is in maintenance mode in practice[^quarto-110][^quarto-2].
- Single-vendor governance (Posit) — no foundation.

# Business successes
- n/a directly; drives Posit Connect / Connect Cloud publishing[^quarto-19].

# Business failures / risks
- n/a.

# By window
## W3
- 1.10 maintenance release; 1.11 pre-releases; Positron integration[^quarto-110][^quarto-gh][^positron-2026-08].
## W6
- Quarto 2 Rust rewrite announced[^quarto-2].
## W9
- Quarto 1.9[^quarto-19].
## W12
- Quarto 1.8[^quarto-18].
## W24
- 1.7.x/1.8 pre-release patch stream[^quarto-gh].

# Lessons
- Rust rewrites have reached even document tooling; vendors pause the old line to fund them.
- Building in LLM-friendly output signals docs tooling now targets AI consumers as well as humans.

# Related
- [/organizations/posit.md](/organizations/posit.md), [/projects/scientific-computing/positron.md](/projects/scientific-computing/positron.md), [/projects/scientific-computing/r-cran.md](/projects/scientific-computing/r-cran.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^quarto-gh]: https://github.com/quarto-dev/quarto-cli
[^quarto-18]: https://quarto.org/docs/blog/posts/2025-10-13-1.8-release/
[^quarto-19]: https://quarto.org/docs/blog/posts/2026-03-24-1.9-release/
[^quarto-2]: https://opensource.posit.co/blog/2026-04-06_whats-next-quarto-2/
[^quarto-110]: https://opensource.posit.co/blog/2026-08-03_quarto-1-10/
[^positron-2026-08]: https://positron.posit.co/release-notes/release-2026-08.html
