---
type: Event
title: Qualcomm acquires Arduino; new terms of service spark backlash
description: "Qualcomm announced the acquisition of Arduino on Oct 7, 2025; November ToS/privacy changes (reverse-engineering and content clauses) triggered an open-hardware trust crisis that Arduino addressed with an 'anything open stays open' pledge."
event_kind: acquisition
date: 2025-10-07
window: W12
impact: mixed
projects: [projects/licensing-forks/arduino]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cnbc-qcom
    resource: https://www.cnbc.com/2025/10/07/qualcomm-acquires-italian-hardware-company-arduino-in-robotics-play-.html
    title: "CNBC: Qualcomm acquires Arduino (2025-10-07)"
  - id: arduino-record
    resource: https://blog.arduino.cc/2025/11/21/the-arduino-terms-of-service-and-privacy-policy-update-setting-the-record-straight/
    title: "Arduino blog: Setting the record straight (2025-11-21)"
  - id: molecularist
    resource: https://www.molecularist.com/2025/11/did-qualcomm-kill-arduino-for-good.html
    title: "Molecularist: Did Qualcomm kill Arduino for good? (2025-11)"
  - id: hw-reg-ventana
    resource: https://www.theregister.com/2025/12/10/qualcomm_riscv_arm_ventana/
    title: "The Register: Qualcomm acquires Ventana (2025-12-10)"
---

# What happened
Qualcomm announced on Oct 7, 2025 that it would acquire Arduino and keep it as an independent subsidiary. Terms were not disclosed.[^cnbc-qcom] In November, new Terms of Service with reverse-engineering and content-licensing clauses were read as the end of Arduino as an "open commons".[^molecularist] Arduino responded on Nov 21 that open-licensed releases "remain available as before" and that the reverse-engineering clause covers only its cloud SaaS.[^arduino-record]

# Why it matters
It is the largest open-hardware acquisition by a chip giant, and it shows how ToS changes can damage trust as badly as a license change.

# Outcome so far
Arduino's open licenses are unchanged. Qualcomm has kept buying "open" robotics assets (PickNik/MoveIt, Sept 2026).

# Related
- [Arduino](/projects/licensing-forks/arduino.md)

[^cnbc-qcom]: CNBC — https://www.cnbc.com/2025/10/07/qualcomm-acquires-italian-hardware-company-arduino-in-robotics-play-.html
[^arduino-record]: Arduino blog — https://blog.arduino.cc/2025/11/21/the-arduino-terms-of-service-and-privacy-policy-update-setting-the-record-straight/
[^molecularist]: Molecularist — https://www.molecularist.com/2025/11/did-qualcomm-kill-arduino-for-good.html

## Additional notes (hardware-embedded)
- Arduino was one step in a string of Qualcomm acquisitions of open-source and embedded assets: Foundries.io (2024), Edge Impulse (2025), Arduino, Ventana's RISC-V team two months later,[^hw-reg-ventana] Modular (2026) and PickNik/MoveIt (Sept 2026). See [Qualcomm](/organizations/qualcomm.md) and [Event: Qualcomm to acquire PickNik](/events/2026-09-qualcomm-to-acquire-picknik.md).

[^hw-reg-ventana]: The Register, 2025-12-10.
