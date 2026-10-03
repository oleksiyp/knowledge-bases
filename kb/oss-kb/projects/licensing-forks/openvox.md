---
type: OSS Project
title: OpenVox (Puppet community fork)
description: "Vox Pupuli's Apache-2.0 'soft fork' of Puppet, created after Perforce stopped public open-source packaging and moved development to private forks in late 2024; first release Jan 2025, OpenVox 9.0.0 on Oct 2, 2026 — a modest but real community fork of a declining config-management tool."
resource: https://github.com/OpenVoxProject/openvox
tags: [configuration-management, fork, apache-2.0, community, perforce]
domain: licensing-forks
license: Apache-2.0
license_history: ["Apache-2.0 (fork of Puppet 8.x, 2025-)"]
governance: community
steward: Vox Pupuli / OpenVox Project
backing_orgs: []
metrics:
  github_stars: { value: 191, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: voxpupuli-openvox
    resource: https://voxpupuli.org/openvox/
    title: "Vox Pupuli: OpenVox"
  - id: lwn-openvox
    resource: https://lwn.net/Articles/1005781/
    title: "LWN: Puppet fork OpenVox makes first release (2025-01-22)"
  - id: infoworld-openvox
    resource: https://www.infoworld.com/article/3809889/puppet-open-source-fork-openvox-arrives.html
    title: "InfoWorld: Puppet open source fork OpenVox arrives (2025-01-25)"
  - id: openvox-gh
    resource: https://github.com/OpenVoxProject/openvox
    title: OpenVox GitHub repository (releases)
---

# Summary
OpenVox is the community's answer to Perforce's handling of Puppet. Perforce acquired Puppet in 2022. In late 2024 it stopped public open-source packaging and moved Puppet development to internal forks, so binaries came only under commercial terms.[^voxpupuli-openvox] Vox Pupuli, the long-standing Puppet community collective, announced a fork in December 2024 and shipped OpenVox 8.11 on Jan 22, 2025 as a functionally equivalent drop-in "soft fork".[^lwn-openvox][^infoworld-openvox] On Oct 2, 2026 it released OpenVox 9.0.0, its first major version, after four release candidates.[^openvox-gh] The project set up a "Puppet Standards Steering Committee" and invited Perforce to join.[^voxpupuli-openvox] Verdict: growing, in a shrinking category.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11/12 | Perforce ends public packaging; Vox Pupuli announces fork intent[^voxpupuli-openvox][^lwn-openvox] | OSS | − |
| W24 | 2025-01-22 | OpenVox 8.11 first release (drop-in replacement, not yet production-hardened)[^lwn-openvox] | OSS | + |
| W3 | 2026-09-25/29 | OpenVox 9.0.0 release candidates rc2–rc4[^openvox-gh] | OSS | + |
| W3 | 2026-10-02 | OpenVox 9.0.0 released[^openvox-gh] | OSS | + |

# OSS successes
- An established community organisation (Vox Pupuli maintains hundreds of modules) carried the fork, so it did not depend on a single person.[^voxpupuli-openvox]
- It has reached its first independent major version (9.0.0).[^openvox-gh]

# OSS failures / risks
- Its visible footprint is small (191 GitHub stars on the main repo), and the config-management category is losing ground to Ansible and Kubernetes-native tooling.[^openvox-gh]
- The developers warned early that it was "not yet tested to the same standard" as Puppet.[^lwn-openvox]

# Business successes
- n/a.

# Business failures / risks
- n/a (Perforce's Puppet revenue not disclosed).

# By window
## W3
- OpenVox 9.0.0 (Oct 2, 2026).[^openvox-gh]
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Fork announced (Dec 2024) and first release (Jan 2025).[^lwn-openvox]

# Lessons
- When a private-equity-style owner closes the build pipeline, an existing community organisation can fork within weeks. Without such an organisation, forks rarely happen at all.
- A "soft fork" that stays compatible reduces migration friction and leaves room for reconciliation.

# Related
- [OpenVox first release event](/events/2025-01-openvox-puppet-fork-first-release.md)
- [Bitnami](/projects/licensing-forks/bitnami.md), [MinIO](/projects/licensing-forks/minio.md) — distribution-closing playbook

[^voxpupuli-openvox]: Vox Pupuli — https://voxpupuli.org/openvox/
[^lwn-openvox]: LWN — https://lwn.net/Articles/1005781/
[^infoworld-openvox]: InfoWorld — https://www.infoworld.com/article/3809889/puppet-open-source-fork-openvox-arrives.html
[^openvox-gh]: OpenVox GitHub — https://github.com/OpenVoxProject/openvox
