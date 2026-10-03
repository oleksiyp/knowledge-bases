---
type: OSS Project
title: Firefox
description: "Mozilla's Gecko-based browser; OSS engineering remains strong (last major browser keeping full uBlock Origin support) but trust and share eroded amid a ToU backlash, product cuts and an AI pivot, while Google search money (~86% of revenue) survived the US antitrust remedy."
resource: https://github.com/mozilla-firefox/firefox
tags: [browser, mpl-2.0, gecko, nonprofit-owned, ai-pivot, search-deal-dependency]
domain: end-user-apps
license: MPL-2.0
license_history: ["MPL-2.0 (2012-)"]
governance: single-vendor
steward: Mozilla Corporation (owned by Mozilla Foundation)
backing_orgs: [organizations/mozilla]
metrics:
  revenue_2024_usd: { value: 680409000, as_of: 2024-12-31 }
  google_share_of_revenue: { value: "~86%", as_of: 2024-12-31 }
  desktop_share_north_america: { value: "12.58%", as_of: 2026-06-30 }
oss_verdict: stable
business_verdict: struggling
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-tou
    resource: https://techcrunch.com/2025/03/03/mozilla-rewrites-firefoxs-terms-of-use-after-user-backlash/
    title: "TechCrunch: Mozilla rewrites Firefox's Terms of Use after user backlash"
    author: org:techcrunch
  - id: moz-tou
    resource: https://blog.mozilla.org/en/products/firefox/update-on-terms-of-use/
    title: "Mozilla: An update on our Terms of Use"
  - id: pocket
    resource: https://blog.mozilla.org/en/mozilla/building-whats-next/
    title: "Mozilla: Building what's next (Pocket and Fakespot shutdown)"
  - id: omg-remedy
    resource: https://www.omgubuntu.co.uk/2025/09/google-antitrust-ruling-firefox-search-deal
    title: "OMG! Ubuntu: Google can keep paying for Firefox search deal, judge rules"
  - id: hentzschel-2024
    resource: https://www.soeren-hentzschel.at/mozilla/mozilla-umsatz-2024/
    title: "Sören Hentzschel: Mozilla revenue 2024 (analysis of Mozilla's audited financials)"
  - id: moz-ceo
    resource: https://blog.mozilla.org/en/mozilla/leadership/mozillas-next-chapter-anthony-enzor-demeo-new-ceo/
    title: "Mozilla: Mozilla's next chapter — Anthony Enzor-DeMeo named CEO"
  - id: reg-ceo
    resource: https://www.theregister.com/2025/12/16/mozilla_corporation_new_ceo
    title: "The Register: Mozilla Corporation installs Firefox driver in CEO reboot"
    author: org:the-register
  - id: hn-noai
    resource: https://manualdousuario.net/en/mozilla-firefox-window-ai/
    title: "Manual do Usuário: I think nobody wants AI in Firefox, Mozilla (HN 1,275 points)"
  - id: omg-148
    resource: https://www.omgubuntu.co.uk/2026/02/firefox-148-released-ai-kill-switch
    title: "OMG! Ubuntu: Firefox 148 released with AI kill switch"
  - id: waterfox
    resource: https://www.waterfox.com/blog/no-ai-here-response-to-mozilla/
    title: "Waterfox: No AI* Here – A response to Mozilla's next chapter"
  - id: smart-window
    resource: https://blog.mozilla.org/en/firefox/firefox-smart-window/
    title: "Mozilla: Firefox Smart Window"
  - id: mistral
    resource: https://blog.mozilla.org/en/firefox/mozilla-mistral-partnership/
    title: "Mozilla: Mozilla and Mistral partner to expand AI competition"
  - id: pcw-ubo
    resource: https://www.pcworld.com/article/3212428/firefox-is-now-the-last-major-browser-that-still-supports-ublock-origin.html
    title: "PCWorld: Firefox is now the last major browser that still supports uBlock Origin"
    author: org:pcworld
  - id: statcounter
    resource: https://gs.statcounter.com/browser-market-share/desktop/north-america
    title: "StatCounter: desktop browser market share, North America"
  - id: moz-audit-2024
    resource: https://stateof.mozilla.org/pdf/Mozilla%20Fdn%202024%20-%20AuditedFinancials.pdf
    title: "Mozilla Foundation and Subsidiaries: audited consolidated financial statements, Dec 31 2024 and 2023 (issued 2025-09-26)"
  - id: moz-portfolio
    resource: https://blog.mozilla.org/wp-content/blogs.dir/278/files/2025/11/Mozilla-Summary-Portfolio-Strategy.pdf
    title: "Mozilla 2026–2028 Summary Portfolio Strategy (June 2025, published Nov 2025)"
  - id: tc-fdn-layoffs
    resource: https://techcrunch.com/2024/11/05/mozilla-foundation-lays-off-30-staff-drops-advocacy-division/
    title: "TechCrunch: Mozilla Foundation lays off 30% staff, drops advocacy division (2024-11-05)"
  - id: mozfdn-layoffs
    resource: https://www.theverge.com/2024/11/5/24289124/mozilla-foundation-layoffs-advocacy-global-programs
    title: "The Verge: Mozilla Foundation eliminates advocacy division"
    author: org:the-verge
