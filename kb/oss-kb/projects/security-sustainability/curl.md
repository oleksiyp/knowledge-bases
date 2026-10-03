---
type: OSS Project
title: curl
description: "Ubiquitous transfer library maintained largely by Daniel Stenberg; the bellwether for AI-slop vulnerability reports — ended its bug bounty (Jan 2026) and paused vuln intake for July 2026, while continuing to ship releases."
resource: https://github.com/curl/curl
tags: [maintainer-sustainability, ai-slop, bug-bounty, c, critical-infrastructure]
domain: security-sustainability
license: curl
license_history: ["curl (MIT-like), unchanged"]
governance: community
steward: Daniel Stenberg / wolfSSL (employer)
backing_orgs: []
metrics:
  bug_bounty_paid_usd: { value: 100000, as_of: 2026-01-26 }
  bounty_confirmed_vulns: { value: 87, as_of: 2026-01-26 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: down, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: curl-jan
    resource: https://daniel.haxx.se/blog/2026/01/
    title: "daniel.haxx.se January 2026 archive (incl. 'The end of the curl bug-bounty', 2026-01-26)"
    author: person:daniel-stenberg
  - id: curl-bliss
    resource: https://daniel.haxx.se/blog/2026/08/03/what-the-bliss-taught-us/
    title: "daniel.haxx.se: What the bliss taught us (2026-08-03)"
    author: person:daniel-stenberg
  - id: curl-blog
    resource: https://daniel.haxx.se/blog/
    title: daniel.haxx.se blog index
  - id: curl-bounty-end
    resource: https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/
    title: "daniel.haxx.se: The end of the curl bug-bounty (2026-01-26)"
    author: person:daniel-stenberg
  - id: curl-moves-again
    resource: https://daniel.haxx.se/blog/2026/02/25/curl-security-moves-again/
    title: "daniel.haxx.se: curl security moves again (2026-02-25)"
    author: person:daniel-stenberg
  - id: curl-8220
    resource: https://curl.se/ch/8.22.0.html
    title: "curl: Changes in 8.22.0 (2026-09-02)"
  - id: curl-8220-adv
    resource: https://curl.se/mail/lib-2026-09/0001.html
    title: "curl-library: [SECURITY ADVISORIES] curl 8.22.0"
---
# Summary
curl is where the problem of AI-generated "slop" security reports became impossible to ignore. Verdict: **stable**. The software keeps shipping: 8.18.0 (Jan 2026) and 8.22.0 (2026-09-02) with 9 curl/libcurl security fixes, plus a wcurl advisory, for ten advisories in total.[^curl-8220][^curl-8220-adv][^curl-jan] The *process* around it broke, though. On 2026-01-26 Stenberg announced the HackerOne bug bounty would end on 2026-01-31. The confirmed-vulnerability rate had dropped below 5% in 2025, down from more than 15% historically, buried under AI-generated submissions. Over its life (from April 2019) the bounty paid more than $100,000 for 87 confirmed vulnerabilities.[^curl-bounty-end] Reports first moved to GitHub private vulnerability reporting. GitHub's tooling turned out to lack features the project needed (as its own CNA, curl could not edit CVE IDs, and there were no private team comments), so from 2026-03-01 intake went back to HackerOne, without any bounty money.[^curl-moves-again] In July 2026 the team then stopped processing vulnerability reports for the whole month (the "summer of bliss"). They received essentially one report (ignored), heard no negative feedback, and "several other Open Source projects followed our example". Stenberg called it "possibly our best project decision in a long while".[^curl-bliss]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-01-07 | curl 8.18.0 with six security fixes[^curl-jan] | OSS | + |
| W9 | 2026-01-26 | Bug bounty ended effective 2026-01-31; reports routed to GitHub private vuln reporting[^curl-bounty-end] | OSS | − |
| W9 | 2026-02-25 | Reversal: security reports move back to HackerOne (no bounty) from 2026-03-01[^curl-moves-again] | OSS | − |
| W9 | 2026-01-30 | Stenberg presents GregKH with European Open Source Academy prize[^curl-jan] | OSS | + |
| W3 | 2026-07 | Month-long vulnerability-report pause[^curl-bliss] | OSS | + |
| W3 | 2026-09-02 | curl 8.22.0: 9 curl/libcurl security fixes (10 advisories incl. wcurl), experimental RFC 9421 HTTP Message Signatures[^curl-8220][^curl-8220-adv] | OSS | + |
| W3 | 2026-09-25 | "25 years on Apple computers" — Apple never sponsored curl[^curl-blog] | Business | − |

# OSS successes
- Releases keep coming and features keep landing (MQTTS, HTTP/3 focus, HTTP Message Signatures).[^curl-jan][^curl-blog]
- The pause worked: maintainers reported relief and renewed enthusiasm.[^curl-bliss]

# OSS failures / risks
- Bug bounties now draw AI spam faster than they draw real findings.[^curl-bounty-end]
- Stenberg wrote about 53% of all commits, which is a bus-factor concern.[^curl-jan]

# Business successes
- Existing paid-support customers kept being served during the pause; no new contracts came out of it.[^curl-bliss]

# Business failures / risks
- Big users don't pay. Apple has shipped curl since 2001 and never sponsored it.[^curl-blog]

# By window
## W3
- July pause.[^curl-bliss] 8.22.0 released with 10 advisories.[^curl-8220-adv]
## W6
- No notable events found.
## W9
- Bounty ended (2026-01-31); intake moved to GitHub and then back to HackerOne (2026-03-01).[^curl-bounty-end][^curl-moves-again]
## W12
- No notable events verified.
## W24
- The flood of AI-slop reports built up through 2025 (rate below 5% confirmed).[^curl-bounty-end]

# Lessons
- Paying for reports invites AI spam. Paying for *fixes* or maintainer time works better.
- Planned intake pauses are a legitimate way to protect maintainers.

# Related
- [curl ends bug bounty](/events/2026-01-curl-ends-bug-bounty.md), [OpenJS CNA pause](/events/2026-09-openjs-cna-pause-security-stewardship.md), [libxml2](/projects/security-sustainability/libxml2.md)

[^curl-jan]: daniel.haxx.se Jan 2026 posts.
[^curl-bliss]: daniel.haxx.se, 2026-08-03.
[^curl-blog]: daniel.haxx.se blog index (Sep 2026).
[^curl-bounty-end]: daniel.haxx.se, 2026-01-26.
[^curl-moves-again]: daniel.haxx.se, 2026-02-25.
[^curl-8220]: curl.se changelog 8.22.0.
[^curl-8220-adv]: curl-library security advisories mail, Sep 2026.
