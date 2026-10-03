---
type: OSS Project
title: Biome
description: Community-governed Rust formatter/linter for JS/TS/CSS/GraphQL (successor to Rome); shipped v2 with type-aware linting and GritQL plugins, absorbed GritQL (Dec 2025) and passed 500 lint rules (v2.5, June 2026) on sponsorship funding — but now faces VoidZero/Cloudflare's Oxlint/Oxfmt.
resource: https://github.com/biomejs/biome
tags: [linter, formatter, javascript, rust, apache-2.0, mit, community, sponsorship-funded]
domain: devtools-languages
license: "Apache-2.0 OR MIT"
license_history: ["MIT/Apache-2.0 (2023-, forked from Rome)"]
governance: community
steward: Biome core team
backing_orgs: []
metrics:
  github_stars: { value: 25888, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: biome-gh
    resource: https://github.com/biomejs/biome
    title: Biome GitHub repository (stars via GitHub API, 2026-10-03)
  - id: biome-blog
    resource: https://biomejs.dev/blog/
    title: "Biome blog (v2.4, v2.5, GritQL, Vercel partnership, sponsors)"
  - id: viteplus-1
    resource: https://voidzero.dev/posts/announcing-vite-plus-1-0
    title: "VoidZero: Announcing Vite+ 1.0 (Oxlint/Oxfmt performance claims)"
---

# Summary
Biome is the community-run survivor of the Rome Tools collapse and a healthy one: v2.4 (2026-02-10) added embedded CSS/GraphQL formatting and 15 HTML accessibility rules; v2.5 (2026-06-05) crossed 500 lint rules with GritQL plugin code fixes and watcher mode.[^biome-blog] GritQL itself came under the Biome umbrella on 2025-12-18, and Vercel partnered on type inference; sponsors include Depot and CodSpeed.[^biome-blog] Its competitive position is the risk: VoidZero's Oxlint (claimed 50–100x faster than ESLint) and Oxfmt now ship inside Vite+ 1.0 with Cloudflare's backing.[^viteplus-1] Verdict: OSS growing, funded by sponsorship rather than a company.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-17 | Biome v2.0 ("Biotype" type-aware linting, plugins) — GitHub release [^biome-gh] | OSS | + |
| W12 | 2025-12-18 | GritQL joins Biome [^biome-blog] | OSS | + |
| W9 | 2026-02-10 | Biome v2.4 [^biome-blog] | OSS | + |
| W6 | 2026-04-27 | Documentation investment with Sarah Rainsberger & Yan Thomas [^biome-blog] | OSS | + |
| W6 | 2026-06-05 | Biome v2.5: 500+ lint rules [^biome-blog] | OSS | + |
| W3 | 2026-09-28 | Competitor Oxlint/Oxfmt ship in Vite+ 1.0 [^viteplus-1] | OSS | − |

# OSS successes
- Rapid feature growth with a volunteer/sponsored team; multi-language formatting.[^biome-blog]

# OSS failures / risks
- Head-to-head with a better-funded Oxc toolchain bundled into Vite+.[^viteplus-1]

# Business successes
- Corporate sponsorship (Depot, CodSpeed) and Vercel partnership.[^biome-blog]

# Business failures / risks
- No company; funding scale unknown.

# By window
## W3
- Oxc competition intensifies (Vite+ 1.0).[^viteplus-1]
## W6
- v2.5.[^biome-blog]
## W9
- v2.4.[^biome-blog]
## W12
- GritQL merger.[^biome-blog]
## W24
- Biome v2 era (type-aware linting; exact release date not verified here).

# Lessons
- Community forks of failed VC projects (Rome → Biome) can outlive their predecessor — but compete against the next VC-backed wave.

# Related
- [Vite / Oxc](/projects/devtools-languages/vite.md), [Rspack](/projects/devtools-languages/rspack.md), [TypeScript](/projects/devtools-languages/typescript.md)

[^biome-gh]: Biome GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/biomejs/biome
[^biome-blog]: Biome blog (v2.4, v2.5, GritQL, Vercel partnership, sponsors) — https://biomejs.dev/blog/
[^viteplus-1]: VoidZero: Announcing Vite+ 1.0 (Oxlint/Oxfmt performance claims) — https://voidzero.dev/posts/announcing-vite-plus-1-0
