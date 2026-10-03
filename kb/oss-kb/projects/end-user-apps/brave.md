---
type: OSS Project
title: Brave
description: "MPL-2.0 Chromium-based privacy browser from Brave Software; passed 100M monthly active users in Oct 2025, the commercial success story among Chromium forks."
resource: https://github.com/brave/brave-browser
tags: [browser, chromium-fork, mpl-2.0, ad-funded, privacy]
domain: end-user-apps
license: MPL-2.0
license_history: ["MPL-2.0 (2016-)"]
governance: single-vendor
steward: Brave Software Inc.
backing_orgs: []
metrics:
  monthly_active_users: { value: 100000000, as_of: 2025-10-01 }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mau
    resource: https://brave.com/blog/100m-mau/
    title: "Brave blog: Brave passes 100M monthly active users"
  - id: bc
    resource: https://www.bleepingcomputer.com/news/software/brave-browser-surpasses-the-100-million-active-monthly-users-mark/
    title: "BleepingComputer: Brave browser surpasses the 100 million active monthly users mark"
    author: org:bleepingcomputer
  - id: origin
    resource: https://brave.com/blog/brave-origin/
    title: "Brave blog: Brave Origin, a minimalist version of Brave"
  - id: containers
    resource: https://brave.com/blog/containers/
    title: "Brave blog: Containers"
  - id: pcw-ubo
    resource: https://www.pcworld.com/article/3212428/firefox-is-now-the-last-major-browser-that-still-supports-ublock-origin.html
    title: "PCWorld: Firefox is now the last major browser that still supports uBlock Origin"
---
# Summary
Brave is the commercially successful open-source Chromium fork: it reached 100 million monthly active users in October 2025[^mau][^bc], funded by its own search, ads and subscription products. In 2026 it shipped a stripped-down "Brave Origin" (June)[^origin] and Firefox-style Containers (July)[^containers], partly in response to users wanting a browser without crypto/AI extras. Its Chromium base ties it to Google's Manifest V3 path for extensions (its built-in Shields adblocker is native, mitigating the loss of MV2)[^pcw-ubo]. Verdict: OSS stable (vendor-led), business growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-10-01 | Passes 100M MAU[^mau] | Business | + |
| W6 | 2026-06-04 | Brave Origin minimalist edition[^origin] | OSS | + |
| W6 | 2026-07-02 | Containers feature[^containers] | OSS | + |
| W3 | 2026-08 | Chromium MV2 phase-out leaves Firefox as last major uBlock Origin browser[^pcw-ubo] | OSS | − |

# OSS successes
- Open code (MPL-2.0) with native adblocking independent of extension APIs.
# OSS failures / risks
- Dependence on upstream Chromium; vendor-controlled governance.
# Business successes
- 100M MAU milestone[^mau]; diversified own-search/ads/subscription revenue (figures not disclosed).
# Business failures / risks
- User skepticism about crypto/AI bundling motivated the "Origin" product[^origin].

# By window
## W3
- MV2 end across Chromium browsers (affects extension users)[^pcw-ubo].
## W6
- Brave Origin and Containers[^origin][^containers].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- 100M MAU (Oct 1, 2025)[^mau].

# Lessons
- A Chromium fork can thrive if it owns a differentiated revenue stream (own search/ads) rather than relying on Google.
- Offering a "minimal" edition is a response to feature-bloat backlash, as seen across browsers in 2025–26.

# Related
- [Firefox](/projects/end-user-apps/firefox.md), [Ladybird](/projects/end-user-apps/ladybird.md)

[^mau]: https://brave.com/blog/100m-mau/
[^bc]: https://www.bleepingcomputer.com/news/software/brave-browser-surpasses-the-100-million-active-monthly-users-mark/
[^origin]: https://brave.com/blog/brave-origin/
[^containers]: https://brave.com/blog/containers/
[^pcw-ubo]: https://www.pcworld.com/article/3212428/firefox-is-now-the-last-major-browser-that-still-supports-ublock-origin.html
