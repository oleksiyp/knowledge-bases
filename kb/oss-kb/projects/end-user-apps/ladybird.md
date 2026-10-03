---
type: OSS Project
title: Ladybird
description: "Independent from-scratch web browser engine run by a donor-funded nonprofit; strong technical momentum (90%+ WPT parity milestone, Rust adoption) and corporate sponsors, but closed to outside PRs in 2026 ahead of its planned alpha."
resource: https://github.com/LadybirdBrowser/ladybird
tags: [browser, bsd-2-clause, nonprofit, donor-funded, rust-migration, ai-assisted-development]
domain: end-user-apps
license: BSD-2-Clause
license_history: ["BSD-2-Clause (2022-)"]
governance: community
steward: Ladybird Browser Initiative (US 501(c)(3) nonprofit)
backing_orgs: []
metrics:
  github_stars: { value: 66397, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: up, W12: up, W24: up }
status: pre-alpha
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/LadybirdBrowser/ladybird
    title: Ladybird GitHub repository
    last_modified: 2026-10-03T00:00:00Z
  - id: wiki
    resource: https://en.wikipedia.org/wiki/Ladybird_(web_browser)
    title: "Wikipedia: Ladybird (web browser)"
  - id: cf
    resource: https://blog.cloudflare.com/supporting-the-future-of-the-open-web/
    title: "Cloudflare: Supporting the future of the open web (sponsoring Ladybird and Omarchy)"
  - id: wpt
    resource: https://twitter.com/awesomekling/status/1974781722953953601
    title: "Andreas Kling: Ladybird passes the Apple 90% threshold on web-platform-tests"
  - id: rust
    resource: https://ladybird.org/posts/adopting-rust/
    title: "Ladybird: Adopting Rust, with help from AI"
  - id: devchange
    resource: https://ladybird.org/posts/changing-how-we-develop-ladybird/
    title: "Ladybird: Changing how we develop Ladybird"
  - id: news-aug26
    resource: https://ladybird.org/newsletter/2026-08-31/
    title: "This Month in Ladybird – August 2026"
  - id: pwn
    resource: https://jessie.cafe/posts/pwning-ladybirds-libjs/
    title: "Pwning the Ladybird browser (LibJS security writeup)"
  - id: heise-1m
    resource: https://www.heise.de/en/news/Ladybird-web-browser-takes-off-One-million-US-dollars-from-GitHub-founder-9789840.html
    title: "heise: Ladybird web browser takes off — one million US dollars from GitHub founder (2024-07)"
    author: org:heise
---
# Summary
Ladybird is the most credible new browser engine in a decade: a from-scratch, BSD-licensed engine funded purely by donations and sponsorships (no search deals), with a 501(c)(3) nonprofit, the Ladybird Browser Initiative, co-founded in July 2024 by Andreas Kling and GitHub co-founder Chris Wanstrath with $1M from Wanstrath[^heise-1m]. Over two years it moved from curiosity to near-parity on many web-platform tests (passing "Apple's 90% threshold" in Oct 2025[^wpt]), attracted sponsors including Cloudflare, Shopify, FUTO, Proton and 37signals[^heise-1m][^cf], and in Feb 2026 began porting its JS front-end to Rust with heavy AI assistance[^rust]. In June 2026 it stopped accepting public pull requests from non-maintainers to protect quality and security before alpha[^devchange] — a notable governance tightening. Alpha is planned for 2026, beta 2027, stable 2028[^wiki].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-28 | "Welcome to Ladybird" repo announcement trends (994 HN points)[^gh] | OSS | + |
| W24 | 2025-03 | Ranked 4th on WPT; JS engine 2nd most conformant after SpiderMonkey (per Wikipedia, citing wpt.fyi; not re-checked)[^wiki] | OSS | + |
| W24 | 2025-04-30 | Public LibJS exploitation write-up highlights security immaturity[^pwn] | OSS | − |
| W24 | 2025-09-22 | Cloudflare sponsors Ladybird (and Omarchy)[^cf] | Business | + |
| W12 | 2025-10-06 | Passes Apple's 90% WPT threshold[^wpt] | OSS | + |
| W9 | 2026-02-23 | Begins porting JS parser/bytecode generator to Rust, assisted by Claude Code and Codex[^rust] | OSS | + |
| W6 | 2026-06-05 | Stops accepting public PRs from non-maintainers ahead of alpha[^devchange] | OSS | mixed |
| W3 | 2026-08-31 | Monthly progress continues (Aug 2026 newsletter)[^news-aug26] | OSS | + |

# OSS successes
- Rapid standards conformance growth; independent engine diversity[^wpt].
- 66k+ GitHub stars (2026-10-03)[^gh]; strong public engagement with each monthly newsletter.
- Pragmatic migration to Rust using AI coding agents — one of the most visible AI-assisted large-scale ports in OSS[^rust].

# OSS failures / risks
- Closing public PRs reduces community on-ramp and bus factor; criticized as a move toward a "cathedral" model[^devchange].
- Security maturity still low (public exploit write-ups)[^pwn]; no usable release for end users yet.

# Business successes
- Funding entirely via donations/sponsorships with no product monetization pressure; multi-sponsor base (Cloudflare, Shopify, FUTO, Proton, 37signals)[^heise-1m][^cf].

# Business failures / risks
- Sponsor-dependence; amounts per sponsor not publicly verified here. A multi-year runway to 2028 stable requires sustained donor interest.

# By window
## W3
- Continued monthly progress reports; no alpha shipped yet as of 2026-10-03[^news-aug26].
## W6
- Public PR closure (June 5)[^devchange].
## W9
- Rust adoption with AI assistance (Feb 23)[^rust].
## W12
- 90% WPT threshold (Oct 6)[^wpt].
## W24
- Broad publicity, Cloudflare sponsorship, security research scrutiny[^cf][^pwn].

# Lessons
- Donor-funded engine development can work when a credible lead and clear milestones exist.
- AI-assisted language migration is becoming a realistic tool for large codebases.
- Pre-alpha projects may trade openness to contributions for velocity; this tension is now explicit.

# Related
- [Firefox](/projects/end-user-apps/firefox.md), [Omarchy](/projects/end-user-apps/omarchy.md) (fellow Cloudflare sponsee)

[^gh]: https://github.com/LadybirdBrowser/ladybird
[^wiki]: https://en.wikipedia.org/wiki/Ladybird_(web_browser)
[^cf]: https://blog.cloudflare.com/supporting-the-future-of-the-open-web/
[^wpt]: https://twitter.com/awesomekling/status/1974781722953953601
[^rust]: https://ladybird.org/posts/adopting-rust/
[^devchange]: https://ladybird.org/posts/changing-how-we-develop-ladybird/
[^news-aug26]: https://ladybird.org/newsletter/2026-08-31/
[^pwn]: https://jessie.cafe/posts/pwning-ladybirds-libjs/
[^heise-1m]: https://www.heise.de/en/news/Ladybird-web-browser-takes-off-One-million-US-dollars-from-GitHub-founder-9789840.html
