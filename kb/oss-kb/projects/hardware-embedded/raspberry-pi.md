---
type: OSS Project
title: Raspberry Pi platform (Raspberry Pi OS, RP2040/RP2350, SBCs)
description: "Partly open single-board-computer and microcontroller platform: Raspberry Pi OS, open Pico SDK, an open-source Hazard3 RISC-V core in RP2350, and documented hardware. Its listed parent was the domain's best business story of 2026. Hoarding DRAM ahead of the AI-driven memory crunch produced a 90% H1 revenue jump while smaller SBC makers stalled."
resource: https://www.raspberrypi.com
tags: [sbc, microcontroller, maker, education, public-company, dram-crisis]
domain: hardware-embedded
license: "Mixed: Raspberry Pi OS (Debian-based, GPL etc.), Pico SDK BSD-3-Clause; boards proprietary designs with open documentation"
license_history: ["Unchanged"]
governance: company-led-open-core
steward: "Raspberry Pi Holdings plc (LSE: RPI)"
backing_orgs: [organizations/raspberry-pi-holdings]
metrics:
  fy2025_revenue_usd: { value: "323.2M", as_of: 2025-12-31 }
  h1_2026_revenue_usd: { value: "256.9M", as_of: 2026-06-30 }
oss_verdict: stable
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: rpi-fy25
    resource: https://www.investegate.co.uk/announcement/rns/raspberry-pi-holdings-wi---rpi/fy-2025-results/9499135
    title: "Raspberry Pi Holdings: FY 2025 Results (RNS, 2026-03-31)"
  - id: tnw-h1
    resource: https://thenextweb.com/news/raspberry-pi-record-first-half-memory-stockpile
    title: "The Next Web: Raspberry Pi's revenue jumps 90% as its memory stockpile pays off (2026-09)"
  - id: yahoo-fall9
    resource: https://finance.yahoo.com/markets/stocks/articles/raspberry-pi-shares-fall-9-101447219.html
    title: "Reuters/Yahoo: Raspberry Pi shares fall 9% after record H1 results trigger profit-taking (2026-09-25)"
  - id: reg-price
    resource: https://www.theregister.com/2026/02/02/raspberry_pi_ram_shortage_price_hike/
    title: "The Register: RAM shortage bumps Raspberry Pi prices as much as $60 (2026-02-02)"
  - id: toms-third-hike
    resource: https://www.tomshardware.com/raspberry-pi/component-shortages-drive-raspberry-pi-prices-up-by-up-to-23-percent-escalating-lpddr4-lpddr5-costs-trigger-the-third-price-hike-of-the-year
    title: "Tom's Hardware: Memory shortages drive Raspberry Pi prices up — third price hike"
  - id: geerling-dram
    resource: https://www.jeffgeerling.com/blog/2026/dram-pricing-is-killing-the-hobbyist-sbc-market/
    title: "Jeff Geerling: DRAM pricing is killing the hobbyist SBC market (2026-04-01)"
  - id: lse-ipo
    resource: https://www.lse.co.uk/news/raspberry-pi-prices-ipo-at-280p-per-share-b3p36jw77voaklw.html
    title: "LSE.co.uk: Raspberry Pi prices IPO at 280p per share (2024-06-11)"
---

# Summary
Raspberry Pi is a **business success built on an open-ish platform**. The company listed in London in June 2024 at 280p.[^lse-ipo] FY2025 brought revenue of $323.2M (+25%), PBT of $26.5M (+63%) and 7.6M units. For the first time microcontroller shipments (8.4M, RP2040/RP2350) exceeded board sales.[^rpi-fy25] Then the AI-driven DRAM shortage hit. Raspberry Pi raised prices three times in five months (Dec 2025–Apr 2026; the 16GB Pi 5 rose $100 in total).[^reg-price][^toms-third-hike] But it had stockpiled memory in 2025, so H1 2026 revenue rose 90% to $256.9M and PBT 216% to $19.6M, while smaller SBC vendors could not get allocation.[^tnw-h1] Jeff Geerling called the hobbyist SBC market "on life support".[^geerling-dram] Shares jumped and then fell 9% as analysts flagged that the ~$15M inventory windfall won't recur.[^yahoo-fall9] Verdict: business **thriving**, OSS **stable**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2024-06-11 | LSE IPO at 280p (£541.6M market cap)[^lse-ipo] | Business | + |
| W9 | 2026-02-02 | Second memory-driven price rise in two months (+$10 to +$60)[^reg-price] | Business | − |
| W9 | 2026-03-31 | FY2025: revenue $323.2M, MCU units exceed boards[^rpi-fy25] | Business | + |
| W6 | 2026-04-01 | Third price hike; 16GB Pi 5 up $100 overall[^toms-third-hike][^geerling-dram] | Business | − |
| W3 | 2026-09-24 | H1 2026: revenue +90% to $256.9M, PBT +216%[^tnw-h1] | Business | + |
| W3 | 2026-09-25 | Shares fall 9% on profit-taking and windfall caveats[^yahoo-fall9] | Business | ± |

# OSS successes
- RP2040/RP2350 microcontrollers with open SDKs became a mass-market MCU franchise (8.4M units in 2025).[^rpi-fy25]
- The platform anchors MicroPython, Home Assistant hardware and education ecosystems.

# OSS failures / risks
- The boot firmware and VideoCore blobs remain closed. The "open" reputation outruns the reality.

# Business successes
- Record H1 2026, with supplier base widened from 2 to 7 memory partners and the credit facility raised to $140M.[^tnw-h1]

# Business failures / risks
- Hobbyist price elasticity: Pi Zero sales fell 9%, and the H2 2026 margin windfall fades.[^tnw-h1][^yahoo-fall9]

# By window
## W3
- Record H1 results and the share-price whipsaw.[^tnw-h1][^yahoo-fall9]
## W6
- Third DRAM price increase.[^toms-third-hike]
## W9
- February price increase; FY2025 results.[^reg-price][^rpi-fy25]
## W12
- First memory-driven price increase (Dec 2025), per The Register's "second in two months".[^reg-price]
## W24
- No notable events found in window (IPO was June 2024).

# Lessons
- Supply-chain execution beats openness in a component crisis. The biggest vendor's scale protected it while small open-hardware makers (Pine64) stopped production.
- A two-franchise model (boards plus MCUs) diversifies an open-platform company.

# Related
- [Raspberry Pi Holdings](/organizations/raspberry-pi-holdings.md), [Event: DRAM crunch halts small open-hardware makers](/events/2026-08-dram-shortage-pine64-halts-production.md), [MicroPython](/projects/hardware-embedded/micropython.md), [Home Assistant](/projects/end-user-apps/home-assistant.md)

[^rpi-fy25]: Raspberry Pi Holdings RNS, 2026-03-31.
[^tnw-h1]: The Next Web, Sept 2026.
[^yahoo-fall9]: Yahoo Finance (Reuters), 2026-09-25.
[^reg-price]: The Register, 2026-02-02.
[^toms-third-hike]: Tom's Hardware.
[^geerling-dram]: Jeff Geerling, 2026-04-01.
[^lse-ipo]: LSE.co.uk, 2024-06-11.
