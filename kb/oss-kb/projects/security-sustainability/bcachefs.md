---
type: OSS Project
title: bcachefs
description: "Copy-on-write Linux filesystem by Kent Overstreet; merged in 6.7 (Jan 2024), then removed from mainline for 6.18 (Sep 2025) after process and conduct disputes. Now shipped as an out-of-tree DKMS module that declared itself non-experimental in June 2026."
resource: https://bcachefs.org
tags: [linux-kernel, governance, filesystem, maintainer-conflict]
domain: security-sustainability
license: GPL-2.0-only
license_history: ["GPL-2.0-only"]
governance: single-vendor
steward: Kent Overstreet
backing_orgs: []
metrics: {}
oss_verdict: declining
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-bcachefs
    resource: https://en.wikipedia.org/wiki/Bcachefs
    title: "Wikipedia: Bcachefs"
  - id: lkml-nobody-sane
    resource: https://lkml.iu.edu/hypermail/linux/kernel/2408.2/10955.html
    title: "LKML: Re: [GIT PULL] bcachefs fixes for 6.11-rc5 (Aug 2024)"
  - id: lwn-coc
    resource: https://lwn.net/Articles/999197/
    title: "LWN: A kernel code of conduct enforcement action (2024-11-23)"
    author: org:lwn
  - id: lwn-headed-out
    resource: https://lwn.net/Articles/1027289/
    title: "LWN: Bcachefs may be headed out of the kernel (Jun 2025)"
    author: org:lwn
  - id: reg-may-drop
    resource: https://www.theregister.com/2025/07/01/bcachefs_may_get_dropped/
    title: "The Register: Bcachefs may be dropped from the Linux kernel (2025-07-01)"
    author: org:the-register
  - id: lwn-removed
    resource: https://lwn.net/Articles/1040120/
    title: "LWN: Bcachefs removed from the mainline kernel (2025-09-30)"
    author: org:lwn
  - id: reg-ai
    resource: https://www.theregister.com/2026/02/25/bcachefs_creator_ai/
    title: "The Register: Bcachefs creator claims his custom LLM is 'fully conscious' (2026-02-25)"
    author: org:the-register
  - id: reg-1386
    resource: https://www.theregister.com/software/2026/06/19/bcachefs-exits-experimental-status-in-new-performance-release/5258801
    title: "The Register: Bcachefs exits experimental status in new 'performance release' (2026-06-19)"
    author: org:the-register
---
# Summary
bcachefs is a governance failure, not a technical one. It was merged in Linux 6.7 (January 2024). Its author then clashed repeatedly with kernel process. In August 2024 Torvalds wrote that "nobody sane uses bcachefs and expects it to be stable".[^lkml-nobody-sane] In November 2024 the Code of Conduct Committee found "written abuse" of another developer, and Overstreet's pull requests were declined for the 6.13 cycle.[^lwn-coc] In late June 2025 Torvalds said the two would be "parting ways in the 6.17 merge window".[^lwn-headed-out][^reg-may-drop] The filesystem was marked "externally maintained" in 6.17, and Torvalds removed the code for **Linux 6.18** on 2025-09-30: "It's now a DKMS module, making the in-kernel code stale."[^lwn-removed] Out of tree it keeps going. Overstreet shipped v1.38.6 "the performance release" on 2026-06-19 and declared it no longer experimental, while converting the code to Rust with an LLM assistant he publicly claims is "fully conscious".[^reg-1386][^reg-ai] Verdict: **declining** in reach. Development is active, but losing mainline status and the author's reputation severely limit adoption.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-23 | CoC Committee / TAB decline Overstreet's pulls for the 6.13 cycle[^lwn-coc] | OSS | − |
| W24 | 2025-06 (late) | Torvalds: "parting ways in the 6.17 merge window"[^lwn-headed-out][^reg-may-drop] | OSS | − |
| W24 | 2025-08 | Marked "externally maintained" in 6.17[^lwn-removed] | OSS | − |
| W24 | 2025-09-30 | Removed from mainline for 6.18; DKMS distribution[^lwn-removed] | OSS | − |
| W9 | 2026-02-25 | Overstreet claims his bcachefs AI assistant is "fully conscious"[^reg-ai] | OSS | − |
| W6 | 2026-06-19 | v1.38.6 "performance release"; experimental tag dropped[^reg-1386] | OSS | + |

# OSS successes
- The project lives on out of tree through DKMS packages for Debian, Ubuntu, Fedora and openSUSE, and is included in Arch and NixOS.[^wiki-bcachefs]
- Technical maturation continues: device limit raised to 255, erasure coding reported working, userspace already in Rust.[^reg-1386]

# OSS failures / risks
- Distributions are dropping it. Debian's tools package was orphaned in August 2024.[^wiki-bcachefs]
- With a single maintainer and public controversy, enterprises are unlikely to adopt it.[^reg-ai]

# Business successes
- n/a (funded through Patreon; amounts not disclosed).[^reg-1386]

# Business failures / risks
- n/a

# By window
## W3
- No notable events found.
## W6
- v1.38.6 released and declared non-experimental (2026-06-19).[^reg-1386]
## W9
- "Fully conscious" LLM claims drew wide criticism (2026-02-25).[^reg-ai]
## W12
- Linux 6.18 (released December 2025) was the first kernel without bcachefs.[^lwn-removed]
## W24
- The conflict escalated (CoC action in Nov 2024, the June 2025 ultimatum) and ended in removal (2025-09-30).[^lwn-coc][^lwn-headed-out][^lwn-removed]

# Lessons
- In community-governed projects, a maintainer's working relationship with the community counts as much as code quality.
- DKMS lets a filesystem survive out of tree, but it does not bring back the trust and distribution reach that mainline status gave.

# Related
- [bcachefs removed](/events/2025-09-bcachefs-removed-from-mainline.md), [Rust for Linux](/projects/security-sustainability/rust-for-linux.md)

[^wiki-bcachefs]: Wikipedia, Bcachefs (distribution packaging details).
[^lkml-nobody-sane]: LKML, Torvalds reply, Aug 2024.
[^lwn-coc]: LWN, 2024-11-23.
[^lwn-headed-out]: LWN, June 2025.
[^reg-may-drop]: The Register, 2025-07-01.
[^lwn-removed]: LWN, 2025-09-30.
[^reg-ai]: The Register, 2026-02-25.
[^reg-1386]: The Register, 2026-06-19.
