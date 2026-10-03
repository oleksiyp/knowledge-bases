---
type: Organization
title: Espressif Systems
description: "Shanghai-listed (STAR: 688018) fabless maker of ESP32 Wi-Fi/BLE microcontrollers; its open-source ESP-IDF SDK made ESP32 the maker/IoT default. 2025 revenue ~CNY 2.57B (+27.8%), net profit ~CNY 498M (+47%)."
resource: https://www.espressif.com
tags: [public-company, semiconductors, iot, vendor-open-source]
org_kind: public-company
hq: Shanghai, China
funding: { total_usd: "n/a (public)", last_round: "STAR Market IPO (2019)", valuation_usd: "n/a" }
business_verdict: thriving
projects: [projects/hardware-embedded/esp-idf]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: esp-ar-2025
    resource: https://www.espressif.com/sites/default/files/financial/Espressif%20Systems%202025%20Annual%20Report.pdf
    title: Espressif Systems 2025 Annual Report
  - id: esp-response
    resource: https://www.espressif.com/en/news/response_esp32_bluetooth
    title: "Espressif: Response to claimed backdoor in ESP32 Bluetooth stack (2025-03)"
  - id: esp-hal-1
    resource: https://developer.espressif.com/blog/2025/10/esp-hal-1/
    title: "Espressif: esp-hal 1.0.0 (2025-10)"
---

# Summary
Espressif is the most successful **"open SDK, proprietary silicon"** company in embedded. 2025 revenue was ~CNY 2.57B (+27.8%) and net profit attributable ~CNY 498M (+47%).[^esp-ar-2025] Its developer-led strategy now includes official Rust support (esp-hal 1.0, Oct 2025).[^esp-hal-1] It handled the March 2025 "undocumented HCI commands" scare by publishing a technical rebuttal and promising a patch.[^esp-response]

# Business timeline
| Date | Event |
|---|---|
| 2025-03 | ESP32 Bluetooth "backdoor" scare; Espressif response[^esp-response] |
| 2025-10 | esp-hal 1.0 (Rust)[^esp-hal-1] |
| 2026 | 2025 annual report: revenue +27.8%, profit +47%[^esp-ar-2025] |

# Monetization model
Chip and module sales; the open-source SDKs are a free complement.

# Successes
- Profitable growth driven by developer adoption.[^esp-ar-2025]

# Failures / risks
- US policy toward Chinese radio components (FCC covered-list trend); trust incidents.[^esp-response]

# Related
- [ESP-IDF](/projects/hardware-embedded/esp-idf.md), [Embassy](/projects/hardware-embedded/embassy.md)

[^esp-ar-2025]: Espressif 2025 Annual Report.
[^esp-response]: Espressif.
[^esp-hal-1]: Espressif developer portal.
