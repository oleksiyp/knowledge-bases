---
type: OSS Project
title: Embassy (async Rust embedded)
description: "Community async-Rust embedded framework (HALs for STM32, nRF, RP2040/RP235x, used by Espressif's esp-hal). The breakout of 2025–26: embedded Rust gained vendor backing (esp-hal 1.0 in Oct 2025) and Embassy neared 10k stars, but it remains volunteer-led with thin funding."
resource: https://embassy.dev
tags: [rust, embedded, async, community, memory-safety]
domain: hardware-embedded
license: "MIT OR Apache-2.0"
license_history: ["MIT OR Apache-2.0 (2020-)"]
governance: community
steward: embassy-rs community
backing_orgs: []
metrics:
  github_stars: { value: 9909, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: embassy-gh
    resource: https://github.com/embassy-rs/embassy
    title: Embassy GitHub
  - id: embassy-book
    resource: https://embassy.dev/book/
    title: Embassy Book
  - id: esp-hal-1
    resource: https://developer.espressif.com/blog/2025/10/esp-hal-1/
    title: "Espressif: esp-hal 1.0.0 release announcement (2025-10)"
  - id: esp-hal-beta
    resource: https://developer.espressif.com/blog/2025/02/rust-esp-hal-beta/
    title: "Espressif: esp-hal 1.0.0 beta announcement (2025-02)"
  - id: hn-embassy
    resource: https://news.ycombinator.com/item?id=46547740
    title: "Hacker News: Embassy — modern embedded framework, using Rust and async (2026)"
---

# Summary
Embassy is the standard-bearer for **memory-safe embedded**. It offers async/await executors and HALs for STM32, Nordic nRF and Raspberry Pi RP-series chips.[^embassy-book][^embassy-gh] The big shift in the period was **vendor endorsement of embedded Rust**. Espressif shipped esp-hal 1.0.0-beta in Feb 2025 and 1.0.0 in Oct 2025, calling it "the first vendor-backed Rust SDK" and designing it to work with async executors such as Embassy.[^esp-hal-beta][^esp-hal-1] Embassy reached ~9.9k GitHub stars by Oct 2026,[^embassy-gh] and Hacker News front-page discussion in 2026 shows mainstream interest.[^hn-embassy] Verdict: **growing**. The weakness is governance and funding: there is no foundation or company steward.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02 | esp-hal 1.0 beta, the first vendor-backed Rust SDK[^esp-hal-beta] | OSS | + |
| W12 | 2025-10 | esp-hal 1.0.0 stable[^esp-hal-1] | OSS | + |
| W9 | 2026-01 | Embassy on HN front page[^hn-embassy] | OSS | + |

# OSS successes
- Async on bare metal makes for simpler, lower-power firmware. Silicon vendors are starting to target it.[^esp-hal-1]

# OSS failures / risks
- Volunteer-maintained; no disclosed funding body. Bus-factor risk.

# Business successes
- n/a.

# Business failures / risks
- n/a.

# By window
## W3
- No notable events found (continued commits).[^embassy-gh]
## W6
- No notable events found.
## W9
- HN visibility spike.[^hn-embassy]
## W12
- esp-hal 1.0.[^esp-hal-1]
## W24
- esp-hal beta.[^esp-hal-beta]

# Lessons
- Memory-safety regulation (CRA) and vendor SDK support are what move Rust from hobby to production in embedded.

# Related
- [ESP-IDF](/projects/hardware-embedded/esp-idf.md), [Zephyr](/projects/hardware-embedded/zephyr.md)

[^embassy-gh]: GitHub (stars via API 2026-10-03).
[^embassy-book]: embassy.dev.
[^esp-hal-1]: Espressif developer portal, Oct 2025.
[^esp-hal-beta]: Espressif developer portal, Feb 2025.
[^hn-embassy]: Hacker News.
