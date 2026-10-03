---
type: OSS Project
title: Ladybird
description: Independent, from-scratch web browser engine run by the nonprofit Ladybird Browser Initiative; donor-funded (Cloudflare, Shopify, FUTO, Proton, 37signals), adopting Rust with AI assistance, and in June 2026 closed public pull requests ahead of its first alpha.
resource: https://github.com/LadybirdBrowser/ladybird
tags: [web-browser, browser-engine, bsd-2-clause, nonprofit, donor-funded]
domain: devtools-languages
license: BSD-2-Clause
license_history: ["BSD-2-Clause (2018-, inherited from SerenityOS)"]
governance: foundation
steward: Ladybird Browser Initiative (nonprofit)
backing_orgs: []
metrics:
  github_stars: { value: 66397, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: n/a
momentum_by_window: { W3: up, W6: down, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ladybird-gh
    resource: https://github.com/LadybirdBrowser/ladybird
    title: Ladybird GitHub repository (stars via GitHub API, 2026-10-03)
  - id: wiki-ladybird
    resource: https://en.wikipedia.org/wiki/Ladybird_(web_browser)
    title: "Wikipedia: Ladybird (web browser)"
  - id: ladybird-site
    resource: https://ladybird.org/
    title: "Ladybird homepage (501(c)(3) nonprofit, sponsor tiers, 'Alpha 2026 (Linux & macOS)')"
  - id: heise-wanstrath
    resource: https://www.heise.de/en/news/Ladybird-web-browser-takes-off-One-million-US-dollars-from-GitHub-founder-9789840.html
    title: "heise: Ladybird web browser takes off — one million US dollars from GitHub founder (2024-07)"
  - id: ladybird-feb26
    resource: https://ladybird.org/newsletter/2026-02-28/
    title: "This Month in Ladybird — February 2026 (Rust LibJS frontend landed; Swift removed)"
  - id: heise-rust
    resource: https://www.heise.de/en/news/Ladybird-browser-integrates-Rust-with-AI-help-11187278.html
    title: "heise: Ladybird browser integrates Rust with AI help (2026-02)"
  - id: ladybird-dev-change
    resource: https://ladybird.org/posts/changing-how-we-develop-ladybird/
    title: "Ladybird: Changing How We Develop Ladybird (2026-06-05)"
  - id: thestack-ladybird
    resource: https://www.thestack.technology/cult-browser-project-cuts-off-community-committers/
    title: "The Stack: Cult browser project Ladybird cuts off code community"
  - id: ladybird-aug26
    resource: https://ladybird.org/newsletter/2026-08-31/
    title: "This Month in Ladybird — August 2026 (CSS parsing & painting moved to Rust; alpha still planned for 2026)"
---

# Summary
Ladybird is the most credible new independent browser engine in a decade. It is run by the 501(c)(3) Ladybird Browser Initiative, launched in July 2024 with $1M from GitHub co-founder Chris Wanstrath, and is funded purely by unrestricted donations — platinum sponsors FUTO, Shopify and Cloudflare, gold sponsors Human Rights Foundation and Proton VPN, plus 37signals and many others.[^heise-wanstrath][^ladybird-site] In February 2026 it removed all its Swift code and landed a Rust reimplementation of the LibJS frontend (lexer, parser, AST, bytecode generator; ~25k lines in two weeks with Claude Code and Codex, byte-identical output across 65k+ tests); by August 2026 CSS parsing and the painting pipeline had also moved to Rust.[^ladybird-feb26][^heise-rust][^ladybird-aug26] On 2026-06-05 it stopped accepting pull requests from non-maintainers, citing security and the unreliability of AI-era PRs as a signal of contributor effort — still open source in license, no longer open in contribution.[^ladybird-dev-change][^thestack-ladybird] Alpha (Linux & macOS) is still planned for 2026; WPT passing subtests reached ~2.09M by end of August 2026.[^ladybird-aug26] Verdict: contested — strong technical trajectory, but the contribution lockdown is a notable governance retreat.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025 | Steady conformance gains; Cloudflare among new sponsors [^ladybird-site][^wiki-ladybird] | OSS | + |
| W9 | 2026-02 | Rust LibJS frontend lands (AI-assisted port, 65k+ tests identical); Swift code removed; WPT ~1.998M passing [^ladybird-feb26][^heise-rust] | OSS | + |
| W6 | 2026-06-05 | Closes public PRs/patches from non-maintainers; open PRs closed [^ladybird-dev-change][^thestack-ladybird] | Governance | − |
| W3 | 2026-08 | CSS parsing, computed style and painting pipeline move to Rust; MSE video (Twitch), JS debugger; WPT 2,088,677 subtests [^ladybird-aug26] | OSS | + |
| W3 | 2026 (planned) | First alpha (Linux & macOS) still targeted for 2026; not released as of 2026-10-03 [^ladybird-aug26][^ladybird-site] | OSS | = |

# OSS successes
- Rapid standards conformance gains with a small team (WPT ~1.998M → ~2.089M passing subtests Feb → Aug 2026).[^ladybird-feb26][^ladybird-aug26]
- Diversified donor base of companies wanting browser-engine plurality.[^ladybird-site]
- Rust migration executed incrementally with test-verified equivalence.[^ladybird-feb26]

# OSS failures / risks
- Closing contributions undermines the community model and bus factor.[^ladybird-dev-change][^thestack-ladybird]
- Large AI-assisted rewrites carry review/security risk in a browser.[^heise-rust]
- Language churn: Swift adopted in 2024 then removed in favour of Rust in 2026.[^ladybird-feb26]

# Business successes
- Donor funding sustains a paid team without commercial pressure; "no search deals, no data collection, no ads".[^ladybird-site]

# Business failures / risks
- Long road to stable (beta 2027, stable 2028 per project roadmap); funding depends on continued sponsor goodwill.[^wiki-ladybird]

# By window
## W3
- CSS/painting moved to Rust, MSE video, JS debugger (August 2026 update); alpha preparation continues — no alpha release found as of 2026-10-03.[^ladybird-aug26]
## W6
- Public PRs closed (2026-06-05).[^ladybird-dev-change]
## W9
- Rust LibJS frontend; Swift dropped (Feb 2026).[^ladybird-feb26][^heise-rust]
## W12
- No notable events found.
## W24
- Sponsor base broadens (Cloudflare, FUTO, Shopify platinum tier).[^ladybird-site]

# Lessons
- Donation-funded nonprofits can now build ambitious infrastructure (browser engines) without VC — but may restrict outside contributions to control quality.
- AI coding tools cut both ways: they made the Rust port fast, and they made outside PRs untrustworthy enough to close the door.

# Related
- [Servo](/projects/devtools-languages/servo.md), [Rust](/projects/devtools-languages/rust.md), [Swift](/projects/devtools-languages/swift.md)

[^ladybird-gh]: Ladybird GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/LadybirdBrowser/ladybird
[^wiki-ladybird]: Wikipedia: Ladybird (web browser) — https://en.wikipedia.org/wiki/Ladybird_(web_browser)
[^ladybird-site]: Ladybird homepage — https://ladybird.org/
[^heise-wanstrath]: heise: Ladybird web browser takes off — https://www.heise.de/en/news/Ladybird-web-browser-takes-off-One-million-US-dollars-from-GitHub-founder-9789840.html
[^ladybird-feb26]: This Month in Ladybird — February 2026 — https://ladybird.org/newsletter/2026-02-28/
[^heise-rust]: heise: Ladybird browser integrates Rust with AI help — https://www.heise.de/en/news/Ladybird-browser-integrates-Rust-with-AI-help-11187278.html
[^ladybird-dev-change]: Ladybird: Changing How We Develop Ladybird — https://ladybird.org/posts/changing-how-we-develop-ladybird/
[^thestack-ladybird]: The Stack: Ladybird cuts off code community — https://www.thestack.technology/cult-browser-project-cuts-off-community-committers/
[^ladybird-aug26]: This Month in Ladybird — August 2026 — https://ladybird.org/newsletter/2026-08-31/