---
# Summary
Firefox remains a technically healthy, fully open (MPL-2.0) browser engine — the only non-Chromium, non-WebKit engine with meaningful share — and in 2026 became the last major browser still supporting full Manifest V2 ad blockers like uBlock Origin[^pcw-ubo]. Business-wise Mozilla is dependent and drifting: audited 2024 revenue was $680.4M ($498.2M of it search royalties), with ~86% of contract revenue from a single customer (Google), against $588.2M expenses[^moz-audit-2024][^hentzschel-2024], a dependency that survived only because Judge Mehta's September 2025 remedy allowed non-exclusive search payments to continue[^omg-remedy]. Trust took repeated hits (Feb 2025 Terms-of-Use backlash[^tc-tou], Pocket/Fakespot shutdown[^pocket], and a contested "AI browser" strategy under new CEO Anthony Enzor-DeMeo[^moz-ceo]). Verdict: OSS stable, business struggling-but-solvent; 2026 AI features shipped as opt-in with a kill switch, defusing some backlash.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-05 | Mozilla Foundation lays off ~30% and dissolves advocacy division[^mozfdn-layoffs] | Business | − |
| W24 | 2025-02-27 | First Firefox Terms of Use + privacy notice; "never sell your data" removed; backlash, rewrite days later[^tc-tou][^moz-tou] | OSS/Business | − |
| W24 | 2025-05-22 | Pocket and Fakespot shut down to refocus on Firefox[^pocket] | Business | − |
| W24 | 2025-09-02 | Google remedy ruling lets Google keep paying for (non-exclusive) default search[^omg-remedy] | Business | + |
| W12 | 2025-11 | "Nobody wants AI in Firefox" post tops HN after AI Window plans[^hn-noai] | OSS | − |
| W12 | 2025-12-16 | Anthony Enzor-DeMeo becomes Mozilla Corp CEO; says Firefox will become a "modern AI browser" with opt-out controls[^moz-ceo][^reg-ceo] | Business | mixed |
| W12 | 2025-12-16 | Waterfox positions itself as the "No AI" Firefox fork[^waterfox] | OSS | − |
| W12 | 2025-11 | Mozilla publishes 2026–2028 portfolio strategy: target 20%/yr growth in non-search revenue (~$90M in 2025)[^moz-portfolio] | Business | ± |
| W12/W9 | 2025-09-26 → 2026-01 | Audited 2024 financials (issued Sept 26, 2025; analysed Jan 2026): $680.4M revenue, $588.2M expenses, ~86% from one customer, cash $241.8M[^moz-audit-2024][^hentzschel-2024] | Business | mixed |
| W9 | 2026-02-24 | Firefox 148 ships global "AI kill switch" (AI Controls)[^omg-148] | OSS | + |
| W3 | 2026-08 | Firefox described as last major browser supporting uBlock Origin as Edge drops MV2[^pcw-ubo] | OSS | + |
| W3 | 2026-08-18 | Smart Window AI beta (US/Canada, user-chosen model)[^smart-window] | OSS | mixed |
| W3 | 2026-09-16 | Mistral partnership: Mistral Small 4 as model option, Smart Window to France[^mistral] | Business | + |

# OSS successes
- Gecko remains independent and actively maintained; Firefox moved its canonical source to GitHub (mozilla-firefox/firefox) in 2025.
- Full MV2 extension support makes Firefox the default home for serious ad-blocking users as Chromium browsers complete the MV3 transition[^pcw-ubo].
- The AI kill switch (Firefox 148) is a concrete, user-respecting control that blocks all generative AI features in one toggle[^omg-148].

# OSS failures / risks
- Community trust erosion: ToU wording ("you grant us a license") and deletion of "never sell" pledge[^tc-tou]; AI roadmap widely criticized[^hn-noai].
- Forks (Waterfox, LibreWolf, Zen) increasingly brand themselves against Mozilla's decisions[^waterfox] — a sign of a fragmenting downstream.
- Long-running share decline; desktop share in North America ~12.6% (June 2026, StatCounter)[^statcounter].

