---
type: Event
title: FCC adds all foreign-made consumer routers to the Covered List
description: "On Mar 23, 2026 the FCC barred new authorisations for consumer routers with any major production stage abroad (TP-Link, Netgear, Asus, Eero etc.). Firmware updates for existing models are allowed only through Mar 1, 2027, raising the stakes for open firmware such as OpenWrt."
event_kind: other
date: 2026-03-23
window: W9
impact: mixed
projects: [projects/hardware-embedded/openwrt]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bm-fcc-routers
    resource: https://www.bakermckenzie.com/en/insight/publications/2026/04/united-states-fcc-adds-foreign-made-routers-to-covered-list
    title: "Baker McKenzie: FCC adds foreign-made routers to Covered List (2026-04)"
  - id: wiley-routers
    resource: https://www.wiley.law/alert-FCC-Revises-Guidance-on-Consumer-Grade-Routers-Added-to-Covered-List
    title: "Wiley: FCC revises guidance on consumer-grade routers added to Covered List"
  - id: ada-fcc
    resource: https://blog.adafruit.com/2026/03/24/fcc-just-banned-the-import-of-all-new-foreign-made-routers-heres-what-you-can-do-about-it/
    title: "Adafruit: FCC just banned new foreign-made routers (2026-03-24)"
---

# What happened
Following an interagency national-security determination, the FCC added consumer routers "produced in a foreign country" to the Covered List. A router counts as foreign if design, development, manufacturing or assembly happens abroad. New models need Conditional Approval from DoW/DHS. Existing models may be sold and may receive updates through March 1, 2027. Guidance was revised on March 31.[^bm-fcc-routers][^wiley-routers]

# Why it matters
Almost every consumer router brand is affected.[^ada-fcc] After March 2027, vendor update paths for existing devices are uncertain, which makes OpenWrt and similar open firmware a long-term maintenance route for owners.[^ada-fcc]

# Outcome so far
Conditional-approval processes are under way; post-2027 firmware rules have not been decided.[^bm-fcc-routers]

# Related
- [OpenWrt](/projects/hardware-embedded/openwrt.md), [Event: FCC foreign drones](/events/2025-12-fcc-foreign-drones-covered-list.md), [Event: EU drops radio lockdown](/events/2026-01-eu-drops-radio-lockdown-delegated-act.md)

[^bm-fcc-routers]: Baker McKenzie.
[^wiley-routers]: Wiley Rein.
[^ada-fcc]: Adafruit blog.
