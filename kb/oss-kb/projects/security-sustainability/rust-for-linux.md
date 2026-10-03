---
type: OSS Project
title: Rust for Linux
description: "Effort to add Rust to the Linux kernel; survived the Feb 2025 DMA dispute and resignations (Asahi lead Hector Martin) to be declared no longer experimental in Dec 2025, with Linux 7.0 (Apr 2026) the first release shipping Rust as non-experimental."
resource: https://rust-for-linux.com
tags: [linux-kernel, memory-safety, rust, governance, maintainer-burnout]
domain: security-sustainability
license: GPL-2.0-only
license_history: ["GPL-2.0-only"]
governance: community
steward: Linux kernel community
backing_orgs: []
metrics: {}
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lwn-dma
    resource: https://lwn.net/Articles/1006805/
    title: "LWN: Resistance to Rust abstractions for DMA mapping (Jan 2025)"
    author: org:lwn
  - id: reg-cancer
    resource: https://www.theregister.com/software/2025/02/05/mixing-rust-and-c-in-linux-likened-to-cancer-by-maintainer/410756
    title: "The Register: Mixing Rust and C in Linux likened to cancer by maintainer (2025-02-05)"
    author: org:the-register
  - id: lwn-dma-maint
    resource: https://lwn.net/Articles/1011819/
    title: "LWN: A change in maintenance for the kernel's DMA-mapping layer"
    author: org:lwn
  - id: asahi-torch
    resource: https://asahilinux.org/2025/02/passing-the-torch/
    title: "Asahi Linux: Passing the torch (2025-02-13)"
  - id: reg-martin
    resource: https://www.theregister.com/software/2025/02/13/asahi-linux-head-quits-citing-kernel-leadership-failure/1257727
    title: "The Register: Asahi Linux head quits, citing kernel leadership failure (2025-02-13)"
    author: org:the-register
  - id: phoronix-binder
    resource: https://www.phoronix.com/news/Rust-Binder-For-Linux-6.18
    title: "Phoronix: Linux 6.18 expected to land Google's Rust Binder driver"
  - id: collabora-tyr
    resource: https://www.collabora.com/news-and-blog/news-and-events/kernel-618-tyr-advances-rust-in-linux.html
    title: "Collabora: Kernel 6.18: Tyr advances Rust in Linux"
  - id: lwn-end-experiment
    resource: https://lwn.net/Articles/1049831/
    title: "LWN: The (successful) end of the kernel Rust experiment (2025-12-10)"
    author: org:lwn
  - id: ghacks-70
    resource: https://www.ghacks.net/2026/04/13/linux-7-0-released-with-official-rust-support-and-new-code-for-sparc-and-alpha-cpus/
    title: "gHacks: Linux 7.0 released with official Rust support (2026-04-13)"
  - id: asahi-m3
    resource: https://asahilinux.org/2026/09/m2-episode-1/
    title: "Asahi Linux: M2: Episode 1 (or, Asahi Linux on M3) (Sep 2026)"
  - id: reg-asahi-m3
    resource: https://www.theregister.com/os-platforms/2026/09/07/asahi-linux-takes-on-apple-m3-minus-a-few-creature-comforts/5294788
    title: "The Register: Asahi Linux takes on Apple M3, minus a few creature comforts (2026-09-07)"
    author: org:the-register
