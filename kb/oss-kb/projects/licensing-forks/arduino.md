---
type: OSS Project
title: Arduino
description: "Open-hardware/software microcontroller platform acquired by Qualcomm (announced Oct 7, 2025); new Terms of Service in Nov 2025 (reverse-engineering and content clauses) triggered a community trust crisis that Arduino partly defused, while Qualcomm doubled down on 'open' robotics (PickNik/MoveIt, Sept 2026)."
resource: https://www.arduino.cc
tags: [open-hardware, embedded, acquisition, qualcomm, terms-of-service, trust]
domain: licensing-forks
license: "Mixed: LGPL/GPL (cores, IDE), CC-BY-SA (hardware designs); proprietary cloud"
license_history: ["Unchanged open licenses for released code/designs; new cloud ToS (2025-11)"]
governance: single-vendor
steward: Arduino S.r.l. (Qualcomm subsidiary)
backing_orgs: []
metrics: {}
oss_verdict: contested
business_verdict: acquired
momentum_by_window: { W3: flat, W6: flat, W9: down, W12: down, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cnbc-qcom
    resource: https://www.cnbc.com/2025/10/07/qualcomm-acquires-italian-hardware-company-arduino-in-robotics-play-.html
    title: "CNBC: Qualcomm acquires Italian hardware company Arduino in robotics play (2025-10-07)"
  - id: ieee-qcom
    resource: https://spectrum.ieee.org/qualcomm-arduino-acquisition-open-source
    title: "IEEE Spectrum: Qualcomm buys Arduino, and the open-source community is skeptical (2025-10-18)"
  - id: arduino-record
    resource: https://blog.arduino.cc/2025/11/21/the-arduino-terms-of-service-and-privacy-policy-update-setting-the-record-straight/
    title: "Arduino blog: ToS and privacy policy update — setting the record straight (2025-11-21)"
  - id: molecularist
    resource: https://www.molecularist.com/2025/11/did-qualcomm-kill-arduino-for-good.html
    title: "Molecularist: Arduino published updated terms — no longer an open commons (2025-11, HN 351 pts)"
  - id: ars-tos
    resource: https://arstechnica.com/gadgets/2025/11/arduinos-new-terms-of-service-worries-hobbyists-ahead-of-qualcomm-acquisition/
    title: "Ars Technica: Arduino's new terms of service worries hobbyists ahead of Qualcomm acquisition (2025-11-24)"
  - id: robotreport-picknik
    resource: https://www.therobotreport.com/qualcomm-acquires-picknik-robotics-keep-moveit-open-source/
    title: "The Robot Report: Qualcomm to acquire PickNik Robotics and keep MoveIt open-source (2026-09-23)"
---

# Summary
Arduino shows the trust risk that comes with an acquisition by a big company. Qualcomm announced on Oct 7, 2025 that it would acquire Arduino and run it as an independent subsidiary, alongside the launch of the Linux-capable UNO Q board. The open-source community was sceptical from the start.[^cnbc-qcom][^ieee-qcom] In November 2025 Arduino published new Terms of Service and a new privacy policy. The changes included reverse-engineering restrictions and broad content-licensing language, which critics read as the end of Arduino as an "open commons".[^molecularist][^ars-tos] On Nov 21, 2025 Arduino responded that anything released under open licenses "remain[s] available as before" and that the reverse-engineering clause applies only to its cloud SaaS.[^arduino-record] Qualcomm has since continued buying "open" robotics assets, including PickNik/MoveIt in Sept 2026, with a pledge to keep MoveIt open source.[^robotreport-picknik] Verdict: contested.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-07 | Qualcomm announces Arduino acquisition; UNO Q launched[^cnbc-qcom] | Business | ± |
| W12 | 2025-11-19/21 | New ToS/privacy policy backlash ("no longer an open commons")[^molecularist][^ars-tos] | OSS | − |
| W12 | 2025-11-21 | Arduino: "Anything that was open, stays open"[^arduino-record] | OSS | + |
| W3 | 2026-09-23 | Qualcomm to acquire PickNik; integrates MoveIt with Dragonwing and Arduino[^robotreport-picknik] | Business | ± |

# OSS successes
- Arduino explicitly committed that open releases stay open.[^arduino-record]

# OSS failures / risks
- Trust is damaged. The ToS episode is now the community's reference point for an "enshittification" risk under Qualcomm.[^molecularist]
- More and more of the value moves into proprietary cloud services and Qualcomm silicon.

# Business successes
- The founders got an exit, and the company has a deep-pocketed parent pushing edge AI and robotics.[^cnbc-qcom]

# Business failures / risks
- Deal terms were not disclosed.[^cnbc-qcom]

# By window
## W3
- Qualcomm–PickNik deal ties MoveIt to the Arduino/Dragonwing platforms.[^robotreport-picknik]
## W6
- No notable events found.
## W9
- No notable licensing events found (VENTUNO Q board launched with Qualcomm silicon, Mar 2026; not separately verified).
## W12
- Acquisition (Oct 2025) and ToS crisis (Nov 2025).[^cnbc-qcom][^arduino-record]
## W24
- No notable events found.

# Lessons
- After an acquisition, ToS changes are read as license changes even when the open licenses are untouched, so communicate before changing anything.
- Open hardware is easier to protect than cloud services, which are where the new owner can restrict users.

# Related
- [Qualcomm acquires Arduino](/events/2025-10-qualcomm-acquires-arduino.md)
- [Licensing & forks domain review](/domains/licensing-forks.md)

[^cnbc-qcom]: CNBC — https://www.cnbc.com/2025/10/07/qualcomm-acquires-italian-hardware-company-arduino-in-robotics-play-.html
[^ieee-qcom]: IEEE Spectrum — https://spectrum.ieee.org/qualcomm-arduino-acquisition-open-source
[^arduino-record]: Arduino blog — https://blog.arduino.cc/2025/11/21/the-arduino-terms-of-service-and-privacy-policy-update-setting-the-record-straight/
[^molecularist]: Molecularist — https://www.molecularist.com/2025/11/did-qualcomm-kill-arduino-for-good.html
[^ars-tos]: Ars Technica — https://arstechnica.com/gadgets/2025/11/arduinos-new-terms-of-service-worries-hobbyists-ahead-of-qualcomm-acquisition/
[^robotreport-picknik]: The Robot Report — https://www.therobotreport.com/qualcomm-acquires-picknik-robotics-keep-moveit-open-source/
