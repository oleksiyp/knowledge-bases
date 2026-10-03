---
type: Event
title: "libxml2 maintainer drops security embargoes"
description: "libxml2's volunteer maintainer Nick Wellnhofer announced security bugs would be treated as public bugs with no embargoes, and stepped down from libxslt, citing unpaid corporate free-riding."
event_kind: governance
date: 2025-05-08
window: W24
impact: negative
projects: [projects/security-sustainability/libxml2]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lwn-libxml2
    resource: https://lwn.net/Articles/1025971/
    title: "LWN: libxml2 maintainer's security policy"
  - id: hackaday-libxml2
    resource: https://hackaday.com/2025/12/23/libxml2-narrowly-avoids-becoming-unmaintained/
    title: "Hackaday: Libxml2 narrowly avoids becoming unmaintained (2025-12-23)"
---
# What happened
Wellnhofer called security secrecy "theater" and said companies that "make billions of profits and refuse to pay back their technical debt" should not expect embargo handling from volunteers. He stepped down from libxslt.[^lwn-libxml2]

# Why it matters
It is a model for maintainers turning down unpaid security SLAs, and it signals the limit of volunteer goodwill.

# Outcome so far
libxml2 is still maintained under the new policy. Nick Wellnhofer announced on Sept 15, 2025 that he would step down, and by the end of 2025 two new developers had taken over as maintainers, so the project narrowly avoided becoming unmaintained (its verdict moves from crisis to contested). libxslt, which Wellnhofer also maintained, faces being unmaintained.[^lwn-libxml2][^hackaday-libxml2]

# Related
- [libxml2](/projects/security-sustainability/libxml2.md), [curl](/projects/security-sustainability/curl.md)
- [FFmpeg vs Google "CVE slop" dispute](/events/2025-10-ffmpeg-google-big-sleep-dispute.md): the same maintainer-burden argument applied to AI-found bugs

[^lwn-libxml2]: LWN: libxml2 maintainer's security policy
[^hackaday-libxml2]: Hackaday — https://hackaday.com/2025/12/23/libxml2-narrowly-avoids-becoming-unmaintained/
