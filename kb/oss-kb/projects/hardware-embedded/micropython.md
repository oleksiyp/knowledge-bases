---
type: OSS Project
title: MicroPython (and CircuitPython)
description: "Python 3 for microcontrollers (MIT), plus Adafruit's education-focused CircuitPython fork. Steady, healthy releases (v1.26 Aug 2025 → v1.29 Aug 2026; CircuitPython 10.x → 11 alpha), with MicroPython the language of choice on Raspberry Pi Pico and ESP32. Adafruit, its main commercial backer, absorbed heavy US tariffs in 2025."
resource: https://micropython.org
tags: [python, embedded, education, mit, maker]
domain: hardware-embedded
license: MIT
license_history: ["MIT (2014-)"]
governance: community
steward: "MicroPython (George Robotics); CircuitPython: Adafruit Industries"
backing_orgs: []
metrics:
  github_stars: { value: 22105, as_of: 2026-10-03 }
  circuitpython_stars: { value: 4561, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mp-gh
    resource: https://github.com/micropython/micropython
    title: "MicroPython GitHub (v1.27.0 2025-12-09; v1.28.0 2026-04-06; v1.29.0 2026-08-24)"
  - id: mp-126
    resource: https://forums.raspberrypi.com/viewtopic.php?t=390789
    title: "Raspberry Pi Forums: MicroPython 1.26 released (Aug 2025)"
  - id: cp-gh
    resource: https://github.com/adafruit/circuitpython
    title: "CircuitPython GitHub (10.3.1 2026-09-14; 11.0.0-alpha.1 2026-09-24)"
  - id: ada-tariff
    resource: https://adafruit.com/tariffbill
    title: "Adafruit: High tariffs become 'real' with our first $36K bill (2025)"
  - id: ada-memory
    resource: https://blog.adafruit.com/2026/10/02/u-s-onshoring-of-memory-may-increase-costs-for-now
    title: "Adafruit blog: U.S. onshoring of memory may increase costs for now (2026-10-02)"
---

# Summary
MicroPython is the **friendly front door** to embedded development and is **thriving**. Releases came every ~4 months: 1.26 (Aug 2025), 1.27 (Dec 9, 2025, adding ESP32-C5/P4 and STM32U5), 1.28 (Apr 6, 2026) and 1.29 (Aug 24, 2026).[^mp-126][^mp-gh] Adafruit's CircuitPython fork reached 10.3.x and an 11.0 alpha (Sept 2026).[^cp-gh] The business side is Adafruit's hardware store, and it felt the trade war: Adafruit published a $36K tariff bill in 2025 as tariffs on Chinese goods hit 145%,[^ada-tariff] and in Oct 2026 warned that US memory-onshoring tariffs would raise costs further.[^ada-memory] Verdict: OSS **thriving**, business **stable** but under pressure.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04/05 | Adafruit hit with $36K+ tariff bills[^ada-tariff] | Business | − |
| W24 | 2025-08 | MicroPython 1.26[^mp-126] | OSS | + |
| W12 | 2025-12-09 | MicroPython 1.27[^mp-gh] | OSS | + |
| W6 | 2026-04-06 | MicroPython 1.28[^mp-gh] | OSS | + |
| W3 | 2026-08-24 | MicroPython 1.29[^mp-gh] | OSS | + |
| W3 | 2026-09-24 | CircuitPython 11.0.0-alpha.1[^cp-gh] | OSS | + |

# OSS successes
- Predictable cadence, broad port coverage; 22k+ stars.[^mp-gh]

# OSS failures / risks
- Two parallel ecosystems (MicroPython vs CircuitPython) split effort.

# Business successes
- Adafruit stays a profitable-looking independent maker retailer (financials private, unverified).

# Business failures / risks
- Tariffs and the DRAM crunch raise US maker hardware costs.[^ada-tariff][^ada-memory]

# By window
## W3
- MicroPython 1.29; CircuitPython 11 alpha; Adafruit memory-cost warning.[^mp-gh][^cp-gh][^ada-memory]
## W6
- MicroPython 1.28.[^mp-gh]
## W9
- No notable events found.
## W12
- MicroPython 1.27.[^mp-gh]
## W24
- Tariff shock; MicroPython 1.26.[^ada-tariff][^mp-126]

# Lessons
- Education-led OSS has a durable audience, but its funding usually depends on a hardware retailer's margins.

# Related
- [Raspberry Pi](/projects/hardware-embedded/raspberry-pi.md), [ESP-IDF](/projects/hardware-embedded/esp-idf.md), [Arduino](/projects/licensing-forks/arduino.md)

[^mp-gh]: GitHub releases API, 2026-10-03.
[^mp-126]: Raspberry Pi Forums.
[^cp-gh]: GitHub releases API.
[^ada-tariff]: Adafruit.
[^ada-memory]: Adafruit blog, 2026-10-02.
