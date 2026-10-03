---
type: OSS Project
title: Angular
description: Google's enterprise TypeScript framework; completed a signals-first, zoneless re-architecture (zoneless default in v21, Nov 2025; Signal Forms and Angular Aria stable in v22, June 2026) and staged a credible "renaissance" while staying single-vendor.
resource: https://github.com/angular/angular
tags: [frontend-framework, typescript, google, mit, single-vendor, signals]
domain: devtools-languages
license: MIT
license_history: ["MIT (2016-)"]
governance: single-vendor
steward: Google
backing_orgs: []
metrics:
  github_stars: { value: 101014, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: angular-gh
    resource: https://github.com/angular/angular
    title: Angular GitHub repository (stars via GitHub API, 2026-10-03)
  - id: wiki-angular
    resource: https://en.wikipedia.org/wiki/Angular_(web_framework)
    title: "Wikipedia: Angular (web framework) — release history v18–v22"
  - id: angulararchitects-21
    resource: https://www.angulararchitects.io/blog/whats-new-in-angular-21-signal-forms-zone-less-vitest-angular-aria-cli-with-mcp-server/
    title: "ANGULARarchitects: What's new in Angular 21 — Signal Forms, zoneless, Vitest, Angular Aria, CLI with MCP server"
  - id: angular-v22-blog
    resource: https://blog.angular.dev/announcing-angular-v22-c52bb83a4664
    title: "Angular blog: Announcing Angular v22"
    author: org:google
  - id: devto-angular22
    resource: https://dev.to/rigole/angular-22-is-here-everything-you-need-to-know-4g3c
    title: "DEV: Angular 22 is here — everything you need to know"
  - id: herodevs-v19-eol
    resource: https://x.com/herodevs/status/2054962997525713181
    title: "HeroDevs: Angular 19 reaches End of Life on May 19, 2026"
    author: org:herodevs
---

# Summary
Angular spent 2024–26 finishing a multi-year re-architecture around signals, and it is the clearest "renaissance" story among the incumbent frameworks. v19 (2024-11-19) made standalone components the default. v20 (2025-05-28) dropped boilerplate file suffixes. v21 (2025-11-19) made **zoneless change detection the default** for new apps and introduced experimental Signal Forms, Angular Aria and Vitest. v22 (2026-06-03) made Signal Forms and Angular Aria stable.[^wiki-angular][^angulararchitects-21] v22 also made OnPush the default change detection strategy, used the Fetch API in HttpClient, required TypeScript 6, and was positioned as making Angular easy for both developers and AI agents to work with. v21 had already shipped a CLI MCP server.[^devto-angular22][^angular-v22-blog][^angulararchitects-21] Google is still the sole steward. A commercial long-tail support business has grown around its six-month majors: HeroDevs sells "Never-Ending Support" as versions such as v19 reach EOL (2026-05-19).[^herodevs-v19-eol] Verdict: OSS stable, trending up. There is no business entity.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-19 | Angular 19: standalone by default [^wiki-angular] | OSS | + |
| W24 | 2025-05-28 | Angular 20 [^wiki-angular] | OSS | + |
| W12 | 2025-11-19 | Angular 21: zoneless by default; experimental Signal Forms and Angular Aria; Vitest; MCP server in CLI [^wiki-angular][^angulararchitects-21] | OSS | + |
| W6 | 2026-05-19 | Angular 19 end of life (HeroDevs NES offered) [^herodevs-v19-eol] | OSS | mixed |
| W6 | 2026-06-03 | Angular 22: Signal Forms and Angular Aria stable; OnPush default; Fetch-based HttpClient; TS 6 [^wiki-angular][^devto-angular22] | OSS | + |

# OSS successes
- About 101k GitHub stars as of 2026-10-03.[^angular-gh]
- A large architectural migration (Zone.js to signals) done incrementally across six-month majors with migration tooling.[^wiki-angular]
- Early adoption of AI tooling (MCP server in the CLI, "AI-agent friendly" v22).[^angulararchitects-21][^devto-angular22]

# OSS failures / risks
- Single-vendor governance means its future depends on Google's priorities. Flutter shows what happens when Google cuts headcount (see [Flutter](/projects/devtools-languages/flutter.md)).
- Short support windows leave many enterprise apps on EOL versions.[^herodevs-v19-eol]

# Business successes
- Third-party extended support (HeroDevs) is a viable business around Angular's EOL cadence.[^herodevs-v19-eol]

# Business failures / risks
- n/a.

# By window
## W3
- No notable events found (Angular 23 expected around November 2026, unverified).
## W6
- Angular 22 (2026-06-03); Angular 19 EOL (2026-05-19).[^wiki-angular][^herodevs-v19-eol]
## W9
- No notable events found.
## W12
- Angular 21 with zoneless by default (2025-11-19).[^wiki-angular]
## W24
- Angular 19 (2024-11) and 20 (2025-05).[^wiki-angular]

# Lessons
- Signals became the common reactivity model across Angular, Vue Vapor, Svelte runes and Solid. Incumbents can adopt a rival paradigm and regain relevance.
- A fixed release and EOL cadence creates a market for commercial extended support.

# Related
- [TypeScript](/projects/devtools-languages/typescript.md)
- [Vue / Nuxt](/projects/devtools-languages/vue.md)
- [React](/projects/devtools-languages/react.md)

[^wiki-angular]: Wikipedia: Angular (web framework) — release history v18–v22 — https://en.wikipedia.org/wiki/Angular_(web_framework)
[^angulararchitects-21]: ANGULARarchitects: What's new in Angular 21 — Signal Forms, zoneless, Vitest, Angular Aria, CLI with MCP server — https://www.angulararchitects.io/blog/whats-new-in-angular-21-signal-forms-zone-less-vitest-angular-aria-cli-with-mcp-server/
[^devto-angular22]: DEV: Angular 22 is here — everything you need to know — https://dev.to/rigole/angular-22-is-here-everything-you-need-to-know-4g3c
[^angular-v22-blog]: Angular blog: Announcing Angular v22 — https://blog.angular.dev/announcing-angular-v22-c52bb83a4664
[^herodevs-v19-eol]: HeroDevs: Angular 19 reaches End of Life on May 19, 2026 — https://x.com/herodevs/status/2054962997525713181
[^angular-gh]: Angular GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/angular/angular
