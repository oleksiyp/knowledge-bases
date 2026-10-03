---
type: OSS Project
title: Rspack
description: ByteDance's webpack-compatible Rust bundler; on a disciplined bi-monthly cadence from 1.0 (2024) to 2.0 (Apr 2026) and 2.2 (Aug 2026), with Next.js integration — the corporate-funded counterpart to VoidZero's Rolldown.
resource: https://github.com/web-infra-dev/rspack
tags: [bundler, javascript, rust, mit, bytedance, webpack-compatible]
domain: devtools-languages
license: MIT
license_history: ["MIT (2023-)"]
governance: single-vendor
steward: ByteDance (web-infra-dev)
backing_orgs: []
metrics:
  github_stars: { value: 12932, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: rspack-gh
    resource: https://github.com/web-infra-dev/rspack
    title: Rspack GitHub repository (stars via GitHub API, 2026-10-03)
  - id: rspack-blog
    resource: https://rspack.rs/blog/
    title: Rspack blog (release announcements 2024-2026)
---

# Summary
Rspack is the "boring, reliable" Rust bundler: drop-in webpack compatibility, funded by ByteDance's web-infra team, released on a predictable ~2-month cadence — 1.2 (2025-01-21), 1.3 (2025-03-28), 1.4 (2025-06-26), 1.5 (2025-08-26), 1.6 (2025-10-30), 1.7 (2025-12-31), **2.0 (2026-04-22)**, 2.1 (2026-06-26), 2.2 (2026-08-26).[^rspack-blog] On 2025-04-10 it announced integration into the Next.js ecosystem, giving Next users a non-Turbopack Rust bundler.[^rspack-blog] Verdict: OSS growing; no standalone business — its stability comes from corporate backing rather than VC.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-10 | Rspack joins the Next.js ecosystem [^rspack-blog] | OSS | + |
| W24 | 2025-08-26 | Rspack 1.5 [^rspack-blog] | OSS | + |
| W12 | 2025-10-30 / 12-31 | Rspack 1.6 / 1.7 [^rspack-blog] | OSS | + |
| W6 | 2026-04-22 | Rspack 2.0 [^rspack-blog] | OSS | + |
| W3 | 2026-08-26 | Rspack 2.2 [^rspack-blog] | OSS | + |

# OSS successes
- Smooth migration path for the huge installed base of webpack apps.[^rspack-blog]

# OSS failures / risks
- Single-corporate steward; mindshare competition from Vite/Rolldown and Turbopack.

# Business successes
- n/a.

# Business failures / risks
- n/a.

# By window
## W3
- 2.2 (2026-08-26).[^rspack-blog]
## W6
- 2.0 (2026-04-22), 2.1 (2026-06-26).[^rspack-blog]
## W9
- No notable events found.
## W12
- 1.6 and 1.7.[^rspack-blog]
## W24
- 1.2–1.5; Next.js integration.[^rspack-blog]

# Lessons
- Compatibility with an incumbent (webpack) is a powerful adoption wedge for a rewrite.

# Related
- [Vite / Rolldown](/projects/devtools-languages/vite.md), [Next.js](/projects/devtools-languages/nextjs.md), [Biome](/projects/devtools-languages/biome.md)

[^rspack-gh]: Rspack GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/web-infra-dev/rspack
[^rspack-blog]: Rspack blog (release announcements 2024-2026) — https://rspack.rs/blog/
