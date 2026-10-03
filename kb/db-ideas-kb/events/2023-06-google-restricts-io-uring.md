---
type: Event
title: "Google restricts io_uring after kernel-exploit findings"
description: "Google reported that 60% of submissions to its kCTF kernel-exploit reward program in the previous year exploited io_uring, and disabled or restricted it on ChromeOS, Android apps and Google production servers."
date: 2023-06-14
year: 2023
kind: discontinuation
signal: negative
ideas: [ideas/hardware-engines/io-uring-kernel-bypass]
systems: []
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: google-blog
    resource: https://security.googleblog.com/2023/06/learnings-from-kctf-vrps-42-linux.html
    title: "Google Security Blog: Learnings from kCTF VRP's 42 Linux kernel exploits submissions"
    author: org:google
  - id: phoronix-google
    resource: https://www.phoronix.com/news/Google-Restricting-IO_uring
    title: "Phoronix: Google Limiting IO_uring Use Due To Security Vulnerabilities"
---

# What happened

On 14 June 2023 Google's security team wrote that 60% of submissions to its kCTF vulnerability reward program in the past year exploited io_uring, with about $1M paid for io_uring bugs alone. Google disabled io_uring on ChromeOS, blocked it for Android apps via seccomp, and disabled it on production Google servers[^google-blog][^phoronix-google].

# Why it matters

io_uring is the interface new database engines rely on for NVMe-speed I/O. Google's decision showed that kernel performance features can be vetoed by security teams, and pushed databases (e.g. PostgreSQL 18, whose default io_method is not io_uring) to keep fallbacks.

# Related

- [io_uring and kernel bypass](/ideas/hardware-engines/io-uring-kernel-bypass.md)
- [PostgreSQL 18 async I/O](/events/2025-09-postgresql-18-async-io.md)
