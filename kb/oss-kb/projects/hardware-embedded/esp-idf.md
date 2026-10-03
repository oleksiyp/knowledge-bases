---
type: OSS Project
title: ESP-IDF (Espressif IoT Development Framework)
description: "Apache-2.0 SDK for Espressif's ESP32 family, the most popular maker/IoT Wi-Fi MCUs. It shows how open-source tooling sells silicon: Espressif revenue grew 27.8% to CNY 2.57B in 2025, ESP-IDF 6.0 shipped (Mar 2026), and Rust esp-hal reached 1.0. Blemish: the March 2025 'ESP32 backdoor' scare (CVE-2025-27840)."
resource: https://github.com/espressif/esp-idf
tags: [sdk, embedded, iot, esp32, vendor-open-source, apache-2.0]
domain: hardware-embedded
license: Apache-2.0
license_history: ["Apache-2.0 (2016-)"]
governance: single-vendor
steward: Espressif Systems
backing_orgs: [organizations/espressif-systems]
metrics:
  github_stars: { value: 19141, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: idf-gh
    resource: https://github.com/espressif/esp-idf
    title: "ESP-IDF GitHub (v6.0 released 2026-03-20; v6.1 2026-08-27)"
  - id: esp-ar-2025
    resource: https://www.espressif.com/sites/default/files/financial/Espressif%20Systems%202025%20Annual%20Report.pdf
    title: Espressif Systems 2025 Annual Report
  - id: esp-response
    resource: https://www.espressif.com/en/news/response_esp32_bluetooth
    title: "Espressif: Response to claimed backdoor and undocumented commands in ESP32 Bluetooth stack (2025-03)"
  - id: bc-esp32
    resource: https://www.bleepingcomputer.com/news/security/undocumented-commands-found-in-bluetooth-chip-used-by-a-billion-devices/
    title: "BleepingComputer: Undocumented commands found in Bluetooth chip used by a billion devices (2025-03)"
  - id: esp-hal-1
    resource: https://developer.espressif.com/blog/2025/10/esp-hal-1/
    title: "Espressif: esp-hal 1.0.0 release announcement (2025-10)"
---

# Summary
ESP-IDF is the textbook case of **vendor open source as silicon marketing**. The Apache-2.0 SDK (19k+ stars) and Arduino/MicroPython/Zephyr ports made the ESP32 the default maker and IoT chip. Espressif's own results show it: 2025 revenue of ~CNY 2.57B (+27.8%) and net profit attributable of ~CNY 498M (+47%).[^esp-ar-2025] ESP-IDF **v6.0** shipped on Mar 20, 2026 and **v6.1** on Aug 27, 2026,[^idf-gh] and Espressif's Rust **esp-hal 1.0** (Oct 2025) made it the first vendor with a stable Rust SDK.[^esp-hal-1] The low point was March 2025. Tarlogic reported 29 "undocumented commands" in the ESP32 Bluetooth controller, initially headlined as a backdoor (CVE-2025-27840). Espressif said they were debug commands, not remotely reachable, and promised a patch and documentation.[^bc-esp32][^esp-response] Verdict: **thriving**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03 | Tarlogic "ESP32 backdoor" claims; Espressif rebuttal and patch (CVE-2025-27840)[^bc-esp32][^esp-response] | OSS | − |
| W12 | 2025-10 | esp-hal 1.0 (Rust)[^esp-hal-1] | OSS | + |
| W9 | 2026-03-20 | ESP-IDF v6.0[^idf-gh] | OSS | + |
| W9–W6 | 2026 H1 (exact date unverified) | 2025 annual report: revenue +27.8%, profit +47%[^esp-ar-2025] | Business | + |
| W3 | 2026-08-27 | ESP-IDF v6.1[^idf-gh] | OSS | + |

# OSS successes
- Broad language and RTOS support (C/IDF, Rust, MicroPython, Zephyr, Arduino) on one open SDK.[^idf-gh][^esp-hal-1]

# OSS failures / risks
- Binary radio blobs remain closed, and the March 2025 episode showed how opaque firmware creates trust problems.[^bc-esp32]

# Business successes
- Strong growth and profit in 2025.[^esp-ar-2025]

# Business failures / risks
- Exposure to US–China trade policy (tariffs, the FCC covered-list approach to foreign radio gear; see [router event](/events/2026-03-fcc-foreign-routers-covered-list.md)).

# By window
## W3
- ESP-IDF v6.1.[^idf-gh]
## W6
- 2025 annual results published (exact publication date unverified).[^esp-ar-2025]
## W9
- ESP-IDF v6.0.[^idf-gh]
## W12
- esp-hal 1.0.[^esp-hal-1]
## W24
- Bluetooth "backdoor" controversy.[^bc-esp32][^esp-response]

# Lessons
- Opening the SDK while keeping silicon proprietary is the most reliable open-source business model in hardware.

# Related
- [Espressif Systems](/organizations/espressif-systems.md), [Embassy](/projects/hardware-embedded/embassy.md), [MicroPython](/projects/hardware-embedded/micropython.md), [Meshtastic](/projects/hardware-embedded/meshtastic.md)

[^idf-gh]: GitHub releases API, 2026-10-03.
[^esp-ar-2025]: Espressif 2025 Annual Report.
[^esp-response]: Espressif, March 2025.
[^bc-esp32]: BleepingComputer, March 2025.
[^esp-hal-1]: Espressif developer portal.
