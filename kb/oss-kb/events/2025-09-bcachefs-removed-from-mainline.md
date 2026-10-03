---
type: Event
title: "bcachefs removed from the mainline Linux kernel"
description: "After repeated process and conduct disputes, Linus Torvalds removed bcachefs starting with Linux 6.18; it continues as a DKMS module."
event_kind: governance
date: 2025-09-30
window: W24
impact: negative
projects: [projects/security-sustainability/bcachefs]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lwn-bcachefs
    resource: https://lwn.net/Articles/1040120/
    title: "LWN: Bcachefs removed from the mainline kernel (2025-09-30; commit f2c61db29f27)"
  - id: phoronix-bcachefs
    resource: https://www.phoronix.com/news/Bcachefs-Removed-Linux-6.18
    title: "Phoronix: Linus Torvalds removes the bcachefs code from the Linux kernel (6.18)"
  - id: linuxiac-617
    resource: https://linuxiac.com/torvalds-drops-bcachefs-from-linux-6-17-amid-maintainer-dispute/
    title: "Linuxiac: Torvalds drops bcachefs from Linux 6.17 amid maintainer dispute"
---
# What happened
After repeated clashes with maintainer Kent Overstreet over late bug-fix pulls, Torvalds said in mid-2025 that he would not take bcachefs changes in the 6.17 merge window, and bcachefs was marked "externally maintained" for 6.17.[^linuxiac-617] Overstreet moved to DKMS distribution. On Sept 30, 2025, in the 6.18 merge window, Torvalds removed the code (commit f2c61db29f27): "It's now a DKMS module, making the in-kernel code stale, so remove it to avoid any version confusion."[^lwn-bcachefs][^phoronix-bcachefs] (Corrected in pass 2: date 2025-09-29 (approximate) → 2025-09-30.)

# Why it matters
A rare example of an entire filesystem being expelled over governance and behavior rather than code quality.

# Outcome so far
Continues out of tree with reduced distribution support.

# Related
- [bcachefs](/projects/security-sustainability/bcachefs.md)

[^lwn-bcachefs]: LWN — https://lwn.net/Articles/1040120/
[^phoronix-bcachefs]: Phoronix — https://www.phoronix.com/news/Bcachefs-Removed-Linux-6.18
[^linuxiac-617]: Linuxiac — https://linuxiac.com/torvalds-drops-bcachefs-from-linux-6-17-amid-maintainer-dispute/
