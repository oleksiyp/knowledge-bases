---
type: OSS Project
title: Homebrew
description: The volunteer-run macOS/Linux package manager under the Open Source Collective; shipped 5.0 (Nov 2025), 6.0 (Jun 2026, tap trust, Linux sandboxing) and 7.0 (Sep 2026, built-in vulnerability checks, native macOS app) — stable, unglamorous, no business.
resource: https://github.com/Homebrew/brew
tags: [package-manager, macos, linux, bsd-2-clause, volunteer, open-source-collective]
domain: devtools-languages
license: BSD-2-Clause
license_history: ["BSD-2-Clause (2009-)"]
governance: community
steward: Homebrew maintainers (Open Source Collective fiscal host)
backing_orgs: []
metrics:
  github_stars: { value: 49877, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: brew-gh
    resource: https://github.com/Homebrew/brew
    title: Homebrew GitHub repository (stars via GitHub API, 2026-10-03)
  - id: wiki-brew
    resource: https://en.wikipedia.org/wiki/Homebrew_(package_manager)
    title: "Wikipedia: Homebrew (package manager)"
  - id: brew-blog
    resource: https://brew.sh/blog/
    title: "Homebrew blog (4.5.0 2025-04-29; 4.6.0 2025-08-05; 5.0.0 2025-11-12; 5.1.0 2026-03-10; 6.0.0 2026-06-11; 7.0.0 2026-09-13)"
  - id: brew-releases
    resource: https://github.com/Homebrew/brew/releases
    title: "Homebrew/brew GitHub releases (dates via GitHub API, checked 2026-10-03)"
---

# Summary
Homebrew remains the default developer package manager on macOS and a common one on Linux, run by volunteers as a member of the Open Source Collective.[^wiki-brew] It moved to a faster major-version cadence: 4.5 (2025-04-29, official support tiers), 4.6 (2025-08-05, opt-in concurrent downloads, built-in `brew mcp-server`), **5.0 (2025-11-12)** with concurrent downloads by default and official Linux ARM64 support, 5.1 (2026-03-10), **6.0 (2026-06-11)** with a tap-trust security mechanism, faster JSON API and Linux sandboxing, and **7.0 (2026-09-13)** with stronger sandboxing, a built-in vulnerability/advisory database, a native macOS app, and Intel Macs demoted to Tier 3.[^brew-blog][^brew-releases] Verdict: stable-to-growing; a model of low-drama volunteer stewardship that is steadily absorbing supply-chain security work, with the usual bus-factor risk.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-29 | Homebrew 4.5.0 (official support tiers; preliminary Linux casks) [^brew-blog] | OSS | + |
| W24 | 2025-08-05 | Homebrew 4.6.0 (opt-in concurrent downloads; `brew mcp-server`) [^brew-blog] | OSS | + |
| W12 | 2025-11-12 | Homebrew 5.0: concurrent downloads default, official Linux ARM64, Intel deprecation timeline [^brew-blog][^brew-releases] | OSS | + |
| W9 | 2026-03-10 | Homebrew 5.1 (`brew version-install`, bundle improvements) [^brew-blog] | OSS | = |
| W6 | 2026-06-11 | Homebrew 6.0: tap trust, faster JSON API, Linux sandboxing [^brew-blog][^brew-releases] | OSS | + |
| W3 | 2026-09-13 | Homebrew 7.0: built-in vulnerability checks/advisory DB, stronger sandboxing, native macOS app; macOS 10.15 dropped, Intel to Tier 3 [^brew-blog][^brew-releases] | OSS | + |

# OSS successes
- Continuous supply-chain hardening (attestations, tap trust, sandboxing, vulnerability checks) without corporate sponsorship.[^brew-blog]

# OSS failures / risks
- Volunteer-run; dropping Intel/old macOS support may strand users.[^wiki-brew][^brew-blog]

# Business successes
- n/a.

# Business failures / risks
- n/a.

# By window
## W3
- Homebrew 7.0 (2026-09-13).[^brew-blog]
## W6
- Homebrew 6.0 (2026-06-11).[^brew-blog]
## W9
- Homebrew 5.1 (2026-03-10).[^brew-blog]
## W12
- Homebrew 5.0 (2025-11-12).[^brew-blog]
## W24
- 4.5.0 and 4.6.0.[^brew-blog]

# Lessons
- Mature, volunteer-run infrastructure can stay healthy when scope is disciplined and releases are incremental.
- Package managers are becoming security products (attestation, sandboxing, advisory DBs) regardless of who funds them.

# Related
- [npm registry](/projects/devtools-languages/npm-registry.md), [uv](/projects/devtools-languages/uv.md)

[^brew-gh]: Homebrew GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/Homebrew/brew
[^wiki-brew]: Wikipedia: Homebrew (package manager) — https://en.wikipedia.org/wiki/Homebrew_(package_manager)
[^brew-blog]: Homebrew blog — https://brew.sh/blog/
[^brew-releases]: Homebrew/brew GitHub releases — https://github.com/Homebrew/brew/releases
