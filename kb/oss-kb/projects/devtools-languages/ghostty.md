---
type: OSS Project
title: Ghostty
description: Fast, native, Zig-written terminal emulator by Mitchell Hashimoto; MIT-licensed, became a non-profit project under Hack Club's 501(c)(3) fiscal sponsorship on 2025-12-03 — a deliberate anti-VC model for developer infrastructure.
resource: https://github.com/ghostty-org/ghostty
tags: [terminal-emulator, zig, mit, nonprofit, fiscal-sponsorship]
domain: devtools-languages
license: MIT
license_history: ["MIT (open-sourced Dec 2024)"]
governance: foundation
steward: Hack Club (fiscal sponsor); Mitchell Hashimoto (lead)
backing_orgs: []
metrics:
  github_stars: { value: 61806, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ghostty-gh
    resource: https://github.com/ghostty-org/ghostty
    title: Ghostty GitHub repository (stars via GitHub API, 2026-10-03)
  - id: ghostty-tags
    resource: https://github.com/ghostty-org/ghostty/tags
    title: Ghostty release tags (tag commit dates via GitHub API)
  - id: ghostty-nonprofit
    resource: https://mitchellh.com/writing/ghostty-non-profit
    title: "Mitchell Hashimoto: Ghostty is now non-profit"
  - id: mitchellh-zig
    resource: https://mitchellh.com/writing/zig-donation-2026
    title: "Mitchell Hashimoto: Pledging Another $400,000 to the Zig Software Foundation (2026-06-21)"
  - id: vercel-board
    resource: https://www.streetinsider.com/Business+Wire/Vercel+Appoints+Mitchell+Hashimoto,+Co-Founder+of+HashiCorp+and+Creator+of+Terraform,+to+Board+of+Directors/26184063.html
    title: "Business Wire (via StreetInsider): Vercel Appoints Mitchell Hashimoto to Board of Directors (March 2026)"
  - id: omg-ubuntu-ghostty
    resource: https://www.omgubuntu.co.uk/2026/04/ghostty-terminal-ubuntu-26-04-apt-install
    title: "OMG! Ubuntu: Ghostty terminal is now available in the Ubuntu repos (26.04, April 2026)"
---

# Summary
Ghostty 1.0.0 was tagged on 2024-12-26, followed by 1.1 (2025-01-30), 1.2 (2025-09-15) and 1.3 (2026-03-09); it quickly became one of the most-starred terminal emulators (62k stars).[^ghostty-tags][^ghostty-gh] On 2025-12-03 it became fiscally sponsored by Hack Club, a 501(c)(3): donations are tax-deductible in the US, Hack Club takes 7% for administration, all transactions are public via Hack Club Bank, and Hashimoto's family donated $150,000 to Hack Club.[^ghostty-nonprofit] Hashimoto framed it as protecting infrastructure from commercialization or abandonment, keeping MIT and the technical direction unchanged.[^ghostty-nonprofit] Hashimoto's broader patronage — a further $400k pledge to the Zig Software Foundation (2026-06-21; $700k total since 2024) and a seat on Vercel's board (March 2026) — makes him a notable individual funder in the ecosystem.[^mitchellh-zig][^vercel-board] Verdict: OSS thriving, deliberately no business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-26 | Ghostty 1.0.0 public release (MIT) [^ghostty-tags] | OSS | + |
| W24 | 2025-09-15 | Ghostty 1.2.0 [^ghostty-tags] | OSS | + |
| W12 | 2025-12-03 | Becomes non-profit under Hack Club fiscal sponsorship [^ghostty-nonprofit] | Governance | + |
| W9 | 2026-03-09 | Ghostty 1.3.0 (scrollback search, macOS auto-update; 1.3.1 on 2026-03-13) [^ghostty-tags] | OSS | + |
| W9 | 2026-03 | Hashimoto joins Vercel board [^vercel-board] | Business | = |
| W6 | 2026-04 | Ghostty packaged in Ubuntu 26.04 repositories [^omg-ubuntu-ghostty] | OSS | + |
| W6 | 2026-06-21 | Hashimoto pledges $400k more to ZSF (Ghostty's language) [^mitchellh-zig] | Business | + |
| W3 | 2026-09 | Planned 1.4.0 (six-month cadence) not tagged as of 2026-10-03; latest tag remains v1.3.1 [^ghostty-tags] | OSS | = |

# OSS successes
- Legal structure that makes commercialization or rug-pull impossible without donor-facing accountability.[^ghostty-nonprofit]
- Rapid adoption and active development (pushes daily as of Oct 2026).[^ghostty-gh]

# OSS failures / risks
- Heavy dependence on one founder's funding and leadership.
- Built on Zig, whose pre-1.0 churn and ecosystem shifts (Bun leaving) add risk.

# Business successes
- n/a (explicitly non-commercial).

# Business failures / risks
- n/a.

# By window
## W3
- No release: the planned September 1.4.0 had not been tagged by 2026-10-03 (latest v1.3.1).[^ghostty-tags]
## W6
- Founder's Zig pledge (2026-06-21); Ubuntu 26.04 packaging.[^mitchellh-zig][^omg-ubuntu-ghostty]
## W9
- Ghostty 1.3.0 (2026-03-09).[^ghostty-tags]
## W12
- Non-profit transition (2025-12-03).[^ghostty-nonprofit]
## W24
- 1.0 launch (2024-12-26) and 1.2 (2025-09-15).[^ghostty-tags]

# Lessons
- Wealthy-founder + fiscal sponsor is an emerging alternative to VC for developer tools that want to stay neutral.

# Related
- [Zig](/projects/devtools-languages/zig.md), [Zed](/projects/devtools-languages/zed.md), [Neovim](/projects/devtools-languages/neovim.md)

[^ghostty-gh]: Ghostty GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/ghostty-org/ghostty
[^ghostty-tags]: Ghostty release tags (tag commit dates via GitHub API) — https://github.com/ghostty-org/ghostty/tags
[^ghostty-nonprofit]: Mitchell Hashimoto: Ghostty is now non-profit — https://mitchellh.com/writing/ghostty-non-profit
[^mitchellh-zig]: Mitchell Hashimoto: Pledging Another $400,000 to the ZSF — https://mitchellh.com/writing/zig-donation-2026
[^vercel-board]: Vercel Appoints Mitchell Hashimoto to Board — https://www.streetinsider.com/Business+Wire/Vercel+Appoints+Mitchell+Hashimoto,+Co-Founder+of+HashiCorp+and+Creator+of+Terraform,+to+Board+of+Directors/26184063.html
[^omg-ubuntu-ghostty]: OMG! Ubuntu: Ghostty now in Ubuntu repos — https://www.omgubuntu.co.uk/2026/04/ghostty-terminal-ubuntu-26-04-apt-install
