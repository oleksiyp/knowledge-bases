---
type: Event
title: "FFmpeg vs Google: 'CVE slop' dispute over AI-found bugs (Big Sleep)"
description: "In late Oct-Nov 2025 FFmpeg publicly attacked Google for using its Big Sleep AI agent to file vulnerability reports (e.g. a use-after-free in a 1995 LucasArts codec) under a 90-day disclosure clock without sending patches or funding; it became the emblematic 'fund us or stop sending bugs' moment of the AI-discovery era."
event_kind: other
date: 2025-10-31
window: W12
impact: negative
projects: []
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ffmpeg-x
    resource: https://x.com/FFmpeg/status/1984178359354483058
    title: "FFmpeg on X: 'is it really fair that trillion dollar corporations run AI to find security issues on people's hobby code?' (2025-10-31)"
  - id: piunika
    resource: https://piunikaweb.com/2025/11/06/google-vs-ffmpeg-open-source-big-sleep-ai-bugs-and-who-must-fix-them/
    title: "PiunikaWeb: Google vs. FFmpeg, an open-source showdown over AI-found bugs (2025-11-06)"
  - id: itsfoss
    resource: https://itsfoss.com/news/ffmpeg-google-fiasco/
    title: "It's FOSS: FFmpeg calls Google's AI bug reports 'CVE slop' (2025-11-14)"
  - id: tns
    resource: https://thenewstack.io/ffmpeg-to-google-fund-us-or-stop-sending-bugs/
    title: "The New Stack: FFmpeg to Google: Fund us or stop sending bugs"
  - id: gigazine
    resource: https://gigazine.net/gsc_news/en/20251112-ffmpeg-google/
    title: "GIGAZINE: FFmpeg criticizes Google for using AI to report large numbers of bugs (2025-11-12)"
  - id: vulncheck-glasswing
    resource: https://www.vulncheck.com/blog/anthropic-glasswing-receipts
    title: "VulnCheck: The Anthropic Glasswing receipts are starting to trickle in (2026-09-08)"
---
# What happened
In July 2025 Google Project Zero adopted a "Reporting Transparency" policy: it publicly announces that a vulnerability report exists within one week of filing, and the standard 90-day disclosure clock runs whether or not a patch exists. From August 2025, Google's **Big Sleep** AI agent reported batches of bugs in open source staples including FFmpeg.[^piunika][^gigazine] One was a use-after-free in FFmpeg's LucasArts Smush (SANM) decoder that affects the first frames of the 1995 game *Rebel Assault II* (CVE-2025-59734).[^itsfoss] On 2025-10-31 FFmpeg's official account posted: "We take security very seriously but at the same time is it really fair that trillion dollar corporations run AI to find security issues on people's hobby code? Then expect volunteers to fix".[^ffmpeg-x] Over the following weeks the project called such findings "CVE slop" and told Google to "just submit a patch". The press summarized the dispute as "fund us or stop sending bugs".[^itsfoss][^piunika][^tns]

# Why it matters
- This was the first high-profile clash over *genuine* AI-discovered bugs rather than fabricated "slop" reports. The complaint was not that the bugs were fake, but that discovery is automated and cheap for the reporter while fixing is manual and unpaid for the maintainer.[^piunika]
- It set up the 2026 debate around Anthropic's Project Glasswing. Five months after Glasswing launched, only 10.5% of its 26,153 findings had reached maintainers and 0.8% were fixed. Anthropic itself said human triage was "the rate limiting step".[^vulncheck-glasswing]

# Outcome so far
No Google funding or patch commitment to FFmpeg was reported in coverage at the time.[^gigazine][^piunika] The dispute fed directly into the 2026 "polluter pays" funding moves: the LF's $12.5M AI-security grants (Mar 2026), Glasswing's $2.5M to Alpha-Omega and OpenSSF plus $1.5M to the ASF (Apr 2026), and Akrites (Jun 2026). (See the linked project pages; their sources are cited there.)

# Related
- [curl](/projects/security-sustainability/curl.md), [libxml2](/projects/security-sustainability/libxml2.md), [Alpha-Omega](/projects/security-sustainability/alpha-omega.md), [Project Glasswing](/events/2026-04-project-glasswing-ai-vuln-discovery.md), [Sovereign Tech Agency](/projects/security-sustainability/sovereign-tech-agency.md)

[^ffmpeg-x]: FFmpeg official X account, 2025-10-31 (timestamp decoded from post ID).
[^piunika]: PiunikaWeb, 2025-11-06.
[^itsfoss]: It's FOSS, 2025-11-14.
[^tns]: The New Stack, Nov 2025.
[^gigazine]: GIGAZINE, 2025-11-12.
[^vulncheck-glasswing]: VulnCheck, 2026-09-08.