---
# Summary
Rust for Linux took on the hardest governance fight in OSS, introducing a second language into the kernel against resistance from some maintainers, and won. Verdict: **growing**. Early 2025 was the low point. DMA-mapping maintainer Christoph Hellwig rejected Rust DMA abstractions ("No rust code in kernel/dma, please") and likened a multi-language kernel to "cancer".[^lwn-dma][^reg-cancer] Asahi Linux founder Hector Martin quit as a kernel maintainer, then resigned as Asahi lead on 2025-02-13, calling Torvalds' handling of Rust "a major failure of leadership".[^reg-martin][^asahi-torch] Torvalds then said he would merge the Rust DMA bindings over Hellwig's objections, and Hellwig stepped down as DMA-mapping maintainer.[^lwn-dma-maint] Linux 6.18 (Dec 2025) merged Google's Rust Binder driver and the Tyr Arm Mali GPU driver, and added more of the Nova NVIDIA driver.[^phoronix-binder][^collabora-tyr] At the Tokyo Maintainers Summit (reported by LWN on 2025-12-10), Rust was declared "no longer experimental — it is now a core part of the kernel and is here to stay".[^lwn-end-experiment] Linux 7.0 (2026-04-12) was the first release without the experimental label.[^ghacks-70] Asahi moved to a seven-person shared governance model with Open Source Collective as fiscal sponsor, and shipped M3 support in September 2026.[^asahi-torch][^asahi-m3]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01/02 | Hellwig rejects Rust DMA abstractions; "cancer" remark[^lwn-dma][^reg-cancer] | OSS | − |
| W24 | 2025-02-13 | Hector Martin resigns as Asahi lead; 7-person governance, Open Collective funding[^reg-martin][^asahi-torch] | OSS | − |
| W24 | 2025-02/03 | Torvalds backs Rust DMA bindings; Hellwig steps down as DMA maintainer[^lwn-dma-maint] | OSS | + |
| W12 | 2025-12 | Linux 6.18: Rust Binder, Tyr, more Nova code merged[^phoronix-binder][^collabora-tyr] | OSS | + |
| W12 | 2025-12-10 | Maintainers Summit: Rust "no longer experimental"[^lwn-end-experiment] | OSS | + |
| W6 | 2026-04-12 | Linux 7.0 ships with Rust no longer marked experimental[^ghacks-70] | OSS | + |
| W3 | 2026-09-06 | Asahi Linux announces M3/M3 Pro/M3 Max support (no GPU or M3 Ultra yet)[^asahi-m3][^reg-asahi-m3] | OSS | + |

# OSS successes
- Memory-safe drivers are now officially supported in the most important OSS codebase.[^lwn-end-experiment][^ghacks-70]
- Large real-world Rust drivers (Android Binder, Mali GPU) were merged in 6.18.[^phoronix-binder][^collabora-tyr]
- Asahi survived losing its founder through shared governance.[^asahi-torch][^reg-asahi-m3]

# OSS failures / risks
- Many maintainers burned out, and contributors who resigned did not come back. Both Martin and Hellwig left their roles in early 2025.[^reg-martin][^lwn-dma-maint]

# Business successes
- Corporate investment is visible: Google wrote the Rust Binder driver, and Collabora built Tyr with Google and Arm.[^phoronix-binder][^collabora-tyr]

# Business failures / risks
- n/a

# By window
## W3
- Asahi added M3 support (2026-09-06).[^asahi-m3]
## W6
- Linux 7.0 released with Rust non-experimental (2026-04-12).[^ghacks-70]
## W9
- No notable events verified.
## W12
- Rust Binder and Tyr merged in 6.18; Rust declared no longer experimental.[^phoronix-binder][^lwn-end-experiment]
## W24
- DMA dispute; Martin and Hellwig stepped down.[^reg-cancer][^reg-martin][^lwn-dma-maint]

# Lessons
- Big technical transitions in community projects succeed when the top leadership (Torvalds) explicitly backs them, but people get worn down along the way.
- Corporate-backed flagship drivers (Binder) help a second language get accepted more than arguments do.

# Related
- [Hector Martin resigns](/events/2025-02-hector-martin-resigns-asahi.md), [bcachefs](/projects/security-sustainability/bcachefs.md)

[^lwn-dma]: LWN, Jan 2025.
[^reg-cancer]: The Register, 2025-02-05.
[^lwn-dma-maint]: LWN, DMA-mapping maintenance change.
[^asahi-torch]: Asahi Linux blog, 2025-02-13.
[^reg-martin]: The Register, 2025-02-13.
[^phoronix-binder]: Phoronix.
[^collabora-tyr]: Collabora blog.
[^lwn-end-experiment]: LWN, 2025-12-10.
[^ghacks-70]: gHacks, 2026-04-13.
[^asahi-m3]: Asahi Linux blog, Sep 2026.
[^reg-asahi-m3]: The Register, 2026-09-07.
