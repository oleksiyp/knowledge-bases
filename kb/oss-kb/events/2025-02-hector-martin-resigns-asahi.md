---
type: Event
title: "Asahi Linux lead Hector Martin resigns"
description: "Asahi Linux founder Hector Martin stepped down citing burnout and friction with the Linux kernel community amid Rust-for-Linux disputes."
event_kind: governance
date: 2025-02-13
window: W24
impact: negative
projects: [projects/security-sustainability/rust-for-linux, projects/end-user-apps/asahi-linux]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: asahi-torch
    resource: https://asahilinux.org/2025/02/passing-the-torch/
    title: "Asahi Linux: Passing the torch on Asahi Linux (2025-02-13)"
  - id: lwn-rust-exp
    resource: https://lwn.net/Articles/1049831/
    title: "LWN: The (successful) end of the kernel Rust experiment (2025-12-10)"
  - id: marcan-blog
    resource: https://marcan.st/2025/02/resigning-as-asahi-linux-project-lead/
    title: "Hector Martin: Resigning as Asahi Linux project lead (2025-02-13)"
  - id: asahi-pr71
    resource: https://asahilinux.org/2026/06/progress-report-7-1/
    title: "Asahi Linux progress report: Linux 7.1"
---
# What happened
Hector Martin resigned as Asahi Linux project lead on Feb 13, 2025, a week after stepping down (Feb 7) as upstream kernel maintainer for Apple Silicon. He cited burnout, user demands for M3/M4 support, low donations and friction with the kernel community over Rust-for-Linux.[^marcan-blog] The same day the project announced that a seven-member board would share leadership, and that funding would move from Martin's personal Patreon to Open Collective via the Open Source Collective.[^asahi-torch] (Corrected in pass 2: date now confirmed as 2025-02-13 from primary sources.)

# Why it matters
It was the highest-profile casualty of the Rust-in-kernel culture fight and an example of burnout among maintainers of key projects.

# Outcome so far
Asahi moved to shared governance and Open Collective funding.[^asahi-torch] It kept shipping, but M3 support was still being brought up in mid-2026 (audio and CPU frequency scaling working; no M4 installer).[^asahi-pr71] (Corrected in pass 2: "full M3 support by Sep 2026" → M3 bring-up in progress per the June 2026 progress report.) In Dec 2025 the kernel Maintainers Summit agreed that Rust in the kernel is no longer experimental, which partly vindicated the side Martin had been on.[^lwn-rust-exp]

# Related
- [Rust for Linux](/projects/security-sustainability/rust-for-linux.md)

## Additional notes (end-user-apps)
- Primary source: Martin's own post dated 2025-02-13, following his 2025-02-07 resignation as upstream Apple Silicon maintainer; he cited burnout, user demands for M3/M4 support, low donations and Rust-for-Linux friction[^marcan-blog].
- Follow-up: the project's June 2026 Linux 7.1 progress report shows M3 audio and CPU frequency scaling working, m1n1 1.6.0 requiring Rust, and new contributors on M3 and video decode; the installer did not yet support M4[^asahi-pr71]. (This suggests M3 support was still being brought up in mid-2026.)
- See [Asahi Linux project file](/projects/end-user-apps/asahi-linux.md).

[^marcan-blog]: https://marcan.st/2025/02/resigning-as-asahi-linux-project-lead/
[^asahi-pr71]: https://asahilinux.org/2026/06/progress-report-7-1/

[^asahi-torch]: https://asahilinux.org/2025/02/passing-the-torch/
[^lwn-rust-exp]: https://lwn.net/Articles/1049831/
