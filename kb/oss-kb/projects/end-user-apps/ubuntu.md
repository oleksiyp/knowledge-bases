---
type: OSS Project
title: Ubuntu
description: "Canonical's Linux distribution; boldest 'oxidization' push in the distro world (Rust coreutils and sudo-rs by default from 25.10, completed in 26.10), shipped 26.04 LTS on time, but hit early sudo-rs CVEs and a 2026 DDoS."
resource: https://ubuntu.com
tags: [linux-distro, canonical, rust, coreutils, company-led]
domain: end-user-apps
license: various (GPL family, MIT for uutils)
license_history: ["Mixed; uutils coreutils (MIT) replaced GNU coreutils (GPL-3.0) by default from 25.10"]
governance: company-led-open-core
steward: Canonical Ltd
backing_orgs: []
metrics: {}
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: rust-update
    resource: https://discourse.ubuntu.com/t/an-update-on-rust-coreutils/80773
    title: "Ubuntu Discourse: An update on rust-coreutils"
  - id: sudo-docs
    resource: https://ubuntu.com/server/docs/reference/other-tools/sudo-rs/
    title: "Ubuntu Server docs: sudo-rs"
  - id: reg-sudo
    resource: https://forums.theregister.com/forum/all/2025/11/13/ubuntu_rust_sudo_hole/
    title: "The Register: Ubuntu 25.10's Rusty sudo holes quickly welded shut"
    author: org:the-register
  - id: omg-2610
    resource: https://www.omgubuntu.co.uk/2026/09/ubuntu-2610-rust-coreutils-complete
    title: "OMG! Ubuntu: Ubuntu 26.10 completes transition to Rust-based coreutils"
  - id: techtimes
    resource: https://www.techtimes.com/articles/327884/20260923/ubuntu-2610-ships-100-rust-coreutils-audit-found-44-cves-beyond-rusts-scope.htm
    title: "Tech Times: Ubuntu 26.10 ships 100% Rust coreutils; audit found 44 CVEs beyond Rust's scope"
  - id: lts
    resource: https://ubuntu.com/blog/canonical-releases-ubuntu-26-04-lts-resolute-raccoon
    title: "Canonical releases Ubuntu 26.04 LTS Resolute Raccoon"
  - id: lts1
    resource: https://ubuntu.com/blog/upgrade-your-desktop-ubuntu-26-04-lts
    title: "Ubuntu blog: Ubuntu 26.04.1 LTS is now available"
  - id: pwfeedback
    resource: https://pbxscience.com/ubuntu-26-04-ends-46-years-of-silent-sudo-passwords/
    title: "Ubuntu 26.04 ends 46 years of silent sudo passwords"
  - id: ddos
    resource: https://status.canonical.com
    title: "Canonical status page (DDoS incident, May 2026)"
---
# Summary
Ubuntu made the most aggressive memory-safety bet of any major distro: Ubuntu 25.10 (Oct 2025) switched default coreutils to the Rust uutils implementation and sudo to sudo-rs[^rust-update][^sudo-docs]. Two sudo-rs vulnerabilities (USN-7867-1) were disclosed and fixed in Nov 2025[^reg-sudo], and incompatibilities kept cp/mv/rm on GNU in 26.04 LTS due to 8 open TOCTOU issues[^rust-update]. 26.04 LTS "Resolute Raccoon" shipped on 23 April 2026[^lts] (with visible sudo password feedback by default[^pwfeedback]) and 26.04.1 on 30 Sept 2026[^lts1]; Ubuntu 26.10 completes the switch to 100% Rust coreutils, though an audit found 44 CVEs not prevented by Rust's memory safety[^omg-2610][^techtimes]. Canonical services suffered a DDoS in May 2026[^ddos]. Verdict: OSS stable with high-profile modernization; business (Canonical) stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10 | Ubuntu 25.10 ships uutils coreutils + sudo-rs by default[^rust-update] | OSS | + |
| W12 | 2025-11-10/13 | sudo-rs CVEs (USN-7867-1) fixed quickly[^reg-sudo] | OSS | − |
| W6 | 2026-04-23 | Ubuntu 26.04 LTS released; cp/mv/rm held on GNU[^lts][^rust-update] | OSS | + |
| W6 | 2026-05-01 | Canonical/Ubuntu infrastructure under DDoS[^ddos] | Business | − |
| W3 | 2026-09 | 26.10 completes Rust coreutils; audit found 44 non-memory-safety CVEs[^omg-2610][^techtimes] | OSS | mixed |
| W3 | 2026-09-30 | 26.04.1 LTS (desktop upgrade path opens)[^lts1] | OSS | + |

# OSS successes
- Proved that a mainstream distro can replace core GNU tools with Rust in ~1 year.
# OSS failures / risks
- Rewrites introduce new logic bugs (sudo-rs CVEs; TOCTOU in cp/mv/rm)[^reg-sudo][^rust-update]; GPL→MIT replacement of core tools is controversial among free-software advocates.
# Business successes
- On-time LTS delivery; continued enterprise support business (no new public financials verified).
# Business failures / risks
- Infrastructure resilience (May 2026 DDoS)[^ddos].

# By window
## W3
- 26.10 Rust completion; 26.04.1[^omg-2610][^lts1].
## W6
- 26.04 LTS; DDoS[^lts][^ddos].
## W9
- No notable events found.
## W12
- 25.10 Rust switch; sudo-rs CVEs[^rust-update][^reg-sudo].
## W24
- No notable events found specific to Ubuntu beyond planning of oxidization.

# Lessons
- Memory-safe rewrites reduce one bug class but not logic/TOCTOU bugs — staged rollouts with GNU fallbacks were the right call.

# Related
- [GNOME](/projects/end-user-apps/gnome.md), [Arch Linux](/projects/end-user-apps/arch-linux.md)

[^rust-update]: https://discourse.ubuntu.com/t/an-update-on-rust-coreutils/80773
[^sudo-docs]: https://ubuntu.com/server/docs/reference/other-tools/sudo-rs/
[^reg-sudo]: https://forums.theregister.com/forum/all/2025/11/13/ubuntu_rust_sudo_hole/
[^omg-2610]: https://www.omgubuntu.co.uk/2026/09/ubuntu-2610-rust-coreutils-complete
[^techtimes]: https://www.techtimes.com/articles/327884/20260923/ubuntu-2610-ships-100-rust-coreutils-audit-found-44-cves-beyond-rusts-scope.htm
[^lts]: https://ubuntu.com/blog/canonical-releases-ubuntu-26-04-lts-resolute-raccoon
[^lts1]: https://ubuntu.com/blog/upgrade-your-desktop-ubuntu-26-04-lts
[^pwfeedback]: https://pbxscience.com/ubuntu-26-04-ends-46-years-of-silent-sudo-passwords/
[^ddos]: https://status.canonical.com
