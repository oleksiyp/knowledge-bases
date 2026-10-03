---
type: Event
title: EU abandons the RED 'radio lockdown' delegated act
description: "In Jan 2026 the European Commission abandoned drafting the delegated act for Radio Equipment Directive Art. 3(3)(i), which could have required router and phone makers to block uncertified user-installed software. A decade-long FSFE campaign win for OpenWrt and alternative firmware."
event_kind: governance
date: 2026-01-15
window: W9
impact: positive
projects: [projects/hardware-embedded/openwrt]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: fsfe-red
    resource: https://fsfe.org/activities/radiodirective/
    title: "FSFE: Radio Lockdown Directive campaign page"
  - id: openwrt-forum-red
    resource: https://forum.openwrt.org/t/eu-regulation-of-third-party-software-on-radio-devices/32574
    title: "OpenWrt Forum: EU regulation of third-party software on radio devices"
  - id: reedsmith-red
    resource: https://www.reedsmith.com/our-insights/blogs/viewpoints/102ktki/red-eu-cybersecurity-obligations-for-iot-products-from-august-2025/
    title: "Reed Smith: RED cybersecurity obligations for IoT products from August 2025"
---

# What happened
The Commission dropped its initiative to draft the delegated act activating RED Article 3(3)(i). Without it, the article "has no practical effect": no device categories are defined and no software restrictions apply. The date within Jan 2026 is approximate.[^fsfe-red]

# Why it matters
The article could have forced vendors to prevent installation of non-certified software on radio devices, which would have threatened OpenWrt and custom ROMs.[^openwrt-forum-red] The separate RED cybersecurity requirements (Art. 3(3)(d)(e)(f)), applicable from Aug 1, 2025, remain in force.[^reedsmith-red]

# Outcome so far
Community firmware remains legal to install in the EU. Contrast the US FCC's March 2026 router decision.

# Related
- [OpenWrt](/projects/hardware-embedded/openwrt.md), [Event: FCC foreign routers](/events/2026-03-fcc-foreign-routers-covered-list.md)

[^fsfe-red]: FSFE.
[^openwrt-forum-red]: OpenWrt Forum.
[^reedsmith-red]: Reed Smith.