# Business successes
- Revenue of $680.4M in 2024 (up from $653.0M) with total net assets of $1.41B[^moz-audit-2024].
- Non-search revenue (~$90M in 2025 per Mozilla's own strategy) is targeted to grow 20%/yr[^moz-portfolio].
- The antitrust remedy preserved the search royalty stream rather than banning default payments[^omg-remedy].
- Diversification attempts toward AI model partnerships (Mistral) without disclosed financial terms[^mistral].

# Business failures / risks
- ~86% single-customer (Google) dependency, now on non-exclusive terms that may weaken pricing power over time[^moz-audit-2024][^omg-remedy].
- Expenses grew ~18% in 2024 ($588.2M vs $496.7M) while cash fell ($263.3M → $241.8M); Fakespot shutdown triggered a ~$13.7M impairment[^moz-audit-2024].
- Layoffs: the Mozilla Foundation cut ~30% of staff in Nov 2024[^tc-fdn-layoffs][^mozfdn-layoffs]. Pass-2 searches found no confirmed Mozilla Corporation layoffs in 2025–2026 (only unverified employee-review chatter).
- Repeated product shutdowns (Pocket, Fakespot) and Foundation layoffs signal strategic churn[^pocket][^mozfdn-layoffs].

# By window
## W3
- Smart Window AI beta launched (Aug 18) and expanded to France with Mistral (Sep 16)[^smart-window][^mistral].
- Firefox becomes the de facto uBlock Origin browser[^pcw-ubo].
## W6
- No major Firefox business events found; steady releases. Desktop NA share 12.58% (June)[^statcounter].
## W9
- Firefox 148 ships AI kill switch (Feb 24)[^omg-148]; 2024 financials analysed[^hentzschel-2024].
## W12
- 2026–2028 portfolio strategy with non-search revenue targets[^moz-portfolio].
- New CEO Enzor-DeMeo with AI-browser strategy (Dec 16)[^moz-ceo]; AI backlash peaks[^hn-noai].
## W24
- ToU controversy (Feb 2025)[^tc-tou]; Pocket/Fakespot killed (May 2025)[^pocket]; remedy ruling saves search deal (Sep 2025)[^omg-remedy].

# Lessons
- A nonprofit-owned browser funded by its main competitor is structurally fragile; antitrust can rescue or kill it.
- Legal-text changes (ToU) can cost more trust than any product change; communicate before shipping.
- When adding AI to a privacy brand, an explicit, persistent opt-out is the minimum viable trust mechanism.

# Related
- [Mozilla](/organizations/mozilla.md)
- [Google search remedy event](/events/2025-09-google-search-remedy-mozilla.md)
- [Firefox Terms of Use backlash](/events/2025-02-firefox-terms-of-use-backlash.md)
- [Thunderbird](/projects/end-user-apps/thunderbird.md), [Ladybird](/projects/end-user-apps/ladybird.md), [Brave](/projects/end-user-apps/brave.md)

[^tc-tou]: https://techcrunch.com/2025/03/03/mozilla-rewrites-firefoxs-terms-of-use-after-user-backlash/
[^moz-tou]: https://blog.mozilla.org/en/products/firefox/update-on-terms-of-use/
[^pocket]: https://blog.mozilla.org/en/mozilla/building-whats-next/
[^omg-remedy]: https://www.omgubuntu.co.uk/2025/09/google-antitrust-ruling-firefox-search-deal
[^hentzschel-2024]: https://www.soeren-hentzschel.at/mozilla/mozilla-umsatz-2024/
[^moz-ceo]: https://blog.mozilla.org/en/mozilla/leadership/mozillas-next-chapter-anthony-enzor-demeo-new-ceo/
[^reg-ceo]: https://www.theregister.com/2025/12/16/mozilla_corporation_new_ceo
[^hn-noai]: https://manualdousuario.net/en/mozilla-firefox-window-ai/
[^omg-148]: https://www.omgubuntu.co.uk/2026/02/firefox-148-released-ai-kill-switch
[^waterfox]: https://www.waterfox.com/blog/no-ai-here-response-to-mozilla/
[^smart-window]: https://blog.mozilla.org/en/firefox/firefox-smart-window/
[^mistral]: https://blog.mozilla.org/en/firefox/mozilla-mistral-partnership/
[^pcw-ubo]: https://www.pcworld.com/article/3212428/firefox-is-now-the-last-major-browser-that-still-supports-ublock-origin.html
[^statcounter]: https://gs.statcounter.com/browser-market-share/desktop/north-america
[^moz-audit-2024]: https://stateof.mozilla.org/pdf/Mozilla%20Fdn%202024%20-%20AuditedFinancials.pdf
[^moz-portfolio]: https://blog.mozilla.org/wp-content/blogs.dir/278/files/2025/11/Mozilla-Summary-Portfolio-Strategy.pdf
[^tc-fdn-layoffs]: https://techcrunch.com/2024/11/05/mozilla-foundation-lays-off-30-staff-drops-advocacy-division/
[^mozfdn-layoffs]: https://www.theverge.com/2024/11/5/24289124/mozilla-foundation-layoffs-advocacy-global-programs
