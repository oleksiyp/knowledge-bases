---
type: OSS Project
title: TypeScript
description: Microsoft's typed superset of JavaScript; executed the decade's most consequential compiler rewrite — a native Go port (Project Corsa) announced March 2025 and shipped as TypeScript 7.0 on 2026-07-08 with ~8–12x faster builds.
resource: https://github.com/microsoft/TypeScript
tags: [programming-language, javascript, compiler, go, apache-2.0, microsoft]
domain: devtools-languages
license: Apache-2.0
license_history: ["Apache-2.0 (2012-)"]
governance: single-vendor
steward: Microsoft
backing_orgs: []
metrics:
  github_stars: { value: 111314, as_of: 2026-10-03 }
  github_stars_typescript_go: { value: 26162, as_of: 2026-10-03, note: "microsoft/typescript-go repo archived by Oct 2026" }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ts-gh
    resource: https://github.com/microsoft/TypeScript
    title: TypeScript and typescript-go GitHub repositories (stars/archived status via GitHub API, 2026-10-03)
  - id: ts7-blog
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/
    title: "TypeScript blog: Announcing TypeScript 7.0 (2026-07-08)"
    author: org:microsoft
  - id: ts7-beta
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/
    title: "TypeScript blog: Announcing TypeScript 7.0 Beta (2026-04-21)"
    author: org:microsoft
  - id: ts7-rc
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-rc/
    title: "TypeScript blog: Announcing TypeScript 7.0 RC (2026-06-18)"
    author: org:microsoft
  - id: ts6-blog
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/
    title: "TypeScript blog: Announcing TypeScript 6.0 (2026-03-23)"
    author: org:microsoft
  - id: ts7-dec
    resource: https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/
    title: "TypeScript blog: Progress on TypeScript 7 – December 2025 (2025-12-02)"
    author: org:microsoft
  - id: ts-native-blog
    resource: https://devblogs.microsoft.com/typescript/typescript-native-port/
    title: "TypeScript blog: A 10x Faster TypeScript (native port announcement)"
    author: org:microsoft
---

# Summary
TypeScript had a landmark two years. On 2025-03-11 Anders Hejlsberg announced a port of the compiler from TypeScript/JavaScript to Go, targeting a ~10x speedup.[^ts-native-blog] TypeScript 6.0 (2026-03-23) was the last JavaScript-based release and made strict mode the default; **TypeScript 7.0 shipped on 2026-07-08** (after beta 2026-04-21 and RC 2026-06-18) as the first Go-based release, with full builds typically 8–12x faster (VS Code type-check 125.7s → 10.6s; Sentry 139.8s → 15.7s), though without a stable programmatic API until 7.1 — Vue/Angular/Svelte tooling must stay on 6.0 meanwhile.[^ts6-blog][^ts7-beta][^ts7-rc][^ts7-blog] The interim `microsoft/typescript-go` repo (26k stars) has since been archived.[^ts-gh] Verdict: OSS thriving; the Go choice (over Rust) was debated but delivered.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-11 | Native Go port (Project Corsa) announced [^ts-native-blog] | OSS | + |
| W12 | 2025-12-02 | "Progress on TypeScript 7" update [^ts7-dec] | OSS | + |
| W9 | 2026-03-23 | TypeScript 6.0 — last JS-based compiler; strict by default [^ts6-blog] | OSS | + |
| W6 | 2026-04-21 | TypeScript 7.0 Beta [^ts7-beta] | OSS | + |
| W6 | 2026-06-18 | TypeScript 7.0 RC [^ts7-rc] | OSS | + |
| W3 | 2026-07-08 | TypeScript 7.0 — Go-based compiler GA; ~9–12x faster builds on VS Code/Sentry/Playwright [^ts7-blog] | OSS | + |

# OSS successes
- Order-of-magnitude build/editor speedups at the scale of the world's largest codebases (Slack CI type-check 7.5 → 1.25 min; Microsoft reports 400 CI-hours/month saved in one team).[^ts7-blog]
- Rewrite executed without a fork or language split — 6.0 acted as a deprecation bridge.[^ts6-blog]

# OSS failures / risks
- 7.0 shipped without a stable compiler API, breaking tools that embed the TS compiler until 7.1.[^ts7-blog]
- Native toolchains (Go/Rust) raise the contribution barrier for JS-only contributors.

# Business successes
- n/a (Microsoft-funded).

# Business failures / risks
- n/a.

# By window
## W3
- TypeScript 7.0 GA (2026-07-08).[^ts7-blog]
## W6
- TypeScript 7.0 Beta (2026-04-21) and RC (2026-06-18).[^ts7-beta][^ts7-rc]
## W9
- TypeScript 6.0 (2026-03-23).[^ts6-blog]
## W12
- December 2025 progress report on the Go port.[^ts7-dec]
## W24
- Go port announced (2025-03-11).[^ts-native-blog]

# Lessons
- "Port, don't redesign": a near line-by-line port preserves semantics and makes a rewrite of a giant codebase tractable.
- Native rewrites of JS tooling (TS-Go, Rolldown, Oxc, Biome, Rspack) were the dominant performance theme of 2025–26.

# Related
- [Vite / Oxc / Rolldown](/projects/devtools-languages/vite.md), [Biome](/projects/devtools-languages/biome.md), [Rspack](/projects/devtools-languages/rspack.md)
- [TypeScript 7 (Go) ships](/events/2026-07-typescript-7-native-go.md)

[^ts-gh]: TypeScript and typescript-go GitHub repositories (stars/archived status via GitHub API, 2026-10-03) — https://github.com/microsoft/TypeScript
[^ts7-blog]: TypeScript blog: Announcing TypeScript 7.0 — https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/
[^ts7-beta]: TypeScript blog: Announcing TypeScript 7.0 Beta — https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/
[^ts7-rc]: TypeScript blog: Announcing TypeScript 7.0 RC — https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-rc/
[^ts6-blog]: TypeScript blog: Announcing TypeScript 6.0 — https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/
[^ts7-dec]: TypeScript blog: Progress on TypeScript 7 – December 2025 — https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/
[^ts-native-blog]: TypeScript blog: A 10x Faster TypeScript (native port announcement) — https://devblogs.microsoft.com/typescript/typescript-native-port/
