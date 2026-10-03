---
type: OSS Project
title: libxml2
description: "Core XML library in browsers and OSes, maintained for years by one volunteer; in May 2025 he abandoned security embargoes and dropped libxslt, then stepped down in Sep 2025 ('more or less unmaintained'). New maintainers stepped in by Dec 2025 and releases continue (2.15.4, Sep 2026). A landmark protest against unpaid security labor that ended in a fragile rescue."
resource: https://gitlab.gnome.org/GNOME/libxml2
tags: [maintainer-sustainability, security-embargo, gnome, c]
domain: security-sustainability
license: MIT
license_history: ["MIT"]
governance: community
steward: GNOME (hosting); community maintainers after Nick Wellnhofer
backing_orgs: []
metrics: {}
oss_verdict: contested
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: up, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lwn-libxml2
    resource: https://lwn.net/Articles/1025971/
    title: "LWN: Libxml2's 'no security embargoes' policy (2025-06-25)"
    author: org:lwn
  - id: phoronix-stepdown
    resource: https://www.phoronix.com/news/Libxml2-No-Maintainer
    title: "Phoronix: libxml2 maintainer stepping down, 'more or less unmaintained for now' (2025-09-15)"
  - id: hackaday-rescue
    resource: https://hackaday.com/2025/12/23/libxml2-narrowly-avoids-becoming-unmaintained/
    title: "Hackaday: Libxml2 narrowly avoids becoming unmaintained (2025-12-23)"
  - id: gnome-gitlab
    resource: https://gitlab.gnome.org/GNOME/libxml2
    title: libxml2 on GNOME GitLab (releases and commit log)
    last_modified: 2026-09-23T00:00:00Z
---
# Summary
libxml2 ships in Apple, Google and Microsoft products, but for years it was effectively maintained by one volunteer, Nick Wellnhofer. On **2025-05-08** he announced that security issues would be handled as ordinary public bugs, with no embargoes: "most of the secrecy around security issues is just theater". He said triage was taking "several hours each week" of unpaid time. He also stepped down from libxslt, calling it "unlikely that it would ever be maintained again".[^lwn-libxml2] On **2025-09-15**, the day 2.15.0 shipped, he stepped down from libxml2 as well, leaving the project "more or less unmaintained for now".[^phoronix-stepdown][^gnome-gitlab] By December 2025, two new developers had stepped up as maintainers.[^hackaday-rescue] Releases continued: 2.15.1 (Oct 2025), 2.15.2 (Mar 2026), 2.15.3 (Apr 2026) and 2.15.4 (2026-09-04). Daniel Garcia Moreno is among the most active committers in 2026, and Wellnhofer still contributes occasionally.[^gnome-gitlab] Verdict: **contested**. The project was rescued and is maintained, but by a very small team. The underlying free-rider problem was not solved. (He had already stepped away once in July 2021 over funding and came back in January 2022 after a $10,000 Google donation.)[^lwn-libxml2] *Corrected in pass 2:* the verdict changed from "crisis" to "contested", and the 2025-09 step-down and the later rescue were added.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| pre | 2021-07 | Maintainer temporarily steps down over funding[^lwn-libxml2] | OSS | − |
| pre | 2022-01 | Returns after $10k Google donation[^lwn-libxml2] | Business | + |
| W24 | 2025-05-08 | No more embargoes; steps down from libxslt[^lwn-libxml2] | OSS | − |
| W24 | 2025-09-15 | 2.15.0 released; Wellnhofer steps down, project "more or less unmaintained"[^phoronix-stepdown][^gnome-gitlab] | OSS | − |
| W12 | 2025-12 | Two new maintainers step up[^hackaday-rescue] | OSS | + |
| W9 | 2026-03-04 | 2.15.2 released[^gnome-gitlab] | OSS | + |
| W6 | 2026-04-16 | 2.15.3 released[^gnome-gitlab] | OSS | + |
| W3 | 2026-09-04 | 2.15.4 released[^gnome-gitlab] | OSS | + |

# OSS successes
- Being open about the problem forced a public discussion of what volunteers owe security researchers.[^lwn-libxml2]
- Succession worked. New maintainers took over and the release cadence continued.[^hackaday-rescue][^gnome-gitlab]

# OSS failures / risks
- libxslt was left without a committed maintainer, and XML parsing still depends on a tiny team.[^lwn-libxml2]

# Business successes
- n/a

# Business failures / risks
- Big users do not pay. This is the textbook free-rider problem.[^lwn-libxml2]

# By window
## W3
- 2.15.4 released; regular commits from multiple contributors.[^gnome-gitlab]
## W6
- 2.15.3 released.[^gnome-gitlab]
## W9
- 2.15.2 released.[^gnome-gitlab]
## W12
- New maintainers took over.[^hackaday-rescue]
## W24
- Embargo policy change (May 2025); Wellnhofer stepped down (September 2025).[^lwn-libxml2][^phoronix-stepdown]

# Lessons
- Maintainers can refuse unpaid security SLAs. Embargoes are a service that has to be paid for.
- A public resignation can bring in successors when a project is critical enough, but it does not bring in money.

# Related
- [libxml2 embargo policy](/events/2025-05-libxml2-drops-security-embargoes.md), [curl](/projects/security-sustainability/curl.md), [XZ Utils](/projects/security-sustainability/xz-utils.md)

[^lwn-libxml2]: LWN, 2025-06-25.
[^phoronix-stepdown]: Phoronix, 2025-09-15.
[^hackaday-rescue]: Hackaday, 2025-12-23.
[^gnome-gitlab]: GNOME GitLab API (releases, commits), checked 2026-10-03.
