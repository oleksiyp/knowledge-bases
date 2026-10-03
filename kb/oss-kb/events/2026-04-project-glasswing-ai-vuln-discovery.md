---
type: Event
title: "Anthropic's Project Glasswing / Claude Mythos unleashes AI-scale vulnerability discovery"
description: "Anthropic gave ~40+ critical-software organizations access to Claude Mythos Preview for vulnerability hunting, with $100M in credits and $4M to OSS security bodies; partners found 10,000+ high/critical bugs, swamping remediation capacity."
event_kind: other
date: 2026-04-07
window: W6
impact: mixed
projects: [projects/security-sustainability/openssf, projects/security-sustainability/alpha-omega, projects/security-sustainability/curl]
organizations: [organizations/linux-foundation]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: anthropic-glasswing
    resource: https://www.anthropic.com/glasswing
    title: "Anthropic: Project Glasswing"
  - id: wiki-mythos
    resource: https://en.wikipedia.org/wiki/Claude_Mythos
    title: "Wikipedia: Claude Mythos"
  - id: wiki-ffmpeg
    resource: https://en.wikipedia.org/wiki/FFmpeg
    title: "Wikipedia: FFmpeg"
---
# What happened
Announced on 2026-04-07. Partners include AWS, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, the Linux Foundation, Microsoft, NVIDIA and Palo Alto Networks, plus more than 40 organizations that maintain critical software. Anthropic committed up to $100M in usage credits, $2.5M to Alpha-Omega/OpenSSF and $1.5M to the Apache Software Foundation. Maintainers can apply through Claude for Open Source.[^anthropic-glasswing] Anthropic's page cites thousands of high-severity zero-days, including a 27-year-old OpenBSD flaw and Linux kernel privilege-escalation bugs.[^anthropic-glasswing] Wikipedia reports that Mozilla fixed 271 Firefox vulnerabilities, that the first 50 partners had found more than 10,000 high or critical bugs by May, and that by September only about 10% of findings had been disclosed and under 1% fixed. Pass 2 could not confirm these later figures from a primary source.[^wiki-mythos] FFmpeg thanked Mythos for finding a 16-year-old H.264 bug.[^wiki-ffmpeg]

# Why it matters
Discovery is now much faster than fixing. That changes how security work, CNAs and disclosure norms are funded.

# Outcome so far
It led to Akrites (June), NHS England closing its repos (May) and pauses at volunteer CNAs (OpenJS, September).

# Related
- [Akrites](/events/2026-06-akrites-launch.md), [NHS repo closures](/events/2026-05-nhs-england-closes-repos-ai-fears.md), [OpenSSF](/projects/security-sustainability/openssf.md)

[^anthropic-glasswing]: Anthropic: Project Glasswing
[^wiki-mythos]: Wikipedia: Claude Mythos
[^wiki-ffmpeg]: Wikipedia: FFmpeg
