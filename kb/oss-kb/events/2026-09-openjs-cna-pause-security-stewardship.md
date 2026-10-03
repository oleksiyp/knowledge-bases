---
type: Event
title: "OpenJS CNA pauses over AI report overload; launches Security Stewardship Program"
description: "OpenJS's volunteer CNA paused security operations (Sep 17-Oct 6, 2026) due to AI-generated report volume, then launched a pooled fund ($100k+/yr per partner; Socket and Aikido inaugural) for bounties and maintainer pay."
event_kind: governance
date: 2026-09-17
window: W3
impact: mixed
projects: [projects/security-sustainability/npm-registry, projects/security-sustainability/cve-program]
organizations: [organizations/openjs-foundation, organizations/socket, organizations/aikido-security]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: openjs-cna
    resource: https://openjsf.org/blog/the-openjs-foundation-cna-is-taking-a-coordinated-break
    title: "OpenJS: CNA coordinated break"
  - id: openjs-ssp
    resource: https://openjsf.org/blog/openjs-foundation-launches-the-security-stewardshi
    title: "OpenJS: Security Stewardship Program"
---
# What happened
The pause ran from 2026-09-17 to 10-06, with Express joining. In OpenJS's words: "AI has lowered the barrier to generating security reports, but not the cost of handling them." Actively exploited emergencies are still handled.[^openjs-cna] On 09-25 the Security Stewardship Program launched: at least $100k a year per partner, split 50/50 between bug bounties and maintainer pay, with Socket and Aikido as inaugural partners. It fills the gap left by the end of Node.js's own bounty.[^openjs-ssp]

# Why it matters
It copies curl's July pause at foundation level and pairs it with a vendor-funded model.

# Outcome so far
Pause ends on 10-06. Whether more partners join is something to watch.

# Related
- [OpenJS Foundation](/organizations/openjs-foundation.md), [curl bug bounty end](/events/2026-01-curl-ends-bug-bounty.md)

[^openjs-cna]: OpenJS: CNA coordinated break
[^openjs-ssp]: OpenJS: Security Stewardship Program
